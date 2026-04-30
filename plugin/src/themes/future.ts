import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "future",
    modes: ["light", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "future-theme",
  },
  dark: {},
  light: {
    base: `:root:root {
  --accent-h: 45;
  --accent-l: 50%;
  --accent-s: 100%;
  --background-modifier-border: var(--color-base-30, rgb(230, 230, 230));
  --background-modifier-border-focus: var(--color-base-40, hsla(0, 0%, 79%));
  --background-modifier-error: var(--color-red, #DC5328);
  --background-modifier-error-hover: var(--color-red, #DC5328);
  --background-modifier-error-rgb: var(--color-red-rgb, 255, 85, 64);
  --background-modifier-success: var(--color-green, #5DD400);
  --background-modifier-success-rgb: var(--color-green-rgb, 93, 212, 0);
  --background-primary-alt: var(--color-base-10, #eeeeee);
  --background-secondary: var(--color-base-20, #f8f8f8);
  --background-secondary-alt: var(--color-base-05, #f8f8f8);
  --bases-cards-cover-background: var(--background-primary-alt, #eeeeee);
  --bases-embed-border-color: var(--background-modifier-border, rgb(230, 230, 230));
  --bases-embed-border-radius: var(--radius-s, 0.5em);
  --bases-group-heading-property-color: var(--text-muted, #999999);
  --bases-table-border-color: var(--table-border-color, rgb(230, 230, 230));
  --bases-table-cell-background-disabled: var(--background-primary-alt, #eeeeee);
  --bases-table-cell-background-selected: var(--table-selection, hsla(45, 100%, 50%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 0.5em);
  --bases-table-group-background: var(--background-primary-alt, #eeeeee);
  --bases-table-header-color: var(--text-muted, #999999);
  --blockquote-border-color: var(--interactive-accent, hsl(44, 101%, 53.75%));
  --bodyFont: var(--font-text-theme, 'Inter');
  --bold-color: var(--color-blue, #2AA7EE);
  --callout-bug: var(--color-red-rgb, 255, 85, 64);
  --callout-default: var(--color-orange-rgb, 255, 152, 0);
  --callout-error: var(--color-red-rgb, 255, 85, 64);
  --callout-example: var(--color-purple-rgb, 62, 88, 235);
  --callout-fail: var(--color-red-rgb, 255, 85, 64);
  --callout-important: var(--color-orange-rgb, 255, 152, 0);
  --callout-info: var(--color-blue-rgb, 42, 167, 238);
  --callout-opacity: 0.22;
  --callout-question: var(--color-orange-rgb, 255, 152, 0);
  --callout-radius: var(--radius-s, 0.5em);
  --callout-success: var(--color-green-rgb, 93, 212, 0);
  --callout-summary: var(--color-cyan-rgb, 15, 200, 186);
  --callout-tip: var(--color-cyan-rgb, 15, 200, 186);
  --callout-title-color: var(--text-normal, #2f2f2f);
  --callout-todo: var(--color-purple-rgb, 62, 88, 235);
  --callout-warning: var(--color-orange-rgb, 255, 152, 0);
  --canvas-card-label-color: var(--text-faint, #949494);
  --canvas-color-1: var(--color-red-rgb, 255, 85, 64);
  --canvas-color-2: var(--color-orange-rgb, 255, 152, 0);
  --canvas-color-3: var(--color-yellow-rgb, 236, 217, 27);
  --canvas-color-4: var(--color-green-rgb, 93, 212, 0);
  --canvas-color-5: var(--color-cyan-rgb, 15, 200, 186);
  --canvas-color-6: var(--color-purple-rgb, 62, 88, 235);
  --canvas-controls-radius: var(--radius-s, 0.5em);
  --canvas-dot-pattern: var(--color-base-30, rgb(230, 230, 230));
  --caret-color: var(--text-normal, #2f2f2f);
  --checkbox-border-color: var(--text-faint, #949494);
  --checkbox-border-color-hover: var(--text-muted, #999999);
  --checkbox-color: var(--interactive-accent, transparent);
  --checkbox-color-hover: var(--interactive-accent-hover, transparent);
  --checkbox-radius: var(--radius-s, 0.5em);
  --checklist-done-color: var(--text-muted, #999999);
  --checklist-done-decoration: none;
  --clickable-icon-radius: var(--radius-s, 0.5em);
  --code-background: var(--background-primary-alt, #eeeeee);
  --code-border-color: var(--background-modifier-border, rgb(230, 230, 230));
  --code-comment: var(--text-faint, #949494);
  --code-function: var(--color-yellow, #ECD91B);
  --code-important: var(--color-orange, #FFB522);
  --code-keyword: var(--color-pink, #BB72D6);
  --code-normal: var(--text-normal, #2f2f2f);
  --code-operator: var(--color-red, #DC5328);
  --code-property: var(--color-cyan, #0FC8BA);
  --code-punctuation: var(--text-muted, #999999);
  --code-radius: var(--radius-s, 0.5em);
  --code-string: var(--color-green, #5DD400);
  --code-tag: var(--color-red, #DC5328);
  --code-value: var(--color-purple, #3E58EB);
  --collapse-icon-color: var(--text-faint, #949494);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(45, 100%, 50%));
  --color-base-05: #f8f8f8;
  --color-base-10: #eeeeee;
  --color-base-100: #2f2f2f;
  --color-base-20: #f8f8f8;
  --color-base-25: #f2f2f2;
  --color-base-30: rgb(230, 230, 230);
  --color-base-40: hsla(0, 0%, 79%);
  --color-base-50: #a2a0a0;
  --color-base-60: #7b7b7b;
  --color-base-70: #999999;
  --color-blue: #2AA7EE;
  --color-blue-rgb: 42, 167, 238;
  --color-cyan: #0FC8BA;
  --color-cyan-rgb: 15, 200, 186;
  --color-green: #5DD400;
  --color-green-rgb: 93, 212, 0;
  --color-orange: #FFB522;
  --color-orange-rgb: 255, 152, 0;
  --color-pink: #BB72D6;
  --color-pink-rgb: 187, 114, 214;
  --color-purple: #3E58EB;
  --color-purple-rgb: 62, 88, 235;
  --color-red: #DC5328;
  --color-red-rgb: 255, 85, 64;
  --color-yellow: #ECD91B;
  --color-yellow-rgb: 236, 217, 27;
  --dark: var(--text-normal, var(--color-base-100, #2f2f2f));
  --darkgray: var(--text-normal, var(--color-base-100, #2f2f2f));
  --divider-color: var(--background-modifier-border, rgb(230, 230, 230));
  --divider-color-hover: var(--interactive-accent, hsl(44, 101%, 53.75%));
  --divider-width: 0px;
  --dropdown-background-hover: var(--interactive-hover, #eeeeee);
  --file-header-font: var(--font-interface, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-line-width: 820px;
  --flair-color: var(--text-normal, #2f2f2f);
  --folder-description: 'Collection';
  --folder-icon: '📁';
  --font-interface-theme: 'Inter';
  --font-mermaid: var(--font-text, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-text-theme: 'Inter';
  --footnote-divider-color: var(--metadata-divider-color, rgb(230, 230, 230));
  --footnote-id-color: var(--text-muted, #999999);
  --footnote-id-color-no-occurrences: var(--text-faint, #949494);
  --footnote-line-height: var(--line-height-normal, 24px);
  --footnote-radius: var(--radius-s, 0.5em);
  --gradient-1-dark: hsl(var(--accent-h), 20%, 35%);
  --gradient-1-light: hsl(var(--accent-h), 90%, 80%);
  --gradient-2-dark: hsl(calc(var(--accent-h) - 50), 30%, 25%);
  --gradient-2-light: hsl(calc(var(--accent-h) - 50), 100%, 90%);
  --graph-node: var(--text-muted, #999999);
  --graph-node-attachment: var(--color-yellow, #ECD91B);
  --graph-node-focused: var(--text-accent, hsl(45, 100%, 50%));
  --graph-node-tag: var(--color-green, #5DD400);
  --graph-node-unresolved: var(--text-faint, #949494);
  --graph-text: var(--text-normal, #2f2f2f);
  --gray: var(--text-muted, var(--color-base-70, #999999));
  --h1-bg: var(--color-yellow-rgb, 236, 217, 27);
  --h2-bg: var(--color-green-rgb, 93, 212, 0);
  --h3-bg: var(--color-cyan-rgb, 15, 200, 186);
  --h4-bg: var(--color-blue-rgb, 42, 167, 238);
  --h5-bg: var(--color-purple-rgb, 62, 88, 235);
  --h5-line-height: var(--line-height-normal, 24px);
  --h6-bg: var(--color-pink-rgb, 187, 114, 214);
  --h6-line-height: var(--line-height-normal, 24px);
  --headerFont: var(--font-text-theme, 'Inter');
  --heading-formatting: var(--text-faint, #949494);
  --heading-opacity: 0.2;
  --heading-radius: 4px;
  --hr-color: var(--background-modifier-border, rgb(230, 230, 230));
  --icon-color: var(--text-muted, #999999);
  --icon-color-active: var(--text-accent, hsl(45, 100%, 50%));
  --icon-color-focused: var(--text-normal, #2f2f2f);
  --icon-color-hover: var(--text-muted, #999999);
  --inline-title-color: var(--text-normal, #2f2f2f);
  --inline-title-size: calc(var(--h1-size) + 5px);
  --input-date-separator: var(--text-faint, #949494);
  --input-placeholder-color: var(--text-faint, #949494);
  --interactive-accent: var(--color-accent-1, hsl(44, 101%, 53.75%));
  --interactive-accent-hover: var(--color-accent-2, hsl(42, 102%, 57.5%));
  --interactive-accent-hsl: var(--color-accent-hsl, 45, 100%, 50%);
  --interactive-hover: var(--color-base-10, #eeeeee);
  --italic-color: var(--color-green, #5DD400);
  --light: var(--background-primary-alt, var(--color-base-10, #eeeeee));
  --lightgray: var(--background-secondary, var(--color-base-20, #f8f8f8));
  --line-height-normal: 24px;
  --link-color: var(--text-normal, #2f2f2f);
  --link-color-hover: var(--text-faint, #949494);
  --link-external-color: var(--text-accent, hsl(45, 100%, 50%));
  --link-external-color-hover: var(--text-accent-hover, hsl(42, 102%, 57.5%));
  --link-unresolved-color: var(--text-muted, #999999);
  --link-unresolved-decoration-color: var(--text-muted, #999999);
  --list-bullet-size: 0.35em;
  --list-marker-color: var(--text-normal, #2f2f2f);
  --list-marker-color-collapsed: var(--text-accent, hsl(45, 100%, 50%));
  --list-marker-color-hover: var(--text-muted, #999999);
  --list-spacing: 0.2em;
  --menu-background: var(--background-secondary, #f8f8f8);
  --metadata-border-color: var(--background-modifier-border, rgb(230, 230, 230));
  --metadata-divider-color: var(--background-modifier-border, rgb(230, 230, 230));
  --metadata-input-font: var(--font-interface, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #2f2f2f);
  --metadata-label-font: var(--font-interface, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #999999);
  --metadata-label-text-color-hover: var(--text-muted, #999999);
  --modal-height: 650px;
  --modal-max-height: calc(100% - 48px);
  --modal-width: calc(100% - 32px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #949494);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #949494);
  --nav-heading-color: var(--text-normal, #2f2f2f);
  --nav-heading-color-collapsed: var(--text-faint, #949494);
  --nav-heading-color-collapsed-hover: var(--text-muted, #999999);
  --nav-heading-color-hover: var(--text-normal, #2f2f2f);
  --nav-item-color: var(--text-normal, #2f2f2f);
  --nav-item-color-active: var(--text-normal, #2f2f2f);
  --nav-item-color-highlighted: var(--text-accent, hsl(45, 100%, 50%));
  --nav-item-color-hover: var(--text-normal, #2f2f2f);
  --nav-item-color-selected: var(--text-normal, #2f2f2f);
  --nav-item-radius: var(--radius-s, 0.5em);
  --nav-tag-color: var(--text-faint, #949494);
  --nav-tag-color-active: var(--text-muted, #999999);
  --nav-tag-color-hover: var(--text-muted, #999999);
  --nav-tag-radius: var(--radius-s, 0.5em);
  --note-description: 'Note';
  --note-icon: '📝';
  --page-transparency-custom: 1;
  --pill-border-color: var(--background-modifier-border, rgb(230, 230, 230));
  --pill-color: var(--text-muted, #999999);
  --pill-color-hover: var(--text-normal, #2f2f2f);
  --pill-color-remove: var(--text-faint, #949494);
  --pill-color-remove-hover: var(--text-accent, hsl(45, 100%, 50%));
  --radius-s: 0.5em;
  --ribbon-background: var(--background-primary-alt, #eeeeee);
  --ribbon-background-collapsed: var(--background-primary, transparent);
  --ribbon-width: 74px;
  --search-clear-button-color: var(--text-muted, #999999);
  --search-icon-color: var(--text-muted, #999999);
  --secondary: var(--text-accent, var(--color-accent, hsl(45, 100%, 50%)));
  --setting-group-heading-color: var(--text-normal, #2f2f2f);
  --setting-items-background: var(--background-primary-alt, #eeeeee);
  --setting-items-border-color: var(--background-modifier-border, rgb(230, 230, 230));
  --settings-core-plugins: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjQiIGZpbGw9IiMzRTU4RUIiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS41IDguNUM1LjUgNy4xMTkyOSA2LjYxOTI5IDYgOCA2SDE2QzE3LjM4MDcgNiAxOC41IDcuMTE5MjkgMTguNSA4LjVDMTguNSA5Ljg4MDcxIDE3LjM4MDcgMTEgMTYgMTFIOEM2LjYxOTI5IDExIDUuNSA5Ljg4MDcxIDUuNSA4LjVaTTkuNSA4LjVDOS41IDkuMDUyMjggOS4wNTIyOCA5LjUgOC41IDkuNUM3Ljk0NzcyIDkuNSA3LjUgOS4wNTIyOCA3LjUgOC41QzcuNSA3Ljk0NzcyIDcuOTQ3NzIgNy41IDguNSA3LjVDOS4wNTIyOCA3LjUgOS41IDcuOTQ3NzIgOS41IDguNVpNNS41IDE1LjVDNS41IDE0LjExOTMgNi42MTkyOSAxMyA4IDEzSDE2QzE3LjM4MDcgMTMgMTguNSAxNC4xMTkzIDE4LjUgMTUuNUMxOC41IDE2Ljg4MDcgMTcuMzgwNyAxOCAxNiAxOEg4QzYuNjE5MjkgMTggNS41IDE2Ljg4MDcgNS41IDE1LjVaTTkuNSAxNS41QzkuNSAxNi4wNTIzIDkuMDUyMjggMTYuNSA4LjUgMTYuNUM3Ljk0NzcyIDE2LjUgNy41IDE2LjA1MjMgNy41IDE1LjVDNy41IDE0Ljk0NzcgNy45NDc3MiAxNC41IDguNSAxNC41QzkuMDUyMjggMTQuNSA5LjUgMTQuOTQ3NyA5LjUgMTUuNVoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg==");
  --settings-options: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjQiIGZpbGw9IiMwRkM4QkEiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNSA3LjVDNSA3Ljc3NjE0IDUuMjIzODYgOCA1LjUgOEgxOC41QzE4Ljc3NjEgOCAxOSA3Ljc3NjE0IDE5IDcuNUMxOSA3LjIyMzg2IDE4Ljc3NjEgNyAxOC41IDdINS41QzUuMjIzODYgNyA1IDcuMjIzODYgNSA3LjVaTTUuNSAxMi41QzUuMjIzODYgMTIuNSA1IDEyLjI3NjEgNSAxMkM1IDExLjcyMzkgNS4yMjM4NiAxMS41IDUuNSAxMS41SDE4LjVDMTguNzc2MSAxMS41IDE5IDExLjcyMzkgMTkgMTJDMTkgMTIuMjc2MSAxOC43NzYxIDEyLjUgMTguNSAxMi41SDUuNVpNNS41IDE3QzUuMjIzODYgMTcgNSAxNi43NzYxIDUgMTYuNUM1IDE2LjIyMzkgNS4yMjM4NiAxNiA1LjUgMTZIMTguNUMxOC43NzYxIDE2IDE5IDE2LjIyMzkgMTkgMTYuNUMxOSAxNi43NzYxIDE4Ljc3NjEgMTcgMTguNSAxN0g1LjVaIiBmaWxsPSJ3aGl0ZSIvPg0KPHJlY3QgeD0iMTIuNSIgeT0iMTguMjUiIHdpZHRoPSIzLjUiIGhlaWdodD0iMy41IiByeD0iMS43NSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDEyLjUgMTguMjUpIiBmaWxsPSIjMEZDOEJBIiBzdHJva2U9IndoaXRlIi8+DQo8cmVjdCB4PSI4IiB5PSIxMy43NSIgd2lkdGg9IjMuNSIgaGVpZ2h0PSIzLjUiIHJ4PSIxLjc1IiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgOCAxMy43NSkiIGZpbGw9IiMwRkM4QkEiIHN0cm9rZT0id2hpdGUiLz4NCjxyZWN0IHg9IjEyLjUiIHk9IjkuMjUiIHdpZHRoPSIzLjUiIGhlaWdodD0iMy41IiByeD0iMS43NSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDEyLjUgOS4yNSkiIGZpbGw9IiMwRkM4QkEiIHN0cm9rZT0id2hpdGUiLz4NCjwvc3ZnPg0K");
  --settings-plugins: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjQiIGZpbGw9IiMyQUE3RUUiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNSAxMi4yMDkyQzE0Ljk2NTkgMTEuNjE1OSAxNiAxMC4xNzg3IDE2IDguNUMxNiA2LjI5MDg2IDE0LjIwOTEgNC41IDEyIDQuNUM5Ljc5MDg2IDQuNSA4IDYuMjkwODYgOCA4LjVDOCAxMC4xNzg3IDkuMDM0MDggMTEuNjE1OSAxMC41IDEyLjIwOTJWMTcuOTgwNUwxMiAxOS41TDEzLjUgMTcuOTgwNVYxNy4yMzI1TDEyLjM3NSAxNi4xMTA0TDEzLjUgMTQuOTg4M0wxMi4zNzUgMTMuODY2MkwxMy41IDEyLjc0NDJWMTIuMjA5MlpNMTMuMjUgNy43NUMxMy4yNSA4LjQ0MDM2IDEyLjY5MDQgOSAxMiA5QzExLjMwOTYgOSAxMC43NSA4LjQ0MDM2IDEwLjc1IDcuNzVDMTAuNzUgNy4wNTk2NCAxMS4zMDk2IDYuNSAxMiA2LjVDMTIuNjkwNCA2LjUgMTMuMjUgNy4wNTk2NCAxMy4yNSA3Ljc1WiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K");
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #999999);
  --shiki-code-background: var(--code-background, #eeeeee);
  --shiki-code-block-border-radius: var(--code-radius, 0.5em);
  --shiki-code-comment: var(--text-faint, #949494);
  --shiki-code-function: var(--color-green, #5DD400);
  --shiki-code-important: var(--color-orange, #FFB522);
  --shiki-code-keyword: var(--color-pink, #BB72D6);
  --shiki-code-normal: var(--text-muted, #999999);
  --shiki-code-property: var(--color-cyan, #0FC8BA);
  --shiki-code-punctuation: var(--text-muted, #999999);
  --shiki-code-string: var(--color-yellow, #ECD91B);
  --shiki-code-value: var(--color-purple, #3E58EB);
  --shiki-gutter-border-color: var(--background-modifier-border, rgb(230, 230, 230));
  --shiki-gutter-text-color: var(--text-faint, #949494);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #999999);
  --shiki-highlight-neutral: var(--shiki-code-normal, #999999);
  --shiki-terminal-dots-color: var(--text-faint, #949494);
  --slider-track-background: var(--background-modifier-border, rgb(230, 230, 230));
  --status-bar-background: var(--background-secondary, #f8f8f8);
  --status-bar-border-color: var(--divider-color, rgb(230, 230, 230));
  --status-bar-text-color: var(--text-muted, #999999);
  --sync-avatar-color-1: var(--color-red, #DC5328);
  --sync-avatar-color-2: var(--color-orange, #FFB522);
  --sync-avatar-color-3: var(--color-yellow, #ECD91B);
  --sync-avatar-color-4: var(--color-green, #5DD400);
  --sync-avatar-color-5: var(--color-cyan, #0FC8BA);
  --sync-avatar-color-6: var(--color-blue, #2AA7EE);
  --sync-avatar-color-7: var(--color-purple, #3E58EB);
  --sync-avatar-color-8: var(--color-pink, #BB72D6);
  --tab-container-background: var(--background-secondary, #f8f8f8);
  --tab-curve: 0px;
  --tab-divider-color: var(--background-modifier-border-hover, transparent);
  --tab-font-size: var(--font-ui-small, 0.84em);
  --tab-outline-color: var(--divider-color, rgb(230, 230, 230));
  --tab-outline-width: var(--border-width, 1px);
  --tab-radius: var(--radius-s, 0.5em);
  --tab-radius-active: var(--radius-s, 0.5em);
  --tab-switcher-background: var(--background-secondary, #f8f8f8);
  --tab-text-color: var(--text-normal, #2f2f2f);
  --tab-text-color-active: var(--text-muted, #999999);
  --tab-text-color-focused: var(--text-muted, #999999);
  --tab-text-color-focused-active: var(--text-muted, #999999);
  --tab-text-color-focused-active-current: var(--color-accent-2, hsl(42, 102%, 57.5%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(45, 100%, 50%));
  --tab-width: 240px;
  --table-add-button-border-color: var(--background-modifier-border, rgb(230, 230, 230));
  --table-border-color: var(--background-modifier-border, rgb(230, 230, 230));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(44, 101%, 53.75%));
  --table-drag-handle-color: var(--text-faint, #949494);
  --table-drag-handle-color-active: var(--text-on-accent, black);
  --table-header-border-color: var(--table-border-color, rgb(230, 230, 230));
  --table-header-color: var(--text-normal, #2f2f2f);
  --table-selection-border-color: var(--interactive-accent, hsl(44, 101%, 53.75%));
  --tag-color: var(--text-accent, hsl(45, 100%, 50%));
  --tag-color-hover: var(--text-accent, hsl(45, 100%, 50%));
  --tag-opacity: 0.25;
  --tag-opacity-hover: 0.2;
  --tag-padding-x: 4px;
  --tag-padding-y: 0px;
  --tag-radius: 5px;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(42, 102%, 57.5%)));
  --text-accent: var(--color-accent, hsl(45, 100%, 50%));
  --text-accent-hover: var(--color-accent-2, hsl(42, 102%, 57.5%));
  --text-error: var(--color-red, #DC5328);
  --text-faint: var(--color-base-50, #949494);
  --text-muted: var(--color-base-70, #999999);
  --text-normal: var(--color-base-100, #2f2f2f);
  --text-on-accent: black;
  --text-success: var(--color-green, #5DD400);
  --text-warning: var(--color-orange, #FFB522);
  --titleFont: var(--font-text-theme, 'Inter');
  --titlebar-background: var(--background-primary, #ffffff);
  --titlebar-background-focused: var(--color-accent-2, hsl(42, 102%, 57.5%));
  --titlebar-border-color: var(--background-modifier-border, rgb(230, 230, 230));
  --titlebar-text-color: var(--text-muted, #999999);
  --titlebar-text-color-focused: var(--text-on-accent, black);
  --toggle-thumb-height: 8px;
  --toggle-thumb-width: 8px;
  --user-icon: '👤';
  --username: 'Guest';
  --vault-profile-color: var(--text-normal, #2f2f2f);
  --vault-profile-color-hover: var(--vault-profile-color, #2f2f2f);
  --workspace-background: linear-gradient(0deg,var(--gradient-1-light), var(--gradient-2-light));
  --quartz-icon-color: currentColor;
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #f8f8f8);
  background-color: var(--tab-container-background, rgb(248, 248, 248));
  color: rgb(47, 47, 47);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  color: rgb(47, 47, 47);
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(248, 248, 248));
  color: rgb(47, 47, 47);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(230, 230, 230);
  border-right-width: 0px;
}

html body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #f8f8f8);
  background-color: var(--tab-container-background, rgb(248, 248, 248));
  border-left-color: rgb(230, 230, 230);
  color: rgb(47, 47, 47);
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: var(--bold-color, rgb(42, 167, 238));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(42, 167, 238) none 0px;
  text-decoration-color: rgb(42, 167, 238);
}

html body .markdown-rendered p > em, html em {
  color: var(--italic-color, rgb(93, 212, 0));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(93, 212, 0) none 0px;
  text-decoration-color: rgb(93, 212, 0);
}

html body .markdown-rendered p > i, html i {
  color: var(--italic-color, rgb(93, 212, 0));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(93, 212, 0) none 0px;
  text-decoration-color: rgb(93, 212, 0);
}

html body .markdown-rendered p > strong, html strong {
  color: var(--bold-color, rgb(42, 167, 238));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(42, 167, 238) none 0px;
  text-decoration-color: rgb(42, 167, 238);
}

html body .text-highlight {
  color: var(--text-normal, rgb(47, 47, 47));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 47, 47) none 0px;
  text-decoration-color: rgb(47, 47, 47);
}

html body del {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 47, 47) none 0px;
  text-decoration-color: rgb(47, 47, 47);
}

html body h1.article-title {
  color: var(--text-normal, rgb(47, 47, 47));
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(148, 148, 148);
  border-radius: 13.3333px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgba(0, 0, 0, 0));
  border-color: rgba(0, 0, 0, 0);
}

html body p {
  color: var(--text-muted, rgb(153, 153, 153));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `html body a.external-link, html footer a {
  color: var(--link-external-color, rgb(255, 191, 0));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 191, 0) none 0px;
  text-decoration: underline rgb(47, 47, 47);
  text-decoration-color: var(--link-color, rgb(47, 47, 47));
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(47, 47, 47));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 47, 47) none 0px;
  text-decoration: underline rgb(47, 47, 47);
  text-decoration-color: var(--link-color, rgb(47, 47, 47));
}

html body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(153, 153, 153));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: underline rgb(47, 47, 47);
  text-decoration-color: var(--link-color, rgb(47, 47, 47));
}`,
    lists: `html body dd {
  color: rgb(47, 47, 47);
}

html body dt {
  color: rgb(47, 47, 47);
}

html body ol > li {
  color: rgb(47, 47, 47);
}

html body ul > li {
  color: rgb(47, 47, 47);
}

html body ul.overflow {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: var(--text-faint, rgb(148, 148, 148));
}

html body blockquote {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}

html body table {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.844px;
}

html body td {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: var(--table-text-color, rgb(47, 47, 47));
}

html body th {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: var(--table-header-color, rgb(47, 47, 47));
}`,
    code: `html body code {
  background-color: var(--code-background, rgb(238, 238, 238));
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: var(--code-normal, rgb(47, 47, 47));
}

html body pre:has(> code) {
  background-color: var(--code-background, rgb(238, 238, 238));
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}

html body figcaption {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  --code-background: var(--ec-frm-edBg, #eeeeee);
  border-bottom-color: rgb(47, 47, 47);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body img {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}

html body video {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}`,
    embeds: `html body .file-embed {
  background-color: var(--background-primary-alt, rgb(238, 238, 238));
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html body .footnotes {
  border-top-color: rgb(47, 47, 47);
  color: rgb(47, 47, 47);
}

html body .transclude {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(255, 192, 19);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}

html body .transclude-inner {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(148, 148, 148);
  border-bottom-left-radius: 13.3333px;
  border-bottom-right-radius: 13.3333px;
  border-left-color: rgb(148, 148, 148);
  border-right-color: rgb(148, 148, 148);
  border-top-color: rgb(148, 148, 148);
  border-top-left-radius: 13.3333px;
  border-top-right-radius: 13.3333px;
}

html body li.task-list-item[data-task="#"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="$"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="%"] {
  color: rgb(47, 47, 47);
}

html li.task-list-item[data-task="body"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="'"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="+"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task=", html "] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="."] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="0"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="1"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="2"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="3"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="4"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="5"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="6"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="7"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="8"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="9"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task=":"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task=";"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="<"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="="] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="@"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="A"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="B"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="C"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="D"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="E"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="F"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="G"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="H"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="J"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="K"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="L"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="M"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="N"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="O"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="P"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="Q"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="R"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="T"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="U"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="V"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="W"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="X"] {
  color: rgb(153, 153, 153);
  text-decoration-line: none;
}

html body li.task-list-item[data-task="Y"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="Z"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="_"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="\`"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="a"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="e"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="g"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="h"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="j"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="m"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="n"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="o"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="q"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="r"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="s"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="t"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="v"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="x"] {
  color: rgb(153, 153, 153);
  text-decoration-line: none;
}

html body li.task-list-item[data-task="y"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="z"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="|"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="~"] {
  color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(42, 167, 238);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(42, 167, 238);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 181, 34);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(162, 160, 160);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 217, 27);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(15, 200, 186);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(42, 167, 238);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 83, 40);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 83, 40);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 83, 40);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 83, 40);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(42, 167, 238);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 217, 27);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 217, 27);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(62, 88, 235);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 83, 40);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(93, 212, 0);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(93, 212, 0);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(93, 212, 0);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 236, 217, 27;
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout-title {
  --background-modifier-active-hover: hsla(45, 100%, 50%, 0.1);
  --background-modifier-border: rgb(230, 230, 230);
  --background-modifier-border-focus: hsla(0, 0%, 79%);
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: #DC5328;
  --background-modifier-error-hover: #DC5328;
  --background-modifier-error-rgb: 255, 85, 64;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: #5DD400;
  --background-modifier-success-rgb: 93, 212, 0;
  --background-primary: #ffffff;
  --background-primary-alt: #eeeeee;
  --background-secondary: #f8f8f8;
  --background-secondary-alt: #f8f8f8;
  --blockquote-border-color: hsl(44, 101%, 53.75%);
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-color: #2AA7EE;
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 255, 85, 64;
  --callout-color: 236, 217, 27;
  --callout-default: 255, 152, 0;
  --callout-error: 255, 85, 64;
  --callout-example: 62, 88, 235;
  --callout-fail: 255, 85, 64;
  --callout-important: 255, 152, 0;
  --callout-info: 42, 167, 238;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 255, 152, 0;
  --callout-radius: 0.5em;
  --callout-success: 93, 212, 0;
  --callout-summary: 15, 200, 186;
  --callout-tip: 15, 200, 186;
  --callout-title-color: #2f2f2f;
  --callout-title-weight: 600;
  --callout-todo: 62, 88, 235;
  --callout-warning: 255, 152, 0;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 0.5em;
  --canvas-dot-pattern: rgb(230, 230, 230);
  --caret-color: #2f2f2f;
  --checkbox-border-color: #949494;
  --checkbox-border-color-hover: #999999;
  --checkbox-color: transparent;
  --checkbox-color-hover: transparent;
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 0.5em;
  --checkbox-size: 16px;
  --checklist-done-color: #999999;
  --clickable-icon-radius: 0.5em;
  --code-background: #eeeeee;
  --code-border-color: rgb(230, 230, 230);
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #949494;
  --code-function: #ECD91B;
  --code-important: #FFB522;
  --code-keyword: #BB72D6;
  --code-normal: #2f2f2f;
  --code-operator: #DC5328;
  --code-property: #0FC8BA;
  --code-punctuation: #999999;
  --code-radius: 0.5em;
  --code-size: 0.875em;
  --code-string: #5DD400;
  --code-tag: #DC5328;
  --code-value: #3E58EB;
  --collapse-icon-color: #949494;
  --collapse-icon-color-collapsed: hsl(45, 100%, 50%);
  --color-accent: hsl(45, 100%, 50%);
  --color-accent-1: hsl(44, 101%, 53.75%);
  --color-accent-2: hsl(42, 102%, 57.5%);
  --color-accent-hsl: 45, 100%, 50%;
  --divider-color: rgb(230, 230, 230);
  --divider-color-hover: hsl(44, 101%, 53.75%);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #eeeeee;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0px 0px 0px 12px;
  --flair-background: #ffffff;
  --flair-color: #2f2f2f;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-interface: '??', 'Inter', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', 'Inter', 'Arial';
  --font-text: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --gradient-1-dark: rgb(55, 41, 15);
  --gradient-1-light: rgb(255, 248, 153);
  --gradient-2-dark: rgb(149, 116, 59);
  --gradient-2-light: rgb(255, 202, 202);
  --graph-line: #d4d4d4;
  --graph-node: #999999;
  --graph-node-attachment: #ECD91B;
  --graph-node-focused: hsl(45, 100%, 50%);
  --graph-node-tag: #5DD400;
  --graph-node-unresolved: #949494;
  --graph-text: #2f2f2f;
  --h1-bg: 236, 217, 27;
  --h2-bg: 93, 212, 0;
  --h3-bg: 15, 200, 186;
  --h4-bg: 42, 167, 238;
  --h5-bg: 62, 88, 235;
  --h5-line-height: 24px;
  --h6-bg: 187, 114, 214;
  --h6-line-height: 24px;
  --heading-formatting: #949494;
  --heading-spacing: 2.5rem;
  --hr-color: rgb(230, 230, 230);
  --interactive-accent: hsl(44, 101%, 53.75%);
  --interactive-accent-hover: hsl(42, 102%, 57.5%);
  --interactive-accent-hsl: 45, 100%, 50%;
  --interactive-hover: #eeeeee;
  --interactive-normal: #ffffff;
  --italic-color: #5DD400;
  --link-color: #2f2f2f;
  --link-color-hover: #949494;
  --link-external-color: hsl(45, 100%, 50%);
  --link-external-color-hover: hsl(42, 102%, 57.5%);
  --link-unresolved-color: #999999;
  --link-unresolved-decoration-color: #999999;
  --link-weight: 400;
  --list-indent: 1.5em;
  --menu-background: #f8f8f8;
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --raised-shadow: 0 1px 6px rgba(0, 0, 0, 0.015), 0 4px 24px rgba(0, 0, 0, 0.065), 0 0 transparent;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #999999;
  --search-icon-color: #999999;
  --search-result-background: #ffffff;
  --setting-group-heading-color: #2f2f2f;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #eeeeee;
  --setting-items-border-color: rgb(230, 230, 230);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shadow-xs: 0 1px 6px rgba(0, 0, 0, 0.015), 0 4px 24px rgba(0, 0, 0, 0.065), 0 0 transparent;
  --shiki-active-tab-border-color: #999999;
  --shiki-code-background: #eeeeee;
  --shiki-code-block-border-radius: 0.5em;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #949494;
  --shiki-code-function: #5DD400;
  --shiki-code-important: #FFB522;
  --shiki-code-keyword: #BB72D6;
  --shiki-code-normal: #999999;
  --shiki-code-property: #0FC8BA;
  --shiki-code-punctuation: #999999;
  --shiki-code-string: #ECD91B;
  --shiki-code-value: #3E58EB;
  --shiki-gutter-border-color: rgb(230, 230, 230);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #949494;
  --shiki-gutter-text-color-highlight: #999999;
  --shiki-highlight-green: rgba(93, 212, 0, 0.5);
  --shiki-highlight-green-background: rgba(93, 212, 0, 0.1);
  --shiki-highlight-neutral: #999999;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(255, 85, 64, 0.5);
  --shiki-highlight-red-background: rgba(255, 85, 64, 0.1);
  --shiki-terminal-dots-color: #949494;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #DC5328;
  --sync-avatar-color-2: #FFB522;
  --sync-avatar-color-3: #ECD91B;
  --sync-avatar-color-4: #5DD400;
  --sync-avatar-color-5: #0FC8BA;
  --sync-avatar-color-6: #2AA7EE;
  --sync-avatar-color-7: #3E58EB;
  --sync-avatar-color-8: #BB72D6;
  --tab-background-active: #ffffff;
  --tab-divider-color: transparent;
  --tab-font-size: 0.84em;
  --tab-outline-color: rgb(230, 230, 230);
  --tab-outline-width: 1px;
  --tab-radius: 0.5em;
  --tab-radius-active: 0.5em;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #f8f8f8;
  --tab-switcher-menubar-background: linear-gradient(to top, #f8f8f8, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(45, 100%, 50%);
  --tab-text-color: #2f2f2f;
  --tab-text-color-active: #999999;
  --tab-text-color-focused: #999999;
  --tab-text-color-focused-active: #999999;
  --tab-text-color-focused-active-current: hsl(42, 102%, 57.5%);
  --tab-text-color-focused-highlighted: hsl(45, 100%, 50%);
  --table-add-button-border-color: rgb(230, 230, 230);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(236, 217, 27) 25%, #ffffff 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(44, 101%, 53.75%);
  --table-drag-handle-color: #949494;
  --table-drag-handle-color-active: black;
  --table-header-background: transparent;
  --table-header-border-color: rgb(230, 230, 230);
  --table-header-border-width: 1px;
  --table-header-color: #2f2f2f;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(45, 100%, 50%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(44, 101%, 53.75%);
  --table-text-size: 16px;
  --tag-background: hsla(45, 100%, 50%, 0.1);
  --tag-background-hover: hsla(45, 100%, 50%, 0.2);
  --tag-border-color: hsla(45, 100%, 50%, 0.15);
  --tag-border-color-hover: hsla(45, 100%, 50%, 0.15);
  --tag-color: hsl(45, 100%, 50%);
  --tag-color-hover: hsl(45, 100%, 50%);
  --tag-size: 0.875em;
  --text-accent: hsl(45, 100%, 50%);
  --text-accent-hover: hsl(42, 102%, 57.5%);
  --text-error: #DC5328;
  --text-faint: #949494;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #999999;
  --text-normal: #2f2f2f;
  --text-selection: hsla(45, 100%, 50%, 0.2);
  --text-success: #5DD400;
  --text-warning: #FFB522;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(47, 47, 47);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(47, 47, 47);
  border-left-width: 0px;
  border-right-color: rgb(47, 47, 47);
  border-right-width: 0px;
  border-top-color: rgb(47, 47, 47);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--callout-title-color, rgb(47, 47, 47));
  content: "💡";
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: var(--callout-title-size, 16px);
  line-height: var(--line-height-tight, 20.8px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 8px;
  padding-top: 0px;
}

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 15, 200, 186);
  background: rgba(15, 200, 186, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(15, 200, 186, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(15, 200, 186, 0.25);
  border-right-color: rgba(15, 200, 186, 0.25);
  border-top-color: rgba(15, 200, 186, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 236, 217, 27;
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--color-pink-rgb, 187, 114, 214);
  background: rgba(187, 114, 214, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(187, 114, 214, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(187, 114, 214, 0.25);
  border-right-color: rgba(187, 114, 214, 0.25);
  border-top-color: rgba(187, 114, 214, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 236, 217, 27;
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--color-orange-rgb, 255, 152, 0);
  background: rgba(255, 152, 0, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(255, 152, 0, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 152, 0, 0.25);
  border-right-color: rgba(255, 152, 0, 0.25);
  border-top-color: rgba(255, 152, 0, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 236, 217, 27;
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="example"] {
  --callout-color: var(--color-yellow-rgb, 236, 217, 27);
  background: rgba(236, 217, 27, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(236, 217, 27, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(236, 217, 27, 0.25);
  border-right-color: rgba(236, 217, 27, 0.25);
  border-top-color: rgba(236, 217, 27, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 236, 217, 27;
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 255, 85, 64);
  background: rgba(255, 85, 64, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(255, 85, 64, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 85, 64, 0.25);
  border-right-color: rgba(255, 85, 64, 0.25);
  border-top-color: rgba(255, 85, 64, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 236, 217, 27;
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 42, 167, 238);
  background: rgba(42, 167, 238, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(42, 167, 238, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(42, 167, 238, 0.25);
  border-right-color: rgba(42, 167, 238, 0.25);
  border-top-color: rgba(42, 167, 238, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 236, 217, 27;
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="note"] {
  --callout-color: var(--color-yellow-rgb, 236, 217, 27);
  background: rgba(236, 217, 27, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(236, 217, 27, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(236, 217, 27, 0.25);
  border-right-color: rgba(236, 217, 27, 0.25);
  border-top-color: rgba(236, 217, 27, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 236, 217, 27;
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 255, 152, 0);
  background: rgba(255, 152, 0, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(255, 152, 0, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 152, 0, 0.25);
  border-right-color: rgba(255, 152, 0, 0.25);
  border-top-color: rgba(255, 152, 0, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 236, 217, 27;
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--color-blue-rgb, 42, 167, 238);
  background: rgba(42, 167, 238, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(42, 167, 238, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(42, 167, 238, 0.25);
  border-right-color: rgba(42, 167, 238, 0.25);
  border-top-color: rgba(42, 167, 238, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 236, 217, 27;
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 93, 212, 0);
  background: rgba(93, 212, 0, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(93, 212, 0, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(93, 212, 0, 0.25);
  border-right-color: rgba(93, 212, 0, 0.25);
  border-top-color: rgba(93, 212, 0, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 236, 217, 27;
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--color-yellow-rgb, 236, 217, 27);
  background: rgba(236, 217, 27, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(236, 217, 27, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(236, 217, 27, 0.25);
  border-right-color: rgba(236, 217, 27, 0.25);
  border-top-color: rgba(236, 217, 27, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 236, 217, 27;
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 62, 88, 235);
  background: rgba(62, 88, 235, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(62, 88, 235, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(62, 88, 235, 0.25);
  border-right-color: rgba(62, 88, 235, 0.25);
  border-top-color: rgba(62, 88, 235, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 236, 217, 27;
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--color-red-rgb, 255, 85, 64);
  background: rgba(255, 85, 64, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(255, 85, 64, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 85, 64, 0.25);
  border-right-color: rgba(255, 85, 64, 0.25);
  border-top-color: rgba(255, 85, 64, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 236, 217, 27;
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(47, 47, 47));
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(47, 47, 47);
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: var(--text-normal, rgb(47, 47, 47));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html body .search > .search-container > .search-space > * {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 47, 47) none 0px;
  text-decoration-color: rgb(47, 47, 47);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(47, 47, 47);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(47, 47, 47);
  border-bottom-left-radius: 7.5px;
  border-bottom-right-radius: 7.5px;
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  border-top-left-radius: 7.5px;
  border-top-right-radius: 7.5px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(47, 47, 47);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(47, 47, 47);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(47, 47, 47);
  border-bottom-left-radius: 7.5px;
  border-bottom-right-radius: 7.5px;
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  border-top-left-radius: 7.5px;
  border-top-right-radius: 7.5px;
  color: rgb(47, 47, 47);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  border-bottom-left-radius: 7.5px;
  border-bottom-right-radius: 7.5px;
  border-top-left-radius: 7.5px;
  border-top-right-radius: 7.5px;
  color: rgb(47, 47, 47);
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(45, 100%, 50%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(45, 100%, 50%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(45, 100%, 50%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(45, 100%, 50%, 0.15));
  --pill-color: var(--tag-color, hsl(45, 100%, 50%));
  --pill-color-hover: var(--tag-color-hover, hsl(45, 100%, 50%));
  --pill-color-remove: var(--tag-rb-text-light, #BB72D6);
  --pill-color-remove-hover: var(--tag-color-hover, hsl(45, 100%, 50%));
  --pill-padding-x: var(--tag-padding-x, 4px);
  --pill-padding-y: var(--tag-padding-y, 0px);
  --pill-radius: var(--tag-radius, 5px);
  --tag-rb: rgba(var(--color-pink-rgb), var(--tag-opacity));
  --tag-rb-hover: rgba(var(--color-pink-rgb), var(--tag-opacity-hover));
  --tag-rb-text-dark: var(--color-pink, #BB72D6);
  --tag-rb-text-light: var(--color-pink, #BB72D6);
  background-color: var(--tag-rb, rgba(187, 114, 214, 0.25));
  border-bottom-color: rgb(187, 114, 214);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(187, 114, 214);
  border-right-color: rgb(187, 114, 214);
  border-top-color: rgb(187, 114, 214);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal-link.tag-link::before {
  color: rgb(187, 114, 214);
}

html body h1 {
  color: var(--h1-color, rgb(47, 47, 47));
  font-family: var(--h1-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body h1.article-title {
  color: var(--inline-title-color, rgb(47, 47, 47));
  font-size: var(--inline-title-size, 30.888px);
}

html body h2 {
  color: var(--h2-color, rgb(47, 47, 47));
  font-family: var(--h2-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body h2.page-title, html h2.page-title a {
  color: var(--inline-title-color, rgb(47, 47, 47));
  font-family: var(--inline-title-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body h3 {
  color: var(--h3-color, rgb(47, 47, 47));
  font-family: var(--h3-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body h4 {
  color: var(--h4-color, rgb(47, 47, 47));
  font-family: var(--h4-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body h5 {
  color: var(--h5-color, rgb(47, 47, 47));
  font-family: var(--h5-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body h6 {
  color: var(--h6-color, rgb(47, 47, 47));
  font-family: var(--h6-font, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body hr {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-right-width: 0px;
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--color-yellow-rgb, 236, 217, 27);
  border-bottom-color: rgba(236, 217, 27, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(236, 217, 27, 0.25);
  border-right-color: rgba(236, 217, 27, 0.25);
  border-top-color: rgba(236, 217, 27, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html body .nav-files-container {
  background-color: var(--background-primary, rgb(255, 255, 255));
}

html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(47, 47, 47));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(47, 47, 47));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(47, 47, 47);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 7.5px;
  border-bottom-right-radius: 7.5px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 7.5px;
  border-top-right-radius: 7.5px;
  color: var(--icon-color, rgb(153, 153, 153));
}`,
    footer: `html body footer {
  background-color: var(--background-primary, rgb(255, 255, 255));
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: var(--status-bar-text-color, rgb(153, 153, 153));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body footer ul li a {
  color: var(--text-normal, rgb(47, 47, 47));
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  color: rgb(47, 47, 47);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(47, 47, 47));
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}

html body li.section-li > .section .meta {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(47, 47, 47));
}

html body ul.section-ul {
  background-color: var(--background-primary, rgb(255, 255, 255));
  border-bottom-color: rgb(47, 47, 47);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(230, 230, 230);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 7.5px;
  border-bottom-right-radius: 7.5px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 7.5px;
  border-top-right-radius: 7.5px;
  color: var(--icon-color, rgb(153, 153, 153));
}

html body .darkmode svg {
  color: rgb(153, 153, 153);
  stroke: rgb(153, 153, 153);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 6.5px;
  border-bottom-right-radius: 6.5px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 6.5px;
  border-top-right-radius: 6.5px;
  color: rgb(153, 153, 153);
}

html body .breadcrumb-element p {
  color: var(--text-faint, rgb(148, 148, 148));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html body .canvas-node {
  border-color: rgb(47, 47, 47);
}

html body .canvas-node-content {
  color: rgb(47, 47, 47);
}

html body .canvas-node-file {
  color: var(--text-normal, rgb(47, 47, 47));
}

html body .canvas-node-group {
  border-color: rgb(47, 47, 47);
}

html body .canvas-sidebar {
  border-color: rgb(47, 47, 47);
}`,
    bases: `html body .bases-table thead th {
  border-color: rgb(230, 230, 230);
  color: var(--table-header-color, rgb(47, 47, 47));
}`,
    properties: `html body .metadata {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: var(--text-muted, rgb(153, 153, 153));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .note-properties {
  border-color: rgb(230, 230, 230);
}

html body .note-properties-key {
  color: rgb(153, 153, 153);
}

html body .note-properties-row {
  border-color: rgb(153, 153, 153);
}

html body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(45, 100%, 50%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(45, 100%, 50%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(45, 100%, 50%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(45, 100%, 50%, 0.15));
  --pill-color: var(--tag-color, hsl(45, 100%, 50%));
  --pill-color-hover: var(--tag-color-hover, hsl(45, 100%, 50%));
  --pill-color-remove: var(--tag-rb-text-light, #BB72D6);
  --pill-color-remove-hover: var(--tag-color-hover, hsl(45, 100%, 50%));
  --pill-padding-x: var(--tag-padding-x, 4px);
  --pill-padding-y: var(--tag-padding-y, 0px);
  --pill-radius: var(--tag-radius, 5px);
  --tag-rb: rgba(var(--color-pink-rgb), var(--tag-opacity));
  --tag-rb-hover: rgba(var(--color-pink-rgb), var(--tag-opacity-hover));
  --tag-rb-text-dark: var(--color-pink, #BB72D6);
  --tag-rb-text-light: var(--color-pink, #BB72D6);
  background-color: var(--tag-rb, rgba(187, 114, 214, 0.25));
  border-radius: 5px;
  color: var(--tag-rb-text-light, rgb(187, 114, 214));
}

html body .note-properties-value {
  color: rgb(153, 153, 153);
}

html body div#quartz-root {
  color: var(--text-normal, rgb(47, 47, 47));
}

html body ol.overflow {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}`,
    stacked: `html body .stacked-page {
  background-color: var(--background-secondary, rgb(248, 248, 248));
  border-color: rgb(47, 47, 47);
}

html body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html body .stacked-page.active {
  border-color: rgb(47, 47, 47);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  color: rgb(47, 47, 47);
}

html body .navigation-progress {
  background-color: var(--background-primary, rgb(255, 255, 255));
}

html body .page-header h2.page-title {
  color: var(--text-normal, rgb(47, 47, 47));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(47, 47, 47);
}

html body details {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}

html body input[type=text] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: var(--text-normal, rgb(153, 153, 153));
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  background-color: var(--code-background, rgb(238, 238, 238));
  border-bottom-color: rgb(47, 47, 47);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: var(--code-normal, rgb(47, 47, 47));
}

html body progress {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}

html body sub {
  color: rgb(47, 47, 47);
}

html body summary {
  color: rgb(47, 47, 47);
}

html body sup {
  color: rgb(47, 47, 47);
}

html body ul.tags > li {
  --pill-color-remove: var(--tag-rb-text-light, #BB72D6);
  --tag-rb: rgba(var(--color-pink-rgb), var(--tag-opacity));
  --tag-rb-hover: rgba(var(--color-pink-rgb), var(--tag-opacity-hover));
  --tag-rb-text-dark: var(--color-pink, #BB72D6);
  --tag-rb-text-light: var(--color-pink, #BB72D6);
  background-color: var(--tag-rb, rgba(187, 114, 214, 0.25));
  border-bottom-color: rgba(255, 191, 0, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(255, 191, 0, 0.15);
  border-right-color: rgba(255, 191, 0, 0.15);
  border-top-color: rgba(255, 191, 0, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--tag-rb-text-light, rgb(187, 114, 214));
}`,
  },
  classSettings: {
    "oled-style": {
      dark: `.oled-style {
--color-base-00: rgb(0, 0, 0);
}`,
    },
    "accent-red": {
      general: `.accent-red {
--accent-h: 10 !important;
--accent-s: 80% !important;
--accent-l: 58% !important;
--h1-bg: var(--color-red-rgb);
--h2-bg: var(--color-orange-rgb);
--h3-bg: var(--color-yellow-rgb);
--h4-bg: var(--color-green-rgb);
--h5-bg: var(--color-cyan-rgb);
--h6-bg: var(--color-blue-rgb);
--gradient-1-light: rgb(255, 173, 173);
--gradient-2-light:  rgb(255, 212, 144);
--gradient-1-dark:  rgb(110, 90, 49);
--gradient-2-dark:rgb(86, 54, 54);
}

.headings-colored {
--h1-color: var(--color-red);
--h2-color: var(--color-orange);
--h3-color: var(--color-yellow);
--h4-color: var(--color-green);
--h5-color: var(--color-cyan);
--h6-color: var(--color-blue);
}`,
    },
    "accent-orange": {
      general: `.accent-orange {
--accent-h: 32 !important;
--accent-s: 100% !important;
--accent-l: 58% !important;
--h1-bg: var(--color-orange-rgb);
--h2-bg: var(--color-yellow-rgb);
--h3-bg: var(--color-green-rgb);
--h4-bg: var(--color-cyan-rgb);
--h5-bg: var(--color-blue-rgb);
--h6-bg: var(--color-purple-rgb);
--gradient-1-light: rgb(255, 241, 137);
--gradient-2-light:  rgb(255, 185, 119);
--gradient-1-dark:  rgb(74, 54, 36);
--gradient-2-dark:rgb(178, 137, 35);
}

.headings-colored {
--h1-color: var(--color-orange);
--h2-color: var(--color-yellow);
--h3-color: var(--color-green);
--h4-color: var(--color-cyan);
--h5-color: var(--color-blue);
--h6-color: var(--color-purple);
}`,
    },
    "accent-yellow": {
      general: `.accent-yellow {
--accent-h: 45 !important;
--accent-s: 100% !important;
--accent-l: 50% !important;
--text-on-accent: black;
--h1-bg: var(--color-yellow-rgb);
--h2-bg: var(--color-green-rgb);
--h3-bg: var(--color-cyan-rgb);
--h4-bg: var(--color-blue-rgb);
--h5-bg: var(--color-purple-rgb);
--h6-bg: var(--color-pink-rgb);
--gradient-1-light: rgb(255, 248, 153);
--gradient-2-light:  rgb(255, 202, 202);
--gradient-1-dark:  rgb(55, 41, 15);
--gradient-2-dark:rgb(149, 116, 59);
}

.headings-colored {
--h5-color: var(--color-purple);
--h6-color: var(--color-pink);
--h1-color: var(--color-yellow);
--h2-color: var(--color-green);
--h3-color: var(--color-cyan);
--h4-color: var(--color-blue);
}`,
    },
    "accent-green": {
      general: `.accent-green {
--accent-h: 86 !important;
--accent-s: 63% !important;
--accent-l: 50% !important;
--h1-bg: var(--color-green-rgb);
--h2-bg: var(--color-cyan-rgb);
--h3-bg: var(--color-blue-rgb);
--h4-bg: var(--color-purple-rgb);
--h5-bg: var(--color-pink-rgb);
--h6-bg: var(--color-red-rgb);
--gradient-2-light: rgb(224, 255, 84);
--gradient-1-light:  rgb(100, 176, 129);
--gradient-1-dark:  rgb(97, 110, 49);
--gradient-2-dark:rgb(54, 86, 70);
}

.headings-colored {
--h1-color: var(--color-green);
--h2-color: var(--color-cyan);
--h3-color: var(--color-blue);
--h4-color: var(--color-purple);
--h5-color: var(--color-pink);
--h6-color: var(--color-red);
}`,
    },
    "accent-cyan": {
      general: `.accent-cyan {
--accent-h: 171 !important;
--accent-s: 46% !important;
--accent-l: 60% !important;
--h1-bg: var(--color-cyan-rgb);
--h2-bg: var(--color-green-rgb);
--h3-bg: var(--color-yellow-rgb);
--h4-bg: var(--color-orange-rgb);
--h5-bg: var(--color-red-rgb);
--h6-bg: var(--color-pink-rgb);
--gradient-1-light: rgb(152, 218, 228);
--gradient-2-light:  rgb(200, 255, 230);
--gradient-1-dark:  rgb(49, 94, 110);
--gradient-2-dark:rgb(54, 86, 74);
}

.headings-colored {
--h5-color: var(--color-red);
--h4-color: var(--color-orange);
--h3-color: var(--color-yellow);
--h2-color: var(--color-green);
--h1-color: var(--color-cyan);
--h6-color: var(--color-pink);
}`,
    },
    "accent-blue": {
      general: `.accent-blue {
--accent-h: 206 !important;
--accent-s: 80% !important;
--accent-l: 62% !important;
--h1-bg: var(--color-blue-rgb);
--h2-bg: var(--color-cyan-rgb);
--h3-bg: var(--color-green-rgb);
--h4-bg: var(--color-yellow-rgb);
--h5-bg: var(--color-orange-rgb);
--gradient-1-light: rgb(147, 201, 244);
--gradient-2-light:  rgb(237, 251, 255);
--gradient-1-dark:  rgb(8, 32, 57);
--gradient-2-dark:rgb(46, 82, 121);
--h6-bg: var(--color-red-rgb);
}

.headings-colored {
--h6-color: var(--color-red);
--h5-color: var(--color-orange);
--h4-color: var(--color-yellow);
--h3-color: var(--color-green);
--h2-color: var(--color-cyan);
--h1-color: var(--color-blue);
}`,
    },
    "accent-purple": {
      general: `.accent-purple {
--accent-h: 226 !important;
--accent-s: 78% !important;
--accent-l: 57% !important;
--gradient-1-light: rgb(70, 106, 251);
--gradient-2-light:  rgb(137, 226, 255);
--gradient-1-dark:  rgb(23, 26, 48);
--gradient-2-dark:rgb(63, 76, 160);
}

.accent-purple {
--h1-bg: var(--color-purple-rgb);
--h2-bg: var(--color-pink-rgb);
--h3-bg: var(--color-red-rgb);
--h4-bg: var(--color-orange-rgb);
--h5-bg: var(--color-yellow-rgb);
--h6-bg: var(--color-green-rgb);
}

.headings-colored {
--h3-color: var(--color-red);
--h4-color: var(--color-orange);
--h5-color: var(--color-yellow);
--h6-color: var(--color-green);
--h1-color: var(--color-purple);
--h2-color: var(--color-pink);
}`,
    },
    "accent-pink": {
      general: `.accent-pink {
--accent-h: 274 !important;
--accent-s: 60% !important;
--accent-l: 62% !important;
--h1-bg: var(--color-pink-rgb);
--h2-bg: var(--color-purple-rgb);
--h3-bg: var(--color-blue-rgb);
--h4-bg: var(--color-cyan-rgb);
--h5-bg: var(--color-green-rgb);
--h6-bg: var(--color-yellow-rgb);
--gradient-1-light: rgb(255, 208, 120);
--gradient-2-light:  rgb(246, 211, 255);
--gradient-1-dark:  rgb(53, 49, 110);
--gradient-2-dark:rgb(86, 54, 80);
}

.headings-colored {
--h2-color: var(--color-purple);
--h1-color: var(--color-pink);
--h6-color: var(--color-yellow);
--h5-color: var(--color-green);
--h4-color: var(--color-cyan);
--h3-color: var(--color-blue);
}`,
    },
    "gradient-bg": {
      general: `.gradient-bg .workspace, .gradient-bg .workspace-split.mod-horizontal.mod-sidedock.mod-left-split, .gradient-bg .workspace-split.mod-root {
background: var(--workspace-background);
}

.gradient-bg .workspace-leaf {
border-radius: var(--radius-m);
margin: auto;
background-color: transparent !important;
max-width: 92%;
max-height: 95%;
}

.custom-transparency .nav-header, .custom-transparency .nav-files-container, .custom-transparency .workspace-leaf {
background-color: transparent !important;
}

.gradient-bg {
--icon-color: var(--text-normal);
}

.gradient-bg .workspace-leaf-content[data-type=markdown] {
max-width: var(--file-line-width);
margin: auto;
border-radius: var(--radius-l);
}

.gradient-bg .workspace-sidedock-vault-profile {
background-color: transparent !important;
}

.gradient-bg .workspace-tab-header-container {
height: 50px;
margin-bottom: -10px;
}

.gradient-bg .workspace-tab-header, .gradient-bg .workspace-tab-header.is-active {
height: 2.5em;
padding: 0 0.7em 0 0.7em !important;
}

.gradient-bg .workspace-ribbon.side-dock.mod-left::before, .gradient-bg .workspace-ribbon {
background-color: transparent;
}

.tree-item-icon.c .gradient-bg .workspace-split.mod-horizontal {
left: 0;
height: 94%;
margin: auto;
border-radius: var(--radius-m);
background-color: var(--background-primary);
}

.gradient-bg .workspace-ribbon.mod-left::before {
background-color: transparent;
}`,
      dark: `.custom-transparency {
/* make borders more visible against a transparent background */
--background-modifier-border: rgba(255,255,255,0.17) !important;
}

.custom-transparency .workspace-leaf-content, .custom-transparency .view-content, .custom-transparency .view-header {
background-color: rgba(1, 1, 1,var(--page-transparency-custom)) !important;
}`,
      light: `.gradient-bg {
/* make borders more visible against a transparent background */
--background-modifier-border: rgba(1,1,1,0.2) !important;
}

.custom-transparency .workspace-leaf-content, .custom-transparency .view-content, .custom-transparency .view-header {
background-color: rgba(255, 255, 255,var(--page-transparency-custom)) !important;
}`,
    },
    "custom-transparency": {
      general: `.gradient-bg.custom-transparency .nav-header, .gradient-bg.custom-transparency .nav-files-container, .gradient-bg.custom-transparency .workspace-leaf {
background-color: transparent !important;
}`,
      dark: `.gradient-bg.custom-transparency {
/* make borders more visible against a transparent background */
--background-modifier-border: rgba(255,255,255,0.17) !important;
}

.gradient-bg.custom-transparency .workspace-leaf-content, .gradient-bg.custom-transparency .view-content, .gradient-bg.custom-transparency .view-header {
background-color: rgba(1, 1, 1,var(--page-transparency-custom)) !important;
}`,
      light: `.gradient-bg.custom-transparency .workspace-leaf-content, .gradient-bg.custom-transparency .view-content, .gradient-bg.custom-transparency .view-header {
background-color: rgba(255, 255, 255,var(--page-transparency-custom)) !important;
}`,
    },
    "headings-colored": {
      general: `.headings-colored, .accent-purple.headings-colored {
--h3-color: var(--color-red);
--h4-color: var(--color-orange);
--h5-color: var(--color-yellow);
--h6-color: var(--color-green);
--h1-color: var(--color-purple);
--h2-color: var(--color-pink);
}

.accent-red.headings-colored {
--h1-color: var(--color-red);
--h2-color: var(--color-orange);
--h3-color: var(--color-yellow);
--h4-color: var(--color-green);
--h5-color: var(--color-cyan);
--h6-color: var(--color-blue);
}

.accent-green.headings-colored {
--h1-color: var(--color-green);
--h2-color: var(--color-cyan);
--h3-color: var(--color-blue);
--h4-color: var(--color-purple);
--h5-color: var(--color-pink);
--h6-color: var(--color-red);
}

.accent-orange.headings-colored {
--h1-color: var(--color-orange);
--h2-color: var(--color-yellow);
--h3-color: var(--color-green);
--h4-color: var(--color-cyan);
--h5-color: var(--color-blue);
--h6-color: var(--color-purple);
}

.accent-yellow.headings-colored {
--h5-color: var(--color-purple);
--h6-color: var(--color-pink);
--h1-color: var(--color-yellow);
--h2-color: var(--color-green);
--h3-color: var(--color-cyan);
--h4-color: var(--color-blue);
}

.accent-cyan.headings-colored {
--h5-color: var(--color-red);
--h4-color: var(--color-orange);
--h3-color: var(--color-yellow);
--h2-color: var(--color-green);
--h1-color: var(--color-cyan);
--h6-color: var(--color-pink);
}

.accent-blue.headings-colored {
--h6-color: var(--color-red);
--h5-color: var(--color-orange);
--h4-color: var(--color-yellow);
--h3-color: var(--color-green);
--h2-color: var(--color-cyan);
--h1-color: var(--color-blue);
}

.accent-pink.headings-colored {
--h2-color: var(--color-purple);
--h1-color: var(--color-pink);
--h6-color: var(--color-yellow);
--h5-color: var(--color-green);
--h4-color: var(--color-cyan);
--h3-color: var(--color-blue);
}`,
    },
    "headings-bland": {
      general: `.headings-blander {
--h1-bg: inherit;
--h2-bg: inherit;
--h3-bg: inherit;
--h4-bg: inherit;
--h5-bg: inherit;
--h6-bg: inherit;
--h6-color: inherit;
--h5-color: inherit;
--h4-color: inherit;
--h3-color: inherit;
--h2-color: inherit;
--h1-color: inherit;
}

.headings-bland h1, .headings-bland .HyperMD-header-1 {
color: rgba(var(--h1-bg), 100%);
background-color: transparent;
}

.headings-bland h2, .headings-bland .HyperMD-header-2 {
color: rgba(var(--h2-bg), 100%);
background-color: transparent;
}

.headings-bland h3, .headings-bland .HyperMD-header-3 {
color: rgba(var(--h3-bg), 100%);
background-color: transparent;
}

.headings-bland h4, .headings-bland .HyperMD-header-4 {
background-color: transparent;
color: rgba(var(--h4-bg), 100%);
}

.headings-bland h5, .headings-bland .HyperMD-header-5 {
background-color: transparent;
color: rgba(var(--h5-bg), 100%);
}

.headings-bland h6, .headings-bland .HyperMD-header-6 {
background-color: transparent;
color: rgba(var(--h6-bg), 100%);
}`,
    },
    "headings-blander": {
      general: `.headings-blander {
--h1-bg: inherit;
--h2-bg: inherit;
--h3-bg: inherit;
--h4-bg: inherit;
--h5-bg: inherit;
--h6-bg: inherit;
--h6-color: inherit;
--h5-color: inherit;
--h4-color: inherit;
--h3-color: inherit;
--h2-color: inherit;
--h1-color: inherit;
}`,
    },
    "checkbox-modern": {
      general: `.checkbox-modern {
--checkbox-color: var(--color-blue);
--checkbox-color-hover: var(--color-blue);
--checkbox-size: calc(var(--font-text-size) + 0.1em)
;
}

.checkbox-modern input[type=checkbox]:checked:after {
background-color: white;
transform: scale(0.8);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 36'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='3.5' d='m6.5 17l6 6l13-13'/%3E%3C/svg%3E");
}`,
    },
    "hide-settings-descriptions": {
      general: `.hide-settings-descriptions .setting-item-description {
opacity: 0;
}

.hide-settings-descriptions .setting-item:hover .setting-item-description {
opacity: 1;
}

.hide-settings-descriptions .setting-item:not(:hover) .setting-item-description {
position: absolute;
width: 0px;
height: 0px;
overflow: hidden;
}`,
    },
  },
};
