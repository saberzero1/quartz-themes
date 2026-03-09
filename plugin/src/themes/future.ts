import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "future",
    modes: ["light", "light"],
    variations: [],
    fonts: [],
  },
  dark: {},
  light: {
    base: `:root:root {
  --accent-h: 45;
  --accent-l: 50%;
  --accent-s: 100%;
  --background-modifier-active-hover: rgba(255, 191, 0, 0.1);
  --background-modifier-border: rgb(230, 230, 230);
  --background-modifier-border-focus: rgba(201, 201, 201, 0);
  --background-modifier-error: #DC5328;
  --background-modifier-error-hover: #DC5328;
  --background-modifier-error-rgb: 255, 85, 64;
  --background-modifier-success: #5DD400;
  --background-modifier-success-rgb: 93, 212, 0;
  --background-primary-alt: #eeeeee;
  --background-secondary: #f8f8f8;
  --background-secondary-alt: #f8f8f8;
  --bases-cards-cover-background: #eeeeee;
  --bases-cards-shadow: 0 0 0 1px rgb(230, 230, 230);
  --bases-embed-border-color: rgb(230, 230, 230);
  --bases-embed-border-radius: 0.5em;
  --bases-group-heading-property-color: #999999;
  --bases-table-border-color: rgb(230, 230, 230);
  --bases-table-cell-background-disabled: #eeeeee;
  --bases-table-cell-background-selected: rgba(255, 191, 0, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgba(201, 201, 201, 0);
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(44, 101%, 53.75%);
  --bases-table-container-border-radius: 0.5em;
  --bases-table-group-background: #eeeeee;
  --bases-table-header-color: #999999;
  --blockquote-border-color: hsl(44, 101%, 53.75%);
  --bold-color: #2AA7EE;
  --callout-bug: 255, 85, 64;
  --callout-default: 255, 152, 0;
  --callout-error: 255, 85, 64;
  --callout-example: 62, 88, 235;
  --callout-fail: 255, 85, 64;
  --callout-important: 255, 152, 0;
  --callout-info: 42, 167, 238;
  --callout-opacity: 0.22;
  --callout-question: 255, 152, 0;
  --callout-radius: 0.5em;
  --callout-success: 93, 212, 0;
  --callout-summary: 15, 200, 186;
  --callout-tip: 15, 200, 186;
  --callout-title-color: #2f2f2f;
  --callout-todo: 62, 88, 235;
  --callout-warning: 255, 152, 0;
  --canvas-card-label-color: #949494;
  --canvas-color-1: 255, 85, 64;
  --canvas-color-2: 255, 152, 0;
  --canvas-color-3: 236, 217, 27;
  --canvas-color-4: 93, 212, 0;
  --canvas-color-5: 15, 200, 186;
  --canvas-color-6: 62, 88, 235;
  --canvas-controls-radius: 0.5em;
  --canvas-dot-pattern: rgb(230, 230, 230);
  --caret-color: #2f2f2f;
  --checkbox-border-color: #949494;
  --checkbox-border-color-hover: #999999;
  --checkbox-color: transparent;
  --checkbox-color-hover: transparent;
  --checkbox-radius: 0.5em;
  --checklist-done-color: #999999;
  --checklist-done-decoration: none;
  --clickable-icon-radius: 0.5em;
  --code-background: #eeeeee;
  --code-border-color: rgb(230, 230, 230);
  --code-comment: #949494;
  --code-function: #ECD91B;
  --code-important: #FFB522;
  --code-keyword: #BB72D6;
  --code-normal: #2f2f2f;
  --code-operator: #DC5328;
  --code-property: #0FC8BA;
  --code-punctuation: #999999;
  --code-radius: 0.5em;
  --code-string: #5DD400;
  --code-tag: #DC5328;
  --code-value: #3E58EB;
  --collapse-icon-color: #949494;
  --collapse-icon-color-collapsed: rgb(255, 191, 0);
  --color-accent: rgb(255, 191, 0);
  --color-accent-1: hsl(44, 101%, 53.75%);
  --color-accent-2: hsl(42, 102%, 57.5%);
  --color-accent-hsl: 45, 100%, 50%;
  --color-base-05: #f8f8f8;
  --color-base-10: #eeeeee;
  --color-base-100: #2f2f2f;
  --color-base-20: #f8f8f8;
  --color-base-25: #f2f2f2;
  --color-base-30: rgb(230, 230, 230);
  --color-base-40: rgba(201, 201, 201, 0);
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
  --divider-color: rgb(230, 230, 230);
  --divider-color-hover: hsl(44, 101%, 53.75%);
  --divider-width: 0px;
  --dropdown-background-hover: #eeeeee;
  --dropdown-padding: 0px 0px 0px 12px;
  --embed-block-shadow-hover: 0 0 0 1px rgb(230, 230, 230), inset 0 0 0 1px rgb(230, 230, 230);
  --embed-border-start: 2px solid hsl(44, 101%, 53.75%);
  --file-header-font: '??', 'Inter', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-line-width: 820px;
  --flair-color: #2f2f2f;
  --folder-description: 'Collection';
  --folder-icon: '📁';
  --font-interface: '??', 'Inter', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: 'Inter';
  --font-mermaid: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', 'Inter', 'Arial';
  --font-text: '??', 'Inter', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'Inter';
  --footnote-divider-color: rgb(230, 230, 230);
  --footnote-id-color: #999999;
  --footnote-id-color-no-occurrences: #949494;
  --footnote-line-height: 24px;
  --footnote-radius: 0.5em;
  --gradient-1-dark: rgb(55, 41, 15);
  --gradient-1-light: rgb(255, 248, 153);
  --gradient-2-dark: rgb(149, 116, 59);
  --gradient-2-light: rgb(255, 202, 202);
  --graph-node: #999999;
  --graph-node-attachment: #ECD91B;
  --graph-node-focused: rgb(255, 191, 0);
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
  --heading-opacity: 0.2;
  --heading-radius: 4px;
  --hr-color: rgb(230, 230, 230);
  --icon-color: #999999;
  --icon-color-active: rgb(255, 191, 0);
  --icon-color-focused: #2f2f2f;
  --icon-color-hover: #999999;
  --inline-title-color: #2f2f2f;
  --inline-title-size: calc(1.618em + 5px);
  --input-date-separator: #949494;
  --input-placeholder-color: #949494;
  --interactive-accent: hsl(44, 101%, 53.75%);
  --interactive-accent-hover: hsl(42, 102%, 57.5%);
  --interactive-accent-hsl: 45, 100%, 50%;
  --interactive-hover: #eeeeee;
  --italic-color: #5DD400;
  --line-height-normal: 24px;
  --link-color: #2f2f2f;
  --link-color-hover: #949494;
  --link-external-color: rgb(255, 191, 0);
  --link-external-color-hover: hsl(42, 102%, 57.5%);
  --link-unresolved-color: #999999;
  --link-unresolved-decoration-color: #999999;
  --list-bullet-size: 0.35em;
  --list-indent: 1.5em;
  --list-marker-color: #2f2f2f;
  --list-marker-color-collapsed: rgb(255, 191, 0);
  --list-marker-color-hover: #999999;
  --list-spacing: 0.2em;
  --menu-background: #f8f8f8;
  --metadata-border-color: rgb(230, 230, 230);
  --metadata-divider-color: rgb(230, 230, 230);
  --metadata-input-font: '??', 'Inter', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #2f2f2f;
  --metadata-label-font: '??', 'Inter', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #999999;
  --metadata-label-text-color-hover: #999999;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgba(201, 201, 201, 0);
  --modal-border-color: rgba(201, 201, 201, 0);
  --modal-height: 650px;
  --modal-max-height: calc(100% - 48px);
  --modal-width: calc(100% - 32px);
  --nav-collapse-icon-color: #949494;
  --nav-collapse-icon-color-collapsed: #949494;
  --nav-heading-color: #2f2f2f;
  --nav-heading-color-collapsed: #949494;
  --nav-heading-color-collapsed-hover: #999999;
  --nav-heading-color-hover: #2f2f2f;
  --nav-item-background-selected: rgba(255, 191, 0, 0.15);
  --nav-item-color: #2f2f2f;
  --nav-item-color-active: #2f2f2f;
  --nav-item-color-highlighted: rgb(255, 191, 0);
  --nav-item-color-hover: #2f2f2f;
  --nav-item-color-selected: #2f2f2f;
  --nav-item-radius: 0.5em;
  --nav-tag-color: #949494;
  --nav-tag-color-active: #999999;
  --nav-tag-color-hover: #999999;
  --nav-tag-radius: 0.5em;
  --note-description: 'Note';
  --note-icon: '📝';
  --page-transparency-custom: 1;
  --pill-border-color: rgb(230, 230, 230);
  --pill-color: #999999;
  --pill-color-hover: #2f2f2f;
  --pill-color-remove: #949494;
  --pill-color-remove-hover: rgb(255, 191, 0);
  --prompt-border-color: rgba(201, 201, 201, 0);
  --radius-s: 0.5em;
  --ribbon-background: #eeeeee;
  --ribbon-background-collapsed: transparent;
  --ribbon-width: 74px;
  --search-clear-button-color: #999999;
  --search-icon-color: #999999;
  --setting-group-heading-color: #2f2f2f;
  --setting-items-background: #eeeeee;
  --setting-items-border-color: rgb(230, 230, 230);
  --settings-core-plugins: url('data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjQiIGZpbGw9IiMzRTU4RUIiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS41IDguNUM1LjUgNy4xMTkyOSA2LjYxOTI5IDYgOCA2SDE2QzE3LjM4MDcgNiAxOC41IDcuMTE5MjkgMTguNSA4LjVDMTguNSA5Ljg4MDcxIDE3LjM4MDcgMTEgMTYgMTFIOEM2LjYxOTI5IDExIDUuNSA5Ljg4MDcxIDUuNSA4LjVaTTkuNSA4LjVDOS41IDkuMDUyMjggOS4wNTIyOCA5LjUgOC41IDkuNUM3Ljk0NzcyIDkuNSA3LjUgOS4wNTIyOCA3LjUgOC41QzcuNSA3Ljk0NzcyIDcuOTQ3NzIgNy41IDguNSA3LjVDOS4wNTIyOCA3LjUgOS41IDcuOTQ3NzIgOS41IDguNVpNNS41IDE1LjVDNS41IDE0LjExOTMgNi42MTkyOSAxMyA4IDEzSDE2QzE3LjM4MDcgMTMgMTguNSAxNC4xMTkzIDE4LjUgMTUuNUMxOC41IDE2Ljg4MDcgMTcuMzgwNyAxOCAxNiAxOEg4QzYuNjE5MjkgMTggNS41IDE2Ljg4MDcgNS41IDE1LjVaTTkuNSAxNS41QzkuNSAxNi4wNTIzIDkuMDUyMjggMTYuNSA4LjUgMTYuNUM3Ljk0NzcyIDE2LjUgNy41IDE2LjA1MjMgNy41IDE1LjVDNy41IDE0Ljk0NzcgNy45NDc3MiAxNC41IDguNSAxNC41QzkuMDUyMjggMTQuNSA5LjUgMTQuOTQ3NyA5LjUgMTUuNVoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg==');
  --settings-options: url('data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjQiIGZpbGw9IiMwRkM4QkEiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNSA3LjVDNSA3Ljc3NjE0IDUuMjIzODYgOCA1LjUgOEgxOC41QzE4Ljc3NjEgOCAxOSA3Ljc3NjE0IDE5IDcuNUMxOSA3LjIyMzg2IDE4Ljc3NjEgNyAxOC41IDdINS41QzUuMjIzODYgNyA1IDcuMjIzODYgNSA3LjVaTTUuNSAxMi41QzUuMjIzODYgMTIuNSA1IDEyLjI3NjEgNSAxMkM1IDExLjcyMzkgNS4yMjM4NiAxMS41IDUuNSAxMS41SDE4LjVDMTguNzc2MSAxMS41IDE5IDExLjcyMzkgMTkgMTJDMTkgMTIuMjc2MSAxOC43NzYxIDEyLjUgMTguNSAxMi41SDUuNVpNNS41IDE3QzUuMjIzODYgMTcgNSAxNi43NzYxIDUgMTYuNUM1IDE2LjIyMzkgNS4yMjM4NiAxNiA1LjUgMTZIMTguNUMxOC43NzYxIDE2IDE5IDE2LjIyMzkgMTkgMTYuNUMxOSAxNi43NzYxIDE4Ljc3NjEgMTcgMTguNSAxN0g1LjVaIiBmaWxsPSJ3aGl0ZSIvPg0KPHJlY3QgeD0iMTIuNSIgeT0iMTguMjUiIHdpZHRoPSIzLjUiIGhlaWdodD0iMy41IiByeD0iMS43NSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDEyLjUgMTguMjUpIiBmaWxsPSIjMEZDOEJBIiBzdHJva2U9IndoaXRlIi8+DQo8cmVjdCB4PSI4IiB5PSIxMy43NSIgd2lkdGg9IjMuNSIgaGVpZ2h0PSIzLjUiIHJ4PSIxLjc1IiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgOCAxMy43NSkiIGZpbGw9IiMwRkM4QkEiIHN0cm9rZT0id2hpdGUiLz4NCjxyZWN0IHg9IjEyLjUiIHk9IjkuMjUiIHdpZHRoPSIzLjUiIGhlaWdodD0iMy41IiByeD0iMS43NSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDEyLjUgOS4yNSkiIGZpbGw9IiMwRkM4QkEiIHN0cm9rZT0id2hpdGUiLz4NCjwvc3ZnPg0K');
  --settings-plugins: url('data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjQiIGZpbGw9IiMyQUE3RUUiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNSAxMi4yMDkyQzE0Ljk2NTkgMTEuNjE1OSAxNiAxMC4xNzg3IDE2IDguNUMxNiA2LjI5MDg2IDE0LjIwOTEgNC41IDEyIDQuNUM5Ljc5MDg2IDQuNSA4IDYuMjkwODYgOCA4LjVDOCAxMC4xNzg3IDkuMDM0MDggMTEuNjE1OSAxMC41IDEyLjIwOTJWMTcuOTgwNUwxMiAxOS41TDEzLjUgMTcuOTgwNVYxNy4yMzI1TDEyLjM3NSAxNi4xMTA0TDEzLjUgMTQuOTg4M0wxMi4zNzUgMTMuODY2MkwxMy41IDEyLjc0NDJWMTIuMjA5MlpNMTMuMjUgNy43NUMxMy4yNSA4LjQ0MDM2IDEyLjY5MDQgOSAxMiA5QzExLjMwOTYgOSAxMC43NSA4LjQ0MDM2IDEwLjc1IDcuNzVDMTAuNzUgNy4wNTk2NCAxMS4zMDk2IDYuNSAxMiA2LjVDMTIuNjkwNCA2LjUgMTMuMjUgNy4wNTk2NCAxMy4yNSA3Ljc1WiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K');
  --slider-track-background: rgb(230, 230, 230);
  --status-bar-background: #f8f8f8;
  --status-bar-border-color: rgb(230, 230, 230);
  --status-bar-text-color: #999999;
  --sync-avatar-color-1: #DC5328;
  --sync-avatar-color-2: #FFB522;
  --sync-avatar-color-3: #ECD91B;
  --sync-avatar-color-4: #5DD400;
  --sync-avatar-color-5: #0FC8BA;
  --sync-avatar-color-6: #2AA7EE;
  --sync-avatar-color-7: #3E58EB;
  --sync-avatar-color-8: #BB72D6;
  --tab-container-background: #f8f8f8;
  --tab-curve: 0px;
  --tab-divider-color: transparent;
  --tab-font-size: 0.84em;
  --tab-outline-color: rgb(230, 230, 230);
  --tab-radius: 0.5em;
  --tab-radius-active: 0.5em;
  --tab-switcher-background: #f8f8f8;
  --tab-switcher-menubar-background: linear-gradient(to top, #f8f8f8, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(255, 191, 0);
  --tab-text-color: #2f2f2f;
  --tab-text-color-active: #999999;
  --tab-text-color-focused: #999999;
  --tab-text-color-focused-active: #999999;
  --tab-text-color-focused-active-current: hsl(42, 102%, 57.5%);
  --tab-text-color-focused-highlighted: rgb(255, 191, 0);
  --tab-width: 240px;
  --table-add-button-border-color: rgb(230, 230, 230);
  --table-border-color: rgb(230, 230, 230);
  --table-drag-handle-background-active: hsl(44, 101%, 53.75%);
  --table-drag-handle-color: #949494;
  --table-drag-handle-color-active: black;
  --table-header-border-color: rgb(230, 230, 230);
  --table-header-color: #2f2f2f;
  --table-selection: rgba(255, 191, 0, 0.1);
  --table-selection-border-color: hsl(44, 101%, 53.75%);
  --tag-background: rgba(255, 191, 0, 0.1);
  --tag-background-hover: rgba(255, 191, 0, 0.2);
  --tag-border-color: rgba(255, 191, 0, 0.15);
  --tag-border-color-hover: rgba(255, 191, 0, 0.15);
  --tag-color: rgb(255, 191, 0);
  --tag-color-hover: rgb(255, 191, 0);
  --tag-opacity: 0.25;
  --tag-opacity-hover: 0.2;
  --tag-padding-x: 4px;
  --tag-padding-y: 0px;
  --tag-radius: 5px;
  --text-accent: rgb(255, 191, 0);
  --text-accent-hover: hsl(42, 102%, 57.5%);
  --text-error: #DC5328;
  --text-faint: #949494;
  --text-muted: #999999;
  --text-normal: #2f2f2f;
  --text-on-accent: black;
  --text-selection: rgba(255, 191, 0, 0.2);
  --text-success: #5DD400;
  --text-warning: #FFB522;
  --titlebar-background: #ffffff;
  --titlebar-background-focused: hsl(42, 102%, 57.5%);
  --titlebar-border-color: rgb(230, 230, 230);
  --titlebar-text-color: #999999;
  --titlebar-text-color-focused: black;
  --toggle-thumb-height: 8px;
  --toggle-thumb-width: 8px;
  --user-icon: '👤';
  --username: 'Guest';
  --vault-profile-color: #2f2f2f;
  --vault-profile-color-hover: #2f2f2f;
  --workspace-background: linear-gradient(0deg,rgb(255, 248, 153), rgb(255, 202, 202));
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(248, 248, 248);
  color: rgb(47, 47, 47);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(47, 47, 47);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 248, 248);
  color: rgb(47, 47, 47);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(230, 230, 230);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(248, 248, 248);
  border-left-color: rgb(230, 230, 230);
  color: rgb(47, 47, 47);
}

body div#quartz-root {
  color: rgb(47, 47, 47);
}`,
    typography: `body .page article p > b, b {
  color: rgb(42, 167, 238);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(42, 167, 238) none 0px;
  text-decoration: rgb(42, 167, 238);
  text-decoration-color: rgb(42, 167, 238);
}

body .page article p > em, em {
  color: rgb(93, 212, 0);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(93, 212, 0) none 0px;
  text-decoration: rgb(93, 212, 0);
  text-decoration-color: rgb(93, 212, 0);
}

body .page article p > i, i {
  color: rgb(93, 212, 0);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(93, 212, 0) none 0px;
  text-decoration: rgb(93, 212, 0);
  text-decoration-color: rgb(93, 212, 0);
}

body .page article p > strong, strong {
  color: rgb(42, 167, 238);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(42, 167, 238) none 0px;
  text-decoration: rgb(42, 167, 238);
  text-decoration-color: rgb(42, 167, 238);
}

body .text-highlight {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 47, 47) none 0px;
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body del {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 47, 47) none 0px;
  text-decoration: line-through rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body p {
  color: rgb(153, 153, 153);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 191, 0);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 191, 0) none 0px;
  text-decoration: underline rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 47, 47) none 0px;
  text-decoration: underline rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body a.internal.broken {
  color: rgb(153, 153, 153);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: underline rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}`,
    lists: `body dd {
  color: rgb(47, 47, 47);
}

body dt {
  color: rgb(47, 47, 47);
}

body ol > li {
  color: rgb(47, 47, 47);
}

body ol.overflow {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}

body ul > li {
  color: rgb(47, 47, 47);
}

body ul.overflow {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(148, 148, 148);
  text-decoration: rgb(148, 148, 148);
}

body blockquote {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}

body table {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.844px;
}

body td {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(47, 47, 47);
}

body th {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(47, 47, 47);
}`,
    code: `body code {
  border-bottom-color: rgb(47, 47, 47);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(47, 47, 47);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(238, 238, 238);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(238, 238, 238);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(47, 47, 47);
}

body pre > code > [data-line] {
  border-left-color: rgb(236, 217, 27);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(236, 217, 27);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(236, 217, 27);
  border-left-color: rgb(236, 217, 27);
  border-right-color: rgb(236, 217, 27);
  border-top-color: rgb(236, 217, 27);
}

body pre > code, pre:has(> code) {
  background-color: rgb(238, 238, 238);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre:has(> code) {
  background-color: rgb(238, 238, 238);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `body audio {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}

body figcaption {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}

body img {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}

body video {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}`,
    embeds: `body .file-embed {
  background-color: rgb(238, 238, 238);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body .footnotes {
  border-top-color: rgb(47, 47, 47);
  color: rgb(47, 47, 47);
}

body .transclude {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(255, 192, 19);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}

body .transclude-inner {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(255, 192, 19);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

body input[type=checkbox] {
  border-bottom-color: rgb(148, 148, 148);
  border-bottom-left-radius: 13.3333px;
  border-bottom-right-radius: 13.3333px;
  border-left-color: rgb(148, 148, 148);
  border-right-color: rgb(148, 148, 148);
  border-top-color: rgb(148, 148, 148);
  border-top-left-radius: 13.3333px;
  border-top-right-radius: 13.3333px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body li.task-list-item[data-task='*'] {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body li.task-list-item[data-task='-'] {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body li.task-list-item[data-task='/'] {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body li.task-list-item[data-task='>'] {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body li.task-list-item[data-task='?'] {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body li.task-list-item[data-task='I'] {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body li.task-list-item[data-task='S'] {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body li.task-list-item[data-task='b'] {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body li.task-list-item[data-task='c'] {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body li.task-list-item[data-task='d'] {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body li.task-list-item[data-task='f'] {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body li.task-list-item[data-task='i'] {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body li.task-list-item[data-task='k'] {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body li.task-list-item[data-task='l'] {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body li.task-list-item[data-task='p'] {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body li.task-list-item[data-task='u'] {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body li.task-list-item[data-task='w'] {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}

body .callout[data-callout="abstract"] {
  --callout-color: 15, 200, 186;
  background-color: rgba(15, 200, 186, 0.22);
  border-bottom-color: rgba(15, 200, 186, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(15, 200, 186, 0.25);
  border-right-color: rgba(15, 200, 186, 0.25);
  border-top-color: rgba(15, 200, 186, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  --callout-color: 187, 114, 214;
  background-color: rgba(187, 114, 214, 0.22);
  border-bottom-color: rgba(187, 114, 214, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(187, 114, 214, 0.25);
  border-right-color: rgba(187, 114, 214, 0.25);
  border-top-color: rgba(187, 114, 214, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  --callout-color: 255, 152, 0;
  background-color: rgba(255, 152, 0, 0.22);
  border-bottom-color: rgba(255, 152, 0, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 152, 0, 0.25);
  border-right-color: rgba(255, 152, 0, 0.25);
  border-top-color: rgba(255, 152, 0, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  --callout-color: 236, 217, 27;
  background-color: rgba(236, 217, 27, 0.22);
  border-bottom-color: rgba(236, 217, 27, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(236, 217, 27, 0.25);
  border-right-color: rgba(236, 217, 27, 0.25);
  border-top-color: rgba(236, 217, 27, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  --callout-color: 255, 85, 64;
  background-color: rgba(255, 85, 64, 0.22);
  border-bottom-color: rgba(255, 85, 64, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 85, 64, 0.25);
  border-right-color: rgba(255, 85, 64, 0.25);
  border-top-color: rgba(255, 85, 64, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  --callout-color: 42, 167, 238;
  background-color: rgba(42, 167, 238, 0.22);
  border-bottom-color: rgba(42, 167, 238, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(42, 167, 238, 0.25);
  border-right-color: rgba(42, 167, 238, 0.25);
  border-top-color: rgba(42, 167, 238, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  --callout-color: 236, 217, 27;
  background-color: rgba(236, 217, 27, 0.22);
  border-bottom-color: rgba(236, 217, 27, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(236, 217, 27, 0.25);
  border-right-color: rgba(236, 217, 27, 0.25);
  border-top-color: rgba(236, 217, 27, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  --callout-color: 255, 152, 0;
  background-color: rgba(255, 152, 0, 0.22);
  border-bottom-color: rgba(255, 152, 0, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 152, 0, 0.25);
  border-right-color: rgba(255, 152, 0, 0.25);
  border-top-color: rgba(255, 152, 0, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  --callout-color: 42, 167, 238;
  background-color: rgba(42, 167, 238, 0.22);
  border-bottom-color: rgba(42, 167, 238, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(42, 167, 238, 0.25);
  border-right-color: rgba(42, 167, 238, 0.25);
  border-top-color: rgba(42, 167, 238, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  --callout-color: 93, 212, 0;
  background-color: rgba(93, 212, 0, 0.22);
  border-bottom-color: rgba(93, 212, 0, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(93, 212, 0, 0.25);
  border-right-color: rgba(93, 212, 0, 0.25);
  border-top-color: rgba(93, 212, 0, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  --callout-color: 236, 217, 27;
  background-color: rgba(236, 217, 27, 0.22);
  border-bottom-color: rgba(236, 217, 27, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(236, 217, 27, 0.25);
  border-right-color: rgba(236, 217, 27, 0.25);
  border-top-color: rgba(236, 217, 27, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  --callout-color: 62, 88, 235;
  background-color: rgba(62, 88, 235, 0.22);
  border-bottom-color: rgba(62, 88, 235, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(62, 88, 235, 0.25);
  border-right-color: rgba(62, 88, 235, 0.25);
  border-top-color: rgba(62, 88, 235, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 85, 64;
  background-color: rgba(255, 85, 64, 0.22);
  border-bottom-color: rgba(255, 85, 64, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 85, 64, 0.25);
  border-right-color: rgba(255, 85, 64, 0.25);
  border-top-color: rgba(255, 85, 64, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(47, 47, 47);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

body .search > .search-container > .search-space > * {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 47, 47) none 0px;
  text-decoration: rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(47, 47, 47);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(47, 47, 47);
  border-bottom-left-radius: 7.5px;
  border-bottom-right-radius: 7.5px;
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  border-top-left-radius: 7.5px;
  border-top-right-radius: 7.5px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(47, 47, 47);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(47, 47, 47);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(201, 201, 201);
  border-left-color: rgb(201, 201, 201);
  border-right-color: rgb(201, 201, 201);
  border-top-color: rgb(201, 201, 201);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(248, 248, 248);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 7.5px;
  border-bottom-right-radius: 7.5px;
  border-top-left-radius: 7.5px;
  border-top-right-radius: 7.5px;
  color: rgb(47, 47, 47);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(187, 114, 214, 0.25);
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

body a.internal.tag-link::before {
  color: rgb(187, 114, 214);
}

body h1 {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  --callout-color: 236, 217, 27;
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
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(47, 47, 47);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(47, 47, 47);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 7.5px;
  border-bottom-right-radius: 7.5px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 7.5px;
  border-top-right-radius: 7.5px;
  color: rgb(153, 153, 153);
}`,
    footer: `body footer {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(153, 153, 153);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  color: rgb(47, 47, 47);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}

body li.section-li > .section .meta {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(47, 47, 47);
  text-decoration: rgb(47, 47, 47);
}

body ul.section-ul {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(47, 47, 47);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(230, 230, 230);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 7.5px;
  border-bottom-right-radius: 7.5px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 7.5px;
  border-top-right-radius: 7.5px;
  color: rgb(153, 153, 153);
}

body .darkmode svg {
  color: rgb(153, 153, 153);
  stroke: rgb(153, 153, 153);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgb(148, 148, 148);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  color: rgb(47, 47, 47);
}

body .metadata {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(153, 153, 153);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

body .page-header h2.page-title {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(47, 47, 47);
  text-decoration: underline dotted rgb(47, 47, 47);
}

body details {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}

body input[type=text] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(238, 238, 238);
  border-bottom-color: rgb(47, 47, 47);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(47, 47, 47);
}

body progress {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}

body sub {
  color: rgb(47, 47, 47);
}

body summary {
  color: rgb(47, 47, 47);
}

body sup {
  color: rgb(47, 47, 47);
}`,
  },
};
