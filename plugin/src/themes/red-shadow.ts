import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "red-shadow",
    modes: ["dark"],
    variations: [],
    fonts: ["fira-code", "montserrat"],
  },
  dark: {
    base: `:root:root {
  --CG-line-width: 40rem;
  --accent-h: 0;
  --accent-l: 42%;
  --accent-s: 68%;
  --background-modifier-border: var(--color-base-30, rgba(247, 14, 14, 0.05));
  --background-primary: var(--color-base-00, #0b090a);
  --background-primary-alt: var(--color-base-10, #121212);
  --background-secondary: var(--color-base-20, #121212);
  --background-secondary-alt: var(--color-base-30, #121212);
  --bases-cards-background: var(--background-primary, #0b090a);
  --bases-cards-cover-background: var(--background-primary-alt, #121212);
  --bases-embed-border-color: var(--background-modifier-border, rgba(247, 14, 14, 0.05));
  --bases-table-border-color: var(--table-border-color, rgba(247, 14, 14, 0.15));
  --bases-table-cell-background-active: var(--background-primary, #0b090a);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #121212);
  --bases-table-cell-background-selected: var(--table-selection, hsla(0, 68%, 42%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #121212);
  --bases-table-header-background: var(--background-primary, #0b090a);
  --bases-table-summary-background: var(--background-primary, #0b090a);
  --bg-accent-25: rgba(247, 14, 14, 0.25);
  --bg-accent-55: rgba(247, 14, 14, 0.55);
  --bg-sub-accent-55: rgba(244, 86, 86, 0.55);
  --blockquote-border: #fb4a4a;
  --blockquote-border-color: var(--interactive-accent, rgba(247, 14, 14, 0.5));
  --body-font-weight: 400;
  --callout-bug: var(--callout-bug, 251, 70, 76);
  --callout-default: var(--callout-default, 2, 122, 255);
  --callout-error: var(--callout-error, 251, 70, 76);
  --callout-example: var(--callout-example, 168, 130, 255);
  --callout-fail: var(--callout-fail, 251, 70, 76);
  --callout-info: var(--callout-info, 2, 122, 255);
  --callout-question: var(--callout-question, 233, 151, 63);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--callout-success, 68, 207, 110);
  --callout-summary: var(--callout-summary, 83, 223, 221);
  --callout-tip: var(--callout-tip, 83, 223, 221);
  --callout-todo: var(--callout-todo, 2, 122, 255);
  --callout-warning: var(--callout-warning, 233, 151, 63);
  --canvas-background: var(--background-primary, #0b090a);
  --canvas-card-label-color: var(--text-faint, #bebebe);
  --caret-color: var(--text-normal, #e0e0e0);
  --checkbox: rgba(247, 14, 14, 0.7);
  --checkbox-border-color: var(--text-faint, #bebebe);
  --checkbox-color: var(--interactive-accent, rgba(247, 14, 14, 0.5));
  --checkbox-color-hover: var(--interactive-accent-hover, rgba(247, 14, 14, 0.8));
  --checkbox-marker-color: var(--background-primary, #0b090a);
  --code-background: var(--background-secondary, #121212);
  --code-border-color: var(--background-modifier-border, rgba(247, 14, 14, 0.05));
  --code-comment: var(--text-faint, #bebebe);
  --code-mono-font: 'Fira Code', 'Operator Mono', 'JetBrains Mono', 'Source Code Pro', 'OperatorMonoSSmLig-Book', monospace;
  --code-normal: var(--text-normal, #e0e0e0);
  --collapse-icon-color: var(--text-faint, #bebebe);
  --collapse-icon-color-collapsed: var(--text-accent, #b22222);
  --dark: var(--text-normal, var(--color-base-100, #e0e0e0));
  --darkgray: var(--text-normal, var(--color-base-100, #e0e0e0));
  --default-font: 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif;
  --default-font-size: 16px;
  --divider-color: var(--background-modifier-border, rgba(247, 14, 14, 0.05));
  --divider-color-hover: var(--interactive-accent, rgba(247, 14, 14, 0.5));
  --editor-border-color: #141010;
  --file-header-background: var(--background-primary, #0b090a);
  --file-header-background-focused: var(--background-primary, #0b090a);
  --file-header-font: var(--font-interface, Poppins, Oswald, Montserrat, Roboto, Glow Sans SC, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-line-width: var(--CG-line-width, 40rem);
  --flair-color: var(--text-normal, #e0e0e0);
  --font-family-editor: 'Oswald';
  --font-family-preview: 'Oswald';
  --footnote-divider-color: var(--metadata-divider-color, rgba(247, 14, 14, 0.05));
  --footnote-id-color-no-occurrences: var(--text-faint, #bebebe);
  --graph-node-focused: var(--text-accent, #b22222);
  --graph-node-unresolved: var(--text-faint, #bebebe);
  --graph-text: var(--text-normal, #e0e0e0);
  --gray: var(--text-faint, var(--color-base-50, #bebebe));
  --heading-formatting: var(--text-faint, #bebebe);
  --hr-color: var(--background-modifier-border, rgba(247, 14, 14, 0.05));
  --icon-color-active: var(--text-accent, #b22222);
  --icon-color-focused: var(--text-normal, #e0e0e0);
  --input-date-separator: var(--text-faint, #bebebe);
  --input-placeholder-color: var(--text-faint, #bebebe);
  --interactive-accent: var(--color-accent, rgba(247, 14, 14, 0.5));
  --interactive-accent-hover: var(--color-accent-1, rgba(247, 14, 14, 0.8));
  --interactive-accent-hsl: var(--color-accent-hsl, 0, 68%, 42%);
  --interactive-accent-rgb: #fb3d3d;
  --interactive-before: #655e5e;
  --light: var(--background-primary, var(--color-base-00, #0b090a));
  --lightgray: var(--background-secondary, var(--color-base-20, #121212));
  --link-color: var(--text-accent, #b22222);
  --link-color-hover: var(--text-accent-hover, hsl(-5, 71.4%, 54.18%));
  --link-external-color: var(--text-accent, #b22222);
  --link-external-color-hover: var(--text-accent-hover, hsl(-5, 71.4%, 54.18%));
  --link-unresolved-color: var(--text-accent, #b22222);
  --list-marker-color: var(--text-faint, #bebebe);
  --list-marker-color-collapsed: var(--text-accent, #b22222);
  --menu-background: var(--background-secondary, #121212);
  --metadata-border-color: var(--background-modifier-border, rgba(247, 14, 14, 0.05));
  --metadata-divider-color: var(--background-modifier-border, rgba(247, 14, 14, 0.05));
  --metadata-input-font: var(--font-interface, Poppins, Oswald, Montserrat, Roboto, Glow Sans SC, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #e0e0e0);
  --metadata-label-font: var(--font-interface, Poppins, Oswald, Montserrat, Roboto, Glow Sans SC, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --modal-background: var(--background-primary, #0b090a);
  --nav-collapse-icon-color: var(--collapse-icon-color, #bebebe);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #bebebe);
  --nav-heading-color: var(--text-normal, #e0e0e0);
  --nav-heading-color-collapsed: var(--text-faint, #bebebe);
  --nav-heading-color-hover: var(--text-normal, #e0e0e0);
  --nav-item-color-active: var(--text-normal, #e0e0e0);
  --nav-item-color-highlighted: var(--text-accent, #b22222);
  --nav-item-color-hover: var(--text-normal, #e0e0e0);
  --nav-item-color-selected: var(--text-normal, #e0e0e0);
  --nav-tag-color: var(--text-faint, #bebebe);
  --newoutlined-logo: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='18' height='18' fill='none' stroke='currentColor' stroke-width='32' stroke-linecap='round' stroke-linejoin='round' class='logo-wireframe'%3E%3Cpath d='M172.7 461.6c73.6-149.1 2.1-217-43.7-246.9m72 96.7c71.6-17.3 141-16.3 189.8 88.5m-114-96.3c-69.6-174 44.6-181 16.3-273.6m97.7 370c1.6-3 3.3-5.8 5.1-8.6 20-29.9 34.2-53.2 41.4-65.3a16 16 0 0 0-1.2-17.7 342.1 342.1 0 0 1-40.2-66.1c-10.9-26-12.5-66.5-12.6-86.2 0-7.4-2.4-14.7-7-20.6l-81.8-104a32 32 0 0 0-1.4-1.5m97.7 370a172.8 172.8 0 0 0-18 59c-2.9 21.5-24 38.4-45 32.6-30-8.3-64.5-21.1-95.7-23.5l-47.8-3.6c-7.7-.6-15-4-20.3-9.5l-82.3-84.8c-9-9.2-11.4-23-6.2-34.8 0 0 51-111.8 52.8-117.7l.7-3M293.1 30a31.5 31.5 0 0 0-44.4-2.3l-97.4 87.5c-5.4 5-9 11.5-10 18.8-3.7 24.5-9.7 68-12.3 80.7'%3E%3C/path%3E%3C/svg%3E");
  --outlined-logo: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='15 -3 69 106'%3E%3Cpath d='M 30.91 17.52 L 34.43 35.7 M 61.44 14.41 L 62.61 0 M 34.43 35.7 L 37.57 90.47 M 81 26.39 L 61.44 14.41 L 34.43 35.7 L 65.35 100 M 62.61 0 L 30.91 17.52 L 18 45.45 L 37.57 90.47 L 65.35 100 L 70.44 89.8 L 81 26.39 L 62.61 0 Z' stroke='%23000000' stroke-width='4' fill='none'/%3E%3C/svg%3E");
  --pdf-background: var(--background-primary, #0b090a);
  --pdf-page-background: var(--background-primary, #0b090a);
  --pdf-sidebar-background: var(--background-primary, #0b090a);
  --pill-border-color: var(--background-modifier-border, rgba(247, 14, 14, 0.05));
  --pill-color-hover: var(--text-normal, #e0e0e0);
  --pill-color-remove: var(--text-faint, #bebebe);
  --pill-color-remove-hover: var(--text-accent, #b22222);
  --prompt-background: var(--background-primary, #0b090a);
  --ribbon-background: var(--background-secondary, #121212);
  --ribbon-background-collapsed: var(--background-primary, #0b090a);
  --search-result-background: var(--background-primary, #0b090a);
  --secondary: var(--text-accent, var(--color-accent-1, #b22222));
  --setting-group-heading-color: var(--text-normal, #e0e0e0);
  --setting-items-background: var(--background-primary-alt, #121212);
  --setting-items-border-color: var(--background-modifier-border, rgba(247, 14, 14, 0.05));
  --shiki-code-background: var(--code-background, #121212);
  --shiki-code-comment: var(--text-faint, #bebebe);
  --shiki-gutter-border-color: var(--background-modifier-border, rgba(247, 14, 14, 0.05));
  --shiki-gutter-text-color: var(--text-faint, #bebebe);
  --shiki-terminal-dots-color: var(--text-faint, #bebebe);
  --slider-track-background: var(--background-modifier-border, rgba(247, 14, 14, 0.05));
  --status-bar-background: var(--background-secondary, #121212);
  --status-bar-border-color: var(--divider-color, rgba(247, 14, 14, 0.05));
  --suggestion-background: var(--background-primary, #0b090a);
  --tab-background-active: var(--background-primary, #0b090a);
  --tab-container-background: var(--background-secondary, #121212);
  --tab-outline-color: var(--divider-color, rgba(247, 14, 14, 0.05));
  --tab-switcher-background: var(--background-secondary, #121212);
  --tab-text-color: var(--text-faint, #bebebe);
  --tab-text-color-focused-active-current: var(--text-normal, #e0e0e0);
  --tab-text-color-focused-highlighted: var(--text-accent, #b22222);
  --table-add-button-border-color: var(--background-modifier-border, rgba(247, 14, 14, 0.05));
  --table-border-color: var(--background-modifier-border, rgba(247, 14, 14, 0.15));
  --table-drag-handle-background-active: var(--table-selection-border-color, rgba(247, 14, 14, 0.5));
  --table-drag-handle-color: var(--text-faint, #bebebe);
  --table-header-border-color: var(--table-border-color, rgba(247, 14, 14, 0.15));
  --table-header-color: var(--text-normal, #e0e0e0);
  --table-selection-border-color: var(--interactive-accent, rgba(247, 14, 14, 0.5));
  --tag-color: var(--text-accent, #b22222);
  --tag-color-hover: var(--text-accent, #b22222);
  --tag-font-family: 'Fira Sans', 'Operator Mono', 'OperatorMonoSSmLig-Book', 'Montserrat', 'Glow Sans SC', 'PingFang TC', '微软雅黑', 'STXihei', '华文细黑', 'Microsoft YaHei', 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(-5, 71.4%, 54.18%)));
  --test-color: rgb(247, 122, 122);
  --text-a: #fb6b6b;
  --text-a-hover: #fb6b6b;
  --text-accent: var(--color-accent-1, #b22222);
  --text-accent-hover: var(--color-accent-2, hsl(-5, 71.4%, 54.18%));
  --text-border: #1b1b1b;
  --text-dim: #8b0000;
  --text-faint: var(--color-base-50, #bebebe);
  --text-link: #b4b4b4;
  --text-mark: #922626;
  --text-normal: var(--color-base-100, #e0e0e0);
  --text-sub-accent: #f45656;
  --text-title-h1: var(--text-accent, #b22222);
  --text-title-h2: #e5383b;
  --text-title-h3: #e5383b;
  --text-title-h4: #e5383b;
  --text-title-h5: #e5383b;
  --titlebar-background: var(--background-secondary, #121212);
  --titlebar-background-focused: var(--background-secondary-alt, #121212);
  --titlebar-border-color: var(--background-modifier-border, rgba(247, 14, 14, 0.05));
  --titlebar-text-color-focused: var(--text-normal, #e0e0e0);
  --vault-profile-color: var(--text-normal, #e0e0e0);
  --vault-profile-color-hover: var(--vault-profile-color, #e0e0e0);
  --win-maximize: url("data:image/svg+xml,%3Csvg fill='none' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m4.5 3c-.82843 0-1.5.67157-1.5 1.5v7c0 .8284.67157 1.5 1.5 1.5h7c.8284 0 1.5-.6716 1.5-1.5v-7c0-.82843-.6716-1.5-1.5-1.5zm0 1h7c.2761 0 .5.22386.5.5v7c0 .2761-.2239.5-.5.5h-7c-.27614 0-.5-.2239-.5-.5v-7c0-.27614.22386-.5.5-.5z' fill='%23212121'/%3E%3C/svg%3E");
  --win-minimize: url("data:image/svg+xml,%3Csvg fill='none' height='16' viewBox='0 0 16 16' width='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23212121'%3E%3Cpath d='m5.08496 4c.20592-.5826.76154-1 1.41465-1h3.5c1.65689 0 2.99999 1.34315 2.99999 3v3.5c0 .6531-.4174 1.2087-1 1.4146v-4.9146c0-1.10457-.8954-2-1.99999-2z'/%3E%3Cpath d='m4.5 5h5c.8284 0 1.5.67157 1.5 1.5v5c0 .8284-.6716 1.5-1.5 1.5h-5c-.82843 0-1.5-.6716-1.5-1.5v-5c0-.82843.67157-1.5 1.5-1.5zm0 1c-.27614 0-.5.22386-.5.5v5c0 .2761.22386.5.5.5h5c.27614 0 .5-.2239.5-.5v-5c0-.27614-.22386-.5-.5-.5z'/%3E%3C/g%3E%3C/svg%3E");
  --quartz-icon-color: currentColor;
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #121212);
  background-color: var(--tab-container-background, rgb(18, 18, 18));
  color: rgb(224, 224, 224);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(11, 9, 10));
  color: rgb(224, 224, 224);
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(18, 18, 18));
  color: rgb(224, 224, 224);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(247, 14, 14, 0.05);
  border-right-width: 0px;
}

html body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #121212);
  background-color: var(--tab-container-background, rgb(18, 18, 18));
  border-left-color: rgba(247, 14, 14, 0.05);
  border-left-width: 0px;
  color: rgb(224, 224, 224);
}

html body html {
  --body-font-weight: 400;
  --code-mono-font: 'Fira Code', 'Operator Mono', 'JetBrains Mono', 'Source Code Pro', 'OperatorMonoSSmLig-Book', monospace;
  --default-font: 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif;
  --default-font-size: 16px;
  --tag-font-family: 'Fira Sans', 'Operator Mono', 'OperatorMonoSSmLig-Book', 'Montserrat', 'Glow Sans SC', 'PingFang TC', '微软雅黑', 'STXihei', '华文细黑', 'Microsoft YaHei', 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
}`,
    typography: `html body .markdown-rendered p > b, html b {
  background-color: rgb(186, 24, 27);
  color: var(--bold-color, rgb(224, 224, 224));
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html body .markdown-rendered p > em, html em {
  color: var(--italic-color, rgb(252, 141, 141));
  font-family: OperatorMonoSSmLig-Book, Rubik, var(--default-font);
  outline: rgb(252, 141, 141) none 0px;
  text-decoration-color: rgb(252, 141, 141);
}

html body .markdown-rendered p > i, html i {
  color: var(--italic-color, rgb(252, 141, 141));
  font-family: OperatorMonoSSmLig-Book, Rubik, var(--default-font);
  outline: rgb(252, 141, 141) none 0px;
  text-decoration-color: rgb(252, 141, 141);
}

html body .markdown-rendered p > strong > em, html strong > em {
  color: var(--italic-color, rgb(252, 141, 141));
  font-family: OperatorMonoSSmLig-Book, Rubik, var(--default-font);
  font-weight: 700;
  outline: rgb(252, 141, 141) none 0px;
  text-decoration-color: rgb(252, 141, 141);
}

html body .markdown-rendered p > strong, html strong {
  background-color: rgb(186, 24, 27);
  color: var(--bold-color, rgb(224, 224, 224));
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(244, 86, 86, 0.25));
  color: var(--text-normal, rgb(224, 224, 224));
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html body del {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html body footer {
  opacity: 0.4;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(190, 190, 190);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgba(247, 14, 14, 0.5));
  border-color: rgba(247, 14, 14, 0.5);
}

html body p {
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html body a.external-link, html footer a {
  color: var(--link-external-color, rgb(178, 34, 34));
  outline: rgb(178, 34, 34) none 0px;
  text-decoration-color: rgb(178, 34, 34);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(178, 34, 34));
  outline: rgb(178, 34, 34) none 0px;
  text-decoration-color: rgb(178, 34, 34);
}

html body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(178, 34, 34));
  outline: rgb(178, 34, 34) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(178, 34, 34));
}`,
    lists: `html body dd {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
  color: rgb(224, 224, 224);
}

html body dt {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
  color: rgb(224, 224, 224);
}

html body ol > li {
  color: rgb(224, 224, 224);
}

html body ul > li {
  color: rgb(224, 224, 224);
}

html body ul.overflow {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
}`,
    blockquotes: `html body .data-footnote-backref {
  color: var(--text-faint, rgb(190, 190, 190));
}

html body blockquote {
  color: var(--blockquote-color, rgb(189, 189, 189));
  padding-bottom: 16px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 16px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
}

html body table {
  color: rgb(224, 224, 224);
}

html body td {
  border-bottom-color: rgba(247, 14, 14, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(247, 14, 14, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(247, 14, 14, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(247, 14, 14, 0.15);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(224, 224, 224));
}

html body th {
  border-bottom-color: rgba(247, 14, 14, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(247, 14, 14, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(247, 14, 14, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(247, 14, 14, 0.15);
  border-top-width: 0px;
  color: var(--table-header-color, rgb(224, 224, 224));
}`,
    code: `html body code {
  background-color: var(--code-background, rgba(247, 14, 14, 0.05));
  border-bottom-color: rgba(247, 14, 14, 0.05);
  border-bottom-left-radius: 4.8px;
  border-bottom-right-radius: 4.8px;
  border-bottom-width: 0px;
  border-left-color: rgba(247, 14, 14, 0.05);
  border-left-width: 0px;
  border-right-color: rgba(247, 14, 14, 0.05);
  border-right-width: 0px;
  border-top-color: rgba(247, 14, 14, 0.05);
  border-top-left-radius: 4.8px;
  border-top-right-radius: 4.8px;
  border-top-width: 0px;
  color: var(--code-normal, rgba(255, 0, 0, 0.9));
  padding-bottom: 0px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 0px;
}

html body pre:has(> code) {
  background-color: var(--code-background, rgb(18, 18, 18));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
}

html body figcaption {
  color: rgb(224, 224, 224);
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  --code-background: var(--ec-frm-edBg, #121212);
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
}

html body img {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
}

html body video {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
}`,
    embeds: `html body .file-embed {
  background-color: var(--background-primary-alt, rgb(18, 18, 18));
}

html body .footnotes {
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
  color: rgb(224, 224, 224);
}

html body .transclude {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgba(247, 14, 14, 0.5);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
  color: rgb(224, 224, 224);
}

html body .transclude-inner {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
  color: rgb(224, 224, 224);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(190, 190, 190);
  border-bottom-width: 0px;
  border-left-color: rgb(190, 190, 190);
  border-left-width: 0px;
  border-right-color: rgb(190, 190, 190);
  border-right-width: 0px;
  border-top-color: rgb(190, 190, 190);
  border-top-width: 0px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: var(--checkbox-size, 20px);
}

html body li.task-list-item[data-task="!"] {
  --background-modifier-active-hover: hsla(0, 68%, 42%, 0.1);
  --background-modifier-border: rgba(247, 14, 14, 0.05);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #0b090a;
  --background-primary-alt: #121212;
  --background-secondary: #121212;
  --background-secondary-alt: #121212;
  --blockquote-border-color: rgba(247, 14, 14, 0.5);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #0b090a;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e0e0e0;
  --checkbox-border-color: #bebebe;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: rgba(247, 14, 14, 0.5);
  --checkbox-color-hover: rgba(247, 14, 14, 0.8);
  --checkbox-marker-color: #0b090a;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #121212;
  --code-border-color: rgba(247, 14, 14, 0.05);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #bebebe;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #e0e0e0;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #bebebe;
  --collapse-icon-color-collapsed: #b22222;
  --color-accent: hsl(0, 68%, 42%);
  --color-accent-1: hsl(-3, 69.36%, 48.3%);
  --color-accent-2: hsl(-5, 71.4%, 54.18%);
  --color-accent-hsl: 0, 68%, 42%;
  --divider-color: rgba(247, 14, 14, 0.05);
  --divider-color-hover: rgba(247, 14, 14, 0.5);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #e0e0e0;
  --font-interface: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #b22222;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #bebebe;
  --graph-text: #e0e0e0;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #bebebe;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(247, 14, 14, 0.05);
  --interactive-accent: rgba(247, 14, 14, 0.5);
  --interactive-accent-hover: rgba(247, 14, 14, 0.8);
  --interactive-accent-hsl: 0, 68%, 42%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #b22222;
  --link-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-external-color: #b22222;
  --link-external-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-unresolved-color: #b22222;
  --link-unresolved-decoration-color: hsla(0, 68%, 42%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #121212;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #0b090a;
  --pdf-page-background: #0b090a;
  --pdf-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --pdf-sidebar-background: #0b090a;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #0b090a;
  --setting-group-heading-color: #e0e0e0;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #121212;
  --setting-items-border-color: rgba(247, 14, 14, 0.05);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #121212;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #bebebe;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(247, 14, 14, 0.05);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #bebebe;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #bebebe;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #0b090a;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #0b090a;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(247, 14, 14, 0.05);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #121212;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 68%, 42%);
  --tab-text-color: #bebebe;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #e0e0e0;
  --tab-text-color-focused-highlighted: #b22222;
  --table-add-button-border-color: rgba(247, 14, 14, 0.05);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(247, 14, 14, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgba(247, 14, 14, 0.5);
  --table-drag-handle-color: #bebebe;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgba(247, 14, 14, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #e0e0e0;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 68%, 42%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgba(247, 14, 14, 0.5);
  --table-text-size: 16px;
  --tag-background: rgba(247, 14, 14, 0.15);
  --tag-background-hover: hsla(0, 68%, 42%, 0.2);
  --tag-border-color: hsla(0, 68%, 42%, 0.15);
  --tag-border-color-hover: hsla(0, 68%, 42%, 0.15);
  --tag-color: #b22222;
  --tag-color-hover: #b22222;
  --tag-size: 0.875em;
  --text-accent: #b22222;
  --text-accent-hover: hsl(-5, 71.4%, 54.18%);
  --text-error: #fb464c;
  --text-faint: #bebebe;
  --text-highlight-bg: rgba(244, 86, 86, 0.25);
  --text-muted: #b3b3b3;
  --text-normal: #e0e0e0;
  --text-selection: hsla(0, 68%, 42%, 0.33);
  --text-success: #44cf6e;
  --text-title-h1: #b22222;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(178, 34, 34);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(178, 34, 34);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(178, 34, 34);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(178, 34, 34);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 10px;
  color: var(--checkbox, rgba(247, 14, 14, 0.7));
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 15px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
  transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, -8);
}

html body li.task-list-item[data-task="#"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="$"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="%"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html li.task-list-item[data-task="body"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="'"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="*"] {
  --background-modifier-active-hover: hsla(0, 68%, 42%, 0.1);
  --background-modifier-border: rgba(247, 14, 14, 0.05);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #0b090a;
  --background-primary-alt: #121212;
  --background-secondary: #121212;
  --background-secondary-alt: #121212;
  --blockquote-border-color: rgba(247, 14, 14, 0.5);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #0b090a;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e0e0e0;
  --checkbox-border-color: #bebebe;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: rgba(247, 14, 14, 0.5);
  --checkbox-color-hover: rgba(247, 14, 14, 0.8);
  --checkbox-marker-color: #0b090a;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #121212;
  --code-border-color: rgba(247, 14, 14, 0.05);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #bebebe;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #e0e0e0;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #bebebe;
  --collapse-icon-color-collapsed: #b22222;
  --color-accent: hsl(0, 68%, 42%);
  --color-accent-1: hsl(-3, 69.36%, 48.3%);
  --color-accent-2: hsl(-5, 71.4%, 54.18%);
  --color-accent-hsl: 0, 68%, 42%;
  --divider-color: rgba(247, 14, 14, 0.05);
  --divider-color-hover: rgba(247, 14, 14, 0.5);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #e0e0e0;
  --font-interface: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #b22222;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #bebebe;
  --graph-text: #e0e0e0;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #bebebe;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(247, 14, 14, 0.05);
  --interactive-accent: rgba(247, 14, 14, 0.5);
  --interactive-accent-hover: rgba(247, 14, 14, 0.8);
  --interactive-accent-hsl: 0, 68%, 42%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #b22222;
  --link-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-external-color: #b22222;
  --link-external-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-unresolved-color: #b22222;
  --link-unresolved-decoration-color: hsla(0, 68%, 42%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #121212;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #0b090a;
  --pdf-page-background: #0b090a;
  --pdf-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --pdf-sidebar-background: #0b090a;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #0b090a;
  --setting-group-heading-color: #e0e0e0;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #121212;
  --setting-items-border-color: rgba(247, 14, 14, 0.05);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #121212;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #bebebe;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(247, 14, 14, 0.05);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #bebebe;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #bebebe;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #0b090a;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #0b090a;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(247, 14, 14, 0.05);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #121212;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 68%, 42%);
  --tab-text-color: #bebebe;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #e0e0e0;
  --tab-text-color-focused-highlighted: #b22222;
  --table-add-button-border-color: rgba(247, 14, 14, 0.05);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(247, 14, 14, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgba(247, 14, 14, 0.5);
  --table-drag-handle-color: #bebebe;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgba(247, 14, 14, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #e0e0e0;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 68%, 42%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgba(247, 14, 14, 0.5);
  --table-text-size: 16px;
  --tag-background: rgba(247, 14, 14, 0.15);
  --tag-background-hover: hsla(0, 68%, 42%, 0.2);
  --tag-border-color: hsla(0, 68%, 42%, 0.15);
  --tag-border-color-hover: hsla(0, 68%, 42%, 0.15);
  --tag-color: #b22222;
  --tag-color-hover: #b22222;
  --tag-size: 0.875em;
  --text-accent: #b22222;
  --text-accent-hover: hsl(-5, 71.4%, 54.18%);
  --text-error: #fb464c;
  --text-faint: #bebebe;
  --text-highlight-bg: rgba(244, 86, 86, 0.25);
  --text-muted: #b3b3b3;
  --text-normal: #e0e0e0;
  --text-selection: hsla(0, 68%, 42%, 0.33);
  --text-success: #44cf6e;
  --text-title-h1: #b22222;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(178, 34, 34);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(178, 34, 34);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(178, 34, 34);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(178, 34, 34);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 10px;
  color: var(--checkbox, rgba(247, 14, 14, 0.7));
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 15px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
  transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, -8);
}

html body li.task-list-item[data-task="+"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task=", html "] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="-"] {
  --background-modifier-active-hover: hsla(0, 68%, 42%, 0.1);
  --background-modifier-border: rgba(247, 14, 14, 0.05);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #0b090a;
  --background-primary-alt: #121212;
  --background-secondary: #121212;
  --background-secondary-alt: #121212;
  --blockquote-border-color: rgba(247, 14, 14, 0.5);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #0b090a;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e0e0e0;
  --checkbox-border-color: #bebebe;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: rgba(247, 14, 14, 0.5);
  --checkbox-color-hover: rgba(247, 14, 14, 0.8);
  --checkbox-marker-color: #0b090a;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #121212;
  --code-border-color: rgba(247, 14, 14, 0.05);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #bebebe;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #e0e0e0;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #bebebe;
  --collapse-icon-color-collapsed: #b22222;
  --color-accent: hsl(0, 68%, 42%);
  --color-accent-1: hsl(-3, 69.36%, 48.3%);
  --color-accent-2: hsl(-5, 71.4%, 54.18%);
  --color-accent-hsl: 0, 68%, 42%;
  --divider-color: rgba(247, 14, 14, 0.05);
  --divider-color-hover: rgba(247, 14, 14, 0.5);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #e0e0e0;
  --font-interface: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #b22222;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #bebebe;
  --graph-text: #e0e0e0;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #bebebe;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(247, 14, 14, 0.05);
  --interactive-accent: rgba(247, 14, 14, 0.5);
  --interactive-accent-hover: rgba(247, 14, 14, 0.8);
  --interactive-accent-hsl: 0, 68%, 42%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #b22222;
  --link-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-external-color: #b22222;
  --link-external-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-unresolved-color: #b22222;
  --link-unresolved-decoration-color: hsla(0, 68%, 42%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #121212;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #0b090a;
  --pdf-page-background: #0b090a;
  --pdf-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --pdf-sidebar-background: #0b090a;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #0b090a;
  --setting-group-heading-color: #e0e0e0;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #121212;
  --setting-items-border-color: rgba(247, 14, 14, 0.05);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #121212;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #bebebe;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(247, 14, 14, 0.05);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #bebebe;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #bebebe;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #0b090a;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #0b090a;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(247, 14, 14, 0.05);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #121212;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 68%, 42%);
  --tab-text-color: #bebebe;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #e0e0e0;
  --tab-text-color-focused-highlighted: #b22222;
  --table-add-button-border-color: rgba(247, 14, 14, 0.05);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(247, 14, 14, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgba(247, 14, 14, 0.5);
  --table-drag-handle-color: #bebebe;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgba(247, 14, 14, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #e0e0e0;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 68%, 42%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgba(247, 14, 14, 0.5);
  --table-text-size: 16px;
  --tag-background: rgba(247, 14, 14, 0.15);
  --tag-background-hover: hsla(0, 68%, 42%, 0.2);
  --tag-border-color: hsla(0, 68%, 42%, 0.15);
  --tag-border-color-hover: hsla(0, 68%, 42%, 0.15);
  --tag-color: #b22222;
  --tag-color-hover: #b22222;
  --tag-size: 0.875em;
  --text-accent: #b22222;
  --text-accent-hover: hsl(-5, 71.4%, 54.18%);
  --text-error: #fb464c;
  --text-faint: #bebebe;
  --text-highlight-bg: rgba(244, 86, 86, 0.25);
  --text-muted: #b3b3b3;
  --text-normal: #e0e0e0;
  --text-selection: hsla(0, 68%, 42%, 0.33);
  --text-success: #44cf6e;
  --text-title-h1: #b22222;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(178, 34, 34);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(178, 34, 34);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(178, 34, 34);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(178, 34, 34);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 10px;
  color: var(--checkbox, rgba(247, 14, 14, 0.7));
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 15px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
  transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, -8);
}

html body li.task-list-item[data-task="."] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="/"] {
  --background-modifier-active-hover: hsla(0, 68%, 42%, 0.1);
  --background-modifier-border: rgba(247, 14, 14, 0.05);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #0b090a;
  --background-primary-alt: #121212;
  --background-secondary: #121212;
  --background-secondary-alt: #121212;
  --blockquote-border-color: rgba(247, 14, 14, 0.5);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #0b090a;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e0e0e0;
  --checkbox-border-color: #bebebe;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: rgba(247, 14, 14, 0.5);
  --checkbox-color-hover: rgba(247, 14, 14, 0.8);
  --checkbox-marker-color: #0b090a;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #121212;
  --code-border-color: rgba(247, 14, 14, 0.05);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #bebebe;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #e0e0e0;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #bebebe;
  --collapse-icon-color-collapsed: #b22222;
  --color-accent: hsl(0, 68%, 42%);
  --color-accent-1: hsl(-3, 69.36%, 48.3%);
  --color-accent-2: hsl(-5, 71.4%, 54.18%);
  --color-accent-hsl: 0, 68%, 42%;
  --divider-color: rgba(247, 14, 14, 0.05);
  --divider-color-hover: rgba(247, 14, 14, 0.5);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #e0e0e0;
  --font-interface: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #b22222;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #bebebe;
  --graph-text: #e0e0e0;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #bebebe;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(247, 14, 14, 0.05);
  --interactive-accent: rgba(247, 14, 14, 0.5);
  --interactive-accent-hover: rgba(247, 14, 14, 0.8);
  --interactive-accent-hsl: 0, 68%, 42%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #b22222;
  --link-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-external-color: #b22222;
  --link-external-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-unresolved-color: #b22222;
  --link-unresolved-decoration-color: hsla(0, 68%, 42%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #121212;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #0b090a;
  --pdf-page-background: #0b090a;
  --pdf-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --pdf-sidebar-background: #0b090a;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #0b090a;
  --setting-group-heading-color: #e0e0e0;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #121212;
  --setting-items-border-color: rgba(247, 14, 14, 0.05);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #121212;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #bebebe;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(247, 14, 14, 0.05);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #bebebe;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #bebebe;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #0b090a;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #0b090a;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(247, 14, 14, 0.05);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #121212;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 68%, 42%);
  --tab-text-color: #bebebe;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #e0e0e0;
  --tab-text-color-focused-highlighted: #b22222;
  --table-add-button-border-color: rgba(247, 14, 14, 0.05);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(247, 14, 14, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgba(247, 14, 14, 0.5);
  --table-drag-handle-color: #bebebe;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgba(247, 14, 14, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #e0e0e0;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 68%, 42%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgba(247, 14, 14, 0.5);
  --table-text-size: 16px;
  --tag-background: rgba(247, 14, 14, 0.15);
  --tag-background-hover: hsla(0, 68%, 42%, 0.2);
  --tag-border-color: hsla(0, 68%, 42%, 0.15);
  --tag-border-color-hover: hsla(0, 68%, 42%, 0.15);
  --tag-color: #b22222;
  --tag-color-hover: #b22222;
  --tag-size: 0.875em;
  --text-accent: #b22222;
  --text-accent-hover: hsl(-5, 71.4%, 54.18%);
  --text-error: #fb464c;
  --text-faint: #bebebe;
  --text-highlight-bg: rgba(244, 86, 86, 0.25);
  --text-muted: #b3b3b3;
  --text-normal: #e0e0e0;
  --text-selection: hsla(0, 68%, 42%, 0.33);
  --text-success: #44cf6e;
  --text-title-h1: #b22222;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(178, 34, 34);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(178, 34, 34);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(178, 34, 34);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(178, 34, 34);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 10px;
  color: var(--checkbox, rgba(247, 14, 14, 0.7));
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 15px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
  transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, -8);
}

html body li.task-list-item[data-task="0"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="1"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="2"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="3"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="4"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="5"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="6"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="7"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="8"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="9"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task=":"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task=";"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="<"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="="] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task=">"] {
  --background-modifier-active-hover: hsla(0, 68%, 42%, 0.1);
  --background-modifier-border: rgba(247, 14, 14, 0.05);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #0b090a;
  --background-primary-alt: #121212;
  --background-secondary: #121212;
  --background-secondary-alt: #121212;
  --blockquote-border-color: rgba(247, 14, 14, 0.5);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #0b090a;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e0e0e0;
  --checkbox-border-color: #bebebe;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: rgba(247, 14, 14, 0.5);
  --checkbox-color-hover: rgba(247, 14, 14, 0.8);
  --checkbox-marker-color: #0b090a;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #121212;
  --code-border-color: rgba(247, 14, 14, 0.05);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #bebebe;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #e0e0e0;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #bebebe;
  --collapse-icon-color-collapsed: #b22222;
  --color-accent: hsl(0, 68%, 42%);
  --color-accent-1: hsl(-3, 69.36%, 48.3%);
  --color-accent-2: hsl(-5, 71.4%, 54.18%);
  --color-accent-hsl: 0, 68%, 42%;
  --divider-color: rgba(247, 14, 14, 0.05);
  --divider-color-hover: rgba(247, 14, 14, 0.5);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #e0e0e0;
  --font-interface: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #b22222;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #bebebe;
  --graph-text: #e0e0e0;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #bebebe;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(247, 14, 14, 0.05);
  --interactive-accent: rgba(247, 14, 14, 0.5);
  --interactive-accent-hover: rgba(247, 14, 14, 0.8);
  --interactive-accent-hsl: 0, 68%, 42%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #b22222;
  --link-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-external-color: #b22222;
  --link-external-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-unresolved-color: #b22222;
  --link-unresolved-decoration-color: hsla(0, 68%, 42%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #121212;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #0b090a;
  --pdf-page-background: #0b090a;
  --pdf-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --pdf-sidebar-background: #0b090a;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #0b090a;
  --setting-group-heading-color: #e0e0e0;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #121212;
  --setting-items-border-color: rgba(247, 14, 14, 0.05);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #121212;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #bebebe;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(247, 14, 14, 0.05);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #bebebe;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #bebebe;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #0b090a;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #0b090a;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(247, 14, 14, 0.05);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #121212;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 68%, 42%);
  --tab-text-color: #bebebe;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #e0e0e0;
  --tab-text-color-focused-highlighted: #b22222;
  --table-add-button-border-color: rgba(247, 14, 14, 0.05);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(247, 14, 14, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgba(247, 14, 14, 0.5);
  --table-drag-handle-color: #bebebe;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgba(247, 14, 14, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #e0e0e0;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 68%, 42%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgba(247, 14, 14, 0.5);
  --table-text-size: 16px;
  --tag-background: rgba(247, 14, 14, 0.15);
  --tag-background-hover: hsla(0, 68%, 42%, 0.2);
  --tag-border-color: hsla(0, 68%, 42%, 0.15);
  --tag-border-color-hover: hsla(0, 68%, 42%, 0.15);
  --tag-color: #b22222;
  --tag-color-hover: #b22222;
  --tag-size: 0.875em;
  --text-accent: #b22222;
  --text-accent-hover: hsl(-5, 71.4%, 54.18%);
  --text-error: #fb464c;
  --text-faint: #bebebe;
  --text-highlight-bg: rgba(244, 86, 86, 0.25);
  --text-muted: #b3b3b3;
  --text-normal: #e0e0e0;
  --text-selection: hsla(0, 68%, 42%, 0.33);
  --text-success: #44cf6e;
  --text-title-h1: #b22222;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(178, 34, 34);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(178, 34, 34);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(178, 34, 34);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(178, 34, 34);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 10px;
  color: var(--checkbox, rgba(247, 14, 14, 0.7));
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 15px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
  transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, -8);
}

html body li.task-list-item[data-task="?"] {
  --background-modifier-active-hover: hsla(0, 68%, 42%, 0.1);
  --background-modifier-border: rgba(247, 14, 14, 0.05);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #0b090a;
  --background-primary-alt: #121212;
  --background-secondary: #121212;
  --background-secondary-alt: #121212;
  --blockquote-border-color: rgba(247, 14, 14, 0.5);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #0b090a;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e0e0e0;
  --checkbox-border-color: #bebebe;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: rgba(247, 14, 14, 0.5);
  --checkbox-color-hover: rgba(247, 14, 14, 0.8);
  --checkbox-marker-color: #0b090a;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #121212;
  --code-border-color: rgba(247, 14, 14, 0.05);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #bebebe;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #e0e0e0;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #bebebe;
  --collapse-icon-color-collapsed: #b22222;
  --color-accent: hsl(0, 68%, 42%);
  --color-accent-1: hsl(-3, 69.36%, 48.3%);
  --color-accent-2: hsl(-5, 71.4%, 54.18%);
  --color-accent-hsl: 0, 68%, 42%;
  --divider-color: rgba(247, 14, 14, 0.05);
  --divider-color-hover: rgba(247, 14, 14, 0.5);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #e0e0e0;
  --font-interface: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #b22222;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #bebebe;
  --graph-text: #e0e0e0;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #bebebe;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(247, 14, 14, 0.05);
  --interactive-accent: rgba(247, 14, 14, 0.5);
  --interactive-accent-hover: rgba(247, 14, 14, 0.8);
  --interactive-accent-hsl: 0, 68%, 42%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #b22222;
  --link-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-external-color: #b22222;
  --link-external-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-unresolved-color: #b22222;
  --link-unresolved-decoration-color: hsla(0, 68%, 42%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #121212;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #0b090a;
  --pdf-page-background: #0b090a;
  --pdf-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --pdf-sidebar-background: #0b090a;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #0b090a;
  --setting-group-heading-color: #e0e0e0;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #121212;
  --setting-items-border-color: rgba(247, 14, 14, 0.05);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #121212;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #bebebe;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(247, 14, 14, 0.05);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #bebebe;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #bebebe;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #0b090a;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #0b090a;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(247, 14, 14, 0.05);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #121212;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 68%, 42%);
  --tab-text-color: #bebebe;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #e0e0e0;
  --tab-text-color-focused-highlighted: #b22222;
  --table-add-button-border-color: rgba(247, 14, 14, 0.05);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(247, 14, 14, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgba(247, 14, 14, 0.5);
  --table-drag-handle-color: #bebebe;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgba(247, 14, 14, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #e0e0e0;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 68%, 42%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgba(247, 14, 14, 0.5);
  --table-text-size: 16px;
  --tag-background: rgba(247, 14, 14, 0.15);
  --tag-background-hover: hsla(0, 68%, 42%, 0.2);
  --tag-border-color: hsla(0, 68%, 42%, 0.15);
  --tag-border-color-hover: hsla(0, 68%, 42%, 0.15);
  --tag-color: #b22222;
  --tag-color-hover: #b22222;
  --tag-size: 0.875em;
  --text-accent: #b22222;
  --text-accent-hover: hsl(-5, 71.4%, 54.18%);
  --text-error: #fb464c;
  --text-faint: #bebebe;
  --text-highlight-bg: rgba(244, 86, 86, 0.25);
  --text-muted: #b3b3b3;
  --text-normal: #e0e0e0;
  --text-selection: hsla(0, 68%, 42%, 0.33);
  --text-success: #44cf6e;
  --text-title-h1: #b22222;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(178, 34, 34);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(178, 34, 34);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(178, 34, 34);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(178, 34, 34);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 10px;
  color: var(--checkbox, rgba(247, 14, 14, 0.7));
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 15px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
  transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, -8);
}

html body li.task-list-item[data-task="@"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="A"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="B"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="C"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="D"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="E"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="F"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="G"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="H"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="I"] {
  --background-modifier-active-hover: hsla(0, 68%, 42%, 0.1);
  --background-modifier-border: rgba(247, 14, 14, 0.05);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #0b090a;
  --background-primary-alt: #121212;
  --background-secondary: #121212;
  --background-secondary-alt: #121212;
  --blockquote-border-color: rgba(247, 14, 14, 0.5);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #0b090a;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e0e0e0;
  --checkbox-border-color: #bebebe;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: rgba(247, 14, 14, 0.5);
  --checkbox-color-hover: rgba(247, 14, 14, 0.8);
  --checkbox-marker-color: #0b090a;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #121212;
  --code-border-color: rgba(247, 14, 14, 0.05);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #bebebe;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #e0e0e0;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #bebebe;
  --collapse-icon-color-collapsed: #b22222;
  --color-accent: hsl(0, 68%, 42%);
  --color-accent-1: hsl(-3, 69.36%, 48.3%);
  --color-accent-2: hsl(-5, 71.4%, 54.18%);
  --color-accent-hsl: 0, 68%, 42%;
  --divider-color: rgba(247, 14, 14, 0.05);
  --divider-color-hover: rgba(247, 14, 14, 0.5);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #e0e0e0;
  --font-interface: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #b22222;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #bebebe;
  --graph-text: #e0e0e0;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #bebebe;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(247, 14, 14, 0.05);
  --interactive-accent: rgba(247, 14, 14, 0.5);
  --interactive-accent-hover: rgba(247, 14, 14, 0.8);
  --interactive-accent-hsl: 0, 68%, 42%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #b22222;
  --link-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-external-color: #b22222;
  --link-external-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-unresolved-color: #b22222;
  --link-unresolved-decoration-color: hsla(0, 68%, 42%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #121212;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #0b090a;
  --pdf-page-background: #0b090a;
  --pdf-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --pdf-sidebar-background: #0b090a;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #0b090a;
  --setting-group-heading-color: #e0e0e0;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #121212;
  --setting-items-border-color: rgba(247, 14, 14, 0.05);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #121212;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #bebebe;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(247, 14, 14, 0.05);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #bebebe;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #bebebe;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #0b090a;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #0b090a;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(247, 14, 14, 0.05);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #121212;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 68%, 42%);
  --tab-text-color: #bebebe;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #e0e0e0;
  --tab-text-color-focused-highlighted: #b22222;
  --table-add-button-border-color: rgba(247, 14, 14, 0.05);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(247, 14, 14, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgba(247, 14, 14, 0.5);
  --table-drag-handle-color: #bebebe;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgba(247, 14, 14, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #e0e0e0;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 68%, 42%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgba(247, 14, 14, 0.5);
  --table-text-size: 16px;
  --tag-background: rgba(247, 14, 14, 0.15);
  --tag-background-hover: hsla(0, 68%, 42%, 0.2);
  --tag-border-color: hsla(0, 68%, 42%, 0.15);
  --tag-border-color-hover: hsla(0, 68%, 42%, 0.15);
  --tag-color: #b22222;
  --tag-color-hover: #b22222;
  --tag-size: 0.875em;
  --text-accent: #b22222;
  --text-accent-hover: hsl(-5, 71.4%, 54.18%);
  --text-error: #fb464c;
  --text-faint: #bebebe;
  --text-highlight-bg: rgba(244, 86, 86, 0.25);
  --text-muted: #b3b3b3;
  --text-normal: #e0e0e0;
  --text-selection: hsla(0, 68%, 42%, 0.33);
  --text-success: #44cf6e;
  --text-title-h1: #b22222;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(178, 34, 34);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(178, 34, 34);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(178, 34, 34);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(178, 34, 34);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 10px;
  color: var(--checkbox, rgba(247, 14, 14, 0.7));
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 15px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
  transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, -8);
}

html body li.task-list-item[data-task="J"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="K"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="L"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="M"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="N"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="O"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="P"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="Q"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="R"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="S"] {
  --background-modifier-active-hover: hsla(0, 68%, 42%, 0.1);
  --background-modifier-border: rgba(247, 14, 14, 0.05);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #0b090a;
  --background-primary-alt: #121212;
  --background-secondary: #121212;
  --background-secondary-alt: #121212;
  --blockquote-border-color: rgba(247, 14, 14, 0.5);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #0b090a;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e0e0e0;
  --checkbox-border-color: #bebebe;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: rgba(247, 14, 14, 0.5);
  --checkbox-color-hover: rgba(247, 14, 14, 0.8);
  --checkbox-marker-color: #0b090a;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #121212;
  --code-border-color: rgba(247, 14, 14, 0.05);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #bebebe;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #e0e0e0;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #bebebe;
  --collapse-icon-color-collapsed: #b22222;
  --color-accent: hsl(0, 68%, 42%);
  --color-accent-1: hsl(-3, 69.36%, 48.3%);
  --color-accent-2: hsl(-5, 71.4%, 54.18%);
  --color-accent-hsl: 0, 68%, 42%;
  --divider-color: rgba(247, 14, 14, 0.05);
  --divider-color-hover: rgba(247, 14, 14, 0.5);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #e0e0e0;
  --font-interface: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #b22222;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #bebebe;
  --graph-text: #e0e0e0;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #bebebe;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(247, 14, 14, 0.05);
  --interactive-accent: rgba(247, 14, 14, 0.5);
  --interactive-accent-hover: rgba(247, 14, 14, 0.8);
  --interactive-accent-hsl: 0, 68%, 42%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #b22222;
  --link-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-external-color: #b22222;
  --link-external-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-unresolved-color: #b22222;
  --link-unresolved-decoration-color: hsla(0, 68%, 42%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #121212;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #0b090a;
  --pdf-page-background: #0b090a;
  --pdf-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --pdf-sidebar-background: #0b090a;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #0b090a;
  --setting-group-heading-color: #e0e0e0;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #121212;
  --setting-items-border-color: rgba(247, 14, 14, 0.05);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #121212;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #bebebe;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(247, 14, 14, 0.05);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #bebebe;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #bebebe;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #0b090a;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #0b090a;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(247, 14, 14, 0.05);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #121212;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 68%, 42%);
  --tab-text-color: #bebebe;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #e0e0e0;
  --tab-text-color-focused-highlighted: #b22222;
  --table-add-button-border-color: rgba(247, 14, 14, 0.05);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(247, 14, 14, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgba(247, 14, 14, 0.5);
  --table-drag-handle-color: #bebebe;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgba(247, 14, 14, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #e0e0e0;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 68%, 42%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgba(247, 14, 14, 0.5);
  --table-text-size: 16px;
  --tag-background: rgba(247, 14, 14, 0.15);
  --tag-background-hover: hsla(0, 68%, 42%, 0.2);
  --tag-border-color: hsla(0, 68%, 42%, 0.15);
  --tag-border-color-hover: hsla(0, 68%, 42%, 0.15);
  --tag-color: #b22222;
  --tag-color-hover: #b22222;
  --tag-size: 0.875em;
  --text-accent: #b22222;
  --text-accent-hover: hsl(-5, 71.4%, 54.18%);
  --text-error: #fb464c;
  --text-faint: #bebebe;
  --text-highlight-bg: rgba(244, 86, 86, 0.25);
  --text-muted: #b3b3b3;
  --text-normal: #e0e0e0;
  --text-selection: hsla(0, 68%, 42%, 0.33);
  --text-success: #44cf6e;
  --text-title-h1: #b22222;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(178, 34, 34);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(178, 34, 34);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(178, 34, 34);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(178, 34, 34);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 10px;
  color: var(--checkbox, rgba(247, 14, 14, 0.7));
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 15px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
  transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, -8);
}

html body li.task-list-item[data-task="T"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="U"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="V"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="W"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="X"] {
  color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task="Y"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="Z"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="_"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="\`"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="a"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="b"] {
  --background-modifier-active-hover: hsla(0, 68%, 42%, 0.1);
  --background-modifier-border: rgba(247, 14, 14, 0.05);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #0b090a;
  --background-primary-alt: #121212;
  --background-secondary: #121212;
  --background-secondary-alt: #121212;
  --blockquote-border-color: rgba(247, 14, 14, 0.5);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #0b090a;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e0e0e0;
  --checkbox-border-color: #bebebe;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: rgba(247, 14, 14, 0.5);
  --checkbox-color-hover: rgba(247, 14, 14, 0.8);
  --checkbox-marker-color: #0b090a;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #121212;
  --code-border-color: rgba(247, 14, 14, 0.05);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #bebebe;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #e0e0e0;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #bebebe;
  --collapse-icon-color-collapsed: #b22222;
  --color-accent: hsl(0, 68%, 42%);
  --color-accent-1: hsl(-3, 69.36%, 48.3%);
  --color-accent-2: hsl(-5, 71.4%, 54.18%);
  --color-accent-hsl: 0, 68%, 42%;
  --divider-color: rgba(247, 14, 14, 0.05);
  --divider-color-hover: rgba(247, 14, 14, 0.5);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #e0e0e0;
  --font-interface: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #b22222;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #bebebe;
  --graph-text: #e0e0e0;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #bebebe;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(247, 14, 14, 0.05);
  --interactive-accent: rgba(247, 14, 14, 0.5);
  --interactive-accent-hover: rgba(247, 14, 14, 0.8);
  --interactive-accent-hsl: 0, 68%, 42%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #b22222;
  --link-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-external-color: #b22222;
  --link-external-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-unresolved-color: #b22222;
  --link-unresolved-decoration-color: hsla(0, 68%, 42%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #121212;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #0b090a;
  --pdf-page-background: #0b090a;
  --pdf-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --pdf-sidebar-background: #0b090a;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #0b090a;
  --setting-group-heading-color: #e0e0e0;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #121212;
  --setting-items-border-color: rgba(247, 14, 14, 0.05);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #121212;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #bebebe;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(247, 14, 14, 0.05);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #bebebe;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #bebebe;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #0b090a;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #0b090a;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(247, 14, 14, 0.05);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #121212;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 68%, 42%);
  --tab-text-color: #bebebe;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #e0e0e0;
  --tab-text-color-focused-highlighted: #b22222;
  --table-add-button-border-color: rgba(247, 14, 14, 0.05);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(247, 14, 14, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgba(247, 14, 14, 0.5);
  --table-drag-handle-color: #bebebe;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgba(247, 14, 14, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #e0e0e0;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 68%, 42%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgba(247, 14, 14, 0.5);
  --table-text-size: 16px;
  --tag-background: rgba(247, 14, 14, 0.15);
  --tag-background-hover: hsla(0, 68%, 42%, 0.2);
  --tag-border-color: hsla(0, 68%, 42%, 0.15);
  --tag-border-color-hover: hsla(0, 68%, 42%, 0.15);
  --tag-color: #b22222;
  --tag-color-hover: #b22222;
  --tag-size: 0.875em;
  --text-accent: #b22222;
  --text-accent-hover: hsl(-5, 71.4%, 54.18%);
  --text-error: #fb464c;
  --text-faint: #bebebe;
  --text-highlight-bg: rgba(244, 86, 86, 0.25);
  --text-muted: #b3b3b3;
  --text-normal: #e0e0e0;
  --text-selection: hsla(0, 68%, 42%, 0.33);
  --text-success: #44cf6e;
  --text-title-h1: #b22222;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(178, 34, 34);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(178, 34, 34);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(178, 34, 34);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(178, 34, 34);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 10px;
  color: var(--checkbox, rgba(247, 14, 14, 0.7));
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 15px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
  transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, -8);
}

html body li.task-list-item[data-task="c"] {
  --background-modifier-active-hover: hsla(0, 68%, 42%, 0.1);
  --background-modifier-border: rgba(247, 14, 14, 0.05);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #0b090a;
  --background-primary-alt: #121212;
  --background-secondary: #121212;
  --background-secondary-alt: #121212;
  --blockquote-border-color: rgba(247, 14, 14, 0.5);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #0b090a;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e0e0e0;
  --checkbox-border-color: #bebebe;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: rgba(247, 14, 14, 0.5);
  --checkbox-color-hover: rgba(247, 14, 14, 0.8);
  --checkbox-marker-color: #0b090a;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #121212;
  --code-border-color: rgba(247, 14, 14, 0.05);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #bebebe;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #e0e0e0;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #bebebe;
  --collapse-icon-color-collapsed: #b22222;
  --color-accent: hsl(0, 68%, 42%);
  --color-accent-1: hsl(-3, 69.36%, 48.3%);
  --color-accent-2: hsl(-5, 71.4%, 54.18%);
  --color-accent-hsl: 0, 68%, 42%;
  --divider-color: rgba(247, 14, 14, 0.05);
  --divider-color-hover: rgba(247, 14, 14, 0.5);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #e0e0e0;
  --font-interface: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #b22222;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #bebebe;
  --graph-text: #e0e0e0;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #bebebe;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(247, 14, 14, 0.05);
  --interactive-accent: rgba(247, 14, 14, 0.5);
  --interactive-accent-hover: rgba(247, 14, 14, 0.8);
  --interactive-accent-hsl: 0, 68%, 42%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #b22222;
  --link-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-external-color: #b22222;
  --link-external-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-unresolved-color: #b22222;
  --link-unresolved-decoration-color: hsla(0, 68%, 42%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #121212;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #0b090a;
  --pdf-page-background: #0b090a;
  --pdf-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --pdf-sidebar-background: #0b090a;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #0b090a;
  --setting-group-heading-color: #e0e0e0;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #121212;
  --setting-items-border-color: rgba(247, 14, 14, 0.05);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #121212;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #bebebe;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(247, 14, 14, 0.05);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #bebebe;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #bebebe;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #0b090a;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #0b090a;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(247, 14, 14, 0.05);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #121212;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 68%, 42%);
  --tab-text-color: #bebebe;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #e0e0e0;
  --tab-text-color-focused-highlighted: #b22222;
  --table-add-button-border-color: rgba(247, 14, 14, 0.05);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(247, 14, 14, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgba(247, 14, 14, 0.5);
  --table-drag-handle-color: #bebebe;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgba(247, 14, 14, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #e0e0e0;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 68%, 42%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgba(247, 14, 14, 0.5);
  --table-text-size: 16px;
  --tag-background: rgba(247, 14, 14, 0.15);
  --tag-background-hover: hsla(0, 68%, 42%, 0.2);
  --tag-border-color: hsla(0, 68%, 42%, 0.15);
  --tag-border-color-hover: hsla(0, 68%, 42%, 0.15);
  --tag-color: #b22222;
  --tag-color-hover: #b22222;
  --tag-size: 0.875em;
  --text-accent: #b22222;
  --text-accent-hover: hsl(-5, 71.4%, 54.18%);
  --text-error: #fb464c;
  --text-faint: #bebebe;
  --text-highlight-bg: rgba(244, 86, 86, 0.25);
  --text-muted: #b3b3b3;
  --text-normal: #e0e0e0;
  --text-selection: hsla(0, 68%, 42%, 0.33);
  --text-success: #44cf6e;
  --text-title-h1: #b22222;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(178, 34, 34);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(178, 34, 34);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(178, 34, 34);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(178, 34, 34);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 10px;
  color: var(--checkbox, rgba(247, 14, 14, 0.7));
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 15px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
  transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, -8);
}

html body li.task-list-item[data-task="d"] {
  --background-modifier-active-hover: hsla(0, 68%, 42%, 0.1);
  --background-modifier-border: rgba(247, 14, 14, 0.05);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #0b090a;
  --background-primary-alt: #121212;
  --background-secondary: #121212;
  --background-secondary-alt: #121212;
  --blockquote-border-color: rgba(247, 14, 14, 0.5);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #0b090a;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e0e0e0;
  --checkbox-border-color: #bebebe;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: rgba(247, 14, 14, 0.5);
  --checkbox-color-hover: rgba(247, 14, 14, 0.8);
  --checkbox-marker-color: #0b090a;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #121212;
  --code-border-color: rgba(247, 14, 14, 0.05);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #bebebe;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #e0e0e0;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #bebebe;
  --collapse-icon-color-collapsed: #b22222;
  --color-accent: hsl(0, 68%, 42%);
  --color-accent-1: hsl(-3, 69.36%, 48.3%);
  --color-accent-2: hsl(-5, 71.4%, 54.18%);
  --color-accent-hsl: 0, 68%, 42%;
  --divider-color: rgba(247, 14, 14, 0.05);
  --divider-color-hover: rgba(247, 14, 14, 0.5);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #e0e0e0;
  --font-interface: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #b22222;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #bebebe;
  --graph-text: #e0e0e0;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #bebebe;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(247, 14, 14, 0.05);
  --interactive-accent: rgba(247, 14, 14, 0.5);
  --interactive-accent-hover: rgba(247, 14, 14, 0.8);
  --interactive-accent-hsl: 0, 68%, 42%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #b22222;
  --link-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-external-color: #b22222;
  --link-external-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-unresolved-color: #b22222;
  --link-unresolved-decoration-color: hsla(0, 68%, 42%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #121212;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #0b090a;
  --pdf-page-background: #0b090a;
  --pdf-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --pdf-sidebar-background: #0b090a;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #0b090a;
  --setting-group-heading-color: #e0e0e0;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #121212;
  --setting-items-border-color: rgba(247, 14, 14, 0.05);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #121212;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #bebebe;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(247, 14, 14, 0.05);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #bebebe;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #bebebe;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #0b090a;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #0b090a;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(247, 14, 14, 0.05);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #121212;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 68%, 42%);
  --tab-text-color: #bebebe;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #e0e0e0;
  --tab-text-color-focused-highlighted: #b22222;
  --table-add-button-border-color: rgba(247, 14, 14, 0.05);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(247, 14, 14, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgba(247, 14, 14, 0.5);
  --table-drag-handle-color: #bebebe;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgba(247, 14, 14, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #e0e0e0;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 68%, 42%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgba(247, 14, 14, 0.5);
  --table-text-size: 16px;
  --tag-background: rgba(247, 14, 14, 0.15);
  --tag-background-hover: hsla(0, 68%, 42%, 0.2);
  --tag-border-color: hsla(0, 68%, 42%, 0.15);
  --tag-border-color-hover: hsla(0, 68%, 42%, 0.15);
  --tag-color: #b22222;
  --tag-color-hover: #b22222;
  --tag-size: 0.875em;
  --text-accent: #b22222;
  --text-accent-hover: hsl(-5, 71.4%, 54.18%);
  --text-error: #fb464c;
  --text-faint: #bebebe;
  --text-highlight-bg: rgba(244, 86, 86, 0.25);
  --text-muted: #b3b3b3;
  --text-normal: #e0e0e0;
  --text-selection: hsla(0, 68%, 42%, 0.33);
  --text-success: #44cf6e;
  --text-title-h1: #b22222;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(178, 34, 34);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(178, 34, 34);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(178, 34, 34);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(178, 34, 34);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 10px;
  color: var(--checkbox, rgba(247, 14, 14, 0.7));
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 15px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
  transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, -8);
}

html body li.task-list-item[data-task="e"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="f"] {
  --background-modifier-active-hover: hsla(0, 68%, 42%, 0.1);
  --background-modifier-border: rgba(247, 14, 14, 0.05);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #0b090a;
  --background-primary-alt: #121212;
  --background-secondary: #121212;
  --background-secondary-alt: #121212;
  --blockquote-border-color: rgba(247, 14, 14, 0.5);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #0b090a;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e0e0e0;
  --checkbox-border-color: #bebebe;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: rgba(247, 14, 14, 0.5);
  --checkbox-color-hover: rgba(247, 14, 14, 0.8);
  --checkbox-marker-color: #0b090a;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #121212;
  --code-border-color: rgba(247, 14, 14, 0.05);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #bebebe;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #e0e0e0;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #bebebe;
  --collapse-icon-color-collapsed: #b22222;
  --color-accent: hsl(0, 68%, 42%);
  --color-accent-1: hsl(-3, 69.36%, 48.3%);
  --color-accent-2: hsl(-5, 71.4%, 54.18%);
  --color-accent-hsl: 0, 68%, 42%;
  --divider-color: rgba(247, 14, 14, 0.05);
  --divider-color-hover: rgba(247, 14, 14, 0.5);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #e0e0e0;
  --font-interface: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #b22222;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #bebebe;
  --graph-text: #e0e0e0;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #bebebe;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(247, 14, 14, 0.05);
  --interactive-accent: rgba(247, 14, 14, 0.5);
  --interactive-accent-hover: rgba(247, 14, 14, 0.8);
  --interactive-accent-hsl: 0, 68%, 42%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #b22222;
  --link-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-external-color: #b22222;
  --link-external-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-unresolved-color: #b22222;
  --link-unresolved-decoration-color: hsla(0, 68%, 42%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #121212;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #0b090a;
  --pdf-page-background: #0b090a;
  --pdf-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --pdf-sidebar-background: #0b090a;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #0b090a;
  --setting-group-heading-color: #e0e0e0;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #121212;
  --setting-items-border-color: rgba(247, 14, 14, 0.05);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #121212;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #bebebe;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(247, 14, 14, 0.05);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #bebebe;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #bebebe;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #0b090a;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #0b090a;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(247, 14, 14, 0.05);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #121212;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 68%, 42%);
  --tab-text-color: #bebebe;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #e0e0e0;
  --tab-text-color-focused-highlighted: #b22222;
  --table-add-button-border-color: rgba(247, 14, 14, 0.05);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(247, 14, 14, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgba(247, 14, 14, 0.5);
  --table-drag-handle-color: #bebebe;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgba(247, 14, 14, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #e0e0e0;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 68%, 42%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgba(247, 14, 14, 0.5);
  --table-text-size: 16px;
  --tag-background: rgba(247, 14, 14, 0.15);
  --tag-background-hover: hsla(0, 68%, 42%, 0.2);
  --tag-border-color: hsla(0, 68%, 42%, 0.15);
  --tag-border-color-hover: hsla(0, 68%, 42%, 0.15);
  --tag-color: #b22222;
  --tag-color-hover: #b22222;
  --tag-size: 0.875em;
  --text-accent: #b22222;
  --text-accent-hover: hsl(-5, 71.4%, 54.18%);
  --text-error: #fb464c;
  --text-faint: #bebebe;
  --text-highlight-bg: rgba(244, 86, 86, 0.25);
  --text-muted: #b3b3b3;
  --text-normal: #e0e0e0;
  --text-selection: hsla(0, 68%, 42%, 0.33);
  --text-success: #44cf6e;
  --text-title-h1: #b22222;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(178, 34, 34);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(178, 34, 34);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(178, 34, 34);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(178, 34, 34);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 10px;
  color: var(--checkbox, rgba(247, 14, 14, 0.7));
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 15px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
  transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, -8);
}

html body li.task-list-item[data-task="g"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="h"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="i"] {
  --background-modifier-active-hover: hsla(0, 68%, 42%, 0.1);
  --background-modifier-border: rgba(247, 14, 14, 0.05);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #0b090a;
  --background-primary-alt: #121212;
  --background-secondary: #121212;
  --background-secondary-alt: #121212;
  --blockquote-border-color: rgba(247, 14, 14, 0.5);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #0b090a;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e0e0e0;
  --checkbox-border-color: #bebebe;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: rgba(247, 14, 14, 0.5);
  --checkbox-color-hover: rgba(247, 14, 14, 0.8);
  --checkbox-marker-color: #0b090a;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #121212;
  --code-border-color: rgba(247, 14, 14, 0.05);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #bebebe;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #e0e0e0;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #bebebe;
  --collapse-icon-color-collapsed: #b22222;
  --color-accent: hsl(0, 68%, 42%);
  --color-accent-1: hsl(-3, 69.36%, 48.3%);
  --color-accent-2: hsl(-5, 71.4%, 54.18%);
  --color-accent-hsl: 0, 68%, 42%;
  --divider-color: rgba(247, 14, 14, 0.05);
  --divider-color-hover: rgba(247, 14, 14, 0.5);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #e0e0e0;
  --font-interface: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #b22222;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #bebebe;
  --graph-text: #e0e0e0;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #bebebe;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(247, 14, 14, 0.05);
  --interactive-accent: rgba(247, 14, 14, 0.5);
  --interactive-accent-hover: rgba(247, 14, 14, 0.8);
  --interactive-accent-hsl: 0, 68%, 42%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #b22222;
  --link-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-external-color: #b22222;
  --link-external-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-unresolved-color: #b22222;
  --link-unresolved-decoration-color: hsla(0, 68%, 42%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #121212;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #0b090a;
  --pdf-page-background: #0b090a;
  --pdf-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --pdf-sidebar-background: #0b090a;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #0b090a;
  --setting-group-heading-color: #e0e0e0;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #121212;
  --setting-items-border-color: rgba(247, 14, 14, 0.05);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #121212;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #bebebe;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(247, 14, 14, 0.05);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #bebebe;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #bebebe;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #0b090a;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #0b090a;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(247, 14, 14, 0.05);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #121212;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 68%, 42%);
  --tab-text-color: #bebebe;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #e0e0e0;
  --tab-text-color-focused-highlighted: #b22222;
  --table-add-button-border-color: rgba(247, 14, 14, 0.05);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(247, 14, 14, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgba(247, 14, 14, 0.5);
  --table-drag-handle-color: #bebebe;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgba(247, 14, 14, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #e0e0e0;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 68%, 42%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgba(247, 14, 14, 0.5);
  --table-text-size: 16px;
  --tag-background: rgba(247, 14, 14, 0.15);
  --tag-background-hover: hsla(0, 68%, 42%, 0.2);
  --tag-border-color: hsla(0, 68%, 42%, 0.15);
  --tag-border-color-hover: hsla(0, 68%, 42%, 0.15);
  --tag-color: #b22222;
  --tag-color-hover: #b22222;
  --tag-size: 0.875em;
  --text-accent: #b22222;
  --text-accent-hover: hsl(-5, 71.4%, 54.18%);
  --text-error: #fb464c;
  --text-faint: #bebebe;
  --text-highlight-bg: rgba(244, 86, 86, 0.25);
  --text-muted: #b3b3b3;
  --text-normal: #e0e0e0;
  --text-selection: hsla(0, 68%, 42%, 0.33);
  --text-success: #44cf6e;
  --text-title-h1: #b22222;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(178, 34, 34);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(178, 34, 34);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(178, 34, 34);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(178, 34, 34);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 10px;
  color: var(--checkbox, rgba(247, 14, 14, 0.7));
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 15px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
  transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, -8);
}

html body li.task-list-item[data-task="j"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="k"] {
  --background-modifier-active-hover: hsla(0, 68%, 42%, 0.1);
  --background-modifier-border: rgba(247, 14, 14, 0.05);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #0b090a;
  --background-primary-alt: #121212;
  --background-secondary: #121212;
  --background-secondary-alt: #121212;
  --blockquote-border-color: rgba(247, 14, 14, 0.5);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #0b090a;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e0e0e0;
  --checkbox-border-color: #bebebe;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: rgba(247, 14, 14, 0.5);
  --checkbox-color-hover: rgba(247, 14, 14, 0.8);
  --checkbox-marker-color: #0b090a;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #121212;
  --code-border-color: rgba(247, 14, 14, 0.05);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #bebebe;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #e0e0e0;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #bebebe;
  --collapse-icon-color-collapsed: #b22222;
  --color-accent: hsl(0, 68%, 42%);
  --color-accent-1: hsl(-3, 69.36%, 48.3%);
  --color-accent-2: hsl(-5, 71.4%, 54.18%);
  --color-accent-hsl: 0, 68%, 42%;
  --divider-color: rgba(247, 14, 14, 0.05);
  --divider-color-hover: rgba(247, 14, 14, 0.5);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #e0e0e0;
  --font-interface: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #b22222;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #bebebe;
  --graph-text: #e0e0e0;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #bebebe;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(247, 14, 14, 0.05);
  --interactive-accent: rgba(247, 14, 14, 0.5);
  --interactive-accent-hover: rgba(247, 14, 14, 0.8);
  --interactive-accent-hsl: 0, 68%, 42%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #b22222;
  --link-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-external-color: #b22222;
  --link-external-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-unresolved-color: #b22222;
  --link-unresolved-decoration-color: hsla(0, 68%, 42%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #121212;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #0b090a;
  --pdf-page-background: #0b090a;
  --pdf-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --pdf-sidebar-background: #0b090a;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #0b090a;
  --setting-group-heading-color: #e0e0e0;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #121212;
  --setting-items-border-color: rgba(247, 14, 14, 0.05);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #121212;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #bebebe;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(247, 14, 14, 0.05);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #bebebe;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #bebebe;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #0b090a;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #0b090a;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(247, 14, 14, 0.05);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #121212;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 68%, 42%);
  --tab-text-color: #bebebe;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #e0e0e0;
  --tab-text-color-focused-highlighted: #b22222;
  --table-add-button-border-color: rgba(247, 14, 14, 0.05);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(247, 14, 14, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgba(247, 14, 14, 0.5);
  --table-drag-handle-color: #bebebe;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgba(247, 14, 14, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #e0e0e0;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 68%, 42%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgba(247, 14, 14, 0.5);
  --table-text-size: 16px;
  --tag-background: rgba(247, 14, 14, 0.15);
  --tag-background-hover: hsla(0, 68%, 42%, 0.2);
  --tag-border-color: hsla(0, 68%, 42%, 0.15);
  --tag-border-color-hover: hsla(0, 68%, 42%, 0.15);
  --tag-color: #b22222;
  --tag-color-hover: #b22222;
  --tag-size: 0.875em;
  --text-accent: #b22222;
  --text-accent-hover: hsl(-5, 71.4%, 54.18%);
  --text-error: #fb464c;
  --text-faint: #bebebe;
  --text-highlight-bg: rgba(244, 86, 86, 0.25);
  --text-muted: #b3b3b3;
  --text-normal: #e0e0e0;
  --text-selection: hsla(0, 68%, 42%, 0.33);
  --text-success: #44cf6e;
  --text-title-h1: #b22222;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(178, 34, 34);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(178, 34, 34);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(178, 34, 34);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(178, 34, 34);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 10px;
  color: var(--checkbox, rgba(247, 14, 14, 0.7));
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 15px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
  transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, -8);
}

html body li.task-list-item[data-task="l"] {
  --background-modifier-active-hover: hsla(0, 68%, 42%, 0.1);
  --background-modifier-border: rgba(247, 14, 14, 0.05);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #0b090a;
  --background-primary-alt: #121212;
  --background-secondary: #121212;
  --background-secondary-alt: #121212;
  --blockquote-border-color: rgba(247, 14, 14, 0.5);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #0b090a;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e0e0e0;
  --checkbox-border-color: #bebebe;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: rgba(247, 14, 14, 0.5);
  --checkbox-color-hover: rgba(247, 14, 14, 0.8);
  --checkbox-marker-color: #0b090a;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #121212;
  --code-border-color: rgba(247, 14, 14, 0.05);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #bebebe;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #e0e0e0;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #bebebe;
  --collapse-icon-color-collapsed: #b22222;
  --color-accent: hsl(0, 68%, 42%);
  --color-accent-1: hsl(-3, 69.36%, 48.3%);
  --color-accent-2: hsl(-5, 71.4%, 54.18%);
  --color-accent-hsl: 0, 68%, 42%;
  --divider-color: rgba(247, 14, 14, 0.05);
  --divider-color-hover: rgba(247, 14, 14, 0.5);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #e0e0e0;
  --font-interface: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #b22222;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #bebebe;
  --graph-text: #e0e0e0;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #bebebe;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(247, 14, 14, 0.05);
  --interactive-accent: rgba(247, 14, 14, 0.5);
  --interactive-accent-hover: rgba(247, 14, 14, 0.8);
  --interactive-accent-hsl: 0, 68%, 42%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #b22222;
  --link-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-external-color: #b22222;
  --link-external-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-unresolved-color: #b22222;
  --link-unresolved-decoration-color: hsla(0, 68%, 42%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #121212;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #0b090a;
  --pdf-page-background: #0b090a;
  --pdf-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --pdf-sidebar-background: #0b090a;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #0b090a;
  --setting-group-heading-color: #e0e0e0;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #121212;
  --setting-items-border-color: rgba(247, 14, 14, 0.05);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #121212;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #bebebe;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(247, 14, 14, 0.05);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #bebebe;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #bebebe;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #0b090a;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #0b090a;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(247, 14, 14, 0.05);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #121212;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 68%, 42%);
  --tab-text-color: #bebebe;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #e0e0e0;
  --tab-text-color-focused-highlighted: #b22222;
  --table-add-button-border-color: rgba(247, 14, 14, 0.05);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(247, 14, 14, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgba(247, 14, 14, 0.5);
  --table-drag-handle-color: #bebebe;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgba(247, 14, 14, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #e0e0e0;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 68%, 42%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgba(247, 14, 14, 0.5);
  --table-text-size: 16px;
  --tag-background: rgba(247, 14, 14, 0.15);
  --tag-background-hover: hsla(0, 68%, 42%, 0.2);
  --tag-border-color: hsla(0, 68%, 42%, 0.15);
  --tag-border-color-hover: hsla(0, 68%, 42%, 0.15);
  --tag-color: #b22222;
  --tag-color-hover: #b22222;
  --tag-size: 0.875em;
  --text-accent: #b22222;
  --text-accent-hover: hsl(-5, 71.4%, 54.18%);
  --text-error: #fb464c;
  --text-faint: #bebebe;
  --text-highlight-bg: rgba(244, 86, 86, 0.25);
  --text-muted: #b3b3b3;
  --text-normal: #e0e0e0;
  --text-selection: hsla(0, 68%, 42%, 0.33);
  --text-success: #44cf6e;
  --text-title-h1: #b22222;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(178, 34, 34);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(178, 34, 34);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(178, 34, 34);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(178, 34, 34);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 10px;
  color: var(--checkbox, rgba(247, 14, 14, 0.7));
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 15px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
  transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, -8);
}

html body li.task-list-item[data-task="m"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="n"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="o"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="p"] {
  --background-modifier-active-hover: hsla(0, 68%, 42%, 0.1);
  --background-modifier-border: rgba(247, 14, 14, 0.05);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #0b090a;
  --background-primary-alt: #121212;
  --background-secondary: #121212;
  --background-secondary-alt: #121212;
  --blockquote-border-color: rgba(247, 14, 14, 0.5);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #0b090a;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e0e0e0;
  --checkbox-border-color: #bebebe;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: rgba(247, 14, 14, 0.5);
  --checkbox-color-hover: rgba(247, 14, 14, 0.8);
  --checkbox-marker-color: #0b090a;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #121212;
  --code-border-color: rgba(247, 14, 14, 0.05);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #bebebe;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #e0e0e0;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #bebebe;
  --collapse-icon-color-collapsed: #b22222;
  --color-accent: hsl(0, 68%, 42%);
  --color-accent-1: hsl(-3, 69.36%, 48.3%);
  --color-accent-2: hsl(-5, 71.4%, 54.18%);
  --color-accent-hsl: 0, 68%, 42%;
  --divider-color: rgba(247, 14, 14, 0.05);
  --divider-color-hover: rgba(247, 14, 14, 0.5);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #e0e0e0;
  --font-interface: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #b22222;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #bebebe;
  --graph-text: #e0e0e0;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #bebebe;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(247, 14, 14, 0.05);
  --interactive-accent: rgba(247, 14, 14, 0.5);
  --interactive-accent-hover: rgba(247, 14, 14, 0.8);
  --interactive-accent-hsl: 0, 68%, 42%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #b22222;
  --link-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-external-color: #b22222;
  --link-external-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-unresolved-color: #b22222;
  --link-unresolved-decoration-color: hsla(0, 68%, 42%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #121212;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #0b090a;
  --pdf-page-background: #0b090a;
  --pdf-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --pdf-sidebar-background: #0b090a;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #0b090a;
  --setting-group-heading-color: #e0e0e0;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #121212;
  --setting-items-border-color: rgba(247, 14, 14, 0.05);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #121212;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #bebebe;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(247, 14, 14, 0.05);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #bebebe;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #bebebe;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #0b090a;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #0b090a;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(247, 14, 14, 0.05);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #121212;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 68%, 42%);
  --tab-text-color: #bebebe;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #e0e0e0;
  --tab-text-color-focused-highlighted: #b22222;
  --table-add-button-border-color: rgba(247, 14, 14, 0.05);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(247, 14, 14, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgba(247, 14, 14, 0.5);
  --table-drag-handle-color: #bebebe;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgba(247, 14, 14, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #e0e0e0;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 68%, 42%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgba(247, 14, 14, 0.5);
  --table-text-size: 16px;
  --tag-background: rgba(247, 14, 14, 0.15);
  --tag-background-hover: hsla(0, 68%, 42%, 0.2);
  --tag-border-color: hsla(0, 68%, 42%, 0.15);
  --tag-border-color-hover: hsla(0, 68%, 42%, 0.15);
  --tag-color: #b22222;
  --tag-color-hover: #b22222;
  --tag-size: 0.875em;
  --text-accent: #b22222;
  --text-accent-hover: hsl(-5, 71.4%, 54.18%);
  --text-error: #fb464c;
  --text-faint: #bebebe;
  --text-highlight-bg: rgba(244, 86, 86, 0.25);
  --text-muted: #b3b3b3;
  --text-normal: #e0e0e0;
  --text-selection: hsla(0, 68%, 42%, 0.33);
  --text-success: #44cf6e;
  --text-title-h1: #b22222;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(178, 34, 34);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(178, 34, 34);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(178, 34, 34);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(178, 34, 34);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 10px;
  color: var(--checkbox, rgba(247, 14, 14, 0.7));
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 15px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
  transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, -8);
}

html body li.task-list-item[data-task="q"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="r"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="s"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="t"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="u"] {
  --background-modifier-active-hover: hsla(0, 68%, 42%, 0.1);
  --background-modifier-border: rgba(247, 14, 14, 0.05);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #0b090a;
  --background-primary-alt: #121212;
  --background-secondary: #121212;
  --background-secondary-alt: #121212;
  --blockquote-border-color: rgba(247, 14, 14, 0.5);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #0b090a;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e0e0e0;
  --checkbox-border-color: #bebebe;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: rgba(247, 14, 14, 0.5);
  --checkbox-color-hover: rgba(247, 14, 14, 0.8);
  --checkbox-marker-color: #0b090a;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #121212;
  --code-border-color: rgba(247, 14, 14, 0.05);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #bebebe;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #e0e0e0;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #bebebe;
  --collapse-icon-color-collapsed: #b22222;
  --color-accent: hsl(0, 68%, 42%);
  --color-accent-1: hsl(-3, 69.36%, 48.3%);
  --color-accent-2: hsl(-5, 71.4%, 54.18%);
  --color-accent-hsl: 0, 68%, 42%;
  --divider-color: rgba(247, 14, 14, 0.05);
  --divider-color-hover: rgba(247, 14, 14, 0.5);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #e0e0e0;
  --font-interface: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #b22222;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #bebebe;
  --graph-text: #e0e0e0;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #bebebe;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(247, 14, 14, 0.05);
  --interactive-accent: rgba(247, 14, 14, 0.5);
  --interactive-accent-hover: rgba(247, 14, 14, 0.8);
  --interactive-accent-hsl: 0, 68%, 42%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #b22222;
  --link-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-external-color: #b22222;
  --link-external-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-unresolved-color: #b22222;
  --link-unresolved-decoration-color: hsla(0, 68%, 42%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #121212;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #0b090a;
  --pdf-page-background: #0b090a;
  --pdf-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --pdf-sidebar-background: #0b090a;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #0b090a;
  --setting-group-heading-color: #e0e0e0;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #121212;
  --setting-items-border-color: rgba(247, 14, 14, 0.05);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #121212;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #bebebe;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(247, 14, 14, 0.05);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #bebebe;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #bebebe;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #0b090a;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #0b090a;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(247, 14, 14, 0.05);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #121212;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 68%, 42%);
  --tab-text-color: #bebebe;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #e0e0e0;
  --tab-text-color-focused-highlighted: #b22222;
  --table-add-button-border-color: rgba(247, 14, 14, 0.05);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(247, 14, 14, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgba(247, 14, 14, 0.5);
  --table-drag-handle-color: #bebebe;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgba(247, 14, 14, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #e0e0e0;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 68%, 42%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgba(247, 14, 14, 0.5);
  --table-text-size: 16px;
  --tag-background: rgba(247, 14, 14, 0.15);
  --tag-background-hover: hsla(0, 68%, 42%, 0.2);
  --tag-border-color: hsla(0, 68%, 42%, 0.15);
  --tag-border-color-hover: hsla(0, 68%, 42%, 0.15);
  --tag-color: #b22222;
  --tag-color-hover: #b22222;
  --tag-size: 0.875em;
  --text-accent: #b22222;
  --text-accent-hover: hsl(-5, 71.4%, 54.18%);
  --text-error: #fb464c;
  --text-faint: #bebebe;
  --text-highlight-bg: rgba(244, 86, 86, 0.25);
  --text-muted: #b3b3b3;
  --text-normal: #e0e0e0;
  --text-selection: hsla(0, 68%, 42%, 0.33);
  --text-success: #44cf6e;
  --text-title-h1: #b22222;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(178, 34, 34);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(178, 34, 34);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(178, 34, 34);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(178, 34, 34);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 10px;
  color: var(--checkbox, rgba(247, 14, 14, 0.7));
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 15px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
  transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, -8);
}

html body li.task-list-item[data-task="v"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="w"] {
  --background-modifier-active-hover: hsla(0, 68%, 42%, 0.1);
  --background-modifier-border: rgba(247, 14, 14, 0.05);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #2a2a2a;
  --background-modifier-form-field-hover: #2a2a2a;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #44cf6e;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: #0b090a;
  --background-primary-alt: #121212;
  --background-secondary: #121212;
  --background-secondary-alt: #121212;
  --blockquote-border-color: rgba(247, 14, 14, 0.5);
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #0b090a;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: #e0e0e0;
  --checkbox-border-color: #bebebe;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: rgba(247, 14, 14, 0.5);
  --checkbox-color-hover: rgba(247, 14, 14, 0.8);
  --checkbox-marker-color: #0b090a;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 4px;
  --code-background: #121212;
  --code-border-color: rgba(247, 14, 14, 0.05);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #bebebe;
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: #e0e0e0;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: #b3b3b3;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --collapse-icon-color: #bebebe;
  --collapse-icon-color-collapsed: #b22222;
  --color-accent: hsl(0, 68%, 42%);
  --color-accent-1: hsl(-3, 69.36%, 48.3%);
  --color-accent-2: hsl(-5, 71.4%, 54.18%);
  --color-accent-hsl: 0, 68%, 42%;
  --divider-color: rgba(247, 14, 14, 0.05);
  --divider-color-hover: rgba(247, 14, 14, 0.5);
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #e0e0e0;
  --font-interface: '??', '??', 'Poppins', 'Oswald', 'Montserrat', 'Roboto', 'Glow Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: #e0de71;
  --graph-node-focused: #b22222;
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: #bebebe;
  --graph-text: #e0e0e0;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #bebebe;
  --heading-spacing: 2.5rem;
  --hr-color: rgba(247, 14, 14, 0.05);
  --interactive-accent: rgba(247, 14, 14, 0.5);
  --interactive-accent-hover: rgba(247, 14, 14, 0.8);
  --interactive-accent-hsl: 0, 68%, 42%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: #b22222;
  --link-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-external-color: #b22222;
  --link-external-color-hover: hsl(-5, 71.4%, 54.18%);
  --link-unresolved-color: #b22222;
  --link-unresolved-decoration-color: hsla(0, 68%, 42%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: #121212;
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: #0b090a;
  --pdf-page-background: #0b090a;
  --pdf-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --pdf-sidebar-background: #0b090a;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(247, 14, 14, 0.05);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #0b090a;
  --setting-group-heading-color: #e0e0e0;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #121212;
  --setting-items-border-color: rgba(247, 14, 14, 0.05);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #121212;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #bebebe;
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgba(247, 14, 14, 0.05);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #bebebe;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: #bebebe;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #0b090a;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #0b090a;
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 13px;
  --tab-outline-color: rgba(247, 14, 14, 0.05);
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #121212;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 68%, 42%);
  --tab-text-color: #bebebe;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #b3b3b3;
  --tab-text-color-focused-active-current: #e0e0e0;
  --tab-text-color-focused-highlighted: #b22222;
  --table-add-button-border-color: rgba(247, 14, 14, 0.05);
  --table-add-button-border-width: 1px;
  --table-border-color: rgba(247, 14, 14, 0.15);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgba(247, 14, 14, 0.5);
  --table-drag-handle-color: #bebebe;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: rgba(247, 14, 14, 0.15);
  --table-header-border-width: 1px;
  --table-header-color: #e0e0e0;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(0, 68%, 42%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgba(247, 14, 14, 0.5);
  --table-text-size: 16px;
  --tag-background: rgba(247, 14, 14, 0.15);
  --tag-background-hover: hsla(0, 68%, 42%, 0.2);
  --tag-border-color: hsla(0, 68%, 42%, 0.15);
  --tag-border-color-hover: hsla(0, 68%, 42%, 0.15);
  --tag-color: #b22222;
  --tag-color-hover: #b22222;
  --tag-size: 0.875em;
  --text-accent: #b22222;
  --text-accent-hover: hsl(-5, 71.4%, 54.18%);
  --text-error: #fb464c;
  --text-faint: #bebebe;
  --text-highlight-bg: rgba(244, 86, 86, 0.25);
  --text-muted: #b3b3b3;
  --text-normal: #e0e0e0;
  --text-selection: hsla(0, 68%, 42%, 0.33);
  --text-success: #44cf6e;
  --text-title-h1: #b22222;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(178, 34, 34);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 10px;
  border-left-color: rgb(178, 34, 34);
  border-left-style: solid;
  border-left-width: 10px;
  border-right-color: rgb(178, 34, 34);
  border-right-style: solid;
  border-right-width: 10px;
  border-top-color: rgb(178, 34, 34);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 10px;
  color: var(--checkbox, rgba(247, 14, 14, 0.7));
  content: "";
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 15px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
  transform: matrix(0.707107, 0.707107, -0.707107, 0.707107, 0, -8);
}

html body li.task-list-item[data-task="x"] {
  color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task="y"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="z"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="|"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task="~"] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration-line: line-through;
}

html body li.task-list-item[data-task='!'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='*'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='-'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='/'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='>'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='?'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='I'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='S'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='b'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='c'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='d'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='f'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='i'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='k'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='l'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='p'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='u'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task='w'] {
  color: rgba(247, 14, 14, 0.7);
  text-decoration: line-through;
  text-decoration-color: rgba(247, 14, 14, 0.7);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(11, 9, 10);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(11, 9, 10);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  color: rgb(224, 224, 224);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(224, 224, 224);
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
  border-bottom-color: rgba(247, 14, 14, 0.05);
  border-bottom-width: 0px;
  border-left-color: rgba(247, 14, 14, 0.05);
  border-left-width: 0px;
  border-right-color: rgba(247, 14, 14, 0.05);
  border-right-width: 0px;
  border-top-color: rgba(247, 14, 14, 0.05);
  border-top-width: 0px;
  color: var(--text-normal, rgb(224, 224, 224));
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(11, 9, 10));
}

html body .search > .search-container > .search-space > * {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 224, 224);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(224, 224, 224);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(224, 224, 224);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(18, 18, 18);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
  color: rgb(224, 224, 224);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(224, 224, 224);
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, rgba(247, 14, 14, 0.15));
  --pill-background-hover: var(--tag-background-hover, hsla(0, 68%, 42%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(0, 68%, 42%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(0, 68%, 42%, 0.15));
  --pill-color: var(--tag-color, #b22222);
  --pill-color-hover: var(--tag-color-hover, #b22222);
  --pill-color-remove: var(--tag-color, #b22222);
  --pill-color-remove-hover: var(--tag-color-hover, #b22222);
  background-color: var(--pill-background, rgba(247, 14, 14, 0.15));
  border-bottom-color: rgba(180, 34, 34, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(180, 34, 34, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(180, 34, 34, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(180, 34, 34, 0.15);
  border-top-width: 0px;
  color: var(--pill-color, rgb(178, 34, 34));
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal-link.tag-link::before {
  color: rgb(178, 34, 34);
}

html body h1 {
  border-bottom-color: rgb(178, 34, 34);
  border-bottom-width: 0px;
  border-left-color: rgb(178, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(178, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(178, 34, 34);
  border-top-width: 0px;
  color: var(--text-title-h1, rgb(178, 34, 34));
  font-size: var(--h1-size, 34px);
  letter-spacing: var(--h1-letter-spacing, -0.51px);
  line-height: var(--h1-line-height, 40.8px);
}

html body h1.article-title {
  color: var(--inline-title-color, rgb(224, 224, 224));
}

html body h2 {
  border-bottom-color: rgb(229, 56, 59);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(229, 56, 59);
  border-left-width: 0px;
  border-right-color: rgb(229, 56, 59);
  border-right-width: 0px;
  border-top-color: rgb(229, 56, 59);
  border-top-width: 0px;
  color: var(--text-title-h2, rgb(229, 56, 59));
  font-size: var(--h2-size, 28px);
  letter-spacing: var(--h2-letter-spacing, -0.308px);
  line-height: var(--h2-line-height, 33.6px);
  margin-bottom: 20px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 10px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 20px;
}

html body h2.page-title, html h2.page-title a {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(224, 224, 224));
}

html body h3 {
  border-bottom-color: rgb(229, 56, 59);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(229, 56, 59);
  border-left-width: 0px;
  border-right-color: rgb(229, 56, 59);
  border-right-width: 0px;
  border-top-color: rgb(229, 56, 59);
  border-top-width: 0px;
  color: var(--text-title-h3, rgb(229, 56, 59));
  font-size: var(--h3-size, 24px);
  letter-spacing: var(--h3-letter-spacing, -0.192px);
  line-height: var(--h3-line-height, 31.2px);
  margin-bottom: 20px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 45px);
  padding-bottom: 10px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 20px;
}

html body h4 {
  border-bottom-color: rgb(229, 56, 59);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(229, 56, 59);
  border-left-width: 0px;
  border-right-color: rgb(229, 56, 59);
  border-right-width: 0px;
  border-top-color: rgb(229, 56, 59);
  border-top-width: 0px;
  color: var(--text-title-h4, rgb(229, 56, 59));
  font-size: var(--h4-size, 20px);
  letter-spacing: var(--h4-letter-spacing, -0.1px);
  line-height: var(--h4-line-height, 28px);
  margin-bottom: 20px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 45px);
  padding-bottom: 10px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 20px;
}

html body h5 {
  border-bottom-color: rgb(229, 56, 59);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(229, 56, 59);
  border-left-width: 0px;
  border-right-color: rgb(229, 56, 59);
  border-right-width: 0px;
  border-top-color: rgb(229, 56, 59);
  border-top-width: 0px;
  color: var(--text-title-h5, rgb(229, 56, 59));
  font-size: var(--h5-size, 18px);
  letter-spacing: var(--h5-letter-spacing, -0.036px);
  line-height: var(--h5-line-height, 27px);
  margin-bottom: 20px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 45px);
  padding-bottom: 10px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 20px;
}

html body h6 {
  border-bottom-color: rgb(229, 56, 59);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(229, 56, 59);
  border-left-width: 0px;
  border-right-color: rgb(229, 56, 59);
  border-right-width: 0px;
  border-top-color: rgb(229, 56, 59);
  border-top-width: 0px;
  color: var(--text-title-h5, rgb(229, 56, 59));
  margin-bottom: 20px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 45px;
  padding-bottom: 10px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 20px;
}

html body hr {
  border-bottom-color: rgba(247, 14, 14, 0.05);
  border-bottom-width: 0px;
  border-left-color: rgba(247, 14, 14, 0.05);
  border-left-width: 0px;
  border-right-color: rgba(247, 14, 14, 0.05);
  border-right-width: 0px;
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(224, 224, 224);
}`,
    footer: `html body footer {
  background-color: var(--background-primary-alt, rgb(18, 18, 18));
  border-bottom-color: rgb(20, 16, 16);
  border-bottom-width: 0px;
  border-left-color: rgb(20, 16, 16);
  border-left-width: 0px;
  border-right-color: rgb(20, 16, 16);
  border-right-width: 0px;
  border-top-color: rgb(20, 16, 16);
  border-top-width: 0px;
  color: var(--text-faint, rgb(190, 190, 190));
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 0px;
  padding-top: 8px;
}

html body footer ul li a {
  color: rgb(190, 190, 190);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(224, 224, 224);
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
  color: rgb(224, 224, 224);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
}

html body li.section-li > .section .meta {
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body ul.section-ul {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  color: var(--text-faint, rgb(190, 190, 190));
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html body .canvas-node {
  border-color: rgb(224, 224, 224);
}

html body .canvas-node-content {
  color: rgb(224, 224, 224);
}

html body .canvas-node-file {
  color: var(--text-normal, rgb(224, 224, 224));
}

html body .canvas-node-group {
  border-color: rgb(224, 224, 224);
}

html body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(18, 18, 18));
  border-color: rgb(224, 224, 224);
}`,
    bases: `html body .bases-table thead th {
  border-color: rgba(247, 14, 14, 0.15);
  color: var(--table-header-color, rgb(224, 224, 224));
}`,
    properties: `html body .metadata {
  border-bottom-color: rgba(247, 14, 14, 0.05);
  border-bottom-width: 0px;
  border-left-color: rgba(247, 14, 14, 0.05);
  border-left-width: 0px;
  border-right-color: rgba(247, 14, 14, 0.05);
  border-right-width: 0px;
  border-top-color: rgba(247, 14, 14, 0.05);
  border-top-width: 0px;
}

html body .metadata-property-key {
  font-family: var(--metadata-label-font, "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body .metadata-property-value {
  font-family: var(--metadata-input-font, "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body .note-properties {
  border-color: rgba(247, 14, 14, 0.05);
}

html body .note-properties-tags {
  --pill-background: var(--tag-background, rgba(247, 14, 14, 0.15));
  --pill-background-hover: var(--tag-background-hover, hsla(0, 68%, 42%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(0, 68%, 42%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(0, 68%, 42%, 0.15));
  --pill-color: var(--tag-color, #b22222);
  --pill-color-hover: var(--tag-color-hover, #b22222);
  --pill-color-remove: var(--tag-color, #b22222);
  --pill-color-remove-hover: var(--tag-color-hover, #b22222);
  background-color: var(--pill-background, rgba(247, 14, 14, 0.15));
  color: var(--pill-color, rgb(178, 34, 34));
}

html body div#quartz-root {
  background-color: var(--background-primary, rgb(11, 9, 10));
  color: var(--text-normal, rgb(224, 224, 224));
}

html body ol.overflow {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
}`,
    stacked: `html body .stacked-page {
  background-color: var(--background-secondary, rgb(18, 18, 18));
  border-color: rgb(224, 224, 224);
}

html body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(18, 18, 18));
}

html body .stacked-page.active {
  border-color: rgb(224, 224, 224);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
  color: rgb(224, 224, 224);
}

html body .navigation-progress {
  background-color: var(--background-primary-alt, rgb(18, 18, 18));
}

html body .page-header h2.page-title {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
  color: var(--text-normal, rgb(224, 224, 224));
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(224, 224, 224);
}

html body details {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
}

html body input[type=text] {
  font-family: "??", "??", Poppins, Oswald, Montserrat, Roboto, "Glow Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  background-color: var(--code-background, rgb(18, 18, 18));
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
  color: var(--code-normal, rgb(224, 224, 224));
}

html body progress {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
  border-right-color: rgb(224, 224, 224);
  border-right-width: 0px;
  border-top-color: rgb(224, 224, 224);
  border-top-width: 0px;
}

html body sub {
  color: rgb(224, 224, 224);
}

html body summary {
  color: rgb(224, 224, 224);
}

html body sup {
  color: rgb(224, 224, 224);
}

html body ul.tags > li {
  background-color: var(--tag-background, rgba(247, 14, 14, 0.15));
  border-bottom-color: rgba(180, 34, 34, 0.15);
  border-bottom-left-radius: 27.52px;
  border-bottom-right-radius: 27.52px;
  border-bottom-width: 0px;
  border-left-color: rgba(180, 34, 34, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(180, 34, 34, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(180, 34, 34, 0.15);
  border-top-left-radius: 27.52px;
  border-top-right-radius: 27.52px;
  border-top-width: 0px;
  color: var(--text-accent, rgb(178, 34, 34));
}`,
  },
  light: {},
};
