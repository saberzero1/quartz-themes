import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "dedication-2",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "dedication-2-theme",
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
  --bodyFont: var(--font-interface, "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
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
  --codeFont: var(--font-interface, "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --collapse-icon-color: #c0b0a0;
  --collapse-icon-color-collapsed: #00ffff;
  --dark: var(--text-normal, #dedede);
  --darkgray: var(--text-normal, #dedede);
  --default-font: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --divider-color: #00ffff;
  --divider-color-hover: #0066cc;
  --embed-block-shadow-hover: 0 0 0 1px #00ffff, inset 0 0 0 1px #00ffff;
  --embed-border-start: 2px solid #0066cc;
  --empty-state-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M13.32 7.155a4.375 4.375 0 0 1-5.7 6.517l5.7-6.517ZM10 5.625a4.375 4.375 0 0 0-3.32 7.22l5.704-6.514A4.35 4.35 0 0 0 10 5.625ZM18.125 10A8.125 8.125 0 1 1 10 1.875 8.135 8.135 0 0 1 18.125 10Zm-2.5 0a5.6 5.6 0 0 0-1.476-3.793l.382-.483a.626.626 0 1 0-.937-.823l-.384.483a5.625 5.625 0 0 0-7.36 8.409l-.381.483a.625.625 0 0 0 .937.823l.384-.483A5.621 5.621 0 0 0 15.625 10Z'/%3e%3c/svg%3e");
  --file-header-background: #0d1117;
  --file-header-background-focused: #0d1117;
  --file-header-font: "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: #dedede;
  --fleuron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='279.4mm' height='152.4mm' fill='black' stroke-width='0' viewBox='0 0 279.4 152.4'%3E%3Cpath class='fil0 str0' d='M277.581 151.999l0 -13.7038c-5.2453,0 -9.2621,-1.3233 -12.0031,-4.0168 -2.6935,-2.6935 -5.2922,-7.7971 -7.797,-15.3575l-2.2208 -6.9464c-5.0092,-15.3106 -13.1367,-25.3759 -24.5253,-30.1959 10.538,-2.0321 18.9021,-6.3325 25.1398,-12.948 6.2376,-6.5686 9.3564,-14.4125 9.3564,-23.4386 0,-12.6639 -4.7731,-23.1076 -14.2713,-31.3768 -9.4982,-8.2698 -21.5482,-12.381 -36.1025,-12.381 -22.1627,0 -39.2688,9.4982 -51.3662,28.4947l10.6323 9.0255c7.8445,-8.411 15.9251,-12.6171 24.2417,-12.6171 6.8047,0 12.6645,2.2214 17.5788,6.7104 4.8675,4.489 7.3249,9.8292 7.3249,16.0194 0,5.151 -1.9378,9.64 -5.7654,13.4202 -3.8277,3.7808 -8.3167,5.6706 -13.4677,5.6706 -9.309,0 -22.3988,-6.6155 -39.1739,-19.7996l-8.459 -6.663c-27.4074,-21.5956 -53.5395,-32.3697 -78.4901,-32.3697 -21.5956,0 -39.8833,7.0882 -54.8629,21.3121 -14.9796,14.2239 -22.4931,31.5192 -22.4931,51.9333 0,20.6976 7.7496,37.3784 23.2494,50.1372 15.4992,12.7114 35.8664,19.0908 61.0531,19.0908l4.5839 0 0 -13.7038c-14.9327,-0.9923 -26.7935,-6.1902 -35.5829,-15.5941 -8.7425,-9.3564 -13.1372,-21.5007 -13.1372,-36.4809 0,-14.7435 5.5288,-27.4074 16.5864,-37.8511 11.1051,-10.4906 24.4784,-15.7359 40.1668,-15.7359 15.1214,0 28.589,4.6314 40.4029,13.8461 11.8139,9.2146 17.7206,19.7521 17.7206,31.566 0,5.6231 -1.843,10.3963 -5.4814,14.2708 -3.639,3.8751 -8.128,5.8123 -13.4676,5.8123 -5.3871,0 -9.4039,-1.4645 -12.1449,-4.3472 -2.6935,-2.9296 -4.0637,-7.3243 -4.0637,-13.2316 0,-3.591 0.9923,-7.8439 3.0245,-12.7588l-12.4284 -5.6706c-5.5288,13.0898 -8.3167,24.1 -8.3167,32.9369 0,10.9158 3.5441,20.2248 10.5849,28.0219 7.0413,7.797 15.5941,11.7196 25.5176,11.7196 6.3794,0 12.1918,-1.5594 17.4845,-4.7257 5.2453,-3.1188 9.9235,-7.8445 14.0821,-14.2239 5.3871,13.3733 13.8455,22.7772 25.4228,28.1168 11.5778,5.3396 29.1566,8.0332 52.6895,8.0332l28.7782 0zm-99.6605 -67.5743c13.562,2.5992 25.9429,13.8929 37.1892,33.9292l2.3631 4.0163c4.9144,8.6476 10.821,14.3182 17.7206,17.0117 -35.2525,0 -54.3433,-18.3345 -57.2729,-54.9572z'/%3E%3C/svg%3E");
  --font-interface: "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: #00ffff;
  --footnote-id-color-no-occurrences: #c0b0a0;
  --graph-node-focused: #00ffff;
  --graph-node-unresolved: #c0b0a0;
  --graph-text: #dedede;
  --gray: var(--text-faint, #c0b0a0);
  --headerFont: var(--font-interface, "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: #c0b0a0;
  --highlight: var(--text-highlight-bg, #640211);
  --hr-color: #00ffff;
  --icon-color-active: #00ffff;
  --icon-color-focused: #dedede;
  --inline-code: #8b5cf6;
  --input-date-separator: #c0b0a0;
  --input-placeholder-color: #c0b0a0;
  --interactive-accent: #0066cc;
  --interactive-accent-rgb: #f8c537;
  --interactive-before: #7c6f64;
  --light: var(--background-primary, #0d1117);
  --lightgray: var(--background-secondary, #161b22);
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
  --metadata-input-font: "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #dedede;
  --metadata-label-font: "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  --secondary: var(--text-accent, #00ffff);
  --setting-group-heading-color: #dedede;
  --setting-items-border-color: #00ffff;
  --shiki-code-background: #6b6666;
  --shiki-code-comment: #c0b0a0;
  --shiki-gutter-border-color: #00ffff;
  --shiki-gutter-text-color: #c0b0a0;
  --shiki-terminal-dots-color: #c0b0a0;
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
  --tertiary: var(--text-accent-hover, #D49335);
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
  --textHighlight: var(--text-highlight-bg, #640211);
  --titleFont: var(--font-interface, "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
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

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 27, 34);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(13, 17, 23);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 27, 34);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 27, 34);
  border-left-color: rgb(0, 255, 255);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body html {
  --default-font: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --mono-font: "SF Mono", "Cascadia Code", "JetBrains Mono", "Fira Code", monospace;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered > h1 {
  --font-weight: 700;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(40, 154, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(40, 154, 255);
  border-left-width: 0px;
  border-right-color: rgb(40, 154, 255);
  border-right-width: 0px;
  border-top-color: rgb(40, 154, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(40, 154, 255);
  content: " ";
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 25.888px;
  font-weight: 700;
  letter-spacing: -0.38832px;
  line-height: 31.0656px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(0, 245, 106);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 700;
  outline: rgb(0, 245, 106) none 0px;
  text-decoration-color: rgb(0, 245, 106);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(10, 247, 255);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
  outline: rgb(10, 247, 255) none 0px;
  text-decoration-color: rgb(10, 247, 255);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(10, 247, 255);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
  outline: rgb(10, 247, 255) none 0px;
  text-decoration-color: rgb(10, 247, 255);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(0, 245, 106);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 700;
  outline: rgb(0, 245, 106) none 0px;
  text-decoration-color: rgb(0, 245, 106);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: color(srgb 0.976471 0.972549 0.443137 / 0.2);
  color: rgb(222, 222, 222);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body del {
  color: rgb(192, 176, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  outline: rgb(192, 176, 160) none 0px;
  text-decoration: line-through rgb(255, 87, 87);
  text-decoration-color: rgb(255, 87, 87);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body h2 {
  --font-weight: 680;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 245, 106);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 245, 106);
  border-left-width: 0px;
  border-right-color: rgb(0, 245, 106);
  border-right-width: 0px;
  border-top-color: rgb(0, 245, 106);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(0, 245, 106);
  content: " ";
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 23.392px;
  font-weight: 680;
  letter-spacing: -0.257312px;
  line-height: 28.0704px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h3 {
  --font-weight: 660;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(10, 247, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(10, 247, 255);
  border-left-width: 0px;
  border-right-color: rgb(10, 247, 255);
  border-right-width: 0px;
  border-top-color: rgb(10, 247, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(10, 247, 255);
  content: " ";
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 21.088px;
  font-weight: 660;
  letter-spacing: -0.168704px;
  line-height: 27.4144px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h4 {
  --font-weight: 640;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(249, 248, 113);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(249, 248, 113);
  border-left-width: 0px;
  border-right-color: rgb(249, 248, 113);
  border-right-width: 0px;
  border-top-color: rgb(249, 248, 113);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(249, 248, 113);
  content: " ";
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 19.008px;
  font-weight: 640;
  letter-spacing: -0.09504px;
  line-height: 26.6112px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h5 {
  --font-weight: 620;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 87, 87);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 87, 87);
  border-left-width: 0px;
  border-right-color: rgb(255, 87, 87);
  border-right-width: 0px;
  border-top-color: rgb(255, 87, 87);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(255, 87, 87);
  content: " ";
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 17.216px;
  font-weight: 620;
  letter-spacing: -0.034432px;
  line-height: 25.824px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h6 {
  --font-weight: 600;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 60, 213);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 60, 213);
  border-left-width: 0px;
  border-right-color: rgb(255, 60, 213);
  border-right-width: 0px;
  border-top-color: rgb(255, 60, 213);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(255, 60, 213);
  content: " ";
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(0, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 255, 255);
  border-color: rgb(0, 255, 255);
}

html[saved-theme="dark"] body p {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(222, 222, 222);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration: underline rgb(0, 255, 255);
  text-decoration-color: rgb(0, 255, 255);
  transition: 0.2s;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(222, 222, 222);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
  transition: color 0.2s;
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(222, 222, 222);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
  transition: color 0.2s;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body dt {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(192, 176, 160);
}

html[saved-theme="dark"] body blockquote {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-style: italic;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body table {
  color: rgb(222, 222, 222);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  width: 662px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(222, 222, 222);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(222, 222, 222);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

html[saved-theme="dark"] body tr {
  background-color: color(srgb 0.0668627 0.147255 0.226667);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(107, 102, 102);
  border-bottom-color: rgb(0, 255, 255);
  border-bottom-width: 1px;
  border-left-color: rgb(0, 255, 255);
  border-left-width: 1px;
  border-right-color: rgb(0, 255, 255);
  border-right-width: 1px;
  border-top-color: rgb(0, 255, 255);
  border-top-width: 1px;
  color: rgb(139, 92, 246);
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(107, 102, 102);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(222, 222, 222);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body img {
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

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    embeds: `html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(0, 102, 204);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  margin-bottom: 2.66667px;
  transition: 0.2s;
  width: 16.6562px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(192, 176, 160);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(192, 176, 160);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 17, 23);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 17, 23);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
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

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
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

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(222, 222, 222);
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
  color: rgb(222, 222, 222);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(13, 17, 23);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(222, 222, 222);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 27, 34);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(0, 255, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(40, 154, 255);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body h2 {
  color: rgb(0, 245, 106);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(222, 222, 222);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(10, 247, 255);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(249, 248, 113);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(255, 87, 87);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(255, 60, 213);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(222, 222, 222);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(222, 222, 222);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(192, 176, 160);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(22, 27, 34);
  border-color: rgb(222, 222, 222);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(0, 255, 255);
  color: rgb(222, 222, 222);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(0, 255, 255);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(0, 255, 255);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(13, 17, 23);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(22, 27, 34);
  border-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(33, 38, 45);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(222, 222, 222);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(222, 222, 222);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body input[type=text] {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(107, 102, 102);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body sub {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body summary {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body sup {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(0, 255, 255);
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
  --bodyFont: var(--font-interface, "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
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
  --codeFont: var(--font-interface, "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --collapse-icon-color: #999999;
  --collapse-icon-color-collapsed: #00b8d4;
  --dark: var(--text-normal, #1A2023);
  --darkgray: var(--text-normal, #1A2023);
  --default-font: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --divider-color: #00b8d4;
  --divider-color-hover: #2962ff;
  --embed-block-shadow-hover: 0 0 0 1px #00b8d4, inset 0 0 0 1px #00b8d4;
  --embed-border-start: 2px solid #2962ff;
  --empty-state-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M13.32 7.155a4.375 4.375 0 0 1-5.7 6.517l5.7-6.517ZM10 5.625a4.375 4.375 0 0 0-3.32 7.22l5.704-6.514A4.35 4.35 0 0 0 10 5.625ZM18.125 10A8.125 8.125 0 1 1 10 1.875 8.135 8.135 0 0 1 18.125 10Zm-2.5 0a5.6 5.6 0 0 0-1.476-3.793l.382-.483a.626.626 0 1 0-.937-.823l-.384.483a5.625 5.625 0 0 0-7.36 8.409l-.381.483a.625.625 0 0 0 .937.823l.384-.483A5.621 5.621 0 0 0 15.625 10Z'/%3e%3c/svg%3e");
  --file-header-background: #EDEDED;
  --file-header-background-focused: #EDEDED;
  --file-header-font: "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: #1A2023;
  --fleuron: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xml:space='preserve' width='279.4mm' height='152.4mm' fill='black' stroke-width='0' viewBox='0 0 279.4 152.4'%3E%3Cpath class='fil0 str0' d='M277.581 151.999l0 -13.7038c-5.2453,0 -9.2621,-1.3233 -12.0031,-4.0168 -2.6935,-2.6935 -5.2922,-7.7971 -7.797,-15.3575l-2.2208 -6.9464c-5.0092,-15.3106 -13.1367,-25.3759 -24.5253,-30.1959 10.538,-2.0321 18.9021,-6.3325 25.1398,-12.948 6.2376,-6.5686 9.3564,-14.4125 9.3564,-23.4386 0,-12.6639 -4.7731,-23.1076 -14.2713,-31.3768 -9.4982,-8.2698 -21.5482,-12.381 -36.1025,-12.381 -22.1627,0 -39.2688,9.4982 -51.3662,28.4947l10.6323 9.0255c7.8445,-8.411 15.9251,-12.6171 24.2417,-12.6171 6.8047,0 12.6645,2.2214 17.5788,6.7104 4.8675,4.489 7.3249,9.8292 7.3249,16.0194 0,5.151 -1.9378,9.64 -5.7654,13.4202 -3.8277,3.7808 -8.3167,5.6706 -13.4677,5.6706 -9.309,0 -22.3988,-6.6155 -39.1739,-19.7996l-8.459 -6.663c-27.4074,-21.5956 -53.5395,-32.3697 -78.4901,-32.3697 -21.5956,0 -39.8833,7.0882 -54.8629,21.3121 -14.9796,14.2239 -22.4931,31.5192 -22.4931,51.9333 0,20.6976 7.7496,37.3784 23.2494,50.1372 15.4992,12.7114 35.8664,19.0908 61.0531,19.0908l4.5839 0 0 -13.7038c-14.9327,-0.9923 -26.7935,-6.1902 -35.5829,-15.5941 -8.7425,-9.3564 -13.1372,-21.5007 -13.1372,-36.4809 0,-14.7435 5.5288,-27.4074 16.5864,-37.8511 11.1051,-10.4906 24.4784,-15.7359 40.1668,-15.7359 15.1214,0 28.589,4.6314 40.4029,13.8461 11.8139,9.2146 17.7206,19.7521 17.7206,31.566 0,5.6231 -1.843,10.3963 -5.4814,14.2708 -3.639,3.8751 -8.128,5.8123 -13.4676,5.8123 -5.3871,0 -9.4039,-1.4645 -12.1449,-4.3472 -2.6935,-2.9296 -4.0637,-7.3243 -4.0637,-13.2316 0,-3.591 0.9923,-7.8439 3.0245,-12.7588l-12.4284 -5.6706c-5.5288,13.0898 -8.3167,24.1 -8.3167,32.9369 0,10.9158 3.5441,20.2248 10.5849,28.0219 7.0413,7.797 15.5941,11.7196 25.5176,11.7196 6.3794,0 12.1918,-1.5594 17.4845,-4.7257 5.2453,-3.1188 9.9235,-7.8445 14.0821,-14.2239 5.3871,13.3733 13.8455,22.7772 25.4228,28.1168 11.5778,5.3396 29.1566,8.0332 52.6895,8.0332l28.7782 0zm-99.6605 -67.5743c13.562,2.5992 25.9429,13.8929 37.1892,33.9292l2.3631 4.0163c4.9144,8.6476 10.821,14.3182 17.7206,17.0117 -35.2525,0 -54.3433,-18.3345 -57.2729,-54.9572z'/%3E%3C/svg%3E");
  --font-interface: "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: #00b8d4;
  --footnote-id-color-no-occurrences: #999999;
  --graph-node-focused: #00b8d4;
  --graph-node-unresolved: #999999;
  --graph-text: #1A2023;
  --gray: var(--text-faint, #999999);
  --headerFont: var(--font-interface, "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: #999999;
  --highlight: var(--text-highlight-bg, #f0f0f0);
  --hr-color: #00b8d4;
  --icon-color-active: #00b8d4;
  --icon-color-focused: #1A2023;
  --inline-code: #8b5cf6;
  --input-date-separator: #999999;
  --input-placeholder-color: #999999;
  --interactive-accent: #2962ff;
  --interactive-accent-rgb: #d81b60;
  --interactive-before: #a89984;
  --light: var(--background-primary, #EDEDED);
  --lightgray: var(--background-secondary, #C4C4C4);
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
  --metadata-input-font: "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #1A2023;
  --metadata-label-font: "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  --secondary: var(--text-accent, #00b8d4);
  --setting-group-heading-color: #1A2023;
  --setting-items-background: #d4d4d4;
  --setting-items-border-color: #00b8d4;
  --shiki-code-background: #999999;
  --shiki-code-comment: #999999;
  --shiki-gutter-border-color: #00b8d4;
  --shiki-gutter-text-color: #999999;
  --shiki-terminal-dots-color: #999999;
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
  --tertiary: var(--text-accent-hover, #d50000);
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
  --textHighlight: var(--text-highlight-bg, #f0f0f0);
  --titleFont: var(--font-interface, "Inter", -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
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

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(196, 196, 196);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(237, 237, 237);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(196, 196, 196);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 184, 212);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(196, 196, 196);
  border-left-color: rgb(0, 184, 212);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body html {
  --default-font: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --mono-font: "SF Mono", "Cascadia Code", "JetBrains Mono", "Fira Code", monospace;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered > h1 {
  --font-weight: 700;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 118, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 118, 255);
  border-left-width: 0px;
  border-right-color: rgb(0, 118, 255);
  border-right-width: 0px;
  border-top-color: rgb(0, 118, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(0, 118, 255);
  content: " ";
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 25.888px;
  font-weight: 700;
  letter-spacing: -0.38832px;
  line-height: 31.0656px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(0, 200, 83);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 700;
  outline: rgb(0, 200, 83) none 0px;
  text-decoration-color: rgb(0, 200, 83);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(255, 145, 0);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  outline: rgb(255, 145, 0) none 0px;
  text-decoration-color: rgb(255, 145, 0);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(255, 145, 0);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  outline: rgb(255, 145, 0) none 0px;
  text-decoration-color: rgb(255, 145, 0);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 200, 83);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 700;
  outline: rgb(0, 200, 83) none 0px;
  text-decoration-color: rgb(0, 200, 83);
}

html[saved-theme="light"] body .text-highlight {
  background-color: color(srgb 1 0.568627 0 / 0.2);
  color: rgb(26, 32, 35);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  outline: rgb(26, 32, 35) none 0px;
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body del {
  color: rgb(153, 153, 153);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: line-through rgb(255, 23, 68);
  text-decoration-color: rgb(255, 23, 68);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body h2 {
  --font-weight: 680;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 200, 83);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 200, 83);
  border-left-width: 0px;
  border-right-color: rgb(0, 200, 83);
  border-right-width: 0px;
  border-top-color: rgb(0, 200, 83);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(0, 200, 83);
  content: " ";
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 23.392px;
  font-weight: 680;
  letter-spacing: -0.257312px;
  line-height: 28.0704px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h3 {
  --font-weight: 660;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 184, 212);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 0px;
  border-right-color: rgb(0, 184, 212);
  border-right-width: 0px;
  border-top-color: rgb(0, 184, 212);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(0, 184, 212);
  content: " ";
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 21.088px;
  font-weight: 660;
  letter-spacing: -0.168704px;
  line-height: 27.4144px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h4 {
  --font-weight: 640;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 145, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 145, 0);
  border-left-width: 0px;
  border-right-color: rgb(255, 145, 0);
  border-right-width: 0px;
  border-top-color: rgb(255, 145, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(255, 145, 0);
  content: " ";
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 19.008px;
  font-weight: 640;
  letter-spacing: -0.09504px;
  line-height: 26.6112px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h5 {
  --font-weight: 620;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 23, 68);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 23, 68);
  border-left-width: 0px;
  border-right-color: rgb(255, 23, 68);
  border-right-width: 0px;
  border-top-color: rgb(255, 23, 68);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(255, 23, 68);
  content: " ";
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 17.216px;
  font-weight: 620;
  letter-spacing: -0.034432px;
  line-height: 25.824px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h6 {
  --font-weight: 600;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(224, 64, 251);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 64, 251);
  border-left-width: 0px;
  border-right-color: rgb(224, 64, 251);
  border-right-width: 0px;
  border-top-color: rgb(224, 64, 251);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(224, 64, 251);
  content: " ";
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(0, 184, 212);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 184, 212);
  border-color: rgb(0, 184, 212);
}

html[saved-theme="light"] body p {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(26, 32, 35);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: underline rgb(0, 184, 212);
  text-decoration-color: rgb(0, 184, 212);
  transition: 0.2s;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(26, 32, 35);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  outline: rgb(26, 32, 35) none 0px;
  text-decoration-color: rgb(26, 32, 35);
  transition: color 0.2s;
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(26, 32, 35);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  outline: rgb(26, 32, 35) none 0px;
  text-decoration-color: rgb(26, 32, 35);
  transition: color 0.2s;
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
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
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
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  width: 662px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(0, 184, 212);
  border-left-color: rgb(0, 184, 212);
  border-right-color: rgb(0, 184, 212);
  border-top-color: rgb(0, 184, 212);
  color: rgb(26, 32, 35);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(0, 184, 212);
  border-left-color: rgb(0, 184, 212);
  border-right-color: rgb(0, 184, 212);
  border-top-color: rgb(0, 184, 212);
  color: rgb(26, 32, 35);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: center;
}

html[saved-theme="light"] body tr {
  background-color: color(srgb 0.79 0.859412 0.94);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(153, 153, 153);
  border-bottom-color: rgb(0, 184, 212);
  border-bottom-width: 1px;
  border-left-color: rgb(0, 184, 212);
  border-left-width: 1px;
  border-right-color: rgb(0, 184, 212);
  border-right-width: 1px;
  border-top-color: rgb(0, 184, 212);
  border-top-width: 1px;
  color: rgb(139, 92, 246);
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(153, 153, 153);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body figcaption {
  color: rgb(26, 32, 35);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body img {
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
  border-left-color: rgb(41, 98, 255);
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
  border-bottom-color: rgb(0, 184, 212);
  border-left-color: rgb(0, 184, 212);
  border-right-color: rgb(0, 184, 212);
  border-top-color: rgb(0, 184, 212);
  margin-bottom: 2.66667px;
  transition: 0.2s;
  width: 16.6562px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(153, 153, 153);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(153, 153, 153);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(26, 32, 35);
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
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 237, 237);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
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

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
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

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(26, 32, 35);
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
  border-bottom-color: rgb(0, 184, 212);
  border-left-color: rgb(0, 184, 212);
  border-right-color: rgb(0, 184, 212);
  border-top-color: rgb(0, 184, 212);
  color: rgb(26, 32, 35);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(237, 237, 237);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(26, 32, 35);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  outline: rgb(26, 32, 35) none 0px;
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(196, 196, 196);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(0, 184, 212);
}

html[saved-theme="light"] body h1 {
  color: rgb(0, 118, 255);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body h2 {
  color: rgb(0, 200, 83);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(26, 32, 35);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(0, 184, 212);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(255, 145, 0);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(255, 23, 68);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(224, 64, 251);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(0, 184, 212);
  border-left-color: rgb(0, 184, 212);
  border-right-color: rgb(0, 184, 212);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
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
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(26, 32, 35);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(153, 153, 153);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
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
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(0, 184, 212);
  color: rgb(26, 32, 35);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(0, 184, 212);
  border-left-color: rgb(0, 184, 212);
  border-right-color: rgb(0, 184, 212);
  border-top-color: rgb(0, 184, 212);
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  font-family: Inter, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(0, 184, 212);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(0, 184, 212);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(237, 237, 237);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(196, 196, 196);
  border-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(112, 112, 112);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(26, 32, 35);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(26, 32, 35);
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  font-family: "??", "??", Inter, -apple-system, BlinkMacSystemFont, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(153, 153, 153);
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
  color: rgb(0, 184, 212);
}`,
  },
  classSettings: {
    "color-preset-original-dark": `.color-preset-original-dark {
--background-primary:         #0d1117;
--background-primary-alt:     #242424;
--background-secondary:       #161b22;
--background-secondary-alt:   #21262d;
--text-normal:                #dedede;
--text-faint:                 #c0b0a0;
--code-background:            #6b6666;
/* Heading colors */
--text-title-h1:             #289aff;
--text-title-h2:             #00f56a;
--text-title-h3:             #0af7ff;
--text-title-h4:             #F9F871;
--text-title-h5:             #ff5757;
--text-title-h6:             #ff3cd5;
--text-highlight-bg:          #640211;
--text-link:                  #83a598;
--text-a-hover:               #83a598;
--text-accent-hover:          #D49335;
--inline-code:                #8b5cf6;
--code-block:                 #83a598;
--text-a:                     #f8c537;
--interactive-accent:         #0066cc;
--text-accent:                #00ffff;
--text-on-accent:             #fff;
--interactive-accent-rgb:     #f8c537;
--vim-cursor:                 #f8c537;
--pre-code:                   #1e1e1e;
--interactive-before:         #7c6f64;
--background-modifier-border: #00ffff;
--text-selection:             #0066cc;
}`,
    "color-preset-matrix-green": `.color-preset-matrix-green, .color-preset-matrix-green {
--background-primary: #000f00;
--background-primary-alt: #001a00;
--background-secondary: #001400;
--background-secondary-alt: #002200;
--text-normal: #00ff41;
--text-faint: #008022;
--code-background: #002a00;
--text-title-h1: #00ff41;
--text-title-h2: #00cc33;
--text-title-h3: #00ff88;
--text-title-h4: #ffff00;
--text-title-h5: #ff4444;
--text-title-h6: #00aaff;
--text-link: #00ff41;
--text-a: #ffff00;
--interactive-accent: #00ff41;
--text-accent: #00cc33;
--background-modifier-border: #00ff41;
}
.color-preset-matrix-green {
--background-primary: #f0fff0;
--background-primary-alt: #e0ffe0;
--background-secondary: #d0ffd0;
--background-secondary-alt: #c0ffc0;
--text-normal: #006400;
--text-faint: #008022;
--code-background: #e0ffe0;
--text-title-h1: #008000;
--text-title-h2: #006400;
--text-title-h3: #004d00;
--text-title-h4: #ff6b00;
--text-title-h5: #cc0000;
--text-title-h6: #0066cc;
--text-link: #008000;
--text-a: #ff6b00;
--interactive-accent: #008000;
--text-accent: #006400;
--background-modifier-border: #008000;
}`,
    "color-preset-blade-runner": `.color-preset-blade-runner, .color-preset-blade-runner {
--background-primary: #1a1a2e;
--background-primary-alt: #2d2d44;
--background-secondary: #22223a;
--background-secondary-alt: #333355;
--text-normal: #e6e6ff;
--text-faint: #9999cc;
--code-background: #2a2a4a;
--text-title-h1: #ff5555;
--text-title-h2: #55aaff;
--text-title-h3: #ffaa55;
--text-title-h4: #aaffaa;
--text-title-h5: #ff55ff;
--text-title-h6: #55ffff;
--text-link: #55aaff;
--text-a: #ffaa55;
--interactive-accent: #ff5555;
--text-accent: #55ffff;
--background-modifier-border: #ff5555;
}
.color-preset-blade-runner {
--background-primary: #f0f0ff;
--background-primary-alt: #e0e0ff;
--background-secondary: #d0d0ff;
--background-secondary-alt: #c0c0ff;
--text-normal: #333366;
--text-faint: #666699;
--code-background: #e8e8ff;
--text-title-h1: #cc3333;
--text-title-h2: #3366cc;
--text-title-h3: #cc6600;
--text-title-h4: #339933;
--text-title-h5: #993399;
--text-title-h6: #33cccc;
--text-link: #3366cc;
--text-a: #cc6600;
--interactive-accent: #cc3333;
--text-accent: #33cccc;
--background-modifier-border: #cc3333;
}`,
    "color-preset-dark-knight": `.color-preset-dark-knight, .color-preset-dark-knight {
--background-primary: #0a0a0a;
--background-primary-alt: #1a1a1a;
--background-secondary: #121212;
--background-secondary-alt: #222222;
--text-normal: #d4d4d4;
--text-faint: #666666;
--code-background: #2a2a2a;
--text-title-h1: #b8860b;
--text-title-h2: #8b0000;
--text-title-h3: #2f4f4f;
--text-title-h4: #1e90ff;
--text-title-h5: #daa520;
--text-title-h6: #696969;
--text-link: #1e90ff;
--text-a: #b8860b;
--interactive-accent: #8b0000;
--text-accent: #b8860b;
--background-modifier-border: #8b0000;
}
.color-preset-dark-knight {
--background-primary: #f5f5f5;
--background-primary-alt: #e8e8e8;
--background-secondary: #dcdcdc;
--background-secondary-alt: #d0d0d0;
--text-normal: #2f2f2f;
--text-faint: #666666;
--code-background: #e8e8e8;
--text-title-h1: #8b6508;
--text-title-h2: #a52a2a;
--text-title-h3: #2f4f4f;
--text-title-h4: #1e6fa8;
--text-title-h5: #b8860b;
--text-title-h6: #696969;
--text-link: #1e6fa8;
--text-a: #8b6508;
--interactive-accent: #a52a2a;
--text-accent: #8b6508;
--background-modifier-border: #a52a2a;
}`,
    "color-preset-gotham-noir": `.color-preset-gotham-noir, .color-preset-gotham-noir {
--background-primary: #0d0d0d;
--background-primary-alt: #1c1c1c;
--background-secondary: #141414;
--background-secondary-alt: #242424;
--text-normal: #d4af37;
--text-faint: #8b7500;
--code-background: #2a2a2a;
--text-title-h1: #d4af37;
--text-title-h2: #c0c0c0;
--text-title-h3: #a0522d;
--text-title-h4: #8b0000;
--text-title-h5: #2f4f4f;
--text-title-h6: #696969;
--text-link: #c0c0c0;
--text-a: #d4af37;
--interactive-accent: #8b0000;
--text-accent: #d4af37;
--background-modifier-border: #d4af37;
}
.color-preset-gotham-noir {
--background-primary: #f8f8f8;
--background-primary-alt: #e8e8e8;
--background-secondary: #d8d8d8;
--background-secondary-alt: #c8c8c8;
--text-normal: #2a2a2a;
--text-faint: #666666;
--code-background: #e8e8e8;
--text-title-h1: #8b7500;
--text-title-h2: #555555;
--text-title-h3: #8b4513;
--text-title-h4: #a52a2a;
--text-title-h5: #2f4f4f;
--text-title-h6: #696969;
--text-link: #555555;
--text-a: #8b7500;
--interactive-accent: #a52a2a;
--text-accent: #8b7500;
--background-modifier-border: #8b7500;
}`,
    "color-preset-cosmic-blue": `.color-preset-cosmic-blue, .color-preset-cosmic-blue {
--background-primary: #000033;
--background-primary-alt: #001a4d;
--background-secondary: #001133;
--background-secondary-alt: #002266;
--text-normal: #b3e0ff;
--text-faint: #6699cc;
--code-background: #002b80;
--text-title-h1: #00ccff;
--text-title-h2: #0099ff;
--text-title-h3: #0066ff;
--text-title-h4: #ffcc00;
--text-title-h5: #ff6666;
--text-title-h6: #cc00ff;
--text-link: #0099ff;
--text-a: #ffcc00;
--interactive-accent: #00ccff;
--text-accent: #0099ff;
--background-modifier-border: #00ccff;
}
.color-preset-cosmic-blue {
--background-primary: #f0f8ff;
--background-primary-alt: #e0f0ff;
--background-secondary: #d0e8ff;
--background-secondary-alt: #c0e0ff;
--text-normal: #003366;
--text-faint: #336699;
--code-background: #e8f4ff;
--text-title-h1: #0066cc;
--text-title-h2: #004499;
--text-title-h3: #002266;
--text-title-h4: #cc9900;
--text-title-h5: #cc3333;
--text-title-h6: #9900cc;
--text-link: #004499;
--text-a: #cc9900;
--interactive-accent: #0066cc;
--text-accent: #004499;
--background-modifier-border: #0066cc;
}`,
    "color-preset-star-trek": `.color-preset-star-trek, .color-preset-star-trek {
--background-primary: #000033;
--background-primary-alt: #001144;
--background-secondary: #000a2a;
--background-secondary-alt: #001c55;
--text-normal: #e6f2ff;
--text-faint: #88aadd;
--code-background: #002266;
--text-title-h1: #ffcc00;
--text-title-h2: #66ccff;
--text-title-h3: #ff6666;
--text-title-h4: #66ff99;
--text-title-h5: #cc66ff;
--text-title-h6: #ff9966;
--text-link: #66ccff;
--text-a: #ffcc00;
--interactive-accent: #ff6666;
--text-accent: #66ccff;
--background-modifier-border: #ffcc00;
}
.color-preset-star-trek {
--background-primary: #f5faff;
--background-primary-alt: #e6f2ff;
--background-secondary: #d6eaff;
--background-secondary-alt: #c6e2ff;
--text-normal: #003366;
--text-faint: #336699;
--code-background: #e8f4ff;
--text-title-h1: #cc9900;
--text-title-h2: #3399cc;
--text-title-h3: #cc3333;
--text-title-h4: #33cc66;
--text-title-h5: #9933cc;
--text-title-h6: #cc6633;
--text-link: #3399cc;
--text-a: #cc9900;
--interactive-accent: #cc3333;
--text-accent: #3399cc;
--background-modifier-border: #cc9900;
}`,
    "font-family-inter": `.font-family-inter {
--default-font: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}`,
    "font-family-system": `.font-family-system {
--default-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}`,
    "font-family-georgia": `.font-family-georgia {
--default-font: Georgia, "Times New Roman", Times, serif;
}`,
    "font-family-helvetica": `.font-family-helvetica {
--default-font: "Helvetica Neue", Helvetica, Arial, sans-serif;
}`,
    "font-family-source-sans": `.font-family-source-sans {
--default-font: "Source Sans Pro", -apple-system, BlinkMacSystemFont, sans-serif;
}`,
    "font-family-roboto-mono": `.font-family-roboto-mono {
--default-font: "Roboto Mono", "SF Mono", "Cascadia Code", monospace;
}`,
  },
};
