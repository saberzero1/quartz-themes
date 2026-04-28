import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "ayu", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --active-title-border: rgba(0, 0, 0, 0.09);
  --background-accent: rgba(0, 0, 0, 0.04);
  --background-modifier-border: #b1b4b9;
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: #3d0000;
  --background-modifier-error-hover: #470000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgb(249, 249, 251);
  --background-modifier-form-field-highlighted: rgb(249, 249, 251);
  --background-modifier-form-field-hover: rgb(249, 249, 251);
  --background-modifier-success: rgba(160, 232, 92, 0.08);
  --background-primary: rgb(249, 249, 251);
  --background-primary-alt: rgba(0, 0, 0, 0.04);
  --background-secondary: #fbf9f9;
  --background-secondary-alt: #fbf9f9;
  --bases-cards-background: rgb(249, 249, 251);
  --bases-cards-cover-background: rgba(0, 0, 0, 0.04);
  --bases-cards-shadow: 0 0 0 1px #b1b4b9;
  --bases-embed-border-color: #b1b4b9;
  --bases-group-heading-property-color: #b1b4b9;
  --bases-table-border-color: #b1b4b9;
  --bases-table-cell-background-active: rgb(249, 249, 251);
  --bases-table-cell-background-disabled: rgba(0, 0, 0, 0.04);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(0, 0, 0, 0.09);
  --bases-table-group-background: rgba(0, 0, 0, 0.04);
  --bases-table-header-background: rgb(249, 249, 251);
  --bases-table-header-color: #b1b4b9;
  --bases-table-summary-background: rgb(249, 249, 251);
  --blockquote-bg: rgb(249, 249, 251);
  --blockquote-border: #de5105;
  --blockquote-border-color: rgba(0, 0, 0, 0.09);
  --blur-background: color-mix(in srgb, rgb(249, 249, 251) 65%, transparent) linear-gradient(rgb(249, 249, 251), color-mix(in srgb, rgb(249, 249, 251) 65%, transparent));
  --border-color: #dbdee1;
  --bracket-color: #b1b4b8;
  --canvas-background: rgb(249, 249, 251);
  --canvas-card-label-color: #b1b4b9;
  --caret-color: #595371;
  --checkbox-border-color: #b1b4b9;
  --checkbox-border-color-hover: #b1b4b9;
  --checkbox-color: #b1b4b8;
  --checkbox-color-hover: rgba(227, 238, 242, 0.5);
  --checkbox-enabled: #de5105;
  --checkbox-marker-color: rgb(249, 249, 251);
  --checklist-done-color: #b1b4b9;
  --code-background: rgba(0, 0, 0, 0.04);
  --code-block: #b1b4b9;
  --code-border-color: #b1b4b9;
  --code-comment: #b1b4b9;
  --code-normal: #595371;
  --code-punctuation: #b1b4b9;
  --collapse-icon-color: #b1b4b9;
  --collapse-icon-color-collapsed: #de5105;
  --dark: var(--text-normal, #595371);
  --darkgray: var(--text-normal, #595371);
  --divider-color: #b1b4b9;
  --divider-color-hover: rgba(0, 0, 0, 0.09);
  --dropdown-background: rgb(249, 249, 251);
  --dropdown-background-hover: rgba(0, 0, 0, 0.02);
  --embed-block-shadow-hover: 0 0 0 1px #b1b4b9, inset 0 0 0 1px #b1b4b9;
  --embed-border-start: 2px solid rgba(0, 0, 0, 0.09);
  --file-header-background: rgb(249, 249, 251);
  --file-header-background-focused: rgb(249, 249, 251);
  --file-name-color: #de5105;
  --flair-background: rgb(249, 249, 251);
  --flair-color: #595371;
  --font-family-code: Ubuntu Mono derivative Powerline, Menlo, Monaco;
  --font-family-editor: Skolar PE, iA Writer Quattro S, Menlo, Avenir Next, Times New Roman;
  --font-family-mdpreview: Skolar PE, Gentium Plus, Alegreya, Source Sans Pro, Avenir Next, Times New Roman;
  --font-family-preview: Gentium Plus, Alegreya, Source Sans Pro, Palatino, Avenir Next, Times New Roman;
  --font-size-blockquote: 22px;
  --font-size-code: 22px;
  --font-size-footnote: 22px;
  --font-size-h1: 1.9em;
  --font-size-h2: 1.6em;
  --font-size-h3: 1.3em;
  --font-size-h4: 1.2em;
  --font-size-h5: 1.1em;
  --font-size-h6: 1em;
  --font-size-normal: 24px;
  --font-size-side-dock: 16px;
  --font-size-side-dock-title: 18px;
  --font-size-status-bar: 16px;
  --footnote-divider-color: #b1b4b9;
  --footnote-id-color: #b1b4b9;
  --footnote-id-color-no-occurrences: #b1b4b9;
  --graph-line-color: #dbdee1;
  --graph-line-on-hover: #b1b4b8;
  --graph-node: #b1b4b9;
  --graph-node-color: #b1b4b8;
  --graph-node-focused: #de5105;
  --graph-node-unresolved: #b1b4b9;
  --graph-note-name: #595371;
  --graph-text: #595371;
  --gray: var(--text-muted, #b1b4b9);
  --hashtag-color: #5c6369;
  --header-before-color: #b1b4b8;
  --header-before-size-h1: 0.5em;
  --header-before-size-h2: 0.5em;
  --header-before-size-h3: 0.5em;
  --header-before-size-h4: 0.5em;
  --header-before-size-h5: 0.5em;
  --header-before-size-h6: 0.5em;
  --heading-formatting: #b1b4b9;
  --highlight: var(--text-highlight-bg, rgba(227, 238, 242, 0.5));
  --hr-color: hsl(0, 0%, 39%);
  --icon-color: #b1b4b9;
  --icon-color-active: #de5105;
  --icon-color-focused: #595371;
  --icon-color-hover: #b1b4b9;
  --inline-code: #b1b4b9;
  --input-date-separator: #b1b4b9;
  --input-placeholder-color: #b1b4b9;
  --interactive-accent: rgba(0, 0, 0, 0.09);
  --interactive-accent-hover: rgba(227, 238, 242, 0.5);
  --interactive-accent-rgb: 72, 54, 153;
  --interactive-hover: rgba(0, 0, 0, 0.02);
  --interactive-normal: rgb(249, 249, 251);
  --interfa-color-icon: rgba(0, 0, 0, 0.03);
  --interface-color-action: #595371;
  --interface-color-background: #415358;
  --interface-color-background-alt: rgb(249, 249, 251);
  --interface-color-border: rgba(0, 0, 0, 0.03);
  --interface-color-cross: #fc3b44;
  --interface-color-foreground: #3e3e3e;
  --interface-color-foreground-alt: #de5105;
  --interface-color-pencil: #fec03e;
  --interface-color-pin: #595371;
  --interface-color-three-dots: #a0e85b;
  --light: var(--background-primary, rgb(249, 249, 251));
  --lightgray: var(--background-secondary, #fbf9f9);
  --line-height-footnote: 1.2em;
  --line-height-header-preview: 1em;
  --line-height-preview: 1.7em;
  --link-color: #de5105;
  --link-color-hover: #b1b4b9;
  --link-external-color: #de5105;
  --link-external-color-hover: #b1b4b9;
  --link-text: #de5105;
  --link-text-hover: #de5105;
  --link-unresolved-color: #de5105;
  --list-marker-color: #b1b4b9;
  --list-marker-color-collapsed: #de5105;
  --list-marker-color-hover: #b1b4b9;
  --menu-background: #fbf9f9;
  --metadata-border-color: #b1b4b9;
  --metadata-divider-color: #b1b4b9;
  --metadata-input-text-color: #595371;
  --metadata-label-text-color: #b1b4b9;
  --metadata-label-text-color-hover: #b1b4b9;
  --modal-background: rgb(249, 249, 251);
  --nav-collapse-icon-color: #b1b4b9;
  --nav-collapse-icon-color-collapsed: #b1b4b9;
  --nav-heading-color: #595371;
  --nav-heading-color-collapsed: #b1b4b9;
  --nav-heading-color-collapsed-hover: #b1b4b9;
  --nav-heading-color-hover: #595371;
  --nav-item-color: #b1b4b9;
  --nav-item-color-active: #595371;
  --nav-item-color-highlighted: #de5105;
  --nav-item-color-hover: #595371;
  --nav-item-color-selected: #595371;
  --nav-tag-color: #b1b4b9;
  --nav-tag-color-active: #b1b4b9;
  --nav-tag-color-hover: #b1b4b9;
  --pdf-background: rgb(249, 249, 251);
  --pdf-page-background: rgb(249, 249, 251);
  --pdf-shadow: 0 0 0 1px #b1b4b9;
  --pdf-sidebar-background: rgb(249, 249, 251);
  --pdf-thumbnail-shadow: 0 0 0 1px #b1b4b9;
  --pill-border-color: #b1b4b9;
  --pill-color: #b1b4b9;
  --pill-color-hover: #595371;
  --pill-color-remove: #b1b4b9;
  --pill-color-remove-hover: #de5105;
  --pre-code-bg: #ffffff;
  --prompt-background: rgb(249, 249, 251);
  --quick-switcher: rgba(227, 238, 242, 0.5);
  --raised-background: color-mix(in srgb, rgb(249, 249, 251) 65%, transparent) linear-gradient(rgb(249, 249, 251), color-mix(in srgb, rgb(249, 249, 251) 65%, transparent));
  --ribbon-background: #fbf9f9;
  --ribbon-background-collapsed: rgb(249, 249, 251);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.1);
  --scrollbar-bg: rgba(0, 0, 0, 0);
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.08);
  --search-clear-button-color: #b1b4b9;
  --search-icon-color: #b1b4b9;
  --search-result-background: rgb(249, 249, 251);
  --secondary: var(--text-accent, #de5105);
  --setting-group-heading-color: #595371;
  --setting-items-background: rgba(0, 0, 0, 0.04);
  --setting-items-border-color: #b1b4b9;
  --shiki-active-tab-border-color: #b1b4b9;
  --shiki-code-background: rgba(0, 0, 0, 0.04);
  --shiki-code-comment: #b1b4b9;
  --shiki-code-normal: #b1b4b9;
  --shiki-code-punctuation: #b1b4b9;
  --shiki-gutter-border-color: #b1b4b9;
  --shiki-gutter-text-color: #b1b4b9;
  --shiki-gutter-text-color-highlight: #b1b4b9;
  --shiki-highlight-neutral: #b1b4b9;
  --shiki-terminal-dots-color: #b1b4b9;
  --slider-track-background: #b1b4b9;
  --status-bar-background: #fbf9f9;
  --status-bar-border-color: #b1b4b9;
  --status-bar-text-color: #b1b4b9;
  --suggestion-background: rgb(249, 249, 251);
  --tab-background-active: rgb(249, 249, 251);
  --tab-container-background: #fbf9f9;
  --tab-outline-color: #b1b4b9;
  --tab-switcher-background: #fbf9f9;
  --tab-switcher-menubar-background: linear-gradient(to top, #fbf9f9, transparent);
  --tab-text-color: #b1b4b9;
  --tab-text-color-active: #b1b4b9;
  --tab-text-color-focused: #b1b4b9;
  --tab-text-color-focused-active: #b1b4b9;
  --tab-text-color-focused-active-current: #595371;
  --tab-text-color-focused-highlighted: #de5105;
  --table-add-button-border-color: #b1b4b9;
  --table-border-color: #b1b4b9;
  --table-drag-handle-background-active: rgba(0, 0, 0, 0.09);
  --table-drag-handle-color: #b1b4b9;
  --table-drag-handle-color-active: #595371;
  --table-header-border-color: #b1b4b9;
  --table-header-color: #595371;
  --table-selection-border-color: rgba(0, 0, 0, 0.09);
  --tag-bg: #b1b4b8;
  --tag-bg-hover: #b1b4b8;
  --tag-color: #de5105;
  --tag-color-hover: #de5105;
  --tag-text-color: rgb(249, 249, 251);
  --tag-text-hover: rgb(249, 249, 251);
  --tertiary: var(--text-accent-hover, #b1b4b9);
  --text-accent: #de5105;
  --text-accent-hover: #b1b4b9;
  --text-error: #800000;
  --text-error-hover: #990000;
  --text-faint: #b1b4b9;
  --text-highlight-bg: rgba(227, 238, 242, 0.5);
  --text-muted: #b1b4b9;
  --text-normal: #595371;
  --text-on-accent: #595371;
  --text-search-highlight-bg: rgba(150, 150, 242, 0.8);
  --text-selection: rgba(227, 238, 242, 0.5);
  --text-title-font-weight: 600;
  --text-title-h1: #5c6369;
  --text-title-h2: #5c6369;
  --text-title-h3: #5c6369;
  --text-title-h4: #5c6369;
  --text-title-h5: #5c6369;
  --text-title-h6: #5c6369;
  --textHighlight: var(--text-highlight-bg, rgba(227, 238, 242, 0.5));
  --titlebar-background: #fbf9f9;
  --titlebar-background-focused: #fbf9f9;
  --titlebar-border-color: #b1b4b9;
  --titlebar-text-color: #b1b4b9;
  --titlebar-text-color-focused: #595371;
  --ul-line-color: #777;
  --ul-line-specs: 0.9px solid;
  --vault-profile-color: #595371;
  --vault-profile-color-hover: #595371;
  --vim-cursor: #474949;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(251, 249, 249);
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(249, 249, 251);
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(251, 249, 249);
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(177, 180, 185);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(251, 249, 249);
  border-left-color: rgb(177, 180, 185);
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body html {
  --font-family-code: Ubuntu Mono derivative Powerline, Menlo, Monaco;
  --font-family-editor: Skolar PE, iA Writer Quattro S, Menlo, Avenir Next, Times New Roman;
  --font-family-mdpreview: Skolar PE, Gentium Plus, Alegreya, Source Sans Pro, Avenir Next, Times New Roman;
  --font-family-preview: Gentium Plus, Alegreya, Source Sans Pro, Palatino, Avenir Next, Times New Roman;
  --font-medium: 21px;
  --font-size-blockquote: 22px;
  --font-size-code: 22px;
  --font-size-normal: 24px;
  --font-size-side-dock: 16px;
  --font-size-side-dock-title: 18px;
  --font-size-status-bar: 16px;
  --font-small: 18px;
  --line-height-header-preview: 1em;
  --line-height-preview: 1.7em;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered > h1 {
  --font-medium: 500;
  --font-small: 0.933em;
  --font-weight: 700;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(177, 180, 184);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(177, 180, 184);
  border-left-width: 0px;
  border-right-color: rgb(177, 180, 184);
  border-right-width: 0px;
  border-top-color: rgb(177, 180, 184);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(177, 180, 184);
  content: "H1 ";
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  font-size: 22.8px;
  font-weight: 600;
  letter-spacing: -0.684px;
  line-height: 45.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(89, 83, 113);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(89, 83, 113) none 0px;
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(89, 83, 113);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(89, 83, 113) none 0px;
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(89, 83, 113);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(89, 83, 113) none 0px;
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(89, 83, 113);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(89, 83, 113) none 0px;
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(227, 238, 242, 0.5);
  color: rgb(89, 83, 113);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(89, 83, 113) none 0px;
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body del {
  color: rgb(89, 83, 113);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(89, 83, 113) none 0px;
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(222, 81, 5);
}

html[saved-theme="dark"] body h2 {
  --font-medium: 500;
  --font-small: 0.933em;
  --font-weight: 680;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(177, 180, 184);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(177, 180, 184);
  border-left-width: 0px;
  border-right-color: rgb(177, 180, 184);
  border-right-width: 0px;
  border-top-color: rgb(177, 180, 184);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(177, 180, 184);
  content: "H2 ";
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  font-size: 19.2px;
  font-weight: 600;
  letter-spacing: -0.4224px;
  line-height: 38.4px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 5.76px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h3 {
  --font-medium: 500;
  --font-small: 0.933em;
  --font-weight: 660;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(177, 180, 184);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(177, 180, 184);
  border-left-width: 0px;
  border-right-color: rgb(177, 180, 184);
  border-right-width: 0px;
  border-top-color: rgb(177, 180, 184);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(177, 180, 184);
  content: "H3 ";
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  font-size: 15.6px;
  font-weight: 600;
  letter-spacing: -0.2496px;
  line-height: 31.2px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 11.232px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h4 {
  --font-medium: 500;
  --font-small: 0.933em;
  --font-weight: 640;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(177, 180, 184);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(177, 180, 184);
  border-left-width: 0px;
  border-right-color: rgb(177, 180, 184);
  border-right-width: 0px;
  border-top-color: rgb(177, 180, 184);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(177, 180, 184);
  content: "H4 ";
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  font-size: 14.4px;
  font-weight: 600;
  letter-spacing: -0.144px;
  line-height: 28.8px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 13.248px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h5 {
  --font-medium: 500;
  --font-small: 0.933em;
  --font-weight: 620;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(177, 180, 184);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(177, 180, 184);
  border-left-width: 0px;
  border-right-color: rgb(177, 180, 184);
  border-right-width: 0px;
  border-top-color: rgb(177, 180, 184);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(177, 180, 184);
  content: "H5 ";
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  font-size: 13.2px;
  font-weight: 600;
  letter-spacing: -0.0528px;
  line-height: 26.4px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 15.18px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h6 {
  --font-medium: 500;
  --font-small: 0.933em;
  --font-weight: 600;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(177, 180, 184);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(177, 180, 184);
  border-left-width: 0px;
  border-right-color: rgb(177, 180, 184);
  border-right-width: 0px;
  border-top-color: rgb(177, 180, 184);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(177, 180, 184);
  content: "H6 ";
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 17.04px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(177, 180, 185);
  border-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(177, 180, 185);
  border-color: rgb(177, 180, 185);
}

html[saved-theme="dark"] body p {
  color: rgb(177, 180, 185);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  outline: rgb(177, 180, 185) none 0px;
  text-decoration-color: rgb(177, 180, 185);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(222, 81, 5);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(222, 81, 5) none 0px;
  text-decoration-color: rgb(222, 81, 5);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(222, 81, 5);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(222, 81, 5) none 0px;
  text-decoration-color: rgb(222, 81, 5);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(222, 81, 5);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(222, 81, 5) none 0px;
  text-decoration-color: rgb(222, 81, 5);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body dl {
  margin-bottom: 24px;
  margin-top: 24px;
}

html[saved-theme="dark"] body dt {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(222, 81, 5);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(251, 249, 249);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  padding-bottom: 11px;
  padding-top: 11px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body table {
  color: rgb(89, 83, 113);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  width: 180.766px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body th {
  background-color: rgb(251, 249, 249);
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  color: rgb(89, 83, 113);
  font-weight: 800;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(177, 180, 185);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(177, 180, 185);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(177, 180, 185);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(177, 180, 185);
  font-family: "Ubuntu Mono derivative Powerline", Menlo, Monaco;
  padding-bottom: 22px;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 22px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0.04);
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
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgba(0, 0, 0, 0.04);
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(89, 83, 113);
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgba(0, 0, 0, 0.09);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(177, 180, 185);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(177, 180, 185);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(177, 180, 185);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 249, 251);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 249, 251);
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
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(89, 83, 113);
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
  background-color: rgb(249, 249, 251);
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  color: rgb(89, 83, 113);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(249, 249, 251);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(89, 83, 113);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  outline: rgb(89, 83, 113) none 0px;
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(227, 238, 242, 0.5);
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(251, 249, 249);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(227, 238, 242, 0.5);
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(227, 238, 242, 0.5);
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 42px;
  border-bottom-right-radius: 42px;
  border-top-left-radius: 42px;
  border-top-right-radius: 42px;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(222, 81, 5);
}

html[saved-theme="dark"] body h1 {
  color: rgb(92, 99, 105);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(89, 83, 113);
  font-size: 38.832px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(92, 99, 105);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(89, 83, 113);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html[saved-theme="dark"] body h3 {
  color: rgb(92, 99, 105);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html[saved-theme="dark"] body h4 {
  color: rgb(92, 99, 105);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html[saved-theme="dark"] body h5 {
  color: rgb(92, 99, 105);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html[saved-theme="dark"] body h6 {
  color: rgb(92, 99, 105);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(177, 180, 185);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(177, 180, 185);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(89, 83, 113);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  color: rgb(177, 180, 185);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(251, 249, 249);
  border-bottom-color: rgb(251, 249, 249);
  border-left-color: rgb(251, 249, 249);
  border-right-color: rgb(251, 249, 249);
  border-top-color: rgb(251, 249, 249);
  border-top-width: 0px;
  color: rgb(177, 180, 185);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(177, 180, 185);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(89, 83, 113);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(177, 180, 185);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(177, 180, 185);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(177, 180, 185);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(177, 180, 185);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  color: rgb(177, 180, 185);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(177, 180, 185);
  stroke: rgb(177, 180, 185);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  color: rgb(177, 180, 185);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(177, 180, 185);
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: rgb(249, 249, 251);
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(251, 249, 249);
  border-color: rgb(89, 83, 113);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(251, 249, 249);
  border-color: rgb(177, 180, 185);
  color: rgb(89, 83, 113);
  font-weight: 800;
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  color: rgb(177, 180, 185);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  color: rgb(177, 180, 185);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(177, 180, 185);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(177, 180, 185);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(177, 180, 185);
}

html[saved-theme="dark"] body .note-properties-tags {
  border-radius: 42px;
  color: rgb(222, 81, 5);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(177, 180, 185);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(249, 249, 251);
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(251, 249, 249);
  border-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(251, 249, 249);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(89, 83, 113);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(251, 249, 249);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(222, 81, 5);
}

html[saved-theme="dark"] body abbr {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  color: rgb(177, 180, 185);
}

html[saved-theme="dark"] body kbd {
  background-color: rgba(0, 0, 0, 0.04);
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
  color: rgb(89, 83, 113);
  font-size: 21px;
  padding-bottom: 2.1px;
  padding-left: 5.25px;
  padding-right: 5.25px;
  padding-top: 2.1px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body sub {
  color: rgb(89, 83, 113);
  font-size: 16.8px;
  vertical-align: super;
}

html[saved-theme="dark"] body summary {
  color: rgb(89, 83, 113);
}

html[saved-theme="dark"] body sup {
  color: rgb(89, 83, 113);
  font-size: 16.8px;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(177, 180, 184);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(249, 249, 251);
}`,
  },
  light: {
    base: `:root:root {
  --active-title-border: rgba(0, 0, 0, 0.09);
  --background-accent: rgba(0, 0, 0, 0.04);
  --background-modifier-border: #b1b4b9;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3);
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: #3d0000;
  --background-modifier-error-hover: #470000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgb(249, 249, 251);
  --background-modifier-form-field-highlighted: rgb(249, 249, 251);
  --background-modifier-form-field-hover: rgb(249, 249, 251);
  --background-modifier-success: rgba(160, 232, 92, 0.08);
  --background-primary: rgb(249, 249, 251);
  --background-primary-alt: rgba(0, 0, 0, 0.04);
  --background-secondary: #fbf9f9;
  --background-secondary-alt: #fbf9f9;
  --bases-cards-background: rgb(249, 249, 251);
  --bases-cards-cover-background: rgba(0, 0, 0, 0.04);
  --bases-cards-shadow: 0 0 0 1px #b1b4b9;
  --bases-embed-border-color: #b1b4b9;
  --bases-group-heading-property-color: #b1b4b9;
  --bases-table-border-color: #b1b4b9;
  --bases-table-cell-background-active: rgb(249, 249, 251);
  --bases-table-cell-background-disabled: rgba(0, 0, 0, 0.04);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(0, 0, 0, 0.09);
  --bases-table-group-background: rgba(0, 0, 0, 0.04);
  --bases-table-header-background: rgb(249, 249, 251);
  --bases-table-header-color: #b1b4b9;
  --bases-table-summary-background: rgb(249, 249, 251);
  --blockquote-bg: rgb(249, 249, 251);
  --blockquote-border: #de5105;
  --blockquote-border-color: rgba(0, 0, 0, 0.09);
  --blur-background: color-mix(in srgb, rgb(249, 249, 251) 65%, transparent) linear-gradient(rgb(249, 249, 251), color-mix(in srgb, rgb(249, 249, 251) 65%, transparent));
  --border-color: #dbdee1;
  --bracket-color: #b1b4b8;
  --canvas-background: rgb(249, 249, 251);
  --canvas-card-label-color: #b1b4b9;
  --caret-color: #595371;
  --checkbox-border-color: #b1b4b9;
  --checkbox-border-color-hover: #b1b4b9;
  --checkbox-color: #b1b4b8;
  --checkbox-color-hover: rgba(227, 238, 242, 0.5);
  --checkbox-enabled: #de5105;
  --checkbox-marker-color: rgb(249, 249, 251);
  --checklist-done-color: #b1b4b9;
  --code-background: rgba(0, 0, 0, 0.04);
  --code-block: #b1b4b9;
  --code-border-color: #b1b4b9;
  --code-comment: #b1b4b9;
  --code-normal: #595371;
  --code-punctuation: #b1b4b9;
  --collapse-icon-color: #b1b4b9;
  --collapse-icon-color-collapsed: #de5105;
  --dark: var(--text-normal, #595371);
  --darkgray: var(--text-normal, #595371);
  --divider-color: #b1b4b9;
  --divider-color-hover: rgba(0, 0, 0, 0.09);
  --dropdown-background: rgb(249, 249, 251);
  --dropdown-background-hover: rgba(0, 0, 0, 0.02);
  --embed-block-shadow-hover: 0 0 0 1px #b1b4b9, inset 0 0 0 1px #b1b4b9;
  --embed-border-start: 2px solid rgba(0, 0, 0, 0.09);
  --file-header-background: rgb(249, 249, 251);
  --file-header-background-focused: rgb(249, 249, 251);
  --file-name-color: #de5105;
  --flair-background: rgb(249, 249, 251);
  --flair-color: #595371;
  --font-family-code: Ubuntu Mono derivative Powerline, Menlo, Monaco;
  --font-family-editor: Skolar PE, iA Writer Quattro S, Menlo, Avenir Next, Times New Roman;
  --font-family-mdpreview: Skolar PE, Gentium Plus, Alegreya, Source Sans Pro, Avenir Next, Times New Roman;
  --font-family-preview: Gentium Plus, Alegreya, Source Sans Pro, Palatino, Avenir Next, Times New Roman;
  --font-size-blockquote: 22px;
  --font-size-code: 22px;
  --font-size-footnote: 22px;
  --font-size-h1: 1.9em;
  --font-size-h2: 1.6em;
  --font-size-h3: 1.3em;
  --font-size-h4: 1.2em;
  --font-size-h5: 1.1em;
  --font-size-h6: 1em;
  --font-size-normal: 24px;
  --font-size-side-dock: 16px;
  --font-size-side-dock-title: 18px;
  --font-size-status-bar: 16px;
  --footnote-divider-color: #b1b4b9;
  --footnote-id-color: #b1b4b9;
  --footnote-id-color-no-occurrences: #b1b4b9;
  --graph-line-color: #dbdee1;
  --graph-line-on-hover: #b1b4b8;
  --graph-node: #b1b4b9;
  --graph-node-color: #b1b4b8;
  --graph-node-focused: #de5105;
  --graph-node-unresolved: #b1b4b9;
  --graph-note-name: #595371;
  --graph-text: #595371;
  --gray: var(--text-muted, #b1b4b9);
  --hashtag-color: #5c6369;
  --header-before-color: #b1b4b8;
  --header-before-size-h1: 0.5em;
  --header-before-size-h2: 0.5em;
  --header-before-size-h3: 0.5em;
  --header-before-size-h4: 0.5em;
  --header-before-size-h5: 0.5em;
  --header-before-size-h6: 0.5em;
  --heading-formatting: #b1b4b9;
  --highlight: var(--text-highlight-bg, rgba(227, 238, 242, 0.5));
  --hr-color: hsl(0, 0%, 39%);
  --icon-color: #b1b4b9;
  --icon-color-active: #de5105;
  --icon-color-focused: #595371;
  --icon-color-hover: #b1b4b9;
  --inline-code: #b1b4b9;
  --input-date-separator: #b1b4b9;
  --input-placeholder-color: #b1b4b9;
  --interactive-accent: rgba(0, 0, 0, 0.09);
  --interactive-accent-hover: rgba(227, 238, 242, 0.5);
  --interactive-accent-rgb: 72, 54, 153;
  --interactive-hover: rgba(0, 0, 0, 0.02);
  --interactive-normal: rgb(249, 249, 251);
  --interfa-color-icon: rgba(0, 0, 0, 0.03);
  --interface-color-action: #595371;
  --interface-color-background: #415358;
  --interface-color-background-alt: rgb(249, 249, 251);
  --interface-color-border: rgba(0, 0, 0, 0.03);
  --interface-color-cross: #fc3b44;
  --interface-color-foreground: #3e3e3e;
  --interface-color-foreground-alt: #de5105;
  --interface-color-pencil: #fec03e;
  --interface-color-pin: #595371;
  --interface-color-three-dots: #a0e85b;
  --light: var(--background-primary, rgb(249, 249, 251));
  --lightgray: var(--background-secondary, #fbf9f9);
  --line-height-footnote: 1.2em;
  --line-height-header-preview: 1em;
  --line-height-preview: 1.7em;
  --link-color: #de5105;
  --link-color-hover: #b1b4b9;
  --link-external-color: #de5105;
  --link-external-color-hover: #b1b4b9;
  --link-text: #de5105;
  --link-text-hover: #de5105;
  --link-unresolved-color: #de5105;
  --list-marker-color: #b1b4b9;
  --list-marker-color-collapsed: #de5105;
  --list-marker-color-hover: #b1b4b9;
  --menu-background: #fbf9f9;
  --metadata-border-color: #b1b4b9;
  --metadata-divider-color: #b1b4b9;
  --metadata-input-text-color: #595371;
  --metadata-label-text-color: #b1b4b9;
  --metadata-label-text-color-hover: #b1b4b9;
  --modal-background: rgb(249, 249, 251);
  --nav-collapse-icon-color: #b1b4b9;
  --nav-collapse-icon-color-collapsed: #b1b4b9;
  --nav-heading-color: #595371;
  --nav-heading-color-collapsed: #b1b4b9;
  --nav-heading-color-collapsed-hover: #b1b4b9;
  --nav-heading-color-hover: #595371;
  --nav-item-color: #b1b4b9;
  --nav-item-color-active: #595371;
  --nav-item-color-highlighted: #de5105;
  --nav-item-color-hover: #595371;
  --nav-item-color-selected: #595371;
  --nav-tag-color: #b1b4b9;
  --nav-tag-color-active: #b1b4b9;
  --nav-tag-color-hover: #b1b4b9;
  --pdf-background: rgb(249, 249, 251);
  --pdf-page-background: rgb(249, 249, 251);
  --pdf-sidebar-background: rgb(249, 249, 251);
  --pill-border-color: #b1b4b9;
  --pill-color: #b1b4b9;
  --pill-color-hover: #595371;
  --pill-color-remove: #b1b4b9;
  --pill-color-remove-hover: #de5105;
  --pre-code-bg: #ffffff;
  --prompt-background: rgb(249, 249, 251);
  --quick-switcher: rgba(227, 238, 242, 0.5);
  --raised-background: color-mix(in srgb, rgb(249, 249, 251) 65%, transparent) linear-gradient(rgb(249, 249, 251), color-mix(in srgb, rgb(249, 249, 251) 65%, transparent));
  --ribbon-background: #fbf9f9;
  --ribbon-background-collapsed: rgb(249, 249, 251);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.1);
  --scrollbar-bg: rgba(0, 0, 0, 0);
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.08);
  --search-clear-button-color: #b1b4b9;
  --search-icon-color: #b1b4b9;
  --search-result-background: rgb(249, 249, 251);
  --secondary: var(--text-accent, #de5105);
  --setting-group-heading-color: #595371;
  --setting-items-background: rgba(0, 0, 0, 0.04);
  --setting-items-border-color: #b1b4b9;
  --shiki-active-tab-border-color: #b1b4b9;
  --shiki-code-background: rgba(0, 0, 0, 0.04);
  --shiki-code-comment: #b1b4b9;
  --shiki-code-normal: #b1b4b9;
  --shiki-code-punctuation: #b1b4b9;
  --shiki-gutter-border-color: #b1b4b9;
  --shiki-gutter-text-color: #b1b4b9;
  --shiki-gutter-text-color-highlight: #b1b4b9;
  --shiki-highlight-neutral: #b1b4b9;
  --shiki-terminal-dots-color: #b1b4b9;
  --slider-track-background: #b1b4b9;
  --status-bar-background: #fbf9f9;
  --status-bar-border-color: #b1b4b9;
  --status-bar-text-color: #b1b4b9;
  --suggestion-background: rgb(249, 249, 251);
  --tab-background-active: rgb(249, 249, 251);
  --tab-container-background: #fbf9f9;
  --tab-outline-color: #b1b4b9;
  --tab-switcher-background: #fbf9f9;
  --tab-switcher-menubar-background: linear-gradient(to top, #fbf9f9, transparent);
  --tab-text-color: #b1b4b9;
  --tab-text-color-active: #b1b4b9;
  --tab-text-color-focused: #b1b4b9;
  --tab-text-color-focused-active: #b1b4b9;
  --tab-text-color-focused-active-current: #595371;
  --tab-text-color-focused-highlighted: #de5105;
  --table-add-button-border-color: #b1b4b9;
  --table-border-color: #b1b4b9;
  --table-drag-handle-background-active: rgba(0, 0, 0, 0.09);
  --table-drag-handle-color: #b1b4b9;
  --table-drag-handle-color-active: #595371;
  --table-header-border-color: #b1b4b9;
  --table-header-color: #595371;
  --table-selection-border-color: rgba(0, 0, 0, 0.09);
  --tag-bg: #b1b4b8;
  --tag-bg-hover: #b1b4b8;
  --tag-color: #de5105;
  --tag-color-hover: #de5105;
  --tag-text-color: rgb(249, 249, 251);
  --tag-text-hover: rgb(249, 249, 251);
  --tertiary: var(--text-accent-hover, #b1b4b9);
  --text-accent: #de5105;
  --text-accent-hover: #b1b4b9;
  --text-error: #800000;
  --text-error-hover: #990000;
  --text-faint: #b1b4b9;
  --text-highlight-bg: rgba(227, 238, 242, 0.5);
  --text-muted: #b1b4b9;
  --text-normal: #595371;
  --text-on-accent: #595371;
  --text-search-highlight-bg: rgba(150, 150, 242, 0.8);
  --text-selection: rgba(227, 238, 242, 0.5);
  --text-title-font-weight: 600;
  --text-title-h1: #5c6369;
  --text-title-h2: #5c6369;
  --text-title-h3: #5c6369;
  --text-title-h4: #5c6369;
  --text-title-h5: #5c6369;
  --text-title-h6: #5c6369;
  --textHighlight: var(--text-highlight-bg, rgba(227, 238, 242, 0.5));
  --titlebar-background: #fbf9f9;
  --titlebar-background-focused: #fbf9f9;
  --titlebar-border-color: #b1b4b9;
  --titlebar-text-color: #b1b4b9;
  --titlebar-text-color-focused: #595371;
  --ul-line-color: #777;
  --ul-line-specs: 0.9px solid;
  --vault-profile-color: #595371;
  --vault-profile-color-hover: #595371;
  --vim-cursor: #474949;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(251, 249, 249);
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(249, 249, 251);
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(251, 249, 249);
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(177, 180, 185);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(251, 249, 249);
  border-left-color: rgb(177, 180, 185);
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body html {
  --font-family-code: Ubuntu Mono derivative Powerline, Menlo, Monaco;
  --font-family-editor: Skolar PE, iA Writer Quattro S, Menlo, Avenir Next, Times New Roman;
  --font-family-mdpreview: Skolar PE, Gentium Plus, Alegreya, Source Sans Pro, Avenir Next, Times New Roman;
  --font-family-preview: Gentium Plus, Alegreya, Source Sans Pro, Palatino, Avenir Next, Times New Roman;
  --font-medium: 21px;
  --font-size-blockquote: 22px;
  --font-size-code: 22px;
  --font-size-normal: 24px;
  --font-size-side-dock: 16px;
  --font-size-side-dock-title: 18px;
  --font-size-status-bar: 16px;
  --font-small: 18px;
  --line-height-header-preview: 1em;
  --line-height-preview: 1.7em;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered > h1 {
  --font-medium: 500;
  --font-small: 0.933em;
  --font-weight: 700;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(177, 180, 184);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(177, 180, 184);
  border-left-width: 0px;
  border-right-color: rgb(177, 180, 184);
  border-right-width: 0px;
  border-top-color: rgb(177, 180, 184);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(177, 180, 184);
  content: "H1 ";
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  font-size: 22.8px;
  font-weight: 600;
  letter-spacing: -0.684px;
  line-height: 45.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(89, 83, 113);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
  outline: rgb(89, 83, 113) none 0px;
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(89, 83, 113);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
  outline: rgb(89, 83, 113) none 0px;
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(89, 83, 113);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
  outline: rgb(89, 83, 113) none 0px;
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(89, 83, 113);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
  outline: rgb(89, 83, 113) none 0px;
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(227, 238, 242, 0.5);
  color: rgb(89, 83, 113);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
  outline: rgb(89, 83, 113) none 0px;
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body del {
  color: rgb(89, 83, 113);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
  outline: rgb(89, 83, 113) none 0px;
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(222, 81, 5);
}

html[saved-theme="light"] body h2 {
  --font-medium: 500;
  --font-small: 0.933em;
  --font-weight: 680;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(177, 180, 184);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(177, 180, 184);
  border-left-width: 0px;
  border-right-color: rgb(177, 180, 184);
  border-right-width: 0px;
  border-top-color: rgb(177, 180, 184);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(177, 180, 184);
  content: "H2 ";
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  font-size: 19.2px;
  font-weight: 600;
  letter-spacing: -0.4224px;
  line-height: 38.4px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 5.76px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h3 {
  --font-medium: 500;
  --font-small: 0.933em;
  --font-weight: 660;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(177, 180, 184);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(177, 180, 184);
  border-left-width: 0px;
  border-right-color: rgb(177, 180, 184);
  border-right-width: 0px;
  border-top-color: rgb(177, 180, 184);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(177, 180, 184);
  content: "H3 ";
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  font-size: 15.6px;
  font-weight: 600;
  letter-spacing: -0.2496px;
  line-height: 31.2px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 11.232px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h4 {
  --font-medium: 500;
  --font-small: 0.933em;
  --font-weight: 640;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(177, 180, 184);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(177, 180, 184);
  border-left-width: 0px;
  border-right-color: rgb(177, 180, 184);
  border-right-width: 0px;
  border-top-color: rgb(177, 180, 184);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(177, 180, 184);
  content: "H4 ";
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  font-size: 14.4px;
  font-weight: 600;
  letter-spacing: -0.144px;
  line-height: 28.8px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 13.248px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h5 {
  --font-medium: 500;
  --font-small: 0.933em;
  --font-weight: 620;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(177, 180, 184);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(177, 180, 184);
  border-left-width: 0px;
  border-right-color: rgb(177, 180, 184);
  border-right-width: 0px;
  border-top-color: rgb(177, 180, 184);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(177, 180, 184);
  content: "H5 ";
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  font-size: 13.2px;
  font-weight: 600;
  letter-spacing: -0.0528px;
  line-height: 26.4px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 15.18px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h6 {
  --font-medium: 500;
  --font-small: 0.933em;
  --font-weight: 600;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(177, 180, 184);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(177, 180, 184);
  border-left-width: 0px;
  border-right-color: rgb(177, 180, 184);
  border-right-width: 0px;
  border-top-color: rgb(177, 180, 184);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(177, 180, 184);
  content: "H6 ";
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
  font-size: 12px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 17.04px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(177, 180, 185);
  border-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(177, 180, 185);
  border-color: rgb(177, 180, 185);
}

html[saved-theme="light"] body p {
  color: rgb(177, 180, 185);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
  outline: rgb(177, 180, 185) none 0px;
  text-decoration-color: rgb(177, 180, 185);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(222, 81, 5);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
  outline: rgb(222, 81, 5) none 0px;
  text-decoration-color: rgb(222, 81, 5);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(222, 81, 5);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
  outline: rgb(222, 81, 5) none 0px;
  text-decoration-color: rgb(222, 81, 5);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(222, 81, 5);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
  outline: rgb(222, 81, 5) none 0px;
  text-decoration-color: rgb(222, 81, 5);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body dl {
  margin-bottom: 24px;
  margin-top: 24px;
}

html[saved-theme="light"] body dt {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body ol > li {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body ul > li {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(222, 81, 5);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(251, 249, 249);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
  padding-bottom: 11px;
  padding-top: 11px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body table {
  color: rgb(89, 83, 113);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
  width: 180.766px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body th {
  background-color: rgb(251, 249, 249);
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  color: rgb(89, 83, 113);
  font-weight: 800;
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(177, 180, 185);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(177, 180, 185);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(177, 180, 185);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(177, 180, 185);
  font-family: "Ubuntu Mono derivative Powerline", Menlo, Monaco;
  padding-bottom: 22px;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 22px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0.04);
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
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body figcaption {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgba(0, 0, 0, 0.04);
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(89, 83, 113);
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgba(0, 0, 0, 0.09);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(177, 180, 185);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(177, 180, 185);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(177, 180, 185);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(89, 83, 113);
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 249, 251);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 249, 251);
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
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(89, 83, 113);
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
  background-color: rgb(249, 249, 251);
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  color: rgb(89, 83, 113);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(249, 249, 251);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(89, 83, 113);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
  outline: rgb(89, 83, 113) none 0px;
  text-decoration-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(227, 238, 242, 0.5);
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(251, 249, 249);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(227, 238, 242, 0.5);
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(227, 238, 242, 0.5);
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 42px;
  border-bottom-right-radius: 42px;
  border-top-left-radius: 42px;
  border-top-right-radius: 42px;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(222, 81, 5);
}

html[saved-theme="light"] body h1 {
  color: rgb(92, 99, 105);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(89, 83, 113);
  font-size: 38.832px;
}

html[saved-theme="light"] body h2 {
  color: rgb(92, 99, 105);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(89, 83, 113);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
}

html[saved-theme="light"] body h3 {
  color: rgb(92, 99, 105);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html[saved-theme="light"] body h4 {
  color: rgb(92, 99, 105);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html[saved-theme="light"] body h5 {
  color: rgb(92, 99, 105);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html[saved-theme="light"] body h6 {
  color: rgb(92, 99, 105);
  font-family: "Skolar PE", "Gentium Plus", Alegreya, "Source Sans Pro", "Avenir Next", "Times New Roman";
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(177, 180, 185);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(177, 180, 185);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(89, 83, 113);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  color: rgb(177, 180, 185);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(251, 249, 249);
  border-bottom-color: rgb(251, 249, 249);
  border-left-color: rgb(251, 249, 249);
  border-right-color: rgb(251, 249, 249);
  border-top-color: rgb(251, 249, 249);
  border-top-width: 0px;
  color: rgb(177, 180, 185);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(177, 180, 185);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(89, 83, 113);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(177, 180, 185);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(177, 180, 185);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(177, 180, 185);
  font-family: "Gentium Plus", Alegreya, "Source Sans Pro", Palatino, "Avenir Next", "Times New Roman";
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(177, 180, 185);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  color: rgb(177, 180, 185);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(177, 180, 185);
  stroke: rgb(177, 180, 185);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  color: rgb(177, 180, 185);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(177, 180, 185);
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .canvas-node-file {
  background-color: rgb(249, 249, 251);
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(249, 249, 251);
  border-color: rgb(89, 83, 113);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(251, 249, 249);
  border-color: rgb(177, 180, 185);
  color: rgb(89, 83, 113);
  font-weight: 800;
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  color: rgb(177, 180, 185);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  color: rgb(177, 180, 185);
  font-family: "Skolar PE", "iA Writer Quattro S", Menlo, "Avenir Next", "Times New Roman";
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(177, 180, 185);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(177, 180, 185);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(177, 180, 185);
}

html[saved-theme="light"] body .note-properties-tags {
  border-radius: 42px;
  color: rgb(222, 81, 5);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(177, 180, 185);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(249, 249, 251);
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(251, 249, 249);
  border-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(251, 249, 249);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(89, 83, 113);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(251, 249, 249);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(222, 81, 5);
}

html[saved-theme="light"] body abbr {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(177, 180, 185);
  border-left-color: rgb(177, 180, 185);
  border-right-color: rgb(177, 180, 185);
  border-top-color: rgb(177, 180, 185);
  color: rgb(177, 180, 185);
}

html[saved-theme="light"] body kbd {
  background-color: rgba(0, 0, 0, 0.04);
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
  color: rgb(89, 83, 113);
  font-size: 21px;
  padding-bottom: 2.1px;
  padding-left: 5.25px;
  padding-right: 5.25px;
  padding-top: 2.1px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(89, 83, 113);
  border-left-color: rgb(89, 83, 113);
  border-right-color: rgb(89, 83, 113);
  border-top-color: rgb(89, 83, 113);
}

html[saved-theme="light"] body sub {
  color: rgb(89, 83, 113);
  font-size: 16.8px;
  vertical-align: super;
}

html[saved-theme="light"] body summary {
  color: rgb(89, 83, 113);
}

html[saved-theme="light"] body sup {
  color: rgb(89, 83, 113);
  font-size: 16.8px;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(177, 180, 184);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(249, 249, 251);
}`,
  },
};
