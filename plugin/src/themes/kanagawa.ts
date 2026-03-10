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
  --autumnGreen: #76946A;
  --autumnRed: #C34043;
  --autumnYellow: #DCA561;
  --background-modifier-border: #658594;
  --background-primary: #1F1F28;
  --background-primary-alt: #1F1F28;
  --background-secondary: #181820;
  --background-secondary-alt: #2A2A37;
  --bases-cards-background: #1F1F28;
  --bases-cards-cover-background: #1F1F28;
  --bases-cards-shadow: 0 0 0 1px #658594;
  --bases-embed-border-color: #658594;
  --bases-table-border-color: #658594;
  --bases-table-cell-background-active: #1F1F28;
  --bases-table-cell-background-disabled: #1F1F28;
  --bases-table-cell-shadow-focus: 0 0 0 2px #658594;
  --bases-table-group-background: #1F1F28;
  --bases-table-header-background: #1F1F28;
  --bases-table-summary-background: #1F1F28;
  --blockquote-border-color: #658594;
  --boatYellow1: #938056;
  --boatYellow2: #C0A36E;
  --bodyFont: var(--font-text);
  --bold-color: #ebdbb2;
  --bright-aqua: #8ec07c;
  --bright-blue: #83a598;
  --bright-green: #b8bb26;
  --bright-orange: #fe8019;
  --bright-purple: #d3869b;
  --bright-red: #fb4934;
  --bright-yellow: #fabd2f;
  --canvas-background: #1F1F28;
  --canvas-card-label-color: #727169;
  --caret-color: #DCD7BA;
  --carpYellow: #E6C384;
  --checkbox-border-color: #727169;
  --checkbox-color: #658594;
  --checkbox-marker-color: #1F1F28;
  --code-background: #1F1F28;
  --code-block: #727169;
  --code-border-color: #658594;
  --code-comment: #727169;
  --code-normal: #DCD7BA;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #727169;
  --collapse-icon-color-collapsed: #76946A;
  --cool-off-white: #F0F5F5;
  --crystalBlue: #7E9CD8;
  --dark: var(--text-normal);
  --dark0: #282828;
  --dark0-hard: #1d2021;
  --dark0-soft: #32302f;
  --dark1: #3c3836;
  --dark2: #504945;
  --dark3: #665c54;
  --dark4: #7c6f64;
  --darkgray: var(--text-normal);
  --divider-color: #658594;
  --divider-color-hover: #658594;
  --dragonBlue: #658594;
  --embed-block-shadow-hover: 0 0 0 1px #658594, inset 0 0 0 1px #658594;
  --embed-border-start: 2px solid #658594;
  --faded-aqua: #427b58;
  --faded-blue: #076678;
  --faded-green: #79740e;
  --faded-orange: #af3a03;
  --faded-purple: #8f3f71;
  --faded-red: #9d0006;
  --faded-yellow: #b57614;
  --file-header-background: #1F1F28;
  --file-header-background-focused: #1F1F28;
  --flair-color: #DCD7BA;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, 'Arial';
  --font-text: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  --footnote-divider-color: #658594;
  --footnote-id-color-no-occurrences: #727169;
  --fujiGray: #727169;
  --fujiWhite: #DCD7BA;
  --graph-node-focused: #76946A;
  --graph-node-unresolved: #727169;
  --graph-text: #DCD7BA;
  --gray: #928374;
  --headerFont: var(--font-text);
  --heading-formatting: #727169;
  --highlight: var(--text-highlight-bg);
  --hr-color: #658594;
  --icon-color-active: #76946A;
  --icon-color-focused: #DCD7BA;
  --inline-code: #98BB6C;
  --input-date-separator: #727169;
  --input-placeholder-color: #727169;
  --interactive-accent: #658594;
  --interactive-accent-rgb: #98BB6C;
  --interactive-before: #54546D;
  --katanaGray: #717C7C;
  --light: var(--background-primary);
  --light0: #fbf1c7;
  --light0-hard: #f9f5d7;
  --light0-soft: #f2e5bc;
  --light1: #ebdbb2;
  --light2: #d5c4a1;
  --light3: #bdae93;
  --light4: #a89984;
  --lightBlue: #A3D4D5;
  --lightgray: var(--background-secondary);
  --link-color: #76946A;
  --link-external-color: #76946A;
  --link-unresolved-color: #76946A;
  --list-marker-color: #727169;
  --list-marker-color-collapsed: #76946A;
  --lotusAqua: #597b75;
  --lotusAqua2: #5e857a;
  --lotusBlue1: #c7d7e0;
  --lotusBlue2: #b5cbd2;
  --lotusBlue3: #9fb5c9;
  --lotusBlue4: #4d699b;
  --lotusBlue5: #5d57a3;
  --lotusCyan: #d7e3d8;
  --lotusGray: #dcd7ba;
  --lotusGray2: #716e61;
  --lotusGray3: #8a8980;
  --lotusGreen: #6f894e;
  --lotusGreen2: #6e915f;
  --lotusGreen3: #b7d0ae;
  --lotusInk1: #545464;
  --lotusInk2: #43436c;
  --lotusOrange: #cc6d00;
  --lotusOrange2: #e98a00;
  --lotusPink: #b35b79;
  --lotusRed: #c84053;
  --lotusRed2: #d7474b;
  --lotusRed3: #e82424;
  --lotusRed4: #d9a594;
  --lotusTeal1: #4e8ca2;
  --lotusTeal2: #6693bf;
  --lotusTeal3: #5a7785;
  --lotusViolet1: #a09cac;
  --lotusViolet2: #766b90;
  --lotusViolet3: #c9cbd1;
  --lotusViolet4: #624c83;
  --lotusWhite0: #d5cea3;
  --lotusWhite1: #dcd5ac;
  --lotusWhite2: #e5ddb0;
  --lotusWhite3: #f2ecbc;
  --lotusWhite4: #e7dba0;
  --lotusWhite5: #e4d794;
  --lotusYellow: #77713f;
  --lotusYellow2: #836f4a;
  --lotusYellow3: #de9800;
  --lotusYellow4: #f9d791;
  --menu-background: #181820;
  --metadata-border-color: #658594;
  --metadata-divider-color: #658594;
  --metadata-input-text-color: #DCD7BA;
  --modal-background: #1F1F28;
  --nav-collapse-icon-color: #727169;
  --nav-collapse-icon-color-collapsed: #727169;
  --nav-heading-color: #DCD7BA;
  --nav-heading-color-collapsed: #727169;
  --nav-heading-color-hover: #DCD7BA;
  --nav-item-color-active: #DCD7BA;
  --nav-item-color-highlighted: #76946A;
  --nav-item-color-hover: #DCD7BA;
  --nav-item-color-selected: #DCD7BA;
  --nav-tag-color: #727169;
  --neutral-aqua: #689d6a;
  --neutral-blue: #458588;
  --neutral-green: #98971a;
  --neutral-orange: #d65d0e;
  --neutral-purple: #b16286;
  --neutral-red: #cc241d;
  --neutral-yellow: #d79921;
  --oldWhite: #C8C093;
  --oniViolet: #957FB8;
  --paper-like: #F2EFE9;
  --pdf-background: #1F1F28;
  --pdf-page-background: #1F1F28;
  --pdf-shadow: 0 0 0 1px #658594;
  --pdf-sidebar-background: #1F1F28;
  --pdf-thumbnail-shadow: 0 0 0 1px #658594;
  --peachRed: #FF5D62;
  --pill-border-color: #658594;
  --pill-color-hover: #DCD7BA;
  --pill-color-remove: #727169;
  --pill-color-remove-hover: #76946A;
  --pre-code: #16161D;
  --prompt-background: #1F1F28;
  --ribbon-background: #181820;
  --ribbon-background-collapsed: #1F1F28;
  --roninYellow: #FF9E3B;
  --sakuraPink: #D27E99;
  --samuraiRed: #E82424;
  --search-result-background: #1F1F28;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #DCD7BA;
  --setting-items-background: #1F1F28;
  --setting-items-border-color: #658594;
  --slider-track-background: #658594;
  --soft-white: #F8F8F8;
  --springBlue: #7FB4CA;
  --springGreen: #98BB6C;
  --springViolet1: #938AA9;
  --springViolet2: #9CABCA;
  --status-bar-background: #181820;
  --status-bar-border-color: #658594;
  --suggestion-background: #1F1F28;
  --sumiInk0: #16161D;
  --sumiInk1: #1F1F28;
  --sumiInk1b: #181820;
  --sumiInk2: #2A2A37;
  --sumiInk3: #363646;
  --sumiInk4: #54546D;
  --surimiOrange: #FFA066;
  --tab-background-active: #1F1F28;
  --tab-container-background: #181820;
  --tab-outline-color: #658594;
  --tab-switcher-background: #181820;
  --tab-switcher-menubar-background: linear-gradient(to top, #181820, transparent);
  --tab-text-color: #727169;
  --tab-text-color-focused-active-current: #DCD7BA;
  --tab-text-color-focused-highlighted: #76946A;
  --table-add-button-border-color: #658594;
  --table-border-color: #658594;
  --table-drag-handle-background-active: #658594;
  --table-drag-handle-color: #727169;
  --table-header: rgb(36, 36, 36);
  --table-header-border-color: #658594;
  --table-header-color: #DCD7BA;
  --table-hover: #2A2A37;
  --table-row-even: rgb(43, 43, 43);
  --table-row-odd: rgb(51, 51, 51);
  --table-selection-border-color: #658594;
  --tag-color: #76946A;
  --tag-color-hover: #76946A;
  --task-checkbox: #54546D;
  --tertiary: var(--text-accent);
  --text-a: #658594;
  --text-a-hover: #FF5D62;
  --text-a-url: #658594;
  --text-accent: #76946A;
  --text-faint: #727169;
  --text-highlight-bg: #223249;
  --text-link: #7FB4CA;
  --text-mark: rgba(34, 50, 73, 0.4);
  --text-normal: #DCD7BA;
  --text-selection: rgba(34, 50, 73, 0.5);
  --text-tag: #938AA9;
  --text-title-h1: #cc241d;
  --text-title-h2: #d65d0e;
  --text-title-h3: #d79921;
  --text-title-h4: #98971a;
  --text-title-h5: #689d6a;
  --text-title-h6: #458588;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #181820;
  --titlebar-background-focused: #2A2A37;
  --titlebar-border-color: #658594;
  --titlebar-text-color-focused: #DCD7BA;
  --vault-profile-color: #DCD7BA;
  --vault-profile-color-hover: #DCD7BA;
  --vim-cursor-backgroung: #DCD7BA;
  --vim-cursor-color: #1F1F28;
  --warm-off-white: #F5F5F0;
  --waveAqua1: #6A9589;
  --waveAqua2: #7AA89F;
  --waveBlue1: #223249;
  --waveBlue2: #2D4F67;
  --waveRed: #E46876;
  --winterBlue: #252535;
  --winterGreen: #2B3328;
  --winterRed: #43242B;
  --winterYellow: #49443C;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 24, 32);
  color: rgb(220, 215, 186);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(31, 31, 40);
  color: rgb(220, 215, 186);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 24, 32);
  color: rgb(220, 215, 186);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(101, 133, 148);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 24, 32);
  border-left-color: rgb(101, 133, 148);
  color: rgb(220, 215, 186);
}

body div#quartz-root {
  background-color: rgb(31, 31, 40);
  color: rgb(220, 215, 186);
}`,
    typography: `body .page article p > b, b {
  color: rgb(235, 219, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body .page article p > em, em {
  color: rgb(220, 215, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 215, 186) none 0px;
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body .page article p > i, i {
  color: rgb(220, 215, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 215, 186) none 0px;
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body .page article p > strong, strong {
  color: rgb(235, 219, 178);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body .text-highlight {
  background-color: rgb(34, 50, 73);
  color: rgb(220, 215, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 215, 186) none 0px;
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body del {
  color: rgb(220, 215, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 215, 186) none 0px;
  text-decoration: line-through rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}`,
    links: `body a.external, footer a {
  color: rgb(101, 133, 148);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(101, 133, 148) none 0px;
  text-decoration: rgb(101, 133, 148);
  text-decoration-color: rgb(101, 133, 148);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(101, 133, 148);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(101, 133, 148) none 0px;
  text-decoration: rgb(101, 133, 148);
  text-decoration-color: rgb(101, 133, 148);
}

body a.internal.broken {
  color: rgb(101, 133, 148);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(101, 133, 148) none 0px;
  text-decoration: rgb(101, 133, 148);
  text-decoration-color: rgb(101, 133, 148);
}`,
    lists: `body dd {
  color: rgb(220, 215, 186);
}

body dt {
  color: rgb(220, 215, 186);
}

body ol > li {
  color: rgb(220, 215, 186);
}

body ol.overflow {
  background-color: rgb(31, 31, 40);
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

body ul > li {
  color: rgb(220, 215, 186);
}

body ul.overflow {
  background-color: rgb(31, 31, 40);
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(101, 133, 148);
  text-decoration: rgb(101, 133, 148);
}

body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

body table {
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

body td {
  border-bottom-color: rgb(24, 24, 32);
  border-left-color: rgb(220, 215, 186);
  border-left-width: 0px;
  border-right-color: rgb(220, 215, 186);
  border-right-width: 0px;
  border-top-color: rgb(101, 133, 148);
  color: rgb(220, 215, 186);
}

body th {
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

body thead {
  border-bottom-color: rgb(101, 133, 148);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(24, 24, 32);
  border-right-color: rgb(24, 24, 32);
  border-top-color: rgb(24, 24, 32);
}

body tr {
  border-bottom-color: rgb(101, 133, 148);
  border-left-color: rgb(24, 24, 32);
  border-right-color: rgb(24, 24, 32);
  border-top-color: rgb(24, 24, 32);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 22, 29);
  border-bottom-color: rgb(101, 133, 148);
  border-left-color: rgb(101, 133, 148);
  border-right-color: rgb(101, 133, 148);
  border-top-color: rgb(101, 133, 148);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 22, 29);
  border-bottom-color: rgb(101, 133, 148);
  border-left-color: rgb(101, 133, 148);
  border-right-color: rgb(101, 133, 148);
  border-top-color: rgb(101, 133, 148);
  color: rgb(220, 215, 186);
}

body pre > code, pre:has(> code) {
  background-color: rgb(22, 22, 29);
  border-bottom-color: rgb(101, 133, 148);
  border-left-color: rgb(101, 133, 148);
  border-right-color: rgb(101, 133, 148);
  border-top-color: rgb(101, 133, 148);
}

body pre:has(> code) {
  background-color: rgb(22, 22, 29);
  border-bottom-color: rgb(101, 133, 148);
  border-left-color: rgb(101, 133, 148);
  border-right-color: rgb(101, 133, 148);
  border-top-color: rgb(101, 133, 148);
}`,
    images: `body audio {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

body figcaption {
  color: rgb(220, 215, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

body img {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

body video {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}`,
    embeds: `body .file-embed {
  background-color: rgb(31, 31, 40);
}

body .footnotes {
  border-top-color: rgb(220, 215, 186);
  color: rgb(220, 215, 186);
}

body .transclude {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(101, 133, 148);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(101, 133, 148);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
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
  border-bottom-color: rgb(84, 84, 109);
  border-left-color: rgb(84, 84, 109);
  border-right-color: rgb(84, 84, 109);
  border-top-color: rgb(84, 84, 109);
}

body li.task-list-item[data-task='!'] {
  color: rgb(220, 215, 186);
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body li.task-list-item[data-task='*'] {
  color: rgb(220, 215, 186);
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body li.task-list-item[data-task='-'] {
  color: rgb(220, 215, 186);
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body li.task-list-item[data-task='/'] {
  color: rgb(220, 215, 186);
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body li.task-list-item[data-task='>'] {
  color: rgb(220, 215, 186);
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body li.task-list-item[data-task='?'] {
  color: rgb(220, 215, 186);
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body li.task-list-item[data-task='I'] {
  color: rgb(220, 215, 186);
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body li.task-list-item[data-task='S'] {
  color: rgb(220, 215, 186);
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body li.task-list-item[data-task='b'] {
  color: rgb(220, 215, 186);
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body li.task-list-item[data-task='c'] {
  color: rgb(220, 215, 186);
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body li.task-list-item[data-task='d'] {
  color: rgb(220, 215, 186);
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body li.task-list-item[data-task='f'] {
  color: rgb(220, 215, 186);
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body li.task-list-item[data-task='i'] {
  color: rgb(220, 215, 186);
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body li.task-list-item[data-task='k'] {
  color: rgb(220, 215, 186);
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body li.task-list-item[data-task='l'] {
  color: rgb(220, 215, 186);
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body li.task-list-item[data-task='p'] {
  color: rgb(220, 215, 186);
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body li.task-list-item[data-task='u'] {
  color: rgb(220, 215, 186);
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body li.task-list-item[data-task='w'] {
  color: rgb(220, 215, 186);
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(101, 133, 148);
  border-left-color: rgb(101, 133, 148);
  border-right-color: rgb(101, 133, 148);
  border-top-color: rgb(101, 133, 148);
  color: rgb(220, 215, 186);
}

body .search > .search-container > .search-space {
  background-color: rgb(31, 31, 40);
}

body .search > .search-container > .search-space > * {
  color: rgb(220, 215, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(220, 215, 186) none 0px;
  text-decoration: rgb(220, 215, 186);
  text-decoration-color: rgb(220, 215, 186);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(220, 215, 186);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(220, 215, 186);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(24, 24, 32);
  color: rgb(220, 215, 186);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 24, 32);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(24, 24, 32);
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
  color: rgb(220, 215, 186);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(24, 24, 32);
  color: rgb(220, 215, 186);
}

body a.internal.tag-link::before {
  color: rgb(118, 148, 106);
}

body h1 {
  color: rgb(204, 36, 29);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(214, 93, 14);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(220, 215, 186);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(215, 153, 33);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(152, 151, 26);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(104, 157, 106);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(69, 133, 136);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(101, 133, 148);
  border-left-color: rgb(101, 133, 148);
  border-right-color: rgb(101, 133, 148);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(31, 31, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 31, 40);
}

body ::-webkit-scrollbar-corner {
  background: rgb(31, 31, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 31, 40);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(31, 31, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 31, 40);
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(31, 31, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 31, 40);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(31, 31, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 31, 40);
}

body ::-webkit-scrollbar-track {
  background: rgb(31, 31, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 31, 40);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(220, 215, 186);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(220, 215, 186);
}`,
    footer: `body footer {
  background-color: rgb(24, 24, 32);
  border-bottom-color: rgb(101, 133, 148);
  border-left-color: rgb(101, 133, 148);
  border-right-color: rgb(101, 133, 148);
  border-top-color: rgb(101, 133, 148);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(220, 215, 186);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
  color: rgb(220, 215, 186);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

body ul.section-ul {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(114, 113, 105);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
  color: rgb(220, 215, 186);
}

body .metadata {
  border-bottom-color: rgb(101, 133, 148);
  border-left-color: rgb(101, 133, 148);
  border-right-color: rgb(101, 133, 148);
  border-top-color: rgb(101, 133, 148);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(24, 24, 32);
}

body .page-header h2.page-title {
  color: rgb(220, 215, 186);
}

body abbr {
  color: rgb(220, 215, 186);
  text-decoration: underline dotted rgb(220, 215, 186);
}

body details {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

body kbd {
  background-color: rgb(31, 31, 40);
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
  color: rgb(220, 215, 186);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(220, 215, 186);
  border-left-color: rgb(220, 215, 186);
  border-right-color: rgb(220, 215, 186);
  border-top-color: rgb(220, 215, 186);
}

body sub {
  color: rgb(220, 215, 186);
}

body summary {
  color: rgb(220, 215, 186);
}

body sup {
  color: rgb(220, 215, 186);
}`,
  },
  light: {
    base: `:root:root {
  --autumnGreen: #76946A;
  --autumnRed: #C34043;
  --autumnYellow: #DCA561;
  --background-modifier-border: #9fb5c9;
  --background-primary: #F2EFE9;
  --background-primary-alt: #e7dba0;
  --background-secondary: #F8F8F8;
  --background-secondary-alt: #f2ecbc;
  --bases-cards-background: #F2EFE9;
  --bases-cards-cover-background: #e7dba0;
  --bases-cards-shadow: 0 0 0 1px #9fb5c9;
  --bases-embed-border-color: #9fb5c9;
  --bases-table-border-color: #9fb5c9;
  --bases-table-cell-background-active: #F2EFE9;
  --bases-table-cell-background-disabled: #e7dba0;
  --bases-table-cell-shadow-focus: 0 0 0 2px #9fb5c9;
  --bases-table-group-background: #e7dba0;
  --bases-table-header-background: #F2EFE9;
  --bases-table-summary-background: #F2EFE9;
  --blockquote-border-color: #9fb5c9;
  --blur-background: color-mix(in srgb, #F2EFE9 65%, transparent) linear-gradient(#F2EFE9, color-mix(in srgb, #F2EFE9 65%, transparent));
  --boatYellow1: #938056;
  --boatYellow2: #C0A36E;
  --bodyFont: var(--font-text);
  --bold-color: #545464;
  --bright-aqua: #8ec07c;
  --bright-blue: #83a598;
  --bright-green: #b8bb26;
  --bright-orange: #fe8019;
  --bright-purple: #d3869b;
  --bright-red: #fb4934;
  --bright-yellow: #fabd2f;
  --canvas-background: #F2EFE9;
  --canvas-card-label-color: #8a8980;
  --caret-color: #545464;
  --carpYellow: #E6C384;
  --checkbox-border-color: #8a8980;
  --checkbox-color: #9fb5c9;
  --checkbox-marker-color: #F2EFE9;
  --code-background: #e7dba0;
  --code-block: #8a8980;
  --code-border-color: #9fb5c9;
  --code-comment: #8a8980;
  --code-normal: #545464;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #8a8980;
  --collapse-icon-color-collapsed: #6f894e;
  --cool-off-white: #F0F5F5;
  --crystalBlue: #7E9CD8;
  --dark: var(--text-normal);
  --dark0: #282828;
  --dark0-hard: #1d2021;
  --dark0-soft: #32302f;
  --dark1: #3c3836;
  --dark2: #504945;
  --dark3: #665c54;
  --dark4: #7c6f64;
  --darkgray: var(--text-normal);
  --divider-color: #9fb5c9;
  --divider-color-hover: #9fb5c9;
  --dragonBlue: #658594;
  --embed-block-shadow-hover: 0 0 0 1px #9fb5c9, inset 0 0 0 1px #9fb5c9;
  --embed-border-start: 2px solid #9fb5c9;
  --faded-aqua: #427b58;
  --faded-blue: #076678;
  --faded-green: #79740e;
  --faded-orange: #af3a03;
  --faded-purple: #8f3f71;
  --faded-red: #9d0006;
  --faded-yellow: #b57614;
  --file-header-background: #F2EFE9;
  --file-header-background-focused: #F2EFE9;
  --flair-color: #545464;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, 'Arial';
  --font-text: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  --footnote-divider-color: #9fb5c9;
  --footnote-id-color-no-occurrences: #8a8980;
  --fujiGray: #727169;
  --fujiWhite: #DCD7BA;
  --graph-node-focused: #6f894e;
  --graph-node-unresolved: #8a8980;
  --graph-text: #545464;
  --gray: #928374;
  --headerFont: var(--font-text);
  --heading-formatting: #8a8980;
  --highlight: var(--text-highlight-bg);
  --hr-color: #9fb5c9;
  --icon-color-active: #6f894e;
  --icon-color-focused: #545464;
  --inline-code: #6f894e;
  --input-date-separator: #8a8980;
  --input-placeholder-color: #8a8980;
  --interactive-accent: #9fb5c9;
  --interactive-accent-rgb: #6f894e;
  --interactive-before: #716e61;
  --katanaGray: #717C7C;
  --light: var(--background-primary);
  --light0: #fbf1c7;
  --light0-hard: #f9f5d7;
  --light0-soft: #f2e5bc;
  --light1: #ebdbb2;
  --light2: #d5c4a1;
  --light3: #bdae93;
  --light4: #a89984;
  --lightBlue: #A3D4D5;
  --lightgray: var(--background-secondary);
  --link-color: #6f894e;
  --link-external-color: #6f894e;
  --link-unresolved-color: #6f894e;
  --list-marker-color: #8a8980;
  --list-marker-color-collapsed: #6f894e;
  --lotusAqua: #597b75;
  --lotusAqua2: #5e857a;
  --lotusBlue1: #c7d7e0;
  --lotusBlue2: #b5cbd2;
  --lotusBlue3: #9fb5c9;
  --lotusBlue4: #4d699b;
  --lotusBlue5: #5d57a3;
  --lotusCyan: #d7e3d8;
  --lotusGray: #dcd7ba;
  --lotusGray2: #716e61;
  --lotusGray3: #8a8980;
  --lotusGreen: #6f894e;
  --lotusGreen2: #6e915f;
  --lotusGreen3: #b7d0ae;
  --lotusInk1: #545464;
  --lotusInk2: #43436c;
  --lotusOrange: #cc6d00;
  --lotusOrange2: #e98a00;
  --lotusPink: #b35b79;
  --lotusRed: #c84053;
  --lotusRed2: #d7474b;
  --lotusRed3: #e82424;
  --lotusRed4: #d9a594;
  --lotusTeal1: #4e8ca2;
  --lotusTeal2: #6693bf;
  --lotusTeal3: #5a7785;
  --lotusViolet1: #a09cac;
  --lotusViolet2: #766b90;
  --lotusViolet3: #c9cbd1;
  --lotusViolet4: #624c83;
  --lotusWhite0: #d5cea3;
  --lotusWhite1: #dcd5ac;
  --lotusWhite2: #e5ddb0;
  --lotusWhite3: #f2ecbc;
  --lotusWhite4: #e7dba0;
  --lotusWhite5: #e4d794;
  --lotusYellow: #77713f;
  --lotusYellow2: #836f4a;
  --lotusYellow3: #de9800;
  --lotusYellow4: #f9d791;
  --menu-background: #F8F8F8;
  --metadata-border-color: #9fb5c9;
  --metadata-divider-color: #9fb5c9;
  --metadata-input-text-color: #545464;
  --modal-background: #F2EFE9;
  --nav-collapse-icon-color: #8a8980;
  --nav-collapse-icon-color-collapsed: #8a8980;
  --nav-heading-color: #545464;
  --nav-heading-color-collapsed: #8a8980;
  --nav-heading-color-hover: #545464;
  --nav-item-color-active: #545464;
  --nav-item-color-highlighted: #6f894e;
  --nav-item-color-hover: #545464;
  --nav-item-color-selected: #545464;
  --nav-tag-color: #8a8980;
  --neutral-aqua: #689d6a;
  --neutral-blue: #458588;
  --neutral-green: #98971a;
  --neutral-orange: #d65d0e;
  --neutral-purple: #b16286;
  --neutral-red: #cc241d;
  --neutral-yellow: #d79921;
  --oldWhite: #C8C093;
  --oniViolet: #957FB8;
  --paper-like: #F2EFE9;
  --pdf-background: #F2EFE9;
  --pdf-page-background: #F2EFE9;
  --pdf-sidebar-background: #F2EFE9;
  --peachRed: #FF5D62;
  --pill-border-color: #9fb5c9;
  --pill-color-hover: #545464;
  --pill-color-remove: #8a8980;
  --pill-color-remove-hover: #6f894e;
  --pre-code: #dcd7ba;
  --prompt-background: #F2EFE9;
  --raised-background: color-mix(in srgb, #F2EFE9 65%, transparent) linear-gradient(#F2EFE9, color-mix(in srgb, #F2EFE9 65%, transparent));
  --ribbon-background: #F8F8F8;
  --ribbon-background-collapsed: #F2EFE9;
  --roninYellow: #FF9E3B;
  --sakuraPink: #D27E99;
  --samuraiRed: #E82424;
  --search-result-background: #F2EFE9;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #545464;
  --setting-items-background: #e7dba0;
  --setting-items-border-color: #9fb5c9;
  --slider-track-background: #9fb5c9;
  --soft-white: #F8F8F8;
  --springBlue: #7FB4CA;
  --springGreen: #98BB6C;
  --springViolet1: #938AA9;
  --springViolet2: #9CABCA;
  --status-bar-background: #F8F8F8;
  --status-bar-border-color: #9fb5c9;
  --suggestion-background: #F2EFE9;
  --sumiInk0: #16161D;
  --sumiInk1: #1F1F28;
  --sumiInk1b: #181820;
  --sumiInk2: #2A2A37;
  --sumiInk3: #363646;
  --sumiInk4: #54546D;
  --surimiOrange: #FFA066;
  --tab-background-active: #F2EFE9;
  --tab-container-background: #F8F8F8;
  --tab-outline-color: #9fb5c9;
  --tab-switcher-background: #F8F8F8;
  --tab-switcher-menubar-background: linear-gradient(to top, #F8F8F8, transparent);
  --tab-text-color: #8a8980;
  --tab-text-color-focused-active-current: #545464;
  --tab-text-color-focused-highlighted: #6f894e;
  --table-add-button-border-color: #9fb5c9;
  --table-border-color: #9fb5c9;
  --table-drag-handle-background-active: #9fb5c9;
  --table-drag-handle-color: #8a8980;
  --table-header: rgb(240, 235, 224);
  --table-header-border-color: #9fb5c9;
  --table-header-color: #545464;
  --table-hover: #dcd5ac;
  --table-row-even: rgb(245, 242, 234);
  --table-row-odd: rgb(250, 248, 245);
  --table-selection-border-color: #9fb5c9;
  --tag-color: #6f894e;
  --tag-color-hover: #6f894e;
  --task-checkbox: #716e61;
  --tertiary: var(--text-accent);
  --text-a: #4e8ca2;
  --text-a-hover: #c84053;
  --text-a-url: #6693bf;
  --text-accent: #6f894e;
  --text-faint: #8a8980;
  --text-highlight-bg: #b5cbd2;
  --text-link: #5d57a3;
  --text-mark: rgba(183, 208, 174, 0.4);
  --text-normal: #545464;
  --text-selection: rgba(183, 208, 174, 0.5);
  --text-tag: #597b75;
  --text-title-h1: #c84053;
  --text-title-h2: #cc6d00;
  --text-title-h3: #77713f;
  --text-title-h4: #6f894e;
  --text-title-h5: #597b75;
  --text-title-h6: #4d699b;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #F8F8F8;
  --titlebar-background-focused: #f2ecbc;
  --titlebar-border-color: #9fb5c9;
  --titlebar-text-color-focused: #545464;
  --vault-profile-color: #545464;
  --vault-profile-color-hover: #545464;
  --vim-cursor-backgroung: #dcd7ba;
  --vim-cursor-color: #545464;
  --warm-off-white: #F5F5F0;
  --waveAqua1: #6A9589;
  --waveAqua2: #7AA89F;
  --waveBlue1: #223249;
  --waveBlue2: #2D4F67;
  --waveRed: #E46876;
  --winterBlue: #252535;
  --winterGreen: #2B3328;
  --winterRed: #43242B;
  --winterYellow: #49443C;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(248, 248, 248);
  color: rgb(84, 84, 100);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(242, 239, 233);
  color: rgb(84, 84, 100);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 248, 248);
  color: rgb(84, 84, 100);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(159, 181, 201);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(248, 248, 248);
  border-left-color: rgb(159, 181, 201);
  color: rgb(84, 84, 100);
}

body div#quartz-root {
  background-color: rgb(242, 239, 233);
  color: rgb(84, 84, 100);
}`,
    typography: `body .page article p > b, b {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 84, 100) none 0px;
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body .page article p > em, em {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 84, 100) none 0px;
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body .page article p > i, i {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 84, 100) none 0px;
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body .page article p > strong, strong {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 84, 100) none 0px;
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body .text-highlight {
  background-color: rgb(181, 203, 210);
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 84, 100) none 0px;
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body del {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 84, 100) none 0px;
  text-decoration: line-through rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}`,
    links: `body a.external, footer a {
  color: rgb(78, 140, 162);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(78, 140, 162) none 0px;
  text-decoration: rgb(78, 140, 162);
  text-decoration-color: rgb(78, 140, 162);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(78, 140, 162);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(78, 140, 162) none 0px;
  text-decoration: rgb(78, 140, 162);
  text-decoration-color: rgb(78, 140, 162);
}

body a.internal.broken {
  color: rgb(78, 140, 162);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(78, 140, 162) none 0px;
  text-decoration: rgb(78, 140, 162);
  text-decoration-color: rgb(78, 140, 162);
}`,
    lists: `body dd {
  color: rgb(84, 84, 100);
}

body dt {
  color: rgb(84, 84, 100);
}

body ol > li {
  color: rgb(84, 84, 100);
}

body ol.overflow {
  background-color: rgb(242, 239, 233);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

body ul > li {
  color: rgb(84, 84, 100);
}

body ul.overflow {
  background-color: rgb(242, 239, 233);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(78, 140, 162);
  text-decoration: rgb(78, 140, 162);
}

body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
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
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.062px;
}

body td {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(84, 84, 100);
  border-left-width: 0px;
  border-right-color: rgb(84, 84, 100);
  border-right-width: 0px;
  border-top-color: rgb(159, 181, 201);
  color: rgb(84, 84, 100);
}

body th {
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

body thead {
  border-bottom-color: rgb(159, 181, 201);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}

body tr {
  border-bottom-color: rgb(159, 181, 201);
  border-left-color: rgb(248, 248, 248);
  border-right-color: rgb(248, 248, 248);
  border-top-color: rgb(248, 248, 248);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(220, 215, 186);
  border-bottom-color: rgb(159, 181, 201);
  border-left-color: rgb(159, 181, 201);
  border-right-color: rgb(159, 181, 201);
  border-top-color: rgb(159, 181, 201);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(220, 215, 186);
  border-bottom-color: rgb(159, 181, 201);
  border-left-color: rgb(159, 181, 201);
  border-right-color: rgb(159, 181, 201);
  border-top-color: rgb(159, 181, 201);
  color: rgb(84, 84, 100);
}

body pre > code, pre:has(> code) {
  background-color: rgb(220, 215, 186);
  border-bottom-color: rgb(159, 181, 201);
  border-left-color: rgb(159, 181, 201);
  border-right-color: rgb(159, 181, 201);
  border-top-color: rgb(159, 181, 201);
}

body pre:has(> code) {
  background-color: rgb(220, 215, 186);
  border-bottom-color: rgb(159, 181, 201);
  border-left-color: rgb(159, 181, 201);
  border-right-color: rgb(159, 181, 201);
  border-top-color: rgb(159, 181, 201);
}`,
    images: `body audio {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

body figcaption {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

body img {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

body video {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}`,
    embeds: `body .file-embed {
  background-color: rgb(231, 219, 160);
}

body .footnotes {
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}

body .transclude {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(159, 181, 201);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(159, 181, 201);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
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
  border-bottom-color: rgb(113, 110, 97);
  border-left-color: rgb(113, 110, 97);
  border-right-color: rgb(113, 110, 97);
  border-top-color: rgb(113, 110, 97);
}

body li.task-list-item[data-task='!'] {
  color: rgb(84, 84, 100);
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body li.task-list-item[data-task='*'] {
  color: rgb(84, 84, 100);
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body li.task-list-item[data-task='-'] {
  color: rgb(84, 84, 100);
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body li.task-list-item[data-task='/'] {
  color: rgb(84, 84, 100);
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body li.task-list-item[data-task='>'] {
  color: rgb(84, 84, 100);
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body li.task-list-item[data-task='?'] {
  color: rgb(84, 84, 100);
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body li.task-list-item[data-task='I'] {
  color: rgb(84, 84, 100);
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body li.task-list-item[data-task='S'] {
  color: rgb(84, 84, 100);
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body li.task-list-item[data-task='b'] {
  color: rgb(84, 84, 100);
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body li.task-list-item[data-task='c'] {
  color: rgb(84, 84, 100);
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body li.task-list-item[data-task='d'] {
  color: rgb(84, 84, 100);
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body li.task-list-item[data-task='f'] {
  color: rgb(84, 84, 100);
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body li.task-list-item[data-task='i'] {
  color: rgb(84, 84, 100);
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body li.task-list-item[data-task='k'] {
  color: rgb(84, 84, 100);
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body li.task-list-item[data-task='l'] {
  color: rgb(84, 84, 100);
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body li.task-list-item[data-task='p'] {
  color: rgb(84, 84, 100);
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body li.task-list-item[data-task='u'] {
  color: rgb(84, 84, 100);
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body li.task-list-item[data-task='w'] {
  color: rgb(84, 84, 100);
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(159, 181, 201);
  border-left-color: rgb(159, 181, 201);
  border-right-color: rgb(159, 181, 201);
  border-top-color: rgb(159, 181, 201);
  color: rgb(84, 84, 100);
}

body .search > .search-container > .search-space {
  background-color: rgb(242, 239, 233);
}

body .search > .search-container > .search-space > * {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 84, 100) none 0px;
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(84, 84, 100);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(84, 84, 100);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(248, 248, 248);
  color: rgb(84, 84, 100);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(248, 248, 248);
  color: rgb(84, 84, 100);
}

body a.internal.tag-link::before {
  color: rgb(111, 137, 78);
}

body h1 {
  color: rgb(200, 64, 83);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(204, 109, 0);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(119, 113, 63);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(111, 137, 78);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(89, 123, 117);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(77, 105, 155);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(159, 181, 201);
  border-left-color: rgb(159, 181, 201);
  border-right-color: rgb(159, 181, 201);
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
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
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
  border-bottom-color: rgb(84, 84, 100);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(84, 84, 100);
}`,
    footer: `body footer {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(159, 181, 201);
  border-left-color: rgb(159, 181, 201);
  border-right-color: rgb(159, 181, 201);
  border-top-color: rgb(159, 181, 201);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(84, 84, 100);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

body ul.section-ul {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(138, 137, 128);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}

body .metadata {
  border-bottom-color: rgb(159, 181, 201);
  border-left-color: rgb(159, 181, 201);
  border-right-color: rgb(159, 181, 201);
  border-top-color: rgb(159, 181, 201);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(248, 248, 248);
}

body .page-header h2.page-title {
  color: rgb(84, 84, 100);
}

body abbr {
  color: rgb(84, 84, 100);
  text-decoration: underline dotted rgb(84, 84, 100);
}

body details {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

body kbd {
  background-color: rgb(231, 219, 160);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

body sub {
  color: rgb(84, 84, 100);
}

body summary {
  color: rgb(84, 84, 100);
}

body sup {
  color: rgb(84, 84, 100);
}`,
  },
};
