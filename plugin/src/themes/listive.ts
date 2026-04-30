import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "listive",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["courgette", "karla", "open-sans"],
    fontFiles: [
      {
        family: "Courgette",
        style: "normal italic",
        weight: "100 900",
        file: "courgette.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Karla",
        style: "normal italic",
        weight: "100 900",
        file: "karla.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
    styleSettingsId: "listive-theme-settings",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --alt-checkbox-bg-content: '';
  --background-accent: hsl(223, 7%, 30%);
  --background-accent-alt: hsl(220, 8%, 19%);
  --background-active-line: var(--background-accent-alt, hsl(220, 8%, 19%));
  --background-modifier-backlinks: hsl(220, 8%, 21%);
  --background-modifier-border: var(--color-base-30, hsl(20, 5%, 33%));
  --background-modifier-border-active: hsl(20, 5%, 53%);
  --background-modifier-cover: hsl(223, 7%, 20%);
  --background-primary: var(--color-base-00, hsl(220, 8%, 23%));
  --background-primary-alt: var(--color-base-10, #1a1a1a);
  --background-secondary: var(--color-base-20, hsl(218, 8%, 27%));
  --background-secondary-alt: var(--color-base-30, hsl(218, 8%, 21%));
  --bases-cards-background: var(--background-primary, hsl(220, 8%, 23%));
  --bases-cards-cover-background: var(--background-primary-alt, #1a1a1a);
  --bases-embed-border-color: var(--background-modifier-border, hsl(20, 5%, 33%));
  --bases-group-heading-property-size: var(--font-ui-smaller, 11px);
  --bases-table-border-color: var(--table-border-color, hsl(20, 5%, 33%));
  --bases-table-cell-background-active: var(--background-primary, hsl(220, 8%, 23%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, #1a1a1a);
  --bases-table-group-background: var(--background-primary-alt, #1a1a1a);
  --bases-table-header-background: var(--background-primary, hsl(220, 8%, 23%));
  --bases-table-summary-background: var(--background-primary, hsl(220, 8%, 23%));
  --blockquote-background-color: var(--background-secondary, hsl(218, 8%, 27%));
  --blockquote-border-thickness: var(--size-4-1, 4px);
  --blockquote-font-style: italic;
  --blockquote-style: var(--blockquote-font-style, italic);
  --bodyFont: var(--font-text-theme, 'Inter');
  --bold-color: var(--h1-color, hsl(217, 22%, 90%));
  --bold-weight: var(--font-bold, 700);
  --canvas-background: var(--background-primary, hsl(220, 8%, 23%));
  --canvas-controls-icon-size: var(--icon-s, 15px);
  --checkbox-marker-color: var(--background-primary, hsl(220, 8%, 23%));
  --code-background: var(--background-primary-alt, #1a1a1a);
  --code-border-color: var(--background-modifier-border, hsl(20, 5%, 33%));
  --default-font: 'Inter';
  --divider-color: var(--background-primary, hsl(220, 8%, 23%));
  --divider-width: 0px;
  --file-header-background: var(--background-primary, hsl(220, 8%, 23%));
  --file-header-background-focused: var(--background-primary, hsl(220, 8%, 23%));
  --file-header-font: var(--font-interface, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-ui-small, 12px);
  --font-mermaid: var(--font-text, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-text-theme: 'Inter';
  --font-ui-medium: 14px;
  --font-ui-small: 12px;
  --font-ui-smaller: 11px;
  --footnote-divider-color: var(--metadata-divider-color, hsl(20, 5%, 33%));
  --footnote-line-height: var(--line-height-normal, 1.35);
  --h1-border-width: 1px;
  --h1-color: hsl(217, 22%, 90%);
  --h1-font: Courgette;
  --h1-size: 1.60em;
  --h1-weight: 600;
  --h2-border-width: 1px;
  --h2-bottom-spacing: 0.3rem;
  --h2-bottom-spacing-edit: var(--h2-bottom-spacing, 0.3rem);
  --h2-color: hsl(217, 22%, 80%);
  --h2-font: Courgette;
  --h2-line-height: 1.1em;
  --h2-size: 1.48em;
  --h2-top-spacing: 1.4rem;
  --h2-top-spacing-edit: calc(var(--h2-top-spacing) + var(--list-spacing) + var(--list-spacing)/2);
  --h2-weight: 600;
  --h3-border-width: 0px;
  --h3-color: hsl(217, 22%, 70%);
  --h3-font: 'Karla', 'Inter';
  --h3-line-height: 1.2em;
  --h3-size: 1.36em;
  --h3-weight: 600;
  --h4-bottom-spacing: 0.1rem;
  --h4-color: hsl(45, 45%, 85%);
  --h4-font: 'Karla', 'Inter';
  --h4-line-height: 1.25em;
  --h4-size: 1.12em;
  --h4-weight: 600;
  --h5-color: hsl(45, 45%, 75%);
  --h5-line-height: var(--line-height-normal, 1.25em);
  --h5-size: 1.00em;
  --h5-weight: 600;
  --h6-color: hsl(45, 45%, 65%);
  --h6-line-height: var(--line-height-normal, 1.35);
  --h6-size: 1.00em;
  --he-title-bar-active-bg: #3D373A;
  --he-title-bar-active-pinned-bg: #735050;
  --he-title-bar-inactive-bg: #3D373A;
  --he-title-bar-inactive-pinned-bg: #735050;
  --header-height: 38px;
  --headerFont: var(--font-text-theme, 'Inter');
  --heading-spacing: var(--h2-top-spacing, 1.4rem);
  --hr-color: var(--background-modifier-border, hsl(20, 5%, 33%));
  --icon-l: 17px;
  --icon-m: 17px;
  --icon-s: 15px;
  --icon-size: var(--icon-m, 17px);
  --ig-left-2: -12px;
  --ig-left-3: -9px;
  --ig-left-4: -8px;
  --indentation-guide-active-color: var(--background-modifier-border-active, hsl(20, 5%, 53%));
  --indentation-guide-color: var(--background-modifier-border, hsl(20, 5%, 33%));
  --indentation-guide-color-active: var(--background-modifier-border-active, hsl(20, 5%, 53%));
  --inline-title-color: var(--h1-color, hsl(217, 22%, 90%));
  --inline-title-font: var(--h1-font, Courgette);
  --inline-title-size: var(--h1-size, 1.60em);
  --inline-title-weight: var(--h1-weight, 600);
  --keyheader-font: 'Open Sans';
  --light: var(--background-primary, var(--color-base-00, hsl(220, 8%, 23%)));
  --lightgray: var(--background-secondary, var(--color-base-20, hsl(218, 8%, 27%)));
  --line-height-normal: 1.35;
  --link-decoration: none;
  --list-bullet-size: 0.3rem;
  --list-embed-adj: 0px;
  --list-embed-margin: -1.60em;
  --list-guide-adj: 0px;
  --list-guide-adj-mobile: 0px;
  --list-guide-outliner-adj: 0px;
  --list-indent-first: 1.6em;
  --list-indent-read: 1.5em;
  --list-spacing: 0.2em;
  --lst-fab-b2-y: 30vh;
  --lst-fab-button-radius: calc(var(--lst-fab-button-size)/3);
  --lst-fab-button-size: 60px;
  --lst-fab-view-x: 2vw;
  --lst-fab-view-y: 10vh;
  --lst-p-ul-margin: 0.4em;
  --math-block-list-align: left;
  --menu-background: var(--background-secondary, hsl(218, 8%, 27%));
  --metadata-background: var(--background-secondary-alt, hsl(218, 8%, 21%));
  --metadata-border-color: var(--background-modifier-border, hsl(20, 5%, 33%));
  --metadata-border-radius: var(--size-4-2, 8px);
  --metadata-divider-color: var(--background-modifier-border, hsl(20, 5%, 33%));
  --metadata-input-font: var(--font-interface, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-font: var(--font-interface, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-width: 8em;
  --metadata-padding: var(--size-4-2, 8px);
  --metadata-sidebar-input-font-size: var(--font-ui-small, 12px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 12px);
  --modal-background: var(--background-primary, hsl(220, 8%, 23%));
  --modal-border-width: var(--border-width, 0px);
  --nav-indentation-guide-color: var(--indentation-guide-color, hsl(20, 5%, 33%));
  --nav-item-size: var(--font-ui-small, 12px);
  --pdf-background: var(--background-primary, hsl(220, 8%, 23%));
  --pdf-page-background: var(--background-primary, hsl(220, 8%, 23%));
  --pdf-sidebar-background: var(--background-primary, hsl(220, 8%, 23%));
  --pill-border-color: var(--background-modifier-border, hsl(20, 5%, 33%));
  --popover-width: 500px;
  --prompt-background: var(--background-primary, hsl(220, 8%, 23%));
  --ribbon-background: var(--background-primary, hsl(220, 8%, 23%));
  --ribbon-background-collapsed: var(--background-modifier-cover, hsl(223, 7%, 20%));
  --ribbon-width: 40px;
  --search-result-background: var(--background-primary, hsl(220, 8%, 23%));
  --setting-group-heading-size: var(--font-ui-medium, 14px);
  --setting-items-background: var(--background-primary-alt, #1a1a1a);
  --setting-items-border-color: var(--background-modifier-border, hsl(20, 5%, 33%));
  --shiki-code-background: var(--code-background, #1a1a1a);
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(20, 5%, 33%));
  --slider-track-background: var(--background-modifier-border, hsl(20, 5%, 33%));
  --status-bar-background: var(--background-secondary, hsl(218, 8%, 27%));
  --status-bar-border-color: var(--divider-color, hsl(220, 8%, 23%));
  --status-bar-font-size: var(--font-ui-smaller, 11px);
  --suggestion-background: var(--background-primary, hsl(220, 8%, 23%));
  --tab-background-active: var(--background-primary, hsl(220, 8%, 23%));
  --tab-container-background: var(--titlebar-background-focused, hsl(223, 7%, 20%));
  --tab-curve: var(--size-4-1, 4px);
  --tab-divider-color: var(--background-modifier-border, hsl(20, 5%, 33%));
  --tab-font-size: var(--font-ui-small, 12px);
  --tab-outline-color: var(--divider-color, hsl(220, 8%, 23%));
  --tab-outline-width: 0px;
  --tab-stacked-font-size: var(--font-ui-small, 12px);
  --tab-stacked-header-width: var(--header-height, 38px);
  --tab-stacked-shadow: -4px 0 8px 0 rgba(0, 0, 0, 0.2);
  --tab-switcher-background: var(--background-secondary, hsl(218, 8%, 27%));
  --table-add-button-border-color: var(--background-modifier-border, hsl(20, 5%, 33%));
  --table-border-color: var(--background-modifier-border, hsl(20, 5%, 33%));
  --table-header-border-color: var(--table-border-color, hsl(20, 5%, 33%));
  --tag-background: hsla(var(--tag-bg-accent-hsl), 0.7);
  --tag-background-hover: hsla(var(--tag-bg-accent-hsl), 0.45);
  --tag-bg-accent-hsl: 15, 72%, 70%;
  --tag-color: var(--text-accent, #111);
  --tag-color-hover: var(--text-accent, #eee);
  --tag-padding-x: 0.5em;
  --tag-padding-y: 0.1em;
  --tag-radius: 0.6em;
  --tag-size: var(--font-smaller, 12px);
  --titleFont: var(--font-text-theme, 'Inter');
  --titlebar-background: var(--titlebar-background-focused, hsl(223, 7%, 20%));
  --titlebar-background-focused: var(--background-modifier-cover, hsl(223, 7%, 20%));
  --titlebar-border-color: var(--background-modifier-border, hsl(20, 5%, 33%));
  --traffic-lights-offset-x: var(--header-height, 38px);
  --traffic-lights-offset-y: var(--header-height, 38px);
  --vault-profile-font-size: var(--font-ui-small, 12px);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(47, 49, 55));
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-modifier-cover, rgb(47, 49, 55));
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--titlebar-background-focused, rgb(47, 49, 55));
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(54, 57, 63);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(47, 49, 55));
  border-left-color: rgb(54, 57, 63);
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body html {
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(224, 228, 235));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(224, 228, 235) none 0px;
  text-decoration-color: rgb(224, 228, 235);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(224, 228, 235));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(224, 228, 235) none 0px;
  text-decoration-color: rgb(224, 228, 235);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(255, 208, 0, 0.3));
  color: var(--text-normal, rgb(224, 228, 235));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(224, 228, 235) none 0px;
  text-decoration-color: rgb(224, 228, 235);
}

html[saved-theme="dark"] body del {
  color: var(--h1-color, rgb(218, 218, 218));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h1.article-title {
  font-size: 12px;
}

html[saved-theme="dark"] body p {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.broken {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: var(--h1-color, rgb(218, 218, 218));
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}

html[saved-theme="dark"] body dl {
  margin-bottom: var(--h3-bottom-spacing, 16px);
  margin-top: var(--h3-top-spacing, 16px);
}

html[saved-theme="dark"] body dt {
  color: var(--h1-color, rgb(218, 218, 218));
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}

html[saved-theme="dark"] body ol > li {
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body ul > li {
  color: var(--h1-color, rgb(218, 218, 218));
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(63, 67, 74));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: var(--blockquote-font-style, italic);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body table {
  background-color: var(--background-secondary, rgb(63, 67, 74));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-top-color: rgb(0, 0, 0);
  border-top-style: solid;
  border-top-width: 3px;
  color: var(--h1-color, rgb(218, 218, 218));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--heading-spacing, 8px);
  width: 200.141px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: var(--background-secondary-alt, rgb(49, 52, 58));
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(88, 83, 80);
  padding-bottom: 6.4px;
  padding-left: 9.6px;
  padding-right: 9.6px;
  padding-top: 6.4px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(88, 83, 80);
  border-bottom-width: 0px;
  border-left-color: rgb(88, 83, 80);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(88, 83, 80);
  border-right-width: 0px;
  border-top-color: rgb(88, 83, 80);
  border-top-width: var(--table-header-border-width, 0px);
  font-weight: var(--table-header-weight, 700);
  padding-bottom: 6.4px;
  padding-left: 9.6px;
  padding-right: 9.6px;
  padding-top: 6.4px;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(26, 26, 26));
  border-bottom-color: rgb(88, 83, 80);
  border-left-color: rgb(88, 83, 80);
  border-right-color: rgb(88, 83, 80);
  border-top-color: rgb(88, 83, 80);
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(26, 26, 26));
  border-bottom-color: rgb(63, 67, 74);
  border-bottom-width: 1px;
  border-left-color: rgb(63, 67, 74);
  border-left-width: 1px;
  border-right-color: rgb(63, 67, 74);
  border-right-width: 1px;
  border-top-color: rgb(63, 67, 74);
  border-top-width: 1px;
}`,
    images: `html[saved-theme="dark"] body figcaption {
  color: var(--h1-color, rgb(218, 218, 218));
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}

html[saved-theme="dark"] body figure {
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(224, 228, 235);
  border-left-color: rgb(224, 228, 235);
  border-right-color: rgb(224, 228, 235);
  border-top-color: rgb(224, 228, 235);
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}

html[saved-theme="dark"] body video {
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(26, 26, 26));
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}

html[saved-theme="dark"] body .footnotes {
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .transclude {
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
  padding-bottom: 3.2px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .transclude-inner {
  margin-bottom: var(--h3-bottom-spacing, 7px);
  margin-top: var(--h3-top-spacing, 7px);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] {
  --background-active-line: hsl(220, 8%, 19%);
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: hsl(20, 5%, 33%);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(220, 8%, 23%);
  --background-primary-alt: #1a1a1a;
  --background-secondary: hsl(218, 8%, 27%);
  --background-secondary-alt: hsl(218, 8%, 21%);
  --blockquote-background-color: hsl(218, 8%, 27%);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blockquote-border-thickness: 4px;
  --blockquote-style: italic;
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(217, 22%, 90%);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(220, 8%, 23%);
  --canvas-controls-icon-size: 15px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666666;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: hsl(220, 8%, 23%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #1a1a1a;
  --code-border-color: hsl(20, 5%, 33%);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #666666;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #dadada;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #666666;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: hsl(220, 8%, 23%);
  --divider-color-hover: hsl(258, 88%, 66%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --font-interface: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', 'Inter', 'Arial';
  --font-text: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #666666;
  --graph-text: #dadada;
  --h2-bottom-spacing-edit: 0.3rem;
  --h2-top-spacing: 0.4rem;
  --h2-top-spacing-edit: calc(0.4rem + 0.3em);
  --h3-bottom-spacing: 0.2rem;
  --h3-bottom-spacing-edit: 0.2rem;
  --h3-top-spacing: 0.2rem;
  --h3-top-spacing-edit: calc(0.2rem + 0.2em);
  --h5-line-height: 1.25em;
  --h6-line-height: 1.35;
  --heading-formatting: #666666;
  --heading-spacing: 1.4rem;
  --hr-color: hsl(20, 5%, 33%);
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --lst-fab-button-radius: 20px;
  --menu-background: hsl(218, 8%, 27%);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(220, 8%, 23%);
  --pdf-page-background: hsl(220, 8%, 23%);
  --pdf-shadow: 0 0 0 1px hsl(20, 5%, 33%);
  --pdf-sidebar-background: hsl(220, 8%, 23%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(20, 5%, 33%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: hsl(220, 8%, 23%);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 14px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #1a1a1a;
  --setting-items-border-color: hsl(20, 5%, 33%);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #1a1a1a;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666666;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: hsl(20, 5%, 33%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666666;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(220, 8%, 23%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: hsl(220, 8%, 23%);
  --tab-curve: 4px;
  --tab-divider-color: hsl(20, 5%, 33%);
  --tab-font-size: 12px;
  --tab-outline-color: hsl(220, 8%, 23%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 12px;
  --tab-stacked-header-width: 38px;
  --tab-switcher-background: hsl(218, 8%, 27%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(218, 8%, 27%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #666666;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: hsl(20, 5%, 33%);
  --table-add-button-border-width: 1px;
  --table-border-color: hsl(20, 5%, 33%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #666666;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsl(20, 5%, 33%);
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(15, 72%, 70%, 0.7);
  --tag-background-hover: hsla(15, 72%, 70%, 0.45);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #111;
  --tag-color-hover: #eee;
  --tag-size: 12px;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #fb464c;
  --text-faint: #666666;
  --text-highlight-bg: rgba(255, 208, 0, 0.3);
  --text-muted: #b3b3b3;
  --text-normal: #dadada;
  --text-selection: rgba(30, 144, 255, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 38px;
  --traffic-lights-offset-y: 38px;
  background-color: rgba(251, 70, 76, 0.18);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(218, 218, 218));
  content: "";
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 21.6px;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--h3-top-spacing, 0px);
  padding-bottom: calc(var(--list-spacing)/2);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] {
  --background-active-line: hsl(220, 8%, 19%);
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: hsl(20, 5%, 33%);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(220, 8%, 23%);
  --background-primary-alt: #1a1a1a;
  --background-secondary: hsl(218, 8%, 27%);
  --background-secondary-alt: hsl(218, 8%, 21%);
  --blockquote-background-color: hsl(218, 8%, 27%);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blockquote-border-thickness: 4px;
  --blockquote-style: italic;
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(217, 22%, 90%);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(220, 8%, 23%);
  --canvas-controls-icon-size: 15px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666666;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: hsl(220, 8%, 23%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #1a1a1a;
  --code-border-color: hsl(20, 5%, 33%);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #666666;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #dadada;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #666666;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: hsl(220, 8%, 23%);
  --divider-color-hover: hsl(258, 88%, 66%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --font-interface: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', 'Inter', 'Arial';
  --font-text: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #666666;
  --graph-text: #dadada;
  --h2-bottom-spacing-edit: 0.3rem;
  --h2-top-spacing: 0.4rem;
  --h2-top-spacing-edit: calc(0.4rem + 0.3em);
  --h3-bottom-spacing: 0.2rem;
  --h3-bottom-spacing-edit: 0.2rem;
  --h3-top-spacing: 0.2rem;
  --h3-top-spacing-edit: calc(0.2rem + 0.2em);
  --h5-line-height: 1.25em;
  --h6-line-height: 1.35;
  --heading-formatting: #666666;
  --heading-spacing: 1.4rem;
  --hr-color: hsl(20, 5%, 33%);
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --lst-fab-button-radius: 20px;
  --menu-background: hsl(218, 8%, 27%);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(220, 8%, 23%);
  --pdf-page-background: hsl(220, 8%, 23%);
  --pdf-shadow: 0 0 0 1px hsl(20, 5%, 33%);
  --pdf-sidebar-background: hsl(220, 8%, 23%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(20, 5%, 33%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: hsl(220, 8%, 23%);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 14px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #1a1a1a;
  --setting-items-border-color: hsl(20, 5%, 33%);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #1a1a1a;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666666;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: hsl(20, 5%, 33%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666666;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(220, 8%, 23%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: hsl(220, 8%, 23%);
  --tab-curve: 4px;
  --tab-divider-color: hsl(20, 5%, 33%);
  --tab-font-size: 12px;
  --tab-outline-color: hsl(220, 8%, 23%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 12px;
  --tab-stacked-header-width: 38px;
  --tab-switcher-background: hsl(218, 8%, 27%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(218, 8%, 27%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #666666;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: hsl(20, 5%, 33%);
  --table-add-button-border-width: 1px;
  --table-border-color: hsl(20, 5%, 33%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #666666;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsl(20, 5%, 33%);
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(15, 72%, 70%, 0.7);
  --tag-background-hover: hsla(15, 72%, 70%, 0.45);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #111;
  --tag-color-hover: #eee;
  --tag-size: 12px;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #fb464c;
  --text-faint: #666666;
  --text-highlight-bg: rgba(255, 208, 0, 0.3);
  --text-muted: #b3b3b3;
  --text-normal: #dadada;
  --text-selection: rgba(30, 144, 255, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 38px;
  --traffic-lights-offset-y: 38px;
  background-color: rgba(233, 151, 63, 0.18);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(218, 218, 218));
  content: "";
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 21.6px;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--h3-top-spacing, 0px);
  padding-bottom: calc(var(--list-spacing)/2);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] {
  --background-active-line: hsl(220, 8%, 19%);
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: hsl(20, 5%, 33%);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(220, 8%, 23%);
  --background-primary-alt: #1a1a1a;
  --background-secondary: hsl(218, 8%, 27%);
  --background-secondary-alt: hsl(218, 8%, 21%);
  --blockquote-background-color: hsl(218, 8%, 27%);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blockquote-border-thickness: 4px;
  --blockquote-style: italic;
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(217, 22%, 90%);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(220, 8%, 23%);
  --canvas-controls-icon-size: 15px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666666;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: hsl(220, 8%, 23%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #1a1a1a;
  --code-border-color: hsl(20, 5%, 33%);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #666666;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #dadada;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #666666;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: hsl(220, 8%, 23%);
  --divider-color-hover: hsl(258, 88%, 66%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --font-interface: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', 'Inter', 'Arial';
  --font-text: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #666666;
  --graph-text: #dadada;
  --h2-bottom-spacing-edit: 0.3rem;
  --h2-top-spacing: 0.4rem;
  --h2-top-spacing-edit: calc(0.4rem + 0.3em);
  --h3-bottom-spacing: 0.2rem;
  --h3-bottom-spacing-edit: 0.2rem;
  --h3-top-spacing: 0.2rem;
  --h3-top-spacing-edit: calc(0.2rem + 0.2em);
  --h5-line-height: 1.25em;
  --h6-line-height: 1.35;
  --heading-formatting: #666666;
  --heading-spacing: 1.4rem;
  --hr-color: hsl(20, 5%, 33%);
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --lst-fab-button-radius: 20px;
  --menu-background: hsl(218, 8%, 27%);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(220, 8%, 23%);
  --pdf-page-background: hsl(220, 8%, 23%);
  --pdf-shadow: 0 0 0 1px hsl(20, 5%, 33%);
  --pdf-sidebar-background: hsl(220, 8%, 23%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(20, 5%, 33%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: hsl(220, 8%, 23%);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 14px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #1a1a1a;
  --setting-items-border-color: hsl(20, 5%, 33%);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #1a1a1a;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666666;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: hsl(20, 5%, 33%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666666;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(220, 8%, 23%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: hsl(220, 8%, 23%);
  --tab-curve: 4px;
  --tab-divider-color: hsl(20, 5%, 33%);
  --tab-font-size: 12px;
  --tab-outline-color: hsl(220, 8%, 23%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 12px;
  --tab-stacked-header-width: 38px;
  --tab-switcher-background: hsl(218, 8%, 27%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(218, 8%, 27%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #666666;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: hsl(20, 5%, 33%);
  --table-add-button-border-width: 1px;
  --table-border-color: hsl(20, 5%, 33%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #666666;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsl(20, 5%, 33%);
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(15, 72%, 70%, 0.7);
  --tag-background-hover: hsla(15, 72%, 70%, 0.45);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #111;
  --tag-color-hover: #eee;
  --tag-size: 12px;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #fb464c;
  --text-faint: #666666;
  --text-highlight-bg: rgba(255, 208, 0, 0.3);
  --text-muted: #b3b3b3;
  --text-normal: #dadada;
  --text-selection: rgba(30, 144, 255, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 38px;
  --traffic-lights-offset-y: 38px;
  background-color: rgba(224, 222, 113, 0.18);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(218, 218, 218));
  content: "";
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 21.6px;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--h3-top-spacing, 0px);
  padding-bottom: calc(var(--list-spacing)/2);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] {
  --background-active-line: hsl(220, 8%, 19%);
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: hsl(20, 5%, 33%);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(220, 8%, 23%);
  --background-primary-alt: #1a1a1a;
  --background-secondary: hsl(218, 8%, 27%);
  --background-secondary-alt: hsl(218, 8%, 21%);
  --blockquote-background-color: hsl(218, 8%, 27%);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blockquote-border-thickness: 4px;
  --blockquote-style: italic;
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(217, 22%, 90%);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(220, 8%, 23%);
  --canvas-controls-icon-size: 15px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666666;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: hsl(220, 8%, 23%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #1a1a1a;
  --code-border-color: hsl(20, 5%, 33%);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #666666;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #dadada;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #666666;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: hsl(220, 8%, 23%);
  --divider-color-hover: hsl(258, 88%, 66%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --font-interface: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', 'Inter', 'Arial';
  --font-text: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #666666;
  --graph-text: #dadada;
  --h2-bottom-spacing-edit: 0.3rem;
  --h2-top-spacing: 0.4rem;
  --h2-top-spacing-edit: calc(0.4rem + 0.3em);
  --h3-bottom-spacing: 0.2rem;
  --h3-bottom-spacing-edit: 0.2rem;
  --h3-top-spacing: 0.2rem;
  --h3-top-spacing-edit: calc(0.2rem + 0.2em);
  --h5-line-height: 1.25em;
  --h6-line-height: 1.35;
  --heading-formatting: #666666;
  --heading-spacing: 1.4rem;
  --hr-color: hsl(20, 5%, 33%);
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --lst-fab-button-radius: 20px;
  --menu-background: hsl(218, 8%, 27%);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(220, 8%, 23%);
  --pdf-page-background: hsl(220, 8%, 23%);
  --pdf-shadow: 0 0 0 1px hsl(20, 5%, 33%);
  --pdf-sidebar-background: hsl(220, 8%, 23%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(20, 5%, 33%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: hsl(220, 8%, 23%);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 14px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #1a1a1a;
  --setting-items-border-color: hsl(20, 5%, 33%);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #1a1a1a;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666666;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: hsl(20, 5%, 33%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666666;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(220, 8%, 23%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: hsl(220, 8%, 23%);
  --tab-curve: 4px;
  --tab-divider-color: hsl(20, 5%, 33%);
  --tab-font-size: 12px;
  --tab-outline-color: hsl(220, 8%, 23%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 12px;
  --tab-stacked-header-width: 38px;
  --tab-switcher-background: hsl(218, 8%, 27%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(218, 8%, 27%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #666666;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: hsl(20, 5%, 33%);
  --table-add-button-border-width: 1px;
  --table-border-color: hsl(20, 5%, 33%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #666666;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsl(20, 5%, 33%);
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(15, 72%, 70%, 0.7);
  --tag-background-hover: hsla(15, 72%, 70%, 0.45);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #111;
  --tag-color-hover: #eee;
  --tag-size: 12px;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #fb464c;
  --text-faint: #666666;
  --text-highlight-bg: rgba(255, 208, 0, 0.3);
  --text-muted: #b3b3b3;
  --text-normal: #dadada;
  --text-selection: rgba(30, 144, 255, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 38px;
  --traffic-lights-offset-y: 38px;
  background-color: rgba(168, 130, 255, 0.18);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(218, 218, 218));
  content: "";
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 21.6px;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--h3-top-spacing, 0px);
  padding-bottom: calc(var(--list-spacing)/2);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(102, 102, 102);
  text-decoration: line-through 1px rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM6.07,3.55c-.08,.29-.09,.6-.03,.9l.86,4.56c.05,.28,.2,.52,.42,.7,.22,.18,.49,.28,.77,.28s.55-.1,.77-.28c.22-.18,.36-.43,.42-.7l.86-4.56c.06-.3,.04-.61-.03-.9-.08-.29-.22-.57-.41-.8-.19-.23-.44-.42-.71-.55-.28-.13-.58-.2-.88-.2s-.61,.07-.88,.2c-.28,.13-.52,.32-.71,.55-.19,.23-.34,.51-.41,.8Zm3.07,10.01c.28-.28,.44-.66,.44-1.06s-.16-.78-.44-1.06c-.28-.28-.66-.44-1.06-.44s-.78,.16-1.06,.44c-.28,.28-.44,.66-.44,1.06s.16,.78,.44,1.06c.28,.28,.66,.44,1.06,.44s.78-.16,1.06-.44Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM6.07,3.55c-.08,.29-.09,.6-.03,.9l.86,4.56c.05,.28,.2,.52,.42,.7,.22,.18,.49,.28,.77,.28s.55-.1,.77-.28c.22-.18,.36-.43,.42-.7l.86-4.56c.06-.3,.04-.61-.03-.9-.08-.29-.22-.57-.41-.8-.19-.23-.44-.42-.71-.55-.28-.13-.58-.2-.88-.2s-.61,.07-.88,.2c-.28,.13-.52,.32-.71,.55-.19,.23-.34,.51-.41,.8Zm3.07,10.01c.28-.28,.44-.66,.44-1.06s-.16-.78-.44-1.06c-.28-.28-.66-.44-1.06-.44s-.78,.16-1.06,.44c-.28,.28-.44,.66-.44,1.06s.16,.78,.44,1.06c.28,.28,.66,.44,1.06,.44s.78-.16,1.06-.44Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  color: rgb(158, 158, 158);
  content: "❝";
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm6.67,4.33c0,1.45-.36,2.79-1.07,4.02-.72,1.23-1.69,2.2-2.91,2.91-1.23,.72-2.56,1.07-4.02,1.07s-2.79-.36-4.02-1.07c-1.23-.72-2.2-1.69-2.91-2.91-.72-1.23-1.07-2.56-1.07-4.02S.36,5.21,1.07,3.98c.72-1.23,1.69-2.2,2.91-2.91,1.23-.72,2.56-1.07,4.02-1.07s2.79,.36,4.02,1.07c1.23,.72,2.2,1.69,2.91,2.91,.72,1.23,1.07,2.56,1.07,4.02Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm6.67,4.33c0,1.45-.36,2.79-1.07,4.02-.72,1.23-1.69,2.2-2.91,2.91-1.23,.72-2.56,1.07-4.02,1.07s-2.79-.36-4.02-1.07c-1.23-.72-2.2-1.69-2.91-2.91-.72-1.23-1.07-2.56-1.07-4.02S.36,5.21,1.07,3.98c.72-1.23,1.69-2.2,2.91-2.91,1.23-.72,2.56-1.07,4.02-1.07s2.79,.36,4.02,1.07c1.23,.72,2.2,1.69,2.91,2.91,.72,1.23,1.07,2.56,1.07,4.02Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
  color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(158, 158, 158);
  content: "🕮";
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: var(--h1-color, rgb(218, 218, 218));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  background: rgba(83, 223, 221, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: var(--h1-color, rgb(218, 218, 218));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  background: rgba(251, 70, 76, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: var(--h1-color, rgb(218, 218, 218));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="caption"] {
  --background-active-line: hsl(220, 8%, 19%);
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: hsl(20, 5%, 33%);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(220, 8%, 23%);
  --background-primary-alt: #1a1a1a;
  --background-secondary: hsl(218, 8%, 27%);
  --background-secondary-alt: hsl(218, 8%, 21%);
  --blockquote-background-color: hsl(218, 8%, 27%);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blockquote-border-thickness: 4px;
  --blockquote-style: italic;
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(217, 22%, 90%);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-content-padding: var(--size-4-2) 0 var(--size-4-1, 8px 0 4px 0) 0;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: var(--size-4-4) var(--size-4-4) var(--size-4-3) var(--size-4-4, 16px 16px 12px 16px);
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(220, 8%, 23%);
  --canvas-controls-icon-size: 15px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666666;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: hsl(220, 8%, 23%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #1a1a1a;
  --code-border-color: hsl(20, 5%, 33%);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #666666;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #dadada;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #666666;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: hsl(220, 8%, 23%);
  --divider-color-hover: hsl(258, 88%, 66%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --font-interface: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', 'Inter', 'Arial';
  --font-text: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #666666;
  --graph-text: #dadada;
  --h2-bottom-spacing-edit: 0.3rem;
  --h2-top-spacing-edit: calc(1.4rem + 0.3em);
  --h5-line-height: 1.25em;
  --h6-line-height: 1.35;
  --heading-formatting: #666666;
  --heading-spacing: 1.4rem;
  --hr-color: hsl(20, 5%, 33%);
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-embed-margin: -1.70em;
  --list-indent: 1.6em;
  --lst-fab-button-radius: 20px;
  --menu-background: hsl(218, 8%, 27%);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(220, 8%, 23%);
  --pdf-page-background: hsl(220, 8%, 23%);
  --pdf-shadow: 0 0 0 1px hsl(20, 5%, 33%);
  --pdf-sidebar-background: hsl(220, 8%, 23%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(20, 5%, 33%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: hsl(220, 8%, 23%);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 14px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #1a1a1a;
  --setting-items-border-color: hsl(20, 5%, 33%);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #1a1a1a;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666666;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: hsl(20, 5%, 33%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666666;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(220, 8%, 23%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: hsl(220, 8%, 23%);
  --tab-curve: 4px;
  --tab-divider-color: hsl(20, 5%, 33%);
  --tab-font-size: 12px;
  --tab-outline-color: hsl(220, 8%, 23%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 12px;
  --tab-stacked-header-width: 38px;
  --tab-switcher-background: hsl(218, 8%, 27%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(218, 8%, 27%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #666666;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: hsl(20, 5%, 33%);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #666666;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsl(20, 5%, 33%);
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(15, 72%, 70%, 0.7);
  --tag-background-hover: hsla(15, 72%, 70%, 0.45);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #111;
  --tag-color-hover: #eee;
  --tag-size: 12px;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #fb464c;
  --text-faint: #666666;
  --text-highlight-bg: rgba(255, 208, 0, 0.3);
  --text-muted: #b3b3b3;
  --text-normal: #dadada;
  --text-selection: rgba(30, 144, 255, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 38px;
  --traffic-lights-offset-y: 38px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(2, 122, 255, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: var(--h1-color, rgb(218, 218, 218));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 21.6px;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--h3-top-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  background: rgba(251, 70, 76, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: var(--h1-color, rgb(218, 218, 218));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  background: rgba(168, 130, 255, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: var(--h1-color, rgb(218, 218, 218));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  background: rgba(251, 70, 76, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: var(--h1-color, rgb(218, 218, 218));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  background: rgba(2, 122, 255, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: var(--h1-color, rgb(218, 218, 218));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="latest"] {
  --background-active-line: hsl(220, 8%, 19%);
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: hsl(20, 5%, 33%);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(220, 8%, 23%);
  --background-primary-alt: #1a1a1a;
  --background-secondary: hsl(218, 8%, 27%);
  --background-secondary-alt: hsl(218, 8%, 21%);
  --blockquote-background-color: hsl(218, 8%, 27%);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blockquote-border-thickness: 4px;
  --blockquote-style: italic;
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(217, 22%, 90%);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-success, 68, 207, 110);
  --callout-content-padding: var(--size-4-2) 0 var(--size-4-1, 8px 0 4px 0) 0;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: var(--size-4-4) var(--size-4-4) var(--size-4-3) var(--size-4-4, 16px 16px 12px 16px);
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(220, 8%, 23%);
  --canvas-controls-icon-size: 15px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666666;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: hsl(220, 8%, 23%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #1a1a1a;
  --code-border-color: hsl(20, 5%, 33%);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #666666;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #dadada;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #666666;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: hsl(220, 8%, 23%);
  --divider-color-hover: hsl(258, 88%, 66%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --font-interface: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', 'Inter', 'Arial';
  --font-text: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #666666;
  --graph-text: #dadada;
  --h2-bottom-spacing-edit: 0.3rem;
  --h2-top-spacing-edit: calc(1.4rem + 0.3em);
  --h5-line-height: 1.25em;
  --h6-line-height: 1.35;
  --heading-formatting: #666666;
  --heading-spacing: 1.4rem;
  --hr-color: hsl(20, 5%, 33%);
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-embed-margin: -1.70em;
  --list-indent: 1.6em;
  --lst-fab-button-radius: 20px;
  --menu-background: hsl(218, 8%, 27%);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(220, 8%, 23%);
  --pdf-page-background: hsl(220, 8%, 23%);
  --pdf-shadow: 0 0 0 1px hsl(20, 5%, 33%);
  --pdf-sidebar-background: hsl(220, 8%, 23%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(20, 5%, 33%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: hsl(220, 8%, 23%);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 14px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #1a1a1a;
  --setting-items-border-color: hsl(20, 5%, 33%);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #1a1a1a;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666666;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: hsl(20, 5%, 33%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666666;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(220, 8%, 23%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: hsl(220, 8%, 23%);
  --tab-curve: 4px;
  --tab-divider-color: hsl(20, 5%, 33%);
  --tab-font-size: 12px;
  --tab-outline-color: hsl(220, 8%, 23%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 12px;
  --tab-stacked-header-width: 38px;
  --tab-switcher-background: hsl(218, 8%, 27%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(218, 8%, 27%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #666666;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: hsl(20, 5%, 33%);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #666666;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsl(20, 5%, 33%);
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(15, 72%, 70%, 0.7);
  --tag-background-hover: hsla(15, 72%, 70%, 0.45);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #111;
  --tag-color-hover: #eee;
  --tag-size: 12px;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #fb464c;
  --text-faint: #666666;
  --text-highlight-bg: rgba(255, 208, 0, 0.3);
  --text-muted: #b3b3b3;
  --text-normal: #dadada;
  --text-selection: rgba(30, 144, 255, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 38px;
  --traffic-lights-offset-y: 38px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(68, 207, 110, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(68, 207, 110, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(68, 207, 110, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(68, 207, 110, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: var(--h1-color, rgb(218, 218, 218));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 21.6px;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--h3-top-spacing, 0px);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  background: rgba(2, 122, 255, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: var(--h1-color, rgb(218, 218, 218));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  background: rgba(233, 151, 63, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: var(--h1-color, rgb(218, 218, 218));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(158, 158, 158, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: var(--h1-color, rgb(218, 218, 218));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  background: rgba(68, 207, 110, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: var(--h1-color, rgb(218, 218, 218));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  background: rgba(83, 223, 221, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: var(--h1-color, rgb(218, 218, 218));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  background: rgba(2, 122, 255, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: var(--h1-color, rgb(218, 218, 218));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="update"] {
  --background-active-line: hsl(220, 8%, 19%);
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: hsl(20, 5%, 33%);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: hsl(220, 8%, 23%);
  --background-primary-alt: #1a1a1a;
  --background-secondary: hsl(218, 8%, 27%);
  --background-secondary-alt: hsl(218, 8%, 21%);
  --blockquote-background-color: hsl(218, 8%, 27%);
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blockquote-border-thickness: 4px;
  --blockquote-style: italic;
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(217, 22%, 90%);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-success, 68, 207, 110);
  --callout-content-padding: var(--size-4-2) 0 var(--size-4-1, 8px 0 4px 0) 0;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: var(--size-4-4) var(--size-4-4) var(--size-4-3) var(--size-4-4, 16px 16px 12px 16px);
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: hsl(220, 8%, 23%);
  --canvas-controls-icon-size: 15px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #dadada;
  --checkbox-border-color: #666666;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: hsl(220, 8%, 23%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #1a1a1a;
  --code-border-color: hsl(20, 5%, 33%);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #666666;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #dadada;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #666666;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: hsl(220, 8%, 23%);
  --divider-color-hover: hsl(258, 88%, 66%);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --font-interface: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', 'Inter', 'Arial';
  --font-text: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #666666;
  --graph-text: #dadada;
  --h2-bottom-spacing-edit: 0.3rem;
  --h2-top-spacing-edit: calc(1.4rem + 0.3em);
  --h5-line-height: 1.25em;
  --h6-line-height: 1.35;
  --heading-formatting: #666666;
  --heading-spacing: 1.4rem;
  --hr-color: hsl(20, 5%, 33%);
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-embed-margin: -1.70em;
  --list-indent: 1.6em;
  --lst-fab-button-radius: 20px;
  --menu-background: hsl(218, 8%, 27%);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: hsl(220, 8%, 23%);
  --pdf-page-background: hsl(220, 8%, 23%);
  --pdf-shadow: 0 0 0 1px hsl(20, 5%, 33%);
  --pdf-sidebar-background: hsl(220, 8%, 23%);
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(20, 5%, 33%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: hsl(220, 8%, 23%);
  --setting-group-heading-color: #dadada;
  --setting-group-heading-size: 14px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #1a1a1a;
  --setting-items-border-color: hsl(20, 5%, 33%);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #1a1a1a;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #666666;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: hsl(20, 5%, 33%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666666;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #666666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(220, 8%, 23%);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: hsl(220, 8%, 23%);
  --tab-curve: 4px;
  --tab-divider-color: hsl(20, 5%, 33%);
  --tab-font-size: 12px;
  --tab-outline-color: hsl(220, 8%, 23%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 12px;
  --tab-stacked-header-width: 38px;
  --tab-switcher-background: hsl(218, 8%, 27%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(218, 8%, 27%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #666666;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #dadada;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: hsl(20, 5%, 33%);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #666666;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: hsl(20, 5%, 33%);
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(15, 72%, 70%, 0.7);
  --tag-background-hover: hsla(15, 72%, 70%, 0.45);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #111;
  --tag-color-hover: #eee;
  --tag-size: 12px;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #fb464c;
  --text-faint: #666666;
  --text-highlight-bg: rgba(255, 208, 0, 0.3);
  --text-muted: #b3b3b3;
  --text-normal: #dadada;
  --text-selection: rgba(30, 144, 255, 0.4);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 38px;
  --traffic-lights-offset-y: 38px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(68, 207, 110, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(68, 207, 110, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(68, 207, 110, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(68, 207, 110, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: var(--h1-color, rgb(218, 218, 218));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 21.6px;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--h3-top-spacing, 0px);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  background: rgba(233, 151, 63, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: var(--h1-color, rgb(218, 218, 218));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13 21h8'/%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z'/%3E%3Cpath d='M14 2v5a1 1 0 0 0 1 1h5'/%3E%3Cpath d='M10 9H8'/%3E%3Cpath d='M16 13H8'/%3E%3Cpath d='M16 17H8'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="caption"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13 21h8'/%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="latest"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10.268 21a2 2 0 0 0 3.464 0'/%3E%3Cpath d='M22 8c0-2.3-.8-4.3-2-6'/%3E%3Cpath d='M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326'/%3E%3Cpath d='M4 2C2.8 3.7 2 5.7 2 8'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13 21h8'/%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 7 17l-5-5'/%3E%3Cpath d='m22 10-7.5 7.5L13 16'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.801 10A10 10 0 1 1 17 3.335'/%3E%3Cpath d='m9 11 3 3L22 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="update"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10.268 21a2 2 0 0 0 3.464 0'/%3E%3Cpath d='M22 8c0-2.3-.8-4.3-2-6'/%3E%3Cpath d='M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326'/%3E%3Cpath d='M4 2C2.8 3.7 2 5.7 2 8'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: var(--background-primary-alt, rgb(26, 26, 26));
  border-bottom-color: rgb(88, 83, 80);
  border-left-color: rgb(88, 83, 80);
  border-right-color: rgb(88, 83, 80);
  border-top-color: rgb(88, 83, 80);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(54, 57, 63));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: var(--h1-color, rgb(218, 218, 218));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(63, 67, 74);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(234, 151, 123, 0.7));
  border-bottom-left-radius: 8.4px;
  border-bottom-right-radius: 8.4px;
  border-top-left-radius: 8.4px;
  border-top-right-radius: 8.4px;
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: var(--h1-color, rgb(17, 17, 17));
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(224, 228, 235));
  font-family: var(--h1-font, Courgette);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(224, 228, 235));
  font-size: var(--inline-title-size, 25.6px);
  font-weight: var(--inline-title-weight, 600);
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(193, 201, 215));
  font-family: var(--h2-font, Courgette);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(224, 228, 235));
  font-family: var(--inline-title-font, Courgette);
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(162, 175, 195));
  font-family: var(--h3-font, Karla, Inter);
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(234, 225, 200));
  font-family: var(--h4-font, Karla, Inter);
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(220, 206, 163));
  font-family: var(--h5-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(206, 186, 126));
  font-family: var(--h6-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(54, 57, 63);
  border-left-color: rgb(54, 57, 63);
  border-right-color: rgb(54, 57, 63);
  border-right-width: 0px;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(88, 83, 80);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: var(--h1-color, rgb(218, 218, 218));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(63, 67, 74));
  border-bottom-color: rgb(54, 57, 63);
  border-left-color: rgb(54, 57, 63);
  border-right-color: rgb(54, 57, 63);
  border-top-color: rgb(54, 57, 63);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: var(--h1-color, rgb(179, 179, 179));
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: var(--h1-color, rgb(218, 218, 218));
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: var(--h1-color, rgb(179, 179, 179));
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  color: var(--h1-color, rgb(179, 179, 179));
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode svg {
  color: var(--h1-color, rgb(179, 179, 179));
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  color: var(--h1-color, rgb(179, 179, 179));
}

html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node-content {
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(63, 67, 74));
}`,
    bases: `html[saved-theme="dark"] body .bases-table {
  border-color: rgb(0, 0, 0) rgb(128, 128, 128);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(88, 83, 80);
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  background-color: var(--metadata-background, rgb(49, 52, 58));
  border-bottom-color: rgb(88, 83, 80);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(88, 83, 80);
  border-right-color: rgb(88, 83, 80);
  border-top-color: rgb(88, 83, 80);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: var(--h3-bottom-spacing, 32px);
  margin-top: var(--h3-top-spacing, 0px);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="dark"] body .metadata-properties {
  color: var(--h1-color, rgb(179, 179, 179));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}

html[saved-theme="dark"] body .note-properties {
  background-color: var(--metadata-background, rgb(49, 52, 58));
  border-color: rgb(88, 83, 80);
  border-radius: 8px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: var(--h1-color, rgb(179, 179, 179));
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(234, 151, 123, 0.7));
  border-radius: 8.4px;
  color: var(--pill-color, rgb(17, 17, 17));
}

html[saved-theme="dark"] body .note-properties-value {
  color: var(--h1-color, rgb(179, 179, 179));
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--code-background, rgb(54, 57, 63));
  color: var(--text-faint, rgb(218, 218, 218));
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--titlebar-background-focused, rgb(47, 49, 55));
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(47, 49, 55));
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(63, 67, 74));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body details {
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}

html[saved-theme="dark"] body input[type=text] {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(26, 26, 26));
}

html[saved-theme="dark"] body sub {
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body summary {
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body sup {
  color: var(--h1-color, rgb(218, 218, 218));
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(234, 151, 123, 0.7));
  border-bottom-left-radius: 7.2px;
  border-bottom-right-radius: 7.2px;
  border-top-left-radius: 7.2px;
  border-top-right-radius: 7.2px;
  color: var(--tag-color, rgb(17, 17, 17));
}`,
  },
  light: {
    base: `:root:root {
  --alt-checkbox-bg-content: '';
  --background-accent: hsl(223, 14%, 90%);
  --background-accent-alt: hsl(220, 16%, 88%);
  --background-active-line: var(--background-accent-alt, hsl(220, 16%, 88%));
  --background-modifier-backlinks: hsl(220, 16%, 90%);
  --background-modifier-border: var(--color-base-30, #ada7a4);
  --background-modifier-cover: hsl(223, 14%, 85%);
  --background-modifier-form-field: var(--color-base-00, #e6e6e6);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #e6e6e6);
  --background-primary: var(--color-base-00, hsl(220, 16%, 92%));
  --background-secondary: var(--color-base-20, hsl(218, 16%, 85%));
  --background-secondary-alt: var(--color-base-05, hsl(218, 16%, 81%));
  --bases-cards-background: var(--background-primary, hsl(220, 16%, 92%));
  --bases-embed-border-color: var(--background-modifier-border, #ada7a4);
  --bases-group-heading-property-color: var(--text-muted, #1a1a1a);
  --bases-group-heading-property-size: var(--font-ui-smaller, 11px);
  --bases-table-border-color: var(--table-border-color, #ada7a4);
  --bases-table-cell-background-active: var(--background-primary, hsl(220, 16%, 92%));
  --bases-table-header-background: var(--background-primary, hsl(220, 16%, 92%));
  --bases-table-header-color: var(--text-muted, #1a1a1a);
  --bases-table-summary-background: var(--background-primary, hsl(220, 16%, 92%));
  --blockquote-background-color: var(--background-secondary, hsl(218, 16%, 85%));
  --blockquote-border-thickness: var(--size-4-1, 4px);
  --blockquote-font-style: italic;
  --blockquote-style: var(--blockquote-font-style, italic);
  --bodyFont: var(--font-text-theme, 'Inter');
  --bold-color: var(--h1-color, hsl(217, 22%, 30%));
  --bold-weight: var(--font-bold, 700);
  --canvas-background: var(--background-primary, hsl(220, 16%, 92%));
  --canvas-card-label-color: var(--text-faint, #808080);
  --canvas-controls-icon-size: var(--icon-s, 15px);
  --checkbox-border-color: var(--text-faint, #808080);
  --checkbox-border-color-hover: var(--text-muted, #1a1a1a);
  --checkbox-color-hover: var(--interactive-accent-hover, #708ca9);
  --checkbox-marker-color: var(--background-primary, hsl(220, 16%, 92%));
  --checklist-done-color: var(--text-muted, #1a1a1a);
  --code-border-color: var(--background-modifier-border, #ada7a4);
  --code-comment: var(--text-faint, #808080);
  --code-punctuation: var(--text-muted, #1a1a1a);
  --collapse-icon-color: var(--text-faint, #808080);
  --dark: var(--text-muted, var(--color-base-70, #1a1a1a));
  --darkgray: var(--text-muted, var(--color-base-70, #1a1a1a));
  --default-font: 'Inter';
  --divider-color: var(--background-secondary, hsl(220, 16%, 92%));
  --divider-width: 0px;
  --file-header-background: var(--background-primary, hsl(220, 16%, 92%));
  --file-header-background-focused: var(--background-primary, hsl(220, 16%, 92%));
  --file-header-font: var(--font-interface, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-ui-small, 12px);
  --font-mermaid: var(--font-text, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-text-theme: 'Inter';
  --font-ui-medium: 14px;
  --font-ui-small: 12px;
  --font-ui-smaller: 11px;
  --footnote-divider-color: var(--metadata-divider-color, #ada7a4);
  --footnote-id-color: var(--text-muted, #1a1a1a);
  --footnote-id-color-no-occurrences: var(--text-faint, #808080);
  --footnote-line-height: var(--line-height-normal, 1.35);
  --graph-node: var(--text-muted, #1a1a1a);
  --graph-node-unresolved: var(--text-faint, #808080);
  --gray: var(--text-muted, var(--color-base-70, #1a1a1a));
  --h1-border-width: 1px;
  --h1-color: hsl(217, 22%, 30%);
  --h1-font: Courgette;
  --h1-size: 1.60em;
  --h1-weight: 600;
  --h2-border-width: 1px;
  --h2-bottom-spacing: 0.3rem;
  --h2-bottom-spacing-edit: var(--h2-bottom-spacing, 0.3rem);
  --h2-color: hsl(217, 22%, 40%);
  --h2-font: Courgette;
  --h2-line-height: 1.1em;
  --h2-size: 1.48em;
  --h2-top-spacing: 1.4rem;
  --h2-top-spacing-edit: calc(var(--h2-top-spacing) + var(--list-spacing) + var(--list-spacing)/2);
  --h2-weight: 600;
  --h3-border-width: 0px;
  --h3-color: hsl(217, 22%, 50%);
  --h3-font: 'Karla', 'Inter';
  --h3-line-height: 1.2em;
  --h3-size: 1.36em;
  --h3-weight: 600;
  --h4-bottom-spacing: 0.1rem;
  --h4-color: hsl(45, 45%, 40%);
  --h4-font: 'Karla', 'Inter';
  --h4-line-height: 1.25em;
  --h4-size: 1.12em;
  --h4-weight: 600;
  --h5-color: hsl(45, 45%, 30%);
  --h5-line-height: var(--line-height-normal, 1.25em);
  --h5-size: 1.00em;
  --h5-weight: 600;
  --h6-color: hsl(45, 45%, 20%);
  --h6-line-height: var(--line-height-normal, 1.35);
  --h6-size: 1.00em;
  --he-title-bar-active-bg: #EAA4A4;
  --he-title-bar-active-pinned-bg: #A7B3A1;
  --he-title-bar-inactive-bg: #EAA4A4;
  --he-title-bar-inactive-pinned-bg: #A7B3A1;
  --header-height: 38px;
  --headerFont: var(--font-text-theme, 'Inter');
  --heading-formatting: var(--text-faint, #808080);
  --heading-spacing: var(--h2-top-spacing, 1.4rem);
  --hr-color: var(--background-modifier-border, #ada7a4);
  --icon-color: var(--text-muted, #1a1a1a);
  --icon-color-hover: var(--text-muted, #1a1a1a);
  --icon-l: 17px;
  --icon-m: 17px;
  --icon-s: 15px;
  --icon-size: var(--icon-m, 17px);
  --ig-left-2: -12px;
  --ig-left-3: -9px;
  --ig-left-4: -8px;
  --indentation-guide-color: var(--background-modifier-border, #ada7a4);
  --inline-title-color: var(--h1-color, hsl(217, 22%, 30%));
  --inline-title-font: var(--h1-font, Courgette);
  --inline-title-size: var(--h1-size, 1.60em);
  --inline-title-weight: var(--h1-weight, 600);
  --input-date-separator: var(--text-faint, #808080);
  --input-placeholder-color: var(--text-faint, #808080);
  --interactive-accent-hover: var(--color-accent-2, #708ca9);
  --keyheader-font: 'Open Sans';
  --light: var(--background-primary, var(--color-base-00, hsl(220, 16%, 92%)));
  --lightgray: var(--background-secondary, var(--color-base-20, hsl(218, 16%, 85%)));
  --line-height-normal: 1.35;
  --link-decoration: none;
  --list-bullet-size: 0.3rem;
  --list-embed-adj: 0px;
  --list-embed-margin: -1.60em;
  --list-guide-adj: 0px;
  --list-guide-adj-mobile: 0px;
  --list-guide-outliner-adj: 0px;
  --list-indent-first: 1.6em;
  --list-indent-read: 1.5em;
  --list-marker-color: var(--text-faint, #808080);
  --list-marker-color-hover: var(--text-muted, #1a1a1a);
  --list-spacing: 0.2em;
  --lst-fab-b2-y: 30vh;
  --lst-fab-button-radius: calc(var(--lst-fab-button-size)/3);
  --lst-fab-button-size: 60px;
  --lst-fab-view-x: 2vw;
  --lst-fab-view-y: 10vh;
  --lst-p-ul-margin: 0.4em;
  --math-block-list-align: left;
  --menu-background: var(--background-secondary, hsl(218, 16%, 85%));
  --metadata-background: var(--background-secondary-alt, hsl(218, 16%, 81%));
  --metadata-border-color: var(--background-modifier-border, #ada7a4);
  --metadata-border-radius: var(--size-4-2, 8px);
  --metadata-divider-color: var(--background-modifier-border, #ada7a4);
  --metadata-input-font: var(--font-interface, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-font: var(--font-interface, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #1a1a1a);
  --metadata-label-text-color-hover: var(--text-muted, #1a1a1a);
  --metadata-label-width: 8em;
  --metadata-padding: var(--size-4-2, 8px);
  --metadata-sidebar-input-font-size: var(--font-ui-small, 12px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 12px);
  --modal-background: var(--background-primary, hsl(220, 16%, 92%));
  --modal-border-width: var(--border-width, 0px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #808080);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #808080);
  --nav-heading-color-collapsed: var(--text-faint, #808080);
  --nav-heading-color-collapsed-hover: var(--text-muted, #1a1a1a);
  --nav-indentation-guide-color: var(--indentation-guide-color, #ada7a4);
  --nav-item-color: var(--text-muted, #1a1a1a);
  --nav-item-size: var(--font-ui-small, 12px);
  --nav-tag-color: var(--text-faint, #808080);
  --nav-tag-color-active: var(--text-muted, #1a1a1a);
  --nav-tag-color-hover: var(--text-muted, #1a1a1a);
  --pdf-background: var(--background-primary, hsl(220, 16%, 92%));
  --pdf-page-background: var(--background-primary, hsl(220, 16%, 92%));
  --pdf-sidebar-background: var(--background-primary, hsl(220, 16%, 92%));
  --pill-border-color: var(--background-modifier-border, #ada7a4);
  --pill-color: var(--text-muted, #1a1a1a);
  --pill-color-remove: var(--text-faint, #808080);
  --popover-width: 500px;
  --prompt-background: var(--background-primary, hsl(220, 16%, 92%));
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent) linear-gradient(hsl(220, 16%, 92%), color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent)));
  --ribbon-background: var(--background-primary, hsl(220, 16%, 92%));
  --ribbon-background-collapsed: var(--background-modifier-cover, hsl(223, 14%, 85%));
  --ribbon-width: 40px;
  --search-clear-button-color: var(--text-muted, #1a1a1a);
  --search-icon-color: var(--text-muted, #1a1a1a);
  --search-result-background: var(--background-primary, hsl(220, 16%, 92%));
  --setting-group-heading-size: var(--font-ui-medium, 14px);
  --setting-items-border-color: var(--background-modifier-border, #ada7a4);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #1a1a1a);
  --shiki-code-comment: var(--text-faint, #808080);
  --shiki-code-normal: var(--text-muted, #1a1a1a);
  --shiki-code-punctuation: var(--text-muted, #1a1a1a);
  --shiki-gutter-border-color: var(--background-modifier-border, #ada7a4);
  --shiki-gutter-text-color: var(--text-faint, #808080);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #1a1a1a);
  --shiki-highlight-neutral: var(--shiki-code-normal, #1a1a1a);
  --shiki-terminal-dots-color: var(--text-faint, #808080);
  --slider-track-background: var(--background-modifier-border, #ada7a4);
  --status-bar-background: var(--background-secondary, hsl(218, 16%, 85%));
  --status-bar-border-color: var(--divider-color, hsl(220, 16%, 92%));
  --status-bar-font-size: var(--font-ui-smaller, 11px);
  --status-bar-text-color: var(--text-muted, #1a1a1a);
  --suggestion-background: var(--background-primary, hsl(220, 16%, 92%));
  --tab-background-active: var(--background-primary, hsl(220, 16%, 92%));
  --tab-container-background: var(--titlebar-background-focused, hsl(223, 14%, 85%));
  --tab-curve: var(--size-4-1, 4px);
  --tab-divider-color: var(--background-modifier-border, #ada7a4);
  --tab-font-size: var(--font-ui-small, 12px);
  --tab-outline-color: var(--divider-color, hsl(220, 16%, 92%));
  --tab-outline-width: 0px;
  --tab-stacked-font-size: var(--font-ui-small, 12px);
  --tab-stacked-header-width: var(--header-height, 38px);
  --tab-stacked-shadow: -4px 0 8px 0 rgba(0, 0, 0, 0.2);
  --tab-switcher-background: var(--background-secondary, hsl(218, 16%, 85%));
  --tab-text-color: var(--text-faint, #808080);
  --tab-text-color-active: var(--text-muted, #1a1a1a);
  --tab-text-color-focused: var(--text-muted, #1a1a1a);
  --tab-text-color-focused-active: var(--text-muted, #1a1a1a);
  --table-add-button-border-color: var(--background-modifier-border, #ada7a4);
  --table-border-color: var(--background-modifier-border, #ada7a4);
  --table-drag-handle-color: var(--text-faint, #808080);
  --table-header-border-color: var(--table-border-color, #ada7a4);
  --tag-background: hsla(var(--tag-bg-accent-hsl), 0.7);
  --tag-background-hover: hsla(var(--tag-bg-accent-hsl), 0.45);
  --tag-bg-accent-hsl: 15, 72%, 70%;
  --tag-color: var(--text-accent, #111);
  --tag-color-hover: var(--text-accent, #eee);
  --tag-padding-x: 0.5em;
  --tag-padding-y: 0.1em;
  --tag-radius: 0.6em;
  --tag-size: var(--font-smaller, 12px);
  --tertiary: var(--interactive-accent-hover, var(--color-accent-2, #708ca9));
  --text-faint: var(--color-base-50, #808080);
  --text-muted: var(--color-base-70, #1a1a1a);
  --titleFont: var(--font-text-theme, 'Inter');
  --titlebar-background: var(--titlebar-background-focused, hsl(223, 14%, 85%));
  --titlebar-background-focused: var(--background-modifier-cover, hsl(223, 14%, 85%));
  --titlebar-border-color: var(--background-modifier-border, #ada7a4);
  --titlebar-text-color: var(--text-muted, #1a1a1a);
  --traffic-lights-offset-x: var(--header-height, 38px);
  --traffic-lights-offset-y: var(--header-height, 38px);
  --vault-profile-font-size: var(--font-ui-small, 12px);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(211, 214, 222));
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-modifier-cover, rgb(211, 214, 222));
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--titlebar-background-focused, rgb(211, 214, 222));
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(231, 234, 238);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(211, 214, 222));
  border-left-color: rgb(231, 234, 238);
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body html {
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(60, 73, 93));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(60, 73, 93) none 0px;
  text-decoration-color: rgb(60, 73, 93);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(60, 73, 93));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(60, 73, 93) none 0px;
  text-decoration-color: rgb(60, 73, 93);
}

html[saved-theme="light"] body .text-highlight {
  color: var(--text-normal, rgb(60, 73, 93));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(60, 73, 93) none 0px;
  text-decoration-color: rgb(60, 73, 93);
}

html[saved-theme="light"] body del {
  color: var(--h1-color, rgb(34, 34, 34));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h1.article-title {
  font-size: 12px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(128, 128, 128);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(26, 26, 26));
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.broken {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: var(--h1-color, rgb(34, 34, 34));
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}

html[saved-theme="light"] body dl {
  margin-bottom: var(--h3-bottom-spacing, 16px);
  margin-top: var(--h3-top-spacing, 16px);
}

html[saved-theme="light"] body dt {
  color: var(--h1-color, rgb(34, 34, 34));
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}

html[saved-theme="light"] body ol > li {
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body ul > li {
  color: var(--h1-color, rgb(34, 34, 34));
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(128, 128, 128));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(211, 215, 223));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: var(--blockquote-font-style, italic);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body table {
  background-color: var(--background-secondary, rgb(211, 215, 223));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-top-color: rgb(0, 0, 0);
  border-top-style: solid;
  border-top-width: 3px;
  color: var(--h1-color, rgb(34, 34, 34));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--heading-spacing, 8px);
  width: 200.141px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: var(--background-secondary-alt, rgb(199, 204, 214));
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(173, 167, 164);
  padding-bottom: 6.4px;
  padding-left: 9.6px;
  padding-right: 9.6px;
  padding-top: 6.4px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(173, 167, 164);
  border-bottom-width: 0px;
  border-left-color: rgb(173, 167, 164);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(173, 167, 164);
  border-right-width: 0px;
  border-top-color: rgb(173, 167, 164);
  border-top-width: var(--table-header-border-width, 0px);
  font-weight: var(--table-header-weight, 700);
  padding-bottom: 6.4px;
  padding-left: 9.6px;
  padding-right: 9.6px;
  padding-top: 6.4px;
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(173, 167, 164);
  border-left-color: rgb(173, 167, 164);
  border-right-color: rgb(173, 167, 164);
  border-top-color: rgb(173, 167, 164);
  padding-bottom: 1.44px;
  padding-left: 3.6px;
  padding-right: 3.6px;
  padding-top: 1.44px;
}

html[saved-theme="light"] body pre:has(> code) {
  border-bottom-color: rgb(211, 215, 223);
  border-bottom-width: 1px;
  border-left-color: rgb(211, 215, 223);
  border-left-width: 1px;
  border-right-color: rgb(211, 215, 223);
  border-right-width: 1px;
  border-top-color: rgb(211, 215, 223);
  border-top-width: 1px;
}`,
    images: `html[saved-theme="light"] body figcaption {
  color: var(--h1-color, rgb(34, 34, 34));
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}

html[saved-theme="light"] body figure {
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(60, 73, 93);
  border-left-color: rgb(60, 73, 93);
  border-right-color: rgb(60, 73, 93);
  border-top-color: rgb(60, 73, 93);
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}

html[saved-theme="light"] body video {
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}

html[saved-theme="light"] body .footnotes {
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .transclude {
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
  padding-bottom: 3.2px;
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .transclude-inner {
  margin-bottom: var(--h3-bottom-spacing, 7px);
  margin-top: var(--h3-top-spacing, 7px);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] {
  --background-active-line: hsl(220, 16%, 88%);
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #ada7a4;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #e6e6e6;
  --background-modifier-form-field-hover: #e6e6e6;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: hsl(220, 16%, 92%);
  --background-primary-alt: #fafafa;
  --background-secondary: hsl(218, 16%, 85%);
  --background-secondary-alt: hsl(218, 16%, 81%);
  --blockquote-background-color: hsl(218, 16%, 85%);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blockquote-border-thickness: 4px;
  --blockquote-style: italic;
  --blur-background: color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent) linear-gradient(hsl(220, 16%, 92%), color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(217, 22%, 30%);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(220, 16%, 92%);
  --canvas-controls-icon-size: 15px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #808080;
  --checkbox-border-color-hover: #1a1a1a;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: #708ca9;
  --checkbox-marker-color: hsl(220, 16%, 92%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #1a1a1a;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #ada7a4;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #808080;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #1a1a1a;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #808080;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: hsl(220, 16%, 92%);
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', 'Inter', 'Arial';
  --font-text: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #1a1a1a;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #808080;
  --graph-text: #222222;
  --h2-bottom-spacing-edit: 0.3rem;
  --h2-top-spacing: 0.4rem;
  --h2-top-spacing-edit: calc(0.4rem + 0.3em);
  --h3-bottom-spacing: 0.2rem;
  --h3-bottom-spacing-edit: 0.2rem;
  --h3-top-spacing: 0.2rem;
  --h3-top-spacing-edit: calc(0.2rem + 0.2em);
  --h5-line-height: 1.25em;
  --h6-line-height: 1.35;
  --heading-formatting: #808080;
  --heading-spacing: 1.4rem;
  --hr-color: #ada7a4;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: #708ca9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --lst-fab-button-radius: 20px;
  --menu-background: hsl(218, 16%, 85%);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(220, 16%, 92%);
  --pdf-page-background: hsl(220, 16%, 92%);
  --pdf-sidebar-background: hsl(220, 16%, 92%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent) linear-gradient(hsl(220, 16%, 92%), color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #1a1a1a;
  --search-icon-color: #1a1a1a;
  --search-result-background: hsl(220, 16%, 92%);
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 14px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #ada7a4;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #1a1a1a;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #808080;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #1a1a1a;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #1a1a1a;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #ada7a4;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #808080;
  --shiki-gutter-text-color-highlight: #1a1a1a;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #1a1a1a;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #808080;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(220, 16%, 92%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: hsl(220, 16%, 92%);
  --tab-curve: 4px;
  --tab-divider-color: #ada7a4;
  --tab-font-size: 12px;
  --tab-outline-color: hsl(220, 16%, 92%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 12px;
  --tab-stacked-header-width: 38px;
  --tab-switcher-background: hsl(218, 16%, 85%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(218, 16%, 85%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #808080;
  --tab-text-color-active: #1a1a1a;
  --tab-text-color-focused: #1a1a1a;
  --tab-text-color-focused-active: #1a1a1a;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #ada7a4;
  --table-add-button-border-width: 1px;
  --table-border-color: #ada7a4;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #808080;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #ada7a4;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(15, 72%, 70%, 0.7);
  --tag-background-hover: hsla(15, 72%, 70%, 0.45);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #111;
  --tag-color-hover: #eee;
  --tag-size: 12px;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #808080;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #1a1a1a;
  --text-normal: #222222;
  --text-selection: DarkGray;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 38px;
  --traffic-lights-offset-y: 38px;
  background-color: rgba(233, 49, 71, 0.18);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(34, 34, 34));
  content: "";
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 21.6px;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--h3-top-spacing, 0px);
  padding-bottom: calc(var(--list-spacing)/2);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] {
  --background-active-line: hsl(220, 16%, 88%);
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #ada7a4;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #e6e6e6;
  --background-modifier-form-field-hover: #e6e6e6;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: hsl(220, 16%, 92%);
  --background-primary-alt: #fafafa;
  --background-secondary: hsl(218, 16%, 85%);
  --background-secondary-alt: hsl(218, 16%, 81%);
  --blockquote-background-color: hsl(218, 16%, 85%);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blockquote-border-thickness: 4px;
  --blockquote-style: italic;
  --blur-background: color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent) linear-gradient(hsl(220, 16%, 92%), color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(217, 22%, 30%);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(220, 16%, 92%);
  --canvas-controls-icon-size: 15px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #808080;
  --checkbox-border-color-hover: #1a1a1a;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: #708ca9;
  --checkbox-marker-color: hsl(220, 16%, 92%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #1a1a1a;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #ada7a4;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #808080;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #1a1a1a;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #808080;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: hsl(220, 16%, 92%);
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', 'Inter', 'Arial';
  --font-text: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #1a1a1a;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #808080;
  --graph-text: #222222;
  --h2-bottom-spacing-edit: 0.3rem;
  --h2-top-spacing: 0.4rem;
  --h2-top-spacing-edit: calc(0.4rem + 0.3em);
  --h3-bottom-spacing: 0.2rem;
  --h3-bottom-spacing-edit: 0.2rem;
  --h3-top-spacing: 0.2rem;
  --h3-top-spacing-edit: calc(0.2rem + 0.2em);
  --h5-line-height: 1.25em;
  --h6-line-height: 1.35;
  --heading-formatting: #808080;
  --heading-spacing: 1.4rem;
  --hr-color: #ada7a4;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: #708ca9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --lst-fab-button-radius: 20px;
  --menu-background: hsl(218, 16%, 85%);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(220, 16%, 92%);
  --pdf-page-background: hsl(220, 16%, 92%);
  --pdf-sidebar-background: hsl(220, 16%, 92%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent) linear-gradient(hsl(220, 16%, 92%), color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #1a1a1a;
  --search-icon-color: #1a1a1a;
  --search-result-background: hsl(220, 16%, 92%);
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 14px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #ada7a4;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #1a1a1a;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #808080;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #1a1a1a;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #1a1a1a;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #ada7a4;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #808080;
  --shiki-gutter-text-color-highlight: #1a1a1a;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #1a1a1a;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #808080;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(220, 16%, 92%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: hsl(220, 16%, 92%);
  --tab-curve: 4px;
  --tab-divider-color: #ada7a4;
  --tab-font-size: 12px;
  --tab-outline-color: hsl(220, 16%, 92%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 12px;
  --tab-stacked-header-width: 38px;
  --tab-switcher-background: hsl(218, 16%, 85%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(218, 16%, 85%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #808080;
  --tab-text-color-active: #1a1a1a;
  --tab-text-color-focused: #1a1a1a;
  --tab-text-color-focused-active: #1a1a1a;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #ada7a4;
  --table-add-button-border-width: 1px;
  --table-border-color: #ada7a4;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #808080;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #ada7a4;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(15, 72%, 70%, 0.7);
  --tag-background-hover: hsla(15, 72%, 70%, 0.45);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #111;
  --tag-color-hover: #eee;
  --tag-size: 12px;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #808080;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #1a1a1a;
  --text-normal: #222222;
  --text-selection: DarkGray;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 38px;
  --traffic-lights-offset-y: 38px;
  background-color: rgba(236, 117, 0, 0.18);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(34, 34, 34));
  content: "";
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 21.6px;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--h3-top-spacing, 0px);
  padding-bottom: calc(var(--list-spacing)/2);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] {
  --background-active-line: hsl(220, 16%, 88%);
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #ada7a4;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #e6e6e6;
  --background-modifier-form-field-hover: #e6e6e6;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: hsl(220, 16%, 92%);
  --background-primary-alt: #fafafa;
  --background-secondary: hsl(218, 16%, 85%);
  --background-secondary-alt: hsl(218, 16%, 81%);
  --blockquote-background-color: hsl(218, 16%, 85%);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blockquote-border-thickness: 4px;
  --blockquote-style: italic;
  --blur-background: color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent) linear-gradient(hsl(220, 16%, 92%), color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(217, 22%, 30%);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(220, 16%, 92%);
  --canvas-controls-icon-size: 15px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #808080;
  --checkbox-border-color-hover: #1a1a1a;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: #708ca9;
  --checkbox-marker-color: hsl(220, 16%, 92%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #1a1a1a;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #ada7a4;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #808080;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #1a1a1a;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #808080;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: hsl(220, 16%, 92%);
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', 'Inter', 'Arial';
  --font-text: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #1a1a1a;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #808080;
  --graph-text: #222222;
  --h2-bottom-spacing-edit: 0.3rem;
  --h2-top-spacing: 0.4rem;
  --h2-top-spacing-edit: calc(0.4rem + 0.3em);
  --h3-bottom-spacing: 0.2rem;
  --h3-bottom-spacing-edit: 0.2rem;
  --h3-top-spacing: 0.2rem;
  --h3-top-spacing-edit: calc(0.2rem + 0.2em);
  --h5-line-height: 1.25em;
  --h6-line-height: 1.35;
  --heading-formatting: #808080;
  --heading-spacing: 1.4rem;
  --hr-color: #ada7a4;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: #708ca9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --lst-fab-button-radius: 20px;
  --menu-background: hsl(218, 16%, 85%);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(220, 16%, 92%);
  --pdf-page-background: hsl(220, 16%, 92%);
  --pdf-sidebar-background: hsl(220, 16%, 92%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent) linear-gradient(hsl(220, 16%, 92%), color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #1a1a1a;
  --search-icon-color: #1a1a1a;
  --search-result-background: hsl(220, 16%, 92%);
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 14px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #ada7a4;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #1a1a1a;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #808080;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #1a1a1a;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #1a1a1a;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #ada7a4;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #808080;
  --shiki-gutter-text-color-highlight: #1a1a1a;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #1a1a1a;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #808080;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(220, 16%, 92%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: hsl(220, 16%, 92%);
  --tab-curve: 4px;
  --tab-divider-color: #ada7a4;
  --tab-font-size: 12px;
  --tab-outline-color: hsl(220, 16%, 92%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 12px;
  --tab-stacked-header-width: 38px;
  --tab-switcher-background: hsl(218, 16%, 85%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(218, 16%, 85%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #808080;
  --tab-text-color-active: #1a1a1a;
  --tab-text-color-focused: #1a1a1a;
  --tab-text-color-focused-active: #1a1a1a;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #ada7a4;
  --table-add-button-border-width: 1px;
  --table-border-color: #ada7a4;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #808080;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #ada7a4;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(15, 72%, 70%, 0.7);
  --tag-background-hover: hsla(15, 72%, 70%, 0.45);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #111;
  --tag-color-hover: #eee;
  --tag-size: 12px;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #808080;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #1a1a1a;
  --text-normal: #222222;
  --text-selection: DarkGray;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 38px;
  --traffic-lights-offset-y: 38px;
  background-color: rgba(224, 172, 0, 0.18);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(34, 34, 34));
  content: "";
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 21.6px;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--h3-top-spacing, 0px);
  padding-bottom: calc(var(--list-spacing)/2);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] {
  --background-active-line: hsl(220, 16%, 88%);
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #ada7a4;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #e6e6e6;
  --background-modifier-form-field-hover: #e6e6e6;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: hsl(220, 16%, 92%);
  --background-primary-alt: #fafafa;
  --background-secondary: hsl(218, 16%, 85%);
  --background-secondary-alt: hsl(218, 16%, 81%);
  --blockquote-background-color: hsl(218, 16%, 85%);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blockquote-border-thickness: 4px;
  --blockquote-style: italic;
  --blur-background: color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent) linear-gradient(hsl(220, 16%, 92%), color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(217, 22%, 30%);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(220, 16%, 92%);
  --canvas-controls-icon-size: 15px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #808080;
  --checkbox-border-color-hover: #1a1a1a;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: #708ca9;
  --checkbox-marker-color: hsl(220, 16%, 92%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #1a1a1a;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #ada7a4;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #808080;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #1a1a1a;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #808080;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: hsl(220, 16%, 92%);
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', 'Inter', 'Arial';
  --font-text: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #1a1a1a;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #808080;
  --graph-text: #222222;
  --h2-bottom-spacing-edit: 0.3rem;
  --h2-top-spacing: 0.4rem;
  --h2-top-spacing-edit: calc(0.4rem + 0.3em);
  --h3-bottom-spacing: 0.2rem;
  --h3-bottom-spacing-edit: 0.2rem;
  --h3-top-spacing: 0.2rem;
  --h3-top-spacing-edit: calc(0.2rem + 0.2em);
  --h5-line-height: 1.25em;
  --h6-line-height: 1.35;
  --heading-formatting: #808080;
  --heading-spacing: 1.4rem;
  --hr-color: #ada7a4;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: #708ca9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.6em;
  --lst-fab-button-radius: 20px;
  --menu-background: hsl(218, 16%, 85%);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(220, 16%, 92%);
  --pdf-page-background: hsl(220, 16%, 92%);
  --pdf-sidebar-background: hsl(220, 16%, 92%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent) linear-gradient(hsl(220, 16%, 92%), color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #1a1a1a;
  --search-icon-color: #1a1a1a;
  --search-result-background: hsl(220, 16%, 92%);
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 14px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #ada7a4;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #1a1a1a;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #808080;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #1a1a1a;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #1a1a1a;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #ada7a4;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #808080;
  --shiki-gutter-text-color-highlight: #1a1a1a;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #1a1a1a;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #808080;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(220, 16%, 92%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: hsl(220, 16%, 92%);
  --tab-curve: 4px;
  --tab-divider-color: #ada7a4;
  --tab-font-size: 12px;
  --tab-outline-color: hsl(220, 16%, 92%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 12px;
  --tab-stacked-header-width: 38px;
  --tab-switcher-background: hsl(218, 16%, 85%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(218, 16%, 85%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #808080;
  --tab-text-color-active: #1a1a1a;
  --tab-text-color-focused: #1a1a1a;
  --tab-text-color-focused-active: #1a1a1a;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #ada7a4;
  --table-add-button-border-width: 1px;
  --table-border-color: #ada7a4;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #808080;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #ada7a4;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(15, 72%, 70%, 0.7);
  --tag-background-hover: hsla(15, 72%, 70%, 0.45);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #111;
  --tag-color-hover: #eee;
  --tag-size: 12px;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #808080;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #1a1a1a;
  --text-normal: #222222;
  --text-selection: DarkGray;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 38px;
  --traffic-lights-offset-y: 38px;
  background-color: rgba(120, 82, 238, 0.18);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(34, 34, 34));
  content: "";
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 21.6px;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--h3-top-spacing, 0px);
  padding-bottom: calc(var(--list-spacing)/2);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(128, 128, 128);
  text-decoration: line-through 1px rgb(128, 128, 128);
  text-decoration-color: rgb(128, 128, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(128, 128, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM6.07,3.55c-.08,.29-.09,.6-.03,.9l.86,4.56c.05,.28,.2,.52,.42,.7,.22,.18,.49,.28,.77,.28s.55-.1,.77-.28c.22-.18,.36-.43,.42-.7l.86-4.56c.06-.3,.04-.61-.03-.9-.08-.29-.22-.57-.41-.8-.19-.23-.44-.42-.71-.55-.28-.13-.58-.2-.88-.2s-.61,.07-.88,.2c-.28,.13-.52,.32-.71,.55-.19,.23-.34,.51-.41,.8Zm3.07,10.01c.28-.28,.44-.66,.44-1.06s-.16-.78-.44-1.06c-.28-.28-.66-.44-1.06-.44s-.78,.16-1.06,.44c-.28,.28-.44,.66-.44,1.06s.16,.78,.44,1.06c.28,.28,.66,.44,1.06,.44s.78-.16,1.06-.44Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}.cls-2{fill-rule:evenodd}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20class=%22cls-2%22%20d=%22M8,16c4.42,0,8-3.58,8-8S12.42,0,8,0,0,3.58,0,8s3.58,8,8,8ZM6.07,3.55c-.08,.29-.09,.6-.03,.9l.86,4.56c.05,.28,.2,.52,.42,.7,.22,.18,.49,.28,.77,.28s.55-.1,.77-.28c.22-.18,.36-.43,.42-.7l.86-4.56c.06-.3,.04-.61-.03-.9-.08-.29-.22-.57-.41-.8-.19-.23-.44-.42-.71-.55-.28-.13-.58-.2-.88-.2s-.61,.07-.88,.2c-.28,.13-.52,.32-.71,.55-.19,.23-.34,.51-.41,.8Zm3.07,10.01c.28-.28,.44-.66,.44-1.06s-.16-.78-.44-1.06c-.28-.28-.66-.44-1.06-.44s-.78,.16-1.06,.44c-.28,.28-.44,.66-.44,1.06s.16,.78,.44,1.06c.28,.28,.66,.44,1.06,.44s.78-.16,1.06-.44Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  color: rgb(158, 158, 158);
  content: "❝";
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M8.91,.58c-.08-.17-.21-.32-.37-.42C8.38,.05,8.19,0,8,0s-.38,.05-.54,.16c-.16,.1-.29,.25-.37,.42l-1.93,4.12L.85,5.36c-.18,.03-.35,.1-.49,.22-.14,.12-.25,.27-.3,.45-.06,.17-.07,.36-.03,.54,.04,.18,.13,.34,.26,.48l3.15,3.23-.75,4.57c-.03,.19,0,.38,.06,.55,.07,.17,.19,.32,.35,.43,.15,.11,.33,.17,.52,.18,.19,0,.37-.03,.54-.12l3.84-2.13,3.84,2.13c.16,.09,.35,.13,.54,.12,.19-.01,.37-.07,.52-.18,.15-.11,.27-.26,.35-.43,.07-.17,.09-.36,.06-.55l-.75-4.57,3.15-3.23c.13-.13,.22-.3,.26-.48,.04-.18,.03-.37-.03-.54-.06-.17-.16-.33-.31-.45-.14-.12-.31-.2-.49-.22l-4.31-.66L8.91,.58Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
  color: rgb(128, 128, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
  color: rgb(128, 128, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm6.67,4.33c0,1.45-.36,2.79-1.07,4.02-.72,1.23-1.69,2.2-2.91,2.91-1.23,.72-2.56,1.07-4.02,1.07s-2.79-.36-4.02-1.07c-1.23-.72-2.2-1.69-2.91-2.91-.72-1.23-1.07-2.56-1.07-4.02S.36,5.21,1.07,3.98c.72-1.23,1.69-2.2,2.91-2.91,1.23-.72,2.56-1.07,4.02-1.07s2.79,.36,4.02,1.07c1.23,.72,2.2,1.69,2.91,2.91,.72,1.23,1.07,2.56,1.07,4.02Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M10.67,13v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-1V5.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-3.33c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h1v3.33h-1c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h4.67c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm-1.33-9.33v-1.67c0-.1-.03-.18-.09-.24s-.14-.09-.24-.09h-2c-.1,0-.18,.03-.24,.09s-.09,.14-.09,.24v1.67c0,.1,.03,.18,.09,.24s.14,.09,.24,.09h2c.1,0,.18-.03,.24-.09s.09-.14,.09-.24Zm6.67,4.33c0,1.45-.36,2.79-1.07,4.02-.72,1.23-1.69,2.2-2.91,2.91-1.23,.72-2.56,1.07-4.02,1.07s-2.79-.36-4.02-1.07c-1.23-.72-2.2-1.69-2.91-2.91-.72-1.23-1.07-2.56-1.07-4.02S.36,5.21,1.07,3.98c.72-1.23,1.69-2.2,2.91-2.91,1.23-.72,2.56-1.07,4.02-1.07s2.79,.36,4.02,1.07c1.23,.72,2.2,1.69,2.91,2.91,.72,1.23,1.07,2.56,1.07,4.02Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cg%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M9,1c0-.27-.11-.52-.29-.71-.19-.19-.44-.29-.71-.29s-.52,.11-.71,.29c-.19,.19-.29,.44-.29,.71v1c0,.27,.11,.52,.29,.71,.19,.19,.44,.29,.71,.29s.52-.11,.71-.29c.19-.19,.29-.44,.29-.71V1Zm4.66,2.76c.18-.19,.28-.44,.28-.7,0-.26-.11-.51-.29-.7s-.44-.29-.7-.29c-.26,0-.51,.1-.7,.28l-.71,.71c-.18,.19-.28,.44-.28,.7,0,.26,.11,.51,.29,.7s.44,.29,.7,.29c.26,0,.51-.1,.7-.28l.71-.71Zm2.34,4.24c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29h-1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71ZM3.05,4.46c.09,.1,.2,.17,.32,.22,.12,.05,.25,.08,.39,.08,.13,0,.26-.02,.39-.07,.12-.05,.23-.12,.33-.22,.09-.09,.17-.21,.22-.33,.05-.12,.08-.25,.07-.39,0-.13-.03-.26-.08-.39-.05-.12-.13-.23-.22-.32l-.71-.71c-.19-.18-.44-.28-.7-.28-.26,0-.51,.11-.7,.29s-.29,.44-.29,.7c0,.26,.1,.51,.28,.7l.71,.71Zm-.05,3.54c0,.27-.11,.52-.29,.71-.19,.19-.44,.29-.71,.29H1c-.27,0-.52-.11-.71-.29-.19-.19-.29-.44-.29-.71s.11-.52,.29-.71c.19-.19,.44-.29,.71-.29h1c.27,0,.52,.11,.71,.29,.19,.19,.29,.44,.29,.71Zm3,6v-1h4v1c0,.53-.21,1.04-.59,1.41-.38,.38-.88,.59-1.41,.59s-1.04-.21-1.41-.59c-.38-.38-.59-.88-.59-1.41Zm4-2c.02-.34,.21-.65,.48-.86,.65-.51,1.13-1.22,1.36-2.02,.23-.8,.21-1.65-.06-2.43-.27-.79-.78-1.47-1.46-1.95-.68-.48-1.49-.74-2.32-.74s-1.64,.26-2.32,.74c-.68,.48-1.19,1.16-1.46,1.95-.27,.79-.29,1.64-.06,2.43,.23,.8,.71,1.5,1.36,2.02,.27,.21,.46,.52,.48,.86h4Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
  color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(158, 158, 158);
  content: "🕮";
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: var(--h1-color, rgb(34, 34, 34));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  background: rgba(0, 191, 188, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: var(--h1-color, rgb(34, 34, 34));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  background: rgba(233, 49, 71, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: var(--h1-color, rgb(34, 34, 34));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="caption"] {
  --background-active-line: hsl(220, 16%, 88%);
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #ada7a4;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #e6e6e6;
  --background-modifier-form-field-hover: #e6e6e6;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: hsl(220, 16%, 92%);
  --background-primary-alt: #fafafa;
  --background-secondary: hsl(218, 16%, 85%);
  --background-secondary-alt: hsl(218, 16%, 81%);
  --blockquote-background-color: hsl(218, 16%, 85%);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blockquote-border-thickness: 4px;
  --blockquote-style: italic;
  --blur-background: color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent) linear-gradient(hsl(220, 16%, 92%), color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(217, 22%, 30%);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-content-padding: var(--size-4-2) 0 var(--size-4-1, 8px 0 4px 0) 0;
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: var(--size-4-4) var(--size-4-4) var(--size-4-3) var(--size-4-4, 16px 16px 12px 16px);
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(220, 16%, 92%);
  --canvas-controls-icon-size: 15px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #808080;
  --checkbox-border-color-hover: #1a1a1a;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: #708ca9;
  --checkbox-marker-color: hsl(220, 16%, 92%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #1a1a1a;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #ada7a4;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #808080;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #1a1a1a;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #808080;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: hsl(220, 16%, 92%);
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', 'Inter', 'Arial';
  --font-text: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #1a1a1a;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #808080;
  --graph-text: #222222;
  --h2-bottom-spacing-edit: 0.3rem;
  --h2-top-spacing-edit: calc(1.4rem + 0.3em);
  --h5-line-height: 1.25em;
  --h6-line-height: 1.35;
  --heading-formatting: #808080;
  --heading-spacing: 1.4rem;
  --hr-color: #ada7a4;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: #708ca9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-embed-margin: -1.70em;
  --list-indent: 1.6em;
  --lst-fab-button-radius: 20px;
  --menu-background: hsl(218, 16%, 85%);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(220, 16%, 92%);
  --pdf-page-background: hsl(220, 16%, 92%);
  --pdf-sidebar-background: hsl(220, 16%, 92%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent) linear-gradient(hsl(220, 16%, 92%), color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #1a1a1a;
  --search-icon-color: #1a1a1a;
  --search-result-background: hsl(220, 16%, 92%);
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 14px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #ada7a4;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #1a1a1a;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #808080;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #1a1a1a;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #1a1a1a;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #ada7a4;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #808080;
  --shiki-gutter-text-color-highlight: #1a1a1a;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #1a1a1a;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #808080;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(220, 16%, 92%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: hsl(220, 16%, 92%);
  --tab-curve: 4px;
  --tab-divider-color: #ada7a4;
  --tab-font-size: 12px;
  --tab-outline-color: hsl(220, 16%, 92%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 12px;
  --tab-stacked-header-width: 38px;
  --tab-switcher-background: hsl(218, 16%, 85%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(218, 16%, 85%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #808080;
  --tab-text-color-active: #1a1a1a;
  --tab-text-color-focused: #1a1a1a;
  --tab-text-color-focused-active: #1a1a1a;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #ada7a4;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #808080;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #ada7a4;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(15, 72%, 70%, 0.7);
  --tag-background-hover: hsla(15, 72%, 70%, 0.45);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #111;
  --tag-color-hover: #eee;
  --tag-size: 12px;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #808080;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #1a1a1a;
  --text-normal: #222222;
  --text-selection: DarkGray;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 38px;
  --traffic-lights-offset-y: 38px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: var(--h1-color, rgb(34, 34, 34));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 21.6px;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--h3-top-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  background: rgba(233, 49, 71, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: var(--h1-color, rgb(34, 34, 34));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  background: rgba(120, 82, 238, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: var(--h1-color, rgb(34, 34, 34));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  background: rgba(233, 49, 71, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: var(--h1-color, rgb(34, 34, 34));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  background: rgba(8, 109, 221, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: var(--h1-color, rgb(34, 34, 34));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="latest"] {
  --background-active-line: hsl(220, 16%, 88%);
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #ada7a4;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #e6e6e6;
  --background-modifier-form-field-hover: #e6e6e6;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: hsl(220, 16%, 92%);
  --background-primary-alt: #fafafa;
  --background-secondary: hsl(218, 16%, 85%);
  --background-secondary-alt: hsl(218, 16%, 81%);
  --blockquote-background-color: hsl(218, 16%, 85%);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blockquote-border-thickness: 4px;
  --blockquote-style: italic;
  --blur-background: color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent) linear-gradient(hsl(220, 16%, 92%), color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(217, 22%, 30%);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-success, 8, 185, 78);
  --callout-content-padding: var(--size-4-2) 0 var(--size-4-1, 8px 0 4px 0) 0;
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: var(--size-4-4) var(--size-4-4) var(--size-4-3) var(--size-4-4, 16px 16px 12px 16px);
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(220, 16%, 92%);
  --canvas-controls-icon-size: 15px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #808080;
  --checkbox-border-color-hover: #1a1a1a;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: #708ca9;
  --checkbox-marker-color: hsl(220, 16%, 92%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #1a1a1a;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #ada7a4;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #808080;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #1a1a1a;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #808080;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: hsl(220, 16%, 92%);
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', 'Inter', 'Arial';
  --font-text: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #1a1a1a;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #808080;
  --graph-text: #222222;
  --h2-bottom-spacing-edit: 0.3rem;
  --h2-top-spacing-edit: calc(1.4rem + 0.3em);
  --h5-line-height: 1.25em;
  --h6-line-height: 1.35;
  --heading-formatting: #808080;
  --heading-spacing: 1.4rem;
  --hr-color: #ada7a4;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: #708ca9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-embed-margin: -1.70em;
  --list-indent: 1.6em;
  --lst-fab-button-radius: 20px;
  --menu-background: hsl(218, 16%, 85%);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(220, 16%, 92%);
  --pdf-page-background: hsl(220, 16%, 92%);
  --pdf-sidebar-background: hsl(220, 16%, 92%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent) linear-gradient(hsl(220, 16%, 92%), color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #1a1a1a;
  --search-icon-color: #1a1a1a;
  --search-result-background: hsl(220, 16%, 92%);
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 14px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #ada7a4;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #1a1a1a;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #808080;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #1a1a1a;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #1a1a1a;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #ada7a4;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #808080;
  --shiki-gutter-text-color-highlight: #1a1a1a;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #1a1a1a;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #808080;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(220, 16%, 92%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: hsl(220, 16%, 92%);
  --tab-curve: 4px;
  --tab-divider-color: #ada7a4;
  --tab-font-size: 12px;
  --tab-outline-color: hsl(220, 16%, 92%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 12px;
  --tab-stacked-header-width: 38px;
  --tab-switcher-background: hsl(218, 16%, 85%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(218, 16%, 85%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #808080;
  --tab-text-color-active: #1a1a1a;
  --tab-text-color-focused: #1a1a1a;
  --tab-text-color-focused-active: #1a1a1a;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #ada7a4;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #808080;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #ada7a4;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(15, 72%, 70%, 0.7);
  --tag-background-hover: hsla(15, 72%, 70%, 0.45);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #111;
  --tag-color-hover: #eee;
  --tag-size: 12px;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #808080;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #1a1a1a;
  --text-normal: #222222;
  --text-selection: DarkGray;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 38px;
  --traffic-lights-offset-y: 38px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 185, 78, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 185, 78, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(8, 185, 78, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 185, 78, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: var(--h1-color, rgb(34, 34, 34));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 21.6px;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--h3-top-spacing, 0px);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  background: rgba(8, 109, 221, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: var(--h1-color, rgb(34, 34, 34));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  background: rgba(236, 117, 0, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: var(--h1-color, rgb(34, 34, 34));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(158, 158, 158, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: var(--h1-color, rgb(34, 34, 34));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  background: rgba(8, 185, 78, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: var(--h1-color, rgb(34, 34, 34));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  background: rgba(0, 191, 188, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: var(--h1-color, rgb(34, 34, 34));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  background: rgba(8, 109, 221, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: var(--h1-color, rgb(34, 34, 34));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="update"] {
  --background-active-line: hsl(220, 16%, 88%);
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #ada7a4;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #e93147;
  --background-modifier-error-hover: #e93147;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: #e6e6e6;
  --background-modifier-form-field-hover: #e6e6e6;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #08b94e;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: hsl(220, 16%, 92%);
  --background-primary-alt: #fafafa;
  --background-secondary: hsl(218, 16%, 85%);
  --background-secondary-alt: hsl(218, 16%, 81%);
  --blockquote-background-color: hsl(218, 16%, 85%);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blockquote-border-thickness: 4px;
  --blockquote-style: italic;
  --blur-background: color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent) linear-gradient(hsl(220, 16%, 92%), color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: hsl(217, 22%, 30%);
  --bold-weight: 700;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-success, 8, 185, 78);
  --callout-content-padding: var(--size-4-2) 0 var(--size-4-1, 8px 0 4px 0) 0;
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: var(--size-4-4) var(--size-4-4) var(--size-4-3) var(--size-4-4, 16px 16px 12px 16px);
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: hsl(220, 16%, 92%);
  --canvas-controls-icon-size: 15px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: #222222;
  --checkbox-border-color: #808080;
  --checkbox-border-color-hover: #1a1a1a;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: #708ca9;
  --checkbox-marker-color: hsl(220, 16%, 92%);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #1a1a1a;
  --clickable-icon-radius: 4px;
  --code-background: #fafafa;
  --code-border-color: #ada7a4;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #808080;
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: #222222;
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: #1a1a1a;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --collapse-icon-color: #808080;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: hsl(220, 16%, 92%);
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', 'Inter', 'Arial';
  --font-text: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #1a1a1a;
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: #808080;
  --graph-text: #222222;
  --h2-bottom-spacing-edit: 0.3rem;
  --h2-top-spacing-edit: calc(1.4rem + 0.3em);
  --h5-line-height: 1.25em;
  --h6-line-height: 1.35;
  --heading-formatting: #808080;
  --heading-spacing: 1.4rem;
  --hr-color: #ada7a4;
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: #708ca9;
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-embed-margin: -1.70em;
  --list-indent: 1.6em;
  --lst-fab-button-radius: 20px;
  --menu-background: hsl(218, 16%, 85%);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: hsl(220, 16%, 92%);
  --pdf-page-background: hsl(220, 16%, 92%);
  --pdf-sidebar-background: hsl(220, 16%, 92%);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent) linear-gradient(hsl(220, 16%, 92%), color-mix(in srgb, hsl(220, 16%, 92%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #1a1a1a;
  --search-icon-color: #1a1a1a;
  --search-result-background: hsl(220, 16%, 92%);
  --setting-group-heading-color: #222222;
  --setting-group-heading-size: 14px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #ada7a4;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #1a1a1a;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #808080;
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: #1a1a1a;
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: #1a1a1a;
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: #ada7a4;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #808080;
  --shiki-gutter-text-color-highlight: #1a1a1a;
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: #1a1a1a;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: #808080;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: hsl(220, 16%, 92%);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: hsl(220, 16%, 92%);
  --tab-curve: 4px;
  --tab-divider-color: #ada7a4;
  --tab-font-size: 12px;
  --tab-outline-color: hsl(220, 16%, 92%);
  --tab-radius: 4px;
  --tab-stacked-font-size: 12px;
  --tab-stacked-header-width: 38px;
  --tab-switcher-background: hsl(218, 16%, 85%);
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(218, 16%, 85%), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #808080;
  --tab-text-color-active: #1a1a1a;
  --tab-text-color-focused: #1a1a1a;
  --tab-text-color-focused-active: #1a1a1a;
  --tab-text-color-focused-active-current: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #ada7a4;
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #808080;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: #ada7a4;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(15, 72%, 70%, 0.7);
  --tag-background-hover: hsla(15, 72%, 70%, 0.45);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: #111;
  --tag-color-hover: #eee;
  --tag-size: 12px;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e93147;
  --text-faint: #808080;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #1a1a1a;
  --text-normal: #222222;
  --text-selection: DarkGray;
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 38px;
  --traffic-lights-offset-y: 38px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 185, 78, 0.25);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(8, 185, 78, 0.25);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(8, 185, 78, 0.25);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(8, 185, 78, 0.25);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 0px;
  color: var(--h1-color, rgb(34, 34, 34));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 21.6px;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--h3-top-spacing, 0px);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  background: rgba(236, 117, 0, 0.18) none repeat scroll 0% 0% / auto padding-box border-box;
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  font-weight: var(--font-semibold, 600);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: var(--h1-color, rgb(34, 34, 34));
  padding-bottom: 4px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13 21h8'/%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z'/%3E%3Cpath d='M14 2v5a1 1 0 0 0 1 1h5'/%3E%3Cpath d='M10 9H8'/%3E%3Cpath d='M16 13H8'/%3E%3Cpath d='M16 17H8'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="caption"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13 21h8'/%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="latest"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10.268 21a2 2 0 0 0 3.464 0'/%3E%3Cpath d='M22 8c0-2.3-.8-4.3-2-6'/%3E%3Cpath d='M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326'/%3E%3Cpath d='M4 2C2.8 3.7 2 5.7 2 8'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M13 21h8'/%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 7 17l-5-5'/%3E%3Cpath d='m22 10-7.5 7.5L13 16'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.801 10A10 10 0 1 1 17 3.335'/%3E%3Cpath d='m9 11 3 3L22 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="update"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10.268 21a2 2 0 0 0 3.464 0'/%3E%3Cpath d='M22 8c0-2.3-.8-4.3-2-6'/%3E%3Cpath d='M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326'/%3E%3Cpath d='M4 2C2.8 3.7 2 5.7 2 8'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: var(--background-primary-alt, rgb(250, 250, 250));
  border-bottom-color: rgb(173, 167, 164);
  border-left-color: rgb(173, 167, 164);
  border-right-color: rgb(173, 167, 164);
  border-top-color: rgb(173, 167, 164);
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(231, 234, 238));
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: var(--h1-color, rgb(34, 34, 34));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(211, 215, 223);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(234, 151, 123, 0.7));
  border-bottom-left-radius: 8.4px;
  border-bottom-right-radius: 8.4px;
  border-top-left-radius: 8.4px;
  border-top-right-radius: 8.4px;
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: var(--h1-color, rgb(17, 17, 17));
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(60, 73, 93));
  font-family: var(--h1-font, Courgette);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(60, 73, 93));
  font-size: var(--inline-title-size, 25.6px);
  font-weight: var(--inline-title-weight, 600);
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(80, 97, 124));
  font-family: var(--h2-font, Courgette);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(60, 73, 93));
  font-family: var(--inline-title-font, Courgette);
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(99, 121, 156));
  font-family: var(--h3-font, Karla, Inter);
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(148, 125, 56));
  font-family: var(--h4-font, Karla, Inter);
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(111, 94, 42));
  font-family: var(--h5-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(74, 62, 28));
  font-family: var(--h6-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(231, 234, 238);
  border-left-color: rgb(231, 234, 238);
  border-right-color: rgb(231, 234, 238);
  border-right-width: 0px;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(173, 167, 164);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(26, 26, 26));
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(26, 26, 26));
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: var(--h1-color, rgb(34, 34, 34));
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: var(--icon-color, rgb(26, 26, 26));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(211, 215, 223));
  border-bottom-color: rgb(231, 234, 238);
  border-left-color: rgb(231, 234, 238);
  border-right-color: rgb(231, 234, 238);
  border-top-color: rgb(231, 234, 238);
  color: var(--status-bar-text-color, rgb(26, 26, 26));
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: var(--h1-color, rgb(26, 26, 26));
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: var(--h1-color, rgb(34, 34, 34));
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(26, 26, 26));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: var(--h1-color, rgb(26, 26, 26));
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: var(--h1-color, rgb(26, 26, 26));
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(26, 26, 26));
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: var(--icon-color, rgb(26, 26, 26));
}

html[saved-theme="light"] body .darkmode svg {
  color: var(--h1-color, rgb(26, 26, 26));
  stroke: rgb(26, 26, 26);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: var(--h1-color, rgb(26, 26, 26));
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(128, 128, 128));
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node-content {
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(231, 234, 238));
}`,
    bases: `html[saved-theme="light"] body .bases-table {
  border-color: rgb(0, 0, 0) rgb(128, 128, 128);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(173, 167, 164);
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  background-color: var(--metadata-background, rgb(199, 204, 214));
  border-bottom-color: rgb(173, 167, 164);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(173, 167, 164);
  border-right-color: rgb(173, 167, 164);
  border-top-color: rgb(173, 167, 164);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--text-muted, rgb(26, 26, 26));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: var(--h3-bottom-spacing, 32px);
  margin-top: var(--h3-top-spacing, 0px);
  padding-left: 8px;
  padding-right: 8px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: var(--h1-color, rgb(26, 26, 26));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}

html[saved-theme="light"] body .note-properties {
  background-color: var(--metadata-background, rgb(199, 204, 214));
  border-color: rgb(173, 167, 164);
  border-radius: 8px;
}

html[saved-theme="light"] body .note-properties-key {
  color: var(--h1-color, rgb(26, 26, 26));
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(26, 26, 26);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(234, 151, 123, 0.7));
  border-radius: 8.4px;
  color: var(--pill-color, rgb(17, 17, 17));
}

html[saved-theme="light"] body .note-properties-value {
  color: var(--h1-color, rgb(26, 26, 26));
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--code-background, rgb(231, 234, 238));
  color: var(--text-faint, rgb(34, 34, 34));
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--titlebar-background-focused, rgb(211, 214, 222));
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(211, 214, 222));
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(211, 215, 223));
}

html[saved-theme="light"] body .page-header h2.page-title {
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body details {
  margin-bottom: var(--h3-bottom-spacing, 0px);
  margin-top: var(--h3-top-spacing, 0px);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: var(--text-normal, rgb(26, 26, 26));
  font-family: "??", "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body sub {
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body summary {
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body sup {
  color: var(--h1-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(234, 151, 123, 0.7));
  border-bottom-left-radius: 7.2px;
  border-bottom-right-radius: 7.2px;
  border-top-left-radius: 7.2px;
  border-top-right-radius: 7.2px;
  color: var(--tag-color, rgb(17, 17, 17));
}`,
  },
  classSettings: {
    "color-scheme-base": {
      dark: `.theme-dark {
/* Base Color - #262626
    		   - #3D373A - analogous
    		   - #332E33 - analogous
    		   |-- #433d43 - ligher shade
    		   - #1a1a1a - darker shade
    		   - #333333 - lighter shade
    		   - #735050 - monochromatic
    		   - #595350 - compound
    		   Base Color 2 - #304050 - special purple
    		   Base Color 3 - #4682B4 (SteelBlue) & lighter #5a91bf
    		*/
/* Base Color 1 - for main workspace */
--background-primary: hsl(0, 0%, 20%);
/* for main workspace / #333 */
--background-primary-alt: #1a1a1a;
/* and pre (code) background */
/* Using Analogous of #262626 - for sidebar and modal dialog */
--background-secondary: hsl(300, 5%, 25%);
/* #433d43 */
--background-secondary-alt: hsl(300, 5%, 19%);
/* 6% darker than secondary */
/* auxilary, mixed of shade of gray & blue-purple */
--background-accent: hsl(300, 15%, 27%);
/* for blockquote & journal shading / before this #304050 or #394d60 */
--background-accent-alt: hsl(0, 0%, 16%);
/* 4% darker shade of background-primary, active line and backlinks */
--background-modifier-border: hsl(20, 5%, 33%);
/* #595350; 	/* for horizontal line & border */
--background-modifier-cover: #262626;
/* for title bar / #332E33 */
--background-modifier-cover: hsl(0, 0%, 16%);
/* for title bar / #332E33 */
/*  --interactive-accent: #4682B4;                    /* for interactive buttons */
/*	--interactive-accent-hover: #5a91bf; 	/* for interactive buttons */
/* my custom variables */
--background-modifier-border-active: hsl(20, 5%, 53%);
/* for border active, lighter for dark mode */
--background-modifier-backlinks: hsl(0, 0%, 18%);
/* for backlinks, 2% darker than primary */
/* plugins variables */
/* color variables for Hover Editor plugin, #735050 is monochromatic of #262626 */
--he-title-bar-active-pinned-bg: #735050;
--he-title-bar-inactive-pinned-bg: #735050;
--he-title-bar-active-bg: #3D373A;
--he-title-bar-inactive-bg: #3D373A;
}`,
    },
    "color-scheme-discord": {
      dark: `.theme-dark {
/*
    			hsl(220, 8%, 23%) -- main pane/chat window
    			hsl(223, 7%, 20%) -- sidebar for channels (dark)
    			hsl(218, 8%, 27%) -- input for chats (lighter)
    			hsl(216, 7%, 14%) -- sidebar for servers (darker)
    			hsl(225, 8%, 10%) -- popup (almost black)
    			hsl(217, 8%, 34%) -- buttons (lightest)
    		*/
--background-primary: hsl(220, 8%, 23%);
--background-modifier-cover: hsl(223, 7%, 20%);
--background-secondary: hsl(218, 8%, 27%);
--background-secondary-alt: hsl(218, 8%, 21%);
/* 6% darker than secondary */
--background-accent: hsl(223, 7%, 30%);
/* 10% lighter than modifier-cover */
--background-accent-alt: hsl(220, 8%, 19%);
/* 4% darker shade of background-primary, active line and backlinks */
/* my custom variables */
--background-modifier-backlinks: hsl(220, 8%, 21%);
/* for backlinks, 2% darker than primary */
}`,
      light: `.theme-light {
/*
    			hsl(0, 0%, 100%) -- main pane/chat window
    			hsl(220, 13%, 95%) -- sidebar for channels (dark)
    			hsl(210, 11%, 93%) -- input for chats (lighter)
    			hsl(216, 10%, 90%) -- sidebar for servers (darker)
    			hsl(0, 0%, 100%) -- popup (white)
    			hsl(213, 9%, 46%) -- buttons (bit darker)
    		*/
--background-primary: hsl(220, 16%, 92%);
--background-modifier-cover: hsl(223, 14%, 85%);
--background-secondary: hsl(218, 16%, 85%);
--background-secondary-alt: hsl(218, 16%, 81%);
/* 6% darker than secondary */
--background-accent: hsl(223, 14%, 90%);
--background-accent-alt: hsl(220, 16%, 88%);
/* 4% darker shade of background-primary, active line and backlinks */
/* my custom variables */
--background-modifier-backlinks: hsl(220, 16%, 90%);
/* for backlinks, 2% darker than primary */
}`,
    },
    "oled-black": {
      dark: `.theme-dark {
--background-primary: black;
--background-primary-alt: hsl(0, 0%, 8%);
--background-modifier-cover: #1a1a1a;
--background-secondary: hsl(0, 0%, 16%);
--background-secondary-alt: hsl(0, 0%, 12%);
--background-accent: hsl(300, 20%, 15%);
--background-accent-alt: hsl(0, 0%, 20%);
--color-base-100: hsl(0, 0%, 78%);
/* original dark-theme base-100 is hsl(0, 0%, 85%), for font color */
/* my custom variables */
--background-modifier-backlinks: hsl(0, 0%, 12%);
/* for backlinks, 12% lighter than primary, special for oled black */
}`,
    },
    "is-force-oled-black-mobile": {
      dark: `.is-mobile.theme-dark {
--background-primary: black;
--background-primary-alt: hsl(0, 0%, 8%);
--background-modifier-cover: #1a1a1a;
--background-secondary: hsl(0, 0%, 16%);
--background-secondary-alt: hsl(0, 0%, 12%);
--background-accent: hsl(300, 20%, 15%);
--background-accent-alt: hsl(0, 0%, 20%);
--color-base-100: hsl(0, 0%, 78%);
/* original dark-theme base-100 is hsl(0, 0%, 85%), for font color */
/* my custom variables */
--background-modifier-backlinks: hsl(0, 0%, 12%);
/* for backlinks, 12% lighter than primary, special for oled black */
}`,
    },
    "lst-disable-fab-view": {
      general: `body.is-mobile.lst-disable-fab-view .style-settings-container .setting-item[data-id^="lst-fab-view-y"] {
display: none;
}`,
    },
    "lst-fab-b2-1": {
      general: `body.is-mobile.lst-fab-b2-1 div.view-actions > .view-action:nth-child(1 of .cmdr-page-header) {
position: absolute;
top: calc(88vh - var(--lst-fab-b2-y));
right: calc(0vw + var(--lst-fab-view-x));
width: var(--lst-fab-button-size);
aspect-ratio: 1;
border-radius: var(--lst-fab-button-radius);
background-color: var(--background-secondary);
box-shadow: 0px 0px var(--size-4-2) rgba(255,255,255,0.3);
}`,
    },
    "lst-fab-b2-2": {
      general: `body.is-mobile.lst-fab-b2-2 div.view-actions > .view-action:nth-child(2 of .cmdr-page-header) {
position: absolute;
top: calc(88vh - var(--lst-fab-b2-y));
right: calc(0vw + var(--lst-fab-view-x));
width: var(--lst-fab-button-size);
aspect-ratio: 1;
border-radius: var(--lst-fab-button-radius);
background-color: var(--background-secondary);
box-shadow: 0px 0px var(--size-4-2) rgba(255,255,255,0.3);
}`,
    },
    "is-css-guide": {
      general: `.is-css-guide .markdown-rendered:not(.show-indentation-guide) :is(ul ul, ol ul, ul ol, ol ol)::before {
content:'';
border-left: 1px solid var(--background-modifier-border);
position: absolute;
left: calc(-13px + var(--list-guide-adj));
top: 0;
bottom: 0;
}

.is-mobile.is-css-guide .markdown-rendered :is(ul ul, ol ul, ul ol, ol ol)::before {
left: calc(-16px + 2px + var(--list-guide-adj-mobile));
}

.is-css-guide .snw-ref-area :is(ul ul, ol ul, ul ol, ol ol)::before {
left: calc(-12px + var(--list-guide-adj));
}`,
    },
    "list-d-c-d": {
      general: `.list-d-c-d .HyperMD-list-line-1 .cm-formatting-list-ul .list-bullet::after {

}

.list-d-c-d :is(.HyperMD-list-line-2, .HyperMD-list-line-4, .HyperMD-list-line-6, .HyperMD-list-line-8) .cm-formatting-list-ul .list-bullet::after {
width: calc(0.3rem - 1px);
height: calc(0.3rem - 1px);
outline: 1px solid;
background-color: transparent;
}

.list-d-c-d .markdown-rendered ul.has-list-bullet, .list-d-c-d .markdown-rendered ul ul ul.has-list-bullet, .list-d-c-d .markdown-rendered ul ul ul ul ul.has-list-bullet, .list-d-c-d .markdown-rendered ul ul ul ul ul ul ul.has-list-bullet {
list-style-type: disc;
}

.list-d-c-d .markdown-rendered ul ul.has-list-bullet, .list-d-c-d .markdown-rendered ul ul ul ul.has-list-bullet, .list-d-c-d .markdown-rendered ul ul ul ul ul ul.has-list-bullet, .list-d-c-d .markdown-rendered ul ul ul ul ul ul ul ul.has-list-bullet {
list-style-type: circle;
}`,
    },
    "list-d-c-s": {
      general: `.list-d-c-s .cm-list-1 .list-bullet::after {

}

.list-d-c-s .cm-list-2 .list-bullet::after {
width: calc(0.3rem - 1px);
height: calc(0.3rem - 1px);
outline: 1px solid;
background-color: transparent;
}

.list-d-c-s .cm-list-3 .list-bullet::after {
border-radius: 0%;
}

.list-d-c-s .markdown-rendered ul .list-bullet::after, .list-d-c-s .markdown-rendered ul ul ul ul .list-bullet::after, .list-d-c-s .markdown-rendered ul ul ul ul ul ul ul .list-bullet::after {
width: var(--list-bullet-size);
height: var(--list-bullet-size);
outline: none;
background-color: var(--list-marker-color);
border-radius: var(--list-bullet-radius);
}

.list-d-c-s .markdown-rendered ul ul .list-bullet::after, .list-d-c-s .markdown-rendered ul ul ul ul ul .list-bullet::after, .list-d-c-s .markdown-rendered ul ul ul ul ul ul ul ul .list-bullet::after {
width: calc(0.3rem - 1px);
height: calc(0.3rem - 1px);
outline: 1px solid;
background-color: transparent;
border-radius: var(--list-bullet-radius);
}

.list-d-c-s .markdown-rendered ul ul ul .list-bullet::after, .list-d-c-s .markdown-rendered ul ul ul ul ul ul .list-bullet::after, .list-d-c-s .markdown-rendered ul ul ul ul ul ul ul ul ul .list-bullet::after {
width: var(--list-bullet-size);
height: var(--list-bullet-size);
outline: none;
background-color: var(--list-marker-color);
border-radius: 0%;
}

.list-d-c-s .markdown-rendered ul.has-list-bullet, .list-d-c-s .markdown-rendered ul ul ul ul.has-list-bullet, .list-d-c-s .markdown-rendered ul ul ul ul ul ul ul.has-list-bullet {
list-style-type: disc;
}

.list-d-c-s .markdown-rendered ul ul.has-list-bullet, .list-d-c-s .markdown-rendered ul ul ul ul ul.has-list-bullet, .list-d-c-s .markdown-rendered ul ul ul ul ul ul ul ul.has-list-bullet {
list-style-type: circle;
}

.list-d-c-s .markdown-rendered ul ul ul.has-list-bullet, .list-d-c-s .markdown-rendered ul ul ul ul ul ul.has-list-bullet, .list-d-c-s .markdown-rendered ul ul ul ul ul ul ul ul ul.has-list-bullet {
list-style-type: square;
}`,
    },
    "list-embed-global": {
      general: `.list-embed-global :is(.HyperMD-list-line, li) .internal-embed.is-loaded.markdown-embed:not([alt*=".excalidraw"]):has( .markdown-preview-section > div > ul) {
margin: 0 0 0 calc(var(--list-embed-margin) + var(--list-embed-adj));
padding: 0;
border: none;
top: 0;
}

.list-embed-global :is(.HyperMD-list-line, li) .internal-embed.is-loaded.markdown-embed ul:first-of-type {
margin-block: 0;
}

.list-embed-global :is(.HyperMD-list-line, li) .internal-embed.is-loaded.markdown-embed .markdown-embed-title {
display: none;
}

.list-embed-global :is(.HyperMD-list-line, li) .internal-embed.is-loaded.markdown-embed:not([alt*=".excalidraw"]) {
width: calc(100% - 1px);
}

.list-embed-global .HyperMD-list-line .markdown-embed .markdown-preview-view {
padding-bottom: 0;
}

.list-embed-global :is(.HyperMD-list-line, li):has(.snw-reference) .internal-embed.is-loaded.markdown-embed:not([alt*=".excalidraw"]):not(:has(.markdown-preview-section > div > ul)) {
width: calc(100% - 25px);
}

.list-embed-global :is(.HyperMD-list-line, ul) .internal-embed.is-loaded .markdown-preview-section > div > ul > li > .snw-reference.snw-block-preview {
display: none;
}`,
    },
    "lst-partial-bt": {
      general: `.lst-partial-bt {
--indent-dash-width: var(--list-indent);
/* 1.45rem / 1.20rem */
--indent-dash-top: 0.82em;
/* 0.75rem / 0.70rem */
/* --indent-dash-left: 0.82em; */
--indent-dash-left: calc( var(--list-indent) / 1.95 );
--indent-dash-spacing2: 0.90em;
/* 0.50rem / 0.55rem */
--indent-dash-spacing3: 0.90em;
/* 0.55rem / 0.52rem */
--indent-dash-spacing4: 0.90em;
/* 0.55rem / 0.52rem */
--indent-dash-spacing5: 0.90em;
/* 0.55rem / 0.52rem */
--indent-dash-spacing6: 0.92em;
/* 0.55rem / 0.52rem */
--indent-dash-spacing7: 0.75em;
/* 0.55rem / 0.52rem */
--indent-dash-spacing8: 0.75em;
/* 0.55rem / 0.52rem */
--indent-dash-spacing9: 0.70em;
/* 0.55rem / 0.52rem */
/* this can be deleted later, it's for Indentation Guide community plugin */
.ig-lists .HyperMD-list-line.ig-indent-group .ig-tab.ig-indent-group-level::before {
				width: 2px !important;
			};
.cm-active .cm-formatting-list-ul .list-bullet.list-bullet.list-bullet::after {
				contain: strict;
				width: var(--list-bullet-size);
				height: var(--list-bullet-size);
				outline: 0;
				background-color: var(--indentation-guide-active-color);
			};
.cm-active .cm-hmd-list-indent::before {
				contain: strict;
				content: "";
				position: absolute;
				top: var(--indent-dash-top); /* subtract half of the height of the pseudo-element */
				width: var(--indent-dash-width);
				height: 2px;
				background-color: var(--indentation-guide-active-color);
			};
/* set distance from top for headers in list */
.cm-hmd-list-indent:has(~ .cm-header-2) { --indent-dash-top: 1.4rem; };
.cm-hmd-list-indent:has(~ .cm-header-3) { --indent-dash-top: 1rem; };
/* paint the horizontal arm, support up to 9 indent levels */
.HyperMD-list-line-2 .cm-hmd-list-indent::before { contain:strict; left: calc(0 * var(--indent-dash-left) + var(--indent-dash-spacing2)); };
.HyperMD-list-line-3 .cm-hmd-list-indent::before { contain:strict; left: calc(2 * var(--indent-dash-left) + var(--indent-dash-spacing3)); };
.HyperMD-list-line-4 .cm-hmd-list-indent::before { contain:strict; left: calc(4 * var(--indent-dash-left) + var(--indent-dash-spacing4)); };
.HyperMD-list-line-5 .cm-hmd-list-indent::before { contain:strict; left: calc(6 * var(--indent-dash-left) + var(--indent-dash-spacing5)); };
.HyperMD-list-line-6 .cm-hmd-list-indent::before { contain:strict; left: calc(8 * var(--indent-dash-left) + var(--indent-dash-spacing6)); };
.HyperMD-list-line-7 .cm-hmd-list-indent::before { contain:strict; left: calc(10 * var(--indent-dash-left) + var(--indent-dash-spacing7)); };
.HyperMD-list-line-8 .cm-hmd-list-indent::before { contain:strict; left: calc(12 * var(--indent-dash-left) + var(--indent-dash-spacing8)); };
.HyperMD-list-line-9 .cm-hmd-list-indent::before { contain:strict; left: calc(14 * var(--indent-dash-left) + var(--indent-dash-spacing9)); };
/* paint the immediate parent vertical arm */
:is(.HyperMD-list-line-2, .HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8, .HyperMD-list-line-9):not(:has(~ .HyperMD-list-line-1 ~ .HyperMD-list-line.cm-active)):has(~ .HyperMD-list-line-2.cm-active) .cm-indent:nth-child(1 of .cm-indent)::before,
			:is(.HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8, .HyperMD-list-line-9):not(:has(~ .HyperMD-list-line-2 ~ .HyperMD-list-line.cm-active)):has(~ .HyperMD-list-line-3.cm-active) .cm-indent:nth-child(2 of .cm-indent)::before,
			:is(.HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8, .HyperMD-list-line-9):not(:has(~ .HyperMD-list-line-3 ~ .HyperMD-list-line.cm-active)):has(~ .HyperMD-list-line-4.cm-active) .cm-indent:nth-child(3 of .cm-indent)::before,
			:is(.HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8, .HyperMD-list-line-9):not(:has(~ .HyperMD-list-line-4 ~ .HyperMD-list-line.cm-active)):has(~ .HyperMD-list-line-5.cm-active) .cm-indent:nth-child(4 of .cm-indent)::before,
			:is(.HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8, .HyperMD-list-line-9):not(:has(~ .HyperMD-list-line-5 ~ .HyperMD-list-line.cm-active)):has(~ .HyperMD-list-line-6.cm-active) .cm-indent:nth-child(5 of .cm-indent)::before,
			:is(.HyperMD-list-line-7, .HyperMD-list-line-8, .HyperMD-list-line-9):not(:has(~ .HyperMD-list-line-6 ~ .HyperMD-list-line.cm-active)):has(~ .HyperMD-list-line-7.cm-active) .cm-indent:nth-child(6 of .cm-indent)::before,
			:is(.HyperMD-list-line-8, .HyperMD-list-line-9):not(:has(~ .HyperMD-list-line-7 ~ .HyperMD-list-line.cm-active)):has(~ .HyperMD-list-line-8.cm-active) .cm-indent:nth-child(7 of .cm-indent)::before,
			:is(.HyperMD-list-line-9):not(:has(~ .HyperMD-list-line-8 ~ .HyperMD-list-line.cm-active)):has(~ .HyperMD-list-line-9.cm-active) .cm-indent:nth-child(8 of .cm-indent)::before {
				contain: strict;
				--indentation-guide-color: var(--background-modifier-border-active);
				border-width: 2px;
			};
.cm-active.HyperMD-list-line { --last-ig-height: 0.9em; };
.cm-active.HyperMD-list-line:has(.cm-header-2) { --last-ig-height: calc(0.95em + var(--h2-top-spacing-edit)); };
.cm-active.HyperMD-list-line:has(.cm-header-3) { --last-ig-height: calc(0.85em + var(--h3-top-spacing-edit)); };
.HyperMD-list-line.cm-active > .cm-hmd-list-indent > .cm-indent:last-child::before {
				contain: strict;
				--indentation-guide-color: var(--background-modifier-border-active);
				border-width: 2px;
				height: var(--last-ig-height);
			};
}`,
    },
    "lst-fm-std": {
      general: `body.lst-fm-std .frontmatter-container {
display: block;
font-size: 0.8rem;
background-color: var(--background-modifier-backlinks);
border-radius: var(--size-4-1);
padding: var(--size-4-1) var(--size-4-2);
}

body.lst-fm-std .frontmatter-container .frontmatter-container-header {
position: relative;
border-bottom-width: 1px;
color: var(--text-faint);
margin: 0;
padding: 0;
}

body.lst-fm-std .frontmatter-container .frontmatter-section, body.lst-fm-std .frontmatter-container .frontmatter-section:last-child {
margin-bottom: 0;
margin-right: 12px;
}

body.lst-fm-std .frontmatter-container .frontmatter-section-label {
font-family: var(--font-monospace);
font-size: 0.8rem;
flex: 0 1 4em;
color: var(--text-faint);
}

body.lst-fm-std .frontmatter-container.is-collapsed .frontmatter-container-header {
border-bottom-width: 0px;
}`,
    },
    "lst-fm-lp-hide": {
      general: `body.lst-fm-lp-hide .markdown-source-view.is-live-preview .cm-line:has(.cm-hmd-frontmatter:not(.cm-def)):not(.cm-active), body.lst-fm-lp-hide .markdown-source-view.is-live-preview .cm-line:has(.cm-def) ~ .cm-line:has(.cm-def) {
display: none;
}

body.lst-fm-lp-hide .markdown-source-view.is-live-preview .cm-line:has(.cm-hmd-frontmatter.cm-def)::after {
content: " place cursor here to reveal frontmatter";
color: var(--text-faint);
font-size: 0.8em;
font-style: italic;
}

body.lst-fm-lp-hide .markdown-source-view.is-live-preview :has(.cm-line:hover .cm-hmd-frontmatter) .cm-line:has(.cm-hmd-frontmatter), body.lst-fm-lp-hide .markdown-source-view.is-live-preview :has(.cm-line.cm-active .cm-hmd-frontmatter) .cm-line:has(.cm-hmd-frontmatter) {
display: block;
}

body.lst-fm-lp-hide .markdown-source-view.is-live-preview :has(.cm-line:hover .cm-hmd-frontmatter) .cm-line:has(.cm-hmd-frontmatter)::after, body.lst-fm-lp-hide .markdown-source-view.is-live-preview :has(.cm-line.cm-active .cm-hmd-frontmatter) .cm-line:has(.cm-hmd-frontmatter.cm-def)::after {
content: "";
}`,
    },
    "lst-prop-super-compact": {
      general: `body.lst-prop-super-compact .metadata-properties {
flex-direction: row;
flex-wrap: wrap;
}`,
    },
    "lst-prop-rv-noedit": {
      general: `.lst-prop-rv-noedit .markdown-reading-view {
& .metadata-container .metadata-add-button { display: none; };
& .metadata-property input { pointer-events: none; };
& .multi-select-pill .multi-select-pill-remove-button { visibility: collapse; };
/* remove the remove button special for tags property */
& .metadata-property[data-property-key="tags"] .multi-select-pill-remove-button { display: none; };
& .metadata-property[data-property-key="tags"] .multi-select-pill-content { margin-right: var(--pill-padding-x); };
/* adding "padding to the right after 1.5.1 update "*/
& .markdown-reading-view .metadata-property[data-property-key="tags"] .multi-select-pill-content { margin-right: var(--pill-padding-x); };
}`,
    },
    "lst-folder-tabs": {
      general: `body.lst-folder-tabs .workspace .mod-root .workspace-tab-header {
--tab-radius-active: 6px;
margin-bottom: 0;
padding-bottom: 0;
}

body.lst-folder-tabs .workspace .mod-root .workspace-tab-header::before, body.lst-folder-tabs .workspace .mod-root .workspace-tab-header::after {
display: block;
}`,
    },
  },
};
