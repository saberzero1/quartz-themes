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
  --accent-brighter-10: color-mix(in srgb, hsl(258, 88%, 66%) 90%, #ffffff) !important;
  --accent-brighter-30: color-mix(in srgb, hsl(258, 88%, 66%) 70%, #ffffff) !important;
  --accent-brighter-50: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #ffffff) !important;
  --accent-brighter-70: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff) !important;
  --accent-brighter-90: color-mix(in srgb, hsl(258, 88%, 66%) 10%, #ffffff) !important;
  --accent-darker-10: color-mix(in srgb, hsl(258, 88%, 66%) 90%, #111111) !important;
  --accent-darker-30: color-mix(in srgb, hsl(258, 88%, 66%) 70%, #111111) !important;
  --accent-darker-50: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #111111) !important;
  --accent-darker-70: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #111111) !important;
  --accent-opacity-10: color-mix(in srgb, hsl(258, 88%, 66%) 10%, transparent) !important;
  --accent-opacity-20: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent) !important;
  --accent-opacity-30: color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent) !important;
  --accent-opacity-40: color-mix(in srgb, hsl(258, 88%, 66%) 40%, transparent) !important;
  --accent-opacity-5: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --accent-opacity-50: color-mix(in srgb, hsl(258, 88%, 66%) 50%, transparent) !important;
  --accent-opacity-60: color-mix(in srgb, hsl(258, 88%, 66%) 60%, transparent) !important;
  --accent-opacity-70: color-mix(in srgb, hsl(258, 88%, 66%) 70%, transparent) !important;
  --accent-opacity-80: color-mix(in srgb, hsl(258, 88%, 66%) 80%, transparent) !important;
  --accent-opacity-90: color-mix(in srgb, hsl(258, 88%, 66%) 90%, transparent) !important;
  --alt-color: #ffffff !important;
  --background-modifier-border: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --background-primary: #111111 !important;
  --background-primary-alt: #0d0b12 !important;
  --background-secondary: #1a1a1a !important;
  --background-secondary-alt: #0d0b12 !important;
  --bases-cards-background: #111111 !important;
  --bases-cards-cover-background: #0d0b12 !important;
  --bases-cards-shadow: 0 0 0 1px color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --bases-embed-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --bases-table-border-color: hsl(258, 88%, 66%) !important;
  --bases-table-cell-background-active: #111111 !important;
  --bases-table-cell-background-disabled: #0d0b12 !important;
  --bases-table-group-background: #0d0b12 !important;
  --bases-table-header-background: #111111 !important;
  --bases-table-summary-background: #111111 !important;
  --bodyFont: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --callout-background-opacity: 0.2;
  --callout-color-blue: 50, 150, 255;
  --callout-color-green: 50, 200, 100;
  --callout-color-orange: 255, 150, 50;
  --callout-color-purple: 150, 100, 250;
  --callout-color-red: 255, 80, 80;
  --callout-color-yellow: 255, 204, 0;
  --canvas-background: #111111 !important;
  --checkbox-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 70%, #ffffff) !important;
  --checkbox-border-color-hover: hsl(258, 88%, 66%) !important;
  --checkbox-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 70%, #ffffff) !important;
  --checkbox-marker-color: #111111 !important;
  --code-background: #0d0b12 !important;
  --code-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --codeFont: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --color-hr: hsl(258, 88%, 66%) !important;
  --color-italic: hsl(258, 88%, 66%) !important;
  --default-font: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif !important;
  --divider-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --embed-block-shadow-hover: 0 0 0 1px color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent), inset 0 0 0 1px color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --file-header-background: #111111 !important;
  --file-header-background-focused: #111111 !important;
  --file-header-font: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --gradient-bold: linear-gradient(135deg, #00eaff, #ff008c) !important;
  --headerFont: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --hr-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --hr-gradient: linear-gradient( to right,
    rgba(0, 255, 255, 0) 0%,
    #9400D3 25%,
    #1E90FF 50%,
    #9400D3 75%,
    rgba(0, 255, 255, 0) 100%
    ) !important;
  --light: #111111 !important;
  --lightgray: #1a1a1a !important;
  --list-bullet-radius: 100% !important;
  --list-marker-color: hsl(258, 88%, 66%) !important;
  --menu-background: #1a1a1a !important;
  --metadata-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --metadata-divider-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --metadata-input-font: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --modal-background: #111111 !important;
  --pdf-background: #111111 !important;
  --pdf-page-background: #111111 !important;
  --pdf-shadow: 0 0 0 1px color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --pdf-sidebar-background: #111111 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --pill-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --prompt-background: #111111 !important;
  --ribbon-background: #1a1a1a !important;
  --ribbon-background-collapsed: #111111 !important;
  --scrollbar-active-thumb-bg: color-mix(in srgb, hsl(258, 88%, 66%) 80%, transparent) !important;
  --search-result-background: #111111 !important;
  --setting-items-background: #0d0b12 !important;
  --setting-items-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --slider-track-background: color-mix(in srgb, hsl(258, 88%, 66%) 40%, transparent) !important;
  --status-bar-background: #1a1a1a !important;
  --status-bar-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --sub-accent: #f4569d !important;
  --sub-accent-60: color-mix(in srgb, #f4569d 60%, transparent) !important;
  --suggestion-background: #111111 !important;
  --tab-background-active: #111111 !important;
  --tab-container-background: #1a1a1a !important;
  --tab-outline-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --tab-switcher-background: #1a1a1a !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1a1a, transparent) !important;
  --table-add-button-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --table-border-color: hsl(258, 88%, 66%) !important;
  --table-header-border-color: hsl(258, 88%, 66%) !important;
  --tag-background: color-mix(in srgb, hsl(258, 88%, 66%) 10%, transparent) !important;
  --tag-background-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent) !important;
  --tag-color: hsl(258, 88%, 66%) !important;
  --tag-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 70%, #ffffff) !important;
  --tag-radius: 5px !important;
  --text-title-h1: #00e5ff !important;
  --text-title-h2: #ffca28 !important;
  --text-title-h3: #ff5d68 !important;
  --text-title-h4: #d500f9 !important;
  --text-title-h5: #2ECC71 !important;
  --text-title-h6: #db3eb1 !important;
  --theme-color: hsl(258, 88%, 66%) !important;
  --titleFont: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #1a1a1a !important;
  --titlebar-background-focused: #0d0b12 !important;
  --titlebar-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --vault-profile-color-hover: hsl(258, 88%, 66%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body .note-properties {
  border-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-radius: 5px;
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 26, 26);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(17, 17, 17);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgba(0, 0, 0, 0);
  font-weight: 700;
  outline: rgba(0, 0, 0, 0) none 0px;
  text-decoration-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: color(srgb 0.586288 0.42472 0.96328);
  font-family: Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif;
  outline: color(srgb 0.586288 0.42472 0.96328) none 0px;
  text-decoration-color: color(srgb 0.586288 0.42472 0.96328);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: color(srgb 0.586288 0.42472 0.96328);
  font-family: Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif;
  outline: color(srgb 0.586288 0.42472 0.96328) none 0px;
  text-decoration-color: color(srgb 0.586288 0.42472 0.96328);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgba(0, 0, 0, 0);
  font-weight: 700;
  outline: rgba(0, 0, 0, 0) none 0px;
  text-decoration-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.5);
  color: rgb(255, 255, 255);
  outline: color(srgb 0.54032 0.3608 0.9592 / 0.8) solid 2px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: color(srgb 0.678224 0.55256 0.97144);
}

html[saved-theme="dark"] body p {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-name: unhoverFill;
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
  transition: background 0.35s ease-in-out;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-name: unhoverFill;
  color: rgb(255, 255, 255);
  font-weight: 700;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal.broken {
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-name: unhoverFill;
  color: rgb(255, 255, 255);
  font-weight: 700;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}`,
    tables: `html[saved-theme="dark"] body td {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}`,
    code: `html[saved-theme="dark"] body code {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(13, 11, 18);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: color(srgb 0.678224 0.55256 0.97144);
  border-left-color: color(srgb 0.678224 0.55256 0.97144);
  border-right-color: color(srgb 0.678224 0.55256 0.97144);
  border-top-color: color(srgb 0.678224 0.55256 0.97144);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(138, 92, 245);
  content: " ";
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(50, 150, 255);
  border-left-color: rgb(50, 150, 255);
  border-right-color: rgb(50, 150, 255);
  border-top-color: rgb(50, 150, 255);
  color: rgb(50, 150, 255);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(50, 150, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(83, 223, 221, 0.2);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 255, 80, 80;
  background-color: rgba(255, 80, 80, 0.2);
  border-bottom-color: rgba(255, 80, 80, 0.25);
  border-left-color: rgba(255, 80, 80, 0.25);
  border-right-color: rgba(255, 80, 80, 0.25);
  border-top-color: rgba(255, 80, 80, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.2);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(168, 130, 255, 0.2);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.2);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 50, 150, 255;
  background-color: rgba(50, 150, 255, 0.2);
  border-bottom-color: rgba(50, 150, 255, 0.25);
  border-left-color: rgba(50, 150, 255, 0.25);
  border-right-color: rgba(50, 150, 255, 0.25);
  border-top-color: rgba(50, 150, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 150, 100, 250;
  background-color: rgba(150, 100, 250, 0.2);
  border-bottom-color: rgba(150, 100, 250, 0.25);
  border-left-color: rgba(150, 100, 250, 0.25);
  border-right-color: rgba(150, 100, 250, 0.25);
  border-top-color: rgba(150, 100, 250, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(233, 151, 63, 0.2);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 50, 150, 255;
  background-color: rgba(50, 150, 255, 0.2);
  border-bottom-color: rgba(50, 150, 255, 0.25);
  border-left-color: rgba(50, 150, 255, 0.25);
  border-right-color: rgba(50, 150, 255, 0.25);
  border-top-color: rgba(50, 150, 255, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 50, 200, 100;
  background-color: rgba(50, 200, 100, 0.2);
  border-bottom-color: rgba(50, 200, 100, 0.25);
  border-left-color: rgba(50, 200, 100, 0.25);
  border-right-color: rgba(50, 200, 100, 0.25);
  border-top-color: rgba(50, 200, 100, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(83, 223, 221, 0.2);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(2, 122, 255, 0.2);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 255, 204, 0;
  background-color: rgba(255, 204, 0, 0.2);
  border-bottom-color: rgba(255, 204, 0, 0.25);
  border-left-color: rgba(255, 204, 0, 0.25);
  border-right-color: rgba(255, 204, 0, 0.25);
  border-top-color: rgba(255, 204, 0, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4'/%3E%3Cpath d='M2 6h4'/%3E%3Cpath d='M2 10h4'/%3E%3Cpath d='M2 14h4'/%3E%3Cpath d='M2 18h4'/%3E%3Cpath d='M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="analysis"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z'/%3E%3Cpath d='M21.21 15.89A10 10 0 1 1 8 2.83'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bookmark"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="calendar"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 2v4'/%3E%3Cpath d='M16 2v4'/%3E%3Crect width='18' height='18' x='3' y='4' rx='2'/%3E%3Cpath d='M3 10h18'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="celebration"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5.8 11.3 2 22l10.7-3.79'/%3E%3Cpath d='M4 3h.01'/%3E%3Cpath d='M22 8h.01'/%3E%3Cpath d='M15 2h.01'/%3E%3Cpath d='M22 20h.01'/%3E%3Cpath d='m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10'/%3E%3Cpath d='m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17'/%3E%3Cpath d='m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7'/%3E%3Cpath d='M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="code"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 18 6-6-6-6'/%3E%3Cpath d='m8 6-6 6 6 6'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="gift"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 7v14'/%3E%3Cpath d='M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8'/%3E%3Cpath d='M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5'/%3E%3Crect x='3' y='7' width='18' height='4' rx='1'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="goal"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Ccircle cx='12' cy='12' r='6'/%3E%3Ccircle cx='12' cy='12' r='2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="highlight"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m9 11-6 6v3h9l3-3'/%3E%3Cpath d='m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="idea"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="inspiration"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2v8'/%3E%3Cpath d='m4.93 10.93 1.41 1.41'/%3E%3Cpath d='M2 18h2'/%3E%3Cpath d='M20 18h2'/%3E%3Cpath d='m19.07 10.93-1.41 1.41'/%3E%3Cpath d='M22 22H2'/%3E%3Cpath d='m8 6 4-4 4 4'/%3E%3Cpath d='M16 18a4 4 0 0 0-8 0'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4'/%3E%3Cpath d='M2 6h4'/%3E%3Cpath d='M2 10h4'/%3E%3Cpath d='M2 14h4'/%3E%3Cpath d='M2 18h4'/%3E%3Cpath d='M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="puzzle"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="reminder"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10.268 21a2 2 0 0 0 3.464 0'/%3E%3Cpath d='M22 8c0-2.3-.8-4.3-2-6'/%3E%3Cpath d='M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326'/%3E%3Cpath d='M4 2C2.8 3.7 2 5.7 2 8'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978'/%3E%3Cpath d='M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978'/%3E%3Cpath d='M18 9h1.5a1 1 0 0 0 0-5H18'/%3E%3Cpath d='M4 22h16'/%3E%3Cpath d='M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z'/%3E%3Cpath d='M6 9H4.5a1 1 0 0 1 0-5H6'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="task"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.801 10A10 10 0 1 1 17 3.335'/%3E%3Cpath d='m9 11 3 3L22 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="team"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/%3E%3Cpath d='M16 3.128a4 4 0 0 1 0 7.744'/%3E%3Cpath d='M22 21v-2a4 4 0 0 0-3-3.87'/%3E%3Ccircle cx='9' cy='7' r='4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 16h.01'/%3E%3Cpath d='M12 8v4'/%3E%3Cpath d='M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body h1 {
  color: rgb(0, 229, 255);
  text-shadow: rgb(0, 229, 255) 0px 0px 17px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(255, 202, 40);
  text-shadow: rgb(255, 202, 40) 0px 0px 13px;
}

html[saved-theme="dark"] body h3 {
  color: rgb(255, 93, 104);
  text-shadow: rgb(255, 93, 104) 0px 0px 11px;
}

html[saved-theme="dark"] body h4 {
  color: rgb(213, 0, 249);
  text-shadow: rgb(213, 0, 249) 0px 0px 9px;
}

html[saved-theme="dark"] body h5 {
  color: rgb(46, 204, 113);
  text-shadow: rgb(46, 204, 113) 0px 0px 9px;
}

html[saved-theme="dark"] body h6 {
  color: rgb(219, 62, 177);
  text-shadow: rgb(219, 62, 177) 0px 0px 9px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 150, 100, 250;
  border-bottom-color: rgba(150, 100, 250, 0.25);
  border-left-color: rgba(150, 100, 250, 0.25);
  border-right-color: rgba(150, 100, 250, 0.25);
  border-top-color: rgba(150, 100, 250, 0.25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(26, 26, 26);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(138, 92, 245);
  stroke: rgb(138, 92, 245);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=text] {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(13, 11, 18);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(138, 92, 245);
}`,
  },
  light: {
    base: `:root:root {
  --accent-brighter-10: color-mix(in srgb, hsl(258, 88%, 66%) 90%, #ffffff) !important;
  --accent-brighter-30: color-mix(in srgb, hsl(258, 88%, 66%) 70%, #ffffff) !important;
  --accent-brighter-50: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #ffffff) !important;
  --accent-brighter-70: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #ffffff) !important;
  --accent-brighter-90: color-mix(in srgb, hsl(258, 88%, 66%) 10%, #ffffff) !important;
  --accent-darker-10: color-mix(in srgb, hsl(258, 88%, 66%) 90%, #111111) !important;
  --accent-darker-30: color-mix(in srgb, hsl(258, 88%, 66%) 70%, #111111) !important;
  --accent-darker-50: color-mix(in srgb, hsl(258, 88%, 66%) 50%, #111111) !important;
  --accent-darker-70: color-mix(in srgb, hsl(258, 88%, 66%) 30%, #111111) !important;
  --accent-opacity-10: color-mix(in srgb, hsl(258, 88%, 66%) 10%, transparent) !important;
  --accent-opacity-20: color-mix(in srgb, hsl(258, 88%, 66%) 20%, transparent) !important;
  --accent-opacity-30: color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent) !important;
  --accent-opacity-40: color-mix(in srgb, hsl(258, 88%, 66%) 40%, transparent) !important;
  --accent-opacity-5: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --accent-opacity-50: color-mix(in srgb, hsl(258, 88%, 66%) 50%, transparent) !important;
  --accent-opacity-60: color-mix(in srgb, hsl(258, 88%, 66%) 60%, transparent) !important;
  --accent-opacity-70: color-mix(in srgb, hsl(258, 88%, 66%) 70%, transparent) !important;
  --accent-opacity-80: color-mix(in srgb, hsl(258, 88%, 66%) 80%, transparent) !important;
  --accent-opacity-90: color-mix(in srgb, hsl(258, 88%, 66%) 90%, transparent) !important;
  --alt-color: #111111 !important;
  --background-modifier-border: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --background-primary-alt: #ffffff !important;
  --background-secondary: #eeeeee !important;
  --background-secondary-alt: #eeeeee !important;
  --bases-cards-cover-background: #ffffff !important;
  --bases-cards-shadow: 0 0 0 1px color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --bases-embed-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --bases-table-border-color: hsl(258, 88%, 66%) !important;
  --bases-table-cell-background-disabled: #ffffff !important;
  --bases-table-group-background: #ffffff !important;
  --bodyFont: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --callout-background-opacity: 0.2;
  --callout-color-blue: 50, 150, 255;
  --callout-color-green: 50, 200, 100;
  --callout-color-orange: 255, 150, 50;
  --callout-color-purple: 150, 100, 250;
  --callout-color-red: 255, 80, 80;
  --callout-color-yellow: 255, 204, 0;
  --checkbox-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 70%, #ffffff) !important;
  --checkbox-border-color-hover: hsl(258, 88%, 66%) !important;
  --checkbox-color: hsl(258, 88%, 66%) !important;
  --checkbox-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 70%, #ffffff) !important;
  --code-background: #ffffff !important;
  --code-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --codeFont: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --color-hr: hsl(258, 88%, 66%) !important;
  --color-italic: hsl(258, 88%, 66%) !important;
  --default-font: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif !important;
  --divider-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --embed-block-shadow-hover: 0 0 0 1px color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent), inset 0 0 0 1px color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --file-header-font: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --gradient-bold: linear-gradient(135deg, #00eaff, #ff008c) !important;
  --headerFont: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --hr-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --hr-gradient: linear-gradient( to right,
    rgba(0, 255, 255, 0) 0%,
    #9400D3 25%,
    #1E90FF 50%,
    #9400D3 75%,
    rgba(0, 255, 255, 0) 100%
    ) !important;
  --light: #ffffff !important;
  --lightgray: #eeeeee !important;
  --list-bullet-radius: 100% !important;
  --list-marker-color: hsl(258, 88%, 66%) !important;
  --menu-background: #eeeeee !important;
  --metadata-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --metadata-divider-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --metadata-input-font: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --pill-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --ribbon-background: #eeeeee !important;
  --scrollbar-active-thumb-bg: color-mix(in srgb, hsl(258, 88%, 66%) 80%, transparent) !important;
  --setting-items-background: #ffffff !important;
  --setting-items-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --slider-track-background: color-mix(in srgb, hsl(258, 88%, 66%) 40%, transparent) !important;
  --status-bar-background: #eeeeee !important;
  --status-bar-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --sub-accent: #f4569d !important;
  --sub-accent-60: color-mix(in srgb, #f4569d 60%, transparent) !important;
  --tab-container-background: #eeeeee !important;
  --tab-outline-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --tab-switcher-background: #eeeeee !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #eeeeee, transparent) !important;
  --table-add-button-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --table-border-color: hsl(258, 88%, 66%) !important;
  --table-header-border-color: hsl(258, 88%, 66%) !important;
  --tag-background: color-mix(in srgb, hsl(258, 88%, 66%) 10%, transparent) !important;
  --tag-background-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent) !important;
  --tag-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 70%, #ffffff) !important;
  --tag-radius: 5px !important;
  --text-title-h1: #00e5ff !important;
  --text-title-h2: #ffca28 !important;
  --text-title-h3: #ff5d68 !important;
  --text-title-h4: #d500f9 !important;
  --text-title-h5: #2ECC71 !important;
  --text-title-h6: #db3eb1 !important;
  --theme-color: hsl(258, 88%, 66%) !important;
  --titleFont: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #eeeeee !important;
  --titlebar-background-focused: #eeeeee !important;
  --titlebar-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --vault-profile-color-hover: hsl(258, 88%, 66%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .note-properties {
  border-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-radius: 5px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(238, 238, 238);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgba(0, 0, 0, 0);
  font-weight: 700;
  outline: rgba(0, 0, 0, 0) none 0px;
  text-decoration-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: color(srgb 0.586288 0.42472 0.96328);
  font-family: Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif;
  outline: color(srgb 0.586288 0.42472 0.96328) none 0px;
  text-decoration-color: color(srgb 0.586288 0.42472 0.96328);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: color(srgb 0.586288 0.42472 0.96328);
  font-family: Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif;
  outline: color(srgb 0.586288 0.42472 0.96328) none 0px;
  text-decoration-color: color(srgb 0.586288 0.42472 0.96328);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgba(0, 0, 0, 0);
  font-weight: 700;
  outline: rgba(0, 0, 0, 0) none 0px;
  text-decoration-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.5);
  color: rgb(17, 17, 17);
  outline: color(srgb 0.54032 0.3608 0.9592 / 0.8) solid 2px;
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: color(srgb 0.678224 0.55256 0.97144);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(138, 92, 245);
  border-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body p {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-name: unhoverFill;
  color: rgb(17, 17, 17);
  outline: rgb(17, 17, 17) none 0px;
  text-decoration-color: rgb(17, 17, 17);
  transition: background 0.35s ease-in-out;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-name: unhoverFill;
  color: rgb(17, 17, 17);
  font-weight: 700;
  outline: rgb(17, 17, 17) none 0px;
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body a.internal.broken {
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-name: unhoverFill;
  color: rgb(17, 17, 17);
  font-weight: 700;
  outline: rgb(17, 17, 17) none 0px;
  text-decoration-color: rgb(17, 17, 17);
}`,
    tables: `html[saved-theme="light"] body td {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}`,
    code: `html[saved-theme="light"] body code {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(255, 255, 255);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: color(srgb 0.678224 0.55256 0.97144);
  border-left-color: color(srgb 0.678224 0.55256 0.97144);
  border-right-color: color(srgb 0.678224 0.55256 0.97144);
  border-top-color: color(srgb 0.678224 0.55256 0.97144);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(138, 92, 245);
  content: " ";
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(50, 150, 255);
  border-left-color: rgb(50, 150, 255);
  border-right-color: rgb(50, 150, 255);
  border-top-color: rgb(50, 150, 255);
  color: rgb(50, 150, 255);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(50, 150, 255);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 188, 0.2);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 255, 80, 80;
  background-color: rgba(255, 80, 80, 0.2);
  border-bottom-color: rgba(255, 80, 80, 0.25);
  border-left-color: rgba(255, 80, 80, 0.25);
  border-right-color: rgba(255, 80, 80, 0.25);
  border-top-color: rgba(255, 80, 80, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.2);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgba(120, 82, 238, 0.2);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.2);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 50, 150, 255;
  background-color: rgba(50, 150, 255, 0.2);
  border-bottom-color: rgba(50, 150, 255, 0.25);
  border-left-color: rgba(50, 150, 255, 0.25);
  border-right-color: rgba(50, 150, 255, 0.25);
  border-top-color: rgba(50, 150, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 150, 100, 250;
  background-color: rgba(150, 100, 250, 0.2);
  border-bottom-color: rgba(150, 100, 250, 0.25);
  border-left-color: rgba(150, 100, 250, 0.25);
  border-right-color: rgba(150, 100, 250, 0.25);
  border-top-color: rgba(150, 100, 250, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(236, 117, 0, 0.2);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 50, 150, 255;
  background-color: rgba(50, 150, 255, 0.2);
  border-bottom-color: rgba(50, 150, 255, 0.25);
  border-left-color: rgba(50, 150, 255, 0.25);
  border-right-color: rgba(50, 150, 255, 0.25);
  border-top-color: rgba(50, 150, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 50, 200, 100;
  background-color: rgba(50, 200, 100, 0.2);
  border-bottom-color: rgba(50, 200, 100, 0.25);
  border-left-color: rgba(50, 200, 100, 0.25);
  border-right-color: rgba(50, 200, 100, 0.25);
  border-top-color: rgba(50, 200, 100, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 188, 0.2);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(8, 109, 221, 0.2);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 255, 204, 0;
  background-color: rgba(255, 204, 0, 0.2);
  border-bottom-color: rgba(255, 204, 0, 0.25);
  border-left-color: rgba(255, 204, 0, 0.25);
  border-right-color: rgba(255, 204, 0, 0.25);
  border-top-color: rgba(255, 204, 0, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4'/%3E%3Cpath d='M2 6h4'/%3E%3Cpath d='M2 10h4'/%3E%3Cpath d='M2 14h4'/%3E%3Cpath d='M2 18h4'/%3E%3Cpath d='M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="analysis"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z'/%3E%3Cpath d='M21.21 15.89A10 10 0 1 1 8 2.83'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bookmark"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="calendar"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 2v4'/%3E%3Cpath d='M16 2v4'/%3E%3Crect width='18' height='18' x='3' y='4' rx='2'/%3E%3Cpath d='M3 10h18'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="celebration"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M5.8 11.3 2 22l10.7-3.79'/%3E%3Cpath d='M4 3h.01'/%3E%3Cpath d='M22 8h.01'/%3E%3Cpath d='M15 2h.01'/%3E%3Cpath d='M22 20h.01'/%3E%3Cpath d='m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10'/%3E%3Cpath d='m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17'/%3E%3Cpath d='m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7'/%3E%3Cpath d='M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="code"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 18 6-6-6-6'/%3E%3Cpath d='m8 6-6 6 6 6'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="gift"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 7v14'/%3E%3Cpath d='M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8'/%3E%3Cpath d='M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5'/%3E%3Crect x='3' y='7' width='18' height='4' rx='1'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="goal"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Ccircle cx='12' cy='12' r='6'/%3E%3Ccircle cx='12' cy='12' r='2'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="highlight"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m9 11-6 6v3h9l3-3'/%3E%3Cpath d='m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="idea"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="inspiration"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2v8'/%3E%3Cpath d='m4.93 10.93 1.41 1.41'/%3E%3Cpath d='M2 18h2'/%3E%3Cpath d='M20 18h2'/%3E%3Cpath d='m19.07 10.93-1.41 1.41'/%3E%3Cpath d='M22 22H2'/%3E%3Cpath d='m8 6 4-4 4 4'/%3E%3Cpath d='M16 18a4 4 0 0 0-8 0'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4'/%3E%3Cpath d='M2 6h4'/%3E%3Cpath d='M2 10h4'/%3E%3Cpath d='M2 14h4'/%3E%3Cpath d='M2 18h4'/%3E%3Cpath d='M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="puzzle"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="reminder"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10.268 21a2 2 0 0 0 3.464 0'/%3E%3Cpath d='M22 8c0-2.3-.8-4.3-2-6'/%3E%3Cpath d='M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326'/%3E%3Cpath d='M4 2C2.8 3.7 2 5.7 2 8'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978'/%3E%3Cpath d='M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978'/%3E%3Cpath d='M18 9h1.5a1 1 0 0 0 0-5H18'/%3E%3Cpath d='M4 22h16'/%3E%3Cpath d='M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z'/%3E%3Cpath d='M6 9H4.5a1 1 0 0 1 0-5H6'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="task"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.801 10A10 10 0 1 1 17 3.335'/%3E%3Cpath d='m9 11 3 3L22 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="team"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/%3E%3Cpath d='M16 3.128a4 4 0 0 1 0 7.744'/%3E%3Cpath d='M22 21v-2a4 4 0 0 0-3-3.87'/%3E%3Ccircle cx='9' cy='7' r='4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 16h.01'/%3E%3Cpath d='M12 8v4'/%3E%3Cpath d='M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h1 {
  color: rgb(0, 229, 255);
  text-shadow: rgb(0, 229, 255) 0px 0px 17px;
}

html[saved-theme="light"] body h2 {
  color: rgb(255, 202, 40);
  text-shadow: rgb(255, 202, 40) 0px 0px 13px;
}

html[saved-theme="light"] body h3 {
  color: rgb(255, 93, 104);
  text-shadow: rgb(255, 93, 104) 0px 0px 11px;
}

html[saved-theme="light"] body h4 {
  color: rgb(213, 0, 249);
  text-shadow: rgb(213, 0, 249) 0px 0px 9px;
}

html[saved-theme="light"] body h5 {
  color: rgb(46, 204, 113);
  text-shadow: rgb(46, 204, 113) 0px 0px 9px;
}

html[saved-theme="light"] body h6 {
  color: rgb(219, 62, 177);
  text-shadow: rgb(219, 62, 177) 0px 0px 9px;
}

html[saved-theme="light"] body hr {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 150, 100, 250;
  border-bottom-color: rgba(150, 100, 250, 0.25);
  border-left-color: rgba(150, 100, 250, 0.25);
  border-right-color: rgba(150, 100, 250, 0.25);
  border-top-color: rgba(150, 100, 250, 0.25);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(238, 238, 238);
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(138, 92, 245);
  stroke: rgb(138, 92, 245);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .metadata {
  border-bottom-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-left-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-right-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
  border-top-color: color(srgb 0.54032 0.3608 0.9592 / 0.05);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(238, 238, 238);
}

html[saved-theme="light"] body .page-header h2.page-title {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=text] {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: color(srgb 0.54032 0.3608 0.9592 / 0.1);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
  },
  extras: `/* Pulsing close button */
@keyframes pulse {
  0% {
    background-color: #ff0000;
  }
  50% {
    background-color: #820000;
  }
  100% {
    background-color: #ff0000;
  }
}

/* Fill animation on hover */
@keyframes hoverFill {
  from {
    background-size: 18%;
  }
  to {
    background-size: 100%;
  }
}

@keyframes unhoverFill {
  from {
    background-size: 100%;
  }
  to {
    background-size: 18%;
  }
}

.titlebar-button.mod-close:hover {
  animation: pulse 2s infinite;
}

.nav-file-title:hover,
.nav-folder-title:hover {
  animation: hoverFill 0.3s ease forwards;
  background-position: left;
  background-repeat: no-repeat;
}

.nav-file-title,
.nav-folder-title {
  animation: unhoverFill 0.3s ease forwards;
  background-position: left;
  background-repeat: no-repeat;
}
`,
};
