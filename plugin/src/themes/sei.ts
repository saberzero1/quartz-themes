import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "sei", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: rgb(255 255 255 / 5%);
  --background-modifier-border-focus: rgba(138, 92, 245, 0.5);
  --background-modifier-cover: rgb(0 0 0 / 30%);
  --background-modifier-error: rgb(0, 0, 0);
  --background-modifier-error-hover: rgb(0, 0, 0);
  --background-modifier-error-rgb: 243, 139, 168;
  --background-modifier-hover: rgba(255, 255, 255, 0.05);
  --background-modifier-message: rgb(0, 0, 0);
  --background-modifier-success: #A6E3A1;
  --background-modifier-success-rgb: 166, 227, 161;
  --background-primary: rgb(0, 0, 0);
  --background-primary-alt: rgb(0, 0, 0);
  --background-secondary: rgb(0, 0, 0);
  --background-secondary-alt: rgb(0, 0, 0);
  --background-table-rows: rgb(0, 0, 0);
  --bases-cards-background: rgb(0, 0, 0);
  --bases-cards-cover-background: rgb(0, 0, 0);
  --bases-cards-radius: 6px;
  --bases-cards-shadow: 0 0 0 1px rgb(255 255 255 / 5%);
  --bases-embed-border-color: rgb(255 255 255 / 5%);
  --bases-table-border-color: rgb(255 255 255 / 5%);
  --bases-table-cell-background-active: rgb(0, 0, 0);
  --bases-table-cell-background-disabled: rgb(0, 0, 0);
  --bases-table-cell-shadow-active: 0 0 0 2px rgba(138, 92, 245, 0.5);
  --bases-table-group-background: rgb(0, 0, 0);
  --bases-table-header-background: rgb(0, 0, 0);
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.05);
  --bases-table-summary-background: rgb(0, 0, 0);
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.05);
  --blockquote-background-color: rgb(0, 0, 0);
  --blockquote-border-color: #666666;
  --blur-background: color-mix(in srgb, #3f3f3f 65%, transparent) linear-gradient(#3f3f3f, color-mix(in srgb, #3f3f3f 65%, transparent));
  --button-radius: 6px;
  --callout-bug: 243, 139, 168;
  --callout-default: 116, 199, 236;
  --callout-error: 243, 139, 168;
  --callout-example: 169, 180, 250;
  --callout-fail: 243, 139, 168;
  --callout-important: 148, 226, 213;
  --callout-info: 116, 199, 236;
  --callout-padding: 16px;
  --callout-question: 250, 179, 135;
  --callout-success: 166, 227, 161;
  --callout-summary: 148, 226, 213;
  --callout-tip: 148, 226, 213;
  --callout-todo: 116, 199, 236;
  --callout-warning: 250, 179, 135;
  --canvas-background: rgb(0, 0, 0);
  --canvas-color-1: 243, 139, 168;
  --canvas-color-2: 250, 179, 135;
  --canvas-color-3: 249, 226, 175;
  --canvas-color-4: 166, 227, 161;
  --canvas-color-5: 148, 226, 213;
  --canvas-color-6: 169, 180, 250;
  --caret-color: rgb(166, 139, 249);
  --checkbox-marker-color: rgb(0, 0, 0);
  --checkbox-size: 14px;
  --code-background: rgb(0, 0, 0);
  --code-border-color: rgb(255 255 255 / 5%);
  --code-bracket-background: rgba(255, 255, 255, 0.05);
  --code-comment: #5C6370;
  --code-function: #E5C07B;
  --code-important: #D19A66;
  --code-keyword: #E06C75;
  --code-normal: #ABB2BF;
  --code-operator: #BE5046;
  --code-property: #56B6C2;
  --code-punctuation: #ABB2BF;
  --code-string: #98C379;
  --code-tag: #61AFEF;
  --code-value: #C678DD;
  --color-blue: #74C7EC;
  --color-blue-rgb: 116, 199, 236;
  --color-cyan: #94E2D5;
  --color-cyan-rgb: 148, 226, 213;
  --color-green: #A6E3A1;
  --color-green-rgb: 166, 227, 161;
  --color-orange: #FAB387;
  --color-orange-rgb: 250, 179, 135;
  --color-pink: #F5C2E7;
  --color-pink-rgb: 245, 194, 231;
  --color-purple: #a9b4fa;
  --color-purple-rgb: 169, 180, 250;
  --color-red: #F38BA8;
  --color-red-rgb: 243, 139, 168;
  --color-yellow: #F9E2AF;
  --color-yellow-rgb: 249, 226, 175;
  --dialog-width: 500px;
  --divider-color: rgb(255 255 255 / 5%);
  --divider-color-hover: #dadada;
  --dropdown-background: #3f3f3f;
  --dropdown-background-size: 16px;
  --dropdown-padding: 4px 16px 4px 8px;
  --embed-block-shadow-hover: 0 0 0 1px rgb(255 255 255 / 5%), inset 0 0 0 1px rgb(255 255 255 / 5%);
  --embed-border-start: none;
  --file-header-background: rgb(0, 0, 0);
  --file-header-background-focused: rgb(0, 0, 0);
  --file-line-width: 768px;
  --flair-background: #3f3f3f;
  --footnote-divider-color: rgb(255 255 255 / 5%);
  --footnote-input-background-active: rgba(255, 255, 255, 0.05);
  --footnote-line-height: 1.6;
  --graph-node-attachment: #F9E2AF;
  --graph-node-tag: #A6E3A1;
  --h1-color: rgb(166, 227, 161);
  --h1-size: 1.802em;
  --h2-color: rgb(148, 226, 213);
  --h2-size: 1.602em;
  --h2-weight: 600;
  --h3-color: rgb(137, 220, 235);
  --h3-size: 1.424em;
  --h3-weight: 600;
  --h4-color: rgb(116, 199, 236);
  --h4-size: 1.266em;
  --h4-weight: 600;
  --h5-color: rgb(135, 176, 249);
  --h5-line-height: 1.6;
  --h5-size: 1.125em;
  --h5-weight: 600;
  --h6-color: rgb(135, 176, 249);
  --h6-line-height: 1.6;
  --header-height: 44px;
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(255 255 255 / 5%);
  --icon-xl: 24px;
  --inline-title-color: rgb(166, 227, 161);
  --inline-title-size: 1.802em;
  --input-radius: 6px;
  --input-shadow: 0px 0px 0px 1px rgb(0 0 0 / 10%), 0 0.5px 0 0 rgb(255 255 255 / 10%) inset;
  --interactive-normal: #3f3f3f;
  --labeled-nav-top-margin: 44px;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height-normal: 1.6;
  --link-decoration: none;
  --link-external-decoration: none;
  --list-spacing: 0.1em;
  --menu-background: rgb(0, 0, 0);
  --menu-radius: 6px;
  --metadata-border-color: rgb(255 255 255 / 5%);
  --metadata-divider-color: rgb(255 255 255 / 5%);
  --metadata-input-background-active: rgba(255, 255, 255, 0.05);
  --metadata-label-background-active: rgba(255, 255, 255, 0.05);
  --metadata-padding: 0;
  --metadata-property-background-active: rgba(255, 255, 255, 0.05);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgba(138, 92, 245, 0.5);
  --modal-background: rgb(0, 0, 0);
  --modal-border-color: rgb(255 255 255 / 10%);
  --modal-radius: 10px;
  --nav-indentation-guide-color: rgba(255, 255, 255, 0.08);
  --nav-item-background-active: rgba(255, 255, 255, 0.05);
  --nav-item-background-hover: rgba(255, 255, 255, 0.05);
  --nav-item-color-active: #b3b3b3;
  --nav-item-color-hover: #b3b3b3;
  --nav-item-color-selected: #b3b3b3;
  --nav-item-padding: 5px 8px 5px 24px;
  --nav-item-parent-padding: 5px 8px 5px 24px;
  --pdf-background: rgb(0, 0, 0);
  --pdf-page-background: rgb(0, 0, 0);
  --pdf-shadow: 0 0 0 1px rgb(255 255 255 / 5%);
  --pdf-sidebar-background: rgb(0, 0, 0);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(255 255 255 / 5%);
  --pill-border-color: rgb(255 255 255 / 5%);
  --prompt-background: rgb(0, 0, 0);
  --prompt-border-color: rgb(255 255 255 / 10%);
  --radius-l: 10px;
  --radius-m: 6px;
  --raised-background: color-mix(in srgb, #3f3f3f 65%, transparent) linear-gradient(#3f3f3f, color-mix(in srgb, #3f3f3f 65%, transparent));
  --ribbon-background: transparent;
  --ribbon-background-collapsed: transparent;
  --ribbon-padding: 4px 8px;
  --ribbon-width: 56px;
  --scrollbar-radius: 10px;
  --search-icon-size: 16px;
  --search-result-background: rgb(0, 0, 0);
  --setting-items-background: rgb(0, 0, 0);
  --setting-items-border-color: rgb(255 255 255 / 5%);
  --setting-items-radius: 10px;
  --slider-thumb-border-width: 4px;
  --slider-track-background: #555555;
  --slider-track-height: 4px;
  --status-bar-background: rgb(0, 0, 0);
  --status-bar-border-color: rgb(255 255 255 / 5%);
  --status-bar-radius: 6px 0 0 0;
  --status-bar-text-color: rgb(from #b3b3b3 r g b / 80%);
  --suggestion-background: rgb(0, 0, 0);
  --sync-avatar-color-1: #F38BA8;
  --sync-avatar-color-2: #FAB387;
  --sync-avatar-color-3: #F9E2AF;
  --sync-avatar-color-4: #A6E3A1;
  --sync-avatar-color-5: #94E2D5;
  --sync-avatar-color-6: #74C7EC;
  --sync-avatar-color-7: #a9b4fa;
  --sync-avatar-color-8: #F5C2E7;
  --tab-background-active: rgb(0, 0, 0);
  --tab-container-background: transparent;
  --tab-divider-color: transparent;
  --tab-max-width: 200px;
  --tab-outline-color: rgb(255 255 255 / 5%);
  --tab-outline-width: 0;
  --tab-radius-active: 4px;
  --tab-stacked-header-width: 44px;
  --tab-switcher-background: rgb(0, 0, 0);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(0, 0, 0), transparent);
  --table-add-button-border-color: rgb(255 255 255 / 5%);
  --table-border-color: rgb(255 255 255 / 5%);
  --table-column-first-border-width: 0;
  --table-column-last-border-width: 0;
  --table-header-border-color: rgb(255 255 255 / 5%);
  --table-header-border-width: 0;
  --table-row-last-border-width: 0;
  --tag-border-width: 1px;
  --tag-padding-x: 8px;
  --tag-padding-y: 2px;
  --tag-size: 0.8em;
  --text-error: #F38BA8;
  --text-highlight-bg: rgba(250, 179, 135, 0.25);
  --text-success: #A6E3A1;
  --text-warning: #FAB387;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: transparent;
  --titlebar-background-focused: transparent;
  --titlebar-border-color: rgb(255 255 255 / 5%);
  --toggle-border-width: 4px;
  --toggle-s-border-width: 4px;
  --toggle-s-thumb-height: 12px;
  --toggle-s-thumb-width: 12px;
  --toggle-s-width: 40px;
  --toggle-thumb-height: 12px;
  --toggle-thumb-width: 12px;
  --traffic-lights-offset-x: 44px;
  --traffic-lights-offset-y: 44px;
  --view-header-height: 40px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
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
  background-color: rgb(37, 38, 39);
}`,
    typography: `body .text-highlight {
  background-color: rgba(250, 179, 135, 0.25);
  color: rgb(250, 179, 135);
  outline: rgb(250, 179, 135) none 0px;
  text-decoration: rgb(250, 179, 135);
  text-decoration-color: rgb(250, 179, 135);
}`,
    links: `body a.external, footer a {
  text-decoration: rgb(166, 138, 249);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  text-decoration: rgb(166, 138, 249);
}

body a.internal.broken {
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body ol.overflow {
  background-color: rgb(37, 38, 39);
}

body ul.overflow {
  background-color: rgb(37, 38, 39);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(32, 33, 34);
  padding-bottom: 5px;
  padding-top: 5px;
}`,
    tables: `body table {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 712px;
}

body tbody {
  background-color: rgb(32, 33, 34);
}

body td {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgba(255, 255, 255, 0.05);
  padding-bottom: 8px;
  padding-top: 8px;
}

body th {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-width: 0px;
  padding-bottom: 8px;
  padding-top: 8px;
}

body thead {
  background-color: rgb(32, 33, 34);
}`,
    code: `body code {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(32, 33, 34);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(32, 33, 34);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}

body pre > code > [data-line] {
  border-left-color: rgb(229, 192, 123);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(229, 192, 123);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(229, 192, 123);
  border-left-color: rgb(229, 192, 123);
  border-right-color: rgb(229, 192, 123);
  border-top-color: rgb(229, 192, 123);
}

body pre > code, pre:has(> code) {
  background-color: rgb(32, 33, 34);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}

body pre:has(> code) {
  background-color: rgb(32, 33, 34);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}`,
    images: `body img {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(32, 33, 34);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .transclude {
  background-color: rgb(32, 33, 34);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .transclude-inner {
  background-color: rgb(32, 33, 34);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    checkboxes: `body input[type=checkbox] {
  margin-left: -21px;
  width: 14px;
}

body li.task-list-item[data-task='-'] {
  color: rgb(179, 179, 179);
  text-decoration: line-through rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(116, 199, 236);
  border-left-color: rgb(116, 199, 236);
  border-right-color: rgb(116, 199, 236);
  border-top-color: rgb(116, 199, 236);
  gap: 8px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 148, 226, 213;
  background-color: rgba(148, 226, 213, 0.15);
  border-bottom-color: rgba(148, 226, 213, 0.25);
  border-left-color: rgba(148, 226, 213, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(148, 226, 213, 0.25);
  border-top-color: rgba(148, 226, 213, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 243, 139, 168;
  background-color: rgba(243, 139, 168, 0.15);
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-left-color: rgba(243, 139, 168, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(243, 139, 168, 0.25);
  border-top-color: rgba(243, 139, 168, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 243, 139, 168;
  background-color: rgba(243, 139, 168, 0.15);
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-left-color: rgba(243, 139, 168, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(243, 139, 168, 0.25);
  border-top-color: rgba(243, 139, 168, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 169, 180, 250;
  background-color: rgba(169, 180, 250, 0.15);
  border-bottom-color: rgba(169, 180, 250, 0.25);
  border-left-color: rgba(169, 180, 250, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(169, 180, 250, 0.25);
  border-top-color: rgba(169, 180, 250, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 243, 139, 168;
  background-color: rgba(243, 139, 168, 0.15);
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-left-color: rgba(243, 139, 168, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(243, 139, 168, 0.25);
  border-top-color: rgba(243, 139, 168, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 116, 199, 236;
  background-color: rgba(116, 199, 236, 0.15);
  border-bottom-color: rgba(116, 199, 236, 0.25);
  border-left-color: rgba(116, 199, 236, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(116, 199, 236, 0.25);
  border-top-color: rgba(116, 199, 236, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 116, 199, 236;
  background-color: rgba(116, 199, 236, 0.15);
  border-bottom-color: rgba(116, 199, 236, 0.25);
  border-left-color: rgba(116, 199, 236, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(116, 199, 236, 0.25);
  border-top-color: rgba(116, 199, 236, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 250, 179, 135;
  background-color: rgba(250, 179, 135, 0.15);
  border-bottom-color: rgba(250, 179, 135, 0.25);
  border-left-color: rgba(250, 179, 135, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(250, 179, 135, 0.25);
  border-top-color: rgba(250, 179, 135, 0.25);
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.15);
  border-left-color: rgba(158, 158, 158, 0.9);
  border-left-width: 6px;
}

body .callout[data-callout="success"] {
  --callout-color: 166, 227, 161;
  background-color: rgba(166, 227, 161, 0.15);
  border-bottom-color: rgba(166, 227, 161, 0.25);
  border-left-color: rgba(166, 227, 161, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(166, 227, 161, 0.25);
  border-top-color: rgba(166, 227, 161, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 148, 226, 213;
  background-color: rgba(148, 226, 213, 0.15);
  border-bottom-color: rgba(148, 226, 213, 0.25);
  border-left-color: rgba(148, 226, 213, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(148, 226, 213, 0.25);
  border-top-color: rgba(148, 226, 213, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 116, 199, 236;
  background-color: rgba(116, 199, 236, 0.15);
  border-bottom-color: rgba(116, 199, 236, 0.25);
  border-left-color: rgba(116, 199, 236, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(116, 199, 236, 0.25);
  border-top-color: rgba(116, 199, 236, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 250, 179, 135;
  background-color: rgba(250, 179, 135, 0.15);
  border-bottom-color: rgba(250, 179, 135, 0.25);
  border-left-color: rgba(250, 179, 135, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(250, 179, 135, 0.25);
  border-top-color: rgba(250, 179, 135, 0.25);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space {
  background-color: rgb(32, 33, 34);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.05);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.05);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.05);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body h1 {
  color: rgb(166, 227, 161);
}

body h2 {
  color: rgb(148, 226, 213);
}

body h3 {
  color: rgb(137, 220, 235);
}

body h4 {
  color: rgb(116, 199, 236);
}

body h5 {
  color: rgb(135, 176, 249);
}

body h6 {
  color: rgb(135, 176, 249);
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  --callout-color: 116, 199, 236;
  border-bottom-color: rgba(116, 199, 236, 0.25);
  border-left-color: rgba(116, 199, 236, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(116, 199, 236, 0.25);
  border-top-color: rgba(116, 199, 236, 0.25);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body ::-webkit-scrollbar {
  background: rgb(37, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 38, 39);
}

body ::-webkit-scrollbar-corner {
  background: rgb(37, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 38, 39);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(37, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 38, 39);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(37, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 38, 39);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(37, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 38, 39);
}

body ::-webkit-scrollbar-track {
  background: rgb(37, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 38, 39);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(179, 179, 179);
}`,
    footer: `body footer {
  background-color: rgb(32, 33, 34);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: color(srgb 0.701961 0.701961 0.701961 / 0.8);
}

body footer ul li a {
  color: color(srgb 0.701961 0.701961 0.701961 / 0.8);
  text-decoration: color(srgb 0.701961 0.701961 0.701961 / 0.8);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(179, 179, 179);
}`,
    misc: `body .metadata {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  padding-bottom: 0px;
  padding-top: 0px;
}

body .metadata-properties {
  background-color: rgb(32, 33, 34);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .navigation-progress {
  background-color: rgb(32, 33, 34);
}

body kbd {
  background-color: rgb(32, 33, 34);
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: rgb(0 0 0 / 5%);
  --background-modifier-border-focus: rgba(138, 92, 245, 0.5);
  --background-modifier-border-hover: #e3e3e3;
  --background-modifier-cover: rgb(170 170 170 / 60%);
  --background-modifier-error: rgb(0, 0, 0);
  --background-modifier-error-hover: rgb(0, 0, 0);
  --background-modifier-error-rgb: 255, 59, 48;
  --background-modifier-hover: rgba(0, 0, 0, 0.05);
  --background-modifier-message: #f6f6f6;
  --background-modifier-success: #28cd41;
  --background-modifier-success-rgb: 40, 205, 65;
  --bases-cards-radius: 6px;
  --bases-cards-shadow: 0 0 0 1px rgb(0 0 0 / 5%);
  --bases-cards-shadow-hover: 0 0 0 1px #e3e3e3;
  --bases-embed-border-color: rgb(0 0 0 / 5%);
  --bases-table-border-color: rgb(0 0 0 / 5%);
  --bases-table-cell-shadow-active: 0 0 0 2px rgba(138, 92, 245, 0.5);
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.05);
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.05);
  --blockquote-background-color: #f6f6f6;
  --blockquote-border-color: #ababab;
  --button-radius: 6px;
  --callout-bug: 255, 59, 48;
  --callout-default: 0, 122, 255;
  --callout-error: 255, 59, 48;
  --callout-example: 175, 82, 222;
  --callout-fail: 255, 59, 48;
  --callout-important: 85, 190, 240;
  --callout-info: 0, 122, 255;
  --callout-padding: 16px;
  --callout-question: 255, 149, 0;
  --callout-success: 40, 205, 65;
  --callout-summary: 85, 190, 240;
  --callout-tip: 85, 190, 240;
  --callout-todo: 0, 122, 255;
  --callout-warning: 255, 149, 0;
  --canvas-color-1: 255, 59, 48;
  --canvas-color-2: 255, 149, 0;
  --canvas-color-3: 255, 204, 0;
  --canvas-color-4: 40, 205, 65;
  --canvas-color-5: 85, 190, 240;
  --canvas-color-6: 175, 82, 222;
  --caret-color: rgb(138, 92, 245);
  --checkbox-size: 14px;
  --code-border-color: rgb(0 0 0 / 5%);
  --code-bracket-background: rgba(0, 0, 0, 0.05);
  --code-function: #ffcc00;
  --code-important: #ff9500;
  --code-keyword: #ff3b30;
  --code-normal: #5c5c5c;
  --code-operator: #BE5046;
  --code-property: #55bef0;
  --code-string: #28cd41;
  --code-tag: #007aff;
  --code-value: #af52de;
  --color-blue: #007aff;
  --color-blue-rgb: 0, 122, 255;
  --color-cyan: #55bef0;
  --color-cyan-rgb: 85, 190, 240;
  --color-green: #28cd41;
  --color-green-rgb: 40, 205, 65;
  --color-orange: #ff9500;
  --color-orange-rgb: 255, 149, 0;
  --color-pink: #ff2d55;
  --color-pink-rgb: 255, 45, 85;
  --color-purple: #af52de;
  --color-purple-rgb: 175, 82, 222;
  --color-red: #ff3b30;
  --color-red-rgb: 255, 59, 48;
  --color-yellow: #ffcc00;
  --color-yellow-rgb: 255, 204, 0;
  --dialog-width: 500px;
  --divider-color: rgb(0 0 0 / 5%);
  --divider-color-hover: #222222;
  --dropdown-background-size: 16px;
  --dropdown-padding: 4px 16px 4px 8px;
  --embed-block-shadow-hover: 0 0 0 1px rgb(0 0 0 / 5%), inset 0 0 0 1px rgb(0 0 0 / 5%);
  --embed-border-start: none;
  --file-line-width: 768px;
  --footnote-divider-color: rgb(0 0 0 / 5%);
  --footnote-input-background-active: rgba(0, 0, 0, 0.05);
  --footnote-line-height: 1.6;
  --graph-node-attachment: #ffcc00;
  --graph-node-tag: #28cd41;
  --h1-color: rgb(166, 227, 161);
  --h1-size: 1.802em;
  --h2-color: rgb(148, 226, 213);
  --h2-size: 1.602em;
  --h2-weight: 600;
  --h3-color: rgb(137, 220, 235);
  --h3-size: 1.424em;
  --h3-weight: 600;
  --h4-color: rgb(116, 199, 236);
  --h4-size: 1.266em;
  --h4-weight: 600;
  --h5-color: rgb(135, 176, 249);
  --h5-line-height: 1.6;
  --h5-size: 1.125em;
  --h5-weight: 600;
  --h6-color: rgb(135, 176, 249);
  --h6-line-height: 1.6;
  --header-height: 44px;
  --highlight: var(--text-highlight-bg);
  --hr-color: rgba(0, 0, 0, 0.05);
  --icon-xl: 24px;
  --inline-title-color: rgb(166, 227, 161);
  --inline-title-size: 1.802em;
  --input-radius: 6px;
  --input-shadow: 0px 0px 0px 1px rgb(0 0 0 / 5%), 0 -0.5px 0 0 rgb(0 0 0 / 25%) inset;
  --labeled-nav-top-margin: 44px;
  --line-height-normal: 1.6;
  --link-decoration: none;
  --link-external-decoration: none;
  --list-spacing: 0.1em;
  --menu-border-color: #e3e3e3;
  --menu-radius: 6px;
  --metadata-border-color: rgb(0 0 0 / 5%);
  --metadata-divider-color: rgb(0 0 0 / 5%);
  --metadata-input-background-active: rgba(0, 0, 0, 0.05);
  --metadata-label-background-active: rgba(0, 0, 0, 0.05);
  --metadata-padding: 0;
  --metadata-property-background-active: rgba(0, 0, 0, 0.05);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgba(138, 92, 245, 0.5);
  --metadata-property-box-shadow-hover: 0 0 0 1px #e3e3e3;
  --modal-background: #f6f6f6;
  --modal-border-color: rgb(0 0 0 / 10%);
  --modal-radius: 10px;
  --nav-item-background-active: rgba(0, 0, 0, 0.05);
  --nav-item-background-hover: rgba(0, 0, 0, 0.05);
  --nav-item-padding: 5px 8px 5px 24px;
  --nav-item-parent-padding: 5px 8px 5px 24px;
  --pill-border-color: rgb(0 0 0 / 5%);
  --pill-border-color-hover: #e3e3e3;
  --prompt-border-color: rgb(0 0 0 / 10%);
  --radius-l: 10px;
  --radius-m: 6px;
  --ribbon-background: transparent;
  --ribbon-background-collapsed: transparent;
  --ribbon-padding: 4px 8px;
  --ribbon-width: 56px;
  --scrollbar-radius: 10px;
  --search-icon-size: 16px;
  --setting-items-border-color: rgb(0 0 0 / 5%);
  --setting-items-radius: 10px;
  --slider-thumb-border-color: #ffffff;
  --slider-thumb-border-width: 4px;
  --slider-track-background: #bdbdbd;
  --slider-track-height: 4px;
  --status-bar-border-color: rgb(0 0 0 / 5%);
  --status-bar-radius: 6px 0 0 0;
  --status-bar-text-color: rgb(from #5c5c5c r g b / 80%);
  --sync-avatar-color-1: #ff3b30;
  --sync-avatar-color-2: #ff9500;
  --sync-avatar-color-3: #ffcc00;
  --sync-avatar-color-4: #28cd41;
  --sync-avatar-color-5: #55bef0;
  --sync-avatar-color-6: #007aff;
  --sync-avatar-color-7: #af52de;
  --sync-avatar-color-8: #ff2d55;
  --tab-background-active: #fafafa;
  --tab-container-background: transparent;
  --tab-divider-color: transparent;
  --tab-max-width: 200px;
  --tab-outline-color: rgb(0 0 0 / 5%);
  --tab-outline-width: 0;
  --tab-radius-active: 4px;
  --tab-stacked-header-width: 44px;
  --table-add-button-border-color: rgb(0 0 0 / 5%);
  --table-border-color: rgb(0 0 0 / 5%);
  --table-column-first-border-width: 0;
  --table-column-last-border-width: 0;
  --table-header-border-color: rgb(0 0 0 / 5%);
  --table-header-border-width: 0;
  --table-row-last-border-width: 0;
  --tag-border-width: 1px;
  --tag-padding-x: 8px;
  --tag-padding-y: 2px;
  --tag-size: 0.8em;
  --text-error: #ff3b30;
  --text-highlight-bg: rgba(255, 149, 0, 0.25);
  --text-selection: rgba(0, 0, 0, 0.05);
  --text-success: #28cd41;
  --text-warning: #ff9500;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: transparent;
  --titlebar-background-focused: transparent;
  --titlebar-border-color: rgb(0 0 0 / 5%);
  --toggle-border-width: 4px;
  --toggle-s-border-width: 4px;
  --toggle-s-thumb-height: 12px;
  --toggle-s-thumb-width: 12px;
  --toggle-s-width: 40px;
  --toggle-thumb-height: 12px;
  --toggle-thumb-width: 12px;
  --traffic-lights-offset-x: 44px;
  --traffic-lights-offset-y: 44px;
  --view-header-height: 40px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(128, 128, 128);
}`,
    typography: `body .text-highlight {
  background-color: rgba(255, 149, 0, 0.25);
  color: rgb(255, 149, 0);
  outline: rgb(255, 149, 0) none 0px;
  text-decoration: rgb(255, 149, 0);
  text-decoration-color: rgb(255, 149, 0);
}`,
    links: `body a.external, footer a {
  text-decoration: rgb(138, 92, 245);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  text-decoration: rgb(138, 92, 245);
}

body a.internal.broken {
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(246, 246, 246);
  padding-bottom: 5px;
  padding-top: 5px;
}`,
    tables: `body table {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 712px;
}

body tbody {
  background-color: rgb(246, 246, 246);
}

body td {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0.05);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0.05);
  padding-bottom: 8px;
  padding-top: 8px;
}

body th {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0.05);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-width: 0px;
  padding-bottom: 8px;
  padding-top: 8px;
}

body thead {
  background-color: rgb(246, 246, 246);
}`,
    code: `body code {
  border-bottom-color: rgb(92, 92, 92);
  border-left-color: rgb(92, 92, 92);
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
  color: rgb(92, 92, 92);
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 204, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 204, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 204, 0);
  border-left-color: rgb(255, 204, 0);
  border-right-color: rgb(255, 204, 0);
  border-top-color: rgb(255, 204, 0);
}

body pre > code, pre:has(> code) {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
}

body pre:has(> code) {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
}`,
    images: `body img {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(246, 246, 246);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .transclude {
  background-color: rgb(246, 246, 246);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .transclude-inner {
  background-color: rgb(246, 246, 246);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    checkboxes: `body input[type=checkbox] {
  margin-left: -21px;
  width: 14px;
}

body li.task-list-item[data-task='-'] {
  color: rgb(92, 92, 92);
  text-decoration: line-through rgb(92, 92, 92);
  text-decoration-color: rgb(92, 92, 92);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(0, 122, 255);
  border-left-color: rgb(0, 122, 255);
  border-right-color: rgb(0, 122, 255);
  border-top-color: rgb(0, 122, 255);
  gap: 8px;
}

body .callout[data-callout="abstract"] {
  --callout-color: 85, 190, 240;
  background-color: rgba(85, 190, 240, 0.15);
  border-bottom-color: rgba(85, 190, 240, 0.25);
  border-left-color: rgba(85, 190, 240, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(85, 190, 240, 0.25);
  border-top-color: rgba(85, 190, 240, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 255, 59, 48;
  background-color: rgba(255, 59, 48, 0.15);
  border-bottom-color: rgba(255, 59, 48, 0.25);
  border-left-color: rgba(255, 59, 48, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(255, 59, 48, 0.25);
  border-top-color: rgba(255, 59, 48, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 255, 59, 48;
  background-color: rgba(255, 59, 48, 0.15);
  border-bottom-color: rgba(255, 59, 48, 0.25);
  border-left-color: rgba(255, 59, 48, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(255, 59, 48, 0.25);
  border-top-color: rgba(255, 59, 48, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 175, 82, 222;
  background-color: rgba(175, 82, 222, 0.15);
  border-bottom-color: rgba(175, 82, 222, 0.25);
  border-left-color: rgba(175, 82, 222, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(175, 82, 222, 0.25);
  border-top-color: rgba(175, 82, 222, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 255, 59, 48;
  background-color: rgba(255, 59, 48, 0.15);
  border-bottom-color: rgba(255, 59, 48, 0.25);
  border-left-color: rgba(255, 59, 48, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(255, 59, 48, 0.25);
  border-top-color: rgba(255, 59, 48, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 0, 122, 255;
  background-color: rgba(0, 122, 255, 0.15);
  border-bottom-color: rgba(0, 122, 255, 0.25);
  border-left-color: rgba(0, 122, 255, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(0, 122, 255, 0.25);
  border-top-color: rgba(0, 122, 255, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 0, 122, 255;
  background-color: rgba(0, 122, 255, 0.15);
  border-bottom-color: rgba(0, 122, 255, 0.25);
  border-left-color: rgba(0, 122, 255, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(0, 122, 255, 0.25);
  border-top-color: rgba(0, 122, 255, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 255, 149, 0;
  background-color: rgba(255, 149, 0, 0.15);
  border-bottom-color: rgba(255, 149, 0, 0.25);
  border-left-color: rgba(255, 149, 0, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(255, 149, 0, 0.25);
  border-top-color: rgba(255, 149, 0, 0.25);
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.15);
  border-left-color: rgba(158, 158, 158, 0.9);
  border-left-width: 6px;
}

body .callout[data-callout="success"] {
  --callout-color: 40, 205, 65;
  background-color: rgba(40, 205, 65, 0.15);
  border-bottom-color: rgba(40, 205, 65, 0.25);
  border-left-color: rgba(40, 205, 65, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(40, 205, 65, 0.25);
  border-top-color: rgba(40, 205, 65, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 85, 190, 240;
  background-color: rgba(85, 190, 240, 0.15);
  border-bottom-color: rgba(85, 190, 240, 0.25);
  border-left-color: rgba(85, 190, 240, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(85, 190, 240, 0.25);
  border-top-color: rgba(85, 190, 240, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 0, 122, 255;
  background-color: rgba(0, 122, 255, 0.15);
  border-bottom-color: rgba(0, 122, 255, 0.25);
  border-left-color: rgba(0, 122, 255, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(0, 122, 255, 0.25);
  border-top-color: rgba(0, 122, 255, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 149, 0;
  background-color: rgba(255, 149, 0, 0.15);
  border-bottom-color: rgba(255, 149, 0, 0.25);
  border-left-color: rgba(255, 149, 0, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(255, 149, 0, 0.25);
  border-top-color: rgba(255, 149, 0, 0.25);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space {
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.05);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.05);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.05);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

body h1 {
  color: rgb(166, 227, 161);
}

body h2 {
  color: rgb(148, 226, 213);
}

body h3 {
  color: rgb(137, 220, 235);
}

body h4 {
  color: rgb(116, 199, 236);
}

body h5 {
  color: rgb(135, 176, 249);
}

body h6 {
  color: rgb(135, 176, 249);
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  --callout-color: 0, 122, 255;
  border-bottom-color: rgba(0, 122, 255, 0.25);
  border-left-color: rgba(0, 122, 255, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(0, 122, 255, 0.25);
  border-top-color: rgba(0, 122, 255, 0.25);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0.05);
}`,
    footer: `body footer {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: color(srgb 0.360784 0.360784 0.360784 / 0.8);
}

body footer ul li a {
  color: color(srgb 0.360784 0.360784 0.360784 / 0.8);
  text-decoration: color(srgb 0.360784 0.360784 0.360784 / 0.8);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(92, 92, 92);
}`,
    misc: `body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
  padding-bottom: 0px;
  padding-top: 0px;
}

body .metadata-properties {
  background-color: rgb(246, 246, 246);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body kbd {
  border-bottom-color: rgb(92, 92, 92);
  border-left-color: rgb(92, 92, 92);
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
  color: rgb(92, 92, 92);
}`,
  },
};
