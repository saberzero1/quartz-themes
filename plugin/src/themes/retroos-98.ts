import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "retroos-98",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["libre-franklin"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 222 !important;
  --accent-l: 19% !important;
  --accent-s: 94% !important;
  --background-modifier-active-hover: hsla(222, 94%, 19%, 0.1) !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.1) !important;
  --background-modifier-cover: rgba(43, 41, 41, 0.4) !important;
  --background-modifier-hover: transparent !important;
  --background-primary: #000000 !important;
  --background-primary-alt: #050505 !important;
  --background-secondary: rgb(64, 64, 64) !important;
  --background-secondary-alt: rgb(64, 64, 64) !important;
  --bases-cards-background: #000000 !important;
  --bases-cards-cover-background: #050505 !important;
  --bases-table-cell-background-active: #000000 !important;
  --bases-table-cell-background-disabled: #050505 !important;
  --bases-table-cell-background-selected: hsla(222, 94%, 19%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(222, 94%, 19%) !important;
  --bases-table-group-background: #050505 !important;
  --bases-table-header-background: #000000 !important;
  --bases-table-header-background-hover: transparent !important;
  --bases-table-summary-background: #000000 !important;
  --bases-table-summary-background-hover: transparent !important;
  --bg-button-light: rgb(128, 128, 128) !important;
  --bg-button-shadow: black !important;
  --blockquote-border-color: hsl(222, 94%, 19%) !important;
  --bodyFont: Win95Font, Inter, Rubik, Segoe UI' !important;
  --callout-blend-mode: darken;
  --canvas-background: #000000 !important;
  --checkbox-color: hsl(222, 94%, 19%) !important;
  --checkbox-color-hover: hsl(221, 94.94%, 19.95%) !important;
  --checkbox-marker-color: #000000 !important;
  --closebutton: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 8 7' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' xmlns:v='https://vecta.io/nano'%3e%3cuse href='%23A' width='8' height='7'/%3e%3cdefs%3e%3cimage id='A' width='8' height='7' href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAOklEQVQImW2OQQ4AMAjCqv//MzssM0jGyaQIlCRxVWwJoA0oIVAd33L4EgjTut3wqxiDx65NnZ256QAPcA8KJ2HN6QAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e") !important;
  --code-background: #050505 !important;
  --code-bracket-background: transparent !important;
  --codeFont: Win95Font, Inter, Rubik, Segoe UI' !important;
  --collapse-icon-color-collapsed: hsl(221, 94.94%, 19.95%) !important;
  --color-accent: hsl(222, 94%, 19%) !important;
  --color-accent-1: hsl(221, 94.94%, 19.95%) !important;
  --color-accent-2: hsl(192, 142.88%, 29.45%) !important;
  --color-accent-hsl: 222, 94%, 19% !important;
  --color-base-00: #000000 !important;
  --color-base-05: rgb(64, 64, 64) !important;
  --color-base-10: #050505 !important;
  --color-base-20: rgb(64, 64, 64) !important;
  --color-opposite-100: #dddddd !important;
  --color-opposite-25: #1c1c1c !important;
  --color-opposite-30: #1f1f1f !important;
  --color-opposite-35: #2b2b2b !important;
  --color-opposite-40: #424242 !important;
  --color-opposite-50: #545454 !important;
  --color-opposite-60: #8f8f8f !important;
  --color-opposite-70: #a3a3a3 !important;
  --divider-color-hover: hsl(222, 94%, 19%) !important;
  --downicon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 18 18' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' xmlns:v='https://vecta.io/nano'%3e%3cuse href='%23A' x='4.5' y='6.75' width='8' height='5'/%3e%3cdefs%3e%3cimage id='A' width='8' height='5' href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAARklEQVQImXXNsRFAUAAE0dOHQAlCgeCHQqUKFSAQasGMPp70G2x4O3PbQP45gw6XNzvaJAkGHJVc0T%2b%2bMGHDgvEziBml3m6nPUz9aFAG8wAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e") !important;
  --embed-border-start: 2px solid hsl(222, 94%, 19%) !important;
  --file-header-background: #000000 !important;
  --file-header-background-focused: #000000 !important;
  --file-header-font: Win95Font, Inter, Rubik, Segoe UI' !important;
  --font-default: 'Win95Font', 'Inter', 'Rubik', 'Segoe UI' !important;
  --font-interface: Win95Font, Inter, Rubik, Segoe UI' !important;
  --font-mermaid: Win95Font, Inter, Rubik, Segoe UI' !important;
  --font-text: Win95Font, Inter, Rubik, Segoe UI' !important;
  --footnote-input-background-active: transparent !important;
  --graph-node-focused: hsl(221, 94.94%, 19.95%) !important;
  --header-height: 35px !important;
  --headerFont: Win95Font, Inter, Rubik, Segoe UI' !important;
  --highlight: transparent !important;
  --highlight-mix-blend-mode: darken !important;
  --icon-color-active: hsl(221, 94.94%, 19.95%) !important;
  --input-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17), 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent !important;
  --interactive-accent: hsl(222, 94%, 19%) !important;
  --interactive-accent-hover: hsl(221, 94.94%, 19.95%) !important;
  --interactive-accent-hsl: 222, 94%, 19% !important;
  --lefticon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 18 18' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' xmlns:v='https://vecta.io/nano'%3e%3cuse href='%23A' x='6.75' y='5.062' width='5' height='8'/%3e%3cdefs%3e%3cimage id='A' width='5' height='8' href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVQImU3MoRHCQBQE0PdvztEYAolIGQgKoBAEkrJi4yggMxuTY%2b7Lt7u/TJfkg7VN8MUd2gRXXKCfk9uA0Vyxz79bVb3wxjawQ1U9k3QsfzyDR5IdvwPUnB2IEQfd7wAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e") !important;
  --light: #000000 !important;
  --lightgray: rgb(64, 64, 64) !important;
  --link-color: hsl(221, 94.94%, 19.95%) !important;
  --link-color-hover: hsl(192, 142.88%, 29.45%) !important;
  --link-external-color: hsl(221, 94.94%, 19.95%) !important;
  --link-external-color-hover: hsl(192, 142.88%, 29.45%) !important;
  --link-unresolved-color: hsl(221, 94.94%, 19.95%) !important;
  --link-unresolved-decoration-color: hsla(222, 94%, 19%, 0.3) !important;
  --list-marker-color-collapsed: hsl(221, 94.94%, 19.95%) !important;
  --maximize: url("data:image/svg+xml,%3Csvg width='9' height='9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 0H0v9h9V0zM8 2H1v6h7V2z' fill='%23000'/%3E%3C/svg%3E") !important;
  --menu-background: rgb(64, 64, 64) !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --metadata-input-background-active: transparent !important;
  --metadata-input-font: Win95Font, Inter, Rubik, Segoe UI' !important;
  --metadata-label-background-active: transparent !important;
  --metadata-label-font: Win95Font, Inter, Rubik, Segoe UI' !important;
  --metadata-property-background-active: transparent !important;
  --minimize: url("data:image/svg+xml,%3Csvg width='6' height='2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' d='M0 0h6v2H0z'/%3E%3C/svg%3E") !important;
  --modal-background: #000000 !important;
  --nav-item-background-active: transparent !important;
  --nav-item-background-hover: transparent !important;
  --nav-item-background-selected: hsla(222, 94%, 19%, 0.15) !important;
  --nav-item-color-highlighted: hsl(221, 94.94%, 19.95%) !important;
  --pdf-background: #000000 !important;
  --pdf-page-background: #000000 !important;
  --pdf-sidebar-background: #000000 !important;
  --pill-color-remove-hover: hsl(221, 94.94%, 19.95%) !important;
  --prompt-background: #000000 !important;
  --restoredown: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 64 64' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' xmlns:v='https://vecta.io/nano'%3e%3cuse href='%23A' x='13' y='15' width='34' height='34'/%3e%3cdefs%3e%3cimage id='A' width='34' height='34' href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAcUlEQVRYhe2XMQrAMAwDndL/fzmd2uEgxCkINOhmQw6DLFJlwmjOTalF1bjED7SJCIkIuQ/nuynr8qXRZiMRIREhb2q6XfK3c7Zps9lIREhECLtG1SXbtNluREXuyDERIREhESE2Irys6l//EpuN2PAAKfQHSOcj77YAAAAASUVORK5CYII='/%3e%3c/defs%3e%3c/svg%3e") !important;
  --ribbon-background: rgb(64, 64, 64) !important;
  --ribbon-background-collapsed: #000000 !important;
  --righticon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 18 18' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' xmlns:v='https://vecta.io/nano'%3e%3cuse href='%23A' x='6.75' y='5.063' width='5' height='8'/%3e%3cdefs%3e%3cimage id='A' width='5' height='8' href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAS0lEQVQImV3NqRGAQBAF0SniQBACEkEASMLdABBIQkAgEZvBQ4AYtmXXP8LLEJlPXphaCQeWVsKGtYs/d0TUnCyYc33HmI9O9HnjAUuAVuCj%2bT4gAAAAAElFTkSuQmCC'/%3e%3c/defs%3e%3c/svg%3e") !important;
  --scrollbar-width: 18px !important;
  --search-result-background: #000000 !important;
  --secondary: hsl(221, 94.94%, 19.95%) !important;
  --setting-items-background: #050505 !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --status-bar-background: rgb(64, 64, 64) !important;
  --suggestion-background: #000000 !important;
  --system-status-background: rgb(64, 64, 64) !important;
  --tab-background-active: #000000 !important;
  --tab-container-background: rgb(64, 64, 64) !important;
  --tab-stacked-header-width: 35px !important;
  --tab-switcher-background: rgb(64, 64, 64) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(64, 64, 64), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(222, 94%, 19%) !important;
  --tab-text-color-focused-highlighted: hsl(221, 94.94%, 19.95%) !important;
  --table-drag-handle-background-active: hsl(222, 94%, 19%) !important;
  --table-selection: hsla(222, 94%, 19%, 0.1) !important;
  --table-selection-blend-mode: darken !important;
  --table-selection-border-color: hsl(222, 94%, 19%) !important;
  --tag-background: hsla(222, 94%, 19%, 0.1) !important;
  --tag-background-hover: hsla(222, 94%, 19%, 0.2) !important;
  --tag-border-color: hsla(222, 94%, 19%, 0.15) !important;
  --tag-border-color-hover: hsla(222, 94%, 19%, 0.15) !important;
  --tag-color: hsl(221, 94.94%, 19.95%) !important;
  --tag-color-hover: hsl(221, 94.94%, 19.95%) !important;
  --tertiary: hsl(192, 142.88%, 29.45%) !important;
  --text-accent: hsl(221, 94.94%, 19.95%) !important;
  --text-accent-hover: hsl(192, 142.88%, 29.45%) !important;
  --text-selection: hsla(222, 94%, 19%, 0.47) !important;
  --textHighlight: transparent !important;
  --titleFont: Win95Font, Inter, Rubik, Segoe UI' !important;
  --titlebar-background: rgb(64, 64, 64) !important;
  --titlebar-background-focused: rgb(64, 64, 64) !important;
  --tooltip-border: rgb(128, 128, 128) !important;
  --traffic-lights-offset-x: 35px !important;
  --traffic-lights-offset-y: 35px !important;
  --upicon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 18 18' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' xmlns:v='https://vecta.io/nano'%3e%3cuse href='%23A' x='5.063' y='6.75' width='8' height='5'/%3e%3cdefs%3e%3cimage id='A' width='8' height='5' href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAPElEQVQImXXNoRHAIBBE0aPzFICgBGRKQ57Av4gImAl59s/sRmzQccUJbkwk6immZaDts9PXQC2/n698AMKrUH0l/8BzAAAAAElFTkSuQmCC'/%3e%3c/defs%3e%3c/svg%3e") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(64, 64, 64);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(64, 64, 64);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.05) 0px 2px 3px 0px, rgba(0, 0, 0, 0.03) 0px 1px 1.5px 0px, rgba(0, 0, 0, 0.04) 0px 1px 2px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(3, 30, 94, 0.1);
  color: rgb(3, 33, 99);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(64, 64, 64);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(64, 64, 64);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(0, 0, 0);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body .text-highlight {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body del {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body p {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(3, 33, 99);
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
  outline: rgb(3, 33, 99) none 0px;
  text-decoration-color: rgb(3, 33, 99);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(3, 33, 99);
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
  outline: rgb(3, 33, 99) none 0px;
  text-decoration-color: rgb(3, 33, 99);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(3, 33, 99);
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
  outline: rgb(3, 33, 99) none 0px;
  text-decoration: underline rgba(3, 30, 94, 0.3);
  text-decoration-color: rgba(3, 30, 94, 0.3);
}`,
    lists: `html[saved-theme="dark"] body ol.overflow {
  border-left-color: rgb(64, 64, 64);
  border-left-style: solid;
  border-left-width: 5px;
  border-right-color: rgb(64, 64, 64);
  border-right-style: solid;
  border-right-width: 5px;
}

html[saved-theme="dark"] body ul.overflow {
  border-left-color: rgb(64, 64, 64);
  border-left-style: solid;
  border-left-width: 5px;
  border-right-color: rgb(64, 64, 64);
  border-right-style: solid;
  border-right-width: 5px;
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    tables: `html[saved-theme="dark"] body table {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
  width: 163.938px;
}`,
    code: `html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(5, 5, 5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(5, 5, 5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(5, 5, 5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(5, 5, 5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body figcaption {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body .transclude {
  border-left-color: rgb(3, 30, 94);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-left: 5px;
  padding-right: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  background-color: rgba(83, 223, 221, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  background-color: rgba(251, 70, 76, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  background-color: rgba(251, 70, 76, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  background-color: rgba(168, 130, 255, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  background-color: rgba(251, 70, 76, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  background-color: rgba(2, 122, 255, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  background-color: rgba(2, 122, 255, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  background-color: rgba(233, 151, 63, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  background-color: rgba(68, 207, 110, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  background-color: rgba(83, 223, 221, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  background-color: rgba(2, 122, 255, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  background-color: rgba(233, 151, 63, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(0, 0, 0) -1.5px -1.5px 0px 0px inset, rgb(64, 64, 64) 0px 0px 0px 0px inset, rgb(0, 0, 0) -2px -2px 0px 0px inset, rgb(128, 128, 128) 2px 2px 0px 0px inset;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(128, 128, 128);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(128, 128, 128);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(3, 30, 94);
  color: rgb(128, 128, 128);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  box-shadow: rgb(64, 64, 64) -1px -1px 0px 0px inset, rgb(0, 0, 0) 2px 2px 0px 0px inset, rgb(64, 64, 64) -1px -1px 0px 0px inset, rgb(0, 0, 0) 1px 1px 0px 0px inset;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(3, 30, 94);
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(128, 128, 128);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(3, 30, 94);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(128, 128, 128);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(3, 30, 94, 0.1);
  border-bottom-color: rgba(3, 30, 94, 0.15);
  border-left-color: rgba(3, 30, 94, 0.15);
  border-right-color: rgba(3, 30, 94, 0.15);
  border-top-color: rgba(3, 30, 94, 0.15);
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(3, 33, 99);
}

html[saved-theme="dark"] body h1 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body h2 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body h3 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body h4 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body h5 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body h6 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body hr {
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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
    explorer: `html[saved-theme="dark"] body .explorer {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(218, 218, 218);
  border-left-style: dashed;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  background-color: rgb(64, 64, 64);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(218, 218, 218);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(64, 64, 64);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body ul.section-ul {
  background-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  background-color: rgb(64, 64, 64);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(218, 218, 218);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(218, 218, 218);
  stroke: rgb(218, 218, 218);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    misc: `html[saved-theme="dark"] body .metadata {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(64, 64, 64);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body input[type=text] {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(3, 30, 94, 0.1);
  border-bottom-color: rgba(3, 30, 94, 0.15);
  border-left-color: rgba(3, 30, 94, 0.15);
  border-right-color: rgba(3, 30, 94, 0.15);
  border-top-color: rgba(3, 30, 94, 0.15);
  color: rgb(3, 33, 99);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 222 !important;
  --accent-l: 19% !important;
  --accent-s: 94% !important;
  --background-modifier-active-hover: hsla(222, 94%, 19%, 0.1) !important;
  --background-modifier-cover: rgba(43, 41, 41, 0.4) !important;
  --background-modifier-hover: transparent !important;
  --background-secondary: silver !important;
  --background-secondary-alt: silver !important;
  --bases-table-cell-background-selected: hsla(222, 94%, 19%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(221, 94.94%, 19.95%) !important;
  --bases-table-header-background-hover: transparent !important;
  --bases-table-summary-background-hover: transparent !important;
  --bg-button-light: white !important;
  --bg-button-shadow: gray !important;
  --blockquote-border-color: hsl(221, 94.94%, 19.95%) !important;
  --bodyFont: Win95Font, Inter, Rubik, Segoe UI' !important;
  --checkbox-color: hsl(221, 94.94%, 19.95%) !important;
  --checkbox-color-hover: hsl(192, 142.88%, 29.45%) !important;
  --closebutton: url("data:image/svg+xml,%3Csvg width='8' height='7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H5v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1V5h1V4h1V3H2V2H1V1H0V0z' fill='%23000'/%3E%3C/svg%3E") !important;
  --code-bracket-background: transparent !important;
  --codeFont: Win95Font, Inter, Rubik, Segoe UI' !important;
  --collapse-icon-color-collapsed: hsl(222, 94%, 19%) !important;
  --color-accent: hsl(222, 94%, 19%) !important;
  --color-accent-1: hsl(221, 94.94%, 19.95%) !important;
  --color-accent-2: hsl(192, 142.88%, 29.45%) !important;
  --color-accent-hsl: 222, 94%, 19% !important;
  --color-base-05: silver !important;
  --color-base-20: silver !important;
  --divider-color-hover: hsl(221, 94.94%, 19.95%) !important;
  --downicon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' shape-rendering='optimizeSpeed' width='18' height='18' viewBox='0 0 16 16' xmlns:v='https://vecta.io/nano'%3e%3cpath d='M4 7V6h7v1h-1v1H9v1H8v1H7V9H6V8H5V7z'/%3e%3c/svg%3e") !important;
  --embed-border-start: 2px solid hsl(221, 94.94%, 19.95%) !important;
  --file-header-font: Win95Font, Inter, Rubik, Segoe UI' !important;
  --font-default: 'Win95Font', 'Inter', 'Rubik', 'Segoe UI' !important;
  --font-interface: Win95Font, Inter, Rubik, Segoe UI' !important;
  --font-mermaid: Win95Font, Inter, Rubik, Segoe UI' !important;
  --font-text: Win95Font, Inter, Rubik, Segoe UI' !important;
  --footnote-input-background-active: transparent !important;
  --graph-node-focused: hsl(222, 94%, 19%) !important;
  --header-height: 35px !important;
  --headerFont: Win95Font, Inter, Rubik, Segoe UI' !important;
  --highlight: transparent !important;
  --icon-color-active: hsl(222, 94%, 19%) !important;
  --input-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent !important;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17), 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent !important;
  --interactive-accent: hsl(221, 94.94%, 19.95%) !important;
  --interactive-accent-hover: hsl(192, 142.88%, 29.45%) !important;
  --interactive-accent-hsl: 222, 94%, 19% !important;
  --lefticon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 18 18' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' xmlns:v='https://vecta.io/nano'%3e%3cpath d='M10.875 5.063H12v7.875h-1.125v-1.125H9.75v-1.125H8.625V9.563H7.5V8.438h1.125V7.313H9.75V6.188h1.125V5.063z' fill-rule='nonzero'/%3e%3c/svg%3e") !important;
  --lightgray: silver !important;
  --link-color: hsl(222, 94%, 19%) !important;
  --link-color-hover: hsl(192, 142.88%, 29.45%) !important;
  --link-external-color: hsl(222, 94%, 19%) !important;
  --link-external-color-hover: hsl(192, 142.88%, 29.45%) !important;
  --link-unresolved-color: hsl(222, 94%, 19%) !important;
  --link-unresolved-decoration-color: hsla(222, 94%, 19%, 0.3) !important;
  --list-marker-color-collapsed: hsl(222, 94%, 19%) !important;
  --maximize: url("data:image/svg+xml,%3Csvg width='9' height='9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 0H0v9h9V0zM8 2H1v6h7V2z' fill='%23000'/%3E%3C/svg%3E") !important;
  --menu-background: silver !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --metadata-input-background-active: transparent !important;
  --metadata-input-font: Win95Font, Inter, Rubik, Segoe UI' !important;
  --metadata-label-background-active: transparent !important;
  --metadata-label-font: Win95Font, Inter, Rubik, Segoe UI' !important;
  --metadata-property-background-active: transparent !important;
  --minimize: url("data:image/svg+xml,%3Csvg width='6' height='2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' d='M0 0h6v2H0z'/%3E%3C/svg%3E") !important;
  --nav-item-background-active: transparent !important;
  --nav-item-background-hover: transparent !important;
  --nav-item-background-selected: hsla(222, 94%, 19%, 0.15) !important;
  --nav-item-color-highlighted: hsl(222, 94%, 19%) !important;
  --pill-color-remove-hover: hsl(222, 94%, 19%) !important;
  --restoredown: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 64 64' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' xmlns:v='https://vecta.io/nano'%3e%3cuse href='%23A' x='13' y='15' width='34' height='34'/%3e%3cdefs%3e%3cimage id='A' width='34' height='34' href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAcUlEQVRYhe2XMQrAMAwDndL/fzmd2uEgxCkINOhmQw6DLFJlwmjOTalF1bjED7SJCIkIuQ/nuynr8qXRZiMRIREhb2q6XfK3c7Zps9lIREhECLtG1SXbtNluREXuyDERIREhESE2Irys6l//EpuN2PAAKfQHSOcj77YAAAAASUVORK5CYII='/%3e%3c/defs%3e%3c/svg%3e") !important;
  --ribbon-background: silver !important;
  --righticon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 18 18' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' xmlns:v='https://vecta.io/nano'%3e%3cpath d='M10.125 12.938H9V5.063h1.125v1.125h1.125v1.125h1.125v1.125H13.5v1.125h-1.125v1.125H11.25v1.125h-1.125v1.125z' fill-rule='nonzero'/%3e%3c/svg%3e") !important;
  --scrollbar-width: 18px !important;
  --secondary: hsl(222, 94%, 19%) !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071), 0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --status-bar-background: silver !important;
  --system-status-background: silver !important;
  --tab-container-background: silver !important;
  --tab-stacked-header-width: 35px !important;
  --tab-switcher-background: silver !important;
  --tab-switcher-menubar-background: linear-gradient(to top, silver, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(222, 94%, 19%) !important;
  --tab-text-color-focused-highlighted: hsl(222, 94%, 19%) !important;
  --table-drag-handle-background-active: hsl(221, 94.94%, 19.95%) !important;
  --table-selection: hsla(222, 94%, 19%, 0.1) !important;
  --table-selection-border-color: hsl(221, 94.94%, 19.95%) !important;
  --tag-background: hsla(222, 94%, 19%, 0.1) !important;
  --tag-background-hover: hsla(222, 94%, 19%, 0.2) !important;
  --tag-border-color: hsla(222, 94%, 19%, 0.15) !important;
  --tag-border-color-hover: hsla(222, 94%, 19%, 0.15) !important;
  --tag-color: hsl(222, 94%, 19%) !important;
  --tag-color-hover: hsl(222, 94%, 19%) !important;
  --tertiary: hsl(192, 142.88%, 29.45%) !important;
  --text-accent: hsl(222, 94%, 19%) !important;
  --text-accent-hover: hsl(192, 142.88%, 29.45%) !important;
  --text-selection: hsla(222, 94%, 19%, 0.47) !important;
  --textHighlight: transparent !important;
  --titleFont: Win95Font, Inter, Rubik, Segoe UI' !important;
  --titlebar-background: silver !important;
  --titlebar-background-focused: silver !important;
  --tooltip-border: black !important;
  --traffic-lights-offset-x: 35px !important;
  --traffic-lights-offset-y: 35px !important;
  --upicon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' shape-rendering='optimizeSpeed' width='18' height='18' viewBox='0 0 16 16' xmlns:v='https://vecta.io/nano'%3e%3cpath d='M11 9v1H4V9h1V8h1V7h1V6h1v1h1v1h1v1z'/%3e%3c/svg%3e") !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(192, 192, 192);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(3, 30, 94, 0.1);
  color: rgb(3, 30, 94);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(192, 192, 192);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(192, 192, 192);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body .text-highlight {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body del {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body p {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(3, 30, 94);
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
  outline: rgb(3, 30, 94) none 0px;
  text-decoration-color: rgb(3, 30, 94);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(3, 30, 94);
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
  outline: rgb(3, 30, 94) none 0px;
  text-decoration-color: rgb(3, 30, 94);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(3, 30, 94);
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
  outline: rgb(3, 30, 94) none 0px;
  text-decoration: underline rgba(3, 30, 94, 0.3);
  text-decoration-color: rgba(3, 30, 94, 0.3);
}`,
    lists: `html[saved-theme="light"] body ol.overflow {
  border-left-color: rgb(192, 192, 192);
  border-left-style: solid;
  border-left-width: 5px;
  border-right-color: rgb(192, 192, 192);
  border-right-style: solid;
  border-right-width: 5px;
}

html[saved-theme="light"] body ul.overflow {
  border-left-color: rgb(192, 192, 192);
  border-left-style: solid;
  border-left-width: 5px;
  border-right-color: rgb(192, 192, 192);
  border-right-style: solid;
  border-right-width: 5px;
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    tables: `html[saved-theme="light"] body table {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
  width: 163.938px;
}`,
    code: `html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="light"] body figcaption {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    embeds: `html[saved-theme="light"] body .transclude {
  border-left-color: rgb(3, 33, 99);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-left: 5px;
  padding-right: 5px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  background-color: rgba(0, 191, 188, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  background-color: rgba(233, 49, 71, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  background-color: rgba(233, 49, 71, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  background-color: rgba(120, 82, 238, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  background-color: rgba(233, 49, 71, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  background-color: rgba(8, 109, 221, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  background-color: rgba(8, 109, 221, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  background-color: rgba(236, 117, 0, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  background-color: rgba(8, 185, 78, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  background-color: rgba(0, 191, 188, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  background-color: rgba(8, 109, 221, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  background-color: rgba(236, 117, 0, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(192, 192, 192);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(0, 0, 0) -1.5px -1.5px 0px 0px inset, rgb(192, 192, 192) 0px 0px 0px 0px inset, rgb(128, 128, 128) -2px -2px 0px 0px inset, rgb(255, 255, 255) 2px 2px 0px 0px inset;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(3, 30, 94);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  box-shadow: rgb(192, 192, 192) -1px -1px 0px 0px inset, rgb(128, 128, 128) 2px 2px 0px 0px inset, rgb(192, 192, 192) -1px -1px 0px 0px inset, rgb(0, 0, 0) 1px 1px 0px 0px inset;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(3, 30, 94);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(3, 30, 94);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(3, 30, 94, 0.1);
  border-bottom-color: rgba(3, 30, 94, 0.15);
  border-left-color: rgba(3, 30, 94, 0.15);
  border-right-color: rgba(3, 30, 94, 0.15);
  border-top-color: rgba(3, 30, 94, 0.15);
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(3, 30, 94);
}

html[saved-theme="light"] body h1 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body h2 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body h3 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body h4 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body h5 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body h6 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body hr {
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .explorer {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(34, 34, 34);
  border-left-style: dashed;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  background-color: rgb(192, 192, 192);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(34, 34, 34);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(192, 192, 192);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body ul.section-ul {
  background-color: rgb(255, 255, 255);
  border-top-color: rgb(0, 0, 0);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  background-color: rgb(192, 192, 192);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(34, 34, 34);
  stroke: rgb(34, 34, 34);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    misc: `html[saved-theme="light"] body .metadata {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body .metadata-properties {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(192, 192, 192);
}

html[saved-theme="light"] body .page-header h2.page-title {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body input[type=text] {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(3, 30, 94, 0.1);
  border-bottom-color: rgba(3, 30, 94, 0.15);
  border-left-color: rgba(3, 30, 94, 0.15);
  border-right-color: rgba(3, 30, 94, 0.15);
  border-top-color: rgba(3, 30, 94, 0.15);
  color: rgb(3, 30, 94);
}`,
  },
};
