import { generate, parse, walk } from "css-tree";

/**
 * Build a deterministic V2 selector-impact graph from canonical SettingEffect records.
 *
 * Scope limits (intentional):
 * - No full CSS cascade simulation or DOM state modeling.
 * - Static selector rules and explicit var(...) consumers are tracked.
 * - Structured CSS parsing is used for selector/consumer discovery.
 * - Nested at-rule containers are tracked for explainability (for example @media/@supports).
 * - Keyframe steps are intentionally ignored as selector targets.
 * - Impacts are explainable via canonical effect primitives + static CSS reads.
 */

function normalizeSelector(selector) {
  return selector.replace(/\s+/g, " ").trim();
}

function formatAtRuleContext(node) {
  const prelude = node.prelude ? normalizeSelector(generate(node.prelude)) : "";
  return prelude ? `@${node.name} ${prelude}` : `@${node.name}`;
}

function collectRuleSelectors(prelude) {
  const selectors = [];
  if (!prelude || prelude.type !== "SelectorList") return selectors;
  for (const selectorNode of prelude.children || []) {
    const normalized = normalizeSelector(generate(selectorNode));
    if (normalized) selectors.push(normalized);
  }
  return selectors;
}

function collectRuleVariables(block) {
  const variables = new Set();
  if (!block) return variables;
  walk(block, {
    visit: "Function",
    enter(node) {
      if (node.name !== "var") return;
      const firstArg = node.children?.first;
      if (!firstArg || firstArg.type !== "Identifier") return;
      if (firstArg.name.startsWith("--")) variables.add(firstArg.name);
    },
  });
  return variables;
}

function parseCssRules(css, mode) {
  const rules = [];
  if (!css) return rules;
  let ast;
  try {
    ast = parse(css);
  } catch {
    return rules;
  }

  const visitNode = (node, context = [], inKeyframes = false) => {
    if (!node) return;
    if (node.type === "Rule") {
      if (inKeyframes) return;
      const selectors = collectRuleSelectors(node.prelude);
      if (!selectors.length) return;
      rules.push({
        selectors,
        variables: collectRuleVariables(node.block),
        mode,
        atRuleContext: context,
      });
      return;
    }
    if (node.type === "Atrule" && node.block?.children) {
      const isKeyframesRule = /keyframes$/i.test(node.name);
      const nextContext = isKeyframesRule
        ? context
        : [...context, formatAtRuleContext(node)];
      for (const child of node.block.children) {
        visitNode(child, nextContext, inKeyframes || isKeyframesRule);
      }
    }
  };

  for (const child of ast.children || []) {
    visitNode(child, [], false);
  }

  return rules;
}

function collectVariableConsumers(css, mode, targetMap) {
  for (const rule of parseCssRules(css, mode)) {
    for (const selector of rule.selectors) {
      for (const variable of rule.variables) {
        if (!targetMap.has(variable)) targetMap.set(variable, []);
        targetMap.get(variable).push({
          selector,
          mode: rule.mode,
          atRuleContext: rule.atRuleContext,
        });
      }
    }
  }
}

function shouldIncludeMode(effectMode, selectorMode) {
  return effectMode === "both" || effectMode === selectorMode;
}

function addImpact(store, selector, impact) {
  if (!store.has(selector)) {
    store.set(selector, { impacts: [], interactionGroups: [] });
  }
  const record = store.get(selector);
  const key = [
    impact.settingId,
    impact.effectKind,
    impact.mode,
    impact.selectorVariable || "",
    impact.className || "",
    impact.classValue || "",
    impact.interactionGroup,
    impact.pathKind,
    (impact.atRuleContext || []).join(" > "),
    impact.targetKind,
    impact.operation,
  ].join("|");
  if (!record._impactKeys) record._impactKeys = new Set();
  if (!record._impactKeys.has(key)) {
    record._impactKeys.add(key);
    record.impacts.push(impact);
  }
}

function addInteractionNotes(store) {
  for (const [, record] of store) {
    const groups = new Map();
    for (const impact of record.impacts) {
      const key = `${impact.interactionGroup}::${impact.mode}`;
      if (!groups.has(key)) {
        groups.set(key, {
          interactionGroup: impact.interactionGroup,
          interactionMode: impact.interactionMode,
          mode: impact.mode,
          settingIds: new Set(),
          effectKinds: new Set(),
        });
      }
      const group = groups.get(key);
      group.settingIds.add(impact.settingId);
      group.effectKinds.add(impact.effectKind);
    }
    for (const group of groups.values()) {
      if (group.settingIds.size <= 1) continue;
      record.interactionGroups.push({
        interactionGroup: group.interactionGroup,
        interactionMode: group.interactionMode,
        mode: group.mode,
        settingIds: [...group.settingIds].sort(),
        effectKinds: [...group.effectKinds].sort(),
        note: "Multiple Style Settings options share this selector target group.",
      });
    }
    record.impacts.sort((a, b) =>
      `${a.settingId}|${a.effectKind}|${a.mode}|${a.selectorVariable || ""}|${a.className || ""}|${a.classValue || ""}`.localeCompare(
        `${b.settingId}|${b.effectKind}|${b.mode}|${b.selectorVariable || ""}|${b.className || ""}|${b.classValue || ""}`,
      ),
    );
    record.interactionGroups.sort((a, b) =>
      `${a.interactionGroup}|${a.mode}`.localeCompare(
        `${b.interactionGroup}|${b.mode}`,
      ),
    );
    delete record._impactKeys;
  }
}

function buildClassSelectorIndex(classSettings) {
  const byClass = new Map();
  for (const [className, entry] of Object.entries(classSettings || {})) {
    const addSelectors = (mode, css) => {
      for (const rule of parseCssRules(css, mode)) {
        if (!byClass.has(className)) byClass.set(className, []);
        for (const selector of rule.selectors) {
          byClass.get(className).push({
            selector,
            mode: rule.mode,
            atRuleContext: rule.atRuleContext,
          });
        }
      }
    };
    addSelectors("both", entry.general);
    addSelectors("dark", entry.dark);
    addSelectors("light", entry.light);
  }
  return byClass;
}

function buildVariableConsumerIndex(modeCss, classSettings) {
  const byVariable = new Map();
  collectVariableConsumers(modeCss?.dark, "dark", byVariable);
  collectVariableConsumers(modeCss?.light, "light", byVariable);
  for (const entry of Object.values(classSettings || {})) {
    collectVariableConsumers(entry.general, "both", byVariable);
    collectVariableConsumers(entry.dark, "dark", byVariable);
    collectVariableConsumers(entry.light, "light", byVariable);
  }
  return byVariable;
}

function impactPath(effectKind) {
  if (effectKind === "body-class-toggle" || effectKind === "body-class-select") {
    return { pathKind: "body-class", direct: true };
  }
  if (effectKind === "derived-css-variable") {
    return { pathKind: "derived-variable", direct: false };
  }
  if (effectKind === "gradient-output") {
    return { pathKind: "gradient-variable", direct: false };
  }
  return { pathKind: "css-variable", direct: true };
}

export function buildSelectorImpactGraph({
  effectRecords,
  classSettings,
  modeCss,
}) {
  const selectorImpacts = new Map();
  const classSelectors = buildClassSelectorIndex(classSettings);
  const variableConsumers = buildVariableConsumerIndex(modeCss, classSettings);

  for (const record of effectRecords || []) {
    for (const effect of record.effects || []) {
      const { pathKind, direct } = impactPath(effect.effectKind);
      const baseImpact = {
        settingId: effect.settingId,
        sectionId: effect.sectionId,
        settingType: effect.settingType,
        effectKind: effect.effectKind,
        targetKind: effect.targetKind,
        operation: effect.operation,
        mode: effect.mode,
        interactionGroup: effect.interactionGroup,
        interactionMode: effect.interactionMode,
        pathKind,
        direct,
      };

      if (effect.effectKind === "body-class-toggle" && effect.className) {
        for (const hit of classSelectors.get(effect.className) || []) {
          if (!shouldIncludeMode(effect.mode, hit.mode)) continue;
          addImpact(selectorImpacts, hit.selector, {
            ...baseImpact,
            className: effect.className,
            atRuleContext: hit.atRuleContext,
          });
        }
        continue;
      }

      if (
        effect.effectKind === "body-class-select" &&
        Array.isArray(effect.classValues)
      ) {
        for (const classValue of effect.classValues) {
          for (const hit of classSelectors.get(classValue) || []) {
            if (!shouldIncludeMode(effect.mode, hit.mode)) continue;
            addImpact(selectorImpacts, hit.selector, {
              ...baseImpact,
              classValue,
              atRuleContext: hit.atRuleContext,
            });
          }
        }
        continue;
      }

      const directVariables = new Set(effect.variables || []);
      if (effect.variable) directVariables.add(effect.variable);
      if (effect.effectKind === "gradient-output" && effect.variablePrefix) {
        for (const [variableName] of variableConsumers) {
          if (variableName.startsWith(effect.variablePrefix)) {
            directVariables.add(variableName);
          }
        }
      }

      for (const variable of directVariables) {
        for (const hit of variableConsumers.get(variable) || []) {
          if (!shouldIncludeMode(effect.mode, hit.mode)) continue;
          addImpact(selectorImpacts, hit.selector, {
            ...baseImpact,
            selectorVariable: variable,
            sourceVariable: effect.sourceVariable,
            sourceVariables: effect.sourceVariables,
            derivedFrom: effect.derivedFrom,
            atRuleContext: hit.atRuleContext,
          });
        }
      }
    }
  }

  addInteractionNotes(selectorImpacts);

  const output = {};
  for (const [selector, record] of [...selectorImpacts.entries()].sort((a, b) =>
    a[0].localeCompare(b[0]),
  )) {
    output[selector] = {
      impacts: record.impacts,
      interactionGroups: record.interactionGroups,
    };
  }
  return output;
}
