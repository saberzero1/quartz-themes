import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "minimalists-paradise",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["fira-code"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --anim-duration-fast: 150ms !important;
  --anim-duration-moderate: 300ms !important;
  --anim-duration-slow: 600ms !important;
  --anim-duration-superfast: 75ms !important;
  --anim-in: 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1) !important;
  --anim-motion: cubic-bezier(0.1, 0, 0.1, 1.25) !important;
  --anim-out: 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1) !important;
  --anim-speed: 1 !important;
  --background-default: #0c0c0c !important;
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1) !important;
  --background-modifier-hover: color-mix(in srgb, #000000 70%, white 30%) !important;
  --background-primary: #000000 !important;
  --background-primary-alt: #000000 !important;
  --background-secondary: #000000 !important;
  --background-secondary-alt: #000000 !important;
  --bases-cards-background: #000000 !important;
  --bases-cards-cover-background: #000000 !important;
  --bases-embed-border-radius: 16px !important;
  --bases-table-border-color: #59595984 !important;
  --bases-table-cell-background-active: #000000 !important;
  --bases-table-cell-background-disabled: #000000 !important;
  --bases-table-cell-background-selected: hsla(258, 88%, 66%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --bases-table-group-background: #000000 !important;
  --bases-table-header-background: #000000 !important;
  --bases-table-header-background-hover: color-mix(in srgb, #000000 70%, white 30%) !important;
  --bases-table-summary-background: #000000 !important;
  --bases-table-summary-background-hover: color-mix(in srgb, #000000 70%, white 30%) !important;
  --blockquote-background-color: #313435A6 !important;
  --blockquote-border-color: #595959 !important;
  --blockquote-radius: 16px !important;
  --blur-background: color-mix(in srgb, #313435A6 65%, transparent) linear-gradient(#313435A6, color-mix(in srgb, #313435A6 65%, transparent)) !important;
  --blur-l: blur(16px) saturate(1.5) brightness(1.025) !important;
  --blur-m: blur(8px) saturate(1.5) brightness(1.025) !important;
  --blur-s: blur(4px) saturate(1.5) brightness(1.025) !important;
  --blur-s-alt: blur(4px) saturate(1.5) brightness(0.75) !important;
  --bold-weight: 600 !important;
  --button-radius: 16px !important;
  --callout-border-radius: 16px;
  --callout-border-width: 1px;
  --callout-color: #313435A6;
  --callout-title-weight: 600;
  --canvas-background: #000000 !important;
  --card-bg: #000000 !important;
  --card-padding: 16px !important;
  --card-radius: 16px !important;
  --card-shadow: 0 3px 8px rgba(97, 97, 97, 0.15) !important;
  --cards-gap: 16px !important;
  --caret-color: #ffffff !important;
  --checkbox-color: hsl(258, 88%, 66%) !important;
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --checkbox-marker-color: #000000 !important;
  --checkbox-radius: 16px !important;
  --citation-bg: hsl(258, 88%, 66%) !important;
  --citation-radius: 8px !important;
  --clickable-icon-radius: 8px !important;
  --code-background: #0c0c0c !important;
  --code-bracket-background: color-mix(in srgb, #000000 70%, white 30%) !important;
  --code-comment: #16486D !important;
  --code-function: #69EED7 !important;
  --code-important: #4186B6 !important;
  --code-keyword: #552B79 !important;
  --code-normal: #eeeeee !important;
  --code-operator: #6852B3 !important;
  --code-property: #4A6BDB !important;
  --code-punctuation: #558FC7 !important;
  --code-radius: 16px !important;
  --code-string: #BE4AA0 !important;
  --code-tag: #2D76E9 !important;
  --code-value: #9795EE !important;
  --collapse-icon-color-collapsed: #59595984 !important;
  --color-accent: hsl(258, 88%, 66%) !important;
  --color-accent-1: hsl(255, 89.76%, 75.9%) !important;
  --color-accent-2: hsl(253, 92.4%, 85.14%) !important;
  --color-panel: #0c0c0c !important;
  --custom-color-accent-dark: #68686e !important;
  --default-radius: 16px !important;
  --divider-color: #59595984 !important;
  --divider-color-hover: hsl(258, 88%, 66%) !important;
  --dropdown-background: #313435A6 !important;
  --embed-border-start: 2px solid hsl(258, 88%, 66%) !important;
  --external-link-text-shadow: 1px 1px 2px hsl(258, 88%, 66%) !important;
  --file-header-background: #000000 !important;
  --file-header-background-focused: #000000 !important;
  --file-title-color: #59595984 !important;
  --flair-background: #313435A6 !important;
  --footnote-input-background-active: color-mix(in srgb, #000000 70%, white 30%) !important;
  --graph-bg: #0c0c0c !important;
  --graph-line: #59595984 !important;
  --graph-node: hsl(258, 88%, 66%) !important;
  --graph-node-focused: #59595984 !important;
  --graph-node-tag: hsl(258, 88%, 66%) !important;
  --header-height: 35px !important;
  --heading-spacing: 10px !important;
  --highlight: hsl(258, 88%, 66%) !important;
  --hr-color: #59595984 !important;
  --ic-border: 0px !important;
  --ic-border-color: #59595984 !important;
  --ic-horizontal-rule-color: #59595984 !important;
  --ic-horizontal-rule-size: 1px !important;
  --ic-image-border: 0px !important;
  --ic-image-border-color: #59595984 !important;
  --ic-image-round-corners: 0px !important;
  --ic-infobox-color: #313435A6 !important;
  --ic-infobox-title-color: hsl(258, 88%, 66%) !important;
  --ic-inside-padding: 24px !important;
  --ic-label-alignment: left !important;
  --ic-label-padding: 0.5rem !important;
  --ic-label-width: 80px !important;
  --ic-outside-padding: 20px !important;
  --ic-section-alignment: Center !important;
  --ic-section-background-color: hsl(258, 88%, 66%) !important;
  --ic-section-border: 0px !important;
  --ic-section-border-color: #595959 !important;
  --ic-section-corners: 0px !important;
  --ic-section-horizontal-padding: 0rem !important;
  --ic-section-size: 1rem !important;
  --ic-section-vertical-padding: 0rem !important;
  --ic-section-weight: 700 !important;
  --ic-title-alignment: center !important;
  --ic-title-font: "Times New Roman" !important;
  --ic-title-margin: 0rem !important;
  --ic-title-size: 1.2rem !important;
  --ic-title-tracking: 1rem !important;
  --ic-title-word-spacing: 0rem !important;
  --ic-width: 300px !important;
  --icon-color-active: #59595984 !important;
  --inline-title-color: hsl(258, 88%, 66%) !important;
  --input-radius: 16px !important;
  --interactive-accent: hsl(258, 88%, 66%) !important;
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --interactive-normal: #313435A6 !important;
  --light: #000000 !important;
  --lightgray: #000000 !important;
  --link-color: #9FA0A4 !important;
  --link-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --link-external-color: #9FA0A4 !important;
  --link-external-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --link-unresolved-color: #9FA0A4 !important;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: hsl(258, 88%, 66%) !important;
  --list-marker-color-collapsed: #59595984 !important;
  --menu-background: #000000 !important;
  --menu-padding: 4px !important;
  --metadata-input-background-active: color-mix(in srgb, #000000 70%, white 30%) !important;
  --metadata-input-height: 28px !important;
  --metadata-label-background-active: color-mix(in srgb, #000000 70%, white 30%) !important;
  --metadata-property-background-active: color-mix(in srgb, #000000 70%, white 30%) !important;
  --mobile-card-radius: 32px !important;
  --mobile-sidebar-background: #000000 !important;
  --mobile-sidebar-radius: 32px !important;
  --mobile-toolbar-height: auto !important;
  --modal-background: #000000 !important;
  --modal-border-color: #59595984 !important;
  --modal-radius: 16px !important;
  --nav-item-background-active: color-mix(in srgb, #000000 70%, white 30%) !important;
  --nav-item-background-hover: color-mix(in srgb, #000000 70%, white 30%) !important;
  --nav-item-background-selected: hsla(258, 88%, 66%, 0.15) !important;
  --nav-item-color-highlighted: #59595984 !important;
  --nn-theme-list-bg: #0c0c0c !important;
  --nn-theme-list-header-bg: #0c0c0c !important;
  --nn-theme-mobile-list-header-bg: #0c0c0c !important;
  --nn-theme-mobile-nav-bg: #0c0c0c !important;
  --nn-theme-mobile-toolbar-bg: #0c0c0c !important;
  --nn-theme-mobile-toolbar-button-icon-color: #b3b3b3 !important;
  --nn-theme-nav-bg: #0c0c0c !important;
  --nn-theme-nav-header-bg: #0c0c0c !important;
  --nn-theme-navitem-border-radius: 16px !important;
  --p-spacing: 4px !important;
  --pdf-background: #000000 !important;
  --pdf-page-background: #000000 !important;
  --pdf-sidebar-background: #000000 !important;
  --pill-color-remove-hover: #59595984 !important;
  --prompt-background: #000000 !important;
  --prompt-border-color: #59595984 !important;
  --raised-background: color-mix(in srgb, #313435A6 65%, transparent) linear-gradient(#313435A6, color-mix(in srgb, #313435A6 65%, transparent)) !important;
  --raised-blur: blur(4px) saturate(1.5) brightness(1.025) !important;
  --ribbon-background: #000000 !important;
  --ribbon-background-collapsed: #000000 !important;
  --scrollbar-bg: #ffffff10 !important;
  --scrollbar-thumb-bg: #ffffff50 !important;
  --search-result-background: #000000 !important;
  --secondary: #59595984 !important;
  --setting-items-background: #000000 !important;
  --shadow-base: inset 1px 1px 2px rgba(255, 255, 255, 0.5), inset -1px -1px 2px rgba(255, 255, 255, 0.5), inset 0 4px 16px rgba(255, 255, 255, 0.025) !important;
  --shadow-border: 0 0 1px 0 rgba(0, 0, 0, 0.4) !important;
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(255, 255, 255, 0.04) 0px 2px 4px -2px !important;
  --shadow-xxs: inset 0 6px 50px rgba(255, 255, 255, 0.08), inset 1px 1px 2px rgba(255, 255, 255, 0.5), inset -1px -1px 2px rgba(255, 255, 255, 0.5), inset 0 4px 16px rgba(255, 255, 255, 0.025) !important;
  --side-padding: 20px !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --status-bar-background: #000000 !important;
  --status-bar-border-color: #59595984 !important;
  --suggestion-background: #000000 !important;
  --tab-background-active: hsl(258, 88%, 66%) !important;
  --tab-container-background: #000000 !important;
  --tab-outline-color: #59595984 !important;
  --tab-radius: 6.4px !important;
  --tab-size: 20px !important;
  --tab-stacked-header-width: 35px !important;
  --tab-switcher-background: #000000 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --tab-text-color-focused-highlighted: #59595984 !important;
  --table-drag-handle-background-active: hsl(258, 88%, 66%) !important;
  --table-header-background: hsl(258, 88%, 66%) !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(258, 88%, 66%, 0.1) !important;
  --table-selection-border-color: hsl(258, 88%, 66%) !important;
  --tag-background: hsla(258, 88%, 66%, 0.1) !important;
  --tag-background-hover: hsla(258, 88%, 66%, 0.2) !important;
  --tag-border-color: hsla(258, 88%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15) !important;
  --tag-color: #59595984 !important;
  --tag-color-hover: #59595984 !important;
  --tertiary: hsl(253, 92.4%, 85.14%) !important;
  --text-accent: #59595984 !important;
  --text-accent-hover: hsl(253, 92.4%, 85.14%) !important;
  --text-color: #ffffff !important;
  --text-highlight-bg: hsl(258, 88%, 66%) !important;
  --text-selection: #a5aab680 !important;
  --textHighlight: hsl(258, 88%, 66%) !important;
  --titlebar-background: #000000 !important;
  --titlebar-background-focused: #000000 !important;
  --toolbar-option-width: auto !important;
  --traffic-lights-offset-x: 35px !important;
  --traffic-lights-offset-y: 35px !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(12, 12, 12);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(12, 12, 12);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(128, 128, 128);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(0, 0, 0);
}`,
    typography: `html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(138, 92, 245);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(159, 160, 164);
  outline: rgb(159, 160, 164) none 0px;
  text-decoration: underline rgb(159, 160, 164);
  text-decoration-color: rgb(159, 160, 164);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(159, 160, 164);
  outline: rgb(159, 160, 164) none 0px;
  text-decoration: underline rgb(159, 160, 164);
  text-decoration-color: rgb(159, 160, 164);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(159, 160, 164);
  outline: rgb(159, 160, 164) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
  transition: opacity 0.15s ease-in-out;
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: rgba(49, 52, 53, 0.65);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="dark"] body table {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 1px;
  margin-top: 4px;
  width: 228.219px;
}

html[saved-theme="dark"] body thead {
  background-color: rgb(138, 92, 245);
  border-bottom-color: rgba(89, 89, 89, 0.518);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(89, 89, 89, 0.518);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(89, 89, 89, 0.518);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(89, 89, 89, 0.518);
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(138, 92, 245);
  border-bottom-color: rgba(89, 89, 89, 0.518);
  border-left-color: rgba(89, 89, 89, 0.518);
  border-right-color: rgba(89, 89, 89, 0.518);
  border-top-color: rgba(89, 89, 89, 0.518);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(12, 12, 12);
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(12, 12, 12);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(12, 12, 12);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(105, 238, 215);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(105, 238, 215);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(105, 238, 215);
  border-left-color: rgb(105, 238, 215);
  border-right-color: rgb(105, 238, 215);
  border-top-color: rgb(105, 238, 215);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(12, 12, 12);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(12, 12, 12);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(0, 0, 0);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(89, 89, 89, 0.518);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(89, 89, 89, 0.518);
  border-right-color: rgba(89, 89, 89, 0.518);
  border-top-color: rgba(89, 89, 89, 0.518);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: color(srgb 0.3 0.3 0.3);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(89, 89, 89, 0.518);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(89, 89, 89, 0.518);
  border-right-color: rgba(89, 89, 89, 0.518);
  border-top-color: rgba(89, 89, 89, 0.518);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: color(srgb 0.3 0.3 0.3);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: color(srgb 0.3 0.3 0.3);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgba(89, 89, 89, 0.518);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(89, 89, 89, 0.518);
  text-decoration: rgba(89, 89, 89, 0.518);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(89, 89, 89, 0.518);
  text-decoration: rgba(89, 89, 89, 0.518);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-width: 0px;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(89, 89, 89, 0.518);
  text-decoration: rgba(89, 89, 89, 0.518);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(89, 89, 89, 0.518);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgba(89, 89, 89, 0.518);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgba(89, 89, 89, 0.518);
  text-decoration: rgba(89, 89, 89, 0.518);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}`,
    misc: `html[saved-theme="dark"] body .metadata {
  margin-bottom: 0px;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(12, 12, 12);
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}`,
  },
  light: {
    base: `:root:root {
  --anim-duration-fast: 150ms !important;
  --anim-duration-moderate: 300ms !important;
  --anim-duration-slow: 600ms !important;
  --anim-duration-superfast: 75ms !important;
  --anim-in: 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1) !important;
  --anim-motion: cubic-bezier(0.1, 0, 0.1, 1.25) !important;
  --anim-out: 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1) !important;
  --anim-speed: 1 !important;
  --background-default: #A5AAB6 !important;
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1) !important;
  --background-modifier-hover: color-mix(in srgb, #9096A4 70%, black 30%) !important;
  --background-primary: #9096A4 !important;
  --background-primary-alt: #9096A4 !important;
  --background-secondary: #9096A4 !important;
  --background-secondary-alt: #9096A4 !important;
  --bases-cards-background: #9096A4 !important;
  --bases-cards-cover-background: #9096A4 !important;
  --bases-embed-border-radius: 16px !important;
  --bases-table-border-color: #25252586 !important;
  --bases-table-cell-background-active: #9096A4 !important;
  --bases-table-cell-background-disabled: #9096A4 !important;
  --bases-table-cell-background-selected: hsla(258, 88%, 66%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #a5aab680 !important;
  --bases-table-group-background: #9096A4 !important;
  --bases-table-header-background: #9096A4 !important;
  --bases-table-header-background-hover: color-mix(in srgb, #9096A4 70%, black 30%) !important;
  --bases-table-summary-background: #9096A4 !important;
  --bases-table-summary-background-hover: color-mix(in srgb, #9096A4 70%, black 30%) !important;
  --blockquote-background-color: #9096A4 !important;
  --blockquote-border-color: #252525c3 !important;
  --blockquote-radius: 16px !important;
  --blur-background: color-mix(in srgb, #9096A4 65%, transparent) linear-gradient(#9096A4, color-mix(in srgb, #9096A4 65%, transparent)) !important;
  --blur-l: blur(16px) saturate(1.5) brightness(1.025) !important;
  --blur-m: blur(8px) saturate(1.5) brightness(1.025) !important;
  --blur-s: blur(4px) saturate(1.5) brightness(1.025) !important;
  --blur-s-alt: blur(4px) saturate(1.5) brightness(0.75) !important;
  --bold-weight: 600 !important;
  --button-radius: 16px !important;
  --callout-border-radius: 16px;
  --callout-border-width: 1px;
  --callout-color: #9096A4;
  --callout-title-weight: 600;
  --canvas-background: #9096A4 !important;
  --card-bg: #9096A4 !important;
  --card-padding: 16px !important;
  --card-radius: 16px !important;
  --card-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 10px 0px !important;
  --cards-gap: 16px !important;
  --caret-color: #000000 !important;
  --checkbox-color: #a5aab680 !important;
  --checkbox-color-hover: #a5aab640 !important;
  --checkbox-marker-color: #9096A4 !important;
  --checkbox-radius: 16px !important;
  --citation-bg: hsl(258, 88%, 66%) !important;
  --citation-radius: 8px !important;
  --clickable-icon-radius: 8px !important;
  --code-background: #A5AAB6 !important;
  --code-bracket-background: color-mix(in srgb, #9096A4 70%, black 30%) !important;
  --code-comment: #16486D !important;
  --code-function: #69EED7 !important;
  --code-important: #4186B6 !important;
  --code-keyword: #552B79 !important;
  --code-normal: #eeeeee !important;
  --code-operator: #6852B3 !important;
  --code-property: #4A6BDB !important;
  --code-punctuation: #558FC7 !important;
  --code-radius: 16px !important;
  --code-string: #BE4AA0 !important;
  --code-tag: #2D76E9 !important;
  --code-value: #9795EE !important;
  --collapse-icon-color-collapsed: #25252586 !important;
  --color-accent: hsl(258, 88%, 66%) !important;
  --color-accent-1: hsl(257, 88.88%, 70.95%) !important;
  --color-accent-2: hsl(255, 89.76%, 75.9%) !important;
  --color-panel: #a5aab6 !important;
  --custom-color-accent-light: #788091 !important;
  --default-radius: 16px !important;
  --divider-color: #25252586 !important;
  --divider-color-hover: #a5aab680 !important;
  --dropdown-background: #9096A4 !important;
  --embed-border-start: 2px solid #a5aab680 !important;
  --external-link-text-shadow: 1px 1px 2px hsl(258, 88%, 66%) !important;
  --file-header-background: #9096A4 !important;
  --file-header-background-focused: #9096A4 !important;
  --file-title-color: #25252586 !important;
  --flair-background: #9096A4 !important;
  --footnote-input-background-active: color-mix(in srgb, #9096A4 70%, black 30%) !important;
  --graph-bg: #a5aab6 !important;
  --graph-line: #25252586 !important;
  --graph-node: hsl(258, 88%, 66%) !important;
  --graph-node-focused: #25252586 !important;
  --graph-node-tag: hsl(258, 88%, 66%) !important;
  --header-height: 35px !important;
  --heading-spacing: 10px !important;
  --highlight: hsl(258, 88%, 66%) !important;
  --hr-color: #25252586 !important;
  --ic-border: 0px !important;
  --ic-border-color: #25252586 !important;
  --ic-horizontal-rule-color: #25252586 !important;
  --ic-horizontal-rule-size: 1px !important;
  --ic-image-border: 0px !important;
  --ic-image-border-color: #25252586 !important;
  --ic-image-round-corners: 0px !important;
  --ic-infobox-color: #9096A4 !important;
  --ic-infobox-title-color: hsl(258, 88%, 66%) !important;
  --ic-inside-padding: 24px !important;
  --ic-label-alignment: left !important;
  --ic-label-padding: 0.5rem !important;
  --ic-label-width: 80px !important;
  --ic-outside-padding: 20px !important;
  --ic-section-alignment: Center !important;
  --ic-section-background-color: hsl(258, 88%, 66%) !important;
  --ic-section-border: 0px !important;
  --ic-section-border-color: #252525c3 !important;
  --ic-section-corners: 0px !important;
  --ic-section-horizontal-padding: 0rem !important;
  --ic-section-size: 1rem !important;
  --ic-section-vertical-padding: 0rem !important;
  --ic-section-weight: 700 !important;
  --ic-title-alignment: center !important;
  --ic-title-font: "Times New Roman" !important;
  --ic-title-margin: 0rem !important;
  --ic-title-size: 1.2rem !important;
  --ic-title-tracking: 1rem !important;
  --ic-title-word-spacing: 0rem !important;
  --ic-width: 300px !important;
  --icon-color-active: #25252586 !important;
  --inline-title-color: hsl(258, 88%, 66%) !important;
  --input-radius: 16px !important;
  --interactive-accent: #a5aab680 !important;
  --interactive-accent-hover: #a5aab640 !important;
  --interactive-normal: #9096A4 !important;
  --light: #9096A4 !important;
  --lightgray: #9096A4 !important;
  --link-color: #5F6369 !important;
  --link-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --link-external-color: #5F6369 !important;
  --link-external-color-hover: hsl(255, 89.76%, 75.9%) !important;
  --link-unresolved-color: #5F6369 !important;
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: hsl(258, 88%, 66%) !important;
  --list-marker-color-collapsed: #25252586 !important;
  --menu-background: #9096A4 !important;
  --menu-padding: 4px !important;
  --metadata-input-background-active: color-mix(in srgb, #9096A4 70%, black 30%) !important;
  --metadata-input-height: 28px !important;
  --metadata-label-background-active: color-mix(in srgb, #9096A4 70%, black 30%) !important;
  --metadata-property-background-active: color-mix(in srgb, #9096A4 70%, black 30%) !important;
  --mobile-card-radius: 32px !important;
  --mobile-sidebar-background: #9096A4 !important;
  --mobile-sidebar-radius: 32px !important;
  --mobile-toolbar-height: auto !important;
  --modal-background: #9096A4 !important;
  --modal-border-color: #25252586 !important;
  --modal-radius: 16px !important;
  --nav-item-background-active: color-mix(in srgb, #9096A4 70%, black 30%) !important;
  --nav-item-background-hover: color-mix(in srgb, #9096A4 70%, black 30%) !important;
  --nav-item-background-selected: hsla(258, 88%, 66%, 0.15) !important;
  --nav-item-color-highlighted: #25252586 !important;
  --nn-theme-list-bg: #A5AAB6 !important;
  --nn-theme-list-header-bg: #A5AAB6 !important;
  --nn-theme-mobile-list-header-bg: #A5AAB6 !important;
  --nn-theme-mobile-nav-bg: #A5AAB6 !important;
  --nn-theme-mobile-toolbar-bg: #A5AAB6 !important;
  --nn-theme-mobile-toolbar-button-icon-color: #5c5c5c !important;
  --nn-theme-nav-bg: #A5AAB6 !important;
  --nn-theme-nav-header-bg: #A5AAB6 !important;
  --nn-theme-navitem-border-radius: 16px !important;
  --p-spacing: 4px !important;
  --pdf-background: #9096A4 !important;
  --pdf-page-background: #9096A4 !important;
  --pdf-sidebar-background: #9096A4 !important;
  --pill-color-remove-hover: #25252586 !important;
  --prompt-background: #9096A4 !important;
  --prompt-border-color: #25252586 !important;
  --raised-background: color-mix(in srgb, #9096A4 65%, transparent) linear-gradient(#9096A4, color-mix(in srgb, #9096A4 65%, transparent)) !important;
  --raised-blur: blur(4px) saturate(1.5) brightness(1.025) !important;
  --ribbon-background: #9096A4 !important;
  --ribbon-background-collapsed: #9096A4 !important;
  --scrollbar-bg: #00000010 !important;
  --scrollbar-thumb-bg: #00000050 !important;
  --search-result-background: #9096A4 !important;
  --secondary: #25252586 !important;
  --setting-items-background: #9096A4 !important;
  --shadow-base: inset 1px 1px 2px rgba(255, 255, 255, 0.5), inset -1px -1px 2px rgba(255, 255, 255, 0.5), inset 0 4px 16px rgba(255, 255, 255, 0.025) !important;
  --shadow-border: 0 0 1px 0 rgba(0, 0, 0, 0.4) !important;
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(0, 0, 0, 0.04) 0px 2px 4px -2px !important;
  --shadow-xxs: inset 0 6px 50px rgba(255, 255, 255, 0.08), inset 1px 1px 2px rgba(255, 255, 255, 0.5), inset -1px -1px 2px rgba(255, 255, 255, 0.5), inset 0 4px 16px rgba(255, 255, 255, 0.025) !important;
  --side-padding: 20px !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --status-bar-background: #9096A4 !important;
  --status-bar-border-color: #25252586 !important;
  --suggestion-background: #9096A4 !important;
  --tab-background-active: hsl(258, 88%, 66%) !important;
  --tab-container-background: #9096A4 !important;
  --tab-outline-color: #25252586 !important;
  --tab-radius: 6.4px !important;
  --tab-size: 20px !important;
  --tab-stacked-header-width: 35px !important;
  --tab-switcher-background: #9096A4 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #9096A4, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --tab-text-color-focused-highlighted: #25252586 !important;
  --table-drag-handle-background-active: #a5aab680 !important;
  --table-header-background: hsl(258, 88%, 66%) !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(258, 88%, 66%, 0.1) !important;
  --table-selection-border-color: #a5aab680 !important;
  --tag-background: hsla(258, 88%, 66%, 0.1) !important;
  --tag-background-hover: hsla(258, 88%, 66%, 0.2) !important;
  --tag-border-color: hsla(258, 88%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15) !important;
  --tag-color: #25252586 !important;
  --tag-color-hover: #25252586 !important;
  --tertiary: hsl(255, 89.76%, 75.9%) !important;
  --text-accent: #25252586 !important;
  --text-accent-hover: hsl(255, 89.76%, 75.9%) !important;
  --text-color: #000000 !important;
  --text-highlight-bg: hsl(258, 88%, 66%) !important;
  --text-selection: #a5aab680 !important;
  --textHighlight: hsl(258, 88%, 66%) !important;
  --titlebar-background: #9096A4 !important;
  --titlebar-background-focused: #9096A4 !important;
  --toolbar-option-width: auto !important;
  --traffic-lights-offset-x: 35px !important;
  --traffic-lights-offset-y: 35px !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(165, 170, 182);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(165, 170, 182);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(128, 128, 128);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(144, 150, 164);
}`,
    typography: `html[saved-theme="light"] body .text-highlight {
  background-color: rgb(138, 92, 245);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(95, 99, 105);
  outline: rgb(95, 99, 105) none 0px;
  text-decoration: underline rgb(95, 99, 105);
  text-decoration-color: rgb(95, 99, 105);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(95, 99, 105);
  outline: rgb(95, 99, 105) none 0px;
  text-decoration: underline rgb(95, 99, 105);
  text-decoration-color: rgb(95, 99, 105);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(95, 99, 105);
  outline: rgb(95, 99, 105) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
  transition: opacity 0.15s ease-in-out;
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: rgb(144, 150, 164);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="light"] body table {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 1px;
  margin-top: 4px;
  width: 228.219px;
}

html[saved-theme="light"] body thead {
  background-color: rgb(138, 92, 245);
  border-bottom-color: rgba(37, 37, 37, 0.525);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(37, 37, 37, 0.525);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(37, 37, 37, 0.525);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(37, 37, 37, 0.525);
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body tr {
  background-color: rgb(138, 92, 245);
  border-bottom-color: rgba(37, 37, 37, 0.525);
  border-left-color: rgba(37, 37, 37, 0.525);
  border-right-color: rgba(37, 37, 37, 0.525);
  border-top-color: rgba(37, 37, 37, 0.525);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(165, 170, 182);
  border-bottom-color: rgb(238, 238, 238);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(238, 238, 238);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(165, 170, 182);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(165, 170, 182);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(105, 238, 215);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(105, 238, 215);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(105, 238, 215);
  border-left-color: rgb(105, 238, 215);
  border-right-color: rgb(105, 238, 215);
  border-top-color: rgb(105, 238, 215);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(165, 170, 182);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(165, 170, 182);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(144, 150, 164);
}

html[saved-theme="light"] body .transclude {
  border-left-color: rgba(165, 170, 182, 0.5);
}

html[saved-theme="light"] body .transclude-inner {
  border-left-color: rgba(165, 170, 182, 0.5);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(37, 37, 37, 0.525);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(37, 37, 37, 0.525);
  border-right-color: rgba(37, 37, 37, 0.525);
  border-top-color: rgba(37, 37, 37, 0.525);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: color(srgb 0.395294 0.411765 0.450196);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(37, 37, 37, 0.525);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(37, 37, 37, 0.525);
  border-right-color: rgba(37, 37, 37, 0.525);
  border-top-color: rgba(37, 37, 37, 0.525);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(144, 150, 164);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: color(srgb 0.395294 0.411765 0.450196);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: color(srgb 0.395294 0.411765 0.450196);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgba(37, 37, 37, 0.525);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(144, 150, 164) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(144, 150, 164);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(144, 150, 164) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(144, 150, 164);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(144, 150, 164) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(144, 150, 164);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(144, 150, 164) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(144, 150, 164);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(144, 150, 164) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(144, 150, 164);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(144, 150, 164) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(144, 150, 164);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(37, 37, 37, 0.525);
  text-decoration: rgba(37, 37, 37, 0.525);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(37, 37, 37, 0.525);
  text-decoration: rgba(37, 37, 37, 0.525);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(92, 92, 92);
  border-left-color: rgb(92, 92, 92);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
  border-top-width: 0px;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(37, 37, 37, 0.525);
  text-decoration: rgba(37, 37, 37, 0.525);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(37, 37, 37, 0.525);
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgba(37, 37, 37, 0.525);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgba(37, 37, 37, 0.525);
  text-decoration: rgba(37, 37, 37, 0.525);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}`,
    misc: `html[saved-theme="light"] body .metadata {
  margin-bottom: 0px;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(165, 170, 182);
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}`,
  },
};
