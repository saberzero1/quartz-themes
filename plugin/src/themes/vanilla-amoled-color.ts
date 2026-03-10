import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vanilla-amoled-color",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: #333 !important;
  --background-modifier-border-focus: #4a4a4a !important;
  --background-modifier-border-hover: #363636 !important;
  --background-modifier-form-field: #222 !important;
  --background-modifier-form-field-hover: #222 !important;
  --background-primary: #000 !important;
  --background-primary-alt: #111 !important;
  --background-secondary: #080808 !important;
  --background-secondary-alt: #333 !important;
  --bases-cards-background: #000 !important;
  --bases-cards-cover-background: #111 !important;
  --bases-cards-shadow: 0 0 0 1px #333 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #363636 !important;
  --bases-embed-border-color: #333 !important;
  --bases-table-border-color: #333 !important;
  --bases-table-cell-background-active: #000 !important;
  --bases-table-cell-background-disabled: #111 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #4a4a4a !important;
  --bases-table-group-background: #111 !important;
  --bases-table-header-background: #000 !important;
  --bases-table-summary-background: #000 !important;
  --blur-background: color-mix(in srgb, #333 65%, transparent) linear-gradient(#333, color-mix(in srgb, #333 65%, transparent)) !important;
  --canvas-background: #000 !important;
  --canvas-card-label-color: #666 !important;
  --canvas-dot-pattern: #333 !important;
  --checkbox-border-color: #666 !important;
  --checkbox-marker-color: #000 !important;
  --code-background: #111 !important;
  --code-border-color: #333 !important;
  --code-comment: #666 !important;
  --collapse-icon-color: #666 !important;
  --color-base-00: #000 !important;
  --color-base-05: #080808 !important;
  --color-base-10: #111 !important;
  --color-base-20: #1a1a1a !important;
  --color-base-25: #222 !important;
  --color-base-30: #333 !important;
  --color-base-35: #363636 !important;
  --color-base-40: #4a4a4a !important;
  --color-base-50: #666 !important;
  --color-base-60: #999
	--color-base-70: #bbb
	--color-base-100: #fff !important;
  --divider-color: #333 !important;
  --dropdown-background: #333 !important;
  --dropdown-background-hover: #363636 !important;
  --embed-block-shadow-hover: 0 0 0 1px #333, inset 0 0 0 1px #333 !important;
  --file-header-background: #000 !important;
  --file-header-background-focused: #000 !important;
  --flair-background: #333 !important;
  --footnote-divider-color: #333 !important;
  --footnote-id-color-no-occurrences: #666 !important;
  --frost0: rgb(143, 188, 187) !important;
  --frost0_x: 143,188,187 !important;
  --frost2: rgb(129, 161, 193) !important;
  --frost2_x: 129,161,193 !important;
  --graph-line: #363636 !important;
  --graph-node-unresolved: #666 !important;
  --gray: #666 !important;
  --green: rgb(163, 190, 140) !important;
  --green_x: 163,190,140 !important;
  --h1-color: rgb(191, 97, 106) !important;
  --h2-color: rgb(235, 203, 139) !important;
  --h3-color: rgb(163, 190, 140) !important;
  --h4-color: rgb(180, 142, 173) !important;
  --h5-color: rgb(143, 188, 187) !important;
  --h6-color: rgb(129, 161, 193) !important;
  --heading-formatting: #666 !important;
  --hr-color: #333 !important;
  --inline-title-color: rgb(191, 97, 106) !important;
  --input-date-separator: #666 !important;
  --input-placeholder-color: #666 !important;
  --interactive-hover: #363636 !important;
  --interactive-normal: #333 !important;
  --light: #000 !important;
  --lightgray: #080808 !important;
  --list-marker-color: #666 !important;
  --menu-background: #080808 !important;
  --menu-border-color: #363636 !important;
  --metadata-border-color: #333 !important;
  --metadata-divider-color: #333 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #4a4a4a !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #363636 !important;
  --modal-background: #000 !important;
  --modal-border-color: #4a4a4a !important;
  --nav-collapse-icon-color: #666 !important;
  --nav-collapse-icon-color-collapsed: #666 !important;
  --nav-heading-color-collapsed: #666 !important;
  --nav-tag-color: #666 !important;
  --orange: rgb(208, 135, 112) !important;
  --orange_x: 208,135,112 !important;
  --pdf-background: #000 !important;
  --pdf-page-background: #000 !important;
  --pdf-shadow: 0 0 0 1px #333 !important;
  --pdf-sidebar-background: #000 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #333 !important;
  --pill-border-color: #333 !important;
  --pill-border-color-hover: #363636 !important;
  --pill-color-remove: #666 !important;
  --prompt-background: #000 !important;
  --prompt-border-color: #4a4a4a !important;
  --purple: rgb(180, 142, 173) !important;
  --purple_x: 180,142,173 !important;
  --raised-background: color-mix(in srgb, #333 65%, transparent) linear-gradient(#333, color-mix(in srgb, #333 65%, transparent)) !important;
  --red: rgb(191, 97, 106) !important;
  --red_x: 191,97,106 !important;
  --ribbon-background: #080808 !important;
  --ribbon-background-collapsed: #000 !important;
  --search-result-background: #000 !important;
  --setting-items-background: #111 !important;
  --setting-items-border-color: #333 !important;
  --slider-thumb-border-color: #363636 !important;
  --slider-track-background: #333 !important;
  --status-bar-background: #080808 !important;
  --status-bar-border-color: #333 !important;
  --suggestion-background: #000 !important;
  --tab-background-active: #000 !important;
  --tab-container-background: #080808 !important;
  --tab-divider-color: #363636 !important;
  --tab-outline-color: #333 !important;
  --tab-switcher-background: #080808 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #080808, transparent) !important;
  --tab-text-color: #666 !important;
  --table-add-button-border-color: #333 !important;
  --table-border-color: #333 !important;
  --table-drag-handle-color: #666 !important;
  --table-header-border-color: #333 !important;
  --text-faint: #666 !important;
  --titlebar-background: #000 !important;
  --titlebar-background-focused: #111 !important;
  --titlebar-border-color: #333 !important;
  --yellow: rgb(235, 203, 139) !important;
  --yellow_x: 235,203,139 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(8, 8, 8);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(8, 8, 8);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(51, 51, 51);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(8, 8, 8);
  border-left-color: rgb(51, 51, 51);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
}`,
    lists: `body ol.overflow {
  background-color: rgb(0, 0, 0);
}

body ul.overflow {
  background-color: rgb(0, 0, 0);
}`,
    tables: `body td {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body th {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body pre > code, pre:has(> code) {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body pre:has(> code) {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    embeds: `body .file-embed {
  background-color: rgb(17, 17, 17);
}`,
    search: `body .search > .search-button {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(74, 74, 74);
  border-left-color: rgb(74, 74, 74);
  border-right-color: rgb(74, 74, 74);
  border-top-color: rgb(74, 74, 74);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(74, 74, 74);
  border-left-color: rgb(74, 74, 74);
  border-right-color: rgb(74, 74, 74);
  border-top-color: rgb(74, 74, 74);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(8, 8, 8);
}

body h1 {
  color: rgb(191, 97, 106);
}

body h2 {
  color: rgb(235, 203, 139);
}

body h2.page-title, h2.page-title a {
  color: rgb(191, 97, 106);
}

body h3 {
  color: rgb(163, 190, 140);
}

body h4 {
  color: rgb(180, 142, 173);
}

body h5 {
  color: rgb(143, 188, 187);
}

body h6 {
  color: rgb(129, 161, 193);
}

body hr {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    footer: `body footer {
  background-color: rgb(8, 8, 8);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    misc: `body .metadata {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body .navigation-progress {
  background-color: rgb(8, 8, 8);
}

body kbd {
  background-color: rgb(17, 17, 17);
}`,
  },
  light: {},
};
