import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "sei", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: rgb(255 255 255 / 5%) !important;
  --background-modifier-border-focus: hsla(258, 88%, 66%, 0.5) !important;
  --background-modifier-cover: rgb(0 0 0 / 30%) !important;
  --background-modifier-error: hsl(355deg 50% 45%) !important;
  --background-modifier-error-hover: hsl(355deg 50% 55%) !important;
  --background-modifier-error-rgb: 243, 139, 168 !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.05) !important;
  --background-modifier-message: hsl(220deg 2% 13%) !important;
  --background-modifier-success: #A6E3A1 !important;
  --background-modifier-success-rgb: 166, 227, 161 !important;
  --background-primary: hsl(220deg 2% 15%) !important;
  --background-primary-alt: hsl(220deg 2% 13%) !important;
  --background-secondary: hsl(220deg 2% 13%) !important;
  --background-secondary-alt: hsl(220deg 2% 15%) !important;
  --background-table-rows: hsl(220deg 2% 13%) !important;
  --bases-cards-background: hsl(220deg 2% 15%) !important;
  --bases-cards-cover-background: hsl(220deg 2% 13%) !important;
  --bases-cards-radius: 6px !important;
  --bases-cards-shadow: 0 0 0 1px rgb(255 255 255 / 5%) !important;
  --bases-embed-border-color: rgb(255 255 255 / 5%) !important;
  --bases-table-border-color: rgb(255 255 255 / 5%) !important;
  --bases-table-cell-background-active: hsl(220deg 2% 15%) !important;
  --bases-table-cell-background-disabled: hsl(220deg 2% 13%) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsla(258, 88%, 66%, 0.5) !important;
  --bases-table-group-background: hsl(220deg 2% 13%) !important;
  --bases-table-header-background: hsl(220deg 2% 15%) !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.05) !important;
  --bases-table-summary-background: hsl(220deg 2% 15%) !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.05) !important;
  --blockquote-background-color: hsl(220deg 2% 13%) !important;
  --blockquote-border-color: #666666 !important;
  --blur-background: color-mix(in srgb, #3f3f3f 65%, transparent) linear-gradient(#3f3f3f, color-mix(in srgb, #3f3f3f 65%, transparent)) !important;
  --button-radius: 6px !important;
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
  --canvas-background: hsl(220deg 2% 15%) !important;
  --canvas-color-1: 243, 139, 168 !important;
  --canvas-color-2: 250, 179, 135 !important;
  --canvas-color-3: 249, 226, 175 !important;
  --canvas-color-4: 166, 227, 161 !important;
  --canvas-color-5: 148, 226, 213 !important;
  --canvas-color-6: 169, 180, 250 !important;
  --caret-color: hsl(255, 89.76%, 75.9%) !important;
  --checkbox-marker-color: hsl(220deg 2% 15%) !important;
  --checkbox-size: 14px !important;
  --code-background: hsl(220deg 2% 13%) !important;
  --code-border-color: rgb(255 255 255 / 5%) !important;
  --code-bracket-background: rgba(255, 255, 255, 0.05) !important;
  --code-comment: #5C6370 !important;
  --code-function: #E5C07B !important;
  --code-important: #D19A66 !important;
  --code-keyword: #E06C75 !important;
  --code-normal: #ABB2BF !important;
  --code-operator: #BE5046 !important;
  --code-property: #56B6C2 !important;
  --code-punctuation: #ABB2BF !important;
  --code-string: #98C379 !important;
  --code-tag: #61AFEF !important;
  --code-value: #C678DD !important;
  --color-blue: #74C7EC !important;
  --color-blue-rgb: 116, 199, 236 !important;
  --color-cyan: #94E2D5 !important;
  --color-cyan-rgb: 148, 226, 213 !important;
  --color-green: #A6E3A1 !important;
  --color-green-rgb: 166, 227, 161 !important;
  --color-orange: #FAB387 !important;
  --color-orange-rgb: 250, 179, 135 !important;
  --color-pink: #F5C2E7 !important;
  --color-pink-rgb: 245, 194, 231 !important;
  --color-purple: #a9b4fa !important;
  --color-purple-rgb: 169, 180, 250 !important;
  --color-red: #F38BA8 !important;
  --color-red-rgb: 243, 139, 168 !important;
  --color-yellow: #F9E2AF !important;
  --color-yellow-rgb: 249, 226, 175 !important;
  --dialog-width: 500px !important;
  --divider-color: rgb(255 255 255 / 5%) !important;
  --divider-color-hover: #dadada !important;
  --dropdown-background: #3f3f3f !important;
  --dropdown-background-size: 16px !important;
  --dropdown-padding: 4px 16px 4px 8px !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(255 255 255 / 5%), inset 0 0 0 1px rgb(255 255 255 / 5%) !important;
  --embed-border-start: none !important;
  --file-header-background: hsl(220deg 2% 15%) !important;
  --file-header-background-focused: hsl(220deg 2% 15%) !important;
  --file-line-width: 768px !important;
  --flair-background: #3f3f3f !important;
  --footnote-divider-color: rgb(255 255 255 / 5%) !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.05) !important;
  --footnote-line-height: 1.6 !important;
  --graph-node-attachment: #F9E2AF !important;
  --graph-node-tag: #A6E3A1 !important;
  --h1-color: rgb(166, 227, 161) !important;
  --h1-size: 1.802em !important;
  --h2-color: rgb(148, 226, 213) !important;
  --h2-size: 1.602em !important;
  --h2-weight: 600 !important;
  --h3-color: rgb(137, 220, 235) !important;
  --h3-size: 1.424em !important;
  --h3-weight: 600 !important;
  --h4-color: rgb(116, 199, 236) !important;
  --h4-size: 1.266em !important;
  --h4-weight: 600 !important;
  --h5-color: rgb(135, 176, 249) !important;
  --h5-line-height: 1.6 !important;
  --h5-size: 1.125em !important;
  --h5-weight: 600 !important;
  --h6-color: rgb(135, 176, 249) !important;
  --h6-line-height: 1.6 !important;
  --header-height: 44px !important;
  --highlight: rgba(250, 179, 135, 0.25) !important;
  --hr-color: rgb(255 255 255 / 5%) !important;
  --icon-xl: 24px !important;
  --inline-title-color: rgb(166, 227, 161) !important;
  --inline-title-size: 1.802em !important;
  --input-radius: 6px !important;
  --input-shadow: 0px 0px 0px 1px rgb(0 0 0 / 10%), 0 0.5px 0 0 rgb(255 255 255 / 10%) inset !important;
  --interactive-normal: #3f3f3f !important;
  --labeled-nav-top-margin: 44px !important;
  --light: hsl(220deg 2% 15%) !important;
  --lightgray: hsl(220deg 2% 13%) !important;
  --line-height-normal: 1.6 !important;
  --link-decoration: none !important;
  --link-external-decoration: none !important;
  --list-spacing: 0.1em !important;
  --menu-background: hsl(220deg 2% 13%) !important;
  --menu-radius: 6px !important;
  --metadata-border-color: rgb(255 255 255 / 5%) !important;
  --metadata-divider-color: rgb(255 255 255 / 5%) !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.05) !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.05) !important;
  --metadata-padding: 0 !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.05) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsla(258, 88%, 66%, 0.5) !important;
  --modal-background: hsl(220deg 2% 13%) !important;
  --modal-border-color: rgb(255 255 255 / 10%) !important;
  --modal-radius: 10px !important;
  --nav-indentation-guide-color: rgba(255, 255, 255, 0.08) !important;
  --nav-item-background-active: rgba(255, 255, 255, 0.05) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.05) !important;
  --nav-item-color-active: #b3b3b3 !important;
  --nav-item-color-hover: #b3b3b3 !important;
  --nav-item-color-selected: #b3b3b3 !important;
  --nav-item-padding: 5px 8px 5px 24px !important;
  --nav-item-parent-padding: 5px 8px 5px 24px !important;
  --pdf-background: hsl(220deg 2% 15%) !important;
  --pdf-page-background: hsl(220deg 2% 15%) !important;
  --pdf-shadow: 0 0 0 1px rgb(255 255 255 / 5%) !important;
  --pdf-sidebar-background: hsl(220deg 2% 15%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(255 255 255 / 5%) !important;
  --pill-border-color: rgb(255 255 255 / 5%) !important;
  --prompt-background: hsl(220deg 2% 15%) !important;
  --prompt-border-color: rgb(255 255 255 / 10%) !important;
  --radius-l: 10px !important;
  --radius-m: 6px !important;
  --raised-background: color-mix(in srgb, #3f3f3f 65%, transparent) linear-gradient(#3f3f3f, color-mix(in srgb, #3f3f3f 65%, transparent)) !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --ribbon-padding: 4px 8px !important;
  --ribbon-width: 56px !important;
  --scrollbar-radius: 10px !important;
  --search-icon-size: 16px !important;
  --search-result-background: hsl(220deg 2% 15%) !important;
  --setting-items-background: hsl(220deg 2% 13%) !important;
  --setting-items-border-color: rgb(255 255 255 / 5%) !important;
  --setting-items-radius: 10px !important;
  --slider-thumb-border-width: 4px !important;
  --slider-track-background: #555555 !important;
  --slider-track-height: 4px !important;
  --status-bar-background: hsl(220deg 2% 13%) !important;
  --status-bar-border-color: rgb(255 255 255 / 5%) !important;
  --status-bar-radius: 6px 0 0 0 !important;
  --status-bar-text-color: rgb(from #b3b3b3 r g b / 80%) !important;
  --suggestion-background: hsl(220deg 2% 15%) !important;
  --sync-avatar-color-1: #F38BA8 !important;
  --sync-avatar-color-2: #FAB387 !important;
  --sync-avatar-color-3: #F9E2AF !important;
  --sync-avatar-color-4: #A6E3A1 !important;
  --sync-avatar-color-5: #94E2D5 !important;
  --sync-avatar-color-6: #74C7EC !important;
  --sync-avatar-color-7: #a9b4fa !important;
  --sync-avatar-color-8: #F5C2E7 !important;
  --tab-background-active: hsl(220deg 2% 13%) !important;
  --tab-container-background: transparent !important;
  --tab-divider-color: transparent !important;
  --tab-max-width: 200px !important;
  --tab-outline-color: rgb(255 255 255 / 5%) !important;
  --tab-outline-width: 0 !important;
  --tab-radius-active: 4px !important;
  --tab-stacked-header-width: 44px !important;
  --tab-switcher-background: hsl(220deg 2% 13%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(220deg 2% 13%), transparent) !important;
  --table-add-button-border-color: rgb(255 255 255 / 5%) !important;
  --table-border-color: rgb(255 255 255 / 5%) !important;
  --table-column-first-border-width: 0 !important;
  --table-column-last-border-width: 0 !important;
  --table-header-border-color: rgb(255 255 255 / 5%) !important;
  --table-header-border-width: 0 !important;
  --table-row-last-border-width: 0 !important;
  --tag-border-width: 1px !important;
  --tag-padding-x: 8px !important;
  --tag-padding-y: 2px !important;
  --tag-size: 0.8em !important;
  --text-error: #F38BA8 !important;
  --text-highlight-bg: rgba(250, 179, 135, 0.25) !important;
  --text-success: #A6E3A1 !important;
  --text-warning: #FAB387 !important;
  --textHighlight: rgba(250, 179, 135, 0.25) !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: rgb(255 255 255 / 5%) !important;
  --toggle-border-width: 4px !important;
  --toggle-s-border-width: 4px !important;
  --toggle-s-thumb-height: 12px !important;
  --toggle-s-thumb-width: 12px !important;
  --toggle-s-width: 40px !important;
  --toggle-thumb-height: 12px !important;
  --toggle-thumb-width: 12px !important;
  --traffic-lights-offset-x: 44px !important;
  --traffic-lights-offset-y: 44px !important;
  --view-header-height: 40px !important;
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
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(218, 218, 218) rgb(218, 218, 218) rgb(218, 218, 218) rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: color(srgb 0.1274 0.129133 0.1326 / 0.5);
  border-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
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
  background-color: rgb(37, 38, 39);
}`,
    typography: `html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(250, 179, 135, 0.25);
  color: rgb(250, 179, 135);
  outline: rgb(250, 179, 135) none 0px;
  text-decoration-color: rgb(250, 179, 135);
}

html[saved-theme="dark"] body footer {
  opacity: 0.3;
}`,
    links: `html[saved-theme="dark"] body a.internal.broken {
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: rgb(32, 33, 34);
  padding-bottom: 5px;
  padding-top: 5px;
}`,
    tables: `html[saved-theme="dark"] body table {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 712px;
}

html[saved-theme="dark"] body tbody {
  background-color: rgb(32, 33, 34);
}

html[saved-theme="dark"] body td {
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

html[saved-theme="dark"] body th {
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

html[saved-theme="dark"] body thead {
  background-color: rgb(32, 33, 34);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(32, 33, 34);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(32, 33, 34);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(229, 192, 123);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(229, 192, 123);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(229, 192, 123);
  border-left-color: rgb(229, 192, 123);
  border-right-color: rgb(229, 192, 123);
  border-top-color: rgb(229, 192, 123);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(32, 33, 34);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(32, 33, 34);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}`,
    images: `html[saved-theme="dark"] body img {
  border-bottom-color: rgb(166, 227, 161);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(166, 227, 161);
  border-radius: 4px;
  border-right-color: rgb(166, 227, 161);
  border-top-color: rgb(166, 227, 161);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
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

html[saved-theme="dark"] body .transclude {
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
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  margin-left: -21px;
  width: 14px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(179, 179, 179);
  text-decoration: line-through;
  text-decoration-color: rgb(179, 179, 179);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(116, 199, 236);
  border-left-color: rgb(116, 199, 236);
  border-right-color: rgb(116, 199, 236);
  border-top-color: rgb(116, 199, 236);
  color: rgb(116, 199, 236);
  gap: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(116, 199, 236);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 148, 226, 213;
  background-color: rgba(148, 226, 213, 0.15);
  border-bottom-color: rgba(148, 226, 213, 0.25);
  border-left-color: rgba(148, 226, 213, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(148, 226, 213, 0.25);
  border-top-color: rgba(148, 226, 213, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 243, 139, 168;
  background-color: rgba(243, 139, 168, 0.15);
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-left-color: rgba(243, 139, 168, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(243, 139, 168, 0.25);
  border-top-color: rgba(243, 139, 168, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 243, 139, 168;
  background-color: rgba(243, 139, 168, 0.15);
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-left-color: rgba(243, 139, 168, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(243, 139, 168, 0.25);
  border-top-color: rgba(243, 139, 168, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 169, 180, 250;
  background-color: rgba(169, 180, 250, 0.15);
  border-bottom-color: rgba(169, 180, 250, 0.25);
  border-left-color: rgba(169, 180, 250, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(169, 180, 250, 0.25);
  border-top-color: rgba(169, 180, 250, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 243, 139, 168;
  background-color: rgba(243, 139, 168, 0.15);
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-left-color: rgba(243, 139, 168, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(243, 139, 168, 0.25);
  border-top-color: rgba(243, 139, 168, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 116, 199, 236;
  background-color: rgba(116, 199, 236, 0.15);
  border-bottom-color: rgba(116, 199, 236, 0.25);
  border-left-color: rgba(116, 199, 236, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(116, 199, 236, 0.25);
  border-top-color: rgba(116, 199, 236, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 116, 199, 236;
  background-color: rgba(116, 199, 236, 0.15);
  border-bottom-color: rgba(116, 199, 236, 0.25);
  border-left-color: rgba(116, 199, 236, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(116, 199, 236, 0.25);
  border-top-color: rgba(116, 199, 236, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 250, 179, 135;
  background-color: rgba(250, 179, 135, 0.15);
  border-bottom-color: rgba(250, 179, 135, 0.25);
  border-left-color: rgba(250, 179, 135, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(250, 179, 135, 0.25);
  border-top-color: rgba(250, 179, 135, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.15);
  border-left-color: rgba(158, 158, 158, 0.9);
  border-left-width: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 166, 227, 161;
  background-color: rgba(166, 227, 161, 0.15);
  border-bottom-color: rgba(166, 227, 161, 0.25);
  border-left-color: rgba(166, 227, 161, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(166, 227, 161, 0.25);
  border-top-color: rgba(166, 227, 161, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 148, 226, 213;
  background-color: rgba(148, 226, 213, 0.15);
  border-bottom-color: rgba(148, 226, 213, 0.25);
  border-left-color: rgba(148, 226, 213, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(148, 226, 213, 0.25);
  border-top-color: rgba(148, 226, 213, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 116, 199, 236;
  background-color: rgba(116, 199, 236, 0.15);
  border-bottom-color: rgba(116, 199, 236, 0.25);
  border-left-color: rgba(116, 199, 236, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(116, 199, 236, 0.25);
  border-top-color: rgba(116, 199, 236, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 250, 179, 135;
  background-color: rgba(250, 179, 135, 0.15);
  border-bottom-color: rgba(250, 179, 135, 0.25);
  border-left-color: rgba(250, 179, 135, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(250, 179, 135, 0.25);
  border-top-color: rgba(250, 179, 135, 0.25);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body h1 {
  color: rgb(166, 227, 161);
}

html[saved-theme="dark"] body h2 {
  color: rgb(148, 226, 213);
}

html[saved-theme="dark"] body h3 {
  color: rgb(137, 220, 235);
}

html[saved-theme="dark"] body h4 {
  color: rgb(116, 199, 236);
}

html[saved-theme="dark"] body h5 {
  color: rgb(135, 176, 249);
}

html[saved-theme="dark"] body h6 {
  color: rgb(135, 176, 249);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
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

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(37, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 38, 39);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(37, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 38, 39);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(37, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 38, 39);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(37, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 38, 39);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(37, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 38, 39);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(37, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 38, 39);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(255, 255, 255, 0.08);
}`,
    footer: `html[saved-theme="dark"] body footer {
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

html[saved-theme="dark"] body footer ul li a {
  color: color(srgb 0.701961 0.701961 0.701961 / 0.8);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(179, 179, 179);
}`,
    misc: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .metadata-properties {
  background-color: rgb(32, 33, 34);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(32, 33, 34);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(32, 33, 34);
  border-bottom-color: rgb(171, 178, 191);
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  color: rgb(171, 178, 191);
}

html[saved-theme="dark"] body ul.tags > li {
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
  border-top-width: 1px;
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: rgb(0 0 0 / 5%) !important;
  --background-modifier-border-focus: hsla(258, 88%, 66%, 0.5) !important;
  --background-modifier-border-hover: #e3e3e3 !important;
  --background-modifier-cover: rgb(170 170 170 / 60%) !important;
  --background-modifier-error: hsl(355deg 70% 55%) !important;
  --background-modifier-error-hover: hsl(355deg 70% 65%) !important;
  --background-modifier-error-rgb: 255, 59, 48 !important;
  --background-modifier-hover: rgba(0, 0, 0, 0.05) !important;
  --background-modifier-message: #f6f6f6 !important;
  --background-modifier-success: #28cd41 !important;
  --background-modifier-success-rgb: 40, 205, 65 !important;
  --bases-cards-radius: 6px !important;
  --bases-cards-shadow: 0 0 0 1px rgb(0 0 0 / 5%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px #e3e3e3 !important;
  --bases-embed-border-color: rgb(0 0 0 / 5%) !important;
  --bases-table-border-color: rgb(0 0 0 / 5%) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsla(258, 88%, 66%, 0.5) !important;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.05) !important;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.05) !important;
  --blockquote-background-color: #f6f6f6 !important;
  --blockquote-border-color: #ababab !important;
  --button-radius: 6px !important;
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
  --canvas-color-1: 255, 59, 48 !important;
  --canvas-color-2: 255, 149, 0 !important;
  --canvas-color-3: 255, 204, 0 !important;
  --canvas-color-4: 40, 205, 65 !important;
  --canvas-color-5: 85, 190, 240 !important;
  --canvas-color-6: 175, 82, 222 !important;
  --caret-color: hsl(258, 88%, 66%) !important;
  --checkbox-size: 14px !important;
  --code-border-color: rgb(0 0 0 / 5%) !important;
  --code-bracket-background: rgba(0, 0, 0, 0.05) !important;
  --code-function: #ffcc00 !important;
  --code-important: #ff9500 !important;
  --code-keyword: #ff3b30 !important;
  --code-normal: #5c5c5c !important;
  --code-operator: #BE5046 !important;
  --code-property: #55bef0 !important;
  --code-string: #28cd41 !important;
  --code-tag: #007aff !important;
  --code-value: #af52de !important;
  --color-blue: #007aff !important;
  --color-blue-rgb: 0, 122, 255 !important;
  --color-cyan: #55bef0 !important;
  --color-cyan-rgb: 85, 190, 240 !important;
  --color-green: #28cd41 !important;
  --color-green-rgb: 40, 205, 65 !important;
  --color-orange: #ff9500 !important;
  --color-orange-rgb: 255, 149, 0 !important;
  --color-pink: #ff2d55 !important;
  --color-pink-rgb: 255, 45, 85 !important;
  --color-purple: #af52de !important;
  --color-purple-rgb: 175, 82, 222 !important;
  --color-red: #ff3b30 !important;
  --color-red-rgb: 255, 59, 48 !important;
  --color-yellow: #ffcc00 !important;
  --color-yellow-rgb: 255, 204, 0 !important;
  --dialog-width: 500px !important;
  --divider-color: rgb(0 0 0 / 5%) !important;
  --divider-color-hover: #222222 !important;
  --dropdown-background-size: 16px !important;
  --dropdown-padding: 4px 16px 4px 8px !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(0 0 0 / 5%), inset 0 0 0 1px rgb(0 0 0 / 5%) !important;
  --embed-border-start: none !important;
  --file-line-width: 768px !important;
  --footnote-divider-color: rgb(0 0 0 / 5%) !important;
  --footnote-input-background-active: rgba(0, 0, 0, 0.05) !important;
  --footnote-line-height: 1.6 !important;
  --graph-node-attachment: #ffcc00 !important;
  --graph-node-tag: #28cd41 !important;
  --h1-color: rgb(166, 227, 161) !important;
  --h1-size: 1.802em !important;
  --h2-color: rgb(148, 226, 213) !important;
  --h2-size: 1.602em !important;
  --h2-weight: 600 !important;
  --h3-color: rgb(137, 220, 235) !important;
  --h3-size: 1.424em !important;
  --h3-weight: 600 !important;
  --h4-color: rgb(116, 199, 236) !important;
  --h4-size: 1.266em !important;
  --h4-weight: 600 !important;
  --h5-color: rgb(135, 176, 249) !important;
  --h5-line-height: 1.6 !important;
  --h5-size: 1.125em !important;
  --h5-weight: 600 !important;
  --h6-color: rgb(135, 176, 249) !important;
  --h6-line-height: 1.6 !important;
  --header-height: 44px !important;
  --highlight: rgba(255, 149, 0, 0.25) !important;
  --hr-color: rgba(0, 0, 0, 0.05) !important;
  --icon-xl: 24px !important;
  --inline-title-color: rgb(166, 227, 161) !important;
  --inline-title-size: 1.802em !important;
  --input-radius: 6px !important;
  --input-shadow: 0px 0px 0px 1px rgb(0 0 0 / 5%), 0 -0.5px 0 0 rgb(0 0 0 / 25%) inset !important;
  --labeled-nav-top-margin: 44px !important;
  --line-height-normal: 1.6 !important;
  --link-decoration: none !important;
  --link-external-decoration: none !important;
  --list-spacing: 0.1em !important;
  --menu-border-color: #e3e3e3 !important;
  --menu-radius: 6px !important;
  --metadata-border-color: rgb(0 0 0 / 5%) !important;
  --metadata-divider-color: rgb(0 0 0 / 5%) !important;
  --metadata-input-background-active: rgba(0, 0, 0, 0.05) !important;
  --metadata-label-background-active: rgba(0, 0, 0, 0.05) !important;
  --metadata-padding: 0 !important;
  --metadata-property-background-active: rgba(0, 0, 0, 0.05) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsla(258, 88%, 66%, 0.5) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #e3e3e3 !important;
  --modal-background: #f6f6f6 !important;
  --modal-border-color: rgb(0 0 0 / 10%) !important;
  --modal-radius: 10px !important;
  --nav-item-background-active: rgba(0, 0, 0, 0.05) !important;
  --nav-item-background-hover: rgba(0, 0, 0, 0.05) !important;
  --nav-item-padding: 5px 8px 5px 24px !important;
  --nav-item-parent-padding: 5px 8px 5px 24px !important;
  --pill-border-color: rgb(0 0 0 / 5%) !important;
  --pill-border-color-hover: #e3e3e3 !important;
  --prompt-border-color: rgb(0 0 0 / 10%) !important;
  --radius-l: 10px !important;
  --radius-m: 6px !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --ribbon-padding: 4px 8px !important;
  --ribbon-width: 56px !important;
  --scrollbar-radius: 10px !important;
  --search-icon-size: 16px !important;
  --setting-items-border-color: rgb(0 0 0 / 5%) !important;
  --setting-items-radius: 10px !important;
  --slider-thumb-border-color: #ffffff !important;
  --slider-thumb-border-width: 4px !important;
  --slider-track-background: #bdbdbd !important;
  --slider-track-height: 4px !important;
  --status-bar-border-color: rgb(0 0 0 / 5%) !important;
  --status-bar-radius: 6px 0 0 0 !important;
  --status-bar-text-color: rgb(from #5c5c5c r g b / 80%) !important;
  --sync-avatar-color-1: #ff3b30 !important;
  --sync-avatar-color-2: #ff9500 !important;
  --sync-avatar-color-3: #ffcc00 !important;
  --sync-avatar-color-4: #28cd41 !important;
  --sync-avatar-color-5: #55bef0 !important;
  --sync-avatar-color-6: #007aff !important;
  --sync-avatar-color-7: #af52de !important;
  --sync-avatar-color-8: #ff2d55 !important;
  --tab-background-active: #fafafa !important;
  --tab-container-background: transparent !important;
  --tab-divider-color: transparent !important;
  --tab-max-width: 200px !important;
  --tab-outline-color: rgb(0 0 0 / 5%) !important;
  --tab-outline-width: 0 !important;
  --tab-radius-active: 4px !important;
  --tab-stacked-header-width: 44px !important;
  --table-add-button-border-color: rgb(0 0 0 / 5%) !important;
  --table-border-color: rgb(0 0 0 / 5%) !important;
  --table-column-first-border-width: 0 !important;
  --table-column-last-border-width: 0 !important;
  --table-header-border-color: rgb(0 0 0 / 5%) !important;
  --table-header-border-width: 0 !important;
  --table-row-last-border-width: 0 !important;
  --tag-border-width: 1px !important;
  --tag-padding-x: 8px !important;
  --tag-padding-y: 2px !important;
  --tag-size: 0.8em !important;
  --text-error: #ff3b30 !important;
  --text-highlight-bg: rgba(255, 149, 0, 0.25) !important;
  --text-selection: rgba(0, 0, 0, 0.05) !important;
  --text-success: #28cd41 !important;
  --text-warning: #ff9500 !important;
  --textHighlight: rgba(255, 149, 0, 0.25) !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: rgb(0 0 0 / 5%) !important;
  --toggle-border-width: 4px !important;
  --toggle-s-border-width: 4px !important;
  --toggle-s-thumb-height: 12px !important;
  --toggle-s-thumb-width: 12px !important;
  --toggle-s-width: 40px !important;
  --toggle-thumb-height: 12px !important;
  --toggle-thumb-width: 12px !important;
  --traffic-lights-offset-x: 44px !important;
  --traffic-lights-offset-y: 44px !important;
  --view-header-height: 40px !important;
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
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(34, 34, 34) rgb(34, 34, 34) rgb(34, 34, 34) rgba(0, 0, 0, 0.05);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: color(srgb 0.964706 0.964706 0.964706 / 0.5);
  border-color: rgba(0, 0, 0, 0.05);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(0, 0, 0, 0.05);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(128, 128, 128);
}`,
    typography: `html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 149, 0, 0.25);
  color: rgb(255, 149, 0);
  outline: rgb(255, 149, 0) none 0px;
  text-decoration-color: rgb(255, 149, 0);
}

html[saved-theme="light"] body footer {
  opacity: 0.3;
}`,
    links: `html[saved-theme="light"] body a.internal.broken {
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: rgb(246, 246, 246);
  padding-bottom: 5px;
  padding-top: 5px;
}`,
    tables: `html[saved-theme="light"] body table {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  width: 712px;
}

html[saved-theme="light"] body tbody {
  background-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body td {
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

html[saved-theme="light"] body th {
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

html[saved-theme="light"] body thead {
  background-color: rgb(246, 246, 246);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(92, 92, 92);
  border-left-color: rgb(92, 92, 92);
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
  color: rgb(92, 92, 92);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(255, 204, 0);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 204, 0);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 204, 0);
  border-left-color: rgb(255, 204, 0);
  border-right-color: rgb(255, 204, 0);
  border-top-color: rgb(255, 204, 0);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
}

html[saved-theme="light"] body pre:has(> code) {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
}`,
    images: `html[saved-theme="light"] body img {
  border-bottom-color: rgb(166, 227, 161);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(166, 227, 161);
  border-radius: 4px;
  border-right-color: rgb(166, 227, 161);
  border-top-color: rgb(166, 227, 161);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
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

html[saved-theme="light"] body .transclude {
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
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  margin-left: -21px;
  width: 14px;
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(92, 92, 92);
  text-decoration: line-through;
  text-decoration-color: rgb(92, 92, 92);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(0, 122, 255);
  border-left-color: rgb(0, 122, 255);
  border-right-color: rgb(0, 122, 255);
  border-top-color: rgb(0, 122, 255);
  color: rgb(0, 122, 255);
  gap: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(0, 122, 255);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 85, 190, 240;
  background-color: rgba(85, 190, 240, 0.15);
  border-bottom-color: rgba(85, 190, 240, 0.25);
  border-left-color: rgba(85, 190, 240, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(85, 190, 240, 0.25);
  border-top-color: rgba(85, 190, 240, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 255, 59, 48;
  background-color: rgba(255, 59, 48, 0.15);
  border-bottom-color: rgba(255, 59, 48, 0.25);
  border-left-color: rgba(255, 59, 48, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(255, 59, 48, 0.25);
  border-top-color: rgba(255, 59, 48, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 255, 59, 48;
  background-color: rgba(255, 59, 48, 0.15);
  border-bottom-color: rgba(255, 59, 48, 0.25);
  border-left-color: rgba(255, 59, 48, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(255, 59, 48, 0.25);
  border-top-color: rgba(255, 59, 48, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 175, 82, 222;
  background-color: rgba(175, 82, 222, 0.15);
  border-bottom-color: rgba(175, 82, 222, 0.25);
  border-left-color: rgba(175, 82, 222, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(175, 82, 222, 0.25);
  border-top-color: rgba(175, 82, 222, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 255, 59, 48;
  background-color: rgba(255, 59, 48, 0.15);
  border-bottom-color: rgba(255, 59, 48, 0.25);
  border-left-color: rgba(255, 59, 48, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(255, 59, 48, 0.25);
  border-top-color: rgba(255, 59, 48, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 0, 122, 255;
  background-color: rgba(0, 122, 255, 0.15);
  border-bottom-color: rgba(0, 122, 255, 0.25);
  border-left-color: rgba(0, 122, 255, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(0, 122, 255, 0.25);
  border-top-color: rgba(0, 122, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 0, 122, 255;
  background-color: rgba(0, 122, 255, 0.15);
  border-bottom-color: rgba(0, 122, 255, 0.25);
  border-left-color: rgba(0, 122, 255, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(0, 122, 255, 0.25);
  border-top-color: rgba(0, 122, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 255, 149, 0;
  background-color: rgba(255, 149, 0, 0.15);
  border-bottom-color: rgba(255, 149, 0, 0.25);
  border-left-color: rgba(255, 149, 0, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(255, 149, 0, 0.25);
  border-top-color: rgba(255, 149, 0, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.15);
  border-left-color: rgba(158, 158, 158, 0.9);
  border-left-width: 6px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 40, 205, 65;
  background-color: rgba(40, 205, 65, 0.15);
  border-bottom-color: rgba(40, 205, 65, 0.25);
  border-left-color: rgba(40, 205, 65, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(40, 205, 65, 0.25);
  border-top-color: rgba(40, 205, 65, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 85, 190, 240;
  background-color: rgba(85, 190, 240, 0.15);
  border-bottom-color: rgba(85, 190, 240, 0.25);
  border-left-color: rgba(85, 190, 240, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(85, 190, 240, 0.25);
  border-top-color: rgba(85, 190, 240, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 0, 122, 255;
  background-color: rgba(0, 122, 255, 0.15);
  border-bottom-color: rgba(0, 122, 255, 0.25);
  border-left-color: rgba(0, 122, 255, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(0, 122, 255, 0.25);
  border-top-color: rgba(0, 122, 255, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 255, 149, 0;
  background-color: rgba(255, 149, 0, 0.15);
  border-bottom-color: rgba(255, 149, 0, 0.25);
  border-left-color: rgba(255, 149, 0, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(255, 149, 0, 0.25);
  border-top-color: rgba(255, 149, 0, 0.25);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
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

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.05);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.05);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.05);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body h1 {
  color: rgb(166, 227, 161);
}

html[saved-theme="light"] body h2 {
  color: rgb(148, 226, 213);
}

html[saved-theme="light"] body h3 {
  color: rgb(137, 220, 235);
}

html[saved-theme="light"] body h4 {
  color: rgb(116, 199, 236);
}

html[saved-theme="light"] body h5 {
  color: rgb(135, 176, 249);
}

html[saved-theme="light"] body h6 {
  color: rgb(135, 176, 249);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
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
    footer: `html[saved-theme="light"] body footer {
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

html[saved-theme="light"] body footer ul li a {
  color: color(srgb 0.360784 0.360784 0.360784 / 0.8);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(92, 92, 92);
}`,
    misc: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .metadata-properties {
  background-color: rgb(246, 246, 246);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(92, 92, 92);
  border-left-color: rgb(92, 92, 92);
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
  color: rgb(92, 92, 92);
}

html[saved-theme="light"] body ul.tags > li {
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
  border-top-width: 1px;
}`,
  },
};
