import {
  splitCombinedRules,
  combineIdenticalSelectors,
  removeEmptyRules,
} from "../../util/postcss.mjs";
import { format } from "../formatter.mjs";
import stripComments from "../packages/strip-css-comments.mjs";
import createStatic from "../../util/static-custom-properties.mjs";
import postcss from "postcss";

const declarationsToFilter = [
  "-webkit-box-decoration-break",
  "-webkit-app-region",
  "-webkit-tap-highlight-color",
  "-webkit-user-select",
  "user-select",
  "text-rendering",
  "-webkit-overscroll-behavior",
  "overscroll-behavior",
  "-webkit-backdrop-filter",
  "-webkit-mask-image",
  "-webkit-mask-composite",
  "-webkit-mask-size",
  "-webkit-mask-position",
  "-webkit-mask-repeat",
  "-webkit-mask-origin",
  "--link-external-filter",
  "--link-unresolved-filter",
  "filter",
  "background-image",
];

export function convert(css, fullMode = false) {
  if (fullMode) {
    // Preprocess the CSS
    css = preprocessCSS(css);
  }
  // Convert to JSON dictionary format
  /*
  const jsonDictionary = {};
  css.split("\n\n").forEach((rule) => {
    if (rule.trim()) {
      const lines = rule.split("\n").map((line) => line.trim());
      const selectors = lines[0].slice(0, -1).trim();
      const declarations = lines.slice(1, -1).join("\n").trim();
      const selectorList = selectors
        .trim()
        .split(/,\s/g)
        .map((s) => s.replaceAll(/\s+/gm, " "))
        .map((s) => s.trim());
      if (declarations === undefined) {
        console.log(declarations);
        console.log(selectors);
      }
      const declarationList = declarations
        .trim()
        .split(
          /(?<![\+\/]\s*?(?:xml|png|octet-stream|woff2?|vnd\.ms-opentype|ttf|otf));/g,
        )
        .map((d) => d.replaceAll("\n", " "))
        .map((d) => d.replaceAll(",", ", "))
        .map((d) => d.replaceAll(/\s+/g, " "))
        .map((d) => d.trim())
        .filter(Boolean);
      const declarationPairsList = declarationList.map((declaration) => {
        const propertyValue = declaration.split(":").map((s) => s.trim());
        const [property, value] =
          propertyValue.length === 2
            ? propertyValue
            : propertyValue.length > 2
              ? [propertyValue[0], propertyValue.slice(1).join(":")]
              : [propertyValue[0], ""];
        return { property, value };
      });
      selectorList.forEach((selector) => {
        jsonDictionary[selector] = declarationPairsList.map((pair) => {
          return { property: pair.property, value: pair.value };
        });
      });
    }
  });
  */

  const jsonDictionary = parseCssWithPostCSS(css);

  return jsonDictionary;
}

export function preprocessCSS(css, index = 0) {
  const current = css;

  // Remove comments
  css = stripComments(css);

  // Split combined rules into individual declarations
  css = splitCombinedRules(css);

  // Combine identical selectors
  css = combineIdenticalSelectors(css);

  // Remove empty rules
  css = removeEmptyRules(css);

  // Format
  css = format(css, "css");

  // Process CSS with PostCSS plugins
  //css = createStatic(css);

  if (css === current || index >= 25) {
    return css;
  }

  return preprocessCSS(css, index + 1);
}

function parseCssWithPostCSS(cssString) {
  const root = postcss.parse(cssString);
  const results = {};

  root.walkRules((rule) => {
    let declarations = [];
    rule.walkDecls((decl) => {
      declarations.push({ property: decl.prop, value: decl.value });
    });

    declarations = declarations.map((decl) => ({
      property: decl.property.replace(/\s+/gms, " ").trim(),
      value: decl.value,
    }));

    // Filter out unwanted declarations
    declarations = declarations.filter((decl) => {
      return !declarationsToFilter.includes(decl.property);
    });

    rule.selectors.forEach((selector) => {
      const trimmedSelector = selector.replace(/\s+/gms, " ").trim();
      // Use the selector as a key in the results object
      if (!results[trimmedSelector]) {
        results[trimmedSelector] = [];
      }
      results[trimmedSelector].push(...declarations);
    });
  });

  return results;
}
