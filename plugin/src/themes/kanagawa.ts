import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "kanagawa",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["hack"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --autumnGreen: #76946A !important;
  --autumnRed: #C34043 !important;
  --autumnYellow: #DCA561 !important;
  --background-modifier-border: #658594 !important;
  --background-primary: #1F1F28 !important;
  --background-primary-alt: #1F1F28 !important;
  --background-secondary: #181820 !important;
  --background-secondary-alt: #2A2A37 !important;
  --bases-cards-background: #1F1F28 !important;
  --bases-cards-cover-background: #1F1F28 !important;
  --bases-cards-shadow: 0 0 0 1px #658594 !important;
  --bases-embed-border-color: #658594 !important;
  --bases-table-border-color: #658594 !important;
  --bases-table-cell-background-active: #1F1F28 !important;
  --bases-table-cell-background-disabled: #1F1F28 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #658594 !important;
  --bases-table-group-background: #1F1F28 !important;
  --bases-table-header-background: #1F1F28 !important;
  --bases-table-summary-background: #1F1F28 !important;
  --blockquote-border-color: #658594 !important;
  --boatYellow1: #938056 !important;
  --boatYellow2: #C0A36E !important;
  --bodyFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #ebdbb2 !important;
  --bright-aqua: #8ec07c !important;
  --bright-blue: #83a598 !important;
  --bright-green: #b8bb26 !important;
  --bright-orange: #fe8019 !important;
  --bright-purple: #d3869b !important;
  --bright-red: #fb4934 !important;
  --bright-yellow: #fabd2f !important;
  --canvas-background: #1F1F28 !important;
  --canvas-card-label-color: #727169 !important;
  --caret-color: #DCD7BA !important;
  --carpYellow: #E6C384 !important;
  --checkbox-border-color: #727169 !important;
  --checkbox-color: #658594 !important;
  --checkbox-marker-color: #1F1F28 !important;
  --code-background: #1F1F28 !important;
  --code-block: #727169 !important;
  --code-border-color: #658594 !important;
  --code-comment: #727169 !important;
  --code-normal: #DCD7BA !important;
  --codeFont: Hack Nerd Font, Source Code Pro, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #727169 !important;
  --collapse-icon-color-collapsed: #76946A !important;
  --cool-off-white: #F0F5F5 !important;
  --crystalBlue: #7E9CD8 !important;
  --dark: #DCD7BA !important;
  --dark0: #282828 !important;
  --dark0-hard: #1d2021 !important;
  --dark0-soft: #32302f !important;
  --dark1: #3c3836 !important;
  --dark2: #504945 !important;
  --dark3: #665c54 !important;
  --dark4: #7c6f64 !important;
  --darkgray: #DCD7BA !important;
  --divider-color: #658594 !important;
  --divider-color-hover: #658594 !important;
  --dragonBlue: #658594 !important;
  --embed-block-shadow-hover: 0 0 0 1px #658594, inset 0 0 0 1px #658594 !important;
  --embed-border-start: 2px solid #658594 !important;
  --faded-aqua: #427b58 !important;
  --faded-blue: #076678 !important;
  --faded-green: #79740e !important;
  --faded-orange: #af3a03 !important;
  --faded-purple: #8f3f71 !important;
  --faded-red: #9d0006 !important;
  --faded-yellow: #b57614 !important;
  --file-header-background: #1F1F28 !important;
  --file-header-background-focused: #1F1F28 !important;
  --flair-color: #DCD7BA !important;
  --font-mermaid: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: Hack Nerd Font, Source Code Pro, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace !important;
  --font-print: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Arial' !important;
  --font-text: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji !important;
  --footnote-divider-color: #658594 !important;
  --footnote-id-color-no-occurrences: #727169 !important;
  --fujiGray: #727169 !important;
  --fujiWhite: #DCD7BA !important;
  --graph-node-focused: #76946A !important;
  --graph-node-unresolved: #727169 !important;
  --graph-text: #DCD7BA !important;
  --gray: #928374 !important;
  --headerFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #727169 !important;
  --highlight: #223249 !important;
  --hr-color: #658594 !important;
  --icon-color-active: #76946A !important;
  --icon-color-focused: #DCD7BA !important;
  --inline-code: #98BB6C !important;
  --input-date-separator: #727169 !important;
  --input-placeholder-color: #727169 !important;
  --interactive-accent: #658594 !important;
  --interactive-accent-rgb: #98BB6C !important;
  --interactive-before: #54546D !important;
  --katanaGray: #717C7C !important;
  --light: #1F1F28 !important;
  --light0: #fbf1c7 !important;
  --light0-hard: #f9f5d7 !important;
  --light0-soft: #f2e5bc !important;
  --light1: #ebdbb2 !important;
  --light2: #d5c4a1 !important;
  --light3: #bdae93 !important;
  --light4: #a89984 !important;
  --lightBlue: #A3D4D5 !important;
  --lightgray: #181820 !important;
  --link-color: #76946A !important;
  --link-external-color: #76946A !important;
  --link-unresolved-color: #76946A !important;
  --list-marker-color: #727169 !important;
  --list-marker-color-collapsed: #76946A !important;
  --lotusAqua: #597b75 !important;
  --lotusAqua2: #5e857a !important;
  --lotusBlue1: #c7d7e0 !important;
  --lotusBlue2: #b5cbd2 !important;
  --lotusBlue3: #9fb5c9 !important;
  --lotusBlue4: #4d699b !important;
  --lotusBlue5: #5d57a3 !important;
  --lotusCyan: #d7e3d8 !important;
  --lotusGray: #dcd7ba !important;
  --lotusGray2: #716e61 !important;
  --lotusGray3: #8a8980 !important;
  --lotusGreen: #6f894e !important;
  --lotusGreen2: #6e915f !important;
  --lotusGreen3: #b7d0ae !important;
  --lotusInk1: #545464 !important;
  --lotusInk2: #43436c !important;
  --lotusOrange: #cc6d00 !important;
  --lotusOrange2: #e98a00 !important;
  --lotusPink: #b35b79 !important;
  --lotusRed: #c84053 !important;
  --lotusRed2: #d7474b !important;
  --lotusRed3: #e82424 !important;
  --lotusRed4: #d9a594 !important;
  --lotusTeal1: #4e8ca2 !important;
  --lotusTeal2: #6693bf !important;
  --lotusTeal3: #5a7785 !important;
  --lotusViolet1: #a09cac !important;
  --lotusViolet2: #766b90 !important;
  --lotusViolet3: #c9cbd1 !important;
  --lotusViolet4: #624c83 !important;
  --lotusWhite0: #d5cea3 !important;
  --lotusWhite1: #dcd5ac !important;
  --lotusWhite2: #e5ddb0 !important;
  --lotusWhite3: #f2ecbc !important;
  --lotusWhite4: #e7dba0 !important;
  --lotusWhite5: #e4d794 !important;
  --lotusYellow: #77713f !important;
  --lotusYellow2: #836f4a !important;
  --lotusYellow3: #de9800 !important;
  --lotusYellow4: #f9d791 !important;
  --menu-background: #181820 !important;
  --metadata-border-color: #658594 !important;
  --metadata-divider-color: #658594 !important;
  --metadata-input-text-color: #DCD7BA !important;
  --modal-background: #1F1F28 !important;
  --nav-collapse-icon-color: #727169 !important;
  --nav-collapse-icon-color-collapsed: #727169 !important;
  --nav-heading-color: #DCD7BA !important;
  --nav-heading-color-collapsed: #727169 !important;
  --nav-heading-color-hover: #DCD7BA !important;
  --nav-item-color-active: #DCD7BA !important;
  --nav-item-color-highlighted: #76946A !important;
  --nav-item-color-hover: #DCD7BA !important;
  --nav-item-color-selected: #DCD7BA !important;
  --nav-tag-color: #727169 !important;
  --neutral-aqua: #689d6a !important;
  --neutral-blue: #458588 !important;
  --neutral-green: #98971a !important;
  --neutral-orange: #d65d0e !important;
  --neutral-purple: #b16286 !important;
  --neutral-red: #cc241d !important;
  --neutral-yellow: #d79921 !important;
  --oldWhite: #C8C093 !important;
  --oniViolet: #957FB8 !important;
  --paper-like: #F2EFE9 !important;
  --pdf-background: #1F1F28 !important;
  --pdf-page-background: #1F1F28 !important;
  --pdf-shadow: 0 0 0 1px #658594 !important;
  --pdf-sidebar-background: #1F1F28 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #658594 !important;
  --peachRed: #FF5D62 !important;
  --pill-border-color: #658594 !important;
  --pill-color-hover: #DCD7BA !important;
  --pill-color-remove: #727169 !important;
  --pill-color-remove-hover: #76946A !important;
  --pre-code: #16161D !important;
  --prompt-background: #1F1F28 !important;
  --ribbon-background: #181820 !important;
  --ribbon-background-collapsed: #1F1F28 !important;
  --roninYellow: #FF9E3B !important;
  --sakuraPink: #D27E99 !important;
  --samuraiRed: #E82424 !important;
  --search-result-background: #1F1F28 !important;
  --secondary: #76946A !important;
  --setting-group-heading-color: #DCD7BA !important;
  --setting-items-background: #1F1F28 !important;
  --setting-items-border-color: #658594 !important;
  --slider-track-background: #658594 !important;
  --soft-white: #F8F8F8 !important;
  --springBlue: #7FB4CA !important;
  --springGreen: #98BB6C !important;
  --springViolet1: #938AA9 !important;
  --springViolet2: #9CABCA !important;
  --status-bar-background: #181820 !important;
  --status-bar-border-color: #658594 !important;
  --suggestion-background: #1F1F28 !important;
  --sumiInk0: #16161D !important;
  --sumiInk1: #1F1F28 !important;
  --sumiInk1b: #181820 !important;
  --sumiInk2: #2A2A37 !important;
  --sumiInk3: #363646 !important;
  --sumiInk4: #54546D !important;
  --surimiOrange: #FFA066 !important;
  --tab-background-active: #1F1F28 !important;
  --tab-container-background: #181820 !important;
  --tab-outline-color: #658594 !important;
  --tab-switcher-background: #181820 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #181820, transparent) !important;
  --tab-text-color: #727169 !important;
  --tab-text-color-focused-active-current: #DCD7BA !important;
  --tab-text-color-focused-highlighted: #76946A !important;
  --table-add-button-border-color: #658594 !important;
  --table-border-color: #658594 !important;
  --table-drag-handle-background-active: #658594 !important;
  --table-drag-handle-color: #727169 !important;
  --table-header: hsl(0, 0%, 14%) !important;
  --table-header-border-color: #658594 !important;
  --table-header-color: #DCD7BA !important;
  --table-hover: #2A2A37 !important;
  --table-row-even: hsl(0, 0%, 17%) !important;
  --table-row-odd: hsl(0, 0%, 20%) !important;
  --table-selection-border-color: #658594 !important;
  --tag-color: #76946A !important;
  --tag-color-hover: #76946A !important;
  --task-checkbox: #54546D !important;
  --tertiary: #76946A !important;
  --text-a: #658594 !important;
  --text-a-hover: #FF5D62 !important;
  --text-a-url: #658594 !important;
  --text-accent: #76946A !important;
  --text-faint: #727169 !important;
  --text-highlight-bg: #223249 !important;
  --text-link: #7FB4CA !important;
  --text-mark: rgba(34, 50, 73, 0.4) !important;
  --text-normal: #DCD7BA !important;
  --text-selection: rgba(34, 50, 73, 0.5) !important;
  --text-tag: #938AA9 !important;
  --text-title-h1: #cc241d !important;
  --text-title-h2: #d65d0e !important;
  --text-title-h3: #d79921 !important;
  --text-title-h4: #98971a !important;
  --text-title-h5: #689d6a !important;
  --text-title-h6: #458588 !important;
  --textHighlight: #223249 !important;
  --titleFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #181820 !important;
  --titlebar-background-focused: #2A2A37 !important;
  --titlebar-border-color: #658594 !important;
  --titlebar-text-color-focused: #DCD7BA !important;
  --vault-profile-color: #DCD7BA !important;
  --vault-profile-color-hover: #DCD7BA !important;
  --vim-cursor-backgroung: #DCD7BA !important;
  --vim-cursor-color: #1F1F28 !important;
  --warm-off-white: #F5F5F0 !important;
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
  background-color: rgb(24, 24, 32);
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(31, 31, 40);
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(24, 24, 32);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(36, 36, 36);
  border-color: rgb(220, 215, 186);
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(24, 24, 32);
  border-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(101, 133, 148);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(118, 148, 106);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 24, 32);
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(101, 133, 148);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 24, 32);
  border-left-color: rgb(101, 133, 148);
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(31, 31, 40);
  color: rgb(220, 215, 186);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(235, 219, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(220, 215, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 215, 186) none 0px;
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(220, 215, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 215, 186) none 0px;
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(235, 219, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(34, 50, 73);
  color: rgb(220, 215, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 215, 186) none 0px;
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body del {
  color: rgb(220, 215, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 215, 186) none 0px;
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(114, 113, 105);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(84, 84, 109);
  border-color: rgb(101, 133, 148);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(101, 133, 148);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(101, 133, 148) none 0px;
  text-decoration-color: rgb(101, 133, 148);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(101, 133, 148);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(101, 133, 148) none 0px;
  text-decoration-color: rgb(101, 133, 148);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(101, 133, 148);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(101, 133, 148) none 0px;
  text-decoration-color: rgb(101, 133, 148);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body dt {
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(101, 133, 148);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(24, 24, 32);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(24, 24, 32);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(24, 24, 32);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(24, 24, 32);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(220, 215, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.062px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(24, 24, 32);
  border-left-color: rgb(220, 215, 186);
  border-left-width: 0px;
  border-right-color: rgb(220, 215, 186);
  border-right-width: 0px;
  border-top-color: rgb(101, 133, 148);
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body th {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(220, 215, 186);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 215, 186);
  border-left-width: 0px;
  border-right-color: rgb(220, 215, 186);
  border-right-width: 0px;
  border-top-color: rgb(220, 215, 186);
  border-top-width: 0px;
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(101, 133, 148);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(24, 24, 32);
  border-right-color: rgb(24, 24, 32);
  border-top-color: rgb(24, 24, 32);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(101, 133, 148);
  border-left-color: rgb(24, 24, 32);
  border-right-color: rgb(24, 24, 32);
  border-top-color: rgb(24, 24, 32);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(22, 22, 29);
  border-bottom-color: rgb(114, 113, 105);
  border-left-color: rgb(114, 113, 105);
  border-right-color: rgb(114, 113, 105);
  border-top-color: rgb(114, 113, 105);
  color: rgb(114, 113, 105);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 22, 29);
  border-bottom-color: rgb(101, 133, 148);
  border-left-color: rgb(101, 133, 148);
  border-right-color: rgb(101, 133, 148);
  border-top-color: rgb(101, 133, 148);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 22, 29);
  border-bottom-color: rgb(101, 133, 148);
  border-left-color: rgb(101, 133, 148);
  border-right-color: rgb(101, 133, 148);
  border-top-color: rgb(101, 133, 148);
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(22, 22, 29);
  border-bottom-color: rgb(101, 133, 148);
  border-left-color: rgb(101, 133, 148);
  border-right-color: rgb(101, 133, 148);
  border-top-color: rgb(101, 133, 148);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(22, 22, 29);
  border-bottom-color: rgb(101, 133, 148);
  border-left-color: rgb(101, 133, 148);
  border-right-color: rgb(101, 133, 148);
  border-top-color: rgb(101, 133, 148);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(220, 215, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(204, 36, 29);
  border-left-color: rgb(204, 36, 29);
  border-right-color: rgb(204, 36, 29);
  border-top-color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(31, 31, 40);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(220, 215, 186);
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(101, 133, 148);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
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
  border-bottom-color: rgb(84, 84, 109);
  border-left-color: rgb(84, 84, 109);
  border-right-color: rgb(84, 84, 109);
  border-top-color: rgb(84, 84, 109);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
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
  border-bottom-color: rgb(101, 133, 148);
  border-left-color: rgb(101, 133, 148);
  border-right-color: rgb(101, 133, 148);
  border-top-color: rgb(101, 133, 148);
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(31, 31, 40);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(220, 215, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 215, 186) none 0px;
  text-decoration-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(24, 24, 32);
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 24, 32);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(24, 24, 32);
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(24, 24, 32);
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(118, 148, 106);
}

html[saved-theme="dark"] body h1 {
  color: rgb(204, 36, 29);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(214, 93, 14);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(220, 215, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(215, 153, 33);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(152, 151, 26);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(104, 157, 106);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(69, 133, 136);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(101, 133, 148);
  border-left-color: rgb(101, 133, 148);
  border-right-color: rgb(101, 133, 148);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(31, 31, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 31, 40);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(31, 31, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 31, 40);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(31, 31, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 31, 40);
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(31, 31, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 31, 40);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(31, 31, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 31, 40);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(31, 31, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 31, 40);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(220, 215, 186);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(24, 24, 32);
  border-bottom-color: rgb(101, 133, 148);
  border-left-color: rgb(101, 133, 148);
  border-right-color: rgb(101, 133, 148);
  border-top-color: rgb(101, 133, 148);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
  color: rgb(220, 215, 186);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(114, 113, 105);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(101, 133, 148);
  border-left-color: rgb(101, 133, 148);
  border-right-color: rgb(101, 133, 148);
  border-top-color: rgb(101, 133, 148);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(24, 24, 32);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body abbr {
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(31, 31, 40);
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
  color: rgb(220, 215, 186);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body sub {
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body summary {
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body sup {
  color: rgb(220, 215, 186);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(42, 42, 55);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(147, 138, 169);
}`,
  },
  light: {
    base: `:root:root {
  --autumnGreen: #76946A !important;
  --autumnRed: #C34043 !important;
  --autumnYellow: #DCA561 !important;
  --background-modifier-border: #9fb5c9 !important;
  --background-primary: #F2EFE9 !important;
  --background-primary-alt: #e7dba0 !important;
  --background-secondary: #F8F8F8 !important;
  --background-secondary-alt: #f2ecbc !important;
  --bases-cards-background: #F2EFE9 !important;
  --bases-cards-cover-background: #e7dba0 !important;
  --bases-cards-shadow: 0 0 0 1px #9fb5c9 !important;
  --bases-embed-border-color: #9fb5c9 !important;
  --bases-table-border-color: #9fb5c9 !important;
  --bases-table-cell-background-active: #F2EFE9 !important;
  --bases-table-cell-background-disabled: #e7dba0 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #9fb5c9 !important;
  --bases-table-group-background: #e7dba0 !important;
  --bases-table-header-background: #F2EFE9 !important;
  --bases-table-summary-background: #F2EFE9 !important;
  --blockquote-border-color: #9fb5c9 !important;
  --blur-background: color-mix(in srgb, #F2EFE9 65%, transparent) linear-gradient(#F2EFE9, color-mix(in srgb, #F2EFE9 65%, transparent)) !important;
  --boatYellow1: #938056 !important;
  --boatYellow2: #C0A36E !important;
  --bodyFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #545464 !important;
  --bright-aqua: #8ec07c !important;
  --bright-blue: #83a598 !important;
  --bright-green: #b8bb26 !important;
  --bright-orange: #fe8019 !important;
  --bright-purple: #d3869b !important;
  --bright-red: #fb4934 !important;
  --bright-yellow: #fabd2f !important;
  --canvas-background: #F2EFE9 !important;
  --canvas-card-label-color: #8a8980 !important;
  --caret-color: #545464 !important;
  --carpYellow: #E6C384 !important;
  --checkbox-border-color: #8a8980 !important;
  --checkbox-color: #9fb5c9 !important;
  --checkbox-marker-color: #F2EFE9 !important;
  --code-background: #e7dba0 !important;
  --code-block: #8a8980 !important;
  --code-border-color: #9fb5c9 !important;
  --code-comment: #8a8980 !important;
  --code-normal: #545464 !important;
  --codeFont: Hack Nerd Font, Source Code Pro, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #8a8980 !important;
  --collapse-icon-color-collapsed: #6f894e !important;
  --cool-off-white: #F0F5F5 !important;
  --crystalBlue: #7E9CD8 !important;
  --dark: #545464 !important;
  --dark0: #282828 !important;
  --dark0-hard: #1d2021 !important;
  --dark0-soft: #32302f !important;
  --dark1: #3c3836 !important;
  --dark2: #504945 !important;
  --dark3: #665c54 !important;
  --dark4: #7c6f64 !important;
  --darkgray: #545464 !important;
  --divider-color: #9fb5c9 !important;
  --divider-color-hover: #9fb5c9 !important;
  --dragonBlue: #658594 !important;
  --embed-block-shadow-hover: 0 0 0 1px #9fb5c9, inset 0 0 0 1px #9fb5c9 !important;
  --embed-border-start: 2px solid #9fb5c9 !important;
  --faded-aqua: #427b58 !important;
  --faded-blue: #076678 !important;
  --faded-green: #79740e !important;
  --faded-orange: #af3a03 !important;
  --faded-purple: #8f3f71 !important;
  --faded-red: #9d0006 !important;
  --faded-yellow: #b57614 !important;
  --file-header-background: #F2EFE9 !important;
  --file-header-background-focused: #F2EFE9 !important;
  --flair-color: #545464 !important;
  --font-mermaid: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: Hack Nerd Font, Source Code Pro, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace !important;
  --font-print: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Arial' !important;
  --font-text: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji !important;
  --footnote-divider-color: #9fb5c9 !important;
  --footnote-id-color-no-occurrences: #8a8980 !important;
  --fujiGray: #727169 !important;
  --fujiWhite: #DCD7BA !important;
  --graph-node-focused: #6f894e !important;
  --graph-node-unresolved: #8a8980 !important;
  --graph-text: #545464 !important;
  --gray: #928374 !important;
  --headerFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #8a8980 !important;
  --highlight: #b5cbd2 !important;
  --hr-color: #9fb5c9 !important;
  --icon-color-active: #6f894e !important;
  --icon-color-focused: #545464 !important;
  --inline-code: #6f894e !important;
  --input-date-separator: #8a8980 !important;
  --input-placeholder-color: #8a8980 !important;
  --interactive-accent: #9fb5c9 !important;
  --interactive-accent-rgb: #6f894e !important;
  --interactive-before: #716e61 !important;
  --katanaGray: #717C7C !important;
  --light: #F2EFE9 !important;
  --light0: #fbf1c7 !important;
  --light0-hard: #f9f5d7 !important;
  --light0-soft: #f2e5bc !important;
  --light1: #ebdbb2 !important;
  --light2: #d5c4a1 !important;
  --light3: #bdae93 !important;
  --light4: #a89984 !important;
  --lightBlue: #A3D4D5 !important;
  --lightgray: #F8F8F8 !important;
  --link-color: #6f894e !important;
  --link-external-color: #6f894e !important;
  --link-unresolved-color: #6f894e !important;
  --list-marker-color: #8a8980 !important;
  --list-marker-color-collapsed: #6f894e !important;
  --lotusAqua: #597b75 !important;
  --lotusAqua2: #5e857a !important;
  --lotusBlue1: #c7d7e0 !important;
  --lotusBlue2: #b5cbd2 !important;
  --lotusBlue3: #9fb5c9 !important;
  --lotusBlue4: #4d699b !important;
  --lotusBlue5: #5d57a3 !important;
  --lotusCyan: #d7e3d8 !important;
  --lotusGray: #dcd7ba !important;
  --lotusGray2: #716e61 !important;
  --lotusGray3: #8a8980 !important;
  --lotusGreen: #6f894e !important;
  --lotusGreen2: #6e915f !important;
  --lotusGreen3: #b7d0ae !important;
  --lotusInk1: #545464 !important;
  --lotusInk2: #43436c !important;
  --lotusOrange: #cc6d00 !important;
  --lotusOrange2: #e98a00 !important;
  --lotusPink: #b35b79 !important;
  --lotusRed: #c84053 !important;
  --lotusRed2: #d7474b !important;
  --lotusRed3: #e82424 !important;
  --lotusRed4: #d9a594 !important;
  --lotusTeal1: #4e8ca2 !important;
  --lotusTeal2: #6693bf !important;
  --lotusTeal3: #5a7785 !important;
  --lotusViolet1: #a09cac !important;
  --lotusViolet2: #766b90 !important;
  --lotusViolet3: #c9cbd1 !important;
  --lotusViolet4: #624c83 !important;
  --lotusWhite0: #d5cea3 !important;
  --lotusWhite1: #dcd5ac !important;
  --lotusWhite2: #e5ddb0 !important;
  --lotusWhite3: #f2ecbc !important;
  --lotusWhite4: #e7dba0 !important;
  --lotusWhite5: #e4d794 !important;
  --lotusYellow: #77713f !important;
  --lotusYellow2: #836f4a !important;
  --lotusYellow3: #de9800 !important;
  --lotusYellow4: #f9d791 !important;
  --menu-background: #F8F8F8 !important;
  --metadata-border-color: #9fb5c9 !important;
  --metadata-divider-color: #9fb5c9 !important;
  --metadata-input-text-color: #545464 !important;
  --modal-background: #F2EFE9 !important;
  --nav-collapse-icon-color: #8a8980 !important;
  --nav-collapse-icon-color-collapsed: #8a8980 !important;
  --nav-heading-color: #545464 !important;
  --nav-heading-color-collapsed: #8a8980 !important;
  --nav-heading-color-hover: #545464 !important;
  --nav-item-color-active: #545464 !important;
  --nav-item-color-highlighted: #6f894e !important;
  --nav-item-color-hover: #545464 !important;
  --nav-item-color-selected: #545464 !important;
  --nav-tag-color: #8a8980 !important;
  --neutral-aqua: #689d6a !important;
  --neutral-blue: #458588 !important;
  --neutral-green: #98971a !important;
  --neutral-orange: #d65d0e !important;
  --neutral-purple: #b16286 !important;
  --neutral-red: #cc241d !important;
  --neutral-yellow: #d79921 !important;
  --oldWhite: #C8C093 !important;
  --oniViolet: #957FB8 !important;
  --paper-like: #F2EFE9 !important;
  --pdf-background: #F2EFE9 !important;
  --pdf-page-background: #F2EFE9 !important;
  --pdf-sidebar-background: #F2EFE9 !important;
  --peachRed: #FF5D62 !important;
  --pill-border-color: #9fb5c9 !important;
  --pill-color-hover: #545464 !important;
  --pill-color-remove: #8a8980 !important;
  --pill-color-remove-hover: #6f894e !important;
  --pre-code: #dcd7ba !important;
  --prompt-background: #F2EFE9 !important;
  --raised-background: color-mix(in srgb, #F2EFE9 65%, transparent) linear-gradient(#F2EFE9, color-mix(in srgb, #F2EFE9 65%, transparent)) !important;
  --ribbon-background: #F8F8F8 !important;
  --ribbon-background-collapsed: #F2EFE9 !important;
  --roninYellow: #FF9E3B !important;
  --sakuraPink: #D27E99 !important;
  --samuraiRed: #E82424 !important;
  --search-result-background: #F2EFE9 !important;
  --secondary: #6f894e !important;
  --setting-group-heading-color: #545464 !important;
  --setting-items-background: #e7dba0 !important;
  --setting-items-border-color: #9fb5c9 !important;
  --slider-track-background: #9fb5c9 !important;
  --soft-white: #F8F8F8 !important;
  --springBlue: #7FB4CA !important;
  --springGreen: #98BB6C !important;
  --springViolet1: #938AA9 !important;
  --springViolet2: #9CABCA !important;
  --status-bar-background: #F8F8F8 !important;
  --status-bar-border-color: #9fb5c9 !important;
  --suggestion-background: #F2EFE9 !important;
  --sumiInk0: #16161D !important;
  --sumiInk1: #1F1F28 !important;
  --sumiInk1b: #181820 !important;
  --sumiInk2: #2A2A37 !important;
  --sumiInk3: #363646 !important;
  --sumiInk4: #54546D !important;
  --surimiOrange: #FFA066 !important;
  --tab-background-active: #F2EFE9 !important;
  --tab-container-background: #F8F8F8 !important;
  --tab-outline-color: #9fb5c9 !important;
  --tab-switcher-background: #F8F8F8 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #F8F8F8, transparent) !important;
  --tab-text-color: #8a8980 !important;
  --tab-text-color-focused-active-current: #545464 !important;
  --tab-text-color-focused-highlighted: #6f894e !important;
  --table-add-button-border-color: #9fb5c9 !important;
  --table-border-color: #9fb5c9 !important;
  --table-drag-handle-background-active: #9fb5c9 !important;
  --table-drag-handle-color: #8a8980 !important;
  --table-header: hsl(42, 33%, 91%) !important;
  --table-header-border-color: #9fb5c9 !important;
  --table-header-color: #545464 !important;
  --table-hover: #dcd5ac !important;
  --table-row-even: hsl(42, 35%, 94%) !important;
  --table-row-odd: hsl(42, 37%, 97%) !important;
  --table-selection-border-color: #9fb5c9 !important;
  --tag-color: #6f894e !important;
  --tag-color-hover: #6f894e !important;
  --task-checkbox: #716e61 !important;
  --tertiary: #6f894e !important;
  --text-a: #4e8ca2 !important;
  --text-a-hover: #c84053 !important;
  --text-a-url: #6693bf !important;
  --text-accent: #6f894e !important;
  --text-faint: #8a8980 !important;
  --text-highlight-bg: #b5cbd2 !important;
  --text-link: #5d57a3 !important;
  --text-mark: rgba(183, 208, 174, 0.4) !important;
  --text-normal: #545464 !important;
  --text-selection: rgba(183, 208, 174, 0.5) !important;
  --text-tag: #597b75 !important;
  --text-title-h1: #c84053 !important;
  --text-title-h2: #cc6d00 !important;
  --text-title-h3: #77713f !important;
  --text-title-h4: #6f894e !important;
  --text-title-h5: #597b75 !important;
  --text-title-h6: #4d699b !important;
  --textHighlight: #b5cbd2 !important;
  --titleFont: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #F8F8F8 !important;
  --titlebar-background-focused: #f2ecbc !important;
  --titlebar-border-color: #9fb5c9 !important;
  --titlebar-text-color-focused: #545464 !important;
  --vault-profile-color: #545464 !important;
  --vault-profile-color-hover: #545464 !important;
  --vim-cursor-backgroung: #dcd7ba !important;
  --vim-cursor-color: #545464 !important;
  --warm-off-white: #F5F5F0 !important;
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
  background-color: rgb(248, 248, 248);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(242, 239, 233);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .bases-table {
  border-color: rgb(248, 248, 248);
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
  background-color: rgb(242, 239, 233);
  border-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(159, 181, 201);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(111, 137, 78);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 248, 248);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(159, 181, 201);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(248, 248, 248);
  border-left-color: rgb(159, 181, 201);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(242, 239, 233);
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
  background-color: rgb(181, 203, 210);
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
  border-color: rgb(159, 181, 201);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(78, 140, 162);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(78, 140, 162) none 0px;
  text-decoration-color: rgb(78, 140, 162);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(78, 140, 162);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(78, 140, 162) none 0px;
  text-decoration-color: rgb(78, 140, 162);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(78, 140, 162);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(78, 140, 162) none 0px;
  text-decoration-color: rgb(78, 140, 162);
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
  color: rgb(78, 140, 162);
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
  border-bottom-color: rgb(248, 248, 248);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(248, 248, 248);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(248, 248, 248);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(248, 248, 248);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.062px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(84, 84, 100);
  border-left-width: 0px;
  border-right-color: rgb(84, 84, 100);
  border-right-width: 0px;
  border-top-color: rgb(159, 181, 201);
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
  border-bottom-color: rgb(159, 181, 201);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(159, 181, 201);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
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
  border-bottom-color: rgb(159, 181, 201);
  border-left-color: rgb(159, 181, 201);
  border-right-color: rgb(159, 181, 201);
  border-top-color: rgb(159, 181, 201);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(220, 215, 186);
  border-bottom-color: rgb(159, 181, 201);
  border-left-color: rgb(159, 181, 201);
  border-right-color: rgb(159, 181, 201);
  border-top-color: rgb(159, 181, 201);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(220, 215, 186);
  border-bottom-color: rgb(159, 181, 201);
  border-left-color: rgb(159, 181, 201);
  border-right-color: rgb(159, 181, 201);
  border-top-color: rgb(159, 181, 201);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(220, 215, 186);
  border-bottom-color: rgb(159, 181, 201);
  border-left-color: rgb(159, 181, 201);
  border-right-color: rgb(159, 181, 201);
  border-top-color: rgb(159, 181, 201);
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
  border-bottom-color: rgb(200, 64, 83);
  border-left-color: rgb(200, 64, 83);
  border-right-color: rgb(200, 64, 83);
  border-top-color: rgb(200, 64, 83);
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
  border-left-color: rgb(159, 181, 201);
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
  border-bottom-color: rgb(159, 181, 201);
  border-left-color: rgb(159, 181, 201);
  border-right-color: rgb(159, 181, 201);
  border-top-color: rgb(159, 181, 201);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(242, 239, 233);
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
  background-color: rgb(248, 248, 248);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(248, 248, 248);
  color: rgb(84, 84, 100);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(111, 137, 78);
}

html[saved-theme="light"] body h1 {
  color: rgb(200, 64, 83);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(204, 109, 0);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(119, 113, 63);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(111, 137, 78);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(89, 123, 117);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(77, 105, 155);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(159, 181, 201);
  border-left-color: rgb(159, 181, 201);
  border-right-color: rgb(159, 181, 201);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(242, 239, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 239, 233);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(242, 239, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 239, 233);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(242, 239, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 239, 233);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(242, 239, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 239, 233);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(242, 239, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 239, 233);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(242, 239, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 239, 233);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(84, 84, 100);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(159, 181, 201);
  border-left-color: rgb(159, 181, 201);
  border-right-color: rgb(159, 181, 201);
  border-top-color: rgb(159, 181, 201);
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
  border-bottom-color: rgb(159, 181, 201);
  border-left-color: rgb(159, 181, 201);
  border-right-color: rgb(159, 181, 201);
  border-top-color: rgb(159, 181, 201);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(248, 248, 248);
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
  background-color: rgb(242, 236, 188);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(89, 123, 117);
}`,
  },
};
