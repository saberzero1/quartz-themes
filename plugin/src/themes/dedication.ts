import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "dedication",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: rgb(8, 145, 178) !important;
  --background-modifier-border: #00ffff !important;
  --background-primary: #060335 !important;
  --background-secondary: #191919 !important;
  --background-secondary-alt: #3D3D3D !important;
  --base-font-size: 16px !important;
  --bases-cards-background: #060335 !important;
  --bases-cards-shadow: 0 0 0 1px #00ffff !important;
  --bases-embed-border-color: #00ffff !important;
  --bases-table-border-color: #00ffff !important;
  --bases-table-cell-background-active: #060335 !important;
  --bases-table-header-background: #060335 !important;
  --bases-table-summary-background: #060335 !important;
  --bodyFont: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --border-radius-large: 8px !important;
  --border-radius-medium: 6px !important;
  --border-radius-small: 4px !important;
  --callout-border-opacity: 1;
  --callout-border-width: 1px;
  --callout-padding: 16px 24px 0 24px;
  --canvas-background: #060335 !important;
  --canvas-card-label-color: #c0b0a0 !important;
  --caret-color: #faf2d6 !important;
  --checkbox-border-color: #c0b0a0 !important;
  --checkbox-marker-color: #060335 !important;
  --code-background: #3D3D3D !important;
  --code-block: #83a598 !important;
  --code-border-color: #00ffff !important;
  --code-comment: #c0b0a0 !important;
  --code-normal: #faf2d6 !important;
  --codeFont: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #c0b0a0 !important;
  --collapse-icon-color-collapsed: #00ffff !important;
  --color-accent-hover: #004499 !important;
  --color-border: #00ffff !important;
  --content-max-width: 100% !important;
  --custom-font-family: Arial, sans-serif !important;
  --dark: #faf2d6 !important;
  --dark-bg-primary: #060335 !important;
  --dark-bg-primary-alt: #242424 !important;
  --dark-bg-secondary: #191919 !important;
  --dark-bg-secondary-alt: #3D3D3D !important;
  --dark-text: #faf2d6 !important;
  --dark-text-faint: #c0b0a0 !important;
  --darkgray: #faf2d6 !important;
  --default-font: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --divider-color: #00ffff !important;
  --embed-block-shadow-hover: 0 0 0 1px #00ffff, inset 0 0 0 1px #00ffff !important;
  --empty-state-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M13.32 7.155a4.375 4.375 0 0 1-5.7 6.517l5.7-6.517ZM10 5.625a4.375 4.375 0 0 0-3.32 7.22l5.704-6.514A4.35 4.35 0 0 0 10 5.625ZM18.125 10A8.125 8.125 0 1 1 10 1.875 8.135 8.135 0 0 1 18.125 10Zm-2.5 0a5.6 5.6 0 0 0-1.476-3.793l.382-.483a.626.626 0 1 0-.937-.823l-.384.483a5.625 5.625 0 0 0-7.36 8.409l-.381.483a.625.625 0 0 0 .937.823l.384-.483A5.621 5.621 0 0 0 15.625 10Z'/%3e%3c/svg%3e") !important;
  --file-header-background: #060335 !important;
  --file-header-background-focused: #060335 !important;
  --file-header-font: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: #faf2d6 !important;
  --fleuron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='279.4mm' height='152.4mm' fill='black' stroke-width='0' viewBox='0 0 279.4 152.4'%3E%3Cpath class='fil0 str0' d='M277.581 151.999l0 -13.7038c-5.2453,0 -9.2621,-1.3233 -12.0031,-4.0168 -2.6935,-2.6935 -5.2922,-7.7971 -7.797,-15.3575l-2.2208 -6.9464c-5.0092,-15.3106 -13.1367,-25.3759 -24.5253,-30.1959 10.538,-2.0321 18.9021,-6.3325 25.1398,-12.948 6.2376,-6.5686 9.3564,-14.4125 9.3564,-23.4386 0,-12.6639 -4.7731,-23.1076 -14.2713,-31.3768 -9.4982,-8.2698 -21.5482,-12.381 -36.1025,-12.381 -22.1627,0 -39.2688,9.4982 -51.3662,28.4947l10.6323 9.0255c7.8445,-8.411 15.9251,-12.6171 24.2417,-12.6171 6.8047,0 12.6645,2.2214 17.5788,6.7104 4.8675,4.489 7.3249,9.8292 7.3249,16.0194 0,5.151 -1.9378,9.64 -5.7654,13.4202 -3.8277,3.7808 -8.3167,5.6706 -13.4677,5.6706 -9.309,0 -22.3988,-6.6155 -39.1739,-19.7996l-8.459 -6.663c-27.4074,-21.5956 -53.5395,-32.3697 -78.4901,-32.3697 -21.5956,0 -39.8833,7.0882 -54.8629,21.3121 -14.9796,14.2239 -22.4931,31.5192 -22.4931,51.9333 0,20.6976 7.7496,37.3784 23.2494,50.1372 15.4992,12.7114 35.8664,19.0908 61.0531,19.0908l4.5839 0 0 -13.7038c-14.9327,-0.9923 -26.7935,-6.1902 -35.5829,-15.5941 -8.7425,-9.3564 -13.1372,-21.5007 -13.1372,-36.4809 0,-14.7435 5.5288,-27.4074 16.5864,-37.8511 11.1051,-10.4906 24.4784,-15.7359 40.1668,-15.7359 15.1214,0 28.589,4.6314 40.4029,13.8461 11.8139,9.2146 17.7206,19.7521 17.7206,31.566 0,5.6231 -1.843,10.3963 -5.4814,14.2708 -3.639,3.8751 -8.128,5.8123 -13.4676,5.8123 -5.3871,0 -9.4039,-1.4645 -12.1449,-4.3472 -2.6935,-2.9296 -4.0637,-7.3243 -4.0637,-13.2316 0,-3.591 0.9923,-7.8439 3.0245,-12.7588l-12.4284 -5.6706c-5.5288,13.0898 -8.3167,24.1 -8.3167,32.9369 0,10.9158 3.5441,20.2248 10.5849,28.0219 7.0413,7.797 15.5941,11.7196 25.5176,11.7196 6.3794,0 12.1918,-1.5594 17.4845,-4.7257 5.2453,-3.1188 9.9235,-7.8445 14.0821,-14.2239 5.3871,13.3733 13.8455,22.7772 25.4228,28.1168 11.5778,5.3396 29.1566,8.0332 52.6895,8.0332l28.7782 0zm-99.6605 -67.5743c13.562,2.5992 25.9429,13.8929 37.1892,33.9292l2.3631 4.0163c4.9144,8.6476 10.821,14.3182 17.7206,17.0117 -35.2525,0 -54.3433,-18.3345 -57.2729,-54.9572z'/%3E%3C/svg%3E") !important;
  --font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --font-interface: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: #00ffff !important;
  --footnote-id-color-no-occurrences: #c0b0a0 !important;
  --graph-node-focused: #00ffff !important;
  --graph-node-unresolved: #c0b0a0 !important;
  --graph-text: #faf2d6 !important;
  --gray: #c0b0a0 !important;
  --h1-color: #cc00c4 !important;
  --h2-color: #00b7eb !important;
  --h3-color: #ff8c00 !important;
  --h4-color: #0000cc !important;
  --h5-color: #cc0000 !important;
  --h6-color: #cccc00 !important;
  --headerFont: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #c0b0a0 !important;
  --highlight: #640211 !important;
  --hr-color: #00ffff !important;
  --icon-color-active: #00ffff !important;
  --icon-color-focused: #faf2d6 !important;
  --inline-code: #8b5cf6 !important;
  --inline-title-color: #cc00c4 !important;
  --input-date-separator: #c0b0a0 !important;
  --input-placeholder-color: #c0b0a0 !important;
  --interactive-accent-rgb: #f8c537 !important;
  --interactive-before: #7c6f64 !important;
  --light: #060335 !important;
  --light-bg-primary: #EDEDED !important;
  --light-bg-primary-alt: #d4d4d4 !important;
  --light-bg-secondary: #C4C4C4 !important;
  --light-bg-secondary-alt: #707070 !important;
  --light-text: #1A2023 !important;
  --light-text-faint: #999999 !important;
  --lightgray: #191919 !important;
  --line-height: 1.6 !important;
  --link-color: #00ffff !important;
  --link-color-hover: #004499 !important;
  --link-decoration: doodle !important;
  --link-decoration-hover: doodle !important;
  --link-decoration-thickness: 2px !important;
  --link-decoration-thickness-hover: 1px !important;
  --link-external-color: #00ffff !important;
  --link-external-color-hover: #004499 !important;
  --link-unresolved-color: #00ffff !important;
  --list-bullet-size-alt: 0.15em !important;
  --list-indent: 2em !important;
  --list-marker-color: rgb(8, 145, 178) !important;
  --list-marker-color-collapsed: #00ffff !important;
  --menu-background: #191919 !important;
  --metadata-border-color: #00ffff !important;
  --metadata-divider-color: #00ffff !important;
  --metadata-input-font: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #faf2d6 !important;
  --metadata-label-font: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --modal-background: #060335 !important;
  --modal-border-color: #00ffff !important;
  --nav-collapse-icon-color: #c0b0a0 !important;
  --nav-collapse-icon-color-collapsed: #c0b0a0 !important;
  --nav-heading-color: #faf2d6 !important;
  --nav-heading-color-collapsed: #c0b0a0 !important;
  --nav-heading-color-hover: #faf2d6 !important;
  --nav-item-color-active: #faf2d6 !important;
  --nav-item-color-highlighted: #00ffff !important;
  --nav-item-color-hover: #faf2d6 !important;
  --nav-item-color-selected: #faf2d6 !important;
  --nav-tag-color: #c0b0a0 !important;
  --pdf-background: #060335 !important;
  --pdf-page-background: #060335 !important;
  --pdf-shadow: 0 0 0 1px #00ffff !important;
  --pdf-sidebar-background: #060335 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #00ffff !important;
  --pill-border-color: #00ffff !important;
  --pill-color-hover: #faf2d6 !important;
  --pill-color-remove: #c0b0a0 !important;
  --pill-color-remove-hover: #00ffff !important;
  --pre-code: #1e1e1e !important;
  --prompt-background: #060335 !important;
  --rainbow-folders-enabled: 1 !important;
  --ribbon-background: #191919 !important;
  --ribbon-background-collapsed: #060335 !important;
  --search-result-background: #060335 !important;
  --secondary: #00ffff !important;
  --setting-group-heading-color: #faf2d6 !important;
  --setting-items-border-color: #00ffff !important;
  --sidebar-width: 300px !important;
  --slider-track-background: #00ffff !important;
  --status-bar-background: transparent !important;
  --status-bar-border-color: transparent !important;
  --status-bar-border-width: 0 !important;
  --suggestion-background: #060335 !important;
  --tab-background-active: #060335 !important;
  --tab-container-background: #191919 !important;
  --tab-outline-color: #00ffff !important;
  --tab-switcher-background: #191919 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #191919, transparent) !important;
  --tab-text-color: #c0b0a0 !important;
  --tab-text-color-focused-active-current: #faf2d6 !important;
  --tab-text-color-focused-highlighted: #00ffff !important;
  --table-add-button-border-color: #00ffff !important;
  --table-border-color: #00ffff !important;
  --table-drag-handle-color: #c0b0a0 !important;
  --table-drag-handle-color-active: #fff !important;
  --table-header-border-color: #00ffff !important;
  --table-header-color: #faf2d6 !important;
  --tag-color: #00ffff !important;
  --tag-color-hover: #00ffff !important;
  --tertiary: #004499 !important;
  --text-a: rgb(248, 197, 55) !important;
  --text-a-hover: #83a598 !important;
  --text-accent: #00ffff !important;
  --text-accent-hover: #004499 !important;
  --text-faint: #c0b0a0 !important;
  --text-highlight-bg: #640211 !important;
  --text-link: #83a598 !important;
  --text-normal: #faf2d6 !important;
  --text-on-accent: #fff !important;
  --text-selection: hsl(258, 88%, 66%) !important;
  --text-title-h1: #cc00c4 !important;
  --text-title-h1-h: 300 !important;
  --text-title-h1-l: 45% !important;
  --text-title-h1-s: 100% !important;
  --text-title-h2: #00b7eb !important;
  --text-title-h3: #ff8c00 !important;
  --text-title-h4: #0000cc !important;
  --text-title-h5: #cc0000 !important;
  --text-title-h6: #cccc00 !important;
  --textHighlight: #640211 !important;
  --titleFont: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #191919 !important;
  --titlebar-background-focused: #3D3D3D !important;
  --titlebar-border-color: #00ffff !important;
  --titlebar-text-color-focused: #faf2d6 !important;
  --vault-profile-color: #faf2d6 !important;
  --vault-profile-color-hover: #faf2d6 !important;
  --vim-cursor: #f8c537 !important;
  --workspace-divider-color: #00ffff !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 25, 25);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(6, 3, 53);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(0, 255, 255);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(25, 25, 25);
  border-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(0, 255, 255);
  border-radius: 6px;
}

html[saved-theme="dark"] body .note-properties-tags {
  border-radius: 6px;
  color: rgb(0, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 25, 25);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 25, 25);
  border-left-color: rgb(0, 255, 255);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(6, 3, 53);
  color: rgb(250, 242, 214);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(0, 183, 235);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 700;
  outline: rgb(0, 183, 235) none 0px;
  text-decoration-color: rgb(0, 183, 235);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(204, 204, 0);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 600;
  outline: rgb(204, 204, 0) none 0px;
  text-decoration-color: rgb(204, 204, 0);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(204, 204, 0);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 600;
  outline: rgb(204, 204, 0) none 0px;
  text-decoration-color: rgb(204, 204, 0);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(0, 183, 235);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 700;
  outline: rgb(0, 183, 235) none 0px;
  text-decoration-color: rgb(0, 183, 235);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(100, 2, 17);
  color: rgb(250, 242, 214);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 242, 214) none 0px;
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body del {
  color: rgb(250, 242, 214);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 242, 214) none 0px;
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(192, 176, 160);
  border-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 68, 153);
  border-color: rgb(0, 68, 153);
}

html[saved-theme="dark"] body p {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(250, 242, 214);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 600;
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: underline 2px rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
  text-decoration-thickness: 2px;
  transition: text-underline-offset 0.3s, opacity 0.15s ease-in-out;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(250, 242, 214);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 600;
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: underline 2px rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
  text-decoration-thickness: 2px;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(0, 255, 255);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 600;
  outline: rgb(0, 255, 255) none 0px;
  text-decoration: underline 2px rgba(138, 92, 245, 0.3);
  text-decoration-thickness: 2px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body dt {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(192, 176, 160);
}

html[saved-theme="dark"] body blockquote {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: italic;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body table {
  color: rgb(250, 242, 214);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  width: 662px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(250, 242, 214);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(250, 242, 214);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

html[saved-theme="dark"] body tr {
  background-color: rgba(230, 0, 230, 0.7);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(61, 61, 61);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(61, 61, 61);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(61, 61, 61);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(61, 61, 61);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(204, 0, 196);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(204, 0, 196);
  border-radius: 6px;
  border-right-color: rgb(204, 0, 196);
  border-top-color: rgb(204, 0, 196);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    embeds: `html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(192, 176, 160);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(192, 176, 160);
  border-right-color: rgb(192, 176, 160);
  border-top-color: rgb(192, 176, 160);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-color: rgb(83, 223, 221);
  border-bottom-width: 1px;
  border-left-color: rgb(83, 223, 221);
  border-left-width: 1px;
  border-right-color: rgb(83, 223, 221);
  border-right-width: 1px;
  border-top-color: rgb(83, 223, 221);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-width: 1px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 1px;
  border-right-color: rgb(251, 70, 76);
  border-right-width: 1px;
  border-top-color: rgb(251, 70, 76);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-width: 1px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 1px;
  border-right-color: rgb(251, 70, 76);
  border-right-width: 1px;
  border-top-color: rgb(251, 70, 76);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-color: rgb(168, 130, 255);
  border-bottom-width: 1px;
  border-left-color: rgb(168, 130, 255);
  border-left-width: 1px;
  border-right-color: rgb(168, 130, 255);
  border-right-width: 1px;
  border-top-color: rgb(168, 130, 255);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-width: 1px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 1px;
  border-right-color: rgb(251, 70, 76);
  border-right-width: 1px;
  border-top-color: rgb(251, 70, 76);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-width: 1px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 1px;
  border-right-color: rgb(2, 122, 255);
  border-right-width: 1px;
  border-top-color: rgb(2, 122, 255);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-width: 1px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 1px;
  border-right-color: rgb(2, 122, 255);
  border-right-width: 1px;
  border-top-color: rgb(2, 122, 255);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-color: rgb(233, 151, 63);
  border-bottom-width: 1px;
  border-left-color: rgb(233, 151, 63);
  border-left-width: 1px;
  border-right-color: rgb(233, 151, 63);
  border-right-width: 1px;
  border-top-color: rgb(233, 151, 63);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 1px;
  border-right-color: rgb(158, 158, 158);
  border-right-width: 1px;
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-color: rgb(68, 207, 110);
  border-bottom-width: 1px;
  border-left-color: rgb(68, 207, 110);
  border-left-width: 1px;
  border-right-color: rgb(68, 207, 110);
  border-right-width: 1px;
  border-top-color: rgb(68, 207, 110);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-color: rgb(83, 223, 221);
  border-bottom-width: 1px;
  border-left-color: rgb(83, 223, 221);
  border-left-width: 1px;
  border-right-color: rgb(83, 223, 221);
  border-right-width: 1px;
  border-top-color: rgb(83, 223, 221);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-width: 1px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 1px;
  border-right-color: rgb(2, 122, 255);
  border-right-width: 1px;
  border-top-color: rgb(2, 122, 255);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-color: rgb(233, 151, 63);
  border-bottom-width: 1px;
  border-left-color: rgb(233, 151, 63);
  border-left-width: 1px;
  border-right-color: rgb(233, 151, 63);
  border-right-width: 1px;
  border-top-color: rgb(233, 151, 63);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(250, 242, 214);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(6, 3, 53);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(250, 242, 214);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 242, 214) none 0px;
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(250, 242, 214);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(250, 242, 214);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: "??", "??", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(0, 255, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(204, 0, 196);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(0, 183, 235);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(250, 242, 214);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(255, 140, 0);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(0, 0, 204);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(204, 0, 0);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(204, 204, 0);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-width: 1px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 1px;
  border-right-color: rgb(2, 122, 255);
  border-right-width: 1px;
  border-top-color: rgb(2, 122, 255);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-right: 24px;
  padding-top: 16px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(6, 3, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(6, 3, 53);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(6, 3, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(6, 3, 53);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(6, 3, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(6, 3, 53);
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(6, 3, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(6, 3, 53);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(6, 3, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(6, 3, 53);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(6, 3, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(6, 3, 53);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(220, 38, 38);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(220, 38, 38);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(250, 242, 214);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(250, 242, 214);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 600;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(220, 38, 38);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(220, 38, 38);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(220, 38, 38);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(220, 38, 38);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(192, 176, 160);
  font-family: "??", "??", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(0, 255, 255);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(250, 242, 214);
  font-family: "??", "??", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body input[type=text] {
  font-family: "??", "??", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(61, 61, 61);
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body sub {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body summary {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body sup {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(0, 255, 255);
}`,
  },
  light: {
    base: `:root:root {
  --accent: rgb(8, 145, 178) !important;
  --background-modifier-border: #00ffff !important;
  --background-primary: #EDEDED !important;
  --background-primary-alt: #d4d4d4 !important;
  --background-secondary: #C4C4C4 !important;
  --background-secondary-alt: #707070 !important;
  --base-font-size: 16px !important;
  --bases-cards-background: #EDEDED !important;
  --bases-cards-cover-background: #d4d4d4 !important;
  --bases-cards-shadow: 0 0 0 1px #00ffff !important;
  --bases-embed-border-color: #00ffff !important;
  --bases-table-border-color: #00ffff !important;
  --bases-table-cell-background-active: #EDEDED !important;
  --bases-table-cell-background-disabled: #d4d4d4 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --bases-table-group-background: #d4d4d4 !important;
  --bases-table-header-background: #EDEDED !important;
  --bases-table-summary-background: #EDEDED !important;
  --blockquote-border-color: hsl(258, 88%, 66%) !important;
  --blur-background: color-mix(in srgb, #EDEDED 65%, transparent) linear-gradient(#EDEDED, color-mix(in srgb, #EDEDED 65%, transparent)) !important;
  --bodyFont: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --border-radius-large: 8px !important;
  --border-radius-medium: 6px !important;
  --border-radius-small: 4px !important;
  --callout-border-opacity: 1;
  --callout-border-width: 1px;
  --callout-padding: 16px 24px 0 24px;
  --canvas-background: #EDEDED !important;
  --canvas-card-label-color: #999999 !important;
  --caret-color: #1A2023 !important;
  --checkbox-border-color: #999999 !important;
  --checkbox-color: hsl(258, 88%, 66%) !important;
  --checkbox-marker-color: #EDEDED !important;
  --code-background: #707070 !important;
  --code-border-color: #00ffff !important;
  --code-comment: #999999 !important;
  --code-normal: #1A2023 !important;
  --codeFont: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #999999 !important;
  --collapse-icon-color-collapsed: #00ffff !important;
  --color-accent-hover: #004499 !important;
  --color-border: #00ffff !important;
  --content-max-width: 100% !important;
  --custom-font-family: Arial, sans-serif !important;
  --dark: #1A2023 !important;
  --dark-bg-primary: #060335 !important;
  --dark-bg-primary-alt: #242424 !important;
  --dark-bg-secondary: #191919 !important;
  --dark-bg-secondary-alt: #3D3D3D !important;
  --dark-text: #faf2d6 !important;
  --dark-text-faint: #c0b0a0 !important;
  --darkgray: #1A2023 !important;
  --default-font: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --divider-color: #00ffff !important;
  --divider-color-hover: hsl(258, 88%, 66%) !important;
  --embed-block-shadow-hover: 0 0 0 1px #00ffff, inset 0 0 0 1px #00ffff !important;
  --embed-border-start: 2px solid hsl(258, 88%, 66%) !important;
  --empty-state-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M13.32 7.155a4.375 4.375 0 0 1-5.7 6.517l5.7-6.517ZM10 5.625a4.375 4.375 0 0 0-3.32 7.22l5.704-6.514A4.35 4.35 0 0 0 10 5.625ZM18.125 10A8.125 8.125 0 1 1 10 1.875 8.135 8.135 0 0 1 18.125 10Zm-2.5 0a5.6 5.6 0 0 0-1.476-3.793l.382-.483a.626.626 0 1 0-.937-.823l-.384.483a5.625 5.625 0 0 0-7.36 8.409l-.381.483a.625.625 0 0 0 .937.823l.384-.483A5.621 5.621 0 0 0 15.625 10Z'/%3e%3c/svg%3e") !important;
  --file-header-background: #EDEDED !important;
  --file-header-background-focused: #EDEDED !important;
  --file-header-font: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: #1A2023 !important;
  --fleuron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='279.4mm' height='152.4mm' fill='black' stroke-width='0' viewBox='0 0 279.4 152.4'%3E%3Cpath class='fil0 str0' d='M277.581 151.999l0 -13.7038c-5.2453,0 -9.2621,-1.3233 -12.0031,-4.0168 -2.6935,-2.6935 -5.2922,-7.7971 -7.797,-15.3575l-2.2208 -6.9464c-5.0092,-15.3106 -13.1367,-25.3759 -24.5253,-30.1959 10.538,-2.0321 18.9021,-6.3325 25.1398,-12.948 6.2376,-6.5686 9.3564,-14.4125 9.3564,-23.4386 0,-12.6639 -4.7731,-23.1076 -14.2713,-31.3768 -9.4982,-8.2698 -21.5482,-12.381 -36.1025,-12.381 -22.1627,0 -39.2688,9.4982 -51.3662,28.4947l10.6323 9.0255c7.8445,-8.411 15.9251,-12.6171 24.2417,-12.6171 6.8047,0 12.6645,2.2214 17.5788,6.7104 4.8675,4.489 7.3249,9.8292 7.3249,16.0194 0,5.151 -1.9378,9.64 -5.7654,13.4202 -3.8277,3.7808 -8.3167,5.6706 -13.4677,5.6706 -9.309,0 -22.3988,-6.6155 -39.1739,-19.7996l-8.459 -6.663c-27.4074,-21.5956 -53.5395,-32.3697 -78.4901,-32.3697 -21.5956,0 -39.8833,7.0882 -54.8629,21.3121 -14.9796,14.2239 -22.4931,31.5192 -22.4931,51.9333 0,20.6976 7.7496,37.3784 23.2494,50.1372 15.4992,12.7114 35.8664,19.0908 61.0531,19.0908l4.5839 0 0 -13.7038c-14.9327,-0.9923 -26.7935,-6.1902 -35.5829,-15.5941 -8.7425,-9.3564 -13.1372,-21.5007 -13.1372,-36.4809 0,-14.7435 5.5288,-27.4074 16.5864,-37.8511 11.1051,-10.4906 24.4784,-15.7359 40.1668,-15.7359 15.1214,0 28.589,4.6314 40.4029,13.8461 11.8139,9.2146 17.7206,19.7521 17.7206,31.566 0,5.6231 -1.843,10.3963 -5.4814,14.2708 -3.639,3.8751 -8.128,5.8123 -13.4676,5.8123 -5.3871,0 -9.4039,-1.4645 -12.1449,-4.3472 -2.6935,-2.9296 -4.0637,-7.3243 -4.0637,-13.2316 0,-3.591 0.9923,-7.8439 3.0245,-12.7588l-12.4284 -5.6706c-5.5288,13.0898 -8.3167,24.1 -8.3167,32.9369 0,10.9158 3.5441,20.2248 10.5849,28.0219 7.0413,7.797 15.5941,11.7196 25.5176,11.7196 6.3794,0 12.1918,-1.5594 17.4845,-4.7257 5.2453,-3.1188 9.9235,-7.8445 14.0821,-14.2239 5.3871,13.3733 13.8455,22.7772 25.4228,28.1168 11.5778,5.3396 29.1566,8.0332 52.6895,8.0332l28.7782 0zm-99.6605 -67.5743c13.562,2.5992 25.9429,13.8929 37.1892,33.9292l2.3631 4.0163c4.9144,8.6476 10.821,14.3182 17.7206,17.0117 -35.2525,0 -54.3433,-18.3345 -57.2729,-54.9572z'/%3E%3C/svg%3E") !important;
  --font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
  --font-interface: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: #00ffff !important;
  --footnote-id-color-no-occurrences: #999999 !important;
  --graph-node-focused: #00ffff !important;
  --graph-node-unresolved: #999999 !important;
  --graph-text: #1A2023 !important;
  --gray: #999999 !important;
  --h1-color: #cc00c4 !important;
  --h2-color: #00b7eb !important;
  --h3-color: #ff8c00 !important;
  --h4-color: #0000cc !important;
  --h5-color: #cc0000 !important;
  --h6-color: #cccc00 !important;
  --headerFont: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #999999 !important;
  --highlight: #f0f0f0 !important;
  --hr-color: #00ffff !important;
  --icon-color-active: #00ffff !important;
  --icon-color-focused: #1A2023 !important;
  --inline-code: #458588 !important;
  --inline-title-color: #cc00c4 !important;
  --input-date-separator: #999999 !important;
  --input-placeholder-color: #999999 !important;
  --interactive-accent: hsl(258, 88%, 66%) !important;
  --interactive-accent-rgb: #961327 !important;
  --interactive-before: #a89984 !important;
  --light: #EDEDED !important;
  --light-bg-primary: #EDEDED !important;
  --light-bg-primary-alt: #d4d4d4 !important;
  --light-bg-secondary: #C4C4C4 !important;
  --light-bg-secondary-alt: #707070 !important;
  --light-text: #1A2023 !important;
  --light-text-faint: #999999 !important;
  --lightgray: #C4C4C4 !important;
  --line-height: 1.6 !important;
  --link-color: #00ffff !important;
  --link-color-hover: #004499 !important;
  --link-decoration: doodle !important;
  --link-decoration-hover: doodle !important;
  --link-decoration-thickness: 2px !important;
  --link-decoration-thickness-hover: 1px !important;
  --link-external-color: #00ffff !important;
  --link-external-color-hover: #004499 !important;
  --link-unresolved-color: #00ffff !important;
  --list-bullet-size-alt: 0.15em !important;
  --list-indent: 2em !important;
  --list-marker-color: rgb(8, 145, 178) !important;
  --list-marker-color-collapsed: #00ffff !important;
  --menu-background: #C4C4C4 !important;
  --metadata-border-color: #00ffff !important;
  --metadata-divider-color: #00ffff !important;
  --metadata-input-font: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #1A2023 !important;
  --metadata-label-font: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --modal-background: #EDEDED !important;
  --modal-border-color: #00ffff !important;
  --nav-collapse-icon-color: #999999 !important;
  --nav-collapse-icon-color-collapsed: #999999 !important;
  --nav-heading-color: #1A2023 !important;
  --nav-heading-color-collapsed: #999999 !important;
  --nav-heading-color-hover: #1A2023 !important;
  --nav-item-color-active: #1A2023 !important;
  --nav-item-color-highlighted: #00ffff !important;
  --nav-item-color-hover: #1A2023 !important;
  --nav-item-color-selected: #1A2023 !important;
  --nav-tag-color: #999999 !important;
  --pdf-background: #EDEDED !important;
  --pdf-page-background: #EDEDED !important;
  --pdf-sidebar-background: #EDEDED !important;
  --pill-border-color: #00ffff !important;
  --pill-color-hover: #1A2023 !important;
  --pill-color-remove: #999999 !important;
  --pill-color-remove-hover: #00ffff !important;
  --pre-code: #bebebe !important;
  --prompt-background: #EDEDED !important;
  --rainbow-folders-enabled: 1 !important;
  --raised-background: color-mix(in srgb, #EDEDED 65%, transparent) linear-gradient(#EDEDED, color-mix(in srgb, #EDEDED 65%, transparent)) !important;
  --ribbon-background: #C4C4C4 !important;
  --ribbon-background-collapsed: #EDEDED !important;
  --search-result-background: #EDEDED !important;
  --secondary: #00ffff !important;
  --setting-group-heading-color: #1A2023 !important;
  --setting-items-background: #d4d4d4 !important;
  --setting-items-border-color: #00ffff !important;
  --sidebar-width: 300px !important;
  --slider-track-background: #00ffff !important;
  --status-bar-background: transparent !important;
  --status-bar-border-color: transparent !important;
  --status-bar-border-width: 0 !important;
  --suggestion-background: #EDEDED !important;
  --tab-background-active: #EDEDED !important;
  --tab-container-background: #C4C4C4 !important;
  --tab-outline-color: #00ffff !important;
  --tab-switcher-background: #C4C4C4 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #C4C4C4, transparent) !important;
  --tab-text-color: #999999 !important;
  --tab-text-color-focused-active-current: #1A2023 !important;
  --tab-text-color-focused-highlighted: #00ffff !important;
  --table-add-button-border-color: #00ffff !important;
  --table-border-color: #00ffff !important;
  --table-drag-handle-background-active: hsl(258, 88%, 66%) !important;
  --table-drag-handle-color: #999999 !important;
  --table-header-border-color: #00ffff !important;
  --table-header-color: #1A2023 !important;
  --table-selection-border-color: hsl(258, 88%, 66%) !important;
  --tag-color: #00ffff !important;
  --tag-color-hover: #00ffff !important;
  --tertiary: #004499 !important;
  --text-a: #961327 !important;
  --text-a-hover: #D49335 !important;
  --text-accent: #00ffff !important;
  --text-accent-hover: #004499 !important;
  --text-faint: #999999 !important;
  --text-highlight-bg: #f0f0f0 !important;
  --text-link: #D49335 !important;
  --text-normal: #1A2023 !important;
  --text-selection: hsl(258, 88%, 66%) !important;
  --text-title-h1: #cc00c4 !important;
  --text-title-h1-h: 302 !important;
  --text-title-h1-l: 40% !important;
  --text-title-h1-s: 100% !important;
  --text-title-h2: #00b7eb !important;
  --text-title-h3: #ff8c00 !important;
  --text-title-h4: #0000cc !important;
  --text-title-h5: #cc0000 !important;
  --text-title-h6: #cccc00 !important;
  --text-white: #ffffff !important;
  --textHighlight: #f0f0f0 !important;
  --titleFont: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #C4C4C4 !important;
  --titlebar-background-focused: #707070 !important;
  --titlebar-border-color: #00ffff !important;
  --titlebar-text-color-focused: #1A2023 !important;
  --vault-profile-color: #1A2023 !important;
  --vault-profile-color-hover: #1A2023 !important;
  --vim-cursor: #961327 !important;
  --workspace-divider-color: #00ffff !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(196, 196, 196);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(237, 237, 237);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(0, 255, 255);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(237, 237, 237);
  border-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(0, 255, 255);
  border-radius: 6px;
}

html[saved-theme="light"] body .note-properties-tags {
  border-radius: 6px;
  color: rgb(0, 255, 255);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(196, 196, 196);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 255, 255);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(196, 196, 196);
  border-left-color: rgb(0, 255, 255);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(237, 237, 237);
  color: rgb(26, 32, 35);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(0, 183, 235);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 700;
  outline: rgb(0, 183, 235) none 0px;
  text-decoration-color: rgb(0, 183, 235);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(0, 0, 204);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 600;
  outline: rgb(0, 0, 204) none 0px;
  text-decoration-color: rgb(0, 0, 204);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(0, 0, 204);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 600;
  outline: rgb(0, 0, 204) none 0px;
  text-decoration-color: rgb(0, 0, 204);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 183, 235);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 700;
  outline: rgb(0, 183, 235) none 0px;
  text-decoration-color: rgb(0, 183, 235);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(240, 240, 240);
  color: rgb(26, 32, 35);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(26, 32, 35) none 0px;
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body del {
  color: rgb(26, 32, 35);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(26, 32, 35) none 0px;
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(153, 153, 153);
  border-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 68, 153);
  border-color: rgb(0, 68, 153);
}

html[saved-theme="light"] body p {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(26, 32, 35);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 600;
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: underline 2px rgb(138, 92, 245);
  text-decoration-thickness: 2px;
  transition: text-underline-offset 0.3s, opacity 0.15s ease-in-out;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(26, 32, 35);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 600;
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: underline 2px rgb(138, 92, 245);
  text-decoration-thickness: 2px;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(0, 255, 255);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 600;
  outline: rgb(0, 255, 255) none 0px;
  text-decoration: underline 2px rgba(138, 92, 245, 0.3);
  text-decoration-thickness: 2px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body dt {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body ol > li {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body ul > li {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(153, 153, 153);
}

html[saved-theme="light"] body blockquote {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: italic;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body table {
  color: rgb(26, 32, 35);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  width: 662px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(26, 32, 35);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(26, 32, 35);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

html[saved-theme="light"] body tr {
  background-color: rgba(204, 0, 197, 0.7);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(112, 112, 112);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(112, 112, 112);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(112, 112, 112);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(112, 112, 112);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body figcaption {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(204, 0, 196);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(204, 0, 196);
  border-radius: 6px;
  border-right-color: rgb(204, 0, 196);
  border-top-color: rgb(204, 0, 196);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(212, 212, 212);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-color: rgb(0, 191, 188);
  border-bottom-width: 1px;
  border-left-color: rgb(0, 191, 188);
  border-left-width: 1px;
  border-right-color: rgb(0, 191, 188);
  border-right-width: 1px;
  border-top-color: rgb(0, 191, 188);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-color: rgb(233, 49, 71);
  border-bottom-width: 1px;
  border-left-color: rgb(233, 49, 71);
  border-left-width: 1px;
  border-right-color: rgb(233, 49, 71);
  border-right-width: 1px;
  border-top-color: rgb(233, 49, 71);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-color: rgb(233, 49, 71);
  border-bottom-width: 1px;
  border-left-color: rgb(233, 49, 71);
  border-left-width: 1px;
  border-right-color: rgb(233, 49, 71);
  border-right-width: 1px;
  border-top-color: rgb(233, 49, 71);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-color: rgb(120, 82, 238);
  border-bottom-width: 1px;
  border-left-color: rgb(120, 82, 238);
  border-left-width: 1px;
  border-right-color: rgb(120, 82, 238);
  border-right-width: 1px;
  border-top-color: rgb(120, 82, 238);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-color: rgb(233, 49, 71);
  border-bottom-width: 1px;
  border-left-color: rgb(233, 49, 71);
  border-left-width: 1px;
  border-right-color: rgb(233, 49, 71);
  border-right-width: 1px;
  border-top-color: rgb(233, 49, 71);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-width: 1px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 1px;
  border-right-color: rgb(8, 109, 221);
  border-right-width: 1px;
  border-top-color: rgb(8, 109, 221);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-width: 1px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 1px;
  border-right-color: rgb(8, 109, 221);
  border-right-width: 1px;
  border-top-color: rgb(8, 109, 221);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-color: rgb(236, 117, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(236, 117, 0);
  border-left-width: 1px;
  border-right-color: rgb(236, 117, 0);
  border-right-width: 1px;
  border-top-color: rgb(236, 117, 0);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 1px;
  border-right-color: rgb(158, 158, 158);
  border-right-width: 1px;
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-color: rgb(8, 185, 78);
  border-bottom-width: 1px;
  border-left-color: rgb(8, 185, 78);
  border-left-width: 1px;
  border-right-color: rgb(8, 185, 78);
  border-right-width: 1px;
  border-top-color: rgb(8, 185, 78);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-color: rgb(0, 191, 188);
  border-bottom-width: 1px;
  border-left-color: rgb(0, 191, 188);
  border-left-width: 1px;
  border-right-color: rgb(0, 191, 188);
  border-right-width: 1px;
  border-top-color: rgb(0, 191, 188);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-width: 1px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 1px;
  border-right-color: rgb(8, 109, 221);
  border-right-width: 1px;
  border-top-color: rgb(8, 109, 221);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-color: rgb(236, 117, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(236, 117, 0);
  border-left-width: 1px;
  border-right-color: rgb(236, 117, 0);
  border-right-width: 1px;
  border-top-color: rgb(236, 117, 0);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(26, 32, 35);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(237, 237, 237);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(26, 32, 35);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(26, 32, 35) none 0px;
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 32, 35);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(196, 196, 196);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(26, 32, 35);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: "??", "??", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(0, 255, 255);
}

html[saved-theme="light"] body h1 {
  color: rgb(204, 0, 196);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(0, 183, 235);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(26, 32, 35);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(255, 140, 0);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(0, 0, 204);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(204, 0, 0);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(204, 204, 0);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-width: 1px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 1px;
  border-right-color: rgb(8, 109, 221);
  border-right-width: 1px;
  border-top-color: rgb(8, 109, 221);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-right: 24px;
  padding-top: 16px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(220, 38, 38);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(220, 38, 38);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(26, 32, 35);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(26, 32, 35);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 600;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(220, 38, 38);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(220, 38, 38);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(220, 38, 38);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(220, 38, 38);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(153, 153, 153);
  font-family: "??", "??", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(0, 255, 255);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(26, 32, 35);
  font-family: "??", "??", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body input[type=text] {
  font-family: "??", "??", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(112, 112, 112);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body sub {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body summary {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body sup {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(0, 255, 255);
}`,
  },
};
