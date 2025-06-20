import fs from "fs";
import { applyRuleToString } from "./util.mjs";

export function writeIndex(themeName, themeCSS) {
  let resultCSS = fs.readFileSync(`./themes/${themeName}/_index.scss`, "utf8")
  resultCSS = applyRuleToString(resultCSS, ":root", "//%%ROOT%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "body", "//%%BODY%%", themeCSS)

  // Reusables
  resultCSS = applyRuleToString(resultCSS, "body", "//%%BODY COLOR%%", themeCSS, "color")

  // Layout
  resultCSS = applyRuleToString(
    resultCSS,
    ".workspace-split.mod-root",
    "//%%WORKSPACE BACKGROUND ROOT%%",
    themeCSS,
    "background-color",
  )
  /*resultCSS = applyRuleToString(
    resultCSS,
    ".workspace-split",
    "//%%WORKSPACE BACKGROUND SIDEBARS%%",
    //".workspace-tabs .workspace-leaf",
    themeCSS,
    "background-color",
  )*/

  // Separator borders
  /*resultCSS = applyRuleToString(
    resultCSS,
    ".workspace-leaf-resize-handle",
    "//%%WORKSPACE SEPARATOR BORDER COLOR%%",
    themeCSS,
    "border-color",
  )*/
  /*resultCSS = applyRuleToString(
    resultCSS,
    ".workspace-leaf-resize-handle",
    "//%%WORKSPACE SEPARATOR BORDER WIDTH%%",
    themeCSS,
    "border-width",
  )*/

  // Heading links
  resultCSS = applyRuleToString(resultCSS, "h1 a", "//%%H1 A%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "h2 a", "//%%H2 A%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "h3 a", "//%%H3 A%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "h4 a", "//%%H4 A%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "h5 a", "//%%H5 A%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "h6 a", "//%%H6 A%%", themeCSS)

  // Headings
  resultCSS = applyRuleToString(resultCSS, "h1", "//%%H1%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "h2", "//%%H2%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "h3", "//%%H3%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "h4", "//%%H4%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "h5", "//%%H5%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, "h6", "//%%H6%%", themeCSS)

  // Code blocks
  resultCSS = applyRuleToString(resultCSS, ".markdown-rendered pre", "//%%PRE%%", themeCSS)

  // inline code
  resultCSS = applyRuleToString(resultCSS, ".markdown-rendered code", "//%%CODE INLINE%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, ".markdown-rendered pre code", "//%%CODE%%", themeCSS)

  // Code copy button
  resultCSS = applyRuleToString(
    resultCSS,
    ".markdown-rendered button.copy-code-button",
    "//%%CLIPBOARD BUTTON%%",
    themeCSS,
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".markdown-rendered button.copy-code-button:hover",
    "//%%CLIPBOARD BUTTON HOVER%%",
    themeCSS,
  )

  // Breadcrumbs
  resultCSS = applyRuleToString(
    resultCSS,
    ".view-header-title-parent .view-header-breadcrumb-separator",
    "//%%BREADCRUMB SEPARATOR COLOR%%",
    themeCSS,
    "color",
  )

  // Explorer
  resultCSS = applyRuleToString(resultCSS, ".nav-file-title", "//%%EXPLORER FILE TITLE%%", themeCSS)
  resultCSS = applyRuleToString(
    resultCSS,
    ".nav-file-title.is-active",
    "//%%EXPLORER FILE TITLE ACTIVE%%",
    themeCSS,
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".tree-item-children",
    "//%%EXPLORER FOLDER CONTENT%%",
    themeCSS,
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".tree-item-self .tree-item-icon",
    "//%%EXPLORER FOLDER ICON COLOR%%",
    themeCSS,
    "color",
  )

  // TOC
  resultCSS = applyRuleToString(
    resultCSS,
    ".tree-item-self",
    "//%%TOC ITEM COLOR%%",
    themeCSS,
    "color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".tree-item-self",
    "//%%TOC ITEM FONT WEIGHT%%",
    themeCSS,
    "font-weight",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".tree-item-self",
    "//%%TOC ITEM FONT SIZE%%",
    themeCSS,
    "font-size",
  )

  // Backlinks
  resultCSS = applyRuleToString(
    resultCSS,
    ".backlink-pane > .tree-item-self",
    "//%%BACKLINK COLOR%%",
    themeCSS,
    "color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".backlink-pane > .tree-item-self .tree-item-inner",
    "//%%BACKLINK WEIGHT%%",
    themeCSS,
    "font-weight",
  )

  // Callouts
  resultCSS = applyRuleToString(resultCSS, ".callout", "//%%CALLOUT%%", themeCSS)
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout",
    "//%%CALLOUT BACKGROUND%%",
    themeCSS,
    "background-color",
  )

  // Callout title
  resultCSS = applyRuleToString(resultCSS, ".callout-title", "//%%CALLOUT TITLE%%", themeCSS)
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout-title-inner",
    "//%%CALLOUT TITLE INNER%%",
    themeCSS,
  )

  // Callout content
  resultCSS = applyRuleToString(resultCSS, ".callout-content", "//%%CALLOUT CONTENT%%", themeCSS)

  // Callout variations
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout",
    "//%%CALLOUT NOTE%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="tip"]',
    "//%%CALLOUT TIP%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="warning"]',
    "//%%CALLOUT WARNING%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="danger"]',
    "//%%CALLOUT DANGER%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="abstract"]',
    "//%%CALLOUT ABSTRACT%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="todo"]',
    "//%%CALLOUT TODO%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="question"]',
    "//%%CALLOUT QUESTION%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="info"]',
    "//%%CALLOUT INFO%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="success"]',
    "//%%CALLOUT SUCCESS%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="quote"]',
    "//%%CALLOUT QUOTE%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="example"]',
    "//%%CALLOUT EXAMPLE%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="bug"]',
    "//%%CALLOUT BUG%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="summary"]',
    "//%%CALLOUT SUMMARY%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="tldr"]',
    "//%%CALLOUT TLDR%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="important"]',
    "//%%CALLOUT IMPORTANT%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="hint"]',
    "//%%CALLOUT HINT%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="check"]',
    "//%%CALLOUT CHECK%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="done"]',
    "//%%CALLOUT DONE%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="help"]',
    "//%%CALLOUT HELP%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="faq"]',
    "//%%CALLOUT FAQ%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="caution"]',
    "//%%CALLOUT CAUTION%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="attention"]',
    "//%%CALLOUT ATTENTION%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="failure"]',
    "//%%CALLOUT FAILURE%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="error"]',
    "//%%CALLOUT ERROR%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="fail"]',
    "//%%CALLOUT FAIL%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="missing"]',
    "//%%CALLOUT MISSING%%",
    themeCSS,
    "--callout-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout[data-callout="cite"]',
    "//%%CALLOUT CITE%%",
    themeCSS,
    "--callout-color",
  )

  // Content Meta
  resultCSS = applyRuleToString(
    resultCSS,
    ".metadata-input-longtext",
    "//%%CONTENT META%%",
    themeCSS,
    "color",
  )

  // Popovers
  resultCSS = applyRuleToString(resultCSS, ".popover", "//%%POPOVER%%", themeCSS)
  resultCSS = applyRuleToString(resultCSS, ".popover", "//%%POPOVER BORDER%%", themeCSS, "border")
  resultCSS = applyRuleToString(
    resultCSS,
    ".popover",
    "//%%POPOVER BACKGROUND%%",
    themeCSS,
    "background-color",
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".popover",
    "//%%POPOVER BORDER RADIUS%%",
    themeCSS,
    "border-radius",
  )

  // Search
  resultCSS = applyRuleToString(
    resultCSS,
    ".prompt",
    "//%%SEARCH BACKGROUND COLOR%%",
    themeCSS,
    "background-color",
  )
  resultCSS = applyRuleToString(resultCSS, ".prompt", "//%%SEARCH SHADOW%%", themeCSS, "box-shadow")
  resultCSS = applyRuleToString(resultCSS, ".prompt", "//%%SEARCH BORDER%%", themeCSS, "border")
  resultCSS = applyRuleToString(
    resultCSS,
    ".prompt",
    "//%%SEARCH BORDER RADIUS%%",
    themeCSS,
    "border-radius",
  )
  resultCSS = applyRuleToString(resultCSS, "input.prompt-input", "//%%SEARCH INPUT%%", themeCSS)

  resultCSS = applyRuleToString(
    resultCSS,
    ".suggestion-item.is-selected",
    "//%%SEARCH RESULT HOVER BACKGROUND%%",
    themeCSS,
    "background-color",
  )

  resultCSS = applyRuleToString(
    resultCSS,
    ".suggestion-highlight",
    "//%%SEARCH HIGHLIGHT%%",
    themeCSS,
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".markdown-rendered mark",
    "//%%SEARCH HIGHLIGHT BACKGROUND%%",
    themeCSS,
  )
  resultCSS = applyRuleToString(
    resultCSS,
    "a.tag",
    "//%%SEARCH RESULT TAG COLOR%%",
    themeCSS,
    "color",
  )

  // Search button
  resultCSS = applyRuleToString(resultCSS, 'input[type="search"]', "//%%SEARCH BUTTON%%", themeCSS)

  // Write the result to the _index.scss file
  resultCSS = resultCSS.replace(/\n+/g, "\n") // Remove extra newlines
  resultCSS = resultCSS.replace(/^\}$/gm, "}\n") // Add extra newlines between rules
  fs.writeFileSync(`./themes/${themeName}/_index.scss`, resultCSS, "utf8")
}
