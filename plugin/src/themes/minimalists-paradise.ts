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
  --anim-duration-fast: 150ms;
  --anim-duration-moderate: 300ms;
  --anim-duration-slow: 600ms;
  --anim-duration-superfast: 75ms;
  --anim-in: 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-motion: cubic-bezier(0.1, 0, 0.1, 1.25);
  --anim-out: 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-speed: 1;
  --background-default: #0c0c0c;
  --background-modifier-hover: color-mix(in srgb, #000000 70%, white 30%);
  --background-primary: #000000;
  --background-primary-alt: #000000;
  --background-secondary: #000000;
  --background-secondary-alt: #000000;
  --bases-cards-background: #000000;
  --bases-cards-cover-background: #000000;
  --bases-embed-border-radius: 16px;
  --bases-table-border-color: #59595984;
  --bases-table-cell-background-active: #000000;
  --bases-table-cell-background-disabled: #000000;
  --bases-table-group-background: #000000;
  --bases-table-header-background: #000000;
  --bases-table-header-background-hover: color-mix(in srgb, #000000 70%, white 30%);
  --bases-table-summary-background: #000000;
  --bases-table-summary-background-hover: color-mix(in srgb, #000000 70%, white 30%);
  --blockquote-background-color: #313435A6;
  --blockquote-border-color: #595959;
  --blockquote-radius: 16px;
  --blur-background: color-mix(in srgb, #313435A6 65%, transparent) linear-gradient(#313435A6, color-mix(in srgb, #313435A6 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.025);
  --blur-m: blur(8px) saturate(1.5) brightness(1.025);
  --blur-s: blur(4px) saturate(1.5) brightness(1.025);
  --blur-s-alt: blur(4px) saturate(1.5) brightness(0.75);
  --button-radius: 16px;
  --callout-border-radius: 16px;
  --callout-border-width: 1px;
  --callout-color: #313435A6;
  --canvas-background: #000000;
  --card-bg: #000000;
  --card-padding: 16px;
  --card-radius: 16px;
  --card-shadow: 0 3px 8px rgba(97, 97, 97, 0.15);
  --cards-gap: 16px;
  --caret-color: #ffffff;
  --checkbox-marker-color: #000000;
  --checkbox-radius: 16px;
  --citation-bg: rgb(138, 92, 245);
  --citation-radius: 8px;
  --clickable-icon-radius: 8px;
  --code-background: #0c0c0c;
  --code-bracket-background: color-mix(in srgb, #000000 70%, white 30%);
  --code-comment: #16486D;
  --code-function: #69EED7;
  --code-important: #4186B6;
  --code-keyword: #552B79;
  --code-normal: #eeeeee;
  --code-operator: #6852B3;
  --code-property: #4A6BDB;
  --code-punctuation: #558FC7;
  --code-radius: 16px;
  --code-string: #BE4AA0;
  --code-tag: #2D76E9;
  --code-value: #9795EE;
  --collapse-icon-color-collapsed: #59595984;
  --color-panel: #0c0c0c;
  --custom-color-accent-dark: #68686e;
  --default-radius: 16px;
  --divider-color: #59595984;
  --dropdown-background: #313435A6;
  --external-link-text-shadow: 1px 1px 2px rgb(138, 92, 245);
  --file-header-background: #000000;
  --file-header-background-focused: #000000;
  --file-title-color: #59595984;
  --flair-background: #313435A6;
  --footnote-input-background-active: color-mix(in srgb, #000000 70%, white 30%);
  --graph-bg: #0c0c0c;
  --graph-line: #59595984;
  --graph-node: rgb(138, 92, 245);
  --graph-node-focused: #59595984;
  --graph-node-tag: rgb(138, 92, 245);
  --header-height: 35px;
  --heading-spacing: 10px;
  --hr-color: #59595984;
  --ic-border: 0px;
  --ic-border-color: #59595984;
  --ic-horizontal-rule-color: #59595984;
  --ic-horizontal-rule-size: 1px;
  --ic-image-border: 0px;
  --ic-image-border-color: #59595984;
  --ic-image-round-corners: 0px;
  --ic-infobox-color: #313435A6;
  --ic-infobox-title-color: rgb(138, 92, 245);
  --ic-inside-padding: 24px;
  --ic-label-alignment: left;
  --ic-label-padding: 0.5rem;
  --ic-label-width: 80px;
  --ic-outside-padding: 20px;
  --ic-section-alignment: Center;
  --ic-section-background-color: rgb(138, 92, 245);
  --ic-section-border: 0px;
  --ic-section-border-color: #595959;
  --ic-section-corners: 0px;
  --ic-section-horizontal-padding: 0rem;
  --ic-section-size: 1rem;
  --ic-section-vertical-padding: 0rem;
  --ic-section-weight: 700;
  --ic-title-alignment: center;
  --ic-title-font: "Times New Roman";
  --ic-title-margin: 0rem;
  --ic-title-size: 1.2rem;
  --ic-title-tracking: 1rem;
  --ic-title-word-spacing: 0rem;
  --ic-width: 300px;
  --icon-color-active: #59595984;
  --inline-title-color: rgb(138, 92, 245);
  --input-radius: 16px;
  --interactive-normal: #313435A6;
  --link-color: #9FA0A4;
  --link-external-color: #9FA0A4;
  --link-unresolved-color: #9FA0A4;
  --list-marker-color: rgb(138, 92, 245);
  --list-marker-color-collapsed: #59595984;
  --menu-background: #000000;
  --menu-padding: 4px;
  --metadata-input-background-active: color-mix(in srgb, #000000 70%, white 30%);
  --metadata-label-background-active: color-mix(in srgb, #000000 70%, white 30%);
  --metadata-property-background-active: color-mix(in srgb, #000000 70%, white 30%);
  --mobile-card-radius: 32px;
  --mobile-sidebar-background: #000000;
  --mobile-sidebar-radius: 32px;
  --mobile-toolbar-height: auto;
  --modal-background: #000000;
  --modal-border-color: #59595984;
  --modal-radius: 16px;
  --nav-item-background-active: color-mix(in srgb, #000000 70%, white 30%);
  --nav-item-background-hover: color-mix(in srgb, #000000 70%, white 30%);
  --nav-item-color-highlighted: #59595984;
  --nn-theme-list-bg: #0c0c0c;
  --nn-theme-list-header-bg: #0c0c0c;
  --nn-theme-mobile-list-header-bg: #0c0c0c;
  --nn-theme-mobile-nav-bg: #0c0c0c;
  --nn-theme-mobile-toolbar-bg: #0c0c0c;
  --nn-theme-mobile-toolbar-button-icon-color: #b3b3b3;
  --nn-theme-nav-bg: #0c0c0c;
  --nn-theme-nav-header-bg: #0c0c0c;
  --nn-theme-navitem-border-radius: 16px;
  --p-spacing: 4px;
  --pdf-background: #000000;
  --pdf-page-background: #000000;
  --pdf-sidebar-background: #000000;
  --pill-color-remove-hover: #59595984;
  --prompt-background: #000000;
  --prompt-border-color: #59595984;
  --raised-background: color-mix(in srgb, #313435A6 65%, transparent) linear-gradient(#313435A6, color-mix(in srgb, #313435A6 65%, transparent));
  --raised-blur: blur(4px) saturate(1.5) brightness(1.025);
  --ribbon-background: #000000;
  --ribbon-background-collapsed: #000000;
  --scrollbar-bg: #ffffff10;
  --scrollbar-thumb-bg: #ffffff50;
  --search-result-background: #000000;
  --setting-items-background: #000000;
  --shadow-base: inset 1px 1px 2px rgba(255, 255, 255, 0.5), inset -1px -1px 2px rgba(255, 255, 255, 0.5), inset 0 4px 16px rgba(255, 255, 255, 0.025);
  --shadow-border: 0 0 1px 0 rgba(0, 0, 0, 0.4);
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(255, 255, 255, 0.04) 0px 2px 4px -2px;
  --shadow-xxs: inset 0 6px 50px rgba(255, 255, 255, 0.08), inset 1px 1px 2px rgba(255, 255, 255, 0.5), inset -1px -1px 2px rgba(255, 255, 255, 0.5), inset 0 4px 16px rgba(255, 255, 255, 0.025);
  --side-padding: 20px;
  --status-bar-background: #000000;
  --status-bar-border-color: #59595984;
  --suggestion-background: #000000;
  --tab-background-active: rgb(138, 92, 245);
  --tab-container-background: #000000;
  --tab-outline-color: #59595984;
  --tab-radius: 6.4px;
  --tab-size: 20px;
  --tab-stacked-header-width: 35px;
  --tab-switcher-background: #000000;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent);
  --tab-text-color-focused-highlighted: #59595984;
  --table-header-background: rgb(138, 92, 245);
  --tag-color: #59595984;
  --tag-color-hover: #59595984;
  --text-accent: #59595984;
  --text-color: #ffffff;
  --text-highlight-bg: rgb(138, 92, 245);
  --text-selection: #a5aab680;
  --titlebar-background: #000000;
  --titlebar-background-focused: #000000;
  --toolbar-option-width: auto;
  --traffic-lights-offset-x: 35px;
  --traffic-lights-offset-y: 35px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(12, 12, 12);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(12, 12, 12);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(128, 128, 128);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
}`,
    typography: `body .text-highlight {
  background-color: rgb(138, 92, 245);
}`,
    links: `body a.external, footer a {
  color: rgb(159, 160, 164);
  outline: rgb(159, 160, 164) none 0px;
  text-decoration: underline rgb(159, 160, 164);
  text-decoration-color: rgb(159, 160, 164);
  transition: opacity 0.15s ease-in-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(159, 160, 164);
  outline: rgb(159, 160, 164) none 0px;
  text-decoration: underline rgb(159, 160, 164);
  text-decoration-color: rgb(159, 160, 164);
  transition: opacity 0.15s ease-in-out;
}

body a.internal.broken {
  color: rgb(159, 160, 164);
  outline: rgb(159, 160, 164) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
  transition: opacity 0.15s ease-in-out;
}`,
    lists: `body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
}`,
    blockquotes: `body blockquote {
  background-color: rgba(49, 52, 53, 0.65);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body table {
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

body thead {
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

body tr {
  background-color: rgb(138, 92, 245);
  border-bottom-color: rgba(89, 89, 89, 0.518);
  border-left-color: rgba(89, 89, 89, 0.518);
  border-right-color: rgba(89, 89, 89, 0.518);
  border-top-color: rgba(89, 89, 89, 0.518);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(12, 12, 12);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(12, 12, 12);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body pre > code > [data-line] {
  border-left-color: rgb(105, 238, 215);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(105, 238, 215);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(105, 238, 215);
  border-left-color: rgb(105, 238, 215);
  border-right-color: rgb(105, 238, 215);
  border-top-color: rgb(105, 238, 215);
}

body pre > code, pre:has(> code) {
  background-color: rgb(12, 12, 12);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body pre:has(> code) {
  background-color: rgb(12, 12, 12);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(0, 0, 0);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    callouts: `body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
    search: `body .search > .search-button {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.3 0.3 0.3);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(89, 89, 89, 0.518);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(89, 89, 89, 0.518);
  border-right-color: rgba(89, 89, 89, 0.518);
  border-top-color: rgba(89, 89, 89, 0.518);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: color(srgb 0.3 0.3 0.3);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.3 0.3 0.3);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body a.internal.tag-link::before {
  color: rgba(89, 89, 89, 0.518);
}

body h2.page-title, h2.page-title a {
  color: rgb(138, 92, 245);
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(89, 89, 89, 0.518);
  text-decoration: rgba(89, 89, 89, 0.518);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(89, 89, 89, 0.518);
  text-decoration: rgba(89, 89, 89, 0.518);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(89, 89, 89, 0.518);
  text-decoration: rgba(89, 89, 89, 0.518);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: color(srgb 0.3 0.3 0.3);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    footer: `body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-width: 0px;
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(89, 89, 89, 0.518);
  text-decoration: rgba(89, 89, 89, 0.518);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(89, 89, 89, 0.518);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgba(89, 89, 89, 0.518);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgba(89, 89, 89, 0.518);
  text-decoration: rgba(89, 89, 89, 0.518);
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}`,
    misc: `body .metadata {
  margin-bottom: 0px;
}

body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

body input[type=text] {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

body kbd {
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
  --anim-duration-fast: 150ms;
  --anim-duration-moderate: 300ms;
  --anim-duration-slow: 600ms;
  --anim-duration-superfast: 75ms;
  --anim-in: 150ms 75ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-motion: cubic-bezier(0.1, 0, 0.1, 1.25);
  --anim-out: 300ms 600ms cubic-bezier(0, 0.55, 0.45, 1);
  --anim-speed: 1;
  --background-default: #A5AAB6;
  --background-modifier-hover: color-mix(in srgb, #9096A4 70%, black 30%);
  --background-primary: #9096A4;
  --background-primary-alt: #9096A4;
  --background-secondary: #9096A4;
  --background-secondary-alt: #9096A4;
  --bases-cards-background: #9096A4;
  --bases-cards-cover-background: #9096A4;
  --bases-embed-border-radius: 16px;
  --bases-table-border-color: #25252586;
  --bases-table-cell-background-active: #9096A4;
  --bases-table-cell-background-disabled: #9096A4;
  --bases-table-cell-shadow-focus: 0 0 0 2px #a5aab680;
  --bases-table-group-background: #9096A4;
  --bases-table-header-background: #9096A4;
  --bases-table-header-background-hover: color-mix(in srgb, #9096A4 70%, black 30%);
  --bases-table-summary-background: #9096A4;
  --bases-table-summary-background-hover: color-mix(in srgb, #9096A4 70%, black 30%);
  --blockquote-background-color: #9096A4;
  --blockquote-border-color: #252525c3;
  --blockquote-radius: 16px;
  --blur-background: color-mix(in srgb, #9096A4 65%, transparent) linear-gradient(#9096A4, color-mix(in srgb, #9096A4 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.025);
  --blur-m: blur(8px) saturate(1.5) brightness(1.025);
  --blur-s: blur(4px) saturate(1.5) brightness(1.025);
  --blur-s-alt: blur(4px) saturate(1.5) brightness(0.75);
  --button-radius: 16px;
  --callout-border-radius: 16px;
  --callout-border-width: 1px;
  --callout-color: #9096A4;
  --canvas-background: #9096A4;
  --card-bg: #9096A4;
  --card-padding: 16px;
  --card-radius: 16px;
  --card-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 10px 0px;
  --cards-gap: 16px;
  --caret-color: #000000;
  --checkbox-color: #a5aab680;
  --checkbox-color-hover: #a5aab640;
  --checkbox-marker-color: #9096A4;
  --checkbox-radius: 16px;
  --citation-bg: rgb(138, 92, 245);
  --citation-radius: 8px;
  --clickable-icon-radius: 8px;
  --code-background: #A5AAB6;
  --code-bracket-background: color-mix(in srgb, #9096A4 70%, black 30%);
  --code-comment: #16486D;
  --code-function: #69EED7;
  --code-important: #4186B6;
  --code-keyword: #552B79;
  --code-normal: #eeeeee;
  --code-operator: #6852B3;
  --code-property: #4A6BDB;
  --code-punctuation: #558FC7;
  --code-radius: 16px;
  --code-string: #BE4AA0;
  --code-tag: #2D76E9;
  --code-value: #9795EE;
  --collapse-icon-color-collapsed: #25252586;
  --color-panel: #a5aab6;
  --custom-color-accent-light: #788091;
  --default-radius: 16px;
  --divider-color: #25252586;
  --divider-color-hover: #a5aab680;
  --dropdown-background: #9096A4;
  --embed-border-start: 2px solid #a5aab680;
  --external-link-text-shadow: 1px 1px 2px rgb(138, 92, 245);
  --file-header-background: #9096A4;
  --file-header-background-focused: #9096A4;
  --file-title-color: #25252586;
  --flair-background: #9096A4;
  --footnote-input-background-active: color-mix(in srgb, #9096A4 70%, black 30%);
  --graph-bg: #a5aab6;
  --graph-line: #25252586;
  --graph-node: rgb(138, 92, 245);
  --graph-node-focused: #25252586;
  --graph-node-tag: rgb(138, 92, 245);
  --header-height: 35px;
  --heading-spacing: 10px;
  --hr-color: #25252586;
  --ic-border: 0px;
  --ic-border-color: #25252586;
  --ic-horizontal-rule-color: #25252586;
  --ic-horizontal-rule-size: 1px;
  --ic-image-border: 0px;
  --ic-image-border-color: #25252586;
  --ic-image-round-corners: 0px;
  --ic-infobox-color: #9096A4;
  --ic-infobox-title-color: rgb(138, 92, 245);
  --ic-inside-padding: 24px;
  --ic-label-alignment: left;
  --ic-label-padding: 0.5rem;
  --ic-label-width: 80px;
  --ic-outside-padding: 20px;
  --ic-section-alignment: Center;
  --ic-section-background-color: rgb(138, 92, 245);
  --ic-section-border: 0px;
  --ic-section-border-color: #252525c3;
  --ic-section-corners: 0px;
  --ic-section-horizontal-padding: 0rem;
  --ic-section-size: 1rem;
  --ic-section-vertical-padding: 0rem;
  --ic-section-weight: 700;
  --ic-title-alignment: center;
  --ic-title-font: "Times New Roman";
  --ic-title-margin: 0rem;
  --ic-title-size: 1.2rem;
  --ic-title-tracking: 1rem;
  --ic-title-word-spacing: 0rem;
  --ic-width: 300px;
  --icon-color-active: #25252586;
  --inline-title-color: rgb(138, 92, 245);
  --input-radius: 16px;
  --interactive-accent: #a5aab680;
  --interactive-accent-hover: #a5aab640;
  --interactive-normal: #9096A4;
  --link-color: #5F6369;
  --link-external-color: #5F6369;
  --link-unresolved-color: #5F6369;
  --list-marker-color: rgb(138, 92, 245);
  --list-marker-color-collapsed: #25252586;
  --menu-background: #9096A4;
  --menu-padding: 4px;
  --metadata-input-background-active: color-mix(in srgb, #9096A4 70%, black 30%);
  --metadata-label-background-active: color-mix(in srgb, #9096A4 70%, black 30%);
  --metadata-property-background-active: color-mix(in srgb, #9096A4 70%, black 30%);
  --mobile-card-radius: 32px;
  --mobile-sidebar-background: #9096A4;
  --mobile-sidebar-radius: 32px;
  --mobile-toolbar-height: auto;
  --modal-background: #9096A4;
  --modal-border-color: #25252586;
  --modal-radius: 16px;
  --nav-item-background-active: color-mix(in srgb, #9096A4 70%, black 30%);
  --nav-item-background-hover: color-mix(in srgb, #9096A4 70%, black 30%);
  --nav-item-color-highlighted: #25252586;
  --nn-theme-list-bg: #A5AAB6;
  --nn-theme-list-header-bg: #A5AAB6;
  --nn-theme-mobile-list-header-bg: #A5AAB6;
  --nn-theme-mobile-nav-bg: #A5AAB6;
  --nn-theme-mobile-toolbar-bg: #A5AAB6;
  --nn-theme-mobile-toolbar-button-icon-color: #5c5c5c;
  --nn-theme-nav-bg: #A5AAB6;
  --nn-theme-nav-header-bg: #A5AAB6;
  --nn-theme-navitem-border-radius: 16px;
  --p-spacing: 4px;
  --pdf-background: #9096A4;
  --pdf-page-background: #9096A4;
  --pdf-sidebar-background: #9096A4;
  --pill-color-remove-hover: #25252586;
  --prompt-background: #9096A4;
  --prompt-border-color: #25252586;
  --raised-background: color-mix(in srgb, #9096A4 65%, transparent) linear-gradient(#9096A4, color-mix(in srgb, #9096A4 65%, transparent));
  --raised-blur: blur(4px) saturate(1.5) brightness(1.025);
  --ribbon-background: #9096A4;
  --ribbon-background-collapsed: #9096A4;
  --scrollbar-bg: #00000010;
  --scrollbar-thumb-bg: #00000050;
  --search-result-background: #9096A4;
  --setting-items-background: #9096A4;
  --shadow-base: inset 1px 1px 2px rgba(255, 255, 255, 0.5), inset -1px -1px 2px rgba(255, 255, 255, 0.5), inset 0 4px 16px rgba(255, 255, 255, 0.025);
  --shadow-border: 0 0 1px 0 rgba(0, 0, 0, 0.4);
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(0, 0, 0, 0.04) 0px 2px 4px -2px;
  --shadow-xxs: inset 0 6px 50px rgba(255, 255, 255, 0.08), inset 1px 1px 2px rgba(255, 255, 255, 0.5), inset -1px -1px 2px rgba(255, 255, 255, 0.5), inset 0 4px 16px rgba(255, 255, 255, 0.025);
  --side-padding: 20px;
  --status-bar-background: #9096A4;
  --status-bar-border-color: #25252586;
  --suggestion-background: #9096A4;
  --tab-background-active: rgb(138, 92, 245);
  --tab-container-background: #9096A4;
  --tab-outline-color: #25252586;
  --tab-radius: 6.4px;
  --tab-size: 20px;
  --tab-stacked-header-width: 35px;
  --tab-switcher-background: #9096A4;
  --tab-switcher-menubar-background: linear-gradient(to top, #9096A4, transparent);
  --tab-text-color-focused-highlighted: #25252586;
  --table-drag-handle-background-active: #a5aab680;
  --table-header-background: rgb(138, 92, 245);
  --table-selection-border-color: #a5aab680;
  --tag-color: #25252586;
  --tag-color-hover: #25252586;
  --text-accent: #25252586;
  --text-color: #000000;
  --text-highlight-bg: rgb(138, 92, 245);
  --text-selection: #a5aab680;
  --titlebar-background: #9096A4;
  --titlebar-background-focused: #9096A4;
  --toolbar-option-width: auto;
  --traffic-lights-offset-x: 35px;
  --traffic-lights-offset-y: 35px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(165, 170, 182);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(165, 170, 182);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(128, 128, 128);
}

body div#quartz-root {
  background-color: rgb(144, 150, 164);
}`,
    typography: `body .text-highlight {
  background-color: rgb(138, 92, 245);
}`,
    links: `body a.external, footer a {
  color: rgb(95, 99, 105);
  outline: rgb(95, 99, 105) none 0px;
  text-decoration: underline rgb(95, 99, 105);
  text-decoration-color: rgb(95, 99, 105);
  transition: opacity 0.15s ease-in-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(95, 99, 105);
  outline: rgb(95, 99, 105) none 0px;
  text-decoration: underline rgb(95, 99, 105);
  text-decoration-color: rgb(95, 99, 105);
  transition: opacity 0.15s ease-in-out;
}

body a.internal.broken {
  color: rgb(95, 99, 105);
  outline: rgb(95, 99, 105) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
  transition: opacity 0.15s ease-in-out;
}`,
    lists: `body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(144, 150, 164);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body table {
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

body thead {
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

body tr {
  background-color: rgb(138, 92, 245);
  border-bottom-color: rgba(37, 37, 37, 0.525);
  border-left-color: rgba(37, 37, 37, 0.525);
  border-right-color: rgba(37, 37, 37, 0.525);
  border-top-color: rgba(37, 37, 37, 0.525);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(165, 170, 182);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(165, 170, 182);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body pre > code > [data-line] {
  border-left-color: rgb(105, 238, 215);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(105, 238, 215);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(105, 238, 215);
  border-left-color: rgb(105, 238, 215);
  border-right-color: rgb(105, 238, 215);
  border-top-color: rgb(105, 238, 215);
}

body pre > code, pre:has(> code) {
  background-color: rgb(165, 170, 182);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body pre:has(> code) {
  background-color: rgb(165, 170, 182);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(144, 150, 164);
}

body .transclude {
  border-left-color: rgba(165, 170, 182, 0.5);
}

body .transclude-inner {
  border-left-color: rgba(165, 170, 182, 0.5);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    callouts: `body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
    search: `body .search > .search-button {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.395294 0.411765 0.450196);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(37, 37, 37, 0.525);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-left-color: rgba(37, 37, 37, 0.525);
  border-right-color: rgba(37, 37, 37, 0.525);
  border-top-color: rgba(37, 37, 37, 0.525);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(144, 150, 164);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: color(srgb 0.395294 0.411765 0.450196);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.395294 0.411765 0.450196);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body a.internal.tag-link::before {
  color: rgba(37, 37, 37, 0.525);
}

body h2.page-title, h2.page-title a {
  color: rgb(138, 92, 245);
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

body ::-webkit-scrollbar {
  background: rgb(144, 150, 164) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(144, 150, 164);
}

body ::-webkit-scrollbar-corner {
  background: rgb(144, 150, 164) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(144, 150, 164);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(144, 150, 164) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(144, 150, 164);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(144, 150, 164) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(144, 150, 164);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(144, 150, 164) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(144, 150, 164);
}

body ::-webkit-scrollbar-track {
  background: rgb(144, 150, 164) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(144, 150, 164);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(37, 37, 37, 0.525);
  text-decoration: rgba(37, 37, 37, 0.525);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(37, 37, 37, 0.525);
  text-decoration: rgba(37, 37, 37, 0.525);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(37, 37, 37, 0.525);
  text-decoration: rgba(37, 37, 37, 0.525);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: color(srgb 0.395294 0.411765 0.450196);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    footer: `body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(92, 92, 92);
  border-left-color: rgb(92, 92, 92);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
  border-top-width: 0px;
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(37, 37, 37, 0.525);
  text-decoration: rgba(37, 37, 37, 0.525);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(37, 37, 37, 0.525);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgba(37, 37, 37, 0.525);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgba(37, 37, 37, 0.525);
  text-decoration: rgba(37, 37, 37, 0.525);
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}`,
    misc: `body .metadata {
  margin-bottom: 0px;
}

body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

body input[type=text] {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

body kbd {
  background-color: rgb(165, 170, 182);
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}`,
  },
};
