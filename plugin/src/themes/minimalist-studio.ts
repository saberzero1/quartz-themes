import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "minimalist-studio",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --callout-example: 120, 82, 238;
  --callout-important: 0, 191, 188;
  --callout-padding: 12px 12px 12px 20px;
  --callout-question: 255, 144, 0;
  --callout-radius: 8px;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-warning: 255, 144, 0;
  --canvas-color-2: 255, 144, 0 !important;
  --canvas-color-3: 260, 200, 44 !important;
  --canvas-color-5: 0, 191, 188 !important;
  --canvas-color-6: 120, 82, 238 !important;
  --checklist-done-color: #555555 !important;
  --code-function: #ffc82c !important;
  --code-important: #ff9000 !important;
  --code-keyword: #ff4d7b !important;
  --code-pre-radius: 8px !important;
  --code-property: #00bfbc !important;
  --code-value: #7852ee !important;
  --color-cyan: #00bfbc !important;
  --color-cyan-rgb: 0, 191, 188 !important;
  --color-orange: #ff9000 !important;
  --color-orange-rgb: 255, 144, 0 !important;
  --color-pink: #ff4d7b !important;
  --color-pink-rgb: 255, 77, 123 !important;
  --color-purple: #7852ee !important;
  --color-purple-rgb: 120, 82, 238 !important;
  --color-yellow: #ffc82c !important;
  --color-yellow-rgb: 260, 200, 44 !important;
  --embed-padding: 0 0 0 20px !important;
  --graph-node-attachment: #ffc82c !important;
  --quote-qutter-background: #2a2a2a !important;
  --sync-avatar-color-2: #ff9000 !important;
  --sync-avatar-color-3: #ffc82c !important;
  --sync-avatar-color-5: #00bfbc !important;
  --sync-avatar-color-7: #7852ee !important;
  --sync-avatar-color-8: #ff4d7b !important;
  --text-warning: #ff9000 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    links: `html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  text-decoration: rgb(166, 138, 249);
}

html[saved-theme="dark"] body a.internal.broken {
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    code: `html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(255, 200, 44);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 200, 44);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 200, 44);
  border-left-color: rgb(255, 200, 44);
  border-right-color: rgb(255, 200, 44);
  border-top-color: rgb(255, 200, 44);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body pre:has(> code) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `html[saved-theme="dark"] body .transclude {
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(85, 85, 85);
  text-decoration: line-through rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 188, 0.1);
  border-bottom-color: rgba(0, 191, 188, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 191, 188, 0.25);
  border-right-color: rgba(0, 191, 188, 0.25);
  border-top-color: rgba(0, 191, 188, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgba(120, 82, 238, 0.1);
  border-bottom-color: rgba(120, 82, 238, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(120, 82, 238, 0.25);
  border-right-color: rgba(120, 82, 238, 0.25);
  border-top-color: rgba(120, 82, 238, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 255, 144, 0;
  background-color: rgba(255, 144, 0, 0.1);
  border-bottom-color: rgba(255, 144, 0, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 144, 0, 0.25);
  border-right-color: rgba(255, 144, 0, 0.25);
  border-top-color: rgba(255, 144, 0, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 188, 0.1);
  border-bottom-color: rgba(0, 191, 188, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 191, 188, 0.25);
  border-right-color: rgba(0, 191, 188, 0.25);
  border-top-color: rgba(0, 191, 188, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 255, 144, 0;
  background-color: rgba(255, 144, 0, 0.1);
  border-bottom-color: rgba(255, 144, 0, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 144, 0, 0.25);
  border-right-color: rgba(255, 144, 0, 0.25);
  border-top-color: rgba(255, 144, 0, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-left: 20px;
}`,
  },
  light: {
    base: `:root:root {
  --callout-padding: 12px 12px 12px 20px;
  --callout-radius: 8px;
  --checklist-done-color: #bdbdbd !important;
  --code-border-color: #e3e3e3 !important;
  --code-keyword: #e8426d !important;
  --code-pre-radius: 8px !important;
  --color-pink: #e8426d !important;
  --color-pink-rgb: 232, 66, 109 !important;
  --embed-padding: 0 0 0 20px !important;
  --quote-qutter-background: #e3e3e3 !important;
  --sync-avatar-color-8: #e8426d !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    links: `html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  text-decoration: rgb(138, 92, 245);
}

html[saved-theme="light"] body a.internal.broken {
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    code: `html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(227, 227, 227);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(227, 227, 227);
  border-right-color: rgb(227, 227, 227);
  border-top-color: rgb(227, 227, 227);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(227, 227, 227);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(227, 227, 227);
  border-right-color: rgb(227, 227, 227);
  border-top-color: rgb(227, 227, 227);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  border-bottom-color: rgb(227, 227, 227);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(227, 227, 227);
  border-right-color: rgb(227, 227, 227);
  border-top-color: rgb(227, 227, 227);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body pre:has(> code) {
  border-bottom-color: rgb(227, 227, 227);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(227, 227, 227);
  border-right-color: rgb(227, 227, 227);
  border-top-color: rgb(227, 227, 227);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `html[saved-theme="light"] body .transclude {
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
}

html[saved-theme="light"] body .transclude-inner {
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(189, 189, 189);
  text-decoration: line-through rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-left: 20px;
}`,
  },
};
