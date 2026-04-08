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
  --anti-flash-white: #EBEBEB !important;
  --background-1st-dark: #1a1c25 !important;
  --background-1st-light: #f6f6fc !important;
  --background-2nd-dark: #20212b !important;
  --background-2nd-light: #eceff5 !important;
  --background-primary: #1a1c25 !important;
  --background-primary-alt: #20212b !important;
  --background-secondary: #20212b !important;
  --background-secondary-alt: #20212b !important;
  --bases-cards-background: #1a1c25 !important;
  --bases-cards-cover-background: #20212b !important;
  --bases-table-cell-background-active: #1a1c25 !important;
  --bases-table-cell-background-disabled: #20212b !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #5AFF15 !important;
  --bases-table-group-background: #20212b !important;
  --bases-table-header-background: #1a1c25 !important;
  --bases-table-summary-background: #1a1c25 !important;
  --bittersweet: #F05D5E !important;
  --blockquote-background-color: #292c3a !important;
  --blockquote-border-color: #5AFF15 !important;
  --blockquote-border-thickness: 5px !important;
  --bold-color: #13C4A3 !important;
  --bright-green: #5AFF15 !important;
  --canvas-background: #1a1c25 !important;
  --checkbox-border-color-hover: #5AFF15 !important;
  --checkbox-color: #13C4A3 !important;
  --checkbox-color-hover: #5AFF15 !important;
  --checkbox-marker-color: #1a1c25 !important;
  --checklist-done-color: #7C809B !important;
  --checklist-done-decoration: none !important;
  --code-background: #20212b !important;
  --code-builtin-color: #A69EFA !important;
  --code-comment-color: #7C809B !important;
  --code-function-color: #13C4A3 !important;
  --code-operator-color: #13C4A3 !important;
  --code-size: 0.9rem !important;
  --code-string-color: #e8e08b !important;
  --code-text-size: 0.9em !important;
  --code-variable-color: #FCFCFC !important;
  --codeblock-background: #292c3a !important;
  --codeblock-color: #FCFCFC !important;
  --color-accent: #5AFF15 !important;
  --cool-gray: #7C809B !important;
  --cool-gray-light: #cbcdd3 !important;
  --dark-accent: #5AFF15 !important;
  --dark-background-primary: #1a1c25 !important;
  --dark-background-secondary: #20212b !important;
  --dark-code: #C3F73A !important;
  --dark-code-background: #292c3a !important;
  --dark-divider-color: #2f3144 !important;
  --dark-hr-color: #6e8166 !important;
  --dark-link: #13C4A3 !important;
  --dark-mint: #2f9b56 !important;
  --dark-purple: #242032 !important;
  --divider-color-hover: #5AFF15 !important;
  --embed-border-start: 2px solid #5AFF15 !important;
  --file-content: '📄 ' !important;
  --file-header-background: #1a1c25 !important;
  --file-header-background-focused: #1a1c25 !important;
  --file-line-width: 850px !important;
  --file-title-color: #FFF8F0 !important;
  --floral-white: #FFF8F0 !important;
  --folder-filter: invert(51%) sepia(51%) saturate(596%) hue-rotate(89deg) brightness(89%) contrast(84%) !important;
  --folder-title-color: #FFF8F0 !important;
  --folly: #FF3366 !important;
  --folly-dark: #c7204a !important;
  --french-gray: #D1D2DC !important;
  --gold: rgb(253, 233, 9) !important;
  --gold-light: #e8e08b !important;
  --highlight-bg-color: #13C4A3 !important;
  --highlight-text-color: #121019 !important;
  --hr-color: #6e8166 !important;
  --inline-code-background: #292c3a !important;
  --interactive-accent: #5AFF15 !important;
  --light: #1a1c25 !important;
  --light-accent: #3fc570 !important;
  --light-background-primary: #f6f6fc !important;
  --light-background-secondary: #eceff5 !important;
  --light-code: #2f9b56 !important;
  --light-code-background: #eceff5 !important;
  --light-divider: #dbe1f0 !important;
  --light-divider-color: #dbe1f0 !important;
  --light-hr-color: #dbe1f0 !important;
  --light-link: #3fc570 !important;
  --light-mint: #3fc570 !important;
  --light-sea-green: #00BFB3 !important;
  --lightgray: #20212b !important;
  --lime: #C3F73A !important;
  --lime-dark: #92cb00 !important;
  --line-width: 850px !important;
  --link-color: #13C4A3 !important;
  --links-color: #13C4A3 !important;
  --menu-background: #20212b !important;
  --mint: #13C4A3 !important;
  --mint-light: #9af6e5 !important;
  --modal-background: #1a1c25 !important;
  --pdf-background: #1a1c25 !important;
  --pdf-page-background: #1a1c25 !important;
  --pdf-sidebar-background: #1a1c25 !important;
  --prompt-background: #1a1c25 !important;
  --raisin-black: #1B1825 !important;
  --ribbon-background: #20212b !important;
  --ribbon-background-collapsed: #1a1c25 !important;
  --rich-black: #121019 !important;
  --robin-egg-blue: #19D8D5 !important;
  --search-result-background: #1a1c25 !important;
  --secondary: #5AFF15 !important;
  --setting-items-background: #20212b !important;
  --status-bar-background: #20212b !important;
  --suggestion-background: #1a1c25 !important;
  --tab-background-active: #1a1c25 !important;
  --tab-container-background: #20212b !important;
  --tab-divider-color: #2f3144 !important;
  --tab-outline-color: #2f3144 !important;
  --tab-switcher-background: #20212b !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #20212b, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #5AFF15 !important;
  --table-drag-handle-background-active: #5AFF15 !important;
  --table-selection-border-color: #5AFF15 !important;
  --titlebar-background: #20212b !important;
  --titlebar-background-focused: #20212b !important;
  --tropical-indigo: #685fce !important;
  --tropical-indigo-light: #A69EFA !important;
  --white: #FCFCFC !important;
  --white-smoke: #F5F5F5 !important;
  --ylmn-blue: #375BA9 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(32, 33, 43);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(26, 28, 37);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(32, 33, 43);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(32, 33, 43);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(32, 33, 43);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(26, 28, 37);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(19, 196, 163);
  outline: rgb(19, 196, 163) none 0px;
  text-decoration-color: rgb(19, 196, 163);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(19, 196, 163);
  outline: rgb(19, 196, 163) none 0px;
  text-decoration-color: rgb(19, 196, 163);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(19, 196, 163);
  color: rgb(18, 16, 25);
  outline: rgb(18, 16, 25) none 0px;
  text-decoration-color: rgb(18, 16, 25);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(19, 196, 163);
  border-color: rgb(19, 196, 163);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(19, 196, 163);
  outline: rgb(19, 196, 163) none 0px;
  text-decoration-color: rgb(19, 196, 163);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(19, 196, 163);
  outline: rgb(19, 196, 163) none 0px;
  text-decoration-color: rgb(19, 196, 163);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  padding-bottom: 5.76px;
  padding-top: 4.32px;
}`,
    tables: `html[saved-theme="dark"] body table {
  margin-left: 293.391px;
  margin-right: 293.391px;
}`,
    code: `html[saved-theme="dark"] body code {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(41, 44, 58);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(41, 44, 58);
  color: rgb(252, 252, 252);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(19, 196, 163);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(19, 196, 163);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(19, 196, 163);
  border-left-color: rgb(19, 196, 163);
  border-right-color: rgb(19, 196, 163);
  border-top-color: rgb(19, 196, 163);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(41, 44, 58);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(41, 44, 58);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(32, 33, 43);
}

html[saved-theme="dark"] body .transclude {
  border-left-color: rgb(90, 255, 21);
}`,
    search: `html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(26, 28, 37);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(32, 33, 43);
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(26, 28, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 37);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(26, 28, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 37);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(26, 28, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 37);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 28, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 37);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 28, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 37);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(26, 28, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 28, 37);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(32, 33, 43);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 248, 240);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(255, 248, 240);
}`,
    misc: `html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(32, 33, 43);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(32, 33, 43);
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(19, 196, 163);
}`,
  },
  light: {
    base: `:root:root {
  --anti-flash-white: #EBEBEB !important;
  --background-1st-dark: #1a1c25 !important;
  --background-1st-light: #f6f6fc !important;
  --background-2nd-dark: #20212b !important;
  --background-2nd-light: #eceff5 !important;
  --background-primary: #f6f6fc !important;
  --background-primary-alt: #eceff5 !important;
  --background-secondary: #eceff5 !important;
  --background-secondary-alt: #eceff5 !important;
  --bases-cards-background: #f6f6fc !important;
  --bases-cards-cover-background: #eceff5 !important;
  --bases-table-cell-background-active: #f6f6fc !important;
  --bases-table-cell-background-disabled: #eceff5 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #3fc570 !important;
  --bases-table-group-background: #eceff5 !important;
  --bases-table-header-background: #f6f6fc !important;
  --bases-table-summary-background: #f6f6fc !important;
  --bittersweet: #F05D5E !important;
  --blockquote-background-color: #eceff5 !important;
  --blockquote-border-color: #3fc570 !important;
  --blockquote-border-thickness: 5px !important;
  --blur-background: color-mix(in srgb, #f6f6fc 65%, transparent) linear-gradient(#f6f6fc, color-mix(in srgb, #f6f6fc 65%, transparent)) !important;
  --bold-color: #2f9b56 !important;
  --bright-green: #5AFF15 !important;
  --canvas-background: #f6f6fc !important;
  --checkbox-border-color-hover: #3fc570 !important;
  --checkbox-color: #3fc570 !important;
  --checkbox-color-hover: #3fc570 !important;
  --checkbox-marker-color: #f6f6fc !important;
  --checklist-done-color: #7C809B !important;
  --checklist-done-decoration: none !important;
  --code-background: #eceff5 !important;
  --code-builtin-color: #13C4A3 !important;
  --code-comment-color: #7C809B !important;
  --code-function-color: #F05D5E !important;
  --code-operator-color: #13C4A3 !important;
  --code-size: 0.9rem !important;
  --code-string-color: #685fce !important;
  --code-text-size: 0.9em !important;
  --code-variable-color: #121019 !important;
  --codeblock-background: #eceff5 !important;
  --codeblock-color: #121019 !important;
  --collapse-icon-color-collapsed: #3fc570 !important;
  --color-accent: #3fc570 !important;
  --cool-gray: #7C809B !important;
  --cool-gray-light: #cbcdd3 !important;
  --dark-accent: #5AFF15 !important;
  --dark-background-primary: #1a1c25 !important;
  --dark-background-secondary: #20212b !important;
  --dark-code: #C3F73A !important;
  --dark-code-background: #292c3a !important;
  --dark-divider-color: #2f3144 !important;
  --dark-hr-color: #6e8166 !important;
  --dark-link: #13C4A3 !important;
  --dark-mint: #2f9b56 !important;
  --dark-purple: #242032 !important;
  --divider-color: #dbe1f0 !important;
  --divider-color-hover: #3fc570 !important;
  --embed-border-start: 2px solid #3fc570 !important;
  --file-content: '📄 ' !important;
  --file-header-background: #f6f6fc !important;
  --file-header-background-focused: #f6f6fc !important;
  --file-line-width: 850px !important;
  --file-title-color: #121019 !important;
  --floral-white: #FFF8F0 !important;
  --folder-filter: invert(55%) sepia(89%) saturate(330%) hue-rotate(89deg) brightness(99%) contrast(88%) !important;
  --folder-title-color: #121019 !important;
  --folly: #FF3366 !important;
  --folly-dark: #c7204a !important;
  --french-gray: #D1D2DC !important;
  --gold: rgb(253, 233, 9) !important;
  --gold-light: #e8e08b !important;
  --graph-node-focused: #3fc570 !important;
  --highlight-bg-color: #3fc570 !important;
  --highlight-text-color: #121019 !important;
  --hr-color: #dbe1f0 !important;
  --icon-color-active: #3fc570 !important;
  --inline-code-background: #eceff5 !important;
  --interactive-accent: #3fc570 !important;
  --light: #f6f6fc !important;
  --light-accent: #3fc570 !important;
  --light-background-primary: #f6f6fc !important;
  --light-background-secondary: #eceff5 !important;
  --light-code: #2f9b56 !important;
  --light-code-background: #eceff5 !important;
  --light-divider: #dbe1f0 !important;
  --light-divider-color: #dbe1f0 !important;
  --light-hr-color: #dbe1f0 !important;
  --light-link: #3fc570 !important;
  --light-mint: #3fc570 !important;
  --light-sea-green: #00BFB3 !important;
  --lightgray: #eceff5 !important;
  --lime: #C3F73A !important;
  --lime-dark: #92cb00 !important;
  --line-width: 850px !important;
  --link-color: #3fc570 !important;
  --link-external-color: #3fc570 !important;
  --link-unresolved-color: #3fc570 !important;
  --links-color: #3fc570 !important;
  --list-marker-color-collapsed: #3fc570 !important;
  --menu-background: #eceff5 !important;
  --mint: #13C4A3 !important;
  --mint-light: #9af6e5 !important;
  --modal-background: #f6f6fc !important;
  --nav-item-color-highlighted: #3fc570 !important;
  --pdf-background: #f6f6fc !important;
  --pdf-page-background: #f6f6fc !important;
  --pdf-sidebar-background: #f6f6fc !important;
  --pill-color-remove-hover: #3fc570 !important;
  --prompt-background: #f6f6fc !important;
  --raised-background: color-mix(in srgb, #f6f6fc 65%, transparent) linear-gradient(#f6f6fc, color-mix(in srgb, #f6f6fc 65%, transparent)) !important;
  --raisin-black: #1B1825 !important;
  --ribbon-background: #eceff5 !important;
  --ribbon-background-collapsed: #f6f6fc !important;
  --rich-black: #121019 !important;
  --robin-egg-blue: #19D8D5 !important;
  --search-result-background: #f6f6fc !important;
  --secondary: #3fc570 !important;
  --setting-items-background: #eceff5 !important;
  --status-bar-background: #eceff5 !important;
  --status-bar-border-color: #dbe1f0 !important;
  --suggestion-background: #f6f6fc !important;
  --tab-background-active: #f6f6fc !important;
  --tab-container-background: #eceff5 !important;
  --tab-divider-color: #dbe1f0 !important;
  --tab-outline-color: #dbe1f0 !important;
  --tab-switcher-background: #eceff5 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #eceff5, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #3fc570 !important;
  --tab-text-color-focused-highlighted: #3fc570 !important;
  --table-drag-handle-background-active: #3fc570 !important;
  --table-selection-border-color: #3fc570 !important;
  --tag-color: #3fc570 !important;
  --tag-color-hover: #3fc570 !important;
  --tertiary: #3fc570 !important;
  --text-accent: #3fc570 !important;
  --titlebar-background: #eceff5 !important;
  --titlebar-background-focused: #eceff5 !important;
  --tropical-indigo: #685fce !important;
  --tropical-indigo-light: #A69EFA !important;
  --white: #FCFCFC !important;
  --white-smoke: #F5F5F5 !important;
  --ylmn-blue: #375BA9 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(236, 239, 245);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(246, 246, 252);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(246, 246, 252);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(63, 197, 112);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(236, 239, 245);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(219, 225, 240);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(236, 239, 245);
  border-left-color: rgb(219, 225, 240);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(246, 246, 252);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(47, 155, 86);
  outline: rgb(47, 155, 86) none 0px;
  text-decoration-color: rgb(47, 155, 86);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(47, 155, 86);
  outline: rgb(47, 155, 86) none 0px;
  text-decoration-color: rgb(47, 155, 86);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(63, 197, 112);
  color: rgb(18, 16, 25);
  outline: rgb(18, 16, 25) none 0px;
  text-decoration-color: rgb(18, 16, 25);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(63, 197, 112);
  border-color: rgb(63, 197, 112);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(63, 197, 112);
  outline: rgb(63, 197, 112) none 0px;
  text-decoration-color: rgb(63, 197, 112);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(63, 197, 112);
  outline: rgb(63, 197, 112) none 0px;
  text-decoration-color: rgb(63, 197, 112);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(63, 197, 112);
  outline: rgb(63, 197, 112) none 0px;
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  padding-bottom: 5.76px;
  padding-top: 4.32px;
}`,
    tables: `html[saved-theme="light"] body table {
  margin-left: 293.391px;
  margin-right: 293.391px;
}`,
    code: `html[saved-theme="light"] body code {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(236, 239, 245);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(236, 239, 245);
  color: rgb(18, 16, 25);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(240, 93, 94);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(240, 93, 94);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(240, 93, 94);
  border-left-color: rgb(240, 93, 94);
  border-right-color: rgb(240, 93, 94);
  border-top-color: rgb(240, 93, 94);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(236, 239, 245);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(236, 239, 245);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(236, 239, 245);
}

html[saved-theme="light"] body .transclude {
  border-left-color: rgb(63, 197, 112);
}`,
    search: `html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(246, 246, 252);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(236, 239, 245);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(63, 197, 112);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(219, 225, 240);
  border-left-color: rgb(219, 225, 240);
  border-right-color: rgb(219, 225, 240);
}`,
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(246, 246, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(246, 246, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(246, 246, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(246, 246, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(246, 246, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(246, 246, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 252);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(236, 239, 245);
  border-bottom-color: rgb(219, 225, 240);
  border-left-color: rgb(219, 225, 240);
  border-right-color: rgb(219, 225, 240);
  border-top-color: rgb(219, 225, 240);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(18, 16, 25);
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(18, 16, 25);
}`,
    misc: `html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(236, 239, 245);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(236, 239, 245);
  font-size: 14.4px;
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(63, 197, 112);
}`,
  },
};
