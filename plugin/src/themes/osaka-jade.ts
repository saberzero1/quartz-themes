import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "osaka-jade",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --autumnGreen: #143614 !important;
  --autumnRed: #db9f9c !important;
  --autumnYellow: #E5C736 !important;
  --background-modifier-border: #81B8A8 !important;
  --background-primary: #111c18 !important;
  --background-primary-alt: #23372B !important;
  --background-secondary: #32473B !important;
  --background-secondary-alt: #364538 !important;
  --bases-cards-background: #111c18 !important;
  --bases-cards-cover-background: #23372B !important;
  --bases-cards-shadow: 0 0 0 1px #81B8A8 !important;
  --bases-embed-border-color: #81B8A8 !important;
  --bases-table-border-color: #81B8A8 !important;
  --bases-table-cell-background-active: #111c18 !important;
  --bases-table-cell-background-disabled: #23372B !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #81B8A8 !important;
  --bases-table-group-background: #23372B !important;
  --bases-table-header-background: #111c18 !important;
  --bases-table-summary-background: #111c18 !important;
  --blockquote-border-color: #81B8A8 !important;
  --boatYellow1: #DEB266 !important;
  --boatYellow2: #E5C736 !important;
  --bodyFont: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #C1C497 !important;
  --bright-aqua: #8ec07c !important;
  --bright-blue: #83a598 !important;
  --bright-green: #b8bb26 !important;
  --bright-orange: #fe8019 !important;
  --bright-purple: #d3869b !important;
  --bright-red: #fb4934 !important;
  --bright-yellow: #fabd2f !important;
  --canvas-background: #111c18 !important;
  --canvas-card-label-color: #D6D5BC !important;
  --caret-color: #F7E8B2 !important;
  --carpYellow: #D7C995 !important;
  --checkbox-border-color: #D6D5BC !important;
  --checkbox-color: #81B8A8 !important;
  --checkbox-marker-color: #111c18 !important;
  --code-background: #23372B !important;
  --code-block: #D6D5BC !important;
  --code-border-color: #81B8A8 !important;
  --code-comment: #D6D5BC !important;
  --code-normal: #F7E8B2 !important;
  --codeFont: '??', 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #D6D5BC !important;
  --collapse-icon-color-collapsed: #549e6a !important;
  --cool-off-white: #F0F5F5 !important;
  --crystalBlue: #75bbb3 !important;
  --dark: #F7E8B2 !important;
  --dark0: #282828 !important;
  --dark0-hard: #1d2021 !important;
  --dark0-soft: #32302f !important;
  --dark1: #3c3836 !important;
  --dark2: #504945 !important;
  --dark3: #665c54 !important;
  --dark4: #7c6f64 !important;
  --darkgray: #F7E8B2 !important;
  --divider-color: #81B8A8 !important;
  --divider-color-hover: #81B8A8 !important;
  --dragonBlue: #75bbb3 !important;
  --embed-block-shadow-hover: 0 0 0 1px #81B8A8, inset 0 0 0 1px #81B8A8 !important;
  --embed-border-start: 2px solid #81B8A8 !important;
  --faded-aqua: #427b58 !important;
  --faded-blue: #076678 !important;
  --faded-green: #79740e !important;
  --faded-orange: #af3a03 !important;
  --faded-purple: #8f3f71 !important;
  --faded-red: #9d0006 !important;
  --faded-yellow: #b57614 !important;
  --file-header-background: #111c18 !important;
  --file-header-background-focused: #111c18 !important;
  --flair-color: #F7E8B2 !important;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace !important;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, 'Arial' !important;
  --font-text: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji !important;
  --footnote-divider-color: #81B8A8 !important;
  --footnote-id-color-no-occurrences: #D6D5BC !important;
  --fujiGray: #D6D5BC !important;
  --fujiWhite: #F7E8B2 !important;
  --graph-node-focused: #549e6a !important;
  --graph-node-unresolved: #D6D5BC !important;
  --graph-text: #F7E8B2 !important;
  --gray: #928374 !important;
  --headerFont: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #D6D5BC !important;
  --highlight: #364538 !important;
  --hr-color: #81B8A8 !important;
  --icon-color-active: #549e6a !important;
  --icon-color-focused: #F7E8B2 !important;
  --inline-code: #549e6a !important;
  --input-date-separator: #D6D5BC !important;
  --input-placeholder-color: #D6D5BC !important;
  --interactive-accent: #81B8A8 !important;
  --interactive-accent-rgb: #549e6a !important;
  --interactive-before: #53685B !important;
  --katanaGray: #81B8A8 !important;
  --light: #111c18 !important;
  --light0: #fbf1c7 !important;
  --light0-hard: #f9f5d7 !important;
  --light0-soft: #f2e5bc !important;
  --light1: #ebdbb2 !important;
  --light2: #d5c4a1 !important;
  --light3: #bdae93 !important;
  --light4: #a89984 !important;
  --lightBlue: #ACD4CF !important;
  --lightgray: #32473B !important;
  --link-color: #549e6a !important;
  --link-external-color: #549e6a !important;
  --link-unresolved-color: #549e6a !important;
  --list-marker-color: #D6D5BC !important;
  --list-marker-color-collapsed: #549e6a !important;
  --lotusAqua: #7AB5A6 !important;
  --lotusAqua2: #85BFB1 !important;
  --lotusBlue1: #D7EFEB !important;
  --lotusBlue2: #BEEBE6 !important;
  --lotusBlue3: #A5E7E1 !important;
  --lotusBlue4: #407A6F !important;
  --lotusBlue5: #3E6B62 !important;
  --lotusCyan: #E8F3EA !important;
  --lotusGray: #E8E6D4 !important;
  --lotusGray2: #C7C5B3 !important;
  --lotusGray3: #B5B3A1 !important;
  --lotusGreen: #76B88C !important;
  --lotusGreen2: #6AAB82 !important;
  --lotusGreen3: #C4E4B0 !important;
  --lotusInk1: #2F4A37 !important;
  --lotusInk2: #1A2E20 !important;
  --lotusOrange: #F5A588 !important;
  --lotusOrange2: #F2B195 !important;
  --lotusPink: #E2A4C6 !important;
  --lotusRed: #FF7668 !important;
  --lotusRed2: #FF8A7C !important;
  --lotusRed3: #FF5345 !important;
  --lotusRed4: #E6BEBC !important;
  --lotusTeal1: #6EACBE !important;
  --lotusTeal2: #8BC2D4 !important;
  --lotusTeal3: #7AA5B7 !important;
  --lotusViolet1: #E2A4C6 !important;
  --lotusViolet2: #D68BB4 !important;
  --lotusViolet3: #F2E4E8 !important;
  --lotusViolet4: #B85080 !important;
  --lotusWhite0: #F9F7E5 !important;
  --lotusWhite1: #F6F4E2 !important;
  --lotusWhite2: #F3F1DF !important;
  --lotusWhite3: #F0EEDC !important;
  --lotusWhite4: #EDEBD9 !important;
  --lotusWhite5: #EAE8D6 !important;
  --lotusYellow: #74824D !important;
  --lotusYellow2: #8B9159 !important;
  --lotusYellow3: #F0DC5A !important;
  --lotusYellow4: #EBD8B9 !important;
  --menu-background: #32473B !important;
  --metadata-border-color: #81B8A8 !important;
  --metadata-divider-color: #81B8A8 !important;
  --metadata-input-text-color: #F7E8B2 !important;
  --modal-background: #111c18 !important;
  --nav-collapse-icon-color: #D6D5BC !important;
  --nav-collapse-icon-color-collapsed: #D6D5BC !important;
  --nav-heading-color: #F7E8B2 !important;
  --nav-heading-color-collapsed: #D6D5BC !important;
  --nav-heading-color-hover: #F7E8B2 !important;
  --nav-item-color-active: #F7E8B2 !important;
  --nav-item-color-highlighted: #549e6a !important;
  --nav-item-color-hover: #F7E8B2 !important;
  --nav-item-color-selected: #F7E8B2 !important;
  --nav-tag-color: #D6D5BC !important;
  --neutral-aqua: #689d6a !important;
  --neutral-blue: #458588 !important;
  --neutral-green: #98971a !important;
  --neutral-orange: #d65d0e !important;
  --neutral-purple: #b16286 !important;
  --neutral-red: #cc241d !important;
  --neutral-yellow: #d79921 !important;
  --oldWhite: #C1C497 !important;
  --oniViolet: #D2689C !important;
  --osakaBlue1: #509475 !important;
  --osakaBlue2: #ACD4CF !important;
  --osakaInk0: #111c18 !important;
  --osakaInk1: #23372B !important;
  --osakaInk2: #32473B !important;
  --osakaInk3: #364538 !important;
  --osakaInk4: #53685B !important;
  --paper-like: #F2EFE9 !important;
  --pdf-background: #111c18 !important;
  --pdf-page-background: #111c18 !important;
  --pdf-shadow: 0 0 0 1px #81B8A8 !important;
  --pdf-sidebar-background: #111c18 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #81B8A8 !important;
  --peachRed: #db9f9c !important;
  --pill-border-color: #81B8A8 !important;
  --pill-color-hover: #F7E8B2 !important;
  --pill-color-remove: #D6D5BC !important;
  --pill-color-remove-hover: #549e6a !important;
  --pre-code: #23372B !important;
  --prompt-background: #111c18 !important;
  --ribbon-background: #32473B !important;
  --ribbon-background-collapsed: #111c18 !important;
  --roninYellow: #E5C736 !important;
  --sakuraPink: #D2689C !important;
  --samuraiRed: #FF5345 !important;
  --search-result-background: #111c18 !important;
  --secondary: #549e6a !important;
  --setting-group-heading-color: #F7E8B2 !important;
  --setting-items-background: #23372B !important;
  --setting-items-border-color: #81B8A8 !important;
  --slider-track-background: #81B8A8 !important;
  --soft-white: #F8F8F8 !important;
  --springBlue: #2DD5B7 !important;
  --springGreen: #549e6a !important;
  --springViolet1: #D2689C !important;
  --springViolet2: #8CD3CB !important;
  --status-bar-background: #32473B !important;
  --status-bar-border-color: #81B8A8 !important;
  --suggestion-background: #111c18 !important;
  --surimiOrange: #E67D64 !important;
  --tab-background-active: #111c18 !important;
  --tab-container-background: #32473B !important;
  --tab-outline-color: #81B8A8 !important;
  --tab-switcher-background: #32473B !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #32473B, transparent) !important;
  --tab-text-color: #D6D5BC !important;
  --tab-text-color-focused-active-current: #F7E8B2 !important;
  --tab-text-color-focused-highlighted: #549e6a !important;
  --table-add-button-border-color: #81B8A8 !important;
  --table-border-color: #81B8A8 !important;
  --table-drag-handle-background-active: #81B8A8 !important;
  --table-drag-handle-color: #D6D5BC !important;
  --table-header: #32473B !important;
  --table-header-border-color: #81B8A8 !important;
  --table-header-color: #F7E8B2 !important;
  --table-hover: #364538 !important;
  --table-row-even: #23372B !important;
  --table-row-odd: #111c18 !important;
  --table-selection-border-color: #81B8A8 !important;
  --tag-color: #549e6a !important;
  --tag-color-hover: #549e6a !important;
  --task-checkbox: #53685B !important;
  --tertiary: #549e6a !important;
  --text-a: #75bbb3 !important;
  --text-a-hover: #db9f9c !important;
  --text-a-url: #81B8A8 !important;
  --text-accent: #549e6a !important;
  --text-faint: #D6D5BC !important;
  --text-highlight-bg: #364538 !important;
  --text-link: #2DD5B7 !important;
  --text-mark: rgba(80, 148, 117, 0.4) !important;
  --text-normal: #F7E8B2 !important;
  --text-selection: rgba(80, 148, 117, 0.5) !important;
  --text-tag: #D2689C !important;
  --text-title-h1: #FF5345 !important;
  --text-title-h2: #E67D64 !important;
  --text-title-h3: #E5C736 !important;
  --text-title-h4: #549e6a !important;
  --text-title-h5: #2DD5B7 !important;
  --text-title-h6: #509475 !important;
  --textHighlight: #364538 !important;
  --titleFont: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #32473B !important;
  --titlebar-background-focused: #364538 !important;
  --titlebar-border-color: #81B8A8 !important;
  --titlebar-text-color-focused: #F7E8B2 !important;
  --vault-profile-color: #F7E8B2 !important;
  --vault-profile-color-hover: #F7E8B2 !important;
  --vim-cursor-backgroung: #D7C995 !important;
  --vim-cursor-color: #111c18 !important;
  --warm-off-white: #F5F5F0 !important;
  --waveAqua1: #2DD5B7 !important;
  --waveAqua2: #8CD3CB !important;
  --waveRed: #FF5345 !important;
  --winterBlue: #509475 !important;
  --winterGreen: #549e6a !important;
  --winterRed: #FF5345 !important;
  --winterYellow: #459451 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(50, 71, 59);
  color: rgb(247, 232, 178);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(17, 28, 24);
  color: rgb(247, 232, 178);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(50, 71, 59);
  color: rgb(247, 232, 178);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(129, 184, 168);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(50, 71, 59);
  border-left-color: rgb(129, 184, 168);
  color: rgb(247, 232, 178);
}

body div#quartz-root {
  background-color: rgb(17, 28, 24);
  color: rgb(247, 232, 178);
}`,
    typography: `body .page article p > b, b {
  color: rgb(193, 196, 151);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(193, 196, 151) none 0px;
  text-decoration: rgb(193, 196, 151);
  text-decoration-color: rgb(193, 196, 151);
}

body .page article p > em, em {
  color: rgb(247, 232, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(247, 232, 178) none 0px;
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body .page article p > i, i {
  color: rgb(247, 232, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(247, 232, 178) none 0px;
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body .page article p > strong, strong {
  color: rgb(193, 196, 151);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(193, 196, 151) none 0px;
  text-decoration: rgb(193, 196, 151);
  text-decoration-color: rgb(193, 196, 151);
}

body .text-highlight {
  background-color: rgb(54, 69, 56);
  color: rgb(247, 232, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(247, 232, 178) none 0px;
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body del {
  color: rgb(247, 232, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(247, 232, 178) none 0px;
  text-decoration: line-through rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}`,
    links: `body a.external, footer a {
  color: rgb(117, 187, 179);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(117, 187, 179) none 0px;
  text-decoration: rgb(117, 187, 179);
  text-decoration-color: rgb(117, 187, 179);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(117, 187, 179);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(117, 187, 179) none 0px;
  text-decoration: rgb(117, 187, 179);
  text-decoration-color: rgb(117, 187, 179);
}

body a.internal.broken {
  color: rgb(117, 187, 179);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(117, 187, 179) none 0px;
  text-decoration: rgb(117, 187, 179);
  text-decoration-color: rgb(117, 187, 179);
}`,
    lists: `body dd {
  color: rgb(247, 232, 178);
}

body dt {
  color: rgb(247, 232, 178);
}

body ol > li {
  color: rgb(247, 232, 178);
}

body ol.overflow {
  background-color: rgb(17, 28, 24);
  border-bottom-color: rgb(247, 232, 178);
  border-left-color: rgb(247, 232, 178);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
}

body ul > li {
  color: rgb(247, 232, 178);
}

body ul.overflow {
  background-color: rgb(17, 28, 24);
  border-bottom-color: rgb(247, 232, 178);
  border-left-color: rgb(247, 232, 178);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(117, 187, 179);
  text-decoration: rgb(117, 187, 179);
}

body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(247, 232, 178);
  border-left-color: rgb(247, 232, 178);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
}

body table {
  border-bottom-color: rgb(50, 71, 59);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(50, 71, 59);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(50, 71, 59);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(50, 71, 59);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(247, 232, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.062px;
}

body td {
  border-bottom-color: rgb(50, 71, 59);
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(129, 184, 168);
  color: rgb(247, 232, 178);
}

body th {
  background-color: rgb(50, 71, 59);
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-width: 0px;
  border-left-color: rgb(247, 232, 178);
  border-left-width: 0px;
  border-right-color: rgb(247, 232, 178);
  border-right-width: 0px;
  border-top-color: rgb(247, 232, 178);
  border-top-width: 0px;
  color: rgb(247, 232, 178);
}

body thead {
  border-bottom-color: rgb(129, 184, 168);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(50, 71, 59);
  border-right-color: rgb(50, 71, 59);
  border-top-color: rgb(50, 71, 59);
}

body tr {
  border-bottom-color: rgb(129, 184, 168);
  border-left-color: rgb(50, 71, 59);
  border-right-color: rgb(50, 71, 59);
  border-top-color: rgb(50, 71, 59);
}`,
    code: `body code {
  background-color: rgb(35, 55, 43);
  border-bottom-color: rgb(214, 213, 188);
  border-left-color: rgb(214, 213, 188);
  border-right-color: rgb(214, 213, 188);
  border-top-color: rgb(214, 213, 188);
  color: rgb(214, 213, 188);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 55, 43);
  border-bottom-color: rgb(129, 184, 168);
  border-left-color: rgb(129, 184, 168);
  border-right-color: rgb(129, 184, 168);
  border-top-color: rgb(129, 184, 168);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 55, 43);
  border-bottom-color: rgb(129, 184, 168);
  border-left-color: rgb(129, 184, 168);
  border-right-color: rgb(129, 184, 168);
  border-top-color: rgb(129, 184, 168);
  color: rgb(247, 232, 178);
}

body pre > code, pre:has(> code) {
  background-color: rgb(35, 55, 43);
  border-bottom-color: rgb(129, 184, 168);
  border-left-color: rgb(129, 184, 168);
  border-right-color: rgb(129, 184, 168);
  border-top-color: rgb(129, 184, 168);
}

body pre:has(> code) {
  background-color: rgb(35, 55, 43);
  border-bottom-color: rgb(129, 184, 168);
  border-left-color: rgb(129, 184, 168);
  border-right-color: rgb(129, 184, 168);
  border-top-color: rgb(129, 184, 168);
}`,
    images: `body audio {
  border-bottom-color: rgb(247, 232, 178);
  border-left-color: rgb(247, 232, 178);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
}

body figcaption {
  color: rgb(247, 232, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(247, 232, 178);
  border-left-color: rgb(247, 232, 178);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
}

body img {
  border-bottom-color: rgb(247, 232, 178);
  border-left-color: rgb(247, 232, 178);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
}

body video {
  border-bottom-color: rgb(247, 232, 178);
  border-left-color: rgb(247, 232, 178);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
}`,
    embeds: `body .file-embed {
  background-color: rgb(35, 55, 43);
}

body .footnotes {
  border-top-color: rgb(247, 232, 178);
  color: rgb(247, 232, 178);
}

body .transclude {
  border-bottom-color: rgb(247, 232, 178);
  border-left-color: rgb(129, 184, 168);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(247, 232, 178);
  border-left-color: rgb(129, 184, 168);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=checkbox] {
  border-bottom-color: rgb(83, 104, 91);
  border-left-color: rgb(83, 104, 91);
  border-right-color: rgb(83, 104, 91);
  border-top-color: rgb(83, 104, 91);
}

body li.task-list-item[data-task='!'] {
  color: rgb(247, 232, 178);
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body li.task-list-item[data-task='*'] {
  color: rgb(247, 232, 178);
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body li.task-list-item[data-task='-'] {
  color: rgb(247, 232, 178);
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body li.task-list-item[data-task='/'] {
  color: rgb(247, 232, 178);
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body li.task-list-item[data-task='>'] {
  color: rgb(247, 232, 178);
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body li.task-list-item[data-task='?'] {
  color: rgb(247, 232, 178);
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body li.task-list-item[data-task='I'] {
  color: rgb(247, 232, 178);
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body li.task-list-item[data-task='S'] {
  color: rgb(247, 232, 178);
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body li.task-list-item[data-task='b'] {
  color: rgb(247, 232, 178);
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body li.task-list-item[data-task='c'] {
  color: rgb(247, 232, 178);
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body li.task-list-item[data-task='d'] {
  color: rgb(247, 232, 178);
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body li.task-list-item[data-task='f'] {
  color: rgb(247, 232, 178);
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body li.task-list-item[data-task='i'] {
  color: rgb(247, 232, 178);
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body li.task-list-item[data-task='k'] {
  color: rgb(247, 232, 178);
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body li.task-list-item[data-task='l'] {
  color: rgb(247, 232, 178);
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body li.task-list-item[data-task='p'] {
  color: rgb(247, 232, 178);
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body li.task-list-item[data-task='u'] {
  color: rgb(247, 232, 178);
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body li.task-list-item[data-task='w'] {
  color: rgb(247, 232, 178);
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(129, 184, 168);
  border-left-color: rgb(129, 184, 168);
  border-right-color: rgb(129, 184, 168);
  border-top-color: rgb(129, 184, 168);
  color: rgb(247, 232, 178);
}

body .search > .search-container > .search-space {
  background-color: rgb(17, 28, 24);
}

body .search > .search-container > .search-space > * {
  color: rgb(247, 232, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(247, 232, 178) none 0px;
  text-decoration: rgb(247, 232, 178);
  text-decoration-color: rgb(247, 232, 178);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(247, 232, 178);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(247, 232, 178);
  border-left-color: rgb(247, 232, 178);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(247, 232, 178);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(50, 71, 59);
  color: rgb(247, 232, 178);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(50, 71, 59);
  border-left-color: rgb(247, 232, 178);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(50, 71, 59);
  border-bottom-color: rgb(247, 232, 178);
  border-left-color: rgb(247, 232, 178);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
  color: rgb(247, 232, 178);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(50, 71, 59);
  color: rgb(247, 232, 178);
}

body a.internal.tag-link::before {
  color: rgb(84, 158, 106);
}

body h1 {
  color: rgb(255, 83, 69);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(230, 125, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(247, 232, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(229, 199, 54);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(84, 158, 106);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(45, 213, 183);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(80, 148, 117);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(129, 184, 168);
  border-left-color: rgb(129, 184, 168);
  border-right-color: rgb(129, 184, 168);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(17, 28, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 28, 24);
}

body ::-webkit-scrollbar-corner {
  background: rgb(17, 28, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 28, 24);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(17, 28, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 28, 24);
  border-bottom-color: rgb(247, 232, 178);
  border-left-color: rgb(247, 232, 178);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 28, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 28, 24);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 28, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 28, 24);
}

body ::-webkit-scrollbar-track {
  background: rgb(17, 28, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 28, 24);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(247, 232, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(247, 232, 178);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(247, 232, 178);
}`,
    footer: `body footer {
  background-color: rgb(50, 71, 59);
  border-bottom-color: rgb(129, 184, 168);
  border-left-color: rgb(129, 184, 168);
  border-right-color: rgb(129, 184, 168);
  border-top-color: rgb(129, 184, 168);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(247, 232, 178);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(247, 232, 178);
  border-left-color: rgb(247, 232, 178);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
  color: rgb(247, 232, 178);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(247, 232, 178);
  border-left-color: rgb(247, 232, 178);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
}

body ul.section-ul {
  border-bottom-color: rgb(247, 232, 178);
  border-left-color: rgb(247, 232, 178);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(214, 213, 188);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(247, 232, 178);
  border-left-color: rgb(247, 232, 178);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
  color: rgb(247, 232, 178);
}

body .metadata {
  border-bottom-color: rgb(129, 184, 168);
  border-left-color: rgb(129, 184, 168);
  border-right-color: rgb(129, 184, 168);
  border-top-color: rgb(129, 184, 168);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(50, 71, 59);
}

body .page-header h2.page-title {
  color: rgb(247, 232, 178);
}

body abbr {
  color: rgb(247, 232, 178);
  text-decoration: underline dotted rgb(247, 232, 178);
}

body details {
  border-bottom-color: rgb(247, 232, 178);
  border-left-color: rgb(247, 232, 178);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
}

body kbd {
  background-color: rgb(35, 55, 43);
  border-bottom-color: rgb(247, 232, 178);
  border-left-color: rgb(247, 232, 178);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
  color: rgb(247, 232, 178);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(247, 232, 178);
  border-left-color: rgb(247, 232, 178);
  border-right-color: rgb(247, 232, 178);
  border-top-color: rgb(247, 232, 178);
}

body sub {
  color: rgb(247, 232, 178);
}

body summary {
  color: rgb(247, 232, 178);
}

body sup {
  color: rgb(247, 232, 178);
}`,
  },
  light: {
    base: `:root:root {
  --autumnGreen: #143614 !important;
  --autumnRed: #db9f9c !important;
  --autumnYellow: #E5C736 !important;
  --background-modifier-border: #A5E7E1 !important;
  --background-primary: #F2EFE9 !important;
  --background-primary-alt: #EDEBD9 !important;
  --background-secondary: #F8F8F8 !important;
  --background-secondary-alt: #F0EEDC !important;
  --bases-cards-background: #F2EFE9 !important;
  --bases-cards-cover-background: #EDEBD9 !important;
  --bases-cards-shadow: 0 0 0 1px #A5E7E1 !important;
  --bases-embed-border-color: #A5E7E1 !important;
  --bases-table-border-color: #A5E7E1 !important;
  --bases-table-cell-background-active: #F2EFE9 !important;
  --bases-table-cell-background-disabled: #EDEBD9 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #A5E7E1 !important;
  --bases-table-group-background: #EDEBD9 !important;
  --bases-table-header-background: #F2EFE9 !important;
  --bases-table-summary-background: #F2EFE9 !important;
  --blockquote-border-color: #A5E7E1 !important;
  --blur-background: color-mix(in srgb, #F2EFE9 65%, transparent) linear-gradient(#F2EFE9, color-mix(in srgb, #F2EFE9 65%, transparent)) !important;
  --boatYellow1: #DEB266 !important;
  --boatYellow2: #E5C736 !important;
  --bodyFont: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #2F4A37 !important;
  --bright-aqua: #8ec07c !important;
  --bright-blue: #83a598 !important;
  --bright-green: #b8bb26 !important;
  --bright-orange: #fe8019 !important;
  --bright-purple: #d3869b !important;
  --bright-red: #fb4934 !important;
  --bright-yellow: #fabd2f !important;
  --canvas-background: #F2EFE9 !important;
  --canvas-card-label-color: #B5B3A1 !important;
  --caret-color: #2F4A37 !important;
  --carpYellow: #D7C995 !important;
  --checkbox-border-color: #B5B3A1 !important;
  --checkbox-color: #A5E7E1 !important;
  --checkbox-marker-color: #F2EFE9 !important;
  --code-background: #EDEBD9 !important;
  --code-block: #B5B3A1 !important;
  --code-border-color: #A5E7E1 !important;
  --code-comment: #B5B3A1 !important;
  --code-normal: #2F4A37 !important;
  --codeFont: '??', 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #B5B3A1 !important;
  --collapse-icon-color-collapsed: #76B88C !important;
  --cool-off-white: #F0F5F5 !important;
  --crystalBlue: #75bbb3 !important;
  --dark: #2F4A37 !important;
  --dark0: #282828 !important;
  --dark0-hard: #1d2021 !important;
  --dark0-soft: #32302f !important;
  --dark1: #3c3836 !important;
  --dark2: #504945 !important;
  --dark3: #665c54 !important;
  --dark4: #7c6f64 !important;
  --darkgray: #2F4A37 !important;
  --divider-color: #A5E7E1 !important;
  --divider-color-hover: #A5E7E1 !important;
  --dragonBlue: #75bbb3 !important;
  --embed-block-shadow-hover: 0 0 0 1px #A5E7E1, inset 0 0 0 1px #A5E7E1 !important;
  --embed-border-start: 2px solid #A5E7E1 !important;
  --faded-aqua: #427b58 !important;
  --faded-blue: #076678 !important;
  --faded-green: #79740e !important;
  --faded-orange: #af3a03 !important;
  --faded-purple: #8f3f71 !important;
  --faded-red: #9d0006 !important;
  --faded-yellow: #b57614 !important;
  --file-header-background: #F2EFE9 !important;
  --file-header-background-focused: #F2EFE9 !important;
  --flair-color: #2F4A37 !important;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace !important;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, 'Arial' !important;
  --font-text: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji !important;
  --footnote-divider-color: #A5E7E1 !important;
  --footnote-id-color-no-occurrences: #B5B3A1 !important;
  --fujiGray: #D6D5BC !important;
  --fujiWhite: #F7E8B2 !important;
  --graph-node-focused: #76B88C !important;
  --graph-node-unresolved: #B5B3A1 !important;
  --graph-text: #2F4A37 !important;
  --gray: #928374 !important;
  --headerFont: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #B5B3A1 !important;
  --highlight: #BEEBE6 !important;
  --hr-color: #A5E7E1 !important;
  --icon-color-active: #76B88C !important;
  --icon-color-focused: #2F4A37 !important;
  --inline-code: #76B88C !important;
  --input-date-separator: #B5B3A1 !important;
  --input-placeholder-color: #B5B3A1 !important;
  --interactive-accent: #A5E7E1 !important;
  --interactive-accent-rgb: #76B88C !important;
  --interactive-before: #C7C5B3 !important;
  --katanaGray: #81B8A8 !important;
  --light: #F2EFE9 !important;
  --light0: #fbf1c7 !important;
  --light0-hard: #f9f5d7 !important;
  --light0-soft: #f2e5bc !important;
  --light1: #ebdbb2 !important;
  --light2: #d5c4a1 !important;
  --light3: #bdae93 !important;
  --light4: #a89984 !important;
  --lightBlue: #ACD4CF !important;
  --lightgray: #F8F8F8 !important;
  --link-color: #76B88C !important;
  --link-external-color: #76B88C !important;
  --link-unresolved-color: #76B88C !important;
  --list-marker-color: #B5B3A1 !important;
  --list-marker-color-collapsed: #76B88C !important;
  --lotusAqua: #7AB5A6 !important;
  --lotusAqua2: #85BFB1 !important;
  --lotusBlue1: #D7EFEB !important;
  --lotusBlue2: #BEEBE6 !important;
  --lotusBlue3: #A5E7E1 !important;
  --lotusBlue4: #407A6F !important;
  --lotusBlue5: #3E6B62 !important;
  --lotusCyan: #E8F3EA !important;
  --lotusGray: #E8E6D4 !important;
  --lotusGray2: #C7C5B3 !important;
  --lotusGray3: #B5B3A1 !important;
  --lotusGreen: #76B88C !important;
  --lotusGreen2: #6AAB82 !important;
  --lotusGreen3: #C4E4B0 !important;
  --lotusInk1: #2F4A37 !important;
  --lotusInk2: #1A2E20 !important;
  --lotusOrange: #F5A588 !important;
  --lotusOrange2: #F2B195 !important;
  --lotusPink: #E2A4C6 !important;
  --lotusRed: #FF7668 !important;
  --lotusRed2: #FF8A7C !important;
  --lotusRed3: #FF5345 !important;
  --lotusRed4: #E6BEBC !important;
  --lotusTeal1: #6EACBE !important;
  --lotusTeal2: #8BC2D4 !important;
  --lotusTeal3: #7AA5B7 !important;
  --lotusViolet1: #E2A4C6 !important;
  --lotusViolet2: #D68BB4 !important;
  --lotusViolet3: #F2E4E8 !important;
  --lotusViolet4: #B85080 !important;
  --lotusWhite0: #F9F7E5 !important;
  --lotusWhite1: #F6F4E2 !important;
  --lotusWhite2: #F3F1DF !important;
  --lotusWhite3: #F0EEDC !important;
  --lotusWhite4: #EDEBD9 !important;
  --lotusWhite5: #EAE8D6 !important;
  --lotusYellow: #74824D !important;
  --lotusYellow2: #8B9159 !important;
  --lotusYellow3: #F0DC5A !important;
  --lotusYellow4: #EBD8B9 !important;
  --menu-background: #F8F8F8 !important;
  --metadata-border-color: #A5E7E1 !important;
  --metadata-divider-color: #A5E7E1 !important;
  --metadata-input-text-color: #2F4A37 !important;
  --modal-background: #F2EFE9 !important;
  --nav-collapse-icon-color: #B5B3A1 !important;
  --nav-collapse-icon-color-collapsed: #B5B3A1 !important;
  --nav-heading-color: #2F4A37 !important;
  --nav-heading-color-collapsed: #B5B3A1 !important;
  --nav-heading-color-hover: #2F4A37 !important;
  --nav-item-color-active: #2F4A37 !important;
  --nav-item-color-highlighted: #76B88C !important;
  --nav-item-color-hover: #2F4A37 !important;
  --nav-item-color-selected: #2F4A37 !important;
  --nav-tag-color: #B5B3A1 !important;
  --neutral-aqua: #689d6a !important;
  --neutral-blue: #458588 !important;
  --neutral-green: #98971a !important;
  --neutral-orange: #d65d0e !important;
  --neutral-purple: #b16286 !important;
  --neutral-red: #cc241d !important;
  --neutral-yellow: #d79921 !important;
  --oldWhite: #C1C497 !important;
  --oniViolet: #D2689C !important;
  --osakaBlue1: #509475 !important;
  --osakaBlue2: #ACD4CF !important;
  --osakaInk0: #111c18 !important;
  --osakaInk1: #23372B !important;
  --osakaInk2: #32473B !important;
  --osakaInk3: #364538 !important;
  --osakaInk4: #53685B !important;
  --paper-like: #F2EFE9 !important;
  --pdf-background: #F2EFE9 !important;
  --pdf-page-background: #F2EFE9 !important;
  --pdf-sidebar-background: #F2EFE9 !important;
  --peachRed: #db9f9c !important;
  --pill-border-color: #A5E7E1 !important;
  --pill-color-hover: #2F4A37 !important;
  --pill-color-remove: #B5B3A1 !important;
  --pill-color-remove-hover: #76B88C !important;
  --pre-code: #E8E6D4 !important;
  --prompt-background: #F2EFE9 !important;
  --raised-background: color-mix(in srgb, #F2EFE9 65%, transparent) linear-gradient(#F2EFE9, color-mix(in srgb, #F2EFE9 65%, transparent)) !important;
  --ribbon-background: #F8F8F8 !important;
  --ribbon-background-collapsed: #F2EFE9 !important;
  --roninYellow: #E5C736 !important;
  --sakuraPink: #D2689C !important;
  --samuraiRed: #FF5345 !important;
  --search-result-background: #F2EFE9 !important;
  --secondary: #76B88C !important;
  --setting-group-heading-color: #2F4A37 !important;
  --setting-items-background: #EDEBD9 !important;
  --setting-items-border-color: #A5E7E1 !important;
  --slider-track-background: #A5E7E1 !important;
  --soft-white: #F8F8F8 !important;
  --springBlue: #2DD5B7 !important;
  --springGreen: #549e6a !important;
  --springViolet1: #D2689C !important;
  --springViolet2: #8CD3CB !important;
  --status-bar-background: #F8F8F8 !important;
  --status-bar-border-color: #A5E7E1 !important;
  --suggestion-background: #F2EFE9 !important;
  --surimiOrange: #E67D64 !important;
  --tab-background-active: #F2EFE9 !important;
  --tab-container-background: #F8F8F8 !important;
  --tab-outline-color: #A5E7E1 !important;
  --tab-switcher-background: #F8F8F8 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #F8F8F8, transparent) !important;
  --tab-text-color: #B5B3A1 !important;
  --tab-text-color-focused-active-current: #2F4A37 !important;
  --tab-text-color-focused-highlighted: #76B88C !important;
  --table-add-button-border-color: #A5E7E1 !important;
  --table-border-color: #A5E7E1 !important;
  --table-drag-handle-background-active: #A5E7E1 !important;
  --table-drag-handle-color: #B5B3A1 !important;
  --table-header: rgb(240, 235, 224) !important;
  --table-header-border-color: #A5E7E1 !important;
  --table-header-color: #2F4A37 !important;
  --table-hover: #F6F4E2 !important;
  --table-row-even: rgb(245, 242, 234) !important;
  --table-row-odd: rgb(250, 248, 245) !important;
  --table-selection-border-color: #A5E7E1 !important;
  --tag-color: #76B88C !important;
  --tag-color-hover: #76B88C !important;
  --task-checkbox: #C7C5B3 !important;
  --tertiary: #76B88C !important;
  --text-a: #6EACBE !important;
  --text-a-hover: #FF7668 !important;
  --text-a-url: #8BC2D4 !important;
  --text-accent: #76B88C !important;
  --text-faint: #B5B3A1 !important;
  --text-highlight-bg: #BEEBE6 !important;
  --text-link: #3E6B62 !important;
  --text-mark: rgba(183, 208, 174, 0.4) !important;
  --text-normal: #2F4A37 !important;
  --text-selection: rgba(183, 208, 174, 0.5) !important;
  --text-tag: #7AB5A6 !important;
  --text-title-h1: #FF7668 !important;
  --text-title-h2: #F5A588 !important;
  --text-title-h3: #74824D !important;
  --text-title-h4: #76B88C !important;
  --text-title-h5: #7AB5A6 !important;
  --text-title-h6: #407A6F !important;
  --textHighlight: #BEEBE6 !important;
  --titleFont: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #F8F8F8 !important;
  --titlebar-background-focused: #F0EEDC !important;
  --titlebar-border-color: #A5E7E1 !important;
  --titlebar-text-color-focused: #2F4A37 !important;
  --vault-profile-color: #2F4A37 !important;
  --vault-profile-color-hover: #2F4A37 !important;
  --vim-cursor-backgroung: #E8E6D4 !important;
  --vim-cursor-color: #2F4A37 !important;
  --warm-off-white: #F5F5F0 !important;
  --waveAqua1: #2DD5B7 !important;
  --waveAqua2: #8CD3CB !important;
  --waveRed: #FF5345 !important;
  --winterBlue: #509475 !important;
  --winterGreen: #549e6a !important;
  --winterRed: #FF5345 !important;
  --winterYellow: #459451 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(248, 248, 248);
  color: rgb(47, 74, 55);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(242, 239, 233);
  color: rgb(47, 74, 55);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 248, 248);
  color: rgb(47, 74, 55);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(165, 231, 225);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(248, 248, 248);
  border-left-color: rgb(165, 231, 225);
  color: rgb(47, 74, 55);
}

body div#quartz-root {
  background-color: rgb(242, 239, 233);
  color: rgb(47, 74, 55);
}`,
    typography: `body .page article p > b, b {
  color: rgb(47, 74, 55);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 74, 55) none 0px;
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body .page article p > em, em {
  color: rgb(47, 74, 55);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 74, 55) none 0px;
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body .page article p > i, i {
  color: rgb(47, 74, 55);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 74, 55) none 0px;
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body .page article p > strong, strong {
  color: rgb(47, 74, 55);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 74, 55) none 0px;
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body .text-highlight {
  background-color: rgb(190, 235, 230);
  color: rgb(47, 74, 55);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 74, 55) none 0px;
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body del {
  color: rgb(47, 74, 55);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 74, 55) none 0px;
  text-decoration: line-through rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}`,
    links: `body a.external, footer a {
  color: rgb(110, 172, 190);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(110, 172, 190) none 0px;
  text-decoration: rgb(110, 172, 190);
  text-decoration-color: rgb(110, 172, 190);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(110, 172, 190);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(110, 172, 190) none 0px;
  text-decoration: rgb(110, 172, 190);
  text-decoration-color: rgb(110, 172, 190);
}

body a.internal.broken {
  color: rgb(110, 172, 190);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(110, 172, 190) none 0px;
  text-decoration: rgb(110, 172, 190);
  text-decoration-color: rgb(110, 172, 190);
}`,
    lists: `body dd {
  color: rgb(47, 74, 55);
}

body dt {
  color: rgb(47, 74, 55);
}

body ol > li {
  color: rgb(47, 74, 55);
}

body ol.overflow {
  background-color: rgb(242, 239, 233);
  border-bottom-color: rgb(47, 74, 55);
  border-left-color: rgb(47, 74, 55);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
}

body ul > li {
  color: rgb(47, 74, 55);
}

body ul.overflow {
  background-color: rgb(242, 239, 233);
  border-bottom-color: rgb(47, 74, 55);
  border-left-color: rgb(47, 74, 55);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(110, 172, 190);
  text-decoration: rgb(110, 172, 190);
}

body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(47, 74, 55);
  border-left-color: rgb(47, 74, 55);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
}

body table {
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
  color: rgb(47, 74, 55);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.062px;
}

body td {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(165, 231, 225);
  color: rgb(47, 74, 55);
}

body th {
  background-color: rgb(240, 235, 224);
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-width: 0px;
  border-left-color: rgb(47, 74, 55);
  border-left-width: 0px;
  border-right-color: rgb(47, 74, 55);
  border-right-width: 0px;
  border-top-color: rgb(47, 74, 55);
  border-top-width: 0px;
  color: rgb(47, 74, 55);
}

body thead {
  border-bottom-color: rgb(165, 231, 225);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

body tr {
  border-bottom-color: rgb(165, 231, 225);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}`,
    code: `body code {
  background-color: rgb(232, 230, 212);
  border-bottom-color: rgb(181, 179, 161);
  border-left-color: rgb(181, 179, 161);
  border-right-color: rgb(181, 179, 161);
  border-top-color: rgb(181, 179, 161);
  color: rgb(181, 179, 161);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(232, 230, 212);
  border-bottom-color: rgb(165, 231, 225);
  border-left-color: rgb(165, 231, 225);
  border-right-color: rgb(165, 231, 225);
  border-top-color: rgb(165, 231, 225);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(232, 230, 212);
  border-bottom-color: rgb(165, 231, 225);
  border-left-color: rgb(165, 231, 225);
  border-right-color: rgb(165, 231, 225);
  border-top-color: rgb(165, 231, 225);
  color: rgb(47, 74, 55);
}

body pre > code, pre:has(> code) {
  background-color: rgb(232, 230, 212);
  border-bottom-color: rgb(165, 231, 225);
  border-left-color: rgb(165, 231, 225);
  border-right-color: rgb(165, 231, 225);
  border-top-color: rgb(165, 231, 225);
}

body pre:has(> code) {
  background-color: rgb(232, 230, 212);
  border-bottom-color: rgb(165, 231, 225);
  border-left-color: rgb(165, 231, 225);
  border-right-color: rgb(165, 231, 225);
  border-top-color: rgb(165, 231, 225);
}`,
    images: `body audio {
  border-bottom-color: rgb(47, 74, 55);
  border-left-color: rgb(47, 74, 55);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
}

body figcaption {
  color: rgb(47, 74, 55);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(47, 74, 55);
  border-left-color: rgb(47, 74, 55);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
}

body img {
  border-bottom-color: rgb(47, 74, 55);
  border-left-color: rgb(47, 74, 55);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
}

body video {
  border-bottom-color: rgb(47, 74, 55);
  border-left-color: rgb(47, 74, 55);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
}`,
    embeds: `body .file-embed {
  background-color: rgb(237, 235, 217);
}

body .footnotes {
  border-top-color: rgb(47, 74, 55);
  color: rgb(47, 74, 55);
}

body .transclude {
  border-bottom-color: rgb(47, 74, 55);
  border-left-color: rgb(165, 231, 225);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(47, 74, 55);
  border-left-color: rgb(165, 231, 225);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=checkbox] {
  border-bottom-color: rgb(199, 197, 179);
  border-left-color: rgb(199, 197, 179);
  border-right-color: rgb(199, 197, 179);
  border-top-color: rgb(199, 197, 179);
}

body li.task-list-item[data-task='!'] {
  color: rgb(47, 74, 55);
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body li.task-list-item[data-task='*'] {
  color: rgb(47, 74, 55);
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body li.task-list-item[data-task='-'] {
  color: rgb(47, 74, 55);
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body li.task-list-item[data-task='/'] {
  color: rgb(47, 74, 55);
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body li.task-list-item[data-task='>'] {
  color: rgb(47, 74, 55);
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body li.task-list-item[data-task='?'] {
  color: rgb(47, 74, 55);
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body li.task-list-item[data-task='I'] {
  color: rgb(47, 74, 55);
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body li.task-list-item[data-task='S'] {
  color: rgb(47, 74, 55);
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body li.task-list-item[data-task='b'] {
  color: rgb(47, 74, 55);
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body li.task-list-item[data-task='c'] {
  color: rgb(47, 74, 55);
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body li.task-list-item[data-task='d'] {
  color: rgb(47, 74, 55);
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body li.task-list-item[data-task='f'] {
  color: rgb(47, 74, 55);
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body li.task-list-item[data-task='i'] {
  color: rgb(47, 74, 55);
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body li.task-list-item[data-task='k'] {
  color: rgb(47, 74, 55);
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body li.task-list-item[data-task='l'] {
  color: rgb(47, 74, 55);
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body li.task-list-item[data-task='p'] {
  color: rgb(47, 74, 55);
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body li.task-list-item[data-task='u'] {
  color: rgb(47, 74, 55);
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body li.task-list-item[data-task='w'] {
  color: rgb(47, 74, 55);
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(165, 231, 225);
  border-left-color: rgb(165, 231, 225);
  border-right-color: rgb(165, 231, 225);
  border-top-color: rgb(165, 231, 225);
  color: rgb(47, 74, 55);
}

body .search > .search-container > .search-space {
  background-color: rgb(242, 239, 233);
}

body .search > .search-container > .search-space > * {
  color: rgb(47, 74, 55);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 74, 55) none 0px;
  text-decoration: rgb(47, 74, 55);
  text-decoration-color: rgb(47, 74, 55);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(47, 74, 55);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(47, 74, 55);
  border-left-color: rgb(47, 74, 55);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(47, 74, 55);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(248, 248, 248);
  color: rgb(47, 74, 55);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(47, 74, 55);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(47, 74, 55);
  border-left-color: rgb(47, 74, 55);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
  color: rgb(47, 74, 55);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(248, 248, 248);
  color: rgb(47, 74, 55);
}

body a.internal.tag-link::before {
  color: rgb(118, 184, 140);
}

body h1 {
  color: rgb(255, 118, 104);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(245, 165, 136);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(47, 74, 55);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(116, 130, 77);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(118, 184, 140);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(122, 181, 166);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(64, 122, 111);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(165, 231, 225);
  border-left-color: rgb(165, 231, 225);
  border-right-color: rgb(165, 231, 225);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(242, 239, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 239, 233);
}

body ::-webkit-scrollbar-corner {
  background: rgb(242, 239, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 239, 233);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(242, 239, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 239, 233);
  border-bottom-color: rgb(47, 74, 55);
  border-left-color: rgb(47, 74, 55);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(242, 239, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 239, 233);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(242, 239, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 239, 233);
}

body ::-webkit-scrollbar-track {
  background: rgb(242, 239, 233) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 239, 233);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(47, 74, 55);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(47, 74, 55);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(47, 74, 55);
}`,
    footer: `body footer {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(165, 231, 225);
  border-left-color: rgb(165, 231, 225);
  border-right-color: rgb(165, 231, 225);
  border-top-color: rgb(165, 231, 225);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(47, 74, 55);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(47, 74, 55);
  border-left-color: rgb(47, 74, 55);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
  color: rgb(47, 74, 55);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(47, 74, 55);
  border-left-color: rgb(47, 74, 55);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
}

body ul.section-ul {
  border-bottom-color: rgb(47, 74, 55);
  border-left-color: rgb(47, 74, 55);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(181, 179, 161);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(47, 74, 55);
  border-left-color: rgb(47, 74, 55);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
  color: rgb(47, 74, 55);
}

body .metadata {
  border-bottom-color: rgb(165, 231, 225);
  border-left-color: rgb(165, 231, 225);
  border-right-color: rgb(165, 231, 225);
  border-top-color: rgb(165, 231, 225);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(248, 248, 248);
}

body .page-header h2.page-title {
  color: rgb(47, 74, 55);
}

body abbr {
  color: rgb(47, 74, 55);
  text-decoration: underline dotted rgb(47, 74, 55);
}

body details {
  border-bottom-color: rgb(47, 74, 55);
  border-left-color: rgb(47, 74, 55);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
}

body kbd {
  background-color: rgb(237, 235, 217);
  border-bottom-color: rgb(47, 74, 55);
  border-left-color: rgb(47, 74, 55);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
  color: rgb(47, 74, 55);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(47, 74, 55);
  border-left-color: rgb(47, 74, 55);
  border-right-color: rgb(47, 74, 55);
  border-top-color: rgb(47, 74, 55);
}

body sub {
  color: rgb(47, 74, 55);
}

body summary {
  color: rgb(47, 74, 55);
}

body sup {
  color: rgb(47, 74, 55);
}`,
  },
};
