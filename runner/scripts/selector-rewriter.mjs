import postcss from "postcss";
import selectorParser from "postcss-selector-parser";

const buildThemeAttribute = (theme) =>
  selectorParser.attribute({
    attribute: "saved-theme",
    operator: "=",
    value: theme,
    quoteMark: '"',
    raws: { value: `"${theme}"` },
  });

const buildRootWithTheme = (theme) => {
  const root = selectorParser.pseudo({ value: ":root" });
  const attribute = buildThemeAttribute(theme);
  return [root, attribute];
};

const buildRootWithNotTheme = (theme) => {
  const root = selectorParser.pseudo({ value: ":root" });
  const attribute = buildThemeAttribute(theme);
  const notSelector = selectorParser.selector({ nodes: [attribute] });
  const notPseudo = selectorParser.pseudo({
    value: ":not",
    nodes: [notSelector],
  });
  return [root, notPseudo];
};

const rewriteObsidianSelectors = () => {
  return {
    postcssPlugin: "rewrite-obsidian-selectors",
    Rule(rule) {
      if (!rule.selector) return;

      const transformed = selectorParser((selectors) => {
        selectors.each((selector) => {
          if (!selector.nodes || selector.nodes.length === 0) return;

          const nodes = selector.nodes;
          const groups = [];
          let start = 0;

          for (let i = 0; i < nodes.length; i += 1) {
            if (nodes[i].type === "combinator") {
              if (i > start) {
                groups.push({ start, end: i - 1 });
              }
              start = i + 1;
            }
          }
          if (start <= nodes.length - 1) {
            groups.push({ start, end: nodes.length - 1 });
          }

          for (let g = groups.length - 1; g >= 0; g -= 1) {
            const { start: groupStart, end: groupEnd } = groups[g];
            const groupNodes = nodes.slice(groupStart, groupEnd + 1);
            if (groupNodes.length === 0) continue;

            const classNodes = groupNodes.filter(
              (node) => node.type === "class",
            );
            const tagNodes = groupNodes.filter((node) => node.type === "tag");
            const nonClassTagNodes = groupNodes.filter(
              (node) => node.type !== "class" && node.type !== "tag",
            );

            const classNames = classNodes.map((node) => node.value);

            const hasOnlyClasses =
              nonClassTagNodes.length === 0 && tagNodes.length === 0;

            if (
              hasOnlyClasses &&
              classNames.length === 2 &&
              classNames.includes("mod-active") &&
              classNames.includes("workspace-leaf")
            ) {
              nodes.splice(
                groupStart,
                groupEnd - groupStart + 1,
                selectorParser.className({ value: "center" }),
              );
              continue;
            }

            const hasBodyTag = tagNodes.some((node) => node.value === "body");
            const hasNonBodyTag = tagNodes.some(
              (node) => node.value !== "body",
            );

            if (
              !hasNonBodyTag &&
              classNames.includes("theme-dark") &&
              nonClassTagNodes.length === 0 &&
              classNames.length === 1 &&
              (hasBodyTag || tagNodes.length === 0)
            ) {
              nodes.splice(
                groupStart,
                groupEnd - groupStart + 1,
                ...buildRootWithTheme("dark"),
              );
              continue;
            }

            if (
              !hasNonBodyTag &&
              classNames.includes("theme-light") &&
              nonClassTagNodes.length === 0 &&
              classNames.length === 1 &&
              (hasBodyTag || tagNodes.length === 0)
            ) {
              nodes.splice(
                groupStart,
                groupEnd - groupStart + 1,
                ...buildRootWithNotTheme("dark"),
              );
              continue;
            }

            if (
              hasBodyTag &&
              !hasNonBodyTag &&
              classNames.length === 1 &&
              classNames[0] === "css-settings-manager" &&
              nonClassTagNodes.length === 0
            ) {
              const classIndex = nodes.findIndex(
                (node, index) =>
                  index >= groupStart &&
                  index <= groupEnd &&
                  node.type === "class" &&
                  node.value === "css-settings-manager",
              );
              if (classIndex !== -1) {
                nodes.splice(classIndex, 1);
              }
              continue;
            }

            classNodes.forEach((node) => {
              if (node.value === "workspace-leaf-content") {
                node.value = "center";
              }
            });
          }
        });
      }).processSync(rule.selector);

      rule.selector = transformed;
    },
  };
};

rewriteObsidianSelectors.postcss = true;

export default rewriteObsidianSelectors;
