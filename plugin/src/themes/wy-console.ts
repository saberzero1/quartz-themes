import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "wy-console",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["audiowide", "dotgothic16"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: #163F26 !important;
  --background-modifier-border: #020704 !important;
  --background-modifier-border-focus: #99E5B5 !important;
  --background-modifier-border-hover: #3FFF8C !important;
  --background-modifier-error: #020704 !important;
  --background-modifier-error-hover: #3FFF8C !important;
  --background-modifier-error-rgb: #3FFF8C !important;
  --background-modifier-form-field: #020704 !important;
  --background-modifier-form-field-hover: #020704 !important;
  --background-modifier-hover: #163F26 !important;
  --background-modifier-message: #40B266 !important;
  --background-modifier-success: #020704 !important;
  --background-modifier-success-rgb: #99E5B5 !important;
  --background-primary: #0B1510 !important;
  --background-primary-alt: black !important;
  --background-secondary: #0B1510 !important;
  --background-secondary-alt: #0B1510 !important;
  --bases-cards-background: #0B1510 !important;
  --bases-cards-cover-background: black !important;
  --bases-cards-shadow: 0 0 0 1px #020704 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #3FFF8C !important;
  --bases-embed-border-color: #020704 !important;
  --bases-group-heading-property-color: #99E5B5 !important;
  --bases-table-border-color: #020704 !important;
  --bases-table-cell-background-active: #0B1510 !important;
  --bases-table-cell-background-disabled: black !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #99E5B5 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #3FFF8C !important;
  --bases-table-group-background: black !important;
  --bases-table-header-background: #0B1510 !important;
  --bases-table-header-background-hover: #163F26 !important;
  --bases-table-header-color: #99E5B5 !important;
  --bases-table-summary-background: #0B1510 !important;
  --bases-table-summary-background-hover: #163F26 !important;
  --blockquote-border-color: #3FFF8C !important;
  --blur-background: color-mix(in srgb, #40B266 65%, transparent) linear-gradient(#40B266, color-mix(in srgb, #40B266 65%, transparent)) !important;
  --bodyFont: "ModeSeven Regular" !important;
  --canvas-background: #0B1510 !important;
  --canvas-card-label-color: #99E5B5 !important;
  --caret-color: #99E5B5 !important;
  --checkbox-border-color: #99E5B5 !important;
  --checkbox-border-color-hover: #99E5B5 !important;
  --checkbox-color: #3FFF8C !important;
  --checkbox-color-hover: #99E5B5 !important;
  --checkbox-marker-color: #0B1510 !important;
  --checklist-done-color: #99E5B5 !important;
  --code-background: black !important;
  --code-border-color: #020704 !important;
  --code-bracket-background: #163F26 !important;
  --code-comment: #99E5B5 !important;
  --code-normal: #99E5B5 !important;
  --code-punctuation: #99E5B5 !important;
  --codeFont: "ModeSeven Regular" !important;
  --col-accent: #3FFF8C !important;
  --col-accent-plus: #99E5B5 !important;
  --col-base: #40B266 !important;
  --col-base-background: #0B1510 !important;
  --col-bckg-filetreeheader: #0B1510 !important;
  --col-bckg-mainpanels: #020704 !important;
  --col-bckg-menudropdownhover: #163F26 !important;
  --col-bckg-menudropdowns: #163F26 !important;
  --col-bckg-selectedtitles: #163F26 !important;
  --col-danger: #318C54 !important;
  --col-ed-background: #0B1510 !important;
  --col-ed-bckg-checkbox-empty: #163F26 !important;
  --col-ed-bckg-checkbox-full: #99E5B5 !important;
  --col-ed-bckg-codeblock: #163F26 !important;
  --col-ed-bckg-highlight: #40B266 !important;
  --col-ed-bckg-hyperlink-broken: #318C54 !important;
  --col-ed-bckg-quote: #0B1510 !important;
  --col-ed-bckg-quote-callout: #163F26 !important;
  --col-ed-bckg-quote-warning: #318C54 !important;
  --col-ed-bckg-table: #0B1510 !important;
  --col-ed-bckg-tableh: #163F26 !important;
  --col-ed-bckg-tagbeg: #163F26 !important;
  --col-ed-bckg-tagend: #163F26 !important;
  --col-ed-caret: #99E5B5 !important;
  --col-ed-hr: #40B266 !important;
  --col-ed-hyperlink: #FFD303 !important;
  --col-ed-hyperlink-broken: red !important;
  --col-ed-hyperlink-highlight-hover: #020704 !important;
  --col-ed-hyperlink-hover: #FFF2BF !important;
  --col-ed-hyperlink-strikethrough: #3F3401 !important;
  --col-ed-txt-checkbox-full: #163F26 !important;
  --col-ed-txt-codeblock: #3FFF8C !important;
  --col-ed-txt-h1: #3FFF8C !important;
  --col-ed-txt-h2: #3FFF8C !important;
  --col-ed-txt-h3: #3FFF8C !important;
  --col-ed-txt-h4: #3FFF8C !important;
  --col-ed-txt-h5: #3FFF8C !important;
  --col-ed-txt-h6: #3FFF8C !important;
  --col-ed-txt-highlight: #020704 !important;
  --col-ed-txt-italic: #3FFF8C !important;
  --col-ed-txt-ol-bullet: #99E5B5 !important;
  --col-ed-txt-p: #40B266 !important;
  --col-ed-txt-quote: #99E5B5 !important;
  --col-ed-txt-strikethrough: #163F26 !important;
  --col-ed-txt-strong: #3FFF8C !important;
  --col-ed-txt-table: #40B266 !important;
  --col-ed-txt-tableh: #99E5B5 !important;
  --col-ed-txt-tagbeg: #FFD303 !important;
  --col-ed-txt-tagend: #FFD303 !important;
  --col-ed-txt-title: #99E5B5 !important;
  --col-ed-txt-ul-bullet: #99E5B5 !important;
  --col-icons: #99E5B5 !important;
  --col-important: #FFD303 !important;
  --col-important-muted: #3F3401 !important;
  --col-important-plus: #FFF2BF !important;
  --col-menucheckbox: #3FFF8C !important;
  --col-muted: #163F26 !important;
  --col-muted-plus: #020704 !important;
  --col-pr-background: #0B1510 !important;
  --col-pr-bckg-checkbox-empty: #163F26 !important;
  --col-pr-bckg-checkbox-full: #99E5B5 !important;
  --col-pr-bckg-codeblock: #163F26 !important;
  --col-pr-bckg-highlight: #40B266 !important;
  --col-pr-bckg-quote: #0B1510 !important;
  --col-pr-bckg-quote-callout: #163F26 !important;
  --col-pr-bckg-quote-warning: #318C54 !important;
  --col-pr-bckg-table: #0B1510 !important;
  --col-pr-bckg-tableh: #40B266 !important;
  --col-pr-bckg-tag: #FFD303 !important;
  --col-pr-hr: #40B266 !important;
  --col-pr-hyperlink-broken: red !important;
  --col-pr-txt-checkbox-full: #163F26 !important;
  --col-pr-txt-codeblock: #3FFF8C !important;
  --col-pr-txt-h1: #3FFF8C !important;
  --col-pr-txt-h2: #3FFF8C !important;
  --col-pr-txt-h3: #3FFF8C !important;
  --col-pr-txt-h4: #3FFF8C !important;
  --col-pr-txt-h5: #3FFF8C !important;
  --col-pr-txt-h6: #3FFF8C !important;
  --col-pr-txt-highlight: #020704 !important;
  --col-pr-txt-hyperlink: #FFD303 !important;
  --col-pr-txt-hyperlink-highlight-hover: #020704 !important;
  --col-pr-txt-hyperlink-hover: #FFF2BF !important;
  --col-pr-txt-hyperlink-strikethrough: #3F3401 !important;
  --col-pr-txt-hyperlink-unresolved: #FFD303 !important;
  --col-pr-txt-italic: #3FFF8C !important;
  --col-pr-txt-ol-bullet: #99E5B5 !important;
  --col-pr-txt-p: #40B266 !important;
  --col-pr-txt-quote: #99E5B5 !important;
  --col-pr-txt-strikethrough: #163F26 !important;
  --col-pr-txt-strong: #3FFF8C !important;
  --col-pr-txt-table: #020704 !important;
  --col-pr-txt-tableh: #99E5B5 !important;
  --col-pr-txt-tag: #163F26 !important;
  --col-pr-txt-title: #99E5B5 !important;
  --col-pr-txt-ul-bullet: #99E5B5 !important;
  --col-safety: #163F26 !important;
  --col-text-selection: #437254 !important;
  --col-txt-menudropdownhover: #3FFF8C !important;
  --col-txt-menudropdowns: #3FFF8C !important;
  --col-txt-selectedtitles: #99E5B5 !important;
  --col-txt-titlebars: #070707 !important;
  --col-txt-titles: #3FFF8C !important;
  --collapse-icon-color: #99E5B5 !important;
  --collapse-icon-color-collapsed: #99E5B5 !important;
  --dark: #99E5B5 !important;
  --darkgray: #99E5B5 !important;
  --divider-color: #020704 !important;
  --divider-color-hover: #3FFF8C !important;
  --dropdown-background: #40B266 !important;
  --dropdown-background-hover: #163F26 !important;
  --embed-block-shadow-hover: 0 0 0 1px #020704, inset 0 0 0 1px #020704 !important;
  --embed-border-start: 2px solid #3FFF8C !important;
  --file-header-background: #0B1510 !important;
  --file-header-background-focused: #0B1510 !important;
  --file-header-font: "ModeSeven Regular" !important;
  --files-font-size: 1em !important;
  --flair-background: #40B266 !important;
  --flair-color: #99E5B5 !important;
  --fnt-ed-headers: "ModeSeven Regular" !important;
  --fnt-ed-text: "ModeSeven Regular" !important;
  --fnt-ed-title: "Scifi Title" !important;
  --fnt-head-p: "ModeSeven Regular" !important;
  --fnt-pr-headers: "ModeSeven Regular" !important;
  --fnt-pr-text: "ModeSeven Regular" !important;
  --fnt-pr-title: "Scifi Title" !important;
  --fnt-title: "Scifi Title" !important;
  --folders-font-size: 1em !important;
  --font-interface: "ModeSeven Regular" !important;
  --footnote-divider-color: #020704 !important;
  --footnote-id-color: #99E5B5 !important;
  --footnote-id-color-no-occurrences: #99E5B5 !important;
  --footnote-input-background-active: #163F26 !important;
  --graph-node: #99E5B5 !important;
  --graph-node-focused: #99E5B5 !important;
  --graph-node-unresolved: #99E5B5 !important;
  --graph-text: #99E5B5 !important;
  --gray: #99E5B5 !important;
  --headerFont: "ModeSeven Regular" !important;
  --heading-formatting: #99E5B5 !important;
  --highlight: #163F26 !important;
  --hr-color: #020704 !important;
  --icon-color: #99E5B5 !important;
  --icon-color-active: #99E5B5 !important;
  --icon-color-focused: #99E5B5 !important;
  --icon-color-hover: #99E5B5 !important;
  --input-date-separator: #99E5B5 !important;
  --input-placeholder-color: #99E5B5 !important;
  --interactive-accent: #3FFF8C !important;
  --interactive-accent-hover: #99E5B5 !important;
  --interactive-accent-hsl: #3FFF8C !important;
  --interactive-hover: #163F26 !important;
  --interactive-normal: #40B266 !important;
  --letterspacing-ed-headers: 1.5px !important;
  --letterspacing-ed-text: 0.5px !important;
  --letterspacing-pr-headers: 1.5px !important;
  --letterspacing-pr-text: 0.5px !important;
  --letterspacing-txt-headers: 1.5px !important;
  --letterspacing-txt-p: 0.5px !important;
  --light: #0B1510 !important;
  --lightgray: #0B1510 !important;
  --line-height-ed-headers: 20px !important;
  --line-height-ed-text: 20px !important;
  --line-height-pr-headers: 20px !important;
  --line-height-pr-text: 20px !important;
  --link-color: #99E5B5 !important;
  --link-color-hover: #FFF2BF !important;
  --link-external-color: #99E5B5 !important;
  --link-external-color-hover: #FFF2BF !important;
  --link-unresolved-color: #99E5B5 !important;
  --link-unresolved-decoration-color: hsla(#3FFF8C, 0.3) !important;
  --list-marker-color: #99E5B5 !important;
  --list-marker-color-collapsed: #99E5B5 !important;
  --list-marker-color-hover: #99E5B5 !important;
  --menu-background: #0B1510 !important;
  --menu-border-color: #3FFF8C !important;
  --metadata-border-color: #020704 !important;
  --metadata-divider-color: #020704 !important;
  --metadata-input-background-active: #163F26 !important;
  --metadata-input-font: "ModeSeven Regular" !important;
  --metadata-input-text-color: #99E5B5 !important;
  --metadata-label-background-active: #163F26 !important;
  --metadata-label-font: "ModeSeven Regular" !important;
  --metadata-label-text-color: #99E5B5 !important;
  --metadata-label-text-color-hover: #99E5B5 !important;
  --metadata-property-background-active: #163F26 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #99E5B5 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3FFF8C !important;
  --modal-background: #0B1510 !important;
  --nav-collapse-icon-color: #99E5B5 !important;
  --nav-collapse-icon-color-collapsed: #99E5B5 !important;
  --nav-heading-color: #99E5B5 !important;
  --nav-heading-color-collapsed: #99E5B5 !important;
  --nav-heading-color-collapsed-hover: #99E5B5 !important;
  --nav-heading-color-hover: #99E5B5 !important;
  --nav-item-background-active: #163F26 !important;
  --nav-item-background-hover: #163F26 !important;
  --nav-item-color: #99E5B5 !important;
  --nav-item-color-active: #99E5B5 !important;
  --nav-item-color-highlighted: #99E5B5 !important;
  --nav-item-color-hover: #99E5B5 !important;
  --nav-item-color-selected: #99E5B5 !important;
  --nav-tag-color: #99E5B5 !important;
  --nav-tag-color-active: #99E5B5 !important;
  --nav-tag-color-hover: #99E5B5 !important;
  --oz-fta-file-font-size: 1em !important;
  --oz-fta-folder-font-size: 1em !important;
  --pad-ed-headers: 5px !important;
  --pdf-background: #0B1510 !important;
  --pdf-page-background: #0B1510 !important;
  --pdf-shadow: 0 0 0 1px #020704 !important;
  --pdf-sidebar-background: #0B1510 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #020704 !important;
  --pill-border-color: #020704 !important;
  --pill-border-color-hover: #3FFF8C !important;
  --pill-color: #99E5B5 !important;
  --pill-color-hover: #99E5B5 !important;
  --pill-color-remove: #99E5B5 !important;
  --pill-color-remove-hover: #99E5B5 !important;
  --prompt-background: #0B1510 !important;
  --raised-background: color-mix(in srgb, #40B266 65%, transparent) linear-gradient(#40B266, color-mix(in srgb, #40B266 65%, transparent)) !important;
  --ribbon-background: #0B1510 !important;
  --ribbon-background-collapsed: #0B1510 !important;
  --search-clear-button-color: #99E5B5 !important;
  --search-icon-color: #99E5B5 !important;
  --search-result-background: #0B1510 !important;
  --secondary: #99E5B5 !important;
  --setting-group-heading-color: #99E5B5 !important;
  --setting-items-background: black !important;
  --setting-items-border-color: #020704 !important;
  --siz-ed-txt-codeblock: 1em !important;
  --siz-ed-txt-h1: 1.75em !important;
  --siz-ed-txt-h2: 1.6em !important;
  --siz-ed-txt-h3: 1.45em !important;
  --siz-ed-txt-h4: 1.3em !important;
  --siz-ed-txt-h5: 1.15em !important;
  --siz-ed-txt-h6: 1em !important;
  --siz-ed-txt-highlight: 1em !important;
  --siz-ed-txt-italic: 1em !important;
  --siz-ed-txt-p: 1em !important;
  --siz-ed-txt-quote: 1em !important;
  --siz-ed-txt-strong: 1em !important;
  --siz-ed-txt-table: 1em !important;
  --siz-ed-txt-title: 2em !important;
  --siz-pr-txt-codeblock: 1em !important;
  --siz-pr-txt-h1: 1.75em !important;
  --siz-pr-txt-h2: 1.6em !important;
  --siz-pr-txt-h3: 1.45em !important;
  --siz-pr-txt-h4: 1.3em !important;
  --siz-pr-txt-h5: 1.15em !important;
  --siz-pr-txt-h6: 1em !important;
  --siz-pr-txt-highlight: 1em !important;
  --siz-pr-txt-italic: 1em !important;
  --siz-pr-txt-p: 1em !important;
  --siz-pr-txt-quote: 1em !important;
  --siz-pr-txt-strong: 1em !important;
  --siz-pr-txt-table: 1em !important;
  --siz-pr-txt-title: 2em !important;
  --siz-txt-h1: 1.75em !important;
  --siz-txt-h2: 1.6em !important;
  --siz-txt-h3: 1.45em !important;
  --siz-txt-h4: 1.3em !important;
  --siz-txt-h5: 1.15em !important;
  --siz-txt-h6: 1em !important;
  --siz-txt-p: 1em !important;
  --siz-txt-title: 2em !important;
  --slider-thumb-border-color: #3FFF8C !important;
  --slider-track-background: #020704 !important;
  --status-bar-background: #0B1510 !important;
  --status-bar-border-color: #020704 !important;
  --status-bar-text-color: #99E5B5 !important;
  --suggestion-background: #0B1510 !important;
  --tab-background-active: #0B1510 !important;
  --tab-container-background: #0B1510 !important;
  --tab-divider-color: #3FFF8C !important;
  --tab-outline-color: #020704 !important;
  --tab-switcher-background: #0B1510 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #0B1510, transparent) !important;
  --tab-text-color: #99E5B5 !important;
  --tab-text-color-active: #99E5B5 !important;
  --tab-text-color-focused: #99E5B5 !important;
  --tab-text-color-focused-active: #99E5B5 !important;
  --tab-text-color-focused-active-current: #99E5B5 !important;
  --tab-text-color-focused-highlighted: #99E5B5 !important;
  --table-add-button-border-color: #020704 !important;
  --table-border-color: #020704 !important;
  --table-drag-handle-background-active: #3FFF8C !important;
  --table-drag-handle-color: #99E5B5 !important;
  --table-drag-handle-color-active: #020704 !important;
  --table-header-border-color: #020704 !important;
  --table-header-color: #99E5B5 !important;
  --table-selection-border-color: #3FFF8C !important;
  --tag-background: hsla(#3FFF8C, 0.1) !important;
  --tag-background-hover: hsla(#3FFF8C, 0.2) !important;
  --tag-border-color: hsla(#3FFF8C, 0.15) !important;
  --tag-border-color-hover: hsla(#3FFF8C, 0.15) !important;
  --tag-color: #99E5B5 !important;
  --tag-color-hover: #99E5B5 !important;
  --tertiary: #FFF2BF !important;
  --text-accent: #99E5B5 !important;
  --text-accent-hover: #FFF2BF !important;
  --text-error: #FFD303 !important;
  --text-faint: #99E5B5 !important;
  --text-muted: #99E5B5 !important;
  --text-normal: #99E5B5 !important;
  --text-on-accent: #020704 !important;
  --text-selection: #437254 !important;
  --text-success: #3FFF8C !important;
  --textHighlight: #163F26 !important;
  --titleFont: "ModeSeven Regular" !important;
  --titlebar-background: #0B1510 !important;
  --titlebar-background-focused: #0B1510 !important;
  --titlebar-border-color: #020704 !important;
  --titlebar-text-color: #99E5B5 !important;
  --titlebar-text-color-focused: #99E5B5 !important;
  --vault-profile-color: #99E5B5 !important;
  --vault-profile-color-hover: #99E5B5 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(11, 21, 16);
  color: rgb(153, 229, 181);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(11, 21, 16);
  color: rgb(153, 229, 181);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(11, 21, 16);
  color: rgb(153, 229, 181);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(2, 7, 4);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(11, 21, 16);
  border-left-color: rgb(2, 7, 4);
  color: rgb(153, 229, 181);
}

body div#quartz-root {
  background-color: rgb(11, 21, 16);
  color: rgb(153, 229, 181);
}`,
    typography: `body .page article p > b, b {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
  outline: rgb(63, 255, 140) none 0px;
  text-decoration: rgb(63, 255, 140);
  text-decoration-color: rgb(63, 255, 140);
}

body .page article p > em, em {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
  outline: rgb(63, 255, 140) none 0px;
  text-decoration: rgb(63, 255, 140);
  text-decoration-color: rgb(63, 255, 140);
}

body .page article p > i, i {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
  outline: rgb(63, 255, 140) none 0px;
  text-decoration: rgb(63, 255, 140);
  text-decoration-color: rgb(63, 255, 140);
}

body .page article p > strong, strong {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
  outline: rgb(63, 255, 140) none 0px;
  text-decoration: rgb(63, 255, 140);
  text-decoration-color: rgb(63, 255, 140);
}

body .text-highlight {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
  outline: rgb(153, 229, 181) none 0px;
  text-decoration: rgb(153, 229, 181);
  text-decoration-color: rgb(153, 229, 181);
}

body del {
  color: rgb(64, 178, 102);
  font-family: "ModeSeven Regular";
  outline: rgb(64, 178, 102) none 0px;
  text-decoration: line-through rgb(64, 178, 102);
  text-decoration-color: rgb(64, 178, 102);
}

body p {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
  outline: rgb(153, 229, 181) none 0px;
  text-decoration: rgb(153, 229, 181);
  text-decoration-color: rgb(153, 229, 181);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 211, 3);
  font-family: "ModeSeven Regular";
  outline: rgb(255, 211, 3) none 0px;
  text-decoration: underline rgb(255, 211, 3);
  text-decoration-color: rgb(255, 211, 3);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 211, 3);
  font-family: "ModeSeven Regular";
  outline: rgb(255, 211, 3) none 0px;
  text-decoration: underline rgb(255, 211, 3);
  text-decoration-color: rgb(255, 211, 3);
}

body a.internal.broken {
  color: rgb(255, 0, 0);
  font-family: "ModeSeven Regular";
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: underline rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}`,
    lists: `body dd {
  color: rgb(153, 229, 181);
}

body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

body dt {
  color: rgb(153, 229, 181);
}

body ol > li {
  color: rgb(64, 178, 102);
}

body ol.overflow {
  background-color: rgb(11, 21, 16);
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body ul > li {
  color: rgb(64, 178, 102);
}

body ul.overflow {
  background-color: rgb(11, 21, 16);
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(153, 229, 181);
  text-decoration: rgb(153, 229, 181);
}

body blockquote {
  font-family: "ModeSeven Regular";
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body table {
  background-color: rgb(11, 21, 16);
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
  width: 226.922px;
}

body td {
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
  color: rgb(153, 229, 181);
}

body th {
  background-color: rgb(64, 178, 102);
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
  color: rgb(153, 229, 181);
}

body thead {
  background-color: rgb(64, 178, 102);
}`,
    code: `body code {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 63, 38);
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 63, 38);
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
  color: rgb(63, 255, 140);
}

body pre > code, pre:has(> code) {
  background-color: rgb(22, 63, 38);
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
}

body pre:has(> code) {
  background-color: rgb(22, 63, 38);
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
}`,
    images: `body audio {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body figcaption {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

body figure {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body img {
  border-bottom-color: rgb(64, 178, 102);
  border-left-color: rgb(64, 178, 102);
  border-right-color: rgb(64, 178, 102);
  border-top-color: rgb(64, 178, 102);
}

body video {
  border-bottom-color: rgb(64, 178, 102);
  border-left-color: rgb(64, 178, 102);
  border-right-color: rgb(64, 178, 102);
  border-top-color: rgb(64, 178, 102);
}`,
    embeds: `body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body .footnotes {
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}

body .transclude {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(63, 255, 140);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body .transclude-inner {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(63, 255, 140);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "ModeSeven Regular";
}

body .katex-display > .katex > .katex-html {
  font-family: "ModeSeven Regular";
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(22, 63, 38);
  text-decoration: line-through rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body input[type=checkbox] {
  border-bottom-color: rgb(22, 63, 38);
  border-left-color: rgb(22, 63, 38);
  border-right-color: rgb(22, 63, 38);
  border-top-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='!'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='*'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='-'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='/'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='>'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='?'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='I'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='S'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='b'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='c'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='d'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='f'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='i'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='k'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='l'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='p'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='u'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

body li.task-list-item[data-task='w'] {
  color: rgb(22, 63, 38);
  text-decoration: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="bug"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="danger"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="example"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="failure"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="info"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="note"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="question"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="quote"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="success"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="tip"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="todo"] {
  background-color: rgb(22, 63, 38);
}

body .callout[data-callout="warning"] {
  background-color: rgb(49, 140, 84);
}`,
    search: `body .search > .search-button {
  background-color: rgb(2, 7, 4);
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

body .search > .search-container > .search-space {
  background-color: rgb(11, 21, 16);
}

body .search > .search-container > .search-space > * {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
  outline: rgb(153, 229, 181) none 0px;
  text-decoration: rgb(153, 229, 181);
  text-decoration-color: rgb(153, 229, 181);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(153, 229, 181);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(153, 229, 181);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(22, 63, 38);
  color: rgb(153, 229, 181);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(11, 21, 16);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(22, 63, 38);
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(22, 63, 38);
  color: rgb(153, 229, 181);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(153, 229, 181);
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
  font-family: "ModeSeven Regular";
}

body a.internal.tag-link::before {
  color: rgb(153, 229, 181);
}

body h1 {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

body h2 {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

body h2.page-title, h2.page-title a {
  color: rgb(153, 229, 181);
  font-family: "Scifi Title";
}

body h3 {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

body h4 {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

body h5 {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

body h6 {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

body hr {
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(11, 21, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 21, 16);
}

body ::-webkit-scrollbar-corner {
  background: rgb(11, 21, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 21, 16);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(11, 21, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 21, 16);
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(11, 21, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 21, 16);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(11, 21, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 21, 16);
}

body ::-webkit-scrollbar-track {
  background: rgb(11, 21, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 21, 16);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
  text-decoration: rgb(153, 229, 181);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
  text-decoration: rgb(153, 229, 181);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
  text-decoration: rgb(153, 229, 181);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(22, 63, 38);
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}`,
    footer: `body footer {
  background-color: rgb(11, 21, 16);
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

body footer ul li a {
  color: rgb(153, 229, 181);
  text-decoration: rgb(153, 229, 181);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(153, 229, 181);
  text-decoration: rgb(153, 229, 181);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body li.section-li > .section .meta {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(153, 229, 181);
  text-decoration: rgb(153, 229, 181);
}

body ul.section-ul {
  background-color: rgb(2, 7, 4);
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}

body .darkmode svg {
  color: rgb(153, 229, 181);
  stroke: rgb(153, 229, 181);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}

body .breadcrumb-element p {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}

body .metadata {
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

body .metadata-properties {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

body .navigation-progress {
  background-color: rgb(11, 21, 16);
}

body .page-header h2.page-title {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

body abbr {
  color: rgb(64, 178, 102);
  text-decoration: underline dotted rgb(64, 178, 102);
}

body details {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

body input[type=text] {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

body progress {
  border-bottom-color: rgb(64, 178, 102);
  border-left-color: rgb(64, 178, 102);
  border-right-color: rgb(64, 178, 102);
  border-top-color: rgb(64, 178, 102);
}

body sub {
  color: rgb(64, 178, 102);
  font-size: 12.5px;
}

body summary {
  color: rgb(153, 229, 181);
}

body sup {
  color: rgb(64, 178, 102);
  font-size: 12.5px;
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: #86C66C !important;
  --background-modifier-border: #C9D3CB !important;
  --background-modifier-border-focus: #20542C !important;
  --background-modifier-border-hover: #437A41 !important;
  --background-modifier-error: #C9D3CB !important;
  --background-modifier-error-hover: #437A41 !important;
  --background-modifier-error-rgb: #437A41 !important;
  --background-modifier-form-field: #C9D3CB !important;
  --background-modifier-form-field-hover: #C9D3CB !important;
  --background-modifier-hover: #86C66C !important;
  --background-modifier-message: #64A055 !important;
  --background-modifier-success: #C9D3CB !important;
  --background-modifier-success-rgb: #20542C !important;
  --background-primary: #D7DDD9 !important;
  --background-primary-alt: black !important;
  --background-secondary: #D7DDD9 !important;
  --background-secondary-alt: #D7DDD9 !important;
  --bases-cards-background: #D7DDD9 !important;
  --bases-cards-cover-background: black !important;
  --bases-cards-shadow: 0 0 0 1px #C9D3CB !important;
  --bases-cards-shadow-hover: 0 0 0 1px #437A41 !important;
  --bases-embed-border-color: #C9D3CB !important;
  --bases-group-heading-property-color: #20542C !important;
  --bases-table-border-color: #C9D3CB !important;
  --bases-table-cell-background-active: #D7DDD9 !important;
  --bases-table-cell-background-disabled: black !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #20542C !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #437A41 !important;
  --bases-table-group-background: black !important;
  --bases-table-header-background: #D7DDD9 !important;
  --bases-table-header-background-hover: #86C66C !important;
  --bases-table-header-color: #20542C !important;
  --bases-table-summary-background: #D7DDD9 !important;
  --bases-table-summary-background-hover: #86C66C !important;
  --blockquote-border-color: #437A41 !important;
  --blur-background: color-mix(in srgb, #D7DDD9 65%, transparent) linear-gradient(#D7DDD9, color-mix(in srgb, #D7DDD9 65%, transparent)) !important;
  --bodyFont: "ModeSeven Regular" !important;
  --canvas-background: #D7DDD9 !important;
  --canvas-card-label-color: #20542C !important;
  --caret-color: #20542C !important;
  --checkbox-border-color: #20542C !important;
  --checkbox-border-color-hover: #20542C !important;
  --checkbox-color: #437A41 !important;
  --checkbox-color-hover: #20542C !important;
  --checkbox-marker-color: #D7DDD9 !important;
  --checklist-done-color: #20542C !important;
  --code-background: black !important;
  --code-border-color: #C9D3CB !important;
  --code-bracket-background: #86C66C !important;
  --code-comment: #20542C !important;
  --code-normal: #20542C !important;
  --code-punctuation: #20542C !important;
  --codeFont: "ModeSeven Regular" !important;
  --col-accent: #437A41 !important;
  --col-accent-plus: #20542C !important;
  --col-base: #64A055 !important;
  --col-base-background: #D7DDD9 !important;
  --col-bckg-filetreeheader: #D7DDD9 !important;
  --col-bckg-mainpanels: #C9D3CB !important;
  --col-bckg-menudropdownhover: #86C66C !important;
  --col-bckg-menudropdowns: #86C66C !important;
  --col-bckg-selectedtitles: #86C66C !important;
  --col-danger: #86C66C !important;
  --col-ed-background: #D7DDD9 !important;
  --col-ed-bckg-checkbox-empty: #86C66C !important;
  --col-ed-bckg-checkbox-full: #20542C !important;
  --col-ed-bckg-codeblock: #86C66C !important;
  --col-ed-bckg-highlight: #64A055 !important;
  --col-ed-bckg-hyperlink-broken: #86C66C !important;
  --col-ed-bckg-quote: #D7DDD9 !important;
  --col-ed-bckg-quote-callout: #ACD580 !important;
  --col-ed-bckg-quote-warning: #86C66C !important;
  --col-ed-bckg-table: #D7DDD9 !important;
  --col-ed-bckg-tableh: #86C66C !important;
  --col-ed-bckg-tagbeg: #86C66C !important;
  --col-ed-bckg-tagend: #86C66C !important;
  --col-ed-caret: #20542C !important;
  --col-ed-hr: #64A055 !important;
  --col-ed-hyperlink: #0457E5 !important;
  --col-ed-hyperlink-broken: red !important;
  --col-ed-hyperlink-highlight-hover: #C9D3CB !important;
  --col-ed-hyperlink-hover: #011F64 !important;
  --col-ed-hyperlink-strikethrough: #3F8CFF !important;
  --col-ed-txt-checkbox-full: #86C66C !important;
  --col-ed-txt-codeblock: #437A41 !important;
  --col-ed-txt-h1: #437A41 !important;
  --col-ed-txt-h2: #437A41 !important;
  --col-ed-txt-h3: #437A41 !important;
  --col-ed-txt-h4: #437A41 !important;
  --col-ed-txt-h5: #437A41 !important;
  --col-ed-txt-h6: #437A41 !important;
  --col-ed-txt-highlight: #C9D3CB !important;
  --col-ed-txt-italic: #437A41 !important;
  --col-ed-txt-ol-bullet: #20542C !important;
  --col-ed-txt-p: #64A055 !important;
  --col-ed-txt-quote: #20542C !important;
  --col-ed-txt-strikethrough: #86C66C !important;
  --col-ed-txt-strong: #437A41 !important;
  --col-ed-txt-table: #64A055 !important;
  --col-ed-txt-tableh: #20542C !important;
  --col-ed-txt-tagbeg: #0457E5 !important;
  --col-ed-txt-tagend: #0457E5 !important;
  --col-ed-txt-title: #20542C !important;
  --col-ed-txt-ul-bullet: #20542C !important;
  --col-icons: #20542C !important;
  --col-important: #0457E5 !important;
  --col-important-muted: #3F8CFF !important;
  --col-important-plus: #011F64 !important;
  --col-menucheckbox: #437A41 !important;
  --col-muted: #86C66C !important;
  --col-muted-plus: #C9D3CB !important;
  --col-pr-background: #D7DDD9 !important;
  --col-pr-bckg-checkbox-empty: #86C66C !important;
  --col-pr-bckg-checkbox-full: #20542C !important;
  --col-pr-bckg-codeblock: #86C66C !important;
  --col-pr-bckg-highlight: #64A055 !important;
  --col-pr-bckg-quote: #D7DDD9 !important;
  --col-pr-bckg-quote-callout: #ACD580 !important;
  --col-pr-bckg-quote-warning: #86C66C !important;
  --col-pr-bckg-table: #D7DDD9 !important;
  --col-pr-bckg-tableh: #64A055 !important;
  --col-pr-bckg-tag: #0457E5 !important;
  --col-pr-hr: #64A055 !important;
  --col-pr-hyperlink-broken: red !important;
  --col-pr-txt-checkbox-full: #86C66C !important;
  --col-pr-txt-codeblock: #437A41 !important;
  --col-pr-txt-h1: #437A41 !important;
  --col-pr-txt-h2: #437A41 !important;
  --col-pr-txt-h3: #437A41 !important;
  --col-pr-txt-h4: #437A41 !important;
  --col-pr-txt-h5: #437A41 !important;
  --col-pr-txt-h6: #437A41 !important;
  --col-pr-txt-highlight: #C9D3CB !important;
  --col-pr-txt-hyperlink: #0457E5 !important;
  --col-pr-txt-hyperlink-highlight-hover: #C9D3CB !important;
  --col-pr-txt-hyperlink-hover: #011F64 !important;
  --col-pr-txt-hyperlink-strikethrough: #3F8CFF !important;
  --col-pr-txt-hyperlink-unresolved: #0457E5 !important;
  --col-pr-txt-italic: #437A41 !important;
  --col-pr-txt-ol-bullet: #20542C !important;
  --col-pr-txt-p: #64A055 !important;
  --col-pr-txt-quote: #20542C !important;
  --col-pr-txt-strikethrough: #86C66C !important;
  --col-pr-txt-strong: #437A41 !important;
  --col-pr-txt-table: #C9D3CB !important;
  --col-pr-txt-tableh: #20542C !important;
  --col-pr-txt-tag: #86C66C !important;
  --col-pr-txt-title: #20542C !important;
  --col-pr-txt-ul-bullet: #20542C !important;
  --col-safety: #ACD580 !important;
  --col-text-selection: #437254 !important;
  --col-txt-menudropdownhover: #437A41 !important;
  --col-txt-menudropdowns: #437A41 !important;
  --col-txt-selectedtitles: #20542C !important;
  --col-txt-titlebars: #E5EAE7 !important;
  --col-txt-titles: #437A41 !important;
  --collapse-icon-color: #20542C !important;
  --collapse-icon-color-collapsed: #20542C !important;
  --dark: #20542C !important;
  --darkgray: #20542C !important;
  --divider-color: #C9D3CB !important;
  --divider-color-hover: #437A41 !important;
  --dropdown-background: #64A055 !important;
  --dropdown-background-hover: #86C66C !important;
  --embed-block-shadow-hover: 0 0 0 1px #C9D3CB, inset 0 0 0 1px #C9D3CB !important;
  --embed-border-start: 2px solid #437A41 !important;
  --file-header-background: #D7DDD9 !important;
  --file-header-background-focused: #D7DDD9 !important;
  --file-header-font: "ModeSeven Regular" !important;
  --files-font-size: 1em !important;
  --flair-background: #64A055 !important;
  --flair-color: #20542C !important;
  --fnt-ed-headers: "ModeSeven Regular" !important;
  --fnt-ed-text: "ModeSeven Regular" !important;
  --fnt-ed-title: "Scifi Title" !important;
  --fnt-head-p: "ModeSeven Regular" !important;
  --fnt-pr-headers: "ModeSeven Regular" !important;
  --fnt-pr-text: "ModeSeven Regular" !important;
  --fnt-pr-title: "Scifi Title" !important;
  --fnt-title: "Scifi Title" !important;
  --folders-font-size: 1em !important;
  --font-interface: "ModeSeven Regular" !important;
  --footnote-divider-color: #C9D3CB !important;
  --footnote-id-color: #20542C !important;
  --footnote-id-color-no-occurrences: #20542C !important;
  --footnote-input-background-active: #86C66C !important;
  --graph-node: #20542C !important;
  --graph-node-focused: #20542C !important;
  --graph-node-unresolved: #20542C !important;
  --graph-text: #20542C !important;
  --gray: #20542C !important;
  --headerFont: "ModeSeven Regular" !important;
  --heading-formatting: #20542C !important;
  --highlight: #86C66C !important;
  --hr-color: #C9D3CB !important;
  --icon-color: #20542C !important;
  --icon-color-active: #20542C !important;
  --icon-color-focused: #20542C !important;
  --icon-color-hover: #20542C !important;
  --input-date-separator: #20542C !important;
  --input-placeholder-color: #20542C !important;
  --interactive-accent: #437A41 !important;
  --interactive-accent-hover: #20542C !important;
  --interactive-accent-hsl: #437A41 !important;
  --interactive-hover: #86C66C !important;
  --interactive-normal: #64A055 !important;
  --letterspacing-ed-headers: 1.5px !important;
  --letterspacing-ed-text: 0.5px !important;
  --letterspacing-pr-headers: 1.5px !important;
  --letterspacing-pr-text: 0.5px !important;
  --letterspacing-txt-headers: 1.5px !important;
  --letterspacing-txt-p: 0.5px !important;
  --light: #D7DDD9 !important;
  --lightgray: #D7DDD9 !important;
  --line-height-ed-headers: 20px !important;
  --line-height-ed-text: 20px !important;
  --line-height-pr-headers: 20px !important;
  --line-height-pr-text: 20px !important;
  --link-color: #20542C !important;
  --link-color-hover: #011F64 !important;
  --link-external-color: #20542C !important;
  --link-external-color-hover: #011F64 !important;
  --link-unresolved-color: #20542C !important;
  --link-unresolved-decoration-color: hsla(#437A41, 0.3) !important;
  --list-marker-color: #20542C !important;
  --list-marker-color-collapsed: #20542C !important;
  --list-marker-color-hover: #20542C !important;
  --menu-background: #D7DDD9 !important;
  --menu-border-color: #437A41 !important;
  --metadata-border-color: #C9D3CB !important;
  --metadata-divider-color: #C9D3CB !important;
  --metadata-input-background-active: #86C66C !important;
  --metadata-input-font: "ModeSeven Regular" !important;
  --metadata-input-text-color: #20542C !important;
  --metadata-label-background-active: #86C66C !important;
  --metadata-label-font: "ModeSeven Regular" !important;
  --metadata-label-text-color: #20542C !important;
  --metadata-label-text-color-hover: #20542C !important;
  --metadata-property-background-active: #86C66C !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #20542C !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #437A41 !important;
  --modal-background: #D7DDD9 !important;
  --nav-collapse-icon-color: #20542C !important;
  --nav-collapse-icon-color-collapsed: #20542C !important;
  --nav-heading-color: #20542C !important;
  --nav-heading-color-collapsed: #20542C !important;
  --nav-heading-color-collapsed-hover: #20542C !important;
  --nav-heading-color-hover: #20542C !important;
  --nav-item-background-active: #86C66C !important;
  --nav-item-background-hover: #86C66C !important;
  --nav-item-color: #20542C !important;
  --nav-item-color-active: #20542C !important;
  --nav-item-color-highlighted: #20542C !important;
  --nav-item-color-hover: #20542C !important;
  --nav-item-color-selected: #20542C !important;
  --nav-tag-color: #20542C !important;
  --nav-tag-color-active: #20542C !important;
  --nav-tag-color-hover: #20542C !important;
  --oz-fta-file-font-size: 1em !important;
  --oz-fta-folder-font-size: 1em !important;
  --pad-ed-headers: 5px !important;
  --pdf-background: #D7DDD9 !important;
  --pdf-page-background: #D7DDD9 !important;
  --pdf-sidebar-background: #D7DDD9 !important;
  --pill-border-color: #C9D3CB !important;
  --pill-border-color-hover: #437A41 !important;
  --pill-color: #20542C !important;
  --pill-color-hover: #20542C !important;
  --pill-color-remove: #20542C !important;
  --pill-color-remove-hover: #20542C !important;
  --prompt-background: #D7DDD9 !important;
  --raised-background: color-mix(in srgb, #D7DDD9 65%, transparent) linear-gradient(#D7DDD9, color-mix(in srgb, #D7DDD9 65%, transparent)) !important;
  --ribbon-background: #D7DDD9 !important;
  --ribbon-background-collapsed: #D7DDD9 !important;
  --search-clear-button-color: #20542C !important;
  --search-icon-color: #20542C !important;
  --search-result-background: #D7DDD9 !important;
  --secondary: #20542C !important;
  --setting-group-heading-color: #20542C !important;
  --setting-items-background: black !important;
  --setting-items-border-color: #C9D3CB !important;
  --siz-ed-txt-codeblock: 1em !important;
  --siz-ed-txt-h1: 1.75em !important;
  --siz-ed-txt-h2: 1.6em !important;
  --siz-ed-txt-h3: 1.45em !important;
  --siz-ed-txt-h4: 1.3em !important;
  --siz-ed-txt-h5: 1.15em !important;
  --siz-ed-txt-h6: 1em !important;
  --siz-ed-txt-highlight: 1em !important;
  --siz-ed-txt-italic: 1em !important;
  --siz-ed-txt-p: 1em !important;
  --siz-ed-txt-quote: 1em !important;
  --siz-ed-txt-strong: 1em !important;
  --siz-ed-txt-table: 1em !important;
  --siz-ed-txt-title: 2em !important;
  --siz-pr-txt-codeblock: 1em !important;
  --siz-pr-txt-h1: 1.75em !important;
  --siz-pr-txt-h2: 1.6em !important;
  --siz-pr-txt-h3: 1.45em !important;
  --siz-pr-txt-h4: 1.3em !important;
  --siz-pr-txt-h5: 1.15em !important;
  --siz-pr-txt-h6: 1em !important;
  --siz-pr-txt-highlight: 1em !important;
  --siz-pr-txt-italic: 1em !important;
  --siz-pr-txt-p: 1em !important;
  --siz-pr-txt-quote: 1em !important;
  --siz-pr-txt-strong: 1em !important;
  --siz-pr-txt-table: 1em !important;
  --siz-pr-txt-title: 2em !important;
  --siz-txt-h1: 1.75em !important;
  --siz-txt-h2: 1.6em !important;
  --siz-txt-h3: 1.45em !important;
  --siz-txt-h4: 1.3em !important;
  --siz-txt-h5: 1.15em !important;
  --siz-txt-h6: 1em !important;
  --siz-txt-p: 1em !important;
  --siz-txt-title: 2em !important;
  --slider-thumb-border-color: #437A41 !important;
  --slider-track-background: #C9D3CB !important;
  --status-bar-background: #D7DDD9 !important;
  --status-bar-border-color: #C9D3CB !important;
  --status-bar-text-color: #20542C !important;
  --suggestion-background: #D7DDD9 !important;
  --tab-background-active: #D7DDD9 !important;
  --tab-container-background: #D7DDD9 !important;
  --tab-divider-color: #437A41 !important;
  --tab-outline-color: #C9D3CB !important;
  --tab-switcher-background: #D7DDD9 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #D7DDD9, transparent) !important;
  --tab-text-color: #20542C !important;
  --tab-text-color-active: #20542C !important;
  --tab-text-color-focused: #20542C !important;
  --tab-text-color-focused-active: #20542C !important;
  --tab-text-color-focused-active-current: #20542C !important;
  --tab-text-color-focused-highlighted: #20542C !important;
  --table-add-button-border-color: #C9D3CB !important;
  --table-border-color: #C9D3CB !important;
  --table-drag-handle-background-active: #437A41 !important;
  --table-drag-handle-color: #20542C !important;
  --table-drag-handle-color-active: #C9D3CB !important;
  --table-header-border-color: #C9D3CB !important;
  --table-header-color: #20542C !important;
  --table-selection-border-color: #437A41 !important;
  --tag-background: hsla(#437A41, 0.1) !important;
  --tag-background-hover: hsla(#437A41, 0.2) !important;
  --tag-border-color: hsla(#437A41, 0.15) !important;
  --tag-border-color-hover: hsla(#437A41, 0.15) !important;
  --tag-color: #20542C !important;
  --tag-color-hover: #20542C !important;
  --tertiary: #011F64 !important;
  --text-accent: #20542C !important;
  --text-accent-hover: #011F64 !important;
  --text-error: #0457E5 !important;
  --text-faint: #20542C !important;
  --text-muted: #20542C !important;
  --text-normal: #20542C !important;
  --text-on-accent: #C9D3CB !important;
  --text-selection: #437254 !important;
  --text-success: #437A41 !important;
  --textHighlight: #86C66C !important;
  --titleFont: "ModeSeven Regular" !important;
  --titlebar-background: #D7DDD9 !important;
  --titlebar-background-focused: #D7DDD9 !important;
  --titlebar-border-color: #C9D3CB !important;
  --titlebar-text-color: #20542C !important;
  --titlebar-text-color-focused: #20542C !important;
  --vault-profile-color: #20542C !important;
  --vault-profile-color-hover: #20542C !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(215, 221, 217);
  color: rgb(32, 84, 44);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(215, 221, 217);
  color: rgb(32, 84, 44);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(215, 221, 217);
  color: rgb(32, 84, 44);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(201, 211, 203);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(215, 221, 217);
  border-left-color: rgb(201, 211, 203);
  color: rgb(32, 84, 44);
}

body div#quartz-root {
  background-color: rgb(215, 221, 217);
  color: rgb(32, 84, 44);
}`,
    typography: `body .page article p > b, b {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
  outline: rgb(67, 122, 65) none 0px;
  text-decoration: rgb(67, 122, 65);
  text-decoration-color: rgb(67, 122, 65);
}

body .page article p > em, em {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
  outline: rgb(67, 122, 65) none 0px;
  text-decoration: rgb(67, 122, 65);
  text-decoration-color: rgb(67, 122, 65);
}

body .page article p > i, i {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
  outline: rgb(67, 122, 65) none 0px;
  text-decoration: rgb(67, 122, 65);
  text-decoration-color: rgb(67, 122, 65);
}

body .page article p > strong, strong {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
  outline: rgb(67, 122, 65) none 0px;
  text-decoration: rgb(67, 122, 65);
  text-decoration-color: rgb(67, 122, 65);
}

body .text-highlight {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
  outline: rgb(32, 84, 44) none 0px;
  text-decoration: rgb(32, 84, 44);
  text-decoration-color: rgb(32, 84, 44);
}

body del {
  color: rgb(100, 160, 85);
  font-family: "ModeSeven Regular";
  outline: rgb(100, 160, 85) none 0px;
  text-decoration: line-through rgb(100, 160, 85);
  text-decoration-color: rgb(100, 160, 85);
}

body p {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
  outline: rgb(32, 84, 44) none 0px;
  text-decoration: rgb(32, 84, 44);
  text-decoration-color: rgb(32, 84, 44);
}`,
    links: `body a.external, footer a {
  color: rgb(4, 87, 229);
  font-family: "ModeSeven Regular";
  outline: rgb(4, 87, 229) none 0px;
  text-decoration: underline rgb(4, 87, 229);
  text-decoration-color: rgb(4, 87, 229);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(4, 87, 229);
  font-family: "ModeSeven Regular";
  outline: rgb(4, 87, 229) none 0px;
  text-decoration: underline rgb(4, 87, 229);
  text-decoration-color: rgb(4, 87, 229);
}

body a.internal.broken {
  color: rgb(255, 0, 0);
  font-family: "ModeSeven Regular";
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: underline rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}`,
    lists: `body dd {
  color: rgb(32, 84, 44);
}

body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

body dt {
  color: rgb(32, 84, 44);
}

body ol > li {
  color: rgb(100, 160, 85);
}

body ol.overflow {
  background-color: rgb(215, 221, 217);
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body ul > li {
  color: rgb(100, 160, 85);
}

body ul.overflow {
  background-color: rgb(215, 221, 217);
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(32, 84, 44);
  text-decoration: rgb(32, 84, 44);
}

body blockquote {
  font-family: "ModeSeven Regular";
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body table {
  background-color: rgb(215, 221, 217);
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
  width: 226.922px;
}

body td {
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
  color: rgb(32, 84, 44);
}

body th {
  background-color: rgb(100, 160, 85);
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
  color: rgb(32, 84, 44);
}

body thead {
  background-color: rgb(100, 160, 85);
}`,
    code: `body code {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(134, 198, 108);
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(134, 198, 108);
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
  color: rgb(67, 122, 65);
}

body pre > code, pre:has(> code) {
  background-color: rgb(134, 198, 108);
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
}

body pre:has(> code) {
  background-color: rgb(134, 198, 108);
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
}`,
    images: `body audio {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body figcaption {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

body figure {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body img {
  border-bottom-color: rgb(100, 160, 85);
  border-left-color: rgb(100, 160, 85);
  border-right-color: rgb(100, 160, 85);
  border-top-color: rgb(100, 160, 85);
}

body video {
  border-bottom-color: rgb(100, 160, 85);
  border-left-color: rgb(100, 160, 85);
  border-right-color: rgb(100, 160, 85);
  border-top-color: rgb(100, 160, 85);
}`,
    embeds: `body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body .footnotes {
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}

body .transclude {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(67, 122, 65);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body .transclude-inner {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(67, 122, 65);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "ModeSeven Regular";
}

body .katex-display > .katex > .katex-html {
  font-family: "ModeSeven Regular";
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(134, 198, 108);
  text-decoration: line-through rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body input[type=checkbox] {
  border-bottom-color: rgb(134, 198, 108);
  border-left-color: rgb(134, 198, 108);
  border-right-color: rgb(134, 198, 108);
  border-top-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='!'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='*'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='-'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='/'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='>'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='?'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='I'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='S'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='b'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='c'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='d'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='f'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='i'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='k'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='l'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='p'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='u'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

body li.task-list-item[data-task='w'] {
  color: rgb(134, 198, 108);
  text-decoration: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="bug"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="danger"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="example"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="failure"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="info"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="note"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="question"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="quote"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="success"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="tip"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="todo"] {
  background-color: rgb(172, 213, 128);
}

body .callout[data-callout="warning"] {
  background-color: rgb(134, 198, 108);
}`,
    search: `body .search > .search-button {
  background-color: rgb(201, 211, 203);
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

body .search > .search-container > .search-space {
  background-color: rgb(215, 221, 217);
}

body .search > .search-container > .search-space > * {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
  outline: rgb(32, 84, 44) none 0px;
  text-decoration: rgb(32, 84, 44);
  text-decoration-color: rgb(32, 84, 44);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(32, 84, 44);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(32, 84, 44);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(134, 198, 108);
  color: rgb(32, 84, 44);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(215, 221, 217);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(134, 198, 108);
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(134, 198, 108);
  color: rgb(32, 84, 44);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(32, 84, 44);
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
  font-family: "ModeSeven Regular";
}

body a.internal.tag-link::before {
  color: rgb(32, 84, 44);
}

body h1 {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

body h2 {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

body h2.page-title, h2.page-title a {
  color: rgb(32, 84, 44);
  font-family: "Scifi Title";
}

body h3 {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

body h4 {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

body h5 {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

body h6 {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

body hr {
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(215, 221, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(215, 221, 217);
}

body ::-webkit-scrollbar-corner {
  background: rgb(215, 221, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(215, 221, 217);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(215, 221, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(215, 221, 217);
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(215, 221, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(215, 221, 217);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(215, 221, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(215, 221, 217);
}

body ::-webkit-scrollbar-track {
  background: rgb(215, 221, 217) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(215, 221, 217);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
  text-decoration: rgb(32, 84, 44);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
  text-decoration: rgb(32, 84, 44);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
  text-decoration: rgb(32, 84, 44);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(134, 198, 108);
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}`,
    footer: `body footer {
  background-color: rgb(215, 221, 217);
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

body footer ul li a {
  color: rgb(32, 84, 44);
  text-decoration: rgb(32, 84, 44);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(32, 84, 44);
  text-decoration: rgb(32, 84, 44);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body li.section-li > .section .meta {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(32, 84, 44);
  text-decoration: rgb(32, 84, 44);
}

body ul.section-ul {
  background-color: rgb(201, 211, 203);
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}

body .darkmode svg {
  color: rgb(32, 84, 44);
  stroke: rgb(32, 84, 44);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}

body .breadcrumb-element p {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}

body .metadata {
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

body .metadata-properties {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

body .navigation-progress {
  background-color: rgb(215, 221, 217);
}

body .page-header h2.page-title {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

body abbr {
  color: rgb(100, 160, 85);
  text-decoration: underline dotted rgb(100, 160, 85);
}

body details {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

body input[type=text] {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

body progress {
  border-bottom-color: rgb(100, 160, 85);
  border-left-color: rgb(100, 160, 85);
  border-right-color: rgb(100, 160, 85);
  border-top-color: rgb(100, 160, 85);
}

body sub {
  color: rgb(100, 160, 85);
  font-size: 12.5px;
}

body summary {
  color: rgb(32, 84, 44);
}

body sup {
  color: rgb(100, 160, 85);
  font-size: 12.5px;
}`,
  },
};
