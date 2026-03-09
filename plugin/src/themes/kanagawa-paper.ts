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
  --autumnGreen: #76946A;
  --autumnRed: #C34043;
  --autumnYellow: #DCA561;
  --background-modifier-border: #8ba4b0;
  --background-primary: #181616;
  --background-primary-alt: #181616;
  --background-secondary: #1D1C19;
  --background-secondary-alt: #282727;
  --bases-cards-background: #181616;
  --bases-cards-cover-background: #181616;
  --bases-cards-shadow: 0 0 0 1px #8ba4b0;
  --bases-embed-border-color: #8ba4b0;
  --bases-table-border-color: #8ba4b0;
  --bases-table-cell-background-active: #181616;
  --bases-table-cell-background-disabled: #181616;
  --bases-table-cell-shadow-focus: 0 0 0 2px #8ba4b0;
  --bases-table-group-background: #181616;
  --bases-table-header-background: #181616;
  --bases-table-summary-background: #181616;
  --blockquote-border-color: #8ba4b0;
  --boatYellow1: #938056;
  --boatYellow2: #C0A36E;
  --bold-color: #c5c9c5;
  --canvas-background: #181616;
  --canvas-card-label-color: #9e9b93;
  --caret-color: #c5c9c5;
  --carpYellow: #E6C384;
  --checkbox-border-color: #9e9b93;
  --checkbox-color: #8ba4b0;
  --checkbox-marker-color: #181616;
  --code-background: #181616;
  --code-block: #9e9b93;
  --code-border-color: #8ba4b0;
  --code-comment: #9e9b93;
  --code-normal: #c5c9c5;
  --collapse-icon-color: #9e9b93;
  --collapse-icon-color-collapsed: #87a987;
  --crystalBlue: #7E9CD8;
  --divider-color: #8ba4b0;
  --divider-color-hover: #8ba4b0;
  --dragonAqua: #8ea4a2;
  --dragonAsh: #737c73;
  --dragonBlack0: #0d0c0c;
  --dragonBlack1: #12120f;
  --dragonBlack2: #1D1C19;
  --dragonBlack3: #181616;
  --dragonBlack4: #282727;
  --dragonBlack5: #393836;
  --dragonBlack6: #625e5a;
  --dragonBlue: #658594;
  --dragonBlue2: #8ba4b0;
  --dragonGray: #a6a69c;
  --dragonGray2: #9e9b93;
  --dragonGray3: #7a8382;
  --dragonGreen: #87a987;
  --dragonGreen2: #8a9a7b;
  --dragonOrange: #b6927b;
  --dragonOrange2: #b98d7b;
  --dragonPink: #a292a3;
  --dragonRed: #c4746e;
  --dragonTeal: #949fb5;
  --dragonViolet: #8992a7;
  --dragonWhite: #c5c9c5;
  --dragonYellow: #c4b28a;
  --embed-block-shadow-hover: 0 0 0 1px #8ba4b0, inset 0 0 0 1px #8ba4b0;
  --embed-border-start: 2px solid #8ba4b0;
  --file-header-background: #181616;
  --file-header-background-focused: #181616;
  --flair-color: #c5c9c5;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, 'Arial';
  --font-text: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  --footnote-divider-color: #8ba4b0;
  --footnote-id-color-no-occurrences: #9e9b93;
  --fujiGray: #727169;
  --fujiWhite: #DCD7BA;
  --graph-node-focused: #87a987;
  --graph-node-unresolved: #9e9b93;
  --graph-text: #c5c9c5;
  --heading-formatting: #9e9b93;
  --hr-color: #8ba4b0;
  --icon-color-active: #87a987;
  --icon-color-focused: #c5c9c5;
  --inline-code: #87a987;
  --input-date-separator: #9e9b93;
  --input-placeholder-color: #9e9b93;
  --interactive-accent: #8ba4b0;
  --interactive-accent-rgb: #8a9a7b;
  --interactive-before: #625e5a;
  --katanaGray: #717C7C;
  --lightBlue: #A3D4D5;
  --link-color: #87a987;
  --link-external-color: #87a987;
  --link-unresolved-color: #87a987;
  --list-marker-color: #9e9b93;
  --list-marker-color-collapsed: #87a987;
  --lotusGray: #dcd7ba;
  --lotusGray2: #716e61;
  --lotusGray3: #8a8980;
  --lotusInk0: #3d3d5e;
  --lotusInk1: #545464;
  --lotusInk2: #43436c;
  --lotusWhite0: #d5cea3;
  --lotusWhite1: #dcd5ac;
  --lotusWhite2: #e5ddb0;
  --lotusWhite3: #f2ecbc;
  --lotusWhite4: #e7dba0;
  --lotusWhite5: #e4d794;
  --menu-background: #1D1C19;
  --metadata-border-color: #8ba4b0;
  --metadata-divider-color: #8ba4b0;
  --metadata-input-text-color: #c5c9c5;
  --modal-background: #181616;
  --nav-collapse-icon-color: #9e9b93;
  --nav-collapse-icon-color-collapsed: #9e9b93;
  --nav-heading-color: #c5c9c5;
  --nav-heading-color-collapsed: #9e9b93;
  --nav-heading-color-hover: #c5c9c5;
  --nav-item-color-active: #c5c9c5;
  --nav-item-color-highlighted: #87a987;
  --nav-item-color-hover: #c5c9c5;
  --nav-item-color-selected: #c5c9c5;
  --nav-tag-color: #9e9b93;
  --oldWhite: #C8C093;
  --oniViolet: #957FB8;
  --oniViolet2: #b8b4d0;
  --pdf-background: #181616;
  --pdf-page-background: #181616;
  --pdf-shadow: 0 0 0 1px #8ba4b0;
  --pdf-sidebar-background: #181616;
  --pdf-thumbnail-shadow: 0 0 0 1px #8ba4b0;
  --peachRed: #FF5D62;
  --pill-border-color: #8ba4b0;
  --pill-color-hover: #c5c9c5;
  --pill-color-remove: #9e9b93;
  --pill-color-remove-hover: #87a987;
  --pre-code: #0d0c0c;
  --prompt-background: #181616;
  --ribbon-background: #1D1C19;
  --ribbon-background-collapsed: #181616;
  --roninYellow: #FF9E3B;
  --sakuraPink: #D27E99;
  --samuraiRed: #E82424;
  --search-result-background: #181616;
  --setting-group-heading-color: #c5c9c5;
  --setting-items-background: #181616;
  --setting-items-border-color: #8ba4b0;
  --slider-track-background: #8ba4b0;
  --springBlue: #7FB4CA;
  --springGreen: #98BB6C;
  --springViolet1: #938AA9;
  --springViolet2: #9CABCA;
  --status-bar-background: #1D1C19;
  --status-bar-border-color: #8ba4b0;
  --suggestion-background: #181616;
  --sumiInk0: #16161D;
  --sumiInk1: #181820;
  --sumiInk2: #1a1a22;
  --sumiInk3: #1F1F28;
  --sumiInk4: #2A2A37;
  --sumiInk5: #363646;
  --sumiInk6: #54546D;
  --surimiOrange: #FFA066;
  --tab-background-active: #181616;
  --tab-container-background: #1D1C19;
  --tab-outline-color: #8ba4b0;
  --tab-switcher-background: #1D1C19;
  --tab-switcher-menubar-background: linear-gradient(to top, #1D1C19, transparent);
  --tab-text-color: #9e9b93;
  --tab-text-color-focused-active-current: #c5c9c5;
  --tab-text-color-focused-highlighted: #87a987;
  --table-add-button-border-color: #8ba4b0;
  --table-border-color: #8ba4b0;
  --table-drag-handle-background-active: #8ba4b0;
  --table-drag-handle-color: #9e9b93;
  --table-header: #282727;
  --table-header-border-color: #8ba4b0;
  --table-header-color: #c5c9c5;
  --table-hover: #282727;
  --table-row-even: #1D1C19;
  --table-row-odd: #181616;
  --table-selection-border-color: #8ba4b0;
  --tag-color: #87a987;
  --tag-color-hover: #87a987;
  --task-checkbox: #625e5a;
  --text-a: #949fb5;
  --text-a-hover: #a292a3;
  --text-a-url: #949fb5;
  --text-accent: #87a987;
  --text-faint: #9e9b93;
  --text-highlight-bg: #393836;
  --text-link: #8ba4b0;
  --text-mark: rgba(139, 164, 176, 0.4);
  --text-normal: #c5c9c5;
  --text-selection: rgba(139, 164, 176, 0.5);
  --text-tag: #8992a7;
  --text-title-h1: #c4746e;
  --text-title-h2: #b6927b;
  --text-title-h3: #c4b28a;
  --text-title-h4: #87a987;
  --text-title-h5: #8ea4a2;
  --text-title-h6: #8ba4b0;
  --titlebar-background: #1D1C19;
  --titlebar-background-focused: #282727;
  --titlebar-border-color: #8ba4b0;
  --titlebar-text-color-focused: #c5c9c5;
  --vault-profile-color: #c5c9c5;
  --vault-profile-color-hover: #c5c9c5;
  --vim-cursor-background: #c5c9c5;
  --vim-cursor-color: #181616;
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
  background-color: rgb(29, 28, 25);
  color: rgb(197, 201, 197);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(24, 22, 22);
  color: rgb(197, 201, 197);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(29, 28, 25);
  color: rgb(197, 201, 197);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(139, 164, 176);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(29, 28, 25);
  border-left-color: rgb(139, 164, 176);
  color: rgb(197, 201, 197);
}

body div#quartz-root {
  background-color: rgb(24, 22, 22);
  color: rgb(197, 201, 197);
}`,
    typography: `body .page article p > b, b {
  color: rgb(197, 201, 197);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 201, 197) none 0px;
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body .page article p > em, em {
  color: rgb(197, 201, 197);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 201, 197) none 0px;
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body .page article p > i, i {
  color: rgb(197, 201, 197);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 201, 197) none 0px;
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body .page article p > strong, strong {
  color: rgb(197, 201, 197);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 201, 197) none 0px;
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body .text-highlight {
  background-color: rgb(57, 56, 54);
  color: rgb(197, 201, 197);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 201, 197) none 0px;
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body del {
  color: rgb(197, 201, 197);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 201, 197) none 0px;
  text-decoration: line-through rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}`,
    links: `body a.external, footer a {
  color: rgb(148, 159, 181);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(148, 159, 181) none 0px;
  text-decoration: rgb(148, 159, 181);
  text-decoration-color: rgb(148, 159, 181);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(148, 159, 181);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(148, 159, 181) none 0px;
  text-decoration: rgb(148, 159, 181);
  text-decoration-color: rgb(148, 159, 181);
}

body a.internal.broken {
  color: rgb(148, 159, 181);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(148, 159, 181) none 0px;
  text-decoration: rgb(148, 159, 181);
  text-decoration-color: rgb(148, 159, 181);
}`,
    lists: `body dd {
  color: rgb(197, 201, 197);
}

body dt {
  color: rgb(197, 201, 197);
}

body ol > li {
  color: rgb(197, 201, 197);
}

body ol.overflow {
  background-color: rgb(24, 22, 22);
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

body ul > li {
  color: rgb(197, 201, 197);
}

body ul.overflow {
  background-color: rgb(24, 22, 22);
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(148, 159, 181);
  text-decoration: rgb(148, 159, 181);
}

body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

body table {
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

body td {
  border-bottom-color: rgb(29, 28, 25);
  border-left-color: rgb(197, 201, 197);
  border-left-width: 0px;
  border-right-color: rgb(197, 201, 197);
  border-right-width: 0px;
  border-top-color: rgb(139, 164, 176);
  color: rgb(197, 201, 197);
}

body th {
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

body thead {
  border-bottom-color: rgb(139, 164, 176);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(29, 28, 25);
  border-right-color: rgb(29, 28, 25);
  border-top-color: rgb(29, 28, 25);
}

body tr {
  border-bottom-color: rgb(139, 164, 176);
  border-left-color: rgb(29, 28, 25);
  border-right-color: rgb(29, 28, 25);
  border-top-color: rgb(29, 28, 25);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(13, 12, 12);
  border-bottom-color: rgb(139, 164, 176);
  border-left-color: rgb(139, 164, 176);
  border-right-color: rgb(139, 164, 176);
  border-top-color: rgb(139, 164, 176);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(13, 12, 12);
  border-bottom-color: rgb(139, 164, 176);
  border-left-color: rgb(139, 164, 176);
  border-right-color: rgb(139, 164, 176);
  border-top-color: rgb(139, 164, 176);
  color: rgb(197, 201, 197);
}

body pre > code, pre:has(> code) {
  background-color: rgb(13, 12, 12);
  border-bottom-color: rgb(139, 164, 176);
  border-left-color: rgb(139, 164, 176);
  border-right-color: rgb(139, 164, 176);
  border-top-color: rgb(139, 164, 176);
}

body pre:has(> code) {
  background-color: rgb(13, 12, 12);
  border-bottom-color: rgb(139, 164, 176);
  border-left-color: rgb(139, 164, 176);
  border-right-color: rgb(139, 164, 176);
  border-top-color: rgb(139, 164, 176);
}`,
    images: `body audio {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

body figcaption {
  color: rgb(197, 201, 197);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

body img {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

body video {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}`,
    embeds: `body .file-embed {
  background-color: rgb(24, 22, 22);
}

body .footnotes {
  border-top-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
}

body .transclude {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(139, 164, 176);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(139, 164, 176);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
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
  border-bottom-color: rgb(98, 94, 90);
  border-left-color: rgb(98, 94, 90);
  border-right-color: rgb(98, 94, 90);
  border-top-color: rgb(98, 94, 90);
}

body li.task-list-item[data-task='!'] {
  color: rgb(197, 201, 197);
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body li.task-list-item[data-task='*'] {
  color: rgb(197, 201, 197);
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body li.task-list-item[data-task='-'] {
  color: rgb(197, 201, 197);
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body li.task-list-item[data-task='/'] {
  color: rgb(197, 201, 197);
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body li.task-list-item[data-task='>'] {
  color: rgb(197, 201, 197);
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body li.task-list-item[data-task='?'] {
  color: rgb(197, 201, 197);
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body li.task-list-item[data-task='I'] {
  color: rgb(197, 201, 197);
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body li.task-list-item[data-task='S'] {
  color: rgb(197, 201, 197);
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body li.task-list-item[data-task='b'] {
  color: rgb(197, 201, 197);
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body li.task-list-item[data-task='c'] {
  color: rgb(197, 201, 197);
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body li.task-list-item[data-task='d'] {
  color: rgb(197, 201, 197);
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body li.task-list-item[data-task='f'] {
  color: rgb(197, 201, 197);
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body li.task-list-item[data-task='i'] {
  color: rgb(197, 201, 197);
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body li.task-list-item[data-task='k'] {
  color: rgb(197, 201, 197);
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body li.task-list-item[data-task='l'] {
  color: rgb(197, 201, 197);
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body li.task-list-item[data-task='p'] {
  color: rgb(197, 201, 197);
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body li.task-list-item[data-task='u'] {
  color: rgb(197, 201, 197);
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body li.task-list-item[data-task='w'] {
  color: rgb(197, 201, 197);
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(139, 164, 176);
  border-left-color: rgb(139, 164, 176);
  border-right-color: rgb(139, 164, 176);
  border-top-color: rgb(139, 164, 176);
  color: rgb(197, 201, 197);
}

body .search > .search-container > .search-space {
  background-color: rgb(24, 22, 22);
}

body .search > .search-container > .search-space > * {
  color: rgb(197, 201, 197);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(197, 201, 197) none 0px;
  text-decoration: rgb(197, 201, 197);
  text-decoration-color: rgb(197, 201, 197);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(197, 201, 197);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(197, 201, 197);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(29, 28, 25);
  color: rgb(197, 201, 197);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 28, 25);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(29, 28, 25);
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(29, 28, 25);
  color: rgb(197, 201, 197);
}

body a.internal.tag-link::before {
  color: rgb(135, 169, 135);
}

body h1 {
  color: rgb(196, 116, 110);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(182, 146, 123);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(197, 201, 197);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(196, 178, 138);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(135, 169, 135);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(142, 164, 162);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(139, 164, 176);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(139, 164, 176);
  border-left-color: rgb(139, 164, 176);
  border-right-color: rgb(139, 164, 176);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(24, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 22, 22);
}

body ::-webkit-scrollbar-corner {
  background: rgb(24, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 22, 22);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(24, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 22, 22);
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(24, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 22, 22);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(24, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 22, 22);
}

body ::-webkit-scrollbar-track {
  background: rgb(24, 22, 22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 22, 22);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(197, 201, 197);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(197, 201, 197);
}`,
    footer: `body footer {
  background-color: rgb(29, 28, 25);
  border-bottom-color: rgb(139, 164, 176);
  border-left-color: rgb(139, 164, 176);
  border-right-color: rgb(139, 164, 176);
  border-top-color: rgb(139, 164, 176);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(197, 201, 197);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

body ul.section-ul {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(158, 155, 147);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
}

body .metadata {
  border-bottom-color: rgb(139, 164, 176);
  border-left-color: rgb(139, 164, 176);
  border-right-color: rgb(139, 164, 176);
  border-top-color: rgb(139, 164, 176);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(29, 28, 25);
}

body .page-header h2.page-title {
  color: rgb(197, 201, 197);
}

body abbr {
  color: rgb(197, 201, 197);
  text-decoration: underline dotted rgb(197, 201, 197);
}

body details {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

body kbd {
  background-color: rgb(24, 22, 22);
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
  color: rgb(197, 201, 197);
  font-family: "??", "Hack Nerd Font", "Source Code Pro", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(197, 201, 197);
  border-left-color: rgb(197, 201, 197);
  border-right-color: rgb(197, 201, 197);
  border-top-color: rgb(197, 201, 197);
}

body sub {
  color: rgb(197, 201, 197);
}

body summary {
  color: rgb(197, 201, 197);
}

body sup {
  color: rgb(197, 201, 197);
}`,
  },
  light: {
    base: `:root:root {
  --autumnGreen: #76946A;
  --autumnRed: #C34043;
  --autumnYellow: #DCA561;
  --background-primary: #f2ecbc;
  --background-primary-alt: #e7dba0;
  --background-secondary: #dcd5ac;
  --background-secondary-alt: #e5ddb0;
  --bases-cards-background: #f2ecbc;
  --bases-cards-cover-background: #e7dba0;
  --bases-table-cell-background-active: #f2ecbc;
  --bases-table-cell-background-disabled: #e7dba0;
  --bases-table-group-background: #e7dba0;
  --bases-table-header-background: #f2ecbc;
  --bases-table-summary-background: #f2ecbc;
  --blur-background: color-mix(in srgb, #f2ecbc 65%, transparent) linear-gradient(#f2ecbc, color-mix(in srgb, #f2ecbc 65%, transparent));
  --boatYellow1: #938056;
  --boatYellow2: #C0A36E;
  --bold-color: #545464;
  --canvas-background: #f2ecbc;
  --canvas-card-label-color: #8a8980;
  --caret-color: #545464;
  --carpYellow: #E6C384;
  --checkbox-border-color: #8a8980;
  --checkbox-marker-color: #f2ecbc;
  --code-background: #e7dba0;
  --code-block: #8a8980;
  --code-comment: #8a8980;
  --code-normal: #545464;
  --collapse-icon-color: #8a8980;
  --crystalBlue: #7E9CD8;
  --dragonAqua: #8ea4a2;
  --dragonAsh: #737c73;
  --dragonBlack0: #0d0c0c;
  --dragonBlack1: #12120f;
  --dragonBlack2: #1D1C19;
  --dragonBlack3: #181616;
  --dragonBlack4: #282727;
  --dragonBlack5: #393836;
  --dragonBlack6: #625e5a;
  --dragonBlue: #658594;
  --dragonBlue2: #8ba4b0;
  --dragonGray: #a6a69c;
  --dragonGray2: #9e9b93;
  --dragonGray3: #7a8382;
  --dragonGreen: #87a987;
  --dragonGreen2: #8a9a7b;
  --dragonOrange: #b6927b;
  --dragonOrange2: #b98d7b;
  --dragonPink: #a292a3;
  --dragonRed: #c4746e;
  --dragonTeal: #949fb5;
  --dragonViolet: #8992a7;
  --dragonWhite: #c5c9c5;
  --dragonYellow: #c4b28a;
  --file-header-background: #f2ecbc;
  --file-header-background-focused: #f2ecbc;
  --flair-color: #545464;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'Hack Nerd Font', 'Source Code Pro', ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, 'Arial';
  --font-text: '??', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
  --footnote-id-color-no-occurrences: #8a8980;
  --fujiGray: #727169;
  --fujiWhite: #DCD7BA;
  --graph-node-unresolved: #8a8980;
  --graph-text: #545464;
  --heading-formatting: #8a8980;
  --icon-color-focused: #545464;
  --input-date-separator: #8a8980;
  --input-placeholder-color: #8a8980;
  --interactive-before: #716e61;
  --katanaGray: #717C7C;
  --lightBlue: #A3D4D5;
  --list-marker-color: #8a8980;
  --lotusGray: #dcd7ba;
  --lotusGray2: #716e61;
  --lotusGray3: #8a8980;
  --lotusInk0: #3d3d5e;
  --lotusInk1: #545464;
  --lotusInk2: #43436c;
  --lotusWhite0: #d5cea3;
  --lotusWhite1: #dcd5ac;
  --lotusWhite2: #e5ddb0;
  --lotusWhite3: #f2ecbc;
  --lotusWhite4: #e7dba0;
  --lotusWhite5: #e4d794;
  --menu-background: #dcd5ac;
  --metadata-input-text-color: #545464;
  --modal-background: #f2ecbc;
  --nav-collapse-icon-color: #8a8980;
  --nav-collapse-icon-color-collapsed: #8a8980;
  --nav-heading-color: #545464;
  --nav-heading-color-collapsed: #8a8980;
  --nav-heading-color-hover: #545464;
  --nav-item-color-active: #545464;
  --nav-item-color-hover: #545464;
  --nav-item-color-selected: #545464;
  --nav-tag-color: #8a8980;
  --oldWhite: #C8C093;
  --oniViolet: #957FB8;
  --oniViolet2: #b8b4d0;
  --pdf-background: #f2ecbc;
  --pdf-page-background: #f2ecbc;
  --pdf-sidebar-background: #f2ecbc;
  --peachRed: #FF5D62;
  --pill-color-hover: #545464;
  --pill-color-remove: #8a8980;
  --pre-code: #dcd7ba;
  --prompt-background: #f2ecbc;
  --raised-background: color-mix(in srgb, #f2ecbc 65%, transparent) linear-gradient(#f2ecbc, color-mix(in srgb, #f2ecbc 65%, transparent));
  --ribbon-background: #dcd5ac;
  --ribbon-background-collapsed: #f2ecbc;
  --roninYellow: #FF9E3B;
  --sakuraPink: #D27E99;
  --samuraiRed: #E82424;
  --search-result-background: #f2ecbc;
  --setting-group-heading-color: #545464;
  --setting-items-background: #e7dba0;
  --springBlue: #7FB4CA;
  --springGreen: #98BB6C;
  --springViolet1: #938AA9;
  --springViolet2: #9CABCA;
  --status-bar-background: #dcd5ac;
  --suggestion-background: #f2ecbc;
  --sumiInk0: #16161D;
  --sumiInk1: #181820;
  --sumiInk2: #1a1a22;
  --sumiInk3: #1F1F28;
  --sumiInk4: #2A2A37;
  --sumiInk5: #363646;
  --sumiInk6: #54546D;
  --surimiOrange: #FFA066;
  --tab-background-active: #f2ecbc;
  --tab-container-background: #dcd5ac;
  --tab-switcher-background: #dcd5ac;
  --tab-switcher-menubar-background: linear-gradient(to top, #dcd5ac, transparent);
  --tab-text-color: #8a8980;
  --tab-text-color-focused-active-current: #545464;
  --table-drag-handle-color: #8a8980;
  --table-header: rgb(240, 235, 224);
  --table-header-color: #545464;
  --table-hover: #dcd5ac;
  --table-row-even: rgb(245, 242, 234);
  --table-row-odd: rgb(250, 248, 245);
  --task-checkbox: #716e61;
  --text-faint: #8a8980;
  --text-mark: rgba(183, 208, 174, 0.4);
  --text-normal: #545464;
  --text-selection: rgba(183, 208, 174, 0.5);
  --titlebar-background: #dcd5ac;
  --titlebar-background-focused: #e5ddb0;
  --titlebar-text-color-focused: #545464;
  --vault-profile-color: #545464;
  --vault-profile-color-hover: #545464;
  --vim-cursor-background: #dcd7ba;
  --vim-cursor-color: #545464;
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
  background-color: rgb(220, 213, 172);
  color: rgb(84, 84, 100);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(242, 236, 188);
  color: rgb(84, 84, 100);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(220, 213, 172);
  color: rgb(84, 84, 100);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(220, 213, 172);
  border-left-color: rgb(128, 128, 128);
  color: rgb(84, 84, 100);
}

body div#quartz-root {
  background-color: rgb(242, 236, 188);
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
  background-color: rgba(0, 0, 0, 0);
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
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 84, 100) none 0px;
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 84, 100) none 0px;
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
}

body a.internal.broken {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 84, 100) none 0px;
  text-decoration: rgb(84, 84, 100);
  text-decoration-color: rgb(84, 84, 100);
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
  background-color: rgb(242, 236, 188);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

body ul > li {
  color: rgb(84, 84, 100);
}

body ul.overflow {
  background-color: rgb(242, 236, 188);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(84, 84, 100);
  text-decoration: rgb(84, 84, 100);
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

body td {
  border-bottom-color: rgb(220, 213, 172);
  border-left-color: rgb(84, 84, 100);
  border-left-width: 0px;
  border-right-color: rgb(84, 84, 100);
  border-right-width: 0px;
  border-top-color: rgb(84, 84, 100);
  border-top-width: 0px;
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
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(220, 213, 172);
  border-right-color: rgb(220, 213, 172);
  border-top-color: rgb(220, 213, 172);
}

body tr {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(220, 213, 172);
  border-right-color: rgb(220, 213, 172);
  border-top-color: rgb(220, 213, 172);
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
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(220, 215, 186);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}

body pre > code, pre:has(> code) {
  background-color: rgb(220, 215, 186);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

body pre:has(> code) {
  background-color: rgb(220, 215, 186);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
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
  border-left-color: rgb(84, 84, 100);
  border-left-width: 0px;
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-left-width: 0px;
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

body .search > .search-container > .search-space {
  background-color: rgb(242, 236, 188);
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
  background-color: rgb(220, 213, 172);
  color: rgb(84, 84, 100);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(220, 213, 172);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(220, 213, 172);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
  color: rgb(84, 84, 100);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(220, 213, 172);
  color: rgb(84, 84, 100);
}

body a.internal.tag-link::before {
  color: rgb(84, 84, 100);
}

body h1 {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(84, 84, 100);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(242, 236, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 236, 188);
}

body ::-webkit-scrollbar-corner {
  background: rgb(242, 236, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 236, 188);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(242, 236, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 236, 188);
  border-bottom-color: rgb(84, 84, 100);
  border-left-color: rgb(84, 84, 100);
  border-right-color: rgb(84, 84, 100);
  border-top-color: rgb(84, 84, 100);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(242, 236, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 236, 188);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(242, 236, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 236, 188);
}

body ::-webkit-scrollbar-track {
  background: rgb(242, 236, 188) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 236, 188);
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
  background-color: rgb(220, 213, 172);
  border-bottom-color: rgb(92, 92, 92);
  border-left-color: rgb(92, 92, 92);
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
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
  border-bottom-color: rgb(92, 92, 92);
  border-left-color: rgb(92, 92, 92);
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(220, 213, 172);
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
