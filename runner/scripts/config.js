// src/extraction-config.js
// TODO: Fix background color mappings
// Probably needs to target the publish container div directly instead of body
const expansions = {
  borderStyle: [
    "border-left-style",
    "border-bottom-style",
    "border-right-style",
    "border-top-style",
  ],
  borderColor: [
    "border-left-color",
    "border-right-color",
    "border-top-color",
    "border-bottom-color",
  ],
  borderWidth: [
    "border-left-width",
    "border-right-width",
    "border-top-width",
    "border-bottom-width",
  ],
  borderRadius: [
    "border-top-left-radius",
    "border-top-right-radius",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-start-start-radius",
    "border-start-end-radius",
    "border-end-start-radius",
    "border-end-end-radius",
  ],
};

const defaults = {
  border: [
    ...expansions.borderStyle,
    ...expansions.borderColor,
    ...expansions.borderWidth,
    ...expansions.borderRadius,
  ],
  margin: [
    "margin-top",
    "margin-bottom",
    "margin-left",
    "margin-right",
    "margin-block-end",
    "margin-block-start",
    "margin-inline-end",
    "margin-inline-start",
  ],
  padding: ["padding-top", "padding-bottom", "padding-left", "padding-right"],
  transition: [
    "transition-behavior",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
  ],
  whiteSpace: [
    "white-space-collapse",
    "text-wrap-mode",
    //"white-space-trim", // not implemented in any browser at the moment.
  ],
};

const sets = {
  typography: [
    "color",
    "font-family",
    //"font-size",
    "font-weight",
    "line-height",
  ],
  text: [
    "background-color",
    "color",
    "cursor",
    "filter",
    "font-family",
    //"font-size",
    "font-weight",
    //"line-height",
    //"margin-block-end",
    //"margin-block-start",
    "outline",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-style",
    "text-decoration-thickness",
    "transition",
    "user-select",
  ],
  list: [
    "color",
    //"padding-top",
    //"padding-bottom",
    //"margin-inline-start",
    "text-align",
  ],
  pill: [
    "align-items",
    "background-color",
    "display",
    "font-family",
    //"font-size",
    "font-weight",
    //"line-height",
    "margin-inline-start",
    ...defaults.border,
  ],
  blockquote: [
    "background-color",
    "border-inline-start",
    "font-family",
    "font-style",
    "padding-bottom",
    "padding-top",
    "padding-inline-start",
    "margin-inline-start",
    "margin-inline-end",
  ],
  headings: ["color", "font-family", "text-shadow"],
  callouts: {
    container: [
      "--callout-color",
      //"--callout-icon",
      "background-color",
      //"border-style",
      //"border-color",
      //"border-width",
      //"border-radius",
      "mix-blend-mode",
      //"padding",
      ...defaults.border,
    ],
    content: ["background-color", ...defaults.padding],
    icon: [/*"color", */ "fill", "stroke"],
    title: [
      //"color",
      /*"font-size", */ "gap" /*, "line-height"*/,
      ...defaults.border,
      ...defaults.padding,
    ],
    titleInner: ["color", "font-weight"],
  },
  background: ["background-color"],
  mermaid: ["stroke", "fill" /*"filter", "font-family", "font-size"*/],
  math: ["display", "text-align", ...defaults.whiteSpace, "font-family"],
  // ... other property groups
};

const body =
  "body > div.app-container > div.horizontal-main-container > div > div.workspace-split.mod-vertical.mod-root > div > div.workspace-tab-container > div > div > div.view-content";

const extractionTargets = {
  general: {
    file: "general.md",
    selectors: [
      // {
      //   obsidianSelector: `.quartz-icon-selector`,
      //   publishSelector: null,
      //   quartzSelector: "div#quartz-body",
      //   pseudoElement: "",
      //   properties: ["--quartz-icon-color"],
      // },
      {
        obsidianSelector: null,
        publishSelector: null,
        quartzSelector: "div#quartz-root",
        pseudoElement: "",
        properties: ["background-color", "color", "font-family", "font-size"],
      },
      // links
      {
        obsidianSelector: `a.external-link`,
        publishSelector: `.markdown-rendered a.external-link`,
        quartzSelector: "a.external",
        pseudoElement: "",
        properties: sets.text,
      },
      {
        obsidianSelector: `a.internal-link`,
        publishSelector: `.markdown-rendered a.internal-link`,
        quartzSelector: "a.internal",
        pseudoElement: "",
        properties: sets.text,
      },
      // text
      {
        obsidianSelector: `p`,
        publishSelector: `.markdown-rendered p`,
        quartzSelector: "p",
        pseudoElement: "",
        properties: sets.text,
      },
      {
        obsidianSelector: `strong`,
        publishSelector: `strong`,
        quartzSelector: ".page article p > strong, strong",
        pseudoElement: "",
        properties: sets.text,
      },
      {
        obsidianSelector: `b`,
        publishSelector: `b`,
        quartzSelector: ".page article p > b, b",
        pseudoElement: "",
        properties: sets.text,
      },
      {
        obsidianSelector: `em`,
        publishSelector: `em`,
        quartzSelector: ".page article p > em, em",
        pseudoElement: "",
        properties: sets.text,
      },
      {
        obsidianSelector: `i`,
        publishSelector: `i`,
        quartzSelector: ".page article p > i, i",
        pseudoElement: "",
        properties: sets.text,
      },
      {
        obsidianSelector: `u`,
        publishSelector: `u`,
        quartzSelector: ".page article p > u, u",
        pseudoElement: "",
        properties: sets.text,
      },
      {
        obsidianSelector: `s`,
        publishSelector: `s`,
        quartzSelector: ".page article p > s, s",
        pseudoElement: "",
        properties: sets.text,
      },
      {
        obsidianSelector: `strong > em`,
        publishSelector: `strong > em`,
        quartzSelector: ".page article p > strong > em, strong > em",
        pseudoElement: "",
        properties: sets.text,
      },
      {
        obsidianSelector: `mark`,
        publishSelector: `.markdown-rendered mark`,
        quartzSelector: ".text-highlight",
        pseudoElement: "",
        properties: sets.text,
      },
      // Selected state for search
      {
        obsidianSelector: `.suggestion-item.is-selected`,
        publishSelector: `.suggestion-item.is-selected`,
        quartzSelector:
          ".search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus))",
        pseudoElement: "",
        properties: ["background-color", "border-radius", "color"],
      },
      {
        obsidianSelector: `div.suggestion-item`,
        publishSelector: `div.suggestion-item`,
        quartzSelector:
          ".search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover)",
        pseudoElement: "",
        properties: ["background-color", "border-radius", "color"],
      },
      {
        obsidianSelector: `del`,
        publishSelector: `del`,
        quartzSelector: "del",
        pseudoElement: "",
        properties: sets.text,
      },
      {
        obsidianSelector: `hr`,
        publishSelector: `.markdown-rendered hr`,
        quartzSelector: "hr",
        pseudoElement: "",
        properties: [
          "border",
          "border-color",
          "border-style",
          "border-top",
          "box-shadow",
          "margin",
        ],
      },
      // tag pills
      {
        obsidianSelector: `div.multi-select-pill`,
        publishSelector: `div.multi-select-pill`,
        quartzSelector:
          "a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag",
        pseudoElement: "",
        properties: sets.pill,
      },
      {
        obsidianSelector: `div.multi-select-pill > div.multi-select-pill-content`,
        publishSelector: `div.multi-select-pill > div.multi-select-pill-content`,
        quartzSelector: "a.internal.tag-link::before",
        pseudoElement: "",
        properties: ["color"],
      },
      // list items
      {
        obsidianSelector: `ul.has-list-bullet > li`,
        publishSelector: `.markdown-rendered ul > li`,
        quartzSelector: "ul > li",
        pseudoElement: "",
        properties: sets.list,
      },
      {
        obsidianSelector: `ul.has-list-bullet > li > .list-bullet`,
        publishSelector: `.markdown-rendered ul > li::marker`,
        quartzSelector: "ul > li::marker",
        pseudoElement: "::after",
        properties: [
          "background-color",
          "border",
          "border-color",
          "border-radius",
          "color",
          "content",
          "pointer-events",
          "transform",
          "transition",
        ],
      },
      {
        obsidianSelector: `ol > li`,
        publishSelector: `.markdown-rendered ol > li`,
        quartzSelector: "ol > li",
        pseudoElement: "",
        properties: sets.list,
      },
      {
        obsidianSelector: `ol > li`,
        publishSelector: `.markdown-rendered ol > li::marker`,
        quartzSelector: "ol > li::marker",
        pseudoElement: "::marker",
        properties: ["color"],
      },
      // code blocks
      {
        obsidianSelector: `p > code`,
        publishSelector: `.markdown-rendered code`,
        quartzSelector: "code",
        pseudoElement: "",
        properties: [
          "background-color",
          "border",
          "border-color",
          "border-radius",
          "color",
          "font-family",
          //"font-size",
          "padding",
        ],
      },
      {
        obsidianSelector: `pre > code`,
        publishSelector: `.markdown-rendered pre > code`,
        quartzSelector: "pre > code",
        pseudoElement: "",
        properties: [
          "background-color",
          "border",
          "border-color",
          "border-radius",
          "overflow-x",
          "padding",
          "white-space",
        ],
      },
      {
        obsidianSelector: `pre:has(> code)`,
        publishSelector: `:not(pre) > code[class*="language-"], pre[class*="language-"]`,
        quartzSelector: "pre:has(> code)",
        pseudoElement: "",
        properties: [
          "background-color",
          "border",
          "border-color",
          "border-radius",
          "overflow-x",
          "padding",
          "white-space",
        ],
      },
      // checkboxes
      {
        obsidianSelector: `ul.contains-task-list > li.task-list-item > .task-list-item-checkbox`,
        publishSelector: `ul.contains-task-list > li.task-list-item > .task-list-item-checkbox`,
        quartzSelector: "input[type=checkbox]",
        pseudoElement: "",
        properties: [
          "appearance",
          "border",
          "border-color",
          "border-radius",
          "padding",
          "margin",
          "width",
          "margin-inline-start",
          "margin-inline-end",
          "transition",
          "position",
          "top",
        ],
      },
      {
        obsidianSelector: `ul.contains-task-list > li.task-list-item`,
        publishSelector: `ul.contains-task-list > li.task-list-item`,
        quartzSelector: "ul > li.task-list-item",
        pseudoElement: "",
        properties: ["list-style", "text-align", "display"],
      },
      {
        obsidianSelector: `ul.contains-task-list > li.task-list-item > input[type=checkbox]:checked`,
        publishSelector: `ul.contains-task-list > li.task-list-item > input[type=checkbox]:checked`,
        quartzSelector: "input[type=checkbox]:checked:after",
        pseudoElement: "::after",
        properties: [
          "content",
          "top",
          "inset-inline-start",
          "position",
          "width",
          "display",
          "background-color",
          "-webkit-mask-position",
          "-webkit-mask-size",
          "-webkit-mask-repeat",
          "-webkit-mask-image",
        ],
      },
      {
        obsidianSelector: `ul > li.task-list-item[data-task="x"]`,
        publishSelector: `ul > li.task-list-item[data-task="x"]`,
        quartzSelector: ".page article li:has(>input[type=checkbox]:checked)",
        pseudoElement: "",
        properties: ["color", "text-decoration", "text-decoration-color"],
      },
      // blockquote
      {
        obsidianSelector: `blockquote`,
        publishSelector: `.markdown-rendered blockquote`,
        quartzSelector: "blockquote",
        pseudoElement: "",
        properties: sets.blockquote,
      },
      // footnotes
      {
        obsidianSelector: `.footnote-backref`,
        publishSelector: `.footnote-backref`,
        quartzSelector: ".data-footnote-backref",
        pseudoElement: "",
        properties: ["color", "text-decoration"],
      },
      // search
      {
        obsidianSelector: `.block-language-dataviewjs input[type="search"]`,
        publishSelector: `.site-body-left-column input.search-bar`,
        quartzSelector: ".search > .search-button",
        pseudoElement: "",
        properties: [
          "background-color",
          "border",
          "border-color",
          "border-radius",
          "color",
          "font-family",
          //"font-size",
          //"padding",
        ],
      },
      {
        obsidianSelector: `.prompt`,
        publishSelector: `.search-results`,
        quartzSelector: ".search > .search-container > .search-space",
        pseudoElement: "",
        properties: [
          "background-color",
          "border",
          "border-radius",
          "box-shadow",
        ],
      },
      {
        obsidianSelector: `.prompt > .prompt-input-container > input`,
        publishSelector: null,
        quartzSelector: ".search > .search-container > .search-space > input",
        pseudoElement: "",
        properties: [
          "background-color",
          "border",
          "border-bottom",
          "border-radius",
          "box-shadow",
        ],
      },
      {
        obsidianSelector: `.prompt > .prompt-results`,
        publishSelector: `.search-results > *`,
        quartzSelector: ".search > .search-container > .search-space > *",
        pseudoElement: "",
        properties: sets.text,
      },
      {
        obsidianSelector: `div.prompt`,
        publishSelector: `div.search-results`,
        quartzSelector:
          ".search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results",
        pseudoElement: "",
        properties: ["border-color"],
      },
      {
        obsidianSelector: `div.prompt .prompt-results .suggestion-item`,
        publishSelector: `.search-results .suggestion-item`,
        quartzSelector:
          ".search > .search-container > .search-space > .search-layout > .results-container",
        pseudoElement: "",
        properties: ["color"],
      },
      {
        obsidianSelector: `div.prompt div.prompt-results .suggestion-item`,
        publishSelector: `div.search-results .suggestion-item`,
        quartzSelector:
          ".search > .search-container > .search-space > .search-layout > .results-container .result-card",
        pseudoElement: "",
        properties: ["border-color"],
      },
      {
        obsidianSelector: `div.prompt .prompt-results .suggestion-item.is-selected`,
        publishSelector: `.search-results .suggestion-item.is-selected`,
        quartzSelector:
          ".search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus))",
        pseudoElement: "",
        properties: ["color", "font-weight", "background-color"],
      },
      {
        obsidianSelector: `div.prompt div.prompt-results .suggestion-item.is-selected`,
        publishSelector: `div.search-results .suggestion-item.is-selected`,
        quartzSelector:
          ".search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description",
        pseudoElement: "",
        properties: ["color"],
      },
    ],
  },
  headings: {
    file: "headings.md",
    selectors: [
      {
        obsidianSelector: `h1`,
        publishSelector: `.published-container .markdown-rendered h1`,
        quartzSelector: "h1",
        pseudoElement: "",
        properties: sets.headings,
      },
      {
        obsidianSelector: `h2`,
        publishSelector: `.published-container .markdown-rendered h2`,
        quartzSelector: "h2",
        pseudoElement: "",
        properties: sets.headings,
      },
      {
        obsidianSelector: `h3`,
        publishSelector: `.published-container .markdown-rendered h3`,
        quartzSelector: "h3",
        pseudoElement: "",
        properties: sets.headings,
      },
      {
        obsidianSelector: `h4`,
        publishSelector: `.published-container .markdown-rendered h4`,
        quartzSelector: "h4",
        pseudoElement: "",
        properties: sets.headings,
      },
      {
        obsidianSelector: `h5`,
        publishSelector: `.published-container .markdown-rendered h5`,
        quartzSelector: "h5",
        pseudoElement: "",
        properties: sets.headings,
      },
      {
        obsidianSelector: `h6`,
        publishSelector: `.published-container .markdown-rendered h6`,
        quartzSelector: "h6",
        pseudoElement: "",
        properties: sets.headings,
      },
      // outline
      {
        obsidianSelector: `.block-language-dataviewjs .view-content .tree-item > .tree-item-self`,
        publishSelector: `.outline-view-outer .outline-view .tree-item > .tree-item-self`,
        quartzSelector: "li.depth-0",
        pseudoElement: "",
        properties: [/*"font-size", "line-height", */ "font-weight"],
      },
      {
        obsidianSelector: `.block-language-dataviewjs .view-content .tree-item > .tree-item-children`,
        publishSelector: `.outline-view-outer .outline-view .tree-item > .tree-item-children`,
        quartzSelector: "li.depth-0 + li.depth-1",
        pseudoElement: "",
        properties: [
          "margin-inline-start",
          "padding-inline-start",
          "border-inline-start",
        ],
      },
      {
        obsidianSelector: `.block-language-dataviewjs .view-content .tree-item .tree-item > .tree-item-self`,
        publishSelector: `.outline-view-outer .outline-view .tree-item .tree-item > .tree-item-self`,
        quartzSelector: "li.depth-1",
        pseudoElement: "",
        properties: [/*"font-size", "line-height", */ "font-weight"],
      },
      {
        obsidianSelector: `.block-language-dataviewjs .view-content .tree-item .tree-item > .tree-item-children`,
        publishSelector: `.outline-view-outer .outline-view .tree-item .tree-item > .tree-item-children`,
        quartzSelector: "li.depth-1 + li.depth-2",
        pseudoElement: "",
        properties: [
          "margin-inline-start",
          "padding-inline-start",
          "border-inline-start",
        ],
      },
      {
        obsidianSelector: `.block-language-dataviewjs .view-content .tree-item .tree-item .tree-item > .tree-item-self`,
        publishSelector: `.outline-view-outer .outline-view .tree-item .tree-item .tree-item > .tree-item-self`,
        quartzSelector: "li.depth-2",
        pseudoElement: "",
        properties: [/*"font-size", "line-height", */ "font-weight"],
      },
      {
        obsidianSelector: `.block-language-dataviewjs .view-content .tree-item .tree-item .tree-item > .tree-item-children`,
        publishSelector: `.outline-view-outer .outline-view .tree-item .tree-item .tree-item > .tree-item-children`,
        quartzSelector: "li.depth-2 + li.depth-3",
        pseudoElement: "",
        properties: [
          "margin-inline-start",
          "padding-inline-start",
          "border-inline-start",
        ],
      },
      {
        obsidianSelector: `.block-language-dataviewjs .view-content .tree-item .tree-item .tree-item .tree-item > .tree-item-self`,
        publishSelector: `.outline-view-outer .outline-view .tree-item .tree-item .tree-item .tree-item > .tree-item-self`,
        quartzSelector: "li.depth-3",
        pseudoElement: "",
        properties: [/*"font-size", "line-height", */ "font-weight"],
      },
      {
        obsidianSelector: `.block-language-dataviewjs .view-content .tree-item .tree-item .tree-item .tree-item > .tree-item-children`,
        publishSelector: `.outline-view-outer .outline-view .tree-item .tree-item .tree-item .tree-item > .tree-item-children`,
        quartzSelector: "li.depth-3 + li.depth-4",
        pseudoElement: "",
        properties: [
          "margin-inline-start",
          "padding-inline-start",
          "border-inline-start",
        ],
      },
      {
        obsidianSelector: `.block-language-dataviewjs .view-content .tree-item .tree-item .tree-item .tree-item .tree-item > .tree-item-self`,
        publishSelector: `.outline-view-outer .outline-view .tree-item .tree-item .tree-item .tree-item .tree-item > .tree-item-self`,
        quartzSelector: "li.depth-4",
        pseudoElement: "",
        properties: [/*"font-size", "line-height", */ "font-weight"],
      },
      {
        obsidianSelector: `.block-language-dataviewjs .view-content .tree-item .tree-item .tree-item .tree-item .tree-item > .tree-item-children`,
        publishSelector: `.outline-view-outer .outline-view .tree-item .tree-item .tree-item .tree-item .tree-item > .tree-item-children`,
        quartzSelector: "li.depth-4 + li.depth-5",
        pseudoElement: "",
        properties: [
          "margin-inline-start",
          "padding-inline-start",
          "border-inline-start",
        ],
      },
      {
        obsidianSelector: `.block-language-dataviewjs .view-content .tree-item .tree-item .tree-item .tree-item .tree-item .tree-item > .tree-item-self`,
        publishSelector: `.outline-view-outer .outline-view .tree-item .tree-item .tree-item .tree-item .tree-item .tree-item > .tree-item-self`,
        quartzSelector: "li.depth-5",
        pseudoElement: "",
        properties: [/*"font-size", "line-height", */ "font-weight"],
      },
      {
        obsidianSelector: `.block-language-dataviewjs .view-content .tree-item .tree-item .tree-item .tree-item .tree-item .tree-item > .tree-item-children`,
        publishSelector: `.outline-view-outer .outline-view .tree-item .tree-item .tree-item .tree-item .tree-item .tree-item > .tree-item-children`,
        quartzSelector: "li.depth-5 + li.depth-6",
        pseudoElement: "",
        properties: [
          "margin-inline-start",
          "padding-inline-start",
          "border-inline-start",
        ],
      },
      // table
    ],
  },
  callouts: {
    file: "callouts.md",
    selectors: [
      // scrollbars
      {
        obsidianSelector: `.markdown-preview-sizer`,
        publishSelector: `.markdown-preview-sizer`,
        quartzSelector: "::-webkit-scrollbar",
        pseudoElement: "::-webkit-scrollbar",
        properties: ["background-color"],
      },
      {
        obsidianSelector: `.markdown-preview-sizer`,
        publishSelector: `.markdown-preview-sizer`,
        quartzSelector: "::-webkit-scrollbar-thumb",
        pseudoElement: "::-webkit-scrollbar-thumb",
        properties: [
          "background-color",
          "border-radius",
          "border-width",
          "border",
          "border-color",
          "box-shadow",
        ],
      },
      // note
      {
        obsidianSelector: `.callout[data-callout="note"]`,
        publishSelector: `.callout[data-callout="note"]`,
        // quartzSelector: ".callout[data-callout]",
        quartzSelector: ".callout",
        pseudoElement: "",
        properties: [
          "--callout-color",
          //"--callout-icon",
          //"background-color",
          "border-style",
          //"border-color",
          "border-width",
          "border-radius",
          "mix-blend-mode",
          "padding",
        ],
      },
      /*
      {
        obsidianSelector: `div.callout-title`,
        publishSelector: `.callout-title`,
        // quartzSelector: ".callout[data-callout] .callout-title",
        quartzSelector: ".callout .callout-title",
        pseudoElement: "",
        properties: sets.callouts.title,
      },
      */
      {
        obsidianSelector: `.callout[data-callout="note"] > .callout-title > .callout-icon > svg.svg-icon`,
        publishSelector: `.callout[data-callout="note"] > .callout-title > .callout-icon > svg.svg-icon`,
        // quartzSelector: ".callout[data-callout] .callout-title .callout-icon",
        quartzSelector: ".callout .callout-title .callout-icon",
        pseudoElement: "",
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="note"] > .callout-title`,
        publishSelector: `.callout[data-callout="note"] > .callout-title`,
        // quartzSelector:
        // ".callout[data-callout] .callout-title > .callout-title-inner > p",
        quartzSelector: ".callout .callout-title > .callout-title-inner > p",
        pseudoElement: "",
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="note"] > .callout-content`,
        publishSelector: `.callout[data-callout="note"] > .callout-content`,
        // quartzSelector: ".callout[data-callout] > .callout-content",
        quartzSelector: ".callout > .callout-content",
        pseudoElement: "",
        properties: sets.callouts.content,
      },
      // note
      {
        obsidianSelector: `.callout[data-callout="note"]`,
        publishSelector: `.callout[data-callout="note"]`,
        quartzSelector: `.callout[data-callout="note"]`,
        pseudoElement: "",
        properties: sets.callouts.container,
      },
      /*
      {
        obsidianSelector: `.callout[data-callout="note"] > .callout-title`,
        publishSelector: `.callout[data-callout="note"] > .callout-title`,
        quartzSelector: `.callout[data-callout="note"] .callout-title`,
        pseudoElement: "",
        properties: sets.callouts.title,
      },
      */
      {
        obsidianSelector: `svg.lucide-pencil.svg-icon`,
        publishSelector: `.callout[data-callout="note"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="note"] .callout-title .callout-icon`,
        pseudoElement: "",
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="note"] > .callout-title`,
        publishSelector: `.callout[data-callout="note"] > .callout-title`,
        quartzSelector: `.callout[data-callout="note"] .callout-title > .callout-title-inner > p`,
        pseudoElement: "",
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="note"] > .callout-content`,
        publishSelector: `.callout[data-callout="note"] > .callout-content`,
        quartzSelector: `.callout[data-callout="note"] > .callout-content`,
        pseudoElement: "",
        properties: sets.callouts.content,
      },
      // abstract
      {
        obsidianSelector: `.callout[data-callout="abstract"]`,
        publishSelector: `.callout[data-callout="abstract"]`,
        quartzSelector: `.callout[data-callout="abstract"]`,
        pseudoElement: "",
        properties: sets.callouts.container,
      },
      /*
      {
        obsidianSelector: `.callout[data-callout="abstract"] > .callout-title`,
        publishSelector: `.callout[data-callout="abstract"] > .callout-title`,
        quartzSelector: `.callout[data-callout="abstract"] .callout-title`,
        pseudoElement: "",
        properties: sets.callouts.title,
      },
      */
      {
        obsidianSelector: `svg.lucide-clipboard-list.svg-icon`,
        publishSelector: `.callout[data-callout="abstract"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="abstract"] .callout-title .callout-icon`,
        pseudoElement: "",
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="abstract"] > .callout-title`,
        publishSelector: `.callout[data-callout="abstract"] > .callout-title`,
        quartzSelector: `.callout[data-callout="abstract"] .callout-title > .callout-title-inner > p`,
        pseudoElement: "",
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="abstract"] > .callout-content`,
        publishSelector: `.callout[data-callout="abstract"] > .callout-content`,
        quartzSelector: `.callout[data-callout="abstract"] > .callout-content`,
        pseudoElement: "",
        properties: sets.callouts.content,
      },
      // info
      {
        obsidianSelector: `.callout[data-callout="info"]`,
        publishSelector: `.callout[data-callout="info"]`,
        quartzSelector: `.callout[data-callout="info"]`,
        pseudoElement: "",
        properties: sets.callouts.container,
      },
      /*
      {
        obsidianSelector: `.callout[data-callout="info"] > .callout-title`,
        publishSelector: `.callout[data-callout="info"] > .callout-title`,
        quartzSelector: `.callout[data-callout="info"] .callout-title`,
        pseudoElement: "",
        properties: sets.callouts.title,
      },
      */
      {
        obsidianSelector: `svg.lucide-info.svg-icon`,
        publishSelector: `.callout[data-callout="info"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="info"] .callout-title .callout-icon`,
        pseudoElement: "",
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="info"] > .callout-title`,
        publishSelector: `.callout[data-callout="info"] > .callout-title`,
        quartzSelector: `.callout[data-callout="info"] .callout-title > .callout-title-inner > p`,
        pseudoElement: "",
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="info"] > .callout-content`,
        publishSelector: `.callout[data-callout="info"] > .callout-content`,
        quartzSelector: `.callout[data-callout="info"] > .callout-content`,
        pseudoElement: "",
        properties: sets.callouts.content,
      },
      // todo
      {
        obsidianSelector: `.callout[data-callout="todo"]`,
        publishSelector: `.callout[data-callout="todo"]`,
        quartzSelector: `.callout[data-callout="todo"]`,
        pseudoElement: "",
        properties: sets.callouts.container,
      },
      /*
      {
        obsidianSelector: `.callout[data-callout="todo"] > .callout-title`,
        publishSelector: `.callout[data-callout="todo"] > .callout-title`,
        quartzSelector: `.callout[data-callout="todo"] .callout-title`,
        pseudoElement: "",
        properties: sets.callouts.title,
      },
      */
      {
        obsidianSelector: `svg.lucide-check-circle-2.svg-icon`,
        publishSelector: `.callout[data-callout="todo"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="todo"] .callout-title .callout-icon`,
        pseudoElement: "",
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="todo"] > .callout-title`,
        publishSelector: `.callout[data-callout="todo"] > .callout-title`,
        quartzSelector: `.callout[data-callout="todo"] .callout-title > .callout-title-inner > p`,
        pseudoElement: "",
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="todo"] > .callout-content`,
        publishSelector: `.callout[data-callout="todo"] > .callout-content`,
        quartzSelector: `.callout[data-callout="todo"] > .callout-content`,
        pseudoElement: "",
        properties: sets.callouts.content,
      },
      // tip
      {
        obsidianSelector: `.callout[data-callout="tip"]`,
        publishSelector: `.callout[data-callout="tip"]`,
        quartzSelector: `.callout[data-callout="tip"]`,
        pseudoElement: "",
        properties: sets.callouts.container,
      },
      /*
      {
        obsidianSelector: `.callout[data-callout="tip"] > .callout-title`,
        publishSelector: `.callout[data-callout="tip"] > .callout-title`,
        quartzSelector: `.callout[data-callout="tip"] .callout-title`,
        pseudoElement: "",
        properties: sets.callouts.title,
      },
      */
      {
        obsidianSelector: `svg.lucide-flame.svg-icon`,
        publishSelector: `.callout[data-callout="tip"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="tip"] .callout-title .callout-icon`,
        pseudoElement: "",
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="tip"] > .callout-title`,
        publishSelector: `.callout[data-callout="tip"] > .callout-title`,
        quartzSelector: `.callout[data-callout="tip"] .callout-title > .callout-title-inner > p`,
        pseudoElement: "",
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="tip"] > .callout-content`,
        publishSelector: `.callout[data-callout="tip"] > .callout-content`,
        quartzSelector: `.callout[data-callout="tip"] > .callout-content`,
        pseudoElement: "",
        properties: sets.callouts.content,
      },
      // success
      {
        obsidianSelector: `.callout[data-callout="success"]`,
        publishSelector: `.callout[data-callout="success"]`,
        quartzSelector: `.callout[data-callout="success"]`,
        pseudoElement: "",
        properties: sets.callouts.container,
      },
      /*
      {
        obsidianSelector: `.callout[data-callout="success"] > .callout-title`,
        publishSelector: `.callout[data-callout="success"] > .callout-title`,
        quartzSelector: `.callout[data-callout="success"] .callout-title`,
        pseudoElement: "",
        properties: sets.callouts.title,
      },
      */
      {
        obsidianSelector: `svg.lucide-check.svg-icon`,
        publishSelector: `.callout[data-callout="success"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="success"] .callout-title .callout-icon`,
        pseudoElement: "",
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="success"] > .callout-title`,
        publishSelector: `.callout[data-callout="success"] > .callout-title`,
        quartzSelector: `.callout[data-callout="success"] .callout-title > .callout-title-inner > p`,
        pseudoElement: "",
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="success"] > .callout-content`,
        publishSelector: `.callout[data-callout="success"] > .callout-content`,
        quartzSelector: `.callout[data-callout="success"] > .callout-content`,
        pseudoElement: "",
        properties: sets.callouts.content,
      },
      // question
      {
        obsidianSelector: `.callout[data-callout="question"]`,
        publishSelector: `.callout[data-callout="question"]`,
        quartzSelector: `.callout[data-callout="question"]`,
        pseudoElement: "",
        properties: sets.callouts.container,
      },
      /*
      {
        obsidianSelector: `.callout[data-callout="question"] > .callout-title`,
        publishSelector: `.callout[data-callout="question"] > .callout-title`,
        quartzSelector: `.callout[data-callout="question"] .callout-title`,
        pseudoElement: "",
        properties: sets.callouts.title,
      },
      */
      {
        obsidianSelector: `svg.lucide-help-circle.svg-icon`,
        publishSelector: `.callout[data-callout="question"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="question"] .callout-title .callout-icon`,
        pseudoElement: "",
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="question"] > .callout-title`,
        publishSelector: `.callout[data-callout="question"] > .callout-title`,
        quartzSelector: `.callout[data-callout="question"] .callout-title > .callout-title-inner > p`,
        pseudoElement: "",
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="question"] > .callout-content`,
        publishSelector: `.callout[data-callout="question"] > .callout-content`,
        quartzSelector: `.callout[data-callout="question"] > .callout-content`,
        pseudoElement: "",
        properties: sets.callouts.content,
      },
      // warning
      {
        obsidianSelector: `.callout[data-callout="warning"]`,
        publishSelector: `.callout[data-callout="warning"]`,
        quartzSelector: `.callout[data-callout="warning"]`,
        pseudoElement: "",
        properties: sets.callouts.container,
      },
      /*
      {
        obsidianSelector: `.callout[data-callout="warning"] > .callout-title`,
        publishSelector: `.callout[data-callout="warning"] > .callout-title`,
        quartzSelector: `.callout[data-callout="warning"] .callout-title`,
        pseudoElement: "",
        properties: sets.callouts.title,
      },
      */
      {
        obsidianSelector: `svg.lucide-alert-triangle.svg-icon`,
        publishSelector: `.callout[data-callout="warning"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="warning"] .callout-title .callout-icon`,
        pseudoElement: "",
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="warning"] > .callout-title`,
        publishSelector: `.callout[data-callout="warning"] > .callout-title`,
        quartzSelector: `.callout[data-callout="warning"] .callout-title > .callout-title-inner > p`,
        pseudoElement: "",
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="warning"] > .callout-content`,
        publishSelector: `.callout[data-callout="warning"] > .callout-content`,
        quartzSelector: `.callout[data-callout="warning"] > .callout-content`,
        pseudoElement: "",
        properties: sets.callouts.content,
      },
      // danger
      {
        obsidianSelector: `.callout[data-callout="danger"]`,
        publishSelector: `.callout[data-callout="danger"]`,
        quartzSelector: `.callout[data-callout="danger"]`,
        pseudoElement: "",
        properties: sets.callouts.container,
      },
      /*
      {
        obsidianSelector: `.callout[data-callout="danger"] > .callout-title`,
        publishSelector: `.callout[data-callout="danger"] > .callout-title`,
        quartzSelector: `.callout[data-callout="danger"] .callout-title`,
        pseudoElement: "",
        properties: sets.callouts.title,
      },
      */
      {
        obsidianSelector: `svg.lucide-zap.svg-icon`,
        publishSelector: `.callout[data-callout="danger"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="danger"] .callout-title .callout-icon`,
        pseudoElement: "",
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="danger"] > .callout-title`,
        publishSelector: `.callout[data-callout="danger"] > .callout-title`,
        quartzSelector: `.callout[data-callout="danger"] .callout-title > .callout-title-inner > p`,
        pseudoElement: "",
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="danger"] > .callout-content`,
        publishSelector: `.callout[data-callout="danger"] > .callout-content`,
        quartzSelector: `.callout[data-callout="danger"] > .callout-content`,
        pseudoElement: "",
        properties: sets.callouts.content,
      },
      // failure
      {
        obsidianSelector: `.callout[data-callout="failure"]`,
        publishSelector: `.callout[data-callout="failure"]`,
        quartzSelector: `.callout[data-callout="failure"]`,
        pseudoElement: "",
        properties: sets.callouts.container,
      },
      /*
      {
        obsidianSelector: `.callout[data-callout="failure"] > .callout-title`,
        publishSelector: `.callout[data-callout="failure"] > .callout-title`,
        quartzSelector: `.callout[data-callout="failure"] .callout-title`,
        pseudoElement: "",
        properties: sets.callouts.title,
      },
      */
      {
        obsidianSelector: `svg.lucide-x.svg-icon`,
        publishSelector: `.callout[data-callout="failure"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="failure"] .callout-title .callout-icon`,
        pseudoElement: "",
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="failure"] > .callout-title`,
        publishSelector: `.callout[data-callout="failure"] > .callout-title`,
        quartzSelector: `.callout[data-callout="failure"] .callout-title > .callout-title-inner > p`,
        pseudoElement: "",
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="failure"] > .callout-content`,
        publishSelector: `.callout[data-callout="failure"] > .callout-content`,
        quartzSelector: `.callout[data-callout="failure"] > .callout-content`,
        pseudoElement: "",
        properties: sets.callouts.content,
      },
      // bug
      {
        obsidianSelector: `.callout[data-callout="bug"]`,
        publishSelector: `.callout[data-callout="bug"]`,
        quartzSelector: `.callout[data-callout="bug"]`,
        pseudoElement: "",
        properties: sets.callouts.container,
      },
      /*
      {
        obsidianSelector: `.callout[data-callout="bug"] > .callout-title`,
        publishSelector: `.callout[data-callout="bug"] > .callout-title`,
        quartzSelector: `.callout[data-callout="bug"] .callout-title`,
        pseudoElement: "",
        properties: sets.callouts.title,
      },
      */
      {
        obsidianSelector: `svg.lucide-bug.svg-icon`,
        publishSelector: `.callout[data-callout="bug"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="bug"] .callout-title .callout-icon`,
        pseudoElement: "",
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="bug"] > .callout-title`,
        publishSelector: `.callout[data-callout="bug"] > .callout-title`,
        quartzSelector: `.callout[data-callout="bug"] .callout-title > .callout-title-inner > p`,
        pseudoElement: "",
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="bug"] > .callout-content`,
        publishSelector: `.callout[data-callout="bug"] > .callout-content`,
        quartzSelector: `.callout[data-callout="bug"] > .callout-content`,
        pseudoElement: "",
        properties: sets.callouts.content,
      },
      // example
      {
        obsidianSelector: `.callout[data-callout="example"]`,
        publishSelector: `.callout[data-callout="example"]`,
        quartzSelector: `.callout[data-callout="example"]`,
        pseudoElement: "",
        properties: sets.callouts.container,
      },
      /*
      {
        obsidianSelector: `.callout[data-callout="example"] > .callout-title`,
        publishSelector: `.callout[data-callout="example"] > .callout-title`,
        quartzSelector: `.callout[data-callout="example"] .callout-title`,
        pseudoElement: "",
        properties: sets.callouts.title,
      },
      */
      {
        obsidianSelector: `svg.lucide-list.svg-icon`,
        publishSelector: `.callout[data-callout="example"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="example"] .callout-title .callout-icon`,
        pseudoElement: "",
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="example"] > .callout-title`,
        publishSelector: `.callout[data-callout="example"] > .callout-title`,
        quartzSelector: `.callout[data-callout="example"] .callout-title > .callout-title-inner > p`,
        pseudoElement: "",
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="example"] > .callout-content`,
        publishSelector: `.callout[data-callout="example"] > .callout-content`,
        quartzSelector: `.callout[data-callout="example"] > .callout-content`,
        pseudoElement: "",
        properties: sets.callouts.content,
      },
      // quote
      {
        obsidianSelector: `.callout[data-callout="quote"]`,
        publishSelector: `.callout[data-callout="quote"]`,
        quartzSelector: `.callout[data-callout="quote"]`,
        pseudoElement: "",
        properties: sets.callouts.container,
      },
      /*
      {
        obsidianSelector: `.callout[data-callout="quote"] > .callout-title`,
        publishSelector: `.callout[data-callout="quote"] > .callout-title`,
        quartzSelector: `.callout[data-callout="quote"] .callout-title`,
        pseudoElement: "",
        properties: sets.callouts.title,
      },
      */
      {
        obsidianSelector: `svg.lucide-quote.svg-icon`,
        publishSelector: `.callout[data-callout="quote"] > .callout-title > .callout-icon > svg.svg-icon`,
        quartzSelector: `.callout[data-callout="quote"] .callout-title .callout-icon`,
        pseudoElement: "",
        properties: sets.callouts.icon,
      },
      {
        obsidianSelector: `.callout[data-callout="quote"] > .callout-title`,
        publishSelector: `.callout[data-callout="quote"] > .callout-title`,
        quartzSelector: `.callout[data-callout="quote"] .callout-title > .callout-title-inner > p`,
        pseudoElement: "",
        properties: sets.callouts.titleInner,
      },
      {
        obsidianSelector: `.callout[data-callout="quote"] > .callout-content`,
        publishSelector: `.callout[data-callout="quote"] > .callout-content`,
        quartzSelector: `.callout[data-callout="quote"] > .callout-content`,
        pseudoElement: "",
        properties: sets.callouts.content,
      },
    ],
  },
  integrations: {
    file: "integrations.md",
    selectors: [
      // mermaid
      {
        obsidianSelector: `.mermaid > svg`,
        publishSelector: `.mermaid > svg`,
        quartzSelector: "code.mermaid > svg",
        pseudoElement: "",
        properties: sets.mermaid,
      },
      // mathjax
      {
        obsidianSelector: `.math-block > mjx-container.MathJax`,
        publishSelector: `.math-block > mjx-container.MathJax`,
        quartzSelector: ".katex-display > .katex",
        pseudoElement: "",
        properties: sets.math,
      },
      {
        obsidianSelector: `.math-block > mjx-container.MathJax`,
        publishSelector: `div.math-block > mjx-container.MathJax`,
        quartzSelector: ".katex-display > .katex > .katex-html",
        pseudoElement: "",
        properties: ["font-family"],
      },
      {
        obsidianSelector: `.math-inline > mjx-container.MathJax > mjx-math`,
        publishSelector: `.math-inline > mjx-container.MathJax > mjx-math`,
        quartzSelector: ".katex > .katex-html",
        pseudoElement: "",
        properties: ["font-family"],
      },
      // graph
      // TODO: add Publish selector + colors
      {
        obsidianSelector: `span.quartz-graph-target`,
        publishSelector: null,
        quartzSelector: "div.graph",
        pseudoElement: "",
        properties: [
          "--quartz-graph-text",
          "--quartz-graph-line",
          "--quartz-graph-node",
          "--quartz-graph-node-unresolved",
          "--quartz-graph-node-focused",
          "--quartz-graph-node-tag",
          "--quartz-graph-node-attachment",
        ],
      },
      // explorer
      {
        obsidianSelector: `.block-language-dataviewjs .nav-files-container .nav-file-title[data-path="callouts.md"]`,
        publishSelector: `.nav-view-outer .tree-item-self a`,
        quartzSelector: ".explorer .explorer-content ul.explorer-ul li a",
        pseudoElement: "",
        properties: [
          "color",
          "cursor",
          "font-family",
          //"font-size",
          "font-weight",
          //"line-height",
          "text-decoration",
        ],
      },
      {
        // active
        obsidianSelector: `.block-language-dataviewjs .nav-files-container .nav-file-title[data-path="integrations.md"]`,
        publishSelector: `.nav-view-outer .tree-item-self.mod-active`,
        quartzSelector:
          ".explorer .explorer-content ul.explorer-ul li:has(> .active)",
        pseudoElement: "",
        properties: ["background-color", "color", "cursor"],
      },
      {
        // closed
        obsidianSelector: `.block-language-dataviewjs .nav-files-container .nav-folder-title[data-path="folder/collapsed"]`,
        publishSelector: `.nav-view-outer .nav-view > .tree-item.is-collapsed > .tree-item-children > .tree-item > .tree-item-self`,
        quartzSelector:
          ".explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container",
        pseudoElement: "",
        properties: [
          "color",
          "cursor",
          "font-family",
          //"font-size",
          "font-weight",
          //"line-height",
          "text-decoration",
        ],
      },
      {
        // open
        obsidianSelector: `.block-language-dataviewjs .nav-files-container .nav-folder-title[data-path="folder"]`,
        publishSelector: `.nav-view-outer .nav-view > .tree-item > .tree-item-children > .tree-item > .tree-item-self`,
        quartzSelector:
          ".explorer .explorer-content li:has(> .folder-outer.open) > .folder-container",
        pseudoElement: "",
        properties: [
          "color",
          "cursor",
          "font-family",
          //"font-size",
          "font-weight",
          //"line-height",
          "text-decoration",
        ],
      },
    ],
  },
  // ... more targets
};

export const config = [
  {
    obsidianSelector: `div.quartz-icon-selector`,
    publishSelector: null,
    quartzSelector: "div#quartz-body",
    pseudoElement: "",
    properties: ["--quartz-icon-color"],
  },
  // {
  //   obsidianSelector: `div.mod-root.mod-vertical.workspace-split`,
  //   publishSelector: null,
  //   quartzSelector: "&[data-slug]",
  //   pseudoElement: "",
  //   properties: ["background-color", "color"],
  // },
  {
    obsidianSelector: `body`,
    publishSelector: null,
    quartzSelector: "div#quartz-root",
    pseudoElement: "",
    properties: ["background-color", "color"],
  },
  // center content
  {
    obsidianSelector: `div.mod-active.workspace-leaf`,
    publishSelector: null, //TODO
    quartzSelector: `&[data-slug], &[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer`,
    pseudoElement: "",
    properties: ["background-color", "color"],
  },
  // sidebars
  {
    obsidianSelector: `div.workspace-leaf`,
    publishSelector: null, //TODO
    quartzSelector: ".page > div#quartz-body div.sidebar",
    pseudoElement: "",
    properties: ["background-color", "color"],
  },
  {
    obsidianSelector: `div.mod-horizontal.mod-left-split.mod-sidedock.workspace-split`,
    publishSelector: null, //TODO
    quartzSelector:
      "&[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left",
    pseudoElement: "",
    properties: ["background-color", "color"],
  },
  {
    obsidianSelector: `div.mod-horizontal.mod-right-split.mod-sidedock.workspace-split`,
    publishSelector: null, //TODO
    quartzSelector: ".page > div#quartz-body div.sidebar.right",
    pseudoElement: "",
    properties: ["background-color", "color"],
  },
  // separators
  {
    obsidianSelector: `hr.workspace-leaf-resize-handle`,
    publishSelector: null, //TODO
    quartzSelector: ".page > div#quartz-body div.sidebar.left",
    pseudoElement: "",
    properties: [
      "border-right-color",
      "border-right-style",
      "border-right-width",
    ],
  },
  {
    obsidianSelector: `hr.workspace-leaf-resize-handle`,
    publishSelector: null, //TODO
    quartzSelector: ".page > div#quartz-body div.sidebar.right",
    pseudoElement: "",
    properties: ["border-left-color", "border-left-style", "border-left-width"],
  },
  // links
  // TODO: add external link to to markdown so it gets added
  {
    obsidianSelector: `a.external-link[data-tooltip-position=\"top\"]`,
    publishSelector: `.markdown-rendered a.external-link`,
    quartzSelector: "a.external, footer a",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `a.internal-link[data-href=\"callouts\"][data-tooltip-position=\"top\"]`,
    publishSelector: `.markdown-rendered a.internal-link`,
    quartzSelector: "a.internal, .breadcrumb-container .breadcrumb-element > a",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `a.internal-link.is-unresolved[data-href=\"https://example.com\"][data-tooltip-position=\"top\"]`,
    publishSelector: `.markdown-rendered a.internal-link.is-unresolved`,
    quartzSelector: "a.internal.broken",
    pseudoElement: "",
    properties: sets.text,
  },
  // text
  {
    obsidianSelector: `p`,
    publishSelector: `.markdown-rendered p`,
    quartzSelector: "p",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `strong`,
    publishSelector: `strong`,
    quartzSelector: ".page article p > strong, strong",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `strong`,
    publishSelector: `b`,
    quartzSelector: ".page article p > b, b",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `em`,
    publishSelector: `em`,
    quartzSelector: ".page article p > em, em",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `em`,
    publishSelector: `i`,
    quartzSelector: ".page article p > i, i",
    pseudoElement: "",
    properties: sets.text,
  },
  /*
      {
        obsidianSelector: `u`,
        publishSelector: `u`,
        quartzSelector: ".page article p > u, u",
        pseudoElement: "",
        properties: sets.text,
      },
      {
        obsidianSelector: `s`,
        publishSelector: `s`,
        quartzSelector: ".page article p > s, s",
        pseudoElement: "",
        properties: sets.text,
      },
      {
        obsidianSelector: `strong > em`,
        publishSelector: `strong > em`,
        quartzSelector: ".page article p > strong > em, strong > em",
        pseudoElement: "",
        properties: sets.text,
      },
      */
  {
    obsidianSelector: `mark`,
    publishSelector: `.markdown-rendered mark`,
    quartzSelector: ".text-highlight",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `del`,
    publishSelector: `del`,
    quartzSelector: "del",
    pseudoElement: "",
    properties: sets.text,
  },

  // Selected state for search
  {
    obsidianSelector: `div.is-selected.mod-complex.suggestion-item`,
    publishSelector: `.suggestion-item.is-selected`,
    quartzSelector:
      ".search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus))",
    pseudoElement: "",
    properties: [
      "background-color",
      //"border-radius",
      ...expansions.borderRadius,
      "color",
    ],
  },
  {
    obsidianSelector: `div.mod-complex.suggestion-item`,
    publishSelector: `div.suggestion-item`,
    quartzSelector:
      ".search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover)",
    pseudoElement: "",
    properties: [
      "background-color",
      //"border-radius",
      ...defaults.border,
      "color",
    ],
  },
  {
    obsidianSelector: `hr`,
    publishSelector: `.markdown-rendered hr`,
    quartzSelector: "hr",
    pseudoElement: "",
    properties: [
      //"border",
      //"border-color",
      //"border-style",
      //"border-top",
      ...defaults.border,
      "box-shadow",
      //"margin",
      ...defaults.margin,
    ],
  },
  // tag pills
  {
    obsidianSelector: `div.multi-select-pill`,
    publishSelector: `div.multi-select-pill`,
    quartzSelector:
      "a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag",
    pseudoElement: "",
    properties: sets.pill,
  },
  {
    obsidianSelector: `div.multi-select-pill-content`,
    publishSelector: `div.multi-select-pill > div.multi-select-pill-content`,
    quartzSelector: "a.internal.tag-link::before",
    pseudoElement: "",
    properties: ["color"],
  },
  // list items
  {
    obsidianSelector: `li[data-line=\"0\"]`,
    publishSelector: `.markdown-rendered ul > li`,
    quartzSelector: "ul > li",
    pseudoElement: "",
    properties: sets.list,
  },
  {
    obsidianSelector: `span.list-bullet`,
    publishSelector: `.markdown-rendered ul > li::marker`,
    quartzSelector: "ul > li::marker",
    pseudoElement: "::after",
    properties: [
      "background-color",
      //"border",
      //"border-color",
      //"border-radius",
      ...defaults.border,
      "color",
      "content",
      "pointer-events",
      "transform",
      "transition",
    ],
  },
  {
    obsidianSelector: `li[data-line=\"0\"]`,
    publishSelector: `.markdown-rendered ol > li`,
    quartzSelector: "ol > li",
    pseudoElement: "",
    properties: sets.list,
  },
  {
    // TODO: add ::marker to pseudoElements
    obsidianSelector: `span.list-bullet`,
    publishSelector: `.markdown-rendered ol > li::marker`,
    quartzSelector: "ol > li::marker",
    pseudoElement: "::marker",
    properties: ["color"],
  },
  // code blocks
  {
    obsidianSelector: `code`,
    publishSelector: `.markdown-rendered code`,
    quartzSelector: "code",
    pseudoElement: "",
    properties: [
      "background-color",
      //"border",
      //"border-color",
      //"border-radius",
      ...defaults.border,
      "color",
      "font-family",
      //"font-size",
      //"padding",
      ...defaults.padding,
    ],
  },
  {
    obsidianSelector: `pre.language-js`,
    publishSelector: `.markdown-rendered pre > code`,
    quartzSelector: "pre > code, pre:has(> code)",
    pseudoElement: "",
    properties: [
      "background-color",
      //"border",
      //"border-color",
      //"border-radius",
      ...defaults.border,
      "overflow-x",
      //"padding",
      ...defaults.padding,
      //"white-space",
      ...defaults.whiteSpace,
    ],
  },
  {
    obsidianSelector: `pre`,
    publishSelector: `:not(pre) > code[class*="language-"], pre[class*="language-"]`,
    quartzSelector: "pre:has(> code)",
    pseudoElement: "",
    properties: [
      "background-color",
      //"border",
      //"border-color",
      //"border-radius",
      ...defaults.border,
      "overflow-x",
      //"padding",
      ...defaults.padding,
      //"white-space",
      ...defaults.whiteSpace,
    ],
  },
  // checkboxes
  {
    obsidianSelector: `input.task-list-item-checkbox[data-line=\"0\"]`,
    publishSelector: `ul.contains-task-list > li.task-list-item > .task-list-item-checkbox`,
    quartzSelector: "input[type=checkbox]",
    pseudoElement: "",
    properties: [
      "appearance",
      //"border",
      //"border-color",
      //"border-radius",
      ...defaults.border,
      //"padding",
      ...defaults.padding,
      //"margin",
      ...defaults.margin,
      "width",
      //"margin-inline-start",
      //"margin-inline-end",
      "transition",
      "position",
      "top",
    ],
  },
  {
    obsidianSelector: `li.task-list-item[data-line=\"0\"][data-task=\"\"]`,
    publishSelector: `ul.contains-task-list > li.task-list-item`,
    quartzSelector: "ul > li.task-list-item",
    pseudoElement: "",
    properties: ["list-style", "text-align", "display"],
  },
  {
    obsidianSelector: `li.is-checked.task-list-item[data-line=\"1\"][data-task=\"x\"]::after`,
    publishSelector: `ul.contains-task-list > li.task-list-item > input[type=checkbox]:checked`,
    quartzSelector: "input[type=checkbox]:checked:after",
    pseudoElement: "::after",
    properties: [
      "content",
      "top",
      "inset-inline-start",
      "position",
      "width",
      "display",
      "background-color",
      "-webkit-mask-position",
      "-webkit-mask-size",
      "-webkit-mask-repeat",
      "-webkit-mask-image",
    ],
  },
  {
    obsidianSelector: `li.is-checked.task-list-item[data-line=\"1\"][data-task=\"x\"]`,
    publishSelector: `ul > li.task-list-item[data-task="x"]`,
    quartzSelector: ".page article li:has(>input[type=checkbox]:checked)",
    pseudoElement: "",
    properties: ["color", "text-decoration", "text-decoration-color"],
  },
  // blockquote
  {
    obsidianSelector: `blockquote`,
    publishSelector: `.markdown-rendered blockquote`,
    quartzSelector: "blockquote",
    pseudoElement: "",
    properties: sets.blockquote,
  },
  // footnotes
  {
    obsidianSelector: `a.footnote-backref.footnote-link`,
    publishSelector: `.footnote-backref`,
    quartzSelector: ".data-footnote-backref",
    pseudoElement: "",
    properties: ["color", "text-decoration"],
  },
  // search
  {
    obsidianSelector: `input[type=\"search\"]`,
    publishSelector: `.site-body-left-column input.search-bar`,
    quartzSelector: ".search > .search-button",
    pseudoElement: "",
    properties: [
      "background-color",
      //"border",
      //"border-color",
      //"border-radius",
      ...defaults.border,
      "color",
      "font-family",
      //"font-size",
      //"padding",
    ],
  },
  {
    obsidianSelector: `div.prompt`,
    publishSelector: `.search-results`,
    quartzSelector: ".search > .search-container > .search-space",
    pseudoElement: "",
    properties: [
      "background-color",
      //"border",
      //"border-radius",
      ...defaults.border,
      "box-shadow",
    ],
  },
  {
    obsidianSelector: `input.prompt-input[type=\"text\"]`,
    publishSelector: null,
    quartzSelector: ".search > .search-container > .search-space > input",
    pseudoElement: "",
    properties: [
      "background-color",
      //"border",
      //"border-bottom",
      //"border-radius",
      ...defaults.border,
      "box-shadow",
    ],
  },
  {
    obsidianSelector: `div.prompt-results`,
    publishSelector: `.search-results > *`,
    quartzSelector: ".search > .search-container > .search-space > *",
    pseudoElement: "",
    properties: sets.text,
  },
  {
    obsidianSelector: `div.prompt`,
    publishSelector: `div.search-results`,
    quartzSelector:
      ".search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results",
    pseudoElement: "",
    properties: [
      //"border-color"
      ...defaults.border,
    ],
  },
  {
    obsidianSelector: `div.mod-complex.suggestion-item`,
    publishSelector: `.search-results .suggestion-item`,
    quartzSelector:
      ".search > .search-container > .search-space > .search-layout > .results-container",
    pseudoElement: "",
    properties: ["color"],
  },
  {
    obsidianSelector: `div.mod-complex.suggestion-item`,
    publishSelector: `div.search-results .suggestion-item`,
    quartzSelector:
      ".search > .search-container > .search-space > .search-layout > .results-container .result-card",
    pseudoElement: "",
    properties: [
      //"border-color"
      ...defaults.border,
    ],
  },
  {
    obsidianSelector: `div.is-selected.mod-complex.suggestion-item`,
    publishSelector: `.search-results .suggestion-item.is-selected`,
    quartzSelector:
      ".search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus))",
    pseudoElement: "",
    properties: ["color", "font-weight", "background-color"],
  },
  {
    obsidianSelector: `div.is-selected.mod-complex.suggestion-item`,
    publishSelector: `div.search-results .suggestion-item.is-selected`,
    quartzSelector:
      ".search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description",
    pseudoElement: "",
    properties: ["color"],
  },
  {
    obsidianSelector: `h1[data-heading=\"This is a heading 1\"]`,
    publishSelector: `.published-container .markdown-rendered h1`,
    quartzSelector: "h1",
    pseudoElement: "",
    properties: sets.headings,
  },
  {
    obsidianSelector: `h2[data-heading=\"This is a heading 2\"]`,
    publishSelector: `.published-container .markdown-rendered h2`,
    quartzSelector: "h2",
    pseudoElement: "",
    properties: sets.headings,
  },
  {
    obsidianSelector: `h3[data-heading=\"This is a heading 3\"]`,
    publishSelector: `.published-container .markdown-rendered h3`,
    quartzSelector: "h3",
    pseudoElement: "",
    properties: sets.headings,
  },
  {
    obsidianSelector: `h4[data-heading=\"This is a heading 4\"]`,
    publishSelector: `.published-container .markdown-rendered h4`,
    quartzSelector: "h4",
    pseudoElement: "",
    properties: sets.headings,
  },
  {
    obsidianSelector: `h5[data-heading=\"This is a heading 5\"]`,
    publishSelector: `.published-container .markdown-rendered h5`,
    quartzSelector: "h5",
    pseudoElement: "",
    properties: sets.headings,
  },
  {
    obsidianSelector: `h6[data-heading=\"This is a heading 6\"]`,
    publishSelector: `.published-container .markdown-rendered h6`,
    quartzSelector: "h6",
    pseudoElement: "",
    properties: sets.headings,
  },
  {
    obsidianSelector: `div.inline-title`,
    publishSelector: null, //TODO
    quartzSelector: "h2.page-title, h2.page-title a",
    pseudoElement: "",
    properties: sets.headings,
  },
  // outline
  {
    obsidianSelector: `div.is-clickable.mod-collapsible.tree-item-self`,
    publishSelector: `.outline-view-outer .outline-view .tree-item > .tree-item-self`,
    quartzSelector: "li.depth-0",
    pseudoElement: "",
    properties: [/*"font-size", "line-height", */ "font-weight"],
  },
  {
    obsidianSelector: `div.tree-item-children`,
    publishSelector: `.outline-view-outer .outline-view .tree-item > .tree-item-children`,
    quartzSelector: null /*"li.depth-0 + li.depth-1"*/,
    pseudoElement: "",
    properties: [
      "margin-inline-start",
      "padding-inline-start",
      "border-inline-start",
    ],
  },
  /*
  {
    obsidianSelector: `.block-language-dataviewjs .view-content .tree-item .tree-item > .tree-item-self`,
    publishSelector: `.outline-view-outer .outline-view .tree-item .tree-item > .tree-item-self`,
    quartzSelector: "li.depth-1",
    pseudoElement: "",
    properties: ["font-weight"],
  },
  {
    obsidianSelector: `.block-language-dataviewjs .view-content .tree-item .tree-item > .tree-item-children`,
    publishSelector: `.outline-view-outer .outline-view .tree-item .tree-item > .tree-item-children`,
    quartzSelector: "li.depth-1 + li.depth-2",
    pseudoElement: "",
    properties: [
      "margin-inline-start",
      "padding-inline-start",
      "border-inline-start",
    ],
  },
  {
    obsidianSelector: `.block-language-dataviewjs .view-content .tree-item .tree-item .tree-item > .tree-item-self`,
    publishSelector: `.outline-view-outer .outline-view .tree-item .tree-item .tree-item > .tree-item-self`,
    quartzSelector: "li.depth-2",
    pseudoElement: "",
    properties: ["font-weight"],
  },
  {
    obsidianSelector: `.block-language-dataviewjs .view-content .tree-item .tree-item .tree-item > .tree-item-children`,
    publishSelector: `.outline-view-outer .outline-view .tree-item .tree-item .tree-item > .tree-item-children`,
    quartzSelector: "li.depth-2 + li.depth-3",
    pseudoElement: "",
    properties: [
      "margin-inline-start",
      "padding-inline-start",
      "border-inline-start",
    ],
  },
  {
    obsidianSelector: `.block-language-dataviewjs .view-content .tree-item .tree-item .tree-item .tree-item > .tree-item-self`,
    publishSelector: `.outline-view-outer .outline-view .tree-item .tree-item .tree-item .tree-item > .tree-item-self`,
    quartzSelector: "li.depth-3",
    pseudoElement: "",
    properties: ["font-weight"],
  },
  {
    obsidianSelector: `.block-language-dataviewjs .view-content .tree-item .tree-item .tree-item .tree-item > .tree-item-children`,
    publishSelector: `.outline-view-outer .outline-view .tree-item .tree-item .tree-item .tree-item > .tree-item-children`,
    quartzSelector: "li.depth-3 + li.depth-4",
    pseudoElement: "",
    properties: [
      "margin-inline-start",
      "padding-inline-start",
      "border-inline-start",
    ],
  },
  {
    obsidianSelector: `.block-language-dataviewjs .view-content .tree-item .tree-item .tree-item .tree-item .tree-item > .tree-item-self`,
    publishSelector: `.outline-view-outer .outline-view .tree-item .tree-item .tree-item .tree-item .tree-item > .tree-item-self`,
    quartzSelector: "li.depth-4",
    pseudoElement: "",
    properties: ["font-weight"],
  },
  {
    obsidianSelector: `.block-language-dataviewjs .view-content .tree-item .tree-item .tree-item .tree-item .tree-item > .tree-item-children`,
    publishSelector: `.outline-view-outer .outline-view .tree-item .tree-item .tree-item .tree-item .tree-item > .tree-item-children`,
    quartzSelector: "li.depth-4 + li.depth-5",
    pseudoElement: "",
    properties: [
      "margin-inline-start",
      "padding-inline-start",
      "border-inline-start",
    ],
  },
  {
    obsidianSelector: `.block-language-dataviewjs .view-content .tree-item .tree-item .tree-item .tree-item .tree-item .tree-item > .tree-item-self`,
    publishSelector: `.outline-view-outer .outline-view .tree-item .tree-item .tree-item .tree-item .tree-item .tree-item > .tree-item-self`,
    quartzSelector: "li.depth-5",
    pseudoElement: "",
    properties: ["font-weight"],
  },
  {
    obsidianSelector: `.block-language-dataviewjs .view-content .tree-item .tree-item .tree-item .tree-item .tree-item .tree-item > .tree-item-children`,
    publishSelector: `.outline-view-outer .outline-view .tree-item .tree-item .tree-item .tree-item .tree-item .tree-item > .tree-item-children`,
    quartzSelector: "li.depth-5 + li.depth-6",
    pseudoElement: "",
    properties: [
      "margin-inline-start",
      "padding-inline-start",
      "border-inline-start",
    ],
  },
  */
  // table
  // scrollbars
  // TODO: add ::scrollbar to pseudoElements
  {
    obsidianSelector: `div.markdown-preview-section.markdown-preview-sizer`,
    publishSelector: `.markdown-preview-sizer`,
    quartzSelector: "::-webkit-scrollbar",
    pseudoElement: "::-webkit-scrollbar",
    properties: ["background-color"],
  },
  {
    obsidianSelector: `div.markdown-preview-section.markdown-preview-sizer`,
    publishSelector: `.markdown-preview-sizer`,
    quartzSelector: "::-webkit-scrollbar-thumb",
    pseudoElement: "::-webkit-scrollbar-thumb",
    properties: [
      "background-color",
      //"border-radius",
      //"border-width",
      //"border",
      //"border-color",
      ...defaults.border,
      "box-shadow",
    ],
  },
  // note
  // FIXME: fixed up until here
  {
    obsidianSelector: `div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"note\"]`,
    publishSelector: `.callout[data-callout="note"]`,
    // quartzSelector: ".callout[data-callout]",
    quartzSelector: ".callout",
    pseudoElement: "",
    properties: [
      "--callout-color",
      //"--callout-icon",
      //"background-color",
      //"border-style",
      //"border-color",
      //"border-width",
      //"border-radius",
      ...defaults.border,
      "mix-blend-mode",
      //"padding",
      ...defaults.padding,
    ],
  },
  {
    obsidianSelector: `div.callout-title`,
    publishSelector: `.callout[data-callout="note"] > .callout-title`,
    // quartzSelector: ".callout[data-callout] .callout-title",
    quartzSelector: ".callout .callout-title",
    pseudoElement: "",
    properties: sets.callouts.title,
  },
  {
    obsidianSelector: `.callout[data-callout="note"] > .callout-title > .callout-icon > svg.svg-icon`,
    publishSelector: `.callout[data-callout="note"] > .callout-title > .callout-icon > svg.svg-icon`,
    // quartzSelector: ".callout[data-callout] .callout-title .callout-icon",
    quartzSelector: ".callout .callout-title .callout-icon",
    pseudoElement: "",
    properties: sets.callouts.icon,
  },
  {
    obsidianSelector: `div.callout-title-inner`,
    publishSelector: `.callout > .callout-title > .callout-title-inner`,
    // quartzSelector:
    // ".callout[data-callout] .callout-title > .callout-title-inner > p",
    quartzSelector: ".callout .callout-title > .callout-title-inner > p",
    pseudoElement: "",
    properties: sets.callouts.titleInner,
  },
  {
    obsidianSelector: `div.callout-content`,
    publishSelector: `.callout > .callout-content`,
    // quartzSelector: ".callout[data-callout] > .callout-content",
    quartzSelector: ".callout > .callout-content",
    pseudoElement: "",
    properties: sets.callouts.content,
  },
  // note
  {
    obsidianSelector: `div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"note\"]`,
    publishSelector: `.callout[data-callout="note"]`,
    quartzSelector: `.callout[data-callout="note"]`,
    pseudoElement: "",
    properties: sets.callouts.container,
  },
  {
    obsidianSelector: `svg.lucide-pencil.svg-icon`,
    publishSelector: `.callout[data-callout="note"] > .callout-title > .callout-icon > svg.svg-icon`,
    quartzSelector: `.callout[data-callout="note"] .callout-title .callout-icon`,
    pseudoElement: "",
    properties: sets.callouts.icon,
  },
  // abstract
  {
    obsidianSelector: `div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"abstract\"]`,
    publishSelector: `.callout[data-callout="abstract"]`,
    quartzSelector: `.callout[data-callout="abstract"]`,
    pseudoElement: "",
    properties: sets.callouts.container,
  },
  {
    obsidianSelector: `svg.lucide-clipboard-list.svg-icon`,
    publishSelector: `.callout[data-callout="abstract"] > .callout-title > .callout-icon > svg.svg-icon`,
    quartzSelector: `.callout[data-callout="abstract"] .callout-title .callout-icon`,
    pseudoElement: "",
    properties: sets.callouts.icon,
  },
  // info
  {
    obsidianSelector: `div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"info\"]`,
    publishSelector: `.callout[data-callout="info"]`,
    quartzSelector: `.callout[data-callout="info"]`,
    pseudoElement: "",
    properties: sets.callouts.container,
  },
  {
    obsidianSelector: `svg.lucide-info.svg-icon`,
    publishSelector: `.callout[data-callout="info"] > .callout-title > .callout-icon > svg.svg-icon`,
    quartzSelector: `.callout[data-callout="info"] .callout-title .callout-icon`,
    pseudoElement: "",
    properties: sets.callouts.icon,
  },
  // todo
  {
    obsidianSelector: `div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"todo\"]`,
    publishSelector: `.callout[data-callout="todo"]`,
    quartzSelector: `.callout[data-callout="todo"]`,
    pseudoElement: "",
    properties: sets.callouts.container,
  },
  {
    obsidianSelector: `svg.lucide-check-circle-2.svg-icon`,
    publishSelector: `.callout[data-callout="todo"] > .callout-title > .callout-icon > svg.svg-icon`,
    quartzSelector: `.callout[data-callout="todo"] .callout-title .callout-icon`,
    pseudoElement: "",
    properties: sets.callouts.icon,
  },
  // tip
  {
    obsidianSelector: `div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"tip\"]`,
    publishSelector: `.callout[data-callout="tip"]`,
    quartzSelector: `.callout[data-callout="tip"]`,
    pseudoElement: "",
    properties: sets.callouts.container,
  },
  {
    obsidianSelector: `svg.lucide-flame.svg-icon`,
    publishSelector: `.callout[data-callout="tip"] > .callout-title > .callout-icon > svg.svg-icon`,
    quartzSelector: `.callout[data-callout="tip"] .callout-title .callout-icon`,
    pseudoElement: "",
    properties: sets.callouts.icon,
  },
  // success
  {
    obsidianSelector: `div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"success\"]`,
    publishSelector: `.callout[data-callout="success"]`,
    quartzSelector: `.callout[data-callout="success"]`,
    pseudoElement: "",
    properties: sets.callouts.container,
  },
  {
    obsidianSelector: `svg.lucide-check.svg-icon`,
    publishSelector: `.callout[data-callout="success"] > .callout-title > .callout-icon > svg.svg-icon`,
    quartzSelector: `.callout[data-callout="success"] .callout-title .callout-icon`,
    pseudoElement: "",
    properties: sets.callouts.icon,
  },
  // question
  {
    obsidianSelector: `div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"question\"]`,
    publishSelector: `.callout[data-callout="question"]`,
    quartzSelector: `.callout[data-callout="question"]`,
    pseudoElement: "",
    properties: sets.callouts.container,
  },
  {
    obsidianSelector: `svg.lucide-help-circle.svg-icon`,
    publishSelector: `.callout[data-callout="question"] > .callout-title > .callout-icon > svg.svg-icon`,
    quartzSelector: `.callout[data-callout="question"] .callout-title .callout-icon`,
    pseudoElement: "",
    properties: sets.callouts.icon,
  },
  // warning
  {
    obsidianSelector: `div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"warning\"]`,
    publishSelector: `.callout[data-callout="warning"]`,
    quartzSelector: `.callout[data-callout="warning"]`,
    pseudoElement: "",
    properties: sets.callouts.container,
  },
  {
    obsidianSelector: `svg.lucide-alert-triangle.svg-icon`,
    publishSelector: `.callout[data-callout="warning"] > .callout-title > .callout-icon > svg.svg-icon`,
    quartzSelector: `.callout[data-callout="warning"] .callout-title .callout-icon`,
    pseudoElement: "",
    properties: sets.callouts.icon,
  },
  // danger
  {
    obsidianSelector: `div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"danger\"]`,
    publishSelector: `.callout[data-callout="danger"]`,
    quartzSelector: `.callout[data-callout="danger"]`,
    pseudoElement: "",
    properties: sets.callouts.container,
  },
  {
    obsidianSelector: `svg.lucide-zap.svg-icon`,
    publishSelector: `.callout[data-callout="danger"] > .callout-title > .callout-icon > svg.svg-icon`,
    quartzSelector: `.callout[data-callout="danger"] .callout-title .callout-icon`,
    pseudoElement: "",
    properties: sets.callouts.icon,
  },
  // failure
  {
    obsidianSelector: `div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"failure\"]`,
    publishSelector: `.callout[data-callout="failure"]`,
    quartzSelector: `.callout[data-callout="failure"]`,
    pseudoElement: "",
    properties: sets.callouts.container,
  },
  {
    obsidianSelector: `svg.lucide-x.svg-icon`,
    publishSelector: `.callout[data-callout="failure"] > .callout-title > .callout-icon > svg.svg-icon`,
    quartzSelector: `.callout[data-callout="failure"] .callout-title .callout-icon`,
    pseudoElement: "",
    properties: sets.callouts.icon,
  },
  // bug
  {
    obsidianSelector: `div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"bug\"]`,
    publishSelector: `.callout[data-callout="bug"]`,
    quartzSelector: `.callout[data-callout="bug"]`,
    pseudoElement: "",
    properties: sets.callouts.container,
  },
  {
    obsidianSelector: `svg.lucide-bug.svg-icon`,
    publishSelector: `.callout[data-callout="bug"] > .callout-title > .callout-icon > svg.svg-icon`,
    quartzSelector: `.callout[data-callout="bug"] .callout-title .callout-icon`,
    pseudoElement: "",
    properties: sets.callouts.icon,
  },
  // example
  {
    obsidianSelector: `div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"example\"]`,
    publishSelector: `.callout[data-callout="example"]`,
    quartzSelector: `.callout[data-callout="example"]`,
    pseudoElement: "",
    properties: sets.callouts.container,
  },
  {
    obsidianSelector: `svg.lucide-list.svg-icon`,
    publishSelector: `.callout[data-callout="example"] > .callout-title > .callout-icon > svg.svg-icon`,
    quartzSelector: `.callout[data-callout="example"] .callout-title .callout-icon`,
    pseudoElement: "",
    properties: sets.callouts.icon,
  },
  // quote
  {
    obsidianSelector: `div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"quote\"]`,
    publishSelector: `.callout[data-callout="quote"]`,
    quartzSelector: `.callout[data-callout="quote"]`,
    pseudoElement: "",
    properties: sets.callouts.container,
  },
  {
    obsidianSelector: `svg.lucide-quote.svg-icon`,
    publishSelector: `.callout[data-callout="quote"] > .callout-title > .callout-icon > svg.svg-icon`,
    quartzSelector: `.callout[data-callout="quote"] .callout-title .callout-icon`,
    pseudoElement: "",
    properties: sets.callouts.icon,
  },
  // mermaid
  /*
  {
    obsidianSelector: `div.cm-embed-block.cm-lang-mermaid.cm-preview-code-block.markdown-rendered`,
    publishSelector: `.mermaid > svg`,
    quartzSelector: "code.mermaid > svg",
    pseudoElement: "",
    properties: sets.mermaid,
  },
  */
  // mathjax
  {
    obsidianSelector: `mjx-container.MathJax`,
    publishSelector: `.math-block > mjx-container.MathJax`,
    quartzSelector: ".katex-display > .katex",
    pseudoElement: "",
    properties: sets.math,
  },
  {
    obsidianSelector: `mjx-container.MathJax`,
    publishSelector: `div.math-block > mjx-container.MathJax`,
    quartzSelector: ".katex-display > .katex > .katex-html",
    pseudoElement: "",
    properties: ["font-family"],
  },
  {
    obsidianSelector: `mjx-math.MJX-TEX`,
    publishSelector: `.math-inline > mjx-container.MathJax > mjx-math`,
    quartzSelector: ".katex > .katex-html",
    pseudoElement: "",
    properties: ["font-family"],
  },
  // graph
  // TODO: add Publish selector + colors
  /*
  {
    obsidianSelector: `span.quartz-graph-target`,
    publishSelector: null,
    quartzSelector: "div.graph",
    pseudoElement: "",
    properties: [
      "--quartz-graph-text",
      "--quartz-graph-line",
      "--quartz-graph-node",
      "--quartz-graph-node-unresolved",
      "--quartz-graph-node-focused",
      "--quartz-graph-node-tag",
      "--quartz-graph-node-attachment",
    ],
  },
  */
  // explorer
  {
    obsidianSelector: `div.is-clickable.nav-file-title.tappable.tree-item-self[data-path=\"callouts.md\"]`,
    publishSelector: `.nav-view-outer .tree-item-self a`,
    quartzSelector: ".explorer .explorer-content ul.explorer-ul li a",
    pseudoElement: "",
    properties: [
      "color",
      "cursor",
      "font-family",
      //"font-size",
      "font-weight",
      //"line-height",
      "text-decoration",
    ],
  },
  {
    // active
    obsidianSelector: `div.is-active.is-clickable.nav-file-title.tappable.tree-item-self[data-path=\"integrations.md\"]`,
    publishSelector: `.nav-view-outer .tree-item-self.mod-active`,
    quartzSelector:
      ".explorer .explorer-content ul.explorer-ul li:has(> .active)",
    pseudoElement: "",
    properties: [
      "background-color",
      ...defaults.border,
      "color",
      "cursor",
      ...defaults.transition,
    ],
  },
  {
    // closed
    obsidianSelector: `div.is-clickable.mod-collapsible.nav-folder-title.tree-item-self[data-path=\"folder/collapsed\"]`,
    publishSelector: `.nav-view-outer .nav-view > .tree-item.is-collapsed > .tree-item-children > .tree-item > .tree-item-self`,
    quartzSelector:
      ".explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container",
    pseudoElement: "",
    properties: [
      "color",
      "cursor",
      "font-family",
      //"font-size",
      "font-weight",
      //"line-height",
      "text-decoration",
    ],
  },
  {
    // open
    obsidianSelector: `div.is-clickable.mod-collapsible.nav-folder-title.tree-item-self[data-path=\"folder\"]`,
    publishSelector: `.nav-view-outer .nav-view > .tree-item > .tree-item-children > .tree-item > .tree-item-self`,
    quartzSelector:
      ".explorer .explorer-content li:has(> .folder-outer.open) > .folder-container",
    pseudoElement: "",
    properties: [
      "color",
      "cursor",
      "font-family",
      //"font-size",
      "font-weight",
      //"line-height",
      "text-decoration",
    ],
  },
];
