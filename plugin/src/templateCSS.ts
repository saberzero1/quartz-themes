/**
 * Template CSS — static layout and component styles ported from v4 compile.js.
 * These styles are mode-independent (they reference CSS variables that are already
 * mode-scoped by the theme CSS). Injected once after theme CSS.
 */
export const TEMPLATE_CSS = `
/* === quartz-themes template styles (ported from v4) === */

.search {
  & > .search-button {
    font-size: 1rem;
    svg {
      color: var(--search-icon-color, var(--text-muted, var(--darkgray)));
      stroke: var(--search-icon-color, var(--text-muted, var(--darkgray)));
    }
  }
  & > .search-container {
    & > .search-space {
        margin: 12vh auto;
      & > input {
        margin-bottom: 0;
        border-bottom: none;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        font-size: 1.1rem;
        &:has(+ :not(.display-results)) {
          border-radius: inherit;
        }
      }
      & > * {
        background: transparent;
        margin-bottom: 0;
        box-shadow: none;
      }
      & > .search-layout {
        &.display-results {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }
        & .highlight {
          background-color: var(--quartz-text-highlight)
        }
        & > .results-container {
          & .result-card {
            @media all and (min-width: 801px) {
              display: flex;
              &.no-match {
                display: block;
              }
            }
            &:has(~ .result-card:hover),
            &:has(~ .result-card:focus),
            &:has(~ .result-card.focus) {
              background-color: unset;
            }
            & > ul > li > p {
              background-color: transparent;
            }
          }
        }
      }
    }
  }
}

.explorer {
  @media all and (max-width: 800px) {
    &:not(.collapsed) > .explorer-content {
      -webkit-backdrop-filter: blur(8px);
      backdrop-filter: blur(8px);
    }
  }
  .explorer-content {
    .folder-container {
      /* --folder-closed-icon: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 5h-8.586L9.707 3.293A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"></path></svg>');
      /* --folder-open-icon: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.165 19.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 11h-1V8c0-1.103-.897-2-2-2h-6.655L8.789 4H4c-1.103 0-2 .897-2 2v13h.007a1 1 0 0 0 .158.551zM18 8v3H6c-.4 0-.762.238-.919.606L4 14.129V8h14z"></path></svg>');

      text-overflow: ellipsis;
      position: relative;

      @media all and (max-width: 800px) {
        padding-inline-start: 0.5rem;
        padding-inline-end: 0rem;
        border-radius: 0.25rem;
      }
      & > svg {
        opacity: 0.001;
        position: absolute;
        /* height: 1.5rem; */
        /* width: 1.5rem; */
        /* top: 0; */
        /* left: -0.25rem; */
        margin: 0;
      }
      /* &:before { */
        /* width: 1rem; */
        /* height: 1rem; */
        /* min-width: 1rem; */
        /* min-height: 1rem; */
        /* display: flex; */
        /* align-self: baseline; */
        /* background: var(--quartz-icon-color); */
        /* content: ''; */
        /* margin-inline-end: 0.5rem; */
        /* margin-block-start: 0.2rem; */
      /* } */
      & > div {
        width: 100%;
      }
      &:hover {
        font-size: 1rem;
        line-height: 1.5rem;
        background-color: var(--nav-item-background-hover);
        border-radius: 0.25rem;
      }
    }
    /* li:has(> .folder-outer:not(.open)) > .folder-container:before { */
      /* background: var(--collapse-icon-color-collapsed, var(--quartz-icon-color)); */
      /* mask-image: var(--folder-closed-icon); */
      /* -webkit-mask-image: var(--folder-closed-icon); */
    /* } */
    /* li:has(> .folder-outer.open) > .folder-container:before { */
      /* background: var(--collapse-icon-color, var(--quartz-icon-color)); */
      /* mask-image: var(--folder-open-icon); */
      /* -webkit-mask-image: var(--folder-open-icon); */
    /* } */
    ul.explorer-ul li {
      text-overflow: ellipsis;
      position: relative;
      margin-left: 0;

      a {
        display: flex;
        color: inherit;
        font-size: 1rem;
        line-height: 1.5rem;
        padding: inherit;

        &.active,
        &:not(.folder-title):hover {
          font-size: 1rem;
          line-height: 1.5rem;
          background-color: var(--nav-item-background-hover);
          border-radius: 0.25rem;
        }
        &[data-for$="/index"] {
          padding-inline-start: 0.5rem;
          padding-inline-end: 0;
        }
        padding-inline-start: 0;

        @media all and (max-width: 800px) {
          padding-inline-start: 0.5rem;
          padding-inline-end: 0.5rem;
          &[data-for$="/index"] {
            padding-inline-end: 0.5rem;
          }
        }
      }
      /* > a:before { */
        /* --file-icon: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill=""><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/></svg>'); */
        /* width: 1rem; */
        /* height: 1rem; */
        /* min-width: 1rem; */
        /* min-height: 1rem; */
        /* content: ''; */
        /* display: flex; */
        /* align-self: baseline; */
        /* background: var(--quartz-icon-color); */
        /* mask-image: var(--file-icon); */
        /* -webkit-mask-image: var(--file-icon); */
        /* margin-inline-end: 0.5rem; */
        /* margin-block-start: 0.2rem; */
      /* } */
    }
  }
}

.explorer svg,
button.toc-header .fold,
.global-graph-icon,
.readermode,
.darkmode {
  color: var(--quartz-icon-color);
  stroke: var(--quartz-icon-color);
}

@media all and (max-width: 1200px) {
  :root[saved-theme="dark"],
  :root[saved-theme="light"] {
    &body .page > div#quartz-body div.sidebar.right {
      background-color: transparent;
      border-left: none;
    }
  }
}

@media all and (min-width: 1200px) {
  div#quartz-root.page {
    /* workaround for reader-mode */
    display: grid;
    place-items: center;
    width: 100%;
    min-width: 100dvw;
    max-width: 100dvw;
    padding: 0;
    margin: 0;
  }
  div#quartz-root.page div#quartz-body {
    /* workaround for reader-mode */
    width: min(100%, calc(1200px + 300px));
    max-width: min(100%, calc(1200px + 300px));
    padding: 0 auto;
  }
  .page > #quartz-body {
    & div.center,
    & footer {
      min-width: calc(100% - 3rem);
      max-width: calc(100% - 3rem);
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      margin-left: 0;
      margin-right: 0;
    }
  }
}

@media all and (min-width: 800px) and (max-width: 1200px) {
  .page > #quartz-body {
    padding-left: 0;
    padding-right: 0;

    div.center,
    footer {
      min-width: calc(100% - 3rem);
      max-width: calc(100% - 3rem);
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    div.sidebar.left {
      padding-left: 2rem;
    }

    div.sidebar.right,
    footer {
      padding: 0 1.5rem;
    }

    div.sidebar.right {
      max-width: 100%;
    }
  }
}

@media all and (max-width: 800px) {
  .page > div#quartz-body div.sidebar.left {
    background-color: transparent;
    border-right: none;
  }
  .page > #quartz-body {
    padding: 0;

    div.center,
    footer {
      min-width: calc(100dvw - 3rem);
      max-width: calc(100dvw - 3rem);
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    div.sidebar.left,
    div.sidebar.left:has(.explorer) {
      padding: 1rem 1.5rem 1rem 1rem;
    }

    div.sidebar.right,
    footer {
      padding: 0 1.5rem;
    }

    div.sidebar.left,
    div.sidebar.right {
      max-width: 100dvw;
    }

    /* overflow fix for explorer on mobile */
    .explorer {
      .explorer-content {
        padding-left: 1rem;
        padding-right: 1rem;
        overflow-y: auto;
        max-height: 100vh;
        & > .explorer-ul {
          min-height: 0;
          overscroll-behavior: contain;
        }
        ul {
          overscroll-behavior: auto;
        }
      }
    }
  }
  .page-title {
    display: none;
  }
}

.callout.is-collapsed .callout-content>:first-child {
  margin-top: -4rem;
}

figure[data-rehype-pretty-code-figure] pre,
pre {
  background-color: var(--code-background);
  white-space: pre;

  & > code {
    overflow-x: auto;

    span[data-token-type="keyword"] {
      color: var(--code-keyword);
    }
    span[data-token-type="string"] {
      color: var(--code-string);
    }
    span[data-token-type="comment"] {
      color: var(--code-comment);
      font-style: italic;
    }
    span[data-token-type="function"] {
      color: var(--code-function);
    }
    span[data-token-type="value"] {
      color: var(--code-value);
    }
    span[data-token-type="operator"] {
      color: var(--code-operator);
    }
    span[data-token-type="property"] {
      color: var(--code-property);
    }
    span[data-token-type="normal"] {
      color: var(--code-normal);
    }
    span[data-token-type="tag"] {
      color: var(--code-tag);
    }
    span[data-token-type="important"] {
      color: var(--code-important);
      font-style: italic;
    }
    span[data-token-type="punctuation"] {
      color: var(--code-punctuation);
    }
    span[data-token-type="regexp"] {
      color: var(--code-string);
    }

    /* Legacy: github-light/github-dark only — remove once tokenClassification is standard */
    span[style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"] {
      color: var(--code-value);
    }
    span[style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"] {
      color: var(--code-function);
    }
    span[style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"] {
      color: var(--code-string);
    }
    span[style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;"] {
      color: var(--code-property);
    }
    span[style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"] {
      color: var(--code-normal);
    }
    span[style="--shiki-light:#586069;--shiki-dark:#D1D5DA;"] {
      color: var(--code-punctuation);
    }
    span[style="--shiki-light:#F6F8FA;--shiki-dark:#2F363D;"] {
      color: var(--code-comment);
    }
    span[style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"] {
      color: var(--code-comment);
    }
    span[style="--shiki-light:#22863A;--shiki-dark:#85E89D;"] {
      color: var(--code-tag);
    }
    span[style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"] {
      color: var(--code-important);
    }
    span[style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;"] {
      color: var(--code-operator);
    }
    span[style="--shiki-light:#D73A49;--shiki-dark:#F97583;"] {
      color: var(--code-keyword);
    }

    background-color: transparent;
    color: var(--code-normal);
  }
}

/*
blockquote.callout {
  .callout-title {
    color: var(--color);
    .callout-icon {
      background-color: var(--color);
    }
  }
  .callout-title > .callout-title-inner > p {
    color: var(--color);
  }
  &[data-callout] {
    border: 1px solid var(--border);
    background-color: var(--bg);
    --color: rgb(var(--callout-info, 2, 122, 255));
    --border: rgba(var(--callout-info, 2, 122, 255), 0.267);
    --bg: rgba(var(--callout-info, 2, 122, 255), 0.063);
  }
  &[data-callout="note"] {
    --color: rgb(var(--callout-default, 2, 122, 255));
    --border: rgba(var(--callout-default, 2, 122, 255), 0.267);
    --bg: rgba(var(--callout-default, 2, 122, 255), 0.063);
  }
  &[data-callout="abstract"] {
    --color: rgb(var(--callout-summary, 83, 223, 221));
    --border: rgba(var(--callout-summary, 83, 223, 221), 0.267);
    --bg: rgba(var(--callout-summary, 83, 223, 221), 0.063);
  }
  &[data-callout="info"] {
    --color: rgb(var(--callout-info, 2, 122, 255));
    --border: rgba(var(--callout-info, 2, 122, 255), 0.267);
    --bg: rgba(var(--callout-info, 2, 122, 255), 0.063);
  }
  &[data-callout="todo"] {
    --color: rgb(var(--callout-todo, 2, 122, 255));
    --border: rgba(var(--callout-todo, 2, 122, 255), 0.267);
    --bg: rgba(var(--callout-todo, 2, 122, 255), 0.063);
  }
  &[data-callout="tip"] {
    --color: rgb(var(--callout-tip, 83, 223, 221));
    --border: rgba(var(--callout-tip, 83, 223, 221), 0.267);
    --bg: rgba(var(--callout-tip, 83, 223, 221), 0.063);
  }
  &[data-callout="success"] {
    --color: rgb(var(--callout-success, 68, 207, 110));
    --border: rgba(var(--callout-success, 68, 207, 110), 0.267);
    --bg: rgba(var(--callout-success, 68, 207, 110), 0.063);
  }
  &[data-callout="question"] {
    --color: rgb(var(--callout-question, 233, 151, 63));
    --border: rgba(var(--callout-question, 233, 151, 63), 0.267);
    --bg: rgba(var(--callout-question, 233, 151, 63), 0.063);
  }
  &[data-callout="warning"] {
    --color: rgb(var(--callout-warning, 233, 151, 63));
    --border: rgba(var(--callout-warning, 233, 151, 63), 0.267);
    --bg: rgba(var(--callout-warning, 233, 151, 63), 0.063);
  }
  &[data-callout="failure"] {
    --color: rgb(var(--callout-fail, 251, 70, 76));
    --border: rgba(var(--callout-fail, 251, 70, 76), 0.267);
    --bg: rgba(var(--callout-fail, 251, 70, 76), 0.063);
  }
  &[data-callout="danger"] {
    --color: rgb(var(--callout-error, 251, 70, 76));
    --border: rgba(var(--callout-error, 251, 70, 76), 0.267);
    --bg: rgba(var(--callout-error, 251, 70, 76), 0.063);
  }
  &[data-callout="bug"] {
    --color: rgb(var(--callout-bug, 251, 70, 76));
    --border: rgba(var(--callout-bug, 251, 70, 76), 0.267);
    --bg: rgba(var(--callout-bug, 251, 70, 76), 0.063);
  }
  &[data-callout="example"] {
    --color: rgb(var(--callout-example, 168, 130, 255));
    --border: rgba(var(--callout-example, 168, 130, 255), 0.267);
    --bg: rgba(var(--callout-example, 168, 130, 255), 0.063);
  }
  &[data-callout="quote"] {
    --color: rgb(var(--callout-quote, 158, 158, 158));
    --border: rgba(var(--callout-quote, 158, 158, 158), 0.267);
    --bg: rgba(var(--callout-quote, 158, 158, 158), 0.063);
  }
}
*/

:root[reader-mode="on"] {
  body[data-slug] {
    div#quartz-root.page {
      transition: background-color .2s;
      &:not(:has(.sidebar:hover)) {
        background-color: transparent;
        transition: background-color .2s;
        .sidebar {
          opacity: 0;
          transition: opacity .2s;
        }
      }
    }
    div#quartz-root.page:not(:has(.center:hover, footer:hover)):hover {
      .sidebar {
        opacity: 1;
        transition: opacity .2s;
      }
    }
  }
}

/* fallback for internal links */
body a.internal-link {
  background-color: rgb(from var(--highlight) r g b / 0.3);
}

:root[saved-theme="light"], :root[saved-theme="dark"] {
  body {
    a.external-link, a.internal-link, .breadcrumb-container .breadcrumb-element > a, footer a {
      text-decoration: none;
    }
    div#quartz-root.page[data-frame="canvas"] > div#quartz-body,
    div#quartz-root.page[data-frame="excalidraw"] > div#quartz-body {
      width: 100%;
      max-width: 100%;
      &> .canvas-frame,
      &> .excalidraw-frame {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
}

`;

/**
 * Styles that must override both Quartz base and theme CSS.
 * Injected in @layer quartz-themes-base (above obsidian-theme,
 * below obsidian-theme-overrides and un-layered custom.scss).
 */
export const TEMPLATE_OVERRIDE_CSS = `
/* heading sizes */
h1 { --h1-size: 1.618rem; }
h2 { --h2-size: 1.462rem; }
h3 { --h3-size: 1.318rem; }
h4 { --h4-size: 1.188rem; }
h5 { --h5-size: 1.076rem; }
h6 { --h6-size: 1rem; }
h2.page-title { font-size: 1rem; }
.backlinks > h3,
.graph > h3,
.explorer-toggle > h2 {
  font-size: 1.318rem;
  margin-bottom: 0;
}

/* icon buttons — mask-image icons need a visible background */
button.readermode {
  & > svg { display: none; }
  --readermode-icon: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJvb2stb3Blbi1pY29uIGx1Y2lkZS1ib29rLW9wZW4iPjxwYXRoIGQ9Ik0xMiA3djE0Ii8+PHBhdGggZD0iTTMgMThhMSAxIDAgMCAxLTEtMVY0YTEgMSAwIDAgMSAxLTFoNWE0IDQgMCAwIDEgNCA0IDQgNCAwIDAgMSA0LTRoNWExIDEgMCAwIDEgMSAxdjEzYTEgMSAwIDAgMS0xIDFoLTZhMyAzIDAgMCAwLTMgMyAzIDMgMCAwIDAtMy0zeiIvPjwvc3ZnPg==');
  background: var(--quartz-icon-color);
  mask-image: var(--readermode-icon);
  -webkit-mask-image: var(--readermode-icon);
  width: 24px;
  height: 24px;
}

button.global-graph-icon {
  & > svg { display: none; }
  --graph-icon: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdpdC1mb3JrLWljb24gbHVjaWRlLWdpdC1mb3JrIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjE4IiByPSIzIi8+PGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjMiLz48Y2lyY2xlIGN4PSIxOCIgY3k9IjYiIHI9IjMiLz48cGF0aCBkPSJNMTggOXYyYzAgLjYtLjQgMS0xIDFIN2MtLjYgMC0xLS40LTEtMVY5Ii8+PHBhdGggZD0iTTEyIDEydjMiLz48L3N2Zz4=');
  background: var(--quartz-icon-color);
  mask-image: var(--graph-icon);
  -webkit-mask-image: var(--graph-icon);
  width: 24px;
  height: 24px;
}

button.darkmode {
  & > svg { display: none !important; }
  --moon-icon: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLW1vb24taWNvbiBsdWNpZGUtbW9vbiI+PHBhdGggZD0iTTEyIDNhNiA2IDAgMCAwIDkgOSA5IDkgMCAxIDEtOS05WiIvPjwvc3ZnPg==');
  --sun-icon: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN1bi1pY29uIGx1Y2lkZS1zdW4iPjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjQiLz48cGF0aCBkPSJNMTIgMnYyIi8+PHBhdGggZD0iTTEyIDIwdjIiLz48cGF0aCBkPSJtNC45MyA0LjkzIDEuNDEgMS40MSIvPjxwYXRoIGQ9Im0xNy42NiAxNy42NiAxLjQxIDEuNDEiLz48cGF0aCBkPSJNMiAxMmgyIi8+PHBhdGggZD0iTTIwIDEyaDIiLz48cGF0aCBkPSJtNi4zNCAxNy42Ni0xLjQxIDEuNDEiLz48cGF0aCBkPSJtMTkuMDcgNC45My0xLjQxIDEuNDEiLz48L3N2Zz4=');
  background: var(--quartz-icon-color);
  width: 24px;
  height: 24px;
}

:root[saved-theme="light"] button.darkmode {
  mask-image: var(--sun-icon);
  -webkit-mask-image: var(--sun-icon);
}
:root[saved-theme="dark"] button.darkmode {
  mask-image: var(--moon-icon);
  -webkit-mask-image: var(--moon-icon);
}

/* explorer icons */
/* .explorer .explorer-content .folder-container:before { */
  /* background: var(--quartz-icon-color); */
/* } */
/* .explorer .explorer-content ul.explorer-ul li > a:before { */
  /* background: var(--quartz-icon-color); */
/* } */

/* inline sidebar fixes */
@media all and (max-width: 1200px) {
  :root[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right,
  :root[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
    background-color: transparent;
  }
}

/* reader mode fixes */
@media all and (min-width: 1200px) {
  :root[saved-theme="dark"] body[data-slug] div#quartz-root.page:not([data-frame="canvas"]):not([data-frame="excalidraw"]),
  :root[saved-theme="light"] body[data-slug] div#quartz-root.page:not([data-frame="canvas"]):not([data-frame="excalidraw"]) {
    background-color: var(--tab-container-background);
  }
  .page:not([data-frame="canvas"]):not([data-frame="excalidraw"]) {
    margin: 0;
    padding-left: calc((100% - min(1500px, 100dvw))/2);
    padding-right: calc((100% - min(1500px, 100dvw))/2);
  }
  :root[reader-mode="on"][saved-theme="dark"] body[data-slug] div#quartz-root.page,
  :root[reader-mode="on"][saved-theme="light"] body[data-slug] div#quartz-root.page {
    background-color: transparent;
    transition: opacity, background .2s;
  }
  /* hovering left sidebar */
  :root[reader-mode="on"][saved-theme="dark"] body[data-slug] div#quartz-root.page:has(div.sidebar.left:hover),
  :root[reader-mode="on"][saved-theme="light"] body[data-slug] div#quartz-root.page:has(div.sidebar.left:hover) {
    background-color: transparent;
    background-image: linear-gradient(270deg, transparent 0%, transparent 50%, var(--tab-container-background) 50%, var(--tab-container-background) 100%);
  }
  /* hovering right sidebar */
  :root[reader-mode="on"][saved-theme="dark"] body[data-slug] div#quartz-root.page:has(div.sidebar.right:hover),
  :root[reader-mode="on"][saved-theme="light"] body[data-slug] div#quartz-root.page:has(div.sidebar.right:hover) {
    background-color: transparent;
    background-image: linear-gradient(90deg, transparent 0%, transparent 50%, var(--tab-container-background) 50%, var(--tab-container-background) 100%);
  }
}

/* code blocks */
:root[saved-theme="dark"] body code,
:root[saved-theme="light"] body code {
  font-family: monospace;
}

/* center */
@media all and (min-width: 1200px) {
  .page > #quartz-body .center,
  .page > #quartz-body footer {
    min-width: calc(100% - 3rem);
    max-width: calc(100% - 3rem);
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-left: 0;
    margin-right: 0;
  }
}

:root[saved-theme="light"], :root[saved-theme="dark"] {
  body {
    a.external-link, a.internal-link, .breadcrumb-container .breadcrumb-element > a, footer a {
      text-decoration: none;
    }
    div#quartz-root.page[data-frame="canvas"] > div#quartz-body,
    div#quartz-root.page[data-frame="excalidraw"] > div#quartz-body {
      width: 100%;
      max-width: 100%;
      &> .canvas-frame,
      &> .excalidraw-frame {
        padding-left: 0;
        padding-right: 0;
      }
    }
  }
}
`;
