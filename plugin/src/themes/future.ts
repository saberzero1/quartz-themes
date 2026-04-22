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
  --accent-h: 45 !important;
  --accent-l: 50% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: hsla(45, 100%, 50%, 0.1) !important;
  --background-modifier-border: rgb(230, 230, 230) !important;
  --background-modifier-border-focus: hsla(0, 0%, 79%) !important;
  --background-modifier-error: #DC5328 !important;
  --background-modifier-error-hover: #DC5328 !important;
  --background-modifier-error-rgb: 255, 85, 64 !important;
  --background-modifier-success: #5DD400 !important;
  --background-modifier-success-rgb: 93, 212, 0 !important;
  --background-primary-alt: #eeeeee !important;
  --background-secondary: #f8f8f8 !important;
  --background-secondary-alt: #f8f8f8 !important;
  --bases-cards-cover-background: #eeeeee !important;
  --bases-cards-shadow: 0 0 0 1px rgb(230, 230, 230) !important;
  --bases-embed-border-color: rgb(230, 230, 230) !important;
  --bases-embed-border-radius: 0.5em !important;
  --bases-group-heading-property-color: #999999 !important;
  --bases-table-border-color: rgb(230, 230, 230) !important;
  --bases-table-cell-background-disabled: #eeeeee !important;
  --bases-table-cell-background-selected: hsla(45, 100%, 50%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsla(0, 0%, 79%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(44, 101%, 53.75%) !important;
  --bases-table-container-border-radius: 0.5em !important;
  --bases-table-group-background: #eeeeee !important;
  --bases-table-header-color: #999999 !important;
  --blockquote-border-color: hsl(44, 101%, 53.75%) !important;
  --bodyFont: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #2AA7EE !important;
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
  --canvas-card-label-color: #949494 !important;
  --canvas-color-1: 255, 85, 64 !important;
  --canvas-color-2: 255, 152, 0 !important;
  --canvas-color-3: 236, 217, 27 !important;
  --canvas-color-4: 93, 212, 0 !important;
  --canvas-color-5: 15, 200, 186 !important;
  --canvas-color-6: 62, 88, 235 !important;
  --canvas-controls-radius: 0.5em !important;
  --canvas-dot-pattern: rgb(230, 230, 230) !important;
  --caret-color: #2f2f2f !important;
  --checkbox-border-color: #949494 !important;
  --checkbox-border-color-hover: #999999 !important;
  --checkbox-color: transparent !important;
  --checkbox-color-hover: transparent !important;
  --checkbox-radius: 0.5em !important;
  --checklist-done-color: #999999 !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 0.5em !important;
  --code-background: #eeeeee !important;
  --code-border-color: rgb(230, 230, 230) !important;
  --code-comment: #949494 !important;
  --code-function: #ECD91B !important;
  --code-important: #FFB522 !important;
  --code-keyword: #BB72D6 !important;
  --code-normal: #2f2f2f !important;
  --code-operator: #DC5328 !important;
  --code-property: #0FC8BA !important;
  --code-punctuation: #999999 !important;
  --code-radius: 0.5em !important;
  --code-string: #5DD400 !important;
  --code-tag: #DC5328 !important;
  --code-value: #3E58EB !important;
  --codeFont: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #949494 !important;
  --collapse-icon-color-collapsed: hsl(45, 100%, 50%) !important;
  --color-accent: hsl(45, 100%, 50%) !important;
  --color-accent-1: hsl(44, 101%, 53.75%) !important;
  --color-accent-2: hsl(42, 102%, 57.5%) !important;
  --color-accent-hsl: 45, 100%, 50% !important;
  --color-base-05: #f8f8f8 !important;
  --color-base-10: #eeeeee !important;
  --color-base-100: #2f2f2f !important;
  --color-base-20: #f8f8f8 !important;
  --color-base-25: #f2f2f2 !important;
  --color-base-30: rgb(230, 230, 230) !important;
  --color-base-40: hsla(0, 0%, 79%) !important;
  --color-base-50: #a2a0a0 !important;
  --color-base-60: #7b7b7b !important;
  --color-base-70: #999999 !important;
  --color-blue: #2AA7EE !important;
  --color-blue-rgb: 42, 167, 238 !important;
  --color-cyan: #0FC8BA !important;
  --color-cyan-rgb: 15, 200, 186 !important;
  --color-green: #5DD400 !important;
  --color-green-rgb: 93, 212, 0 !important;
  --color-orange: #FFB522 !important;
  --color-orange-rgb: 255, 152, 0 !important;
  --color-pink: #BB72D6 !important;
  --color-pink-rgb: 187, 114, 214 !important;
  --color-purple: #3E58EB !important;
  --color-purple-rgb: 62, 88, 235 !important;
  --color-red: #DC5328 !important;
  --color-red-rgb: 255, 85, 64 !important;
  --color-yellow: #ECD91B !important;
  --color-yellow-rgb: 236, 217, 27 !important;
  --dark: #2f2f2f !important;
  --darkgray: #2f2f2f !important;
  --divider-color: rgb(230, 230, 230) !important;
  --divider-color-hover: hsl(44, 101%, 53.75%) !important;
  --divider-width: 0px !important;
  --dropdown-background-hover: #eeeeee !important;
  --dropdown-padding: 0px 0px 0px 12px !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(230, 230, 230), inset 0 0 0 1px rgb(230, 230, 230) !important;
  --embed-border-start: 2px solid hsl(44, 101%, 53.75%) !important;
  --file-header-font: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-line-width: 820px !important;
  --flair-color: #2f2f2f !important;
  --folder-description: 'Collection' !important;
  --folder-icon: '📁' !important;
  --font-interface: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: 'Inter' !important;
  --font-mermaid: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: Inter, Arial' !important;
  --font-text: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'Inter' !important;
  --footnote-divider-color: rgb(230, 230, 230) !important;
  --footnote-id-color: #999999 !important;
  --footnote-id-color-no-occurrences: #949494 !important;
  --footnote-line-height: 24px !important;
  --footnote-radius: 0.5em !important;
  --gradient-1-dark: rgb(55, 41, 15) !important;
  --gradient-1-light: rgb(255, 248, 153) !important;
  --gradient-2-dark: rgb(149, 116, 59) !important;
  --gradient-2-light: rgb(255, 202, 202) !important;
  --graph-node: #999999 !important;
  --graph-node-attachment: #ECD91B !important;
  --graph-node-focused: hsl(45, 100%, 50%) !important;
  --graph-node-tag: #5DD400 !important;
  --graph-node-unresolved: #949494 !important;
  --graph-text: #2f2f2f !important;
  --gray: #999999 !important;
  --h1-bg: 236, 217, 27 !important;
  --h2-bg: 93, 212, 0 !important;
  --h3-bg: 15, 200, 186 !important;
  --h4-bg: 42, 167, 238 !important;
  --h5-bg: 62, 88, 235 !important;
  --h5-line-height: 24px !important;
  --h6-bg: 187, 114, 214 !important;
  --h6-line-height: 24px !important;
  --headerFont: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #949494 !important;
  --heading-opacity: 0.2 !important;
  --heading-radius: 4px !important;
  --highlight: hsla(45, 100%, 50%, 0.1) !important;
  --hr-color: rgb(230, 230, 230) !important;
  --icon-color: #999999 !important;
  --icon-color-active: hsl(45, 100%, 50%) !important;
  --icon-color-focused: #2f2f2f !important;
  --icon-color-hover: #999999 !important;
  --inline-title-color: #2f2f2f !important;
  --inline-title-size: calc(1.618em + 5px) !important;
  --input-date-separator: #949494 !important;
  --input-placeholder-color: #949494 !important;
  --interactive-accent: hsl(44, 101%, 53.75%) !important;
  --interactive-accent-hover: hsl(42, 102%, 57.5%) !important;
  --interactive-accent-hsl: 45, 100%, 50% !important;
  --interactive-hover: #eeeeee !important;
  --italic-color: #5DD400 !important;
  --light: #eeeeee !important;
  --lightgray: #f8f8f8 !important;
  --line-height-normal: 24px !important;
  --link-color: #2f2f2f !important;
  --link-color-hover: #949494 !important;
  --link-external-color: hsl(45, 100%, 50%) !important;
  --link-external-color-hover: hsl(42, 102%, 57.5%) !important;
  --link-unresolved-color: #999999 !important;
  --link-unresolved-decoration-color: #999999 !important;
  --list-bullet-size: 0.35em !important;
  --list-indent: 1.5em !important;
  --list-marker-color: #2f2f2f !important;
  --list-marker-color-collapsed: hsl(45, 100%, 50%) !important;
  --list-marker-color-hover: #999999 !important;
  --list-spacing: 0.2em !important;
  --menu-background: #f8f8f8 !important;
  --metadata-border-color: rgb(230, 230, 230) !important;
  --metadata-divider-color: rgb(230, 230, 230) !important;
  --metadata-input-font: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #2f2f2f !important;
  --metadata-label-font: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #999999 !important;
  --metadata-label-text-color-hover: #999999 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsla(0, 0%, 79%) !important;
  --modal-border-color: hsla(0, 0%, 79%) !important;
  --modal-height: 650px !important;
  --modal-max-height: calc(100% - 48px) !important;
  --modal-width: calc(100% - 32px) !important;
  --nav-collapse-icon-color: #949494 !important;
  --nav-collapse-icon-color-collapsed: #949494 !important;
  --nav-heading-color: #2f2f2f !important;
  --nav-heading-color-collapsed: #949494 !important;
  --nav-heading-color-collapsed-hover: #999999 !important;
  --nav-heading-color-hover: #2f2f2f !important;
  --nav-item-background-selected: hsla(45, 100%, 50%, 0.15) !important;
  --nav-item-color: #2f2f2f !important;
  --nav-item-color-active: #2f2f2f !important;
  --nav-item-color-highlighted: hsl(45, 100%, 50%) !important;
  --nav-item-color-hover: #2f2f2f !important;
  --nav-item-color-selected: #2f2f2f !important;
  --nav-item-radius: 0.5em !important;
  --nav-tag-color: #949494 !important;
  --nav-tag-color-active: #999999 !important;
  --nav-tag-color-hover: #999999 !important;
  --nav-tag-radius: 0.5em !important;
  --note-description: 'Note' !important;
  --note-icon: '📝' !important;
  --page-transparency-custom: 1 !important;
  --pill-border-color: rgb(230, 230, 230) !important;
  --pill-color: #999999 !important;
  --pill-color-hover: #2f2f2f !important;
  --pill-color-remove: #949494 !important;
  --pill-color-remove-hover: hsl(45, 100%, 50%) !important;
  --prompt-border-color: hsla(0, 0%, 79%) !important;
  --radius-s: 0.5em !important;
  --ribbon-background: #eeeeee !important;
  --ribbon-background-collapsed: transparent !important;
  --ribbon-width: 74px !important;
  --search-clear-button-color: #999999 !important;
  --search-icon-color: #999999 !important;
  --secondary: hsl(45, 100%, 50%) !important;
  --setting-group-heading-color: #2f2f2f !important;
  --setting-items-background: #eeeeee !important;
  --setting-items-border-color: rgb(230, 230, 230) !important;
  --settings-core-plugins: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjQiIGZpbGw9IiMzRTU4RUIiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS41IDguNUM1LjUgNy4xMTkyOSA2LjYxOTI5IDYgOCA2SDE2QzE3LjM4MDcgNiAxOC41IDcuMTE5MjkgMTguNSA4LjVDMTguNSA5Ljg4MDcxIDE3LjM4MDcgMTEgMTYgMTFIOEM2LjYxOTI5IDExIDUuNSA5Ljg4MDcxIDUuNSA4LjVaTTkuNSA4LjVDOS41IDkuMDUyMjggOS4wNTIyOCA5LjUgOC41IDkuNUM3Ljk0NzcyIDkuNSA3LjUgOS4wNTIyOCA3LjUgOC41QzcuNSA3Ljk0NzcyIDcuOTQ3NzIgNy41IDguNSA3LjVDOS4wNTIyOCA3LjUgOS41IDcuOTQ3NzIgOS41IDguNVpNNS41IDE1LjVDNS41IDE0LjExOTMgNi42MTkyOSAxMyA4IDEzSDE2QzE3LjM4MDcgMTMgMTguNSAxNC4xMTkzIDE4LjUgMTUuNUMxOC41IDE2Ljg4MDcgMTcuMzgwNyAxOCAxNiAxOEg4QzYuNjE5MjkgMTggNS41IDE2Ljg4MDcgNS41IDE1LjVaTTkuNSAxNS41QzkuNSAxNi4wNTIzIDkuMDUyMjggMTYuNSA4LjUgMTYuNUM3Ljk0NzcyIDE2LjUgNy41IDE2LjA1MjMgNy41IDE1LjVDNy41IDE0Ljk0NzcgNy45NDc3MiAxNC41IDguNSAxNC41QzkuMDUyMjggMTQuNSA5LjUgMTQuOTQ3NyA5LjUgMTUuNVoiIGZpbGw9IndoaXRlIi8+DQo8L3N2Zz4NCg==") !important;
  --settings-options: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjQiIGZpbGw9IiMwRkM4QkEiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNSA3LjVDNSA3Ljc3NjE0IDUuMjIzODYgOCA1LjUgOEgxOC41QzE4Ljc3NjEgOCAxOSA3Ljc3NjE0IDE5IDcuNUMxOSA3LjIyMzg2IDE4Ljc3NjEgNyAxOC41IDdINS41QzUuMjIzODYgNyA1IDcuMjIzODYgNSA3LjVaTTUuNSAxMi41QzUuMjIzODYgMTIuNSA1IDEyLjI3NjEgNSAxMkM1IDExLjcyMzkgNS4yMjM4NiAxMS41IDUuNSAxMS41SDE4LjVDMTguNzc2MSAxMS41IDE5IDExLjcyMzkgMTkgMTJDMTkgMTIuMjc2MSAxOC43NzYxIDEyLjUgMTguNSAxMi41SDUuNVpNNS41IDE3QzUuMjIzODYgMTcgNSAxNi43NzYxIDUgMTYuNUM1IDE2LjIyMzkgNS4yMjM4NiAxNiA1LjUgMTZIMTguNUMxOC43NzYxIDE2IDE5IDE2LjIyMzkgMTkgMTYuNUMxOSAxNi43NzYxIDE4Ljc3NjEgMTcgMTguNSAxN0g1LjVaIiBmaWxsPSJ3aGl0ZSIvPg0KPHJlY3QgeD0iMTIuNSIgeT0iMTguMjUiIHdpZHRoPSIzLjUiIGhlaWdodD0iMy41IiByeD0iMS43NSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDEyLjUgMTguMjUpIiBmaWxsPSIjMEZDOEJBIiBzdHJva2U9IndoaXRlIi8+DQo8cmVjdCB4PSI4IiB5PSIxMy43NSIgd2lkdGg9IjMuNSIgaGVpZ2h0PSIzLjUiIHJ4PSIxLjc1IiB0cmFuc2Zvcm09InJvdGF0ZSgtOTAgOCAxMy43NSkiIGZpbGw9IiMwRkM4QkEiIHN0cm9rZT0id2hpdGUiLz4NCjxyZWN0IHg9IjEyLjUiIHk9IjkuMjUiIHdpZHRoPSIzLjUiIGhlaWdodD0iMy41IiByeD0iMS43NSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDEyLjUgOS4yNSkiIGZpbGw9IiMwRkM4QkEiIHN0cm9rZT0id2hpdGUiLz4NCjwvc3ZnPg0K") !important;
  --settings-plugins: url("data:image/svg+xmlbase64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgcng9IjQiIGZpbGw9IiMyQUE3RUUiLz4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMuNSAxMi4yMDkyQzE0Ljk2NTkgMTEuNjE1OSAxNiAxMC4xNzg3IDE2IDguNUMxNiA2LjI5MDg2IDE0LjIwOTEgNC41IDEyIDQuNUM5Ljc5MDg2IDQuNSA4IDYuMjkwODYgOCA4LjVDOCAxMC4xNzg3IDkuMDM0MDggMTEuNjE1OSAxMC41IDEyLjIwOTJWMTcuOTgwNUwxMiAxOS41TDEzLjUgMTcuOTgwNVYxNy4yMzI1TDEyLjM3NSAxNi4xMTA0TDEzLjUgMTQuOTg4M0wxMi4zNzUgMTMuODY2MkwxMy41IDEyLjc0NDJWMTIuMjA5MlpNMTMuMjUgNy43NUMxMy4yNSA4LjQ0MDM2IDEyLjY5MDQgOSAxMiA5QzExLjMwOTYgOSAxMC43NSA4LjQ0MDM2IDEwLjc1IDcuNzVDMTAuNzUgNy4wNTk2NCAxMS4zMDk2IDYuNSAxMiA2LjVDMTIuNjkwNCA2LjUgMTMuMjUgNy4wNTk2NCAxMy4yNSA3Ljc1WiIgZmlsbD0id2hpdGUiLz4NCjwvc3ZnPg0K") !important;
  --slider-track-background: rgb(230, 230, 230) !important;
  --status-bar-background: #f8f8f8 !important;
  --status-bar-border-color: rgb(230, 230, 230) !important;
  --status-bar-text-color: #999999 !important;
  --sync-avatar-color-1: #DC5328 !important;
  --sync-avatar-color-2: #FFB522 !important;
  --sync-avatar-color-3: #ECD91B !important;
  --sync-avatar-color-4: #5DD400 !important;
  --sync-avatar-color-5: #0FC8BA !important;
  --sync-avatar-color-6: #2AA7EE !important;
  --sync-avatar-color-7: #3E58EB !important;
  --sync-avatar-color-8: #BB72D6 !important;
  --tab-container-background: #f8f8f8 !important;
  --tab-curve: 0px !important;
  --tab-divider-color: transparent !important;
  --tab-font-size: 0.84em !important;
  --tab-outline-color: rgb(230, 230, 230) !important;
  --tab-radius: 0.5em !important;
  --tab-radius-active: 0.5em !important;
  --tab-switcher-background: #f8f8f8 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f8f8f8, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(45, 100%, 50%) !important;
  --tab-text-color: #2f2f2f !important;
  --tab-text-color-active: #999999 !important;
  --tab-text-color-focused: #999999 !important;
  --tab-text-color-focused-active: #999999 !important;
  --tab-text-color-focused-active-current: hsl(42, 102%, 57.5%) !important;
  --tab-text-color-focused-highlighted: hsl(45, 100%, 50%) !important;
  --tab-width: 240px !important;
  --table-add-button-border-color: rgb(230, 230, 230) !important;
  --table-border-color: rgb(230, 230, 230) !important;
  --table-drag-handle-background-active: hsl(44, 101%, 53.75%) !important;
  --table-drag-handle-color: #949494 !important;
  --table-drag-handle-color-active: black !important;
  --table-header-border-color: rgb(230, 230, 230) !important;
  --table-header-color: #2f2f2f !important;
  --table-selection: hsla(45, 100%, 50%, 0.1) !important;
  --table-selection-border-color: hsl(44, 101%, 53.75%) !important;
  --tag-background: hsla(45, 100%, 50%, 0.1) !important;
  --tag-background-hover: hsla(45, 100%, 50%, 0.2) !important;
  --tag-border-color: hsla(45, 100%, 50%, 0.15) !important;
  --tag-border-color-hover: hsla(45, 100%, 50%, 0.15) !important;
  --tag-color: hsl(45, 100%, 50%) !important;
  --tag-color-hover: hsl(45, 100%, 50%) !important;
  --tag-opacity: 0.25 !important;
  --tag-opacity-hover: 0.2 !important;
  --tag-padding-x: 4px !important;
  --tag-padding-y: 0px !important;
  --tag-radius: 5px !important;
  --tertiary: hsl(42, 102%, 57.5%) !important;
  --text-accent: hsl(45, 100%, 50%) !important;
  --text-accent-hover: hsl(42, 102%, 57.5%) !important;
  --text-error: #DC5328 !important;
  --text-faint: #949494 !important;
  --text-muted: #999999 !important;
  --text-normal: #2f2f2f !important;
  --text-on-accent: black !important;
  --text-selection: hsla(45, 100%, 50%, 0.2) !important;
  --text-success: #5DD400 !important;
  --text-warning: #FFB522 !important;
  --textHighlight: hsla(45, 100%, 50%, 0.1) !important;
  --titleFont: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #ffffff !important;
  --titlebar-background-focused: hsl(42, 102%, 57.5%) !important;
  --titlebar-border-color: rgb(230, 230, 230) !important;
  --titlebar-text-color: #999999 !important;
  --titlebar-text-color-focused: black !important;
  --toggle-thumb-height: 8px !important;
  --toggle-thumb-width: 8px !important;
  --user-icon: '👤' !important;
  --username: 'Guest' !important;
  --vault-profile-color: #2f2f2f !important;
  --vault-profile-color-hover: #2f2f2f !important;
  --workspace-background: linear-gradient(0deg,rgb(255, 248, 153), rgb(255, 202, 202)) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(248, 248, 248);
  color: rgb(47, 47, 47);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  color: rgb(47, 47, 47);
}

html body .bases-table thead th {
  border-color: rgb(230, 230, 230);
  color: rgb(47, 47, 47);
}

html body .canvas-node {
  border-color: rgb(47, 47, 47);
}

html body .canvas-node-content {
  color: rgb(47, 47, 47);
}

html body .canvas-node-file {
  color: rgb(47, 47, 47);
}

html body .canvas-node-group {
  border-color: rgb(47, 47, 47);
}

html body .canvas-sidebar {
  border-color: rgb(47, 47, 47);
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
  background-color: rgba(187, 114, 214, 0.25);
  border-radius: 5px;
  color: rgb(187, 114, 214);
}

html body .note-properties-value {
  color: rgb(153, 153, 153);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 248, 248);
  color: rgb(47, 47, 47);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(230, 230, 230);
  border-right-width: 0px;
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(248, 248, 248);
  border-left-color: rgb(230, 230, 230);
  color: rgb(47, 47, 47);
}

html body div#quartz-root {
  color: rgb(47, 47, 47);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(42, 167, 238);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(42, 167, 238) none 0px;
  text-decoration-color: rgb(42, 167, 238);
}

html body .page article p > em, html em {
  color: rgb(93, 212, 0);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(93, 212, 0) none 0px;
  text-decoration-color: rgb(93, 212, 0);
}

html body .page article p > i, html i {
  color: rgb(93, 212, 0);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(93, 212, 0) none 0px;
  text-decoration-color: rgb(93, 212, 0);
}

html body .page article p > strong, html strong {
  color: rgb(42, 167, 238);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(42, 167, 238) none 0px;
  text-decoration-color: rgb(42, 167, 238);
}

html body .text-highlight {
  color: rgb(47, 47, 47);
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
  color: rgb(47, 47, 47);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(148, 148, 148);
  border-radius: 13.3333px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}

html body p {
  color: rgb(153, 153, 153);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `html body a.external, html footer a {
  color: rgb(255, 191, 0);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 191, 0) none 0px;
  text-decoration: underline rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(47, 47, 47) none 0px;
  text-decoration: underline rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
}

html body a.internal.broken {
  color: rgb(153, 153, 153);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: underline rgb(47, 47, 47);
  text-decoration-color: rgb(47, 47, 47);
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

html body ol.overflow {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
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
  color: rgb(148, 148, 148);
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
  color: rgb(47, 47, 47);
}

html body th {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(47, 47, 47);
}`,
    code: `html body code {
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

html body figure[data-rehype-pretty-code-figure] {
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

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html body pre > code > [data-line] {
  border-left-color: rgb(236, 217, 27);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(236, 217, 27);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(236, 217, 27);
  border-left-color: rgb(236, 217, 27);
  border-right-color: rgb(236, 217, 27);
  border-top-color: rgb(236, 217, 27);
}

html body pre > code, html pre:has(> code) {
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

html body pre:has(> code) {
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
    images: `html body audio {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
}

html body figcaption {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
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
  background-color: rgb(238, 238, 238);
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
  color: rgb(47, 47, 47);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(47, 47, 47);
}

html body .callout > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 15, 200, 186;
  background: rgba(15, 200, 186, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(15, 200, 186, 0.22);
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
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="bug"] {
  --callout-color: 187, 114, 214;
  background: rgba(187, 114, 214, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(187, 114, 214, 0.22);
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
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="danger"] {
  --callout-color: 255, 152, 0;
  background: rgba(255, 152, 0, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 152, 0, 0.22);
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
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="example"] {
  --callout-color: 236, 217, 27;
  background: rgba(236, 217, 27, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(236, 217, 27, 0.22);
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
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="failure"] {
  --callout-color: 255, 85, 64;
  background: rgba(255, 85, 64, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 85, 64, 0.22);
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
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="info"] {
  --callout-color: 42, 167, 238;
  background: rgba(42, 167, 238, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(42, 167, 238, 0.22);
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
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="note"] {
  --callout-color: 236, 217, 27;
  background: rgba(236, 217, 27, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(236, 217, 27, 0.22);
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
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="question"] {
  --callout-color: 255, 152, 0;
  background: rgba(255, 152, 0, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 152, 0, 0.22);
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
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="quote"] {
  --callout-color: 42, 167, 238;
  background: rgba(42, 167, 238, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(42, 167, 238, 0.22);
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
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="success"] {
  --callout-color: 93, 212, 0;
  background: rgba(93, 212, 0, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(93, 212, 0, 0.22);
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
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="tip"] {
  --callout-color: 236, 217, 27;
  background: rgba(236, 217, 27, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(236, 217, 27, 0.22);
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
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="todo"] {
  --callout-color: 62, 88, 235;
  background: rgba(62, 88, 235, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(62, 88, 235, 0.22);
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
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="warning"] {
  --callout-color: 255, 85, 64;
  background: rgba(255, 85, 64, 0.22) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(255, 85, 64, 0.22);
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
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(47, 47, 47);
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(47, 47, 47);
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

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html body a.internal.tag-link::before {
  color: rgb(187, 114, 214);
}

html body h1 {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body hr {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-right-width: 0px;
}`,
    scrollbars: `html body .callout {
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
}`,
    explorer: `html body .explorer {
  background-color: rgb(255, 255, 255);
}

html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(47, 47, 47);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(47, 47, 47);
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
  color: rgb(153, 153, 153);
}`,
    footer: `html body footer {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(153, 153, 153);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body footer ul li a {
  color: rgb(47, 47, 47);
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
  color: rgb(47, 47, 47);
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
  color: rgb(47, 47, 47);
}

html body ul.section-ul {
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
    darkmode: `html body .darkmode {
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
  color: rgb(148, 148, 148);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  color: rgb(47, 47, 47);
}

html body .metadata {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(153, 153, 153);
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

html body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

html body .page-header h2.page-title {
  color: rgb(47, 47, 47);
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
  color: rgb(153, 153, 153);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
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
  background-color: rgba(187, 114, 214, 0.25);
  border-bottom-color: rgba(255, 191, 0, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(255, 191, 0, 0.15);
  border-right-color: rgba(255, 191, 0, 0.15);
  border-top-color: rgba(255, 191, 0, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(187, 114, 214);
}`,
  },
};
