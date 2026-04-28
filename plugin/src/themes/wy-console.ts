import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "wy-console",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["audiowide", "dotgothic16"],
    fontFiles: [
      {
        family: "Scifi Title",
        style: "normal",
        weight: "400",
        file: "scifi-title.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "ModeSeven Regular",
        style: "normal",
        weight: "400",
        file: "modeseven-regular.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: #163F26;
  --background-modifier-border: #020704;
  --background-modifier-border-focus: #99E5B5;
  --background-modifier-border-hover: #3FFF8C;
  --background-modifier-error: #020704;
  --background-modifier-error-hover: #3FFF8C;
  --background-modifier-error-rgb: #3FFF8C;
  --background-modifier-form-field: #020704;
  --background-modifier-form-field-hover: #020704;
  --background-modifier-hover: #163F26;
  --background-modifier-message: #40B266;
  --background-modifier-success: #020704;
  --background-modifier-success-rgb: #99E5B5;
  --background-primary: #0B1510;
  --background-primary-alt: black;
  --background-secondary: #0B1510;
  --background-secondary-alt: #0B1510;
  --bases-cards-background: #0B1510;
  --bases-cards-cover-background: black;
  --bases-cards-shadow: 0 0 0 1px #020704;
  --bases-cards-shadow-hover: 0 0 0 1px #3FFF8C;
  --bases-embed-border-color: #020704;
  --bases-group-heading-property-color: #99E5B5;
  --bases-table-border-color: #020704;
  --bases-table-cell-background-active: #0B1510;
  --bases-table-cell-background-disabled: black;
  --bases-table-cell-shadow-active: 0 0 0 2px #99E5B5;
  --bases-table-cell-shadow-focus: 0 0 0 2px #3FFF8C;
  --bases-table-group-background: black;
  --bases-table-header-background: #0B1510;
  --bases-table-header-background-hover: #163F26;
  --bases-table-header-color: #99E5B5;
  --bases-table-summary-background: #0B1510;
  --bases-table-summary-background-hover: #163F26;
  --blockquote-border-color: #3FFF8C;
  --blur-background: color-mix(in srgb, #40B266 65%, transparent) linear-gradient(#40B266, color-mix(in srgb, #40B266 65%, transparent));
  --bodyFont: var(--font-interface, "ModeSeven Regular");
  --canvas-background: #0B1510;
  --canvas-card-label-color: #99E5B5;
  --caret-color: #99E5B5;
  --checkbox-border-color: #99E5B5;
  --checkbox-border-color-hover: #99E5B5;
  --checkbox-color: #3FFF8C;
  --checkbox-color-hover: #99E5B5;
  --checkbox-marker-color: #0B1510;
  --checklist-done-color: #99E5B5;
  --code-background: black;
  --code-border-color: #020704;
  --code-bracket-background: #163F26;
  --code-comment: #99E5B5;
  --code-normal: #99E5B5;
  --code-punctuation: #99E5B5;
  --codeFont: var(--font-interface, "ModeSeven Regular");
  --col-accent: #3FFF8C;
  --col-accent-plus: #99E5B5;
  --col-base: #40B266;
  --col-base-background: #0B1510;
  --col-bckg-filetreeheader: #0B1510;
  --col-bckg-mainpanels: #020704;
  --col-bckg-menudropdownhover: #163F26;
  --col-bckg-menudropdowns: #163F26;
  --col-bckg-selectedtitles: #163F26;
  --col-danger: #318C54;
  --col-ed-background: #0B1510;
  --col-ed-bckg-checkbox-empty: #163F26;
  --col-ed-bckg-checkbox-full: #99E5B5;
  --col-ed-bckg-codeblock: #163F26;
  --col-ed-bckg-highlight: #40B266;
  --col-ed-bckg-hyperlink-broken: #318C54;
  --col-ed-bckg-quote: #0B1510;
  --col-ed-bckg-quote-callout: #163F26;
  --col-ed-bckg-quote-warning: #318C54;
  --col-ed-bckg-table: #0B1510;
  --col-ed-bckg-tableh: #163F26;
  --col-ed-bckg-tagbeg: #163F26;
  --col-ed-bckg-tagend: #163F26;
  --col-ed-caret: #99E5B5;
  --col-ed-hr: #40B266;
  --col-ed-hyperlink: #FFD303;
  --col-ed-hyperlink-broken: red;
  --col-ed-hyperlink-highlight-hover: #020704;
  --col-ed-hyperlink-hover: #FFF2BF;
  --col-ed-hyperlink-strikethrough: #3F3401;
  --col-ed-txt-checkbox-full: #163F26;
  --col-ed-txt-codeblock: #3FFF8C;
  --col-ed-txt-h1: #3FFF8C;
  --col-ed-txt-h2: #3FFF8C;
  --col-ed-txt-h3: #3FFF8C;
  --col-ed-txt-h4: #3FFF8C;
  --col-ed-txt-h5: #3FFF8C;
  --col-ed-txt-h6: #3FFF8C;
  --col-ed-txt-highlight: #020704;
  --col-ed-txt-italic: #3FFF8C;
  --col-ed-txt-ol-bullet: #99E5B5;
  --col-ed-txt-p: #40B266;
  --col-ed-txt-quote: #99E5B5;
  --col-ed-txt-strikethrough: #163F26;
  --col-ed-txt-strong: #3FFF8C;
  --col-ed-txt-table: #40B266;
  --col-ed-txt-tableh: #99E5B5;
  --col-ed-txt-tagbeg: #FFD303;
  --col-ed-txt-tagend: #FFD303;
  --col-ed-txt-title: #99E5B5;
  --col-ed-txt-ul-bullet: #99E5B5;
  --col-icons: #99E5B5;
  --col-important: #FFD303;
  --col-important-muted: #3F3401;
  --col-important-plus: #FFF2BF;
  --col-menucheckbox: #3FFF8C;
  --col-muted: #163F26;
  --col-muted-plus: #020704;
  --col-pr-background: #0B1510;
  --col-pr-bckg-checkbox-empty: #163F26;
  --col-pr-bckg-checkbox-full: #99E5B5;
  --col-pr-bckg-codeblock: #163F26;
  --col-pr-bckg-highlight: #40B266;
  --col-pr-bckg-quote: #0B1510;
  --col-pr-bckg-quote-callout: #163F26;
  --col-pr-bckg-quote-warning: #318C54;
  --col-pr-bckg-table: #0B1510;
  --col-pr-bckg-tableh: #40B266;
  --col-pr-bckg-tag: #FFD303;
  --col-pr-hr: #40B266;
  --col-pr-hyperlink-broken: red;
  --col-pr-txt-checkbox-full: #163F26;
  --col-pr-txt-codeblock: #3FFF8C;
  --col-pr-txt-h1: #3FFF8C;
  --col-pr-txt-h2: #3FFF8C;
  --col-pr-txt-h3: #3FFF8C;
  --col-pr-txt-h4: #3FFF8C;
  --col-pr-txt-h5: #3FFF8C;
  --col-pr-txt-h6: #3FFF8C;
  --col-pr-txt-highlight: #020704;
  --col-pr-txt-hyperlink: #FFD303;
  --col-pr-txt-hyperlink-highlight-hover: #020704;
  --col-pr-txt-hyperlink-hover: #FFF2BF;
  --col-pr-txt-hyperlink-strikethrough: #3F3401;
  --col-pr-txt-hyperlink-unresolved: #FFD303;
  --col-pr-txt-italic: #3FFF8C;
  --col-pr-txt-ol-bullet: #99E5B5;
  --col-pr-txt-p: #40B266;
  --col-pr-txt-quote: #99E5B5;
  --col-pr-txt-strikethrough: #163F26;
  --col-pr-txt-strong: #3FFF8C;
  --col-pr-txt-table: #020704;
  --col-pr-txt-tableh: #99E5B5;
  --col-pr-txt-tag: #163F26;
  --col-pr-txt-title: #99E5B5;
  --col-pr-txt-ul-bullet: #99E5B5;
  --col-safety: #163F26;
  --col-text-selection: #437254;
  --col-txt-menudropdownhover: #3FFF8C;
  --col-txt-menudropdowns: #3FFF8C;
  --col-txt-selectedtitles: #99E5B5;
  --col-txt-titlebars: #070707;
  --col-txt-titles: #3FFF8C;
  --collapse-icon-color: #99E5B5;
  --collapse-icon-color-collapsed: #99E5B5;
  --dark: var(--text-normal, #99E5B5);
  --darkgray: var(--text-normal, #99E5B5);
  --divider-color: #020704;
  --divider-color-hover: #3FFF8C;
  --dropdown-background: #40B266;
  --dropdown-background-hover: #163F26;
  --embed-block-shadow-hover: 0 0 0 1px #020704, inset 0 0 0 1px #020704;
  --embed-border-start: 2px solid #3FFF8C;
  --file-header-background: #0B1510;
  --file-header-background-focused: #0B1510;
  --file-header-font: "ModeSeven Regular";
  --files-font-size: 1em;
  --flair-background: #40B266;
  --flair-color: #99E5B5;
  --fnt-ed-headers: "ModeSeven Regular";
  --fnt-ed-text: "ModeSeven Regular";
  --fnt-ed-title: "Scifi Title";
  --fnt-head-p: "ModeSeven Regular";
  --fnt-pr-headers: "ModeSeven Regular";
  --fnt-pr-text: "ModeSeven Regular";
  --fnt-pr-title: "Scifi Title";
  --fnt-title: "Scifi Title";
  --folders-font-size: 1em;
  --font-interface: "ModeSeven Regular";
  --footnote-divider-color: #020704;
  --footnote-id-color: #99E5B5;
  --footnote-id-color-no-occurrences: #99E5B5;
  --footnote-input-background-active: #163F26;
  --graph-node: #99E5B5;
  --graph-node-focused: #99E5B5;
  --graph-node-unresolved: #99E5B5;
  --graph-text: #99E5B5;
  --gray: var(--text-muted, #99E5B5);
  --headerFont: var(--font-interface, "ModeSeven Regular");
  --heading-formatting: #99E5B5;
  --highlight: var(--background-modifier-hover, #163F26);
  --hr-color: #020704;
  --icon-color: #99E5B5;
  --icon-color-active: #99E5B5;
  --icon-color-focused: #99E5B5;
  --icon-color-hover: #99E5B5;
  --input-date-separator: #99E5B5;
  --input-placeholder-color: #99E5B5;
  --interactive-accent: #3FFF8C;
  --interactive-accent-hover: #99E5B5;
  --interactive-accent-hsl: #3FFF8C;
  --interactive-hover: #163F26;
  --interactive-normal: #40B266;
  --letterspacing-ed-headers: 1.5px;
  --letterspacing-ed-text: 0.5px;
  --letterspacing-pr-headers: 1.5px;
  --letterspacing-pr-text: 0.5px;
  --letterspacing-txt-headers: 1.5px;
  --letterspacing-txt-p: 0.5px;
  --light: var(--background-primary, #0B1510);
  --lightgray: var(--background-secondary, #0B1510);
  --line-height-ed-headers: 20px;
  --line-height-ed-text: 20px;
  --line-height-pr-headers: 20px;
  --line-height-pr-text: 20px;
  --link-color: #99E5B5;
  --link-color-hover: #FFF2BF;
  --link-external-color: #99E5B5;
  --link-external-color-hover: #FFF2BF;
  --link-unresolved-color: #99E5B5;
  --link-unresolved-decoration-color: hsla(#3FFF8C, 0.3);
  --list-marker-color: #99E5B5;
  --list-marker-color-collapsed: #99E5B5;
  --list-marker-color-hover: #99E5B5;
  --menu-background: #0B1510;
  --menu-border-color: #3FFF8C;
  --metadata-border-color: #020704;
  --metadata-divider-color: #020704;
  --metadata-input-background-active: #163F26;
  --metadata-input-font: "ModeSeven Regular";
  --metadata-input-text-color: #99E5B5;
  --metadata-label-background-active: #163F26;
  --metadata-label-font: "ModeSeven Regular";
  --metadata-label-text-color: #99E5B5;
  --metadata-label-text-color-hover: #99E5B5;
  --metadata-property-background-active: #163F26;
  --metadata-property-box-shadow-focus: 0 0 0 2px #99E5B5;
  --metadata-property-box-shadow-hover: 0 0 0 1px #3FFF8C;
  --modal-background: #0B1510;
  --nav-collapse-icon-color: #99E5B5;
  --nav-collapse-icon-color-collapsed: #99E5B5;
  --nav-heading-color: #99E5B5;
  --nav-heading-color-collapsed: #99E5B5;
  --nav-heading-color-collapsed-hover: #99E5B5;
  --nav-heading-color-hover: #99E5B5;
  --nav-item-background-active: #163F26;
  --nav-item-background-hover: #163F26;
  --nav-item-color: #99E5B5;
  --nav-item-color-active: #99E5B5;
  --nav-item-color-highlighted: #99E5B5;
  --nav-item-color-hover: #99E5B5;
  --nav-item-color-selected: #99E5B5;
  --nav-tag-color: #99E5B5;
  --nav-tag-color-active: #99E5B5;
  --nav-tag-color-hover: #99E5B5;
  --oz-fta-file-font-size: 1em;
  --oz-fta-folder-font-size: 1em;
  --pad-ed-headers: 5px;
  --pdf-background: #0B1510;
  --pdf-page-background: #0B1510;
  --pdf-shadow: 0 0 0 1px #020704;
  --pdf-sidebar-background: #0B1510;
  --pdf-thumbnail-shadow: 0 0 0 1px #020704;
  --pill-border-color: #020704;
  --pill-border-color-hover: #3FFF8C;
  --pill-color: #99E5B5;
  --pill-color-hover: #99E5B5;
  --pill-color-remove: #99E5B5;
  --pill-color-remove-hover: #99E5B5;
  --prompt-background: #0B1510;
  --raised-background: color-mix(in srgb, #40B266 65%, transparent) linear-gradient(#40B266, color-mix(in srgb, #40B266 65%, transparent));
  --ribbon-background: #0B1510;
  --ribbon-background-collapsed: #0B1510;
  --search-clear-button-color: #99E5B5;
  --search-icon-color: #99E5B5;
  --search-result-background: #0B1510;
  --secondary: var(--text-accent, #99E5B5);
  --setting-group-heading-color: #99E5B5;
  --setting-items-background: black;
  --setting-items-border-color: #020704;
  --shiki-active-tab-border-color: #99E5B5;
  --shiki-code-background: black;
  --shiki-code-comment: #99E5B5;
  --shiki-code-normal: #99E5B5;
  --shiki-code-punctuation: #99E5B5;
  --shiki-gutter-border-color: #020704;
  --shiki-gutter-text-color: #99E5B5;
  --shiki-gutter-text-color-highlight: #99E5B5;
  --shiki-highlight-neutral: #99E5B5;
  --shiki-terminal-dots-color: #99E5B5;
  --shiki-tooltip-background: #40B266;
  --siz-ed-txt-codeblock: 1em;
  --siz-ed-txt-h1: 1.75em;
  --siz-ed-txt-h2: 1.6em;
  --siz-ed-txt-h3: 1.45em;
  --siz-ed-txt-h4: 1.3em;
  --siz-ed-txt-h5: 1.15em;
  --siz-ed-txt-h6: 1em;
  --siz-ed-txt-highlight: 1em;
  --siz-ed-txt-italic: 1em;
  --siz-ed-txt-p: 1em;
  --siz-ed-txt-quote: 1em;
  --siz-ed-txt-strong: 1em;
  --siz-ed-txt-table: 1em;
  --siz-ed-txt-title: 2em;
  --siz-pr-txt-codeblock: 1em;
  --siz-pr-txt-h1: 1.75em;
  --siz-pr-txt-h2: 1.6em;
  --siz-pr-txt-h3: 1.45em;
  --siz-pr-txt-h4: 1.3em;
  --siz-pr-txt-h5: 1.15em;
  --siz-pr-txt-h6: 1em;
  --siz-pr-txt-highlight: 1em;
  --siz-pr-txt-italic: 1em;
  --siz-pr-txt-p: 1em;
  --siz-pr-txt-quote: 1em;
  --siz-pr-txt-strong: 1em;
  --siz-pr-txt-table: 1em;
  --siz-pr-txt-title: 2em;
  --siz-txt-h1: 1.75em;
  --siz-txt-h2: 1.6em;
  --siz-txt-h3: 1.45em;
  --siz-txt-h4: 1.3em;
  --siz-txt-h5: 1.15em;
  --siz-txt-h6: 1em;
  --siz-txt-p: 1em;
  --siz-txt-title: 2em;
  --slider-thumb-border-color: #3FFF8C;
  --slider-track-background: #020704;
  --status-bar-background: #0B1510;
  --status-bar-border-color: #020704;
  --status-bar-text-color: #99E5B5;
  --suggestion-background: #0B1510;
  --tab-background-active: #0B1510;
  --tab-container-background: #0B1510;
  --tab-divider-color: #3FFF8C;
  --tab-outline-color: #020704;
  --tab-switcher-background: #0B1510;
  --tab-switcher-menubar-background: linear-gradient(to top, #0B1510, transparent);
  --tab-text-color: #99E5B5;
  --tab-text-color-active: #99E5B5;
  --tab-text-color-focused: #99E5B5;
  --tab-text-color-focused-active: #99E5B5;
  --tab-text-color-focused-active-current: #99E5B5;
  --tab-text-color-focused-highlighted: #99E5B5;
  --table-add-button-border-color: #020704;
  --table-border-color: #020704;
  --table-drag-handle-background-active: #3FFF8C;
  --table-drag-handle-color: #99E5B5;
  --table-drag-handle-color-active: #020704;
  --table-header-border-color: #020704;
  --table-header-color: #99E5B5;
  --table-selection-border-color: #3FFF8C;
  --tag-background: hsla(#3FFF8C, 0.1);
  --tag-background-hover: hsla(#3FFF8C, 0.2);
  --tag-border-color: hsla(#3FFF8C, 0.15);
  --tag-border-color-hover: hsla(#3FFF8C, 0.15);
  --tag-color: #99E5B5;
  --tag-color-hover: #99E5B5;
  --tertiary: var(--text-accent-hover, #FFF2BF);
  --text-accent: #99E5B5;
  --text-accent-hover: #FFF2BF;
  --text-error: #FFD303;
  --text-faint: #99E5B5;
  --text-muted: #99E5B5;
  --text-normal: #99E5B5;
  --text-on-accent: #020704;
  --text-selection: #437254;
  --text-success: #3FFF8C;
  --textHighlight: var(--background-modifier-hover, #163F26);
  --titleFont: var(--font-interface, "ModeSeven Regular");
  --titlebar-background: #0B1510;
  --titlebar-background-focused: #0B1510;
  --titlebar-border-color: #020704;
  --titlebar-text-color: #99E5B5;
  --titlebar-text-color-focused: #99E5B5;
  --vault-profile-color: #99E5B5;
  --vault-profile-color-hover: #99E5B5;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(11, 21, 16);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(11, 21, 16);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(11, 21, 16);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(2, 7, 4);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(11, 21, 16);
  border-left-color: rgb(2, 7, 4);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body html {
  --col-accent: #3FFF8C;
  --col-accent-plus: #99E5B5;
  --col-base: #318C54;
  --col-base-background: #0B1510;
  --col-danger: #230D0D;
  --col-important: #FFD303;
  --col-important-muted: #3F3401;
  --col-important-plus: #FFF2BF;
  --col-muted: #163F26;
  --col-muted-plus: #020704;
  --col-safety: #122127;
  --col-text-selection: #437254;
  --col-txt-titlebars: black;
  --files-font-size: 1em;
  --fnt-head-p: "ModeSeven Regular";
  --fnt-title: "Scifi Title";
  --folders-font-size: 1em;
  --letterspacing-txt-headers: 1.5px;
  --letterspacing-txt-p: 0.5px;
  --oz-fta-file-font-size: 1em;
  --oz-fta-folder-font-size: 1em;
  --siz-txt-h1: 1.75em;
  --siz-txt-h2: 1.6em;
  --siz-txt-h3: 1.45em;
  --siz-txt-h4: 1.3em;
  --siz-txt-h5: 1.15em;
  --siz-txt-h6: 1em;
  --siz-txt-p: 1em;
  --siz-txt-title: 2em;
  --text-selection: #318C54;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
  outline: rgb(63, 255, 140) none 0px;
  text-decoration-color: rgb(63, 255, 140);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
  outline: rgb(63, 255, 140) none 0px;
  text-decoration-color: rgb(63, 255, 140);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
  outline: rgb(63, 255, 140) none 0px;
  text-decoration-color: rgb(63, 255, 140);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
  outline: rgb(63, 255, 140) none 0px;
  text-decoration-color: rgb(63, 255, 140);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(64, 178, 102);
  color: rgb(2, 7, 4);
  font-family: "ModeSeven Regular";
  outline: rgb(2, 7, 4) none 0px;
  text-decoration-color: rgb(2, 7, 4);
}

html[saved-theme="dark"] body del {
  color: rgb(22, 63, 38);
  font-family: "ModeSeven Regular";
  outline: rgb(22, 63, 38) none 0px;
  text-decoration-color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(153, 229, 181);
  border-color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body p {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
  outline: rgb(153, 229, 181) none 0px;
  text-decoration-color: rgb(153, 229, 181);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(255, 211, 3);
  font-family: "ModeSeven Regular";
  outline: rgb(255, 211, 3) none 0px;
  text-decoration-color: rgb(255, 211, 3);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 211, 3);
  font-family: "ModeSeven Regular";
  outline: rgb(255, 211, 3) none 0px;
  text-decoration-color: rgb(255, 211, 3);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(255, 0, 0);
  font-family: "ModeSeven Regular";
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: underline;
  text-decoration-color: rgb(255, 0, 0);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

html[saved-theme="dark"] body dt {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(64, 178, 102);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(64, 178, 102);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body blockquote {
  font-family: "ModeSeven Regular";
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body table {
  background-color: rgb(11, 21, 16);
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
  width: 226.922px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body th {
  background-color: rgb(64, 178, 102);
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body thead {
  background-color: rgb(64, 178, 102);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
  color: rgb(153, 229, 181);
  padding-bottom: 1.96875px;
  padding-left: 3.9375px;
  padding-right: 3.9375px;
  padding-top: 1.96875px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(22, 63, 38);
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(63, 255, 140);
  border-left-color: rgb(63, 255, 140);
  border-right-color: rgb(63, 255, 140);
  border-top-color: rgb(63, 255, 140);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(64, 178, 102);
  border-left-color: rgb(64, 178, 102);
  border-right-color: rgb(64, 178, 102);
  border-top-color: rgb(64, 178, 102);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(63, 255, 140);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "ModeSeven Regular";
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "ModeSeven Regular";
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(22, 63, 38);
  border-left-color: rgb(22, 63, 38);
  border-right-color: rgb(22, 63, 38);
  border-top-color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(22, 63, 38);
  text-decoration-color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(11, 21, 16);
  color: rgb(22, 63, 38);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background: rgb(22, 63, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 63, 38);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background: rgb(22, 63, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 63, 38);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background: rgb(22, 63, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 63, 38);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background: rgb(22, 63, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 63, 38);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background: rgb(22, 63, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 63, 38);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background: rgb(22, 63, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 63, 38);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background: rgb(22, 63, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 63, 38);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background: rgb(22, 63, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 63, 38);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgb(22, 63, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 63, 38);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background: rgb(22, 63, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 63, 38);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background: rgb(22, 63, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 63, 38);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background: rgb(22, 63, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 63, 38);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background: rgb(49, 140, 84) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(49, 140, 84);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(153, 229, 181);
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
  background-color: rgb(2, 7, 4);
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(11, 21, 16);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
  outline: rgb(153, 229, 181) none 0px;
  text-decoration-color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(22, 63, 38);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(11, 21, 16);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(22, 63, 38);
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(22, 63, 38);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body h1 {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(153, 229, 181);
  font-size: 30px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(153, 229, 181);
  font-family: "Scifi Title";
}

html[saved-theme="dark"] body h3 {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

html[saved-theme="dark"] body h4 {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

html[saved-theme="dark"] body h5 {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

html[saved-theme="dark"] body h6 {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container {
  background-color: rgb(2, 7, 4);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(153, 229, 181);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(11, 21, 16);
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(153, 229, 181);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(63, 255, 140);
  font-family: "ModeSeven Regular";
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body ul.section-ul {
  background-color: rgb(2, 7, 4);
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(153, 229, 181);
  stroke: rgb(153, 229, 181);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: rgb(11, 21, 16);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(11, 21, 16);
  border-color: rgb(153, 229, 181);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(64, 178, 102);
  border-color: rgb(2, 7, 4);
  color: rgb(153, 229, 181);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(2, 7, 4);
  border-left-color: rgb(2, 7, 4);
  border-right-color: rgb(2, 7, 4);
  border-top-color: rgb(2, 7, 4);
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(2, 7, 4);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 26.25px;
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(11, 21, 16);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(11, 21, 16);
  border-color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(7, 7, 7);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(153, 229, 181);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(11, 21, 16);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

html[saved-theme="dark"] body abbr {
  color: rgb(64, 178, 102);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(153, 229, 181);
  border-left-color: rgb(153, 229, 181);
  border-right-color: rgb(153, 229, 181);
  border-top-color: rgb(153, 229, 181);
  color: rgb(153, 229, 181);
  font-family: "ModeSeven Regular";
}

html[saved-theme="dark"] body kbd {
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

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(64, 178, 102);
  border-left-color: rgb(64, 178, 102);
  border-right-color: rgb(64, 178, 102);
  border-top-color: rgb(64, 178, 102);
}

html[saved-theme="dark"] body sub {
  color: rgb(64, 178, 102);
  font-size: 12.5px;
}

html[saved-theme="dark"] body summary {
  color: rgb(153, 229, 181);
}

html[saved-theme="dark"] body sup {
  color: rgb(22, 63, 38);
  font-size: 12.5px;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(255, 211, 3);
  border-bottom-color: rgb(22, 63, 38);
  border-bottom-left-radius: 22.9688px;
  border-bottom-right-radius: 22.9688px;
  border-left-color: rgb(22, 63, 38);
  border-right-color: rgb(22, 63, 38);
  border-top-color: rgb(22, 63, 38);
  border-top-left-radius: 22.9688px;
  border-top-right-radius: 22.9688px;
  color: rgb(22, 63, 38);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: #86C66C;
  --background-modifier-border: #C9D3CB;
  --background-modifier-border-focus: #20542C;
  --background-modifier-border-hover: #437A41;
  --background-modifier-error: #C9D3CB;
  --background-modifier-error-hover: #437A41;
  --background-modifier-error-rgb: #437A41;
  --background-modifier-form-field: #C9D3CB;
  --background-modifier-form-field-hover: #C9D3CB;
  --background-modifier-hover: #86C66C;
  --background-modifier-message: #64A055;
  --background-modifier-success: #C9D3CB;
  --background-modifier-success-rgb: #20542C;
  --background-primary: #D7DDD9;
  --background-primary-alt: black;
  --background-secondary: #D7DDD9;
  --background-secondary-alt: #D7DDD9;
  --bases-cards-background: #D7DDD9;
  --bases-cards-cover-background: black;
  --bases-cards-shadow: 0 0 0 1px #C9D3CB;
  --bases-cards-shadow-hover: 0 0 0 1px #437A41;
  --bases-embed-border-color: #C9D3CB;
  --bases-group-heading-property-color: #20542C;
  --bases-table-border-color: #C9D3CB;
  --bases-table-cell-background-active: #D7DDD9;
  --bases-table-cell-background-disabled: black;
  --bases-table-cell-shadow-active: 0 0 0 2px #20542C;
  --bases-table-cell-shadow-focus: 0 0 0 2px #437A41;
  --bases-table-group-background: black;
  --bases-table-header-background: #D7DDD9;
  --bases-table-header-background-hover: #86C66C;
  --bases-table-header-color: #20542C;
  --bases-table-summary-background: #D7DDD9;
  --bases-table-summary-background-hover: #86C66C;
  --blockquote-border-color: #437A41;
  --blur-background: color-mix(in srgb, #D7DDD9 65%, transparent) linear-gradient(#D7DDD9, color-mix(in srgb, #D7DDD9 65%, transparent));
  --bodyFont: var(--font-interface, "ModeSeven Regular");
  --canvas-background: #D7DDD9;
  --canvas-card-label-color: #20542C;
  --caret-color: #20542C;
  --checkbox-border-color: #20542C;
  --checkbox-border-color-hover: #20542C;
  --checkbox-color: #437A41;
  --checkbox-color-hover: #20542C;
  --checkbox-marker-color: #D7DDD9;
  --checklist-done-color: #20542C;
  --code-background: black;
  --code-border-color: #C9D3CB;
  --code-bracket-background: #86C66C;
  --code-comment: #20542C;
  --code-normal: #20542C;
  --code-punctuation: #20542C;
  --codeFont: var(--font-interface, "ModeSeven Regular");
  --col-accent: #437A41;
  --col-accent-plus: #20542C;
  --col-base: #64A055;
  --col-base-background: #D7DDD9;
  --col-bckg-filetreeheader: #D7DDD9;
  --col-bckg-mainpanels: #C9D3CB;
  --col-bckg-menudropdownhover: #86C66C;
  --col-bckg-menudropdowns: #86C66C;
  --col-bckg-selectedtitles: #86C66C;
  --col-danger: #86C66C;
  --col-ed-background: #D7DDD9;
  --col-ed-bckg-checkbox-empty: #86C66C;
  --col-ed-bckg-checkbox-full: #20542C;
  --col-ed-bckg-codeblock: #86C66C;
  --col-ed-bckg-highlight: #64A055;
  --col-ed-bckg-hyperlink-broken: #86C66C;
  --col-ed-bckg-quote: #D7DDD9;
  --col-ed-bckg-quote-callout: #ACD580;
  --col-ed-bckg-quote-warning: #86C66C;
  --col-ed-bckg-table: #D7DDD9;
  --col-ed-bckg-tableh: #86C66C;
  --col-ed-bckg-tagbeg: #86C66C;
  --col-ed-bckg-tagend: #86C66C;
  --col-ed-caret: #20542C;
  --col-ed-hr: #64A055;
  --col-ed-hyperlink: #0457E5;
  --col-ed-hyperlink-broken: red;
  --col-ed-hyperlink-highlight-hover: #C9D3CB;
  --col-ed-hyperlink-hover: #011F64;
  --col-ed-hyperlink-strikethrough: #3F8CFF;
  --col-ed-txt-checkbox-full: #86C66C;
  --col-ed-txt-codeblock: #437A41;
  --col-ed-txt-h1: #437A41;
  --col-ed-txt-h2: #437A41;
  --col-ed-txt-h3: #437A41;
  --col-ed-txt-h4: #437A41;
  --col-ed-txt-h5: #437A41;
  --col-ed-txt-h6: #437A41;
  --col-ed-txt-highlight: #C9D3CB;
  --col-ed-txt-italic: #437A41;
  --col-ed-txt-ol-bullet: #20542C;
  --col-ed-txt-p: #64A055;
  --col-ed-txt-quote: #20542C;
  --col-ed-txt-strikethrough: #86C66C;
  --col-ed-txt-strong: #437A41;
  --col-ed-txt-table: #64A055;
  --col-ed-txt-tableh: #20542C;
  --col-ed-txt-tagbeg: #0457E5;
  --col-ed-txt-tagend: #0457E5;
  --col-ed-txt-title: #20542C;
  --col-ed-txt-ul-bullet: #20542C;
  --col-icons: #20542C;
  --col-important: #0457E5;
  --col-important-muted: #3F8CFF;
  --col-important-plus: #011F64;
  --col-menucheckbox: #437A41;
  --col-muted: #86C66C;
  --col-muted-plus: #C9D3CB;
  --col-pr-background: #D7DDD9;
  --col-pr-bckg-checkbox-empty: #86C66C;
  --col-pr-bckg-checkbox-full: #20542C;
  --col-pr-bckg-codeblock: #86C66C;
  --col-pr-bckg-highlight: #64A055;
  --col-pr-bckg-quote: #D7DDD9;
  --col-pr-bckg-quote-callout: #ACD580;
  --col-pr-bckg-quote-warning: #86C66C;
  --col-pr-bckg-table: #D7DDD9;
  --col-pr-bckg-tableh: #64A055;
  --col-pr-bckg-tag: #0457E5;
  --col-pr-hr: #64A055;
  --col-pr-hyperlink-broken: red;
  --col-pr-txt-checkbox-full: #86C66C;
  --col-pr-txt-codeblock: #437A41;
  --col-pr-txt-h1: #437A41;
  --col-pr-txt-h2: #437A41;
  --col-pr-txt-h3: #437A41;
  --col-pr-txt-h4: #437A41;
  --col-pr-txt-h5: #437A41;
  --col-pr-txt-h6: #437A41;
  --col-pr-txt-highlight: #C9D3CB;
  --col-pr-txt-hyperlink: #0457E5;
  --col-pr-txt-hyperlink-highlight-hover: #C9D3CB;
  --col-pr-txt-hyperlink-hover: #011F64;
  --col-pr-txt-hyperlink-strikethrough: #3F8CFF;
  --col-pr-txt-hyperlink-unresolved: #0457E5;
  --col-pr-txt-italic: #437A41;
  --col-pr-txt-ol-bullet: #20542C;
  --col-pr-txt-p: #64A055;
  --col-pr-txt-quote: #20542C;
  --col-pr-txt-strikethrough: #86C66C;
  --col-pr-txt-strong: #437A41;
  --col-pr-txt-table: #C9D3CB;
  --col-pr-txt-tableh: #20542C;
  --col-pr-txt-tag: #86C66C;
  --col-pr-txt-title: #20542C;
  --col-pr-txt-ul-bullet: #20542C;
  --col-safety: #ACD580;
  --col-text-selection: #437254;
  --col-txt-menudropdownhover: #437A41;
  --col-txt-menudropdowns: #437A41;
  --col-txt-selectedtitles: #20542C;
  --col-txt-titlebars: #E5EAE7;
  --col-txt-titles: #437A41;
  --collapse-icon-color: #20542C;
  --collapse-icon-color-collapsed: #20542C;
  --dark: var(--text-normal, #20542C);
  --darkgray: var(--text-normal, #20542C);
  --divider-color: #C9D3CB;
  --divider-color-hover: #437A41;
  --dropdown-background: #64A055;
  --dropdown-background-hover: #86C66C;
  --embed-block-shadow-hover: 0 0 0 1px #C9D3CB, inset 0 0 0 1px #C9D3CB;
  --embed-border-start: 2px solid #437A41;
  --file-header-background: #D7DDD9;
  --file-header-background-focused: #D7DDD9;
  --file-header-font: "ModeSeven Regular";
  --files-font-size: 1em;
  --flair-background: #64A055;
  --flair-color: #20542C;
  --fnt-ed-headers: "ModeSeven Regular";
  --fnt-ed-text: "ModeSeven Regular";
  --fnt-ed-title: "Scifi Title";
  --fnt-head-p: "ModeSeven Regular";
  --fnt-pr-headers: "ModeSeven Regular";
  --fnt-pr-text: "ModeSeven Regular";
  --fnt-pr-title: "Scifi Title";
  --fnt-title: "Scifi Title";
  --folders-font-size: 1em;
  --font-interface: "ModeSeven Regular";
  --footnote-divider-color: #C9D3CB;
  --footnote-id-color: #20542C;
  --footnote-id-color-no-occurrences: #20542C;
  --footnote-input-background-active: #86C66C;
  --graph-node: #20542C;
  --graph-node-focused: #20542C;
  --graph-node-unresolved: #20542C;
  --graph-text: #20542C;
  --gray: var(--text-muted, #20542C);
  --headerFont: var(--font-interface, "ModeSeven Regular");
  --heading-formatting: #20542C;
  --highlight: var(--background-modifier-hover, #86C66C);
  --hr-color: #C9D3CB;
  --icon-color: #20542C;
  --icon-color-active: #20542C;
  --icon-color-focused: #20542C;
  --icon-color-hover: #20542C;
  --input-date-separator: #20542C;
  --input-placeholder-color: #20542C;
  --interactive-accent: #437A41;
  --interactive-accent-hover: #20542C;
  --interactive-accent-hsl: #437A41;
  --interactive-hover: #86C66C;
  --interactive-normal: #64A055;
  --letterspacing-ed-headers: 1.5px;
  --letterspacing-ed-text: 0.5px;
  --letterspacing-pr-headers: 1.5px;
  --letterspacing-pr-text: 0.5px;
  --letterspacing-txt-headers: 1.5px;
  --letterspacing-txt-p: 0.5px;
  --light: var(--background-primary, #D7DDD9);
  --lightgray: var(--background-secondary, #D7DDD9);
  --line-height-ed-headers: 20px;
  --line-height-ed-text: 20px;
  --line-height-pr-headers: 20px;
  --line-height-pr-text: 20px;
  --link-color: #20542C;
  --link-color-hover: #011F64;
  --link-external-color: #20542C;
  --link-external-color-hover: #011F64;
  --link-unresolved-color: #20542C;
  --link-unresolved-decoration-color: hsla(#437A41, 0.3);
  --list-marker-color: #20542C;
  --list-marker-color-collapsed: #20542C;
  --list-marker-color-hover: #20542C;
  --menu-background: #D7DDD9;
  --menu-border-color: #437A41;
  --metadata-border-color: #C9D3CB;
  --metadata-divider-color: #C9D3CB;
  --metadata-input-background-active: #86C66C;
  --metadata-input-font: "ModeSeven Regular";
  --metadata-input-text-color: #20542C;
  --metadata-label-background-active: #86C66C;
  --metadata-label-font: "ModeSeven Regular";
  --metadata-label-text-color: #20542C;
  --metadata-label-text-color-hover: #20542C;
  --metadata-property-background-active: #86C66C;
  --metadata-property-box-shadow-focus: 0 0 0 2px #20542C;
  --metadata-property-box-shadow-hover: 0 0 0 1px #437A41;
  --modal-background: #D7DDD9;
  --nav-collapse-icon-color: #20542C;
  --nav-collapse-icon-color-collapsed: #20542C;
  --nav-heading-color: #20542C;
  --nav-heading-color-collapsed: #20542C;
  --nav-heading-color-collapsed-hover: #20542C;
  --nav-heading-color-hover: #20542C;
  --nav-item-background-active: #86C66C;
  --nav-item-background-hover: #86C66C;
  --nav-item-color: #20542C;
  --nav-item-color-active: #20542C;
  --nav-item-color-highlighted: #20542C;
  --nav-item-color-hover: #20542C;
  --nav-item-color-selected: #20542C;
  --nav-tag-color: #20542C;
  --nav-tag-color-active: #20542C;
  --nav-tag-color-hover: #20542C;
  --oz-fta-file-font-size: 1em;
  --oz-fta-folder-font-size: 1em;
  --pad-ed-headers: 5px;
  --pdf-background: #D7DDD9;
  --pdf-page-background: #D7DDD9;
  --pdf-sidebar-background: #D7DDD9;
  --pill-border-color: #C9D3CB;
  --pill-border-color-hover: #437A41;
  --pill-color: #20542C;
  --pill-color-hover: #20542C;
  --pill-color-remove: #20542C;
  --pill-color-remove-hover: #20542C;
  --prompt-background: #D7DDD9;
  --raised-background: color-mix(in srgb, #D7DDD9 65%, transparent) linear-gradient(#D7DDD9, color-mix(in srgb, #D7DDD9 65%, transparent));
  --ribbon-background: #D7DDD9;
  --ribbon-background-collapsed: #D7DDD9;
  --search-clear-button-color: #20542C;
  --search-icon-color: #20542C;
  --search-result-background: #D7DDD9;
  --secondary: var(--text-accent, #20542C);
  --setting-group-heading-color: #20542C;
  --setting-items-background: black;
  --setting-items-border-color: #C9D3CB;
  --shiki-active-tab-border-color: #20542C;
  --shiki-code-background: black;
  --shiki-code-comment: #20542C;
  --shiki-code-normal: #20542C;
  --shiki-code-punctuation: #20542C;
  --shiki-gutter-border-color: #C9D3CB;
  --shiki-gutter-text-color: #20542C;
  --shiki-gutter-text-color-highlight: #20542C;
  --shiki-highlight-neutral: #20542C;
  --shiki-terminal-dots-color: #20542C;
  --shiki-tooltip-background: #64A055;
  --siz-ed-txt-codeblock: 1em;
  --siz-ed-txt-h1: 1.75em;
  --siz-ed-txt-h2: 1.6em;
  --siz-ed-txt-h3: 1.45em;
  --siz-ed-txt-h4: 1.3em;
  --siz-ed-txt-h5: 1.15em;
  --siz-ed-txt-h6: 1em;
  --siz-ed-txt-highlight: 1em;
  --siz-ed-txt-italic: 1em;
  --siz-ed-txt-p: 1em;
  --siz-ed-txt-quote: 1em;
  --siz-ed-txt-strong: 1em;
  --siz-ed-txt-table: 1em;
  --siz-ed-txt-title: 2em;
  --siz-pr-txt-codeblock: 1em;
  --siz-pr-txt-h1: 1.75em;
  --siz-pr-txt-h2: 1.6em;
  --siz-pr-txt-h3: 1.45em;
  --siz-pr-txt-h4: 1.3em;
  --siz-pr-txt-h5: 1.15em;
  --siz-pr-txt-h6: 1em;
  --siz-pr-txt-highlight: 1em;
  --siz-pr-txt-italic: 1em;
  --siz-pr-txt-p: 1em;
  --siz-pr-txt-quote: 1em;
  --siz-pr-txt-strong: 1em;
  --siz-pr-txt-table: 1em;
  --siz-pr-txt-title: 2em;
  --siz-txt-h1: 1.75em;
  --siz-txt-h2: 1.6em;
  --siz-txt-h3: 1.45em;
  --siz-txt-h4: 1.3em;
  --siz-txt-h5: 1.15em;
  --siz-txt-h6: 1em;
  --siz-txt-p: 1em;
  --siz-txt-title: 2em;
  --slider-thumb-border-color: #437A41;
  --slider-track-background: #C9D3CB;
  --status-bar-background: #D7DDD9;
  --status-bar-border-color: #C9D3CB;
  --status-bar-text-color: #20542C;
  --suggestion-background: #D7DDD9;
  --tab-background-active: #D7DDD9;
  --tab-container-background: #D7DDD9;
  --tab-divider-color: #437A41;
  --tab-outline-color: #C9D3CB;
  --tab-switcher-background: #D7DDD9;
  --tab-switcher-menubar-background: linear-gradient(to top, #D7DDD9, transparent);
  --tab-text-color: #20542C;
  --tab-text-color-active: #20542C;
  --tab-text-color-focused: #20542C;
  --tab-text-color-focused-active: #20542C;
  --tab-text-color-focused-active-current: #20542C;
  --tab-text-color-focused-highlighted: #20542C;
  --table-add-button-border-color: #C9D3CB;
  --table-border-color: #C9D3CB;
  --table-drag-handle-background-active: #437A41;
  --table-drag-handle-color: #20542C;
  --table-drag-handle-color-active: #C9D3CB;
  --table-header-border-color: #C9D3CB;
  --table-header-color: #20542C;
  --table-selection-border-color: #437A41;
  --tag-background: hsla(#437A41, 0.1);
  --tag-background-hover: hsla(#437A41, 0.2);
  --tag-border-color: hsla(#437A41, 0.15);
  --tag-border-color-hover: hsla(#437A41, 0.15);
  --tag-color: #20542C;
  --tag-color-hover: #20542C;
  --tertiary: var(--text-accent-hover, #011F64);
  --text-accent: #20542C;
  --text-accent-hover: #011F64;
  --text-error: #0457E5;
  --text-faint: #20542C;
  --text-muted: #20542C;
  --text-normal: #20542C;
  --text-on-accent: #C9D3CB;
  --text-selection: #437254;
  --text-success: #437A41;
  --textHighlight: var(--background-modifier-hover, #86C66C);
  --titleFont: var(--font-interface, "ModeSeven Regular");
  --titlebar-background: #D7DDD9;
  --titlebar-background-focused: #D7DDD9;
  --titlebar-border-color: #C9D3CB;
  --titlebar-text-color: #20542C;
  --titlebar-text-color-focused: #20542C;
  --vault-profile-color: #20542C;
  --vault-profile-color-hover: #20542C;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(215, 221, 217);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(215, 221, 217);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(215, 221, 217);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(201, 211, 203);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(215, 221, 217);
  border-left-color: rgb(201, 211, 203);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body html {
  --col-accent: #3FFF8C;
  --col-accent-plus: #99E5B5;
  --col-base: #318C54;
  --col-base-background: #0B1510;
  --col-danger: #230D0D;
  --col-important: #FFD303;
  --col-important-muted: #3F3401;
  --col-important-plus: #FFF2BF;
  --col-muted: #163F26;
  --col-muted-plus: #020704;
  --col-safety: #122127;
  --col-text-selection: #437254;
  --col-txt-titlebars: black;
  --files-font-size: 1em;
  --fnt-head-p: "ModeSeven Regular";
  --fnt-title: "Scifi Title";
  --folders-font-size: 1em;
  --letterspacing-txt-headers: 1.5px;
  --letterspacing-txt-p: 0.5px;
  --oz-fta-file-font-size: 1em;
  --oz-fta-folder-font-size: 1em;
  --siz-txt-h1: 1.75em;
  --siz-txt-h2: 1.6em;
  --siz-txt-h3: 1.45em;
  --siz-txt-h4: 1.3em;
  --siz-txt-h5: 1.15em;
  --siz-txt-h6: 1em;
  --siz-txt-p: 1em;
  --siz-txt-title: 2em;
  --text-selection: #318C54;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
  outline: rgb(67, 122, 65) none 0px;
  text-decoration-color: rgb(67, 122, 65);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
  outline: rgb(67, 122, 65) none 0px;
  text-decoration-color: rgb(67, 122, 65);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
  outline: rgb(67, 122, 65) none 0px;
  text-decoration-color: rgb(67, 122, 65);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
  outline: rgb(67, 122, 65) none 0px;
  text-decoration-color: rgb(67, 122, 65);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(100, 160, 85);
  color: rgb(201, 211, 203);
  font-family: "ModeSeven Regular";
  outline: rgb(201, 211, 203) none 0px;
  text-decoration-color: rgb(201, 211, 203);
}

html[saved-theme="light"] body del {
  color: rgb(134, 198, 108);
  font-family: "ModeSeven Regular";
  outline: rgb(134, 198, 108) none 0px;
  text-decoration-color: rgb(134, 198, 108);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(32, 84, 44);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(32, 84, 44);
  border-color: rgb(32, 84, 44);
}

html[saved-theme="light"] body p {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
  outline: rgb(32, 84, 44) none 0px;
  text-decoration-color: rgb(32, 84, 44);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(4, 87, 229);
  font-family: "ModeSeven Regular";
  outline: rgb(4, 87, 229) none 0px;
  text-decoration-color: rgb(4, 87, 229);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(4, 87, 229);
  font-family: "ModeSeven Regular";
  outline: rgb(4, 87, 229) none 0px;
  text-decoration-color: rgb(4, 87, 229);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(255, 0, 0);
  font-family: "ModeSeven Regular";
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: underline;
  text-decoration-color: rgb(255, 0, 0);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

html[saved-theme="light"] body dt {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body ol > li {
  color: rgb(100, 160, 85);
}

html[saved-theme="light"] body ul > li {
  color: rgb(100, 160, 85);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body blockquote {
  font-family: "ModeSeven Regular";
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

html[saved-theme="light"] body table {
  background-color: rgb(215, 221, 217);
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
  width: 226.922px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body th {
  background-color: rgb(100, 160, 85);
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body thead {
  background-color: rgb(100, 160, 85);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
  color: rgb(32, 84, 44);
  padding-bottom: 1.96875px;
  padding-left: 3.9375px;
  padding-right: 3.9375px;
  padding-top: 1.96875px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(134, 198, 108);
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

html[saved-theme="light"] body figcaption {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(67, 122, 65);
  border-left-color: rgb(67, 122, 65);
  border-right-color: rgb(67, 122, 65);
  border-top-color: rgb(67, 122, 65);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(100, 160, 85);
  border-left-color: rgb(100, 160, 85);
  border-right-color: rgb(100, 160, 85);
  border-top-color: rgb(100, 160, 85);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(67, 122, 65);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "ModeSeven Regular";
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "ModeSeven Regular";
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(134, 198, 108);
  border-left-color: rgb(134, 198, 108);
  border-right-color: rgb(134, 198, 108);
  border-top-color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(134, 198, 108);
  text-decoration-color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(215, 221, 217);
  color: rgb(134, 198, 108);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background: rgb(172, 213, 128) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(172, 213, 128);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background: rgb(172, 213, 128) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(172, 213, 128);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background: rgb(172, 213, 128) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(172, 213, 128);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background: rgb(172, 213, 128) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(172, 213, 128);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background: rgb(172, 213, 128) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(172, 213, 128);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background: rgb(172, 213, 128) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(172, 213, 128);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background: rgb(172, 213, 128) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(172, 213, 128);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background: rgb(172, 213, 128) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(172, 213, 128);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgb(172, 213, 128) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(172, 213, 128);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background: rgb(172, 213, 128) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(172, 213, 128);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background: rgb(172, 213, 128) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(172, 213, 128);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background: rgb(172, 213, 128) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(172, 213, 128);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background: rgb(134, 198, 108) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(134, 198, 108);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(32, 84, 44);
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
  background-color: rgb(201, 211, 203);
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(215, 221, 217);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
  outline: rgb(32, 84, 44) none 0px;
  text-decoration-color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(134, 198, 108);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(215, 221, 217);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(134, 198, 108);
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(134, 198, 108);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body h1 {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(32, 84, 44);
  font-size: 30px;
}

html[saved-theme="light"] body h2 {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(32, 84, 44);
  font-family: "Scifi Title";
}

html[saved-theme="light"] body h3 {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

html[saved-theme="light"] body h4 {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

html[saved-theme="light"] body h5 {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

html[saved-theme="light"] body h6 {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container {
  background-color: rgb(201, 211, 203);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(32, 84, 44);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(215, 221, 217);
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(32, 84, 44);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(67, 122, 65);
  font-family: "ModeSeven Regular";
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body ul.section-ul {
  background-color: rgb(201, 211, 203);
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(32, 84, 44);
  stroke: rgb(32, 84, 44);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .canvas-node-file {
  background-color: rgb(215, 221, 217);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(215, 221, 217);
  border-color: rgb(32, 84, 44);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(100, 160, 85);
  border-color: rgb(201, 211, 203);
  color: rgb(32, 84, 44);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(201, 211, 203);
  border-left-color: rgb(201, 211, 203);
  border-right-color: rgb(201, 211, 203);
  border-top-color: rgb(201, 211, 203);
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(201, 211, 203);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 26.25px;
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(215, 221, 217);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(215, 221, 217);
  border-color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(229, 234, 231);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(32, 84, 44);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(215, 221, 217);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

html[saved-theme="light"] body abbr {
  color: rgb(100, 160, 85);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(32, 84, 44);
  border-left-color: rgb(32, 84, 44);
  border-right-color: rgb(32, 84, 44);
  border-top-color: rgb(32, 84, 44);
  color: rgb(32, 84, 44);
  font-family: "ModeSeven Regular";
}

html[saved-theme="light"] body kbd {
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

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(100, 160, 85);
  border-left-color: rgb(100, 160, 85);
  border-right-color: rgb(100, 160, 85);
  border-top-color: rgb(100, 160, 85);
}

html[saved-theme="light"] body sub {
  color: rgb(100, 160, 85);
  font-size: 12.5px;
}

html[saved-theme="light"] body summary {
  color: rgb(32, 84, 44);
}

html[saved-theme="light"] body sup {
  color: rgb(134, 198, 108);
  font-size: 12.5px;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(4, 87, 229);
  border-bottom-color: rgb(134, 198, 108);
  border-bottom-left-radius: 22.9688px;
  border-bottom-right-radius: 22.9688px;
  border-left-color: rgb(134, 198, 108);
  border-right-color: rgb(134, 198, 108);
  border-top-color: rgb(134, 198, 108);
  border-top-left-radius: 22.9688px;
  border-top-right-radius: 22.9688px;
  color: rgb(134, 198, 108);
}`,
  },
};
