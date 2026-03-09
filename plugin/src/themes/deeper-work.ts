import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "deeper-work",
    modes: ["dark"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root {
  --active-line-bg: rgba(153, 153, 153, 0.1);
  --aqua: #56b6c2;
  --background-modifier-border: #21262d;
  --background-modifier-cover: rgba(0, 0, 0, 0.1);
  --background-modifier-error: #b62324;
  --background-modifier-error-hover: #b62324;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: #161b22;
  --background-modifier-form-field-highlighted: #161b22;
  --background-modifier-form-field-hover: #161b22;
  --background-modifier-success: #2ea043;
  --background-primary: #0d1117;
  --background-primary-alt: #161b22;
  --background-secondary: #161b22;
  --background-secondary-alt: #21262d;
  --bases-cards-background: #0d1117;
  --bases-cards-cover-background: #161b22;
  --bases-cards-shadow: 0 0 0 1px #21262d;
  --bases-embed-border-color: #21262d;
  --bases-group-heading-property-color: #6e7681;
  --bases-table-border-color: #21262d;
  --bases-table-cell-background-active: #0d1117;
  --bases-table-cell-background-disabled: #161b22;
  --bases-table-cell-shadow-focus: 0 0 0 2px #2ea043;
  --bases-table-group-background: #161b22;
  --bases-table-header-background: #0d1117;
  --bases-table-header-color: #6e7681;
  --bases-table-summary-background: #0d1117;
  --blockquote-border-color: #2ea043;
  --blue: #61afef;
  --blur-background: color-mix(in srgb, #30363d 65%, transparent) linear-gradient(#30363d, color-mix(in srgb, #30363d 65%, transparent));
  --callout-blend-mode: screen;
  --canvas-background: #0d1117;
  --canvas-card-label-color: #6e7681;
  --caret-color: #c9d1d9;
  --checkbox-border-color: #6e7681;
  --checkbox-border-color-hover: #6e7681;
  --checkbox-color: #2ea043;
  --checkbox-color-hover: #3fb950;
  --checkbox-marker-color: #0d1117;
  --checklist-done-color: #6e7681;
  --code-background: #161b22;
  --code-border-color: #21262d;
  --code-comment: #6e7681;
  --code-normal: #c9d1d9;
  --code-punctuation: #6e7681;
  --code-size: 1em;
  --collapse-icon-color: #6e7681;
  --collapse-icon-color-collapsed: #388bfd;
  --color-black: #010409;
  --color-blue-0: #cae8ff;
  --color-blue-1: #a5d6ff;
  --color-blue-2: #79c0ff;
  --color-blue-3: #58a6ff;
  --color-blue-4: #388bfd;
  --color-blue-5: #1f6feb;
  --color-blue-6: #1158c7;
  --color-blue-7: #0d419d;
  --color-blue-8: #0c2d6b;
  --color-blue-9: #051d4d;
  --color-border: rgba(255, 255, 255, 0.2);
  --color-gray-0: #e1e7ee;
  --color-gray-1: #c9d1d9;
  --color-gray-2: #b1bac4;
  --color-gray-3: #8b949e;
  --color-gray-4: #6e7681;
  --color-gray-5: #484f58;
  --color-gray-6: #30363d;
  --color-gray-7: #21262d;
  --color-gray-8: #161b22;
  --color-gray-9: #0d1117;
  --color-green-0: #aff5b4;
  --color-green-1: #7ee787;
  --color-green-2: #56d364;
  --color-green-3: #3fb950;
  --color-green-4: #2ea043;
  --color-green-5: #238636;
  --color-green-6: #196c2e;
  --color-green-7: #0f5323;
  --color-green-8: #033a16;
  --color-green-9: #04260f;
  --color-orange-0: #ffdfb6;
  --color-orange-1: #ffc680;
  --color-orange-2: #ffa657;
  --color-orange-3: #f0883e;
  --color-orange-4: #db6d28;
  --color-orange-5: #bd561d;
  --color-orange-6: #9b4215;
  --color-orange-7: #762d0a;
  --color-orange-8: #5a1e02;
  --color-orange-9: #3d1300;
  --color-pink-0: #ffdaec;
  --color-pink-1: #ffbedd;
  --color-pink-2: #ff9bce;
  --color-pink-3: #f778ba;
  --color-pink-4: #FC6DAB;
  --color-pink-5: #bf4b8a;
  --color-pink-6: #9e3670;
  --color-pink-7: #7d2457;
  --color-pink-8: #5e103e;
  --color-pink-9: #42062a;
  --color-purple-0: #eddeff;
  --color-purple-1: #e2c5ff;
  --color-purple-2: #d2a8ff;
  --color-purple-3: #bc8cff;
  --color-purple-4: #a371f7;
  --color-purple-5: #8957e5;
  --color-purple-6: #6e40c9;
  --color-purple-7: #553098;
  --color-purple-8: #3c1e70;
  --color-purple-9: #271052;
  --color-red-0: #ffdcd7;
  --color-red-1: #ffc1ba;
  --color-red-2: #ffa198;
  --color-red-3: #ff7b72;
  --color-red-4: #f85149;
  --color-red-5: #da3633;
  --color-red-6: #b62324;
  --color-red-7: #8e1519;
  --color-red-8: #67060c;
  --color-red-9: #490202;
  --color-topic-tag-bg: rgba(56, 139, 253, 0.1);
  --color-transparent: rgba(255, 255, 255, 0);
  --color-white: #f7f9fc;
  --color-yellow-0: #f8e3a1;
  --color-yellow-1: #f2cc60;
  --color-yellow-2: #e3b341;
  --color-yellow-3: #d29922;
  --color-yellow-4: #bb8009;
  --color-yellow-5: #9e6a03;
  --color-yellow-6: #845306;
  --color-yellow-7: #693e00;
  --color-yellow-8: #4b2900;
  --color-yellow-9: #341a00;
  --cursor-bg: #3fb950;
  --divider-color: #21262d;
  --divider-color-hover: #2ea043;
  --dropdown-background: #30363d;
  --dropdown-background-hover: #484f58;
  --embed-block-shadow-hover: 0 0 0 1px #21262d, inset 0 0 0 1px #21262d;
  --embed-border-start: 2px solid #2ea043;
  --file-header-background: #0d1117;
  --file-header-background-focused: #0d1117;
  --flair-background: #30363d;
  --flair-color: #c9d1d9;
  --footnote-divider-color: #21262d;
  --footnote-id-color: #6e7681;
  --footnote-id-color-no-occurrences: #6e7681;
  --graph-node: #6e7681;
  --graph-node-focused: #388bfd;
  --graph-node-unresolved: #6e7681;
  --graph-text: #c9d1d9;
  --gray-1: #5c6370;
  --gray-2: #abb2bf;
  --green: #98c379;
  --h1-size: 1.55rem;
  --h2-size: 1.4rem;
  --h3-size: 1.3rem;
  --h4-size: 1.2rem;
  --h5-size: 1.1rem;
  --h6-size: 1.1rem;
  --heading-formatting: #6e7681;
  --heading-spacing: 1.5rem;
  --highlight-mix-blend-mode: screen;
  --hr-color: #21262d;
  --icon-color: #6e7681;
  --icon-color-active: #388bfd;
  --icon-color-focused: #c9d1d9;
  --icon-color-hover: #6e7681;
  --inline-title-size: 1.55rem;
  --input-date-separator: #6e7681;
  --input-placeholder-color: #6e7681;
  --interactive-accent: #2ea043;
  --interactive-accent-hover: #3fb950;
  --interactive-accent-rgb: 46, 160, 67;
  --interactive-hover: #484f58;
  --interactive-normal: #30363d;
  --interactive-success: #238636;
  --link-color: #388bfd;
  --link-color-hover: #58a6ff;
  --link-external-color: #388bfd;
  --link-external-color-hover: #58a6ff;
  --link-unresolved-color: #388bfd;
  --list-marker-color: #6e7681;
  --list-marker-color-collapsed: #388bfd;
  --list-marker-color-hover: #6e7681;
  --menu-background: #161b22;
  --metadata-border-color: #21262d;
  --metadata-divider-color: #21262d;
  --metadata-input-text-color: #c9d1d9;
  --metadata-label-text-color: #6e7681;
  --metadata-label-text-color-hover: #6e7681;
  --modal-background: #0d1117;
  --nav-collapse-icon-color: #6e7681;
  --nav-collapse-icon-color-collapsed: #6e7681;
  --nav-heading-color: #c9d1d9;
  --nav-heading-color-collapsed: #6e7681;
  --nav-heading-color-collapsed-hover: #6e7681;
  --nav-heading-color-hover: #c9d1d9;
  --nav-item-color: #6e7681;
  --nav-item-color-active: #c9d1d9;
  --nav-item-color-highlighted: #388bfd;
  --nav-item-color-hover: #c9d1d9;
  --nav-item-color-selected: #c9d1d9;
  --nav-tag-color: #6e7681;
  --nav-tag-color-active: #6e7681;
  --nav-tag-color-hover: #6e7681;
  --orange: #d19a66;
  --panel-border-color: #18191e;
  --pdf-background: #0d1117;
  --pdf-page-background: #0d1117;
  --pdf-shadow: 0 0 0 1px #21262d;
  --pdf-sidebar-background: #0d1117;
  --pdf-thumbnail-shadow: 0 0 0 1px #21262d;
  --pill-border-color: #21262d;
  --pill-color: #6e7681;
  --pill-color-hover: #c9d1d9;
  --pill-color-remove: #6e7681;
  --pill-color-remove-hover: #388bfd;
  --prompt-background: #0d1117;
  --purple: #c678dd;
  --raised-background: color-mix(in srgb, #30363d 65%, transparent) linear-gradient(#30363d, color-mix(in srgb, #30363d 65%, transparent));
  --red: #e06c75;
  --ribbon-background: #161b22;
  --ribbon-background-collapsed: #0d1117;
  --scrollbar-active-thumb-bg: #388bfd;
  --scrollbar-bg: #0d1117;
  --scrollbar-thumb-bg: #30363d;
  --search-clear-button-color: #6e7681;
  --search-icon-color: #6e7681;
  --search-result-background: #0d1117;
  --setting-group-heading-color: #c9d1d9;
  --setting-items-background: #161b22;
  --setting-items-border-color: #21262d;
  --slider-track-background: #21262d;
  --status-bar-background: #161b22;
  --status-bar-border-color: #21262d;
  --status-bar-text-color: #6e7681;
  --suggestion-background: #0d1117;
  --tab-background-active: #0d1117;
  --tab-container-background: #161b22;
  --tab-outline-color: #21262d;
  --tab-switcher-background: #161b22;
  --tab-switcher-menubar-background: linear-gradient(to top, #161b22, transparent);
  --tab-text-color: #6e7681;
  --tab-text-color-active: #6e7681;
  --tab-text-color-focused: #6e7681;
  --tab-text-color-focused-active: #6e7681;
  --tab-text-color-focused-active-current: #c9d1d9;
  --tab-text-color-focused-highlighted: #388bfd;
  --table-add-button-border-color: #21262d;
  --table-border-color: #21262d;
  --table-drag-handle-background-active: #2ea043;
  --table-drag-handle-color: #6e7681;
  --table-drag-handle-color-active: #f7f9fc;
  --table-header-border-color: #21262d;
  --table-header-color: #c9d1d9;
  --table-selection-blend-mode: screen;
  --table-selection-border-color: #2ea043;
  --tag-color: #388bfd;
  --tag-color-hover: #388bfd;
  --text-accent: #388bfd;
  --text-accent-hover: #58a6ff;
  --text-accent-light: #58a6ff;
  --text-bright: #e1e7ee;
  --text-code: #c9d1d9;
  --text-error: #f85149;
  --text-error-hover: #da3633;
  --text-faint: #6e7681;
  --text-highlight-bg: rgba(0, 63, 179, 0.75);
  --text-highlight-bg-active: rgba(0, 123, 255, 0.15);
  --text-muted: #6e7681;
  --text-muted-rgb: 153, 153, 153;
  --text-normal: #c9d1d9;
  --text-on-accent: #f7f9fc;
  --text-selection: rgba(23, 48, 77, 0.99);
  --titlebar-background: #161b22;
  --titlebar-background-focused: #21262d;
  --titlebar-border-color: #21262d;
  --titlebar-text-color: #6e7681;
  --titlebar-text-color-focused: #c9d1d9;
  --vault-profile-color: #c9d1d9;
  --vault-profile-color-hover: #c9d1d9;
  --yellow: #e5c07b;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 27, 34);
  color: rgb(201, 209, 217);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(13, 17, 23);
  color: rgb(201, 209, 217);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 27, 34);
  color: rgb(201, 209, 217);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(33, 38, 45);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 27, 34);
  border-left-color: rgb(33, 38, 45);
  color: rgb(201, 209, 217);
}

body div#quartz-root {
  background-color: rgb(13, 17, 23);
  color: rgb(201, 209, 217);
}`,
    typography: `body .page article p > b, b {
  color: rgb(63, 185, 80);
  font-weight: 700;
  outline: rgb(63, 185, 80) none 0px;
  text-decoration: rgb(63, 185, 80);
  text-decoration-color: rgb(63, 185, 80);
}

body .page article p > em, em {
  color: rgb(63, 185, 80);
  outline: rgb(63, 185, 80) none 0px;
  text-decoration: rgb(63, 185, 80);
  text-decoration-color: rgb(63, 185, 80);
}

body .page article p > i, i {
  color: rgb(63, 185, 80);
  outline: rgb(63, 185, 80) none 0px;
  text-decoration: rgb(63, 185, 80);
  text-decoration-color: rgb(63, 185, 80);
}

body .page article p > strong, strong {
  color: rgb(63, 185, 80);
  font-weight: 700;
  outline: rgb(63, 185, 80) none 0px;
  text-decoration: rgb(63, 185, 80);
  text-decoration-color: rgb(63, 185, 80);
}

body .text-highlight {
  background-color: rgba(0, 63, 179, 0.75);
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body del {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration: line-through rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body p {
  color: rgb(110, 118, 129);
  outline: rgb(110, 118, 129) none 0px;
  text-decoration: rgb(110, 118, 129);
  text-decoration-color: rgb(110, 118, 129);
}`,
    links: `body a.external, footer a {
  color: rgb(56, 139, 253);
  outline: rgb(56, 139, 253) none 0px;
  text-decoration: underline rgb(56, 139, 253);
  text-decoration-color: rgb(56, 139, 253);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(56, 139, 253);
  outline: rgb(56, 139, 253) none 0px;
  text-decoration: rgb(56, 139, 253);
  text-decoration-color: rgb(56, 139, 253);
}

body a.internal.broken {
  color: rgb(56, 139, 253);
  outline: rgb(56, 139, 253) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(201, 209, 217);
}

body dt {
  color: rgb(201, 209, 217);
}

body ol > li {
  color: rgb(201, 209, 217);
}

body ol.overflow {
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body ul > li {
  color: rgb(201, 209, 217);
}

body ul.overflow {
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(110, 118, 129);
  text-decoration: rgb(110, 118, 129);
}

body blockquote {
  background-color: rgba(48, 54, 61, 0.35);
  font-style: italic;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body table {
  color: rgb(201, 209, 217);
  width: 244.172px;
}

body td {
  border-bottom-color: rgb(33, 38, 45);
  border-left-color: rgb(33, 38, 45);
  border-right-color: rgb(33, 38, 45);
  border-top-color: rgb(33, 38, 45);
  color: rgb(201, 209, 217);
}

body th {
  border-bottom-color: rgb(33, 38, 45);
  border-left-color: rgb(33, 38, 45);
  border-right-color: rgb(33, 38, 45);
  border-top-color: rgb(33, 38, 45);
  color: rgb(201, 209, 217);
}`,
    code: `body code {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
  font-family: "JetBrains Mono";
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(33, 38, 45);
  border-left-color: rgb(33, 38, 45);
  border-right-color: rgb(33, 38, 45);
  border-top-color: rgb(33, 38, 45);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(33, 38, 45);
  border-left-color: rgb(33, 38, 45);
  border-right-color: rgb(33, 38, 45);
  border-top-color: rgb(33, 38, 45);
  color: rgb(201, 209, 217);
}

body pre > code > [data-line] {
  border-left-color: rgb(229, 192, 123);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(229, 192, 123);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(229, 192, 123);
  border-left-color: rgb(229, 192, 123);
  border-right-color: rgb(229, 192, 123);
  border-top-color: rgb(229, 192, 123);
}

body pre > code, pre:has(> code) {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(33, 38, 45);
  border-left-color: rgb(33, 38, 45);
  border-right-color: rgb(33, 38, 45);
  border-top-color: rgb(33, 38, 45);
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(33, 38, 45);
  border-left-color: rgb(33, 38, 45);
  border-right-color: rgb(33, 38, 45);
  border-top-color: rgb(33, 38, 45);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body figcaption {
  color: rgb(201, 209, 217);
}

body figure {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body img {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body video {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}`,
    embeds: `body .file-embed {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(110, 118, 129);
  border-left-color: rgb(110, 118, 129);
  border-right-color: rgb(110, 118, 129);
  border-top-color: rgb(110, 118, 129);
}

body .footnotes {
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}

body .transclude {
  border-bottom-color: rgb(33, 38, 45);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(33, 38, 45);
  border-left-width: 5px;
  border-right-color: rgb(33, 38, 45);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(33, 38, 45);
  border-top-style: solid;
  border-top-width: 1px;
}

body .transclude-inner {
  border-bottom-color: rgb(33, 38, 45);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(33, 38, 45);
  border-left-width: 5px;
  border-right-color: rgb(33, 38, 45);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(33, 38, 45);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(110, 118, 129);
  text-decoration: line-through rgb(110, 118, 129);
  text-decoration-color: rgb(110, 118, 129);
}

body input[type=checkbox] {
  border-bottom-color: rgb(110, 118, 129);
  border-left-color: rgb(110, 118, 129);
  border-right-color: rgb(110, 118, 129);
  border-top-color: rgb(110, 118, 129);
}

body li.task-list-item[data-task='!'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='*'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='-'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='/'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='>'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='?'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='I'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='S'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='b'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='c'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='d'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='f'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='i'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='k'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='l'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='p'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='u'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body li.task-list-item[data-task='w'] {
  color: rgb(201, 209, 217);
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  padding-bottom: 9.6px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(33, 38, 45);
  border-left-color: rgb(33, 38, 45);
  border-right-color: rgb(33, 38, 45);
  border-top-color: rgb(33, 38, 45);
  color: rgb(201, 209, 217);
}

body .search > .search-container > .search-space {
  background-color: rgb(13, 17, 23);
}

body .search > .search-container > .search-space > * {
  color: rgb(201, 209, 217);
  outline: rgb(201, 209, 217) none 0px;
  text-decoration: rgb(201, 209, 217);
  text-decoration-color: rgb(201, 209, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(201, 209, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(201, 209, 217);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(201, 209, 217);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 27, 34);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(201, 209, 217);
}

body a.internal.tag-link::before {
  color: rgb(56, 139, 253);
}

body h1 {
  color: rgb(201, 209, 217);
}

body h2 {
  color: rgb(201, 209, 217);
}

body h2.page-title, h2.page-title a {
  color: rgb(201, 209, 217);
}

body h3 {
  color: rgb(201, 209, 217);
}

body h4 {
  color: rgb(201, 209, 217);
}

body h5 {
  color: rgb(201, 209, 217);
}

body h6 {
  color: rgb(201, 209, 217);
}

body hr {
  border-bottom-color: rgb(33, 38, 45);
  border-left-color: rgb(33, 38, 45);
  border-right-color: rgb(33, 38, 45);
}`,
    scrollbars: `body .callout {
  padding-right: 24px;
}

body ::-webkit-scrollbar {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-corner {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-track {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(110, 118, 129);
  text-decoration: rgb(110, 118, 129);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(110, 118, 129);
  text-decoration: rgb(110, 118, 129);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(110, 118, 129);
  text-decoration: rgb(110, 118, 129);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(110, 118, 129);
  border-left-color: rgb(110, 118, 129);
  border-right-color: rgb(110, 118, 129);
  border-top-color: rgb(110, 118, 129);
  color: rgb(110, 118, 129);
}`,
    footer: `body footer {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(13, 17, 23);
  border-bottom-width: 1px;
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-right-width: 1px;
  border-top-color: rgb(13, 17, 23);
  color: rgb(110, 118, 129);
}

body footer ul li a {
  color: rgb(110, 118, 129);
  text-decoration: rgb(110, 118, 129);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(201, 209, 217);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(110, 118, 129);
  text-decoration: rgb(110, 118, 129);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(110, 118, 129);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body li.section-li > .section .meta {
  color: rgb(110, 118, 129);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(110, 118, 129);
  text-decoration: rgb(110, 118, 129);
}

body ul.section-ul {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(110, 118, 129);
  border-left-color: rgb(110, 118, 129);
  border-right-color: rgb(110, 118, 129);
  border-top-color: rgb(110, 118, 129);
  color: rgb(110, 118, 129);
}

body .darkmode svg {
  color: rgb(110, 118, 129);
  stroke: rgb(110, 118, 129);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(110, 118, 129);
  border-left-color: rgb(110, 118, 129);
  border-right-color: rgb(110, 118, 129);
  border-top-color: rgb(110, 118, 129);
  color: rgb(110, 118, 129);
}

body .breadcrumb-element p {
  color: rgb(110, 118, 129);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
}

body .metadata {
  border-bottom-color: rgb(33, 38, 45);
  border-left-color: rgb(33, 38, 45);
  border-right-color: rgb(33, 38, 45);
  border-top-color: rgb(33, 38, 45);
  color: rgb(110, 118, 129);
}

body .metadata-properties {
  border-bottom-color: rgb(110, 118, 129);
  border-left-color: rgb(110, 118, 129);
  border-right-color: rgb(110, 118, 129);
  border-top-color: rgb(110, 118, 129);
  color: rgb(110, 118, 129);
}

body .navigation-progress {
  background-color: rgb(22, 27, 34);
}

body .page-header h2.page-title {
  color: rgb(201, 209, 217);
}

body abbr {
  color: rgb(201, 209, 217);
  text-decoration: underline dotted rgb(201, 209, 217);
}

body details {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body input[type=text] {
  border-bottom-color: rgb(110, 118, 129);
  border-left-color: rgb(110, 118, 129);
  border-right-color: rgb(110, 118, 129);
  border-top-color: rgb(110, 118, 129);
  color: rgb(110, 118, 129);
}

body kbd {
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
  color: rgb(201, 209, 217);
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

body progress {
  border-bottom-color: rgb(201, 209, 217);
  border-left-color: rgb(201, 209, 217);
  border-right-color: rgb(201, 209, 217);
  border-top-color: rgb(201, 209, 217);
}

body sub {
  color: rgb(201, 209, 217);
}

body summary {
  color: rgb(201, 209, 217);
}

body sup {
  color: rgb(201, 209, 217);
}`,
  },
  light: {},
};
