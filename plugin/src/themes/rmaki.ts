import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "rmaki",
    modes: ["dark"],
    variations: [],
    fonts: ["fira-code"],
    fontFiles: [
      {
        family: "Fira Code",
        style: "normal italic bold",
        weight: "100 900",
        file: "fira-code.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
  },
  dark: {
    base: `:root:root {
  --accent: hsl(164, 68%, 72%);
  --black: hsl(240, 7%, 12%);
  --black-dark-1: hsl(240, 7%, 7%);
  --black-light-1: hsl(240, 7%, 17%);
  --black-light-2: hsl(240, 7%, 22%);
  --black-light-3: hsl(240, 7%, 27%);
  --border: 0.5px solid hsl(246, 28%, 48%);
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
  --current-line-bg: hsl(240, 7%, 12%);
  --editor-background: hsl(240, 7%, 7%);
  --editor-icons: hsl(211, 19%, 60%);
  --editor-title: hsl(212, 61%, 91%);
  --explorer-active: hsl(240, 7%, 12%);
  --explorer-active-bg: hsl(164, 68%, 72%);
  --explorer-hover: hsl(240, 7%, 17%);
  --font: "Fira Code", monospace;
  --formatting: hsl(164, 68%, 72%);
  --h-black: 240;
  --h-purple: 246;
  --h-white: 212;
  --heading: 1.1rem;
  --heading-color: hsl(246, 28%, 48%);
  --icon-accent: hsl(164, 68%, 72%);
  --icon-hover: hsl(164, 68%, 72%);
  --icon-normal: hsl(246, 28%, 48%);
  --l-black: 12%;
  --l-purple: 48%;
  --l-white: 91%;
  --line-number: hsl(246, 28%, 33%);
  --list: hsl(246, 28%, 48%);
  --par: 0.9rem;
  --popup-dark: hsl(240, 7%, 7%);
  --purple: hsl(246, 28%, 48%);
  --purple-dark-1: hsl(246, 28%, 43%);
  --purple-dark-2: hsl(246, 28%, 38%);
  --purple-dark-3: hsl(246, 28%, 33%);
  --purple-dark-4: hsl(246, 28%, 28%);
  --purple-dark-5: hsl(246, 28%, 23%);
  --purple-dark-6: hsl(246, 28%, 18%);
  --purple-light-1: hsl(246, 28%, 53%);
  --purple-light-2: hsl(246, 28%, 58%);
  --purple-light-3: hsl(246, 28%, 63%);
  --s-black: 7%;
  --s-purple: 28%;
  --s-white: 61%;
  --search-bar: hsl(240, 7%, 17%);
  --search-hover: hsl(246, 28%, 48%);
  --sidebar-background: hsl(240, 7%, 12%);
  --small: 0.7rem;
  --tab-background: hsl(240, 7%, 7%);
  --text: hsl(212, 61%, 91%);
  --text-mute: hsl(211, 19%, 60%);
  --white: hsl(212, 61%, 91%);
  --white-dark-1: hsl(212, 61%, 86%);
  --white-dark-2: hsl(212, 61%, 81%);
  --white-dark-3: hsl(211, 19%, 60%);
  --quartz-icon-color: currentColor;
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--sidebar-background, rgb(28, 28, 33));
}

html body html {
  --accent: hsl(164, 68%, 72%);
  --black: hsl(var(--h-black), var(--s-black), var(--l-black));
  --black-dark-1: hsl(240, 7%, 7%);
  --black-light-1: hsl(240, 7%, 17%);
  --black-light-2: hsl(240, 7%, 22%);
  --black-light-3: hsl(240, 7%, 27%);
  --border: 0.5px solid var(--purple);
  --current-line-bg: var(--black, hsl(240, 7%, 12%));
  --editor-background: var(--black-dark-1, hsl(240, 7%, 7%));
  --editor-icons: var(--white-dark-3, hsl(211, 19%, 60%));
  --editor-title: var(--white, hsl(212, 61%, 91%));
  --explorer-active: var(--black, hsl(240, 7%, 12%));
  --explorer-active-bg: var(--accent, hsl(164, 68%, 72%));
  --explorer-hover: var(--black-light-1, hsl(240, 7%, 17%));
  --font: "Fira Code", monospace;
  --formatting: var(--accent, hsl(164, 68%, 72%));
  --h-black: 240;
  --h-purple: 246;
  --h-white: 212;
  --heading: 1.1rem;
  --heading-color: var(--purple, hsl(246, 28%, 48%));
  --icon-accent: var(--accent, hsl(164, 68%, 72%));
  --icon-hover: var(--accent, hsl(164, 68%, 72%));
  --icon-normal: var(--purple, hsl(246, 28%, 48%));
  --l-black: 12%;
  --l-purple: 48%;
  --l-white: 91%;
  --line-number: var(--purple-dark-3, hsl(246, 28%, 33%));
  --list: var(--purple, hsl(246, 28%, 48%));
  --par: 0.9rem;
  --popup-dark: var(--black-dark-1, hsl(240, 7%, 7%));
  --purple: hsl(var(--h-purple), var(--s-purple), var(--l-purple));
  --purple-dark-1: hsl(246, 28%, 43%);
  --purple-dark-2: hsl(246, 28%, 38%);
  --purple-dark-3: hsl(246, 28%, 33%);
  --purple-dark-4: hsl(246, 28%, 28%);
  --purple-dark-5: hsl(246, 28%, 23%);
  --purple-dark-6: hsl(246, 28%, 18%);
  --purple-light-1: hsl(246, 28%, 53%);
  --purple-light-2: hsl(246, 28%, 58%);
  --purple-light-3: hsl(246, 28%, 63%);
  --ribbon-background: var(--black-dark-1, hsl(240, 7%, 7%));
  --s-black: 7%;
  --s-purple: 28%;
  --s-white: 61%;
  --scrollbar-bg: var(--purple, hsl(246, 28%, 48%));
  --search-bar: var(--black-light-1, hsl(240, 7%, 17%));
  --search-hover: var(--purple, hsl(246, 28%, 48%));
  --sidebar-background: var(--black, hsl(240, 7%, 12%));
  --small: 0.7rem;
  --tab-background: var(--black-dark-1, hsl(240, 7%, 7%));
  --text: var(--white, hsl(212, 61%, 91%));
  --text-mute: var(--white-dark-3, hsl(211, 19%, 60%));
  --white: hsl(var(--h-white), var(--s-white), var(--l-white));
  --white-dark-1: hsl(212, 61%, 86%);
  --white-dark-2: hsl(212, 61%, 81%);
  --white-dark-3: hsl(211, 19%, 60%);
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: var(--bold-color, rgb(218, 231, 246));
  font-family: "Fira Code", monospace;
  outline: rgb(218, 231, 246) none 0px;
  text-decoration-color: rgb(218, 231, 246);
}

html body .markdown-rendered p > em, html em {
  color: var(--italic-color, rgb(218, 231, 246));
  font-family: "Fira Code", monospace;
  outline: rgb(218, 231, 246) none 0px;
  text-decoration-color: rgb(218, 231, 246);
}

html body .markdown-rendered p > i, html i {
  color: var(--italic-color, rgb(218, 231, 246));
  font-family: "Fira Code", monospace;
  outline: rgb(218, 231, 246) none 0px;
  text-decoration-color: rgb(218, 231, 246);
}

html body .markdown-rendered p > strong > em, html strong > em {
  color: var(--italic-color, rgb(218, 231, 246));
  font-family: "Fira Code", monospace;
  outline: rgb(218, 231, 246) none 0px;
  text-decoration-color: rgb(218, 231, 246);
}

html body .markdown-rendered p > strong, html strong {
  color: var(--bold-color, rgb(218, 231, 246));
  font-family: "Fira Code", monospace;
  outline: rgb(218, 231, 246) none 0px;
  text-decoration-color: rgb(218, 231, 246);
}

html body .text-highlight {
  background-color: var(--accent, rgb(135, 232, 206));
  color: var(--black-dark-1, rgb(17, 17, 19));
  font-family: "Fira Code", monospace;
  outline: rgb(17, 17, 19) none 0px;
  text-decoration-color: rgb(17, 17, 19);
}

html body del {
  color: rgb(218, 231, 246);
  font-family: "Fira Code", monospace;
  outline: rgb(218, 231, 246) none 0px;
  text-decoration-color: rgb(218, 231, 246);
}

html body p {
  font-family: "Fira Code", monospace;
}`,
    links: `html body a.external-link, html footer a {
  color: var(--white, rgb(218, 231, 246));
  font-family: "Fira Code", monospace;
  outline: rgb(218, 231, 246) none 0px;
  text-decoration: underline rgb(135, 232, 206);
  text-decoration-color: var(--accent, rgb(135, 232, 206));
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: var(--white, rgb(166, 138, 249));
  font-family: "Fira Code", monospace;
  text-decoration: underline rgb(135, 232, 206);
  text-decoration-color: var(--accent, rgb(135, 232, 206));
}

html body a.internal-link.broken {
  font-family: "Fira Code", monospace;
  text-decoration: underline rgb(135, 232, 206);
  text-decoration-color: var(--accent, rgb(135, 232, 206));
}`,
    lists: `html body dd {
  font-family: "Fira Code", monospace;
  font-size: 14.4px;
}

html body dl {
  margin-bottom: 14.4px;
  margin-top: 14.4px;
}

html body dt {
  font-family: "Fira Code", monospace;
  font-size: 14.4px;
}

html body ol > li {
  color: rgb(218, 231, 246);
  margin-left: 26.5672px;
  padding-bottom: var(--list-spacing, 1.08px);
  padding-top: var(--list-spacing, 1.08px);
}

html body ul > li {
  color: rgb(218, 231, 246);
  margin-left: 26.5672px;
  padding-bottom: var(--list-spacing, 1.08px);
  padding-top: var(--list-spacing, 1.08px);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: var(--white, rgb(218, 231, 246));
  text-decoration: underline rgb(135, 232, 206);
}

html body blockquote {
  color: var(--text, rgb(218, 231, 246));
  font-family: "Fira Code", monospace;
  line-height: 21.6px;
}`,
    tables: `html body table {
  font-family: "Fira Code", monospace;
}

html body th {
  color: var(--accent, rgb(135, 232, 206));
}`,
    code: `html body code {
  padding-bottom: 1.89px;
  padding-left: 3.78px;
  padding-right: 3.78px;
  padding-top: 1.89px;
}`,
    images: `html body video {
  border-bottom-color: rgb(218, 231, 246);
  border-left-color: rgb(218, 231, 246);
  border-right-color: rgb(218, 231, 246);
  border-top-color: rgb(218, 231, 246);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "Fira Code", monospace;
}

html body .katex-display > .katex > .katex-html {
  font-family: "Fira Code", monospace;
}

html body li.task-list-item[data-task="#"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="$"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="%"] {
  color: rgb(218, 231, 246);
}

html li.task-list-item[data-task="body"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="'"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="+"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task=", html "] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="."] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="0"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="1"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="2"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="3"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="4"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="5"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="6"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="7"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="8"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="9"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task=":"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task=";"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="<"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="="] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="@"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="A"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="B"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="C"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="D"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="E"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="F"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="G"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="H"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="J"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="K"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="L"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="M"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="N"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="O"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="P"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="Q"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="R"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="T"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="U"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="V"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="W"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="Y"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="Z"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="_"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="\`"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="a"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="e"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="g"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="h"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="j"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="m"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="n"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="o"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="q"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="r"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="s"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="t"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="v"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="y"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="z"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="|"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="~"] {
  color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(218, 231, 246);
  text-decoration-color: rgb(218, 231, 246);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
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
  background-color: var(--black-dark-1, rgb(17, 17, 19));
  color: var(--text-normal, rgb(218, 231, 246));
  font-family: "Fira Code", monospace;
}

html body .search > .search-container > .search-space > * {
  font-family: "Fira Code", monospace;
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 25.2px;
  border-bottom-right-radius: 25.2px;
  border-top-left-radius: 25.2px;
  border-top-right-radius: 25.2px;
  font-size: 12.6px;
  line-height: var(--line-height-tight, 12.6px);
}

html body h1 {
  border-bottom-color: rgb(135, 232, 206);
  border-left-color: rgb(135, 232, 206);
  border-right-color: rgb(135, 232, 206);
  border-top-color: rgb(135, 232, 206);
  color: var(--accent, rgb(135, 232, 206));
  font-family: var(--h1-font, "Fira Code", monospace);
  font-size: var(--h1-size, 23.2992px);
  letter-spacing: var(--h1-letter-spacing, -0.349488px);
  line-height: var(--h1-line-height, 27.959px);
}

html body h1.article-title {
  font-size: var(--inline-title-size, 23.2992px);
}

html body h2 {
  border-bottom-color: rgb(135, 232, 206);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(95, 88, 157);
  border-right-color: rgb(95, 88, 157);
  border-top-color: rgb(95, 88, 157);
  color: var(--purple, rgb(95, 88, 157));
  font-family: var(--h2-font, "Fira Code", monospace);
  font-size: var(--h2-size, 21.0528px);
  letter-spacing: var(--h2-letter-spacing, -0.231581px);
  line-height: var(--h2-line-height, 25.2634px);
}

html body h2.page-title, html h2.page-title a {
  font-family: var(--inline-title-font, "Fira Code", monospace);
  font-size: var(--inline-title-size, 23.2992px);
  letter-spacing: -0.349488px;
  line-height: var(--inline-title-line-height, 27.959px);
  margin-bottom: 11.6496px;
}

html body h3 {
  border-bottom-color: rgb(140, 134, 187);
  border-left-color: rgb(140, 134, 187);
  border-right-color: rgb(140, 134, 187);
  border-top-color: rgb(140, 134, 187);
  color: var(--purple-light-3, rgb(140, 134, 187));
  font-family: var(--h3-font, "Fira Code", monospace);
  font-size: var(--h3-size, 18.9792px);
  font-weight: var(--font-weight, 400);
  letter-spacing: var(--h3-letter-spacing, -0.151834px);
  line-height: var(--h3-line-height, 24.673px);
}

html body h4 {
  border-bottom-color: rgb(95, 88, 157);
  border-left-color: rgb(95, 88, 157);
  border-right-color: rgb(95, 88, 157);
  border-top-color: rgb(95, 88, 157);
  color: var(--purple, rgb(95, 88, 157));
  font-family: var(--h4-font, "Fira Code", monospace);
  font-size: var(--h4-size, 17.1072px);
  font-weight: var(--font-weight, 400);
  letter-spacing: var(--h4-letter-spacing, -0.085536px);
  line-height: var(--h4-line-height, 23.9501px);
}

html body h5 {
  border-bottom-color: rgb(135, 232, 206);
  border-left-color: rgb(135, 232, 206);
  border-right-color: rgb(135, 232, 206);
  border-top-color: rgb(135, 232, 206);
  color: var(--accent, rgb(135, 232, 206));
  font-family: var(--h5-font, "Fira Code", monospace);
  font-size: var(--h5-size, 15.4944px);
  letter-spacing: var(--h5-letter-spacing, -0.0309888px);
  line-height: var(--h5-line-height, 23.2416px);
}

html body h6 {
  border-bottom-color: rgb(95, 88, 157);
  border-left-color: rgb(95, 88, 157);
  border-right-color: rgb(95, 88, 157);
  border-top-color: rgb(95, 88, 157);
  color: var(--purple, rgb(95, 88, 157));
  font-family: var(--h6-font, "Fira Code", monospace);
  font-size: var(--h6-size, 14.4px);
  line-height: var(--h6-line-height, 21.6px);
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  font-family: "Fira Code", monospace;
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  font-family: "Fira Code", monospace;
}`,
    footer: `html body footer {
  background-color: var(--editor-background, rgb(17, 17, 19));
  border-top-color: rgb(95, 88, 157);
  font-family: "Fira Code", monospace;
}

html body footer ul li a {
  color: var(--text-mute, rgb(134, 152, 172));
}`,
    recentNotes: `html body .recent-notes > h3 {
  font-family: "Fira Code", monospace;
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--text-mute, rgb(134, 152, 172));
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(134, 152, 172);
  font-family: "Fira Code", monospace;
}`,
    listPage: `html body li.section-li > .section .meta {
  color: rgb(134, 152, 172);
  font-family: "Fira Code", monospace;
}

html body li.section-li > .section > .desc > h3 > a {
  color: var(--text-mute, rgb(134, 152, 172));
}`,
    bases: `html body .bases-table thead th {
  color: var(--accent, rgb(135, 232, 206));
}`,
    properties: `html body .metadata {
  font-family: "Fira Code", monospace;
}

html body .metadata-container .metadata-property {
  font-family: "Fira Code", monospace;
}

html body .metadata-properties {
  font-family: "Fira Code", monospace;
}

html body .metadata-property-key {
  font-size: 14.4px;
}

html body .metadata-property-value {
  font-size: 14.4px;
}

html body .note-properties-tags {
  border-radius: 25.2px;
}`,
    stacked: `html body .stacked-page {
  background-color: var(--sidebar-background, rgb(28, 28, 33));
}

html body .stacked-page-header {
  background-color: var(--tab-background, rgb(17, 17, 19));
}`,
    misc: `html body .navigation-progress {
  background-color: var(--editor-background, rgb(17, 17, 19));
}

html body .page-header h2.page-title {
  border-bottom-color: rgb(218, 231, 246);
  border-left-color: rgb(218, 231, 246);
  border-right-color: rgb(218, 231, 246);
  border-top-color: rgb(218, 231, 246);
  color: var(--editor-title, rgb(218, 231, 246));
}

html body abbr {
  color: rgb(218, 231, 246);
}

html body kbd {
  font-size: var(--code-size, 12.6px);
  padding-bottom: 1.26px;
  padding-left: 3.15px;
  padding-right: 3.15px;
  padding-top: 1.26px;
}

html body progress {
  border-bottom-color: rgb(218, 231, 246);
  border-left-color: rgb(218, 231, 246);
  border-right-color: rgb(218, 231, 246);
  border-top-color: rgb(218, 231, 246);
}

html body sub {
  color: rgb(218, 231, 246);
  font-size: 12px;
}

html body sup {
  color: rgb(218, 231, 246);
  font-size: 12px;
}

html body ul.tags > li {
  border-bottom-left-radius: 22.05px;
  border-bottom-right-radius: 22.05px;
  border-top-left-radius: 22.05px;
  border-top-right-radius: 22.05px;
  color: var(--white, rgb(218, 231, 246));
}`,
  },
  light: {},
};
