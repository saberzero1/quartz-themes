// https://github.com/jackyzha0/quartz/blob/v4/quartz/styles/callouts.scss
export default [
  {
    source: 'div.callout-content[class="callout-content"]',
    quartz: ".callout .callout-content",
    values: [
      "color",

      "border-block-end-color",
      "border-block-start-color",
      "border-bottom-color",
      "border-top-color",
      "border-left-color",
      "border-right-color",
      "border-inline-end-color",
      "border-inline-start-color",
      "perspective-origin",
      "transform-origin",
    ],
  },
  {
    source: 'div.callout-icon[class="callout-icon"]',
    quartz: ".callout-title .callout-icon",
    values: ["column-rule-color", "outline-color"],
  },
  {
    source: 'div.callout-title-inner[class="callout-title-inner"]',
    quartz: ".callout-title > .callout-title-inner > p",
    values: [],
  },
  {
    source: 'div.callout-title[class="callout-title"][dir="auto"]',
    quartz: ".callout-title",
    values: [],
  },
  {
    source:
      'div.callout[class="callout"][data-callout-fold=""][data-callout-metadata=""][data-callout="abstract"]',
    quartz: '.callout[data-callout="abstract"]',
    values: [],
  },
  {
    source:
      'div.callout[class="callout"][data-callout-fold=""][data-callout-metadata=""][data-callout="bug"]',
    quartz: '.callout[data-callout="bug"]',
    values: [],
  },
  {
    source:
      'div.callout[class="callout"][data-callout-fold=""][data-callout-metadata=""][data-callout="danger"]',
    quartz: '.callout[data-callout="danger"]',
    values: [],
  },
  {
    source:
      'div.callout[class="callout"][data-callout-fold=""][data-callout-metadata=""][data-callout="example"]',
    quartz: '.callout[data-callout="example"]',
    values: [],
  },
  {
    source:
      'div.callout[class="callout"][data-callout-fold=""][data-callout-metadata=""][data-callout="failure"]',
    quartz: '.callout[data-callout="failure"]',
    values: [],
  },
  {
    source:
      'div.callout[class="callout"][data-callout-fold=""][data-callout-metadata=""][data-callout="info"]',
    quartz: '.callout[data-callout="info"]',
    values: [],
  },
  {
    source:
      'div.callout[class="callout"][data-callout-fold=""][data-callout-metadata=""][data-callout="note"]',
    quartz: '.callout[data-callout="note"]',
    values: [],
  },
  {
    source:
      'div.callout[class="callout"][data-callout-fold=""][data-callout-metadata=""][data-callout="question"]',
    quartz: '.callout[data-callout="question"]',
    values: [],
  },
  {
    source:
      'div.callout[class="callout"][data-callout-fold=""][data-callout-metadata=""][data-callout="quote"]',
    quartz: '.callout[data-callout="quote"]',
    values: [],
  },
  {
    source:
      'div.callout[class="callout"][data-callout-fold=""][data-callout-metadata=""][data-callout="success"]',
    quartz: '.callout[data-callout="success"]',
    values: [],
  },
  {
    source:
      'div.callout[class="callout"][data-callout-fold=""][data-callout-metadata=""][data-callout="tip"]',
    quartz: '.callout[data-callout="tip"]',
    values: [],
  },
  {
    source:
      'div.callout[class="callout"][data-callout-fold=""][data-callout-metadata=""][data-callout="todo"]',
    quartz: '.callout[data-callout="todo"]',
    values: [],
  },
  {
    source:
      'div.callout[class="callout"][data-callout-fold=""][data-callout-metadata=""][data-callout="warning"]',
    quartz: '.callout[data-callout="warning"]',
    values: [],
  },
];
