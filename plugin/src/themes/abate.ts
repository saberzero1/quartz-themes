import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "abate",
    modes: ["light"],
    variations: [],
    fonts: ["noto-sans"],
  },
  dark: {},
  light: {
    base: `:root:root {
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --background-modifier-error: #b81e19;
  --background-modifier-error-hover: #b81e19;
  --background-modifier-error-rgb: 184, 30, 25;
  --background-modifier-hover: rgba(40, 40, 40, 0.08);
  --background-modifier-success: #05903d;
  --background-modifier-success-rgb: 5, 144, 61;
  --background-primary: #fdf6e3;
  --background-primary-alt: #fdf6e3;
  --background-secondary: #fdf6e3;
  --bases-cards-background: #fdf6e3;
  --bases-cards-cover-background: #fdf6e3;
  --bases-table-cell-background-active: #fdf6e3;
  --bases-table-cell-background-disabled: #fdf6e3;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-group-background: #fdf6e3;
  --bases-table-header-background: #fdf6e3;
  --bases-table-header-background-hover: rgba(40, 40, 40, 0.08);
  --bases-table-summary-background: #fdf6e3;
  --bases-table-summary-background-hover: rgba(40, 40, 40, 0.08);
  --bg-light: #fdf6e3;
  --blur-background: color-mix(in srgb, #fdf6e3 65%, transparent) linear-gradient(#fdf6e3, color-mix(in srgb, #fdf6e3 65%, transparent));
  --callout-border-opacity: 0.5;
  --callout-border-width: 1px;
  --callout-bug: 184, 30, 25;
  --callout-error: 184, 30, 25;
  --callout-example: 102, 69, 204;
  --callout-fail: 184, 30, 25;
  --callout-question: 237, 96, 2;
  --callout-success: 5, 144, 61;
  --callout-warning: 237, 96, 2;
  --canvas-background: #fdf6e3;
  --canvas-color-1: 184, 30, 25;
  --canvas-color-2: 237, 96, 2;
  --canvas-color-3: 250, 189, 47;
  --canvas-color-4: 5, 144, 61;
  --canvas-color-6: 102, 69, 204;
  --checkbox-marker-color: #fdf6e3;
  --code-background: #fdf6e3;
  --code-bracket-background: rgba(40, 40, 40, 0.08);
  --code-function: #fabd2f;
  --code-important: #ed6002;
  --code-operator: #b81e19;
  --code-string: #05903d;
  --code-tag: #b81e19;
  --code-value: #6645cc;
  --color-accent-hsl: 258,
		88%,
		66%;
  --color-green: #05903d;
  --color-green-rgb: 5, 144, 61;
  --color-orange: #ed6002;
  --color-orange-rgb: 237, 96, 2;
  --color-purple: #6645cc;
  --color-purple-rgb: 102, 69, 204;
  --color-red: #b81e19;
  --color-red-rgb: 184, 30, 25;
  --color-yellow: #fabd2f;
  --color-yellow-rgb: 250, 189, 47;
  --file-header-background: #fdf6e3;
  --file-header-background-focused: #fdf6e3;
  --footnote-input-background-active: rgba(40, 40, 40, 0.08);
  --graph-node-attachment: #fabd2f;
  --graph-node-tag: #05903d;
  --h1-color: #0f4761;
  --h1-line-height: 1.5em;
  --h1-size: 2em;
  --h2-color: #12597a;
  --h2-line-height: 1.5em;
  --h2-size: 1.6em;
  --h2-weight: 600;
  --h3-color: #166c94;
  --h3-line-height: 1.5em;
  --h3-size: 1.35em;
  --h3-weight: 400;
  --h4-color: #1a7ead;
  --h4-line-height: 1.5em;
  --h4-size: 1.2em;
  --h4-weight: 400;
  --h5-color: #1e91c7;
  --h5-line-height: 1.5em;
  --h5-size: 1.2em;
  --h5-weight: 300;
  --h6-color: #22a4e0;
  --h6-line-height: 1.5em;
  --h6-size: 1.1em;
  --h6-weight: 300;
  --heading-color: #0f4761
		
		--font-text-theme: Open Sans serif;
  --indentation-guide-color: rgba(40, 40, 40, 0.12);
  --indentation-guide-color-active: rgba(40, 40, 40, 0.3);
  --indentation-guide-width: 2px;
  --inline-title-color: #000000;
  --inline-title-line-height: 1.5em;
  --inline-title-size: 2.5em;
  --inline-title-weight: 900;
  --input-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12),
		0 2px 3px 0 rgba(0, 0, 0, 0.05),
		0 1px 1.5px 0 rgba(0, 0, 0, 0.03),
		0 1px 2px 0 rgba(0, 0, 0, 0.04),
		0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17),
		0 2px 3px 0 rgba(0, 0, 0, 0.1),
		0 1px 1.5px 0 rgba(0, 0, 0, 0.03),
		0 1px 2px 0 rgba(0, 0, 0, 0.04),
		0 0 0 0 transparent;
  --interactive-accent-hsl: 258,
		88%,
		66%;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --list-indent: 2.25em;
  --list-indent-editing: 1em;
  --list-spacing: 0.2em;
  --menu-background: #fdf6e3;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 15px 30px rgba(0, 0, 0, 0.07);
  --metadata-input-background-active: rgba(40, 40, 40, 0.08);
  --metadata-label-background-active: rgba(40, 40, 40, 0.08);
  --metadata-property-background-active: rgba(40, 40, 40, 0.08);
  --modal-background: #fdf6e3;
  --mono-rgb-100: 40, 40, 40;
  --nav-indentation-guide-color: rgba(40, 40, 40, 0.12);
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: rgba(40, 40, 40, 0.15);
  --nav-item-background-hover: rgba(40, 40, 40, 0.08);
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --pdf-background: #fdf6e3;
  --pdf-page-background: #fdf6e3;
  --pdf-sidebar-background: #fdf6e3;
  --prompt-background: #fdf6e3;
  --raised-background: color-mix(in srgb, #fdf6e3 65%, transparent) linear-gradient(#fdf6e3, color-mix(in srgb, #fdf6e3 65%, transparent));
  --ribbon-background: #fdf6e3;
  --ribbon-background-collapsed: #fdf6e3;
  --scrollbar-active-thumb-bg: rgba(40, 40, 40, 0.2);
  --scrollbar-bg: rgba(40, 40, 40, 0.05);
  --scrollbar-thumb-bg: rgba(40, 40, 40, 0.1);
  --search-result-background: #fdf6e3;
  --setting-items-background: #fdf6e3;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
		0px 6.3px 24.7px rgba(0, 0, 0, 0.112),
		0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
		0px 3.4px 6.7px rgba(0, 0, 0, 0.042),
		0px 15px 30px rgba(0, 0, 0, 0.07);
  --status-bar-background: #fdf6e3;
  --suggestion-background: #fdf6e3;
  --swatch-shadow: inset 0 0 0 1px rgba(40, 40, 40, 0.15);
  --sync-avatar-color-1: #b81e19;
  --sync-avatar-color-2: #ed6002;
  --sync-avatar-color-3: #fabd2f;
  --sync-avatar-color-4: #05903d;
  --sync-avatar-color-7: #6645cc;
  --tab-background-active: #fdf6e3;
  --tab-container-background: #fdf6e3;
  --tab-switcher-background: #fdf6e3;
  --tab-switcher-menubar-background: linear-gradient(to top, #fdf6e3, transparent);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(40, 40, 40, 0.05);
  --table-selection: rgba(138, 92, 245, 0.1);
  --tag-background: rgba(138, 92, 245, 0.1);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --text-error: #b81e19;
  --text-selection: rgba(138, 92, 245, 0.2);
  --text-success: #05903d;
  --text-warning: #ed6002;
  --titlebar-background: #fdf6e3;
  --titlebar-background-focused: #fff5de;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(253, 246, 227);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(253, 246, 227);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(253, 246, 227);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(253, 246, 227);
}

body div#quartz-root {
  background-color: rgb(253, 246, 227);
}`,
    lists: `body ol.overflow {
  background-color: rgb(253, 246, 227);
}

body ul.overflow {
  background-color: rgb(253, 246, 227);
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(253, 246, 227);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(253, 246, 227);
}

body pre > code > [data-line] {
  border-left-color: rgb(250, 189, 47);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(250, 189, 47);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(250, 189, 47);
  border-left-color: rgb(250, 189, 47);
  border-right-color: rgb(250, 189, 47);
  border-top-color: rgb(250, 189, 47);
}

body pre > code, pre:has(> code) {
  background-color: rgb(253, 246, 227);
}

body pre:has(> code) {
  background-color: rgb(253, 246, 227);
}`,
    embeds: `body .file-embed {
  background-color: rgb(253, 246, 227);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-color: rgba(0, 191, 188, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(0, 191, 188, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 184, 30, 25;
  background-color: rgba(184, 30, 25, 0.1);
  border-bottom-color: rgba(184, 30, 25, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(184, 30, 25, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(184, 30, 25, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(184, 30, 25, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 184, 30, 25;
  background-color: rgba(184, 30, 25, 0.1);
  border-bottom-color: rgba(184, 30, 25, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(184, 30, 25, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(184, 30, 25, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(184, 30, 25, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 102, 69, 204;
  background-color: rgba(102, 69, 204, 0.1);
  border-bottom-color: rgba(102, 69, 204, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(102, 69, 204, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(102, 69, 204, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(102, 69, 204, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 184, 30, 25;
  background-color: rgba(184, 30, 25, 0.1);
  border-bottom-color: rgba(184, 30, 25, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(184, 30, 25, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(184, 30, 25, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(184, 30, 25, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  border-bottom-color: rgba(8, 109, 221, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  border-bottom-color: rgba(8, 109, 221, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 237, 96, 2;
  background-color: rgba(237, 96, 2, 0.1);
  border-bottom-color: rgba(237, 96, 2, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(237, 96, 2, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(237, 96, 2, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(237, 96, 2, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgba(158, 158, 158, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 5, 144, 61;
  background-color: rgba(5, 144, 61, 0.1);
  border-bottom-color: rgba(5, 144, 61, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(5, 144, 61, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(5, 144, 61, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(5, 144, 61, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  border-bottom-color: rgba(0, 191, 188, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(0, 191, 188, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  border-bottom-color: rgba(8, 109, 221, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.5);
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 237, 96, 2;
  background-color: rgba(237, 96, 2, 0.1);
  border-bottom-color: rgba(237, 96, 2, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(237, 96, 2, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(237, 96, 2, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(237, 96, 2, 0.5);
  border-top-width: 1px;
}`,
    search: `body .search > .search-container > .search-space {
  background-color: rgb(253, 246, 227);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(40, 40, 40, 0.08);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(253, 246, 227);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(40, 40, 40, 0.08);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(40, 40, 40, 0.08);
}

body h1 {
  color: rgb(15, 71, 97);
}

body h2 {
  color: rgb(18, 89, 122);
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 0, 0);
}

body h3 {
  color: rgb(22, 108, 148);
}

body h4 {
  color: rgb(26, 126, 173);
}

body h5 {
  color: rgb(30, 145, 199);
}

body h6 {
  color: rgb(34, 164, 224);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(8, 109, 221, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.5);
  border-top-width: 1px;
}

body ::-webkit-scrollbar {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

body ::-webkit-scrollbar-corner {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

body ::-webkit-scrollbar-track {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(40, 40, 40, 0.15);
}`,
    footer: `body footer {
  background-color: rgb(253, 246, 227);
}`,
    misc: `body .navigation-progress {
  background-color: rgb(253, 246, 227);
}

body kbd {
  background-color: rgb(253, 246, 227);
}`,
  },
};
