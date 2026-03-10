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
  --background-modifier-border: transparent;
  --background-primary: rgb(16, 14, 21);
  --background-secondary: rgb(27, 21, 40);
  --bases-cards-background: rgb(16, 14, 21);
  --bases-cards-shadow: 0 0 0 1px transparent;
  --bases-embed-border-color: transparent;
  --bases-embed-border-radius: 100px;
  --bases-table-border-color: transparent;
  --bases-table-cell-background-active: rgb(16, 14, 21);
  --bases-table-container-border-radius: 100px;
  --bases-table-header-background: rgb(16, 14, 21);
  --bases-table-summary-background: rgb(16, 14, 21);
  --button-radius: 100px;
  --callout-radius: 100px;
  --canvas-background: rgb(16, 14, 21);
  --canvas-controls-radius: 100px;
  --checkbox-marker-color: rgb(16, 14, 21);
  --checkbox-radius: 100px;
  --clickable-icon-radius: 100px;
  --code-background: rgb(15, 0, 51);
  --code-border-color: transparent;
  --code-normal: rgb(184, 153, 255);
  --code-radius: 100px;
  --colorBackgroundPrimary: rgb(16, 14, 21);
  --colorBackgroundSecondary: rgb(27, 21, 40);
  --colorOnPrimary: rgb(27, 21, 40);
  --colorPrimary: rgb(184, 153, 255);
  --colorPrimaryContainer: rgb(15, 0, 51);
  --colorPrimaryContainerVariant: rgb(31, 0, 102);
  --colorPrimaryContainerVariantHover: rgb(15, 0, 51);
  --divider-color: transparent;
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent;
  --file-header-background: rgb(16, 14, 21);
  --file-header-background-focused: rgb(16, 14, 21);
  --footnote-divider-color: transparent;
  --footnote-radius: 100px;
  --highlight: var(--text-highlight-bg);
  --hr-color: transparent;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-external-color: rgb(184, 153, 255);
  --link-external-color-hover: rgb(184, 153, 255);
  --menu-background: rgb(27, 21, 40);
  --metadata-border-color: transparent;
  --metadata-divider-color: transparent;
  --modal-background: rgb(16, 14, 21);
  --nav-item-background-active: rgb(31, 0, 102);
  --nav-item-background-hover: rgb(15, 0, 51);
  --nav-item-color: white;
  --nav-item-radius: 100px;
  --nav-tag-radius: 100px;
  --pdf-background: rgb(16, 14, 21);
  --pdf-page-background: rgb(16, 14, 21);
  --pdf-shadow: 0 0 0 1px transparent;
  --pdf-sidebar-background: rgb(16, 14, 21);
  --pdf-thumbnail-shadow: 0 0 0 1px transparent;
  --pill-border-color: transparent;
  --prompt-background: rgb(16, 14, 21);
  --radius-s: 100px;
  --ribbon-background: rgb(27, 21, 40);
  --ribbon-background-collapsed: rgb(16, 14, 21);
  --search-result-background: rgb(16, 14, 21);
  --setting-items-border-color: transparent;
  --slider-track-background: transparent;
  --status-bar-background: rgb(27, 21, 40);
  --status-bar-border-color: transparent;
  --suggestion-background: rgb(16, 14, 21);
  --tab-background-active: rgb(31, 0, 102);
  --tab-container-background: rgb(27, 21, 40);
  --tab-outline-color: transparent;
  --tab-radius: 100px;
  --tab-switcher-background: rgb(27, 21, 40);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(27, 21, 40), transparent);
  --table-add-button-border-color: transparent;
  --table-border-color: transparent;
  --table-drag-handle-color-active: rgb(27, 21, 40);
  --table-header-border-color: transparent;
  --tag-background: rgb(31, 0, 102);
  --tag-background-hover: rgb(31, 0, 102);
  --tag-color: rgb(184, 153, 255);
  --text-highlight-bg: rgb(31, 0, 102);
  --text-on-accent: rgb(27, 21, 40);
  --text-on-accent-inverted: rgb(27, 21, 40);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(27, 21, 40);
  --titlebar-background-focused: rgb(27, 21, 40);
  --titlebar-border-color: transparent;
  --toggle-thumb-color: rgb(27, 21, 40);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(27, 21, 40);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(16, 14, 21);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(27, 21, 40);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(27, 21, 40);
  border-left-color: rgba(0, 0, 0, 0);
}

body div#quartz-root {
  background-color: rgb(16, 14, 21);
}`,
    typography: `body .text-highlight {
  background-color: rgb(31, 0, 102);
}`,
    links: `body a.external, footer a {
  color: rgb(184, 153, 255);
  outline: rgb(184, 153, 255) none 0px;
  text-decoration: underline rgb(184, 153, 255);
  text-decoration-color: rgb(184, 153, 255);
}`,
    lists: `body ol.overflow {
  background-color: rgb(16, 14, 21);
}

body ul.overflow {
  background-color: rgb(16, 14, 21);
}`,
    tables: `body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    checkboxes: `body input[type=checkbox] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body .search > .search-container > .search-space {
  background-color: rgb(16, 14, 21);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 21, 40);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(31, 0, 102);
}

body a.internal.tag-link::before {
  color: rgb(184, 153, 255);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body ::-webkit-scrollbar {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}

body ::-webkit-scrollbar-corner {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}

body ::-webkit-scrollbar-track {
  background: rgb(16, 14, 21) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 14, 21);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(31, 0, 102);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    footer: `body footer {
  background-color: rgb(27, 21, 40);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    misc: `body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body .navigation-progress {
  background-color: rgb(27, 21, 40);
}

body kbd {
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
  --background-modifier-border: transparent;
  --background-primary: rgb(244, 240, 255);
  --background-secondary: hsla(
		258,
		88%,
		66%,
		2%
	);
  --bases-cards-background: rgb(244, 240, 255);
  --bases-cards-shadow: 0 0 0 1px transparent;
  --bases-embed-border-color: transparent;
  --bases-embed-border-radius: 100px;
  --bases-table-border-color: transparent;
  --bases-table-cell-background-active: rgb(244, 240, 255);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(47, 0, 158);
  --bases-table-container-border-radius: 100px;
  --bases-table-header-background: rgb(244, 240, 255);
  --bases-table-summary-background: rgb(244, 240, 255);
  --blockquote-border-color: rgb(47, 0, 158);
  --blur-background: color-mix(in srgb, rgb(244, 240, 255) 65%, transparent) linear-gradient(rgb(244, 240, 255), color-mix(in srgb, rgb(244, 240, 255) 65%, transparent));
  --button-radius: 100px;
  --callout-radius: 100px;
  --canvas-background: rgb(244, 240, 255);
  --canvas-controls-radius: 100px;
  --checkbox-color: rgb(47, 0, 158);
  --checkbox-color-hover: rgb(47, 0, 158);
  --checkbox-marker-color: rgb(244, 240, 255);
  --checkbox-radius: 100px;
  --clickable-icon-radius: 100px;
  --code-background: rgb(230, 219, 255);
  --code-border-color: transparent;
  --code-normal: rgb(47, 0, 158);
  --code-radius: 100px;
  --colorBackgroundPrimary: rgb(244, 240, 255);
  --colorBackgroundSecondary: hsla(
		258,
		88%,
		66%,
		2%
	);
  --colorOnPrimary: white;
  --colorPrimary: rgb(47, 0, 158);
  --colorPrimaryContainer: rgb(230, 219, 255);
  --colorPrimaryContainerVariant: rgb(201, 179, 255);
  --colorPrimaryContainerVariantHover: rgb(223, 209, 255);
  --divider-color: transparent;
  --divider-color-hover: rgb(47, 0, 158);
  --dropdown-background: rgb(219, 204, 255);
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent;
  --embed-border-start: 2px solid rgb(47, 0, 158);
  --file-header-background: rgb(244, 240, 255);
  --file-header-background-focused: rgb(244, 240, 255);
  --flair-background: rgb(219, 204, 255);
  --footnote-divider-color: transparent;
  --footnote-radius: 100px;
  --highlight: var(--text-highlight-bg);
  --hr-color: transparent;
  --interactive-accent: rgb(47, 0, 158);
  --interactive-accent-hover: rgb(47, 0, 158);
  --interactive-normal: rgb(219, 204, 255);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-external-color: rgb(47, 0, 158);
  --link-external-color-hover: rgb(47, 0, 158);
  --menu-background: hsla(
		258,
		88%,
		66%,
		2%
	);
  --metadata-border-color: transparent;
  --metadata-divider-color: transparent;
  --modal-background: rgb(244, 240, 255);
  --nav-item-background-active: rgb(201, 179, 255);
  --nav-item-background-hover: rgb(223, 209, 255);
  --nav-item-color: black;
  --nav-item-radius: 100px;
  --nav-tag-radius: 100px;
  --pdf-background: rgb(244, 240, 255);
  --pdf-page-background: rgb(244, 240, 255);
  --pdf-sidebar-background: rgb(244, 240, 255);
  --pill-border-color: transparent;
  --prompt-background: rgb(244, 240, 255);
  --radius-s: 100px;
  --raised-background: color-mix(in srgb, rgb(244, 240, 255) 65%, transparent) linear-gradient(rgb(244, 240, 255), color-mix(in srgb, rgb(244, 240, 255) 65%, transparent));
  --ribbon-background: hsla(
		258,
		88%,
		66%,
		2%
	);
  --ribbon-background-collapsed: rgb(244, 240, 255);
  --search-result-background: rgb(244, 240, 255);
  --secondary: var(--interactive-accent);
  --setting-items-border-color: transparent;
  --slider-track-background: transparent;
  --status-bar-background: hsla(
		258,
		88%,
		66%,
		2%
	);
  --status-bar-border-color: transparent;
  --suggestion-background: rgb(244, 240, 255);
  --tab-background-active: rgb(201, 179, 255);
  --tab-container-background: hsla(
		258,
		88%,
		66%,
		2%
	);
  --tab-outline-color: transparent;
  --tab-radius: 100px;
  --tab-switcher-background: hsla(
		258,
		88%,
		66%,
		2%
	);
  --tab-switcher-menubar-background: linear-gradient(to top, hsla(
		258,
		88%,
		66%,
		2%
	), transparent);
  --table-add-button-border-color: transparent;
  --table-border-color: transparent;
  --table-drag-handle-background-active: rgb(47, 0, 158);
  --table-header-border-color: transparent;
  --table-selection-border-color: rgb(47, 0, 158);
  --tag-background: rgb(201, 179, 255);
  --tag-background-hover: rgb(201, 179, 255);
  --tag-color: rgb(47, 0, 158);
  --tertiary: var(--interactive-accent-hover);
  --text-highlight-bg: rgb(201, 179, 255);
  --text-on-accent-inverted: white;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: hsla(
		258,
		88%,
		66%,
		2%
	);
  --titlebar-background-focused: hsla(
		258,
		88%,
		66%,
		2%
	);
  --titlebar-border-color: transparent;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(138, 92, 245, 0.02);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(244, 240, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(138, 92, 245, 0.02);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(138, 92, 245, 0.02);
  border-left-color: rgba(0, 0, 0, 0);
}

body div#quartz-root {
  background-color: rgb(244, 240, 255);
}`,
    typography: `body .text-highlight {
  background-color: rgb(201, 179, 255);
}`,
    links: `body a.external, footer a {
  color: rgb(47, 0, 158);
  outline: rgb(47, 0, 158) none 0px;
  text-decoration: underline rgb(47, 0, 158);
  text-decoration-color: rgb(47, 0, 158);
}`,
    lists: `body ol.overflow {
  background-color: rgb(244, 240, 255);
}

body ul.overflow {
  background-color: rgb(244, 240, 255);
}`,
    tables: `body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    embeds: `body .transclude {
  border-left-color: rgb(47, 0, 158);
}

body .transclude-inner {
  border-left-color: rgb(47, 0, 158);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body .search > .search-container > .search-space {
  background-color: rgb(244, 240, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(138, 92, 245, 0.02);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(201, 179, 255);
}

body a.internal.tag-link::before {
  color: rgb(47, 0, 158);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body ::-webkit-scrollbar {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}

body ::-webkit-scrollbar-corner {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}

body ::-webkit-scrollbar-track {
  background: rgb(244, 240, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 240, 255);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(201, 179, 255);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    footer: `body footer {
  background-color: rgba(138, 92, 245, 0.02);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}`,
    misc: `body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body .navigation-progress {
  background-color: rgba(138, 92, 245, 0.02);
}

body kbd {
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
