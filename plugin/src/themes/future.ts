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
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
  color: rgb(47, 47, 47);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(47, 47, 47);
}

html body .callout[data-callout="abstract"] {
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

html body .callout[data-callout="bug"] {
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

html body .callout[data-callout="danger"] {
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

html body .callout[data-callout="example"] {
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

html body .callout[data-callout="failure"] {
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

html body .callout[data-callout="info"] {
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

html body .callout[data-callout="note"] {
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

html body .callout[data-callout="question"] {
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

html body .callout[data-callout="quote"] {
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

html body .callout[data-callout="success"] {
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

html body .callout[data-callout="tip"] {
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

html body .callout[data-callout="todo"] {
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

html body .callout[data-callout="warning"] {
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
}

html body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(47, 47, 47);
  border-left-color: rgb(47, 47, 47);
  border-right-color: rgb(47, 47, 47);
  border-top-color: rgb(47, 47, 47);
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
