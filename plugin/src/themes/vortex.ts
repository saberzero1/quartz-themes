import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vortex",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["rubik"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-brighter-10: color-mix(in srgb, rgb(138, 92, 245) 90%, #ffffff);
  --accent-brighter-30: color-mix(in srgb, rgb(138, 92, 245) 70%, #ffffff);
  --accent-brighter-50: color-mix(in srgb, rgb(138, 92, 245) 50%, #ffffff);
  --accent-brighter-70: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff);
  --accent-brighter-90: color-mix(in srgb, rgb(138, 92, 245) 10%, #ffffff);
  --accent-darker-10: color-mix(in srgb, rgb(138, 92, 245) 90%, #111111);
  --accent-darker-30: color-mix(in srgb, rgb(138, 92, 245) 70%, #111111);
  --accent-darker-50: color-mix(in srgb, rgb(138, 92, 245) 50%, #111111);
  --accent-darker-70: color-mix(in srgb, rgb(138, 92, 245) 30%, #111111);
  --accent-opacity-10: color-mix(in srgb, rgb(138, 92, 245) 10%, transparent);
  --accent-opacity-20: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent);
  --accent-opacity-30: color-mix(in srgb, rgb(138, 92, 245) 30%, transparent);
  --accent-opacity-40: color-mix(in srgb, rgb(138, 92, 245) 40%, transparent);
  --accent-opacity-5: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --accent-opacity-50: color-mix(in srgb, rgb(138, 92, 245) 50%, transparent);
  --accent-opacity-60: color-mix(in srgb, rgb(138, 92, 245) 60%, transparent);
  --accent-opacity-70: color-mix(in srgb, rgb(138, 92, 245) 70%, transparent);
  --accent-opacity-80: color-mix(in srgb, rgb(138, 92, 245) 80%, transparent);
  --accent-opacity-90: color-mix(in srgb, rgb(138, 92, 245) 90%, transparent);
  --alt-color: #ffffff;
  --background-modifier-border: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --background-primary: #111111;
  --background-primary-alt: #0d0b12;
  --background-secondary: #1a1a1a;
  --background-secondary-alt: #0d0b12;
  --bases-cards-background: #111111;
  --bases-cards-cover-background: #0d0b12;
  --bases-cards-shadow: 0 0 0 1px color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --bases-embed-border-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --bases-table-border-color: rgb(138, 92, 245);
  --bases-table-cell-background-active: #111111;
  --bases-table-cell-background-disabled: #0d0b12;
  --bases-table-group-background: #0d0b12;
  --bases-table-header-background: #111111;
  --bases-table-summary-background: #111111;
  --bodyFont: var(--font-interface);
  --callout-background-opacity: 0.2;
  --callout-color-blue: 50, 150, 255;
  --callout-color-green: 50, 200, 100;
  --callout-color-orange: 255, 150, 50;
  --callout-color-purple: 150, 100, 250;
  --callout-color-red: 255, 80, 80;
  --callout-color-yellow: 255, 204, 0;
  --canvas-background: #111111;
  --checkbox-border-color: color-mix(in srgb, rgb(138, 92, 245) 70%, #ffffff);
  --checkbox-border-color-hover: rgb(138, 92, 245);
  --checkbox-color-hover: color-mix(in srgb, rgb(138, 92, 245) 70%, #ffffff);
  --checkbox-marker-color: #111111;
  --code-background: #0d0b12;
  --code-border-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --codeFont: var(--font-interface);
  --color-hr: rgb(138, 92, 245);
  --color-italic: rgb(138, 92, 245);
  --default-font: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif;
  --divider-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --embed-block-shadow-hover: 0 0 0 1px color-mix(in srgb, rgb(138, 92, 245) 5%, transparent), inset 0 0 0 1px color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --file-header-background: #111111;
  --file-header-background-focused: #111111;
  --file-header-font: '??', '??', Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface: '??', '??', Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --gradient-bold: linear-gradient(135deg, #00eaff, #ff008c);
  --headerFont: var(--font-interface);
  --hr-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --hr-gradient: linear-gradient( to right,
    rgba(0, 255, 255, 0) 0%,
    #9400D3 25%,
    #1E90FF 50%,
    #9400D3 75%,
    rgba(0, 255, 255, 0) 100%
    );
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --list-bullet-radius: 100%;
  --list-marker-color: rgb(138, 92, 245);
  --menu-background: #1a1a1a;
  --metadata-border-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --metadata-divider-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --metadata-input-font: '??', '??', Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font: '??', '??', Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-background: #111111;
  --pdf-background: #111111;
  --pdf-page-background: #111111;
  --pdf-shadow: 0 0 0 1px color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --pdf-sidebar-background: #111111;
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --pill-border-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --prompt-background: #111111;
  --ribbon-background: #1a1a1a;
  --ribbon-background-collapsed: #111111;
  --scrollbar-active-thumb-bg: color-mix(in srgb, rgb(138, 92, 245) 80%, transparent);
  --search-result-background: #111111;
  --setting-items-background: #0d0b12;
  --setting-items-border-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --slider-track-background: color-mix(in srgb, rgb(138, 92, 245) 40%, transparent);
  --status-bar-background: #1a1a1a;
  --status-bar-border-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --sub-accent: #f4569d;
  --sub-accent-60: color-mix(in srgb, #f4569d 60%, transparent);
  --suggestion-background: #111111;
  --tab-background-active: #111111;
  --tab-container-background: #1a1a1a;
  --tab-outline-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --tab-switcher-background: #1a1a1a;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1a1a, transparent);
  --table-add-button-border-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --table-border-color: rgb(138, 92, 245);
  --table-header-border-color: rgb(138, 92, 245);
  --tag-background: color-mix(in srgb, rgb(138, 92, 245) 10%, transparent);
  --tag-background-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, transparent);
  --tag-color: rgb(138, 92, 245);
  --tag-color-hover: color-mix(in srgb, rgb(138, 92, 245) 70%, #ffffff);
  --tag-radius: 5px;
  --text-title-h1: #00e5ff;
  --text-title-h2: #ffca28;
  --text-title-h3: #ff5d68;
  --text-title-h4: #d500f9;
  --text-title-h5: #2ECC71;
  --text-title-h6: #db3eb1;
  --theme-color: rgb(138, 92, 245);
  --titleFont: var(--font-interface);
  --titlebar-background: #1a1a1a;
  --titlebar-background-focused: #0d0b12;
  --titlebar-border-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --vault-profile-color-hover: rgb(138, 92, 245);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 26, 26);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(17, 17, 17);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 26, 26);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 26, 26);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

body div#quartz-root {
  background-color: rgb(17, 17, 17);
}`,
    typography: `body .page article p > b, b {
  color: rgba(0, 0, 0, 0);
  font-weight: 700;
  outline: rgba(0, 0, 0, 0) none 0px;
  text-decoration: rgba(0, 0, 0, 0);
  text-decoration-color: rgba(0, 0, 0, 0);
}

body .page article p > em, em {
  color: color(srgb 0.586288 0.42472 0.96328);
  font-family: Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif;
  outline: color(srgb 0.586288 0.42472 0.96328) none 0px;
  text-decoration: color(srgb 0.586288 0.42472 0.96328);
  text-decoration-color: color(srgb 0.586288 0.42472 0.96328);
}

body .page article p > i, i {
  color: color(srgb 0.586288 0.42472 0.96328);
  font-family: Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif;
  outline: color(srgb 0.586288 0.42472 0.96328) none 0px;
  text-decoration: color(srgb 0.586288 0.42472 0.96328);
  text-decoration-color: color(srgb 0.586288 0.42472 0.96328);
}

body .page article p > strong, strong {
  color: rgba(0, 0, 0, 0);
  font-weight: 700;
  outline: rgba(0, 0, 0, 0) none 0px;
  text-decoration: rgba(0, 0, 0, 0);
  text-decoration-color: rgba(0, 0, 0, 0);
}

body p {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
  transition: background 0.35s ease-in-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 255, 255);
  font-weight: 700;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body a.internal.broken {
  color: rgb(255, 255, 255);
  font-weight: 700;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    lists: `body ol.overflow {
  background-color: rgb(17, 17, 17);
}

body ul.overflow {
  background-color: rgb(17, 17, 17);
}`,
    tables: `body td {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

body th {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}`,
    code: `body code {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 4.8px;
  border-bottom-right-radius: 4.8px;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 4.8px;
  border-top-right-radius: 4.8px;
  color: rgb(138, 92, 245);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

body pre > code, pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

body pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}`,
    embeds: `body .file-embed {
  background-color: rgb(13, 11, 18);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: color(srgb 0.678224 0.55256 0.97144);
  border-left-color: color(srgb 0.678224 0.55256 0.97144);
  border-right-color: color(srgb 0.678224 0.55256 0.97144);
  border-top-color: color(srgb 0.678224 0.55256 0.97144);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(150, 100, 250);
  border-left-color: rgb(150, 100, 250);
  border-right-color: rgb(150, 100, 250);
  border-top-color: rgb(150, 100, 250);
}

body .callout[data-callout="abstract"] {
  background-color: rgba(83, 223, 221, 0.2);
}

body .callout[data-callout="bug"] {
  --callout-color: 255, 80, 80;
  background-color: rgba(255, 80, 80, 0.2);
  border-bottom-color: rgba(255, 80, 80, 0.25);
  border-left-color: rgba(255, 80, 80, 0.25);
  border-right-color: rgba(255, 80, 80, 0.25);
  border-top-color: rgba(255, 80, 80, 0.25);
}

body .callout[data-callout="danger"] {
  background-color: rgba(251, 70, 76, 0.2);
}

body .callout[data-callout="example"] {
  background-color: rgba(168, 130, 255, 0.2);
}

body .callout[data-callout="failure"] {
  background-color: rgba(251, 70, 76, 0.2);
}

body .callout[data-callout="info"] {
  --callout-color: 50, 150, 255;
  background-color: rgba(50, 150, 255, 0.2);
  border-bottom-color: rgba(50, 150, 255, 0.25);
  border-left-color: rgba(50, 150, 255, 0.25);
  border-right-color: rgba(50, 150, 255, 0.25);
  border-top-color: rgba(50, 150, 255, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 150, 100, 250;
  background-color: rgba(150, 100, 250, 0.2);
  border-bottom-color: rgba(150, 100, 250, 0.25);
  border-left-color: rgba(150, 100, 250, 0.25);
  border-right-color: rgba(150, 100, 250, 0.25);
  border-top-color: rgba(150, 100, 250, 0.25);
}

body .callout[data-callout="question"] {
  background-color: rgba(233, 151, 63, 0.2);
}

body .callout[data-callout="quote"] {
  --callout-color: 50, 150, 255;
  background-color: rgba(50, 150, 255, 0.2);
  border-bottom-color: rgba(50, 150, 255, 0.25);
  border-left-color: rgba(50, 150, 255, 0.25);
  border-right-color: rgba(50, 150, 255, 0.25);
  border-top-color: rgba(50, 150, 255, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 50, 200, 100;
  background-color: rgba(50, 200, 100, 0.2);
  border-bottom-color: rgba(50, 200, 100, 0.25);
  border-left-color: rgba(50, 200, 100, 0.25);
  border-right-color: rgba(50, 200, 100, 0.25);
  border-top-color: rgba(50, 200, 100, 0.25);
}

body .callout[data-callout="tip"] {
  background-color: rgba(83, 223, 221, 0.2);
}

body .callout[data-callout="todo"] {
  background-color: rgba(2, 122, 255, 0.2);
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 204, 0;
  background-color: rgba(255, 204, 0, 0.2);
  border-bottom-color: rgba(255, 204, 0, 0.25);
  border-left-color: rgba(255, 204, 0, 0.25);
  border-right-color: rgba(255, 204, 0, 0.25);
  border-top-color: rgba(255, 204, 0, 0.25);
}`,
    search: `body .search > .search-button {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(17, 17, 17);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 26, 26);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(138, 92, 245);
}

body h1 {
  color: rgb(0, 229, 255);
  text-shadow: rgb(0, 229, 255) 0px 0px 17px;
}

body h2 {
  color: rgb(255, 202, 40);
  text-shadow: rgb(255, 202, 40) 0px 0px 13px;
}

body h3 {
  color: rgb(255, 93, 104);
  text-shadow: rgb(255, 93, 104) 0px 0px 11px;
}

body h4 {
  color: rgb(213, 0, 249);
  text-shadow: rgb(213, 0, 249) 0px 0px 9px;
}

body h5 {
  color: rgb(46, 204, 113);
  text-shadow: rgb(46, 204, 113) 0px 0px 9px;
}

body h6 {
  color: rgb(219, 62, 177);
  text-shadow: rgb(219, 62, 177) 0px 0px 9px;
}

body hr {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}`,
    scrollbars: `body .callout {
  --callout-color: 150, 100, 250;
  border-bottom-color: rgba(150, 100, 250, 0.25);
  border-left-color: rgba(150, 100, 250, 0.25);
  border-right-color: rgba(150, 100, 250, 0.25);
  border-top-color: rgba(150, 100, 250, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-corner {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-track {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.678224 0.55256 0.97144);
  border-left-color: color(srgb 0.678224 0.55256 0.97144);
  border-right-color: color(srgb 0.678224 0.55256 0.97144);
  border-top-color: color(srgb 0.678224 0.55256 0.97144);
  color: color(srgb 0.678224 0.55256 0.97144);
}`,
    footer: `body footer {
  background-color: rgb(26, 26, 26);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    darkmode: `body .darkmode {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

body .darkmode svg {
  color: rgb(138, 92, 245);
  stroke: rgb(138, 92, 245);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

body .navigation-progress {
  background-color: rgb(26, 26, 26);
}

body .page-header h2.page-title {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(13, 11, 18);
}`,
  },
  light: {
    base: `:root:root {
  --accent-brighter-10: color-mix(in srgb, rgb(138, 92, 245) 90%, #ffffff);
  --accent-brighter-30: color-mix(in srgb, rgb(138, 92, 245) 70%, #ffffff);
  --accent-brighter-50: color-mix(in srgb, rgb(138, 92, 245) 50%, #ffffff);
  --accent-brighter-70: color-mix(in srgb, rgb(138, 92, 245) 30%, #ffffff);
  --accent-brighter-90: color-mix(in srgb, rgb(138, 92, 245) 10%, #ffffff);
  --accent-darker-10: color-mix(in srgb, rgb(138, 92, 245) 90%, #111111);
  --accent-darker-30: color-mix(in srgb, rgb(138, 92, 245) 70%, #111111);
  --accent-darker-50: color-mix(in srgb, rgb(138, 92, 245) 50%, #111111);
  --accent-darker-70: color-mix(in srgb, rgb(138, 92, 245) 30%, #111111);
  --accent-opacity-10: color-mix(in srgb, rgb(138, 92, 245) 10%, transparent);
  --accent-opacity-20: color-mix(in srgb, rgb(138, 92, 245) 20%, transparent);
  --accent-opacity-30: color-mix(in srgb, rgb(138, 92, 245) 30%, transparent);
  --accent-opacity-40: color-mix(in srgb, rgb(138, 92, 245) 40%, transparent);
  --accent-opacity-5: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --accent-opacity-50: color-mix(in srgb, rgb(138, 92, 245) 50%, transparent);
  --accent-opacity-60: color-mix(in srgb, rgb(138, 92, 245) 60%, transparent);
  --accent-opacity-70: color-mix(in srgb, rgb(138, 92, 245) 70%, transparent);
  --accent-opacity-80: color-mix(in srgb, rgb(138, 92, 245) 80%, transparent);
  --accent-opacity-90: color-mix(in srgb, rgb(138, 92, 245) 90%, transparent);
  --alt-color: #111111;
  --background-modifier-border: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --background-primary-alt: #ffffff;
  --background-secondary: #eeeeee;
  --background-secondary-alt: #eeeeee;
  --bases-cards-cover-background: #ffffff;
  --bases-cards-shadow: 0 0 0 1px color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --bases-embed-border-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --bases-table-border-color: rgb(138, 92, 245);
  --bases-table-cell-background-disabled: #ffffff;
  --bases-table-group-background: #ffffff;
  --bodyFont: var(--font-interface);
  --callout-background-opacity: 0.2;
  --callout-color-blue: 50, 150, 255;
  --callout-color-green: 50, 200, 100;
  --callout-color-orange: 255, 150, 50;
  --callout-color-purple: 150, 100, 250;
  --callout-color-red: 255, 80, 80;
  --callout-color-yellow: 255, 204, 0;
  --checkbox-border-color: color-mix(in srgb, rgb(138, 92, 245) 70%, #ffffff);
  --checkbox-border-color-hover: rgb(138, 92, 245);
  --checkbox-color: rgb(138, 92, 245);
  --checkbox-color-hover: color-mix(in srgb, rgb(138, 92, 245) 70%, #ffffff);
  --code-background: #ffffff;
  --code-border-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --codeFont: var(--font-interface);
  --color-hr: rgb(138, 92, 245);
  --color-italic: rgb(138, 92, 245);
  --default-font: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif;
  --divider-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --embed-block-shadow-hover: 0 0 0 1px color-mix(in srgb, rgb(138, 92, 245) 5%, transparent), inset 0 0 0 1px color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --file-header-font: '??', '??', Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface: '??', '??', Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --gradient-bold: linear-gradient(135deg, #00eaff, #ff008c);
  --headerFont: var(--font-interface);
  --hr-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --hr-gradient: linear-gradient( to right,
    rgba(0, 255, 255, 0) 0%,
    #9400D3 25%,
    #1E90FF 50%,
    #9400D3 75%,
    rgba(0, 255, 255, 0) 100%
    );
  --light: var(--background-primary-alt);
  --lightgray: var(--background-secondary);
  --list-bullet-radius: 100%;
  --list-marker-color: rgb(138, 92, 245);
  --menu-background: #eeeeee;
  --metadata-border-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --metadata-divider-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --metadata-input-font: '??', '??', Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font: '??', '??', Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --pill-border-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --ribbon-background: #eeeeee;
  --scrollbar-active-thumb-bg: color-mix(in srgb, rgb(138, 92, 245) 80%, transparent);
  --setting-items-background: #ffffff;
  --setting-items-border-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --slider-track-background: color-mix(in srgb, rgb(138, 92, 245) 40%, transparent);
  --status-bar-background: #eeeeee;
  --status-bar-border-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --sub-accent: #f4569d;
  --sub-accent-60: color-mix(in srgb, #f4569d 60%, transparent);
  --tab-container-background: #eeeeee;
  --tab-outline-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --tab-switcher-background: #eeeeee;
  --tab-switcher-menubar-background: linear-gradient(to top, #eeeeee, transparent);
  --table-add-button-border-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --table-border-color: rgb(138, 92, 245);
  --table-header-border-color: rgb(138, 92, 245);
  --tag-background: color-mix(in srgb, rgb(138, 92, 245) 10%, transparent);
  --tag-background-hover: color-mix(in srgb, rgb(138, 92, 245) 30%, transparent);
  --tag-color-hover: color-mix(in srgb, rgb(138, 92, 245) 70%, #ffffff);
  --tag-radius: 5px;
  --text-title-h1: #00e5ff;
  --text-title-h2: #ffca28;
  --text-title-h3: #ff5d68;
  --text-title-h4: #d500f9;
  --text-title-h5: #2ECC71;
  --text-title-h6: #db3eb1;
  --theme-color: rgb(138, 92, 245);
  --titleFont: var(--font-interface);
  --titlebar-background: #eeeeee;
  --titlebar-background-focused: #eeeeee;
  --titlebar-border-color: color-mix(in srgb, rgb(138, 92, 245) 5%, transparent);
  --vault-profile-color-hover: rgb(138, 92, 245);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 238, 238);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(238, 238, 238);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(238, 238, 238);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}`,
    typography: `body .page article p > b, b {
  color: rgba(0, 0, 0, 0);
  font-weight: 700;
  outline: rgba(0, 0, 0, 0) none 0px;
  text-decoration: rgba(0, 0, 0, 0);
  text-decoration-color: rgba(0, 0, 0, 0);
}

body .page article p > em, em {
  color: color(srgb 0.586288 0.42472 0.96328);
  font-family: Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif;
  outline: color(srgb 0.586288 0.42472 0.96328) none 0px;
  text-decoration: color(srgb 0.586288 0.42472 0.96328);
  text-decoration-color: color(srgb 0.586288 0.42472 0.96328);
}

body .page article p > i, i {
  color: color(srgb 0.586288 0.42472 0.96328);
  font-family: Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif;
  outline: color(srgb 0.586288 0.42472 0.96328) none 0px;
  text-decoration: color(srgb 0.586288 0.42472 0.96328);
  text-decoration-color: color(srgb 0.586288 0.42472 0.96328);
}

body .page article p > strong, strong {
  color: rgba(0, 0, 0, 0);
  font-weight: 700;
  outline: rgba(0, 0, 0, 0) none 0px;
  text-decoration: rgba(0, 0, 0, 0);
  text-decoration-color: rgba(0, 0, 0, 0);
}

body p {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(17, 17, 17);
  outline: rgb(17, 17, 17) none 0px;
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
  transition: background 0.35s ease-in-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(17, 17, 17);
  font-weight: 700;
  outline: rgb(17, 17, 17) none 0px;
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

body a.internal.broken {
  color: rgb(17, 17, 17);
  font-weight: 700;
  outline: rgb(17, 17, 17) none 0px;
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}`,
    tables: `body td {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

body th {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}`,
    code: `body code {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 4.8px;
  border-bottom-right-radius: 4.8px;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 4.8px;
  border-top-right-radius: 4.8px;
  color: rgb(138, 92, 245);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

body pre > code, pre:has(> code) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

body pre:has(> code) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}`,
    embeds: `body .file-embed {
  background-color: rgb(255, 255, 255);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: color(srgb 0.678224 0.55256 0.97144);
  border-left-color: color(srgb 0.678224 0.55256 0.97144);
  border-right-color: color(srgb 0.678224 0.55256 0.97144);
  border-top-color: color(srgb 0.678224 0.55256 0.97144);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(150, 100, 250);
  border-left-color: rgb(150, 100, 250);
  border-right-color: rgb(150, 100, 250);
  border-top-color: rgb(150, 100, 250);
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 191, 188, 0.2);
}

body .callout[data-callout="bug"] {
  --callout-color: 255, 80, 80;
  background-color: rgba(255, 80, 80, 0.2);
  border-bottom-color: rgba(255, 80, 80, 0.25);
  border-left-color: rgba(255, 80, 80, 0.25);
  border-right-color: rgba(255, 80, 80, 0.25);
  border-top-color: rgba(255, 80, 80, 0.25);
}

body .callout[data-callout="danger"] {
  background-color: rgba(233, 49, 71, 0.2);
}

body .callout[data-callout="example"] {
  background-color: rgba(120, 82, 238, 0.2);
}

body .callout[data-callout="failure"] {
  background-color: rgba(233, 49, 71, 0.2);
}

body .callout[data-callout="info"] {
  --callout-color: 50, 150, 255;
  background-color: rgba(50, 150, 255, 0.2);
  border-bottom-color: rgba(50, 150, 255, 0.25);
  border-left-color: rgba(50, 150, 255, 0.25);
  border-right-color: rgba(50, 150, 255, 0.25);
  border-top-color: rgba(50, 150, 255, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 150, 100, 250;
  background-color: rgba(150, 100, 250, 0.2);
  border-bottom-color: rgba(150, 100, 250, 0.25);
  border-left-color: rgba(150, 100, 250, 0.25);
  border-right-color: rgba(150, 100, 250, 0.25);
  border-top-color: rgba(150, 100, 250, 0.25);
}

body .callout[data-callout="question"] {
  background-color: rgba(236, 117, 0, 0.2);
}

body .callout[data-callout="quote"] {
  --callout-color: 50, 150, 255;
  background-color: rgba(50, 150, 255, 0.2);
  border-bottom-color: rgba(50, 150, 255, 0.25);
  border-left-color: rgba(50, 150, 255, 0.25);
  border-right-color: rgba(50, 150, 255, 0.25);
  border-top-color: rgba(50, 150, 255, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 50, 200, 100;
  background-color: rgba(50, 200, 100, 0.2);
  border-bottom-color: rgba(50, 200, 100, 0.25);
  border-left-color: rgba(50, 200, 100, 0.25);
  border-right-color: rgba(50, 200, 100, 0.25);
  border-top-color: rgba(50, 200, 100, 0.25);
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 191, 188, 0.2);
}

body .callout[data-callout="todo"] {
  background-color: rgba(8, 109, 221, 0.2);
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 204, 0;
  background-color: rgba(255, 204, 0, 0.2);
  border-bottom-color: rgba(255, 204, 0, 0.25);
  border-left-color: rgba(255, 204, 0, 0.25);
  border-right-color: rgba(255, 204, 0, 0.25);
  border-top-color: rgba(255, 204, 0, 0.25);
}`,
    search: `body .search > .search-button {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(238, 238, 238);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h1 {
  color: rgb(0, 229, 255);
  text-shadow: rgb(0, 229, 255) 0px 0px 17px;
}

body h2 {
  color: rgb(255, 202, 40);
  text-shadow: rgb(255, 202, 40) 0px 0px 13px;
}

body h3 {
  color: rgb(255, 93, 104);
  text-shadow: rgb(255, 93, 104) 0px 0px 11px;
}

body h4 {
  color: rgb(213, 0, 249);
  text-shadow: rgb(213, 0, 249) 0px 0px 9px;
}

body h5 {
  color: rgb(46, 204, 113);
  text-shadow: rgb(46, 204, 113) 0px 0px 9px;
}

body h6 {
  color: rgb(219, 62, 177);
  text-shadow: rgb(219, 62, 177) 0px 0px 9px;
}

body hr {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}`,
    scrollbars: `body .callout {
  --callout-color: 150, 100, 250;
  border-bottom-color: rgba(150, 100, 250, 0.25);
  border-left-color: rgba(150, 100, 250, 0.25);
  border-right-color: rgba(150, 100, 250, 0.25);
  border-top-color: rgba(150, 100, 250, 0.25);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: color(srgb 0.678224 0.55256 0.97144);
  border-left-color: color(srgb 0.678224 0.55256 0.97144);
  border-right-color: color(srgb 0.678224 0.55256 0.97144);
  border-top-color: color(srgb 0.678224 0.55256 0.97144);
  color: color(srgb 0.678224 0.55256 0.97144);
}`,
    footer: `body footer {
  background-color: rgb(238, 238, 238);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    darkmode: `body .darkmode {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

body .darkmode svg {
  color: rgb(138, 92, 245);
  stroke: rgb(138, 92, 245);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

body .navigation-progress {
  background-color: rgb(238, 238, 238);
}

body .page-header h2.page-title {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(255, 255, 255);
}`,
  },
};
