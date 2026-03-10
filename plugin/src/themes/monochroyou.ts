import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "monochroyou",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: transparent !important;
  --background-primary: rgb(16, 14, 21) !important;
  --background-secondary: rgb(27, 21, 40) !important;
  --bases-cards-background: rgb(16, 14, 21) !important;
  --bases-cards-shadow: 0 0 0 1px transparent !important;
  --bases-embed-border-color: transparent !important;
  --bases-embed-border-radius: 100px !important;
  --bases-table-border-color: transparent !important;
  --bases-table-cell-background-active: rgb(16, 14, 21) !important;
  --bases-table-container-border-radius: 100px !important;
  --bases-table-header-background: rgb(16, 14, 21) !important;
  --bases-table-summary-background: rgb(16, 14, 21) !important;
  --button-radius: 100px !important;
  --callout-radius: 100px;
  --canvas-background: rgb(16, 14, 21) !important;
  --canvas-controls-radius: 100px !important;
  --checkbox-marker-color: rgb(16, 14, 21) !important;
  --checkbox-radius: 100px !important;
  --clickable-icon-radius: 100px !important;
  --code-background: rgb(15, 0, 51) !important;
  --code-border-color: transparent !important;
  --code-normal: rgb(184, 153, 255) !important;
  --code-radius: 100px !important;
  --colorBackgroundPrimary: rgb(16, 14, 21) !important;
  --colorBackgroundSecondary: rgb(27, 21, 40) !important;
  --colorOnPrimary: rgb(27, 21, 40) !important;
  --colorPrimary: rgb(184, 153, 255) !important;
  --colorPrimaryContainer: rgb(15, 0, 51) !important;
  --colorPrimaryContainerVariant: rgb(31, 0, 102) !important;
  --colorPrimaryContainerVariantHover: rgb(15, 0, 51) !important;
  --divider-color: transparent !important;
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent !important;
  --file-header-background: rgb(16, 14, 21) !important;
  --file-header-background-focused: rgb(16, 14, 21) !important;
  --footnote-divider-color: transparent !important;
  --footnote-radius: 100px !important;
  --highlight: rgb(31, 0, 102) !important;
  --hr-color: transparent !important;
  --light: rgb(16, 14, 21) !important;
  --lightgray: rgb(27, 21, 40) !important;
  --link-external-color: rgb(184, 153, 255) !important;
  --link-external-color-hover: rgb(184, 153, 255) !important;
  --menu-background: rgb(27, 21, 40) !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --modal-background: rgb(16, 14, 21) !important;
  --nav-item-background-active: rgb(31, 0, 102) !important;
  --nav-item-background-hover: rgb(15, 0, 51) !important;
  --nav-item-color: white !important;
  --nav-item-radius: 100px !important;
  --nav-tag-radius: 100px !important;
  --pdf-background: rgb(16, 14, 21) !important;
  --pdf-page-background: rgb(16, 14, 21) !important;
  --pdf-shadow: 0 0 0 1px transparent !important;
  --pdf-sidebar-background: rgb(16, 14, 21) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px transparent !important;
  --pill-border-color: transparent !important;
  --prompt-background: rgb(16, 14, 21) !important;
  --radius-s: 100px !important;
  --ribbon-background: rgb(27, 21, 40) !important;
  --ribbon-background-collapsed: rgb(16, 14, 21) !important;
  --search-result-background: rgb(16, 14, 21) !important;
  --setting-items-border-color: transparent !important;
  --slider-track-background: transparent !important;
  --status-bar-background: rgb(27, 21, 40) !important;
  --status-bar-border-color: transparent !important;
  --suggestion-background: rgb(16, 14, 21) !important;
  --tab-background-active: rgb(31, 0, 102) !important;
  --tab-container-background: rgb(27, 21, 40) !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 100px !important;
  --tab-switcher-background: rgb(27, 21, 40) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(27, 21, 40), transparent) !important;
  --table-add-button-border-color: transparent !important;
  --table-border-color: transparent !important;
  --table-drag-handle-color-active: rgb(27, 21, 40) !important;
  --table-header-border-color: transparent !important;
  --tag-background: rgb(31, 0, 102) !important;
  --tag-background-hover: rgb(31, 0, 102) !important;
  --tag-color: rgb(184, 153, 255) !important;
  --text-highlight-bg: rgb(31, 0, 102) !important;
  --text-on-accent: rgb(27, 21, 40) !important;
  --text-on-accent-inverted: rgb(27, 21, 40) !important;
  --textHighlight: rgb(31, 0, 102) !important;
  --titlebar-background: rgb(27, 21, 40) !important;
  --titlebar-background-focused: rgb(27, 21, 40) !important;
  --titlebar-border-color: transparent !important;
  --toggle-thumb-color: rgb(27, 21, 40) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(27, 21, 40);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(27, 21, 40);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(27, 21, 40);
  border-left-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(16, 14, 21);
}`,
    typography: `html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(31, 0, 102);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(184, 153, 255);
  outline: rgb(184, 153, 255) none 0px;
  text-decoration: underline rgb(184, 153, 255);
  text-decoration-color: rgb(184, 153, 255);
}`,
    tables: `html[saved-theme="dark"] body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(184, 153, 255);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgb(184, 153, 255);
  border-right-color: rgb(184, 153, 255);
  border-top-color: rgb(184, 153, 255);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  color: rgb(184, 153, 255);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(15, 0, 51);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(15, 0, 51);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(15, 0, 51);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(15, 0, 51);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 21, 40);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(31, 0, 102);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(184, 153, 255);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(31, 0, 102);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(27, 21, 40);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    misc: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(27, 21, 40);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(15, 0, 51);
  border-bottom-color: rgb(184, 153, 255);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgb(184, 153, 255);
  border-right-color: rgb(184, 153, 255);
  border-top-color: rgb(184, 153, 255);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  color: rgb(184, 153, 255);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: transparent !important;
  --background-primary: rgb(244, 240, 255) !important;
  --background-secondary: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --bases-cards-background: rgb(244, 240, 255) !important;
  --bases-cards-shadow: 0 0 0 1px transparent !important;
  --bases-embed-border-color: transparent !important;
  --bases-embed-border-radius: 100px !important;
  --bases-table-border-color: transparent !important;
  --bases-table-cell-background-active: rgb(244, 240, 255) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(47, 0, 158) !important;
  --bases-table-container-border-radius: 100px !important;
  --bases-table-header-background: rgb(244, 240, 255) !important;
  --bases-table-summary-background: rgb(244, 240, 255) !important;
  --blockquote-border-color: rgb(47, 0, 158) !important;
  --blur-background: color-mix(in srgb, rgb(244, 240, 255) 65%, transparent) linear-gradient(rgb(244, 240, 255), color-mix(in srgb, rgb(244, 240, 255) 65%, transparent)) !important;
  --button-radius: 100px !important;
  --callout-radius: 100px;
  --canvas-background: rgb(244, 240, 255) !important;
  --canvas-controls-radius: 100px !important;
  --checkbox-color: rgb(47, 0, 158) !important;
  --checkbox-color-hover: rgb(47, 0, 158) !important;
  --checkbox-marker-color: rgb(244, 240, 255) !important;
  --checkbox-radius: 100px !important;
  --clickable-icon-radius: 100px !important;
  --code-background: rgb(230, 219, 255) !important;
  --code-border-color: transparent !important;
  --code-normal: rgb(47, 0, 158) !important;
  --code-radius: 100px !important;
  --colorBackgroundPrimary: rgb(244, 240, 255) !important;
  --colorBackgroundSecondary: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --colorOnPrimary: white !important;
  --colorPrimary: rgb(47, 0, 158) !important;
  --colorPrimaryContainer: rgb(230, 219, 255) !important;
  --colorPrimaryContainerVariant: rgb(201, 179, 255) !important;
  --colorPrimaryContainerVariantHover: rgb(223, 209, 255) !important;
  --divider-color: transparent !important;
  --divider-color-hover: rgb(47, 0, 158) !important;
  --dropdown-background: rgb(219, 204, 255) !important;
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent !important;
  --embed-border-start: 2px solid rgb(47, 0, 158) !important;
  --file-header-background: rgb(244, 240, 255) !important;
  --file-header-background-focused: rgb(244, 240, 255) !important;
  --flair-background: rgb(219, 204, 255) !important;
  --footnote-divider-color: transparent !important;
  --footnote-radius: 100px !important;
  --highlight: rgb(201, 179, 255) !important;
  --hr-color: transparent !important;
  --interactive-accent: rgb(47, 0, 158) !important;
  --interactive-accent-hover: rgb(47, 0, 158) !important;
  --interactive-normal: rgb(219, 204, 255) !important;
  --light: rgb(244, 240, 255) !important;
  --lightgray: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --link-external-color: rgb(47, 0, 158) !important;
  --link-external-color-hover: rgb(47, 0, 158) !important;
  --menu-background: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --metadata-border-color: transparent !important;
  --metadata-divider-color: transparent !important;
  --modal-background: rgb(244, 240, 255) !important;
  --nav-item-background-active: rgb(201, 179, 255) !important;
  --nav-item-background-hover: rgb(223, 209, 255) !important;
  --nav-item-color: black !important;
  --nav-item-radius: 100px !important;
  --nav-tag-radius: 100px !important;
  --pdf-background: rgb(244, 240, 255) !important;
  --pdf-page-background: rgb(244, 240, 255) !important;
  --pdf-sidebar-background: rgb(244, 240, 255) !important;
  --pill-border-color: transparent !important;
  --prompt-background: rgb(244, 240, 255) !important;
  --radius-s: 100px !important;
  --raised-background: color-mix(in srgb, rgb(244, 240, 255) 65%, transparent) linear-gradient(rgb(244, 240, 255), color-mix(in srgb, rgb(244, 240, 255) 65%, transparent)) !important;
  --ribbon-background: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --ribbon-background-collapsed: rgb(244, 240, 255) !important;
  --search-result-background: rgb(244, 240, 255) !important;
  --secondary: rgb(47, 0, 158) !important;
  --setting-items-border-color: transparent !important;
  --slider-track-background: transparent !important;
  --status-bar-background: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --status-bar-border-color: transparent !important;
  --suggestion-background: rgb(244, 240, 255) !important;
  --tab-background-active: rgb(201, 179, 255) !important;
  --tab-container-background: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 100px !important;
  --tab-switcher-background: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsla(
		258,
		88%,
		66%,
		2%
	), transparent) !important;
  --table-add-button-border-color: transparent !important;
  --table-border-color: transparent !important;
  --table-drag-handle-background-active: rgb(47, 0, 158) !important;
  --table-header-border-color: transparent !important;
  --table-selection-border-color: rgb(47, 0, 158) !important;
  --tag-background: rgb(201, 179, 255) !important;
  --tag-background-hover: rgb(201, 179, 255) !important;
  --tag-color: rgb(47, 0, 158) !important;
  --tertiary: rgb(47, 0, 158) !important;
  --text-highlight-bg: rgb(201, 179, 255) !important;
  --text-on-accent-inverted: white !important;
  --textHighlight: rgb(201, 179, 255) !important;
  --titlebar-background: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --titlebar-background-focused: hsla(
		258,
		88%,
		66%,
		2%
	) !important;
  --titlebar-border-color: transparent !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(138, 92, 245, 0.02);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(138, 92, 245, 0.02);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(138, 92, 245, 0.02);
  border-left-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(244, 240, 255);
}`,
    typography: `html[saved-theme="light"] body .text-highlight {
  background-color: rgb(201, 179, 255);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(47, 0, 158);
  outline: rgb(47, 0, 158) none 0px;
  text-decoration: underline rgb(47, 0, 158);
  text-decoration-color: rgb(47, 0, 158);
}`,
    tables: `html[saved-theme="light"] body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(47, 0, 158);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgb(47, 0, 158);
  border-right-color: rgb(47, 0, 158);
  border-top-color: rgb(47, 0, 158);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  color: rgb(47, 0, 158);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(230, 219, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(230, 219, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(230, 219, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(230, 219, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    embeds: `html[saved-theme="light"] body .transclude {
  border-left-color: rgb(47, 0, 158);
}

html[saved-theme="light"] body .transclude-inner {
  border-left-color: rgb(47, 0, 158);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(138, 92, 245, 0.02);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(201, 179, 255);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(47, 0, 158);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(201, 179, 255);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    misc: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(138, 92, 245, 0.02);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(230, 219, 255);
  border-bottom-color: rgb(47, 0, 158);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgb(47, 0, 158);
  border-right-color: rgb(47, 0, 158);
  border-top-color: rgb(47, 0, 158);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
  color: rgb(47, 0, 158);
}`,
  },
};
