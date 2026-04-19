import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "phoenix",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono", "sf-pro-display"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #534f4e !important;
  --background-primary: #212121 !important;
  --background-primary-alt: #282828 !important;
  --background-secondary: #191717 !important;
  --background-secondary-alt: #161414 !important;
  --bases-cards-background: #212121 !important;
  --bases-cards-cover-background: #282828 !important;
  --bases-cards-shadow: 0 0 0 1px #534f4e !important;
  --bases-embed-border-color: #534f4e !important;
  --bases-table-border-color: #534f4e !important;
  --bases-table-cell-background-active: #212121 !important;
  --bases-table-cell-background-disabled: #282828 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ed5b0f !important;
  --bases-table-group-background: #282828 !important;
  --bases-table-header-background: #212121 !important;
  --bases-table-summary-background: #212121 !important;
  --blockquote-border-color: #ed5b0f !important;
  --bodyFont: -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bright-orange-v: #fe8019 !important;
  --bright-red: #fb4934 !important;
  --bright-yellow-v: #fabd2f !important;
  --button-text-color: #161414 !important;
  --callout-bg-darken-pct: 0%;
  --callout-blend-mode: normal;
  --callout-padding: 12px 12px 12px 20px;
  --canvas-background: #212121 !important;
  --canvas-card-label-color: #625e5e !important;
  --caret-color: #eadad9 !important;
  --checkbox-border-color: #625e5e !important;
  --checkbox-color: #ed5b0f !important;
  --checkbox-marker-color: #212121 !important;
  --code-background: #1a1a1a !important;
  --code-block: #cccccc !important;
  --code-border-color: #534f4e !important;
  --code-comment: #625e5e !important;
  --code-light-gray: #cccccc !important;
  --code-normal: #cccccc !important;
  --code-orange: #b46629 !important;
  --codeFont: -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #625e5e !important;
  --collapse-icon-color-collapsed: #fe750e !important;
  --dark: #eadad9 !important;
  --dark0: #282828 !important;
  --dark0-hard: #1d2021 !important;
  --dark0-soft: #32302f !important;
  --dark1: #3c3836 !important;
  --dark2: #504945 !important;
  --dark3: #665c54 !important;
  --dark4: #7c6f64 !important;
  --darkgray: #eadad9 !important;
  --default-codeblock: #1a1a1a !important;
  --default-font: system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter !important;
  --divider-color: #534f4e !important;
  --divider-color-hover: #ed5b0f !important;
  --editor-font: system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter !important;
  --embed-block-shadow-hover: 0 0 0 1px #534f4e, inset 0 0 0 1px #534f4e !important;
  --embed-border-left: none !important;
  --embed-border-start: 2px solid #ed5b0f !important;
  --faded-orange: #af3a03 !important;
  --faded-red: #9d0006 !important;
  --faded-yellow: #b57614 !important;
  --file-header-background: #212121 !important;
  --file-header-background-focused: #212121 !important;
  --file-header-font: -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: #eadad9 !important;
  --font-interface: -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: #534f4e !important;
  --footnote-id-color-no-occurrences: #625e5e !important;
  --graph-node-focused: #fe750e !important;
  --graph-node-unresolved: #625e5e !important;
  --graph-text: #eadad9 !important;
  --graph-view-line-color: #3c3836 !important;
  --gray: #928374 !important;
  --h1-link-hover-color: color-mix(in srgb, #ff6666 20%, #bc0104) !important;
  --h1-link-ul-color: color-mix(in srgb, #bc0104 33%, transparent) !important;
  --h1-size: 2.2em !important;
  --h1-weight: 500 !important;
  --h2-link-hover-color: color-mix(in srgb, #ff9090 20%, #ea4f0d) !important;
  --h2-link-ul-color: color-mix(in srgb, #ea4f0d 33%, transparent) !important;
  --h2-size: 2.0em !important;
  --h2-weight: 500 !important;
  --h3-link-hover-color: color-mix(in srgb, #ffaaaa 20%, #fe750e) !important;
  --h3-link-ul-color: color-mix(in srgb, #fe750e 33%, transparent) !important;
  --h3-size: 1.85em !important;
  --h3-weight: 500 !important;
  --h4-link-hover-color: color-mix(in srgb, #ffd2d2 20%, #fea30f) !important;
  --h4-link-ul-color: color-mix(in srgb, #fea30f 33%, transparent) !important;
  --h4-size: 1.6em !important;
  --h4-weight: 500 !important;
  --h5-link-hover-color: color-mix(in srgb, #ffffff 17%, #c0c90a) !important;
  --h5-link-ul-color: color-mix(in srgb, #c0c90a 33%, transparent) !important;
  --h5-size: 1.47em !important;
  --h5-weight: 500 !important;
  --h6-link-hover-color: color-mix(in srgb, #ffffff 25%, #27cac7) !important;
  --h6-link-ul-color: color-mix(in srgb, #27cac7 33%, transparent) !important;
  --h6-size: 1.35em !important;
  --h6-weight: 500 !important;
  --headerFont: -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #625e5e !important;
  --heading-spacing: 0.625rem !important;
  --highlight: color-mix(in srgb, #fe9109 50%, transparent) !important;
  --hr-color: #534f4e !important;
  --hx-link-ul-transparency-pct: 33% !important;
  --icon-color-active: #fe750e !important;
  --icon-color-focused: #eadad9 !important;
  --img-border-radius: 2px !important;
  --inline-code: #cccccc !important;
  --inline-title-size: 2.2em !important;
  --inline-title-weight: 500 !important;
  --input-date-separator: #625e5e !important;
  --input-placeholder-color: #625e5e !important;
  --interactive-accent: #ed5b0f !important;
  --interactive-accent-rgb: #fe750e !important;
  --interactive-before: #7c6f64 !important;
  --light: #212121 !important;
  --light0: #fbf1c7 !important;
  --light0-hard: #f9f5d7 !important;
  --light0-soft: #f2e5bc !important;
  --light1: #ebdbb2 !important;
  --light2: #d5c4a1 !important;
  --light3: #bdae93 !important;
  --light4: #a89984 !important;
  --lightgray: #191717 !important;
  --link-color: #fe750e !important;
  --link-color-hover: #fe9109 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #fe750e !important;
  --link-external-color-hover: #fe9109 !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: #fe750e !important;
  --link-unresolved-decoration: none !important;
  --link-unresolved-decoration-hover: none !important;
  --list-indent: 1em !important;
  --list-marker-color: #625e5e !important;
  --list-marker-color-collapsed: #fe750e !important;
  --max-embed-height: 1000px !important;
  --menu-background: #191717 !important;
  --metadata-border-color: #534f4e !important;
  --metadata-divider-color: #534f4e !important;
  --metadata-input-font: -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #eadad9 !important;
  --metadata-label-font: -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --modal-background: #212121 !important;
  --nav-collapse-icon-color: #625e5e !important;
  --nav-collapse-icon-color-collapsed: #625e5e !important;
  --nav-heading-color: #eadad9 !important;
  --nav-heading-color-collapsed: #625e5e !important;
  --nav-heading-color-hover: #eadad9 !important;
  --nav-item-color-active: #eadad9 !important;
  --nav-item-color-highlighted: #fe750e !important;
  --nav-item-color-hover: #eadad9 !important;
  --nav-item-color-selected: #eadad9 !important;
  --nav-tag-color: #625e5e !important;
  --neutral-orange: #d65d0e !important;
  --neutral-red: #cc241d !important;
  --neutral-yellow: #d79921 !important;
  --obsidian-codeblock: #1a1a1a !important;
  --p-spacing: 0.25rem !important;
  --pdf-background: #212121 !important;
  --pdf-page-background: #212121 !important;
  --pdf-shadow: 0 0 0 1px #534f4e !important;
  --pdf-sidebar-background: #212121 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #534f4e !important;
  --pill-border-color: #534f4e !important;
  --pill-color-hover: #eadad9 !important;
  --pill-color-remove: #625e5e !important;
  --pill-color-remove-hover: #fe750e !important;
  --platinum: #cccccc !important;
  --pre-code: #1a1a1a !important;
  --prompt-background: #212121 !important;
  --r-bg-highlight: color-mix(in srgb, #fe9109 50%, transparent) !important;
  --r-bg-selection: color-mix(in srgb, #d5520e 25%, transparent) !important;
  --r-bright-orange: #fe750e !important;
  --r-bright-yellow: #fea30f !important;
  --r-dark-orange: #d5520e !important;
  --r-dark-red: #bc0104 !important;
  --r-dark0: #212121 !important;
  --r-dark0-accent: #1e1e1e !important;
  --r-dark1: #191717 !important;
  --r-dark2: #161414 !important;
  --r-deep-orange: #ed5b0f !important;
  --r-gray: #9d8f82 !important;
  --r-gray2: #a89c90 !important;
  --r-gray3: #b3ab9e !important;
  --r-gunmetal: #534f4e !important;
  --r-light0: #e7cfb8 !important;
  --r-light1: #dbc5af !important;
  --r-light2: #d0baa6 !important;
  --r-light2-soft: #c4b09c !important;
  --r-light3: #b9a693 !important;
  --r-light4: #a79584 !important;
  --r-lightn1: #f2e5d8 !important;
  --r-meteor: #72504b !important;
  --r-mist-energy-blue: #27cac7 !important;
  --r-orange: #ea4f0d !important;
  --r-pdf-highlight: #fe750e !important;
  --r-red-orange: #c52d0a !important;
  --r-scorpion: #625e5e !important;
  --r-standard-text: #eadad9 !important;
  --r-yellow-green: #c0c90a !important;
  --r-yellow-orange: #fe9109 !important;
  --ribbon-background: #191717 !important;
  --ribbon-background-collapsed: #212121 !important;
  --search-result-background: #212121 !important;
  --secondary: #fe750e !important;
  --setting-group-heading-color: #eadad9 !important;
  --setting-items-background: #282828 !important;
  --setting-items-border-color: #534f4e !important;
  --size-code: 14.4px !important;
  --size-normal: 16px !important;
  --slider-track-background: #534f4e !important;
  --status-bar-background: #191717 !important;
  --status-bar-border-color: #534f4e !important;
  --suggestion-background: #212121 !important;
  --tab-background-active: #212121 !important;
  --tab-container-background: #191717 !important;
  --tab-outline-color: #534f4e !important;
  --tab-switcher-background: #191717 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #191717, transparent) !important;
  --tab-text-color: #625e5e !important;
  --tab-text-color-focused-active-current: #eadad9 !important;
  --tab-text-color-focused-highlighted: #fe750e !important;
  --table-add-button-border-color: #534f4e !important;
  --table-border-color: #534f4e !important;
  --table-drag-handle-background-active: #ed5b0f !important;
  --table-drag-handle-color: #625e5e !important;
  --table-header-border-color: #534f4e !important;
  --table-header-color: #eadad9 !important;
  --table-selection-border-color: #ed5b0f !important;
  --tag-color: #fe750e !important;
  --tag-color-hover: #fe750e !important;
  --tertiary: #fe9109 !important;
  --test-green: #00ff00 !important;
  --text-a: #fe750e !important;
  --text-a-hover: #fe9109 !important;
  --text-accent: #fe750e !important;
  --text-accent-hover: #fe9109 !important;
  --text-card: #c4b09c !important;
  --text-faint: #625e5e !important;
  --text-highlight-bg: color-mix(in srgb, #fe9109 50%, transparent) !important;
  --text-link: #fe750e !important;
  --text-link-hover: #fe9109 !important;
  --text-mark: color-mix(in srgb, #fe9109 50%, transparent) !important;
  --text-normal: #eadad9 !important;
  --text-platinum: #cccccc !important;
  --text-selection: color-mix(in srgb, #d5520e 25%, transparent) !important;
  --text-tag: #fe750e !important;
  --text-title-h1: #bc0104 !important;
  --text-title-h2: #ea4f0d !important;
  --text-title-h3: #fe750e !important;
  --text-title-h4: #fea30f !important;
  --text-title-h5: #c0c90a !important;
  --text-title-h6: #27cac7 !important;
  --textHighlight: color-mix(in srgb, #fe9109 50%, transparent) !important;
  --titleFont: -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #191717 !important;
  --titlebar-background-focused: #161414 !important;
  --titlebar-border-color: #534f4e !important;
  --titlebar-text-color-focused: #eadad9 !important;
  --vault-profile-color: #eadad9 !important;
  --vault-profile-color-hover: #eadad9 !important;
  --vim-cursor: #fe750e !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 23, 23);
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(33, 33, 33);
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(83, 79, 78);
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(25, 23, 23);
  border-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(83, 79, 78);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(254, 117, 14);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 23, 23);
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(83, 79, 78);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 23, 23);
  border-left-color: rgb(83, 79, 78);
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(33, 33, 33);
  color: rgb(234, 218, 217);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(234, 218, 217);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  font-weight: 700;
  outline: rgb(234, 218, 217) none 0px;
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(234, 218, 217);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(234, 218, 217) none 0px;
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(234, 218, 217);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(234, 218, 217) none 0px;
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(234, 218, 217);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  font-weight: 700;
  outline: rgb(234, 218, 217) none 0px;
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: color(srgb 0.996078 0.568627 0.0352941 / 0.5);
  color: rgb(234, 218, 217);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(234, 218, 217) none 0px;
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body del {
  color: rgb(234, 218, 217);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(234, 218, 217) none 0px;
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(98, 94, 94);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(237, 91, 15);
  border-color: rgb(237, 91, 15);
}

html[saved-theme="dark"] body p {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(254, 117, 14);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(254, 117, 14) none 0px;
  text-decoration-color: rgb(254, 117, 14);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(254, 117, 14);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(254, 117, 14) none 0px;
  text-decoration-color: rgb(254, 117, 14);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(254, 117, 14);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(254, 117, 14) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body dt {
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(98, 94, 94);
}

html[saved-theme="dark"] body blockquote {
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body table {
  color: rgb(234, 218, 217);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  margin-top: 0px;
  width: 195.062px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(83, 79, 78);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(83, 79, 78);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(234, 218, 217);
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(50, 48, 47);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(50, 48, 47);
  border-right-color: rgb(50, 48, 47);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(50, 48, 47);
  border-top-style: solid;
  border-top-width: 2px;
  padding-bottom: 1px;
  padding-left: 5px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(234, 218, 217);
  border-bottom-style: solid;
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-right-style: solid;
  border-top-color: rgb(234, 218, 217);
  border-top-style: solid;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(98, 94, 94);
  border-left-color: rgb(98, 94, 94);
  border-right-color: rgb(98, 94, 94);
  border-top-color: rgb(98, 94, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(234, 218, 217);
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 33, 33);
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
  gap: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: color(srgb 0.32549 0.87451 0.866667 / 0.101961);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: color(srgb 0.984314 0.27451 0.298039 / 0.101961);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: color(srgb 0.984314 0.27451 0.298039 / 0.101961);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: color(srgb 0.658824 0.509804 1 / 0.101961);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: color(srgb 0.984314 0.27451 0.298039 / 0.101961);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: color(srgb 0.00784314 0.478431 1 / 0.101961);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: color(srgb 0.00784314 0.478431 1 / 0.101961);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: color(srgb 0.913726 0.592157 0.247059 / 0.101961);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: color(srgb 0.619608 0.619608 0.619608 / 0.101961);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: color(srgb 0.266667 0.811765 0.431373 / 0.101961);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: color(srgb 0.32549 0.87451 0.866667 / 0.101961);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: color(srgb 0.00784314 0.478431 1 / 0.101961);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: color(srgb 0.913726 0.592157 0.247059 / 0.101961);
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
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(234, 218, 217);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(234, 218, 217);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(234, 218, 217) none 0px;
  text-decoration-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(25, 23, 23);
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(25, 23, 23);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(25, 23, 23);
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(25, 23, 23);
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(254, 117, 14);
}

html[saved-theme="dark"] body h1 {
  color: rgb(188, 1, 4);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

html[saved-theme="dark"] body h2 {
  color: rgb(234, 79, 13);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(234, 218, 217);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

html[saved-theme="dark"] body h3 {
  color: rgb(254, 117, 14);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

html[saved-theme="dark"] body h4 {
  color: rgb(254, 163, 15);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

html[saved-theme="dark"] body h5 {
  color: rgb(192, 201, 10);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

html[saved-theme="dark"] body h6 {
  color: rgb(39, 202, 199);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  padding-left: 20px;
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(234, 218, 217);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(25, 23, 23);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(234, 218, 217);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(98, 94, 94);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(25, 23, 23);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(234, 218, 217);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body input[type=text] {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body sub {
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body summary {
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body sup {
  color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(22, 20, 20);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(254, 117, 14);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #534f4e !important;
  --background-primary: #dbc5af !important;
  --background-primary-alt: #e7cfb8 !important;
  --background-secondary: #d0baa6 !important;
  --background-secondary-alt: #b9a693 !important;
  --bases-cards-background: #dbc5af !important;
  --bases-cards-cover-background: #e7cfb8 !important;
  --bases-cards-shadow: 0 0 0 1px #534f4e !important;
  --bases-embed-border-color: #534f4e !important;
  --bases-group-heading-property-color: #534f4e !important;
  --bases-table-border-color: #534f4e !important;
  --bases-table-cell-background-active: #dbc5af !important;
  --bases-table-cell-background-disabled: #e7cfb8 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ed5b0f !important;
  --bases-table-group-background: #e7cfb8 !important;
  --bases-table-header-background: #dbc5af !important;
  --bases-table-header-color: #534f4e !important;
  --bases-table-summary-background: #dbc5af !important;
  --blockquote-border-color: #ed5b0f !important;
  --blur-background: color-mix(in srgb, #dbc5af 65%, transparent) linear-gradient(#dbc5af, color-mix(in srgb, #dbc5af 65%, transparent)) !important;
  --bodyFont: -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bright-orange-v: #fe8019 !important;
  --bright-red: #fb4934 !important;
  --bright-yellow-v: #fabd2f !important;
  --button-text-color: white !important;
  --callout-bg-darken-pct: 5%;
  --callout-blend-mode: normal;
  --callout-padding: 12px 12px 12px 20px;
  --canvas-background: #dbc5af !important;
  --canvas-card-label-color: #534f4e !important;
  --caret-color: #1e1e1e !important;
  --checkbox-border-color: #534f4e !important;
  --checkbox-border-color-hover: #534f4e !important;
  --checkbox-color: #ed5b0f !important;
  --checkbox-marker-color: #dbc5af !important;
  --checklist-done-color: #534f4e !important;
  --code-background: #b9a693 !important;
  --code-block: #161414 !important;
  --code-border-color: #534f4e !important;
  --code-comment: #534f4e !important;
  --code-light-gray: #cccccc !important;
  --code-normal: #161414 !important;
  --code-orange: #b46629 !important;
  --code-punctuation: #534f4e !important;
  --codeFont: -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #534f4e !important;
  --collapse-icon-color-collapsed: #fe750e !important;
  --dark: #1e1e1e !important;
  --dark0: #282828 !important;
  --dark0-hard: #1d2021 !important;
  --dark0-soft: #32302f !important;
  --dark1: #3c3836 !important;
  --dark2: #504945 !important;
  --dark3: #665c54 !important;
  --dark4: #7c6f64 !important;
  --darkgray: #1e1e1e !important;
  --default-codeblock: #b9a693 !important;
  --default-font: system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter !important;
  --divider-color: #534f4e !important;
  --divider-color-hover: #ed5b0f !important;
  --dropdown-background: #d0baa6 !important;
  --dropdown-background-hover: #e7cfb8 !important;
  --editor-font: system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter !important;
  --embed-block-shadow-hover: 0 0 0 1px #534f4e, inset 0 0 0 1px #534f4e !important;
  --embed-border-left: none !important;
  --embed-border-start: 2px solid #ed5b0f !important;
  --faded-orange: #af3a03 !important;
  --faded-red: #9d0006 !important;
  --faded-yellow: #b57614 !important;
  --file-header-background: #dbc5af !important;
  --file-header-background-focused: #dbc5af !important;
  --file-header-font: -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #d0baa6 !important;
  --flair-color: #1e1e1e !important;
  --font-interface: -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: #534f4e !important;
  --footnote-id-color: #534f4e !important;
  --footnote-id-color-no-occurrences: #534f4e !important;
  --graph-node: #534f4e !important;
  --graph-node-focused: #fe750e !important;
  --graph-node-unresolved: #534f4e !important;
  --graph-text: #1e1e1e !important;
  --graph-view-line-color: #a89984 !important;
  --gray: #928374 !important;
  --h1-link-hover-color: color-mix(in srgb, #ff6666 20%, #bc0104) !important;
  --h1-link-ul-color: color-mix(in srgb, #bc0104 33%, transparent) !important;
  --h1-size: 2.2em !important;
  --h1-weight: 500 !important;
  --h2-link-hover-color: color-mix(in srgb, #ff9090 20%, #ea4f0d) !important;
  --h2-link-ul-color: color-mix(in srgb, #ea4f0d 33%, transparent) !important;
  --h2-size: 2.0em !important;
  --h2-weight: 500 !important;
  --h3-link-hover-color: color-mix(in srgb, #ffaaaa 20%, #fe750e) !important;
  --h3-link-ul-color: color-mix(in srgb, #fe750e 33%, transparent) !important;
  --h3-size: 1.85em !important;
  --h3-weight: 500 !important;
  --h4-link-hover-color: color-mix(in srgb, #ffd2d2 20%, #fea30f) !important;
  --h4-link-ul-color: color-mix(in srgb, #fea30f 33%, transparent) !important;
  --h4-size: 1.6em !important;
  --h4-weight: 500 !important;
  --h5-link-hover-color: color-mix(in srgb, #ffffff 17%, #c0c90a) !important;
  --h5-link-ul-color: color-mix(in srgb, #c0c90a 33%, transparent) !important;
  --h5-size: 1.47em !important;
  --h5-weight: 500 !important;
  --h6-link-hover-color: color-mix(in srgb, #ffffff 25%, #27cac7) !important;
  --h6-link-ul-color: color-mix(in srgb, #27cac7 33%, transparent) !important;
  --h6-size: 1.35em !important;
  --h6-weight: 500 !important;
  --headerFont: -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #534f4e !important;
  --heading-spacing: 0.625rem !important;
  --highlight: color-mix(in srgb, #fe9109 50%, transparent) !important;
  --hr-color: #534f4e !important;
  --hx-link-ul-transparency-pct: 33% !important;
  --icon-color: #534f4e !important;
  --icon-color-active: #fe750e !important;
  --icon-color-focused: #1e1e1e !important;
  --icon-color-hover: #534f4e !important;
  --img-border-radius: 2px !important;
  --inline-code: #161414 !important;
  --inline-title-size: 2.2em !important;
  --inline-title-weight: 500 !important;
  --input-date-separator: #534f4e !important;
  --input-placeholder-color: #534f4e !important;
  --interactive-accent: #ed5b0f !important;
  --interactive-accent-rgb: #fe750e !important;
  --interactive-before: #a79584 !important;
  --interactive-hover: #e7cfb8 !important;
  --interactive-normal: #d0baa6 !important;
  --light: #dbc5af !important;
  --light0: #fbf1c7 !important;
  --light0-hard: #f9f5d7 !important;
  --light0-soft: #f2e5bc !important;
  --light1: #ebdbb2 !important;
  --light2: #d5c4a1 !important;
  --light3: #bdae93 !important;
  --light4: #a89984 !important;
  --lightgray: #d0baa6 !important;
  --link-color: #fe750e !important;
  --link-color-hover: #fe9109 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #fe750e !important;
  --link-external-color-hover: #fe9109 !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: #fe750e !important;
  --link-unresolved-decoration: none !important;
  --link-unresolved-decoration-hover: none !important;
  --list-indent: 1em !important;
  --list-marker-color: #534f4e !important;
  --list-marker-color-collapsed: #fe750e !important;
  --list-marker-color-hover: #534f4e !important;
  --max-embed-height: 1000px !important;
  --menu-background: #d0baa6 !important;
  --metadata-border-color: #534f4e !important;
  --metadata-divider-color: #534f4e !important;
  --metadata-input-font: -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #1e1e1e !important;
  --metadata-label-font: -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #534f4e !important;
  --metadata-label-text-color-hover: #534f4e !important;
  --modal-background: #dbc5af !important;
  --nav-collapse-icon-color: #534f4e !important;
  --nav-collapse-icon-color-collapsed: #534f4e !important;
  --nav-heading-color: #1e1e1e !important;
  --nav-heading-color-collapsed: #534f4e !important;
  --nav-heading-color-collapsed-hover: #534f4e !important;
  --nav-heading-color-hover: #1e1e1e !important;
  --nav-item-color: #534f4e !important;
  --nav-item-color-active: #1e1e1e !important;
  --nav-item-color-highlighted: #fe750e !important;
  --nav-item-color-hover: #1e1e1e !important;
  --nav-item-color-selected: #1e1e1e !important;
  --nav-tag-color: #534f4e !important;
  --nav-tag-color-active: #534f4e !important;
  --nav-tag-color-hover: #534f4e !important;
  --neutral-orange: #d65d0e !important;
  --neutral-red: #cc241d !important;
  --neutral-yellow: #d79921 !important;
  --obsidian-codeblock: #1a1a1a !important;
  --p-spacing: 0.25rem !important;
  --pdf-background: #dbc5af !important;
  --pdf-page-background: #dbc5af !important;
  --pdf-sidebar-background: #dbc5af !important;
  --pill-border-color: #534f4e !important;
  --pill-color: #534f4e !important;
  --pill-color-hover: #1e1e1e !important;
  --pill-color-remove: #534f4e !important;
  --pill-color-remove-hover: #fe750e !important;
  --platinum: #cccccc !important;
  --pre-code: #b9a693 !important;
  --prompt-background: #dbc5af !important;
  --r-bg-highlight: color-mix(in srgb, #fe9109 50%, transparent) !important;
  --r-bg-selection: color-mix(in srgb, #d5520e 25%, transparent) !important;
  --r-bright-orange: #fe750e !important;
  --r-bright-yellow: #fea30f !important;
  --r-dark-orange: #d5520e !important;
  --r-dark-red: #bc0104 !important;
  --r-dark0: #212121 !important;
  --r-dark0-accent: #1e1e1e !important;
  --r-dark1: #191717 !important;
  --r-dark2: #161414 !important;
  --r-deep-orange: #ed5b0f !important;
  --r-gray: #9d8f82 !important;
  --r-gray2: #a89c90 !important;
  --r-gray3: #b3ab9e !important;
  --r-gunmetal: #534f4e !important;
  --r-light0: #e7cfb8 !important;
  --r-light1: #dbc5af !important;
  --r-light2: #d0baa6 !important;
  --r-light2-soft: #c4b09c !important;
  --r-light3: #b9a693 !important;
  --r-light4: #a79584 !important;
  --r-lightn1: #f2e5d8 !important;
  --r-meteor: #72504b !important;
  --r-mist-energy-blue: #27cac7 !important;
  --r-orange: #ea4f0d !important;
  --r-pdf-highlight: #fe750e !important;
  --r-red-orange: #c52d0a !important;
  --r-scorpion: #625e5e !important;
  --r-standard-text: #eadad9 !important;
  --r-yellow-green: #c0c90a !important;
  --r-yellow-orange: #fe9109 !important;
  --raised-background: color-mix(in srgb, #dbc5af 65%, transparent) linear-gradient(#dbc5af, color-mix(in srgb, #dbc5af 65%, transparent)) !important;
  --ribbon-background: #d0baa6 !important;
  --ribbon-background-collapsed: #dbc5af !important;
  --search-clear-button-color: #534f4e !important;
  --search-icon-color: #534f4e !important;
  --search-result-background: #dbc5af !important;
  --secondary: #fe750e !important;
  --setting-group-heading-color: #1e1e1e !important;
  --setting-items-background: #e7cfb8 !important;
  --setting-items-border-color: #534f4e !important;
  --size-code: 14.4px !important;
  --size-normal: 16px !important;
  --slider-track-background: #534f4e !important;
  --status-bar-background: #c4b09c !important;
  --status-bar-border-color: #534f4e !important;
  --status-bar-text-color: #534f4e !important;
  --suggestion-background: #dbc5af !important;
  --tab-background-active: #dbc5af !important;
  --tab-container-background: #d0baa6 !important;
  --tab-outline-color: #534f4e !important;
  --tab-switcher-background: #d0baa6 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #d0baa6, transparent) !important;
  --tab-text-color: #534f4e !important;
  --tab-text-color-active: #534f4e !important;
  --tab-text-color-focused: #534f4e !important;
  --tab-text-color-focused-active: #534f4e !important;
  --tab-text-color-focused-active-current: #1e1e1e !important;
  --tab-text-color-focused-highlighted: #fe750e !important;
  --table-add-button-border-color: #534f4e !important;
  --table-border-color: #534f4e !important;
  --table-drag-handle-background-active: #ed5b0f !important;
  --table-drag-handle-color: #534f4e !important;
  --table-header-border-color: #534f4e !important;
  --table-header-color: #1e1e1e !important;
  --table-selection-border-color: #ed5b0f !important;
  --tag-color: #fe750e !important;
  --tag-color-hover: #fe750e !important;
  --tertiary: #fe9109 !important;
  --test-green: #00ff00 !important;
  --text-a: #fe750e !important;
  --text-a-hover: #fe9109 !important;
  --text-accent: #fe750e !important;
  --text-accent-hover: #fe9109 !important;
  --text-card: #161414 !important;
  --text-faint: #534f4e !important;
  --text-highlight-bg: color-mix(in srgb, #fe9109 50%, transparent) !important;
  --text-link: #d5520e !important;
  --text-link-hover: #ed5b0f !important;
  --text-mark: color-mix(in srgb, #fe9109 50%, transparent) !important;
  --text-muted: #534f4e !important;
  --text-normal: #1e1e1e !important;
  --text-platinum: #cccccc !important;
  --text-selection: color-mix(in srgb, #d5520e 25%, transparent) !important;
  --text-tag: #ed5b0f !important;
  --text-title-h1: #bc0104 !important;
  --text-title-h2: #ea4f0d !important;
  --text-title-h3: #fe750e !important;
  --text-title-h4: #fea30f !important;
  --text-title-h5: #c0c90a !important;
  --text-title-h6: #27cac7 !important;
  --textHighlight: color-mix(in srgb, #fe9109 50%, transparent) !important;
  --titleFont: -apple-system, BlinkMacSystemFont, SF Pro Text, Liberation Sans, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #d0baa6 !important;
  --titlebar-background-focused: #b9a693 !important;
  --titlebar-border-color: #534f4e !important;
  --titlebar-text-color: #534f4e !important;
  --titlebar-text-color-focused: #1e1e1e !important;
  --vault-profile-color: #1e1e1e !important;
  --vault-profile-color-hover: #1e1e1e !important;
  --vim-cursor: #fe750e !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(208, 186, 166);
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(219, 197, 175);
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(83, 79, 78);
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(219, 197, 175);
  border-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(83, 79, 78);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(83, 79, 78);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(83, 79, 78);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(254, 117, 14);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(83, 79, 78);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(208, 186, 166);
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(83, 79, 78);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(208, 186, 166);
  border-left-color: rgb(83, 79, 78);
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(219, 197, 175);
  color: rgb(30, 30, 30);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(30, 30, 30);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  font-weight: 700;
  outline: rgb(30, 30, 30) none 0px;
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(30, 30, 30);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(30, 30, 30) none 0px;
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(30, 30, 30);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(30, 30, 30) none 0px;
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(30, 30, 30);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  font-weight: 700;
  outline: rgb(30, 30, 30) none 0px;
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .text-highlight {
  background-color: color(srgb 0.996078 0.568627 0.0352941 / 0.5);
  color: rgb(30, 30, 30);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(30, 30, 30) none 0px;
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body del {
  color: rgb(30, 30, 30);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(30, 30, 30) none 0px;
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(83, 79, 78);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(237, 91, 15);
  border-color: rgb(237, 91, 15);
}

html[saved-theme="light"] body p {
  color: rgb(83, 79, 78);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(83, 79, 78) none 0px;
  text-decoration-color: rgb(83, 79, 78);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(213, 82, 14);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(213, 82, 14) none 0px;
  text-decoration-color: rgb(213, 82, 14);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(254, 117, 14);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(254, 117, 14) none 0px;
  text-decoration-color: rgb(254, 117, 14);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(254, 117, 14);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(254, 117, 14) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body dt {
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body ol > li {
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body ul > li {
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(83, 79, 78);
}

html[saved-theme="light"] body blockquote {
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body table {
  color: rgb(30, 30, 30);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  margin-top: 0px;
  width: 195.062px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(83, 79, 78);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(83, 79, 78);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(185, 166, 147);
  border-bottom-color: rgb(22, 20, 20);
  border-left-color: rgb(22, 20, 20);
  border-right-color: rgb(22, 20, 20);
  border-top-color: rgb(22, 20, 20);
  color: rgb(22, 20, 20);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(185, 166, 147);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(185, 166, 147);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(185, 166, 147);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(185, 166, 147);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body figcaption {
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(231, 207, 184);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(30, 30, 30);
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(50, 48, 47);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(50, 48, 47);
  border-right-color: rgb(50, 48, 47);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(50, 48, 47);
  border-top-style: solid;
  border-top-width: 2px;
  padding-bottom: 1px;
  padding-left: 5px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(30, 30, 30);
  border-bottom-style: solid;
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-right-style: solid;
  border-top-color: rgb(30, 30, 30);
  border-top-style: solid;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(30, 30, 30);
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(219, 197, 175);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(219, 197, 175);
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
  gap: 6px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: color(srgb 0 0.494013 0.486254 / 0.146863);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background-color: color(srgb 0.602644 0.126736 0.183638 / 0.146863);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background-color: color(srgb 0.602644 0.126736 0.183638 / 0.146863);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: color(srgb 0.310375 0.212089 0.615576 / 0.146863);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background-color: color(srgb 0.602644 0.126736 0.183638 / 0.146863);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background-color: color(srgb 0.0206916 0.281924 0.571607 / 0.146863);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background-color: color(srgb 0.0206916 0.281924 0.571607 / 0.146863);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background-color: color(srgb 0.610403 0.302615 0 / 0.146863);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: color(srgb 0.40866 0.40866 0.40866 / 0.146863);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background-color: color(srgb 0.0206916 0.478494 0.201743 / 0.146863);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: color(srgb 0 0.494013 0.486254 / 0.146863);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background-color: color(srgb 0.0206916 0.281924 0.571607 / 0.146863);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background-color: color(srgb 0.610403 0.302615 0 / 0.146863);
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
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(30, 30, 30);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(219, 197, 175);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(30, 30, 30);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
  outline: rgb(30, 30, 30) none 0px;
  text-decoration-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(208, 186, 166);
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(208, 186, 166);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(208, 186, 166);
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(208, 186, 166);
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(254, 117, 14);
}

html[saved-theme="light"] body h1 {
  color: rgb(188, 1, 4);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

html[saved-theme="light"] body h2 {
  color: rgb(234, 79, 13);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(30, 30, 30);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

html[saved-theme="light"] body h3 {
  color: rgb(254, 117, 14);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

html[saved-theme="light"] body h4 {
  color: rgb(254, 163, 15);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

html[saved-theme="light"] body h5 {
  color: rgb(192, 201, 10);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

html[saved-theme="light"] body h6 {
  color: rgb(39, 202, 199);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  padding-left: 20px;
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(83, 79, 78);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(83, 79, 78);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(30, 30, 30);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(83, 79, 78);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(196, 176, 156);
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(83, 79, 78);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(83, 79, 78);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(30, 30, 30);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(83, 79, 78);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(83, 79, 78);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(83, 79, 78);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(83, 79, 78);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(83, 79, 78);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(83, 79, 78);
  stroke: rgb(83, 79, 78);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(83, 79, 78);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(83, 79, 78);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(83, 79, 78);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(83, 79, 78);
  font-family: system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(196, 176, 156);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(30, 30, 30);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(83, 79, 78);
  border-left-color: rgb(83, 79, 78);
  border-right-color: rgb(83, 79, 78);
  border-top-color: rgb(83, 79, 78);
  color: rgb(83, 79, 78);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "SF Pro Text", "Liberation Sans", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(185, 166, 147);
  border-bottom-color: rgb(22, 20, 20);
  border-left-color: rgb(22, 20, 20);
  border-right-color: rgb(22, 20, 20);
  border-top-color: rgb(22, 20, 20);
  color: rgb(22, 20, 20);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body sub {
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body summary {
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body sup {
  color: rgb(30, 30, 30);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(185, 166, 147);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(237, 91, 15);
}`,
  },
};
