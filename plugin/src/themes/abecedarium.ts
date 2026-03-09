import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "abecedarium",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 207;
  --accent-l: 57%;
  --accent-s: 100%;
  --accent-strong: #EC5151;
  --background-modifier-active-hover: rgba(36, 156, 255, 0.1);
  --background-modifier-border: #282931;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3);
  --background-modifier-hover: #1C1F24;
  --background-modifier-success: #197300;
  --background-nav-alt: rgba(62, 147, 216, 0.1);
  --background-primary: #131517;
  --background-primary-alt: #171717;
  --background-secondary: #1C1F24;
  --background-secondary-alt: #0f1112;
  --bases-cards-background: #131517;
  --bases-cards-cover-background: #171717;
  --bases-cards-shadow: 0 0 0 1px #282931;
  --bases-embed-border-color: #282931;
  --bases-group-heading-property-color: #8B959A;
  --bases-table-border-color: #282931;
  --bases-table-cell-background-active: #131517;
  --bases-table-cell-background-disabled: #171717;
  --bases-table-cell-background-selected: rgba(36, 156, 255, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #3378e0;
  --bases-table-group-background: #171717;
  --bases-table-header-background: #131517;
  --bases-table-header-background-hover: #1C1F24;
  --bases-table-header-color: #8B959A;
  --bases-table-summary-background: #131517;
  --bases-table-summary-background-hover: #1C1F24;
  --blockquote-background-color: #1C1F24;
  --blockquote-border-color: #3378e0;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --canvas-background: #131517;
  --canvas-card-label-color: #5D5F67;
  --caret-color: #ECEDEE;
  --checkbox-border-color: #5D5F67;
  --checkbox-border-color-hover: #5D5F67;
  --checkbox-color: #3378e0;
  --checkbox-color-hover: #4e8ae4;
  --checkbox-marker-color: #131517;
  --checkbox-radius: 50%;
  --checklist-done-color: #8B959A;
  --code-background: #171717;
  --code-border-color: #282931;
  --code-bracket-background: #1C1F24;
  --code-comment: #5D5F67;
  --code-important: #de9d07;
  --code-normal: #ECEDEE;
  --code-punctuation: #8B959A;
  --code-value: #b352e0;
  --collapse-icon-color: #5D5F67;
  --collapse-icon-color-collapsed: #3e93d8;
  --color-H1: rgb(255, 255, 255);
  --color-H2: rgb(220,220,220,.2);
  --color-H3: rgb(200,200,200,.4);
  --color-H4: rgb(160,160,160,.5);
  --color-H5: rgb(120,120,120,.5);
  --color-H6: rgb(70,70,70,.5);
  --color-accent: rgb(36, 156, 255);
  --color-accent-1: hsl(204, 102%, 65.55%);
  --color-accent-2: hsl(202, 105%, 73.53%);
  --color-accent-hsl: 207, 100%, 57%;
  --color-green2: #58aa31;
  --color-orange: #de9d07;
  --color-purple: #b352e0;
  --color-purple2: #5252e0;
  --color-yellow-bright: #FBFF00;
  --default-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --divider-color: #282931;
  --divider-color-hover: #3378e0;
  --dropdown-background: #2a2a2a;
  --dropdown-background-hover: #303030;
  --embed-block-shadow-hover: 0 0 0 1px #282931, inset 0 0 0 1px #282931;
  --embed-border-start: 2px solid #3378e0;
  --file-header-background: #131517;
  --file-header-background-focused: #131517;
  --file-header-font: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #2a2a2a;
  --flair-color: #ECEDEE;
  --font-interface: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: #282931;
  --footnote-id-color: #8B959A;
  --footnote-id-color-no-occurrences: #5D5F67;
  --footnote-input-background-active: #1C1F24;
  --graph-node: #8B959A;
  --graph-node-fill-OP1: #3e93d8;
  --graph-node-fill-OP2: #91B8D7;
  --graph-node-fill-yellow: #ffcf00;
  --graph-node-focused: #3e93d8;
  --graph-node-unresolved: #5D5F67;
  --graph-text: #ECEDEE;
  --header-height: 36px;
  --heading-formatting: #5D5F67;
  --heading-spacing: 0.75em;
  --hr-color: #282931;
  --icon-color: #8B959A;
  --icon-color-active: #3e93d8;
  --icon-color-focused: #ECEDEE;
  --icon-color-hover: #8B959A;
  --input-date-separator: #5D5F67;
  --input-placeholder-color: #5D5F67;
  --interactive-accent: #3378e0;
  --interactive-accent-hover: #4e8ae4;
  --interactive-accent-hover-dark: #0f56bf;
  --interactive-accent-hsl: 207, 100%, 57%;
  --interactive-accent-rgb: 38, 157, 255;
  --interactive-hover: #303030;
  --interactive-normal: #2a2a2a;
  --link-color: #3e93d8;
  --link-color-hover: #3378e0;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #3e93d8;
  --link-external-color-hover: #3378e0;
  --link-unresolved-color: #3e93d8;
  --link-unresolved-decoration-color: rgba(36, 156, 255, 0.3);
  --list-marker-color: #3e93d8;
  --list-marker-color-collapsed: #3e93d8;
  --list-marker-color-hover: #8B959A;
  --menu-background: #1C1F24;
  --mermaid-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-border-color: #282931;
  --metadata-divider-color: #282931;
  --metadata-input-background-active: #1C1F24;
  --metadata-input-font: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #ECEDEE;
  --metadata-label-background-active: #1C1F24;
  --metadata-label-font: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #8B959A;
  --metadata-label-text-color-hover: #8B959A;
  --metadata-property-background-active: #1C1F24;
  --modal-background: #131517;
  --nav-collapse-icon-color: #5D5F67;
  --nav-collapse-icon-color-collapsed: #5D5F67;
  --nav-heading-color: #ECEDEE;
  --nav-heading-color-collapsed: #5D5F67;
  --nav-heading-color-collapsed-hover: #8B959A;
  --nav-heading-color-hover: #ECEDEE;
  --nav-item-background-active: #1C1F24;
  --nav-item-background-hover: #1C1F24;
  --nav-item-background-selected: rgba(36, 156, 255, 0.15);
  --nav-item-color: #8B959A;
  --nav-item-color-active: #ECEDEE;
  --nav-item-color-highlighted: #3e93d8;
  --nav-item-color-hover: #ECEDEE;
  --nav-item-color-selected: #ECEDEE;
  --nav-item-parent-padding: 0em 0.5em .15em 0.5em;
  --nav-tag-color: #5D5F67;
  --nav-tag-color-active: #8B959A;
  --nav-tag-color-hover: #8B959A;
  --opacity-translucency: .8;
  --p-spacing: 0.75em;
  --pdf-background: #131517;
  --pdf-page-background: #131517;
  --pdf-shadow: 0 0 0 1px #282931;
  --pdf-sidebar-background: #131517;
  --pdf-thumbnail-shadow: 0 0 0 1px #282931;
  --pill-border-color: #282931;
  --pill-color: #8B959A;
  --pill-color-hover: #ECEDEE;
  --pill-color-remove: #5D5F67;
  --pill-color-remove-hover: #3e93d8;
  --prompt-background: #131517;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --reveal-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --ribbon-background: #1C1F24;
  --ribbon-background-collapsed: #131517;
  --scrollbar-active-thumb-bg: rgba(62, 147, 216, 0.8);
  --scrollbar-bg: rgba(255, 255, 255, 0);
  --scrollbar-thumb-bg: rgb(20, 20, 20);
  --search-clear-button-color: #8B959A;
  --search-icon-color: #8B959A;
  --search-result-background: #131517;
  --setting-group-heading-color: #ECEDEE;
  --setting-items-background: #171717;
  --setting-items-border-color: #282931;
  --slider-track-background: #282931;
  --status-bar-background: #1C1F24;
  --status-bar-border-color: #282931;
  --status-bar-text-color: #8B959A;
  --suggestion-background: #131517;
  --sync-avatar-color-2: #de9d07;
  --sync-avatar-color-7: #b352e0;
  --tab-background-active: #131517;
  --tab-container-background: #1C1F24;
  --tab-outline-color: #282931;
  --tab-stacked-header-width: 36px;
  --tab-switcher-background: #1C1F24;
  --tab-switcher-menubar-background: linear-gradient(to top, #1C1F24, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(36, 156, 255);
  --tab-text-color: #5D5F67;
  --tab-text-color-active: #8B959A;
  --tab-text-color-focused: #8B959A;
  --tab-text-color-focused-active: #8B959A;
  --tab-text-color-focused-active-current: #ECEDEE;
  --tab-text-color-focused-highlighted: #3e93d8;
  --table-add-button-border-color: #282931;
  --table-border-color: #282931;
  --table-drag-handle-background-active: #3378e0;
  --table-drag-handle-color: #5D5F67;
  --table-drag-handle-color-active: #dcddde;
  --table-header-border-color: #282931;
  --table-header-color: #ECEDEE;
  --table-selection: rgba(36, 156, 255, 0.1);
  --table-selection-border-color: #3378e0;
  --tag-background: rgba(36, 156, 255, 0.1);
  --tag-background-hover: rgba(36, 156, 255, 0.2);
  --tag-border-color: rgba(36, 156, 255, 0.15);
  --tag-border-color-hover: rgba(36, 156, 255, 0.15);
  --tag-color: #3e93d8;
  --tag-color-hover: #3e93d8;
  --text-accent: #3e93d8;
  --text-accent-hover: #3378e0;
  --text-accent-hover-dark: #1052b5;
  --text-error: #ff3333;
  --text-error-hover: #990000;
  --text-faint: #5D5F67;
  --text-highlight-bg: #ec0d0d;
  --text-muted: #8B959A;
  --text-normal: #ECEDEE;
  --text-on-accent: #dcddde;
  --text-selection: rgba(6, 66, 113, 0.5);
  --text-warning: #de9d07;
  --titlebar-background: #1C1F24;
  --titlebar-background-focused: #0f1112;
  --titlebar-border-color: #282931;
  --titlebar-text-color: #8B959A;
  --titlebar-text-color-focused: #ECEDEE;
  --traffic-lights-offset-x: 36px;
  --traffic-lights-offset-y: 36px;
  --vault-profile-color: #ECEDEE;
  --vault-profile-color-hover: #ECEDEE;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(28, 31, 36);
  color: rgb(236, 237, 238);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(19, 21, 23);
  color: rgb(236, 237, 238);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(28, 31, 36);
  color: rgb(236, 237, 238);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(40, 41, 49);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(28, 31, 36);
  border-left-color: rgb(40, 41, 49);
  color: rgb(236, 237, 238);
}

body div#quartz-root {
  background-color: rgb(19, 21, 23);
  color: rgb(236, 237, 238);
}`,
    typography: `body .page article p > b, b {
  color: rgb(236, 237, 238);
  outline: rgb(236, 237, 238) none 0px;
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body .page article p > em, em {
  color: rgb(236, 237, 238);
  outline: rgb(236, 237, 238) none 0px;
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body .page article p > i, i {
  color: rgb(236, 237, 238);
  outline: rgb(236, 237, 238) none 0px;
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body .page article p > strong, strong {
  color: rgb(236, 237, 238);
  outline: rgb(236, 237, 238) none 0px;
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body .text-highlight {
  background-color: rgb(236, 13, 13);
  color: rgb(236, 237, 238);
  outline: rgb(236, 237, 238) none 0px;
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body del {
  color: rgb(236, 237, 238);
  outline: rgb(236, 237, 238) none 0px;
  text-decoration: line-through rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body p {
  color: rgb(139, 149, 154);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(139, 149, 154) none 0px;
  text-decoration: rgb(139, 149, 154);
  text-decoration-color: rgb(139, 149, 154);
}`,
    links: `body a.external, footer a {
  color: rgb(62, 147, 216);
  outline: rgb(62, 147, 216) none 0px;
  text-decoration: underline rgb(62, 147, 216);
  text-decoration-color: rgb(62, 147, 216);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(62, 147, 216);
  outline: rgb(62, 147, 216) none 0px;
  text-decoration: rgb(62, 147, 216);
  text-decoration-color: rgb(62, 147, 216);
  transition: opacity 0.15s ease-in-out;
}

body a.internal.broken {
  color: rgb(62, 147, 216);
  outline: rgb(62, 147, 216) none 0px;
  text-decoration: rgba(36, 156, 255, 0.3);
  text-decoration-color: rgba(36, 156, 255, 0.3);
  transition: opacity 0.15s ease-in-out;
}`,
    lists: `body dd {
  color: rgb(236, 237, 238);
}

body dt {
  color: rgb(236, 237, 238);
}

body ol > li {
  color: rgb(236, 237, 238);
}

body ol.overflow {
  background-color: rgb(19, 21, 23);
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

body ul > li {
  color: rgb(236, 237, 238);
}

body ul.overflow {
  background-color: rgb(19, 21, 23);
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(93, 95, 103);
  text-decoration: rgb(93, 95, 103);
}

body blockquote {
  background-color: rgb(28, 31, 36);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

body table {
  color: rgb(236, 237, 238);
  margin-top: 12px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(28, 31, 36);
}

body td {
  border-bottom-color: rgb(40, 41, 49);
  border-left-color: rgb(40, 41, 49);
  border-right-color: rgb(40, 41, 49);
  border-top-color: rgb(40, 41, 49);
  color: rgb(236, 237, 238);
}

body th {
  border-bottom-color: rgb(40, 41, 49);
  border-left-color: rgb(40, 41, 49);
  border-right-color: rgb(40, 41, 49);
  border-top-color: rgb(40, 41, 49);
  color: rgb(236, 237, 238);
}

body tr {
  background-color: rgb(19, 21, 23);
}`,
    code: `body code {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
  color: rgb(236, 237, 238);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(28, 31, 36);
  border-bottom-color: rgb(40, 41, 49);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 41, 49);
  border-right-color: rgb(40, 41, 49);
  border-top-color: rgb(40, 41, 49);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(28, 31, 36);
  border-bottom-color: rgb(40, 41, 49);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 41, 49);
  border-right-color: rgb(40, 41, 49);
  border-top-color: rgb(40, 41, 49);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(236, 237, 238);
}

body pre > code, pre:has(> code) {
  background-color: rgb(28, 31, 36);
  border-bottom-color: rgb(40, 41, 49);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 41, 49);
  border-right-color: rgb(40, 41, 49);
  border-top-color: rgb(40, 41, 49);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(28, 31, 36);
  border-bottom-color: rgb(40, 41, 49);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(40, 41, 49);
  border-right-color: rgb(40, 41, 49);
  border-top-color: rgb(40, 41, 49);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

body figcaption {
  color: rgb(236, 237, 238);
}

body figure {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

body img {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

body video {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}`,
    embeds: `body .file-embed {
  background-color: rgb(23, 23, 23);
  border-bottom-color: rgb(139, 149, 154);
  border-left-color: rgb(139, 149, 154);
  border-right-color: rgb(139, 149, 154);
  border-top-color: rgb(139, 149, 154);
}

body .footnotes {
  border-top-color: rgb(236, 237, 238);
  color: rgb(236, 237, 238);
}

body .transclude {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(28, 31, 36);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
  padding-left: 25px;
}

body .transclude-inner {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(28, 31, 36);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
  padding-left: 25px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(93, 95, 103);
  text-decoration: line-through rgb(93, 95, 103);
  text-decoration-color: rgb(93, 95, 103);
}

body input[type=checkbox] {
  border-bottom-color: rgb(93, 95, 103);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(93, 95, 103);
  border-right-color: rgb(93, 95, 103);
  border-top-color: rgb(93, 95, 103);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body li.task-list-item[data-task='*'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body li.task-list-item[data-task='-'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body li.task-list-item[data-task='/'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body li.task-list-item[data-task='>'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body li.task-list-item[data-task='?'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body li.task-list-item[data-task='I'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body li.task-list-item[data-task='S'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body li.task-list-item[data-task='b'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body li.task-list-item[data-task='c'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body li.task-list-item[data-task='d'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body li.task-list-item[data-task='f'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body li.task-list-item[data-task='i'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body li.task-list-item[data-task='k'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body li.task-list-item[data-task='l'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body li.task-list-item[data-task='p'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body li.task-list-item[data-task='u'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body li.task-list-item[data-task='w'] {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(15, 17, 18);
  border-bottom-color: rgb(40, 41, 49);
  border-left-color: rgb(40, 41, 49);
  border-right-color: rgb(40, 41, 49);
  border-top-color: rgb(40, 41, 49);
  color: rgb(236, 237, 238);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(19, 21, 23);
}

body .search > .search-container > .search-space > * {
  color: rgb(236, 237, 238);
  outline: rgb(236, 237, 238) none 0px;
  text-decoration: rgb(236, 237, 238);
  text-decoration-color: rgb(236, 237, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(236, 237, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(236, 237, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(16, 82, 181);
  color: rgb(236, 237, 238);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(28, 31, 36);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(16, 82, 181);
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
  color: rgb(236, 237, 238);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(16, 82, 181);
  color: rgb(236, 237, 238);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(36, 156, 255, 0.1);
  border-bottom-color: rgba(36, 156, 255, 0.15);
  border-left-color: rgba(36, 156, 255, 0.15);
  border-right-color: rgba(36, 156, 255, 0.15);
  border-top-color: rgba(36, 156, 255, 0.15);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(62, 147, 216);
}

body h1 {
  color: rgb(236, 237, 238);
}

body h2 {
  color: rgb(236, 237, 238);
}

body h2.page-title, h2.page-title a {
  color: rgb(236, 237, 238);
}

body h3 {
  color: rgb(236, 237, 238);
}

body h4 {
  color: rgb(236, 237, 238);
}

body h5 {
  color: rgb(236, 237, 238);
}

body h6 {
  color: rgb(236, 237, 238);
}

body hr {
  border-bottom-color: rgb(40, 41, 49);
  border-left-color: rgb(40, 41, 49);
  border-right-color: rgb(40, 41, 49);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(19, 21, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 23);
}

body ::-webkit-scrollbar-corner {
  background: rgb(19, 21, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 23);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(19, 21, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 23);
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(19, 21, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 23);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(19, 21, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 23);
}

body ::-webkit-scrollbar-track {
  background: rgb(19, 21, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 21, 23);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(139, 149, 154);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(139, 149, 154);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(139, 149, 154);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(139, 149, 154);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(139, 149, 154);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(139, 149, 154);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(62, 147, 216);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(139, 149, 154);
  border-left-color: rgb(139, 149, 154);
  border-right-color: rgb(139, 149, 154);
  border-top-color: rgb(139, 149, 154);
  color: rgb(139, 149, 154);
}`,
    footer: `body footer {
  background-color: rgb(15, 17, 18);
  border-bottom-color: rgb(40, 41, 49);
  border-left-color: rgb(40, 41, 49);
  border-right-color: rgb(40, 41, 49);
  border-top-color: rgb(40, 41, 49);
  border-top-width: 0px;
  color: rgb(236, 237, 238);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(236, 237, 238);
  text-decoration: rgb(236, 237, 238);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(236, 237, 238);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
  color: rgb(236, 237, 238);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(139, 149, 154);
  text-decoration: rgb(139, 149, 154);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(139, 149, 154);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

body li.section-li > .section .meta {
  color: rgb(139, 149, 154);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(139, 149, 154);
  text-decoration: rgb(139, 149, 154);
}

body ul.section-ul {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(139, 149, 154);
  border-left-color: rgb(139, 149, 154);
  border-right-color: rgb(139, 149, 154);
  border-top-color: rgb(139, 149, 154);
  color: rgb(139, 149, 154);
}

body .darkmode svg {
  color: rgb(139, 149, 154);
  stroke: rgb(139, 149, 154);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(139, 149, 154);
  border-left-color: rgb(139, 149, 154);
  border-right-color: rgb(139, 149, 154);
  border-top-color: rgb(139, 149, 154);
  color: rgb(139, 149, 154);
}

body .breadcrumb-element p {
  color: rgb(93, 95, 103);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
  color: rgb(236, 237, 238);
}

body .metadata {
  border-bottom-color: rgb(40, 41, 49);
  border-left-color: rgb(40, 41, 49);
  border-right-color: rgb(40, 41, 49);
  border-top-color: rgb(40, 41, 49);
  color: rgb(139, 149, 154);
}

body .metadata-properties {
  border-bottom-color: rgb(139, 149, 154);
  border-left-color: rgb(139, 149, 154);
  border-right-color: rgb(139, 149, 154);
  border-top-color: rgb(139, 149, 154);
  color: rgb(139, 149, 154);
}

body .navigation-progress {
  background-color: rgb(15, 17, 18);
}

body .page-header h2.page-title {
  color: rgb(236, 237, 238);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(236, 237, 238);
  text-decoration: underline dotted rgb(236, 237, 238);
}

body details {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

body input[type=text] {
  border-bottom-color: rgb(139, 149, 154);
  border-left-color: rgb(139, 149, 154);
  border-right-color: rgb(139, 149, 154);
  border-top-color: rgb(139, 149, 154);
  color: rgb(139, 149, 154);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(23, 23, 23);
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
  color: rgb(236, 237, 238);
}

body progress {
  border-bottom-color: rgb(236, 237, 238);
  border-left-color: rgb(236, 237, 238);
  border-right-color: rgb(236, 237, 238);
  border-top-color: rgb(236, 237, 238);
}

body sub {
  color: rgb(236, 237, 238);
}

body summary {
  color: rgb(236, 237, 238);
}

body sup {
  color: rgb(236, 237, 238);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 207;
  --accent-l: 57%;
  --accent-s: 100%;
  --accent-strong: #ff6666;
  --background-accent: #fff;
  --background-modifier-active-hover: rgba(36, 156, 255, 0.1);
  --background-modifier-border: #ddd;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.1);
  --background-modifier-cover: rgba(0, 0, 0, 0.1);
  --background-modifier-error: #e68787;
  --background-modifier-error-hover: #FF9494;
  --background-modifier-error-rgb: 230, 135, 135;
  --background-modifier-form-field: #fff;
  --background-modifier-form-field-highlighted: #fff;
  --background-modifier-form-field-hover: #fff;
  --background-modifier-hover: #f2f3f5;
  --background-modifier-success: #A4E7C3;
  --background-nav-alt: rgba(38, 135, 255, 0.1);
  --background-primary: #FFFFFF;
  --background-primary-alt: #f0f2f5;
  --background-secondary: #f2f3f5;
  --background-secondary-alt: #e3e5e8;
  --bases-cards-background: #FFFFFF;
  --bases-cards-cover-background: #f0f2f5;
  --bases-cards-shadow: 0 0 0 1px #ddd;
  --bases-embed-border-color: #ddd;
  --bases-table-border-color: #ddd;
  --bases-table-cell-background-active: #FFFFFF;
  --bases-table-cell-background-disabled: #f0f2f5;
  --bases-table-cell-background-selected: rgba(36, 156, 255, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #2da4ff;
  --bases-table-group-background: #f0f2f5;
  --bases-table-header-background: #FFFFFF;
  --bases-table-header-background-hover: #f2f3f5;
  --bases-table-summary-background: #FFFFFF;
  --bases-table-summary-background-hover: #f2f3f5;
  --blockquote-background-color: #f0f2f5;
  --blockquote-border-color: #2da4ff;
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --canvas-background: #FFFFFF;
  --canvas-card-label-color: #999999;
  --caret-color: #2e3338;
  --checkbox-border-color: #999999;
  --checkbox-border-color-hover: #999999;
  --checkbox-color: #2da4ff;
  --checkbox-color-hover: #2287d4;
  --checkbox-marker-color: #FFFFFF;
  --checkbox-radius: 50%;
  --code-background: #f0f2f5;
  --code-border-color: #ddd;
  --code-bracket-background: #f2f3f5;
  --code-comment: #999999;
  --code-important: #EFB220;
  --code-normal: #2e3338;
  --code-string: #44A850;
  --collapse-icon-color: #999999;
  --collapse-icon-color-collapsed: #269dff;
  --color-H1: rgb(0, 0, 0);
  --color-H2: rgb(70,70,70,.5);
  --color-H3: rgb(120,120,120,.5);
  --color-H4: rgb(160,160,160,.5);
  --color-H5: rgb(200,200,200,.5);
  --color-H6: rgb(220, 220, 220);
  --color-accent: rgb(36, 156, 255);
  --color-accent-1: hsl(206, 101%, 61.275%);
  --color-accent-2: hsl(204, 102%, 65.55%);
  --color-accent-hsl: 207, 100%, 57%;
  --color-green: #44A850;
  --color-orange: #EFB220;
  --default-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --divider-color: #ddd;
  --divider-color-hover: #2da4ff;
  --dropdown-background: #f2f3f5;
  --dropdown-background-hover: #e9e9e9;
  --embed-block-shadow-hover: 0 0 0 1px #ddd, inset 0 0 0 1px #ddd;
  --embed-border-start: 2px solid #2da4ff;
  --file-header-background: #FFFFFF;
  --file-header-background-focused: #FFFFFF;
  --file-header-font: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #f2f3f5;
  --flair-color: #2e3338;
  --font-interface: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: #ddd;
  --footnote-id-color-no-occurrences: #999999;
  --footnote-input-background-active: #f2f3f5;
  --graph-node-fill-OP1: #269dff;
  --graph-node-fill-OP2: #91B8D7;
  --graph-node-fill-yellow: #ffcf00;
  --graph-node-focused: #269dff;
  --graph-node-tag: #44A850;
  --graph-node-unresolved: #999999;
  --graph-text: #2e3338;
  --header-height: 36px;
  --heading-formatting: #999999;
  --heading-spacing: 0.75em;
  --hr-color: #ddd;
  --icon-color-active: #269dff;
  --icon-color-focused: #2e3338;
  --input-date-separator: #999999;
  --input-placeholder-color: #999999;
  --interactive-accent: #2da4ff;
  --interactive-accent-hover: #2287d4;
  --interactive-accent-hsl: 207, 100%, 57%;
  --interactive-accent-rgb: 38, 157, 255;
  --interactive-hover: #e9e9e9;
  --interactive-normal: #f2f3f5;
  --link-color: #269dff;
  --link-color-hover: #66baff;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #269dff;
  --link-external-color-hover: #66baff;
  --link-unresolved-color: #269dff;
  --link-unresolved-decoration-color: rgba(36, 156, 255, 0.3);
  --list-marker-color: #269dff;
  --list-marker-color-collapsed: #269dff;
  --menu-background: #f2f3f5;
  --mermaid-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-border-color: #ddd;
  --metadata-divider-color: #ddd;
  --metadata-input-background-active: #f2f3f5;
  --metadata-input-font: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #2e3338;
  --metadata-label-background-active: #f2f3f5;
  --metadata-label-font: '??', '??', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-property-background-active: #f2f3f5;
  --modal-background: #FFFFFF;
  --nav-collapse-icon-color: #999999;
  --nav-collapse-icon-color-collapsed: #999999;
  --nav-heading-color: #2e3338;
  --nav-heading-color-collapsed: #999999;
  --nav-heading-color-hover: #2e3338;
  --nav-item-background-active: #f2f3f5;
  --nav-item-background-hover: #f2f3f5;
  --nav-item-background-selected: rgba(36, 156, 255, 0.15);
  --nav-item-color-active: #2e3338;
  --nav-item-color-highlighted: #269dff;
  --nav-item-color-hover: #2e3338;
  --nav-item-color-selected: #2e3338;
  --nav-item-parent-padding: 0em 0.5em .15em 0.5em;
  --nav-tag-color: #999999;
  --p-spacing: 0.75em;
  --pdf-background: #FFFFFF;
  --pdf-page-background: #FFFFFF;
  --pdf-sidebar-background: #FFFFFF;
  --pill-border-color: #ddd;
  --pill-color-hover: #2e3338;
  --pill-color-remove: #999999;
  --pill-color-remove-hover: #269dff;
  --prompt-background: #FFFFFF;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --reveal-font: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --ribbon-background: #f2f3f5;
  --ribbon-background-collapsed: #FFFFFF;
  --scrollbar-active-thumb-bg: rgba(38, 157, 255, 0.8);
  --scrollbar-bg: rgba(100, 100, 100, 0);
  --scrollbar-thumb-bg: #e3e5e8;
  --search-result-background: #FFFFFF;
  --setting-group-heading-color: #2e3338;
  --setting-items-background: #f0f2f5;
  --setting-items-border-color: #ddd;
  --slider-track-background: #ddd;
  --status-bar-background: #f2f3f5;
  --status-bar-border-color: #ddd;
  --suggestion-background: #FFFFFF;
  --sync-avatar-color-2: #EFB220;
  --sync-avatar-color-4: #44A850;
  --tab-background-active: #FFFFFF;
  --tab-container-background: #f2f3f5;
  --tab-outline-color: #ddd;
  --tab-stacked-header-width: 36px;
  --tab-switcher-background: #f2f3f5;
  --tab-switcher-menubar-background: linear-gradient(to top, #f2f3f5, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(36, 156, 255);
  --tab-text-color: #999999;
  --tab-text-color-focused-active-current: #2e3338;
  --tab-text-color-focused-highlighted: #269dff;
  --table-add-button-border-color: #ddd;
  --table-border-color: #ddd;
  --table-drag-handle-background-active: #2da4ff;
  --table-drag-handle-color: #999999;
  --table-drag-handle-color-active: #2e3338;
  --table-header-border-color: #ddd;
  --table-header-color: #2e3338;
  --table-selection: rgba(36, 156, 255, 0.1);
  --table-selection-border-color: #2da4ff;
  --tag-background: rgba(36, 156, 255, 0.1);
  --tag-background-hover: rgba(36, 156, 255, 0.2);
  --tag-border-color: rgba(36, 156, 255, 0.15);
  --tag-border-color-hover: rgba(36, 156, 255, 0.15);
  --tag-color: #269dff;
  --tag-color-hover: #269dff;
  --text-accent: #269dff;
  --text-accent-hover: #66baff;
  --text-accent-hover-dark: #4e8ae4;
  --text-error: #ce2222;
  --text-error-hover: #cb2c2;
  --text-faint: #999999;
  --text-highlight-bg: #FF3737;
  --text-normal: #2e3338;
  --text-on-accent: #2e3338;
  --text-selection: rgba(134, 202, 255, 0.5);
  --text-success: #44A850;
  --text-warning: #EFB220;
  --titlebar-background: #f2f3f5;
  --titlebar-background-focused: #e3e5e8;
  --titlebar-border-color: #ddd;
  --titlebar-text-color-focused: #2e3338;
  --traffic-lights-offset-x: 36px;
  --traffic-lights-offset-y: 36px;
  --vault-profile-color: #2e3338;
  --vault-profile-color-hover: #2e3338;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(46, 51, 56);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 243, 245);
  color: rgb(46, 51, 56);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(221, 221, 221);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 243, 245);
  border-left-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
}

body div#quartz-root {
  color: rgb(46, 51, 56);
}`,
    typography: `body .page article p > b, b {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body .page article p > em, em {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body .page article p > i, i {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body .page article p > strong, strong {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body .text-highlight {
  background-color: rgb(255, 55, 55);
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body del {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: line-through rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body p {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(38, 157, 255);
  outline: rgb(38, 157, 255) none 0px;
  text-decoration: underline rgb(38, 157, 255);
  text-decoration-color: rgb(38, 157, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(38, 157, 255);
  outline: rgb(38, 157, 255) none 0px;
  text-decoration: rgb(38, 157, 255);
  text-decoration-color: rgb(38, 157, 255);
  transition: opacity 0.15s ease-in-out;
}

body a.internal.broken {
  color: rgb(38, 157, 255);
  outline: rgb(38, 157, 255) none 0px;
  text-decoration: rgba(36, 156, 255, 0.3);
  text-decoration-color: rgba(36, 156, 255, 0.3);
  transition: opacity 0.15s ease-in-out;
}`,
    lists: `body dd {
  color: rgb(46, 51, 56);
}

body dt {
  color: rgb(46, 51, 56);
}

body ol > li {
  color: rgb(46, 51, 56);
}

body ol.overflow {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body ul > li {
  color: rgb(46, 51, 56);
}

body ul.overflow {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body blockquote {
  background-color: rgb(240, 242, 245);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body table {
  color: rgb(46, 51, 56);
  margin-top: 12px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(242, 243, 245);
}

body td {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
}

body th {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
}

body tr {
  background-color: rgb(255, 255, 255);
}`,
    code: `body code {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(240, 242, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(240, 242, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body pre > code, pre:has(> code) {
  background-color: rgb(240, 242, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body pre:has(> code) {
  background-color: rgb(240, 242, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    images: `body audio {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body figcaption {
  color: rgb(46, 51, 56);
}

body figure {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body img {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body video {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    embeds: `body .file-embed {
  background-color: rgb(240, 242, 245);
}

body .footnotes {
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

body .transclude {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(242, 243, 245);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  padding-left: 25px;
}

body .transclude-inner {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(242, 243, 245);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  padding-left: 25px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(153, 153, 153);
  text-decoration: line-through rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='*'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='-'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='/'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='>'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='?'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='I'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='S'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='b'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='c'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='d'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='f'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='i'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='k'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='l'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='p'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='u'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body li.task-list-item[data-task='w'] {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(227, 229, 232);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > * {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(46, 51, 56);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(46, 51, 56);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(78, 138, 228);
  color: rgb(46, 51, 56);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 243, 245);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(78, 138, 228);
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(78, 138, 228);
  color: rgb(46, 51, 56);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(36, 156, 255, 0.1);
  border-bottom-color: rgba(36, 156, 255, 0.15);
  border-left-color: rgba(36, 156, 255, 0.15);
  border-right-color: rgba(36, 156, 255, 0.15);
  border-top-color: rgba(36, 156, 255, 0.15);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(38, 157, 255);
}

body h1 {
  color: rgb(46, 51, 56);
}

body h2 {
  color: rgb(46, 51, 56);
}

body h2.page-title, h2.page-title a {
  color: rgb(46, 51, 56);
}

body h3 {
  color: rgb(46, 51, 56);
}

body h4 {
  color: rgb(46, 51, 56);
}

body h5 {
  color: rgb(46, 51, 56);
}

body h6 {
  color: rgb(46, 51, 56);
}

body hr {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(38, 157, 255);
}`,
    footer: `body footer {
  background-color: rgb(227, 229, 232);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  border-top-width: 0px;
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(46, 51, 56);
  text-decoration: rgb(46, 51, 56);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body li.section-li > .section .meta {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(153, 153, 153);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

body .metadata {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body .navigation-progress {
  background-color: rgb(227, 229, 232);
}

body .page-header h2.page-title {
  color: rgb(46, 51, 56);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(46, 51, 56);
  text-decoration: underline dotted rgb(46, 51, 56);
}

body details {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body input[type=text] {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(240, 242, 245);
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

body progress {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body sub {
  color: rgb(46, 51, 56);
}

body summary {
  color: rgb(46, 51, 56);
}

body sup {
  color: rgb(46, 51, 56);
}`,
  },
};
