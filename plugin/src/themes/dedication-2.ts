import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "dedication-2",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: rgb(8, 145, 178);
  --background-modifier-border: #00ffff;
  --background-primary: #0d1117;
  --background-secondary: #161b22;
  --background-secondary-alt: #21262d;
  --bases-cards-background: #0d1117;
  --bases-cards-shadow: 0 0 0 1px #00ffff;
  --bases-embed-border-color: #00ffff;
  --bases-table-border-color: #00ffff;
  --bases-table-cell-background-active: #0d1117;
  --bases-table-cell-shadow-focus: 0 0 0 2px #0066cc;
  --bases-table-header-background: #0d1117;
  --bases-table-summary-background: #0d1117;
  --blockquote-border-color: #0066cc;
  --canvas-background: #0d1117;
  --canvas-card-label-color: #c0b0a0;
  --caret-color: #dedede;
  --checkbox-border-color: #c0b0a0;
  --checkbox-color: #0066cc;
  --checkbox-marker-color: #0d1117;
  --code-background: #6b6666;
  --code-block: #83a598;
  --code-border-color: #00ffff;
  --code-comment: #c0b0a0;
  --code-normal: #dedede;
  --collapse-icon-color: #c0b0a0;
  --collapse-icon-color-collapsed: #00ffff;
  --default-font: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --divider-color: #00ffff;
  --divider-color-hover: #0066cc;
  --embed-block-shadow-hover: 0 0 0 1px #00ffff, inset 0 0 0 1px #00ffff;
  --embed-border-start: 2px solid #0066cc;
  --empty-state-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M13.32 7.155a4.375 4.375 0 0 1-5.7 6.517l5.7-6.517ZM10 5.625a4.375 4.375 0 0 0-3.32 7.22l5.704-6.514A4.35 4.35 0 0 0 10 5.625ZM18.125 10A8.125 8.125 0 1 1 10 1.875 8.135 8.135 0 0 1 18.125 10Zm-2.5 0a5.6 5.6 0 0 0-1.476-3.793l.382-.483a.626.626 0 1 0-.937-.823l-.384.483a5.625 5.625 0 0 0-7.36 8.409l-.381.483a.625.625 0 0 0 .937.823l.384-.483A5.621 5.621 0 0 0 15.625 10Z'/%3e%3c/svg%3e");
  --file-header-background: #0d1117;
  --file-header-background-focused: #0d1117;
  --file-header-font: '??', '??', "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: #dedede;
  --fleuron: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="279.4mm" height="152.4mm" fill="black" stroke-width="0" viewBox="0 0 279.4 152.4"><path class="fil0 str0" d="M277.581 151.999l0 -13.7038c-5.2453,0 -9.2621,-1.3233 -12.0031,-4.0168 -2.6935,-2.6935 -5.2922,-7.7971 -7.797,-15.3575l-2.2208 -6.9464c-5.0092,-15.3106 -13.1367,-25.3759 -24.5253,-30.1959 10.538,-2.0321 18.9021,-6.3325 25.1398,-12.948 6.2376,-6.5686 9.3564,-14.4125 9.3564,-23.4386 0,-12.6639 -4.7731,-23.1076 -14.2713,-31.3768 -9.4982,-8.2698 -21.5482,-12.381 -36.1025,-12.381 -22.1627,0 -39.2688,9.4982 -51.3662,28.4947l10.6323 9.0255c7.8445,-8.411 15.9251,-12.6171 24.2417,-12.6171 6.8047,0 12.6645,2.2214 17.5788,6.7104 4.8675,4.489 7.3249,9.8292 7.3249,16.0194 0,5.151 -1.9378,9.64 -5.7654,13.4202 -3.8277,3.7808 -8.3167,5.6706 -13.4677,5.6706 -9.309,0 -22.3988,-6.6155 -39.1739,-19.7996l-8.459 -6.663c-27.4074,-21.5956 -53.5395,-32.3697 -78.4901,-32.3697 -21.5956,0 -39.8833,7.0882 -54.8629,21.3121 -14.9796,14.2239 -22.4931,31.5192 -22.4931,51.9333 0,20.6976 7.7496,37.3784 23.2494,50.1372 15.4992,12.7114 35.8664,19.0908 61.0531,19.0908l4.5839 0 0 -13.7038c-14.9327,-0.9923 -26.7935,-6.1902 -35.5829,-15.5941 -8.7425,-9.3564 -13.1372,-21.5007 -13.1372,-36.4809 0,-14.7435 5.5288,-27.4074 16.5864,-37.8511 11.1051,-10.4906 24.4784,-15.7359 40.1668,-15.7359 15.1214,0 28.589,4.6314 40.4029,13.8461 11.8139,9.2146 17.7206,19.7521 17.7206,31.566 0,5.6231 -1.843,10.3963 -5.4814,14.2708 -3.639,3.8751 -8.128,5.8123 -13.4676,5.8123 -5.3871,0 -9.4039,-1.4645 -12.1449,-4.3472 -2.6935,-2.9296 -4.0637,-7.3243 -4.0637,-13.2316 0,-3.591 0.9923,-7.8439 3.0245,-12.7588l-12.4284 -5.6706c-5.5288,13.0898 -8.3167,24.1 -8.3167,32.9369 0,10.9158 3.5441,20.2248 10.5849,28.0219 7.0413,7.797 15.5941,11.7196 25.5176,11.7196 6.3794,0 12.1918,-1.5594 17.4845,-4.7257 5.2453,-3.1188 9.9235,-7.8445 14.0821,-14.2239 5.3871,13.3733 13.8455,22.7772 25.4228,28.1168 11.5778,5.3396 29.1566,8.0332 52.6895,8.0332l28.7782 0zm-99.6605 -67.5743c13.562,2.5992 25.9429,13.8929 37.1892,33.9292l2.3631 4.0163c4.9144,8.6476 10.821,14.3182 17.7206,17.0117 -35.2525,0 -54.3433,-18.3345 -57.2729,-54.9572z"/></svg>');
  --font-interface: '??', '??', "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: #00ffff;
  --footnote-id-color-no-occurrences: #c0b0a0;
  --graph-node-focused: #00ffff;
  --graph-node-unresolved: #c0b0a0;
  --graph-text: #dedede;
  --heading-formatting: #c0b0a0;
  --hr-color: #00ffff;
  --icon-color-active: #00ffff;
  --icon-color-focused: #dedede;
  --inline-code: #8b5cf6;
  --input-date-separator: #c0b0a0;
  --input-placeholder-color: #c0b0a0;
  --interactive-accent: #0066cc;
  --interactive-accent-rgb: #f8c537;
  --interactive-before: #7c6f64;
  --link-color: #00ffff;
  --link-color-hover: #D49335;
  --link-decoration: none;
  --link-external-color: #00ffff;
  --link-external-color-hover: #D49335;
  --link-unresolved-color: #00ffff;
  --list-bullet-size-alt: 0.15em;
  --list-indent: 2em;
  --list-marker-color: rgb(8, 145, 178);
  --list-marker-color-collapsed: #00ffff;
  --menu-background: #161b22;
  --metadata-border-color: #00ffff;
  --metadata-divider-color: #00ffff;
  --metadata-input-font: '??', '??', "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #dedede;
  --metadata-label-font: '??', '??', "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-background: #0d1117;
  --modal-border-color: #00ffff;
  --mono-font: "SF Mono", "Cascadia Code", "JetBrains Mono", "Fira Code", monospace;
  --nav-collapse-icon-color: #c0b0a0;
  --nav-collapse-icon-color-collapsed: #c0b0a0;
  --nav-heading-color: #dedede;
  --nav-heading-color-collapsed: #c0b0a0;
  --nav-heading-color-hover: #dedede;
  --nav-item-color-active: #dedede;
  --nav-item-color-highlighted: #00ffff;
  --nav-item-color-hover: #dedede;
  --nav-item-color-selected: #dedede;
  --nav-tag-color: #c0b0a0;
  --pdf-background: #0d1117;
  --pdf-page-background: #0d1117;
  --pdf-shadow: 0 0 0 1px #00ffff;
  --pdf-sidebar-background: #0d1117;
  --pdf-thumbnail-shadow: 0 0 0 1px #00ffff;
  --pill-border-color: #00ffff;
  --pill-color-hover: #dedede;
  --pill-color-remove: #c0b0a0;
  --pill-color-remove-hover: #00ffff;
  --pre-code: #1e1e1e;
  --prompt-background: #0d1117;
  --ribbon-background: #161b22;
  --ribbon-background-collapsed: #0d1117;
  --search-result-background: #0d1117;
  --setting-group-heading-color: #dedede;
  --setting-items-border-color: #00ffff;
  --slider-track-background: #00ffff;
  --status-bar-background: transparent;
  --status-bar-border-color: transparent;
  --status-bar-border-width: 0;
  --suggestion-background: #0d1117;
  --tab-background-active: #0d1117;
  --tab-container-background: #161b22;
  --tab-outline-color: #00ffff;
  --tab-switcher-background: #161b22;
  --tab-switcher-menubar-background: linear-gradient(to top, #161b22, transparent);
  --tab-text-color: #c0b0a0;
  --tab-text-color-focused-active-current: #dedede;
  --tab-text-color-focused-highlighted: #00ffff;
  --table-add-button-border-color: #00ffff;
  --table-border-color: #00ffff;
  --table-drag-handle-background-active: #0066cc;
  --table-drag-handle-color: #c0b0a0;
  --table-drag-handle-color-active: #fff;
  --table-header-border-color: #00ffff;
  --table-header-color: #dedede;
  --table-selection-border-color: #0066cc;
  --tag-color: #00ffff;
  --tag-color-hover: #00ffff;
  --text-a: #f8c537;
  --text-a-hover: #83a598;
  --text-accent: #00ffff;
  --text-accent-hover: #D49335;
  --text-faint: #c0b0a0;
  --text-highlight-bg: #640211;
  --text-link: #83a598;
  --text-normal: #dedede;
  --text-on-accent: #fff;
  --text-selection: #0066cc;
  --text-title-h1: #289aff;
  --text-title-h2: #00f56a;
  --text-title-h3: #0af7ff;
  --text-title-h4: #F9F871;
  --text-title-h5: #ff5757;
  --text-title-h6: #ff3cd5;
  --titlebar-background: #161b22;
  --titlebar-background-focused: #21262d;
  --titlebar-border-color: #00ffff;
  --titlebar-text-color-focused: #dedede;
  --vault-profile-color: #dedede;
  --vault-profile-color-hover: #dedede;
  --vim-cursor: #f8c537;
  --workspace-divider-color: #00ffff;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 27, 34);
  color: rgb(222, 222, 222);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(13, 17, 23);
  color: rgb(222, 222, 222);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 27, 34);
  color: rgb(222, 222, 222);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 255, 255);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 27, 34);
  border-left-color: rgb(0, 255, 255);
  color: rgb(222, 222, 222);
}

body div#quartz-root {
  background-color: rgb(13, 17, 23);
  color: rgb(222, 222, 222);
}`,
    typography: `body .page article p > b, b {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body .page article p > em, em {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body .page article p > i, i {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body .page article p > strong, strong {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body .text-highlight {
  background-color: rgb(100, 2, 17);
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body del {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: line-through rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body p {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(222, 222, 222);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: underline rgb(0, 255, 255);
  text-decoration-color: rgb(0, 255, 255);
  transition: 0.2s;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(222, 222, 222);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
  transition: color 0.2s;
}

body a.internal.broken {
  color: rgb(222, 222, 222);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
  transition: color 0.2s;
}`,
    lists: `body dd {
  color: rgb(222, 222, 222);
}

body dt {
  color: rgb(222, 222, 222);
}

body ol > li {
  color: rgb(222, 222, 222);
}

body ol.overflow {
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body ul > li {
  color: rgb(222, 222, 222);
}

body ul.overflow {
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(192, 176, 160);
  text-decoration: rgb(192, 176, 160);
}

body blockquote {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-style: italic;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body table {
  color: rgb(222, 222, 222);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  width: 662px;
}

body td {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(222, 222, 222);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

body th {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(222, 222, 222);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

body tr {
  background-color: color(srgb 0.0668627 0.147255 0.226667);
}`,
    code: `body code {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(0, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 255, 255);
  border-left-width: 1px;
  border-right-color: rgb(0, 255, 255);
  border-right-width: 1px;
  border-top-color: rgb(0, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(0, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 255, 255);
  border-left-width: 1px;
  border-right-color: rgb(0, 255, 255);
  border-right-width: 1px;
  border-top-color: rgb(0, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(222, 222, 222);
}

body pre > code > [data-line] {
  border-left-color: rgb(249, 248, 113);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(249, 248, 113);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(249, 248, 113);
  border-left-color: rgb(249, 248, 113);
  border-right-color: rgb(249, 248, 113);
  border-top-color: rgb(249, 248, 113);
}

body pre > code, pre:has(> code) {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(0, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 255, 255);
  border-left-width: 1px;
  border-right-color: rgb(0, 255, 255);
  border-right-width: 1px;
  border-top-color: rgb(0, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(0, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 255, 255);
  border-left-width: 1px;
  border-right-color: rgb(0, 255, 255);
  border-right-width: 1px;
  border-top-color: rgb(0, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body figcaption {
  color: rgb(222, 222, 222);
}

body figure {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body img {
  border-bottom-color: rgb(222, 222, 222);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(222, 222, 222);
  border-radius: 6px;
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
}

body video {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

body .transclude {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(0, 102, 204);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body .transclude-inner {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(0, 102, 204);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(192, 176, 160);
  text-decoration: rgb(192, 176, 160);
  text-decoration-color: rgb(192, 176, 160);
}

body input[type=checkbox] {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  margin-bottom: 2.66667px;
  transition: 0.2s;
  width: 16.6562px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='*'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='-'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='/'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='>'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='?'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='I'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='S'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='b'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='c'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='d'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='f'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='i'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='k'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='l'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='p'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='u'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='w'] {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(222, 222, 222);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(13, 17, 23);
}

body .search > .search-container > .search-space > * {
  color: rgb(222, 222, 222);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(222, 222, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(222, 222, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(222, 222, 222);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 27, 34);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(222, 222, 222);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(0, 255, 255);
}

body h1 {
  color: rgb(40, 154, 255);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h2 {
  color: rgb(0, 245, 106);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(222, 222, 222);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h3 {
  color: rgb(10, 247, 255);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h4 {
  color: rgb(249, 248, 113);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h5 {
  color: rgb(255, 87, 87);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h6 {
  color: rgb(255, 60, 213);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body hr {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-corner {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-track {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}`,
    footer: `body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(222, 222, 222);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body li.section-li > .section .meta {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(192, 176, 160);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

body .metadata {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body .metadata-properties {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(222, 222, 222);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(222, 222, 222);
  text-decoration: underline dotted rgb(222, 222, 222);
}

body details {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body input[type=text] {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(107, 102, 102);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

body progress {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body sub {
  color: rgb(222, 222, 222);
}

body summary {
  color: rgb(222, 222, 222);
}

body sup {
  color: rgb(222, 222, 222);
}`,
  },
  light: {
    base: `:root:root {
  --accent: rgb(8, 145, 178);
  --background-modifier-border: #00b8d4;
  --background-primary: #EDEDED;
  --background-primary-alt: #d4d4d4;
  --background-secondary: #C4C4C4;
  --background-secondary-alt: #707070;
  --bases-cards-background: #EDEDED;
  --bases-cards-cover-background: #d4d4d4;
  --bases-cards-shadow: 0 0 0 1px #00b8d4;
  --bases-embed-border-color: #00b8d4;
  --bases-table-border-color: #00b8d4;
  --bases-table-cell-background-active: #EDEDED;
  --bases-table-cell-background-disabled: #d4d4d4;
  --bases-table-cell-shadow-focus: 0 0 0 2px #2962ff;
  --bases-table-group-background: #d4d4d4;
  --bases-table-header-background: #EDEDED;
  --bases-table-summary-background: #EDEDED;
  --blockquote-border-color: #2962ff;
  --blur-background: color-mix(in srgb, #EDEDED 65%, transparent) linear-gradient(#EDEDED, color-mix(in srgb, #EDEDED 65%, transparent));
  --canvas-background: #EDEDED;
  --canvas-card-label-color: #999999;
  --caret-color: #1A2023;
  --checkbox-border-color: #999999;
  --checkbox-color: #2962ff;
  --checkbox-marker-color: #EDEDED;
  --code-background: #999999;
  --code-block: #83a598;
  --code-border-color: #00b8d4;
  --code-comment: #999999;
  --code-normal: #1A2023;
  --collapse-icon-color: #999999;
  --collapse-icon-color-collapsed: #00b8d4;
  --default-font: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --divider-color: #00b8d4;
  --divider-color-hover: #2962ff;
  --embed-block-shadow-hover: 0 0 0 1px #00b8d4, inset 0 0 0 1px #00b8d4;
  --embed-border-start: 2px solid #2962ff;
  --empty-state-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M13.32 7.155a4.375 4.375 0 0 1-5.7 6.517l5.7-6.517ZM10 5.625a4.375 4.375 0 0 0-3.32 7.22l5.704-6.514A4.35 4.35 0 0 0 10 5.625ZM18.125 10A8.125 8.125 0 1 1 10 1.875 8.135 8.135 0 0 1 18.125 10Zm-2.5 0a5.6 5.6 0 0 0-1.476-3.793l.382-.483a.626.626 0 1 0-.937-.823l-.384.483a5.625 5.625 0 0 0-7.36 8.409l-.381.483a.625.625 0 0 0 .937.823l.384-.483A5.621 5.621 0 0 0 15.625 10Z'/%3e%3c/svg%3e");
  --file-header-background: #EDEDED;
  --file-header-background-focused: #EDEDED;
  --file-header-font: '??', '??', "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: #1A2023;
  --fleuron: url('data:image/svg+xmlutf8,<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="279.4mm" height="152.4mm" fill="black" stroke-width="0" viewBox="0 0 279.4 152.4"><path class="fil0 str0" d="M277.581 151.999l0 -13.7038c-5.2453,0 -9.2621,-1.3233 -12.0031,-4.0168 -2.6935,-2.6935 -5.2922,-7.7971 -7.797,-15.3575l-2.2208 -6.9464c-5.0092,-15.3106 -13.1367,-25.3759 -24.5253,-30.1959 10.538,-2.0321 18.9021,-6.3325 25.1398,-12.948 6.2376,-6.5686 9.3564,-14.4125 9.3564,-23.4386 0,-12.6639 -4.7731,-23.1076 -14.2713,-31.3768 -9.4982,-8.2698 -21.5482,-12.381 -36.1025,-12.381 -22.1627,0 -39.2688,9.4982 -51.3662,28.4947l10.6323 9.0255c7.8445,-8.411 15.9251,-12.6171 24.2417,-12.6171 6.8047,0 12.6645,2.2214 17.5788,6.7104 4.8675,4.489 7.3249,9.8292 7.3249,16.0194 0,5.151 -1.9378,9.64 -5.7654,13.4202 -3.8277,3.7808 -8.3167,5.6706 -13.4677,5.6706 -9.309,0 -22.3988,-6.6155 -39.1739,-19.7996l-8.459 -6.663c-27.4074,-21.5956 -53.5395,-32.3697 -78.4901,-32.3697 -21.5956,0 -39.8833,7.0882 -54.8629,21.3121 -14.9796,14.2239 -22.4931,31.5192 -22.4931,51.9333 0,20.6976 7.7496,37.3784 23.2494,50.1372 15.4992,12.7114 35.8664,19.0908 61.0531,19.0908l4.5839 0 0 -13.7038c-14.9327,-0.9923 -26.7935,-6.1902 -35.5829,-15.5941 -8.7425,-9.3564 -13.1372,-21.5007 -13.1372,-36.4809 0,-14.7435 5.5288,-27.4074 16.5864,-37.8511 11.1051,-10.4906 24.4784,-15.7359 40.1668,-15.7359 15.1214,0 28.589,4.6314 40.4029,13.8461 11.8139,9.2146 17.7206,19.7521 17.7206,31.566 0,5.6231 -1.843,10.3963 -5.4814,14.2708 -3.639,3.8751 -8.128,5.8123 -13.4676,5.8123 -5.3871,0 -9.4039,-1.4645 -12.1449,-4.3472 -2.6935,-2.9296 -4.0637,-7.3243 -4.0637,-13.2316 0,-3.591 0.9923,-7.8439 3.0245,-12.7588l-12.4284 -5.6706c-5.5288,13.0898 -8.3167,24.1 -8.3167,32.9369 0,10.9158 3.5441,20.2248 10.5849,28.0219 7.0413,7.797 15.5941,11.7196 25.5176,11.7196 6.3794,0 12.1918,-1.5594 17.4845,-4.7257 5.2453,-3.1188 9.9235,-7.8445 14.0821,-14.2239 5.3871,13.3733 13.8455,22.7772 25.4228,28.1168 11.5778,5.3396 29.1566,8.0332 52.6895,8.0332l28.7782 0zm-99.6605 -67.5743c13.562,2.5992 25.9429,13.8929 37.1892,33.9292l2.3631 4.0163c4.9144,8.6476 10.821,14.3182 17.7206,17.0117 -35.2525,0 -54.3433,-18.3345 -57.2729,-54.9572z"/></svg>');
  --font-interface: '??', '??', "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: #00b8d4;
  --footnote-id-color-no-occurrences: #999999;
  --graph-node-focused: #00b8d4;
  --graph-node-unresolved: #999999;
  --graph-text: #1A2023;
  --heading-formatting: #999999;
  --hr-color: #00b8d4;
  --icon-color-active: #00b8d4;
  --icon-color-focused: #1A2023;
  --inline-code: #8b5cf6;
  --input-date-separator: #999999;
  --input-placeholder-color: #999999;
  --interactive-accent: #2962ff;
  --interactive-accent-rgb: #d81b60;
  --interactive-before: #a89984;
  --link-color: #00b8d4;
  --link-color-hover: #d50000;
  --link-decoration: none;
  --link-external-color: #00b8d4;
  --link-external-color-hover: #d50000;
  --link-unresolved-color: #00b8d4;
  --list-bullet-size-alt: 0.15em;
  --list-indent: 2em;
  --list-marker-color: rgb(8, 145, 178);
  --list-marker-color-collapsed: #00b8d4;
  --menu-background: #C4C4C4;
  --metadata-border-color: #00b8d4;
  --metadata-divider-color: #00b8d4;
  --metadata-input-font: '??', '??', "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #1A2023;
  --metadata-label-font: '??', '??', "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-background: #EDEDED;
  --modal-border-color: #00b8d4;
  --mono-font: "SF Mono", "Cascadia Code", "JetBrains Mono", "Fira Code", monospace;
  --nav-collapse-icon-color: #999999;
  --nav-collapse-icon-color-collapsed: #999999;
  --nav-heading-color: #1A2023;
  --nav-heading-color-collapsed: #999999;
  --nav-heading-color-hover: #1A2023;
  --nav-item-color-active: #1A2023;
  --nav-item-color-highlighted: #00b8d4;
  --nav-item-color-hover: #1A2023;
  --nav-item-color-selected: #1A2023;
  --nav-tag-color: #999999;
  --pdf-background: #EDEDED;
  --pdf-page-background: #EDEDED;
  --pdf-sidebar-background: #EDEDED;
  --pill-border-color: #00b8d4;
  --pill-color-hover: #1A2023;
  --pill-color-remove: #999999;
  --pill-color-remove-hover: #00b8d4;
  --pre-code: #bebebe;
  --prompt-background: #EDEDED;
  --raised-background: color-mix(in srgb, #EDEDED 65%, transparent) linear-gradient(#EDEDED, color-mix(in srgb, #EDEDED 65%, transparent));
  --ribbon-background: #C4C4C4;
  --ribbon-background-collapsed: #EDEDED;
  --search-result-background: #EDEDED;
  --setting-group-heading-color: #1A2023;
  --setting-items-background: #d4d4d4;
  --setting-items-border-color: #00b8d4;
  --slider-track-background: #00b8d4;
  --status-bar-background: transparent;
  --status-bar-border-color: transparent;
  --status-bar-border-width: 0;
  --suggestion-background: #EDEDED;
  --tab-background-active: #EDEDED;
  --tab-container-background: #C4C4C4;
  --tab-outline-color: #00b8d4;
  --tab-switcher-background: #C4C4C4;
  --tab-switcher-menubar-background: linear-gradient(to top, #C4C4C4, transparent);
  --tab-text-color: #999999;
  --tab-text-color-focused-active-current: #1A2023;
  --tab-text-color-focused-highlighted: #00b8d4;
  --table-add-button-border-color: #00b8d4;
  --table-border-color: #00b8d4;
  --table-drag-handle-background-active: #2962ff;
  --table-drag-handle-color: #999999;
  --table-drag-handle-color-active: #fff;
  --table-header-border-color: #00b8d4;
  --table-header-color: #1A2023;
  --table-selection-border-color: #2962ff;
  --tag-color: #00b8d4;
  --tag-color-hover: #00b8d4;
  --text-a: #2962ff;
  --text-a-hover: #0039cb;
  --text-accent: #00b8d4;
  --text-accent-hover: #d50000;
  --text-faint: #999999;
  --text-highlight-bg: #f0f0f0;
  --text-link: #2962ff;
  --text-normal: #1A2023;
  --text-on-accent: #fff;
  --text-selection: #bbdefb;
  --text-title-h1: #0076ff;
  --text-title-h2: #00c853;
  --text-title-h3: #00b8d4;
  --text-title-h4: #ff9100;
  --text-title-h5: #ff1744;
  --text-title-h6: #e040fb;
  --text-white: #ffffff;
  --titlebar-background: #C4C4C4;
  --titlebar-background-focused: #707070;
  --titlebar-border-color: #00b8d4;
  --titlebar-text-color-focused: #1A2023;
  --vault-profile-color: #1A2023;
  --vault-profile-color-hover: #1A2023;
  --vim-cursor: #d81b60;
  --workspace-divider-color: #00b8d4;
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
  border-right-color: rgb(0, 184, 212);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(196, 196, 196);
  border-left-color: rgb(0, 184, 212);
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
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(26, 32, 35);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: underline rgb(0, 184, 212);
  text-decoration-color: rgb(0, 184, 212);
  transition: 0.2s;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(26, 32, 35);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
  transition: color 0.2s;
}

body a.internal.broken {
  color: rgb(26, 32, 35);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
  transition: color 0.2s;
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
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
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
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  width: 662px;
}

body td {
  border-bottom-color: rgb(0, 184, 212);
  border-left-color: rgb(0, 184, 212);
  border-right-color: rgb(0, 184, 212);
  border-top-color: rgb(0, 184, 212);
  color: rgb(26, 32, 35);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

body th {
  border-bottom-color: rgb(0, 184, 212);
  border-left-color: rgb(0, 184, 212);
  border-right-color: rgb(0, 184, 212);
  border-top-color: rgb(0, 184, 212);
  color: rgb(26, 32, 35);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

body tr {
  background-color: color(srgb 0.79 0.859412 0.94);
}`,
    code: `body code {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(190, 190, 190);
  border-bottom-color: rgb(0, 184, 212);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 1px;
  border-right-color: rgb(0, 184, 212);
  border-right-width: 1px;
  border-top-color: rgb(0, 184, 212);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(190, 190, 190);
  border-bottom-color: rgb(0, 184, 212);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 1px;
  border-right-color: rgb(0, 184, 212);
  border-right-width: 1px;
  border-top-color: rgb(0, 184, 212);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(26, 32, 35);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 145, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 145, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 145, 0);
  border-left-color: rgb(255, 145, 0);
  border-right-color: rgb(255, 145, 0);
  border-top-color: rgb(255, 145, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(190, 190, 190);
  border-bottom-color: rgb(0, 184, 212);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 1px;
  border-right-color: rgb(0, 184, 212);
  border-right-width: 1px;
  border-top-color: rgb(0, 184, 212);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgb(190, 190, 190);
  border-bottom-color: rgb(0, 184, 212);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 1px;
  border-right-color: rgb(0, 184, 212);
  border-right-width: 1px;
  border-top-color: rgb(0, 184, 212);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-top: 16px;
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
  border-left-color: rgb(41, 98, 255);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body .transclude-inner {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(41, 98, 255);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

body input[type=checkbox] {
  border-bottom-color: rgb(0, 184, 212);
  border-left-color: rgb(0, 184, 212);
  border-right-color: rgb(0, 184, 212);
  border-top-color: rgb(0, 184, 212);
  margin-bottom: 2.66667px;
  transition: 0.2s;
  width: 16.6562px;
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
    search: `body .search > .search-button {
  border-bottom-color: rgb(0, 184, 212);
  border-left-color: rgb(0, 184, 212);
  border-right-color: rgb(0, 184, 212);
  border-top-color: rgb(0, 184, 212);
  color: rgb(26, 32, 35);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(237, 237, 237);
}

body .search > .search-container > .search-space > * {
  color: rgb(26, 32, 35);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(196, 196, 196);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(26, 32, 35);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(0, 184, 212);
}

body h1 {
  color: rgb(0, 118, 255);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h2 {
  color: rgb(0, 200, 83);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(26, 32, 35);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h3 {
  color: rgb(0, 184, 212);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h4 {
  color: rgb(255, 145, 0);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h5 {
  color: rgb(255, 23, 68);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h6 {
  color: rgb(224, 64, 251);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body hr {
  border-bottom-color: rgb(0, 184, 212);
  border-left-color: rgb(0, 184, 212);
  border-right-color: rgb(0, 184, 212);
}`,
    scrollbars: `body ::-webkit-scrollbar {
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
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
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
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(26, 32, 35);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body li.section-li > .section .meta {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(153, 153, 153);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

body .metadata {
  border-bottom-color: rgb(0, 184, 212);
  border-left-color: rgb(0, 184, 212);
  border-right-color: rgb(0, 184, 212);
  border-top-color: rgb(0, 184, 212);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body .metadata-properties {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(26, 32, 35);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(153, 153, 153);
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
