import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sqdthone",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cascadia-code", "source-sans-pro"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: rgb(98, 119, 188);
  --background-modifier-error: 346, 50%, 36%;
  --background-modifier-error-hover: 346, 50%, 36%;
  --background-modifier-success: 108, 40%, 42%;
  --background-primary: rgb(38, 34, 38);
  --background-primary-alt: rgb(49, 43, 49);
  --background-secondary: rgb(49, 43, 49);
  --background-secondary-alt: rgb(59, 53, 59);
  --bases-cards-background: rgb(38, 34, 38);
  --bases-cards-cover-background: rgb(49, 43, 49);
  --bases-cards-shadow: 0 0 0 1px rgb(98, 119, 188);
  --bases-embed-border-color: rgb(98, 119, 188);
  --bases-group-heading-property-color: rgb(59, 176, 137);
  --bases-table-border-color: rgb(98, 119, 188);
  --bases-table-cell-background-active: rgb(38, 34, 38);
  --bases-table-cell-background-disabled: rgb(49, 43, 49);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(98, 119, 188);
  --bases-table-group-background: rgb(49, 43, 49);
  --bases-table-header-background: rgb(38, 34, 38);
  --bases-table-header-color: rgb(59, 176, 137);
  --bases-table-summary-background: rgb(38, 34, 38);
  --blockquote-border-color: rgb(98, 119, 188);
  --canvas-background: rgb(38, 34, 38);
  --canvas-card-label-color: rgb(79, 196, 173);
  --caret-color: rgb(48, 145, 113);
  --checkbox-border-color: rgb(79, 196, 173);
  --checkbox-border-color-hover: rgb(59, 176, 137);
  --checkbox-color: rgb(98, 119, 188);
  --checkbox-marker-color: rgb(38, 34, 38);
  --checklist-done-color: rgb(59, 176, 137);
  --code-background: rgb(49, 43, 49);
  --code-border-color: rgb(98, 119, 188);
  --code-comment: rgb(79, 196, 173);
  --code-function: 45, 50%, 44%;
  --code-important: 21, 50%, 52%;
  --code-keyword: 316, 50%, 80%;
  --code-normal: rgb(48, 145, 113);
  --code-operator: 346, 50%, 36%;
  --code-property: 189, 40%, 50%;
  --code-punctuation: rgb(59, 176, 137);
  --code-string: 108, 40%, 42%;
  --code-tag: 346, 50%, 36%;
  --code-value: 270, 40%, 42%;
  --collapse-icon-color: rgb(79, 196, 173);
  --color-alternate: 316, 50%, 80%;
  --color-base-0: 300,  6%, 10%;
  --color-base-1: 300,  6%, 14%;
  --color-base-2: 300,  6%, 18%;
  --color-base-3: 300,  6%, 22%;
  --color-base-4: 300,  6%, 26%;
  --color-base-5: 300,  6%, 30%;
  --color-black: 300,  6%, 22%;
  --color-blue: 226, 40%, 56%;
  --color-caution: 45, 50%, 44%;
  --color-checklist-empty: 346, 50%, 36%;
  --color-checklist-empty-border: 346, 50%, 36%;
  --color-checklist-full: 108, 40%, 42%;
  --color-checklist-full-border: 108, 40%, 42%;
  --color-code-comment: 168, 50%, 54%;
  --color-code-function: 45, 50%, 44%;
  --color-code-important: 21, 50%, 52%;
  --color-code-keyword: 316, 50%, 80%;
  --color-code-normal: 160, 50%, 46%;
  --color-code-property: 226, 40%, 56%;
  --color-code-punctuation: 160, 50%, 46%;
  --color-code-string: 108, 40%, 42%;
  --color-code-tag: 346, 50%, 36%;
  --color-code-value: 270, 40%, 42%;
  --color-confirmed: 108, 40%, 42%;
  --color-content: 160, 50%, 46%;
  --color-cyan: 189, 40%, 50%;
  --color-green: 108, 40%, 42%;
  --color-horizontal-rule: 316, 50%, 80%;
  --color-hovered: 270, 40%, 42%;
  --color-interactable: 226, 40%, 56%;
  --color-list-bullets: 316, 50%, 80%;
  --color-list-indentation-indicator: magenta;
  --color-list-indentation-indicator-hover: 316, 50%, 80%;
  --color-orange: 21, 50%, 52%;
  --color-pink: 316, 50%, 80%;
  --color-purple: 270, 40%, 42%;
  --color-red: 346, 50%, 36%;
  --color-selected: 21, 50%, 52%;
  --color-stop: 346, 50%, 36%;
  --color-tag: 45, 50%, 44%;
  --color-tag-hover: 45, 50%, 44%;
  --color-teal: 160, 50%, 46%;
  --color-text-bold: 189, 40%, 50%;
  --color-text-faint: 168, 50%, 54%;
  --color-text-h1: 21, 50%, 52%;
  --color-text-h2: 21, 50%, 52%;
  --color-text-h3: 226, 40%, 44%;
  --color-text-h4: 226, 40%, 44%;
  --color-text-h5: 226, 40%, 44%;
  --color-text-h6: 226, 40%, 44%;
  --color-text-highlight: 15, 20%, 84%;
  --color-text-highlight-active-background: 21, 50%, 52%;
  --color-text-highlight-background: 45, 50%, 44%;
  --color-text-italic: 108, 40%, 42%;
  --color-text-muted: 160, 50%, 46%;
  --color-text-normal: 160, 50%, 38%;
  --color-text-strikethrough: 346, 50%, 36%;
  --color-text-title: 316, 50%, 80%;
  --color-white: 15, 20%, 84%;
  --color-yellow: 45, 50%, 44%;
  --crimson0: 346, 50%, 40%;
  --crimson1: 346, 50%, 36%;
  --crimson2: 346, 50%, 32%;
  --crimson3: 346, 50%, 28%;
  --crimson4: 346, 50%, 24%;
  --crimson5: 346, 50%, 20%;
  --day0: 15, 20%, 96%;
  --day1: 15, 20%, 92%;
  --day2: 15, 20%, 88%;
  --day3: 15, 20%, 84%;
  --day4: 15, 20%, 80%;
  --day5: 15, 20%, 76%;
  --default-font: 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif;
  --divider-color: rgb(98, 119, 188);
  --divider-color-hover: rgb(98, 119, 188);
  --embed-block-shadow-hover: 0 0 0 1px rgb(98, 119, 188), inset 0 0 0 1px rgb(98, 119, 188);
  --embed-border-start: 2px solid rgb(98, 119, 188);
  --file-header-background: rgb(38, 34, 38);
  --file-header-background-focused: rgb(38, 34, 38);
  --file-header-font: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: rgb(48, 145, 113);
  --font-headings: 'Tahoma', serif;
  --font-interface: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-title: 'Jomhuria', 'Source Sans Pro', sans-serif;
  --footnote-divider-color: rgb(98, 119, 188);
  --footnote-id-color: rgb(59, 176, 137);
  --footnote-id-color-no-occurrences: rgb(79, 196, 173);
  --frost0: 226, 40%, 44%;
  --frost1: 226, 40%, 48%;
  --frost2: 226, 40%, 52%;
  --frost3: 226, 40%, 56%;
  --frost4: 226, 40%, 60%;
  --frost5: 226, 40%, 64%;
  --graph-node: rgb(59, 176, 137);
  --graph-node-attachment: 45, 50%, 44%;
  --graph-node-tag: 108, 40%, 42%;
  --graph-node-unresolved: rgb(79, 196, 173);
  --graph-text: rgb(48, 145, 113);
  --green0: 108, 40%, 34%;
  --green1: 108, 40%, 38%;
  --green2: 108, 40%, 42%;
  --green3: 108, 40%, 46%;
  --green4: 108, 40%, 50%;
  --green5: 108, 40%, 54%;
  --heading-formatting: rgb(79, 196, 173);
  --hr-color: rgb(98, 119, 188);
  --icon-color: rgb(59, 176, 137);
  --icon-color-focused: rgb(48, 145, 113);
  --icon-color-hover: rgb(59, 176, 137);
  --indigo0: 270, 40%, 30%;
  --indigo1: 270, 40%, 34%;
  --indigo2: 270, 40%, 38%;
  --indigo3: 270, 40%, 42%;
  --indigo4: 270, 40%, 46%;
  --indigo5: 270, 40%, 50%;
  --input-date-separator: rgb(79, 196, 173);
  --input-placeholder-color: rgb(79, 196, 173);
  --interactive-accent: rgb(98, 119, 188);
  --letterspacing-text-headers: 1.2px;
  --letterspacing-text-p: 1px;
  --link-color-hover: rgb(107, 64, 150);
  --link-external-color-hover: rgb(107, 64, 150);
  --list-marker-color: rgb(79, 196, 173);
  --list-marker-color-hover: rgb(59, 176, 137);
  --menu-background: rgb(49, 43, 49);
  --metadata-border-color: rgb(98, 119, 188);
  --metadata-divider-color: rgb(98, 119, 188);
  --metadata-input-font: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(48, 145, 113);
  --metadata-label-font: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(59, 176, 137);
  --metadata-label-text-color-hover: rgb(59, 176, 137);
  --modal-background: rgb(38, 34, 38);
  --moonstone0: 189, 40%, 34%;
  --moonstone1: 189, 40%, 38%;
  --moonstone2: 189, 40%, 42%;
  --moonstone3: 189, 40%, 46%;
  --moonstone4: 189, 40%, 50%;
  --moonstone5: 189, 40%, 54%;
  --nav-collapse-icon-color: rgb(79, 196, 173);
  --nav-collapse-icon-color-collapsed: rgb(79, 196, 173);
  --nav-heading-color: rgb(48, 145, 113);
  --nav-heading-color-collapsed: rgb(79, 196, 173);
  --nav-heading-color-collapsed-hover: rgb(59, 176, 137);
  --nav-heading-color-hover: rgb(48, 145, 113);
  --nav-item-color: rgb(59, 176, 137);
  --nav-item-color-active: rgb(48, 145, 113);
  --nav-item-color-hover: rgb(48, 145, 113);
  --nav-item-color-selected: rgb(48, 145, 113);
  --nav-tag-color: rgb(79, 196, 173);
  --nav-tag-color-active: rgb(59, 176, 137);
  --nav-tag-color-hover: rgb(59, 176, 137);
  --night0: 300,  6%, 10%;
  --night1: 300,  6%, 14%;
  --night2: 300,  6%, 18%;
  --night3: 300,  6%, 22%;
  --night4: 300,  6%, 26%;
  --night5: 300,  6%, 30%;
  --pdf-background: rgb(38, 34, 38);
  --pdf-page-background: rgb(38, 34, 38);
  --pdf-shadow: 0 0 0 1px rgb(98, 119, 188);
  --pdf-sidebar-background: rgb(38, 34, 38);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(98, 119, 188);
  --peach0: 22, 50%, 40%;
  --peach1: 22, 50%, 44%;
  --peach2: 21, 50%, 48%;
  --peach3: 21, 50%, 52%;
  --peach4: 21, 50%, 56%;
  --peach5: 22, 50%, 60%;
  --pill-border-color: rgb(98, 119, 188);
  --pill-color: rgb(59, 176, 137);
  --pill-color-hover: rgb(48, 145, 113);
  --pill-color-remove: rgb(79, 196, 173);
  --pink0: 316, 50%, 60%;
  --pink1: 316, 50%, 64%;
  --pink2: 316, 50%, 68%;
  --pink3: 316, 50%, 72%;
  --pink4: 315, 50%, 76%;
  --pink5: 316, 50%, 80%;
  --prompt-background: rgb(38, 34, 38);
  --ribbon-background: rgb(49, 43, 49);
  --ribbon-background-collapsed: rgb(38, 34, 38);
  --scrollbar-active-thumb-bg: rgb(107, 64, 150);
  --search-clear-button-color: rgb(59, 176, 137);
  --search-icon-color: rgb(59, 176, 137);
  --search-result-background: rgb(38, 34, 38);
  --setting-group-heading-color: rgb(48, 145, 113);
  --setting-items-background: rgb(49, 43, 49);
  --setting-items-border-color: rgb(98, 119, 188);
  --size-icon: 15px;
  --size-text-h1: 3em;
  --size-text-h2: 30px;
  --size-text-h3: 27px;
  --size-text-h4: 24px;
  --size-text-h5: 21px;
  --size-text-h6: 18px;
  --size-text-p: 15px;
  --size-text-title: 5em;
  --slider-track-background: rgb(98, 119, 188);
  --status-bar-background: rgb(49, 43, 49);
  --status-bar-border-color: rgb(98, 119, 188);
  --status-bar-text-color: rgb(59, 176, 137);
  --suggestion-background: rgb(38, 34, 38);
  --sync-avatar-color-1: 346, 50%, 36%;
  --sync-avatar-color-2: 21, 50%, 52%;
  --sync-avatar-color-3: 45, 50%, 44%;
  --sync-avatar-color-4: 108, 40%, 42%;
  --sync-avatar-color-5: 189, 40%, 50%;
  --sync-avatar-color-6: 226, 40%, 56%;
  --sync-avatar-color-7: 270, 40%, 42%;
  --sync-avatar-color-8: 316, 50%, 80%;
  --tab-background-active: rgb(38, 34, 38);
  --tab-container-background: rgb(49, 43, 49);
  --tab-outline-color: rgb(98, 119, 188);
  --tab-switcher-background: rgb(49, 43, 49);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(49, 43, 49), transparent);
  --tab-text-color: rgb(79, 196, 173);
  --tab-text-color-active: rgb(107, 64, 150);
  --tab-text-color-focused: rgb(59, 176, 137);
  --tab-text-color-focused-active: rgb(59, 176, 137);
  --tab-text-color-focused-active-current: rgb(194, 114, 71);
  --table-add-button-border-color: rgb(98, 119, 188);
  --table-border-color: rgb(98, 119, 188);
  --table-drag-handle-background-active: rgb(98, 119, 188);
  --table-drag-handle-color: rgb(79, 196, 173);
  --table-header-border-color: rgb(98, 119, 188);
  --table-header-color: rgb(48, 145, 113);
  --table-selection-border-color: rgb(98, 119, 188);
  --teal0: 160, 50%, 34%;
  --teal1: 160, 50%, 38%;
  --teal2: 160, 50%, 42%;
  --teal3: 160, 50%, 46%;
  --teal4: 160, 50%, 50%;
  --teal5: 168, 50%, 54%;
  --text-accent-hover: rgb(107, 64, 150);
  --text-error: 346, 50%, 36%;
  --text-faint: rgb(79, 196, 173);
  --text-highlight-bg: rgb(168, 140, 56);
  --text-highlight-bg-active: rgb(194, 114, 71);
  --text-muted: rgb(59, 176, 137);
  --text-normal: rgb(48, 145, 113);
  --text-selection: rgb(222, 210, 206);
  --text-success: 108, 40%, 42%;
  --text-warning: 21, 50%, 52%;
  --titlebar-background: rgb(59, 53, 59);
  --titlebar-background-focused: rgb(49, 43, 49);
  --titlebar-border-color: rgb(98, 119, 188);
  --titlebar-text-color: rgb(59, 176, 137);
  --titlebar-text-color-focused: rgb(48, 145, 113);
  --vault-profile-color: rgb(48, 145, 113);
  --vault-profile-color-hover: rgb(48, 145, 113);
  --weight-bold: 700;
  --weight-extrabold: 800;
  --weight-extralight: 200;
  --weight-light: 300;
  --weight-maxbold: 900;
  --weight-medium: 500;
  --weight-normal: 400;
  --weight-semibold: 600;
  --weight-thin: 100;
  --yellow0: 45, 50%, 44%;
  --yellow1: 45, 50%, 48%;
  --yellow2: 45, 50%, 52%;
  --yellow3: 45, 50%, 56%;
  --yellow4: 45, 50%, 60%;
  --yellow5: 45, 50%, 64%;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(49, 43, 49);
  color: rgb(48, 145, 113);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(38, 34, 38);
  color: rgb(48, 145, 113);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(49, 43, 49);
  color: rgb(48, 145, 113);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(98, 119, 188);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(49, 43, 49);
  border-left-color: rgb(98, 119, 188);
  color: rgb(48, 145, 113);
}

body div#quartz-root {
  background-color: rgb(38, 34, 38);
  color: rgb(48, 145, 113);
}`,
    typography: `body .page article p > b, b {
  color: rgb(77, 163, 179);
  outline: rgb(77, 163, 179) none 0px;
  text-decoration: rgb(77, 163, 179);
  text-decoration-color: rgb(77, 163, 179);
}

body .page article p > em, em {
  color: rgb(81, 150, 64);
  outline: rgb(81, 150, 64) none 0px;
  text-decoration: rgb(81, 150, 64);
  text-decoration-color: rgb(81, 150, 64);
}

body .page article p > i, i {
  color: rgb(81, 150, 64);
  outline: rgb(81, 150, 64) none 0px;
  text-decoration: rgb(81, 150, 64);
  text-decoration-color: rgb(81, 150, 64);
}

body .page article p > strong, strong {
  color: rgb(77, 163, 179);
  outline: rgb(77, 163, 179) none 0px;
  text-decoration: rgb(77, 163, 179);
  text-decoration-color: rgb(77, 163, 179);
}

body .text-highlight {
  background-color: rgb(194, 114, 71);
  color: rgb(222, 210, 206);
  outline: rgb(222, 210, 206) none 0px;
  text-decoration: rgb(222, 210, 206);
  text-decoration-color: rgb(222, 210, 206);
}

body del {
  color: rgb(138, 46, 67);
  outline: rgb(138, 46, 67) none 0px;
  text-decoration: line-through rgb(138, 46, 67);
  text-decoration-color: rgb(138, 46, 67);
}

body p {
  color: rgb(59, 176, 137);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(59, 176, 137) none 0px;
  text-decoration: rgb(59, 176, 137);
  text-decoration-color: rgb(59, 176, 137);
}`,
    links: `body a.external, footer a {
  color: rgb(230, 179, 216);
  outline: rgb(230, 179, 216) none 0px;
  text-decoration: underline rgb(230, 179, 216);
  text-decoration-color: rgb(230, 179, 216);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(230, 179, 216);
  outline: rgb(230, 179, 216) none 0px;
  text-decoration: underline rgb(230, 179, 216);
  text-decoration-color: rgb(230, 179, 216);
}

body a.internal.broken {
  color: rgb(138, 46, 67);
  outline: rgb(138, 46, 67) none 0px;
  text-decoration: underline rgb(138, 46, 67);
  text-decoration-color: rgb(138, 46, 67);
}`,
    lists: `body dd {
  color: rgb(48, 145, 113);
}

body dt {
  color: rgb(48, 145, 113);
}

body ol > li {
  color: rgb(48, 145, 113);
}

body ol.overflow {
  background-color: rgb(38, 34, 38);
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

body ul > li {
  color: rgb(48, 145, 113);
}

body ul.overflow {
  background-color: rgb(38, 34, 38);
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(79, 196, 173);
  text-decoration: rgb(79, 196, 173);
}

body blockquote {
  background-color: rgba(168, 140, 56, 0.1);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

body table {
  border-bottom-color: rgb(168, 140, 56);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgb(168, 140, 56);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgb(168, 140, 56);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgb(168, 140, 56);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(48, 145, 113);
  width: 277.219px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(49, 43, 49);
}

body td {
  border-bottom-color: rgb(59, 53, 59);
  border-bottom-width: 0px;
  border-left-color: rgb(48, 145, 113);
  border-left-width: 0px;
  border-right-color: rgb(59, 53, 59);
  border-top-color: rgb(59, 53, 59);
  border-top-width: 0px;
  color: rgb(48, 145, 113);
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
}

body th {
  background-color: rgb(59, 53, 59);
  border-bottom-color: rgb(59, 176, 137);
  border-left-color: rgb(48, 145, 113);
  border-left-width: 0px;
  border-right-color: rgb(59, 176, 137);
  border-top-color: rgb(98, 119, 188);
  border-top-width: 0px;
  color: rgb(48, 145, 113);
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
}

body thead {
  background-color: rgb(59, 53, 59);
  border-bottom-color: rgb(59, 176, 137);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(59, 176, 137);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(48, 145, 113);
}

body tr {
  border-bottom-color: rgb(59, 176, 137);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(59, 176, 137);
  border-top-color: rgb(48, 145, 113);
}`,
    code: `body code {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
  color: rgb(48, 145, 113);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
  color: rgb(48, 145, 113);
}

body pre > code > [data-line] {
  border-left-color: rgb(48, 145, 113);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(48, 145, 113);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

body pre > code, pre:has(> code) {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
}

body pre:has(> code) {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
}`,
    images: `body audio {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

body figcaption {
  color: rgb(48, 145, 113);
}

body figure {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

body img {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

body video {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}`,
    embeds: `body .file-embed {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(59, 176, 137);
  border-left-color: rgb(59, 176, 137);
  border-right-color: rgb(59, 176, 137);
  border-top-color: rgb(59, 176, 137);
}

body .footnotes {
  border-top-color: rgb(48, 145, 113);
  color: rgb(48, 145, 113);
}

body .transclude {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(59, 176, 137);
  text-decoration: line-through rgb(59, 176, 137);
  text-decoration-color: rgb(59, 176, 137);
}

body input[type=checkbox] {
  border-bottom-color: rgb(230, 179, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(230, 179, 216);
  border-right-color: rgb(230, 179, 216);
  border-top-color: rgb(230, 179, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: 0.3s;
}

body li.task-list-item[data-task='!'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

body li.task-list-item[data-task='*'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

body li.task-list-item[data-task='-'] {
  color: rgb(79, 196, 173);
  text-decoration: line-through 1px rgb(79, 196, 173);
  text-decoration-color: rgb(79, 196, 173);
}

body li.task-list-item[data-task='/'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

body li.task-list-item[data-task='>'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

body li.task-list-item[data-task='?'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

body li.task-list-item[data-task='I'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

body li.task-list-item[data-task='S'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

body li.task-list-item[data-task='b'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

body li.task-list-item[data-task='c'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

body li.task-list-item[data-task='d'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

body li.task-list-item[data-task='f'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

body li.task-list-item[data-task='i'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

body li.task-list-item[data-task='k'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

body li.task-list-item[data-task='l'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

body li.task-list-item[data-task='p'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

body li.task-list-item[data-task='u'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

body li.task-list-item[data-task='w'] {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}`,
    search: `body .search > .search-button {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
  color: rgb(48, 145, 113);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(59, 53, 59);
}

body .search > .search-container > .search-space > * {
  color: rgb(48, 145, 113);
  outline: rgb(48, 145, 113) none 0px;
  text-decoration: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(48, 145, 113);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(48, 145, 113);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(48, 145, 113);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(49, 43, 49);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
  color: rgb(48, 145, 113);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(48, 145, 113);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(168, 140, 56);
  border-bottom-color: rgb(38, 34, 38);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

body a.internal.tag-link::before {
  color: rgb(38, 34, 38);
}

body h1 {
  color: rgb(194, 114, 71);
  font-family: Tahoma, serif;
  text-shadow: rgba(0, 0, 0, 0.05) 1px 1px 0px, rgba(0, 0, 0, 0.05) 2px 2px 0px, rgba(0, 0, 0, 0.05) 3px 3px 0px, rgba(0, 0, 0, 0.05) 4px 4px 0px, rgba(0, 0, 0, 0.05) 5px 5px 0px, rgba(0, 0, 0, 0.05) 6px 6px 0px, rgba(0, 0, 0, 0.05) 7px 7px 0px, rgba(0, 0, 0, 0.05) 8px 8px 0px, rgba(0, 0, 0, 0.05) 9px 9px 0px;
}

body h2 {
  color: rgb(194, 114, 71);
  font-family: Tahoma, serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(230, 179, 216);
  text-shadow: rgba(0, 0, 0, 0.05) 1px 1px 0px, rgba(0, 0, 0, 0.05) 2px 2px 0px, rgba(0, 0, 0, 0.05) 3px 3px 0px, rgba(0, 0, 0, 0.05) 4px 4px 0px, rgba(0, 0, 0, 0.05) 5px 5px 0px, rgba(0, 0, 0, 0.05) 6px 6px 0px, rgba(0, 0, 0, 0.05) 7px 7px 0px, rgba(0, 0, 0, 0.05) 8px 8px 0px, rgba(0, 0, 0, 0.05) 9px 9px 0px;
}

body h3 {
  color: rgb(67, 88, 157);
  font-family: Tahoma, serif;
}

body h4 {
  color: rgb(67, 88, 157);
  font-family: Tahoma, serif;
}

body h5 {
  color: rgb(67, 88, 157);
  font-family: Tahoma, serif;
}

body h6 {
  color: rgb(67, 88, 157);
  font-family: Tahoma, serif;
}

body hr {
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(230, 179, 216);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(38, 34, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 38);
}

body ::-webkit-scrollbar-corner {
  background: rgb(38, 34, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 38);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(38, 34, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 38);
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(38, 34, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 38);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(38, 34, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 38);
}

body ::-webkit-scrollbar-track {
  background: rgb(38, 34, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 34, 38);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(59, 176, 137);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 900;
  text-decoration: rgb(59, 176, 137);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(59, 176, 137);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 900;
  text-decoration: rgb(59, 176, 137);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(59, 176, 137);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(59, 176, 137);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(27, 24, 27);
  border-bottom-color: rgb(49, 43, 49);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(49, 43, 49);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(49, 43, 49);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(49, 43, 49);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(194, 114, 71);
}`,
    toc: `body li.depth-0 {
  font-weight: 900;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(98, 119, 188);
}`,
    footer: `body footer {
  background-color: rgb(59, 53, 59);
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
  color: rgb(48, 145, 113);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(48, 145, 113);
  text-decoration: rgb(48, 145, 113);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(48, 145, 113);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(48, 145, 113);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(59, 176, 137);
  text-decoration: rgb(59, 176, 137);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(59, 176, 137);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 3px;
}

body li.section-li > .section .meta {
  color: rgb(59, 176, 137);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(59, 176, 137);
  text-decoration: rgb(59, 176, 137);
}

body ul.section-ul {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(98, 119, 188);
}

body .darkmode svg {
  color: rgb(98, 119, 188);
  stroke: rgb(98, 119, 188);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(79, 196, 173);
  border-left-color: rgb(79, 196, 173);
  border-right-color: rgb(79, 196, 173);
  border-top-color: rgb(79, 196, 173);
  color: rgb(79, 196, 173);
}

body .breadcrumb-element p {
  color: rgb(79, 196, 173);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
  color: rgb(48, 145, 113);
}

body .metadata {
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
  color: rgb(59, 176, 137);
}

body .metadata-properties {
  border-bottom-color: rgb(59, 176, 137);
  border-left-color: rgb(59, 176, 137);
  border-right-color: rgb(59, 176, 137);
  border-top-color: rgb(59, 176, 137);
  color: rgb(59, 176, 137);
}

body .navigation-progress {
  background-color: rgb(59, 53, 59);
}

body .page-header h2.page-title {
  color: rgb(48, 145, 113);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(48, 145, 113);
  text-decoration: underline dotted rgb(48, 145, 113);
}

body details {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

body input[type=text] {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(59, 176, 137);
  border-left-color: rgb(59, 176, 137);
  border-right-color: rgb(59, 176, 137);
  border-top-color: rgb(59, 176, 137);
  color: rgb(59, 176, 137);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
  color: rgb(48, 145, 113);
}

body progress {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

body sub {
  color: rgb(48, 145, 113);
}

body summary {
  color: rgb(48, 145, 113);
}

body sup {
  color: rgb(48, 145, 113);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: rgb(84, 106, 182);
  --background-modifier-error: 346, 50%, 32%;
  --background-modifier-error-hover: 346, 50%, 32%;
  --background-modifier-success: 108, 40%, 42%;
  --background-primary: rgb(239, 233, 231);
  --background-primary-alt: rgb(231, 221, 218);
  --background-secondary: rgb(231, 221, 218);
  --background-secondary-alt: rgb(222, 210, 206);
  --bases-cards-background: rgb(239, 233, 231);
  --bases-cards-cover-background: rgb(231, 221, 218);
  --bases-cards-shadow: 0 0 0 1px rgb(84, 106, 182);
  --bases-embed-border-color: rgb(84, 106, 182);
  --bases-group-heading-property-color: rgb(59, 53, 59);
  --bases-table-border-color: rgb(84, 106, 182);
  --bases-table-cell-background-active: rgb(239, 233, 231);
  --bases-table-cell-background-disabled: rgb(231, 221, 218);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(84, 106, 182);
  --bases-table-group-background: rgb(231, 221, 218);
  --bases-table-header-background: rgb(239, 233, 231);
  --bases-table-header-color: rgb(59, 53, 59);
  --bases-table-summary-background: rgb(239, 233, 231);
  --blockquote-border-color: rgb(84, 106, 182);
  --blur-background: color-mix(in srgb, rgb(239, 233, 231) 65%, transparent) linear-gradient(rgb(239, 233, 231), color-mix(in srgb, rgb(239, 233, 231) 65%, transparent));
  --canvas-background: rgb(239, 233, 231);
  --canvas-card-label-color: rgb(81, 72, 81);
  --caret-color: rgb(38, 34, 38);
  --checkbox-border-color: rgb(81, 72, 81);
  --checkbox-border-color-hover: rgb(59, 53, 59);
  --checkbox-color: rgb(84, 106, 182);
  --checkbox-color-hover: rgb(97, 58, 136);
  --checkbox-marker-color: rgb(239, 233, 231);
  --checklist-done-color: rgb(59, 53, 59);
  --code-background: rgb(231, 221, 218);
  --code-border-color: rgb(84, 106, 182);
  --code-comment: rgb(81, 72, 81);
  --code-function: 45, 50%, 44%;
  --code-important: 22, 50%, 40%;
  --code-keyword: 316, 50%, 68%;
  --code-normal: rgb(38, 34, 38);
  --code-operator: 346, 50%, 32%;
  --code-property: 189, 40%, 42%;
  --code-punctuation: rgb(59, 53, 59);
  --code-string: 108, 40%, 42%;
  --code-tag: 346, 50%, 32%;
  --code-value: 270, 40%, 38%;
  --collapse-icon-color: rgb(81, 72, 81);
  --collapse-icon-color-collapsed: rgb(84, 106, 182);
  --color-alternate: 316, 50%, 68%;
  --color-base-0: 15, 20%, 96%;
  --color-base-1: 15, 20%, 92%;
  --color-base-2: 15, 20%, 88%;
  --color-base-3: 15, 20%, 84%;
  --color-base-4: 15, 20%, 80%;
  --color-base-5: 15, 20%, 76%;
  --color-black: 300,  6%, 18%;
  --color-blue: 226, 40%, 52%;
  --color-caution: 45, 50%, 44%;
  --color-checklist-empty: 346, 50%, 32%;
  --color-checklist-empty-border: 346, 50%, 32%;
  --color-checklist-full: 108, 40%, 42%;
  --color-checklist-full-border: 108, 40%, 42%;
  --color-code-comment: 300,  6%, 30%;
  --color-code-function: 45, 50%, 44%;
  --color-code-important: 22, 50%, 40%;
  --color-code-keyword: 316, 50%, 68%;
  --color-code-normal: 300,  6%, 22%;
  --color-code-property: 226, 40%, 52%;
  --color-code-punctuation: 300,  6%, 22%;
  --color-code-string: 108, 40%, 42%;
  --color-code-tag: 346, 50%, 32%;
  --color-code-value: 270, 40%, 38%;
  --color-confirmed: 108, 40%, 42%;
  --color-content: 160, 50%, 38%;
  --color-cyan: 189, 40%, 42%;
  --color-green: 108, 40%, 42%;
  --color-horizontal-rule: 316, 50%, 68%;
  --color-hovered: 270, 40%, 38%;
  --color-interactable: 226, 40%, 52%;
  --color-list-bullets: 316, 50%, 68%;
  --color-list-indentation-indicator: magenta;
  --color-list-indentation-indicator-hover: 316, 50%, 68%;
  --color-orange: 22, 50%, 40%;
  --color-pink: 316, 50%, 68%;
  --color-purple: 270, 40%, 38%;
  --color-red: 346, 50%, 32%;
  --color-selected: 22, 50%, 40%;
  --color-stop: 346, 50%, 32%;
  --color-tag: 45, 50%, 44%;
  --color-tag-hover: 45, 50%, 44%;
  --color-teal: 160, 50%, 38%;
  --color-text-bold: 189, 40%, 42%;
  --color-text-faint: 300,  6%, 30%;
  --color-text-h1: 189, 40%, 42%;
  --color-text-h2: 189, 40%, 42%;
  --color-text-h3: 226, 40%, 52%;
  --color-text-h4: 226, 40%, 52%;
  --color-text-h5: 226, 40%, 52%;
  --color-text-h6: 226, 40%, 52%;
  --color-text-highlight: 15, 20%, 88%;
  --color-text-highlight-active-background: 22, 50%, 40%;
  --color-text-highlight-background: 45, 50%, 44%;
  --color-text-italic: 108, 40%, 42%;
  --color-text-muted: 300,  6%, 22%;
  --color-text-normal: 300,  6%, 14%;
  --color-text-strikethrough: 346, 50%, 32%;
  --color-text-title: 270, 40%, 38%;
  --color-white: 15, 20%, 88%;
  --color-yellow: 45, 50%, 44%;
  --crimson0: 346, 50%, 40%;
  --crimson1: 346, 50%, 36%;
  --crimson2: 346, 50%, 32%;
  --crimson3: 346, 50%, 28%;
  --crimson4: 346, 50%, 24%;
  --crimson5: 346, 50%, 20%;
  --day0: 15, 20%, 96%;
  --day1: 15, 20%, 92%;
  --day2: 15, 20%, 88%;
  --day3: 15, 20%, 84%;
  --day4: 15, 20%, 80%;
  --day5: 15, 20%, 76%;
  --default-font: 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif;
  --divider-color: rgb(84, 106, 182);
  --divider-color-hover: rgb(84, 106, 182);
  --dropdown-background: rgb(222, 210, 206);
  --dropdown-background-hover: rgb(97, 58, 136);
  --embed-block-shadow-hover: 0 0 0 1px rgb(84, 106, 182), inset 0 0 0 1px rgb(84, 106, 182);
  --embed-border-start: 2px solid rgb(84, 106, 182);
  --file-header-background: rgb(239, 233, 231);
  --file-header-background-focused: rgb(239, 233, 231);
  --file-header-font: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(222, 210, 206);
  --flair-color: rgb(38, 34, 38);
  --font-headings: 'Tahoma', serif;
  --font-interface: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-title: 'Jomhuria', 'Source Sans Pro', sans-serif;
  --footnote-divider-color: rgb(84, 106, 182);
  --footnote-id-color: rgb(59, 53, 59);
  --footnote-id-color-no-occurrences: rgb(81, 72, 81);
  --frost0: 226, 40%, 44%;
  --frost1: 226, 40%, 48%;
  --frost2: 226, 40%, 52%;
  --frost3: 226, 40%, 56%;
  --frost4: 226, 40%, 60%;
  --frost5: 226, 40%, 64%;
  --graph-node: rgb(59, 53, 59);
  --graph-node-attachment: 45, 50%, 44%;
  --graph-node-focused: rgb(84, 106, 182);
  --graph-node-tag: 108, 40%, 42%;
  --graph-node-unresolved: rgb(81, 72, 81);
  --graph-text: rgb(38, 34, 38);
  --green0: 108, 40%, 34%;
  --green1: 108, 40%, 38%;
  --green2: 108, 40%, 42%;
  --green3: 108, 40%, 46%;
  --green4: 108, 40%, 50%;
  --green5: 108, 40%, 54%;
  --heading-formatting: rgb(81, 72, 81);
  --hr-color: rgb(84, 106, 182);
  --icon-color: rgb(59, 53, 59);
  --icon-color-active: rgb(84, 106, 182);
  --icon-color-focused: rgb(38, 34, 38);
  --icon-color-hover: rgb(59, 53, 59);
  --indigo0: 270, 40%, 30%;
  --indigo1: 270, 40%, 34%;
  --indigo2: 270, 40%, 38%;
  --indigo3: 270, 40%, 42%;
  --indigo4: 270, 40%, 46%;
  --indigo5: 270, 40%, 50%;
  --input-date-separator: rgb(81, 72, 81);
  --input-placeholder-color: rgb(81, 72, 81);
  --interactive-accent: rgb(84, 106, 182);
  --interactive-accent-hover: rgb(97, 58, 136);
  --interactive-hover: rgb(97, 58, 136);
  --interactive-normal: rgb(222, 210, 206);
  --letterspacing-text-headers: 1.2px;
  --letterspacing-text-p: 1px;
  --link-color: rgb(84, 106, 182);
  --link-color-hover: rgb(97, 58, 136);
  --link-external-color: rgb(84, 106, 182);
  --link-external-color-hover: rgb(97, 58, 136);
  --link-unresolved-color: rgb(84, 106, 182);
  --list-marker-color: rgb(81, 72, 81);
  --list-marker-color-collapsed: rgb(84, 106, 182);
  --list-marker-color-hover: rgb(59, 53, 59);
  --menu-background: rgb(231, 221, 218);
  --metadata-border-color: rgb(84, 106, 182);
  --metadata-divider-color: rgb(84, 106, 182);
  --metadata-input-font: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(38, 34, 38);
  --metadata-label-font: '??', '??', 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(59, 53, 59);
  --metadata-label-text-color-hover: rgb(59, 53, 59);
  --modal-background: rgb(239, 233, 231);
  --moonstone0: 189, 40%, 34%;
  --moonstone1: 189, 40%, 38%;
  --moonstone2: 189, 40%, 42%;
  --moonstone3: 189, 40%, 46%;
  --moonstone4: 189, 40%, 50%;
  --moonstone5: 189, 40%, 54%;
  --nav-collapse-icon-color: rgb(81, 72, 81);
  --nav-collapse-icon-color-collapsed: rgb(81, 72, 81);
  --nav-heading-color: rgb(38, 34, 38);
  --nav-heading-color-collapsed: rgb(81, 72, 81);
  --nav-heading-color-collapsed-hover: rgb(59, 53, 59);
  --nav-heading-color-hover: rgb(38, 34, 38);
  --nav-item-color: rgb(59, 53, 59);
  --nav-item-color-active: rgb(38, 34, 38);
  --nav-item-color-highlighted: rgb(84, 106, 182);
  --nav-item-color-hover: rgb(38, 34, 38);
  --nav-item-color-selected: rgb(38, 34, 38);
  --nav-tag-color: rgb(81, 72, 81);
  --nav-tag-color-active: rgb(59, 53, 59);
  --nav-tag-color-hover: rgb(59, 53, 59);
  --night0: 300,  6%, 10%;
  --night1: 300,  6%, 14%;
  --night2: 300,  6%, 18%;
  --night3: 300,  6%, 22%;
  --night4: 300,  6%, 26%;
  --night5: 300,  6%, 30%;
  --pdf-background: rgb(239, 233, 231);
  --pdf-page-background: rgb(239, 233, 231);
  --pdf-sidebar-background: rgb(239, 233, 231);
  --peach0: 22, 50%, 40%;
  --peach1: 22, 50%, 44%;
  --peach2: 21, 50%, 48%;
  --peach3: 21, 50%, 52%;
  --peach4: 21, 50%, 56%;
  --peach5: 22, 50%, 60%;
  --pill-border-color: rgb(84, 106, 182);
  --pill-color: rgb(59, 53, 59);
  --pill-color-hover: rgb(38, 34, 38);
  --pill-color-remove: rgb(81, 72, 81);
  --pill-color-remove-hover: rgb(84, 106, 182);
  --pink0: 316, 50%, 60%;
  --pink1: 316, 50%, 64%;
  --pink2: 316, 50%, 68%;
  --pink3: 316, 50%, 72%;
  --pink4: 315, 50%, 76%;
  --pink5: 316, 50%, 80%;
  --prompt-background: rgb(239, 233, 231);
  --raised-background: color-mix(in srgb, rgb(239, 233, 231) 65%, transparent) linear-gradient(rgb(239, 233, 231), color-mix(in srgb, rgb(239, 233, 231) 65%, transparent));
  --ribbon-background: rgb(231, 221, 218);
  --ribbon-background-collapsed: rgb(239, 233, 231);
  --scrollbar-active-thumb-bg: rgb(97, 58, 136);
  --search-clear-button-color: rgb(59, 53, 59);
  --search-icon-color: rgb(59, 53, 59);
  --search-result-background: rgb(239, 233, 231);
  --setting-group-heading-color: rgb(38, 34, 38);
  --setting-items-background: rgb(231, 221, 218);
  --setting-items-border-color: rgb(84, 106, 182);
  --size-icon: 15px;
  --size-text-h1: 3em;
  --size-text-h2: 30px;
  --size-text-h3: 27px;
  --size-text-h4: 24px;
  --size-text-h5: 21px;
  --size-text-h6: 18px;
  --size-text-p: 15px;
  --size-text-title: 5em;
  --slider-track-background: rgb(84, 106, 182);
  --status-bar-background: rgb(231, 221, 218);
  --status-bar-border-color: rgb(84, 106, 182);
  --status-bar-text-color: rgb(59, 53, 59);
  --suggestion-background: rgb(239, 233, 231);
  --sync-avatar-color-1: 346, 50%, 32%;
  --sync-avatar-color-2: 22, 50%, 40%;
  --sync-avatar-color-3: 45, 50%, 44%;
  --sync-avatar-color-4: 108, 40%, 42%;
  --sync-avatar-color-5: 189, 40%, 42%;
  --sync-avatar-color-6: 226, 40%, 52%;
  --sync-avatar-color-7: 270, 40%, 38%;
  --sync-avatar-color-8: 316, 50%, 68%;
  --tab-background-active: rgb(239, 233, 231);
  --tab-container-background: rgb(231, 221, 218);
  --tab-outline-color: rgb(84, 106, 182);
  --tab-switcher-background: rgb(231, 221, 218);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(231, 221, 218), transparent);
  --tab-text-color: rgb(81, 72, 81);
  --tab-text-color-active: rgb(97, 58, 136);
  --tab-text-color-focused: rgb(59, 53, 59);
  --tab-text-color-focused-active: rgb(59, 53, 59);
  --tab-text-color-focused-active-current: rgb(153, 88, 51);
  --tab-text-color-focused-highlighted: rgb(84, 106, 182);
  --table-add-button-border-color: rgb(84, 106, 182);
  --table-border-color: rgb(84, 106, 182);
  --table-drag-handle-background-active: rgb(84, 106, 182);
  --table-drag-handle-color: rgb(81, 72, 81);
  --table-header-border-color: rgb(84, 106, 182);
  --table-header-color: rgb(38, 34, 38);
  --table-selection-border-color: rgb(84, 106, 182);
  --tag-color: rgb(84, 106, 182);
  --tag-color-hover: rgb(84, 106, 182);
  --teal0: 160, 50%, 34%;
  --teal1: 160, 50%, 38%;
  --teal2: 160, 50%, 42%;
  --teal3: 160, 50%, 46%;
  --teal4: 160, 50%, 50%;
  --teal5: 168, 50%, 54%;
  --text-accent: rgb(84, 106, 182);
  --text-accent-hover: rgb(97, 58, 136);
  --text-error: 346, 50%, 32%;
  --text-faint: rgb(81, 72, 81);
  --text-highlight-bg: rgb(168, 140, 56);
  --text-highlight-bg-active: rgb(153, 88, 51);
  --text-muted: rgb(59, 53, 59);
  --text-normal: rgb(38, 34, 38);
  --text-selection: rgb(168, 140, 56);
  --text-success: 108, 40%, 42%;
  --text-warning: 22, 50%, 40%;
  --titlebar-background: rgb(222, 210, 206);
  --titlebar-background-focused: rgb(231, 221, 218);
  --titlebar-border-color: rgb(84, 106, 182);
  --titlebar-text-color: rgb(59, 53, 59);
  --titlebar-text-color-focused: rgb(38, 34, 38);
  --vault-profile-color: rgb(38, 34, 38);
  --vault-profile-color-hover: rgb(38, 34, 38);
  --weight-bold: 700;
  --weight-extrabold: 800;
  --weight-extralight: 200;
  --weight-light: 300;
  --weight-maxbold: 900;
  --weight-medium: 500;
  --weight-normal: 400;
  --weight-semibold: 600;
  --weight-thin: 100;
  --yellow0: 45, 50%, 44%;
  --yellow1: 45, 50%, 48%;
  --yellow2: 45, 50%, 52%;
  --yellow3: 45, 50%, 56%;
  --yellow4: 45, 50%, 60%;
  --yellow5: 45, 50%, 64%;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(231, 221, 218);
  color: rgb(38, 34, 38);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(239, 233, 231);
  color: rgb(38, 34, 38);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(231, 221, 218);
  color: rgb(38, 34, 38);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(84, 106, 182);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(231, 221, 218);
  border-left-color: rgb(84, 106, 182);
  color: rgb(38, 34, 38);
}

body div#quartz-root {
  background-color: rgb(239, 233, 231);
  color: rgb(38, 34, 38);
}`,
    typography: `body .page article p > b, b {
  color: rgb(64, 137, 150);
  outline: rgb(64, 137, 150) none 0px;
  text-decoration: rgb(64, 137, 150);
  text-decoration-color: rgb(64, 137, 150);
}

body .page article p > em, em {
  color: rgb(81, 150, 64);
  outline: rgb(81, 150, 64) none 0px;
  text-decoration: rgb(81, 150, 64);
  text-decoration-color: rgb(81, 150, 64);
}

body .page article p > i, i {
  color: rgb(81, 150, 64);
  outline: rgb(81, 150, 64) none 0px;
  text-decoration: rgb(81, 150, 64);
  text-decoration-color: rgb(81, 150, 64);
}

body .page article p > strong, strong {
  color: rgb(64, 137, 150);
  outline: rgb(64, 137, 150) none 0px;
  text-decoration: rgb(64, 137, 150);
  text-decoration-color: rgb(64, 137, 150);
}

body .text-highlight {
  background-color: rgb(153, 88, 51);
  color: rgb(231, 221, 218);
  outline: rgb(231, 221, 218) none 0px;
  text-decoration: rgb(231, 221, 218);
  text-decoration-color: rgb(231, 221, 218);
}

body del {
  color: rgb(122, 41, 60);
  outline: rgb(122, 41, 60) none 0px;
  text-decoration: line-through rgb(122, 41, 60);
  text-decoration-color: rgb(122, 41, 60);
}

body p {
  color: rgb(59, 53, 59);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(59, 53, 59) none 0px;
  text-decoration: rgb(59, 53, 59);
  text-decoration-color: rgb(59, 53, 59);
}`,
    links: `body a.external, footer a {
  color: rgb(214, 133, 192);
  outline: rgb(214, 133, 192) none 0px;
  text-decoration: underline rgb(214, 133, 192);
  text-decoration-color: rgb(214, 133, 192);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(214, 133, 192);
  outline: rgb(214, 133, 192) none 0px;
  text-decoration: underline rgb(214, 133, 192);
  text-decoration-color: rgb(214, 133, 192);
}

body a.internal.broken {
  color: rgb(122, 41, 60);
  outline: rgb(122, 41, 60) none 0px;
  text-decoration: underline rgb(122, 41, 60);
  text-decoration-color: rgb(122, 41, 60);
}`,
    lists: `body dd {
  color: rgb(38, 34, 38);
}

body dt {
  color: rgb(38, 34, 38);
}

body ol > li {
  color: rgb(38, 34, 38);
}

body ol.overflow {
  background-color: rgb(239, 233, 231);
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

body ul > li {
  color: rgb(38, 34, 38);
}

body ul.overflow {
  background-color: rgb(239, 233, 231);
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(81, 72, 81);
  text-decoration: rgb(81, 72, 81);
}

body blockquote {
  background-color: rgba(168, 140, 56, 0.1);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

body table {
  border-bottom-color: rgb(168, 140, 56);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgb(168, 140, 56);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgb(168, 140, 56);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgb(168, 140, 56);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(38, 34, 38);
  width: 277.219px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(231, 221, 218);
}

body td {
  border-bottom-color: rgb(222, 210, 206);
  border-bottom-width: 0px;
  border-left-color: rgb(38, 34, 38);
  border-left-width: 0px;
  border-right-color: rgb(222, 210, 206);
  border-top-color: rgb(222, 210, 206);
  border-top-width: 0px;
  color: rgb(38, 34, 38);
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
}

body th {
  background-color: rgb(222, 210, 206);
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(38, 34, 38);
  border-left-width: 0px;
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(84, 106, 182);
  border-top-width: 0px;
  color: rgb(38, 34, 38);
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
}

body thead {
  background-color: rgb(222, 210, 206);
  border-bottom-color: rgb(48, 145, 113);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(48, 145, 113);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(38, 34, 38);
}

body tr {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(38, 34, 38);
}`,
    code: `body code {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  color: rgb(38, 34, 38);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
  color: rgb(38, 34, 38);
}

body pre > code > [data-line] {
  border-left-color: rgb(38, 34, 38);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(38, 34, 38);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

body pre > code, pre:has(> code) {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
}

body pre:has(> code) {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
}`,
    images: `body audio {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

body figcaption {
  color: rgb(38, 34, 38);
}

body figure {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

body img {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

body video {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}`,
    embeds: `body .file-embed {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(59, 53, 59);
  border-left-color: rgb(59, 53, 59);
  border-right-color: rgb(59, 53, 59);
  border-top-color: rgb(59, 53, 59);
}

body .footnotes {
  border-top-color: rgb(38, 34, 38);
  color: rgb(38, 34, 38);
}

body .transclude {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(59, 53, 59);
  text-decoration: line-through rgb(59, 53, 59);
  text-decoration-color: rgb(59, 53, 59);
}

body input[type=checkbox] {
  border-bottom-color: rgb(214, 133, 192);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(214, 133, 192);
  border-right-color: rgb(214, 133, 192);
  border-top-color: rgb(214, 133, 192);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: 0.3s;
}

body li.task-list-item[data-task='!'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

body li.task-list-item[data-task='*'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

body li.task-list-item[data-task='-'] {
  color: rgb(81, 72, 81);
  text-decoration: line-through 1px rgb(81, 72, 81);
  text-decoration-color: rgb(81, 72, 81);
}

body li.task-list-item[data-task='/'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

body li.task-list-item[data-task='>'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

body li.task-list-item[data-task='?'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

body li.task-list-item[data-task='I'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

body li.task-list-item[data-task='S'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

body li.task-list-item[data-task='b'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

body li.task-list-item[data-task='c'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

body li.task-list-item[data-task='d'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

body li.task-list-item[data-task='f'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

body li.task-list-item[data-task='i'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

body li.task-list-item[data-task='k'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

body li.task-list-item[data-task='l'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

body li.task-list-item[data-task='p'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

body li.task-list-item[data-task='u'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

body li.task-list-item[data-task='w'] {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}`,
    search: `body .search > .search-button {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
  color: rgb(38, 34, 38);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(222, 210, 206);
}

body .search > .search-container > .search-space > * {
  color: rgb(38, 34, 38);
  outline: rgb(38, 34, 38) none 0px;
  text-decoration: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(38, 34, 38);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(38, 34, 38);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(38, 34, 38);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(231, 221, 218);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  color: rgb(38, 34, 38);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(38, 34, 38);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(168, 140, 56);
  border-bottom-color: rgb(239, 233, 231);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-left-color: rgb(239, 233, 231);
  border-right-color: rgb(239, 233, 231);
  border-top-color: rgb(239, 233, 231);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

body a.internal.tag-link::before {
  color: rgb(239, 233, 231);
}

body h1 {
  color: rgb(64, 137, 150);
  font-family: Tahoma, serif;
  text-shadow: rgba(0, 0, 0, 0.05) 1px 1px 0px, rgba(0, 0, 0, 0.05) 2px 2px 0px, rgba(0, 0, 0, 0.05) 3px 3px 0px, rgba(0, 0, 0, 0.05) 4px 4px 0px, rgba(0, 0, 0, 0.05) 5px 5px 0px, rgba(0, 0, 0, 0.05) 6px 6px 0px, rgba(0, 0, 0, 0.05) 7px 7px 0px, rgba(0, 0, 0, 0.05) 8px 8px 0px, rgba(0, 0, 0, 0.05) 9px 9px 0px;
}

body h2 {
  color: rgb(64, 137, 150);
  font-family: Tahoma, serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(97, 58, 136);
  text-shadow: rgba(0, 0, 0, 0.05) 1px 1px 0px, rgba(0, 0, 0, 0.05) 2px 2px 0px, rgba(0, 0, 0, 0.05) 3px 3px 0px, rgba(0, 0, 0, 0.05) 4px 4px 0px, rgba(0, 0, 0, 0.05) 5px 5px 0px, rgba(0, 0, 0, 0.05) 6px 6px 0px, rgba(0, 0, 0, 0.05) 7px 7px 0px, rgba(0, 0, 0, 0.05) 8px 8px 0px, rgba(0, 0, 0, 0.05) 9px 9px 0px;
}

body h3 {
  color: rgb(84, 106, 182);
  font-family: Tahoma, serif;
}

body h4 {
  color: rgb(84, 106, 182);
  font-family: Tahoma, serif;
}

body h5 {
  color: rgb(84, 106, 182);
  font-family: Tahoma, serif;
}

body h6 {
  color: rgb(84, 106, 182);
  font-family: Tahoma, serif;
}

body hr {
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(214, 133, 192);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(239, 233, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 231);
}

body ::-webkit-scrollbar-corner {
  background: rgb(239, 233, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 231);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(239, 233, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 231);
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(239, 233, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 231);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(239, 233, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 231);
}

body ::-webkit-scrollbar-track {
  background: rgb(239, 233, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 233, 231);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(59, 53, 59);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 900;
  text-decoration: rgb(59, 53, 59);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(59, 53, 59);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 900;
  text-decoration: rgb(59, 53, 59);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(59, 53, 59);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(59, 53, 59);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(247, 244, 243);
  border-bottom-color: rgb(231, 221, 218);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(231, 221, 218);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(231, 221, 218);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(231, 221, 218);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(153, 88, 51);
}`,
    toc: `body li.depth-0 {
  font-weight: 900;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(84, 106, 182);
}`,
    footer: `body footer {
  background-color: rgb(222, 210, 206);
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
  color: rgb(38, 34, 38);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(38, 34, 38);
  text-decoration: rgb(38, 34, 38);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(38, 34, 38);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(38, 34, 38);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(59, 53, 59);
  text-decoration: rgb(59, 53, 59);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(59, 53, 59);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 3px;
}

body li.section-li > .section .meta {
  color: rgb(59, 53, 59);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(59, 53, 59);
  text-decoration: rgb(59, 53, 59);
}

body ul.section-ul {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(84, 106, 182);
}

body .darkmode svg {
  color: rgb(84, 106, 182);
  stroke: rgb(84, 106, 182);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(81, 72, 81);
  border-left-color: rgb(81, 72, 81);
  border-right-color: rgb(81, 72, 81);
  border-top-color: rgb(81, 72, 81);
  color: rgb(81, 72, 81);
}

body .breadcrumb-element p {
  color: rgb(81, 72, 81);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  color: rgb(38, 34, 38);
}

body .metadata {
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
  color: rgb(59, 53, 59);
}

body .metadata-properties {
  border-bottom-color: rgb(59, 53, 59);
  border-left-color: rgb(59, 53, 59);
  border-right-color: rgb(59, 53, 59);
  border-top-color: rgb(59, 53, 59);
  color: rgb(59, 53, 59);
}

body .navigation-progress {
  background-color: rgb(222, 210, 206);
}

body .page-header h2.page-title {
  color: rgb(38, 34, 38);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(38, 34, 38);
  text-decoration: underline dotted rgb(38, 34, 38);
}

body details {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

body input[type=text] {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(59, 53, 59);
  border-left-color: rgb(59, 53, 59);
  border-right-color: rgb(59, 53, 59);
  border-top-color: rgb(59, 53, 59);
  color: rgb(59, 53, 59);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  color: rgb(38, 34, 38);
}

body progress {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

body sub {
  color: rgb(38, 34, 38);
}

body summary {
  color: rgb(38, 34, 38);
}

body sup {
  color: rgb(38, 34, 38);
}`,
  },
};
