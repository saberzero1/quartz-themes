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
  --canvas-color-2: 255, 144, 0;
  --canvas-color-3: 260, 200, 44;
  --canvas-color-5: 0, 191, 188;
  --canvas-color-6: 120, 82, 238;
  --checklist-done-color: #555555;
  --code-function: #ffc82c;
  --code-important: #ff9000;
  --code-keyword: #ff4d7b;
  --code-pre-radius: 8px;
  --code-property: #00bfbc;
  --code-value: #7852ee;
  --color-cyan: #00bfbc;
  --color-cyan-rgb: 0, 191, 188;
  --color-orange: #ff9000;
  --color-orange-rgb: 255, 144, 0;
  --color-pink: #ff4d7b;
  --color-pink-rgb: 255, 77, 123;
  --color-purple: #7852ee;
  --color-purple-rgb: 120, 82, 238;
  --color-yellow: #ffc82c;
  --color-yellow-rgb: 260, 200, 44;
  --embed-padding: 0 0 0 20px;
  --graph-node-attachment: #ffc82c;
  --quote-qutter-background: #2a2a2a;
  --sync-avatar-color-2: #ff9000;
  --sync-avatar-color-3: #ffc82c;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #ff4d7b;
  --text-warning: #ff9000;
  --quartz-icon-color: currentColor;
}`,
    links: `body a.internal, .breadcrumb-container .breadcrumb-element > a {
  text-decoration: rgb(166, 138, 249);
}

body a.internal.broken {
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 200, 44);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 200, 44);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 200, 44);
  border-left-color: rgb(255, 200, 44);
  border-right-color: rgb(255, 200, 44);
  border-top-color: rgb(255, 200, 44);
}

body pre > code, pre:has(> code) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre:has(> code) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `body .transclude {
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
}

body .transclude-inner {
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(85, 85, 85);
  text-decoration: line-through rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}`,
    callouts: `body .callout .callout-title {
  gap: 8px;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
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
    scrollbars: `body .callout {
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
  --checklist-done-color: #bdbdbd;
  --code-border-color: #e3e3e3;
  --code-keyword: #e8426d;
  --code-pre-radius: 8px;
  --color-pink: #e8426d;
  --color-pink-rgb: 232, 66, 109;
  --embed-padding: 0 0 0 20px;
  --quote-qutter-background: #e3e3e3;
  --sync-avatar-color-8: #e8426d;
  --quartz-icon-color: currentColor;
}`,
    links: `body a.internal, .breadcrumb-container .breadcrumb-element > a {
  text-decoration: rgb(138, 92, 245);
}

body a.internal.broken {
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(227, 227, 227);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(227, 227, 227);
  border-right-color: rgb(227, 227, 227);
  border-top-color: rgb(227, 227, 227);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(227, 227, 227);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(227, 227, 227);
  border-right-color: rgb(227, 227, 227);
  border-top-color: rgb(227, 227, 227);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre > code, pre:has(> code) {
  border-bottom-color: rgb(227, 227, 227);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(227, 227, 227);
  border-right-color: rgb(227, 227, 227);
  border-top-color: rgb(227, 227, 227);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre:has(> code) {
  border-bottom-color: rgb(227, 227, 227);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(227, 227, 227);
  border-right-color: rgb(227, 227, 227);
  border-top-color: rgb(227, 227, 227);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `body .transclude {
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
}

body .transclude-inner {
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(189, 189, 189);
  text-decoration: line-through rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}`,
    callouts: `body .callout .callout-title {
  gap: 8px;
}

body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-left: 20px;
}`,
  },
};
