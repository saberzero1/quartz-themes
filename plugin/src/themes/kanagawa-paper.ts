import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "kanagawa-paper",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["hack"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --autumnGreen: #76946A !important;
  --autumnRed: #C34043 !important;
  --autumnYellow: #DCA561 !important;
  --background-modifier-border: #8ba4b0 !important;
  --background-primary: #181616 !important;
  --background-primary-alt: #181616 !important;
  --background-secondary: #1D1C19 !important;
  --background-secondary-alt: #282727 !important;
  --bases-cards-background: #181616 !important;
  --bases-cards-cover-background: #181616 !important;
  --bases-cards-shadow: 0 0 0 1px #8ba4b0 !important;
  --bases-embed-border-color: #8ba4b0 !important;
  --bases-table-border-color: #8ba4b0 !important;
  --bases-table-cell-background-active: #181616 !important;
  --bases-table-cell-background-disabled: #181616 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #8ba4b0 !important;
  --bases-table-group-background: #181616 !important;
  --bases-table-header-background: #181616 !important;
  --bases-table-summary-background: #181616 !important;
  --blockquote-border-color: #8ba4b0 !important;
  --boatYellow1: #938056 !important;
  --boatYellow2: #C0A36E !important;
  --bodyFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #c5c9c5 !important;
  --canvas-background: #181616 !important;
  --canvas-card-label-color: #9e9b93 !important;
  --caret-color: #c5c9c5 !important;
  --carpYellow: #E6C384 !important;
  --checkbox-border-color: #9e9b93 !important;
  --checkbox-color: #8ba4b0 !important;
  --checkbox-marker-color: #181616 !important;
  --code-background: #181616 !important;
  --code-block: #9e9b93 !important;
  --code-border-color: #8ba4b0 !important;
  --code-comment: #9e9b93 !important;
  --code-normal: #c5c9c5 !important;
  --codeFont: Hack Nerd Font, Source Code Pro, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #9e9b93 !important;
  --collapse-icon-color-collapsed: #87a987 !important;
  --crystalBlue: #7E9CD8 !important;
  --dark: #c5c9c5 !important;
  --darkgray: #c5c9c5 !important;
  --divider-color: #8ba4b0 !important;
  --divider-color-hover: #8ba4b0 !important;
  --dragonAqua: #8ea4a2 !important;
  --dragonAsh: #737c73 !important;
  --dragonBlack0: #0d0c0c !important;
  --dragonBlack1: #12120f !important;
  --dragonBlack2: #1D1C19 !important;
  --dragonBlack3: #181616 !important;
  --dragonBlack4: #282727 !important;
  --dragonBlack5: #393836 !important;
  --dragonBlack6: #625e5a !important;
  --dragonBlue: #658594 !important;
  --dragonBlue2: #8ba4b0 !important;
  --dragonGray: #a6a69c !important;
  --dragonGray2: #9e9b93 !important;
  --dragonGray3: #7a8382 !important;
  --dragonGreen: #87a987 !important;
  --dragonGreen2: #8a9a7b !important;
  --dragonOrange: #b6927b !important;
  --dragonOrange2: #b98d7b !important;
  --dragonPink: #a292a3 !important;
  --dragonRed: #c4746e !important;
  --dragonTeal: #949fb5 !important;
  --dragonViolet: #8992a7 !important;
  --dragonWhite: #c5c9c5 !important;
  --dragonYellow: #c4b28a !important;
  --embed-block-shadow-hover: 0 0 0 1px #8ba4b0, inset 0 0 0 1px #8ba4b0 !important;
  --embed-border-start: 2px solid #8ba4b0 !important;
  --file-header-background: #181616 !important;
  --file-header-background-focused: #181616 !important;
  --flair-color: #c5c9c5 !important;
  --font-mermaid: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: Hack Nerd Font, Source Code Pro, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace !important;
  --font-print: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Arial' !important;
  --font-text: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji !important;
  --footnote-divider-color: #8ba4b0 !important;
  --footnote-id-color-no-occurrences: #9e9b93 !important;
  --fujiGray: #727169 !important;
  --fujiWhite: #DCD7BA !important;
  --graph-node-focused: #87a987 !important;
  --graph-node-unresolved: #9e9b93 !important;
  --graph-text: #c5c9c5 !important;
  --gray: #9e9b93 !important;
  --headerFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #9e9b93 !important;
  --highlight: #393836 !important;
  --hr-color: #8ba4b0 !important;
  --icon-color-active: #87a987 !important;
  --icon-color-focused: #c5c9c5 !important;
  --inline-code: #87a987 !important;
  --input-date-separator: #9e9b93 !important;
  --input-placeholder-color: #9e9b93 !important;
  --interactive-accent: #8ba4b0 !important;
  --interactive-accent-rgb: #8a9a7b !important;
  --interactive-before: #625e5a !important;
  --katanaGray: #717C7C !important;
  --light: #181616 !important;
  --lightBlue: #A3D4D5 !important;
  --lightgray: #1D1C19 !important;
  --link-color: #87a987 !important;
  --link-external-color: #87a987 !important;
  --link-unresolved-color: #87a987 !important;
  --list-marker-color: #9e9b93 !important;
  --list-marker-color-collapsed: #87a987 !important;
  --lotusGray: #dcd7ba !important;
  --lotusGray2: #716e61 !important;
  --lotusGray3: #8a8980 !important;
  --lotusInk0: #3d3d5e !important;
  --lotusInk1: #545464 !important;
  --lotusInk2: #43436c !important;
  --lotusWhite0: #d5cea3 !important;
  --lotusWhite1: #dcd5ac !important;
  --lotusWhite2: #e5ddb0 !important;
  --lotusWhite3: #f2ecbc !important;
  --lotusWhite4: #e7dba0 !important;
  --lotusWhite5: #e4d794 !important;
  --menu-background: #1D1C19 !important;
  --metadata-border-color: #8ba4b0 !important;
  --metadata-divider-color: #8ba4b0 !important;
  --metadata-input-text-color: #c5c9c5 !important;
  --modal-background: #181616 !important;
  --nav-collapse-icon-color: #9e9b93 !important;
  --nav-collapse-icon-color-collapsed: #9e9b93 !important;
  --nav-heading-color: #c5c9c5 !important;
  --nav-heading-color-collapsed: #9e9b93 !important;
  --nav-heading-color-hover: #c5c9c5 !important;
  --nav-item-color-active: #c5c9c5 !important;
  --nav-item-color-highlighted: #87a987 !important;
  --nav-item-color-hover: #c5c9c5 !important;
  --nav-item-color-selected: #c5c9c5 !important;
  --nav-tag-color: #9e9b93 !important;
  --oldWhite: #C8C093 !important;
  --oniViolet: #957FB8 !important;
  --oniViolet2: #b8b4d0 !important;
  --pdf-background: #181616 !important;
  --pdf-page-background: #181616 !important;
  --pdf-shadow: 0 0 0 1px #8ba4b0 !important;
  --pdf-sidebar-background: #181616 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #8ba4b0 !important;
  --peachRed: #FF5D62 !important;
  --pill-border-color: #8ba4b0 !important;
  --pill-color-hover: #c5c9c5 !important;
  --pill-color-remove: #9e9b93 !important;
  --pill-color-remove-hover: #87a987 !important;
  --pre-code: #0d0c0c !important;
  --prompt-background: #181616 !important;
  --ribbon-background: #1D1C19 !important;
  --ribbon-background-collapsed: #181616 !important;
  --roninYellow: #FF9E3B !important;
  --sakuraPink: #D27E99 !important;
  --samuraiRed: #E82424 !important;
  --search-result-background: #181616 !important;
  --secondary: #87a987 !important;
  --setting-group-heading-color: #c5c9c5 !important;
  --setting-items-background: #181616 !important;
  --setting-items-border-color: #8ba4b0 !important;
  --slider-track-background: #8ba4b0 !important;
  --springBlue: #7FB4CA !important;
  --springGreen: #98BB6C !important;
  --springViolet1: #938AA9 !important;
  --springViolet2: #9CABCA !important;
  --status-bar-background: #1D1C19 !important;
  --status-bar-border-color: #8ba4b0 !important;
  --suggestion-background: #181616 !important;
  --sumiInk0: #16161D !important;
  --sumiInk1: #181820 !important;
  --sumiInk2: #1a1a22 !important;
  --sumiInk3: #1F1F28 !important;
  --sumiInk4: #2A2A37 !important;
  --sumiInk5: #363646 !important;
  --sumiInk6: #54546D !important;
  --surimiOrange: #FFA066 !important;
  --tab-background-active: #181616 !important;
  --tab-container-background: #1D1C19 !important;
  --tab-outline-color: #8ba4b0 !important;
  --tab-switcher-background: #1D1C19 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1D1C19, transparent) !important;
  --tab-text-color: #9e9b93 !important;
  --tab-text-color-focused-active-current: #c5c9c5 !important;
  --tab-text-color-focused-highlighted: #87a987 !important;
  --table-add-button-border-color: #8ba4b0 !important;
  --table-border-color: #8ba4b0 !important;
  --table-drag-handle-background-active: #8ba4b0 !important;
  --table-drag-handle-color: #9e9b93 !important;
  --table-header: #282727 !important;
  --table-header-border-color: #8ba4b0 !important;
  --table-header-color: #c5c9c5 !important;
  --table-hover: #282727 !important;
  --table-row-even: #1D1C19 !important;
  --table-row-odd: #181616 !important;
  --table-selection-border-color: #8ba4b0 !important;
  --tag-color: #87a987 !important;
  --tag-color-hover: #87a987 !important;
  --task-checkbox: #625e5a !important;
  --tertiary: #87a987 !important;
  --text-a: #949fb5 !important;
  --text-a-hover: #a292a3 !important;
  --text-a-url: #949fb5 !important;
  --text-accent: #87a987 !important;
  --text-faint: #9e9b93 !important;
  --text-highlight-bg: #393836 !important;
  --text-link: #8ba4b0 !important;
  --text-mark: rgba(139, 164, 176, 0.4) !important;
  --text-normal: #c5c9c5 !important;
  --text-selection: rgba(139, 164, 176, 0.5) !important;
  --text-tag: #8992a7 !important;
  --text-title-h1: #c4746e !important;
  --text-title-h2: #b6927b !important;
  --text-title-h3: #c4b28a !important;
  --text-title-h4: #87a987 !important;
  --text-title-h5: #8ea4a2 !important;
  --text-title-h6: #8ba4b0 !important;
  --textHighlight: #393836 !important;
  --titleFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #1D1C19 !important;
  --titlebar-background-focused: #282727 !important;
  --titlebar-border-color: #8ba4b0 !important;
  --titlebar-text-color-focused: #c5c9c5 !important;
  --vault-profile-color: #c5c9c5 !important;
  --vault-profile-color-hover: #c5c9c5 !important;
  --vim-cursor-background: #c5c9c5 !important;
  --vim-cursor-color: #181616 !important;
  --waveAqua1: #6A9589 !important;
  --waveAqua2: #7AA89F !important;
  --waveBlue1: #223249 !important;
  --waveBlue2: #2D4F67 !important;
  --waveRed: #E46876 !important;
  --winterBlue: #252535 !important;
  --winterGreen: #2B3328 !important;
  --winterRed: #43242B !important;
  --winterYellow: #49443C !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(29, 28, 25);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(24, 22, 22);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(29, 28, 25);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(40, 39, 39);
  border-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(29, 28, 25);
  border-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(139, 164, 176);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(135, 169, 135);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(29, 28, 25);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(139, 164, 176);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(29, 28, 25);
  border-left-color: rgb(139, 164, 176);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(24, 22, 22);
  color: rgb(197, 201, 197);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(197, 201, 197);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 201, 197) none 0px;
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(197, 201, 197);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 201, 197) none 0px;
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(197, 201, 197);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 201, 197) none 0px;
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(197, 201, 197);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 201, 197) none 0px;
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(57, 56, 54);
  color: rgb(197, 201, 197);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 201, 197) none 0px;
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body del {
  color: rgb(197, 201, 197);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 201, 197) none 0px;
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(158, 155, 147);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(98, 94, 90);
  border-color: rgb(139, 164, 176);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(148, 159, 181);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(148, 159, 181) none 0px;
  text-decoration-color: rgb(148, 159, 181);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(148, 159, 181);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(148, 159, 181) none 0px;
  text-decoration-color: rgb(148, 159, 181);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(148, 159, 181);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(148, 159, 181) none 0px;
  text-decoration-color: rgb(148, 159, 181);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body dt {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(148, 159, 181);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(29, 28, 25);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(29, 28, 25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(29, 28, 25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(29, 28, 25);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(197, 201, 197);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.062px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(29, 28, 25);
  border-left-color: rgb(197, 201, 197);
  border-left-width: 0px;
  border-right-color: rgb(197, 201, 197);
  border-right-width: 0px;
  border-top-color: rgb(139, 164, 176);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body th {
  background-color: rgb(40, 39, 39);
  border-bottom-color: rgb(197, 201, 197);
  border-bottom-width: 0px;
  border-left-color: rgb(197, 201, 197);
  border-left-width: 0px;
  border-right-color: rgb(197, 201, 197);
  border-right-width: 0px;
  border-top-color: rgb(197, 201, 197);
  border-top-width: 0px;
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(139, 164, 176);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(29, 28, 25);
  border-right-color: rgb(29, 28, 25);
  border-top-color: rgb(29, 28, 25);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(139, 164, 176);
  border-left-color: rgb(29, 28, 25);
  border-right-color: rgb(29, 28, 25);
  border-top-color: rgb(29, 28, 25);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(13, 12, 12);
  border-bottom-color: rgb(158, 155, 147);
  border-left-color: rgb(158, 155, 147);
  border-right-color: rgb(158, 155, 147);
  border-top-color: rgb(158, 155, 147);
  color: rgb(158, 155, 147);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(13, 12, 12);
  border-bottom-color: rgb(139, 164, 176);
  border-left-color: rgb(139, 164, 176);
  border-right-color: rgb(139, 164, 176);
  border-top-color: rgb(139, 164, 176);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(13, 12, 12);
  border-bottom-color: rgb(139, 164, 176);
  border-left-color: rgb(139, 164, 176);
  border-right-color: rgb(139, 164, 176);
  border-top-color: rgb(139, 164, 176);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(13, 12, 12);
  border-bottom-color: rgb(139, 164, 176);
  border-left-color: rgb(139, 164, 176);
  border-right-color: rgb(139, 164, 176);
  border-top-color: rgb(139, 164, 176);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(13, 12, 12);
  border-bottom-color: rgb(139, 164, 176);
  border-left-color: rgb(139, 164, 176);
  border-right-color: rgb(139, 164, 176);
  border-top-color: rgb(139, 164, 176);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(197, 201, 197);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(196, 116, 110);
  border-left-color: rgb(196, 116, 110);
  border-right-color: rgb(196, 116, 110);
  border-top-color: rgb(196, 116, 110);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(24, 22, 22);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(139, 164, 176);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(98, 94, 90);
  border-left-color: rgb(98, 94, 90);
  border-right-color: rgb(98, 94, 90);
  border-top-color: rgb(98, 94, 90);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-color: rgb(139, 164, 176);
  border-left-color: rgb(139, 164, 176);
  border-right-color: rgb(139, 164, 176);
  border-top-color: rgb(139, 164, 176);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(24, 22, 22);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(197, 201, 197);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 201, 197) none 0px;
  text-decoration-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(29, 28, 25);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 28, 25);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(29, 28, 25);
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(29, 28, 25);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(135, 169, 135);
}

html[saved-theme="dark"] body h1 {
  color: rgb(196, 116, 110);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(182, 146, 123);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(197, 201, 197);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(196, 178, 138);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(135, 169, 135);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(142, 164, 162);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(139, 164, 176);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(139, 164, 176);
  border-left-color: rgb(139, 164, 176);
  border-right-color: rgb(139, 164, 176);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(24, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 22, 22);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(24, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 22, 22);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(24, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 22, 22);
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(24, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 22, 22);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(24, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 22, 22);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(24, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 22, 22);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(197, 201, 197);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(29, 28, 25);
  border-bottom-color: rgb(139, 164, 176);
  border-left-color: rgb(139, 164, 176);
  border-right-color: rgb(139, 164, 176);
  border-top-color: rgb(139, 164, 176);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(158, 155, 147);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(139, 164, 176);
  border-left-color: rgb(139, 164, 176);
  border-right-color: rgb(139, 164, 176);
  border-top-color: rgb(139, 164, 176);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(29, 28, 25);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body abbr {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(24, 22, 22);
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body sub {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body summary {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body sup {
  color: rgb(197, 201, 197);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(40, 39, 39);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(137, 146, 167);
}`,
  },
  light: {
    base: `:root:root {
  --autumnGreen: #76946A !important;
  --autumnRed: #C34043 !important;
  --autumnYellow: #DCA561 !important;
  --background-primary: #f2ecbc !important;
  --background-primary-alt: #e7dba0 !important;
  --background-secondary: #dcd5ac !important;
  --background-secondary-alt: #e5ddb0 !important;
  --bases-cards-background: #f2ecbc !important;
  --bases-cards-cover-background: #e7dba0 !important;
  --bases-table-cell-background-active: #f2ecbc !important;
  --bases-table-cell-background-disabled: #e7dba0 !important;
  --bases-table-group-background: #e7dba0 !important;
  --bases-table-header-background: #f2ecbc !important;
  --bases-table-summary-background: #f2ecbc !important;
  --blur-background: color-mix(in srgb, #f2ecbc 65%, transparent) linear-gradient(#f2ecbc, color-mix(in srgb, #f2ecbc 65%, transparent)) !important;
  --boatYellow1: #938056 !important;
  --boatYellow2: #C0A36E !important;
  --bodyFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #545464 !important;
  --canvas-background: #f2ecbc !important;
  --canvas-card-label-color: #8a8980 !important;
  --caret-color: #545464 !important;
  --carpYellow: #E6C384 !important;
  --checkbox-border-color: #8a8980 !important;
  --checkbox-marker-color: #f2ecbc !important;
  --code-background: #e7dba0 !important;
  --code-block: #8a8980 !important;
  --code-comment: #8a8980 !important;
  --code-normal: #545464 !important;
  --codeFont: Hack Nerd Font, Source Code Pro, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #8a8980 !important;
  --crystalBlue: #7E9CD8 !important;
  --dark: #545464 !important;
  --darkgray: #545464 !important;
  --dragonAqua: #8ea4a2 !important;
  --dragonAsh: #737c73 !important;
  --dragonBlack0: #0d0c0c !important;
  --dragonBlack1: #12120f !important;
  --dragonBlack2: #1D1C19 !important;
  --dragonBlack3: #181616 !important;
  --dragonBlack4: #282727 !important;
  --dragonBlack5: #393836 !important;
  --dragonBlack6: #625e5a !important;
  --dragonBlue: #658594 !important;
  --dragonBlue2: #8ba4b0 !important;
  --dragonGray: #a6a69c !important;
  --dragonGray2: #9e9b93 !important;
  --dragonGray3: #7a8382 !important;
  --dragonGreen: #87a987 !important;
  --dragonGreen2: #8a9a7b !important;
  --dragonOrange: #b6927b !important;
  --dragonOrange2: #b98d7b !important;
  --dragonPink: #a292a3 !important;
  --dragonRed: #c4746e !important;
  --dragonTeal: #949fb5 !important;
  --dragonViolet: #8992a7 !important;
  --dragonWhite: #c5c9c5 !important;
  --dragonYellow: #c4b28a !important;
  --file-header-background: #f2ecbc !important;
  --file-header-background-focused: #f2ecbc !important;
  --flair-color: #545464 !important;
  --font-mermaid: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: Hack Nerd Font, Source Code Pro, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace !important;
  --font-print: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Arial' !important;
  --font-text: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji !important;
  --footnote-id-color-no-occurrences: #8a8980 !important;
  --fujiGray: #727169 !important;
  --fujiWhite: #DCD7BA !important;
  --graph-node-unresolved: #8a8980 !important;
  --graph-text: #545464 !important;
  --gray: #8a8980 !important;
  --headerFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #8a8980 !important;
  --icon-color-focused: #545464 !important;
  --input-date-separator: #8a8980 !important;
  --input-placeholder-color: #8a8980 !important;
  --interactive-before: #716e61 !important;
  --katanaGray: #717C7C !important;
  --light: #f2ecbc !important;
  --lightBlue: #A3D4D5 !important;
  --lightgray: #dcd5ac !important;
  --list-marker-color: #8a8980 !important;
  --lotusGray: #dcd7ba !important;
  --lotusGray2: #716e61 !important;
  --lotusGray3: #8a8980 !important;
  --lotusInk0: #3d3d5e !important;
  --lotusInk1: #545464 !important;
  --lotusInk2: #43436c !important;
  --lotusWhite0: #d5cea3 !important;
  --lotusWhite1: #dcd5ac !important;
  --lotusWhite2: #e5ddb0 !important;
  --lotusWhite3: #f2ecbc !important;
  --lotusWhite4: #e7dba0 !important;
  --lotusWhite5: #e4d794 !important;
  --menu-background: #dcd5ac !important;
  --metadata-input-text-color: #545464 !important;
  --modal-background: #f2ecbc !important;
  --nav-collapse-icon-color: #8a8980 !important;
  --nav-collapse-icon-color-collapsed: #8a8980 !important;
  --nav-heading-color: #545464 !important;
  --nav-heading-color-collapsed: #8a8980 !important;
  --nav-heading-color-hover: #545464 !important;
  --nav-item-color-active: #545464 !important;
  --nav-item-color-hover: #545464 !important;
  --nav-item-color-selected: #545464 !important;
  --nav-tag-color: #8a8980 !important;
  --oldWhite: #C8C093 !important;
  --oniViolet: #957FB8 !important;
  --oniViolet2: #b8b4d0 !important;
  --pdf-background: #f2ecbc !important;
  --pdf-page-background: #f2ecbc !important;
  --pdf-sidebar-background: #f2ecbc !important;
  --peachRed: #FF5D62 !important;
  --pill-color-hover: #545464 !important;
  --pill-color-remove: #8a8980 !important;
  --pre-code: #dcd7ba !important;
  --prompt-background: #f2ecbc !important;
  --raised-background: color-mix(in srgb, #f2ecbc 65%, transparent) linear-gradient(#f2ecbc, color-mix(in srgb, #f2ecbc 65%, transparent)) !important;
  --ribbon-background: #dcd5ac !important;
  --ribbon-background-collapsed: #f2ecbc !important;
  --roninYellow: #FF9E3B !important;
  --sakuraPink: #D27E99 !important;
  --samuraiRed: #E82424 !important;
  --search-result-background: #f2ecbc !important;
  --setting-group-heading-color: #545464 !important;
  --setting-items-background: #e7dba0 !important;
  --springBlue: #7FB4CA !important;
  --springGreen: #98BB6C !important;
  --springViolet1: #938AA9 !important;
  --springViolet2: #9CABCA !important;
  --status-bar-background: #dcd5ac !important;
  --suggestion-background: #f2ecbc !important;
  --sumiInk0: #16161D !important;
  --sumiInk1: #181820 !important;
  --sumiInk2: #1a1a22 !important;
  --sumiInk3: #1F1F28 !important;
  --sumiInk4: #2A2A37 !important;
  --sumiInk5: #363646 !important;
  --sumiInk6: #54546D !important;
  --surimiOrange: #FFA066 !important;
  --tab-background-active: #f2ecbc !important;
  --tab-container-background: #dcd5ac !important;
  --tab-switcher-background: #dcd5ac !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #dcd5ac, transparent) !important;
  --tab-text-color: #8a8980 !important;
  --tab-text-color-focused-active-current: #545464 !important;
  --table-drag-handle-color: #8a8980 !important;
  --table-header: hsl(42, 33%, 91%) !important;
  --table-header-color: #545464 !important;
  --table-hover: #dcd5ac !important;
  --table-row-even: hsl(42, 35%, 94%) !important;
  --table-row-odd: hsl(42, 37%, 97%) !important;
  --task-checkbox: #716e61 !important;
  --text-faint: #8a8980 !important;
  --text-mark: rgba(183, 208, 174, 0.4) !important;
  --text-normal: #545464 !important;
  --text-selection: rgba(183, 208, 174, 0.5) !important;
  --titleFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #dcd5ac !important;
  --titlebar-background-focused: #e5ddb0 !important;
  --titlebar-text-color-focused: #545464 !important;
  --vault-profile-color: #545464 !important;
  --vault-profile-color-hover: #545464 !important;
  --vim-cursor-background: #dcd7ba !important;
  --vim-cursor-color: #545464 !important;
  --waveAqua1: #6A9589 !important;
  --waveAqua2: #7AA89F !important;
  --waveBlue1: #223249 !important;
  --waveBlue2: #2D4F67 !important;
  --waveRed: #E46876 !important;
  --winterBlue: #252535 !important;
  --winterGreen: #2B3328 !important;
  --winterRed: #43242B !important;
  --winterYellow: #49443C !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(220, 213, 172);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(242, 236, 188);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .bases-table {
  border-color: rgb(220, 213, 172);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(240, 235, 224);
  border-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(242, 236, 188);
  border-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(92, 92, 92);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(220, 213, 172);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(220, 213, 172);
  border-left-color: rgb(128, 128, 128);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(242, 236, 188);
  color: rgb(84, 84, 100);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 84, 100) none 0px;
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 84, 100) none 0px;
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 84, 100) none 0px;
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 84, 100) none 0px;
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 84, 100) none 0px;
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body del {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 84, 100) none 0px;
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(138, 137, 128);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(113, 110, 97);
  border-color: rgb(0, 0, 0);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 84, 100) none 0px;
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 84, 100) none 0px;
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 84, 100) none 0px;
  text-decoration-color: rgb(84, 84, 100);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body dt {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body ol > li {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body ul > li {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body table {
  border-bottom-color: rgb(220, 213, 172);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(220, 213, 172);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(220, 213, 172);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(220, 213, 172);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.062px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(220, 213, 172);
  border-left-color: rgb(84, 84, 100);
  border-left-width: 0px;
  border-right-color: rgb(84, 84, 100);
  border-right-width: 0px;
  border-top-color: rgb(84, 84, 100);
  border-top-width: 0px;
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body th {
  background-color: rgb(240, 235, 224);
  border-bottom-color: rgb(84, 84, 100);
  border-bottom-width: 0px;
  border-left-color: rgb(84, 84, 100);
  border-left-width: 0px;
  border-right-color: rgb(84, 84, 100);
  border-right-width: 0px;
  border-top-color: rgb(84, 84, 100);
  border-top-width: 0px;
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(220, 213, 172);
  border-right-color: rgb(220, 213, 172);
  border-top-color: rgb(220, 213, 172);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(220, 213, 172);
  border-right-color: rgb(220, 213, 172);
  border-top-color: rgb(220, 213, 172);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(220, 215, 186);
  border-bottom-color: rgb(138, 137, 128);
  border-left-color: rgb(138, 137, 128);
  border-right-color: rgb(138, 137, 128);
  border-top-color: rgb(138, 137, 128);
  color: rgb(138, 137, 128);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(220, 215, 186);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(220, 215, 186);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(220, 215, 186);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(220, 215, 186);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body figcaption {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(231, 219, 160);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-left-width: 0px;
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(113, 110, 97);
  border-left-color: rgb(113, 110, 97);
  border-right-color: rgb(113, 110, 97);
  border-top-color: rgb(113, 110, 97);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgb(84, 84, 100);
  border-bottom-width: 0px;
  border-left-color: rgb(84, 84, 100);
  border-left-width: 0px;
  border-right-color: rgb(84, 84, 100);
  border-right-width: 0px;
  border-top-color: rgb(84, 84, 100);
  border-top-width: 0px;
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(242, 236, 188);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 84, 100) none 0px;
  text-decoration-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(220, 213, 172);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(220, 213, 172);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(220, 213, 172);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(220, 213, 172);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body h1 {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(242, 236, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 236, 188);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(242, 236, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 236, 188);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(242, 236, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 236, 188);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(242, 236, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 236, 188);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(242, 236, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 236, 188);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(242, 236, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 236, 188);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(84, 84, 100);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(220, 213, 172);
  border-bottom-color: rgb(92, 92, 92);
  border-left-color: rgb(92, 92, 92);
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(138, 137, 128);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(92, 92, 92);
  border-left-color: rgb(92, 92, 92);
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(220, 213, 172);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body abbr {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(231, 219, 160);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body sub {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body summary {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body sup {
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(229, 221, 176);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(84, 84, 100);
}`,
  },
};
