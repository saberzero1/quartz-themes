import fs from 'fs';
import { applyRuleToString, ensureDirectoryExists } from './util.mjs';
import { combineIdenticalSelectors, removeEmptyRules, splitCombinedRules } from './postcss.mjs';
import * as prettier from 'prettier'

/**
 * Writes a CSS or SCSS file with Prettier formatting.
 * This function checks the file extension and applies the appropriate Prettier formatting.
 *
 * @param {string} file - The path to the CSS or SCSS file.
 * @param {string} content - The CSS or SCSS content to write to the file.
 * @param {string} [encoding='utf8'] - The encoding to use when writing the file.
 * @return {void} Writes the formatted content to the specified file.
 */
export async function writePrettier(file, content, encoding = 'utf8') {
  /*const extension = file.split('.').pop();
  if (extension === 'css' || extension === 'scss') {
    if (extension === 'css') {
      content = prettierCSS(content);
    } else if (extension === 'scss') {
      content = prettierSCSS(content);
    }
  }*/
  fs.writeFileSync(file, content, encoding);
}

/**
 * Formats CSS using Prettier.
 *
 * @param {string} css - The CSS string to format.
 * @return {string} The formatted CSS string.
 * @throws {Error} If Prettier fails to format the CSS.
 */
export async function prettierCSS(css) {
  try {
    return await prettier.format(css, {
      parser: 'css',
      printWidth: 80,
      tabWidth: 2,
      useTabs: false,
      semi: false,
      trailingComma: 'all',
      quoteProps: 'as-needed',
    });
  } catch (error) {
    console.error('Error formatting CSS with Prettier:', error);
    return css; // Return unformatted CSS if Prettier fails
  }
}

/**
 * Formats SCSS using Prettier.
 *
 * @param {string} scss - The SCSS string to format.
 * @return {string} The formatted SCSS string.
 * @throws {Error} If Prettier fails to format the SCSS.
 */
export async function prettierSCSS(scss) {
  try {
    return await prettier.format(scss, {
      parser: 'scss',
      printWidth: 80,
      tabWidth: 2,
      useTabs: false,
      semi: false,
      trailingComma: 'all',
      quoteProps: 'as-needed',
    });
  } catch (error) {
    console.error('Error formatting SCSS with Prettier:', error);
    return scss; // Return unformatted SCSS if Prettier fails
  }
}

/**
 * Splits combined CSS rules into individual rules.
 * @param {string} base - The CSS string to process.
 * @param {string} inject - The CSS string to inject.
 * @return {string} The processed CSS string with combined rules split.
 */
export function cleanCSS(base, inject) {
  let result = `${base}\n${inject}`
  result = splitCombinedRules(result)
  result = combineIdenticalSelectors(result)
  result = removeEmptyRules(result)
  result = result.replace(/\n+/g, '\n') // Remove extra newlines
  result = result.replace(/^\}$/gm, '}\n') // Add extra newlines between rules
  return result;
}

/**
 * Writes the index.scss file for a theme with the provided theme CSS.
 *
 * @param {string} themeName - The name of the theme.
 * @param {string} themeCSS - The CSS string for the theme.
 * @return {void} Writes the processed CSS to the _index.scss file in the theme directory.
 */
export function writeIndex(themeName, themeCSS) {
  let resultCSS = fs.readFileSync(`./themes/${themeName}/_index.scss`, 'utf8')
  resultCSS = applyRuleToString(resultCSS, ':root', '//%%ROOT%%', themeCSS)
  resultCSS = applyRuleToString(resultCSS, 'body', '//%%BODY%%', themeCSS)

  // Reusables
  resultCSS = applyRuleToString(resultCSS, 'body', '//%%BODY COLOR%%', themeCSS, 'color')

  // Layout
  resultCSS = applyRuleToString(
    resultCSS,
    '.workspace-split.mod-root',
    '//%%WORKSPACE BACKGROUND ROOT%%',
    themeCSS,
    'background-color',
  )
  /*resultCSS = applyRuleToString(
    resultCSS,
    '.workspace-split',
    '//%%WORKSPACE BACKGROUND SIDEBARS%%',
    //'.workspace-tabs .workspace-leaf',
    themeCSS,
    'background-color',
  )*/

  // Separator borders
  /*resultCSS = applyRuleToString(
    resultCSS,
    '.workspace-leaf-resize-handle',
    '//%%WORKSPACE SEPARATOR BORDER COLOR%%',
    themeCSS,
    'border-color',
  )*/
  /*resultCSS = applyRuleToString(
    resultCSS,
    '.workspace-leaf-resize-handle',
    '//%%WORKSPACE SEPARATOR BORDER WIDTH%%',
    themeCSS,
    'border-width',
  )*/

  // Heading links
  resultCSS = applyRuleToString(resultCSS, 'h1 a', '//%%H1 A%%', themeCSS)
  resultCSS = applyRuleToString(resultCSS, 'h2 a', '//%%H2 A%%', themeCSS)
  resultCSS = applyRuleToString(resultCSS, 'h3 a', '//%%H3 A%%', themeCSS)
  resultCSS = applyRuleToString(resultCSS, 'h4 a', '//%%H4 A%%', themeCSS)
  resultCSS = applyRuleToString(resultCSS, 'h5 a', '//%%H5 A%%', themeCSS)
  resultCSS = applyRuleToString(resultCSS, 'h6 a', '//%%H6 A%%', themeCSS)

  // Headings
  resultCSS = applyRuleToString(resultCSS, 'h1', '//%%H1%%', themeCSS)
  resultCSS = applyRuleToString(resultCSS, 'h2', '//%%H2%%', themeCSS)
  resultCSS = applyRuleToString(resultCSS, 'h3', '//%%H3%%', themeCSS)
  resultCSS = applyRuleToString(resultCSS, 'h4', '//%%H4%%', themeCSS)
  resultCSS = applyRuleToString(resultCSS, 'h5', '//%%H5%%', themeCSS)
  resultCSS = applyRuleToString(resultCSS, 'h6', '//%%H6%%', themeCSS)

  // Code blocks
  resultCSS = applyRuleToString(resultCSS, '.markdown-rendered pre', '//%%PRE%%', themeCSS)

  // inline code
  resultCSS = applyRuleToString(resultCSS, '.markdown-rendered code', '//%%CODE INLINE%%', themeCSS)
  resultCSS = applyRuleToString(resultCSS, '.markdown-rendered pre code', '//%%CODE%%', themeCSS)

  // Code copy button
  resultCSS = applyRuleToString(
    resultCSS,
    '.markdown-rendered button.copy-code-button',
    '//%%CLIPBOARD BUTTON%%',
    themeCSS,
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.markdown-rendered button.copy-code-button:hover',
    '//%%CLIPBOARD BUTTON HOVER%%',
    themeCSS,
  )

  // Breadcrumbs
  resultCSS = applyRuleToString(
    resultCSS,
    '.view-header-title-parent .view-header-breadcrumb-separator',
    '//%%BREADCRUMB SEPARATOR COLOR%%',
    themeCSS,
    'color',
  )

  // Explorer
  resultCSS = applyRuleToString(resultCSS, '.nav-file-title', '//%%EXPLORER FILE TITLE%%', themeCSS)
  resultCSS = applyRuleToString(
    resultCSS,
    '.nav-file-title.is-active',
    '//%%EXPLORER FILE TITLE ACTIVE%%',
    themeCSS,
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.tree-item-children',
    '//%%EXPLORER FOLDER CONTENT%%',
    themeCSS,
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.tree-item-self .tree-item-icon',
    '//%%EXPLORER FOLDER ICON COLOR%%',
    themeCSS,
    'color',
  )

  // TOC
  resultCSS = applyRuleToString(
    resultCSS,
    '.tree-item-self',
    '//%%TOC ITEM COLOR%%',
    themeCSS,
    'color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.tree-item-self',
    '//%%TOC ITEM FONT WEIGHT%%',
    themeCSS,
    'font-weight',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.tree-item-self',
    '//%%TOC ITEM FONT SIZE%%',
    themeCSS,
    'font-size',
  )

  // Backlinks
  resultCSS = applyRuleToString(
    resultCSS,
    '.backlink-pane > .tree-item-self',
    '//%%BACKLINK COLOR%%',
    themeCSS,
    'color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.backlink-pane > .tree-item-self .tree-item-inner',
    '//%%BACKLINK WEIGHT%%',
    themeCSS,
    'font-weight',
  )

  // Callouts
  resultCSS = applyRuleToString(resultCSS, '.callout', '//%%CALLOUT%%', themeCSS)
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout',
    '//%%CALLOUT BACKGROUND%%',
    themeCSS,
    'background-color',
  )

  // Callout title
  resultCSS = applyRuleToString(resultCSS, '.callout-title', '//%%CALLOUT TITLE%%', themeCSS)
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout-title-inner',
    '//%%CALLOUT TITLE INNER%%',
    themeCSS,
  )

  // Callout content
  resultCSS = applyRuleToString(resultCSS, '.callout-content', '//%%CALLOUT CONTENT%%', themeCSS)

  // Callout variations
  resultCSS = applyRuleToString(
    resultCSS,
    '.callout',
    '//%%CALLOUT NOTE%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='tip']",
    '//%%CALLOUT TIP%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='warning']",
    '//%%CALLOUT WARNING%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='danger']",
    '//%%CALLOUT DANGER%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='abstract']",
    '//%%CALLOUT ABSTRACT%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='todo']",
    '//%%CALLOUT TODO%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='question']",
    '//%%CALLOUT QUESTION%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='info']",
    '//%%CALLOUT INFO%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='success']",
    '//%%CALLOUT SUCCESS%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='quote']",
    '//%%CALLOUT QUOTE%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='example']",
    '//%%CALLOUT EXAMPLE%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='bug']",
    '//%%CALLOUT BUG%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='summary']",
    '//%%CALLOUT SUMMARY%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='tldr']",
    '//%%CALLOUT TLDR%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='important']",
    '//%%CALLOUT IMPORTANT%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='hint']",
    '//%%CALLOUT HINT%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='check']",
    '//%%CALLOUT CHECK%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='done']",
    '//%%CALLOUT DONE%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='help']",
    '//%%CALLOUT HELP%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='faq']",
    '//%%CALLOUT FAQ%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='caution']",
    '//%%CALLOUT CAUTION%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='attention']",
    '//%%CALLOUT ATTENTION%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='failure']",
    '//%%CALLOUT FAILURE%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='error']",
    '//%%CALLOUT ERROR%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='fail']",
    '//%%CALLOUT FAIL%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='missing']",
    '//%%CALLOUT MISSING%%',
    themeCSS,
    '--callout-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    ".callout[data-callout='cite']",
    '//%%CALLOUT CITE%%',
    themeCSS,
    '--callout-color',
  )

  // Content Meta
  resultCSS = applyRuleToString(
    resultCSS,
    '.metadata-input-longtext',
    '//%%CONTENT META%%',
    themeCSS,
    'color',
  )

  // Popovers
  resultCSS = applyRuleToString(resultCSS, '.popover', '//%%POPOVER%%', themeCSS)
  resultCSS = applyRuleToString(resultCSS, '.popover', '//%%POPOVER BORDER%%', themeCSS, 'border')
  resultCSS = applyRuleToString(
    resultCSS,
    '.popover',
    '//%%POPOVER BACKGROUND%%',
    themeCSS,
    'background-color',
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.popover',
    '//%%POPOVER BORDER RADIUS%%',
    themeCSS,
    'border-radius',
  )

  // Search
  resultCSS = applyRuleToString(
    resultCSS,
    '.prompt',
    '//%%SEARCH BACKGROUND COLOR%%',
    themeCSS,
    'background-color',
  )
  resultCSS = applyRuleToString(resultCSS, '.prompt', '//%%SEARCH SHADOW%%', themeCSS, 'box-shadow')
  resultCSS = applyRuleToString(resultCSS, '.prompt', '//%%SEARCH BORDER%%', themeCSS, 'border')
  resultCSS = applyRuleToString(
    resultCSS,
    '.prompt',
    '//%%SEARCH BORDER RADIUS%%',
    themeCSS,
    'border-radius',
  )
  resultCSS = applyRuleToString(resultCSS, 'input.prompt-input', '//%%SEARCH INPUT%%', themeCSS)

  resultCSS = applyRuleToString(
    resultCSS,
    '.suggestion-item.is-selected',
    '//%%SEARCH RESULT HOVER BACKGROUND%%',
    themeCSS,
    'background-color',
  )

  resultCSS = applyRuleToString(
    resultCSS,
    '.suggestion-highlight',
    '//%%SEARCH HIGHLIGHT%%',
    themeCSS,
  )
  resultCSS = applyRuleToString(
    resultCSS,
    '.markdown-rendered mark',
    '//%%SEARCH HIGHLIGHT BACKGROUND%%',
    themeCSS,
  )
  resultCSS = applyRuleToString(
    resultCSS,
    'a.tag',
    '//%%SEARCH RESULT TAG COLOR%%',
    themeCSS,
    'color',
  )

  // Search button
  resultCSS = applyRuleToString(resultCSS, "input[type='search']", '//%%SEARCH BUTTON%%', themeCSS)

  // Write the result to the _index.scss file
  resultCSS = resultCSS.replace(/\n+/g, '\n') // Remove extra newlines
  resultCSS = resultCSS.replace(/^\}$/gm, '}\n') // Add extra newlines between rules
  writePrettier(`./themes/${themeName}/_index.scss`, resultCSS, 'utf8')
}

/**
 * Writes the style settings to a theme's extras directory.
 * This function creates the necessary directories if they do not exist
  *
  * @param {Array} styleRulesCSS - An array containing three CSS strings for the style setting.
  * @param {string} themeName - The name of the theme.
  * @param {string} settingName - The name of the style setting.
  * @param {string} [subPath=''] - Optional subdirectory path within the theme's extras directory.
  * @return {void} Writes the CSS rules to the _index.scss file in the specified theme and setting directory.
  * @throws {Error} If the styleRulesCSS array does not contain three valid CSS strings.
  */
export function writeStyleSettings(styleRulesCSS, themeName, settingName, subPath = '') {
  if (styleRulesCSS[0] === '' && styleRulesCSS[1] === '' && styleRulesCSS[2] === '') return
  subPath = subPath.endsWith('/') ? subPath.slice(0, -1) : subPath
  subPath = subPath.startsWith('/') ? subPath.slice(1) : subPath

  ensureDirectoryExists(`./extras/themes/${themeName}/${settingName}/${subPath}`)
  ensureDirectoryExists(`./style-settings/${themeName}/${settingName}/${subPath}`)

  if (subPath !== '') {
    subPath += '/'
  }

  const base = styleRulesCSS[0].replace(new RegExp(`\.${settingName}(?=\.|\s)`, 'g'), '').trim()
  const dark = styleRulesCSS[1].replace(new RegExp(`\.${settingName}(?=\.|\s)`, 'g'), '').trim()
  const light = styleRulesCSS[2].replace(new RegExp(`\.${settingName}(?=\.|\s)`, 'g'), '').trim()

  // Write the style setting to the extras file
  writePrettier(
    `./extras/themes/${themeName}/${settingName}/${subPath}_index.scss`,
    styleRulesCSS[0],
    'utf8',
  )
  writePrettier(
    `./extras/themes/${themeName}/${settingName}/${subPath}_dark.scss`,
    styleRulesCSS[1], 
    'utf8',
  )
  writePrettier(
    `./extras/themes/${themeName}/${settingName}/${subPath}_light.scss`,
    styleRulesCSS[2],
    'utf8',
  )

  writePrettier(
    `./style-settings/${themeName}/${settingName}/${subPath}_index.scss`,
    parseStyleSettingToString(base),
  'utf8',
  )
  writePrettier(
    `./style-settings/${themeName}/${settingName}/${subPath}_dark.scss`,
    parseStyleSettingToString(dark, 'dark'),
    'utf8',
  )
  writePrettier(
    `./style-settings/${themeName}/${settingName}/${subPath}_light.scss`,
    parseStyleSettingToString(light, 'light'),
    'utf8',
  )
}

function parseStyleSettingToString(styleSetting, mode = 'base') {
  let result = '';
  if (styleSetting === '') return result;
  if (mode === 'base') {
    result = ':root, body {\n';
  } else if (mode === 'dark') {
    result = ":root[saved-theme='dark'], html[saved-theme='dark'] {\n";
  } else if (mode === 'light') {
    result = ":root[saved-theme='light'], html[saved-theme='light'] {\n";
  } else {
    throw new Error(`Unknown mode: ${mode}`);
  }
  
  const trimmed = styleSetting.split('\n')
  .map(line => line.trim())
  .filter(line => Boolean(line))
  .join('\n');

  const noSelectorRules = [];

  const rules = trimmed.split('}')
  .map(rule => {
    if (rule.trim().startsWith('{')) {
      noSelectorRules.push(rule.trim().slice(1).trim());
      return '';
    }
    return rule.trim();
  })

  result = noSelectorRules.length > 0 ? result + noSelectorRules.join('\n') : '';
  
  let final = result + rules.join('}\n');

  let delta = 0;
  let index = 0;
  let open = 0;
  let close = 0;

  // Check for curly-brace mismatches
  while (index < final.length) {
    if (final[index] === '{') {
      delta++;
      open++;
    } else if (final[index] === '}') {
      delta--;
      close++;
    }
    if (delta < 0) {
      // Replace curly brace with space
      final = final.slice(0, index) + ' ' + final.slice(index + 1);
      delta = 0; // Reset delta to avoid further mismatches
      close--; // Adjust close count
    }
    index++;
  }

  const ending = '}'.repeat(open - close);

  return final + ending;
}
