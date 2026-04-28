import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "minimalists-paradise",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["fira-code"],
    styleSettingsId: "mp-theme",
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
  --citation-bg: hsl(258, 88%, 66%);
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
  --external-link-text-shadow: 1px 1px 2px hsl(258, 88%, 66%);
  --file-header-background: #000000;
  --file-header-background-focused: #000000;
  --file-title-color: #59595984;
  --flair-background: #313435A6;
  --footnote-input-background-active: color-mix(in srgb, #000000 70%, white 30%);
  --graph-bg: #0c0c0c;
  --graph-line: #59595984;
  --graph-node: hsl(258, 88%, 66%);
  --graph-node-focused: #59595984;
  --graph-node-tag: hsl(258, 88%, 66%);
  --header-height: 35px;
  --heading-spacing: 10px;
  --highlight: var(--text-highlight-bg, hsl(258, 88%, 66%));
  --hr-color: #59595984;
  --ic-border: 0px;
  --ic-border-color: #59595984;
  --ic-horizontal-rule-color: #59595984;
  --ic-horizontal-rule-size: 1px;
  --ic-image-border: 0px;
  --ic-image-border-color: #59595984;
  --ic-image-round-corners: 0px;
  --ic-infobox-color: #313435A6;
  --ic-infobox-title-color: hsl(258, 88%, 66%);
  --ic-inside-padding: 24px;
  --ic-label-alignment: left;
  --ic-label-padding: 0.5rem;
  --ic-label-width: 80px;
  --ic-outside-padding: 20px;
  --ic-section-alignment: Center;
  --ic-section-background-color: hsl(258, 88%, 66%);
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
  --inline-title-color: hsl(258, 88%, 66%);
  --input-radius: 16px;
  --interactive-normal: #313435A6;
  --light: var(--background-primary, #000000);
  --lightgray: var(--background-secondary, #000000);
  --link-color: #9FA0A4;
  --link-external-color: #9FA0A4;
  --link-unresolved-color: #9FA0A4;
  --list-marker-color: hsl(258, 88%, 66%);
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
  --secondary: var(--text-accent, #59595984);
  --setting-items-background: #000000;
  --shadow-base: inset 1px 1px 2px rgba(255, 255, 255, 0.5), inset -1px -1px 2px rgba(255, 255, 255, 0.5), inset 0 4px 16px rgba(255, 255, 255, 0.025);
  --shadow-border: 0 0 1px 0 rgba(0, 0, 0, 0.4);
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(255, 255, 255, 0.04) 0px 2px 4px -2px;
  --shadow-xxs: inset 0 6px 50px rgba(255, 255, 255, 0.08), inset 1px 1px 2px rgba(255, 255, 255, 0.5), inset -1px -1px 2px rgba(255, 255, 255, 0.5), inset 0 4px 16px rgba(255, 255, 255, 0.025);
  --shiki-code-background: #0c0c0c;
  --shiki-code-block-border-radius: 16px;
  --shiki-code-block-spacing: 4px;
  --side-padding: 20px;
  --status-bar-background: #000000;
  --status-bar-border-color: #59595984;
  --suggestion-background: #000000;
  --tab-background-active: hsl(258, 88%, 66%);
  --tab-container-background: #000000;
  --tab-outline-color: #59595984;
  --tab-radius: 6.4px;
  --tab-size: 20px;
  --tab-stacked-header-width: 35px;
  --tab-switcher-background: #000000;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent);
  --tab-text-color-focused-highlighted: #59595984;
  --table-header-background: hsl(258, 88%, 66%);
  --tag-color: #59595984;
  --tag-color-hover: #59595984;
  --tertiary: var(--text-accent, #59595984);
  --text-accent: #59595984;
  --text-color: #ffffff;
  --text-highlight-bg: hsl(258, 88%, 66%);
  --text-selection: #a5aab680;
  --textHighlight: var(--text-highlight-bg, hsl(258, 88%, 66%));
  --titlebar-background: #000000;
  --titlebar-background-focused: #000000;
  --toolbar-option-width: auto;
  --traffic-lights-offset-x: 35px;
  --traffic-lights-offset-y: 35px;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
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

html[saved-theme="dark"] body html {
  --ic-border: 0px;
  --ic-horizontal-rule-size: 1px;
  --ic-image-border: 0px;
  --ic-image-round-corners: 0px;
  --ic-inside-padding: 24px;
  --ic-label-alignment: left;
  --ic-label-padding: 0.5rem;
  --ic-label-width: 80px;
  --ic-outside-padding: 20px;
  --ic-section-alignment: Center;
  --ic-section-background-color: rgba(128, 128, 255, 0.1);
  --ic-section-border: 0px;
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
}`,
    typography: `html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-radius: 16px;
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(159, 160, 164);
  outline: rgb(159, 160, 164) none 0px;
  text-decoration-color: rgb(159, 160, 164);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(159, 160, 164);
  outline: rgb(159, 160, 164) none 0px;
  text-decoration-color: rgb(159, 160, 164);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="dark"] body a.internal-link.broken {
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
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(12, 12, 12);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    images: `html[saved-theme="dark"] body figure {
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
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 0, 0);
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
  --callout-color: #313435A6;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(83, 223, 221, 0.2), rgba(83, 223, 221, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(83, 223, 221, 0.2), rgba(83, 223, 221, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: #313435A6;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(251, 70, 76, 0.2), rgba(251, 70, 76, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(251, 70, 76, 0.2), rgba(251, 70, 76, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: #313435A6;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(251, 70, 76, 0.2), rgba(251, 70, 76, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(251, 70, 76, 0.2), rgba(251, 70, 76, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: #313435A6;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(168, 130, 255, 0.2), rgba(168, 130, 255, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(168, 130, 255, 0.2), rgba(168, 130, 255, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: #313435A6;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(251, 70, 76, 0.2), rgba(251, 70, 76, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(251, 70, 76, 0.2), rgba(251, 70, 76, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: #313435A6;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(2, 122, 255, 0.2), rgba(2, 122, 255, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(2, 122, 255, 0.2), rgba(2, 122, 255, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: #313435A6;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="infobox"] {
  --callout-color: #313435A6;
  --table-border-color: #59595984;
  background-color: rgba(49, 52, 53, 0.65);
  border-bottom-color: rgba(89, 89, 89, 0.518);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(89, 89, 89, 0.518);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(89, 89, 89, 0.518);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(89, 89, 89, 0.518);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: rgba(97, 97, 97, 0.15) 0px 3px 8px 0px;
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 20px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="infoboxleft"] {
  --callout-color: #313435A6;
  --table-border-color: #59595984;
  background-color: rgba(49, 52, 53, 0.65);
  border-bottom-color: rgba(89, 89, 89, 0.518);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(89, 89, 89, 0.518);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(89, 89, 89, 0.518);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(89, 89, 89, 0.518);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: rgba(97, 97, 97, 0.15) 0px 3px 8px 0px;
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 20px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="infoboxright"] {
  --callout-color: #313435A6;
  --table-border-color: #59595984;
  background-color: rgba(49, 52, 53, 0.65);
  border-bottom-color: rgba(89, 89, 89, 0.518);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(89, 89, 89, 0.518);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(89, 89, 89, 0.518);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(89, 89, 89, 0.518);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: rgba(97, 97, 97, 0.15) 0px 3px 8px 0px;
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 20px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(2, 122, 255, 0.2), rgba(2, 122, 255, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(2, 122, 255, 0.2), rgba(2, 122, 255, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: #313435A6;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(233, 151, 63, 0.2), rgba(233, 151, 63, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(233, 151, 63, 0.2), rgba(233, 151, 63, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: #313435A6;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(158, 158, 158, 0.2), rgba(158, 158, 158, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(158, 158, 158, 0.2), rgba(158, 158, 158, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: #313435A6;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(68, 207, 110, 0.2), rgba(68, 207, 110, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(68, 207, 110, 0.2), rgba(68, 207, 110, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: #313435A6;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tabbed"] {
  --callout-color: #313435A6;
  --table-border-color: #59595984;
  background-color: rgba(49, 52, 53, 0.65);
  border-bottom-color: rgba(49, 52, 53, 0.65);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(49, 52, 53, 0.65);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(49, 52, 53, 0.65);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(49, 52, 53, 0.65);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(255, 255, 255, 0.04) 0px 2px 4px -2px;
  color: rgb(218, 218, 218);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(83, 223, 221, 0.2), rgba(83, 223, 221, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(83, 223, 221, 0.2), rgba(83, 223, 221, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: #313435A6;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(2, 122, 255, 0.2), rgba(2, 122, 255, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(2, 122, 255, 0.2), rgba(2, 122, 255, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: #313435A6;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(233, 151, 63, 0.2), rgba(233, 151, 63, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(233, 151, 63, 0.2), rgba(233, 151, 63, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: #313435A6;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(255, 255, 255);
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

html[saved-theme="dark"] body .callout[data-callout="infobox"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="infoboxleft"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="infoboxright"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="tabbed"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgba(89, 89, 89, 0.518);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(138, 92, 245);
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
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgba(89, 89, 89, 0.518);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgba(89, 89, 89, 0.518);
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
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(89, 89, 89, 0.518);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgba(89, 89, 89, 0.518);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgba(89, 89, 89, 0.518);
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
    canvas: `html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(0, 0, 0);
}`,
    bases: `html[saved-theme="dark"] body .bases-table {
  border-color: rgb(54, 54, 54);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  margin-bottom: 0px;
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgba(89, 89, 89, 0.518);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(0, 0, 0);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(12, 12, 12);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgba(0, 0, 0, 0);
}`,
    misc: `html[saved-theme="dark"] body .navigation-progress {
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
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgba(89, 89, 89, 0.518);
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
  --citation-bg: hsl(258, 88%, 66%);
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
  --external-link-text-shadow: 1px 1px 2px hsl(258, 88%, 66%);
  --file-header-background: #9096A4;
  --file-header-background-focused: #9096A4;
  --file-title-color: #25252586;
  --flair-background: #9096A4;
  --footnote-input-background-active: color-mix(in srgb, #9096A4 70%, black 30%);
  --graph-bg: #a5aab6;
  --graph-line: #25252586;
  --graph-node: hsl(258, 88%, 66%);
  --graph-node-focused: #25252586;
  --graph-node-tag: hsl(258, 88%, 66%);
  --header-height: 35px;
  --heading-spacing: 10px;
  --highlight: var(--text-highlight-bg, hsl(258, 88%, 66%));
  --hr-color: #25252586;
  --ic-border: 0px;
  --ic-border-color: #25252586;
  --ic-horizontal-rule-color: #25252586;
  --ic-horizontal-rule-size: 1px;
  --ic-image-border: 0px;
  --ic-image-border-color: #25252586;
  --ic-image-round-corners: 0px;
  --ic-infobox-color: #9096A4;
  --ic-infobox-title-color: hsl(258, 88%, 66%);
  --ic-inside-padding: 24px;
  --ic-label-alignment: left;
  --ic-label-padding: 0.5rem;
  --ic-label-width: 80px;
  --ic-outside-padding: 20px;
  --ic-section-alignment: Center;
  --ic-section-background-color: hsl(258, 88%, 66%);
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
  --inline-title-color: hsl(258, 88%, 66%);
  --input-radius: 16px;
  --interactive-accent: #a5aab680;
  --interactive-accent-hover: #a5aab640;
  --interactive-normal: #9096A4;
  --light: var(--background-primary, #9096A4);
  --lightgray: var(--background-secondary, #9096A4);
  --link-color: #5F6369;
  --link-external-color: #5F6369;
  --link-unresolved-color: #5F6369;
  --list-marker-color: hsl(258, 88%, 66%);
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
  --secondary: var(--text-accent, #25252586);
  --setting-items-background: #9096A4;
  --shadow-base: inset 1px 1px 2px rgba(255, 255, 255, 0.5), inset -1px -1px 2px rgba(255, 255, 255, 0.5), inset 0 4px 16px rgba(255, 255, 255, 0.025);
  --shadow-border: 0 0 1px 0 rgba(0, 0, 0, 0.4);
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(0, 0, 0, 0.04) 0px 2px 4px -2px;
  --shadow-xxs: inset 0 6px 50px rgba(255, 255, 255, 0.08), inset 1px 1px 2px rgba(255, 255, 255, 0.5), inset -1px -1px 2px rgba(255, 255, 255, 0.5), inset 0 4px 16px rgba(255, 255, 255, 0.025);
  --shiki-code-background: #A5AAB6;
  --shiki-code-block-border-radius: 16px;
  --shiki-code-block-spacing: 4px;
  --side-padding: 20px;
  --status-bar-background: #9096A4;
  --status-bar-border-color: #25252586;
  --suggestion-background: #9096A4;
  --tab-background-active: hsl(258, 88%, 66%);
  --tab-container-background: #9096A4;
  --tab-outline-color: #25252586;
  --tab-radius: 6.4px;
  --tab-size: 20px;
  --tab-stacked-header-width: 35px;
  --tab-switcher-background: #9096A4;
  --tab-switcher-menubar-background: linear-gradient(to top, #9096A4, transparent);
  --tab-text-color-focused-highlighted: #25252586;
  --table-drag-handle-background-active: #a5aab680;
  --table-header-background: hsl(258, 88%, 66%);
  --table-selection-border-color: #a5aab680;
  --tag-color: #25252586;
  --tag-color-hover: #25252586;
  --tertiary: var(--interactive-accent-hover, #a5aab640);
  --text-accent: #25252586;
  --text-color: #000000;
  --text-highlight-bg: hsl(258, 88%, 66%);
  --text-selection: #a5aab680;
  --textHighlight: var(--text-highlight-bg, hsl(258, 88%, 66%));
  --titlebar-background: #9096A4;
  --titlebar-background-focused: #9096A4;
  --toolbar-option-width: auto;
  --traffic-lights-offset-x: 35px;
  --traffic-lights-offset-y: 35px;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
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

html[saved-theme="light"] body html {
  --ic-border: 0px;
  --ic-horizontal-rule-size: 1px;
  --ic-image-border: 0px;
  --ic-image-round-corners: 0px;
  --ic-inside-padding: 24px;
  --ic-label-alignment: left;
  --ic-label-padding: 0.5rem;
  --ic-label-width: 80px;
  --ic-outside-padding: 20px;
  --ic-section-alignment: Center;
  --ic-section-background-color: rgba(128, 128, 255, 0.1);
  --ic-section-border: 0px;
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
}`,
    typography: `html[saved-theme="light"] body .text-highlight {
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-radius: 16px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(165, 170, 182, 0.5);
  border-color: rgba(165, 170, 182, 0.5);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(95, 99, 105);
  outline: rgb(95, 99, 105) none 0px;
  text-decoration-color: rgb(95, 99, 105);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(95, 99, 105);
  outline: rgb(95, 99, 105) none 0px;
  text-decoration-color: rgb(95, 99, 105);
  transition: opacity 0.15s ease-in-out;
}

html[saved-theme="light"] body a.internal-link.broken {
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
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(238, 238, 238);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(165, 170, 182);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    images: `html[saved-theme="light"] body figure {
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
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(144, 150, 164);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(144, 150, 164);
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
  --callout-color: #9096A4;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(0, 191, 188, 0.2), rgba(0, 191, 188, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(0, 191, 188, 0.2), rgba(0, 191, 188, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: #9096A4;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(233, 49, 71, 0.2), rgba(233, 49, 71, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(233, 49, 71, 0.2), rgba(233, 49, 71, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: #9096A4;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(233, 49, 71, 0.2), rgba(233, 49, 71, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(233, 49, 71, 0.2), rgba(233, 49, 71, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: #9096A4;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(120, 82, 238, 0.2), rgba(120, 82, 238, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(120, 82, 238, 0.2), rgba(120, 82, 238, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: #9096A4;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(233, 49, 71, 0.2), rgba(233, 49, 71, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(233, 49, 71, 0.2), rgba(233, 49, 71, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: #9096A4;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(8, 109, 221, 0.2), rgba(8, 109, 221, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(8, 109, 221, 0.2), rgba(8, 109, 221, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: #9096A4;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="infobox"] {
  --callout-color: #9096A4;
  --table-border-color: #25252586;
  background-color: rgb(144, 150, 164);
  border-bottom-color: rgba(37, 37, 37, 0.525);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(37, 37, 37, 0.525);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(37, 37, 37, 0.525);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(37, 37, 37, 0.525);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 10px 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 20px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="infoboxleft"] {
  --callout-color: #9096A4;
  --table-border-color: #25252586;
  background-color: rgb(144, 150, 164);
  border-bottom-color: rgba(37, 37, 37, 0.525);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(37, 37, 37, 0.525);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(37, 37, 37, 0.525);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(37, 37, 37, 0.525);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 10px 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 20px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="infoboxright"] {
  --callout-color: #9096A4;
  --table-border-color: #25252586;
  background-color: rgb(144, 150, 164);
  border-bottom-color: rgba(37, 37, 37, 0.525);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(37, 37, 37, 0.525);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgba(37, 37, 37, 0.525);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(37, 37, 37, 0.525);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-style: solid;
  border-top-width: 0px;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 10px 0px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 20px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(8, 109, 221, 0.2), rgba(8, 109, 221, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(8, 109, 221, 0.2), rgba(8, 109, 221, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: #9096A4;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(236, 117, 0, 0.2), rgba(236, 117, 0, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(236, 117, 0, 0.2), rgba(236, 117, 0, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: #9096A4;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(158, 158, 158, 0.2), rgba(158, 158, 158, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(158, 158, 158, 0.2), rgba(158, 158, 158, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: #9096A4;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(8, 185, 78, 0.2), rgba(8, 185, 78, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(8, 185, 78, 0.2), rgba(8, 185, 78, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: #9096A4;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="tabbed"] {
  --callout-color: #9096A4;
  --table-border-color: #25252586;
  background-color: rgb(144, 150, 164);
  border-bottom-color: rgb(144, 150, 164);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(144, 150, 164);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(144, 150, 164);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(144, 150, 164);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(0, 0, 0, 0.04) 0px 2px 4px -2px;
  color: rgb(34, 34, 34);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(0, 191, 188, 0.2), rgba(0, 191, 188, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(0, 191, 188, 0.2), rgba(0, 191, 188, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: #9096A4;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(8, 109, 221, 0.2), rgba(8, 109, 221, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(8, 109, 221, 0.2), rgba(8, 109, 221, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: #9096A4;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background: rgba(0, 0, 0, 0) linear-gradient(rgba(236, 117, 0, 0.2), rgba(236, 117, 0, 0.3)) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(rgba(236, 117, 0, 0.2), rgba(236, 117, 0, 0.3));
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: #9096A4;
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(0, 0, 0);
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

html[saved-theme="light"] body .callout[data-callout="infobox"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="infoboxleft"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="infoboxright"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body .callout[data-callout="tabbed"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgba(37, 37, 37, 0.525);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(138, 92, 245);
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
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 1px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgba(37, 37, 37, 0.525);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgba(37, 37, 37, 0.525);
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
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(37, 37, 37, 0.525);
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgba(37, 37, 37, 0.525);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgba(37, 37, 37, 0.525);
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
    canvas: `html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(144, 150, 164);
}`,
    bases: `html[saved-theme="light"] body .bases-table {
  border-color: rgb(224, 224, 224);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  margin-bottom: 0px;
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgba(37, 37, 37, 0.525);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(144, 150, 164);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(165, 170, 182);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgba(0, 0, 0, 0);
}`,
    misc: `html[saved-theme="light"] body .navigation-progress {
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
}

html[saved-theme="light"] body ul.tags > li {
  color: rgba(37, 37, 37, 0.525);
}`,
  },
  classSettings: {
    "frosted-glass-toggle": `.ice-glass .nav-buttons-container {
background-color: transparent;
box-shadow: var(--shadow-xxs);
backdrop-filter: var(--blur-s-alt);
}

.frosted-glass .workspace-leaf-content {
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
background-color: transparent !important;
}

.ice-glass .workspace-leaf-content {
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
background-color: transparent !important;
}

.frozen-glass .workspace-leaf-content {
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
background-color: transparent !important;
}

body.is-mobile.frosted-glass .workspace-drawer-inner {
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-s-alt);
}

body.is-mobile.frosted-glass .workspace-leaf-content[data-type='file-explorer'] {
box-shadow: none !important;
backdrop-filter: none !important;
border-right: 1px solid rgba(255, 255, 255, 0.4);
border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}

.frosted-glass .nn-navigation-pane, .frosted-glass .nn-list-pane, .frosted-glass .workspace-leaf-content[data-type="notebook-navigator"], .frosted-glass .nn-split-container, .frosted-glass .view-content.notebook-navigator {
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
background-color: transparent !important;
}

body:not(.is-mobile).frosted-glass .workspace-split.mod-left-split .workspace-sidedock-vault-profile, body:not(.is-mobile).ice-glass .workspace-split.mod-left-split .workspace-sidedock-vault-profile, body:not(.is-mobile).frozen-glass .workspace-split.mod-left-split .workspace-sidedock-vault-profile {
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
}

body:not(.is-mobile).frosted-glass .workspace-split.mod-left-split .modal-container, body:not(.is-mobile).ice-glass .workspace-split.mod-left-split .modal, body:not(.is-mobile).frozen-glass .workspace-split.mod-left-split .modal {
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
}

.frosted-glass .workspace-tab-header.is-active.mod-active {
flex-grow: 2 !important;
max-width: 250px;
background-color: var(--color-accent);
box-shadow: var(--shadow-xs) !important;
backdrop-filter: var(--blur-s);
box-sizing: border-box;
border: none;
}

.frosted-glass .mod-left-split .workspace-tab-header-container .is-active, .frosted-glass .mod-right-split .workspace-tab-header-container .is-active {
background-color: var(--color-accent);
box-sizing: border-box;
border: none;
box-shadow: var(--shadow-xs) !important;
backdrop-filter: var(--blur-s);
}

.ice-glass .workspace-tab-header {
box-shadow: var(--shadow-xs) !important;
backdrop-filter: var(--blur-s);
}

.frozen-glass .workspace-tab-header {
box-shadow: var(--shadow-xs) !important;
backdrop-filter: var(--blur-s);
}

.frozen-glass .nav-buttons-container {
background-color: transparent;
box-shadow: var(--shadow-xs);
backdrop-filter: var(--blur-s-alt);
}

.frozen-glass .side-dock-ribbon-action {
border-radius: var(--tab-radius);
box-shadow: var(--shadow-xs);
backdrop-filter: var(--blur-s);
}

.labeled-nav.frosted-glass .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-header-container-inner, .labeled-nav.ice-glass .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-header-container-inner, .labeled-nav.frozen-glass .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-header-container-inner {
padding: var(--size-4-2) var(--size-4-2);
flex-direction: column !important;
margin-top: var(--labeled-nav-top-margin);
margin-bottom: var(--cards-gap);
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
align-items: flex-start !important;
width: 100%;
border: 1px solid var(--divider-color) !important;
border-radius: var(--card-radius);
}`,
    "frosted-glass": `.frosted-glass-toggle.ice-glass .nav-buttons-container {
background-color: transparent;
box-shadow: var(--shadow-xxs);
backdrop-filter: var(--blur-s-alt);
}

.frosted-glass-toggle.frosted-glass .workspace-leaf-content {
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
background-color: transparent !important;
}

.frosted-glass-toggle.ice-glass .workspace-leaf-content {
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
background-color: transparent !important;
}

.frosted-glass-toggle.frozen-glass .workspace-leaf-content {
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
background-color: transparent !important;
}

body.is-mobile.frosted-glass-toggle.frosted-glass .workspace-drawer-inner {
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-s-alt);
}

body.is-mobile.frosted-glass-toggle.frosted-glass .workspace-leaf-content[data-type='file-explorer'] {
box-shadow: none !important;
backdrop-filter: none !important;
border-right: 1px solid rgba(255, 255, 255, 0.4);
border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}

.frosted-glass-toggle.frosted-glass .nn-navigation-pane, .frosted-glass-toggle.frosted-glass .nn-list-pane, .frosted-glass-toggle.frosted-glass .workspace-leaf-content[data-type="notebook-navigator"], .frosted-glass-toggle.frosted-glass .nn-split-container, .frosted-glass-toggle.frosted-glass .view-content.notebook-navigator {
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
background-color: transparent !important;
}

body:not(.is-mobile).frosted-glass-toggle.frosted-glass .workspace-split.mod-left-split .workspace-sidedock-vault-profile, body:not(.is-mobile).frosted-glass-toggle.ice-glass .workspace-split.mod-left-split .workspace-sidedock-vault-profile, body:not(.is-mobile).frosted-glass-toggle.frozen-glass .workspace-split.mod-left-split .workspace-sidedock-vault-profile {
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
}

body:not(.is-mobile).frosted-glass-toggle.frosted-glass .workspace-split.mod-left-split .modal-container, body:not(.is-mobile).frosted-glass-toggle.ice-glass .workspace-split.mod-left-split .modal, body:not(.is-mobile).frosted-glass-toggle.frozen-glass .workspace-split.mod-left-split .modal {
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
}

.frosted-glass-toggle.frosted-glass .workspace-tab-header.is-active.mod-active {
flex-grow: 2 !important;
max-width: 250px;
background-color: var(--color-accent);
box-shadow: var(--shadow-xs) !important;
backdrop-filter: var(--blur-s);
box-sizing: border-box;
border: none;
}

.frosted-glass-toggle.frosted-glass .mod-left-split .workspace-tab-header-container .is-active, .frosted-glass-toggle.frosted-glass .mod-right-split .workspace-tab-header-container .is-active {
background-color: var(--color-accent);
box-sizing: border-box;
border: none;
box-shadow: var(--shadow-xs) !important;
backdrop-filter: var(--blur-s);
}

.frosted-glass-toggle.ice-glass .workspace-tab-header {
box-shadow: var(--shadow-xs) !important;
backdrop-filter: var(--blur-s);
}

.frosted-glass-toggle.frozen-glass .workspace-tab-header {
box-shadow: var(--shadow-xs) !important;
backdrop-filter: var(--blur-s);
}

.frosted-glass-toggle.frozen-glass .nav-buttons-container {
background-color: transparent;
box-shadow: var(--shadow-xs);
backdrop-filter: var(--blur-s-alt);
}

.frosted-glass-toggle.frozen-glass .side-dock-ribbon-action {
border-radius: var(--tab-radius);
box-shadow: var(--shadow-xs);
backdrop-filter: var(--blur-s);
}

.labeled-nav.frosted-glass-toggle.frosted-glass .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-header-container-inner, .labeled-nav.frosted-glass-toggle.ice-glass .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-header-container-inner, .labeled-nav.frosted-glass-toggle.frozen-glass .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-header-container-inner {
padding: var(--size-4-2) var(--size-4-2);
flex-direction: column !important;
margin-top: var(--labeled-nav-top-margin);
margin-bottom: var(--cards-gap);
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
align-items: flex-start !important;
width: 100%;
border: 1px solid var(--divider-color) !important;
border-radius: var(--card-radius);
}`,
    "ice-glass": `.frosted-glass-toggle.ice-glass .nav-buttons-container {
background-color: transparent;
box-shadow: var(--shadow-xxs);
backdrop-filter: var(--blur-s-alt);
}

.frosted-glass-toggle.ice-glass .workspace-leaf-content {
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
background-color: transparent !important;
}

body:not(.is-mobile).frosted-glass-toggle.ice-glass .workspace-split.mod-left-split .workspace-sidedock-vault-profile {
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
}

body:not(.is-mobile).frosted-glass-toggle.ice-glass .workspace-split.mod-left-split .modal {
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
}

.frosted-glass-toggle.ice-glass .workspace-tab-header {
box-shadow: var(--shadow-xs) !important;
backdrop-filter: var(--blur-s);
}

.labeled-nav.frosted-glass-toggle.ice-glass .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-header-container-inner {
padding: var(--size-4-2) var(--size-4-2);
flex-direction: column !important;
margin-top: var(--labeled-nav-top-margin);
margin-bottom: var(--cards-gap);
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
align-items: flex-start !important;
width: 100%;
border: 1px solid var(--divider-color) !important;
border-radius: var(--card-radius);
}`,
    "frozen-glass": `.frosted-glass-toggle.frozen-glass .workspace-leaf-content {
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
background-color: transparent !important;
}

body:not(.is-mobile).frosted-glass-toggle.frozen-glass .workspace-split.mod-left-split .workspace-sidedock-vault-profile {
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
}

body:not(.is-mobile).frosted-glass-toggle.frozen-glass .workspace-split.mod-left-split .modal {
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
}

.frosted-glass-toggle.frozen-glass .workspace-tab-header {
box-shadow: var(--shadow-xs) !important;
backdrop-filter: var(--blur-s);
}

.frosted-glass-toggle.frozen-glass .nav-buttons-container {
background-color: transparent;
box-shadow: var(--shadow-xs);
backdrop-filter: var(--blur-s-alt);
}

.frosted-glass-toggle.frozen-glass .side-dock-ribbon-action {
border-radius: var(--tab-radius);
box-shadow: var(--shadow-xs);
backdrop-filter: var(--blur-s);
}

.labeled-nav.frosted-glass-toggle.frozen-glass .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-header-container-inner {
padding: var(--size-4-2) var(--size-4-2);
flex-direction: column !important;
margin-top: var(--labeled-nav-top-margin);
margin-bottom: var(--cards-gap);
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
align-items: flex-start !important;
width: 100%;
border: 1px solid var(--divider-color) !important;
border-radius: var(--card-radius);
}`,
    "custom-color-accent-light-toggle": `.custom-color-accent-light-toggle {
--color-accent: var(--custom-color-accent-light);
}

.colored-text.custom-color-accent-light-toggle {
--text-normal: color-mix(in srgb, var(--custom-color-accent-light) 50%, black);
}`,
    "custom-color-accent-dark-toggle": `.custom-color-accent-dark-toggle {
--color-accent: var(--custom-color-accent-dark);
}

.colored-text.custom-color-accent-dark-toggle {
--text-normal: color-mix(in srgb, var(--custom-color-accent-dark) 50%, white);
}`,
    "extended-dark-color-schemes-toggle": `.abyss {
--background-default: #10081E;
--text-color: #ffffff;
--background-primary: #080212;
--background-primary-alt: var(--background-primary);
--background-secondary: var(--background-primary);
--background-secondary-alt: var(--background-primary);
--background-modifier-border: var(--divider-color);
--card-bg: #080212;
--divider-color: #805cbe84;
--blockquote-border-color: #300C6E;
--blockquote-background-color: var(--interactive-normal);
--blockquote-text: inherit;
--citation-bg: var(--color-accent);
--card-shadow: 0 3px 8px rgba(97, 97, 97, 0.15);
--graph-bg: var(--color-panel);
--graph-line: var(--divider-color);
--tab-background-active: rgba(255, 255, 255, 0.1);
--caret-color: var(--text-color);
--color-panel: #10081E;
--table-header-background: var(--color-accent);
--custom-color-accent-dark: #4f288e;
--icon-color: var(--divider-color);
--file-title-color: var(--divider-color);
--interactive-normal: #190D31;
--graph-node-tag: var(--color-accent);
--text-accent: var(--divider-color);
--link-color: #BE99FF;
--link-external-color: var(--link-color);
--bases-table-border-color: var(--divider-color) !important;
--link-unresolved-color: var(--link-color);
--graph-node: var(--divider-color);
--background-modifier-hover: color-mix(in srgb, var(--background-primary) 70%, white 30%);
}

.atlantic {
--background-default: #101b2d;
--text-color: #f0f0f0;
--background-primary: #0b121e;
--background-primary-alt: var(--background-primary);
--background-secondary: var(--background-primary);
--background-secondary-alt: var(--background-primary);
--background-modifier-border: var(--divider-color);
--card-bg: #0b121e;
--divider-color: #2d5e7f84;
--blockquote-border-color: #134667;
--blockquote-background-color: var(--interactive-normal);
--blockquote-text: inherit;
--citation-bg: var(--color-accent);
--card-shadow: 0 3px 8px rgba(97, 97, 97, 0.15);
--graph-bg: var(--color-panel);
--graph-line: var(--divider-color);
--tab-background-active: rgba(255, 255, 255, 0.1);
--caret-color: var(--text-color);
--color-panel: #101b2d;
--table-header-background: var(--color-accent);
--custom-color-accent-dark: #003566;
--icon-color: var(--divider-color);
--file-title-color: var(--divider-color);
--interactive-normal: #15243C;
--graph-node-tag: var(--color-accent);
--text-accent: var(--divider-color);
--link-color: #88AAC1;
--link-external-color: var(--link-color);
--bases-table-border-color: var(--divider-color);
--link-unresolved-color: var(--link-color);
--graph-node: var(--divider-color);
--background-modifier-hover: color-mix(in srgb, var(--background-primary) 70%, white 30%);
}

.moss {
--background-default: #0A150C;
--text-color: #f0f0f0;
--background-primary: #070d08;
--background-primary-alt: var(--background-primary);
--background-secondary: var(--background-primary);
--background-secondary-alt: var(--background-primary);
--background-modifier-border: var(--divider-color);
--card-bg: #070d08;
--divider-color: #48745084;
--blockquote-border-color: #214528;
--blockquote-background-color: var(--interactive-normal);
--blockquote-text: inherit;
--citation-bg: var(--color-accent);
--card-shadow: 0 3px 8px rgba(97, 97, 97, 0.15);
--graph-bg: var(--color-panel);
--graph-line: var(--divider-color);
--tab-background-active: rgba(255, 255, 255, 0.1);
--caret-color: var(--text-color);
--color-panel: #0A150C;
--table-header-background: var(--color-accent);
--custom-color-accent-dark: #2E6038;
--icon-color: var(--divider-color);
--file-title-color: var(--divider-color);
--interactive-normal: #1B3720;
--graph-node-tag: var(--color-accent);
--text-accent: var(--divider-color);
--link-color: #B4FAC1;
--link-external-color: var(--link-color);
--bases-table-border-color: var(--divider-color);
--link-unresolved-color: var(--link-color);
--graph-node: var(--divider-color);
--background-modifier-hover: color-mix(in srgb, var(--background-primary) 70%, white 30%);
}

.onyx {
--background-default: #0F161A;
--text-color: #f0f0f0;
--background-primary: #050A0C;
--background-primary-alt: var(--background-primary);
--background-secondary: var(--background-primary);
--background-secondary-alt: var(--background-primary);
--background-modifier-border: var(--divider-color);
--blockquote-background-color: var(--interactive-normal);
--blockquote-border-color: #263740;
--citation-bg: var(--color-accent);
--graph-bg: var(--background-default);
--graph-line: var(--divider-color);
--tab-background-active: rgba(255, 255, 255, 0.1);
--caret-color: var(--text-color);
--card-bg: #050a0c;
--divider-color: #4d687684;
--color-panel: #0F161A;
--table-header-background: var(--color-accent);
--text-color: #F0F0F0;
--custom-color-accent-dark: #2F424C;
--icon-color: var(--divider-color);
--file-title-color: var(--divider-color);
--interactive-normal: #1E2C34;
--text-accent: var(--divider-color);
--graph-node-tag: var(--color-accent);
--link-color: #9DB6C2;
--link-external-color: var(--link-color);
--bases-table-border-color: var(--divider-color);
--link-unresolved-color: var(--link-color);
--graph-node: var(--divider-color);
--background-modifier-hover: color-mix(in srgb, var(--background-primary) 70%, white 30%);
}

.colored-headers.atlantic:not(.colored-headers-override-toggle) {
--header-1: #1E3A5F;
--header-2: #29527A;
--header-3: #356B95;
--header-4: #4184B0;
--header-5: #4C9DCC;
--header-6: #58B6E7;
}

.colored-headers.moss:not(.colored-headers-override-toggle) {
--header-1: #2C4F3D;
--header-2: #3A664E;
--header-3: #48805E;
--header-4: #56996F;
--header-5: #64B380;
--header-6: #72CC92;
}

.colored-headers.onyx:not(.colored-headers-override-toggle) {
--header-1: #474E5C;
--header-2: #5E6573;
--header-3: #787F8D;
--header-4: #979DAA;
--header-5: #B7BCC9;
--header-6: #D8DCE6;
}

.colored-headers.abyss:not(.colored-headers-override-toggle) {
--header-1: #9272CC;
--header-2: #8064B3;
--header-3: #6F5699;
--header-4: #5E4880;
--header-5: #4E3A66;
--header-6: #3D2C4F;
}`,
    atlantic: `.extended-dark-color-schemes-toggle.atlantic {
--background-default: #101b2d;
--text-color: #f0f0f0;
--background-primary: #0b121e;
--background-primary-alt: var(--background-primary);
--background-secondary: var(--background-primary);
--background-secondary-alt: var(--background-primary);
--background-modifier-border: var(--divider-color);
--card-bg: #0b121e;
--divider-color: #2d5e7f84;
--blockquote-border-color: #134667;
--blockquote-background-color: var(--interactive-normal);
--blockquote-text: inherit;
--citation-bg: var(--color-accent);
--card-shadow: 0 3px 8px rgba(97, 97, 97, 0.15);
--graph-bg: var(--color-panel);
--graph-line: var(--divider-color);
--tab-background-active: rgba(255, 255, 255, 0.1);
--caret-color: var(--text-color);
--color-panel: #101b2d;
--table-header-background: var(--color-accent);
--custom-color-accent-dark: #003566;
--icon-color: var(--divider-color);
--file-title-color: var(--divider-color);
--interactive-normal: #15243C;
--graph-node-tag: var(--color-accent);
--text-accent: var(--divider-color);
--link-color: #88AAC1;
--link-external-color: var(--link-color);
--bases-table-border-color: var(--divider-color);
--link-unresolved-color: var(--link-color);
--graph-node: var(--divider-color);
--background-modifier-hover: color-mix(in srgb, var(--background-primary) 70%, white 30%);
}

.colored-headers.extended-dark-color-schemes-toggle.atlantic:not(.colored-headers-override-toggle) {
--header-1: #1E3A5F;
--header-2: #29527A;
--header-3: #356B95;
--header-4: #4184B0;
--header-5: #4C9DCC;
--header-6: #58B6E7;
}`,
    abyss: `.extended-dark-color-schemes-toggle.abyss {
--background-default: #10081E;
--text-color: #ffffff;
--background-primary: #080212;
--background-primary-alt: var(--background-primary);
--background-secondary: var(--background-primary);
--background-secondary-alt: var(--background-primary);
--background-modifier-border: var(--divider-color);
--card-bg: #080212;
--divider-color: #805cbe84;
--blockquote-border-color: #300C6E;
--blockquote-background-color: var(--interactive-normal);
--blockquote-text: inherit;
--citation-bg: var(--color-accent);
--card-shadow: 0 3px 8px rgba(97, 97, 97, 0.15);
--graph-bg: var(--color-panel);
--graph-line: var(--divider-color);
--tab-background-active: rgba(255, 255, 255, 0.1);
--caret-color: var(--text-color);
--color-panel: #10081E;
--table-header-background: var(--color-accent);
--custom-color-accent-dark: #4f288e;
--icon-color: var(--divider-color);
--file-title-color: var(--divider-color);
--interactive-normal: #190D31;
--graph-node-tag: var(--color-accent);
--text-accent: var(--divider-color);
--link-color: #BE99FF;
--link-external-color: var(--link-color);
--bases-table-border-color: var(--divider-color) !important;
--link-unresolved-color: var(--link-color);
--graph-node: var(--divider-color);
--background-modifier-hover: color-mix(in srgb, var(--background-primary) 70%, white 30%);
}

.colored-headers.extended-dark-color-schemes-toggle.abyss:not(.colored-headers-override-toggle) {
--header-1: #9272CC;
--header-2: #8064B3;
--header-3: #6F5699;
--header-4: #5E4880;
--header-5: #4E3A66;
--header-6: #3D2C4F;
}`,
    moss: `.extended-dark-color-schemes-toggle.moss {
--background-default: #0A150C;
--text-color: #f0f0f0;
--background-primary: #070d08;
--background-primary-alt: var(--background-primary);
--background-secondary: var(--background-primary);
--background-secondary-alt: var(--background-primary);
--background-modifier-border: var(--divider-color);
--card-bg: #070d08;
--divider-color: #48745084;
--blockquote-border-color: #214528;
--blockquote-background-color: var(--interactive-normal);
--blockquote-text: inherit;
--citation-bg: var(--color-accent);
--card-shadow: 0 3px 8px rgba(97, 97, 97, 0.15);
--graph-bg: var(--color-panel);
--graph-line: var(--divider-color);
--tab-background-active: rgba(255, 255, 255, 0.1);
--caret-color: var(--text-color);
--color-panel: #0A150C;
--table-header-background: var(--color-accent);
--custom-color-accent-dark: #2E6038;
--icon-color: var(--divider-color);
--file-title-color: var(--divider-color);
--interactive-normal: #1B3720;
--graph-node-tag: var(--color-accent);
--text-accent: var(--divider-color);
--link-color: #B4FAC1;
--link-external-color: var(--link-color);
--bases-table-border-color: var(--divider-color);
--link-unresolved-color: var(--link-color);
--graph-node: var(--divider-color);
--background-modifier-hover: color-mix(in srgb, var(--background-primary) 70%, white 30%);
}

.colored-headers.extended-dark-color-schemes-toggle.moss:not(.colored-headers-override-toggle) {
--header-1: #2C4F3D;
--header-2: #3A664E;
--header-3: #48805E;
--header-4: #56996F;
--header-5: #64B380;
--header-6: #72CC92;
}`,
    onyx: `.extended-dark-color-schemes-toggle.onyx {
--background-default: #0F161A;
--text-color: #f0f0f0;
--background-primary: #050A0C;
--background-primary-alt: var(--background-primary);
--background-secondary: var(--background-primary);
--background-secondary-alt: var(--background-primary);
--background-modifier-border: var(--divider-color);
--blockquote-background-color: var(--interactive-normal);
--blockquote-border-color: #263740;
--citation-bg: var(--color-accent);
--graph-bg: var(--background-default);
--graph-line: var(--divider-color);
--tab-background-active: rgba(255, 255, 255, 0.1);
--caret-color: var(--text-color);
--card-bg: #050a0c;
--divider-color: #4d687684;
--color-panel: #0F161A;
--table-header-background: var(--color-accent);
--text-color: #F0F0F0;
--custom-color-accent-dark: #2F424C;
--icon-color: var(--divider-color);
--file-title-color: var(--divider-color);
--interactive-normal: #1E2C34;
--text-accent: var(--divider-color);
--graph-node-tag: var(--color-accent);
--link-color: #9DB6C2;
--link-external-color: var(--link-color);
--bases-table-border-color: var(--divider-color);
--link-unresolved-color: var(--link-color);
--graph-node: var(--divider-color);
--background-modifier-hover: color-mix(in srgb, var(--background-primary) 70%, white 30%);
}

.colored-headers.extended-dark-color-schemes-toggle.onyx:not(.colored-headers-override-toggle) {
--header-1: #474E5C;
--header-2: #5E6573;
--header-3: #787F8D;
--header-4: #979DAA;
--header-5: #B7BCC9;
--header-6: #D8DCE6;
}`,
    "extended-light-color-schemes-toggle": `.leaf {
--background-default: #809D9B;
--background-primary: #627F7D;
--card-bg: #627F7D;
--color-panel: #809D9B;
--text-color: #0c0c0c;
--background-primary-alt: var(--background-primary);
--background-secondary: var(--background-primary);
--background-secondary-alt: var(--background-primary);
--background-modifier-border: var(--divider-color);
--blockquote-background-color: var(--interactive-normal);
--blockquote-border-color: #090B0B;
--citation-bg: var(--color-accent);
--graph-bg: var(--background-default);
--graph-line: #090B0B2c;
--tab-background-active: rgba(255, 255, 255, 0.1);
--caret-color: var(--text-color);
--divider-color: #090B0B84;
--table-header-background: var(--color-accent);
--custom-color-accent-light: #475C5A;
--icon-color: var(--divider-color);
--file-title-color: var(--divider-color);
--interactive-normal: #627F7D;
--graph-node-tag: var(--color-accent);
--text-accent: var(--divider-color);
--link-color: #AEDCD7;
--link-external-color: var(--link-color);
--bases-table-border-color: var(--divider-color);
--link-unresolved-color: var(--link-color);
--graph-node: var(--divider-color);
--background-modifier-hover: color-mix(in srgb, var(--background-primary) 70%, black 30%);
}

.sky {
--background-default: #5A6F87;
--background-primary: #495B6E;
--card-bg: #495B6E;
--color-panel: #5A6F87;
--text-color: #0c0c0c;
--background-primary-alt: var(--background-primary);
--background-secondary: var(--background-primary);
--background-secondary-alt: var(--background-primary);
--background-modifier-border: var(--divider-color);
--blockquote-background-color: var(--interactive-normal);
--blockquote-border-color: #080A0C;
--citation-bg: var(--color-accent);
--graph-bg: var(--background-default);
--graph-line: #080A0C2c;
--tab-background-active: rgba(255, 255, 255, 0.1);
--caret-color: var(--text-color);
--divider-color: #080A0C84;
--table-header-background: var(--color-accent);
--custom-color-accent-light: #788ea5;
--icon-color: var(--divider-color);
--file-title-color: var(--divider-color);
--interactive-normal: #495B6E;
--graph-node-tag: var(--color-accent);
--text-accent: var(--divider-color);
--link-color: #95B5D7;
--link-external-color: var(--link-color);
--bases-table-border-color: var(--divider-color);
--link-unresolved-color: var(--link-color);
--graph-node: var(--divider-color);
--background-modifier-hover: color-mix(in srgb, var(--background-primary) 70%, black 30%);
}

.fog {
--background-default: #5E6871;
--background-primary: #4C555D;
--card-bg: #4C555D;
--color-panel: #5E6871;
--text-color: #101010;
--background-primary-alt: var(--background-primary);
--background-secondary-alt: var(--background-secondary);
--background-modifier-border: var(--divider-color);
--divider-color: #10101084;
--blockquote-border-color: #101010;
--blockquote-background-color: var(--interactive-normal);
--citation-bg: var(--color-accent);
--graph-bg: var(--background-default);
--graph-line: #1010102c;
--tab-background-active: rgba(255, 255, 255, 0.1);
--caret-color: var(--text-color);
--table-header-background: var(--color-accent);
--custom-color-accent-light: #3C444C;
--icon-color: var(--divider-color);
--file-title-color: var(--divider-color);
--interactive-normal: #4c555d;
--graph-node-tag: var(--color-accent);
--text-accent: var(--divider-color);
--link-color: #768493;
--link-external-color: var(--link-color);
--bases-table-border-color: var(--divider-color);
--link-unresolved-color: var(--link-color);
--graph-node: var(--divider-color);
--background-modifier-hover: color-mix(in srgb, var(--background-primary) 70%, black 30%);
}

.red-desert {
--background-default: #6A5F6A;
--background-primary: #5A505A;
--card-bg: #5A505A;
--color-panel: #6A5F6A;
--text-color: #101010;
--background-primary-alt: var(--background-primary);
--background-secondary-alt: var(--background-secondary);
--background-modifier-border: var(--divider-color);
--divider-color: #10101084;
--blockquote-border-color: #101010;
--blockquote-background-color: var(--interactive-normal);
--citation-bg: var(--color-accent);
--graph-bg: var(--background-default);
--graph-line: #1010102c;
--tab-background-active: rgba(255, 255, 255, 0.1);
--caret-color: var(--text-color);
--table-header-background: var(--color-accent);
--custom-color-accent-light: #443C44;
--icon-color: var(--divider-color);
--file-title-color: var(--divider-color);
--interactive-normal: #5A505A;
--graph-node-tag: var(--color-accent);
--text-accent: var(--divider-color);
--link-color: #968896;
--link-external-color: var(--link-color);
--bases-table-border-color: var(--divider-color);
--link-unresolved-color: var(--link-color);
--graph-node: var(--divider-color);
--background-modifier-hover: color-mix(in srgb, var(--background-primary) 70%, black 30%);
}

.violet-haze {
--background-default: #9584AE;
--background-primary: #8776A5;
--card-bg: #8776A5;
--color-panel: #9584AE;
--text-color: #101010;
--background-primary-alt: var(--background-primary);
--background-secondary-alt: var(--background-secondary);
--background-modifier-border: var(--divider-color);
--divider-color: #10101084;
--blockquote-border-color: #101010;
--blockquote-background-color: var(--interactive-normal);
--citation-bg: var(--color-accent);
--graph-bg: var(--background-default);
--graph-line: #1010102c;
--tab-background-active: rgba(255, 255, 255, 0.1);
--caret-color: var(--text-color);
--table-header-background: var(--color-accent);
--custom-color-accent-light: #62497c;
--icon-color: var(--divider-color);
--file-title-color: var(--divider-color);
--interactive-normal: #8776A5;
--graph-node-tag: var(--color-accent);
--text-accent: var(--divider-color);
--link-color: #D2C5DF;
--link-external-color: var(--link-color);
--bases-table-border-color: var(--divider-color);
--link-unresolved-color: var(--link-color);
--graph-node: var(--divider-color);
--background-modifier-hover: color-mix(in srgb, var(--background-primary) 70%, black 30%);
}

.feather {
--background-default: #CED3DF;
--background-primary: #DCE0E8;
--card-bg: var(--background-primary);
--color-panel: var(--background-default);
--text-color: #101010;
--background-primary-alt: var(--background-primary);
--background-secondary-alt: var(--background-secondary);
--background-modifier-border: var(--divider-color);
--divider-color: #10101084;
--blockquote-border-color: #101010;
--blockquote-background-color: var(--interactive-normal);
--citation-bg: var(--color-accent);
--graph-bg: var(--background-default);
--graph-line: #1010102c;
--tab-background-active: rgba(255, 255, 255, 0.1);
--caret-color: var(--text-color);
--icon-color: var(--divider-color);
--file-title-color: var(--divider-color);
--graph-node-tag: var(--color-accent);
--text-accent: var(--divider-color);
--custom-color-accent-light: #A9B1C7;
--interactive-normal: #CED3DF;
--link-color: #47557B;
--link-external-color: var(--link-color);
--bases-table-border-color: var(--divider-color);
--link-unresolved-color: var(--link-color);
--graph-node: var(--divider-color);
--background-modifier-hover: color-mix(in srgb, var(--background-primary) 70%, black 30%);
}

.colored-headers.violet-haze:not(.colored-headers-override-toggle) {
--header-1: #3D2C4F;
--header-2: #4E3A66;
--header-3: #5E4880;
--header-4: #6F5699;
--header-5: #8064B3;
--header-6: #9272CC;
}

.colored-headers.red-desert:not(.colored-headers-override-toggle) {
--header-1: #4A404A;
--header-2: #594252;
--header-3: #68445A;
--header-4: #774662;
--header-5: #86486A;
--header-6: #954A72;
}

.colored-headers.sky:not(.colored-headers-override-toggle) {
--header-1: #1E3A5F;
--header-2: #29527A;
--header-3: #356B95;
--header-4: #4184B0;
--header-5: #4C9DCC;
--header-6: #58B6E7;
}

.colored-headers.fog:not(.colored-headers-override-toggle) {
--header-1: #2C313A;
--header-2: #3D4450;
--header-3: #4F5867;
--header-4: #61707F;
--header-5: #7A8A99;
--header-6: #95A5B2;
}

.colored-headers.feather:not(.colored-headers-override-toggle) {
--header-1: #2C313A;
--header-2: #3D4450;
--header-3: #4F5867;
--header-4: #61707F;
--header-5: #7A8A99;
--header-6: #95A5B2;
}

.colored-headers.leaf:not(.colored-headers-override-toggle) {
--header-1: #2C4F3D;
--header-2: #3A664E;
--header-3: #48805E;
--header-4: #56996F;
--header-5: #64B380;
--header-6: #72CC92;
}`,
    leaf: `.extended-light-color-schemes-toggle.leaf {
--background-default: #809D9B;
--background-primary: #627F7D;
--card-bg: #627F7D;
--color-panel: #809D9B;
--text-color: #0c0c0c;
--background-primary-alt: var(--background-primary);
--background-secondary: var(--background-primary);
--background-secondary-alt: var(--background-primary);
--background-modifier-border: var(--divider-color);
--blockquote-background-color: var(--interactive-normal);
--blockquote-border-color: #090B0B;
--citation-bg: var(--color-accent);
--graph-bg: var(--background-default);
--graph-line: #090B0B2c;
--tab-background-active: rgba(255, 255, 255, 0.1);
--caret-color: var(--text-color);
--divider-color: #090B0B84;
--table-header-background: var(--color-accent);
--custom-color-accent-light: #475C5A;
--icon-color: var(--divider-color);
--file-title-color: var(--divider-color);
--interactive-normal: #627F7D;
--graph-node-tag: var(--color-accent);
--text-accent: var(--divider-color);
--link-color: #AEDCD7;
--link-external-color: var(--link-color);
--bases-table-border-color: var(--divider-color);
--link-unresolved-color: var(--link-color);
--graph-node: var(--divider-color);
--background-modifier-hover: color-mix(in srgb, var(--background-primary) 70%, black 30%);
}

.colored-headers.extended-light-color-schemes-toggle.leaf:not(.colored-headers-override-toggle) {
--header-1: #2C4F3D;
--header-2: #3A664E;
--header-3: #48805E;
--header-4: #56996F;
--header-5: #64B380;
--header-6: #72CC92;
}`,
    sky: `.extended-light-color-schemes-toggle.sky {
--background-default: #5A6F87;
--background-primary: #495B6E;
--card-bg: #495B6E;
--color-panel: #5A6F87;
--text-color: #0c0c0c;
--background-primary-alt: var(--background-primary);
--background-secondary: var(--background-primary);
--background-secondary-alt: var(--background-primary);
--background-modifier-border: var(--divider-color);
--blockquote-background-color: var(--interactive-normal);
--blockquote-border-color: #080A0C;
--citation-bg: var(--color-accent);
--graph-bg: var(--background-default);
--graph-line: #080A0C2c;
--tab-background-active: rgba(255, 255, 255, 0.1);
--caret-color: var(--text-color);
--divider-color: #080A0C84;
--table-header-background: var(--color-accent);
--custom-color-accent-light: #788ea5;
--icon-color: var(--divider-color);
--file-title-color: var(--divider-color);
--interactive-normal: #495B6E;
--graph-node-tag: var(--color-accent);
--text-accent: var(--divider-color);
--link-color: #95B5D7;
--link-external-color: var(--link-color);
--bases-table-border-color: var(--divider-color);
--link-unresolved-color: var(--link-color);
--graph-node: var(--divider-color);
--background-modifier-hover: color-mix(in srgb, var(--background-primary) 70%, black 30%);
}

.colored-headers.extended-light-color-schemes-toggle.sky:not(.colored-headers-override-toggle) {
--header-1: #1E3A5F;
--header-2: #29527A;
--header-3: #356B95;
--header-4: #4184B0;
--header-5: #4C9DCC;
--header-6: #58B6E7;
}`,
    fog: `.extended-light-color-schemes-toggle.fog {
--background-default: #5E6871;
--background-primary: #4C555D;
--card-bg: #4C555D;
--color-panel: #5E6871;
--text-color: #101010;
--background-primary-alt: var(--background-primary);
--background-secondary-alt: var(--background-secondary);
--background-modifier-border: var(--divider-color);
--divider-color: #10101084;
--blockquote-border-color: #101010;
--blockquote-background-color: var(--interactive-normal);
--citation-bg: var(--color-accent);
--graph-bg: var(--background-default);
--graph-line: #1010102c;
--tab-background-active: rgba(255, 255, 255, 0.1);
--caret-color: var(--text-color);
--table-header-background: var(--color-accent);
--custom-color-accent-light: #3C444C;
--icon-color: var(--divider-color);
--file-title-color: var(--divider-color);
--interactive-normal: #4c555d;
--graph-node-tag: var(--color-accent);
--text-accent: var(--divider-color);
--link-color: #768493;
--link-external-color: var(--link-color);
--bases-table-border-color: var(--divider-color);
--link-unresolved-color: var(--link-color);
--graph-node: var(--divider-color);
--background-modifier-hover: color-mix(in srgb, var(--background-primary) 70%, black 30%);
}

.colored-headers.extended-light-color-schemes-toggle.fog:not(.colored-headers-override-toggle) {
--header-1: #2C313A;
--header-2: #3D4450;
--header-3: #4F5867;
--header-4: #61707F;
--header-5: #7A8A99;
--header-6: #95A5B2;
}`,
    "red-desert": `.extended-light-color-schemes-toggle.red-desert {
--background-default: #6A5F6A;
--background-primary: #5A505A;
--card-bg: #5A505A;
--color-panel: #6A5F6A;
--text-color: #101010;
--background-primary-alt: var(--background-primary);
--background-secondary-alt: var(--background-secondary);
--background-modifier-border: var(--divider-color);
--divider-color: #10101084;
--blockquote-border-color: #101010;
--blockquote-background-color: var(--interactive-normal);
--citation-bg: var(--color-accent);
--graph-bg: var(--background-default);
--graph-line: #1010102c;
--tab-background-active: rgba(255, 255, 255, 0.1);
--caret-color: var(--text-color);
--table-header-background: var(--color-accent);
--custom-color-accent-light: #443C44;
--icon-color: var(--divider-color);
--file-title-color: var(--divider-color);
--interactive-normal: #5A505A;
--graph-node-tag: var(--color-accent);
--text-accent: var(--divider-color);
--link-color: #968896;
--link-external-color: var(--link-color);
--bases-table-border-color: var(--divider-color);
--link-unresolved-color: var(--link-color);
--graph-node: var(--divider-color);
--background-modifier-hover: color-mix(in srgb, var(--background-primary) 70%, black 30%);
}

.colored-headers.extended-light-color-schemes-toggle.red-desert:not(.colored-headers-override-toggle) {
--header-1: #4A404A;
--header-2: #594252;
--header-3: #68445A;
--header-4: #774662;
--header-5: #86486A;
--header-6: #954A72;
}`,
    "violet-haze": `.extended-light-color-schemes-toggle.violet-haze {
--background-default: #9584AE;
--background-primary: #8776A5;
--card-bg: #8776A5;
--color-panel: #9584AE;
--text-color: #101010;
--background-primary-alt: var(--background-primary);
--background-secondary-alt: var(--background-secondary);
--background-modifier-border: var(--divider-color);
--divider-color: #10101084;
--blockquote-border-color: #101010;
--blockquote-background-color: var(--interactive-normal);
--citation-bg: var(--color-accent);
--graph-bg: var(--background-default);
--graph-line: #1010102c;
--tab-background-active: rgba(255, 255, 255, 0.1);
--caret-color: var(--text-color);
--table-header-background: var(--color-accent);
--custom-color-accent-light: #62497c;
--icon-color: var(--divider-color);
--file-title-color: var(--divider-color);
--interactive-normal: #8776A5;
--graph-node-tag: var(--color-accent);
--text-accent: var(--divider-color);
--link-color: #D2C5DF;
--link-external-color: var(--link-color);
--bases-table-border-color: var(--divider-color);
--link-unresolved-color: var(--link-color);
--graph-node: var(--divider-color);
--background-modifier-hover: color-mix(in srgb, var(--background-primary) 70%, black 30%);
}

.colored-headers.extended-light-color-schemes-toggle.violet-haze:not(.colored-headers-override-toggle) {
--header-1: #3D2C4F;
--header-2: #4E3A66;
--header-3: #5E4880;
--header-4: #6F5699;
--header-5: #8064B3;
--header-6: #9272CC;
}`,
    feather: `.extended-light-color-schemes-toggle.feather {
--background-default: #CED3DF;
--background-primary: #DCE0E8;
--card-bg: var(--background-primary);
--color-panel: var(--background-default);
--text-color: #101010;
--background-primary-alt: var(--background-primary);
--background-secondary-alt: var(--background-secondary);
--background-modifier-border: var(--divider-color);
--divider-color: #10101084;
--blockquote-border-color: #101010;
--blockquote-background-color: var(--interactive-normal);
--citation-bg: var(--color-accent);
--graph-bg: var(--background-default);
--graph-line: #1010102c;
--tab-background-active: rgba(255, 255, 255, 0.1);
--caret-color: var(--text-color);
--icon-color: var(--divider-color);
--file-title-color: var(--divider-color);
--graph-node-tag: var(--color-accent);
--text-accent: var(--divider-color);
--custom-color-accent-light: #A9B1C7;
--interactive-normal: #CED3DF;
--link-color: #47557B;
--link-external-color: var(--link-color);
--bases-table-border-color: var(--divider-color);
--link-unresolved-color: var(--link-color);
--graph-node: var(--divider-color);
--background-modifier-hover: color-mix(in srgb, var(--background-primary) 70%, black 30%);
}

.colored-headers.extended-light-color-schemes-toggle.feather:not(.colored-headers-override-toggle) {
--header-1: #2C313A;
--header-2: #3D4450;
--header-3: #4F5867;
--header-4: #61707F;
--header-5: #7A8A99;
--header-6: #95A5B2;
}`,
    "colored-headers": `.colored-headers .markdown-source-view.mod-cm6 span.cm-header-1, .colored-headers .markdown-source-view.mod-cm6 span.cm-header-2, .colored-headers .markdown-source-view.mod-cm6 span.cm-header-3, .colored-headers .markdown-source-view.mod-cm6 span.cm-header-4, .colored-headers .markdown-source-view.mod-cm6 span.cm-header-5, .colored-headers .markdown-source-view.mod-cm6 span.cm-header-6 {
display: inline;
}

.colored-headers .markdown-source-view.mod-cm6 span.cm-header-1 {
color: var(--header-1);
}

.colored-headers .markdown-source-view.mod-cm6 span.cm-header-2 {
color: var(--header-2);
}

.colored-headers .markdown-source-view.mod-cm6 span.cm-header-3 {
color: var(--header-3);
}

.colored-headers .markdown-source-view.mod-cm6 span.cm-header-4 {
color: var(--header-4);
}

.colored-headers .markdown-source-view.mod-cm6 span.cm-header-5 {
color: var(--header-5);
}

.colored-headers .markdown-source-view.mod-cm6 span.cm-header-6 {
color: var(--header-6);
}

.colored-headers .markdown-preview-view h1 {
color: var(--header-1);
}

.colored-headers .markdown-preview-view h2 {
color: var(--header-2);
}

.colored-headers .markdown-preview-view h3 {
color: var(--header-3);
}

.colored-headers .markdown-preview-view h4 {
color: var(--header-4);
}

.colored-headers .markdown-preview-view h5 {
color: var(--header-5);
}

.colored-headers .markdown-preview-view h6 {
color: var(--header-6);
}
.colored-headers-grey.theme-dark {
--header-1: #474E5C;
--header-2: #5E6573;
--header-3: #787F8D;
--header-4: #979DAA;
--header-5: #B7BCC9;
--header-6: #D8DCE6;
}

.colored-headers-blue.theme-dark {
--header-1: #58B6E7;
--header-2: #4C9DCC;
--header-3: #4184B0;
--header-4: #356B95;
--header-5: #29527A;
--header-6: #1E3A5F;
}

.colored-headers-purple.theme-dark {
--header-1: #9272CC;
--header-2: #8064B3;
--header-3: #6F5699;
--header-4: #5E4880;
--header-5: #4E3A66;
--header-6: #3D2C4F;
}

.colored-headers-green.theme-dark {
--header-1: #72CC92;
--header-2: #64B380;
--header-3: #56996F;
--header-4: #48805E;
--header-5: #3A664E;
--header-6: #2C4F3D;
}

.colored-headers-orange.theme-dark {
--header-1: #CC9972;
--header-2: #B38664;
--header-3: #997256;
--header-4: #805F48;
--header-5: #664C3A;
--header-6: #4F392C;
}

.colored-headers-red.theme-dark {
--header-1: #FF5C5C;
--header-2: #FF4141;
--header-3: #F02C2C;
--header-4: #D90429;
--header-5: #C1001F;
--header-6: #960018;
}

.colored-headers-pink.theme-dark {
--header-1: #E76DCC;
--header-2: #CC60B3;
--header-3: #B05399;
--header-4: #954680;
--header-5: #7A3966;
--header-6: #5F2C4F;
}
.colored-headers-grey.theme-light {
--header-1: #2C313A;
--header-2: #3D4450;
--header-3: #4F5867;
--header-4: #61707F;
--header-5: #7A8A99;
--header-6: #95A5B2;
}

.colored-headers-blue.theme-light {
--header-1: #1E3A5F;
--header-2: #29527A;
--header-3: #356B95;
--header-4: #4184B0;
--header-5: #4C9DCC;
--header-6: #58B6E7;
}

.colored-headers-purple.theme-light {
--header-1: #3D2C4F;
--header-2: #4E3A66;
--header-3: #5E4880;
--header-4: #6F5699;
--header-5: #8064B3;
--header-6: #9272CC;
}

.colored-headers-green.theme-light {
--header-1: #2C4F3D;
--header-2: #3A664E;
--header-3: #48805E;
--header-4: #56996F;
--header-5: #64B380;
--header-6: #72CC92;
}

.colored-headers-orange.theme-light {
--header-1: #4F392C;
--header-2: #664C3A;
--header-3: #805F48;
--header-4: #997256;
--header-5: #B38664;
--header-6: #CC9972;
}

.colored-headers-red.theme-light {
--header-1: #C1001F;
--header-2: #D90429;
--header-3: #F02C2C;
--header-4: #FF4141;
--header-5: #FF5C5C;
--header-6: #FF7B7B;
}

.colored-headers-pink.theme-light {
--header-1: #5F2C4F;
--header-2: #7A3966;
--header-3: #954680;
--header-4: #B05399;
--header-5: #CC60B3;
--header-6: #E76DCC;
}`,
    "colored-headers-grey": `.colored-headers.theme-dark {
--header-1: #474E5C;
--header-2: #5E6573;
--header-3: #787F8D;
--header-4: #979DAA;
--header-5: #B7BCC9;
--header-6: #D8DCE6;
}
.colored-headers.theme-light {
--header-1: #2C313A;
--header-2: #3D4450;
--header-3: #4F5867;
--header-4: #61707F;
--header-5: #7A8A99;
--header-6: #95A5B2;
}`,
    "colored-headers-blue": `.colored-headers.theme-dark {
--header-1: #58B6E7;
--header-2: #4C9DCC;
--header-3: #4184B0;
--header-4: #356B95;
--header-5: #29527A;
--header-6: #1E3A5F;
}
.colored-headers.theme-light {
--header-1: #1E3A5F;
--header-2: #29527A;
--header-3: #356B95;
--header-4: #4184B0;
--header-5: #4C9DCC;
--header-6: #58B6E7;
}`,
    "colored-headers-purple": `.colored-headers.theme-dark {
--header-1: #9272CC;
--header-2: #8064B3;
--header-3: #6F5699;
--header-4: #5E4880;
--header-5: #4E3A66;
--header-6: #3D2C4F;
}
.colored-headers.theme-light {
--header-1: #3D2C4F;
--header-2: #4E3A66;
--header-3: #5E4880;
--header-4: #6F5699;
--header-5: #8064B3;
--header-6: #9272CC;
}`,
    "colored-headers-green": `.colored-headers.theme-dark {
--header-1: #72CC92;
--header-2: #64B380;
--header-3: #56996F;
--header-4: #48805E;
--header-5: #3A664E;
--header-6: #2C4F3D;
}
.colored-headers.theme-light {
--header-1: #2C4F3D;
--header-2: #3A664E;
--header-3: #48805E;
--header-4: #56996F;
--header-5: #64B380;
--header-6: #72CC92;
}`,
    "colored-headers-orange": `.colored-headers.theme-dark {
--header-1: #CC9972;
--header-2: #B38664;
--header-3: #997256;
--header-4: #805F48;
--header-5: #664C3A;
--header-6: #4F392C;
}
.colored-headers.theme-light {
--header-1: #4F392C;
--header-2: #664C3A;
--header-3: #805F48;
--header-4: #997256;
--header-5: #B38664;
--header-6: #CC9972;
}`,
    "colored-headers-red": `.colored-headers.theme-dark {
--header-1: #FF5C5C;
--header-2: #FF4141;
--header-3: #F02C2C;
--header-4: #D90429;
--header-5: #C1001F;
--header-6: #960018;
}
.colored-headers.theme-light {
--header-1: #C1001F;
--header-2: #D90429;
--header-3: #F02C2C;
--header-4: #FF4141;
--header-5: #FF5C5C;
--header-6: #FF7B7B;
}`,
    "colored-headers-pink": `.colored-headers.theme-dark {
--header-1: #E76DCC;
--header-2: #CC60B3;
--header-3: #B05399;
--header-4: #954680;
--header-5: #7A3966;
--header-6: #5F2C4F;
}
.colored-headers.theme-light {
--header-1: #5F2C4F;
--header-2: #7A3966;
--header-3: #954680;
--header-4: #B05399;
--header-5: #CC60B3;
--header-6: #E76DCC;
}`,
    "colored-text": `.colored-text {
color: var(--text-normal);
}
.colored-text {
--text-normal: color-mix(in srgb, var(--color-accent) 50%, white);
}

.custom-color-accent-dark-toggle {
--text-normal: color-mix(in srgb, var(--custom-color-accent-dark) 50%, white);
}
.colored-text {
--text-normal: color-mix(in srgb, var(--color-accent) 50%, black);
}

.custom-color-accent-light-toggle {
--text-normal: color-mix(in srgb, var(--custom-color-accent-light) 50%, black);
}`,
    "disable-h1-divider": `.disable-h1-divider .markdown-preview-view h1, .disable-h1-divider .markdown-source-view.is-live-preview .HyperMD-header.HyperMD-header-1.cm-line {
border-bottom: none;
}`,
    "toggle-hover-properties": `.toggle-hover-properties .metadata-container {
max-height: 2rem;
opacity: 0.6;
overflow: hidden;
transition: max-height 250ms ease-in-out, opacity 250ms;
margin-bottom: 0;
}

.toggle-hover-properties .metadata-container:hover, .toggle-hover-properties .metadata-container:focus-within {
max-height: 1000px;
opacity: 1;
transition: max-height 300ms ease-in-out, opacity 300ms;
}`,
    spotlight: `.spotlight .workspace-leaf {
background-color: inherit;
}

.spotlight .workspace-leaf:not(.mod-active) .workspace-leaf-content[data-type='markdown'] {
opacity: 0.5;
}

.spotlight .workspace-leaf .workspace-leaf-content[data-type='markdown'] {
transition: opacity 0.25s ease-out;
}`,
    "labeled-nav": `.is-fullscreen:not(.colorful-frame), .mod-windows {
--labeled-nav-top-margin: 0
;
}

.labeled-nav {
--labeled-nav-top-margin: var(--header-height)
;
}

.is-translucent .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-header-container-inner {
background-color: rgba(0, 0, 0, 0);
}

.is-hidden-frameless:not(.is-fullscreen) .mod-left-split .workspace-tabs.mod-top-left-space .workspace-tab-header-container {
padding-left: 0;
}

.mod-macos .mod-left-split .mod-top .workspace-tab-header-container:before, .mod-macos.is-hidden-frameless:not(.is-fullscreen) .mod-left-split .mod-top .workspace-tab-header-container:before {
-webkit-app-region: drag;
position: absolute;
width: calc(100% - var(--divider-width));
height: calc(var(--header-height) - var(--tab-outline-width));
border-bottom: 0 solid var(--tab-outline-color);
}

.mod-macos.is-hidden-frameless:not(.is-fullscreen) .workspace-ribbon.mod-left:not(.is-collapsed) {
border: none;
--tab-outline-width: 0px
;
}

.colorful-frame.is-hidden-frameless:not(.is-fullscreen) .mod-left-split .mod-top .workspace-tab-header-container:before, .mod-macos:not(.hider-ribbon) .mod-left-split .mod-top .workspace-tab-header-container:before, .labeled-nav:not(.is-hidden-frameless) .mod-left-split .mod-top .workspace-tab-header-container:before {
border-bottom: var(--tab-outline-width) solid var(--tab-outline-color);
}

.colorful-frame.is-hidden-frameless:not(.is-fullscreen) .workspace-ribbon.mod-left:not(.is-collapsed), .mod-macos:not(.hider-ribbon) .workspace-ribbon.mod-left:not(.is-collapsed), .labeled-nav:not(.is-hidden-frameless) .workspace-ribbon.mod-left:not(.is-collapsed) {
--tab-outline-width: 1px
;
}

.labeled-nav:not(.is-hidden-frameless) .mod-left-split .mod-top .workspace-tab-header-container:before {
position: absolute;
top: 0;
content: " ";
}

.hider-ribbon.mod-macos.is-hidden-frameless:not(.is-fullscreen):not(.is-popout-window) .mod-left-split:not(.is-sidedock-collapsed) .workspace-tabs.mod-top-left-space .workspace-tab-header-container {
padding-left: 0;
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header-spacer {
display: none;
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header-inner-title {
display: inline-block;
font-weight: 500;
font-size: inherit;
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header-container {
position: relative;
flex-direction: column-reverse !important;
height: auto;
width: 100%;
align-items: flex-start;
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header-container .sidebar-toggle-button.mod-left {
position: absolute;
justify-content: flex-end;
padding-right: var(--size-4-2);
top: 0;
right: 0;
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-header-container-inner {
padding: var(--size-4-2) var(--size-4-2);
flex-direction: column !important;
margin-top: var(--labeled-nav-top-margin);
margin-bottom: var(--cards-gap);
background-color: var(--background-default);
align-items: flex-start !important;
width: 100%;
border: 1px solid var(--divider-color) !important;
border-radius: var(--card-radius);
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-container-inner {
flex-grow: 1;
gap: 0;
padding: var(--size-4-2) var(--size-4-3);
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header {
--icon-color: var(--text-muted);
--tab-text-color: var(--text-muted);
--tab-text-color-focused: var(--text-muted);
padding: 0;
margin-bottom: 2px;
border: none;
height: auto;
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header.is-active:not(:hover) {
background-color: rgba(0, 0, 0, 0);
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header.is-active, .labeled-nav .mod-left-split .mod-top .workspace-tab-header:hover {
opacity: 1;
--tab-text-color-active: var(--text-normal);
--tab-text-color-focused: var(--text-normal);
--tab-text-color-focused-active: var(--text-normal);
--tab-text-color-focused-active-current: var(--text-normal);
--icon-color: var(--text-normal)
;
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header .workspace-tab-header-inner {
gap: var(--size-2-3);
padding: var(--size-4-1) var(--size-4-2);
box-shadow: none;
border: none;
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header.has-active-menu:hover, .labeled-nav .mod-left-split .mod-top .workspace-tab-header.is-active:hover {
background-color: rgba(0, 0, 0, 0);
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header.is-active:hover .workspace-tab-header-inner, .labeled-nav .mod-left-split .mod-top .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner {
background-color: var(--nav-item-background-hover);
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header.is-active .workspace-tab-header-inner-icon, .labeled-nav .mod-left-split .mod-top .workspace-tab-header:hover .workspace-tab-header-inner-icon {
color: var(--text-normal);
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header-container {
border: none;
padding: 0;
}

.mod-macos .mod-left-split .mod-top .workspace-tab-header-container:before, .mod-macos.is-hidden-frameless:not(.is-fullscreen) .mod-left-split .mod-top .workspace-tab-header-container:before {
-webkit-app-region: drag;
position: absolute;
width: calc(100% - var(--divider-width));
height: calc(var(--header-height) - var(--tab-outline-width));
border-bottom: 0 solid var(--tab-outline-color);
}

body.labeled-nav:is(.tab-autohide, .status-bar-autohide, .Ribbon-autohide, .nav-header-autohide, .tab-title-bar-autohide, .vault-profile-autohide) .mod-left-split .mod-top .workspace-tab-header-container {
/* Restore default horizontal layout */
flex-direction: row !important;
align-items: center !important;
justify-content: center;
width: 100% !important;
border: none !important;
padding: 0 !important;
padding-bottom: 0px !important;
background-color: transparent !important;
border-bottom: 1px solid var(--card-bg) !important;
}

body.labeled-nav:is(.tab-autohide, .status-bar-autohide, .Ribbon-autohide, .nav-header-autohide, .tab-title-bar-autohide, .vault-profile-autohide) .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-header-container-inner {
/* Restore default inner container */
flex-direction: row !important;
align-items: center !important;
justify-content: center !important;
gap: 4px !important;
margin-top: 4px !important;
margin-bottom: 0px !important;
width: fit-content !important;
padding: 6px 8px 8px 6px !important;
background-color: transparent !important;
border: none !important;
border-radius: 0 !important;
}

body.labeled-nav:is(.tab-autohide, .status-bar-autohide, .Ribbon-autohide, .nav-header-autohide, .tab-title-bar-autohide, .vault-profile-autohide) .mod-left-split .mod-top .workspace-tab-header-inner-title {
display: none !important;
}

body.tab-autohide .mod-left-split .mod-top .workspace-tab-header-container {
position: relative !important;
}

body.tab-autohide .mod-left-split .mod-top .workspace-tab-header-container .sidebar-toggle-button.mod-left {
position: absolute !important;
justify-content: flex-end !important;
padding-right: var(--size-4-2) !important;
top: 0 !important;
right: 0 !important;
}

body.tab-autohide .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-container-inner {
flex-grow: 1 !important;
gap: 0 !important;
padding: var(--size-4-2) var(--size-4-3) !important;
}

body.tab-autohide .mod-left-split .mod-top .workspace-tab-header .workspace-tab-header-inner {
gap: var(--size-2-3);
padding: 2px !important;
}

body.tab-autohide .mod-left-split .mod-top .workspace-tab-header .workspace-tab-header.tappable.is-active {
background-color: var(--color-accent) !important;
}

body.tab-autohide .mod-left-split .mod-top .workspace-tab-header.is-active {
background-color: var(--color-accent) !important;
}

.frosted-glass-toggle.frosted-glass .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-header-container-inner, .frosted-glass-toggle.ice-glass .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-header-container-inner, .frosted-glass-toggle.frozen-glass .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-header-container-inner {
padding: var(--size-4-2) var(--size-4-2);
flex-direction: column !important;
margin-top: var(--labeled-nav-top-margin);
margin-bottom: var(--cards-gap);
box-shadow: var(--shadow-xxs) !important;
backdrop-filter: var(--blur-l);
align-items: flex-start !important;
width: 100%;
border: 1px solid var(--divider-color) !important;
border-radius: var(--card-radius);
}`,
    "ic-infobox-enable": `.ic-infobox-enable .markdown-rendered blockquote::before {
display: none;
}

.ic-infobox-enable .callout[data-callout="infobox"], .ic-infobox-enable .callout[data-callout="infoboxright"] {
--callout-color: var(--ic-infobox-color);
position: relative;
float: right;
width: var(--ic-width);
margin-left: var(--ic-outside-padding);
background-color: var(--ic-infobox-color) !important;
padding: var(--ic-inside-padding);
border-radius: var(--card-radius);
border: var(--ic-border) solid;
border-color: var(--ic-border-color);
box-shadow: var(--card-shadow);
}

.ic-infobox-enable .callout[data-callout="infoboxleft"] {
--callout-color: var(--ic-infobox-color);
float: left;
width: var(--ic-width);
margin-right: var(--ic-outside-padding);
background-color: var(--ic-infobox-color);
padding: var(--ic-inside-padding);
border-radius: var(--card-radius);
border: var(--ic-border) solid;
border-color: var(--ic-border-color);
box-shadow: var(--card-shadow);
}

.ic-infobox-enable .callout[data-callout="infobox"] .callout-icon, .ic-infobox-enable .callout[data-callout="infoboxright"] .callout-icon, .ic-infobox-enable .callout[data-callout="infoboxleft"] .callout-icon {
display: none;
}

.ic-infobox-enable .callout[data-callout="infobox"] .callout-title, .ic-infobox-enable .callout[data-callout="infoboxright"] .callout-title, .ic-infobox-enable .callout[data-callout="infoboxleft"] .callout-title {
all: unset;
display: block;
text-align: var(--ic-title-alignment);
font-size: var(--ic-title-size);
width: 100%;
margin: var(--ic-title-margin) 0;
color: var(--ic-infobox-title-color);
}

.ic-title-typography-toggle .callout[data-callout="infobox"] .callout-title, .ic-title-typography-toggle .callout[data-callout="infoboxright"] .callout-title, .ic-title-typography-toggle .callout[data-callout="infoboxleft"] .callout-title {
font-family: var(--ic-title-font);
font-feature-settings: var(--ic-title-stylistic-sets);
}

.ic-title-typography-toggle.ic-title-smallcaps .callout[data-callout="infobox"] .callout-title, .ic-title-typography-toggle.ic-title-smallcaps .callout[data-callout="infoboxright"] .callout-title, .ic-title-typography-toggle.ic-title-smallcaps .callout[data-callout="infoboxleft"] .callout-title {
font-variant: small-caps;
}

.ic-infobox-enable .callout[data-callout="infobox"] img {
display: block;
margin-left: auto;
margin-right: auto;
border-radius: var(--ic-image-round-corners);
border: var(--ic-image-border) solid;
border-color: var(--ic-image-border-color);
}

.ic-infobox-enable .callout[data-callout="infobox"] hr {
border: none;
border-top: var(--ic-horizontal-rule-size) solid var(--ic-horizontal-rule-color, #cccccc);
margin: 1rem 0;
}

.ic-infobox-enable .markdown-rendered .callout[data-callout="infobox"], .ic-infobox-enable .markdown-reading-view .callout[data-callout="infobox"], .ic-infobox-enable .callout[data-callout="infobox"] {
background-color: var(--ic-infobox-color) !important;
border-color: var(--ic-border-color) !important;
}`,
    "ic-title-typography-toggle": `.ic-infobox-enable.ic-title-typography-toggle .callout[data-callout="infobox"] .callout-title, .ic-infobox-enable.ic-title-typography-toggle .callout[data-callout="infoboxright"] .callout-title, .ic-infobox-enable.ic-title-typography-toggle .callout[data-callout="infoboxleft"] .callout-title {
font-family: var(--ic-title-font);
font-feature-settings: var(--ic-title-stylistic-sets);
}

.ic-infobox-enable.ic-title-smallcaps .callout[data-callout="infobox"] .callout-title, .ic-infobox-enable.ic-title-smallcaps .callout[data-callout="infoboxright"] .callout-title, .ic-infobox-enable.ic-title-smallcaps .callout[data-callout="infoboxleft"] .callout-title {
font-variant: small-caps;
}`,
    "ic-title-smallcaps": `.ic-infobox-enable.ic-title-typography-toggle.ic-title-smallcaps .callout[data-callout="infobox"] .callout-title, .ic-infobox-enable.ic-title-typography-toggle.ic-title-smallcaps .callout[data-callout="infoboxright"] .callout-title, .ic-infobox-enable.ic-title-typography-toggle.ic-title-smallcaps .callout[data-callout="infoboxleft"] .callout-title {
font-variant: small-caps;
}`,
    "tabbed-callout-enable": `.tabbed-callout-enable .markdown-rendered blockquote::before {
display: none;
}

.tabbed-callout-enable [data-callout="tabbed"] {
--callout-color: var(--interactive-normal);
position: relative !important;
z-index: 10 !important;
background-color: var(--interactive-normal) !important;
outline: 1px solid var(--divider-color);
border-radius: var(--card-radius);
border-style: solid;
border-color: var(--callout-color);
border-width: var(--callout-border-width);
}

.tabbed-callout-enable [data-callout="tabbed"]>.callout-content {
padding: 0.25rem;
display: flex;
flex-wrap: wrap;
gap: 0 1rem;
justify-content: space-evenly;
}

.tabbed-callout-enable [data-callout="tabbed"]>.callout-title {
display: none;
}

.tabbed-callout-enable [data-callout="tabbed"]>.callout-content p {
margin: 0;
}

.tabbed-callout-enable [data-callout="tabbed"]>.callout-content label>input {
display: none;
}

.tabbed-callout-enable [data-callout="tabbed"]>.callout-content label {
width: 100%;
display: inline-block;
padding: 0.15rem 0.75ch;
border-radius: calc(var(--card-radius) / 2);
position: relative;
white-space: nowrap;
color: var(--text-normal);
background-color: var(--color-panel);
text-align: center;
font-weight: bold;
font-size: 1.15rem;
cursor: pointer;
border: 1px solid var(--divider-color);
}

.tabbed-callout-enable [data-callout="tabbed"]>.callout-content label:has(input:checked) {
color: white;
background-color: var(--color-accent);
}

.tabbed-callout-enable [data-callout="tabbed"]>.callout-content p:not(:has(label input:checked))+blockquote {
display: none;
}

.tabbed-callout-enable [data-callout="tabbed"]>.callout-content>blockquote {
order: 999;
flex-basis: 100%;
width: 100%;
align-self: stretch;
background-color: transparent;
padding-left: 0;
border: 0;
text-align: center;
}`,
    "tab-autohide": `body:not(.is-mobile).tab-autohide .workspace-tabs {
gap: 0px;
transition: gap var(--anim-out);
}

body:not(.is-mobile).tab-autohide :has(.workspace-tab-header-container:hover) .workspace-tabs:hover {
gap: 4px;
transition: gap var(--anim-in);
}

body:not(.is-mobile).tab-autohide .workspace-tab-header-container {
height: 40px;
opacity: 0;
transition: opacity var(--anim-out);
}

body:not(.is-mobile).tab-autohide .workspace-tab-header-container:hover {
height: 40px;
opacity: 1;
transition: opacity var(--anim-in);
}

body:not(.is-mobile).tab-autohide .workspace-tab-header-container-inner {
transform: translateY(0px);
opacity: 0;
transition: transform var(--anim-out), opacity var(--anim-out);
}

body:not(.is-mobile).tab-autohide .workspace-tab-header-container:hover .workspace-tab-header-container-inner, body:not(.is-mobile).tab-autohide:has(.mod-top > .workspace-tab-header-container:hover, .titlebar-button-container:hover) .mod-top .workspace-tab-header-container-inner {
transform: translateY(0px);
opacity: 1;
transition: transform var(--anim-in), opacity var(--anim-in);
}

body:not(.is-mobile).is-hidden-frameless .titlebar-button {
height: 100%;
}

body:not(.is-mobile).tab-autohide:has(.mod-top > .workspace-tab-header-container:hover, .titlebar-button-container:hover) .titlebar-button {
height: 44px;
}

body:not(.is-mobile).tab-autohide .workspace-split.mod-vertical>*>.workspace-leaf-resize-handle, body:not(.is-mobile).tab-autohide .workspace-split.mod-left-split>.workspace-leaf-resize-handle, body:not(.is-mobile).tab-autohide .workspace-split.mod-right-split>.workspace-leaf-resize-handle {
height: calc(var(--divider-vertical-height) + 24px);
transition: height var(--anim-out), background-color 200ms ease-in-out, border-color 200ms ease-in-out, opacity 200ms ease-in-out;
}

body:not(.is-mobile).status-bar-autohide:has(.status-bar:hover) .workspace-split.mod-vertical>*>.workspace-leaf-resize-handle, body:not(.is-mobile).status-bar-autohide:has(.status-bar:hover) .workspace-split.mod-left-split>.workspace-leaf-resize-handle, body:not(.is-mobile).status-bar-autohide:has(.status-bar:hover) .workspace-split.mod-right-split>.workspace-leaf-resize-handle {
transition: height var(--anim-in), background-color 200ms ease-in-out, border-color 200ms ease-in-out, opacity 200ms ease-in-out;
}

body:not(.is-mobile).tab-autohide:has(.mod-top > .workspace-tab-header-container:hover, .titlebar-button-container:hover) .workspace-split.mod-vertical>*>.workspace-leaf-resize-handle, body:not(.is-mobile).tab-autohide:has(.mod-top > .workspace-tab-header-container:hover, .titlebar-button-container:hover) .workspace-split.mod-left-split>.workspace-leaf-resize-handle, body:not(.is-mobile).tab-autohide:has(.mod-top > .workspace-tab-header-container:hover, .titlebar-button-container:hover) .workspace-split.mod-right-split>.workspace-leaf-resize-handle {
height: calc(var(--divider-vertical-height) - 4px);
transition: height var(--anim-in), background-color 200ms ease-in-out, border-color 200ms ease-in-out, opacity 200ms ease-in-out;
}

body:not(.is-mobile).is-hidden-frameless .workspace-split.mod-vertical>*>.workspace-leaf-resize-handle, body:not(.is-mobile).is-hidden-frameless .workspace-split.mod-left-split>.workspace-leaf-resize-handle, body:not(.is-mobile).is-hidden-frameless .workspace-split.mod-right-split>.workspace-leaf-resize-handle {
height: calc(var(--divider-vertical-height) - 16px);
transition: height var(--anim-out), background-color 200ms ease-in-out, border-color 200ms ease-in-out, opacity 200ms ease-in-out;
}

body:not(.is-mobile).status-bar-autohide:has(.status-bar:hover).is-hidden-frameless .workspace-split.mod-vertical>*>.workspace-leaf-resize-handle, body:not(.is-mobile).status-bar-autohide:has(.status-bar:hover).is-hidden-frameless .workspace-split.mod-left-split>.workspace-leaf-resize-handle, body:not(.is-mobile).status-bar-autohide:has(.status-bar:hover).is-hidden-frameless .workspace-split.mod-right-split>.workspace-leaf-resize-handle {
transition: height var(--anim-in), background-color 200ms ease-in-out, border-color 200ms ease-in-out, opacity 200ms ease-in-out;
}

body:not(.is-mobile).is-hidden-frameless:has(.mod-top > .workspace-tab-header-container:hover, .titlebar-button-container:hover) .workspace-split.mod-vertical>*>.workspace-leaf-resize-handle, body:not(.is-mobile).is-hidden-frameless:has(.mod-top > .workspace-tab-header-container:hover, .titlebar-button-container:hover) .workspace-split.mod-left-split>.workspace-leaf-resize-handle, body:not(.is-mobile).is-hidden-frameless:has(.mod-top > .workspace-tab-header-container:hover, .titlebar-button-container:hover) .workspace-split.mod-right-split>.workspace-leaf-resize-handle {
height: calc(var(--divider-vertical-height) - var(--header-height) - 4px);
transition: height var(--anim-in), background-color 200ms ease-in-out, border-color 200ms ease-in-out, opacity 200ms ease-in-out;
}

body:not(.is-mobile).tab-autohide .workspace-tabs.mod-top {
gap: 0px;
transition: gap var(--anim-out);
}

body:not(.is-mobile).status-bar-autohide:has(.status-bar:hover) .workspace-tabs.mod-top {
transition: gap var(--anim-in);
}

body:not(.is-mobile).tab-autohide:has(.mod-top > .workspace-tab-header-container:hover, .titlebar-button-container:hover) .workspace-tabs.mod-top {
gap: 4px;
transition: gap var(--anim-in);
}

body:not(.is-mobile).tab-autohide .workspace::before {
height: calc(100% - 16px);
}

body:not(.is-mobile).tab-autohide:has(.mod-top > .workspace-tab-header-container:hover, .titlebar-button-container:hover) .workspace::before {
height: calc(100% - 44px);
}

body:not(.is-mobile).is-hidden-frameless .titlebar-button-container, body:not(.is-mobile).tab-autohide .mod-top .workspace-tab-header-container {
height: 16px;
opacity: 0;
transition: height var(--anim-out), opacity var(--anim-out);
}

body:not(.is-mobile).tab-autohide:has(.mod-top > .workspace-tab-header-container:hover, .titlebar-button-container:hover) .mod-top .workspace-tab-header-container {
height: 40px;
opacity: 1;
transition: height var(--anim-in), opacity var(--anim-in);
}

body:not(.is-mobile).tab-autohide:has(.mod-top > .workspace-tab-header-container:hover, .titlebar-button-container:hover).is-hidden-frameless .titlebar-button-container {
height: 44px;
opacity: 1;
transition: height var(--anim-in), opacity var(--anim-in);
}

body:not(.is-mobile).status-bar-autohide:has(.status-bar:hover).is-hidden-frameless .titlebar-button-container, body:not(.is-mobile).status-bar-autohide:has(.status-bar:hover) .mod-top .workspace-tab-header-container {
transition: height var(--anim-in), opacity var(--anim-in);
}

body:not(.is-mobile):not(.is-popout-window).mod-macos.is-hidden-frameless:not(.is-fullscreen) .mod-left-split .mod-top-left-space .workspace-tab-header-container, body:not(.is-mobile):not(.is-popout-window).mod-macos.is-hidden-frameless:not(.is-fullscreen) .workspace:not(.is-left-sidedock-open) .sidebar-toggle-button.mod-left {
transition: height var(--anim-out), opacity var(--anim-out), margin-left var(--anim-out);
}

body:not(.is-mobile):not(.is-popout-window).mod-macos.is-hidden-frameless:not(.is-fullscreen):has(.mod-top > .workspace-tab-header-container:hover, .titlebar-button-container:hover) .mod-left-split .mod-top-left-space .workspace-tab-header-container, body:not(.is-mobile):not(.is-popout-window).mod-macos.is-hidden-frameless:not(.is-fullscreen):has(.mod-top > .workspace-tab-header-container:hover, .titlebar-button-container:hover) .workspace:not(.is-left-sidedock-open) .sidebar-toggle-button.mod-left {
transition: height var(--anim-in), opacity var(--anim-in), margin-left var(--anim-out);
}

body.labeled-nav.tab-autohide .mod-left-split .mod-top .workspace-tab-header-container {
position: relative !important;
}

body.labeled-nav.tab-autohide .mod-left-split .mod-top .workspace-tab-header-container .sidebar-toggle-button.mod-left {
position: absolute !important;
justify-content: flex-end !important;
padding-right: var(--size-4-2) !important;
top: 0 !important;
right: 0 !important;
}

body.labeled-nav.tab-autohide .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-container-inner {
flex-grow: 1 !important;
gap: 0 !important;
padding: var(--size-4-2) var(--size-4-3) !important;
}

body.labeled-nav.tab-autohide .mod-left-split .mod-top .workspace-tab-header .workspace-tab-header-inner {
gap: var(--size-2-3);
padding: 2px !important;
}

body.labeled-nav.tab-autohide .mod-left-split .mod-top .workspace-tab-header .workspace-tab-header.tappable.is-active {
background-color: var(--color-accent) !important;
}

body.labeled-nav.tab-autohide .mod-left-split .mod-top .workspace-tab-header.is-active {
background-color: var(--color-accent) !important;
}
body:not(.is-mobile).tab-autohide:not(.card-layout-open-light).theme-light .workspace-tabs:not(.mod-top) .workspace-tab-container>.workspace-leaf, body:not(.is-mobile).tab-autohide:not(.card-layout-open-dark).theme-dark .workspace-tabs:not(.mod-top) .workspace-tab-container>.workspace-leaf {
box-shadow: inset 0px 1px 0px transparent;
transition: box-shadow var(--anim-out);
}

body:not(.is-mobile).tab-autohide:not(.card-layout-open-light).theme-light :has(.workspace-tab-header-container:hover) .workspace-tabs:not(.mod-top):hover .workspace-tab-container>.workspace-leaf, body:not(.is-mobile).tab-autohide:not(.card-layout-open-dark).theme-dark :has(.workspace-tab-header-container:hover) .workspace-tabs:not(.mod-top):hover .workspace-tab-container>.workspace-leaf {
box-shadow: inset 0px 1px 0px var(--workspace-divider-color);
transition: box-shadow var(--anim-in);
}
body:not(.is-mobile).tab-autohide:not(.card-layout-open-light).theme-light .workspace-tabs:not(.mod-top) .workspace-tab-container>.workspace-leaf, body:not(.is-mobile).tab-autohide:not(.card-layout-open-dark).theme-dark .workspace-tabs:not(.mod-top) .workspace-tab-container>.workspace-leaf {
box-shadow: inset 0px 1px 0px transparent;
transition: box-shadow var(--anim-out);
}

body:not(.is-mobile).tab-autohide:not(.card-layout-open-light).theme-light :has(.workspace-tab-header-container:hover) .workspace-tabs:not(.mod-top):hover .workspace-tab-container>.workspace-leaf, body:not(.is-mobile).tab-autohide:not(.card-layout-open-dark).theme-dark :has(.workspace-tab-header-container:hover) .workspace-tabs:not(.mod-top):hover .workspace-tab-container>.workspace-leaf {
box-shadow: inset 0px 1px 0px var(--workspace-divider-color);
transition: box-shadow var(--anim-in);
}`,
    "status-bar-autohide": `body:not(.is-mobile).tab-autohide.status-bar-autohide:has(.status-bar:hover) .workspace-split.mod-vertical>*>.workspace-leaf-resize-handle, body:not(.is-mobile).tab-autohide.status-bar-autohide:has(.status-bar:hover) .workspace-split.mod-left-split>.workspace-leaf-resize-handle, body:not(.is-mobile).tab-autohide.status-bar-autohide:has(.status-bar:hover) .workspace-split.mod-right-split>.workspace-leaf-resize-handle {
transition: height var(--anim-in), background-color 200ms ease-in-out, border-color 200ms ease-in-out, opacity 200ms ease-in-out;
}

body:not(.is-mobile).tab-autohide.status-bar-autohide:has(.status-bar:hover).is-hidden-frameless .workspace-split.mod-vertical>*>.workspace-leaf-resize-handle, body:not(.is-mobile).tab-autohide.status-bar-autohide:has(.status-bar:hover).is-hidden-frameless .workspace-split.mod-left-split>.workspace-leaf-resize-handle, body:not(.is-mobile).tab-autohide.status-bar-autohide:has(.status-bar:hover).is-hidden-frameless .workspace-split.mod-right-split>.workspace-leaf-resize-handle {
transition: height var(--anim-in), background-color 200ms ease-in-out, border-color 200ms ease-in-out, opacity 200ms ease-in-out;
}

body:not(.is-mobile).tab-autohide.status-bar-autohide:has(.status-bar:hover) .workspace-tabs.mod-top {
transition: gap var(--anim-in);
}

body:not(.is-mobile).tab-autohide.status-bar-autohide:has(.status-bar:hover).is-hidden-frameless .titlebar-button-container, body:not(.is-mobile).tab-autohide.status-bar-autohide:has(.status-bar:hover) .mod-top .workspace-tab-header-container {
transition: height var(--anim-in), opacity var(--anim-in);
}

body:not(.is-mobile).status-bar-autohide .status-bar {
opacity: 0;
height: 16px;
transition: height var(--anim-out), opacity var(--anim-out);
}

body:not(.is-mobile).status-bar-autohide .status-bar:hover {
opacity: 1;
height: 24px;
transition: height var(--anim-in), opacity var(--anim-in);
}

body:not(.is-mobile).status-bar-autohide .horizontal-main-container {
transition: padding-bottom var(--anim-out);
}

body:not(.is-mobile).status-bar-autohide:has(.status-bar:hover) .horizontal-main-container {
padding-bottom: 6px;
transition: padding-bottom var(--anim-in);
}`,
    "Ribbon-autohide": `body:not(.is-mobile).show-ribbon .workspace-ribbon.side-dock-ribbon.mod-left {
--ribbon-width: 16px;
transition: all var(--anim-out);
}

body:not(.is-mobile).show-ribbon .workspace-ribbon.side-dock-ribbon.mod-left:hover {
--ribbon-width: 44px;
transition: all var(--anim-in);
}

body:not(.is-mobile).show-ribbon .workspace-ribbon.side-dock-ribbon.mod-left>* {
opacity: 0;
transition: all var(--anim-out);
}

body:not(.is-mobile).show-ribbon .workspace-ribbon.side-dock-ribbon.mod-left:hover>* {
opacity: 1;
transition: all var(--anim-in);
}

body:not(.is-mobile).show-ribbon .workspace::before {
width: calc(100% - 16px);
}

body:not(.is-mobile).show-ribbon:has(.workspace-ribbon.side-dock-ribbon:hover) .workspace::before {
width: calc(100% - 44px);
}

body:not(.is-mobile):not(.is-popout-window).show-ribbon.mod-macos.is-hidden-frameless:not(.is-fullscreen) .mod-left-split .mod-top-left-space .workspace-tab-header-container, body:not(.is-mobile):not(.is-popout-window).show-ribbon.mod-macos.is-hidden-frameless:not(.is-fullscreen) .workspace:not(.is-left-sidedock-open) .sidebar-toggle-button.mod-left {
margin-left: 28px;
}

body:not(.is-mobile):not(.is-popout-window).show-ribbon.mod-macos.is-hidden-frameless:not(.is-fullscreen):has(.workspace-ribbon.side-dock-ribbon:hover) .mod-left-split .mod-top-left-space .workspace-tab-header-container, body:not(.is-mobile):not(.is-popout-window).show-ribbon.mod-macos.is-hidden-frameless:not(.is-fullscreen):has(.workspace-ribbon.side-dock-ribbon:hover) .workspace:not(.is-left-sidedock-open) .sidebar-toggle-button.mod-left {
margin-left: 0px;
}

body:not(.is-mobile):not(.is-popout-window).show-ribbon.mod-macos.is-hidden-frameless:not(.is-fullscreen) .mod-left-split .mod-top-left-space .workspace-tab-header-container, body:not(.is-mobile):not(.is-popout-window).show-ribbon.mod-macos.is-hidden-frameless:not(.is-fullscreen) .workspace:not(.is-left-sidedock-open) .sidebar-toggle-button.mod-left {
transition: height var(--anim-out), opacity var(--anim-out), margin-left var(--anim-out);
}

body:not(.is-mobile):not(.is-popout-window).show-ribbon.mod-macos.is-hidden-frameless:not(.is-fullscreen):has(.workspace-ribbon.side-dock-ribbon:hover) .mod-left-split .mod-top-left-space .workspace-tab-header-container, body:not(.is-mobile):not(.is-popout-window).show-ribbon.mod-macos.is-hidden-frameless:not(.is-fullscreen):has(.workspace-ribbon.side-dock-ribbon:hover) .workspace:not(.is-left-sidedock-open) .sidebar-toggle-button.mod-left {
transition: height var(--anim-out), opacity var(--anim-out), margin-left var(--anim-in);
}`,
    "nav-header-autohide": `body:not(.is-mobile).nav-header-autohide :is(.workspace-leaf-content, .view-content)>.nav-header .nav-buttons-container {
height: 8px;
opacity: 0;
transition: height var(--anim-out), opacity var(--anim-out);
}

body:not(.is-mobile).nav-header-autohide :is(.workspace-leaf-content, .view-content)>.nav-header:hover .nav-buttons-container, body:not(.is-mobile).nav-header-autohide .workspace-tab-header-container:hover~.workspace-tab-container :is(.workspace-leaf-content, .view-content)>.nav-header .nav-buttons-container, body:not(.is-mobile).tab-title-bar-autohide.nav-header-autohide .mod-root .workspace-leaf-content[data-type="backlink"] .view-header:hover~.view-content>.nav-header .nav-buttons-container {
height: 32px;
opacity: 1;
transition: height var(--anim-in), opacity var(--anim-in);
}

body:not(.is-mobile).nav-header-autohide :is(.workspace-leaf-content, .view-content)>.nav-header .search-input-container {
height: 0px;
opacity: 0;
margin: 0px auto 0px;
transition: height var(--anim-out), opacity var(--anim-out), margin var(--anim-out);
}

body:not(.is-mobile).nav-header-autohide :is(.workspace-leaf-content, .view-content)>.nav-header:hover .search-input-container, body:not(.is-mobile).nav-header-autohide .workspace-tab-header-container:hover~.workspace-tab-container :is(.workspace-leaf-content, .view-content)>.nav-header .search-input-container, body:not(.is-mobile).tab-title-bar-autohide.nav-header-autohide .mod-root .workspace-leaf-content[data-type="backlink"] .view-header:hover~.view-content>.nav-header .search-input-container {
height: 30px;
opacity: 1;
margin: 6px auto 4px;
transition: height var(--anim-in), opacity var(--anim-in), margin var(--anim-in);
}`,
    "tab-title-bar-autohide": `body:not(.is-mobile).nav-header-autohide .mod-root .workspace-leaf-content[data-type="backlink"] .view-header:hover~.view-content>.nav-header .nav-buttons-container {
height: 32px;
opacity: 1;
transition: height var(--anim-in), opacity var(--anim-in);
}

body:not(.is-mobile).nav-header-autohide .mod-root .workspace-leaf-content[data-type="backlink"] .view-header:hover~.view-content>.nav-header .search-input-container {
height: 30px;
opacity: 1;
margin: 6px auto 4px;
transition: height var(--anim-in), opacity var(--anim-in), margin var(--anim-in);
}

body:not(.is-mobile).tab-title-bar-autohide .view-header::after {
width: 100%;
content: " ";
background-color: transparent;
height: var(--size-4-4);
position: absolute;
z-index: -9;
top: 1px;
right: 0;
}

body:not(.is-mobile).tab-title-bar-autohide .workspace-leaf .view-header {
height: 0;
margin-top: -1px;
opacity: 0;
transition: height var(--anim-out), margin var(--anim-out), opacity var(--anim-out);
}

body:not(.is-mobile).tab-title-bar-autohide .workspace-leaf .view-header:focus-within, body:not(.is-mobile).tab-title-bar-autohide .workspace-leaf .view-header:hover, body:not(.is-mobile).tab-title-bar-autohide .workspace-tab-header-container:hover~.workspace-tab-container .view-header {
height: var(--header-height);
margin-top: 0px;
opacity: 1;
transition: height var(--anim-in), margin var(--anim-in), opacity var(--anim-in);
}`,
    "vault-profile-autohide": `body:not(.is-mobile).vault-profile-autohide .workspace-split.mod-left-split .workspace-sidedock-vault-profile {
height: 16px;
border-top: 0 solid transparent;
opacity: 0;
transition: height var(--anim-out), border-top var(--anim-out), opacity var(--anim-out);
}

body:not(.is-mobile).vault-profile-autohide .workspace-split.mod-left-split .workspace-sidedock-vault-profile:hover {
height: 44px;
border-top: var(--tab-outline-width) solid var(--tab-outline-color);
opacity: 1;
transition: height var(--anim-in), border-top var(--anim-in), opacity var(--anim-in);
}

body:not(.is-mobile).vault-profile-autohide .workspace-split.mod-left-split .workspace-tabs:last-of-type .workspace-tab-container {
padding-bottom: 0px;
transition: padding-bottom var(--anim-out);
}

body:not(.is-mobile).vault-profile-autohide:has(.workspace-sidedock-vault-profile:hover) .workspace-split.mod-left-split .workspace-tabs:last-of-type .workspace-tab-container {
padding-bottom: 44px;
transition: padding-bottom var(--anim-in);
}`,
    "toggle-tab-animations": `.toggle-tab-animations .workspace-tab-header {
max-width: 100%;
display: flex;
flex-grow: 1;
border-radius: var(--tab-radius);
padding: 0 !important;
box-shadow: none !important;
transition: flex-grow 0.5s ease-in-out, background-color 0.4s ease-in-out !important;
background: var(--background-primary);
box-sizing: border-box;
color: var(--text-normal);
overflow: hidden;
min-height: var(--tab-size);
align-items: center;
}

body:not(.is-mobile).toggle-tab-animations .workspace-tab-header.is-active.mod-active {
flex-grow: 2 !important;
max-width: 250px;
background-color: var(--color-accent);
box-sizing: border-box;
border: none;
}`,
  },
};
