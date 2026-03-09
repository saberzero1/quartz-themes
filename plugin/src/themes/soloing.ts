import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "soloing",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --anti-flash-white: #EBEBEB;
  --background-1st-dark: #1a1c25;
  --background-1st-light: #f6f6fc;
  --background-2nd-dark: #20212b;
  --background-2nd-light: #eceff5;
  --background-primary: #1a1c25;
  --background-primary-alt: #20212b;
  --background-secondary: #20212b;
  --background-secondary-alt: #20212b;
  --bases-cards-background: #1a1c25;
  --bases-cards-cover-background: #20212b;
  --bases-table-cell-background-active: #1a1c25;
  --bases-table-cell-background-disabled: #20212b;
  --bases-table-cell-shadow-focus: 0 0 0 2px #5AFF15;
  --bases-table-group-background: #20212b;
  --bases-table-header-background: #1a1c25;
  --bases-table-summary-background: #1a1c25;
  --bittersweet: #F05D5E;
  --blockquote-background-color: #292c3a;
  --blockquote-border-color: #5AFF15;
  --blockquote-border-thickness: 5px;
  --bold-color: #13C4A3;
  --bright-green: #5AFF15;
  --canvas-background: #1a1c25;
  --checkbox-border-color-hover: #5AFF15;
  --checkbox-color: #13C4A3;
  --checkbox-color-hover: #5AFF15;
  --checkbox-marker-color: #1a1c25;
  --checklist-done-color: #7C809B;
  --checklist-done-decoration: none;
  --code-background: #20212b;
  --code-builtin-color: #A69EFA;
  --code-comment-color: #7C809B;
  --code-function-color: #13C4A3;
  --code-operator-color: #13C4A3;
  --code-size: 0.9rem;
  --code-string-color: #e8e08b;
  --code-text-size: 0.9em;
  --code-variable-color: #FCFCFC;
  --codeblock-background: #292c3a;
  --codeblock-color: #FCFCFC;
  --color-accent: #5AFF15;
  --cool-gray: #7C809B;
  --cool-gray-light: #cbcdd3;
  --dark-accent: #5AFF15;
  --dark-background-primary: #1a1c25;
  --dark-background-secondary: #20212b;
  --dark-code: #C3F73A;
  --dark-code-background: #292c3a;
  --dark-divider-color: #2f3144;
  --dark-hr-color: #6e8166;
  --dark-link: #13C4A3;
  --dark-mint: #2f9b56;
  --dark-purple: #242032;
  --divider-color-hover: #5AFF15;
  --embed-border-start: 2px solid #5AFF15;
  --file-content: '📄 ';
  --file-header-background: #1a1c25;
  --file-header-background-focused: #1a1c25;
  --file-line-width: 850px;
  --file-title-color: #FFF8F0;
  --floral-white: #FFF8F0;
  --folder-filter: invert(51%) sepia(51%) saturate(596%) hue-rotate(89deg) brightness(89%) contrast(84%);
  --folder-title-color: #FFF8F0;
  --folly: #FF3366;
  --folly-dark: #c7204a;
  --french-gray: #D1D2DC;
  --gold: rgb(253, 233, 9);
  --gold-light: #e8e08b;
  --highlight-bg-color: #13C4A3;
  --highlight-text-color: #121019;
  --hr-color: #6e8166;
  --inline-code-background: #292c3a;
  --interactive-accent: #5AFF15;
  --light-accent: #3fc570;
  --light-background-primary: #f6f6fc;
  --light-background-secondary: #eceff5;
  --light-code: #2f9b56;
  --light-code-background: #eceff5;
  --light-divider: #dbe1f0;
  --light-divider-color: #dbe1f0;
  --light-hr-color: #dbe1f0;
  --light-link: #3fc570;
  --light-mint: #3fc570;
  --light-sea-green: #00BFB3;
  --lime: #C3F73A;
  --lime-dark: #92cb00;
  --line-width: 850px;
  --link-color: #13C4A3;
  --links-color: #13C4A3;
  --menu-background: #20212b;
  --mint: #13C4A3;
  --mint-light: #9af6e5;
  --modal-background: #1a1c25;
  --pdf-background: #1a1c25;
  --pdf-page-background: #1a1c25;
  --pdf-sidebar-background: #1a1c25;
  --prompt-background: #1a1c25;
  --raisin-black: #1B1825;
  --ribbon-background: #20212b;
  --ribbon-background-collapsed: #1a1c25;
  --rich-black: #121019;
  --robin-egg-blue: #19D8D5;
  --search-result-background: #1a1c25;
  --setting-items-background: #20212b;
  --status-bar-background: #20212b;
  --suggestion-background: #1a1c25;
  --tab-background-active: #1a1c25;
  --tab-container-background: #20212b;
  --tab-divider-color: #2f3144;
  --tab-outline-color: #2f3144;
  --tab-switcher-background: #20212b;
  --tab-switcher-menubar-background: linear-gradient(to top, #20212b, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #5AFF15;
  --table-drag-handle-background-active: #5AFF15;
  --table-selection-border-color: #5AFF15;
  --titlebar-background: #20212b;
  --titlebar-background-focused: #20212b;
  --tropical-indigo: #685fce;
  --tropical-indigo-light: #A69EFA;
  --white: #FCFCFC;
  --white-smoke: #F5F5F5;
  --ylmn-blue: #375BA9;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(32, 33, 43);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 28, 37);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(32, 33, 43);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(32, 33, 43);
}

body div#quartz-root {
  background-color: rgb(26, 28, 37);
}`,
    typography: `body .page article p > b, b {
  color: rgb(19, 196, 163);
  outline: rgb(19, 196, 163) none 0px;
  text-decoration: rgb(19, 196, 163);
  text-decoration-color: rgb(19, 196, 163);
}

body .page article p > strong, strong {
  color: rgb(19, 196, 163);
  outline: rgb(19, 196, 163) none 0px;
  text-decoration: rgb(19, 196, 163);
  text-decoration-color: rgb(19, 196, 163);
}

body .text-highlight {
  background-color: rgb(19, 196, 163);
  color: rgb(18, 16, 25);
  outline: rgb(18, 16, 25) none 0px;
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}`,
    links: `body a.external, footer a {
  color: rgb(19, 196, 163);
  outline: rgb(19, 196, 163) none 0px;
  text-decoration: underline rgb(19, 196, 163);
  text-decoration-color: rgb(19, 196, 163);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(19, 196, 163);
  outline: rgb(19, 196, 163) none 0px;
  text-decoration: underline rgb(19, 196, 163);
  text-decoration-color: rgb(19, 196, 163);
}`,
    lists: `body ol.overflow {
  background-color: rgb(26, 28, 37);
}

body ul.overflow {
  background-color: rgb(26, 28, 37);
}`,
    blockquotes: `body blockquote {
  padding-bottom: 5.76px;
  padding-top: 4.32px;
}`,
    tables: `body table {
  margin-left: 293.391px;
  margin-right: 293.391px;
}`,
    code: `body code {
  background-color: rgb(41, 44, 58);
  border-bottom-color: rgb(41, 44, 58);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(41, 44, 58);
  border-right-color: rgb(41, 44, 58);
  border-top-color: rgb(41, 44, 58);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(252, 252, 252);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(41, 44, 58);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(41, 44, 58);
  color: rgb(252, 252, 252);
}

body pre > code > [data-line] {
  border-left-color: rgb(19, 196, 163);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(19, 196, 163);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(19, 196, 163);
  border-left-color: rgb(19, 196, 163);
  border-right-color: rgb(19, 196, 163);
  border-top-color: rgb(19, 196, 163);
}

body pre > code, pre:has(> code) {
  background-color: rgb(41, 44, 58);
}

body pre:has(> code) {
  background-color: rgb(41, 44, 58);
}`,
    embeds: `body .file-embed {
  background-color: rgb(32, 33, 43);
}

body .transclude {
  border-left-color: rgb(90, 255, 21);
}

body .transclude-inner {
  border-left-color: rgb(90, 255, 21);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(124, 128, 155);
  text-decoration: rgb(124, 128, 155);
  text-decoration-color: rgb(124, 128, 155);
}`,
    search: `body .search > .search-container > .search-space {
  background-color: rgb(26, 28, 37);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(32, 33, 43);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(26, 28, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 37);
}

body ::-webkit-scrollbar-corner {
  background: rgb(26, 28, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 37);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(26, 28, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 37);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 28, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 37);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 28, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 37);
}

body ::-webkit-scrollbar-track {
  background: rgb(26, 28, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 37);
}`,
    footer: `body footer {
  background-color: rgb(32, 33, 43);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 248, 240);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(255, 248, 240);
}`,
    misc: `body .navigation-progress {
  background-color: rgb(32, 33, 43);
}

body kbd {
  background-color: rgb(32, 33, 43);
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}`,
  },
  light: {
    base: `:root:root {
  --anti-flash-white: #EBEBEB;
  --background-1st-dark: #1a1c25;
  --background-1st-light: #f6f6fc;
  --background-2nd-dark: #20212b;
  --background-2nd-light: #eceff5;
  --background-primary: #f6f6fc;
  --background-primary-alt: #eceff5;
  --background-secondary: #eceff5;
  --background-secondary-alt: #eceff5;
  --bases-cards-background: #f6f6fc;
  --bases-cards-cover-background: #eceff5;
  --bases-table-cell-background-active: #f6f6fc;
  --bases-table-cell-background-disabled: #eceff5;
  --bases-table-cell-shadow-focus: 0 0 0 2px #3fc570;
  --bases-table-group-background: #eceff5;
  --bases-table-header-background: #f6f6fc;
  --bases-table-summary-background: #f6f6fc;
  --bittersweet: #F05D5E;
  --blockquote-background-color: #eceff5;
  --blockquote-border-color: #3fc570;
  --blockquote-border-thickness: 5px;
  --blur-background: color-mix(in srgb, #f6f6fc 65%, transparent) linear-gradient(#f6f6fc, color-mix(in srgb, #f6f6fc 65%, transparent));
  --bold-color: #2f9b56;
  --bright-green: #5AFF15;
  --canvas-background: #f6f6fc;
  --checkbox-border-color-hover: #3fc570;
  --checkbox-color: #3fc570;
  --checkbox-color-hover: #3fc570;
  --checkbox-marker-color: #f6f6fc;
  --checklist-done-color: #7C809B;
  --checklist-done-decoration: none;
  --code-background: #eceff5;
  --code-builtin-color: #13C4A3;
  --code-comment-color: #7C809B;
  --code-function-color: #F05D5E;
  --code-operator-color: #13C4A3;
  --code-size: 0.9rem;
  --code-string-color: #685fce;
  --code-text-size: 0.9em;
  --code-variable-color: #121019;
  --codeblock-background: #eceff5;
  --codeblock-color: #121019;
  --collapse-icon-color-collapsed: #3fc570;
  --color-accent: #3fc570;
  --cool-gray: #7C809B;
  --cool-gray-light: #cbcdd3;
  --dark-accent: #5AFF15;
  --dark-background-primary: #1a1c25;
  --dark-background-secondary: #20212b;
  --dark-code: #C3F73A;
  --dark-code-background: #292c3a;
  --dark-divider-color: #2f3144;
  --dark-hr-color: #6e8166;
  --dark-link: #13C4A3;
  --dark-mint: #2f9b56;
  --dark-purple: #242032;
  --divider-color: #dbe1f0;
  --divider-color-hover: #3fc570;
  --embed-border-start: 2px solid #3fc570;
  --file-content: '📄 ';
  --file-header-background: #f6f6fc;
  --file-header-background-focused: #f6f6fc;
  --file-line-width: 850px;
  --file-title-color: #121019;
  --floral-white: #FFF8F0;
  --folder-filter: invert(55%) sepia(89%) saturate(330%) hue-rotate(89deg) brightness(99%) contrast(88%);
  --folder-title-color: #121019;
  --folly: #FF3366;
  --folly-dark: #c7204a;
  --french-gray: #D1D2DC;
  --gold: rgb(253, 233, 9);
  --gold-light: #e8e08b;
  --graph-node-focused: #3fc570;
  --highlight-bg-color: #3fc570;
  --highlight-text-color: #121019;
  --hr-color: #dbe1f0;
  --icon-color-active: #3fc570;
  --inline-code-background: #eceff5;
  --interactive-accent: #3fc570;
  --light-accent: #3fc570;
  --light-background-primary: #f6f6fc;
  --light-background-secondary: #eceff5;
  --light-code: #2f9b56;
  --light-code-background: #eceff5;
  --light-divider: #dbe1f0;
  --light-divider-color: #dbe1f0;
  --light-hr-color: #dbe1f0;
  --light-link: #3fc570;
  --light-mint: #3fc570;
  --light-sea-green: #00BFB3;
  --lime: #C3F73A;
  --lime-dark: #92cb00;
  --line-width: 850px;
  --link-color: #3fc570;
  --link-external-color: #3fc570;
  --link-unresolved-color: #3fc570;
  --links-color: #3fc570;
  --list-marker-color-collapsed: #3fc570;
  --menu-background: #eceff5;
  --mint: #13C4A3;
  --mint-light: #9af6e5;
  --modal-background: #f6f6fc;
  --nav-item-color-highlighted: #3fc570;
  --pdf-background: #f6f6fc;
  --pdf-page-background: #f6f6fc;
  --pdf-sidebar-background: #f6f6fc;
  --pill-color-remove-hover: #3fc570;
  --prompt-background: #f6f6fc;
  --raised-background: color-mix(in srgb, #f6f6fc 65%, transparent) linear-gradient(#f6f6fc, color-mix(in srgb, #f6f6fc 65%, transparent));
  --raisin-black: #1B1825;
  --ribbon-background: #eceff5;
  --ribbon-background-collapsed: #f6f6fc;
  --rich-black: #121019;
  --robin-egg-blue: #19D8D5;
  --search-result-background: #f6f6fc;
  --setting-items-background: #eceff5;
  --status-bar-background: #eceff5;
  --status-bar-border-color: #dbe1f0;
  --suggestion-background: #f6f6fc;
  --tab-background-active: #f6f6fc;
  --tab-container-background: #eceff5;
  --tab-divider-color: #dbe1f0;
  --tab-outline-color: #dbe1f0;
  --tab-switcher-background: #eceff5;
  --tab-switcher-menubar-background: linear-gradient(to top, #eceff5, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #3fc570;
  --tab-text-color-focused-highlighted: #3fc570;
  --table-drag-handle-background-active: #3fc570;
  --table-selection-border-color: #3fc570;
  --tag-color: #3fc570;
  --tag-color-hover: #3fc570;
  --text-accent: #3fc570;
  --titlebar-background: #eceff5;
  --titlebar-background-focused: #eceff5;
  --tropical-indigo: #685fce;
  --tropical-indigo-light: #A69EFA;
  --white: #FCFCFC;
  --white-smoke: #F5F5F5;
  --ylmn-blue: #375BA9;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(236, 239, 245);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(246, 246, 252);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(236, 239, 245);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(219, 225, 240);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(236, 239, 245);
  border-left-color: rgb(219, 225, 240);
}

body div#quartz-root {
  background-color: rgb(246, 246, 252);
}`,
    typography: `body .page article p > b, b {
  color: rgb(47, 155, 86);
  outline: rgb(47, 155, 86) none 0px;
  text-decoration: rgb(47, 155, 86);
  text-decoration-color: rgb(47, 155, 86);
}

body .page article p > strong, strong {
  color: rgb(47, 155, 86);
  outline: rgb(47, 155, 86) none 0px;
  text-decoration: rgb(47, 155, 86);
  text-decoration-color: rgb(47, 155, 86);
}

body .text-highlight {
  background-color: rgb(63, 197, 112);
  color: rgb(18, 16, 25);
  outline: rgb(18, 16, 25) none 0px;
  text-decoration: rgb(18, 16, 25);
  text-decoration-color: rgb(18, 16, 25);
}`,
    links: `body a.external, footer a {
  color: rgb(63, 197, 112);
  outline: rgb(63, 197, 112) none 0px;
  text-decoration: underline rgb(63, 197, 112);
  text-decoration-color: rgb(63, 197, 112);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(63, 197, 112);
  outline: rgb(63, 197, 112) none 0px;
  text-decoration: underline rgb(63, 197, 112);
  text-decoration-color: rgb(63, 197, 112);
}

body a.internal.broken {
  color: rgb(63, 197, 112);
  outline: rgb(63, 197, 112) none 0px;
}`,
    lists: `body ol.overflow {
  background-color: rgb(246, 246, 252);
}

body ul.overflow {
  background-color: rgb(246, 246, 252);
}`,
    blockquotes: `body blockquote {
  padding-bottom: 5.76px;
  padding-top: 4.32px;
}`,
    tables: `body table {
  margin-left: 293.391px;
  margin-right: 293.391px;
}`,
    code: `body code {
  background-color: rgb(236, 239, 245);
  border-bottom-color: rgb(236, 239, 245);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(236, 239, 245);
  border-right-color: rgb(236, 239, 245);
  border-top-color: rgb(236, 239, 245);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(18, 16, 25);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(236, 239, 245);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(236, 239, 245);
  color: rgb(18, 16, 25);
}

body pre > code > [data-line] {
  border-left-color: rgb(240, 93, 94);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(240, 93, 94);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(240, 93, 94);
  border-left-color: rgb(240, 93, 94);
  border-right-color: rgb(240, 93, 94);
  border-top-color: rgb(240, 93, 94);
}

body pre > code, pre:has(> code) {
  background-color: rgb(236, 239, 245);
}

body pre:has(> code) {
  background-color: rgb(236, 239, 245);
}`,
    embeds: `body .file-embed {
  background-color: rgb(236, 239, 245);
}

body .transclude {
  border-left-color: rgb(63, 197, 112);
}

body .transclude-inner {
  border-left-color: rgb(63, 197, 112);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(124, 128, 155);
  text-decoration: rgb(124, 128, 155);
  text-decoration-color: rgb(124, 128, 155);
}`,
    search: `body .search > .search-container > .search-space {
  background-color: rgb(246, 246, 252);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(236, 239, 245);
}

body a.internal.tag-link::before {
  color: rgb(63, 197, 112);
}

body hr {
  border-bottom-color: rgb(219, 225, 240);
  border-left-color: rgb(219, 225, 240);
  border-right-color: rgb(219, 225, 240);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(246, 246, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 252);
}

body ::-webkit-scrollbar-corner {
  background: rgb(246, 246, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 252);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(246, 246, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 252);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(246, 246, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 252);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(246, 246, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 252);
}

body ::-webkit-scrollbar-track {
  background: rgb(246, 246, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 252);
}`,
    footer: `body footer {
  background-color: rgb(236, 239, 245);
  border-bottom-color: rgb(219, 225, 240);
  border-left-color: rgb(219, 225, 240);
  border-right-color: rgb(219, 225, 240);
  border-top-color: rgb(219, 225, 240);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(18, 16, 25);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(18, 16, 25);
}`,
    misc: `body .navigation-progress {
  background-color: rgb(236, 239, 245);
}

body kbd {
  background-color: rgb(236, 239, 245);
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}`,
  },
};
