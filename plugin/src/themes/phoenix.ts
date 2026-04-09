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
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(234, 218, 217);
  border-left-color: rgb(234, 218, 217);
  border-right-color: rgb(234, 218, 217);
  border-top-color: rgb(234, 218, 217);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
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
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(219, 197, 175) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 197, 175);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(219, 197, 175) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 197, 175);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(219, 197, 175) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 197, 175);
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(219, 197, 175) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 197, 175);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(219, 197, 175) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 197, 175);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(219, 197, 175) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 197, 175);
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
