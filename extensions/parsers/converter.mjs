import {
  splitCombinedRules,
  combineIdenticalSelectors,
  removeEmptyRules,
} from "../../util/postcss.mjs";
import { format } from "../formatter.mjs";

import stripComments from "../packages/strip-css-comments.mjs";

export function convert(css) {
  // Remove comments
  // css = stripComments(css);

  // Split combined rules into individual declarations
  // css = splitCombinedRules(css);

  // Combine identical selectors
  // css = combineIdenticalSelectors(css);

  // Remove empty rules
  // css = removeEmptyRules(css);

  // Format
  // css = format(css, "css");

  // Convert to JSON dictionary format
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
        .split(/(?<!\+\s*?xml|\+\s*?png);/g)
        .map((d) => d.replaceAll("\n", " "))
        .map((d) => d.replaceAll(/\s+/g, " "))
        .map((d) => d.trim())
        .filter(Boolean);
      const declarationPairsList = declarationList.map((declaration) => {
        const [property, value] = declaration
          .split(":", 2)
          .map((s) => s.trim());
        return { property, value };
      });
      selectorList.forEach((selector) => {
        jsonDictionary[selector] = declarationPairsList.map((pair) => {
          return { property: pair.property, value: pair.value };
        });
      });
    }
  });

  return jsonDictionary;
}
