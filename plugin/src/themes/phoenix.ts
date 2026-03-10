import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "phoenix",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono", "sf-pro-display"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #534f4e;
  --background-primary: #212121;
  --background-primary-alt: #282828;
  --background-secondary: #191717;
  --background-secondary-alt: #161414;
  --bases-cards-background: #212121;
  --bases-cards-cover-background: #282828;
  --bases-cards-shadow: 0 0 0 1px #534f4e;
  --bases-embed-border-color: #534f4e;
  --bases-table-border-color: #534f4e;
  --bases-table-cell-background-active: #212121;
  --bases-table-cell-background-disabled: #282828;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ed5b0f;
  --bases-table-group-background: #282828;
  --bases-table-header-background: #212121;
  --bases-table-summary-background: #212121;
  --blockquote-border-color: #ed5b0f;
  --bodyFont: var(--font-interface);
  --bright-orange-v: #fe8019;
  --bright-red: #fb4934;
  --bright-yellow-v: #fabd2f;
  --button-text-color: #161414;
  --callout-bg-darken-pct: 0%;
  --callout-blend-mode: normal;
  --callout-padding: 12px 12px 12px 20px;
  --canvas-background: #212121;
  --canvas-card-label-color: #625e5e;
  --caret-color: #eadad9;
  --checkbox-border-color: #625e5e;
  --checkbox-color: #ed5b0f;
  --checkbox-marker-color: #212121;
  --code-background: #1a1a1a;
  --code-block: #cccccc;
  --code-border-color: #534f4e;
  --code-comment: #625e5e;
  --code-light-gray: #cccccc;
  --code-normal: #cccccc;
  --code-orange: #b46629;
  --codeFont: var(--font-interface);
  --collapse-icon-color: #625e5e;
  --collapse-icon-color-collapsed: #fe750e;
  --dark: var(--text-normal);
  --dark0: #282828;
  --dark0-hard: #1d2021;
  --dark0-soft: #32302f;
  --dark1: #3c3836;
  --dark2: #504945;
  --dark3: #665c54;
  --dark4: #7c6f64;
  --darkgray: var(--text-normal);
  --default-codeblock: #1a1a1a;
  --default-font: system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter;
  --divider-color: #534f4e;
  --divider-color-hover: #ed5b0f;
  --editor-font: system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter;
  --embed-block-shadow-hover: 0 0 0 1px #534f4e, inset 0 0 0 1px #534f4e;
  --embed-border-left: none;
  --embed-border-start: 2px solid #ed5b0f;
  --faded-orange: #af3a03;
  --faded-red: #9d0006;
  --faded-yellow: #b57614;
  --file-header-background: #212121;
  --file-header-background-focused: #212121;
  --file-header-font: '??', '??', -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: #eadad9;
  --font-interface: '??', '??', -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: #534f4e;
  --footnote-id-color-no-occurrences: #625e5e;
  --graph-node-focused: #fe750e;
  --graph-node-unresolved: #625e5e;
  --graph-text: #eadad9;
  --graph-view-line-color: #3c3836;
  --gray: #928374;
  --h1-link-hover-color: color-mix(in srgb, #ff6666 20%, #bc0104);
  --h1-link-ul-color: color-mix(in srgb, #bc0104 33%, transparent);
  --h1-size: 2.2em;
  --h2-link-hover-color: color-mix(in srgb, #ff9090 20%, #ea4f0d);
  --h2-link-ul-color: color-mix(in srgb, #ea4f0d 33%, transparent);
  --h2-size: 2.0em;
  --h3-link-hover-color: color-mix(in srgb, #ffaaaa 20%, #fe750e);
  --h3-link-ul-color: color-mix(in srgb, #fe750e 33%, transparent);
  --h3-size: 1.85em;
  --h4-link-hover-color: color-mix(in srgb, #ffd2d2 20%, #fea30f);
  --h4-link-ul-color: color-mix(in srgb, #fea30f 33%, transparent);
  --h4-size: 1.6em;
  --h5-link-hover-color: color-mix(in srgb, #ffffff 17%, #c0c90a);
  --h5-link-ul-color: color-mix(in srgb, #c0c90a 33%, transparent);
  --h5-size: 1.47em;
  --h6-link-hover-color: color-mix(in srgb, #ffffff 25%, #27cac7);
  --h6-link-ul-color: color-mix(in srgb, #27cac7 33%, transparent);
  --h6-size: 1.35em;
  --headerFont: var(--font-interface);
  --heading-formatting: #625e5e;
  --heading-spacing: 0.625rem;
  --highlight: var(--text-highlight-bg);
  --hr-color: #534f4e;
  --hx-link-ul-transparency-pct: 33%;
  --icon-color-active: #fe750e;
  --icon-color-focused: #eadad9;
  --img-border-radius: 2px;
  --inline-code: #cccccc;
  --inline-title-size: 2.2em;
  --input-date-separator: #625e5e;
  --input-placeholder-color: #625e5e;
  --interactive-accent: #ed5b0f;
  --interactive-accent-rgb: #fe750e;
  --interactive-before: #7c6f64;
  --light: var(--background-primary);
  --light0: #fbf1c7;
  --light0-hard: #f9f5d7;
  --light0-soft: #f2e5bc;
  --light1: #ebdbb2;
  --light2: #d5c4a1;
  --light3: #bdae93;
  --light4: #a89984;
  --lightgray: var(--background-secondary);
  --link-color: #fe750e;
  --link-color-hover: #fe9109;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #fe750e;
  --link-external-color-hover: #fe9109;
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: #fe750e;
  --link-unresolved-decoration: none;
  --link-unresolved-decoration-hover: none;
  --list-indent: 1em;
  --list-marker-color: #625e5e;
  --list-marker-color-collapsed: #fe750e;
  --max-embed-height: 1000px;
  --menu-background: #191717;
  --metadata-border-color: #534f4e;
  --metadata-divider-color: #534f4e;
  --metadata-input-font: '??', '??', -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #eadad9;
  --metadata-label-font: '??', '??', -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-background: #212121;
  --nav-collapse-icon-color: #625e5e;
  --nav-collapse-icon-color-collapsed: #625e5e;
  --nav-heading-color: #eadad9;
  --nav-heading-color-collapsed: #625e5e;
  --nav-heading-color-hover: #eadad9;
  --nav-item-color-active: #eadad9;
  --nav-item-color-highlighted: #fe750e;
  --nav-item-color-hover: #eadad9;
  --nav-item-color-selected: #eadad9;
  --nav-tag-color: #625e5e;
  --neutral-orange: #d65d0e;
  --neutral-red: #cc241d;
  --neutral-yellow: #d79921;
  --obsidian-codeblock: #1a1a1a;
  --p-spacing: 0.25rem;
  --pdf-background: #212121;
  --pdf-page-background: #212121;
  --pdf-shadow: 0 0 0 1px #534f4e;
  --pdf-sidebar-background: #212121;
  --pdf-thumbnail-shadow: 0 0 0 1px #534f4e;
  --pill-border-color: #534f4e;
  --pill-color-hover: #eadad9;
  --pill-color-remove: #625e5e;
  --pill-color-remove-hover: #fe750e;
  --platinum: #cccccc;
  --pre-code: #1a1a1a;
  --prompt-background: #212121;
  --r-bg-highlight: color-mix(in srgb, #fe9109 50%, transparent);
  --r-bg-selection: color-mix(in srgb, #d5520e 25%, transparent);
  --r-bright-orange: #fe750e;
  --r-bright-yellow: #fea30f;
  --r-dark-orange: #d5520e;
  --r-dark-red: #bc0104;
  --r-dark0: #212121;
  --r-dark0-accent: #1e1e1e;
  --r-dark1: #191717;
  --r-dark2: #161414;
  --r-deep-orange: #ed5b0f;
  --r-gray: #9d8f82;
  --r-gray2: #a89c90;
  --r-gray3: #b3ab9e;
  --r-gunmetal: #534f4e;
  --r-light0: #e7cfb8;
  --r-light1: #dbc5af;
  --r-light2: #d0baa6;
  --r-light2-soft: #c4b09c;
  --r-light3: #b9a693;
  --r-light4: #a79584;
  --r-lightn1: #f2e5d8;
  --r-meteor: #72504b;
  --r-mist-energy-blue: #27cac7;
  --r-orange: #ea4f0d;
  --r-pdf-highlight: #fe750e;
  --r-red-orange: #c52d0a;
  --r-scorpion: #625e5e;
  --r-standard-text: #eadad9;
  --r-yellow-green: #c0c90a;
  --r-yellow-orange: #fe9109;
  --ribbon-background: #191717;
  --ribbon-background-collapsed: #212121;
  --search-result-background: #212121;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #eadad9;
  --setting-items-background: #282828;
  --setting-items-border-color: #534f4e;
  --size-code: 14.4px;
  --size-normal: 16px;
  --slider-track-background: #534f4e;
  --status-bar-background: #191717;
  --status-bar-border-color: #534f4e;
  --suggestion-background: #212121;
  --tab-background-active: #212121;
  --tab-container-background: #191717;
  --tab-outline-color: #534f4e;
  --tab-switcher-background: #191717;
  --tab-switcher-menubar-background: linear-gradient(to top, #191717, transparent);
  --tab-text-color: #625e5e;
  --tab-text-color-focused-active-current: #eadad9;
  --tab-text-color-focused-highlighted: #fe750e;
  --table-add-button-border-color: #534f4e;
  --table-border-color: #534f4e;
  --table-drag-handle-background-active: #ed5b0f;
  --table-drag-handle-color: #625e5e;
  --table-header-border-color: #534f4e;
  --table-header-color: #eadad9;
  --table-selection-border-color: #ed5b0f;
  --tag-color: #fe750e;
  --tag-color-hover: #fe750e;
  --tertiary: var(--text-accent-hover);
  --test-green: #00ff00;
  --text-a: #fe750e;
  --text-a-hover: #fe9109;
  --text-accent: #fe750e;
  --text-accent-hover: #fe9109;
  --text-card: #c4b09c;
  --text-faint: #625e5e;
  --text-highlight-bg: color-mix(in srgb, #fe9109 50%, transparent);
  --text-link: #fe750e;
  --text-link-hover: #fe9109;
  --text-mark: color-mix(in srgb, #fe9109 50%, transparent);
  --text-normal: #eadad9;
  --text-platinum: #cccccc;
  --text-selection: color-mix(in srgb, #d5520e 25%, transparent);
  --text-tag: #fe750e;
  --text-title-h1: #bc0104;
  --text-title-h2: #ea4f0d;
  --text-title-h3: #fe750e;
  --text-title-h4: #fea30f;
  --text-title-h5: #c0c90a;
  --text-title-h6: #27cac7;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-interface);
  --titlebar-background: #191717;
  --titlebar-background-focused: #161414;
  --titlebar-border-color: #534f4e;
  --titlebar-text-color-focused: #eadad9;
  --vault-profile-color: #eadad9;
  --vault-profile-color-hover: #eadad9;
  --vim-cursor: #fe750e;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 23, 23);
  color: rgb(234, 218, 217);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(33, 33, 33);
  color: rgb(234, 218, 217);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 23, 23);
  color: rgb(234, 218, 217);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(83, 79, 78);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 23, 23);
  border-left-color: rgb(83, 79, 78);
  color: rgb(234, 218, 217);
}

body div#quartz-root {
  background-color: rgb(33, 33, 33);
  color: rgb(234, 218, 217);
}`,
    typography: `body .page article p > b, b {
  color: rgb(234, 218, 217);
  font-weight: 700;
  outline: rgb(234, 218, 217) none 0px;
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body .page article p > em, em {
  color: rgb(234, 218, 217);
  outline: rgb(234, 218, 217) none 0px;
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body .page article p > i, i {
  color: rgb(234, 218, 217);
  outline: rgb(234, 218, 217) none 0px;
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body .page article p > strong, strong {
  color: rgb(234, 218, 217);
  font-weight: 700;
  outline: rgb(234, 218, 217) none 0px;
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body .text-highlight {
  background-color: color(srgb 0.996078 0.568627 0.0352941 / 0.5);
  color: rgb(234, 218, 217);
  outline: rgb(234, 218, 217) none 0px;
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body del {
  color: rgb(234, 218, 217);
  outline: rgb(234, 218, 217) none 0px;
  text-decoration: line-through rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body p {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(254, 117, 14);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(254, 117, 14) none 0px;
  text-decoration: rgb(254, 117, 14);
  text-decoration-color: rgb(254, 117, 14);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(254, 117, 14);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(254, 117, 14) none 0px;
  text-decoration: rgb(254, 117, 14);
  text-decoration-color: rgb(254, 117, 14);
}

body a.internal.broken {
  color: rgb(254, 117, 14);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(254, 117, 14) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(234, 218, 217);
}

body dt {
  color: rgb(234, 218, 217);
}

body ol > li {
  color: rgb(234, 218, 217);
}

body ol.overflow {
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

body ul > li {
  color: rgb(234, 218, 217);
}

body ul.overflow {
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(98, 94, 94);
  text-decoration: rgb(98, 94, 94);
}

body blockquote {
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

body table {
  color: rgb(234, 218, 217);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  margin-top: 0px;
  width: 195.062px;
}

body td {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(234, 218, 217);
}

body th {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(234, 218, 217);
}

body thead {
  border-bottom-color: rgb(83, 79, 78);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

body tr {
  border-bottom-color: rgb(83, 79, 78);
}`,
    code: `body code {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(234, 218, 217);
}

body pre > code, pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
}

body pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
}`,
    images: `body audio {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

body figcaption {
  color: rgb(234, 218, 217);
}

body figure {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

body img {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

body video {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}`,
    embeds: `body .file-embed {
  background-color: rgb(40, 40, 40);
}

body .footnotes {
  border-top-color: rgb(234, 218, 217);
  color: rgb(234, 218, 217);
}

body .transclude {
  border-bottom-color: rgb(50, 48, 47);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(50, 48, 47);
  border-right-color: rgb(50, 48, 47);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(50, 48, 47);
  border-top-style: solid;
  border-top-width: 2px;
  padding-bottom: 1px;
  padding-left: 5px;
}

body .transclude-inner {
  border-bottom-color: rgb(50, 48, 47);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(50, 48, 47);
  border-right-color: rgb(50, 48, 47);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(50, 48, 47);
  border-top-style: solid;
  border-top-width: 2px;
  padding-bottom: 1px;
  padding-left: 5px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(98, 94, 94);
  border-left-color: rgb(98, 94, 94);
  border-right-color: rgb(98, 94, 94);
  border-top-color: rgb(98, 94, 94);
}

body li.task-list-item[data-task='!'] {
  color: rgb(234, 218, 217);
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body li.task-list-item[data-task='*'] {
  color: rgb(234, 218, 217);
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body li.task-list-item[data-task='-'] {
  color: rgb(234, 218, 217);
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body li.task-list-item[data-task='/'] {
  color: rgb(234, 218, 217);
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body li.task-list-item[data-task='>'] {
  color: rgb(234, 218, 217);
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body li.task-list-item[data-task='?'] {
  color: rgb(234, 218, 217);
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body li.task-list-item[data-task='I'] {
  color: rgb(234, 218, 217);
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body li.task-list-item[data-task='S'] {
  color: rgb(234, 218, 217);
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body li.task-list-item[data-task='b'] {
  color: rgb(234, 218, 217);
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body li.task-list-item[data-task='c'] {
  color: rgb(234, 218, 217);
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body li.task-list-item[data-task='d'] {
  color: rgb(234, 218, 217);
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body li.task-list-item[data-task='f'] {
  color: rgb(234, 218, 217);
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body li.task-list-item[data-task='i'] {
  color: rgb(234, 218, 217);
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body li.task-list-item[data-task='k'] {
  color: rgb(234, 218, 217);
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body li.task-list-item[data-task='l'] {
  color: rgb(234, 218, 217);
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body li.task-list-item[data-task='p'] {
  color: rgb(234, 218, 217);
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body li.task-list-item[data-task='u'] {
  color: rgb(234, 218, 217);
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body li.task-list-item[data-task='w'] {
  color: rgb(234, 218, 217);
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}`,
    callouts: `body .callout .callout-title {
  gap: 6px;
}

body .callout[data-callout="abstract"] {
  background-color: color(srgb 0.32549 0.87451 0.866667 / 0.101961);
}

body .callout[data-callout="bug"] {
  background-color: color(srgb 0.984314 0.27451 0.298039 / 0.101961);
}

body .callout[data-callout="danger"] {
  background-color: color(srgb 0.984314 0.27451 0.298039 / 0.101961);
}

body .callout[data-callout="example"] {
  background-color: color(srgb 0.658824 0.509804 1 / 0.101961);
}

body .callout[data-callout="failure"] {
  background-color: color(srgb 0.984314 0.27451 0.298039 / 0.101961);
}

body .callout[data-callout="info"] {
  background-color: color(srgb 0.00784314 0.478431 1 / 0.101961);
}

body .callout[data-callout="note"] {
  background-color: color(srgb 0.00784314 0.478431 1 / 0.101961);
}

body .callout[data-callout="question"] {
  background-color: color(srgb 0.913726 0.592157 0.247059 / 0.101961);
}

body .callout[data-callout="quote"] {
  background-color: color(srgb 0.619608 0.619608 0.619608 / 0.101961);
}

body .callout[data-callout="success"] {
  background-color: color(srgb 0.266667 0.811765 0.431373 / 0.101961);
}

body .callout[data-callout="tip"] {
  background-color: color(srgb 0.32549 0.87451 0.866667 / 0.101961);
}

body .callout[data-callout="todo"] {
  background-color: color(srgb 0.00784314 0.478431 1 / 0.101961);
}

body .callout[data-callout="warning"] {
  background-color: color(srgb 0.913726 0.592157 0.247059 / 0.101961);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(234, 218, 217);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(33, 33, 33);
}

body .search > .search-container > .search-space > * {
  color: rgb(234, 218, 217);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(234, 218, 217) none 0px;
  text-decoration: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(234, 218, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(234, 218, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(25, 23, 23);
  color: rgb(234, 218, 217);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(25, 23, 23);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(25, 23, 23);
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
  color: rgb(234, 218, 217);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(25, 23, 23);
  color: rgb(234, 218, 217);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(254, 117, 14);
}

body h1 {
  color: rgb(188, 1, 4);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

body h2 {
  color: rgb(234, 79, 13);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

body h2.page-title, h2.page-title a {
  color: rgb(234, 218, 217);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

body h3 {
  color: rgb(254, 117, 14);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

body h4 {
  color: rgb(254, 163, 15);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

body h5 {
  color: rgb(192, 201, 10);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

body h6 {
  color: rgb(39, 202, 199);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

body hr {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
}`,
    scrollbars: `body .callout {
  padding-left: 20px;
}

body ::-webkit-scrollbar {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

body ::-webkit-scrollbar-corner {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

body ::-webkit-scrollbar-track {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(234, 218, 217);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(234, 218, 217);
}`,
    footer: `body footer {
  background-color: rgb(25, 23, 23);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(234, 218, 217);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
  color: rgb(234, 218, 217);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

body li.section-li > .section .meta {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(98, 94, 94);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
  color: rgb(234, 218, 217);
}

body .metadata {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

body .metadata-properties {
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

body .navigation-progress {
  background-color: rgb(25, 23, 23);
}

body .page-header h2.page-title {
  color: rgb(234, 218, 217);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(234, 218, 217);
  text-decoration: underline dotted rgb(234, 218, 217);
}

body details {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

body input[type=text] {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body progress {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

body sub {
  color: rgb(234, 218, 217);
}

body summary {
  color: rgb(234, 218, 217);
}

body sup {
  color: rgb(234, 218, 217);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #534f4e;
  --background-primary: #dbc5af;
  --background-primary-alt: #e7cfb8;
  --background-secondary: #d0baa6;
  --background-secondary-alt: #b9a693;
  --bases-cards-background: #dbc5af;
  --bases-cards-cover-background: #e7cfb8;
  --bases-cards-shadow: 0 0 0 1px #534f4e;
  --bases-embed-border-color: #534f4e;
  --bases-group-heading-property-color: #534f4e;
  --bases-table-border-color: #534f4e;
  --bases-table-cell-background-active: #dbc5af;
  --bases-table-cell-background-disabled: #e7cfb8;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ed5b0f;
  --bases-table-group-background: #e7cfb8;
  --bases-table-header-background: #dbc5af;
  --bases-table-header-color: #534f4e;
  --bases-table-summary-background: #dbc5af;
  --blockquote-border-color: #ed5b0f;
  --blur-background: color-mix(in srgb, #dbc5af 65%, transparent) linear-gradient(#dbc5af, color-mix(in srgb, #dbc5af 65%, transparent));
  --bodyFont: var(--font-interface);
  --bright-orange-v: #fe8019;
  --bright-red: #fb4934;
  --bright-yellow-v: #fabd2f;
  --button-text-color: white;
  --callout-bg-darken-pct: 5%;
  --callout-blend-mode: normal;
  --callout-padding: 12px 12px 12px 20px;
  --canvas-background: #dbc5af;
  --canvas-card-label-color: #534f4e;
  --caret-color: #1e1e1e;
  --checkbox-border-color: #534f4e;
  --checkbox-border-color-hover: #534f4e;
  --checkbox-color: #ed5b0f;
  --checkbox-marker-color: #dbc5af;
  --checklist-done-color: #534f4e;
  --code-background: #b9a693;
  --code-block: #161414;
  --code-border-color: #534f4e;
  --code-comment: #534f4e;
  --code-light-gray: #cccccc;
  --code-normal: #161414;
  --code-orange: #b46629;
  --code-punctuation: #534f4e;
  --codeFont: var(--font-interface);
  --collapse-icon-color: #534f4e;
  --collapse-icon-color-collapsed: #fe750e;
  --dark: var(--text-normal);
  --dark0: #282828;
  --dark0-hard: #1d2021;
  --dark0-soft: #32302f;
  --dark1: #3c3836;
  --dark2: #504945;
  --dark3: #665c54;
  --dark4: #7c6f64;
  --darkgray: var(--text-normal);
  --default-codeblock: #b9a693;
  --default-font: system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter;
  --divider-color: #534f4e;
  --divider-color-hover: #ed5b0f;
  --dropdown-background: #d0baa6;
  --dropdown-background-hover: #e7cfb8;
  --editor-font: system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter;
  --embed-block-shadow-hover: 0 0 0 1px #534f4e, inset 0 0 0 1px #534f4e;
  --embed-border-left: none;
  --embed-border-start: 2px solid #ed5b0f;
  --faded-orange: #af3a03;
  --faded-red: #9d0006;
  --faded-yellow: #b57614;
  --file-header-background: #dbc5af;
  --file-header-background-focused: #dbc5af;
  --file-header-font: '??', '??', -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #d0baa6;
  --flair-color: #1e1e1e;
  --font-interface: '??', '??', -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: #534f4e;
  --footnote-id-color: #534f4e;
  --footnote-id-color-no-occurrences: #534f4e;
  --graph-node: #534f4e;
  --graph-node-focused: #fe750e;
  --graph-node-unresolved: #534f4e;
  --graph-text: #1e1e1e;
  --graph-view-line-color: #a89984;
  --gray: #928374;
  --h1-link-hover-color: color-mix(in srgb, #ff6666 20%, #bc0104);
  --h1-link-ul-color: color-mix(in srgb, #bc0104 33%, transparent);
  --h1-size: 2.2em;
  --h2-link-hover-color: color-mix(in srgb, #ff9090 20%, #ea4f0d);
  --h2-link-ul-color: color-mix(in srgb, #ea4f0d 33%, transparent);
  --h2-size: 2.0em;
  --h3-link-hover-color: color-mix(in srgb, #ffaaaa 20%, #fe750e);
  --h3-link-ul-color: color-mix(in srgb, #fe750e 33%, transparent);
  --h3-size: 1.85em;
  --h4-link-hover-color: color-mix(in srgb, #ffd2d2 20%, #fea30f);
  --h4-link-ul-color: color-mix(in srgb, #fea30f 33%, transparent);
  --h4-size: 1.6em;
  --h5-link-hover-color: color-mix(in srgb, #ffffff 17%, #c0c90a);
  --h5-link-ul-color: color-mix(in srgb, #c0c90a 33%, transparent);
  --h5-size: 1.47em;
  --h6-link-hover-color: color-mix(in srgb, #ffffff 25%, #27cac7);
  --h6-link-ul-color: color-mix(in srgb, #27cac7 33%, transparent);
  --h6-size: 1.35em;
  --headerFont: var(--font-interface);
  --heading-formatting: #534f4e;
  --heading-spacing: 0.625rem;
  --highlight: var(--text-highlight-bg);
  --hr-color: #534f4e;
  --hx-link-ul-transparency-pct: 33%;
  --icon-color: #534f4e;
  --icon-color-active: #fe750e;
  --icon-color-focused: #1e1e1e;
  --icon-color-hover: #534f4e;
  --img-border-radius: 2px;
  --inline-code: #161414;
  --inline-title-size: 2.2em;
  --input-date-separator: #534f4e;
  --input-placeholder-color: #534f4e;
  --interactive-accent: #ed5b0f;
  --interactive-accent-rgb: #fe750e;
  --interactive-before: #a79584;
  --interactive-hover: #e7cfb8;
  --interactive-normal: #d0baa6;
  --light: var(--background-primary);
  --light0: #fbf1c7;
  --light0-hard: #f9f5d7;
  --light0-soft: #f2e5bc;
  --light1: #ebdbb2;
  --light2: #d5c4a1;
  --light3: #bdae93;
  --light4: #a89984;
  --lightgray: var(--background-secondary);
  --link-color: #fe750e;
  --link-color-hover: #fe9109;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #fe750e;
  --link-external-color-hover: #fe9109;
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: #fe750e;
  --link-unresolved-decoration: none;
  --link-unresolved-decoration-hover: none;
  --list-indent: 1em;
  --list-marker-color: #534f4e;
  --list-marker-color-collapsed: #fe750e;
  --list-marker-color-hover: #534f4e;
  --max-embed-height: 1000px;
  --menu-background: #d0baa6;
  --metadata-border-color: #534f4e;
  --metadata-divider-color: #534f4e;
  --metadata-input-font: '??', '??', -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #1e1e1e;
  --metadata-label-font: '??', '??', -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #534f4e;
  --metadata-label-text-color-hover: #534f4e;
  --modal-background: #dbc5af;
  --nav-collapse-icon-color: #534f4e;
  --nav-collapse-icon-color-collapsed: #534f4e;
  --nav-heading-color: #1e1e1e;
  --nav-heading-color-collapsed: #534f4e;
  --nav-heading-color-collapsed-hover: #534f4e;
  --nav-heading-color-hover: #1e1e1e;
  --nav-item-color: #534f4e;
  --nav-item-color-active: #1e1e1e;
  --nav-item-color-highlighted: #fe750e;
  --nav-item-color-hover: #1e1e1e;
  --nav-item-color-selected: #1e1e1e;
  --nav-tag-color: #534f4e;
  --nav-tag-color-active: #534f4e;
  --nav-tag-color-hover: #534f4e;
  --neutral-orange: #d65d0e;
  --neutral-red: #cc241d;
  --neutral-yellow: #d79921;
  --obsidian-codeblock: #1a1a1a;
  --p-spacing: 0.25rem;
  --pdf-background: #dbc5af;
  --pdf-page-background: #dbc5af;
  --pdf-sidebar-background: #dbc5af;
  --pill-border-color: #534f4e;
  --pill-color: #534f4e;
  --pill-color-hover: #1e1e1e;
  --pill-color-remove: #534f4e;
  --pill-color-remove-hover: #fe750e;
  --platinum: #cccccc;
  --pre-code: #b9a693;
  --prompt-background: #dbc5af;
  --r-bg-highlight: color-mix(in srgb, #fe9109 50%, transparent);
  --r-bg-selection: color-mix(in srgb, #d5520e 25%, transparent);
  --r-bright-orange: #fe750e;
  --r-bright-yellow: #fea30f;
  --r-dark-orange: #d5520e;
  --r-dark-red: #bc0104;
  --r-dark0: #212121;
  --r-dark0-accent: #1e1e1e;
  --r-dark1: #191717;
  --r-dark2: #161414;
  --r-deep-orange: #ed5b0f;
  --r-gray: #9d8f82;
  --r-gray2: #a89c90;
  --r-gray3: #b3ab9e;
  --r-gunmetal: #534f4e;
  --r-light0: #e7cfb8;
  --r-light1: #dbc5af;
  --r-light2: #d0baa6;
  --r-light2-soft: #c4b09c;
  --r-light3: #b9a693;
  --r-light4: #a79584;
  --r-lightn1: #f2e5d8;
  --r-meteor: #72504b;
  --r-mist-energy-blue: #27cac7;
  --r-orange: #ea4f0d;
  --r-pdf-highlight: #fe750e;
  --r-red-orange: #c52d0a;
  --r-scorpion: #625e5e;
  --r-standard-text: #eadad9;
  --r-yellow-green: #c0c90a;
  --r-yellow-orange: #fe9109;
  --raised-background: color-mix(in srgb, #dbc5af 65%, transparent) linear-gradient(#dbc5af, color-mix(in srgb, #dbc5af 65%, transparent));
  --ribbon-background: #d0baa6;
  --ribbon-background-collapsed: #dbc5af;
  --search-clear-button-color: #534f4e;
  --search-icon-color: #534f4e;
  --search-result-background: #dbc5af;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #1e1e1e;
  --setting-items-background: #e7cfb8;
  --setting-items-border-color: #534f4e;
  --size-code: 14.4px;
  --size-normal: 16px;
  --slider-track-background: #534f4e;
  --status-bar-background: #c4b09c;
  --status-bar-border-color: #534f4e;
  --status-bar-text-color: #534f4e;
  --suggestion-background: #dbc5af;
  --tab-background-active: #dbc5af;
  --tab-container-background: #d0baa6;
  --tab-outline-color: #534f4e;
  --tab-switcher-background: #d0baa6;
  --tab-switcher-menubar-background: linear-gradient(to top, #d0baa6, transparent);
  --tab-text-color: #534f4e;
  --tab-text-color-active: #534f4e;
  --tab-text-color-focused: #534f4e;
  --tab-text-color-focused-active: #534f4e;
  --tab-text-color-focused-active-current: #1e1e1e;
  --tab-text-color-focused-highlighted: #fe750e;
  --table-add-button-border-color: #534f4e;
  --table-border-color: #534f4e;
  --table-drag-handle-background-active: #ed5b0f;
  --table-drag-handle-color: #534f4e;
  --table-header-border-color: #534f4e;
  --table-header-color: #1e1e1e;
  --table-selection-border-color: #ed5b0f;
  --tag-color: #fe750e;
  --tag-color-hover: #fe750e;
  --tertiary: var(--text-accent-hover);
  --test-green: #00ff00;
  --text-a: #fe750e;
  --text-a-hover: #fe9109;
  --text-accent: #fe750e;
  --text-accent-hover: #fe9109;
  --text-card: #161414;
  --text-faint: #534f4e;
  --text-highlight-bg: color-mix(in srgb, #fe9109 50%, transparent);
  --text-link: #d5520e;
  --text-link-hover: #ed5b0f;
  --text-mark: color-mix(in srgb, #fe9109 50%, transparent);
  --text-muted: #534f4e;
  --text-normal: #1e1e1e;
  --text-platinum: #cccccc;
  --text-selection: color-mix(in srgb, #d5520e 25%, transparent);
  --text-tag: #ed5b0f;
  --text-title-h1: #bc0104;
  --text-title-h2: #ea4f0d;
  --text-title-h3: #fe750e;
  --text-title-h4: #fea30f;
  --text-title-h5: #c0c90a;
  --text-title-h6: #27cac7;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-interface);
  --titlebar-background: #d0baa6;
  --titlebar-background-focused: #b9a693;
  --titlebar-border-color: #534f4e;
  --titlebar-text-color: #534f4e;
  --titlebar-text-color-focused: #1e1e1e;
  --vault-profile-color: #1e1e1e;
  --vault-profile-color-hover: #1e1e1e;
  --vim-cursor: #fe750e;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(208, 186, 166);
  color: rgb(30, 30, 30);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(219, 197, 175);
  color: rgb(30, 30, 30);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(208, 186, 166);
  color: rgb(30, 30, 30);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(83, 79, 78);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(208, 186, 166);
  border-left-color: rgb(83, 79, 78);
  color: rgb(30, 30, 30);
}

body div#quartz-root {
  background-color: rgb(219, 197, 175);
  color: rgb(30, 30, 30);
}`,
    typography: `body .page article p > b, b {
  color: rgb(30, 30, 30);
  font-weight: 700;
  outline: rgb(30, 30, 30) none 0px;
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body .page article p > em, em {
  color: rgb(30, 30, 30);
  outline: rgb(30, 30, 30) none 0px;
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body .page article p > i, i {
  color: rgb(30, 30, 30);
  outline: rgb(30, 30, 30) none 0px;
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body .page article p > strong, strong {
  color: rgb(30, 30, 30);
  font-weight: 700;
  outline: rgb(30, 30, 30) none 0px;
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body .text-highlight {
  background-color: color(srgb 0.996078 0.568627 0.0352941 / 0.5);
  color: rgb(30, 30, 30);
  outline: rgb(30, 30, 30) none 0px;
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body del {
  color: rgb(30, 30, 30);
  outline: rgb(30, 30, 30) none 0px;
  text-decoration: line-through rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body p {
  color: rgb(83, 79, 78);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(83, 79, 78) none 0px;
  text-decoration: rgb(83, 79, 78);
  text-decoration-color: rgb(83, 79, 78);
}`,
    links: `body a.external, footer a {
  color: rgb(213, 82, 14);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(213, 82, 14) none 0px;
  text-decoration: rgb(213, 82, 14);
  text-decoration-color: rgb(213, 82, 14);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(254, 117, 14);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(254, 117, 14) none 0px;
  text-decoration: rgb(254, 117, 14);
  text-decoration-color: rgb(254, 117, 14);
}

body a.internal.broken {
  color: rgb(254, 117, 14);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(254, 117, 14) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(30, 30, 30);
}

body dt {
  color: rgb(30, 30, 30);
}

body ol > li {
  color: rgb(30, 30, 30);
}

body ol.overflow {
  background-color: rgb(219, 197, 175);
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

body ul > li {
  color: rgb(30, 30, 30);
}

body ul.overflow {
  background-color: rgb(219, 197, 175);
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(83, 79, 78);
  text-decoration: rgb(83, 79, 78);
}

body blockquote {
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

body table {
  color: rgb(30, 30, 30);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  margin-top: 0px;
  width: 195.062px;
}

body td {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(30, 30, 30);
}

body th {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(30, 30, 30);
}

body thead {
  border-bottom-color: rgb(83, 79, 78);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

body tr {
  border-bottom-color: rgb(83, 79, 78);
}`,
    code: `body code {
  background-color: rgb(185, 166, 147);
  border-bottom-color: rgb(22, 20, 20);
  border-left-color: rgb(22, 20, 20);
  border-right-color: rgb(22, 20, 20);
  border-top-color: rgb(22, 20, 20);
  color: rgb(22, 20, 20);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(185, 166, 147);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(185, 166, 147);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(30, 30, 30);
}

body pre > code, pre:has(> code) {
  background-color: rgb(185, 166, 147);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
}

body pre:has(> code) {
  background-color: rgb(185, 166, 147);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
}`,
    images: `body audio {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

body figcaption {
  color: rgb(30, 30, 30);
}

body figure {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

body img {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

body video {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}`,
    embeds: `body .file-embed {
  background-color: rgb(231, 207, 184);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
}

body .footnotes {
  border-top-color: rgb(30, 30, 30);
  color: rgb(30, 30, 30);
}

body .transclude {
  border-bottom-color: rgb(50, 48, 47);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(50, 48, 47);
  border-right-color: rgb(50, 48, 47);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(50, 48, 47);
  border-top-style: solid;
  border-top-width: 2px;
  padding-bottom: 1px;
  padding-left: 5px;
}

body .transclude-inner {
  border-bottom-color: rgb(50, 48, 47);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(50, 48, 47);
  border-right-color: rgb(50, 48, 47);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(50, 48, 47);
  border-top-style: solid;
  border-top-width: 2px;
  padding-bottom: 1px;
  padding-left: 5px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(83, 79, 78);
  text-decoration: line-through rgb(83, 79, 78);
  text-decoration-color: rgb(83, 79, 78);
}

body input[type=checkbox] {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
}

body li.task-list-item[data-task='!'] {
  color: rgb(30, 30, 30);
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body li.task-list-item[data-task='*'] {
  color: rgb(30, 30, 30);
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body li.task-list-item[data-task='-'] {
  color: rgb(30, 30, 30);
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body li.task-list-item[data-task='/'] {
  color: rgb(30, 30, 30);
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body li.task-list-item[data-task='>'] {
  color: rgb(30, 30, 30);
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body li.task-list-item[data-task='?'] {
  color: rgb(30, 30, 30);
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body li.task-list-item[data-task='I'] {
  color: rgb(30, 30, 30);
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body li.task-list-item[data-task='S'] {
  color: rgb(30, 30, 30);
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body li.task-list-item[data-task='b'] {
  color: rgb(30, 30, 30);
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body li.task-list-item[data-task='c'] {
  color: rgb(30, 30, 30);
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body li.task-list-item[data-task='d'] {
  color: rgb(30, 30, 30);
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body li.task-list-item[data-task='f'] {
  color: rgb(30, 30, 30);
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body li.task-list-item[data-task='i'] {
  color: rgb(30, 30, 30);
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body li.task-list-item[data-task='k'] {
  color: rgb(30, 30, 30);
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body li.task-list-item[data-task='l'] {
  color: rgb(30, 30, 30);
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body li.task-list-item[data-task='p'] {
  color: rgb(30, 30, 30);
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body li.task-list-item[data-task='u'] {
  color: rgb(30, 30, 30);
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body li.task-list-item[data-task='w'] {
  color: rgb(30, 30, 30);
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}`,
    callouts: `body .callout .callout-title {
  gap: 6px;
}

body .callout[data-callout="abstract"] {
  background-color: color(srgb 0 0.494013 0.486254 / 0.146863);
}

body .callout[data-callout="bug"] {
  background-color: color(srgb 0.602644 0.126736 0.183638 / 0.146863);
}

body .callout[data-callout="danger"] {
  background-color: color(srgb 0.602644 0.126736 0.183638 / 0.146863);
}

body .callout[data-callout="example"] {
  background-color: color(srgb 0.310375 0.212089 0.615576 / 0.146863);
}

body .callout[data-callout="failure"] {
  background-color: color(srgb 0.602644 0.126736 0.183638 / 0.146863);
}

body .callout[data-callout="info"] {
  background-color: color(srgb 0.0206916 0.281924 0.571607 / 0.146863);
}

body .callout[data-callout="note"] {
  background-color: color(srgb 0.0206916 0.281924 0.571607 / 0.146863);
}

body .callout[data-callout="question"] {
  background-color: color(srgb 0.610403 0.302615 0 / 0.146863);
}

body .callout[data-callout="quote"] {
  background-color: color(srgb 0.40866 0.40866 0.40866 / 0.146863);
}

body .callout[data-callout="success"] {
  background-color: color(srgb 0.0206916 0.478494 0.201743 / 0.146863);
}

body .callout[data-callout="tip"] {
  background-color: color(srgb 0 0.494013 0.486254 / 0.146863);
}

body .callout[data-callout="todo"] {
  background-color: color(srgb 0.0206916 0.281924 0.571607 / 0.146863);
}

body .callout[data-callout="warning"] {
  background-color: color(srgb 0.610403 0.302615 0 / 0.146863);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(30, 30, 30);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(219, 197, 175);
}

body .search > .search-container > .search-space > * {
  color: rgb(30, 30, 30);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(30, 30, 30) none 0px;
  text-decoration: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(30, 30, 30);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(30, 30, 30);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(208, 186, 166);
  color: rgb(30, 30, 30);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(208, 186, 166);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(208, 186, 166);
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
  color: rgb(30, 30, 30);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(208, 186, 166);
  color: rgb(30, 30, 30);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(254, 117, 14);
}

body h1 {
  color: rgb(188, 1, 4);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

body h2 {
  color: rgb(234, 79, 13);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

body h2.page-title, h2.page-title a {
  color: rgb(30, 30, 30);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

body h3 {
  color: rgb(254, 117, 14);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

body h4 {
  color: rgb(254, 163, 15);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

body h5 {
  color: rgb(192, 201, 10);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

body h6 {
  color: rgb(39, 202, 199);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

body hr {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
}`,
    scrollbars: `body .callout {
  padding-left: 20px;
}

body ::-webkit-scrollbar {
  background: rgb(219, 197, 175) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 197, 175);
}

body ::-webkit-scrollbar-corner {
  background: rgb(219, 197, 175) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 197, 175);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(219, 197, 175) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 197, 175);
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(219, 197, 175) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 197, 175);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(219, 197, 175) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 197, 175);
}

body ::-webkit-scrollbar-track {
  background: rgb(219, 197, 175) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 197, 175);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(83, 79, 78);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(83, 79, 78);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(83, 79, 78);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(83, 79, 78);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(83, 79, 78);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(83, 79, 78);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(30, 30, 30);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(30, 30, 30);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(83, 79, 78);
}`,
    footer: `body footer {
  background-color: rgb(196, 176, 156);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(83, 79, 78);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(83, 79, 78);
  text-decoration: rgb(83, 79, 78);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(30, 30, 30);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
  color: rgb(30, 30, 30);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(83, 79, 78);
  text-decoration: rgb(83, 79, 78);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(83, 79, 78);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

body li.section-li > .section .meta {
  color: rgb(83, 79, 78);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(83, 79, 78);
  text-decoration: rgb(83, 79, 78);
}

body ul.section-ul {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(83, 79, 78);
}

body .darkmode svg {
  color: rgb(83, 79, 78);
  stroke: rgb(83, 79, 78);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(83, 79, 78);
}

body .breadcrumb-element p {
  color: rgb(83, 79, 78);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
  color: rgb(30, 30, 30);
}

body .metadata {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(83, 79, 78);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

body .metadata-properties {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(83, 79, 78);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

body .navigation-progress {
  background-color: rgb(196, 176, 156);
}

body .page-header h2.page-title {
  color: rgb(30, 30, 30);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(30, 30, 30);
  text-decoration: underline dotted rgb(30, 30, 30);
}

body details {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

body input[type=text] {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(83, 79, 78);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(185, 166, 147);
  border-bottom-color: rgb(22, 20, 20);
  border-left-color: rgb(22, 20, 20);
  border-right-color: rgb(22, 20, 20);
  border-top-color: rgb(22, 20, 20);
  color: rgb(22, 20, 20);
}

body progress {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

body sub {
  color: rgb(30, 30, 30);
}

body summary {
  color: rgb(30, 30, 30);
}

body sup {
  color: rgb(30, 30, 30);
}`,
  },
};
