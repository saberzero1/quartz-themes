import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "abyssal",
    modes: ["dark", "light"],
    variations: ["colorful-headings"],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-dark: 55%;
  --accent-h: 200;
  --accent-l: 45%;
  --accent-s: 70%;
  --background-modifier-active-hover: rgba(34, 142, 195, 0.1);
  --background-modifier-border: #141F25;
  --background-modifier-border-focus: #1E3038;
  --background-modifier-border-hover: #19272E;
  --background-modifier-error: #E6578A;
  --background-modifier-error-hover: #E6578A;
  --background-modifier-error-rgb: 280, 87, 138;
  --background-modifier-form-field: #121C21;
  --background-modifier-form-field-hover: #121C21;
  --background-modifier-hover: rgba(34, 142, 195, 0.1);
  --background-modifier-success: #39F098;
  --background-modifier-success-rgb: 57, 240, 152;
  --background-primary: #0E161B;
  --background-primary-alt: #0C1417;
  --background-secondary: #070B0D;
  --background-secondary-alt: #141F25;
  --bases-cards-background: #0E161B;
  --bases-cards-cover-background: #0C1417;
  --bases-cards-shadow: 0 0 0 1px #141F25;
  --bases-cards-shadow-hover: 0 0 0 1px #19272E;
  --bases-embed-border-color: #141F25;
  --bases-group-heading-property-color: #7AA3B8;
  --bases-table-border-color: #19272E;
  --bases-table-cell-background-active: #0E161B;
  --bases-table-cell-background-disabled: #0C1417;
  --bases-table-cell-background-selected: rgba(34, 142, 195, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #1E3038;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(34, 142, 195);
  --bases-table-group-background: #0C1417;
  --bases-table-header-background: #0E161B;
  --bases-table-header-background-hover: rgba(34, 142, 195, 0.1);
  --bases-table-header-color: #7AA3B8;
  --bases-table-row-background-hover: #0C1417;
  --bases-table-summary-background: #0E161B;
  --bases-table-summary-background-hover: rgba(34, 142, 195, 0.1);
  --block-margin: 2em 0;
  --blockquote-background-color: #070B0D;
  --blockquote-border-color: rgb(34, 142, 195);
  --blockquote-color: hsl(
                                            200, 
                                            70%, 
                                            70%);
  --blockquote-style: italic;
  --blur-background: color-mix(in srgb, #141F25 65%, transparent) linear-gradient(#141F25, color-mix(in srgb, #141F25 65%, transparent));
  --box-shadow-layered: 1.5px 0px 5px   rgba(10, 17, 20, 0.015),
      3.5px 0px 15px  rgba(10, 17, 20, 0.025),
      8px   0px 35px  rgba(10, 17, 20, 0.035),
      27px  0px 125px rgba(10, 17, 20, 0.05);
  --callout-bug: 280, 87, 138;
  --callout-default: 4, 165, 255;
  --callout-error: 280, 87, 138;
  --callout-example: 180, 145, 237;
  --callout-fail: 280, 87, 138;
  --callout-important: 129, 213, 208;
  --callout-info: 4, 165, 255;
  --callout-question: 243, 200, 91;
  --callout-success: 57, 240, 152;
  --callout-summary: 129, 213, 208;
  --callout-tip: 129, 213, 208;
  --callout-todo: 4, 165, 255;
  --callout-warning: 243, 200, 91;
  --canvas-background: #0E161B;
  --canvas-card-label-color: #355464;
  --canvas-color-1: 280, 87, 138;
  --canvas-color-2: 243, 200, 91;
  --canvas-color-3: 207, 186, 0;
  --canvas-color-4: 57, 240, 152;
  --canvas-color-5: 129, 213, 208;
  --canvas-color-6: 180, 145, 237;
  --canvas-dot-pattern: #141F25;
  --caret-color: #BDD1DB;
  --checkbox-border-color: #243842;
  --checkbox-border-color-hover: #7AA3B8;
  --checkbox-color: rgb(34, 142, 195);
  --checkbox-color-hover: hsl(
                                            200, 
                                            70%, 
                                            70%);
  --checkbox-marker-color: #0E161B;
  --checklist-done-color: #7AA3B8;
  --code-background: #15222C;
  --code-border-color: #141F25;
  --code-bracket-background: rgba(34, 142, 195, 0.1);
  --code-comment: #3f6a87;
  --code-function: #CFBA00;
  --code-important: #F3C85B;
  --code-keyword: #EC95EE;
  --code-normal: #D6E3F0;
  --code-operator: #E6578A;
  --code-property: #81D5D0;
  --code-punctuation: #7AA3B8;
  --code-string: #39F098;
  --code-tag: #E6578A;
  --code-value: #B491ED;
  --collapse-icon-color: #355464;
  --collapse-icon-color-collapsed: hsl(
                                              200,
                                              70%,
                                              55%);
  --color-accent: rgb(34, 142, 195);
  --color-accent-1: rgb(46, 170, 220);
  --color-accent-2: rgb(69, 188, 227);
  --color-accent-alt: hsl(
                                            200, 
                                            70%, 
                                            70%);
  --color-accent-hsl: 200, 70%, 45%;
  --color-base-00: #070B0D;
  --color-base-10: #0C1417;
  --color-base-100: #BDD1DB;
  --color-base-20: #0E161B;
  --color-base-25: #121C21;
  --color-base-30: #141F25;
  --color-base-35: #19272E;
  --color-base-40: #1E3038;
  --color-base-50: #243842;
  --color-base-60: #355464;
  --color-base-70: #7AA3B8;
  --color-blue: #04A5FF;
  --color-blue-rgb: 4, 165, 255;
  --color-cyan: #81D5D0;
  --color-cyan-rgb: 129, 213, 208;
  --color-emphasis: hsl(
                                                200,
                                                70%,
                                                65%);
  --color-green: #39F098;
  --color-green-rgb: 57, 240, 152;
  --color-orange: #F3C85B;
  --color-orange-rgb: 243, 200, 91;
  --color-pink: #EC95EE;
  --color-pink-rgb: 236, 149, 238;
  --color-purple: #B491ED;
  --color-purple-rgb: 180, 145, 237;
  --color-red: #E6578A;
  --color-red-rgb: 280, 87, 138;
  --color-yellow: #CFBA00;
  --color-yellow-rgb: 207, 186, 0;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #141F25;
  --divider-color-hover: rgb(34, 142, 195);
  --dropdown-background: #141F25;
  --dropdown-background-hover: #19272E;
  --embed-background-color: #141F25;
  --embed-block-shadow-hover: 0 0 0 1px #141F25, inset 0 0 0 1px #141F25;
  --embed-border-start: 2px solid rgb(34, 142, 195);
  --file-header-background: #0E161B;
  --file-header-background-focused: #0E161B;
  --flair-background: #141F25;
  --flair-color: #BDD1DB;
  --footnote-divider-color: #141F25;
  --footnote-id-color: #7AA3B8;
  --footnote-id-color-no-occurrences: #355464;
  --footnote-input-background-active: rgba(34, 142, 195, 0.1);
  --graph-line: #243842;
  --graph-node: hsl(
                                              200,
                                              70%,
                                              75%);
  --graph-node-attachment: #CFBA00;
  --graph-node-focused: hsl(
                                              200,
                                              70%,
                                              55%);
  --graph-node-tag: #39F098;
  --graph-node-unresolved: #355464;
  --graph-text: #BDD1DB;
  --gray: var(--text-muted);
  --h1-color: #DEE8ED;
  --h1-line-height: 1.111;
  --h1-size: 2.25em;
  --h2-color: #DEE8ED;
  --h2-line-height: 1.143;
  --h2-size: 1.75em;
  --h3-color: #DEE8ED;
  --h3-line-height: 1.167;
  --h3-size: 1.5em;
  --h4-color: #DEE8ED;
  --h4-line-height: 1.2;
  --h4-size: 1.25em;
  --h5-color: #DEE8ED;
  --h5-line-height: 1.25;
  --h5-size: 1em;
  --h6-color: #DEE8ED;
  --h6-line-height: 1.333;
  --h6-size: 0.75em;
  --heading-color: #DEE8ED;
  --heading-formatting: #355464;
  --highlight: var(--background-modifier-hover);
  --hr-color: #141F25;
  --hr-thickness: 1px;
  --icon-color: #7AA3B8;
  --icon-color-active: hsl(
                                              200,
                                              70%,
                                              55%);
  --icon-color-focused: #BDD1DB;
  --icon-color-hover: #7AA3B8;
  --indentation-guide-color: rgba(34, 142, 195, 0.15);
  --indentation-guide-color-active: rgba(34, 142, 195, 0.15);
  --inline-title-border: #19272E;
  --inline-title-color: #3d6681;
  --inline-title-line-height: 1.111;
  --inline-title-size: 1em;
  --inline-title-weight: bold;
  --input-date-separator: #355464;
  --input-placeholder-color: #355464;
  --interactive-accent: rgb(34, 142, 195);
  --interactive-accent-hover: rgb(46, 170, 220);
  --interactive-accent-hsl: 200, 70%, 45%;
  --interactive-hover: #19272E;
  --interactive-normal: #141F25;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-roomy: 1.75;
  --link-color: hsl(
                                              200,
                                              70%,
                                              55%);
  --link-color-hover: hsl(
                                              200,
                                              70%,
                                              75%);
  --link-color-hover-embed: hsl(
                                                200,
                                                70%,
                                                95%);
  --link-external-color: hsl(
                                              200,
                                              70%,
                                              55%);
  --link-external-color-hover: hsl(
                                              200,
                                              70%,
                                              75%);
  --link-unresolved-color: hsl(
                                              200,
                                              70%,
                                              55%);
  --link-unresolved-decoration-color: rgba(34, 142, 195, 0.3);
  --list-marker-color: hsl(
                                              200,
                                              70%,
                                              55%);
  --list-marker-color-collapsed: #BDD1DB;
  --list-marker-color-hover: #7AA3B8;
  --list-spacing: 0.5em;
  --menu-background: #070B0D;
  --menu-border-color: #19272E;
  --metadata-border-color: #141F25;
  --metadata-divider-color: #141F25;
  --metadata-input-background-active: rgba(34, 142, 195, 0.1);
  --metadata-input-text-color: #BDD1DB;
  --metadata-label-background-active: rgba(34, 142, 195, 0.1);
  --metadata-label-text-color: #7AA3B8;
  --metadata-label-text-color-hover: #7AA3B8;
  --metadata-property-background-active: rgba(34, 142, 195, 0.1);
  --metadata-property-box-shadow-focus: 0 0 0 2px #1E3038;
  --metadata-property-box-shadow-hover: 0 0 0 1px #19272E;
  --modal-background: #0E161B;
  --modal-border-color: #1E3038;
  --nav-collapse-icon-color: #355464;
  --nav-collapse-icon-color-collapsed: #355464;
  --nav-heading-color: #BDD1DB;
  --nav-heading-color-collapsed: #355464;
  --nav-heading-color-collapsed-hover: #7AA3B8;
  --nav-heading-color-hover: #BDD1DB;
  --nav-indentation-guide-color: rgba(34, 142, 195, 0.15);
  --nav-item-background-active: rgba(34, 142, 195, 0.1);
  --nav-item-background-hover: rgba(34, 142, 195, 0.1);
  --nav-item-background-selected: rgba(34, 142, 195, 0.15);
  --nav-item-color: #7AA3B8;
  --nav-item-color-active: #BDD1DB;
  --nav-item-color-highlighted: hsl(
                                              200,
                                              70%,
                                              55%);
  --nav-item-color-hover: #BDD1DB;
  --nav-item-color-selected: #BDD1DB;
  --nav-tag-color: #355464;
  --nav-tag-color-active: #7AA3B8;
  --nav-tag-color-hover: #7AA3B8;
  --pdf-background: #0E161B;
  --pdf-page-background: #0E161B;
  --pdf-shadow: 0 0 0 1px #141F25;
  --pdf-sidebar-background: #0E161B;
  --pdf-thumbnail-shadow: 0 0 0 1px #141F25;
  --pill-border-color: #141F25;
  --pill-border-color-hover: #19272E;
  --pill-color: #7AA3B8;
  --pill-color-hover: #BDD1DB;
  --pill-color-remove: #355464;
  --pill-color-remove-hover: hsl(
                                              200,
                                              70%,
                                              55%);
  --prompt-background: #0E161B;
  --prompt-border-color: #1E3038;
  --raised-background: color-mix(in srgb, #141F25 65%, transparent) linear-gradient(#141F25, color-mix(in srgb, #141F25 65%, transparent));
  --rendered-code-bg: #15222C;
  --rendered-code-text: #F3C85B;
  --ribbon-background: #070B0D;
  --ribbon-background-collapsed: #0E161B;
  --search-clear-button-color: #7AA3B8;
  --search-icon-color: #7AA3B8;
  --search-result-background: #0E161B;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #BDD1DB;
  --setting-items-background: #0C1417;
  --setting-items-border-color: #141F25;
  --slider-thumb-border-color: #19272E;
  --slider-track-background: #141F25;
  --status-bar-background: #070B0D;
  --status-bar-border-color: #141F25;
  --status-bar-text-color: #7AA3B8;
  --suggestion-background: #0E161B;
  --sync-avatar-color-1: #E6578A;
  --sync-avatar-color-2: #F3C85B;
  --sync-avatar-color-3: #CFBA00;
  --sync-avatar-color-4: #39F098;
  --sync-avatar-color-5: #81D5D0;
  --sync-avatar-color-6: #04A5FF;
  --sync-avatar-color-7: #B491ED;
  --sync-avatar-color-8: #EC95EE;
  --tab-background-active: #0E161B;
  --tab-container-background: #070B0D;
  --tab-container-background-new: #070B0D;
  --tab-curve: 12px;
  --tab-divider-color: #141F25;
  --tab-outline-color: #141F25;
  --tab-radius: 9px;
  --tab-switcher-background: #070B0D;
  --tab-switcher-menubar-background: linear-gradient(to top, #070B0D, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(34, 142, 195);
  --tab-text-color: #19272E;
  --tab-text-color-active: #243842;
  --tab-text-color-focused: #355464;
  --tab-text-color-focused-active: #7AA3B8;
  --tab-text-color-focused-active-current: #BDD1DB;
  --tab-text-color-focused-highlighted: hsl(
                                              200,
                                              70%,
                                              55%);
  --table-add-button-border-color: #141F25;
  --table-border-color: #19272E;
  --table-drag-handle-background-active: rgb(34, 142, 195);
  --table-drag-handle-color: #355464;
  --table-header-background: #0C1417;
  --table-header-background-hover: #121C21;
  --table-header-border-color: #19272E;
  --table-header-color: #BDD1DB;
  --table-row-background-hover: #0C1417;
  --table-row-even-background: #141F25;
  --table-row-odd-background: #0E161B;
  --table-selection: rgba(34, 142, 195, 0.1);
  --table-selection-border-color: rgb(34, 142, 195);
  --tag-background: rgba(34, 142, 195, 0.1);
  --tag-background-hover: rgba(34, 142, 195, 0.2);
  --tag-border-color: rgba(34, 142, 195, 0.15);
  --tag-border-color-hover: rgba(34, 142, 195, 0.15);
  --tag-color: hsl(
                                              200,
                                              70%,
                                              55%);
  --tag-color-hover: hsl(
                                              200,
                                              70%,
                                              55%);
  --tag-padding-x: 0.5em;
  --tag-padding-y: 0.15em;
  --tag-radius: 0.5em;
  --tag-size: 0.75em;
  --tertiary: var(--text-accent-hover);
  --text-accent: hsl(
                                              200,
                                              70%,
                                              55%);
  --text-accent-emphasis: hsl(
                                                200,
                                                70%,
                                                65%);
  --text-accent-hover: hsl(
                                              200,
                                              70%,
                                              75%);
  --text-accent-hover-embed: hsl(
                                                200,
                                                70%,
                                                95%);
  --text-completed-checkboxes: #3e657c;
  --text-completed-checkboxes-embed: #3f6b88;
  --text-error: #E6578A;
  --text-faint: #355464;
  --text-highlight-bg-editing: #56572A;
  --text-highlight-bg-rendered: rgba(230, 232, 104, 0.85);
  --text-highlight-editing: #F0EAAF;
  --text-highlight-rendered: #252525;
  --text-muted: #7AA3B8;
  --text-normal: #BDD1DB;
  --text-selection: rgba(34, 142, 195, 0.33);
  --text-success: #39F098;
  --text-warning: #F3C85B;
  --textHighlight: var(--background-modifier-hover);
  --titlebar-background: #070B0D;
  --titlebar-background-focused: #070B0D;
  --titlebar-border-color: #141F25;
  --titlebar-text-color: #7AA3B8;
  --titlebar-text-color-focused: #BDD1DB;
  --vault-name-color: hsl(
                                              200,
                                              70%,
                                              55%);
  --vault-profile-color: #BDD1DB;
  --vault-profile-color-hover: #BDD1DB;
  --workspace-background-translucent: rgba(7, 11, 13, 0.95);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(7, 11, 13);
  color: rgb(189, 209, 219);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(14, 22, 27);
  color: rgb(189, 209, 219);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(7, 11, 13);
  color: rgb(189, 209, 219);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(20, 31, 37);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(7, 11, 13);
  border-left-color: rgb(20, 31, 37);
  color: rgb(189, 209, 219);
}

body div#quartz-root {
  background-color: rgb(14, 22, 27);
  color: rgb(189, 209, 219);
}`,
    typography: `body .page article p > b, b {
  color: rgb(103, 187, 228);
  font-weight: 800;
  outline: rgb(103, 187, 228) none 0px;
  text-decoration: rgb(103, 187, 228);
  text-decoration-color: rgb(103, 187, 228);
}

body .page article p > em, em {
  color: rgb(103, 187, 228);
  outline: rgb(103, 187, 228) none 0px;
  text-decoration: rgb(103, 187, 228);
  text-decoration-color: rgb(103, 187, 228);
}

body .page article p > i, i {
  color: rgb(103, 187, 228);
  outline: rgb(103, 187, 228) none 0px;
  text-decoration: rgb(103, 187, 228);
  text-decoration-color: rgb(103, 187, 228);
}

body .page article p > strong, strong {
  color: rgb(103, 187, 228);
  font-weight: 800;
  outline: rgb(103, 187, 228) none 0px;
  text-decoration: rgb(103, 187, 228);
  text-decoration-color: rgb(103, 187, 228);
}

body .text-highlight {
  color: rgb(189, 209, 219);
  outline: rgb(189, 209, 219) none 0px;
  text-decoration: rgb(189, 209, 219);
  text-decoration-color: rgb(189, 209, 219);
}

body del {
  color: rgb(189, 209, 219);
  outline: rgb(189, 209, 219) none 0px;
  text-decoration: line-through rgb(189, 209, 219);
  text-decoration-color: rgb(189, 209, 219);
}

body p {
  color: rgb(122, 163, 184);
  outline: rgb(122, 163, 184) none 0px;
  text-decoration: rgb(122, 163, 184);
  text-decoration-color: rgb(122, 163, 184);
}`,
    links: `body a.external, footer a {
  color: rgb(60, 167, 221);
  outline: rgb(60, 167, 221) none 0px;
  text-decoration: underline rgb(60, 167, 221);
  text-decoration-color: rgb(60, 167, 221);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(60, 167, 221);
  outline: rgb(60, 167, 221) none 0px;
  text-decoration: underline rgb(60, 167, 221);
  text-decoration-color: rgb(60, 167, 221);
}

body a.internal.broken {
  color: rgb(60, 167, 221);
  outline: rgb(60, 167, 221) none 0px;
  text-decoration: underline rgba(34, 142, 195, 0.3);
  text-decoration-color: rgba(34, 142, 195, 0.3);
}`,
    lists: `body dd {
  color: rgb(189, 209, 219);
}

body dt {
  color: rgb(189, 209, 219);
}

body ol > li {
  color: rgb(189, 209, 219);
}

body ol.overflow {
  background-color: rgb(14, 22, 27);
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

body ul > li {
  color: rgb(189, 209, 219);
}

body ul.overflow {
  background-color: rgb(14, 22, 27);
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(53, 84, 100);
  text-decoration: rgb(53, 84, 100);
}

body blockquote {
  font-style: italic;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

body table {
  border-bottom-color: rgb(25, 39, 46);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(25, 39, 46);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(25, 39, 46);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(25, 39, 46);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(189, 209, 219);
  width: 224.562px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(20, 31, 37);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(14, 22, 27);
}

body td {
  border-bottom-color: rgb(25, 39, 46);
  border-left-color: rgb(25, 39, 46);
  border-right-color: rgb(25, 39, 46);
  border-top-color: rgb(25, 39, 46);
  color: rgb(189, 209, 219);
}

body th {
  border-bottom-color: rgb(25, 39, 46);
  border-bottom-width: 0px;
  border-left-color: rgb(25, 39, 46);
  border-left-width: 0px;
  border-right-color: rgb(25, 39, 46);
  border-right-width: 0px;
  border-top-color: rgb(25, 39, 46);
  border-top-width: 0px;
  color: rgb(189, 209, 219);
  font-weight: 700;
  padding-bottom: 10.2px;
  padding-left: 10.2px;
  padding-right: 10.2px;
  padding-top: 10.2px;
}

body thead {
  border-bottom-color: rgb(25, 39, 46);
  border-left-color: rgb(25, 39, 46);
  border-right-color: rgb(25, 39, 46);
  border-top-color: rgb(25, 39, 46);
}

body tr {
  background-color: rgb(12, 20, 23);
  border-bottom-color: rgb(25, 39, 46);
  border-left-color: rgb(25, 39, 46);
  border-right-color: rgb(25, 39, 46);
  border-top-color: rgb(25, 39, 46);
}`,
    code: `body code {
  border-bottom-color: rgb(243, 200, 91);
  border-left-color: rgb(243, 200, 91);
  border-right-color: rgb(243, 200, 91);
  border-top-color: rgb(243, 200, 91);
  color: rgb(243, 200, 91);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(21, 34, 44);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(21, 34, 44);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(189, 209, 219);
}

body pre > code > [data-line] {
  border-left-color: rgb(207, 186, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(207, 186, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(207, 186, 0);
  border-left-color: rgb(207, 186, 0);
  border-right-color: rgb(207, 186, 0);
  border-top-color: rgb(207, 186, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(21, 34, 44);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgb(21, 34, 44);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

body figcaption {
  color: rgb(189, 209, 219);
}

body figure {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

body img {
  border-bottom-color: rgb(189, 209, 219);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(189, 209, 219);
  border-radius: 4px;
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body video {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}`,
    embeds: `body .file-embed {
  background-color: rgb(12, 20, 23);
  border-bottom-color: rgb(122, 163, 184);
  border-left-color: rgb(122, 163, 184);
  border-right-color: rgb(122, 163, 184);
  border-top-color: rgb(122, 163, 184);
}

body .footnotes {
  border-top-color: rgb(189, 209, 219);
  color: rgb(189, 209, 219);
}

body .transclude {
  background-color: rgb(20, 31, 37);
  border-bottom-color: rgb(189, 209, 219);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(189, 209, 219);
  border-left-width: 0px;
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .transclude-inner {
  background-color: rgb(20, 31, 37);
  border-bottom-color: rgb(189, 209, 219);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(189, 209, 219);
  border-left-width: 0px;
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body input[type=checkbox] {
  border-bottom-color: rgb(36, 56, 66);
  border-left-color: rgb(36, 56, 66);
  border-right-color: rgb(36, 56, 66);
  border-top-color: rgb(36, 56, 66);
}

body li.task-list-item[data-task='!'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='*'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='-'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='/'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='>'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='?'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='I'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='S'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='b'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='c'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='d'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='f'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='i'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='k'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='l'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='p'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='u'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='w'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(4, 165, 255);
  border-left-color: rgb(4, 165, 255);
  border-right-color: rgb(4, 165, 255);
  border-top-color: rgb(4, 165, 255);
}

body .callout[data-callout="abstract"] {
  --callout-color: 129, 213, 208;
  background-color: rgba(129, 213, 208, 0.1);
  border-bottom-color: rgba(129, 213, 208, 0.25);
  border-left-color: rgba(129, 213, 208, 0.25);
  border-right-color: rgba(129, 213, 208, 0.25);
  border-top-color: rgba(129, 213, 208, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 280, 87, 138;
  background-color: rgba(255, 87, 138, 0.1);
  border-bottom-color: rgba(255, 87, 138, 0.25);
  border-left-color: rgba(255, 87, 138, 0.25);
  border-right-color: rgba(255, 87, 138, 0.25);
  border-top-color: rgba(255, 87, 138, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 280, 87, 138;
  background-color: rgba(255, 87, 138, 0.1);
  border-bottom-color: rgba(255, 87, 138, 0.25);
  border-left-color: rgba(255, 87, 138, 0.25);
  border-right-color: rgba(255, 87, 138, 0.25);
  border-top-color: rgba(255, 87, 138, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 180, 145, 237;
  background-color: rgba(180, 145, 237, 0.1);
  border-bottom-color: rgba(180, 145, 237, 0.25);
  border-left-color: rgba(180, 145, 237, 0.25);
  border-right-color: rgba(180, 145, 237, 0.25);
  border-top-color: rgba(180, 145, 237, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 280, 87, 138;
  background-color: rgba(255, 87, 138, 0.1);
  border-bottom-color: rgba(255, 87, 138, 0.25);
  border-left-color: rgba(255, 87, 138, 0.25);
  border-right-color: rgba(255, 87, 138, 0.25);
  border-top-color: rgba(255, 87, 138, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 4, 165, 255;
  background-color: rgba(4, 165, 255, 0.1);
  border-bottom-color: rgba(4, 165, 255, 0.25);
  border-left-color: rgba(4, 165, 255, 0.25);
  border-right-color: rgba(4, 165, 255, 0.25);
  border-top-color: rgba(4, 165, 255, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 4, 165, 255;
  background-color: rgba(4, 165, 255, 0.1);
  border-bottom-color: rgba(4, 165, 255, 0.25);
  border-left-color: rgba(4, 165, 255, 0.25);
  border-right-color: rgba(4, 165, 255, 0.25);
  border-top-color: rgba(4, 165, 255, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 243, 200, 91;
  background-color: rgba(243, 200, 91, 0.1);
  border-bottom-color: rgba(243, 200, 91, 0.25);
  border-left-color: rgba(243, 200, 91, 0.25);
  border-right-color: rgba(243, 200, 91, 0.25);
  border-top-color: rgba(243, 200, 91, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 57, 240, 152;
  background-color: rgba(57, 240, 152, 0.1);
  border-bottom-color: rgba(57, 240, 152, 0.25);
  border-left-color: rgba(57, 240, 152, 0.25);
  border-right-color: rgba(57, 240, 152, 0.25);
  border-top-color: rgba(57, 240, 152, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 129, 213, 208;
  background-color: rgba(129, 213, 208, 0.1);
  border-bottom-color: rgba(129, 213, 208, 0.25);
  border-left-color: rgba(129, 213, 208, 0.25);
  border-right-color: rgba(129, 213, 208, 0.25);
  border-top-color: rgba(129, 213, 208, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 4, 165, 255;
  background-color: rgba(4, 165, 255, 0.1);
  border-bottom-color: rgba(4, 165, 255, 0.25);
  border-left-color: rgba(4, 165, 255, 0.25);
  border-right-color: rgba(4, 165, 255, 0.25);
  border-top-color: rgba(4, 165, 255, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 243, 200, 91;
  background-color: rgba(243, 200, 91, 0.1);
  border-bottom-color: rgba(243, 200, 91, 0.25);
  border-left-color: rgba(243, 200, 91, 0.25);
  border-right-color: rgba(243, 200, 91, 0.25);
  border-top-color: rgba(243, 200, 91, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(18, 28, 33);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(189, 209, 219);
}

body .search > .search-container > .search-space {
  background-color: rgb(14, 22, 27);
  border-bottom-color: rgb(30, 48, 56);
  border-left-color: rgb(30, 48, 56);
  border-right-color: rgb(30, 48, 56);
  border-top-color: rgb(30, 48, 56);
}

body .search > .search-container > .search-space > * {
  color: rgb(189, 209, 219);
  outline: rgb(189, 209, 219) none 0px;
  text-decoration: rgb(189, 209, 219);
  text-decoration-color: rgb(189, 209, 219);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(189, 209, 219);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(189, 209, 219);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(34, 142, 195, 0.1);
  color: rgb(189, 209, 219);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(30, 48, 56);
  border-left-color: rgb(30, 48, 56);
  border-right-color: rgb(30, 48, 56);
  border-top-color: rgb(30, 48, 56);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(7, 11, 13);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(34, 142, 195, 0.1);
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
  color: rgb(189, 209, 219);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(34, 142, 195, 0.1);
  color: rgb(189, 209, 219);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(34, 142, 195, 0.1);
  border-bottom-color: rgba(34, 142, 195, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(34, 142, 195, 0.15);
  border-right-color: rgba(34, 142, 195, 0.15);
  border-top-color: rgba(34, 142, 195, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

body a.internal.tag-link::before {
  color: rgb(60, 167, 221);
}

body h1 {
  color: rgb(222, 232, 237);
}

body h2 {
  color: rgb(222, 232, 237);
}

body h2.page-title, h2.page-title a {
  color: rgb(61, 102, 129);
}

body h3 {
  color: rgb(222, 232, 237);
}

body h4 {
  color: rgb(222, 232, 237);
}

body h5 {
  color: rgb(222, 232, 237);
}

body h6 {
  color: rgb(222, 232, 237);
}

body hr {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
}`,
    scrollbars: `body .callout {
  --callout-color: 4, 165, 255;
  border-bottom-color: rgba(4, 165, 255, 0.25);
  border-left-color: rgba(4, 165, 255, 0.25);
  border-right-color: rgba(4, 165, 255, 0.25);
  border-top-color: rgba(4, 165, 255, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(14, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 22, 27);
}

body ::-webkit-scrollbar-corner {
  background: rgb(14, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 22, 27);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(14, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 22, 27);
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(14, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 22, 27);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(14, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 22, 27);
}

body ::-webkit-scrollbar-track {
  background: rgb(14, 22, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(14, 22, 27);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(122, 163, 184);
  font-weight: 500;
  text-decoration: rgb(122, 163, 184);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(122, 163, 184);
  font-weight: 500;
  text-decoration: rgb(122, 163, 184);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(122, 163, 184);
  font-weight: 300;
  text-decoration: rgb(122, 163, 184);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(34, 142, 195, 0.1);
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
  color: rgb(189, 209, 219);
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(122, 163, 184);
  border-left-color: rgb(122, 163, 184);
  border-right-color: rgb(122, 163, 184);
  border-top-color: rgb(122, 163, 184);
  color: rgb(122, 163, 184);
}`,
    footer: `body footer {
  background-color: rgb(7, 11, 13);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(122, 163, 184);
}

body footer ul li a {
  color: rgb(122, 163, 184);
  text-decoration: rgb(122, 163, 184);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(189, 209, 219);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
  color: rgb(189, 209, 219);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(122, 163, 184);
  text-decoration: rgb(122, 163, 184);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(122, 163, 184);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

body li.section-li > .section .meta {
  color: rgb(122, 163, 184);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(122, 163, 184);
  text-decoration: rgb(122, 163, 184);
}

body ul.section-ul {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(122, 163, 184);
  border-left-color: rgb(122, 163, 184);
  border-right-color: rgb(122, 163, 184);
  border-top-color: rgb(122, 163, 184);
  color: rgb(122, 163, 184);
}

body .darkmode svg {
  color: rgb(122, 163, 184);
  stroke: rgb(122, 163, 184);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(122, 163, 184);
  border-left-color: rgb(122, 163, 184);
  border-right-color: rgb(122, 163, 184);
  border-top-color: rgb(122, 163, 184);
  color: rgb(122, 163, 184);
}

body .breadcrumb-element p {
  color: rgb(53, 84, 100);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
  color: rgb(189, 209, 219);
}

body .metadata {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(122, 163, 184);
}

body .metadata-properties {
  border-bottom-color: rgb(122, 163, 184);
  border-left-color: rgb(122, 163, 184);
  border-right-color: rgb(122, 163, 184);
  border-top-color: rgb(122, 163, 184);
  color: rgb(122, 163, 184);
}

body .navigation-progress {
  background-color: rgb(7, 11, 13);
}

body .page-header h2.page-title {
  color: rgb(189, 209, 219);
}

body abbr {
  color: rgb(189, 209, 219);
  text-decoration: underline dotted rgb(189, 209, 219);
}

body details {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

body input[type=text] {
  border-bottom-color: rgb(122, 163, 184);
  border-left-color: rgb(122, 163, 184);
  border-right-color: rgb(122, 163, 184);
  border-top-color: rgb(122, 163, 184);
  color: rgb(122, 163, 184);
}

body kbd {
  background-color: rgb(21, 34, 44);
  border-bottom-color: rgb(214, 227, 240);
  border-left-color: rgb(214, 227, 240);
  border-right-color: rgb(214, 227, 240);
  border-top-color: rgb(214, 227, 240);
  color: rgb(214, 227, 240);
}

body progress {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

body sub {
  color: rgb(189, 209, 219);
}

body summary {
  color: rgb(189, 209, 219);
}

body sup {
  color: rgb(189, 209, 219);
}`,
  },
  light: {
    base: `:root:root {
  --accent-dark: 55%;
  --accent-h: 200;
  --accent-l: 45%;
  --accent-s: 70%;
  --background-modifier-active-hover: rgba(34, 142, 195, 0.1);
  --background-modifier-border: #CFDAE2;
  --background-modifier-border-focus: #98ACBA;
  --background-modifier-border-hover: #52697A;
  --background-modifier-error: #F51A68;
  --background-modifier-error-hover: #F51A68;
  --background-modifier-error-rgb: 245, 26, 104;
  --background-modifier-form-field: #F6F9FB;
  --background-modifier-form-field-hover: #F6F9FB;
  --background-modifier-hover: rgba(34, 142, 195, 0.1);
  --background-modifier-success: #34915e;
  --background-modifier-success-rgb: 52, 145, 94;
  --background-primary: #F6F9FB;
  --background-primary-alt: #EFF3F6;
  --background-secondary: #EFF3F6;
  --bases-cards-background: #F6F9FB;
  --bases-cards-cover-background: #EFF3F6;
  --bases-cards-shadow: 0 0 0 1px #CFDAE2;
  --bases-cards-shadow-hover: 0 0 0 1px #52697A;
  --bases-embed-border-color: #CFDAE2;
  --bases-group-heading-property-color: #141F25;
  --bases-table-border-color: #CFDAE2;
  --bases-table-cell-background-active: #F6F9FB;
  --bases-table-cell-background-disabled: #EFF3F6;
  --bases-table-cell-background-selected: rgba(34, 142, 195, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #98ACBA;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(35, 154, 209);
  --bases-table-group-background: #EFF3F6;
  --bases-table-header-background: #F6F9FB;
  --bases-table-header-background-hover: rgba(34, 142, 195, 0.1);
  --bases-table-header-color: #141F25;
  --bases-table-row-background-hover: #EFF3F6;
  --bases-table-summary-background: #F6F9FB;
  --bases-table-summary-background-hover: rgba(34, 142, 195, 0.1);
  --block-margin: 2em 0;
  --blockquote-background-color: #F6F9FB;
  --blockquote-border-color: rgb(35, 154, 209);
  --blockquote-color: #2E3D49;
  --blockquote-style: italic;
  --blur-background: color-mix(in srgb, #F6F9FB 65%, transparent) linear-gradient(#F6F9FB, color-mix(in srgb, #F6F9FB 65%, transparent));
  --box-shadow-layered: 0px 3px  10px  -100px rgba(26, 40, 51, 0.15),
    0px 11px 35px  -100px rgba(26, 40, 51, 0.25),
    0px 52px 150px -100px rgba(26, 40, 51, 0.35);
  --callout-bug: 245, 26, 104;
  --callout-default: 4, 119, 255;
  --callout-error: 245, 26, 104;
  --callout-example: 156, 122, 211;
  --callout-fail: 245, 26, 104;
  --callout-important: 0, 200, 200;
  --callout-info: 4, 119, 255;
  --callout-question: 207, 186, 0;
  --callout-quote: 123, 140, 165;
  --callout-success: 52, 145, 94;
  --callout-summary: 0, 200, 200;
  --callout-tip: 0, 200, 200;
  --callout-todo: 4, 119, 255;
  --callout-warning: 253, 148, 52;
  --canvas-background: #F6F9FB;
  --canvas-card-label-color: #141F28;
  --canvas-color: 152, 172, 186;
  --canvas-color-1: 245, 26, 104;
  --canvas-color-2: 253, 148, 52;
  --canvas-color-3: 194, 186, 140;
  --canvas-color-4: 52, 145, 94;
  --canvas-color-5: 0, 200, 200;
  --canvas-color-6: 156, 122, 211;
  --canvas-dot-pattern: #98ACBA;
  --caret-color: #141F25;
  --checkbox-border-color: #1A2833;
  --checkbox-border-color-hover: #141F25;
  --checkbox-color: rgb(35, 154, 209);
  --checkbox-color-hover: hsl(
                                            200, 
                                            70%, 
                                            70%);
  --checkbox-marker-color: #F6F9FB;
  --checklist-done-color: #141F25;
  --code-background: #E3EDF2;
  --code-border-color: #CFDAE2;
  --code-bracket-background: rgba(34, 142, 195, 0.1);
  --code-comment: #82A2C8;
  --code-function: #FF3E82;
  --code-important: #FD6434;
  --code-keyword: #4696F4;
  --code-normal: #527EB2;
  --code-operator: #202B8B;
  --code-property: #00A4A4;
  --code-punctuation: #527EB2;
  --code-string: #71AB8F;
  --code-tag: #E83A78;
  --code-value: #4696F4;
  --collapse-icon-color: #141F28;
  --collapse-icon-color-collapsed: hsl(
                                              200,
                                              70%,
                                              45%);
  --color-accent: rgb(34, 142, 195);
  --color-accent-1: rgb(35, 154, 209);
  --color-accent-2: rgb(46, 170, 220);
  --color-accent-alt: hsl(
                                            200, 
                                            70%, 
                                            70%);
  --color-accent-hsl: 200, 70%, 45%;
  --color-base-00: #F6F9FB;
  --color-base-10: #EFF3F6;
  --color-base-100: #070B0D;
  --color-base-20: #E3EDF2;
  --color-base-25: #CFDAE2;
  --color-base-30: #98ACBA;
  --color-base-35: #52697A;
  --color-base-40: #2E3D49;
  --color-base-50: #1A2833;
  --color-base-60: #141F28;
  --color-base-70: #141F25;
  --color-blue: #0477FF;
  --color-blue-rgb: 4, 119, 255;
  --color-cyan: #00C8C8;
  --color-cyan-rgb: 0, 200, 200;
  --color-emphasis: hsl(
                                                200,
                                                70%,
                                                47%);
  --color-green: #34915e;
  --color-green-rgb: 52, 145, 94;
  --color-orange: #FD9434;
  --color-orange-rgb: 253, 148, 52;
  --color-pink: #E135E4;
  --color-pink-rgb: 225, 53, 228;
  --color-purple: #9C7AD3;
  --color-purple-rgb: 156, 122, 211;
  --color-red: #F51A68;
  --color-red-rgb: 245, 26, 104;
  --color-yellow: #C2BA8C;
  --color-yellow-rgb: 194, 186, 140;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #CFDAE2;
  --divider-color-hover: rgb(35, 154, 209);
  --dropdown-background: #F6F9FB;
  --dropdown-background-hover: #EFF3F6;
  --embed-background-color: #EFF3F6;
  --embed-block-shadow-hover: 0 0 0 1px #CFDAE2, inset 0 0 0 1px #CFDAE2;
  --embed-border-start: 2px solid rgb(35, 154, 209);
  --file-header-background: #F6F9FB;
  --file-header-background-focused: #F6F9FB;
  --flair-background: #F6F9FB;
  --flair-color: #141F25;
  --footnote-divider-color: #CFDAE2;
  --footnote-id-color: #141F25;
  --footnote-id-color-no-occurrences: #141F28;
  --footnote-input-background-active: rgba(34, 142, 195, 0.1);
  --graph-line: #98ACBA;
  --graph-node: hsl(
                                            200, 
                                            70%, 
                                            70%);
  --graph-node-attachment: #C2BA8C;
  --graph-node-focused: hsl(
                                              200,
                                              70%,
                                              45%);
  --graph-node-tag: #34915e;
  --graph-node-unresolved: #98ACBA;
  --graph-text: #141F25;
  --gray: var(--text-muted);
  --h1-color: #2E3D49;
  --h1-line-height: 1.111;
  --h1-size: 2.25em;
  --h2-color: #2E3D49;
  --h2-line-height: 1.143;
  --h2-size: 1.75em;
  --h3-color: #2E3D49;
  --h3-line-height: 1.167;
  --h3-size: 1.5em;
  --h4-color: #2E3D49;
  --h4-line-height: 1.2;
  --h4-size: 1.25em;
  --h5-color: #2E3D49;
  --h5-line-height: 1.25;
  --h5-size: 1em;
  --h6-color: #2E3D49;
  --h6-line-height: 1.333;
  --h6-size: 0.75em;
  --heading-color: #2E3D49;
  --heading-formatting: #141F28;
  --highlight: var(--background-modifier-hover);
  --hr-color: #CFDAE2;
  --hr-thickness: 1px;
  --icon-color: #141F25;
  --icon-color-active: hsl(
                                              200,
                                              70%,
                                              45%);
  --icon-color-focused: #141F25;
  --icon-color-hover: #141F25;
  --indentation-guide-color: rgba(34, 142, 195, 0.15);
  --indentation-guide-color-active: rgba(34, 142, 195, 0.15);
  --inline-title-border: #CFDAE2;
  --inline-title-color: #7c93a4;
  --inline-title-line-height: 1.111;
  --inline-title-size: 1em;
  --inline-title-weight: bold;
  --input-date-separator: #141F28;
  --input-placeholder-color: #141F28;
  --interactive-accent: rgb(35, 154, 209);
  --interactive-accent-hover: rgb(46, 170, 220);
  --interactive-accent-hsl: 200, 70%, 45%;
  --interactive-hover: #EFF3F6;
  --interactive-normal: #F6F9FB;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-roomy: 1.75;
  --link-color: hsl(
                                              200,
                                              70%,
                                              45%);
  --link-color-hover: hsl(
                                              200,
                                              70%,
                                              55%);
  --link-color-hover-embed: hsl(
                                                200,
                                                70%,
                                                50%);
  --link-external-color: hsl(
                                              200,
                                              70%,
                                              45%);
  --link-external-color-hover: hsl(
                                              200,
                                              70%,
                                              55%);
  --link-unresolved-color: #52697A;
  --link-unresolved-decoration-color: #52697A;
  --list-marker-color: hsl(
                                              200,
                                              70%,
                                              45%);
  --list-marker-color-collapsed: #141F25;
  --list-marker-color-hover: #141F25;
  --list-spacing: 0.5em;
  --menu-background: #EFF3F6;
  --menu-border-color: #52697A;
  --metadata-border-color: #CFDAE2;
  --metadata-divider-color: #CFDAE2;
  --metadata-input-background-active: rgba(34, 142, 195, 0.1);
  --metadata-input-text-color: #141F25;
  --metadata-label-background-active: rgba(34, 142, 195, 0.1);
  --metadata-label-text-color: #141F25;
  --metadata-label-text-color-hover: #141F25;
  --metadata-property-background-active: rgba(34, 142, 195, 0.1);
  --metadata-property-box-shadow-focus: 0 0 0 2px #98ACBA;
  --metadata-property-box-shadow-hover: 0 0 0 1px #52697A;
  --modal-background: #F6F9FB;
  --modal-border-color: #CFDAE2;
  --nav-collapse-icon-color: #141F28;
  --nav-collapse-icon-color-collapsed: #141F28;
  --nav-heading-color: #141F25;
  --nav-heading-color-collapsed: #141F28;
  --nav-heading-color-collapsed-hover: #141F25;
  --nav-heading-color-hover: #141F25;
  --nav-indentation-guide-color: rgba(34, 142, 195, 0.15);
  --nav-item-background-active: rgba(34, 142, 195, 0.1);
  --nav-item-background-hover: rgba(34, 142, 195, 0.1);
  --nav-item-background-selected: rgba(34, 142, 195, 0.15);
  --nav-item-color: #141F25;
  --nav-item-color-active: #141F25;
  --nav-item-color-highlighted: hsl(
                                              200,
                                              70%,
                                              45%);
  --nav-item-color-hover: #141F25;
  --nav-item-color-selected: #141F25;
  --nav-tag-color: #141F28;
  --nav-tag-color-active: #141F25;
  --nav-tag-color-hover: #141F25;
  --pdf-background: #F6F9FB;
  --pdf-page-background: #F6F9FB;
  --pdf-sidebar-background: #F6F9FB;
  --pill-border-color: #CFDAE2;
  --pill-border-color-hover: #52697A;
  --pill-color: #141F25;
  --pill-color-hover: #141F25;
  --pill-color-remove: #141F28;
  --pill-color-remove-hover: hsl(
                                              200,
                                              70%,
                                              45%);
  --prompt-background: #F6F9FB;
  --prompt-border-color: #2E3D49;
  --raised-background: color-mix(in srgb, #F6F9FB 65%, transparent) linear-gradient(#F6F9FB, color-mix(in srgb, #F6F9FB 65%, transparent));
  --rendered-code-bg: #E3EDF2;
  --rendered-code-text: #F51A68;
  --ribbon-background: #EFF3F6;
  --ribbon-background-collapsed: #F6F9FB;
  --search-clear-button-color: #141F25;
  --search-icon-color: #141F25;
  --search-result-background: #F6F9FB;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #141F25;
  --setting-items-background: #EFF3F6;
  --setting-items-border-color: #CFDAE2;
  --slider-thumb-border-color: #52697A;
  --slider-track-background: #CFDAE2;
  --status-bar-background: #EFF3F6;
  --status-bar-border-color: #CFDAE2;
  --status-bar-text-color: #141F25;
  --suggestion-background: #F6F9FB;
  --sync-avatar-color-1: #F51A68;
  --sync-avatar-color-2: #FD9434;
  --sync-avatar-color-3: #C2BA8C;
  --sync-avatar-color-4: #34915e;
  --sync-avatar-color-5: #00C8C8;
  --sync-avatar-color-6: #0477FF;
  --sync-avatar-color-7: #9C7AD3;
  --sync-avatar-color-8: #E135E4;
  --tab-background-active: #F6F9FB;
  --tab-container-background: #EFF3F6;
  --tab-container-background-new: #F6F9FB;
  --tab-curve: 12px;
  --tab-divider-color: #CFDAE2;
  --tab-outline-color: #CFDAE2;
  --tab-radius: 9px;
  --tab-switcher-background: #EFF3F6;
  --tab-switcher-menubar-background: linear-gradient(to top, #EFF3F6, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(34, 142, 195);
  --tab-text-color: #52697A;
  --tab-text-color-active: #1A2833;
  --tab-text-color-focused: #141F28;
  --tab-text-color-focused-active: #141F25;
  --tab-text-color-focused-active-current: #070B0D;
  --tab-text-color-focused-highlighted: hsl(
                                              200,
                                              70%,
                                              45%);
  --table-add-button-border-color: #CFDAE2;
  --table-border-color: #CFDAE2;
  --table-drag-handle-background-active: rgb(35, 154, 209);
  --table-drag-handle-color: #141F28;
  --table-header-background: #EFF3F6;
  --table-header-background-hover: #EFF3F6;
  --table-header-border-color: #CFDAE2;
  --table-header-color: #141F25;
  --table-row-background-hover: #EFF3F6;
  --table-row-even-background: #F6F9FB;
  --table-row-odd-background: #E3EDF2;
  --table-selection: rgba(34, 142, 195, 0.1);
  --table-selection-border-color: rgb(35, 154, 209);
  --tag-background: rgba(34, 142, 195, 0.1);
  --tag-background-hover: rgba(34, 142, 195, 0.2);
  --tag-border-color: rgba(34, 142, 195, 0.15);
  --tag-border-color-hover: rgba(34, 142, 195, 0.15);
  --tag-color: hsl(
                                              200,
                                              70%,
                                              45%);
  --tag-color-hover: hsl(
                                              200,
                                              70%,
                                              45%);
  --tag-padding-x: 0.5em;
  --tag-padding-y: 0.15em;
  --tag-radius: 0.5em;
  --tag-size: 0.75em;
  --tertiary: var(--text-accent-hover);
  --text-accent: hsl(
                                              200,
                                              70%,
                                              45%);
  --text-accent-emphasis: hsl(
                                                200,
                                                70%,
                                                47%);
  --text-accent-hover: hsl(
                                              200,
                                              70%,
                                              55%);
  --text-accent-hover-embed: hsl(
                                                200,
                                                70%,
                                                50%);
  --text-completed-checkboxes: #3e657c;
  --text-completed-checkboxes-embed: #3f6b88;
  --text-error: #F51A68;
  --text-faint: #141F28;
  --text-highlight-bg-editing: rgba(230, 232, 104, 0.85);
  --text-highlight-editing: #000;
  --text-highlight-rendered: #252525;
  --text-muted: #141F25;
  --text-normal: #141F25;
  --text-selection: rgba(34, 142, 195, 0.2);
  --text-success: #34915e;
  --text-warning: #FD9434;
  --textHighlight: var(--background-modifier-hover);
  --titlebar-background: #EFF3F6;
  --titlebar-background-focused: #F6F9FB;
  --titlebar-border-color: #CFDAE2;
  --titlebar-text-color: #141F25;
  --titlebar-text-color-focused: #141F25;
  --vault-name-color: hsl(
                                              200,
                                              70%,
                                              45%);
  --vault-profile-color: #141F25;
  --vault-profile-color-hover: #141F25;
  --workspace-background-translucent: rgba(227, 236, 242, 0.6);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 243, 246);
  color: rgb(20, 31, 37);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(246, 249, 251);
  color: rgb(20, 31, 37);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(239, 243, 246);
  color: rgb(20, 31, 37);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(207, 218, 226);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(239, 243, 246);
  border-left-color: rgb(207, 218, 226);
  color: rgb(20, 31, 37);
}

body div#quartz-root {
  background-color: rgb(246, 249, 251);
  color: rgb(20, 31, 37);
}`,
    typography: `body .page article p > b, b {
  color: rgb(36, 148, 204);
  font-weight: 800;
  outline: rgb(36, 148, 204) none 0px;
  text-decoration: rgb(36, 148, 204);
  text-decoration-color: rgb(36, 148, 204);
}

body .page article p > em, em {
  color: rgb(36, 148, 204);
  outline: rgb(36, 148, 204) none 0px;
  text-decoration: rgb(36, 148, 204);
  text-decoration-color: rgb(36, 148, 204);
}

body .page article p > i, i {
  color: rgb(36, 148, 204);
  outline: rgb(36, 148, 204) none 0px;
  text-decoration: rgb(36, 148, 204);
  text-decoration-color: rgb(36, 148, 204);
}

body .page article p > strong, strong {
  color: rgb(36, 148, 204);
  font-weight: 800;
  outline: rgb(36, 148, 204) none 0px;
  text-decoration: rgb(36, 148, 204);
  text-decoration-color: rgb(36, 148, 204);
}

body .text-highlight {
  color: rgb(20, 31, 37);
  outline: rgb(20, 31, 37) none 0px;
  text-decoration: rgb(20, 31, 37);
  text-decoration-color: rgb(20, 31, 37);
}

body del {
  color: rgb(20, 31, 37);
  outline: rgb(20, 31, 37) none 0px;
  text-decoration: line-through rgb(20, 31, 37);
  text-decoration-color: rgb(20, 31, 37);
}

body p {
  color: rgb(20, 31, 37);
  outline: rgb(20, 31, 37) none 0px;
  text-decoration: rgb(20, 31, 37);
  text-decoration-color: rgb(20, 31, 37);
}`,
    links: `body a.external, footer a {
  color: rgb(34, 142, 195);
  outline: rgb(34, 142, 195) none 0px;
  text-decoration: underline rgb(34, 142, 195);
  text-decoration-color: rgb(34, 142, 195);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(34, 142, 195);
  outline: rgb(34, 142, 195) none 0px;
  text-decoration: underline rgb(34, 142, 195);
  text-decoration-color: rgb(34, 142, 195);
}

body a.internal.broken {
  color: rgb(82, 105, 122);
  outline: rgb(82, 105, 122) none 0px;
  text-decoration: underline rgb(82, 105, 122);
  text-decoration-color: rgb(82, 105, 122);
}`,
    lists: `body dd {
  color: rgb(20, 31, 37);
}

body dt {
  color: rgb(20, 31, 37);
}

body ol > li {
  color: rgb(20, 31, 37);
}

body ol.overflow {
  background-color: rgb(246, 249, 251);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

body ul > li {
  color: rgb(20, 31, 37);
}

body ul.overflow {
  background-color: rgb(246, 249, 251);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(20, 31, 40);
  text-decoration: rgb(20, 31, 40);
}

body blockquote {
  font-style: italic;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

body table {
  border-bottom-color: rgb(207, 218, 226);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(207, 218, 226);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(207, 218, 226);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(207, 218, 226);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(20, 31, 37);
  width: 224.562px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(246, 249, 251);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(227, 237, 242);
}

body td {
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
  color: rgb(20, 31, 37);
}

body th {
  border-bottom-color: rgb(207, 218, 226);
  border-bottom-width: 0px;
  border-left-color: rgb(207, 218, 226);
  border-left-width: 0px;
  border-right-color: rgb(207, 218, 226);
  border-right-width: 0px;
  border-top-color: rgb(207, 218, 226);
  border-top-width: 0px;
  color: rgb(20, 31, 37);
  font-weight: 700;
  padding-bottom: 10.2px;
  padding-left: 10.2px;
  padding-right: 10.2px;
  padding-top: 10.2px;
}

body thead {
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
}

body tr {
  background-color: rgb(239, 243, 246);
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
}`,
    code: `body code {
  border-bottom-color: rgb(245, 26, 104);
  border-left-color: rgb(245, 26, 104);
  border-right-color: rgb(245, 26, 104);
  border-top-color: rgb(245, 26, 104);
  color: rgb(245, 26, 104);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(227, 237, 242);
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(227, 237, 242);
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
  color: rgb(20, 31, 37);
}

body pre > code > [data-line] {
  border-left-color: rgb(4, 119, 255);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(4, 119, 255);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(4, 119, 255);
  border-left-color: rgb(4, 119, 255);
  border-right-color: rgb(4, 119, 255);
  border-top-color: rgb(4, 119, 255);
}

body pre > code, pre:has(> code) {
  background-color: rgb(227, 237, 242);
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgb(227, 237, 242);
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

body figcaption {
  color: rgb(20, 31, 37);
}

body figure {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

body img {
  border-bottom-color: rgb(20, 31, 37);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(20, 31, 37);
  border-radius: 4px;
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body video {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}`,
    embeds: `body .file-embed {
  background-color: rgb(239, 243, 246);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

body .footnotes {
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

body .transclude {
  background-color: rgb(239, 243, 246);
  border-bottom-color: rgb(227, 237, 242);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(227, 237, 242);
  border-left-width: 1px;
  border-right-color: rgb(227, 237, 242);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(227, 237, 242);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .transclude-inner {
  background-color: rgb(239, 243, 246);
  border-bottom-color: rgb(227, 237, 242);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(227, 237, 242);
  border-left-width: 1px;
  border-right-color: rgb(227, 237, 242);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(227, 237, 242);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body input[type=checkbox] {
  border-bottom-color: rgb(26, 40, 51);
  border-left-color: rgb(26, 40, 51);
  border-right-color: rgb(26, 40, 51);
  border-top-color: rgb(26, 40, 51);
}

body li.task-list-item[data-task='!'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='*'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='-'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='/'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='>'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='?'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='I'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='S'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='b'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='c'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='d'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='f'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='i'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='k'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='l'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='p'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='u'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

body li.task-list-item[data-task='w'] {
  color: rgb(62, 101, 124);
  text-decoration: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(4, 119, 255);
  border-left-color: rgb(4, 119, 255);
  border-right-color: rgb(4, 119, 255);
  border-top-color: rgb(4, 119, 255);
}

body .callout[data-callout="abstract"] {
  --callout-color: 0, 200, 200;
  background-color: rgba(0, 200, 200, 0.15);
  border-bottom-color: rgba(0, 200, 200, 0.25);
  border-left-color: rgba(0, 200, 200, 0.25);
  border-right-color: rgba(0, 200, 200, 0.25);
  border-top-color: rgba(0, 200, 200, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 245, 26, 104;
  background-color: rgba(245, 26, 104, 0.15);
  border-bottom-color: rgba(245, 26, 104, 0.25);
  border-left-color: rgba(245, 26, 104, 0.25);
  border-right-color: rgba(245, 26, 104, 0.25);
  border-top-color: rgba(245, 26, 104, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 245, 26, 104;
  background-color: rgba(245, 26, 104, 0.15);
  border-bottom-color: rgba(245, 26, 104, 0.25);
  border-left-color: rgba(245, 26, 104, 0.25);
  border-right-color: rgba(245, 26, 104, 0.25);
  border-top-color: rgba(245, 26, 104, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 156, 122, 211;
  background-color: rgba(156, 122, 211, 0.15);
  border-bottom-color: rgba(156, 122, 211, 0.25);
  border-left-color: rgba(156, 122, 211, 0.25);
  border-right-color: rgba(156, 122, 211, 0.25);
  border-top-color: rgba(156, 122, 211, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 245, 26, 104;
  background-color: rgba(245, 26, 104, 0.15);
  border-bottom-color: rgba(245, 26, 104, 0.25);
  border-left-color: rgba(245, 26, 104, 0.25);
  border-right-color: rgba(245, 26, 104, 0.25);
  border-top-color: rgba(245, 26, 104, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 4, 119, 255;
  background-color: rgba(4, 119, 255, 0.15);
  border-bottom-color: rgba(4, 119, 255, 0.25);
  border-left-color: rgba(4, 119, 255, 0.25);
  border-right-color: rgba(4, 119, 255, 0.25);
  border-top-color: rgba(4, 119, 255, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 4, 119, 255;
  background-color: rgba(4, 119, 255, 0.15);
  border-bottom-color: rgba(4, 119, 255, 0.25);
  border-left-color: rgba(4, 119, 255, 0.25);
  border-right-color: rgba(4, 119, 255, 0.25);
  border-top-color: rgba(4, 119, 255, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 207, 186, 0;
  background-color: rgba(207, 186, 0, 0.15);
  border-bottom-color: rgba(207, 186, 0, 0.25);
  border-left-color: rgba(207, 186, 0, 0.25);
  border-right-color: rgba(207, 186, 0, 0.25);
  border-top-color: rgba(207, 186, 0, 0.25);
}

body .callout[data-callout="quote"] {
  --callout-color: 123, 140, 165;
  background-color: rgba(123, 140, 165, 0.15);
  border-bottom-color: rgba(123, 140, 165, 0.25);
  border-left-color: rgba(123, 140, 165, 0.25);
  border-right-color: rgba(123, 140, 165, 0.25);
  border-top-color: rgba(123, 140, 165, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 52, 145, 94;
  background-color: rgba(52, 145, 94, 0.15);
  border-bottom-color: rgba(52, 145, 94, 0.25);
  border-left-color: rgba(52, 145, 94, 0.25);
  border-right-color: rgba(52, 145, 94, 0.25);
  border-top-color: rgba(52, 145, 94, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 0, 200, 200;
  background-color: rgba(0, 200, 200, 0.15);
  border-bottom-color: rgba(0, 200, 200, 0.25);
  border-left-color: rgba(0, 200, 200, 0.25);
  border-right-color: rgba(0, 200, 200, 0.25);
  border-top-color: rgba(0, 200, 200, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 4, 119, 255;
  background-color: rgba(4, 119, 255, 0.15);
  border-bottom-color: rgba(4, 119, 255, 0.25);
  border-left-color: rgba(4, 119, 255, 0.25);
  border-right-color: rgba(4, 119, 255, 0.25);
  border-top-color: rgba(4, 119, 255, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 253, 148, 52;
  background-color: rgba(253, 148, 52, 0.15);
  border-bottom-color: rgba(253, 148, 52, 0.25);
  border-left-color: rgba(253, 148, 52, 0.25);
  border-right-color: rgba(253, 148, 52, 0.25);
  border-top-color: rgba(253, 148, 52, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(246, 249, 251);
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
  color: rgb(20, 31, 37);
}

body .search > .search-container > .search-space {
  background-color: rgb(246, 249, 251);
  border-bottom-color: rgb(46, 61, 73);
  border-left-color: rgb(46, 61, 73);
  border-right-color: rgb(46, 61, 73);
  border-top-color: rgb(46, 61, 73);
}

body .search > .search-container > .search-space > * {
  color: rgb(20, 31, 37);
  outline: rgb(20, 31, 37) none 0px;
  text-decoration: rgb(20, 31, 37);
  text-decoration-color: rgb(20, 31, 37);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(20, 31, 37);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(20, 31, 37);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(34, 142, 195, 0.1);
  color: rgb(20, 31, 37);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(46, 61, 73);
  border-left-color: rgb(46, 61, 73);
  border-right-color: rgb(46, 61, 73);
  border-top-color: rgb(46, 61, 73);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(239, 243, 246);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(34, 142, 195, 0.1);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(34, 142, 195, 0.1);
  color: rgb(20, 31, 37);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(34, 142, 195, 0.1);
  border-bottom-color: rgba(34, 142, 195, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(34, 142, 195, 0.15);
  border-right-color: rgba(34, 142, 195, 0.15);
  border-top-color: rgba(34, 142, 195, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

body a.internal.tag-link::before {
  color: rgb(34, 142, 195);
}

body h1 {
  color: rgb(46, 61, 73);
}

body h2 {
  color: rgb(46, 61, 73);
}

body h2.page-title, h2.page-title a {
  color: rgb(124, 147, 164);
}

body h3 {
  color: rgb(46, 61, 73);
}

body h4 {
  color: rgb(46, 61, 73);
}

body h5 {
  color: rgb(46, 61, 73);
}

body h6 {
  color: rgb(46, 61, 73);
}

body hr {
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
}`,
    scrollbars: `body .callout {
  --callout-color: 4, 119, 255;
  border-bottom-color: rgba(4, 119, 255, 0.25);
  border-left-color: rgba(4, 119, 255, 0.25);
  border-right-color: rgba(4, 119, 255, 0.25);
  border-top-color: rgba(4, 119, 255, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(246, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 249, 251);
}

body ::-webkit-scrollbar-corner {
  background: rgb(246, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 249, 251);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(246, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 249, 251);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(246, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 249, 251);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(246, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 249, 251);
}

body ::-webkit-scrollbar-track {
  background: rgb(246, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 249, 251);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(20, 31, 37);
  font-weight: 500;
  text-decoration: rgb(20, 31, 37);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(20, 31, 37);
  font-weight: 500;
  text-decoration: rgb(20, 31, 37);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(20, 31, 37);
  font-weight: 300;
  text-decoration: rgb(20, 31, 37);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(34, 142, 195, 0.1);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}`,
    footer: `body footer {
  background-color: rgb(239, 243, 246);
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
  color: rgb(20, 31, 37);
}

body footer ul li a {
  color: rgb(20, 31, 37);
  text-decoration: rgb(20, 31, 37);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(20, 31, 37);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(20, 31, 37);
  text-decoration: rgb(20, 31, 37);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(20, 31, 37);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

body li.section-li > .section .meta {
  color: rgb(20, 31, 37);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(20, 31, 37);
  text-decoration: rgb(20, 31, 37);
}

body ul.section-ul {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

body .darkmode svg {
  color: rgb(20, 31, 37);
  stroke: rgb(20, 31, 37);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

body .breadcrumb-element p {
  color: rgb(20, 31, 40);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

body .metadata {
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
  color: rgb(20, 31, 37);
}

body .metadata-properties {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

body .navigation-progress {
  background-color: rgb(239, 243, 246);
}

body .page-header h2.page-title {
  color: rgb(20, 31, 37);
}

body abbr {
  color: rgb(20, 31, 37);
  text-decoration: underline dotted rgb(20, 31, 37);
}

body details {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

body input[type=text] {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

body kbd {
  background-color: rgb(227, 237, 242);
  border-bottom-color: rgb(82, 126, 178);
  border-left-color: rgb(82, 126, 178);
  border-right-color: rgb(82, 126, 178);
  border-top-color: rgb(82, 126, 178);
  color: rgb(82, 126, 178);
}

body progress {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

body sub {
  color: rgb(20, 31, 37);
}

body summary {
  color: rgb(20, 31, 37);
}

body sup {
  color: rgb(20, 31, 37);
}`,
  },
};
