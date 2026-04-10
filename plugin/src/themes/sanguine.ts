import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sanguine",
    modes: ["dark"],
    variations: [],
    fonts: ["slasher-film"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-active-hover: #D8B131 !important;
  --background-modifier-border: #232221 !important;
  --background-modifier-border-focus: #D8B131 !important;
  --background-modifier-border-hover: #232221 !important;
  --background-modifier-error: #191919 !important;
  --background-modifier-error-hover: #D92926 !important;
  --background-modifier-error-rgb: #D8B131 !important;
  --background-modifier-form-field: #191919 !important;
  --background-modifier-form-field-hover: #191919 !important;
  --background-modifier-hover: #D8B131 !important;
  --background-modifier-message: #D92926 !important;
  --background-modifier-success: #232221 !important;
  --background-modifier-success-rgb: #FF4949 !important;
  --background-primary: #030308 !important;
  --background-primary-alt: black !important;
  --background-secondary: #030308 !important;
  --background-secondary-alt: #030308 !important;
  --bases-cards-background: #030308 !important;
  --bases-cards-cover-background: black !important;
  --bases-cards-shadow: 0 0 0 1px #232221 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #232221 !important;
  --bases-embed-border-color: #232221 !important;
  --bases-group-heading-property-color: #83888C !important;
  --bases-table-border-color: #232221 !important;
  --bases-table-cell-background-active: #030308 !important;
  --bases-table-cell-background-disabled: black !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #D8B131 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #D92926 !important;
  --bases-table-group-background: black !important;
  --bases-table-header-background: #030308 !important;
  --bases-table-header-background-hover: #D8B131 !important;
  --bases-table-header-color: #83888C !important;
  --bases-table-summary-background: #030308 !important;
  --bases-table-summary-background-hover: #D8B131 !important;
  --blockquote-border-color: #D92926 !important;
  --blur-background: color-mix(in srgb, #E4E5E0 65%, transparent) linear-gradient(#E4E5E0, color-mix(in srgb, #E4E5E0 65%, transparent)) !important;
  --bodyFont: "Slasher Regular" !important;
  --canvas-background: #030308 !important;
  --canvas-card-label-color: #83888C !important;
  --caret-color: #83888C !important;
  --checkbox-border-color: #83888C !important;
  --checkbox-border-color-hover: #83888C !important;
  --checkbox-color: #D92926 !important;
  --checkbox-color-hover: #D8B131 !important;
  --checkbox-marker-color: #030308 !important;
  --checklist-done-color: #83888C !important;
  --code-background: black !important;
  --code-border-color: #232221 !important;
  --code-bracket-background: #D8B131 !important;
  --code-comment: #83888C !important;
  --code-normal: #83888C !important;
  --code-punctuation: #83888C !important;
  --codeFont: "Slasher Regular" !important;
  --col-accent: #D92926 !important;
  --col-accent-plus: #FF4949 !important;
  --col-base: #E4E5E0 !important;
  --col-base-background: #030308 !important;
  --col-bckg-filetreeheader: #030308 !important;
  --col-bckg-mainpanels: #191919 !important;
  --col-bckg-menudropdownhover: #232221 !important;
  --col-bckg-menudropdowns: #191919 !important;
  --col-bckg-selectedtitles: #D8B131 !important;
  --col-danger: #232221 !important;
  --col-ed-background: #030308 !important;
  --col-ed-bckg-checkbox-empty: #D92926 !important;
  --col-ed-bckg-checkbox-full: #83888C !important;
  --col-ed-bckg-codeblock: #232221 !important;
  --col-ed-bckg-highlight: #D8B131 !important;
  --col-ed-bckg-hyperlink-broken: #232221 !important;
  --col-ed-bckg-quote: #030308 !important;
  --col-ed-bckg-quote-callout: #232221 !important;
  --col-ed-bckg-quote-warning: #232221 !important;
  --col-ed-bckg-table: #030308 !important;
  --col-ed-bckg-tableh: #232221 !important;
  --col-ed-bckg-tagbeg: #232221 !important;
  --col-ed-bckg-tagend: #232221 !important;
  --col-ed-caret: #FF4949 !important;
  --col-ed-hr: #83888C !important;
  --col-ed-hyperlink: #D8B131 !important;
  --col-ed-hyperlink-broken: red !important;
  --col-ed-hyperlink-highlight-hover: #232221 !important;
  --col-ed-hyperlink-hover: #FFD059 !important;
  --col-ed-hyperlink-strikethrough: #9B7F31 !important;
  --col-ed-txt-checkbox-full: #83888C !important;
  --col-ed-txt-codeblock: #D92926 !important;
  --col-ed-txt-h1: #D92926 !important;
  --col-ed-txt-h2: #D92926 !important;
  --col-ed-txt-h3: #D92926 !important;
  --col-ed-txt-h4: #D92926 !important;
  --col-ed-txt-h5: #D92926 !important;
  --col-ed-txt-h6: #D92926 !important;
  --col-ed-txt-highlight: #232221 !important;
  --col-ed-txt-italic: #D92926 !important;
  --col-ed-txt-ol-bullet: #FF4949 !important;
  --col-ed-txt-p: #E4E5E0 !important;
  --col-ed-txt-quote: #FF4949 !important;
  --col-ed-txt-strikethrough: #83888C !important;
  --col-ed-txt-strong: #D92926 !important;
  --col-ed-txt-table: #E4E5E0 !important;
  --col-ed-txt-tableh: #D92926 !important;
  --col-ed-txt-tagbeg: #D8B131 !important;
  --col-ed-txt-tagend: #D8B131 !important;
  --col-ed-txt-title: #D92926 !important;
  --col-ed-txt-ul-bullet: #FF4949 !important;
  --col-icons: #83888C !important;
  --col-important: #D8B131 !important;
  --col-important-muted: #9B7F31 !important;
  --col-important-plus: #FFD059 !important;
  --col-menucheckbox: #D92926 !important;
  --col-muted: #83888C !important;
  --col-muted-plus: #232221 !important;
  --col-muted-plus-plus: #191919 !important;
  --col-pr-background: #030308 !important;
  --col-pr-bckg-checkbox-empty: #D92926 !important;
  --col-pr-bckg-checkbox-full: #83888C !important;
  --col-pr-bckg-codeblock: #232221 !important;
  --col-pr-bckg-highlight: #D8B131 !important;
  --col-pr-bckg-quote: #030308 !important;
  --col-pr-bckg-quote-callout: #232221 !important;
  --col-pr-bckg-quote-warning: #232221 !important;
  --col-pr-bckg-table: #030308 !important;
  --col-pr-bckg-tableh: #232221 !important;
  --col-pr-bckg-tag: #D8B131 !important;
  --col-pr-hr: #83888C !important;
  --col-pr-hyperlink-broken: red !important;
  --col-pr-txt-checkbox-full: #83888C !important;
  --col-pr-txt-codeblock: #D92926 !important;
  --col-pr-txt-h1: #D92926 !important;
  --col-pr-txt-h2: #D92926 !important;
  --col-pr-txt-h3: #D92926 !important;
  --col-pr-txt-h4: #D92926 !important;
  --col-pr-txt-h5: #D92926 !important;
  --col-pr-txt-h6: #D92926 !important;
  --col-pr-txt-highlight: #232221 !important;
  --col-pr-txt-hyperlink: #D8B131 !important;
  --col-pr-txt-hyperlink-highlight-hover: #232221 !important;
  --col-pr-txt-hyperlink-hover: #FFD059 !important;
  --col-pr-txt-hyperlink-strikethrough: #9B7F31 !important;
  --col-pr-txt-hyperlink-unresolved: #D8B131 !important;
  --col-pr-txt-italic: #D92926 !important;
  --col-pr-txt-ol-bullet: #FF4949 !important;
  --col-pr-txt-p: #E4E5E0 !important;
  --col-pr-txt-quote: #FF4949 !important;
  --col-pr-txt-strikethrough: #83888C !important;
  --col-pr-txt-strong: #D92926 !important;
  --col-pr-txt-table: #E4E5E0 !important;
  --col-pr-txt-tableh: #D92926 !important;
  --col-pr-txt-tag: #232221 !important;
  --col-pr-txt-title: #D92926 !important;
  --col-pr-txt-ul-bullet: #FF4949 !important;
  --col-safety: #232221 !important;
  --col-txt-files: #E4E5E0 !important;
  --col-txt-menudropdownhover: #D92926 !important;
  --col-txt-menudropdowns: #D92926 !important;
  --col-txt-selectedtitles: #232221 !important;
  --col-txt-titlebars: #030308 !important;
  --col-txt-titles: #D92926 !important;
  --collapse-icon-color: #83888C !important;
  --collapse-icon-color-collapsed: #FF4949 !important;
  --dark: #83888C !important;
  --darkgray: #83888C !important;
  --divider-color: #232221 !important;
  --divider-color-hover: #D92926 !important;
  --dropdown-background: #E4E5E0 !important;
  --dropdown-background-hover: #D8B131 !important;
  --embed-block-shadow-hover: 0 0 0 1px #232221, inset 0 0 0 1px #232221 !important;
  --embed-border-start: 2px solid #D92926 !important;
  --file-header-background: #030308 !important;
  --file-header-background-focused: #030308 !important;
  --file-header-font: "Slasher Regular" !important;
  --files-font-size: 1em !important;
  --flair-background: #E4E5E0 !important;
  --flair-color: #83888C !important;
  --fnt-ed-headers: "Slasher Regular" !important;
  --fnt-ed-text: "Slasher Regular" !important;
  --fnt-ed-title: "Slasher Title" !important;
  --fnt-head-p: "Slasher Regular" !important;
  --fnt-pr-headers: "Slasher Regular" !important;
  --fnt-pr-text: "Slasher Regular" !important;
  --fnt-pr-title: "Slasher Title" !important;
  --fnt-title: "Slasher Title" !important;
  --folders-font-size: 1em !important;
  --font-interface: "Slasher Regular" !important;
  --footnote-divider-color: #232221 !important;
  --footnote-id-color: #83888C !important;
  --footnote-id-color-no-occurrences: #83888C !important;
  --footnote-input-background-active: #D8B131 !important;
  --graph-node: #83888C !important;
  --graph-node-focused: #FF4949 !important;
  --graph-node-unresolved: #83888C !important;
  --graph-text: #83888C !important;
  --gray: #83888C !important;
  --headerFont: "Slasher Regular" !important;
  --heading-formatting: #83888C !important;
  --highlight: #D8B131 !important;
  --hr-color: #232221 !important;
  --icon-color: #83888C !important;
  --icon-color-active: #FF4949 !important;
  --icon-color-focused: #83888C !important;
  --icon-color-hover: #83888C !important;
  --input-date-separator: #83888C !important;
  --input-placeholder-color: #83888C !important;
  --interactive-accent: #D92926 !important;
  --interactive-accent-hover: #D8B131 !important;
  --interactive-accent-hsl: #D92926 !important;
  --interactive-hover: #D8B131 !important;
  --interactive-normal: #E4E5E0 !important;
  --letterspacing-ed-headers: 1.5px !important;
  --letterspacing-ed-text: 0.5px !important;
  --letterspacing-pr-headers: 1.5px !important;
  --letterspacing-pr-text: 0.5px !important;
  --letterspacing-txt-headers: 1.5px !important;
  --letterspacing-txt-p: 0.5px !important;
  --light: #030308 !important;
  --lightgray: #030308 !important;
  --line-height-ed-headers: 20px !important;
  --line-height-ed-text: 20px !important;
  --line-height-pr-headers: 20px !important;
  --line-height-pr-text: 20px !important;
  --link-color: #FF4949 !important;
  --link-color-hover: #FFD059 !important;
  --link-external-color: #FF4949 !important;
  --link-external-color-hover: #FFD059 !important;
  --link-unresolved-color: #FF4949 !important;
  --link-unresolved-decoration-color: hsla(#D92926, 0.3) !important;
  --list-marker-color: #83888C !important;
  --list-marker-color-collapsed: #FF4949 !important;
  --list-marker-color-hover: #83888C !important;
  --menu-background: #030308 !important;
  --menu-border-color: #232221 !important;
  --metadata-border-color: #232221 !important;
  --metadata-divider-color: #232221 !important;
  --metadata-input-background-active: #D8B131 !important;
  --metadata-input-font: "Slasher Regular" !important;
  --metadata-input-text-color: #83888C !important;
  --metadata-label-background-active: #D8B131 !important;
  --metadata-label-font: "Slasher Regular" !important;
  --metadata-label-text-color: #83888C !important;
  --metadata-label-text-color-hover: #83888C !important;
  --metadata-property-background-active: #D8B131 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #D8B131 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #232221 !important;
  --modal-background: #030308 !important;
  --nav-collapse-icon-color: #83888C !important;
  --nav-collapse-icon-color-collapsed: #83888C !important;
  --nav-heading-color: #83888C !important;
  --nav-heading-color-collapsed: #83888C !important;
  --nav-heading-color-collapsed-hover: #83888C !important;
  --nav-heading-color-hover: #83888C !important;
  --nav-item-background-active: #D8B131 !important;
  --nav-item-background-hover: #D8B131 !important;
  --nav-item-color: #83888C !important;
  --nav-item-color-active: #83888C !important;
  --nav-item-color-highlighted: #FF4949 !important;
  --nav-item-color-hover: #83888C !important;
  --nav-item-color-selected: #83888C !important;
  --nav-tag-color: #83888C !important;
  --nav-tag-color-active: #83888C !important;
  --nav-tag-color-hover: #83888C !important;
  --oz-fta-file-font-size: 1em !important;
  --oz-fta-folder-font-size: 1em !important;
  --pad-ed-headers: 5px !important;
  --pdf-background: #030308 !important;
  --pdf-page-background: #030308 !important;
  --pdf-shadow: 0 0 0 1px #232221 !important;
  --pdf-sidebar-background: #030308 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #232221 !important;
  --pill-border-color: #232221 !important;
  --pill-border-color-hover: #232221 !important;
  --pill-color: #83888C !important;
  --pill-color-hover: #83888C !important;
  --pill-color-remove: #83888C !important;
  --pill-color-remove-hover: #FF4949 !important;
  --prompt-background: #030308 !important;
  --raised-background: color-mix(in srgb, #E4E5E0 65%, transparent) linear-gradient(#E4E5E0, color-mix(in srgb, #E4E5E0 65%, transparent)) !important;
  --ribbon-background: #030308 !important;
  --ribbon-background-collapsed: #030308 !important;
  --search-clear-button-color: #83888C !important;
  --search-icon-color: #83888C !important;
  --search-result-background: #030308 !important;
  --secondary: #FF4949 !important;
  --setting-group-heading-color: #83888C !important;
  --setting-items-background: black !important;
  --setting-items-border-color: #232221 !important;
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
  --slider-thumb-border-color: #232221 !important;
  --slider-track-background: #232221 !important;
  --status-bar-background: #030308 !important;
  --status-bar-border-color: #232221 !important;
  --status-bar-text-color: #83888C !important;
  --suggestion-background: #030308 !important;
  --tab-background-active: #030308 !important;
  --tab-container-background: #030308 !important;
  --tab-divider-color: #232221 !important;
  --tab-outline-color: #232221 !important;
  --tab-switcher-background: #030308 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #030308, transparent) !important;
  --tab-text-color: #83888C !important;
  --tab-text-color-active: #83888C !important;
  --tab-text-color-focused: #83888C !important;
  --tab-text-color-focused-active: #83888C !important;
  --tab-text-color-focused-active-current: #83888C !important;
  --tab-text-color-focused-highlighted: #FF4949 !important;
  --table-add-button-border-color: #232221 !important;
  --table-border-color: #232221 !important;
  --table-drag-handle-background-active: #D92926 !important;
  --table-drag-handle-color: #83888C !important;
  --table-drag-handle-color-active: #232221 !important;
  --table-header-border-color: #232221 !important;
  --table-header-color: #83888C !important;
  --table-selection-border-color: #D92926 !important;
  --tag-background: hsla(#D92926, 0.1) !important;
  --tag-background-hover: hsla(#D92926, 0.2) !important;
  --tag-border-color: hsla(#D92926, 0.15) !important;
  --tag-border-color-hover: hsla(#D92926, 0.15) !important;
  --tag-color: #FF4949 !important;
  --tag-color-hover: #FF4949 !important;
  --tertiary: #FFD059 !important;
  --text-accent: #FF4949 !important;
  --text-accent-hover: #FFD059 !important;
  --text-error: #D8B131 !important;
  --text-faint: #83888C !important;
  --text-muted: #83888C !important;
  --text-normal: #83888C !important;
  --text-on-accent: #232221 !important;
  --text-selection: #83888C !important;
  --text-success: #D92926 !important;
  --textHighlight: #D8B131 !important;
  --titleFont: "Slasher Regular" !important;
  --titlebar-background: #030308 !important;
  --titlebar-background-focused: #030308 !important;
  --titlebar-border-color: #232221 !important;
  --titlebar-text-color: #83888C !important;
  --titlebar-text-color-focused: #83888C !important;
  --vault-profile-color: #83888C !important;
  --vault-profile-color-hover: #83888C !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body .bases-table thead th {
  background-color: rgb(35, 34, 33);
  border-color: rgb(35, 34, 33);
  color: rgb(217, 41, 38);
}

html body .canvas-node {
  border-color: rgb(131, 136, 140);
}

html body .canvas-node-content {
  color: rgb(131, 136, 140);
}

html body .canvas-node-file {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body .canvas-node-group {
  border-color: rgb(131, 136, 140);
}

html body .canvas-sidebar {
  background-color: rgb(3, 3, 8);
  border-color: rgb(131, 136, 140);
}

html body .note-properties {
  border-color: rgb(35, 34, 33);
}

html body .note-properties-key {
  color: rgb(131, 136, 140);
}

html body .note-properties-row {
  border-color: rgb(131, 136, 140);
}

html body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 26.25px;
  color: rgb(255, 73, 73);
}

html body .note-properties-value {
  color: rgb(131, 136, 140);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(35, 34, 33);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(3, 3, 8);
  border-left-color: rgb(35, 34, 33);
  color: rgb(131, 136, 140);
}

html body div#quartz-root {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
  outline: rgb(217, 41, 38) none 0px;
  text-decoration-color: rgb(217, 41, 38);
}

html body .page article p > em, html em {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
  outline: rgb(217, 41, 38) none 0px;
  text-decoration-color: rgb(217, 41, 38);
}

html body .page article p > i, html i {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
  outline: rgb(217, 41, 38) none 0px;
  text-decoration-color: rgb(217, 41, 38);
}

html body .page article p > strong, html strong {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
  outline: rgb(217, 41, 38) none 0px;
  text-decoration-color: rgb(217, 41, 38);
}

html body .text-highlight {
  background-color: rgb(216, 177, 49);
  color: rgb(35, 34, 33);
  font-family: "Slasher Regular";
  outline: rgb(35, 34, 33) none 0px;
  text-decoration-color: rgb(35, 34, 33);
}

html body del {
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
  outline: rgb(131, 136, 140) none 0px;
  text-decoration-color: rgb(131, 136, 140);
}

html body h1.article-title {
  color: rgb(131, 136, 140);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(131, 136, 140);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(131, 136, 140);
  border-color: rgb(131, 136, 140);
}

html body p {
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
  outline: rgb(131, 136, 140) none 0px;
  text-decoration-color: rgb(131, 136, 140);
}`,
    links: `html body a.external, html footer a {
  color: rgb(216, 177, 49);
  font-family: "Slasher Regular";
  outline: rgb(216, 177, 49) none 0px;
  text-decoration-color: rgb(216, 177, 49);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(216, 177, 49);
  font-family: "Slasher Regular";
  outline: rgb(216, 177, 49) none 0px;
  text-decoration-color: rgb(216, 177, 49);
}

html body a.internal.broken {
  color: rgb(255, 0, 0);
  font-family: "Slasher Regular";
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: underline;
  text-decoration-color: rgb(255, 0, 0);
}`,
    lists: `html body dd {
  color: rgb(131, 136, 140);
}

html body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

html body dt {
  color: rgb(131, 136, 140);
}

html body ol > li {
  color: rgb(228, 229, 224);
}

html body ol.overflow {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

html body ul > li {
  color: rgb(228, 229, 224);
}

html body ul.overflow {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(131, 136, 140);
}

html body blockquote {
  font-family: "Slasher Regular";
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

html body table {
  background-color: rgb(3, 3, 8);
  color: rgb(228, 229, 224);
  font-family: "Slasher Regular";
  width: 196.234px;
}

html body tbody {
  background-color: rgb(3, 3, 8);
}

html body td {
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  color: rgb(228, 229, 224);
}

html body th {
  background-color: rgb(35, 34, 33);
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  color: rgb(217, 41, 38);
}

html body thead {
  background-color: rgb(35, 34, 33);
}`,
    code: `html body code {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(35, 34, 33);
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(35, 34, 33);
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  color: rgb(217, 41, 38);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(35, 34, 33);
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
}

html body pre:has(> code) {
  background-color: rgb(35, 34, 33);
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
}`,
    images: `html body audio {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

html body figcaption {
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}

html body figure {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

html body img {
  border-bottom-color: rgb(217, 41, 38);
  border-left-color: rgb(217, 41, 38);
  border-right-color: rgb(217, 41, 38);
  border-top-color: rgb(217, 41, 38);
}

html body video {
  border-bottom-color: rgb(228, 229, 224);
  border-left-color: rgb(228, 229, 224);
  border-right-color: rgb(228, 229, 224);
  border-top-color: rgb(228, 229, 224);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

html body .footnotes {
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}

html body .transclude {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(217, 41, 38);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

html body .transclude-inner {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "Slasher Regular";
}

html body .katex-display > .katex > .katex-html {
  font-family: "Slasher Regular";
}

html body input[type=checkbox] {
  border-bottom-color: rgb(217, 41, 38);
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  border-bottom-width: 2px;
  border-left-color: rgb(217, 41, 38);
  border-left-width: 2px;
  border-right-color: rgb(217, 41, 38);
  border-right-width: 2px;
  border-top-color: rgb(217, 41, 38);
  border-top-left-radius: 20%;
  border-top-right-radius: 20%;
  border-top-width: 2px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(131, 136, 140);
  text-decoration-color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(3, 3, 8);
  color: rgb(131, 136, 140);
}`,
    callouts: `html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(255, 73, 73);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgb(35, 34, 33);
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(35, 34, 33);
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(35, 34, 33);
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgb(35, 34, 33);
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgb(35, 34, 33);
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(35, 34, 33);
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(35, 34, 33);
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgb(35, 34, 33);
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgb(35, 34, 33);
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgb(35, 34, 33);
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgb(35, 34, 33);
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgb(35, 34, 33);
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgb(35, 34, 33);
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}

html body .search > .search-container > .search-space {
  background-color: rgb(3, 3, 8);
}

html body .search > .search-container > .search-space > * {
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
  outline: rgb(131, 136, 140) none 0px;
  text-decoration-color: rgb(131, 136, 140);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(131, 136, 140);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(131, 136, 140);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(216, 177, 49);
  color: rgb(131, 136, 140);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(3, 3, 8);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(216, 177, 49);
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(216, 177, 49);
  color: rgb(131, 136, 140);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 73, 73);
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-left-color: rgb(255, 73, 73);
  border-right-color: rgb(255, 73, 73);
  border-top-color: rgb(255, 73, 73);
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
  font-family: "Slasher Regular";
}

html body a.internal.tag-link::before {
  color: rgb(255, 73, 73);
}

html body h1 {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
}

html body h2 {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
}

html body h2.page-title, html h2.page-title a {
  color: rgb(217, 41, 38);
  font-family: "Slasher Title";
}

html body h3 {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
}

html body h4 {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
}

html body h5 {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
}

html body h6 {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
}

html body hr {
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(3, 3, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(3, 3, 8);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(3, 3, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(3, 3, 8);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(3, 3, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(3, 3, 8);
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(3, 3, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(3, 3, 8);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(3, 3, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(3, 3, 8);
}

html body ::-webkit-scrollbar-track {
  background: rgb(3, 3, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(3, 3, 8);
}`,
    explorer: `html body .explorer {
  background-color: rgb(25, 25, 25);
}

html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
  font-weight: 700;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(217, 41, 38);
  font-family: "Slasher Regular";
  font-weight: 700;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(131, 136, 140);
}

html body li.depth-0 {
  font-weight: 700;
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}`,
    footer: `html body footer {
  background-color: rgb(3, 3, 8);
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}

html body footer ul li a {
  color: rgb(131, 136, 140);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(131, 136, 140);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(228, 229, 224);
  font-family: "Slasher Regular";
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

html body li.section-li > .section .meta {
  color: rgb(228, 229, 224);
  font-family: "Slasher Regular";
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(131, 136, 140);
}

html body ul.section-ul {
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}

html body .darkmode svg {
  color: rgb(131, 136, 140);
  stroke: rgb(131, 136, 140);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}

html body .breadcrumb-element p {
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
}

html body .metadata {
  border-bottom-color: rgb(35, 34, 33);
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}

html body .metadata-properties {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}

html body .navigation-progress {
  background-color: rgb(3, 3, 8);
}

html body .page-header h2.page-title {
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}

html body abbr {
  color: rgb(228, 229, 224);
}

html body details {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
}

html body input[type=text] {
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
  font-family: "Slasher Regular";
}

html body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(131, 136, 140);
  border-left-color: rgb(131, 136, 140);
  border-right-color: rgb(131, 136, 140);
  border-top-color: rgb(131, 136, 140);
  color: rgb(131, 136, 140);
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

html body progress {
  border-bottom-color: rgb(228, 229, 224);
  border-left-color: rgb(228, 229, 224);
  border-right-color: rgb(228, 229, 224);
  border-top-color: rgb(228, 229, 224);
}

html body sub {
  color: rgb(228, 229, 224);
  font-size: 12.5px;
}

html body summary {
  color: rgb(131, 136, 140);
}

html body sup {
  color: rgb(131, 136, 140);
  font-size: 12.5px;
}

html body ul.tags > li {
  background-color: rgb(216, 177, 49);
  border-bottom-color: rgb(35, 34, 33);
  border-bottom-left-radius: 22.9688px;
  border-bottom-right-radius: 22.9688px;
  border-left-color: rgb(35, 34, 33);
  border-right-color: rgb(35, 34, 33);
  border-top-color: rgb(35, 34, 33);
  border-top-left-radius: 22.9688px;
  border-top-right-radius: 22.9688px;
  color: rgb(35, 34, 33);
}`,
  },
  light: {},
};
