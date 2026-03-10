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
  --background-modifier-border: #333;
  --background-modifier-border-focus: #4a4a4a;
  --background-modifier-border-hover: #363636;
  --background-modifier-form-field: #222;
  --background-modifier-form-field-hover: #222;
  --background-primary: #000;
  --background-primary-alt: #111;
  --background-secondary: #080808;
  --background-secondary-alt: #333;
  --bases-cards-background: #000;
  --bases-cards-cover-background: #111;
  --bases-cards-shadow: 0 0 0 1px #333;
  --bases-cards-shadow-hover: 0 0 0 1px #363636;
  --bases-embed-border-color: #333;
  --bases-table-border-color: #333;
  --bases-table-cell-background-active: #000;
  --bases-table-cell-background-disabled: #111;
  --bases-table-cell-shadow-active: 0 0 0 2px #4a4a4a;
  --bases-table-group-background: #111;
  --bases-table-header-background: #000;
  --bases-table-summary-background: #000;
  --blur-background: color-mix(in srgb, #333 65%, transparent) linear-gradient(#333, color-mix(in srgb, #333 65%, transparent));
  --canvas-background: #000;
  --canvas-card-label-color: #666;
  --canvas-dot-pattern: #333;
  --checkbox-border-color: #666;
  --checkbox-marker-color: #000;
  --code-background: #111;
  --code-border-color: #333;
  --code-comment: #666;
  --collapse-icon-color: #666;
  --color-base-00: #000;
  --color-base-05: #080808;
  --color-base-10: #111;
  --color-base-20: #1a1a1a;
  --color-base-25: #222;
  --color-base-30: #333;
  --color-base-35: #363636;
  --color-base-40: #4a4a4a;
  --color-base-50: #666;
  --color-base-60: #999
	--color-base-70: #bbb
	--color-base-100: #fff;
  --divider-color: #333;
  --dropdown-background: #333;
  --dropdown-background-hover: #363636;
  --embed-block-shadow-hover: 0 0 0 1px #333, inset 0 0 0 1px #333;
  --file-header-background: #000;
  --file-header-background-focused: #000;
  --flair-background: #333;
  --footnote-divider-color: #333;
  --footnote-id-color-no-occurrences: #666;
  --frost0: rgb(143, 188, 187);
  --frost0_x: 143,188,187;
  --frost2: rgb(129, 161, 193);
  --frost2_x: 129,161,193;
  --graph-line: #363636;
  --graph-node-unresolved: #666;
  --gray: var(--text-faint);
  --green: rgb(163, 190, 140);
  --green_x: 163,190,140;
  --h1-color: rgb(191, 97, 106);
  --h2-color: rgb(235, 203, 139);
  --h3-color: rgb(163, 190, 140);
  --h4-color: rgb(180, 142, 173);
  --h5-color: rgb(143, 188, 187);
  --h6-color: rgb(129, 161, 193);
  --heading-formatting: #666;
  --hr-color: #333;
  --inline-title-color: rgb(191, 97, 106);
  --input-date-separator: #666;
  --input-placeholder-color: #666;
  --interactive-hover: #363636;
  --interactive-normal: #333;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --list-marker-color: #666;
  --menu-background: #080808;
  --menu-border-color: #363636;
  --metadata-border-color: #333;
  --metadata-divider-color: #333;
  --metadata-property-box-shadow-focus: 0 0 0 2px #4a4a4a;
  --metadata-property-box-shadow-hover: 0 0 0 1px #363636;
  --modal-background: #000;
  --modal-border-color: #4a4a4a;
  --nav-collapse-icon-color: #666;
  --nav-collapse-icon-color-collapsed: #666;
  --nav-heading-color-collapsed: #666;
  --nav-tag-color: #666;
  --orange: rgb(208, 135, 112);
  --orange_x: 208,135,112;
  --pdf-background: #000;
  --pdf-page-background: #000;
  --pdf-shadow: 0 0 0 1px #333;
  --pdf-sidebar-background: #000;
  --pdf-thumbnail-shadow: 0 0 0 1px #333;
  --pill-border-color: #333;
  --pill-border-color-hover: #363636;
  --pill-color-remove: #666;
  --prompt-background: #000;
  --prompt-border-color: #4a4a4a;
  --purple: rgb(180, 142, 173);
  --purple_x: 180,142,173;
  --raised-background: color-mix(in srgb, #333 65%, transparent) linear-gradient(#333, color-mix(in srgb, #333 65%, transparent));
  --red: rgb(191, 97, 106);
  --red_x: 191,97,106;
  --ribbon-background: #080808;
  --ribbon-background-collapsed: #000;
  --search-result-background: #000;
  --setting-items-background: #111;
  --setting-items-border-color: #333;
  --slider-thumb-border-color: #363636;
  --slider-track-background: #333;
  --status-bar-background: #080808;
  --status-bar-border-color: #333;
  --suggestion-background: #000;
  --tab-background-active: #000;
  --tab-container-background: #080808;
  --tab-divider-color: #363636;
  --tab-outline-color: #333;
  --tab-switcher-background: #080808;
  --tab-switcher-menubar-background: linear-gradient(to top, #080808, transparent);
  --tab-text-color: #666;
  --table-add-button-border-color: #333;
  --table-border-color: #333;
  --table-drag-handle-color: #666;
  --table-header-border-color: #333;
  --text-faint: #666;
  --titlebar-background: #000;
  --titlebar-background-focused: #111;
  --titlebar-border-color: #333;
  --yellow: rgb(235, 203, 139);
  --yellow_x: 235,203,139;
  --quartz-icon-color: currentColor;
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
