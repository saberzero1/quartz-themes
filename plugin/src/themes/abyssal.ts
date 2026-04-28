import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "abyssal",
    modes: ["dark", "light"],
    variations: ["colorful-headings"],
    fonts: [],
    styleSettingsId: "at-theme-settings",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-dark: 55%;
  --accent-h: 200;
  --accent-l: 45%;
  --accent-s: 70%;
  --background-modifier-active-hover: hsla(200, 70%, 45%, 0.1);
  --background-modifier-border: #141F25;
  --background-modifier-border-focus: #1E3038;
  --background-modifier-border-hover: #19272E;
  --background-modifier-error: #E6578A;
  --background-modifier-error-hover: #E6578A;
  --background-modifier-error-rgb: 280, 87, 138;
  --background-modifier-form-field: #121C21;
  --background-modifier-form-field-hover: #121C21;
  --background-modifier-hover: hsla(200, 70%, 45%, 0.1);
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
  --bases-table-cell-background-selected: hsla(200, 70%, 45%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #1E3038;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(200, 70%, 45%);
  --bases-table-group-background: #0C1417;
  --bases-table-header-background: #0E161B;
  --bases-table-header-background-hover: hsla(200, 70%, 45%, 0.1);
  --bases-table-header-color: #7AA3B8;
  --bases-table-row-background-hover: #0C1417;
  --bases-table-summary-background: #0E161B;
  --bases-table-summary-background-hover: hsla(200, 70%, 45%, 0.1);
  --block-margin: 2em 0;
  --blockquote-background-color: #070B0D;
  --blockquote-border-color: hsl(200, 70%, 45%);
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
  --checkbox-color: hsl(200, 70%, 45%);
  --checkbox-color-hover: hsl(
                                            200, 
                                            70%, 
                                            70%);
  --checkbox-marker-color: #0E161B;
  --checklist-done-color: #7AA3B8;
  --code-background: #15222C;
  --code-border-color: #141F25;
  --code-bracket-background: hsla(200, 70%, 45%, 0.1);
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
  --color-accent: hsl(200, 70%, 45%);
  --color-accent-1: hsl(197, 71.4%, 51.75%);
  --color-accent-2: hsl(195, 73.5%, 58.05%);
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
  --dark: var(--text-normal, #BDD1DB);
  --darkgray: var(--text-normal, #BDD1DB);
  --divider-color: #141F25;
  --divider-color-hover: hsl(200, 70%, 45%);
  --dropdown-background: #141F25;
  --dropdown-background-hover: #19272E;
  --embed-background-color: #141F25;
  --embed-block-shadow-hover: 0 0 0 1px #141F25, inset 0 0 0 1px #141F25;
  --embed-border-start: 2px solid hsl(200, 70%, 45%);
  --file-header-background: #0E161B;
  --file-header-background-focused: #0E161B;
  --flair-background: #141F25;
  --flair-color: #BDD1DB;
  --footnote-divider-color: #141F25;
  --footnote-id-color: #7AA3B8;
  --footnote-id-color-no-occurrences: #355464;
  --footnote-input-background-active: hsla(200, 70%, 45%, 0.1);
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
  --gray: var(--text-muted, #7AA3B8);
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
  --highlight: var(--background-modifier-hover, hsla(200, 70%, 45%, 0.1));
  --hr-color: #141F25;
  --hr-thickness: 1px;
  --icon-color: #7AA3B8;
  --icon-color-active: hsl(
                                              200,
                                              70%,
                                              55%);
  --icon-color-focused: #BDD1DB;
  --icon-color-hover: #7AA3B8;
  --indentation-guide-color: hsla(200, 70%, 45%, 0.15);
  --indentation-guide-color-active: hsla(200, 70%, 45%, 0.15);
  --inline-title-border: #19272E;
  --inline-title-color: #3d6681;
  --inline-title-line-height: 1.111;
  --inline-title-size: 1em;
  --inline-title-weight: bold;
  --input-date-separator: #355464;
  --input-placeholder-color: #355464;
  --interactive-accent: hsl(200, 70%, 45%);
  --interactive-accent-hover: hsl(197, 71.4%, 51.75%);
  --interactive-accent-hsl: 200, 70%, 45%;
  --interactive-hover: #19272E;
  --interactive-normal: #141F25;
  --light: var(--background-primary, #0E161B);
  --lightgray: var(--background-secondary, #070B0D);
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
  --link-unresolved-decoration-color: hsla(200, 70%, 45%, 0.3);
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
  --metadata-input-background-active: hsla(200, 70%, 45%, 0.1);
  --metadata-input-text-color: #BDD1DB;
  --metadata-label-background-active: hsla(200, 70%, 45%, 0.1);
  --metadata-label-text-color: #7AA3B8;
  --metadata-label-text-color-hover: #7AA3B8;
  --metadata-property-background-active: hsla(200, 70%, 45%, 0.1);
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
  --nav-indentation-guide-color: hsla(200, 70%, 45%, 0.15);
  --nav-item-background-active: hsla(200, 70%, 45%, 0.1);
  --nav-item-background-hover: hsla(200, 70%, 45%, 0.1);
  --nav-item-background-selected: hsla(200, 70%, 45%, 0.15);
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
  --secondary: var(--text-accent, hsl(
                                              200,
                                              70%,
                                              55%));
  --setting-group-heading-color: #BDD1DB;
  --setting-items-background: #0C1417;
  --setting-items-border-color: #141F25;
  --shiki-active-tab-border-color: #7AA3B8;
  --shiki-code-background: #15222C;
  --shiki-code-comment: #355464;
  --shiki-code-function: #39F098;
  --shiki-code-important: #F3C85B;
  --shiki-code-keyword: #EC95EE;
  --shiki-code-normal: #7AA3B8;
  --shiki-code-property: #81D5D0;
  --shiki-code-punctuation: #7AA3B8;
  --shiki-code-string: #CFBA00;
  --shiki-code-value: #B491ED;
  --shiki-gutter-border-color: #141F25;
  --shiki-gutter-text-color: #355464;
  --shiki-gutter-text-color-highlight: #7AA3B8;
  --shiki-highlight-green: rgba(57, 240, 152, 0.5);
  --shiki-highlight-green-background: rgba(57, 240, 152, 0.1);
  --shiki-highlight-neutral: #7AA3B8;
  --shiki-highlight-red: rgba(280, 87, 138, .5);
  --shiki-highlight-red-background: rgba(280, 87, 138, .1);
  --shiki-terminal-dots-color: #355464;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(200, 70%, 45%);
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
  --table-drag-handle-background-active: hsl(200, 70%, 45%);
  --table-drag-handle-color: #355464;
  --table-header-background: #0C1417;
  --table-header-background-hover: #121C21;
  --table-header-border-color: #19272E;
  --table-header-color: #BDD1DB;
  --table-row-background-hover: #0C1417;
  --table-row-even-background: #141F25;
  --table-row-odd-background: #0E161B;
  --table-selection: hsla(200, 70%, 45%, 0.1);
  --table-selection-border-color: hsl(200, 70%, 45%);
  --tag-background: hsla(200, 70%, 45%, 0.1);
  --tag-background-hover: hsla(200, 70%, 45%, 0.2);
  --tag-border-color: hsla(200, 70%, 45%, 0.15);
  --tag-border-color-hover: hsla(200, 70%, 45%, 0.15);
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
  --tertiary: var(--text-accent-hover, hsl(
                                              200,
                                              70%,
                                              75%));
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
  --text-highlight-bg-rendered: hsla(61, 74%, 66%, 0.85);
  --text-highlight-editing: #F0EAAF;
  --text-highlight-rendered: #252525;
  --text-muted: #7AA3B8;
  --text-normal: #BDD1DB;
  --text-selection: hsla(200, 70%, 45%, 0.33);
  --text-success: #39F098;
  --text-warning: #F3C85B;
  --textHighlight: var(--background-modifier-hover, hsla(200, 70%, 45%, 0.1));
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
  --workspace-background-translucent: hsla(200, 30%, 4%, 0.95);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(7, 11, 13);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(14, 22, 27);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(7, 11, 13);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(20, 31, 37);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(7, 11, 13);
  border-left-color: rgb(20, 31, 37);
  color: rgb(189, 209, 219);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(103, 187, 228);
  font-weight: 800;
  outline: rgb(103, 187, 228) none 0px;
  text-decoration-color: rgb(103, 187, 228);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(103, 187, 228);
  outline: rgb(103, 187, 228) none 0px;
  text-decoration-color: rgb(103, 187, 228);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(103, 187, 228);
  outline: rgb(103, 187, 228) none 0px;
  text-decoration-color: rgb(103, 187, 228);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(103, 187, 228);
  font-weight: 800;
  outline: rgb(103, 187, 228) none 0px;
  text-decoration-color: rgb(103, 187, 228);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(37, 37, 37);
  outline: rgb(37, 37, 37) none 0px;
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="dark"] body del {
  color: rgb(189, 209, 219);
  outline: rgb(189, 209, 219) none 0px;
  text-decoration-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(36, 56, 66);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(34, 142, 195);
  border-color: rgb(34, 142, 195);
}

html[saved-theme="dark"] body p {
  color: rgb(122, 163, 184);
  outline: rgb(122, 163, 184) none 0px;
  text-decoration-color: rgb(122, 163, 184);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(60, 167, 221);
  outline: rgb(60, 167, 221) none 0px;
  text-decoration-color: rgb(60, 167, 221);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(60, 167, 221);
  outline: rgb(60, 167, 221) none 0px;
  text-decoration-color: rgb(60, 167, 221);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(60, 167, 221);
  outline: rgb(60, 167, 221) none 0px;
  text-decoration: underline rgba(34, 142, 195, 0.3);
  text-decoration-color: rgba(34, 142, 195, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body dt {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(53, 84, 100);
}

html[saved-theme="dark"] body blockquote {
  font-style: italic;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body table {
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

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(20, 31, 37);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(14, 22, 27);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(25, 39, 46);
  border-left-color: rgb(25, 39, 46);
  border-right-color: rgb(25, 39, 46);
  border-top-color: rgb(25, 39, 46);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body th {
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

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(25, 39, 46);
  border-left-color: rgb(25, 39, 46);
  border-right-color: rgb(25, 39, 46);
  border-top-color: rgb(25, 39, 46);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(12, 20, 23);
  border-bottom-color: rgb(25, 39, 46);
  border-left-color: rgb(25, 39, 46);
  border-right-color: rgb(25, 39, 46);
  border-top-color: rgb(25, 39, 46);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(122, 163, 184);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(122, 163, 184);
  border-right-color: rgb(122, 163, 184);
  border-top-color: rgb(122, 163, 184);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(122, 163, 184);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(21, 34, 44);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(222, 232, 237);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(222, 232, 237);
  border-radius: 4px;
  border-right-color: rgb(222, 232, 237);
  border-top-color: rgb(222, 232, 237);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(12, 20, 23);
  border-bottom-color: rgb(122, 163, 184);
  border-left-color: rgb(122, 163, 184);
  border-right-color: rgb(122, 163, 184);
  border-top-color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(189, 209, 219);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .transclude {
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

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(36, 56, 66);
  border-left-color: rgb(36, 56, 66);
  border-right-color: rgb(36, 56, 66);
  border-top-color: rgb(36, 56, 66);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(62, 101, 124);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(62, 101, 124);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 22, 27);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 200, 91);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(36, 56, 66);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 186, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(129, 213, 208);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 87, 138);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 87, 138);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 87, 138);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 87, 138);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 186, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 186, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(180, 145, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 87, 138);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(57, 240, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(57, 240, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(57, 240, 152);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 4, 165, 255;
  border-bottom-color: rgb(4, 165, 255);
  border-left-color: rgb(4, 165, 255);
  border-right-color: rgb(4, 165, 255);
  border-top-color: rgb(4, 165, 255);
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 129, 213, 208;
  background: rgba(129, 213, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(129, 213, 208, 0.1);
  border-bottom-color: rgba(129, 213, 208, 0.25);
  border-left-color: rgba(129, 213, 208, 0.25);
  border-right-color: rgba(129, 213, 208, 0.25);
  border-top-color: rgba(129, 213, 208, 0.25);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 4, 165, 255;
  border-bottom-color: rgb(4, 165, 255);
  border-left-color: rgb(4, 165, 255);
  border-right-color: rgb(4, 165, 255);
  border-top-color: rgb(4, 165, 255);
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 280, 87, 138;
  background: rgba(255, 87, 138, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 87, 138, 0.1);
  border-bottom-color: rgba(255, 87, 138, 0.25);
  border-left-color: rgba(255, 87, 138, 0.25);
  border-right-color: rgba(255, 87, 138, 0.25);
  border-top-color: rgba(255, 87, 138, 0.25);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 4, 165, 255;
  border-bottom-color: rgb(4, 165, 255);
  border-left-color: rgb(4, 165, 255);
  border-right-color: rgb(4, 165, 255);
  border-top-color: rgb(4, 165, 255);
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 280, 87, 138;
  background: rgba(255, 87, 138, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 87, 138, 0.1);
  border-bottom-color: rgba(255, 87, 138, 0.25);
  border-left-color: rgba(255, 87, 138, 0.25);
  border-right-color: rgba(255, 87, 138, 0.25);
  border-top-color: rgba(255, 87, 138, 0.25);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 4, 165, 255;
  border-bottom-color: rgb(4, 165, 255);
  border-left-color: rgb(4, 165, 255);
  border-right-color: rgb(4, 165, 255);
  border-top-color: rgb(4, 165, 255);
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 180, 145, 237;
  background: rgba(180, 145, 237, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(180, 145, 237, 0.1);
  border-bottom-color: rgba(180, 145, 237, 0.25);
  border-left-color: rgba(180, 145, 237, 0.25);
  border-right-color: rgba(180, 145, 237, 0.25);
  border-top-color: rgba(180, 145, 237, 0.25);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 4, 165, 255;
  border-bottom-color: rgb(4, 165, 255);
  border-left-color: rgb(4, 165, 255);
  border-right-color: rgb(4, 165, 255);
  border-top-color: rgb(4, 165, 255);
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 280, 87, 138;
  background: rgba(255, 87, 138, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 87, 138, 0.1);
  border-bottom-color: rgba(255, 87, 138, 0.25);
  border-left-color: rgba(255, 87, 138, 0.25);
  border-right-color: rgba(255, 87, 138, 0.25);
  border-top-color: rgba(255, 87, 138, 0.25);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 4, 165, 255;
  border-bottom-color: rgb(4, 165, 255);
  border-left-color: rgb(4, 165, 255);
  border-right-color: rgb(4, 165, 255);
  border-top-color: rgb(4, 165, 255);
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 4, 165, 255;
  background: rgba(4, 165, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(4, 165, 255, 0.1);
  border-bottom-color: rgba(4, 165, 255, 0.25);
  border-left-color: rgba(4, 165, 255, 0.25);
  border-right-color: rgba(4, 165, 255, 0.25);
  border-top-color: rgba(4, 165, 255, 0.25);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 4, 165, 255;
  border-bottom-color: rgb(4, 165, 255);
  border-left-color: rgb(4, 165, 255);
  border-right-color: rgb(4, 165, 255);
  border-top-color: rgb(4, 165, 255);
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 4, 165, 255;
  background: rgba(4, 165, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(4, 165, 255, 0.1);
  border-bottom-color: rgba(4, 165, 255, 0.25);
  border-left-color: rgba(4, 165, 255, 0.25);
  border-right-color: rgba(4, 165, 255, 0.25);
  border-top-color: rgba(4, 165, 255, 0.25);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 4, 165, 255;
  border-bottom-color: rgb(4, 165, 255);
  border-left-color: rgb(4, 165, 255);
  border-right-color: rgb(4, 165, 255);
  border-top-color: rgb(4, 165, 255);
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 243, 200, 91;
  background: rgba(243, 200, 91, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(243, 200, 91, 0.1);
  border-bottom-color: rgba(243, 200, 91, 0.25);
  border-left-color: rgba(243, 200, 91, 0.25);
  border-right-color: rgba(243, 200, 91, 0.25);
  border-top-color: rgba(243, 200, 91, 0.25);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 4, 165, 255;
  border-bottom-color: rgb(4, 165, 255);
  border-left-color: rgb(4, 165, 255);
  border-right-color: rgb(4, 165, 255);
  border-top-color: rgb(4, 165, 255);
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 4, 165, 255;
  border-bottom-color: rgb(4, 165, 255);
  border-left-color: rgb(4, 165, 255);
  border-right-color: rgb(4, 165, 255);
  border-top-color: rgb(4, 165, 255);
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 57, 240, 152;
  background: rgba(57, 240, 152, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(57, 240, 152, 0.1);
  border-bottom-color: rgba(57, 240, 152, 0.25);
  border-left-color: rgba(57, 240, 152, 0.25);
  border-right-color: rgba(57, 240, 152, 0.25);
  border-top-color: rgba(57, 240, 152, 0.25);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 4, 165, 255;
  border-bottom-color: rgb(4, 165, 255);
  border-left-color: rgb(4, 165, 255);
  border-right-color: rgb(4, 165, 255);
  border-top-color: rgb(4, 165, 255);
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 129, 213, 208;
  background: rgba(129, 213, 208, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(129, 213, 208, 0.1);
  border-bottom-color: rgba(129, 213, 208, 0.25);
  border-left-color: rgba(129, 213, 208, 0.25);
  border-right-color: rgba(129, 213, 208, 0.25);
  border-top-color: rgba(129, 213, 208, 0.25);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 4, 165, 255;
  border-bottom-color: rgb(4, 165, 255);
  border-left-color: rgb(4, 165, 255);
  border-right-color: rgb(4, 165, 255);
  border-top-color: rgb(4, 165, 255);
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 4, 165, 255;
  background: rgba(4, 165, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(4, 165, 255, 0.1);
  border-bottom-color: rgba(4, 165, 255, 0.25);
  border-left-color: rgba(4, 165, 255, 0.25);
  border-right-color: rgba(4, 165, 255, 0.25);
  border-top-color: rgba(4, 165, 255, 0.25);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 4, 165, 255;
  border-bottom-color: rgb(4, 165, 255);
  border-left-color: rgb(4, 165, 255);
  border-right-color: rgb(4, 165, 255);
  border-top-color: rgb(4, 165, 255);
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 243, 200, 91;
  background: rgba(243, 200, 91, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(243, 200, 91, 0.1);
  border-bottom-color: rgba(243, 200, 91, 0.25);
  border-left-color: rgba(243, 200, 91, 0.25);
  border-right-color: rgba(243, 200, 91, 0.25);
  border-top-color: rgba(243, 200, 91, 0.25);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 4, 165, 255;
  border-bottom-color: rgb(4, 165, 255);
  border-left-color: rgb(4, 165, 255);
  border-right-color: rgb(4, 165, 255);
  border-top-color: rgb(4, 165, 255);
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 165, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(189, 209, 219);
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
  background-color: rgb(18, 28, 33);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(14, 22, 27);
  border-bottom-color: rgb(30, 48, 56);
  border-left-color: rgb(30, 48, 56);
  border-right-color: rgb(30, 48, 56);
  border-top-color: rgb(30, 48, 56);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(189, 209, 219);
  outline: rgb(189, 209, 219) none 0px;
  text-decoration-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(34, 142, 195, 0.1);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(30, 48, 56);
  border-left-color: rgb(30, 48, 56);
  border-right-color: rgb(30, 48, 56);
  border-top-color: rgb(30, 48, 56);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(7, 11, 13);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(34, 142, 195, 0.1);
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(34, 142, 195, 0.1);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(60, 167, 221);
}

html[saved-theme="dark"] body h1 {
  color: rgb(222, 232, 237);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(61, 102, 129);
  font-size: 16px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(222, 232, 237);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(61, 102, 129);
}

html[saved-theme="dark"] body h3 {
  color: rgb(222, 232, 237);
}

html[saved-theme="dark"] body h4 {
  color: rgb(222, 232, 237);
}

html[saved-theme="dark"] body h5 {
  color: rgb(222, 232, 237);
}

html[saved-theme="dark"] body h6 {
  color: rgb(222, 232, 237);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 4, 165, 255;
  border-bottom-color: rgba(4, 165, 255, 0.25);
  border-left-color: rgba(4, 165, 255, 0.25);
  border-right-color: rgba(4, 165, 255, 0.25);
  border-top-color: rgba(4, 165, 255, 0.25);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(34, 142, 195, 0.15);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(122, 163, 184);
  font-weight: 500;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(122, 163, 184);
  font-weight: 500;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(122, 163, 184);
  border-left-color: rgb(122, 163, 184);
  border-right-color: rgb(122, 163, 184);
  border-top-color: rgb(122, 163, 184);
  color: rgb(122, 163, 184);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(7, 11, 13);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(122, 163, 184);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(122, 163, 184);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(122, 163, 184);
  border-left-color: rgb(122, 163, 184);
  border-right-color: rgb(122, 163, 184);
  border-top-color: rgb(122, 163, 184);
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(122, 163, 184);
  stroke: rgb(122, 163, 184);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(122, 163, 184);
  border-left-color: rgb(122, 163, 184);
  border-right-color: rgb(122, 163, 184);
  border-top-color: rgb(122, 163, 184);
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(53, 84, 100);
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(7, 11, 13);
  border-color: rgb(189, 209, 219);
}`,
    bases: `html[saved-theme="dark"] body .bases-table {
  border-color: rgb(25, 39, 46);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(14, 22, 27);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(25, 39, 46);
  color: rgb(189, 209, 219);
  font-weight: 700;
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(122, 163, 184);
  border-left-color: rgb(122, 163, 184);
  border-right-color: rgb(122, 163, 184);
  border-top-color: rgb(122, 163, 184);
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(20, 31, 37);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(34, 142, 195, 0.1);
  border-radius: 7px;
  color: rgb(60, 167, 221);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(14, 22, 27);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(7, 11, 13);
  border-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(7, 11, 13);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(189, 209, 219);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(7, 11, 13);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body abbr {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(122, 163, 184);
  border-left-color: rgb(122, 163, 184);
  border-right-color: rgb(122, 163, 184);
  border-top-color: rgb(122, 163, 184);
  color: rgb(122, 163, 184);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(21, 34, 44);
  border-bottom-color: rgb(214, 227, 240);
  border-left-color: rgb(214, 227, 240);
  border-right-color: rgb(214, 227, 240);
  border-top-color: rgb(214, 227, 240);
  color: rgb(214, 227, 240);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(189, 209, 219);
  border-left-color: rgb(189, 209, 219);
  border-right-color: rgb(189, 209, 219);
  border-top-color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body sub {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body summary {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body sup {
  color: rgb(189, 209, 219);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(34, 142, 195, 0.1);
  border-bottom-color: rgba(34, 142, 195, 0.15);
  border-bottom-left-radius: 5.25px;
  border-bottom-right-radius: 5.25px;
  border-left-color: rgba(34, 142, 195, 0.15);
  border-right-color: rgba(34, 142, 195, 0.15);
  border-top-color: rgba(34, 142, 195, 0.15);
  border-top-left-radius: 5.25px;
  border-top-right-radius: 5.25px;
  color: rgb(60, 167, 221);
}`,
  },
  light: {
    base: `:root:root {
  --accent-dark: 55%;
  --accent-h: 200;
  --accent-l: 45%;
  --accent-s: 70%;
  --background-modifier-active-hover: hsla(200, 70%, 45%, 0.1);
  --background-modifier-border: #CFDAE2;
  --background-modifier-border-focus: #98ACBA;
  --background-modifier-border-hover: #52697A;
  --background-modifier-error: #F51A68;
  --background-modifier-error-hover: #F51A68;
  --background-modifier-error-rgb: 245, 26, 104;
  --background-modifier-form-field: #F6F9FB;
  --background-modifier-form-field-hover: #F6F9FB;
  --background-modifier-hover: hsla(200, 70%, 45%, 0.1);
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
  --bases-table-cell-background-selected: hsla(200, 70%, 45%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #98ACBA;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(199, 70.7%, 48.375%);
  --bases-table-group-background: #EFF3F6;
  --bases-table-header-background: #F6F9FB;
  --bases-table-header-background-hover: hsla(200, 70%, 45%, 0.1);
  --bases-table-header-color: #141F25;
  --bases-table-row-background-hover: #EFF3F6;
  --bases-table-summary-background: #F6F9FB;
  --bases-table-summary-background-hover: hsla(200, 70%, 45%, 0.1);
  --block-margin: 2em 0;
  --blockquote-background-color: #F6F9FB;
  --blockquote-border-color: hsl(199, 70.7%, 48.375%);
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
  --checkbox-color: hsl(199, 70.7%, 48.375%);
  --checkbox-color-hover: hsl(
                                            200, 
                                            70%, 
                                            70%);
  --checkbox-marker-color: #F6F9FB;
  --checklist-done-color: #141F25;
  --code-background: #E3EDF2;
  --code-border-color: #CFDAE2;
  --code-bracket-background: hsla(200, 70%, 45%, 0.1);
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
  --color-accent: hsl(200, 70%, 45%);
  --color-accent-1: hsl(199, 70.7%, 48.375%);
  --color-accent-2: hsl(197, 71.4%, 51.75%);
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
  --dark: var(--text-normal, #141F25);
  --darkgray: var(--text-normal, #141F25);
  --divider-color: #CFDAE2;
  --divider-color-hover: hsl(199, 70.7%, 48.375%);
  --dropdown-background: #F6F9FB;
  --dropdown-background-hover: #EFF3F6;
  --embed-background-color: #EFF3F6;
  --embed-block-shadow-hover: 0 0 0 1px #CFDAE2, inset 0 0 0 1px #CFDAE2;
  --embed-border-start: 2px solid hsl(199, 70.7%, 48.375%);
  --file-header-background: #F6F9FB;
  --file-header-background-focused: #F6F9FB;
  --flair-background: #F6F9FB;
  --flair-color: #141F25;
  --footnote-divider-color: #CFDAE2;
  --footnote-id-color: #141F25;
  --footnote-id-color-no-occurrences: #141F28;
  --footnote-input-background-active: hsla(200, 70%, 45%, 0.1);
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
  --gray: var(--text-muted, #141F25);
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
  --highlight: var(--background-modifier-hover, hsla(200, 70%, 45%, 0.1));
  --hr-color: #CFDAE2;
  --hr-thickness: 1px;
  --icon-color: #141F25;
  --icon-color-active: hsl(
                                              200,
                                              70%,
                                              45%);
  --icon-color-focused: #141F25;
  --icon-color-hover: #141F25;
  --indentation-guide-color: hsla(200, 70%, 45%, 0.15);
  --indentation-guide-color-active: hsla(200, 70%, 45%, 0.15);
  --inline-title-border: #CFDAE2;
  --inline-title-color: #7c93a4;
  --inline-title-line-height: 1.111;
  --inline-title-size: 1em;
  --inline-title-weight: bold;
  --input-date-separator: #141F28;
  --input-placeholder-color: #141F28;
  --interactive-accent: hsl(199, 70.7%, 48.375%);
  --interactive-accent-hover: hsl(197, 71.4%, 51.75%);
  --interactive-accent-hsl: 200, 70%, 45%;
  --interactive-hover: #EFF3F6;
  --interactive-normal: #F6F9FB;
  --light: var(--background-primary, #F6F9FB);
  --lightgray: var(--background-secondary, #EFF3F6);
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
  --metadata-input-background-active: hsla(200, 70%, 45%, 0.1);
  --metadata-input-text-color: #141F25;
  --metadata-label-background-active: hsla(200, 70%, 45%, 0.1);
  --metadata-label-text-color: #141F25;
  --metadata-label-text-color-hover: #141F25;
  --metadata-property-background-active: hsla(200, 70%, 45%, 0.1);
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
  --nav-indentation-guide-color: hsla(200, 70%, 45%, 0.15);
  --nav-item-background-active: hsla(200, 70%, 45%, 0.1);
  --nav-item-background-hover: hsla(200, 70%, 45%, 0.1);
  --nav-item-background-selected: hsla(200, 70%, 45%, 0.15);
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
  --secondary: var(--text-accent, hsl(
                                              200,
                                              70%,
                                              45%));
  --setting-group-heading-color: #141F25;
  --setting-items-background: #EFF3F6;
  --setting-items-border-color: #CFDAE2;
  --shiki-active-tab-border-color: #141F25;
  --shiki-code-background: #E3EDF2;
  --shiki-code-comment: #141F28;
  --shiki-code-function: #34915e;
  --shiki-code-important: #FD9434;
  --shiki-code-keyword: #E135E4;
  --shiki-code-normal: #141F25;
  --shiki-code-property: #00C8C8;
  --shiki-code-punctuation: #141F25;
  --shiki-code-string: #C2BA8C;
  --shiki-code-value: #9C7AD3;
  --shiki-gutter-border-color: #CFDAE2;
  --shiki-gutter-text-color: #141F28;
  --shiki-gutter-text-color-highlight: #141F25;
  --shiki-highlight-green: rgba(52, 145, 94, 0.5);
  --shiki-highlight-green-background: rgba(52, 145, 94, 0.1);
  --shiki-highlight-neutral: #141F25;
  --shiki-highlight-red: rgba(245, 26, 104, 0.5);
  --shiki-highlight-red-background: rgba(245, 26, 104, 0.1);
  --shiki-terminal-dots-color: #141F28;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(200, 70%, 45%);
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
  --table-drag-handle-background-active: hsl(199, 70.7%, 48.375%);
  --table-drag-handle-color: #141F28;
  --table-header-background: #EFF3F6;
  --table-header-background-hover: #EFF3F6;
  --table-header-border-color: #CFDAE2;
  --table-header-color: #141F25;
  --table-row-background-hover: #EFF3F6;
  --table-row-even-background: #F6F9FB;
  --table-row-odd-background: #E3EDF2;
  --table-selection: hsla(200, 70%, 45%, 0.1);
  --table-selection-border-color: hsl(199, 70.7%, 48.375%);
  --tag-background: hsla(200, 70%, 45%, 0.1);
  --tag-background-hover: hsla(200, 70%, 45%, 0.2);
  --tag-border-color: hsla(200, 70%, 45%, 0.15);
  --tag-border-color-hover: hsla(200, 70%, 45%, 0.15);
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
  --tertiary: var(--text-accent-hover, hsl(
                                              200,
                                              70%,
                                              55%));
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
  --text-highlight-bg-editing: hsla(61, 74%, 66%, 0.85);
  --text-highlight-editing: #000;
  --text-highlight-rendered: #252525;
  --text-muted: #141F25;
  --text-normal: #141F25;
  --text-selection: hsla(200, 70%, 45%, 0.2);
  --text-success: #34915e;
  --text-warning: #FD9434;
  --textHighlight: var(--background-modifier-hover, hsla(200, 70%, 45%, 0.1));
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
  --workspace-background-translucent: hsla(205, 35%, 92%, 0.6);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(239, 243, 246);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(246, 249, 251);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(239, 243, 246);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(207, 218, 226);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(239, 243, 246);
  border-left-color: rgb(207, 218, 226);
  color: rgb(20, 31, 37);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(36, 148, 204);
  font-weight: 800;
  outline: rgb(36, 148, 204) none 0px;
  text-decoration-color: rgb(36, 148, 204);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(36, 148, 204);
  outline: rgb(36, 148, 204) none 0px;
  text-decoration-color: rgb(36, 148, 204);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(36, 148, 204);
  outline: rgb(36, 148, 204) none 0px;
  text-decoration-color: rgb(36, 148, 204);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(36, 148, 204);
  font-weight: 800;
  outline: rgb(36, 148, 204) none 0px;
  text-decoration-color: rgb(36, 148, 204);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(37, 37, 37);
  outline: rgb(37, 37, 37) none 0px;
  text-decoration-color: rgb(37, 37, 37);
}

html[saved-theme="light"] body del {
  color: rgb(20, 31, 37);
  outline: rgb(20, 31, 37) none 0px;
  text-decoration-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(26, 40, 51);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(36, 155, 211);
  border-color: rgb(36, 155, 211);
}

html[saved-theme="light"] body p {
  color: rgb(20, 31, 37);
  outline: rgb(20, 31, 37) none 0px;
  text-decoration-color: rgb(20, 31, 37);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(34, 142, 195);
  outline: rgb(34, 142, 195) none 0px;
  text-decoration-color: rgb(34, 142, 195);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(34, 142, 195);
  outline: rgb(34, 142, 195) none 0px;
  text-decoration-color: rgb(34, 142, 195);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(82, 105, 122);
  outline: rgb(82, 105, 122) none 0px;
  text-decoration: underline rgb(82, 105, 122);
  text-decoration-color: rgb(82, 105, 122);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body dt {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body ol > li {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body ul > li {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(20, 31, 40);
}

html[saved-theme="light"] body blockquote {
  font-style: italic;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body table {
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

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(246, 249, 251);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgb(227, 237, 242);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body th {
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

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
}

html[saved-theme="light"] body tr {
  background-color: rgb(239, 243, 246);
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(20, 31, 37);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(20, 31, 37);
  padding-bottom: 12px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 12px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(227, 237, 242);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body figcaption {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(46, 61, 73);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(46, 61, 73);
  border-radius: 4px;
  border-right-color: rgb(46, 61, 73);
  border-top-color: rgb(46, 61, 73);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(239, 243, 246);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .transclude {
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

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(20, 31, 37);
  border-bottom-style: solid;
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-right-style: solid;
  border-top-color: rgb(20, 31, 37);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(26, 40, 51);
  border-left-color: rgb(26, 40, 51);
  border-right-color: rgb(26, 40, 51);
  border-top-color: rgb(26, 40, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(62, 101, 124);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(62, 101, 124);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(62, 101, 124);
  text-decoration-color: rgb(62, 101, 124);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 249, 251);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 249, 251);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 148, 52);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(26, 40, 51);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 186, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 200, 200);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(4, 119, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 26, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 26, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 26, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 26, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(4, 119, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 186, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 186, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(156, 122, 211);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 26, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(52, 145, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(52, 145, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(52, 145, 94);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 4, 119, 255;
  border-bottom-color: rgb(4, 119, 255);
  border-left-color: rgb(4, 119, 255);
  border-right-color: rgb(4, 119, 255);
  border-top-color: rgb(4, 119, 255);
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 200, 200;
  background: rgba(0, 200, 200, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 200, 200, 0.15);
  border-bottom-color: rgba(0, 200, 200, 0.25);
  border-left-color: rgba(0, 200, 200, 0.25);
  border-right-color: rgba(0, 200, 200, 0.25);
  border-top-color: rgba(0, 200, 200, 0.25);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 4, 119, 255;
  border-bottom-color: rgb(4, 119, 255);
  border-left-color: rgb(4, 119, 255);
  border-right-color: rgb(4, 119, 255);
  border-top-color: rgb(4, 119, 255);
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 245, 26, 104;
  background: rgba(245, 26, 104, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(245, 26, 104, 0.15);
  border-bottom-color: rgba(245, 26, 104, 0.25);
  border-left-color: rgba(245, 26, 104, 0.25);
  border-right-color: rgba(245, 26, 104, 0.25);
  border-top-color: rgba(245, 26, 104, 0.25);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 4, 119, 255;
  border-bottom-color: rgb(4, 119, 255);
  border-left-color: rgb(4, 119, 255);
  border-right-color: rgb(4, 119, 255);
  border-top-color: rgb(4, 119, 255);
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 245, 26, 104;
  background: rgba(245, 26, 104, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(245, 26, 104, 0.15);
  border-bottom-color: rgba(245, 26, 104, 0.25);
  border-left-color: rgba(245, 26, 104, 0.25);
  border-right-color: rgba(245, 26, 104, 0.25);
  border-top-color: rgba(245, 26, 104, 0.25);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 4, 119, 255;
  border-bottom-color: rgb(4, 119, 255);
  border-left-color: rgb(4, 119, 255);
  border-right-color: rgb(4, 119, 255);
  border-top-color: rgb(4, 119, 255);
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 156, 122, 211;
  background: rgba(156, 122, 211, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(156, 122, 211, 0.15);
  border-bottom-color: rgba(156, 122, 211, 0.25);
  border-left-color: rgba(156, 122, 211, 0.25);
  border-right-color: rgba(156, 122, 211, 0.25);
  border-top-color: rgba(156, 122, 211, 0.25);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 4, 119, 255;
  border-bottom-color: rgb(4, 119, 255);
  border-left-color: rgb(4, 119, 255);
  border-right-color: rgb(4, 119, 255);
  border-top-color: rgb(4, 119, 255);
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 245, 26, 104;
  background: rgba(245, 26, 104, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(245, 26, 104, 0.15);
  border-bottom-color: rgba(245, 26, 104, 0.25);
  border-left-color: rgba(245, 26, 104, 0.25);
  border-right-color: rgba(245, 26, 104, 0.25);
  border-top-color: rgba(245, 26, 104, 0.25);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 4, 119, 255;
  border-bottom-color: rgb(4, 119, 255);
  border-left-color: rgb(4, 119, 255);
  border-right-color: rgb(4, 119, 255);
  border-top-color: rgb(4, 119, 255);
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 4, 119, 255;
  background: rgba(4, 119, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(4, 119, 255, 0.15);
  border-bottom-color: rgba(4, 119, 255, 0.25);
  border-left-color: rgba(4, 119, 255, 0.25);
  border-right-color: rgba(4, 119, 255, 0.25);
  border-top-color: rgba(4, 119, 255, 0.25);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 4, 119, 255;
  border-bottom-color: rgb(4, 119, 255);
  border-left-color: rgb(4, 119, 255);
  border-right-color: rgb(4, 119, 255);
  border-top-color: rgb(4, 119, 255);
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 4, 119, 255;
  background: rgba(4, 119, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(4, 119, 255, 0.15);
  border-bottom-color: rgba(4, 119, 255, 0.25);
  border-left-color: rgba(4, 119, 255, 0.25);
  border-right-color: rgba(4, 119, 255, 0.25);
  border-top-color: rgba(4, 119, 255, 0.25);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 4, 119, 255;
  border-bottom-color: rgb(4, 119, 255);
  border-left-color: rgb(4, 119, 255);
  border-right-color: rgb(4, 119, 255);
  border-top-color: rgb(4, 119, 255);
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 207, 186, 0;
  background: rgba(207, 186, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(207, 186, 0, 0.15);
  border-bottom-color: rgba(207, 186, 0, 0.25);
  border-left-color: rgba(207, 186, 0, 0.25);
  border-right-color: rgba(207, 186, 0, 0.25);
  border-top-color: rgba(207, 186, 0, 0.25);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 4, 119, 255;
  border-bottom-color: rgb(4, 119, 255);
  border-left-color: rgb(4, 119, 255);
  border-right-color: rgb(4, 119, 255);
  border-top-color: rgb(4, 119, 255);
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 123, 140, 165;
  background: rgba(123, 140, 165, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(123, 140, 165, 0.15);
  border-bottom-color: rgba(123, 140, 165, 0.25);
  border-left-color: rgba(123, 140, 165, 0.25);
  border-right-color: rgba(123, 140, 165, 0.25);
  border-top-color: rgba(123, 140, 165, 0.25);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 4, 119, 255;
  border-bottom-color: rgb(4, 119, 255);
  border-left-color: rgb(4, 119, 255);
  border-right-color: rgb(4, 119, 255);
  border-top-color: rgb(4, 119, 255);
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 52, 145, 94;
  background: rgba(52, 145, 94, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(52, 145, 94, 0.15);
  border-bottom-color: rgba(52, 145, 94, 0.25);
  border-left-color: rgba(52, 145, 94, 0.25);
  border-right-color: rgba(52, 145, 94, 0.25);
  border-top-color: rgba(52, 145, 94, 0.25);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 4, 119, 255;
  border-bottom-color: rgb(4, 119, 255);
  border-left-color: rgb(4, 119, 255);
  border-right-color: rgb(4, 119, 255);
  border-top-color: rgb(4, 119, 255);
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 200, 200;
  background: rgba(0, 200, 200, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 200, 200, 0.15);
  border-bottom-color: rgba(0, 200, 200, 0.25);
  border-left-color: rgba(0, 200, 200, 0.25);
  border-right-color: rgba(0, 200, 200, 0.25);
  border-top-color: rgba(0, 200, 200, 0.25);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 4, 119, 255;
  border-bottom-color: rgb(4, 119, 255);
  border-left-color: rgb(4, 119, 255);
  border-right-color: rgb(4, 119, 255);
  border-top-color: rgb(4, 119, 255);
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 4, 119, 255;
  background: rgba(4, 119, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(4, 119, 255, 0.15);
  border-bottom-color: rgba(4, 119, 255, 0.25);
  border-left-color: rgba(4, 119, 255, 0.25);
  border-right-color: rgba(4, 119, 255, 0.25);
  border-top-color: rgba(4, 119, 255, 0.25);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 4, 119, 255;
  border-bottom-color: rgb(4, 119, 255);
  border-left-color: rgb(4, 119, 255);
  border-right-color: rgb(4, 119, 255);
  border-top-color: rgb(4, 119, 255);
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 253, 148, 52;
  background: rgba(253, 148, 52, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(253, 148, 52, 0.15);
  border-bottom-color: rgba(253, 148, 52, 0.25);
  border-left-color: rgba(253, 148, 52, 0.25);
  border-right-color: rgba(253, 148, 52, 0.25);
  border-top-color: rgba(253, 148, 52, 0.25);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 4, 119, 255;
  border-bottom-color: rgb(4, 119, 255);
  border-left-color: rgb(4, 119, 255);
  border-right-color: rgb(4, 119, 255);
  border-top-color: rgb(4, 119, 255);
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(4, 119, 255);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(20, 31, 37);
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
  background-color: rgb(246, 249, 251);
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(246, 249, 251);
  border-bottom-color: rgb(46, 61, 73);
  border-left-color: rgb(46, 61, 73);
  border-right-color: rgb(46, 61, 73);
  border-top-color: rgb(46, 61, 73);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(20, 31, 37);
  outline: rgb(20, 31, 37) none 0px;
  text-decoration-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(34, 142, 195, 0.1);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(46, 61, 73);
  border-left-color: rgb(46, 61, 73);
  border-right-color: rgb(46, 61, 73);
  border-top-color: rgb(46, 61, 73);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(239, 243, 246);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(34, 142, 195, 0.1);
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(34, 142, 195, 0.1);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(34, 142, 195);
}

html[saved-theme="light"] body h1 {
  color: rgb(46, 61, 73);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(124, 147, 164);
  font-size: 16px;
}

html[saved-theme="light"] body h2 {
  color: rgb(46, 61, 73);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(124, 147, 164);
}

html[saved-theme="light"] body h3 {
  color: rgb(46, 61, 73);
}

html[saved-theme="light"] body h4 {
  color: rgb(46, 61, 73);
}

html[saved-theme="light"] body h5 {
  color: rgb(46, 61, 73);
}

html[saved-theme="light"] body h6 {
  color: rgb(46, 61, 73);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 4, 119, 255;
  border-bottom-color: rgba(4, 119, 255, 0.25);
  border-left-color: rgba(4, 119, 255, 0.25);
  border-right-color: rgba(4, 119, 255, 0.25);
  border-top-color: rgba(4, 119, 255, 0.25);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(34, 142, 195, 0.15);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(20, 31, 37);
  font-weight: 500;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(20, 31, 37);
  font-weight: 500;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(239, 243, 246);
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(20, 31, 37);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(20, 31, 37);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(20, 31, 37);
  stroke: rgb(20, 31, 37);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(20, 31, 40);
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(246, 249, 251);
  border-color: rgb(20, 31, 37);
}`,
    bases: `html[saved-theme="light"] body .bases-table {
  border-color: rgb(207, 218, 226);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(227, 237, 242);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(207, 218, 226);
  color: rgb(20, 31, 37);
  font-weight: 700;
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(207, 218, 226);
  border-left-color: rgb(207, 218, 226);
  border-right-color: rgb(207, 218, 226);
  border-top-color: rgb(207, 218, 226);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(207, 218, 226);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(34, 142, 195, 0.1);
  border-radius: 7px;
  color: rgb(34, 142, 195);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(246, 249, 251);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(239, 243, 246);
  border-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(246, 249, 251);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(20, 31, 37);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(239, 243, 246);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body abbr {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(227, 237, 242);
  border-bottom-color: rgb(82, 126, 178);
  border-left-color: rgb(82, 126, 178);
  border-right-color: rgb(82, 126, 178);
  border-top-color: rgb(82, 126, 178);
  color: rgb(82, 126, 178);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(20, 31, 37);
  border-left-color: rgb(20, 31, 37);
  border-right-color: rgb(20, 31, 37);
  border-top-color: rgb(20, 31, 37);
}

html[saved-theme="light"] body sub {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body summary {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body sup {
  color: rgb(20, 31, 37);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(34, 142, 195, 0.1);
  border-bottom-color: rgba(34, 142, 195, 0.15);
  border-bottom-left-radius: 5.25px;
  border-bottom-right-radius: 5.25px;
  border-left-color: rgba(34, 142, 195, 0.15);
  border-right-color: rgba(34, 142, 195, 0.15);
  border-top-color: rgba(34, 142, 195, 0.15);
  border-top-left-radius: 5.25px;
  border-top-right-radius: 5.25px;
  color: rgb(34, 142, 195);
}`,
  },
  classSettings: {
    "at-colorful-headings": `.at-colorful-headings h1, .at-colorful-headings .HyperMD-header-1 {
color: #70A7C2;
}

.at-colorful-headings h2, .at-colorful-headings .HyperMD-header-2 {
color: #C270C2;
}

.at-colorful-headings h3, .at-colorful-headings .HyperMD-header-3 {
color: #D2B467;
}

.at-colorful-headings h4, .at-colorful-headings .HyperMD-header-4 {
color: #FB447B;
}

.at-colorful-headings h5, .at-colorful-headings .HyperMD-header-5 {
color: #A4D16A;
}

.at-colorful-headings h6, .at-colorful-headings .HyperMD-header-6 {
color: #D49CFF;
}
.at-colorful-headings h1, .at-colorful-headings .HyperMD-header-1 {
color: #4DA8B2;
}

.at-colorful-headings h2, .at-colorful-headings .HyperMD-header-2 {
color: #B24DB2;
}

.at-colorful-headings h3, .at-colorful-headings .HyperMD-header-3 {
color: #C5AA26;
}

.at-colorful-headings h4, .at-colorful-headings .HyperMD-header-4 {
color: #FA3872;
}

.at-colorful-headings h5, .at-colorful-headings .HyperMD-header-5 {
color: #619726;
}

.at-colorful-headings h6, .at-colorful-headings .HyperMD-header-6 {
color: #8F4BD2;
}`,
    "at-line-height": `.at-line-height .cm-line, .at-line-height .markdown-source-view.mod-cm6.is-readable-line-width .cm-line, .at-line-height p {
line-height:        var(--line-height-roomy);
}`,
  },
};
