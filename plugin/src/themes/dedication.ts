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
  --accent: rgb(8, 145, 178);
  --background-modifier-border: #00ffff;
  --background-primary: #060335;
  --background-secondary: #191919;
  --background-secondary-alt: #3D3D3D;
  --base-font-size: 16px;
  --bases-cards-background: #060335;
  --bases-cards-shadow: 0 0 0 1px #00ffff;
  --bases-embed-border-color: #00ffff;
  --bases-table-border-color: #00ffff;
  --bases-table-cell-background-active: #060335;
  --bases-table-header-background: #060335;
  --bases-table-summary-background: #060335;
  --bodyFont: var(--font-interface);
  --border-radius-large: 8px;
  --border-radius-medium: 6px;
  --border-radius-small: 4px;
  --callout-border-opacity: 1;
  --callout-border-width: 1px;
  --callout-padding: 16px 24px 0 24px;
  --canvas-background: #060335;
  --canvas-card-label-color: #c0b0a0;
  --caret-color: #faf2d6;
  --checkbox-border-color: #c0b0a0;
  --checkbox-marker-color: #060335;
  --code-background: #3D3D3D;
  --code-block: #83a598;
  --code-border-color: #00ffff;
  --code-comment: #c0b0a0;
  --code-normal: #faf2d6;
  --codeFont: var(--font-interface);
  --collapse-icon-color: #c0b0a0;
  --collapse-icon-color-collapsed: #00ffff;
  --color-accent-hover: #004499;
  --color-border: #00ffff;
  --content-max-width: 100%;
  --custom-font-family: Arial, sans-serif;
  --dark: var(--text-normal);
  --dark-bg-primary: #060335;
  --dark-bg-primary-alt: #242424;
  --dark-bg-secondary: #191919;
  --dark-bg-secondary-alt: #3D3D3D;
  --dark-text: #faf2d6;
  --dark-text-faint: #c0b0a0;
  --darkgray: var(--text-normal);
  --default-font: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --divider-color: #00ffff;
  --embed-block-shadow-hover: 0 0 0 1px #00ffff, inset 0 0 0 1px #00ffff;
  --empty-state-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M13.32 7.155a4.375 4.375 0 0 1-5.7 6.517l5.7-6.517ZM10 5.625a4.375 4.375 0 0 0-3.32 7.22l5.704-6.514A4.35 4.35 0 0 0 10 5.625ZM18.125 10A8.125 8.125 0 1 1 10 1.875 8.135 8.135 0 0 1 18.125 10Zm-2.5 0a5.6 5.6 0 0 0-1.476-3.793l.382-.483a.626.626 0 1 0-.937-.823l-.384.483a5.625 5.625 0 0 0-7.36 8.409l-.381.483a.625.625 0 0 0 .937.823l.384-.483A5.621 5.621 0 0 0 15.625 10Z'/%3e%3c/svg%3e");
  --file-header-background: #060335;
  --file-header-background-focused: #060335;
  --file-header-font: '??', '??', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: #faf2d6;
  --fleuron: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="279.4mm" height="152.4mm" fill="black" stroke-width="0" viewBox="0 0 279.4 152.4"><path class="fil0 str0" d="M277.581 151.999l0 -13.7038c-5.2453,0 -9.2621,-1.3233 -12.0031,-4.0168 -2.6935,-2.6935 -5.2922,-7.7971 -7.797,-15.3575l-2.2208 -6.9464c-5.0092,-15.3106 -13.1367,-25.3759 -24.5253,-30.1959 10.538,-2.0321 18.9021,-6.3325 25.1398,-12.948 6.2376,-6.5686 9.3564,-14.4125 9.3564,-23.4386 0,-12.6639 -4.7731,-23.1076 -14.2713,-31.3768 -9.4982,-8.2698 -21.5482,-12.381 -36.1025,-12.381 -22.1627,0 -39.2688,9.4982 -51.3662,28.4947l10.6323 9.0255c7.8445,-8.411 15.9251,-12.6171 24.2417,-12.6171 6.8047,0 12.6645,2.2214 17.5788,6.7104 4.8675,4.489 7.3249,9.8292 7.3249,16.0194 0,5.151 -1.9378,9.64 -5.7654,13.4202 -3.8277,3.7808 -8.3167,5.6706 -13.4677,5.6706 -9.309,0 -22.3988,-6.6155 -39.1739,-19.7996l-8.459 -6.663c-27.4074,-21.5956 -53.5395,-32.3697 -78.4901,-32.3697 -21.5956,0 -39.8833,7.0882 -54.8629,21.3121 -14.9796,14.2239 -22.4931,31.5192 -22.4931,51.9333 0,20.6976 7.7496,37.3784 23.2494,50.1372 15.4992,12.7114 35.8664,19.0908 61.0531,19.0908l4.5839 0 0 -13.7038c-14.9327,-0.9923 -26.7935,-6.1902 -35.5829,-15.5941 -8.7425,-9.3564 -13.1372,-21.5007 -13.1372,-36.4809 0,-14.7435 5.5288,-27.4074 16.5864,-37.8511 11.1051,-10.4906 24.4784,-15.7359 40.1668,-15.7359 15.1214,0 28.589,4.6314 40.4029,13.8461 11.8139,9.2146 17.7206,19.7521 17.7206,31.566 0,5.6231 -1.843,10.3963 -5.4814,14.2708 -3.639,3.8751 -8.128,5.8123 -13.4676,5.8123 -5.3871,0 -9.4039,-1.4645 -12.1449,-4.3472 -2.6935,-2.9296 -4.0637,-7.3243 -4.0637,-13.2316 0,-3.591 0.9923,-7.8439 3.0245,-12.7588l-12.4284 -5.6706c-5.5288,13.0898 -8.3167,24.1 -8.3167,32.9369 0,10.9158 3.5441,20.2248 10.5849,28.0219 7.0413,7.797 15.5941,11.7196 25.5176,11.7196 6.3794,0 12.1918,-1.5594 17.4845,-4.7257 5.2453,-3.1188 9.9235,-7.8445 14.0821,-14.2239 5.3871,13.3733 13.8455,22.7772 25.4228,28.1168 11.5778,5.3396 29.1566,8.0332 52.6895,8.0332l28.7782 0zm-99.6605 -67.5743c13.562,2.5992 25.9429,13.8929 37.1892,33.9292l2.3631 4.0163c4.9144,8.6476 10.821,14.3182 17.7206,17.0117 -35.2525,0 -54.3433,-18.3345 -57.2729,-54.9572z"/></svg>');
  --font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-interface: '??', '??', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: #00ffff;
  --footnote-id-color-no-occurrences: #c0b0a0;
  --graph-node-focused: #00ffff;
  --graph-node-unresolved: #c0b0a0;
  --graph-text: #faf2d6;
  --gray: var(--text-faint);
  --h1-color: #cc00c4;
  --h2-color: #00b7eb;
  --h3-color: #ff8c00;
  --h4-color: #0000cc;
  --h5-color: #cc0000;
  --h6-color: #cccc00;
  --headerFont: var(--font-interface);
  --heading-formatting: #c0b0a0;
  --highlight: var(--text-highlight-bg);
  --hr-color: #00ffff;
  --icon-color-active: #00ffff;
  --icon-color-focused: #faf2d6;
  --inline-code: #8b5cf6;
  --inline-title-color: #cc00c4;
  --input-date-separator: #c0b0a0;
  --input-placeholder-color: #c0b0a0;
  --interactive-accent-rgb: #f8c537;
  --interactive-before: #7c6f64;
  --light: var(--background-primary);
  --light-bg-primary: #EDEDED;
  --light-bg-primary-alt: #d4d4d4;
  --light-bg-secondary: #C4C4C4;
  --light-bg-secondary-alt: #707070;
  --light-text: #1A2023;
  --light-text-faint: #999999;
  --lightgray: var(--background-secondary);
  --line-height: 1.6;
  --link-color: #00ffff;
  --link-color-hover: #004499;
  --link-decoration: doodle;
  --link-decoration-hover: doodle;
  --link-decoration-thickness: 2px;
  --link-decoration-thickness-hover: 1px;
  --link-external-color: #00ffff;
  --link-external-color-hover: #004499;
  --link-unresolved-color: #00ffff;
  --list-bullet-size-alt: 0.15em;
  --list-indent: 2em;
  --list-marker-color: rgb(8, 145, 178);
  --list-marker-color-collapsed: #00ffff;
  --menu-background: #191919;
  --metadata-border-color: #00ffff;
  --metadata-divider-color: #00ffff;
  --metadata-input-font: '??', '??', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #faf2d6;
  --metadata-label-font: '??', '??', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-background: #060335;
  --modal-border-color: #00ffff;
  --nav-collapse-icon-color: #c0b0a0;
  --nav-collapse-icon-color-collapsed: #c0b0a0;
  --nav-heading-color: #faf2d6;
  --nav-heading-color-collapsed: #c0b0a0;
  --nav-heading-color-hover: #faf2d6;
  --nav-item-color-active: #faf2d6;
  --nav-item-color-highlighted: #00ffff;
  --nav-item-color-hover: #faf2d6;
  --nav-item-color-selected: #faf2d6;
  --nav-tag-color: #c0b0a0;
  --pdf-background: #060335;
  --pdf-page-background: #060335;
  --pdf-shadow: 0 0 0 1px #00ffff;
  --pdf-sidebar-background: #060335;
  --pdf-thumbnail-shadow: 0 0 0 1px #00ffff;
  --pill-border-color: #00ffff;
  --pill-color-hover: #faf2d6;
  --pill-color-remove: #c0b0a0;
  --pill-color-remove-hover: #00ffff;
  --pre-code: #1e1e1e;
  --prompt-background: #060335;
  --rainbow-folders-enabled: 1;
  --ribbon-background: #191919;
  --ribbon-background-collapsed: #060335;
  --search-result-background: #060335;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #faf2d6;
  --setting-items-border-color: #00ffff;
  --sidebar-width: 300px;
  --slider-track-background: #00ffff;
  --status-bar-background: transparent;
  --status-bar-border-color: transparent;
  --status-bar-border-width: 0;
  --suggestion-background: #060335;
  --tab-background-active: #060335;
  --tab-container-background: #191919;
  --tab-outline-color: #00ffff;
  --tab-switcher-background: #191919;
  --tab-switcher-menubar-background: linear-gradient(to top, #191919, transparent);
  --tab-text-color: #c0b0a0;
  --tab-text-color-focused-active-current: #faf2d6;
  --tab-text-color-focused-highlighted: #00ffff;
  --table-add-button-border-color: #00ffff;
  --table-border-color: #00ffff;
  --table-drag-handle-color: #c0b0a0;
  --table-drag-handle-color-active: #fff;
  --table-header-border-color: #00ffff;
  --table-header-color: #faf2d6;
  --tag-color: #00ffff;
  --tag-color-hover: #00ffff;
  --tertiary: var(--text-accent-hover);
  --text-a: rgb(248, 197, 55);
  --text-a-hover: #83a598;
  --text-accent: #00ffff;
  --text-accent-hover: #004499;
  --text-faint: #c0b0a0;
  --text-highlight-bg: #640211;
  --text-link: #83a598;
  --text-normal: #faf2d6;
  --text-on-accent: #fff;
  --text-selection: rgb(138, 92, 245);
  --text-title-h1: #cc00c4;
  --text-title-h1-h: 300;
  --text-title-h1-l: 45%;
  --text-title-h1-s: 100%;
  --text-title-h2: #00b7eb;
  --text-title-h3: #ff8c00;
  --text-title-h4: #0000cc;
  --text-title-h5: #cc0000;
  --text-title-h6: #cccc00;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-interface);
  --titlebar-background: #191919;
  --titlebar-background-focused: #3D3D3D;
  --titlebar-border-color: #00ffff;
  --titlebar-text-color-focused: #faf2d6;
  --vault-profile-color: #faf2d6;
  --vault-profile-color-hover: #faf2d6;
  --vim-cursor: #f8c537;
  --workspace-divider-color: #00ffff;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 25, 25);
  color: rgb(250, 242, 214);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(6, 3, 53);
  color: rgb(250, 242, 214);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 25, 25);
  color: rgb(250, 242, 214);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 255, 255);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 25, 25);
  border-left-color: rgb(0, 255, 255);
  color: rgb(250, 242, 214);
}

body div#quartz-root {
  background-color: rgb(6, 3, 53);
  color: rgb(250, 242, 214);
}`,
    typography: `body .page article p > b, b {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body .page article p > em, em {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body .page article p > i, i {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body .page article p > strong, strong {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body .text-highlight {
  background-color: rgb(100, 2, 17);
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body del {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: line-through rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body p {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(250, 242, 214);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 600;
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: underline 2px rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
  text-decoration-thickness: 2px;
  transition: text-underline-offset 0.3s, opacity 0.15s ease-in-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(250, 242, 214);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 600;
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: underline 2px rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
  text-decoration-thickness: 2px;
}

body a.internal.broken {
  color: rgb(0, 255, 255);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 600;
  outline: rgb(0, 255, 255) none 0px;
  text-decoration: underline 2px rgba(138, 92, 245, 0.3);
  text-decoration-thickness: 2px;
}`,
    lists: `body dd {
  color: rgb(250, 242, 214);
}

body dt {
  color: rgb(250, 242, 214);
}

body ol > li {
  color: rgb(250, 242, 214);
}

body ol.overflow {
  background-color: rgb(6, 3, 53);
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body ul > li {
  color: rgb(250, 242, 214);
}

body ul.overflow {
  background-color: rgb(6, 3, 53);
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(192, 176, 160);
  text-decoration: rgb(192, 176, 160);
}

body blockquote {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: italic;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body table {
  color: rgb(250, 242, 214);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  width: 662px;
}

body td {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(250, 242, 214);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

body th {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(250, 242, 214);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

body tr {
  background-color: rgba(230, 0, 230, 0.7);
}`,
    code: `body code {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(61, 61, 61);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(61, 61, 61);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(250, 242, 214);
}

body pre > code, pre:has(> code) {
  background-color: rgb(61, 61, 61);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}

body pre:has(> code) {
  background-color: rgb(61, 61, 61);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}`,
    images: `body audio {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body figcaption {
  color: rgb(250, 242, 214);
}

body figure {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body img {
  border-bottom-color: rgb(250, 242, 214);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(250, 242, 214);
  border-radius: 6px;
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
}

body video {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

body .transclude {
  border-bottom-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body .transclude-inner {
  border-bottom-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(138, 92, 245);
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

body input[type=checkbox] {
  border-bottom-color: rgb(192, 176, 160);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(192, 176, 160);
  border-right-color: rgb(192, 176, 160);
  border-top-color: rgb(192, 176, 160);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='*'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='-'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='/'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='>'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='?'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='I'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='S'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='b'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='c'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='d'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='f'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='i'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='k'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='l'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='p'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='u'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='w'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-color: rgb(83, 223, 221);
  border-bottom-width: 1px;
  border-left-color: rgb(83, 223, 221);
  border-left-width: 1px;
  border-right-color: rgb(83, 223, 221);
  border-right-width: 1px;
  border-top-color: rgb(83, 223, 221);
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-width: 1px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 1px;
  border-right-color: rgb(251, 70, 76);
  border-right-width: 1px;
  border-top-color: rgb(251, 70, 76);
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-width: 1px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 1px;
  border-right-color: rgb(251, 70, 76);
  border-right-width: 1px;
  border-top-color: rgb(251, 70, 76);
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  border-bottom-color: rgb(168, 130, 255);
  border-bottom-width: 1px;
  border-left-color: rgb(168, 130, 255);
  border-left-width: 1px;
  border-right-color: rgb(168, 130, 255);
  border-right-width: 1px;
  border-top-color: rgb(168, 130, 255);
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  border-bottom-color: rgb(251, 70, 76);
  border-bottom-width: 1px;
  border-left-color: rgb(251, 70, 76);
  border-left-width: 1px;
  border-right-color: rgb(251, 70, 76);
  border-right-width: 1px;
  border-top-color: rgb(251, 70, 76);
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-width: 1px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 1px;
  border-right-color: rgb(2, 122, 255);
  border-right-width: 1px;
  border-top-color: rgb(2, 122, 255);
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-width: 1px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 1px;
  border-right-color: rgb(2, 122, 255);
  border-right-width: 1px;
  border-top-color: rgb(2, 122, 255);
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  border-bottom-color: rgb(233, 151, 63);
  border-bottom-width: 1px;
  border-left-color: rgb(233, 151, 63);
  border-left-width: 1px;
  border-right-color: rgb(233, 151, 63);
  border-right-width: 1px;
  border-top-color: rgb(233, 151, 63);
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
  border-bottom-color: rgb(68, 207, 110);
  border-bottom-width: 1px;
  border-left-color: rgb(68, 207, 110);
  border-left-width: 1px;
  border-right-color: rgb(68, 207, 110);
  border-right-width: 1px;
  border-top-color: rgb(68, 207, 110);
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  border-bottom-color: rgb(83, 223, 221);
  border-bottom-width: 1px;
  border-left-color: rgb(83, 223, 221);
  border-left-width: 1px;
  border-right-color: rgb(83, 223, 221);
  border-right-width: 1px;
  border-top-color: rgb(83, 223, 221);
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  border-bottom-color: rgb(2, 122, 255);
  border-bottom-width: 1px;
  border-left-color: rgb(2, 122, 255);
  border-left-width: 1px;
  border-right-color: rgb(2, 122, 255);
  border-right-width: 1px;
  border-top-color: rgb(2, 122, 255);
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  border-bottom-color: rgb(233, 151, 63);
  border-bottom-width: 1px;
  border-left-color: rgb(233, 151, 63);
  border-left-width: 1px;
  border-right-color: rgb(233, 151, 63);
  border-right-width: 1px;
  border-top-color: rgb(233, 151, 63);
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(250, 242, 214);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(6, 3, 53);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > * {
  color: rgb(250, 242, 214);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(250, 242, 214);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(250, 242, 214);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(250, 242, 214);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(250, 242, 214);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(250, 242, 214);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: "??", "??", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(0, 255, 255);
}

body h1 {
  color: rgb(204, 0, 196);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h2 {
  color: rgb(0, 183, 235);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(250, 242, 214);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h3 {
  color: rgb(255, 140, 0);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h4 {
  color: rgb(0, 0, 204);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h5 {
  color: rgb(204, 0, 0);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h6 {
  color: rgb(204, 204, 0);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body hr {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(6, 3, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(6, 3, 53);
}

body ::-webkit-scrollbar-corner {
  background: rgb(6, 3, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(6, 3, 53);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(6, 3, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(6, 3, 53);
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(6, 3, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(6, 3, 53);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(6, 3, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(6, 3, 53);
}

body ::-webkit-scrollbar-track {
  background: rgb(6, 3, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(6, 3, 53);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(220, 38, 38);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-decoration: rgb(220, 38, 38);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(220, 38, 38);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-decoration: rgb(220, 38, 38);
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}`,
    footer: `body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(250, 242, 214);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 600;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(220, 38, 38);
  text-decoration: rgb(220, 38, 38);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(220, 38, 38);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body li.section-li > .section .meta {
  color: rgb(220, 38, 38);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(220, 38, 38);
  text-decoration: rgb(220, 38, 38);
}

body ul.section-ul {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(192, 176, 160);
  font-family: "??", "??", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

body .metadata {
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

body .metadata-properties {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(250, 242, 214);
  font-family: "??", "??", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(250, 242, 214);
  text-decoration: underline dotted rgb(250, 242, 214);
}

body details {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body input[type=text] {
  font-family: "??", "??", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(61, 61, 61);
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

body progress {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body sub {
  color: rgb(250, 242, 214);
}

body summary {
  color: rgb(250, 242, 214);
}

body sup {
  color: rgb(250, 242, 214);
}`,
  },
  light: {
    base: `:root:root {
  --accent: rgb(8, 145, 178);
  --background-modifier-border: #00ffff;
  --background-primary: #EDEDED;
  --background-primary-alt: #d4d4d4;
  --background-secondary: #C4C4C4;
  --background-secondary-alt: #707070;
  --base-font-size: 16px;
  --bases-cards-background: #EDEDED;
  --bases-cards-cover-background: #d4d4d4;
  --bases-cards-shadow: 0 0 0 1px #00ffff;
  --bases-embed-border-color: #00ffff;
  --bases-table-border-color: #00ffff;
  --bases-table-cell-background-active: #EDEDED;
  --bases-table-cell-background-disabled: #d4d4d4;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245);
  --bases-table-group-background: #d4d4d4;
  --bases-table-header-background: #EDEDED;
  --bases-table-summary-background: #EDEDED;
  --blockquote-border-color: rgb(138, 92, 245);
  --blur-background: color-mix(in srgb, #EDEDED 65%, transparent) linear-gradient(#EDEDED, color-mix(in srgb, #EDEDED 65%, transparent));
  --bodyFont: var(--font-interface);
  --border-radius-large: 8px;
  --border-radius-medium: 6px;
  --border-radius-small: 4px;
  --callout-border-opacity: 1;
  --callout-border-width: 1px;
  --callout-padding: 16px 24px 0 24px;
  --canvas-background: #EDEDED;
  --canvas-card-label-color: #999999;
  --caret-color: #1A2023;
  --checkbox-border-color: #999999;
  --checkbox-color: rgb(138, 92, 245);
  --checkbox-marker-color: #EDEDED;
  --code-background: #707070;
  --code-border-color: #00ffff;
  --code-comment: #999999;
  --code-normal: #1A2023;
  --codeFont: var(--font-interface);
  --collapse-icon-color: #999999;
  --collapse-icon-color-collapsed: #00ffff;
  --color-accent-hover: #004499;
  --color-border: #00ffff;
  --content-max-width: 100%;
  --custom-font-family: Arial, sans-serif;
  --dark: var(--text-normal);
  --dark-bg-primary: #060335;
  --dark-bg-primary-alt: #242424;
  --dark-bg-secondary: #191919;
  --dark-bg-secondary-alt: #3D3D3D;
  --dark-text: #faf2d6;
  --dark-text-faint: #c0b0a0;
  --darkgray: var(--text-normal);
  --default-font: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --divider-color: #00ffff;
  --divider-color-hover: rgb(138, 92, 245);
  --embed-block-shadow-hover: 0 0 0 1px #00ffff, inset 0 0 0 1px #00ffff;
  --embed-border-start: 2px solid rgb(138, 92, 245);
  --empty-state-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M13.32 7.155a4.375 4.375 0 0 1-5.7 6.517l5.7-6.517ZM10 5.625a4.375 4.375 0 0 0-3.32 7.22l5.704-6.514A4.35 4.35 0 0 0 10 5.625ZM18.125 10A8.125 8.125 0 1 1 10 1.875 8.135 8.135 0 0 1 18.125 10Zm-2.5 0a5.6 5.6 0 0 0-1.476-3.793l.382-.483a.626.626 0 1 0-.937-.823l-.384.483a5.625 5.625 0 0 0-7.36 8.409l-.381.483a.625.625 0 0 0 .937.823l.384-.483A5.621 5.621 0 0 0 15.625 10Z'/%3e%3c/svg%3e");
  --file-header-background: #EDEDED;
  --file-header-background-focused: #EDEDED;
  --file-header-font: '??', '??', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: #1A2023;
  --fleuron: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="279.4mm" height="152.4mm" fill="black" stroke-width="0" viewBox="0 0 279.4 152.4"><path class="fil0 str0" d="M277.581 151.999l0 -13.7038c-5.2453,0 -9.2621,-1.3233 -12.0031,-4.0168 -2.6935,-2.6935 -5.2922,-7.7971 -7.797,-15.3575l-2.2208 -6.9464c-5.0092,-15.3106 -13.1367,-25.3759 -24.5253,-30.1959 10.538,-2.0321 18.9021,-6.3325 25.1398,-12.948 6.2376,-6.5686 9.3564,-14.4125 9.3564,-23.4386 0,-12.6639 -4.7731,-23.1076 -14.2713,-31.3768 -9.4982,-8.2698 -21.5482,-12.381 -36.1025,-12.381 -22.1627,0 -39.2688,9.4982 -51.3662,28.4947l10.6323 9.0255c7.8445,-8.411 15.9251,-12.6171 24.2417,-12.6171 6.8047,0 12.6645,2.2214 17.5788,6.7104 4.8675,4.489 7.3249,9.8292 7.3249,16.0194 0,5.151 -1.9378,9.64 -5.7654,13.4202 -3.8277,3.7808 -8.3167,5.6706 -13.4677,5.6706 -9.309,0 -22.3988,-6.6155 -39.1739,-19.7996l-8.459 -6.663c-27.4074,-21.5956 -53.5395,-32.3697 -78.4901,-32.3697 -21.5956,0 -39.8833,7.0882 -54.8629,21.3121 -14.9796,14.2239 -22.4931,31.5192 -22.4931,51.9333 0,20.6976 7.7496,37.3784 23.2494,50.1372 15.4992,12.7114 35.8664,19.0908 61.0531,19.0908l4.5839 0 0 -13.7038c-14.9327,-0.9923 -26.7935,-6.1902 -35.5829,-15.5941 -8.7425,-9.3564 -13.1372,-21.5007 -13.1372,-36.4809 0,-14.7435 5.5288,-27.4074 16.5864,-37.8511 11.1051,-10.4906 24.4784,-15.7359 40.1668,-15.7359 15.1214,0 28.589,4.6314 40.4029,13.8461 11.8139,9.2146 17.7206,19.7521 17.7206,31.566 0,5.6231 -1.843,10.3963 -5.4814,14.2708 -3.639,3.8751 -8.128,5.8123 -13.4676,5.8123 -5.3871,0 -9.4039,-1.4645 -12.1449,-4.3472 -2.6935,-2.9296 -4.0637,-7.3243 -4.0637,-13.2316 0,-3.591 0.9923,-7.8439 3.0245,-12.7588l-12.4284 -5.6706c-5.5288,13.0898 -8.3167,24.1 -8.3167,32.9369 0,10.9158 3.5441,20.2248 10.5849,28.0219 7.0413,7.797 15.5941,11.7196 25.5176,11.7196 6.3794,0 12.1918,-1.5594 17.4845,-4.7257 5.2453,-3.1188 9.9235,-7.8445 14.0821,-14.2239 5.3871,13.3733 13.8455,22.7772 25.4228,28.1168 11.5778,5.3396 29.1566,8.0332 52.6895,8.0332l28.7782 0zm-99.6605 -67.5743c13.562,2.5992 25.9429,13.8929 37.1892,33.9292l2.3631 4.0163c4.9144,8.6476 10.821,14.3182 17.7206,17.0117 -35.2525,0 -54.3433,-18.3345 -57.2729,-54.9572z"/></svg>');
  --font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-interface: '??', '??', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: #00ffff;
  --footnote-id-color-no-occurrences: #999999;
  --graph-node-focused: #00ffff;
  --graph-node-unresolved: #999999;
  --graph-text: #1A2023;
  --gray: var(--text-faint);
  --h1-color: #cc00c4;
  --h2-color: #00b7eb;
  --h3-color: #ff8c00;
  --h4-color: #0000cc;
  --h5-color: #cc0000;
  --h6-color: #cccc00;
  --headerFont: var(--font-interface);
  --heading-formatting: #999999;
  --highlight: var(--text-highlight-bg);
  --hr-color: #00ffff;
  --icon-color-active: #00ffff;
  --icon-color-focused: #1A2023;
  --inline-code: #458588;
  --inline-title-color: #cc00c4;
  --input-date-separator: #999999;
  --input-placeholder-color: #999999;
  --interactive-accent: rgb(138, 92, 245);
  --interactive-accent-rgb: #961327;
  --interactive-before: #a89984;
  --light: var(--background-primary);
  --light-bg-primary: #EDEDED;
  --light-bg-primary-alt: #d4d4d4;
  --light-bg-secondary: #C4C4C4;
  --light-bg-secondary-alt: #707070;
  --light-text: #1A2023;
  --light-text-faint: #999999;
  --lightgray: var(--background-secondary);
  --line-height: 1.6;
  --link-color: #00ffff;
  --link-color-hover: #004499;
  --link-decoration: doodle;
  --link-decoration-hover: doodle;
  --link-decoration-thickness: 2px;
  --link-decoration-thickness-hover: 1px;
  --link-external-color: #00ffff;
  --link-external-color-hover: #004499;
  --link-unresolved-color: #00ffff;
  --list-bullet-size-alt: 0.15em;
  --list-indent: 2em;
  --list-marker-color: rgb(8, 145, 178);
  --list-marker-color-collapsed: #00ffff;
  --menu-background: #C4C4C4;
  --metadata-border-color: #00ffff;
  --metadata-divider-color: #00ffff;
  --metadata-input-font: '??', '??', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #1A2023;
  --metadata-label-font: '??', '??', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-background: #EDEDED;
  --modal-border-color: #00ffff;
  --nav-collapse-icon-color: #999999;
  --nav-collapse-icon-color-collapsed: #999999;
  --nav-heading-color: #1A2023;
  --nav-heading-color-collapsed: #999999;
  --nav-heading-color-hover: #1A2023;
  --nav-item-color-active: #1A2023;
  --nav-item-color-highlighted: #00ffff;
  --nav-item-color-hover: #1A2023;
  --nav-item-color-selected: #1A2023;
  --nav-tag-color: #999999;
  --pdf-background: #EDEDED;
  --pdf-page-background: #EDEDED;
  --pdf-sidebar-background: #EDEDED;
  --pill-border-color: #00ffff;
  --pill-color-hover: #1A2023;
  --pill-color-remove: #999999;
  --pill-color-remove-hover: #00ffff;
  --pre-code: #bebebe;
  --prompt-background: #EDEDED;
  --rainbow-folders-enabled: 1;
  --raised-background: color-mix(in srgb, #EDEDED 65%, transparent) linear-gradient(#EDEDED, color-mix(in srgb, #EDEDED 65%, transparent));
  --ribbon-background: #C4C4C4;
  --ribbon-background-collapsed: #EDEDED;
  --search-result-background: #EDEDED;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #1A2023;
  --setting-items-background: #d4d4d4;
  --setting-items-border-color: #00ffff;
  --sidebar-width: 300px;
  --slider-track-background: #00ffff;
  --status-bar-background: transparent;
  --status-bar-border-color: transparent;
  --status-bar-border-width: 0;
  --suggestion-background: #EDEDED;
  --tab-background-active: #EDEDED;
  --tab-container-background: #C4C4C4;
  --tab-outline-color: #00ffff;
  --tab-switcher-background: #C4C4C4;
  --tab-switcher-menubar-background: linear-gradient(to top, #C4C4C4, transparent);
  --tab-text-color: #999999;
  --tab-text-color-focused-active-current: #1A2023;
  --tab-text-color-focused-highlighted: #00ffff;
  --table-add-button-border-color: #00ffff;
  --table-border-color: #00ffff;
  --table-drag-handle-background-active: rgb(138, 92, 245);
  --table-drag-handle-color: #999999;
  --table-header-border-color: #00ffff;
  --table-header-color: #1A2023;
  --table-selection-border-color: rgb(138, 92, 245);
  --tag-color: #00ffff;
  --tag-color-hover: #00ffff;
  --tertiary: var(--text-accent-hover);
  --text-a: #961327;
  --text-a-hover: #D49335;
  --text-accent: #00ffff;
  --text-accent-hover: #004499;
  --text-faint: #999999;
  --text-highlight-bg: #f0f0f0;
  --text-link: #D49335;
  --text-normal: #1A2023;
  --text-selection: rgb(138, 92, 245);
  --text-title-h1: #cc00c4;
  --text-title-h1-h: 302;
  --text-title-h1-l: 40%;
  --text-title-h1-s: 100%;
  --text-title-h2: #00b7eb;
  --text-title-h3: #ff8c00;
  --text-title-h4: #0000cc;
  --text-title-h5: #cc0000;
  --text-title-h6: #cccc00;
  --text-white: #ffffff;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-interface);
  --titlebar-background: #C4C4C4;
  --titlebar-background-focused: #707070;
  --titlebar-border-color: #00ffff;
  --titlebar-text-color-focused: #1A2023;
  --vault-profile-color: #1A2023;
  --vault-profile-color-hover: #1A2023;
  --vim-cursor: #961327;
  --workspace-divider-color: #00ffff;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(196, 196, 196);
  color: rgb(26, 32, 35);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(237, 237, 237);
  color: rgb(26, 32, 35);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(196, 196, 196);
  color: rgb(26, 32, 35);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 255, 255);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(196, 196, 196);
  border-left-color: rgb(0, 255, 255);
  color: rgb(26, 32, 35);
}

body div#quartz-root {
  background-color: rgb(237, 237, 237);
  color: rgb(26, 32, 35);
}`,
    typography: `body .page article p > b, b {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body .page article p > em, em {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body .page article p > i, i {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body .page article p > strong, strong {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body .text-highlight {
  background-color: rgb(240, 240, 240);
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body del {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: line-through rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body p {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(26, 32, 35);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 600;
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: underline 2px rgb(138, 92, 245);
  text-decoration-thickness: 2px;
  transition: text-underline-offset 0.3s, opacity 0.15s ease-in-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(26, 32, 35);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 600;
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: underline 2px rgb(138, 92, 245);
  text-decoration-thickness: 2px;
}

body a.internal.broken {
  color: rgb(0, 255, 255);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 600;
  outline: rgb(0, 255, 255) none 0px;
  text-decoration: underline 2px rgba(138, 92, 245, 0.3);
  text-decoration-thickness: 2px;
}`,
    lists: `body dd {
  color: rgb(26, 32, 35);
}

body dt {
  color: rgb(26, 32, 35);
}

body ol > li {
  color: rgb(26, 32, 35);
}

body ol.overflow {
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body ul > li {
  color: rgb(26, 32, 35);
}

body ul.overflow {
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body blockquote {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-style: italic;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body table {
  color: rgb(26, 32, 35);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  width: 662px;
}

body td {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(26, 32, 35);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

body th {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(26, 32, 35);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

body tr {
  background-color: rgba(204, 0, 197, 0.7);
}`,
    code: `body code {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(112, 112, 112);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(112, 112, 112);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(26, 32, 35);
}

body pre > code, pre:has(> code) {
  background-color: rgb(112, 112, 112);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}

body pre:has(> code) {
  background-color: rgb(112, 112, 112);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}`,
    images: `body audio {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body figcaption {
  color: rgb(26, 32, 35);
}

body figure {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body img {
  border-bottom-color: rgb(26, 32, 35);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(26, 32, 35);
  border-radius: 6px;
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
}

body video {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    embeds: `body .file-embed {
  background-color: rgb(212, 212, 212);
}

body .footnotes {
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

body .transclude {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body .transclude-inner {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(138, 92, 245);
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='*'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='-'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='/'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='>'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='?'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='I'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='S'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='b'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='c'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='d'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='f'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='i'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='k'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='l'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='p'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='u'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='w'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-color: rgb(0, 191, 188);
  border-bottom-width: 1px;
  border-left-color: rgb(0, 191, 188);
  border-left-width: 1px;
  border-right-color: rgb(0, 191, 188);
  border-right-width: 1px;
  border-top-color: rgb(0, 191, 188);
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  border-bottom-color: rgb(233, 49, 71);
  border-bottom-width: 1px;
  border-left-color: rgb(233, 49, 71);
  border-left-width: 1px;
  border-right-color: rgb(233, 49, 71);
  border-right-width: 1px;
  border-top-color: rgb(233, 49, 71);
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  border-bottom-color: rgb(233, 49, 71);
  border-bottom-width: 1px;
  border-left-color: rgb(233, 49, 71);
  border-left-width: 1px;
  border-right-color: rgb(233, 49, 71);
  border-right-width: 1px;
  border-top-color: rgb(233, 49, 71);
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  border-bottom-color: rgb(120, 82, 238);
  border-bottom-width: 1px;
  border-left-color: rgb(120, 82, 238);
  border-left-width: 1px;
  border-right-color: rgb(120, 82, 238);
  border-right-width: 1px;
  border-top-color: rgb(120, 82, 238);
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  border-bottom-color: rgb(233, 49, 71);
  border-bottom-width: 1px;
  border-left-color: rgb(233, 49, 71);
  border-left-width: 1px;
  border-right-color: rgb(233, 49, 71);
  border-right-width: 1px;
  border-top-color: rgb(233, 49, 71);
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-width: 1px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 1px;
  border-right-color: rgb(8, 109, 221);
  border-right-width: 1px;
  border-top-color: rgb(8, 109, 221);
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-width: 1px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 1px;
  border-right-color: rgb(8, 109, 221);
  border-right-width: 1px;
  border-top-color: rgb(8, 109, 221);
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  border-bottom-color: rgb(236, 117, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(236, 117, 0);
  border-left-width: 1px;
  border-right-color: rgb(236, 117, 0);
  border-right-width: 1px;
  border-top-color: rgb(236, 117, 0);
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
  border-bottom-color: rgb(8, 185, 78);
  border-bottom-width: 1px;
  border-left-color: rgb(8, 185, 78);
  border-left-width: 1px;
  border-right-color: rgb(8, 185, 78);
  border-right-width: 1px;
  border-top-color: rgb(8, 185, 78);
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  border-bottom-color: rgb(0, 191, 188);
  border-bottom-width: 1px;
  border-left-color: rgb(0, 191, 188);
  border-left-width: 1px;
  border-right-color: rgb(0, 191, 188);
  border-right-width: 1px;
  border-top-color: rgb(0, 191, 188);
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  border-bottom-color: rgb(8, 109, 221);
  border-bottom-width: 1px;
  border-left-color: rgb(8, 109, 221);
  border-left-width: 1px;
  border-right-color: rgb(8, 109, 221);
  border-right-width: 1px;
  border-top-color: rgb(8, 109, 221);
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  border-bottom-color: rgb(236, 117, 0);
  border-bottom-width: 1px;
  border-left-color: rgb(236, 117, 0);
  border-left-width: 1px;
  border-right-color: rgb(236, 117, 0);
  border-right-width: 1px;
  border-top-color: rgb(236, 117, 0);
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(26, 32, 35);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(237, 237, 237);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > * {
  color: rgb(26, 32, 35);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 32, 35);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(196, 196, 196);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(26, 32, 35);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: "??", "??", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(0, 255, 255);
}

body h1 {
  color: rgb(204, 0, 196);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h2 {
  color: rgb(0, 183, 235);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(26, 32, 35);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h3 {
  color: rgb(255, 140, 0);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h4 {
  color: rgb(0, 0, 204);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h5 {
  color: rgb(204, 0, 0);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body h6 {
  color: rgb(204, 204, 0);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body hr {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
}

body ::-webkit-scrollbar-corner {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
}

body ::-webkit-scrollbar-track {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(220, 38, 38);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-decoration: rgb(220, 38, 38);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(220, 38, 38);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-decoration: rgb(220, 38, 38);
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}`,
    footer: `body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(26, 32, 35);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-weight: 600;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(220, 38, 38);
  text-decoration: rgb(220, 38, 38);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(220, 38, 38);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body li.section-li > .section .meta {
  color: rgb(220, 38, 38);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(220, 38, 38);
  text-decoration: rgb(220, 38, 38);
}

body ul.section-ul {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(153, 153, 153);
  font-family: "??", "??", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

body .metadata {
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

body .metadata-properties {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(26, 32, 35);
  font-family: "??", "??", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(26, 32, 35);
  text-decoration: underline dotted rgb(26, 32, 35);
}

body details {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body input[type=text] {
  font-family: "??", "??", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(112, 112, 112);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

body progress {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body sub {
  color: rgb(26, 32, 35);
}

body summary {
  color: rgb(26, 32, 35);
}

body sup {
  color: rgb(26, 32, 35);
}`,
  },
};
