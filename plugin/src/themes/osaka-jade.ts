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
  --autumnGreen: #143614;
  --autumnRed: #db9f9c;
  --autumnYellow: #E5C736;
  --background-modifier-border: #81B8A8;
  --background-primary: #111c18;
  --background-primary-alt: #23372B;
  --background-secondary: #32473B;
  --background-secondary-alt: #364538;
  --bases-cards-background: #111c18;
  --bases-cards-cover-background: #23372B;
  --bases-cards-shadow: 0 0 0 1px #81B8A8;
  --bases-embed-border-color: #81B8A8;
  --bases-table-border-color: #81B8A8;
  --bases-table-cell-background-active: #111c18;
  --bases-table-cell-background-disabled: #23372B;
  --bases-table-cell-shadow-focus: 0 0 0 2px #81B8A8;
  --bases-table-group-background: #23372B;
  --bases-table-header-background: #111c18;
  --bases-table-summary-background: #111c18;
  --blockquote-border-color: #81B8A8;
  --boatYellow1: #DEB266;
  --boatYellow2: #E5C736;
  --bodyFont: var(--font-text);
  --bold-color: #C1C497;
  --bright-aqua: #8ec07c;
  --bright-blue: #83a598;
  --bright-green: #b8bb26;
  --bright-orange: #fe8019;
  --bright-purple: #d3869b;
  --bright-red: #fb4934;
  --bright-yellow: #fabd2f;
  --canvas-background: #111c18;
  --canvas-card-label-color: #D6D5BC;
  --caret-color: #F7E8B2;
  --carpYellow: #D7C995;
  --checkbox-border-color: #D6D5BC;
  --checkbox-color: #81B8A8;
  --checkbox-marker-color: #111c18;
  --code-background: #23372B;
  --code-block: #D6D5BC;
  --code-border-color: #81B8A8;
  --code-comment: #D6D5BC;
  --code-normal: #F7E8B2;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #D6D5BC;
  --collapse-icon-color-collapsed: #549e6a;
  --cool-off-white: #F0F5F5;
  --crystalBlue: #75bbb3;
  --dark: var(--text-normal);
  --dark0: #282828;
  --dark0-hard: #1d2021;
  --dark0-soft: #32302f;
  --dark1: #3c3836;
  --dark2: #504945;
  --dark3: #665c54;
  --dark4: #7c6f64;
  --darkgray: var(--text-normal);
  --divider-color: #81B8A8;
  --divider-color-hover: #81B8A8;
  --dragonBlue: #75bbb3;
  --embed-block-shadow-hover: 0 0 0 1px #81B8A8, inset 0 0 0 1px #81B8A8;
  --embed-border-start: 2px solid #81B8A8;
  --faded-aqua: #427b58;
  --faded-blue: #076678;
  --faded-green: #79740e;
  --faded-orange: #af3a03;
  --faded-purple: #8f3f71;
  --faded-red: #9d0006;
  --faded-yellow: #b57614;
  --file-header-background: #111c18;
  --file-header-background-focused: #111c18;
  --flair-color: #F7E8B2;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, 'Arial';
  --font-text: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  --footnote-divider-color: #81B8A8;
  --footnote-id-color-no-occurrences: #D6D5BC;
  --fujiGray: #D6D5BC;
  --fujiWhite: #F7E8B2;
  --graph-node-focused: #549e6a;
  --graph-node-unresolved: #D6D5BC;
  --graph-text: #F7E8B2;
  --gray: #928374;
  --headerFont: var(--font-text);
  --heading-formatting: #D6D5BC;
  --highlight: var(--text-highlight-bg);
  --hr-color: #81B8A8;
  --icon-color-active: #549e6a;
  --icon-color-focused: #F7E8B2;
  --inline-code: #549e6a;
  --input-date-separator: #D6D5BC;
  --input-placeholder-color: #D6D5BC;
  --interactive-accent: #81B8A8;
  --interactive-accent-rgb: #549e6a;
  --interactive-before: #53685B;
  --katanaGray: #81B8A8;
  --light: var(--background-primary);
  --light0: #fbf1c7;
  --light0-hard: #f9f5d7;
  --light0-soft: #f2e5bc;
  --light1: #ebdbb2;
  --light2: #d5c4a1;
  --light3: #bdae93;
  --light4: #a89984;
  --lightBlue: #ACD4CF;
  --lightgray: var(--background-secondary);
  --link-color: #549e6a;
  --link-external-color: #549e6a;
  --link-unresolved-color: #549e6a;
  --list-marker-color: #D6D5BC;
  --list-marker-color-collapsed: #549e6a;
  --lotusAqua: #7AB5A6;
  --lotusAqua2: #85BFB1;
  --lotusBlue1: #D7EFEB;
  --lotusBlue2: #BEEBE6;
  --lotusBlue3: #A5E7E1;
  --lotusBlue4: #407A6F;
  --lotusBlue5: #3E6B62;
  --lotusCyan: #E8F3EA;
  --lotusGray: #E8E6D4;
  --lotusGray2: #C7C5B3;
  --lotusGray3: #B5B3A1;
  --lotusGreen: #76B88C;
  --lotusGreen2: #6AAB82;
  --lotusGreen3: #C4E4B0;
  --lotusInk1: #2F4A37;
  --lotusInk2: #1A2E20;
  --lotusOrange: #F5A588;
  --lotusOrange2: #F2B195;
  --lotusPink: #E2A4C6;
  --lotusRed: #FF7668;
  --lotusRed2: #FF8A7C;
  --lotusRed3: #FF5345;
  --lotusRed4: #E6BEBC;
  --lotusTeal1: #6EACBE;
  --lotusTeal2: #8BC2D4;
  --lotusTeal3: #7AA5B7;
  --lotusViolet1: #E2A4C6;
  --lotusViolet2: #D68BB4;
  --lotusViolet3: #F2E4E8;
  --lotusViolet4: #B85080;
  --lotusWhite0: #F9F7E5;
  --lotusWhite1: #F6F4E2;
  --lotusWhite2: #F3F1DF;
  --lotusWhite3: #F0EEDC;
  --lotusWhite4: #EDEBD9;
  --lotusWhite5: #EAE8D6;
  --lotusYellow: #74824D;
  --lotusYellow2: #8B9159;
  --lotusYellow3: #F0DC5A;
  --lotusYellow4: #EBD8B9;
  --menu-background: #32473B;
  --metadata-border-color: #81B8A8;
  --metadata-divider-color: #81B8A8;
  --metadata-input-text-color: #F7E8B2;
  --modal-background: #111c18;
  --nav-collapse-icon-color: #D6D5BC;
  --nav-collapse-icon-color-collapsed: #D6D5BC;
  --nav-heading-color: #F7E8B2;
  --nav-heading-color-collapsed: #D6D5BC;
  --nav-heading-color-hover: #F7E8B2;
  --nav-item-color-active: #F7E8B2;
  --nav-item-color-highlighted: #549e6a;
  --nav-item-color-hover: #F7E8B2;
  --nav-item-color-selected: #F7E8B2;
  --nav-tag-color: #D6D5BC;
  --neutral-aqua: #689d6a;
  --neutral-blue: #458588;
  --neutral-green: #98971a;
  --neutral-orange: #d65d0e;
  --neutral-purple: #b16286;
  --neutral-red: #cc241d;
  --neutral-yellow: #d79921;
  --oldWhite: #C1C497;
  --oniViolet: #D2689C;
  --osakaBlue1: #509475;
  --osakaBlue2: #ACD4CF;
  --osakaInk0: #111c18;
  --osakaInk1: #23372B;
  --osakaInk2: #32473B;
  --osakaInk3: #364538;
  --osakaInk4: #53685B;
  --paper-like: #F2EFE9;
  --pdf-background: #111c18;
  --pdf-page-background: #111c18;
  --pdf-shadow: 0 0 0 1px #81B8A8;
  --pdf-sidebar-background: #111c18;
  --pdf-thumbnail-shadow: 0 0 0 1px #81B8A8;
  --peachRed: #db9f9c;
  --pill-border-color: #81B8A8;
  --pill-color-hover: #F7E8B2;
  --pill-color-remove: #D6D5BC;
  --pill-color-remove-hover: #549e6a;
  --pre-code: #23372B;
  --prompt-background: #111c18;
  --ribbon-background: #32473B;
  --ribbon-background-collapsed: #111c18;
  --roninYellow: #E5C736;
  --sakuraPink: #D2689C;
  --samuraiRed: #FF5345;
  --search-result-background: #111c18;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #F7E8B2;
  --setting-items-background: #23372B;
  --setting-items-border-color: #81B8A8;
  --slider-track-background: #81B8A8;
  --soft-white: #F8F8F8;
  --springBlue: #2DD5B7;
  --springGreen: #549e6a;
  --springViolet1: #D2689C;
  --springViolet2: #8CD3CB;
  --status-bar-background: #32473B;
  --status-bar-border-color: #81B8A8;
  --suggestion-background: #111c18;
  --surimiOrange: #E67D64;
  --tab-background-active: #111c18;
  --tab-container-background: #32473B;
  --tab-outline-color: #81B8A8;
  --tab-switcher-background: #32473B;
  --tab-switcher-menubar-background: linear-gradient(to top, #32473B, transparent);
  --tab-text-color: #D6D5BC;
  --tab-text-color-focused-active-current: #F7E8B2;
  --tab-text-color-focused-highlighted: #549e6a;
  --table-add-button-border-color: #81B8A8;
  --table-border-color: #81B8A8;
  --table-drag-handle-background-active: #81B8A8;
  --table-drag-handle-color: #D6D5BC;
  --table-header: #32473B;
  --table-header-border-color: #81B8A8;
  --table-header-color: #F7E8B2;
  --table-hover: #364538;
  --table-row-even: #23372B;
  --table-row-odd: #111c18;
  --table-selection-border-color: #81B8A8;
  --tag-color: #549e6a;
  --tag-color-hover: #549e6a;
  --task-checkbox: #53685B;
  --tertiary: var(--text-accent);
  --text-a: #75bbb3;
  --text-a-hover: #db9f9c;
  --text-a-url: #81B8A8;
  --text-accent: #549e6a;
  --text-faint: #D6D5BC;
  --text-highlight-bg: #364538;
  --text-link: #2DD5B7;
  --text-mark: rgba(80, 148, 117, 0.4);
  --text-normal: #F7E8B2;
  --text-selection: rgba(80, 148, 117, 0.5);
  --text-tag: #D2689C;
  --text-title-h1: #FF5345;
  --text-title-h2: #E67D64;
  --text-title-h3: #E5C736;
  --text-title-h4: #549e6a;
  --text-title-h5: #2DD5B7;
  --text-title-h6: #509475;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #32473B;
  --titlebar-background-focused: #364538;
  --titlebar-border-color: #81B8A8;
  --titlebar-text-color-focused: #F7E8B2;
  --vault-profile-color: #F7E8B2;
  --vault-profile-color-hover: #F7E8B2;
  --vim-cursor-backgroung: #D7C995;
  --vim-cursor-color: #111c18;
  --warm-off-white: #F5F5F0;
  --waveAqua1: #2DD5B7;
  --waveAqua2: #8CD3CB;
  --waveRed: #FF5345;
  --winterBlue: #509475;
  --winterGreen: #549e6a;
  --winterRed: #FF5345;
  --winterYellow: #459451;
  --quartz-icon-color: currentColor;
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
  --autumnGreen: #143614;
  --autumnRed: #db9f9c;
  --autumnYellow: #E5C736;
  --background-modifier-border: #A5E7E1;
  --background-primary: #F2EFE9;
  --background-primary-alt: #EDEBD9;
  --background-secondary: #F8F8F8;
  --background-secondary-alt: #F0EEDC;
  --bases-cards-background: #F2EFE9;
  --bases-cards-cover-background: #EDEBD9;
  --bases-cards-shadow: 0 0 0 1px #A5E7E1;
  --bases-embed-border-color: #A5E7E1;
  --bases-table-border-color: #A5E7E1;
  --bases-table-cell-background-active: #F2EFE9;
  --bases-table-cell-background-disabled: #EDEBD9;
  --bases-table-cell-shadow-focus: 0 0 0 2px #A5E7E1;
  --bases-table-group-background: #EDEBD9;
  --bases-table-header-background: #F2EFE9;
  --bases-table-summary-background: #F2EFE9;
  --blockquote-border-color: #A5E7E1;
  --blur-background: color-mix(in srgb, #F2EFE9 65%, transparent) linear-gradient(#F2EFE9, color-mix(in srgb, #F2EFE9 65%, transparent));
  --boatYellow1: #DEB266;
  --boatYellow2: #E5C736;
  --bodyFont: var(--font-text);
  --bold-color: #2F4A37;
  --bright-aqua: #8ec07c;
  --bright-blue: #83a598;
  --bright-green: #b8bb26;
  --bright-orange: #fe8019;
  --bright-purple: #d3869b;
  --bright-red: #fb4934;
  --bright-yellow: #fabd2f;
  --canvas-background: #F2EFE9;
  --canvas-card-label-color: #B5B3A1;
  --caret-color: #2F4A37;
  --carpYellow: #D7C995;
  --checkbox-border-color: #B5B3A1;
  --checkbox-color: #A5E7E1;
  --checkbox-marker-color: #F2EFE9;
  --code-background: #EDEBD9;
  --code-block: #B5B3A1;
  --code-border-color: #A5E7E1;
  --code-comment: #B5B3A1;
  --code-normal: #2F4A37;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #B5B3A1;
  --collapse-icon-color-collapsed: #76B88C;
  --cool-off-white: #F0F5F5;
  --crystalBlue: #75bbb3;
  --dark: var(--text-normal);
  --dark0: #282828;
  --dark0-hard: #1d2021;
  --dark0-soft: #32302f;
  --dark1: #3c3836;
  --dark2: #504945;
  --dark3: #665c54;
  --dark4: #7c6f64;
  --darkgray: var(--text-normal);
  --divider-color: #A5E7E1;
  --divider-color-hover: #A5E7E1;
  --dragonBlue: #75bbb3;
  --embed-block-shadow-hover: 0 0 0 1px #A5E7E1, inset 0 0 0 1px #A5E7E1;
  --embed-border-start: 2px solid #A5E7E1;
  --faded-aqua: #427b58;
  --faded-blue: #076678;
  --faded-green: #79740e;
  --faded-orange: #af3a03;
  --faded-purple: #8f3f71;
  --faded-red: #9d0006;
  --faded-yellow: #b57614;
  --file-header-background: #F2EFE9;
  --file-header-background-focused: #F2EFE9;
  --flair-color: #2F4A37;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, 'Arial';
  --font-text: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  --footnote-divider-color: #A5E7E1;
  --footnote-id-color-no-occurrences: #B5B3A1;
  --fujiGray: #D6D5BC;
  --fujiWhite: #F7E8B2;
  --graph-node-focused: #76B88C;
  --graph-node-unresolved: #B5B3A1;
  --graph-text: #2F4A37;
  --gray: #928374;
  --headerFont: var(--font-text);
  --heading-formatting: #B5B3A1;
  --highlight: var(--text-highlight-bg);
  --hr-color: #A5E7E1;
  --icon-color-active: #76B88C;
  --icon-color-focused: #2F4A37;
  --inline-code: #76B88C;
  --input-date-separator: #B5B3A1;
  --input-placeholder-color: #B5B3A1;
  --interactive-accent: #A5E7E1;
  --interactive-accent-rgb: #76B88C;
  --interactive-before: #C7C5B3;
  --katanaGray: #81B8A8;
  --light: var(--background-primary);
  --light0: #fbf1c7;
  --light0-hard: #f9f5d7;
  --light0-soft: #f2e5bc;
  --light1: #ebdbb2;
  --light2: #d5c4a1;
  --light3: #bdae93;
  --light4: #a89984;
  --lightBlue: #ACD4CF;
  --lightgray: var(--background-secondary);
  --link-color: #76B88C;
  --link-external-color: #76B88C;
  --link-unresolved-color: #76B88C;
  --list-marker-color: #B5B3A1;
  --list-marker-color-collapsed: #76B88C;
  --lotusAqua: #7AB5A6;
  --lotusAqua2: #85BFB1;
  --lotusBlue1: #D7EFEB;
  --lotusBlue2: #BEEBE6;
  --lotusBlue3: #A5E7E1;
  --lotusBlue4: #407A6F;
  --lotusBlue5: #3E6B62;
  --lotusCyan: #E8F3EA;
  --lotusGray: #E8E6D4;
  --lotusGray2: #C7C5B3;
  --lotusGray3: #B5B3A1;
  --lotusGreen: #76B88C;
  --lotusGreen2: #6AAB82;
  --lotusGreen3: #C4E4B0;
  --lotusInk1: #2F4A37;
  --lotusInk2: #1A2E20;
  --lotusOrange: #F5A588;
  --lotusOrange2: #F2B195;
  --lotusPink: #E2A4C6;
  --lotusRed: #FF7668;
  --lotusRed2: #FF8A7C;
  --lotusRed3: #FF5345;
  --lotusRed4: #E6BEBC;
  --lotusTeal1: #6EACBE;
  --lotusTeal2: #8BC2D4;
  --lotusTeal3: #7AA5B7;
  --lotusViolet1: #E2A4C6;
  --lotusViolet2: #D68BB4;
  --lotusViolet3: #F2E4E8;
  --lotusViolet4: #B85080;
  --lotusWhite0: #F9F7E5;
  --lotusWhite1: #F6F4E2;
  --lotusWhite2: #F3F1DF;
  --lotusWhite3: #F0EEDC;
  --lotusWhite4: #EDEBD9;
  --lotusWhite5: #EAE8D6;
  --lotusYellow: #74824D;
  --lotusYellow2: #8B9159;
  --lotusYellow3: #F0DC5A;
  --lotusYellow4: #EBD8B9;
  --menu-background: #F8F8F8;
  --metadata-border-color: #A5E7E1;
  --metadata-divider-color: #A5E7E1;
  --metadata-input-text-color: #2F4A37;
  --modal-background: #F2EFE9;
  --nav-collapse-icon-color: #B5B3A1;
  --nav-collapse-icon-color-collapsed: #B5B3A1;
  --nav-heading-color: #2F4A37;
  --nav-heading-color-collapsed: #B5B3A1;
  --nav-heading-color-hover: #2F4A37;
  --nav-item-color-active: #2F4A37;
  --nav-item-color-highlighted: #76B88C;
  --nav-item-color-hover: #2F4A37;
  --nav-item-color-selected: #2F4A37;
  --nav-tag-color: #B5B3A1;
  --neutral-aqua: #689d6a;
  --neutral-blue: #458588;
  --neutral-green: #98971a;
  --neutral-orange: #d65d0e;
  --neutral-purple: #b16286;
  --neutral-red: #cc241d;
  --neutral-yellow: #d79921;
  --oldWhite: #C1C497;
  --oniViolet: #D2689C;
  --osakaBlue1: #509475;
  --osakaBlue2: #ACD4CF;
  --osakaInk0: #111c18;
  --osakaInk1: #23372B;
  --osakaInk2: #32473B;
  --osakaInk3: #364538;
  --osakaInk4: #53685B;
  --paper-like: #F2EFE9;
  --pdf-background: #F2EFE9;
  --pdf-page-background: #F2EFE9;
  --pdf-sidebar-background: #F2EFE9;
  --peachRed: #db9f9c;
  --pill-border-color: #A5E7E1;
  --pill-color-hover: #2F4A37;
  --pill-color-remove: #B5B3A1;
  --pill-color-remove-hover: #76B88C;
  --pre-code: #E8E6D4;
  --prompt-background: #F2EFE9;
  --raised-background: color-mix(in srgb, #F2EFE9 65%, transparent) linear-gradient(#F2EFE9, color-mix(in srgb, #F2EFE9 65%, transparent));
  --ribbon-background: #F8F8F8;
  --ribbon-background-collapsed: #F2EFE9;
  --roninYellow: #E5C736;
  --sakuraPink: #D2689C;
  --samuraiRed: #FF5345;
  --search-result-background: #F2EFE9;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #2F4A37;
  --setting-items-background: #EDEBD9;
  --setting-items-border-color: #A5E7E1;
  --slider-track-background: #A5E7E1;
  --soft-white: #F8F8F8;
  --springBlue: #2DD5B7;
  --springGreen: #549e6a;
  --springViolet1: #D2689C;
  --springViolet2: #8CD3CB;
  --status-bar-background: #F8F8F8;
  --status-bar-border-color: #A5E7E1;
  --suggestion-background: #F2EFE9;
  --surimiOrange: #E67D64;
  --tab-background-active: #F2EFE9;
  --tab-container-background: #F8F8F8;
  --tab-outline-color: #A5E7E1;
  --tab-switcher-background: #F8F8F8;
  --tab-switcher-menubar-background: linear-gradient(to top, #F8F8F8, transparent);
  --tab-text-color: #B5B3A1;
  --tab-text-color-focused-active-current: #2F4A37;
  --tab-text-color-focused-highlighted: #76B88C;
  --table-add-button-border-color: #A5E7E1;
  --table-border-color: #A5E7E1;
  --table-drag-handle-background-active: #A5E7E1;
  --table-drag-handle-color: #B5B3A1;
  --table-header: rgb(240, 235, 224);
  --table-header-border-color: #A5E7E1;
  --table-header-color: #2F4A37;
  --table-hover: #F6F4E2;
  --table-row-even: rgb(245, 242, 234);
  --table-row-odd: rgb(250, 248, 245);
  --table-selection-border-color: #A5E7E1;
  --tag-color: #76B88C;
  --tag-color-hover: #76B88C;
  --task-checkbox: #C7C5B3;
  --tertiary: var(--text-accent);
  --text-a: #6EACBE;
  --text-a-hover: #FF7668;
  --text-a-url: #8BC2D4;
  --text-accent: #76B88C;
  --text-faint: #B5B3A1;
  --text-highlight-bg: #BEEBE6;
  --text-link: #3E6B62;
  --text-mark: rgba(183, 208, 174, 0.4);
  --text-normal: #2F4A37;
  --text-selection: rgba(183, 208, 174, 0.5);
  --text-tag: #7AB5A6;
  --text-title-h1: #FF7668;
  --text-title-h2: #F5A588;
  --text-title-h3: #74824D;
  --text-title-h4: #76B88C;
  --text-title-h5: #7AB5A6;
  --text-title-h6: #407A6F;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #F8F8F8;
  --titlebar-background-focused: #F0EEDC;
  --titlebar-border-color: #A5E7E1;
  --titlebar-text-color-focused: #2F4A37;
  --vault-profile-color: #2F4A37;
  --vault-profile-color-hover: #2F4A37;
  --vim-cursor-backgroung: #E8E6D4;
  --vim-cursor-color: #2F4A37;
  --warm-off-white: #F5F5F0;
  --waveAqua1: #2DD5B7;
  --waveAqua2: #8CD3CB;
  --waveRed: #FF5345;
  --winterBlue: #509475;
  --winterGreen: #549e6a;
  --winterRed: #FF5345;
  --winterYellow: #459451;
  --quartz-icon-color: currentColor;
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
