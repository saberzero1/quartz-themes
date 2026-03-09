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
  --accent-h: 222;
  --accent-l: 19%;
  --accent-s: 94%;
  --background-modifier-active-hover: rgba(3, 30, 94, 0.1);
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.1);
  --background-modifier-cover: rgba(43, 41, 41, 0.4);
  --background-modifier-hover: transparent;
  --background-primary: #000000;
  --background-primary-alt: #050505;
  --background-secondary: rgb(64, 64, 64);
  --background-secondary-alt: rgb(64, 64, 64);
  --bases-cards-background: #000000;
  --bases-cards-cover-background: #050505;
  --bases-table-cell-background-active: #000000;
  --bases-table-cell-background-disabled: #050505;
  --bases-table-cell-background-selected: rgba(3, 30, 94, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(3, 30, 94);
  --bases-table-group-background: #050505;
  --bases-table-header-background: #000000;
  --bases-table-header-background-hover: transparent;
  --bases-table-summary-background: #000000;
  --bases-table-summary-background-hover: transparent;
  --bg-button-light: rgb(128, 128, 128);
  --bg-button-shadow: black;
  --blockquote-border-color: rgb(3, 30, 94);
  --callout-blend-mode: darken;
  --canvas-background: #000000;
  --checkbox-color: rgb(3, 30, 94);
  --checkbox-color-hover: rgb(3, 33, 99);
  --checkbox-marker-color: #000000;
  --closebutton: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 8 7' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' xmlns:v='https://vecta.io/nano'%3e%3cuse href='%23A' width='8' height='7'/%3e%3cdefs%3e%3cimage id='A' width='8' height='7' href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAOklEQVQImW2OQQ4AMAjCqv//MzssM0jGyaQIlCRxVWwJoA0oIVAd33L4EgjTut3wqxiDx65NnZ256QAPcA8KJ2HN6QAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e");
  --code-background: #050505;
  --code-bracket-background: transparent;
  --collapse-icon-color-collapsed: rgb(3, 33, 99);
  --color-accent: rgb(3, 30, 94);
  --color-accent-1: rgb(3, 33, 99);
  --color-accent-2: hsl(192, 142.88%, 29.45%);
  --color-accent-hsl: 222, 94%, 19%;
  --color-base-00: #000000;
  --color-base-05: rgb(64, 64, 64);
  --color-base-10: #050505;
  --color-base-20: rgb(64, 64, 64);
  --color-opposite-100: #dddddd;
  --color-opposite-25: #1c1c1c;
  --color-opposite-30: #1f1f1f;
  --color-opposite-35: #2b2b2b;
  --color-opposite-40: #424242;
  --color-opposite-50: #545454;
  --color-opposite-60: #8f8f8f;
  --color-opposite-70: #a3a3a3;
  --divider-color-hover: rgb(3, 30, 94);
  --downicon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 18 18' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' xmlns:v='https://vecta.io/nano'%3e%3cuse href='%23A' x='4.5' y='6.75' width='8' height='5'/%3e%3cdefs%3e%3cimage id='A' width='8' height='5' href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAARklEQVQImXXNsRFAUAAE0dOHQAlCgeCHQqUKFSAQasGMPp70G2x4O3PbQP45gw6XNzvaJAkGHJVc0T%2b%2bMGHDgvEziBml3m6nPUz9aFAG8wAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e");
  --embed-border-start: 2px solid rgb(3, 30, 94);
  --file-header-background: #000000;
  --file-header-background-focused: #000000;
  --file-header-font: '??', '??', '??', 'Win95Font', 'Inter', 'Rubik', 'Segoe UI';
  --font-default: 'Win95Font', 'Inter', 'Rubik', 'Segoe UI';
  --font-interface: '??', '??', '??', 'Win95Font', 'Inter', 'Rubik', 'Segoe UI';
  --font-mermaid: '??', '??', 'Win95Font', 'Inter', 'Rubik', 'Segoe UI';
  --font-text: '??', '??', 'Win95Font', 'Inter', 'Rubik', 'Segoe UI';
  --footnote-input-background-active: transparent;
  --graph-node-focused: rgb(3, 33, 99);
  --header-height: 35px;
  --highlight-mix-blend-mode: darken;
  --icon-color-active: rgb(3, 33, 99);
  --input-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17), 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent;
  --interactive-accent: rgb(3, 30, 94);
  --interactive-accent-hover: rgb(3, 33, 99);
  --interactive-accent-hsl: 222, 94%, 19%;
  --lefticon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 18 18' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' xmlns:v='https://vecta.io/nano'%3e%3cuse href='%23A' x='6.75' y='5.062' width='5' height='8'/%3e%3cdefs%3e%3cimage id='A' width='5' height='8' href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAWElEQVQImU3MoRHCQBQE0PdvztEYAolIGQgKoBAEkrJi4yggMxuTY%2b7Lt7u/TJfkg7VN8MUd2gRXXKCfk9uA0Vyxz79bVb3wxjawQ1U9k3QsfzyDR5IdvwPUnB2IEQfd7wAAAABJRU5ErkJggg=='/%3e%3c/defs%3e%3c/svg%3e");
  --link-color: rgb(3, 33, 99);
  --link-color-hover: hsl(192, 142.88%, 29.45%);
  --link-external-color: rgb(3, 33, 99);
  --link-external-color-hover: hsl(192, 142.88%, 29.45%);
  --link-unresolved-color: rgb(3, 33, 99);
  --link-unresolved-decoration-color: rgba(3, 30, 94, 0.3);
  --list-marker-color-collapsed: rgb(3, 33, 99);
  --maximize: url("data:image/svg+xmlcharset=utf-8,%3Csvg width='9' height='9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 0H0v9h9V0zM8 2H1v6h7V2z' fill='%23000'/%3E%3C/svg%3E");
  --menu-background: rgb(64, 64, 64);
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --metadata-input-background-active: transparent;
  --metadata-input-font: '??', '??', '??', 'Win95Font', 'Inter', 'Rubik', 'Segoe UI';
  --metadata-label-background-active: transparent;
  --metadata-label-font: '??', '??', '??', 'Win95Font', 'Inter', 'Rubik', 'Segoe UI';
  --metadata-property-background-active: transparent;
  --minimize: url("data:image/svg+xml,%3Csvg width='6' height='2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' d='M0 0h6v2H0z'/%3E%3C/svg%3E");
  --modal-background: #000000;
  --nav-item-background-active: transparent;
  --nav-item-background-hover: transparent;
  --nav-item-background-selected: rgba(3, 30, 94, 0.15);
  --nav-item-color-highlighted: rgb(3, 33, 99);
  --pdf-background: #000000;
  --pdf-page-background: #000000;
  --pdf-sidebar-background: #000000;
  --pill-color-remove-hover: rgb(3, 33, 99);
  --prompt-background: #000000;
  --restoredown: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 64 64' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' xmlns:v='https://vecta.io/nano'%3e%3cuse href='%23A' x='13' y='15' width='34' height='34'/%3e%3cdefs%3e%3cimage id='A' width='34' height='34' href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAcUlEQVRYhe2XMQrAMAwDndL/fzmd2uEgxCkINOhmQw6DLFJlwmjOTalF1bjED7SJCIkIuQ/nuynr8qXRZiMRIREhb2q6XfK3c7Zps9lIREhECLtG1SXbtNluREXuyDERIREhESE2Irys6l//EpuN2PAAKfQHSOcj77YAAAAASUVORK5CYII='/%3e%3c/defs%3e%3c/svg%3e");
  --ribbon-background: rgb(64, 64, 64);
  --ribbon-background-collapsed: #000000;
  --righticon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 18 18' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' xmlns:v='https://vecta.io/nano'%3e%3cuse href='%23A' x='6.75' y='5.063' width='5' height='8'/%3e%3cdefs%3e%3cimage id='A' width='5' height='8' href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAYAAAAx8TU7AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAS0lEQVQImV3NqRGAQBAF0SniQBACEkEASMLdABBIQkAgEZvBQ4AYtmXXP8LLEJlPXphaCQeWVsKGtYs/d0TUnCyYc33HmI9O9HnjAUuAVuCj%2bT4gAAAAAElFTkSuQmCC'/%3e%3c/defs%3e%3c/svg%3e");
  --scrollbar-width: 18px;
  --search-result-background: #000000;
  --setting-items-background: #050505;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --status-bar-background: rgb(64, 64, 64);
  --suggestion-background: #000000;
  --system-status-background: rgb(64, 64, 64);
  --tab-background-active: #000000;
  --tab-container-background: rgb(64, 64, 64);
  --tab-stacked-header-width: 35px;
  --tab-switcher-background: rgb(64, 64, 64);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(64, 64, 64), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(3, 30, 94);
  --tab-text-color-focused-highlighted: rgb(3, 33, 99);
  --table-drag-handle-background-active: rgb(3, 30, 94);
  --table-selection: rgba(3, 30, 94, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: rgb(3, 30, 94);
  --tag-background: rgba(3, 30, 94, 0.1);
  --tag-background-hover: rgba(3, 30, 94, 0.2);
  --tag-border-color: rgba(3, 30, 94, 0.15);
  --tag-border-color-hover: rgba(3, 30, 94, 0.15);
  --tag-color: rgb(3, 33, 99);
  --tag-color-hover: rgb(3, 33, 99);
  --text-accent: rgb(3, 33, 99);
  --text-accent-hover: hsl(192, 142.88%, 29.45%);
  --text-selection: rgba(3, 30, 94, 0.47);
  --titlebar-background: rgb(64, 64, 64);
  --titlebar-background-focused: rgb(64, 64, 64);
  --tooltip-border: rgb(128, 128, 128);
  --traffic-lights-offset-x: 35px;
  --traffic-lights-offset-y: 35px;
  --upicon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 18 18' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' xmlns:v='https://vecta.io/nano'%3e%3cuse href='%23A' x='5.063' y='6.75' width='8' height='5'/%3e%3cdefs%3e%3cimage id='A' width='8' height='5' href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAPElEQVQImXXNoRHAIBBE0aPzFICgBGRKQ57Av4gImAl59s/sRmzQccUJbkwk6immZaDts9PXQC2/n698AMKrUH0l/8BzAAAAAElFTkSuQmCC'/%3e%3c/defs%3e%3c/svg%3e");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(64, 64, 64);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(64, 64, 64);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(64, 64, 64);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .page article p > em, em {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .page article p > i, i {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .page article p > strong, strong {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .text-highlight {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body del {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body p {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    links: `body a.external, footer a {
  color: rgb(3, 33, 99);
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
  outline: rgb(3, 33, 99) none 0px;
  text-decoration: underline rgb(3, 33, 99);
  text-decoration-color: rgb(3, 33, 99);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(3, 33, 99);
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
  outline: rgb(3, 33, 99) none 0px;
  text-decoration: underline rgb(3, 33, 99);
  text-decoration-color: rgb(3, 33, 99);
}

body a.internal.broken {
  color: rgb(3, 33, 99);
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
  outline: rgb(3, 33, 99) none 0px;
  text-decoration: underline rgba(3, 30, 94, 0.3);
  text-decoration-color: rgba(3, 30, 94, 0.3);
}`,
    lists: `body ol.overflow {
  background-color: rgb(0, 0, 0);
  border-left-color: rgb(64, 64, 64);
  border-left-style: solid;
  border-left-width: 5px;
  border-right-color: rgb(64, 64, 64);
  border-right-style: solid;
  border-right-width: 5px;
}

body ul.overflow {
  background-color: rgb(0, 0, 0);
  border-left-color: rgb(64, 64, 64);
  border-left-style: solid;
  border-left-width: 5px;
  border-right-color: rgb(64, 64, 64);
  border-right-style: solid;
  border-right-width: 5px;
}`,
    blockquotes: `body blockquote {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    tables: `body table {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
  width: 163.938px;
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(5, 5, 5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(5, 5, 5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre > code, pre:has(> code) {
  background-color: rgb(5, 5, 5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(5, 5, 5);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body figcaption {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    embeds: `body .file-embed {
  background-color: rgb(5, 5, 5);
}

body .transclude {
  border-left-color: rgb(3, 30, 94);
}

body .transclude-inner {
  border-left-color: rgb(3, 30, 94);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body input[type=checkbox] {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    callouts: `body .callout .callout-title {
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

body .callout > .callout-content {
  padding-left: 5px;
  padding-right: 5px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(83, 223, 221, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(251, 70, 76, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(251, 70, 76, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  background-color: rgba(168, 130, 255, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(251, 70, 76, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  background-color: rgba(2, 122, 255, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  background-color: rgba(2, 122, 255, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  background-color: rgba(233, 151, 63, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  background-color: rgba(68, 207, 110, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(83, 223, 221, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(2, 122, 255, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(233, 151, 63, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
  background-color: rgb(64, 64, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(0, 0, 0) -1.5px -1.5px 0px 0px inset, rgb(64, 64, 64) 0px 0px 0px 0px inset, rgb(0, 0, 0) -2px -2px 0px 0px inset, rgb(128, 128, 128) 2px 2px 0px 0px inset;
}

body .search > .search-container > .search-space > * {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(128, 128, 128);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(128, 128, 128);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(3, 30, 94);
  color: rgb(128, 128, 128);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  box-shadow: rgb(64, 64, 64) -1px -1px 0px 0px inset, rgb(0, 0, 0) 2px 2px 0px 0px inset, rgb(64, 64, 64) -1px -1px 0px 0px inset, rgb(0, 0, 0) 1px 1px 0px 0px inset;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(3, 30, 94);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(128, 128, 128);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(3, 30, 94, 0.1);
  border-bottom-color: rgba(3, 30, 94, 0.15);
  border-left-color: rgba(3, 30, 94, 0.15);
  border-right-color: rgba(3, 30, 94, 0.15);
  border-top-color: rgba(3, 30, 94, 0.15);
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body a.internal.tag-link::before {
  color: rgb(3, 33, 99);
}

body h1 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body h2 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body h2.page-title, h2.page-title a {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body h3 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body h4 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body h5 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body h6 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body hr {
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
  background-color: rgb(64, 64, 64);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body ul.section-ul {
  background-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(218, 218, 218);
  stroke: rgb(218, 218, 218);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    misc: `body .metadata {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .metadata-properties {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .navigation-progress {
  background-color: rgb(64, 64, 64);
}

body .page-header h2.page-title {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body input[type=text] {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body kbd {
  background-color: rgb(5, 5, 5);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 222;
  --accent-l: 19%;
  --accent-s: 94%;
  --background-modifier-active-hover: rgba(3, 30, 94, 0.1);
  --background-modifier-cover: rgba(43, 41, 41, 0.4);
  --background-modifier-hover: transparent;
  --background-secondary: silver;
  --background-secondary-alt: silver;
  --bases-table-cell-background-selected: rgba(3, 30, 94, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(3, 33, 99);
  --bases-table-header-background-hover: transparent;
  --bases-table-summary-background-hover: transparent;
  --bg-button-light: white;
  --bg-button-shadow: gray;
  --blockquote-border-color: rgb(3, 33, 99);
  --checkbox-color: rgb(3, 33, 99);
  --checkbox-color-hover: hsl(192, 142.88%, 29.45%);
  --closebutton: url("data:image/svg+xmlcharset=utf-8,%3Csvg width='8' height='7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 0h2v1h1v1h2V1h1V0h2v1H7v1H6v1H5v1h1v1h1v1h1v1H6V6H5V5H3v1H2v1H0V6h1V5h1V4h1V3H2V2H1V1H0V0z' fill='%23000'/%3E%3C/svg%3E");
  --code-bracket-background: transparent;
  --collapse-icon-color-collapsed: rgb(3, 30, 94);
  --color-accent: rgb(3, 30, 94);
  --color-accent-1: rgb(3, 33, 99);
  --color-accent-2: hsl(192, 142.88%, 29.45%);
  --color-accent-hsl: 222, 94%, 19%;
  --color-base-05: silver;
  --color-base-20: silver;
  --divider-color-hover: rgb(3, 33, 99);
  --downicon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' shape-rendering='optimizeSpeed' width='18' height='18' viewBox='0 0 16 16' xmlns:v='https://vecta.io/nano'%3e%3cpath d='M4 7V6h7v1h-1v1H9v1H8v1H7V9H6V8H5V7z'/%3e%3c/svg%3e");
  --embed-border-start: 2px solid rgb(3, 33, 99);
  --file-header-font: '??', '??', '??', 'Win95Font', 'Inter', 'Rubik', 'Segoe UI';
  --font-default: 'Win95Font', 'Inter', 'Rubik', 'Segoe UI';
  --font-interface: '??', '??', '??', 'Win95Font', 'Inter', 'Rubik', 'Segoe UI';
  --font-mermaid: '??', '??', 'Win95Font', 'Inter', 'Rubik', 'Segoe UI';
  --font-text: '??', '??', 'Win95Font', 'Inter', 'Rubik', 'Segoe UI';
  --footnote-input-background-active: transparent;
  --graph-node-focused: rgb(3, 30, 94);
  --header-height: 35px;
  --icon-color-active: rgb(3, 30, 94);
  --input-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12), 0 2px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17), 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03), 0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent;
  --interactive-accent: rgb(3, 33, 99);
  --interactive-accent-hover: hsl(192, 142.88%, 29.45%);
  --interactive-accent-hsl: 222, 94%, 19%;
  --lefticon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 18 18' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' xmlns:v='https://vecta.io/nano'%3e%3cpath d='M10.875 5.063H12v7.875h-1.125v-1.125H9.75v-1.125H8.625V9.563H7.5V8.438h1.125V7.313H9.75V6.188h1.125V5.063z' fill-rule='nonzero'/%3e%3c/svg%3e");
  --link-color: rgb(3, 30, 94);
  --link-color-hover: hsl(192, 142.88%, 29.45%);
  --link-external-color: rgb(3, 30, 94);
  --link-external-color-hover: hsl(192, 142.88%, 29.45%);
  --link-unresolved-color: rgb(3, 30, 94);
  --link-unresolved-decoration-color: rgba(3, 30, 94, 0.3);
  --list-marker-color-collapsed: rgb(3, 30, 94);
  --maximize: url("data:image/svg+xmlcharset=utf-8,%3Csvg width='9' height='9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 0H0v9h9V0zM8 2H1v6h7V2z' fill='%23000'/%3E%3C/svg%3E");
  --menu-background: silver;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --metadata-input-background-active: transparent;
  --metadata-input-font: '??', '??', '??', 'Win95Font', 'Inter', 'Rubik', 'Segoe UI';
  --metadata-label-background-active: transparent;
  --metadata-label-font: '??', '??', '??', 'Win95Font', 'Inter', 'Rubik', 'Segoe UI';
  --metadata-property-background-active: transparent;
  --minimize: url("data:image/svg+xml,%3Csvg width='6' height='2' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23000' d='M0 0h6v2H0z'/%3E%3C/svg%3E");
  --nav-item-background-active: transparent;
  --nav-item-background-hover: transparent;
  --nav-item-background-selected: rgba(3, 30, 94, 0.15);
  --nav-item-color-highlighted: rgb(3, 30, 94);
  --pill-color-remove-hover: rgb(3, 30, 94);
  --restoredown: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 64 64' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' xmlns:v='https://vecta.io/nano'%3e%3cuse href='%23A' x='13' y='15' width='34' height='34'/%3e%3cdefs%3e%3cimage id='A' width='34' height='34' href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAcUlEQVRYhe2XMQrAMAwDndL/fzmd2uEgxCkINOhmQw6DLFJlwmjOTalF1bjED7SJCIkIuQ/nuynr8qXRZiMRIREhb2q6XfK3c7Zps9lIREhECLtG1SXbtNluREXuyDERIREhESE2Irys6l//EpuN2PAAKfQHSOcj77YAAAAASUVORK5CYII='/%3e%3c/defs%3e%3c/svg%3e");
  --ribbon-background: silver;
  --righticon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 18 18' fill-rule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' xmlns:v='https://vecta.io/nano'%3e%3cpath d='M10.125 12.938H9V5.063h1.125v1.125h1.125v1.125h1.125v1.125H13.5v1.125h-1.125v1.125H11.25v1.125h-1.125v1.125z' fill-rule='nonzero'/%3e%3c/svg%3e");
  --scrollbar-width: 18px;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071), 0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --status-bar-background: silver;
  --system-status-background: silver;
  --tab-container-background: silver;
  --tab-stacked-header-width: 35px;
  --tab-switcher-background: silver;
  --tab-switcher-menubar-background: linear-gradient(to top, silver, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(3, 30, 94);
  --tab-text-color-focused-highlighted: rgb(3, 30, 94);
  --table-drag-handle-background-active: rgb(3, 33, 99);
  --table-selection: rgba(3, 30, 94, 0.1);
  --table-selection-border-color: rgb(3, 33, 99);
  --tag-background: rgba(3, 30, 94, 0.1);
  --tag-background-hover: rgba(3, 30, 94, 0.2);
  --tag-border-color: rgba(3, 30, 94, 0.15);
  --tag-border-color-hover: rgba(3, 30, 94, 0.15);
  --tag-color: rgb(3, 30, 94);
  --tag-color-hover: rgb(3, 30, 94);
  --text-accent: rgb(3, 30, 94);
  --text-accent-hover: hsl(192, 142.88%, 29.45%);
  --text-selection: rgba(3, 30, 94, 0.47);
  --titlebar-background: silver;
  --titlebar-background-focused: silver;
  --tooltip-border: black;
  --traffic-lights-offset-x: 35px;
  --traffic-lights-offset-y: 35px;
  --upicon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' shape-rendering='optimizeSpeed' width='18' height='18' viewBox='0 0 16 16' xmlns:v='https://vecta.io/nano'%3e%3cpath d='M11 9v1H4V9h1V8h1V7h1V6h1v1h1v1h1v1z'/%3e%3c/svg%3e");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(192, 192, 192);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(192, 192, 192);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(192, 192, 192);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .page article p > em, em {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .page article p > i, i {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .page article p > strong, strong {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .text-highlight {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body del {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body p {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    links: `body a.external, footer a {
  color: rgb(3, 30, 94);
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
  outline: rgb(3, 30, 94) none 0px;
  text-decoration: underline rgb(3, 30, 94);
  text-decoration-color: rgb(3, 30, 94);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(3, 30, 94);
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
  outline: rgb(3, 30, 94) none 0px;
  text-decoration: underline rgb(3, 30, 94);
  text-decoration-color: rgb(3, 30, 94);
}

body a.internal.broken {
  color: rgb(3, 30, 94);
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
  outline: rgb(3, 30, 94) none 0px;
  text-decoration: underline rgba(3, 30, 94, 0.3);
  text-decoration-color: rgba(3, 30, 94, 0.3);
}`,
    lists: `body ol.overflow {
  border-left-color: rgb(192, 192, 192);
  border-left-style: solid;
  border-left-width: 5px;
  border-right-color: rgb(192, 192, 192);
  border-right-style: solid;
  border-right-width: 5px;
}

body ul.overflow {
  border-left-color: rgb(192, 192, 192);
  border-left-style: solid;
  border-left-width: 5px;
  border-right-color: rgb(192, 192, 192);
  border-right-style: solid;
  border-right-width: 5px;
}`,
    blockquotes: `body blockquote {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    tables: `body table {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
  width: 163.938px;
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre > code, pre:has(> code) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body figcaption {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    embeds: `body .transclude {
  border-left-color: rgb(3, 33, 99);
}

body .transclude-inner {
  border-left-color: rgb(3, 33, 99);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body input[type=checkbox] {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    callouts: `body .callout .callout-title {
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

body .callout > .callout-content {
  padding-left: 5px;
  padding-right: 5px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 191, 188, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(233, 49, 71, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(233, 49, 71, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  background-color: rgba(120, 82, 238, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(233, 49, 71, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  background-color: rgba(8, 109, 221, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  background-color: rgba(8, 109, 221, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  background-color: rgba(236, 117, 0, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(158, 158, 158, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  background-color: rgba(8, 185, 78, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 191, 188, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(8, 109, 221, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(236, 117, 0, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
  background-color: rgb(192, 192, 192);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  box-shadow: rgb(0, 0, 0) -1.5px -1.5px 0px 0px inset, rgb(192, 192, 192) 0px 0px 0px 0px inset, rgb(128, 128, 128) -2px -2px 0px 0px inset, rgb(255, 255, 255) 2px 2px 0px 0px inset;
}

body .search > .search-container > .search-space > * {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(3, 30, 94);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  box-shadow: rgb(192, 192, 192) -1px -1px 0px 0px inset, rgb(128, 128, 128) 2px 2px 0px 0px inset, rgb(192, 192, 192) -1px -1px 0px 0px inset, rgb(0, 0, 0) 1px 1px 0px 0px inset;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(3, 30, 94);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 255, 255);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(3, 30, 94, 0.1);
  border-bottom-color: rgba(3, 30, 94, 0.15);
  border-left-color: rgba(3, 30, 94, 0.15);
  border-right-color: rgba(3, 30, 94, 0.15);
  border-top-color: rgba(3, 30, 94, 0.15);
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body a.internal.tag-link::before {
  color: rgb(3, 30, 94);
}

body h1 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body h2 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body h2.page-title, h2.page-title a {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body h3 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body h4 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body h5 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body h6 {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body hr {
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
  background-color: rgb(192, 192, 192);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body ul.section-ul {
  background-color: rgb(255, 255, 255);
  border-top-color: rgb(0, 0, 0);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(34, 34, 34);
  stroke: rgb(34, 34, 34);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
    misc: `body .metadata {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .metadata-properties {
  font-family: "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body .navigation-progress {
  background-color: rgb(192, 192, 192);
}

body .page-header h2.page-title {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}

body input[type=text] {
  font-family: "??", "??", "??", Win95Font, Inter, Rubik, "Segoe UI";
}`,
  },
};
