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
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1) !important;
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
  --bases-table-cell-background-selected: hsla(258, 88%, 66%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --bases-table-group-background: #0d0b12 !important;
  --bases-table-header-background: #111111 !important;
  --bases-table-summary-background: #111111 !important;
  --blockquote-border-color: hsl(258, 88%, 66%) !important;
  --bodyFont: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-weight: 600 !important;
  --callout-background-opacity: 0.2;
  --callout-color-blue: 50, 150, 255;
  --callout-color-green: 50, 200, 100;
  --callout-color-orange: 255, 150, 50;
  --callout-color-purple: 150, 100, 250;
  --callout-color-red: 255, 80, 80;
  --callout-color-yellow: 255, 204, 0;
  --callout-title-weight: 600;
  --canvas-background: #111111 !important;
  --checkbox-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 70%, #ffffff) !important;
  --checkbox-border-color-hover: hsl(258, 88%, 66%) !important;
  --checkbox-color: hsl(258, 88%, 66%) !important;
  --checkbox-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 70%, #ffffff) !important;
  --checkbox-marker-color: #111111 !important;
  --code-background: #0d0b12 !important;
  --code-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --codeFont: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%) !important;
  --color-accent: hsl(258, 88%, 66%) !important;
  --color-accent-1: hsl(255, 89.76%, 75.9%) !important;
  --color-accent-2: hsl(253, 92.4%, 85.14%) !important;
  --color-hr: hsl(258, 88%, 66%) !important;
  --color-italic: hsl(258, 88%, 66%) !important;
  --default-font: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif !important;
  --divider-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --divider-color-hover: hsl(258, 88%, 66%) !important;
  --embed-block-shadow-hover: 0 0 0 1px color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent), inset 0 0 0 1px color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --embed-border-start: 2px solid hsl(258, 88%, 66%) !important;
  --file-header-background: #111111 !important;
  --file-header-background-focused: #111111 !important;
  --file-header-font: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --gradient-bold: linear-gradient(135deg, #00eaff, #ff008c) !important;
  --graph-node-focused: hsl(255, 89.76%, 75.9%) !important;
  --headerFont: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-spacing: 2.5rem !important;
  --highlight: hsla(258, 88%, 66%, 0.1) !important;
  --hr-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --hr-gradient: linear-gradient( to right,
    rgba(0, 255, 255, 0) 0%,
    #9400D3 25%,
    #1E90FF 50%,
    #9400D3 75%,
    rgba(0, 255, 255, 0) 100%
    ) !important;
  --icon-color-active: hsl(255, 89.76%, 75.9%) !important;
  --interactive-accent: hsl(258, 88%, 66%) !important;
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --light: #111111 !important;
  --lightgray: #1a1a1a !important;
  --link-color: hsl(255, 89.76%, 75.9%) !important;
  --link-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --link-external-color: hsl(255, 89.76%, 75.9%) !important;
  --link-external-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --link-unresolved-color: hsl(255, 89.76%, 75.9%) !important;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3) !important;
  --list-bullet-radius: 100% !important;
  --list-indent: 2.25em !important;
  --list-marker-color: hsl(258, 88%, 66%) !important;
  --list-marker-color-collapsed: hsl(255, 89.76%, 75.9%) !important;
  --menu-background: #1a1a1a !important;
  --metadata-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --metadata-divider-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --metadata-input-font: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-height: 28px !important;
  --metadata-label-font: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --modal-background: #111111 !important;
  --nav-item-background-selected: hsla(258, 88%, 66%, 0.15) !important;
  --nav-item-color-highlighted: hsl(255, 89.76%, 75.9%) !important;
  --pdf-background: #111111 !important;
  --pdf-page-background: #111111 !important;
  --pdf-shadow: 0 0 0 1px color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --pdf-sidebar-background: #111111 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --pill-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --pill-color-remove-hover: hsl(255, 89.76%, 75.9%) !important;
  --prompt-background: #111111 !important;
  --ribbon-background: #1a1a1a !important;
  --ribbon-background-collapsed: #111111 !important;
  --scrollbar-active-thumb-bg: color-mix(in srgb, hsl(258, 88%, 66%) 80%, transparent) !important;
  --search-result-background: #111111 !important;
  --secondary: hsl(255, 89.76%, 75.9%) !important;
  --setting-items-background: #0d0b12 !important;
  --setting-items-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --sidebar-markdown-font-size: 14.4px !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%) !important;
  --table-add-button-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --table-border-color: hsl(258, 88%, 66%) !important;
  --table-drag-handle-background-active: hsl(258, 88%, 66%) !important;
  --table-header-border-color: hsl(258, 88%, 66%) !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(258, 88%, 66%, 0.1) !important;
  --table-selection-border-color: hsl(258, 88%, 66%) !important;
  --tag-background: color-mix(in srgb, hsl(258, 88%, 66%) 10%, transparent) !important;
  --tag-background-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent) !important;
  --tag-border-color: hsla(258, 88%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15) !important;
  --tag-color: hsl(258, 88%, 66%) !important;
  --tag-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 70%, #ffffff) !important;
  --tag-radius: 5px !important;
  --tertiary: hsl(253, 92.4%, 85.14%) !important;
  --text-accent: hsl(255, 89.76%, 75.9%) !important;
  --text-accent-hover: hsl(253, 92.4%, 85.14%) !important;
  --text-selection: hsla(258, 88%, 66%, 0.33) !important;
  --text-title-h1: #00e5ff !important;
  --text-title-h2: #ffca28 !important;
  --text-title-h3: #ff5d68 !important;
  --text-title-h4: #d500f9 !important;
  --text-title-h5: #2ECC71 !important;
  --text-title-h6: #db3eb1 !important;
  --textHighlight: hsla(258, 88%, 66%, 0.1) !important;
  --theme-color: hsl(258, 88%, 66%) !important;
  --titleFont: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #1a1a1a !important;
  --titlebar-background-focused: #0d0b12 !important;
  --titlebar-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --vault-profile-color-hover: hsl(258, 88%, 66%) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
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
  text-decoration: rgba(0, 0, 0, 0);
  text-decoration-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: color(srgb 0.586288 0.42472 0.96328);
  font-family: Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif;
  outline: color(srgb 0.586288 0.42472 0.96328) none 0px;
  text-decoration: color(srgb 0.586288 0.42472 0.96328);
  text-decoration-color: color(srgb 0.586288 0.42472 0.96328);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: color(srgb 0.586288 0.42472 0.96328);
  font-family: Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif;
  outline: color(srgb 0.586288 0.42472 0.96328) none 0px;
  text-decoration: color(srgb 0.586288 0.42472 0.96328);
  text-decoration-color: color(srgb 0.586288 0.42472 0.96328);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgba(0, 0, 0, 0);
  font-weight: 700;
  outline: rgba(0, 0, 0, 0) none 0px;
  text-decoration: rgba(0, 0, 0, 0);
  text-decoration-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body p {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
  transition: background 0.35s ease-in-out;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 255, 255);
  font-weight: 700;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(255, 255, 255);
  font-weight: 700;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
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
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(50, 150, 255);
  border-left-color: rgb(50, 150, 255);
  border-right-color: rgb(50, 150, 255);
  border-top-color: rgb(50, 150, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
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
  background-color: rgba(251, 70, 76, 0.2);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  background-color: rgba(168, 130, 255, 0.2);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
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
  background-color: rgba(83, 223, 221, 0.2);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  background-color: rgba(2, 122, 255, 0.2);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 255, 204, 0;
  background-color: rgba(255, 204, 0, 0.2);
  border-bottom-color: rgba(255, 204, 0, 0.25);
  border-left-color: rgba(255, 204, 0, 0.25);
  border-right-color: rgba(255, 204, 0, 0.25);
  border-top-color: rgba(255, 204, 0, 0.25);
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
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1) !important;
  --background-modifier-border: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --background-primary-alt: #ffffff !important;
  --background-secondary: #eeeeee !important;
  --background-secondary-alt: #eeeeee !important;
  --bases-cards-cover-background: #ffffff !important;
  --bases-cards-shadow: 0 0 0 1px color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --bases-embed-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --bases-table-border-color: hsl(258, 88%, 66%) !important;
  --bases-table-cell-background-disabled: #ffffff !important;
  --bases-table-cell-background-selected: hsla(258, 88%, 66%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(257, 88.88%, 70.95%) !important;
  --bases-table-group-background: #ffffff !important;
  --blockquote-border-color: hsl(257, 88.88%, 70.95%) !important;
  --bodyFont: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-weight: 600 !important;
  --callout-background-opacity: 0.2;
  --callout-color-blue: 50, 150, 255;
  --callout-color-green: 50, 200, 100;
  --callout-color-orange: 255, 150, 50;
  --callout-color-purple: 150, 100, 250;
  --callout-color-red: 255, 80, 80;
  --callout-color-yellow: 255, 204, 0;
  --callout-title-weight: 600;
  --checkbox-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 70%, #ffffff) !important;
  --checkbox-border-color-hover: hsl(258, 88%, 66%) !important;
  --checkbox-color: hsl(258, 88%, 66%) !important;
  --checkbox-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 70%, #ffffff) !important;
  --code-background: #ffffff !important;
  --code-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --codeFont: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%) !important;
  --color-accent: hsl(258, 88%, 66%) !important;
  --color-accent-1: hsl(257, 88.88%, 70.95%) !important;
  --color-accent-2: hsl(255, 89.76%, 75.9%) !important;
  --color-hr: hsl(258, 88%, 66%) !important;
  --color-italic: hsl(258, 88%, 66%) !important;
  --default-font: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif !important;
  --divider-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --divider-color-hover: hsl(257, 88.88%, 70.95%) !important;
  --embed-block-shadow-hover: 0 0 0 1px color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent), inset 0 0 0 1px color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --embed-border-start: 2px solid hsl(257, 88.88%, 70.95%) !important;
  --file-header-font: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --gradient-bold: linear-gradient(135deg, #00eaff, #ff008c) !important;
  --graph-node-focused: hsl(258, 88%, 66%) !important;
  --headerFont: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-spacing: 2.5rem !important;
  --highlight: hsla(258, 88%, 66%, 0.1) !important;
  --hr-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --hr-gradient: linear-gradient( to right,
    rgba(0, 255, 255, 0) 0%,
    #9400D3 25%,
    #1E90FF 50%,
    #9400D3 75%,
    rgba(0, 255, 255, 0) 100%
    ) !important;
  --icon-color-active: hsl(258, 88%, 66%) !important;
  --interactive-accent: hsl(257, 88.88%, 70.95%) !important;
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --light: #ffffff !important;
  --lightgray: #eeeeee !important;
  --link-color: hsl(258, 88%, 66%) !important;
  --link-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --link-external-color: hsl(258, 88%, 66%) !important;
  --link-external-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --link-unresolved-color: hsl(258, 88%, 66%) !important;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3) !important;
  --list-bullet-radius: 100% !important;
  --list-indent: 2.25em !important;
  --list-marker-color: hsl(258, 88%, 66%) !important;
  --list-marker-color-collapsed: hsl(258, 88%, 66%) !important;
  --menu-background: #eeeeee !important;
  --metadata-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --metadata-divider-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --metadata-input-font: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-height: 28px !important;
  --metadata-label-font: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --nav-item-background-selected: hsla(258, 88%, 66%, 0.15) !important;
  --nav-item-color-highlighted: hsl(258, 88%, 66%) !important;
  --pill-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --pill-color-remove-hover: hsl(258, 88%, 66%) !important;
  --ribbon-background: #eeeeee !important;
  --scrollbar-active-thumb-bg: color-mix(in srgb, hsl(258, 88%, 66%) 80%, transparent) !important;
  --secondary: hsl(258, 88%, 66%) !important;
  --setting-items-background: #ffffff !important;
  --setting-items-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-track-background: color-mix(in srgb, hsl(258, 88%, 66%) 40%, transparent) !important;
  --status-bar-background: #eeeeee !important;
  --status-bar-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --sub-accent: #f4569d !important;
  --sub-accent-60: color-mix(in srgb, #f4569d 60%, transparent) !important;
  --tab-container-background: #eeeeee !important;
  --tab-outline-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --tab-switcher-background: #eeeeee !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #eeeeee, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%) !important;
  --table-add-button-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --table-border-color: hsl(258, 88%, 66%) !important;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%) !important;
  --table-header-border-color: hsl(258, 88%, 66%) !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(258, 88%, 66%, 0.1) !important;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%) !important;
  --tag-background: color-mix(in srgb, hsl(258, 88%, 66%) 10%, transparent) !important;
  --tag-background-hover: color-mix(in srgb, hsl(258, 88%, 66%) 30%, transparent) !important;
  --tag-border-color: hsla(258, 88%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15) !important;
  --tag-color: hsl(258, 88%, 66%) !important;
  --tag-color-hover: color-mix(in srgb, hsl(258, 88%, 66%) 70%, #ffffff) !important;
  --tag-radius: 5px !important;
  --tertiary: hsl(255, 89.76%, 75.9%) !important;
  --text-accent: hsl(258, 88%, 66%) !important;
  --text-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --text-selection: hsla(258, 88%, 66%, 0.2) !important;
  --text-title-h1: #00e5ff !important;
  --text-title-h2: #ffca28 !important;
  --text-title-h3: #ff5d68 !important;
  --text-title-h4: #d500f9 !important;
  --text-title-h5: #2ECC71 !important;
  --text-title-h6: #db3eb1 !important;
  --textHighlight: hsla(258, 88%, 66%, 0.1) !important;
  --theme-color: hsl(258, 88%, 66%) !important;
  --titleFont: Rubik, Segoe UI, Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #eeeeee !important;
  --titlebar-background-focused: #eeeeee !important;
  --titlebar-border-color: color-mix(in srgb, hsl(258, 88%, 66%) 5%, transparent) !important;
  --vault-profile-color-hover: hsl(258, 88%, 66%) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 238, 238);
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
  text-decoration: rgba(0, 0, 0, 0);
  text-decoration-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: color(srgb 0.586288 0.42472 0.96328);
  font-family: Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif;
  outline: color(srgb 0.586288 0.42472 0.96328) none 0px;
  text-decoration: color(srgb 0.586288 0.42472 0.96328);
  text-decoration-color: color(srgb 0.586288 0.42472 0.96328);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: color(srgb 0.586288 0.42472 0.96328);
  font-family: Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif;
  outline: color(srgb 0.586288 0.42472 0.96328) none 0px;
  text-decoration: color(srgb 0.586288 0.42472 0.96328);
  text-decoration-color: color(srgb 0.586288 0.42472 0.96328);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgba(0, 0, 0, 0);
  font-weight: 700;
  outline: rgba(0, 0, 0, 0) none 0px;
  text-decoration: rgba(0, 0, 0, 0);
  text-decoration-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body p {
  font-family: "??", "??", Rubik, "Segoe UI", Roboto, Arial, sans-serif, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(17, 17, 17);
  outline: rgb(17, 17, 17) none 0px;
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
  transition: background 0.35s ease-in-out;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(17, 17, 17);
  font-weight: 700;
  outline: rgb(17, 17, 17) none 0px;
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(17, 17, 17);
  font-weight: 700;
  outline: rgb(17, 17, 17) none 0px;
  text-decoration: rgb(17, 17, 17);
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
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(50, 150, 255);
  border-left-color: rgb(50, 150, 255);
  border-right-color: rgb(50, 150, 255);
  border-top-color: rgb(50, 150, 255);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
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
  background-color: rgba(233, 49, 71, 0.2);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  background-color: rgba(120, 82, 238, 0.2);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
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
  background-color: rgba(0, 191, 188, 0.2);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  background-color: rgba(8, 109, 221, 0.2);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 255, 204, 0;
  background-color: rgba(255, 204, 0, 0.2);
  border-bottom-color: rgba(255, 204, 0, 0.25);
  border-left-color: rgba(255, 204, 0, 0.25);
  border-right-color: rgba(255, 204, 0, 0.25);
  border-top-color: rgba(255, 204, 0, 0.25);
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
