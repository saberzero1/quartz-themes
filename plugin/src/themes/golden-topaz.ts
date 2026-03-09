import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "golden-topaz",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["lucida-handwriting", "monaco"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-strong: #786b54;
  --allow-1: #E1B87F;
  --aqua: #61C8B9;
  --background-accent: #786b54;
  --background-blockquote-dark: #786b540d;
  --background-blue: #2f5264;
  --background-brown: #493a3a;
  --background-gray: #535353;
  --background-green: #32503e;
  --background-modifier-border: rgba(0, 0, 0, 0.1);
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: #007672;
  --background-modifier-error-hover: #D1CCBD;
  --background-modifier-error-rgb: 155,67,67;
  --background-modifier-form-field: #007672;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-form-field-hover: #007672;
  --background-modifier-success: #E1B87F;
  --background-orange: #53422f;
  --background-pink: #533b4a;
  --background-primary: #353231;
  --background-primary-alt: #00767224;
  --background-purple: #443f57;
  --background-red: #683c3c;
  --background-search-result: #786b54;
  --background-secondary: #383433;
  --background-secondary-alt: #353231;
  --background-yellow: #585536;
  --bases-cards-background: #353231;
  --bases-cards-cover-background: #00767224;
  --bases-cards-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  --bases-embed-border-color: rgba(0, 0, 0, 0.1);
  --bases-group-heading-property-color: #a29c90;
  --bases-table-border-color: #c0c0c0;
  --bases-table-cell-background-active: #353231;
  --bases-table-cell-background-disabled: #00767224;
  --bases-table-cell-shadow-focus: 0 0 0 2px #007672;
  --bases-table-group-background: #00767224;
  --bases-table-header-background: #353231;
  --bases-table-header-color: #a29c90;
  --bases-table-summary-background: #353231;
  --blockquote-border-color: #007672;
  --blue: #198cff;
  --blur-background: color-mix(in srgb, #007672 65%, transparent) linear-gradient(#007672, color-mix(in srgb, #007672 65%, transparent));
  --calendar-week-background-color: #007672;
  --calendar-week-color: #E1B87F;
  --calendar-week-hover: #786b54;
  --canvas-background: #353231;
  --canvas-card-label-color: rgb(121, 121, 121);
  --caret-color: #a29c90;
  --checkbox-border-color: rgb(121, 121, 121);
  --checkbox-border-color-hover: #a29c90;
  --checkbox-color: #007672;
  --checkbox-color-hover: #E1B87F;
  --checkbox-marker-color: #353231;
  --checklist-done-color: #a29c90;
  --code-background: #00767224;
  --code-border-color: rgba(0, 0, 0, 0.1);
  --code-comment: rgb(121, 121, 121);
  --code-normal: #a29c90;
  --code-punctuation: #a29c90;
  --collapse-icon-color: rgb(121, 121, 121);
  --collapse-icon-color-collapsed: #E1B87F;
  --color-specification: #E1B87F;
  --darkblue: #007aff;
  --darkgreen: #007672;
  --day-planner-dot: #786b54;
  --day-planner-item-hover: #EFDBB2;
  --day-planner-line: #786b54;
  --day-planner-pie: #007672;
  --day-planner-timeline: #269894;
  --divider-color: rgba(0, 0, 0, 0.1);
  --divider-color-hover: #007672;
  --dropdown-background: #007672;
  --dropdown-background-hover: #E1B87F;
  --embed-block-shadow-hover: 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  --embed-border-start: 2px solid #007672;
  --embed-color: #786b540d;
  --event-item-color1: #007672;
  --event-item-color10: #136664;
  --event-item-color2: #136664;
  --event-item-color3: #105553;
  --event-item-color4: #0D4a48;
  --event-item-color5: #0b3f3d;
  --event-item-color6: #093634;
  --event-item-color7: #0b3f3d;
  --event-item-color8: #0D4a48;
  --event-item-color9: #105553;
  --file-header-background: #353231;
  --file-header-background-focused: #353231;
  --flair-background: #007672;
  --flair-color: #a29c90;
  --folder-title: #007672;
  --font-family-YAML: "Lucida Handwriting", "Dancing Script", "Hand of Sean", "Angelina", cursive;
  --font-family-preview-edit-code: "Consolas", "Monaco", monospace;
  --font-family-special-tag: "Lucida Handwriting", "Dancing Script", "Hand of Sean", "Angelina", cursive;
  --font-size-code: 0.9375em;
  --font-size-edit-blockquote: 1em;
  --font-size-edit-code: 1em;
  --font-size-edit-normal: 1em;
  --font-size-embed-file: 1.25em;
  --font-size-embed-title-size: 1.125em;
  --font-size-file-header-title: 0.9375em;
  --font-size-file-header-title-andy-plugin: 1em;
  --font-size-folder-and-file: 0.8125em;
  --font-size-h1: 1.5625em;
  --font-size-h2: 1.4375em;
  --font-size-h3: 1.3125em;
  --font-size-h4: 1.1875em;
  --font-size-h5: 1.0625em;
  --font-size-h6: 0.9375em;
  --font-size-latex: 1.25em;
  --font-size-list: 1em;
  --font-size-obsidian-titlebar: 0.75em;
  --font-size-preview-blockquote: 1em;
  --font-size-preview-normal: 1em;
  --font-size-tag: 1em;
  --font-size-vault-name: 0.875em;
  --footnote-divider-color: rgba(0, 0, 0, 0.1);
  --footnote-id-color: #a29c90;
  --footnote-id-color-no-occurrences: rgb(121, 121, 121);
  --graph-arrow: #EFDBB2;
  --graph-attach: #E1B87F;
  --graph-circle: #EFDBB2;
  --graph-line: #E1B87F;
  --graph-node: #a29c90;
  --graph-node-focused: #E1B87F;
  --graph-node-unresolved: rgb(121, 121, 121);
  --graph-text: #a29c90;
  --graph-text-color: #a29c90;
  --graph-unresolved: #E1B87F;
  --graphtag: #007672;
  --gray-1: #353231;
  --gray-2: #786b54;
  --green: #0f9d58;
  --h1-color: #D1CCBD;
  --h2-color: #D1CCBD;
  --h3-color: #D1CCBD;
  --h4-color: #D1CCBD;
  --h5-color: #D1CCBD;
  --h6-color: #D1CCBD;
  --header-color: #f1a634d0;
  --heading-formatting: rgb(121, 121, 121);
  --hr-color: rgba(0, 0, 0, 0.1);
  --icon-color: #a29c90;
  --icon-color-active: #E1B87F;
  --icon-color-focused: #a29c90;
  --icon-color-hover: #a29c90;
  --inline-title-color: #D1CCBD;
  --input-date-separator: rgb(121, 121, 121);
  --input-placeholder-color: rgb(121, 121, 121);
  --interactive-accent: #007672;
  --interactive-accent-hover: #E1B87F;
  --interactive-accent-rgb: 45, 135, 211;
  --interactive-hover: #E1B87F;
  --interactive-normal: #007672;
  --light-yellow: #E1B87F;
  --link-color: #E1B87F;
  --link-color-hover: #786b54;
  --link-external-color: #E1B87F;
  --link-external-color-hover: #786b54;
  --link-unresolved-color: #E1B87F;
  --list-marker-color: rgb(121, 121, 121);
  --list-marker-color-collapsed: #E1B87F;
  --list-marker-color-hover: #a29c90;
  --list-ol-block-color: #a29c90;
  --list-ol-hover: #007672;
  --list-ol-number-color: #a29c90;
  --list-ul-block-color: #007672;
  --list-ul-disc-color: #E1B87F;
  --list-ul-hover: #EFDBB2;
  --mark-highlight: #007672;
  --menu-background: #383433;
  --mermaid-active-task-color: #007672;
  --mermaid-font-family: "Comic Sans MS", "Comic Sans", cursive;
  --mermaid-seq-dia-color: #E1B87F;
  --metadata-border-color: rgba(0, 0, 0, 0.1);
  --metadata-divider-color: rgba(0, 0, 0, 0.1);
  --metadata-input-text-color: #a29c90;
  --metadata-label-text-color: #a29c90;
  --metadata-label-text-color-hover: #a29c90;
  --modal-background: #353231;
  --nav-collapse-icon-color: rgb(121, 121, 121);
  --nav-collapse-icon-color-collapsed: rgb(121, 121, 121);
  --nav-heading-color: #a29c90;
  --nav-heading-color-collapsed: rgb(121, 121, 121);
  --nav-heading-color-collapsed-hover: #a29c90;
  --nav-heading-color-hover: #a29c90;
  --nav-item-color: #a29c90;
  --nav-item-color-active: #a29c90;
  --nav-item-color-highlighted: #E1B87F;
  --nav-item-color-hover: #a29c90;
  --nav-item-color-selected: #a29c90;
  --nav-tag-color: rgb(121, 121, 121);
  --nav-tag-color-active: #a29c90;
  --nav-tag-color-hover: #a29c90;
  --note-cloze: #E1B87F;
  --note-important: #007672;
  --orange: #f9944c;
  --panel-border-color: #353231;
  --pdf-background: #353231;
  --pdf-page-background: #353231;
  --pdf-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  --pdf-sidebar-background: #353231;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  --pill-border-color: rgba(0, 0, 0, 0.1);
  --pill-color: #a29c90;
  --pill-color-hover: #a29c90;
  --pill-color-remove: rgb(121, 121, 121);
  --pill-color-remove-hover: #E1B87F;
  --prompt-background: #353231;
  --purple: #ab7fe6;
  --raised-background: color-mix(in srgb, #007672 65%, transparent) linear-gradient(#007672, color-mix(in srgb, #007672 65%, transparent));
  --red: #f97065;
  --red-1: #ff4a4a;
  --ribbon-background: #383433;
  --ribbon-background-collapsed: #353231;
  --search-clear-button-color: #a29c90;
  --search-icon-color: #a29c90;
  --search-result-background: #353231;
  --search-result-file-title-color: #007672;
  --search-text: #007672;
  --setting-group-heading-color: #a29c90;
  --setting-items-background: #00767224;
  --setting-items-border-color: rgba(0, 0, 0, 0.1);
  --slider-track-background: rgba(0, 0, 0, 0.1);
  --stag1: #cf0000;
  --stag2: #cf7c00;
  --stag3: #00a71c;
  --status-bar-background: #383433;
  --status-bar-border-color: rgba(0, 0, 0, 0.1);
  --status-bar-text-color: #a29c90;
  --stickies-color-1: #007672;
  --stickies-color-2: #E1B87F;
  --suggestion-background: #353231;
  --tab-background-active: #353231;
  --tab-container-background: #383433;
  --tab-outline-color: rgba(0, 0, 0, 0.1);
  --tab-switcher-background: #383433;
  --tab-switcher-menubar-background: linear-gradient(to top, #383433, transparent);
  --tab-text-color: rgb(121, 121, 121);
  --tab-text-color-active: #a29c90;
  --tab-text-color-focused: #a29c90;
  --tab-text-color-focused-active: #a29c90;
  --tab-text-color-focused-active-current: #a29c90;
  --tab-text-color-focused-highlighted: #E1B87F;
  --table-add-button-border-color: rgba(0, 0, 0, 0.1);
  --table-background-color: #353231;
  --table-background-color-odd: #353231;
  --table-border-color: #c0c0c0;
  --table-drag-handle-background-active: #007672;
  --table-drag-handle-color: rgb(121, 121, 121);
  --table-drag-handle-color-active: #E1B87F;
  --table-header-border-color: #c0c0c0;
  --table-header-color: #a29c90;
  --table-hover-color: #efdbb217;
  --table-hover-raw-color: #353231;
  --table-hover-thead-color: #efdbb2e3;
  --table-selection-border-color: #007672;
  --table-thead-background-color: #786b54;
  --tag-color: #E1B87F;
  --tag-color-hover: #E1B87F;
  --tag1: #007672;
  --tag2: #786b54;
  --tag3: #aa7f39cc;
  --tag4: #3C4855;
  --tag5: #674712;
  --tag6: #60616f;
  --tag7: #7f7272;
  --tag8: #2F3546;
  --tag9: #393c44;
  --tape-color: #007672;
  --text-accent: #E1B87F;
  --text-accent-hover: #786b54;
  --text-blue: #8ca1ff;
  --text-brown: #be9684;
  --text-em-color: #E1B87F;
  --text-error: #007672;
  --text-error-hover: #E1B87F;
  --text-faint: rgb(121, 121, 121);
  --text-family-inline-code: "Consolas", "Monaco", monospace;
  --text-gray: #acacac;
  --text-green: #52c7b2;
  --text-highlight-bg: #D1CCBD;
  --text-muted: #a29c90;
  --text-normal: #a29c90;
  --text-on-accent: #E1B87F;
  --text-orange: #ffa344;
  --text-pink: #ff6bba;
  --text-purple: #b386f1;
  --text-red: #ff4f4f;
  --text-selection: #EFDBB2;
  --text-size-cloze: 0.9375em;
  --text-yellow: #ffdc51;
  --theme-color: #E1B87F;
  --theme-color-translucent: #007672;
  --theme-color-translucent-1: #007672;
  --titlebar-background: #383433;
  --titlebar-background-focused: #353231;
  --titlebar-border-color: rgba(0, 0, 0, 0.1);
  --titlebar-text-color: #a29c90;
  --titlebar-text-color-focused: #a29c90;
  --vault-profile-color: #a29c90;
  --vault-profile-color-hover: #a29c90;
  --yellow: #f7dc01;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(56, 52, 51);
  color: rgb(162, 156, 144);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(53, 50, 49);
  color: rgb(162, 156, 144);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(56, 52, 51);
  color: rgb(162, 156, 144);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0.1);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(56, 52, 51);
  border-left-color: rgba(0, 0, 0, 0.1);
  color: rgb(162, 156, 144);
}

body div#quartz-root {
  background-color: rgb(53, 50, 49);
  color: rgb(162, 156, 144);
}`,
    typography: `body .page article p > b, b {
  color: rgb(120, 107, 84);
  outline: rgb(120, 107, 84) none 0px;
  text-decoration: rgb(120, 107, 84);
  text-decoration-color: rgb(120, 107, 84);
}

body .page article p > em, em {
  color: rgb(162, 156, 144);
  outline: rgb(162, 156, 144) none 0px;
  text-decoration: rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body .page article p > i, i {
  color: rgb(162, 156, 144);
  outline: rgb(162, 156, 144) none 0px;
  text-decoration: rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body .page article p > strong, strong {
  color: rgb(120, 107, 84);
  outline: rgb(120, 107, 84) none 0px;
  text-decoration: rgb(120, 107, 84);
  text-decoration-color: rgb(120, 107, 84);
}

body .text-highlight {
  background-color: rgb(0, 118, 114);
  color: rgb(162, 156, 144);
  outline: rgb(162, 156, 144) none 0px;
  text-decoration: rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body del {
  color: rgb(162, 156, 144);
  outline: rgb(162, 156, 144) none 0px;
  text-decoration: line-through rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body p {
  color: rgb(162, 156, 144);
  outline: rgb(162, 156, 144) none 0px;
  text-decoration: rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}`,
    links: `body a.external, footer a {
  color: rgb(225, 184, 127);
  outline: rgb(225, 184, 127) none 0px;
  text-decoration: underline rgb(225, 184, 127);
  text-decoration-color: rgb(225, 184, 127);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(225, 184, 127);
  outline: rgb(225, 184, 127) none 0px;
  text-decoration: rgb(225, 184, 127);
  text-decoration-color: rgb(225, 184, 127);
}

body a.internal.broken {
  color: rgb(225, 184, 127);
  outline: rgb(225, 184, 127) none 0px;
  text-decoration: underline rgb(225, 184, 127);
  text-decoration-color: rgb(225, 184, 127);
}`,
    lists: `body dd {
  color: rgb(162, 156, 144);
}

body dt {
  color: rgb(162, 156, 144);
}

body ol > li {
  color: rgb(162, 156, 144);
}

body ol.overflow {
  background-color: rgb(53, 50, 49);
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}

body ul > li {
  color: rgb(162, 156, 144);
}

body ul.overflow {
  background-color: rgb(53, 50, 49);
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(121, 121, 121);
  text-decoration: rgb(121, 121, 121);
}

body blockquote {
  background-color: rgba(120, 107, 84, 0.05);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}

body table {
  color: rgb(162, 156, 144);
  margin-left: 186.391px;
  margin-right: 186.391px;
  margin-top: 0px;
  width: 273.219px;
}

body td {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(162, 156, 144);
  padding-left: 20px;
  padding-right: 20px;
}

body th {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(162, 156, 144);
  padding-left: 20px;
  padding-right: 20px;
}

body thead {
  background-color: rgb(120, 107, 84);
}`,
    code: `body code {
  border-bottom-color: rgb(209, 204, 189);
  border-left-color: rgb(209, 204, 189);
  border-right-color: rgb(209, 204, 189);
  border-top-color: rgb(209, 204, 189);
  color: rgb(209, 204, 189);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-right: 30px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(56, 52, 51);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(56, 52, 51);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(209, 204, 189);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body pre > code > [data-line] {
  border-left-color: rgb(247, 220, 1);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(247, 220, 1);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(247, 220, 1);
  border-left-color: rgb(247, 220, 1);
  border-right-color: rgb(247, 220, 1);
  border-top-color: rgb(247, 220, 1);
}

body pre > code, pre:has(> code) {
  background-color: rgb(56, 52, 51);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding-bottom: 6px;
  padding-left: 22px;
  padding-right: 30px;
  padding-top: 6px;
}

body pre:has(> code) {
  background-color: rgb(56, 52, 51);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding-bottom: 6px;
  padding-left: 22px;
  padding-right: 30px;
  padding-top: 6px;
}`,
    images: `body audio {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}

body figcaption {
  color: rgb(162, 156, 144);
  text-align: justify;
}

body figure {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  text-align: justify;
}

body img {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}

body video {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}`,
    embeds: `body .file-embed {
  background-color: rgba(0, 118, 114, 0.14);
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}

body .footnotes {
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}

body .transclude {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(0, 118, 114);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}

body .transclude-inner {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(0, 118, 114);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(162, 156, 144);
  text-decoration: line-through rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body input[type=checkbox] {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  margin-bottom: 1px;
  margin-right: 5px;
  transition: 0.5s;
}

body li.task-list-item[data-task='!'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body li.task-list-item[data-task='*'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body li.task-list-item[data-task='-'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body li.task-list-item[data-task='/'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body li.task-list-item[data-task='>'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body li.task-list-item[data-task='?'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body li.task-list-item[data-task='I'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body li.task-list-item[data-task='S'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body li.task-list-item[data-task='b'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body li.task-list-item[data-task='c'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body li.task-list-item[data-task='d'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body li.task-list-item[data-task='f'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body li.task-list-item[data-task='i'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body li.task-list-item[data-task='k'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body li.task-list-item[data-task='l'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body li.task-list-item[data-task='p'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body li.task-list-item[data-task='u'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body li.task-list-item[data-task='w'] {
  color: rgb(162, 156, 144);
  text-decoration: line-through rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}`,
    search: `body .search > .search-button {
  background-color: rgb(0, 118, 114);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  color: rgb(162, 156, 144);
}

body .search > .search-container > .search-space {
  background-color: rgb(53, 50, 49);
}

body .search > .search-container > .search-space > * {
  color: rgb(162, 156, 144);
  outline: rgb(162, 156, 144) none 0px;
  text-decoration: rgb(162, 156, 144);
  text-decoration-color: rgb(162, 156, 144);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(162, 156, 144);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(162, 156, 144);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(0, 118, 114);
  color: rgb(162, 156, 144);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(56, 52, 51);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(0, 118, 114);
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(0, 118, 114);
  color: rgb(162, 156, 144);
}

body a.internal.tag-link::before {
  color: rgb(225, 184, 127);
}

body h1 {
  color: rgb(209, 204, 189);
}

body h2 {
  color: rgb(209, 204, 189);
}

body h2.page-title, h2.page-title a {
  color: rgb(209, 204, 189);
}

body h3 {
  color: rgb(209, 204, 189);
}

body h4 {
  color: rgb(209, 204, 189);
}

body h5 {
  color: rgb(209, 204, 189);
}

body h6 {
  color: rgb(209, 204, 189);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(53, 50, 49) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 50, 49);
}

body ::-webkit-scrollbar-corner {
  background: rgb(53, 50, 49) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 50, 49);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(53, 50, 49) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 50, 49);
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(53, 50, 49) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 50, 49);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(53, 50, 49) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 50, 49);
}

body ::-webkit-scrollbar-track {
  background: rgb(53, 50, 49) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 50, 49);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(162, 156, 144);
  font-weight: 600;
  text-decoration: rgb(162, 156, 144);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(162, 156, 144);
  font-weight: 600;
  text-decoration: rgb(162, 156, 144);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(162, 156, 144);
  text-decoration: rgb(162, 156, 144);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(162, 156, 144);
}`,
    toc: `body li.depth-0 {
  font-weight: 600;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}`,
    footer: `body footer {
  background-color: rgb(56, 52, 51);
  border-bottom-color: rgb(53, 50, 49);
  border-bottom-width: 1px;
  border-left-color: rgb(53, 50, 49);
  border-right-color: rgb(53, 50, 49);
  border-right-width: 1px;
  border-top-color: rgb(53, 50, 49);
  color: rgb(162, 156, 144);
}

body footer ul li a {
  color: rgb(162, 156, 144);
  text-decoration: rgb(162, 156, 144);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(162, 156, 144);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(162, 156, 144);
  text-decoration: rgb(162, 156, 144);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(162, 156, 144);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}

body li.section-li > .section .meta {
  color: rgb(162, 156, 144);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(162, 156, 144);
  text-decoration: rgb(162, 156, 144);
}

body ul.section-ul {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}

body .darkmode svg {
  color: rgb(162, 156, 144);
  stroke: rgb(162, 156, 144);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}

body .breadcrumb-element p {
  color: rgb(121, 121, 121);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}

body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  color: rgb(162, 156, 144);
}

body .metadata-properties {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}

body .navigation-progress {
  background-color: rgb(56, 52, 51);
}

body .page-header h2.page-title {
  color: rgb(162, 156, 144);
}

body abbr {
  color: rgb(162, 156, 144);
  text-decoration: underline dotted rgb(162, 156, 144);
}

body details {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}

body input[type=text] {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}

body kbd {
  background-color: rgba(0, 118, 114, 0.14);
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
  color: rgb(162, 156, 144);
}

body progress {
  border-bottom-color: rgb(162, 156, 144);
  border-left-color: rgb(162, 156, 144);
  border-right-color: rgb(162, 156, 144);
  border-top-color: rgb(162, 156, 144);
}

body sub {
  color: rgb(162, 156, 144);
}

body summary {
  color: rgb(162, 156, 144);
}

body sup {
  color: rgb(162, 156, 144);
}`,
  },
  light: {
    base: `:root:root {
  --accent-strong: #5667a4;
  --allow-1: #4c5064;
  --aqua: #63e2fd;
  --background-accent: #e6eff4;
  --background-blue: #ddebf1;
  --background-brown: #e9e5e3;
  --background-gray: #ebeced;
  --background-green: #ddedea;
  --background-modifier-border: rgba(0, 0, 0, 0.1);
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: #4c5064;
  --background-modifier-error-hover: #4c5064;
  --background-modifier-error-rgb: 230, 135, 135;
  --background-modifier-form-field: #fbf0d2;
  --background-modifier-form-field-highlighted: #e6eff4;
  --background-modifier-form-field-hover: #fbf0d2;
  --background-modifier-success: #fbf0d2;
  --background-orange: #faebdd;
  --background-pink: #f4dfeb;
  --background-primary: #dddbc7;
  --background-primary-alt: #fbf0d221;
  --background-purple: #eae4f2;
  --background-red: #ffe3e3;
  --background-search-result: rgba(0, 0, 0, 0.1);
  --background-secondary: #dddbc7;
  --background-secondary-alt: rgba(0, 0, 0, 0.1);
  --background-yellow: #fbf3db;
  --bases-cards-background: #dddbc7;
  --bases-cards-cover-background: #fbf0d221;
  --bases-cards-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  --bases-embed-border-color: rgba(0, 0, 0, 0.1);
  --bases-group-heading-property-color: #4c5064;
  --bases-table-border-color: #4c5064;
  --bases-table-cell-background-active: #dddbc7;
  --bases-table-cell-background-disabled: #fbf0d221;
  --bases-table-cell-shadow-focus: 0 0 0 2px #4c5064;
  --bases-table-group-background: #fbf0d221;
  --bases-table-header-background: #dddbc7;
  --bases-table-header-color: #4c5064;
  --bases-table-summary-background: #dddbc7;
  --blockquote-border-color: #4c5064;
  --blue: #4285f4;
  --blue-green: #00b0b5;
  --blur-background: color-mix(in srgb, #dddbc7 65%, transparent) linear-gradient(#dddbc7, color-mix(in srgb, #dddbc7 65%, transparent));
  --calendar-week-background-color: #e6eff4;
  --calendar-week-color: #4c5064;
  --calendar-week-hover: #4c5064;
  --canvas-background: #dddbc7;
  --canvas-card-label-color: #4c5064;
  --caret-color: #000000;
  --checkbox-border-color: #4c5064;
  --checkbox-border-color-hover: #4c5064;
  --checkbox-color: #4c5064;
  --checkbox-color-hover: #e6eff4;
  --checkbox-marker-color: #dddbc7;
  --checklist-done-color: #4c5064;
  --code-background: #fbf0d221;
  --code-border-color: rgba(0, 0, 0, 0.1);
  --code-comment: #4c5064;
  --code-normal: #000000;
  --code-punctuation: #4c5064;
  --collapse-icon-color: #4c5064;
  --collapse-icon-color-collapsed: #4c5064;
  --color-specification: #e6eff4;
  --darkblue: #5667a4;
  --darkgreen: #1a8b8d;
  --day-planner-dot: #e6eff4;
  --day-planner-item-hover: #4c5064;
  --day-planner-line: #7db9ff;
  --day-planner-pie: #4c5064;
  --day-planner-timeline: #7db9ff;
  --divider-color: rgba(0, 0, 0, 0.1);
  --divider-color-hover: #4c5064;
  --dropdown-background: #dddbc7;
  --dropdown-background-hover: #e6eff4;
  --embed-block-shadow-hover: 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  --embed-border-start: 2px solid #4c5064;
  --embed-color: #fbf0d221;
  --event-item-color1: #77aff1;
  --event-item-color10: #6da1dd;
  --event-item-color2: #6da1dd;
  --event-item-color3: #6292cb;
  --event-item-color4: #5883b4;
  --event-item-color5: #4e749f;
  --event-item-color6: #44658b;
  --event-item-color7: #4e749f;
  --event-item-color8: #5883b4;
  --event-item-color9: #6292cb;
  --file-header-background: #dddbc7;
  --file-header-background-focused: #dddbc7;
  --flair-background: #dddbc7;
  --flair-color: #000000;
  --folder-title: #4c5064;
  --font-family-YAML: "Lucida Handwriting", "Dancing Script", "Hand of Sean", "Angelina", cursive;
  --font-family-preview-edit-code: "Consolas", "Monaco", monospace;
  --font-family-special-tag: "Lucida Handwriting", "Dancing Script", "Hand of Sean", "Angelina", cursive;
  --font-size-code: 0.9375em;
  --font-size-edit-blockquote: 1em;
  --font-size-edit-code: 1em;
  --font-size-edit-normal: 1em;
  --font-size-embed-file: 1.25em;
  --font-size-embed-title-size: 1.125em;
  --font-size-file-header-title: 0.9375em;
  --font-size-file-header-title-andy-plugin: 1em;
  --font-size-folder-and-file: 0.8125em;
  --font-size-h1: 1.5625em;
  --font-size-h2: 1.4375em;
  --font-size-h3: 1.3125em;
  --font-size-h4: 1.1875em;
  --font-size-h5: 1.0625em;
  --font-size-h6: 0.9375em;
  --font-size-latex: 1.25em;
  --font-size-list: 1em;
  --font-size-obsidian-titlebar: 0.75em;
  --font-size-preview-blockquote: 1em;
  --font-size-preview-normal: 1em;
  --font-size-tag: 1em;
  --font-size-vault-name: 0.875em;
  --footnote-divider-color: rgba(0, 0, 0, 0.1);
  --footnote-id-color: #4c5064;
  --footnote-id-color-no-occurrences: #4c5064;
  --graph-arrow: #5667a4;
  --graph-attach: #4c5064;
  --graph-circle: #5667a4;
  --graph-line: #5667a4;
  --graph-node: #4c5064;
  --graph-node-focused: #4c5064;
  --graph-node-unresolved: #4c5064;
  --graph-text: #000000;
  --graph-text-color: #000000;
  --graph-unresolved: #4c5064;
  --graphtag: #4c5064;
  --gray-1: #a6a7a8;
  --gray-2: #808080;
  --green: #0f9d58;
  --h1-color: #000000;
  --h2-color: #000000;
  --h3-color: #000000;
  --h4-color: #000000;
  --h5-color: #000000;
  --h6-color: #000000;
  --header-color: #E1B87F;
  --heading-formatting: #4c5064;
  --hr-color: rgba(0, 0, 0, 0.1);
  --icon-color: #4c5064;
  --icon-color-active: #4c5064;
  --icon-color-focused: #000000;
  --icon-color-hover: #4c5064;
  --inline-title-color: #000000;
  --input-date-separator: #4c5064;
  --input-placeholder-color: #4c5064;
  --interactive-accent: #4c5064;
  --interactive-accent-hover: #e6eff4;
  --interactive-accent-rgb: 70, 142, 235;
  --interactive-hover: #e6eff4;
  --interactive-normal: #dddbc7;
  --light-purple: #b77dca;
  --light-yellow: #ffe168;
  --link-color: #4c5064;
  --link-color-hover: #4c5064;
  --link-external-color: #4c5064;
  --link-external-color-hover: #4c5064;
  --link-unresolved-color: #4c5064;
  --list-marker-color: #4c5064;
  --list-marker-color-collapsed: #4c5064;
  --list-marker-color-hover: #4c5064;
  --list-ol-block-color: #4c5064;
  --list-ol-hover: #fbf0d2;
  --list-ol-number-color: #4c5064;
  --list-ul-block-color: #4c5064;
  --list-ul-disc-color: #4c5064;
  --list-ul-hover: #fbf0d2;
  --mark-highlight: #e6eff4;
  --menu-background: #dddbc7;
  --mermaid-active-task-color: #e6eff4;
  --mermaid-font-family: "Comic Sans MS", "Comic Sans", cursive;
  --mermaid-seq-dia-color: #59a0e2;
  --metadata-border-color: rgba(0, 0, 0, 0.1);
  --metadata-divider-color: rgba(0, 0, 0, 0.1);
  --metadata-input-text-color: #000000;
  --metadata-label-text-color: #4c5064;
  --metadata-label-text-color-hover: #4c5064;
  --modal-background: #dddbc7;
  --nav-collapse-icon-color: #4c5064;
  --nav-collapse-icon-color-collapsed: #4c5064;
  --nav-heading-color: #000000;
  --nav-heading-color-collapsed: #4c5064;
  --nav-heading-color-collapsed-hover: #4c5064;
  --nav-heading-color-hover: #000000;
  --nav-item-color: #4c5064;
  --nav-item-color-active: #000000;
  --nav-item-color-highlighted: #4c5064;
  --nav-item-color-hover: #000000;
  --nav-item-color-selected: #000000;
  --nav-tag-color: #4c5064;
  --nav-tag-color-active: #4c5064;
  --nav-tag-color-hover: #4c5064;
  --note-cloze: #000000;
  --note-important: #4c5064;
  --orange: #ff7622;
  --panel-border-color: #dddbc7;
  --pdf-background: #dddbc7;
  --pdf-page-background: #dddbc7;
  --pdf-sidebar-background: #dddbc7;
  --pill-border-color: rgba(0, 0, 0, 0.1);
  --pill-color: #4c5064;
  --pill-color-hover: #000000;
  --pill-color-remove: #4c5064;
  --pill-color-remove-hover: #4c5064;
  --prompt-background: #dddbc7;
  --purple: #a23ef7;
  --raised-background: color-mix(in srgb, #dddbc7 65%, transparent) linear-gradient(#dddbc7, color-mix(in srgb, #dddbc7 65%, transparent));
  --red: #db4437;
  --red-1: #a63b58;
  --ribbon-background: #dddbc7;
  --ribbon-background-collapsed: #dddbc7;
  --search-clear-button-color: #4c5064;
  --search-icon-color: #4c5064;
  --search-result-background: #dddbc7;
  --search-result-file-title-color: #4c5064;
  --search-text: #4c5064;
  --setting-group-heading-color: #000000;
  --setting-items-background: #fbf0d221;
  --setting-items-border-color: rgba(0, 0, 0, 0.1);
  --slider-track-background: rgba(0, 0, 0, 0.1);
  --stag1: #ff0000;
  --stag2: #ff9900;
  --stag3: #00a030;
  --status-bar-background: #dddbc7;
  --status-bar-border-color: rgba(0, 0, 0, 0.1);
  --status-bar-text-color: #4c5064;
  --stickies-color-1: #5667a4;
  --stickies-color-2: #007672;
  --suggestion-background: #dddbc7;
  --tab-background-active: #dddbc7;
  --tab-container-background: #dddbc7;
  --tab-outline-color: rgba(0, 0, 0, 0.1);
  --tab-switcher-background: #dddbc7;
  --tab-switcher-menubar-background: linear-gradient(to top, #dddbc7, transparent);
  --tab-text-color: #4c5064;
  --tab-text-color-active: #4c5064;
  --tab-text-color-focused: #4c5064;
  --tab-text-color-focused-active: #4c5064;
  --tab-text-color-focused-active-current: #000000;
  --tab-text-color-focused-highlighted: #4c5064;
  --table-add-button-border-color: rgba(0, 0, 0, 0.1);
  --table-background-color: #dddbc7;
  --table-background-color-odd: #dddbc7;
  --table-border-color: #4c5064;
  --table-drag-handle-background-active: #4c5064;
  --table-drag-handle-color: #4c5064;
  --table-drag-handle-color-active: #FBF0D0;
  --table-header-border-color: #4c5064;
  --table-header-color: #000000;
  --table-hover-color: #fbf0d28a;
  --table-hover-raw-color: #dddbc7;
  --table-hover-thead-color: #fbf0d28a;
  --table-selection-border-color: #4c5064;
  --table-thead-background-color: #dddbc7;
  --tag-color: #4c5064;
  --tag-color-hover: #4c5064;
  --tag1: #5667a4;
  --tag2: #007672;
  --tag3: #3f73b8;
  --tag4: #608ec1;
  --tag5: #786b54;
  --tag6: #6da1dd;
  --tag7: #a29c90;
  --tag8: #1a8b8d;
  --tag9: #a6a7a8;
  --tape-color: #786b54;
  --text-accent: #4c5064;
  --text-accent-hover: #4c5064;
  --text-blue: #0083bb;
  --text-brown: #855a46;
  --text-error: #4c5064;
  --text-error-hover: #4c5064;
  --text-faint: #4c5064;
  --text-family-inline-code: "Consolas", "Monaco", monospace;
  --text-gray: #37352f99;
  --text-green: #00927f;
  --text-highlight-bg: #FBF0D0;
  --text-muted: #4c5064;
  --text-normal: #000000;
  --text-on-accent: #FBF0D0;
  --text-orange: #d9730d;
  --text-pink: #c40075;
  --text-purple: #5d1fb9;
  --text-red: #ff4343;
  --text-selection: #fbf0d2;
  --text-size-cloze: 0.9375em;
  --text-yellow: #d4a300;
  --theme-color: #4c5064;
  --theme-color-translucent: #4c5064;
  --theme-color-translucent-1: #fbf0d2;
  --titlebar-background: #dddbc7;
  --titlebar-background-focused: rgba(0, 0, 0, 0.1);
  --titlebar-border-color: rgba(0, 0, 0, 0.1);
  --titlebar-text-color: #4c5064;
  --titlebar-text-color-focused: #000000;
  --vault-profile-color: #000000;
  --vault-profile-color-hover: #000000;
  --yellow: #f4b400;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(221, 219, 199);
  color: rgb(0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(221, 219, 199);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(221, 219, 199);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0.1);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(221, 219, 199);
  border-left-color: rgba(0, 0, 0, 0.1);
  color: rgb(0, 0, 0);
}

body div#quartz-root {
  background-color: rgb(221, 219, 199);
  color: rgb(0, 0, 0);
}`,
    typography: `body .page article p > b, b {
  color: rgb(86, 103, 164);
  outline: rgb(86, 103, 164) none 0px;
  text-decoration: rgb(86, 103, 164);
  text-decoration-color: rgb(86, 103, 164);
}

body .page article p > em, em {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > i, i {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > strong, strong {
  color: rgb(86, 103, 164);
  outline: rgb(86, 103, 164) none 0px;
  text-decoration: rgb(86, 103, 164);
  text-decoration-color: rgb(86, 103, 164);
}

body .text-highlight {
  background-color: rgb(230, 239, 244);
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body del {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body p {
  color: rgb(76, 80, 100);
  outline: rgb(76, 80, 100) none 0px;
  text-decoration: rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}`,
    links: `body a.external, footer a {
  color: rgb(76, 80, 100);
  outline: rgb(76, 80, 100) none 0px;
  text-decoration: underline rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(76, 80, 100);
  outline: rgb(76, 80, 100) none 0px;
  text-decoration: rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}

body a.internal.broken {
  color: rgb(76, 80, 100);
  outline: rgb(76, 80, 100) none 0px;
  text-decoration: underline rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}`,
    lists: `body dd {
  color: rgb(0, 0, 0);
}

body dt {
  color: rgb(0, 0, 0);
}

body ol > li {
  color: rgb(0, 0, 0);
}

body ol.overflow {
  background-color: rgb(221, 219, 199);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ul > li {
  color: rgb(0, 0, 0);
}

body ul.overflow {
  background-color: rgb(221, 219, 199);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(76, 80, 100);
  text-decoration: rgb(76, 80, 100);
}

body blockquote {
  background-color: rgba(251, 240, 210, 0.13);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body table {
  color: rgb(0, 0, 0);
  margin-left: 186.391px;
  margin-right: 186.391px;
  margin-top: 0px;
  width: 273.219px;
}

body td {
  border-bottom-color: rgb(76, 80, 100);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(76, 80, 100);
  border-top-color: rgb(76, 80, 100);
  color: rgb(0, 0, 0);
  padding-left: 20px;
  padding-right: 20px;
}

body th {
  border-bottom-color: rgb(76, 80, 100);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(76, 80, 100);
  border-top-color: rgb(76, 80, 100);
  color: rgb(0, 0, 0);
  padding-left: 20px;
  padding-right: 20px;
}

body thead {
  background-color: rgb(221, 219, 199);
}`,
    code: `body code {
  border-bottom-color: rgb(76, 80, 100);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(76, 80, 100);
  border-top-color: rgb(76, 80, 100);
  color: rgb(76, 80, 100);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-right: 30px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(251, 240, 210, 0.13);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(251, 240, 210, 0.13);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(76, 80, 100);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body pre > code > [data-line] {
  border-left-color: rgb(244, 180, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(244, 180, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(244, 180, 0);
  border-left-color: rgb(244, 180, 0);
  border-right-color: rgb(244, 180, 0);
  border-top-color: rgb(244, 180, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgba(251, 240, 210, 0.13);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 6px;
  padding-left: 22px;
  padding-right: 30px;
  padding-top: 6px;
}

body pre:has(> code) {
  background-color: rgba(251, 240, 210, 0.13);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 6px;
  padding-left: 22px;
  padding-right: 30px;
  padding-top: 6px;
}`,
    images: `body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body figcaption {
  color: rgb(0, 0, 0);
  text-align: justify;
}

body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  text-align: justify;
}

body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `body .file-embed {
  background-color: rgba(251, 240, 210, 0.13);
  border-bottom-color: rgb(76, 80, 100);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(76, 80, 100);
  border-top-color: rgb(76, 80, 100);
}

body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(76, 80, 100);
  text-decoration: line-through rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}

body input[type=checkbox] {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  margin-bottom: 1px;
  margin-right: 5px;
  transition: 0.5s;
}

body li.task-list-item[data-task='!'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}

body li.task-list-item[data-task='*'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}

body li.task-list-item[data-task='-'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}

body li.task-list-item[data-task='/'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}

body li.task-list-item[data-task='>'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}

body li.task-list-item[data-task='?'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}

body li.task-list-item[data-task='I'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}

body li.task-list-item[data-task='S'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}

body li.task-list-item[data-task='b'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}

body li.task-list-item[data-task='c'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}

body li.task-list-item[data-task='d'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}

body li.task-list-item[data-task='f'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}

body li.task-list-item[data-task='i'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}

body li.task-list-item[data-task='k'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}

body li.task-list-item[data-task='l'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}

body li.task-list-item[data-task='p'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}

body li.task-list-item[data-task='u'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}

body li.task-list-item[data-task='w'] {
  color: rgb(76, 80, 100);
  text-decoration: line-through rgb(76, 80, 100);
  text-decoration-color: rgb(76, 80, 100);
}`,
    search: `body .search > .search-button {
  background-color: rgb(251, 240, 210);
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space {
  background-color: rgb(221, 219, 199);
}

body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(251, 240, 210);
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(221, 219, 199);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(251, 240, 210);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(251, 240, 210);
  color: rgb(0, 0, 0);
}

body a.internal.tag-link::before {
  color: rgb(76, 80, 100);
}

body h1 {
  color: rgb(0, 0, 0);
}

body h2 {
  color: rgb(0, 0, 0);
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 0, 0);
}

body h3 {
  color: rgb(0, 0, 0);
}

body h4 {
  color: rgb(0, 0, 0);
}

body h5 {
  color: rgb(0, 0, 0);
}

body h6 {
  color: rgb(0, 0, 0);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(221, 219, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 219, 199);
}

body ::-webkit-scrollbar-corner {
  background: rgb(221, 219, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 219, 199);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(221, 219, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 219, 199);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(221, 219, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 219, 199);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(221, 219, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 219, 199);
}

body ::-webkit-scrollbar-track {
  background: rgb(221, 219, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 219, 199);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 0, 0);
  font-weight: 600;
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
  font-weight: 600;
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(76, 80, 100);
  text-decoration: rgb(76, 80, 100);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(0, 0, 0);
}`,
    toc: `body li.depth-0 {
  font-weight: 600;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(76, 80, 100);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(76, 80, 100);
  border-top-color: rgb(76, 80, 100);
  color: rgb(76, 80, 100);
}`,
    footer: `body footer {
  background-color: rgb(221, 219, 199);
  border-bottom-color: rgb(221, 219, 199);
  border-bottom-width: 1px;
  border-left-color: rgb(221, 219, 199);
  border-right-color: rgb(221, 219, 199);
  border-right-width: 1px;
  border-top-color: rgb(221, 219, 199);
  color: rgb(76, 80, 100);
}

body footer ul li a {
  color: rgb(76, 80, 100);
  text-decoration: rgb(76, 80, 100);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(76, 80, 100);
  text-decoration: rgb(76, 80, 100);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(76, 80, 100);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body li.section-li > .section .meta {
  color: rgb(76, 80, 100);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(76, 80, 100);
  text-decoration: rgb(76, 80, 100);
}

body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(76, 80, 100);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(76, 80, 100);
  border-top-color: rgb(76, 80, 100);
  color: rgb(76, 80, 100);
}

body .darkmode svg {
  color: rgb(76, 80, 100);
  stroke: rgb(76, 80, 100);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(76, 80, 100);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(76, 80, 100);
  border-top-color: rgb(76, 80, 100);
  color: rgb(76, 80, 100);
}

body .breadcrumb-element p {
  color: rgb(76, 80, 100);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-left-color: rgba(0, 0, 0, 0.1);
  border-right-color: rgba(0, 0, 0, 0.1);
  border-top-color: rgba(0, 0, 0, 0.1);
  color: rgb(76, 80, 100);
}

body .metadata-properties {
  border-bottom-color: rgb(76, 80, 100);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(76, 80, 100);
  border-top-color: rgb(76, 80, 100);
  color: rgb(76, 80, 100);
}

body .navigation-progress {
  background-color: rgb(221, 219, 199);
}

body .page-header h2.page-title {
  color: rgb(0, 0, 0);
}

body abbr {
  color: rgb(0, 0, 0);
  text-decoration: underline dotted rgb(0, 0, 0);
}

body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body input[type=text] {
  border-bottom-color: rgb(76, 80, 100);
  border-left-color: rgb(76, 80, 100);
  border-right-color: rgb(76, 80, 100);
  border-top-color: rgb(76, 80, 100);
  color: rgb(76, 80, 100);
}

body kbd {
  background-color: rgba(251, 240, 210, 0.13);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body sub {
  color: rgb(0, 0, 0);
}

body summary {
  color: rgb(0, 0, 0);
}

body sup {
  color: rgb(0, 0, 0);
}`,
  },
};
