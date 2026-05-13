
(function() {
  const fs = require("fs");
  const ERROR_FILE = "/home/saberzero1/Repos/quartz-themes/runner/vault/.cli-extract-result-error.txt";
  const RESULT_FILE = "/home/saberzero1/Repos/quartz-themes/runner/vault/.cli-extract-result.json";

  try {
    const selectors = ["div.quartz-icon-selector","body","div.mod-active.workspace-leaf","div.workspace-leaf","div.mod-horizontal.mod-left-split.mod-sidedock.workspace-split","div.mod-horizontal.mod-right-split.mod-sidedock.workspace-split","hr.workspace-leaf-resize-handle","a.external-link[data-tooltip-position=\"top\"]","a.internal-link[data-href=\"callouts\"][data-tooltip-position=\"top\"]","a.internal-link.is-unresolved[data-href=\"https://example.com\"][data-tooltip-position=\"top\"]","a.external-link[data-tooltip-position=\"top\"]:hover","a.internal-link[data-href=\"callouts\"][data-tooltip-position=\"top\"]:hover","p","strong","em","u","s","strong > em","mark","del","div.is-selected.mod-complex.suggestion-item","div.mod-complex.suggestion-item","hr","div.multi-select-pill","div.multi-select-pill-content","li[data-line=\"0\"]","span.list-bullet::after","code","pre.language-js","pre","input.task-list-item-checkbox[data-line=\"0\"]","li.task-list-item[data-line=\"0\"][data-task=\"\"]","li.is-checked.task-list-item[data-line=\"1\"][data-task=\"x\"]::after","blockquote","a.footnote-backref.footnote-link","input[type=\"search\"]","div.prompt","input.prompt-input[type=\"text\"]","div.prompt-results",".search-view-container",".search-result-file-matched-text",".search-result-file-match",".search-results-container .search-result",".search-results-container .search-result:hover","h1[data-heading=\"This is a heading 1\"]","h2[data-heading=\"This is a heading 2\"]","h3[data-heading=\"This is a heading 3\"]","h4[data-heading=\"This is a heading 4\"]","h5[data-heading=\"This is a heading 5\"]","h6[data-heading=\"This is a heading 6\"]","div.inline-title","h1[data-heading=\"This is a heading 1\"]::after","h2[data-heading=\"This is a heading 2\"]::after","h3[data-heading=\"This is a heading 3\"]::after","h4[data-heading=\"This is a heading 4\"]::after","h5[data-heading=\"This is a heading 5\"]::after","h6[data-heading=\"This is a heading 6\"]::after","div.inline-title::after","h1[data-heading=\"This is a heading 1\"]::before","h2[data-heading=\"This is a heading 2\"]::before","h3[data-heading=\"This is a heading 3\"]::before","h4[data-heading=\"This is a heading 4\"]::before","h5[data-heading=\"This is a heading 5\"]::before","h6[data-heading=\"This is a heading 6\"]::before","div.inline-title::before","div.is-clickable.mod-collapsible.tree-item-self","div.tree-item-children","body.styled-scrollbars ::-webkit-scrollbar","body.styled-scrollbars ::-webkit-scrollbar-thumb","body.styled-scrollbars ::-webkit-scrollbar-thumb:hover","body.styled-scrollbars ::-webkit-scrollbar-thumb:active","body.styled-scrollbars ::-webkit-scrollbar-track","body.styled-scrollbars ::-webkit-scrollbar-corner","body.styled-scrollbars","div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"note\"]",".callout[data-callout=\"note\"] > .callout-title > .callout-icon > svg.svg-icon","div.callout-title","div.callout-title-inner","div.callout-content","svg.lucide-pencil.svg-icon","div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"abstract\"]","svg.lucide-clipboard-list.svg-icon","div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"info\"]","svg.lucide-info.svg-icon","div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"todo\"]","svg.lucide-check-circle-2.svg-icon","div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"tip\"]","svg.lucide-flame.svg-icon","div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"success\"]","svg.lucide-check.svg-icon","div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"question\"]","svg.lucide-help-circle.svg-icon","div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"warning\"]","svg.lucide-alert-triangle.svg-icon","div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"danger\"]","svg.lucide-zap.svg-icon","div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"failure\"]","svg.lucide-x.svg-icon","div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"bug\"]","svg.lucide-bug.svg-icon","div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"example\"]","svg.lucide-list.svg-icon","div.callout[data-callout-fold=\"\"][data-callout-metadata=\"\"][data-callout=\"quote\"]","svg.lucide-quote.svg-icon","table","thead","tbody","th","td","tr","tbody tr:nth-child(even)","tbody tr:nth-child(odd)","img","figure","figcaption","video","audio",".internal-embed",".markdown-embed",".file-embed",".frontmatter-container",".metadata-container",".metadata-properties",".metadata-container .metadata-property",".metadata-property-key",".metadata-property-value",".tooltip",".popover","progress","input[type=\"range\"]","input[type=\"text\"]","details","summary","details[open]","kbd","dl","dt","dd","sub","sup","abbr",".backlink-pane",".backlink-pane .tree-item",".backlink-pane .tree-item-self","li.task-list-item[data-task=\"-\"]","li.task-list-item[data-task=\">\"]","li.task-list-item[data-task=\"/\"]","li.task-list-item[data-task=\"?\"]","li.task-list-item[data-task=\"!\"]","li.task-list-item[data-task=\"*\"]","li.task-list-item[data-task=\"l\"]","li.task-list-item[data-task=\"b\"]","li.task-list-item[data-task=\"i\"]","li.task-list-item[data-task=\"S\"]","li.task-list-item[data-task=\"I\"]","li.task-list-item[data-task=\"p\"]","li.task-list-item[data-task=\"c\"]","li.task-list-item[data-task=\"f\"]","li.task-list-item[data-task=\"k\"]","li.task-list-item[data-task=\"u\"]","li.task-list-item[data-task=\"d\"]","li.task-list-item[data-task=\"w\"]","::selection","input::placeholder","mjx-container.MathJax","mjx-math.MJX-TEX","div.is-clickable.nav-file-title.tappable.tree-item-self[data-path=\"callouts.md\"]","div.is-active.is-clickable.nav-file-title.tappable.tree-item-self[data-path=\"integrations.md\"]","div.is-clickable.mod-collapsible.nav-folder-title.tree-item-self[data-path=\"folder/collapsed\"]","div.is-clickable.mod-collapsible.nav-folder-title.tree-item-self[data-path=\"folder\"]",".nav-folder-collapse-indicator.collapse-icon svg.svg-icon",".tree-item-children",".nav-folder-title-content",".nav-folder:not(.is-collapsed) > .nav-folder-title .nav-folder-title-content::before",".nav-folder-children .nav-folder-title .nav-folder-title-content::before",".nav-file-title-content::before",".nav-files-container","thead th","tbody tr",".search-result-file-title",".workspace-tab-header-tab.is-active",".workspace-tab-header-tab",".canvas-node",".canvas-node-content",".canvas-node-container .markdown-rendered",".canvas-edge-label",".canvas-control-group button",".canvas-card-menu",".canvas-node-group",".metadata-property-value a",".multi-select-pill",".outline-view-outer .outline-view",".outline-view-outer .tree-item-self",".outline-view-outer .tree-item-inner",".outline-view-outer .tree-item-inner:hover",".outline-view-outer .tree-item-self.is-active",".outline-view-outer .tree-item-icon","details summary",".graph-view-container",".graph-view-container .graph-controls",".clickable-icon.graph-controls-button",".clickable-icon.graph-controls-button:hover",".popover.hover-popover .markdown-preview-view",".status-bar",".status-bar-item",".nav-header",".nav-files-container .tree-item",".nav-file-title",".nav-file-title-content",".clickable-icon",".clickable-icon svg",".view-header-breadcrumb",".view-header-breadcrumb-separator",".view-header-title",".internal-embed.is-loaded .markdown-embed",".math-block",".external-embed",".footnotes",".table-wrapper",".workspace-leaf-content",".view-content","pre.language-js code span","pre:has(> code.mermaid)",".tag-container",".tag","mark.search-result-highlight","article p > strong","input[type=\"checkbox\"]","input[type=\"checkbox\"]:checked",".workspace-leaf",".workspace-tab-header-container",".workspace-leaf.mod-active",".search-input:focus",".inline-title",".nav-folder-title:hover",".nav-file-title:hover",".search-result-file-title:hover"];
    const styleProps = ["accent-color","appearance","background","background-color","backdrop-filter","background-image","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-color","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","box-shadow","caret-color","color","column-rule-color","cursor","display","fill","filter","font-family","font-size","font-style","font-weight","gap","letter-spacing","line-height","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","opacity","outline","outline-color","outline-offset","outline-style","outline-width","overflow-x","animation-name","animation-duration","animation-timing-function","animation-delay","animation-iteration-count","animation-direction","animation-fill-mode","animation-play-state","padding","padding-bottom","padding-left","padding-right","padding-top","pointer-events","position","scrollbar-color","scrollbar-width","stroke","text-align","text-decoration","text-decoration-color","text-decoration-line","text-decoration-style","text-decoration-thickness","text-shadow","text-transform","transform","transition","user-select","vertical-align","white-space","height","max-height","max-width","min-height","min-width","width","-webkit-mask-image","-webkit-mask-position","-webkit-mask-repeat","-webkit-mask-size","-webkit-backdrop-filter","-webkit-text-stroke","-webkit-text-stroke-width","-webkit-text-stroke-color","-webkit-text-fill-color","-webkit-background-clip"];
    const pseudoElements = ["::before","::after","::selection","::marker","::placeholder"];
    const results = {};

    function discoverCssVarNames() {
      const varNames = new Set();
      try {
        for (const sheet of document.styleSheets) {
          try {
            const rules = sheet.cssRules || sheet.rules;
            if (!rules) continue;
            for (const rule of rules) {
              if (rule.style) {
                for (let i = 0; i < rule.style.length; i++) {
                  const prop = rule.style[i];
                  if (prop.startsWith("--")) {
                    varNames.add(prop);
                  }
                }
              }
              // Also check nested rules (e.g. @media, @supports)
              if (rule.cssRules) {
                for (const nested of rule.cssRules) {
                  if (nested.style) {
                    for (let i = 0; i < nested.style.length; i++) {
                      const prop = nested.style[i];
                      if (prop.startsWith("--")) {
                        varNames.add(prop);
                      }
                    }
                  }
                }
              }
            }
          } catch (e) {
            // CORS-restricted stylesheet, skip
          }
        }
      } catch (e) {
        // styleSheets access failed, skip
      }
      return varNames;
    }

    const allVarNames = discoverCssVarNames();

    // CSS custom properties that should always be preserved on callout
    // elements, even when they match the html/body baseline. These are
    // per-element overrides in Obsidian that getComputedStyle returns
    // as inherited values indistinguishable from the :root definition.
    const CALLOUT_PRESERVE_VARS = new Set([
      "--callout-color",
      "--callout-icon",
    ]);

    const provenanceMap = {};

    function getAllCssVars(style, baseline, selector, el) {
      const vars = {};
      const isCallout = selector && selector.includes(".callout");
      for (const prop of allVarNames) {
        const val = style.getPropertyValue(prop);
        if (val && val.trim()) {
          const trimmed = val.trim();
          if (baseline && baseline[prop] !== undefined && baseline[prop] === trimmed) {
            if (!(isCallout && CALLOUT_PRESERVE_VARS.has(prop))) {
              continue;
            }
          }
          vars[prop] = el ? resolveCssomValue(el, prop, trimmed) : trimmed;

          if (el) {
            const prov = getProvenance(el, prop);
            if (prov) {
              const key = selector || "html";
              if (!provenanceMap[key]) provenanceMap[key] = {};
              provenanceMap[key][prop] = prov.selector;
            }
          }
        }
      }
      return vars;
    }

    const SHORTHAND_TO_LONGHANDS = {
      "border": ["border-top-color","border-right-color","border-bottom-color","border-left-color",
                  "border-top-width","border-right-width","border-bottom-width","border-left-width",
                  "border-top-style","border-right-style","border-bottom-style","border-left-style"],
      "border-color": ["border-top-color","border-right-color","border-bottom-color","border-left-color"],
      "border-top": ["border-top-color","border-top-width","border-top-style"],
      "border-right": ["border-right-color","border-right-width","border-right-style"],
      "border-bottom": ["border-bottom-color","border-bottom-width","border-bottom-style"],
      "border-left": ["border-left-color","border-left-width","border-left-style"],
      "outline": ["outline-color","outline-width","outline-style"],
      "background": ["background-color","background-image"],
      "text-decoration": ["text-decoration-color","text-decoration-line","text-decoration-style","text-decoration-thickness"],
    };

    // Split a string by commas, respecting parentheses nesting.
    // e.g. "h1, :is(h2, h3), h4" → ["h1", ":is(h2, h3)", "h4"]
    function splitRespectingParens(str) {
      const result = [];
      let current = "";
      let depth = 0;
      for (const ch of str) {
        if (ch === "(" || ch === "[") depth++;
        else if (ch === ")" || ch === "]") depth--;
        if (ch === "," && depth === 0) {
          result.push(current.trim());
          current = "";
          continue;
        }
        current += ch;
      }
      if (current.trim()) result.push(current.trim());
      return result;
    }

    // Extract the balanced content of the first occurrence of
    // :<name>(...) from a selector string, handling nested parens.
    // Returns { start, end, content } or null.
    function extractFunctionalPseudo(str, name) {
      const prefix = ":" + name + "(";
      const idx = str.indexOf(prefix);
      if (idx === -1) return null;
      const contentStart = idx + prefix.length;
      let depth = 1;
      let i = contentStart;
      while (i < str.length && depth > 0) {
        if (str[i] === "(") depth++;
        else if (str[i] === ")") depth--;
        i++;
      }
      return {
        start: idx,
        end: i, // position after the closing ")"
        content: str.slice(contentStart, i - 1),
      };
    }

    function computeSpecificity(selector) {
      let s = selector.trim();
      let a = 0, b = 0, c = 0;

      // Strip :where() content (0 specificity) — handle nested parens
      let whereMatch;
      while ((whereMatch = extractFunctionalPseudo(s, "where")) !== null) {
        s = s.slice(0, whereMatch.start) + s.slice(whereMatch.end);
      }

      // Handle :is(), :not(), :has() — take max specificity of arguments
      for (const fn of ["is", "not", "has"]) {
        let fnMatch;
        while ((fnMatch = extractFunctionalPseudo(s, fn)) !== null) {
          const args = splitRespectingParens(fnMatch.content);
          let maxA = 0, maxB = 0, maxC = 0;
          for (const arg of args) {
            const [ia, ib, ic] = computeSpecificity(arg);
            if (ia > maxA || (ia === maxA && ib > maxB) || (ia === maxA && ib === maxB && ic > maxC)) {
              maxA = ia; maxB = ib; maxC = ic;
            }
          }
          a += maxA; b += maxB; c += maxC;
          s = s.slice(0, fnMatch.start) + s.slice(fnMatch.end);
        }
      }

      // #id
      const ids = s.match(/#[a-zA-Z_-][a-zA-Z0-9_-]*/g);
      if (ids) a += ids.length;

      // .class, [attr], :pseudo-class (not pseudo-elements)
      const classes = s.match(/.[a-zA-Z_-][a-zA-Z0-9_-]*/g);
      if (classes) b += classes.length;
      const attrs = s.match(/[[^]]*]/g);
      if (attrs) b += attrs.length;
      const pseudoClasses = s.match(/:(?!:)[a-zA-Z-]+/g);
      if (pseudoClasses) b += pseudoClasses.length;

      // type selectors (element names) — exclude * and pseudo-elements
      const stripped = s.replace(/#[a-zA-Z_-][a-zA-Z0-9_-]*/g, "")
        .replace(/.[a-zA-Z_-][a-zA-Z0-9_-]*/g, "")
        .replace(/[[^]]*]/g, "")
        .replace(/::[a-zA-Z-]+/g, "")
        .replace(/:[a-zA-Z-]+/g, "")
        .replace(/[>+~ ]+/g, " ");
      const types = stripped.trim().split(/s+/).filter(t => t && t !== "*");
      c += types.length;

      // ::pseudo-element counts as (0,0,1)
      const pseudoEls = selector.match(/::[a-zA-Z-]+/g);
      if (pseudoEls) c += pseudoEls.length;

      return [a, b, c];
    }

    function specificityCmp(a, b) {
      if (a[0] !== b[0]) return a[0] - b[0];
      if (a[1] !== b[1]) return a[1] - b[1];
      return a[2] - b[2];
    }

    // ─── CSSOM Rule Index ─────────────────────────────────────────────
    // Indexes ALL custom property declarations and standard property
    // declarations containing var() references from all stylesheets.
    // Enables reading declared values directly from the winning rule.
    // Tracks @layer membership for layer-aware cascade resolution.
    function buildRuleIndex() {
      const index = new Map();
      let order = 0;

      // @layer order tracking: layers declared earlier have lower priority.
      // Unlayered rules get layerIndex = -1 (beat all layered rules per spec).
      const layerOrder = new Map();
      let nextLayerIndex = 0;

      function registerLayer(name) {
        if (!layerOrder.has(name)) {
          layerOrder.set(name, nextLayerIndex++);
        }
      }

      // First pass: discover layer declaration order from @layer statements
      function discoverLayers(rules) {
        for (const rule of rules) {
          if (rule.constructor && rule.constructor.name === "CSSLayerStatementRule") {
            const names = rule.nameList || (rule.name ? [rule.name] : []);
            for (const n of names) registerLayer(n);
          } else if (rule.constructor && rule.constructor.name === "CSSLayerBlockRule") {
            registerLayer(rule.name || "");
          }
          if (rule.cssRules) discoverLayers(rule.cssRules);
        }
      }

      for (const sheet of document.styleSheets) {
        try {
          if (sheet.cssRules) discoverLayers(sheet.cssRules);
        } catch (e) {}
      }

      function processRuleForIndex(rule, containerApplies, currentLayer) {
        // Handle @layer block rules
        if (rule.constructor && rule.constructor.name === "CSSLayerBlockRule") {
          const layerName = rule.name || "";
          registerLayer(layerName);
          for (const nested of rule.cssRules) {
            processRuleForIndex(nested, containerApplies, layerName);
          }
          return;
        }

        if (rule.cssRules && rule.cssRules.length > 0 && !rule.selectorText) {
          let applies = containerApplies;
          if (rule.type === CSSRule.MEDIA_RULE) {
            try { applies = window.matchMedia(rule.conditionText || rule.media.mediaText).matches; }
            catch (e) { applies = true; }
          } else if (rule.type === CSSRule.SUPPORTS_RULE) {
            try { applies = CSS.supports(rule.conditionText); }
            catch (e) { applies = true; }
          }
          for (const nested of rule.cssRules) {
            processRuleForIndex(nested, applies, currentLayer);
          }
          return;
        }

        if (!rule.selectorText || !rule.style) return;

        const layerIdx = currentLayer !== null ? (layerOrder.get(currentLayer) ?? 0) : -1;

        for (let i = 0; i < rule.style.length; i++) {
          const prop = rule.style[i];
          const val = rule.style.getPropertyValue(prop);
          if (!val) continue;
          const trimmedVal = val.trim();
          if (!trimmedVal) continue;

          const isCustom = prop.startsWith("--");
          if (!isCustom && !trimmedVal.includes("var(")) continue;

          const important = rule.style.getPropertyPriority(prop) === "important";
          const selectors = splitRespectingParens(rule.selectorText);
          const specs = selectors.map(s => computeSpecificity(s));

          if (!index.has(prop)) index.set(prop, []);
          index.get(prop).push({
            selectors,
            specs,
            value: trimmedVal,
            important,
            order: order++,
            containerApplies,
            layerIndex: layerIdx,
          });

          // Shorthand: also register for longhands
          const longhands = SHORTHAND_TO_LONGHANDS[prop];
          if (longhands) {
            for (const lh of longhands) {
              if (!index.has(lh)) index.set(lh, []);
              index.get(lh).push({
                selectors,
                specs,
                value: trimmedVal,
                important,
                order: order++,
                containerApplies,
                isShorthand: prop,
                layerIndex: layerIdx,
              });
            }
          }
        }
      }

      for (const sheet of document.styleSheets) {
        try {
          const rules = sheet.cssRules || sheet.rules;
          if (!rules) continue;
          for (const rule of rules) {
            processRuleForIndex(rule, true, null);
          }
        } catch (e) {
          // CORS or access error, skip
        }
      }

      return index;
    }

    const cssomRuleIndex = buildRuleIndex();

    // Cascade resolution: finds the winning rule for a property on an
    // element. Returns { value, selector, important, order } or null.
    function findWinningRule(el, prop) {
      const candidates = cssomRuleIndex.get(prop);
      if (!candidates || candidates.length === 0) return null;

      let winner = null;
      let winnerSpec = [-1, -1, -1];
      let winnerOrder = -1;
      let winnerImportant = false;
      let winnerSelector = null;
      let winnerLayer = -2;

      for (const candidate of candidates) {
        if (!candidate.containerApplies) continue;
        let matchedSpec = null;
        let matchedSelector = null;
        for (let i = 0; i < candidate.selectors.length; i++) {
          if (elMatchesSelector(el, candidate.selectors[i])) {
            const spec = candidate.specs[i];
            if (!matchedSpec || specificityCmp(spec, matchedSpec) > 0) {
              matchedSpec = spec;
              matchedSelector = candidate.selectors[i];
            }
          }
        }
        if (!matchedSpec) continue;

        const candLayer = candidate.layerIndex !== undefined ? candidate.layerIndex : -1;
        let dominated = false;

        if (!winnerImportant && candidate.important) {
          dominated = true;
        } else if (winnerImportant && !candidate.important) {
          dominated = false;
        } else if (winnerImportant === candidate.important) {
          // Layer comparison: unlayered (-1) beats layered (>=0);
          // among layered, higher index wins (later-declared layer)
          if (candLayer !== winnerLayer) {
            if (candLayer === -1) dominated = true;
            else if (winnerLayer === -1) dominated = false;
            else dominated = candLayer > winnerLayer;
          } else {
            dominated = specificityCmp(matchedSpec, winnerSpec) > 0 ||
              (specificityCmp(matchedSpec, winnerSpec) === 0 && candidate.order > winnerOrder);
          }
        }

        if (!winner || dominated) {
          winner = candidate;
          winnerSpec = matchedSpec;
          winnerOrder = candidate.order;
          winnerImportant = candidate.important;
          winnerSelector = matchedSelector;
          winnerLayer = candLayer;
        }
      }

      if (!winner) return null;
      return { candidate: winner, selector: winnerSelector, specificity: winnerSpec };
    }

    function getDeclaredValue(el, prop) {
      const result = findWinningRule(el, prop);
      if (!result) return null;
      const { candidate } = result;

      // Handle shorthand → longhand extraction
      if (candidate.isShorthand) {
        const token = extractVarToken(candidate.value, prop);
        if (token) {
          const fc = token.indexOf(",");
          const fp = token.indexOf("(");
          if (fc > fp && fc !== -1) return token;
          return token;
        }
        return null;
      }

      return candidate.value;
    }

    // Source provenance: returns which selector won for a property
    function getProvenance(el, prop) {
      const result = findWinningRule(el, prop);
      if (!result) return null;
      return {
        selector: result.selector,
        specificity: result.specificity,
        important: result.candidate.important,
      };
    }

    // Pseudo-element aware cascade resolution. Finds the winning rule
    // for a property on a pseudo-element by matching selectors that
    // contain the pseudo suffix (::before, ::after, etc.)
    function findWinningRuleForPseudo(el, pseudo, prop) {
      const candidates = cssomRuleIndex.get(prop);
      if (!candidates || candidates.length === 0) return null;

      const pseudoRe = new RegExp(":{1,2}" + pseudo.replace(/^:{1,2}/, "") + "\s*$");

      let winner = null;
      let winnerSpec = [-1, -1, -1];
      let winnerOrder = -1;
      let winnerImportant = false;
      let winnerLayer = -2;

      for (const candidate of candidates) {
        if (!candidate.containerApplies) continue;
        let matchedSpec = null;
        for (let i = 0; i < candidate.selectors.length; i++) {
          const sel = candidate.selectors[i];
          if (!pseudoRe.test(sel)) continue;
          const baseSel = sel.replace(pseudoRe, "").trim() || "*";
          if (elMatchesSelector(el, baseSel)) {
            const spec = candidate.specs[i];
            if (!matchedSpec || specificityCmp(spec, matchedSpec) > 0) {
              matchedSpec = spec;
            }
          }
        }
        if (!matchedSpec) continue;

        const candLayer = candidate.layerIndex !== undefined ? candidate.layerIndex : -1;
        let dominated = false;

        if (!winnerImportant && candidate.important) {
          dominated = true;
        } else if (winnerImportant && !candidate.important) {
          dominated = false;
        } else if (winnerImportant === candidate.important) {
          if (candLayer !== winnerLayer) {
            if (candLayer === -1) dominated = true;
            else if (winnerLayer === -1) dominated = false;
            else dominated = candLayer > winnerLayer;
          } else {
            dominated = specificityCmp(matchedSpec, winnerSpec) > 0 ||
              (specificityCmp(matchedSpec, winnerSpec) === 0 && candidate.order > winnerOrder);
          }
        }

        if (!winner || dominated) {
          winner = candidate;
          winnerSpec = matchedSpec;
          winnerOrder = candidate.order;
          winnerImportant = candidate.important;
          winnerLayer = candLayer;
        }
      }

      if (!winner) return null;
      return { candidate: winner, specificity: winnerSpec };
    }

    function getDeclaredValueForPseudo(el, pseudo, prop) {
      const result = findWinningRuleForPseudo(el, pseudo, prop);
      if (!result) return null;
      const { candidate } = result;

      if (candidate.isShorthand) {
        const token = extractVarToken(candidate.value, prop);
        if (token) {
          const fc = token.indexOf(",");
          const fp = token.indexOf("(");
          if (fc > fp && fc !== -1) return token;
          return token;
        }
        return null;
      }

      return candidate.value;
    }

    function resolveCssomValueForPseudo(el, pseudo, prop, computedValue) {
      const declared = getDeclaredValueForPseudo(el, pseudo, prop);
      if (!declared) return computedValue;

      if (declared.includes("var(")) {
        return injectFallbacks(declared, el);
      }

      return declared;
    }

    // CSSOM-first: Inject computed fallback values into var() calls
    // that lack them. e.g. "var(--color)" → "var(--color, #ff0000)"
    function injectFallbacks(declaredValue, el) {
      return declaredValue.replace(
        /var(s*(--[a-zA-Z0-9_-]+)s*)/g,
        (match, varName) => {
          const resolved = el
            ? window.getComputedStyle(el).getPropertyValue(varName)?.trim()
            : null;
          if (resolved) return "var(" + varName + ", " + resolved + ")";
          return match;
        }
      );
    }

    // CSSOM-first: Resolve value for a property using CSSOM rule index.
    // Falls back to computedValue when no CSSOM match is found.
    function resolveCssomValue(el, prop, computedValue) {
      const declared = getDeclaredValue(el, prop);
      if (!declared) return computedValue;

      // If the declared value contains var(), inject fallbacks
      if (declared.includes("var(")) {
        return injectFallbacks(declared, el);
      }

      // Declared value is a plain value (no var references) — use it
      return declared;
    }

    let matchCache = new Map();
    let matchCacheEl = null;
    function elMatchesSelector(el, selector) {
      if (el !== matchCacheEl) {
        matchCache = new Map();
        matchCacheEl = el;
      }
      if (matchCache.has(selector)) return matchCache.get(selector);
      let result = false;
      try { result = el.matches(selector); } catch (e) {}
      matchCache.set(selector, result);
      return result;
    }

    function extractVarToken(shorthandValue, longhandProp) {
      if (!shorthandValue || !shorthandValue.includes("var(")) return null;
      const isColorProp = longhandProp.endsWith("-color");
      if (!isColorProp) return null;
      const varRe = /var([^)]+)/g;
      const matches = shorthandValue.match(varRe);
      if (matches && matches.length === 1) return matches[0];
      if (matches && matches.length > 1) {
        for (const m of matches) {
          if (/color/i.test(m)) return m;
        }
        return matches[matches.length - 1];
      }
      return null;
    }

    function getStandardProps(style, el) {
      const props = {};
      for (const prop of styleProps) {
        const val = style.getPropertyValue(prop);
        const trimmed = val?.trim();
        if (trimmed && trimmed !== "none" && trimmed !== "normal" && trimmed !== "auto") {
          props[prop] = el ? resolveCssomValue(el, prop, trimmed) : trimmed;
        } else if (el) {
          const declared = getDeclaredValue(el, prop);
          if (declared && declared.includes("var(")) {
            props[prop] = injectFallbacks(declared, el);
          }
        }
      }
      return props;
    }

    function extractPseudoStyles(el, selector, baseline) {
      for (const pseudo of pseudoElements) {
        try {
          const pseudoStyle = window.getComputedStyle(el, pseudo);
          const content = pseudoStyle.getPropertyValue("content");
          const maskImage = pseudoStyle.getPropertyValue("-webkit-mask-image")
            || pseudoStyle.getPropertyValue("mask-image");
          const hasContent = content && content !== "none" && content !== "normal";
          const hasMask = maskImage && maskImage !== "none";
          if (!hasContent && !hasMask) continue;

          const extracted = {};

          for (const prop of allVarNames) {
            const val = pseudoStyle.getPropertyValue(prop);
            if (val && val.trim()) {
              const trimmed = val.trim();
              if (baseline && baseline[prop] !== undefined && baseline[prop] === trimmed) continue;
              extracted[prop] = resolveCssomValueForPseudo(el, pseudo, prop, trimmed);
            }
          }

          for (const prop of styleProps) {
            const val = pseudoStyle.getPropertyValue(prop);
            const trimmed = val?.trim();
            if (trimmed && trimmed !== "none" && trimmed !== "normal" && trimmed !== "auto") {
              extracted[prop] = resolveCssomValueForPseudo(el, pseudo, prop, trimmed);
            } else {
              const declared = getDeclaredValueForPseudo(el, pseudo, prop);
              if (declared && declared.includes("var(")) {
                extracted[prop] = injectFallbacks(declared, el);
              }
            }
          }

          if (hasContent) {
            extracted["content"] = resolveCssomValueForPseudo(el, pseudo, "content", content.trim());
          }

          if (Object.keys(extracted).length > 0) {
            const pseudoKey = selector + pseudo;
            results[pseudoKey] = { ...results[pseudoKey], ...extracted };
          }
        } catch (e) {
          // Pseudo-element extraction failed, skip
        }
      }
    }

    // Extract from html element
    const htmlStyle = window.getComputedStyle(document.documentElement);
    const htmlExtracted = { ...getAllCssVars(htmlStyle, undefined, undefined, document.documentElement), ...getStandardProps(htmlStyle, document.documentElement) };
    if (Object.keys(htmlExtracted).length > 0) {
      results["html"] = htmlExtracted;
    }

    // Extract from body element
    const bodyStyle = window.getComputedStyle(document.body);
    results["body"] = { ...getAllCssVars(bodyStyle, undefined, undefined, document.body), ...getStandardProps(bodyStyle, document.body) };

    // Extract pseudo-elements from html and body
    extractPseudoStyles(document.documentElement, "html");
    extractPseudoStyles(document.body, "body");

    // Build baseline from html/body CSS vars — child elements will only
    // keep overrides, preventing inherited vars from bloating every selector.
    const cssVarBaseline = {};
    for (const key of ["html", "body"]) {
      if (!results[key]) continue;
      for (const prop of Object.keys(results[key])) {
        if (prop.startsWith("--") && !(prop in cssVarBaseline)) {
          cssVarBaseline[prop] = results[key][prop];
        }
      }
    }

    const seenBaseSelectors = new Set();

    for (const selector of selectors) {
      try {
        const baseSelector = selector.replace(/::[w-]+((.*?))?$/g, "").trim();
        if (!baseSelector) continue;
        if (seenBaseSelectors.has(baseSelector)) {
          if (baseSelector !== selector) continue;
        }
        seenBaseSelectors.add(baseSelector);

        const el = document.querySelector(baseSelector);
        if (!el) continue;

        const style = window.getComputedStyle(el);
        const extracted = { ...getAllCssVars(style, cssVarBaseline, baseSelector, el), ...getStandardProps(style, el) };

        if (Object.keys(extracted).length > 0) {
          results[baseSelector] = { ...results[baseSelector], ...extracted };
        }

        extractPseudoStyles(el, baseSelector, cssVarBaseline);
      } catch (e) {
        // Invalid selector, skip
      }
    }

    const taskItems = document.querySelectorAll("li.task-list-item[data-task]");
    const seenTasks = new Set();
    for (const li of taskItems) {
      const task = li.getAttribute("data-task");
      if (!task || seenTasks.has(task)) continue;
      seenTasks.add(task);

      const liSelector = 'li.task-list-item[data-task="' + task + '"]';
      const liStyle = window.getComputedStyle(li);
      const liColor = liStyle.getPropertyValue("color");
      const liTextDec = liStyle.getPropertyValue("text-decoration");
      const liTextDecLine = liStyle.getPropertyValue("text-decoration-line");
      if (liColor || liTextDec || liTextDecLine) {
        if (!results[liSelector]) results[liSelector] = {};
        if (liColor) results[liSelector]["color"] = liColor;
        if (liTextDec) results[liSelector]["text-decoration"] = liTextDec;
        if (liTextDecLine) results[liSelector]["text-decoration-line"] = liTextDecLine;
      }

      const input = li.querySelector('input[type="checkbox"]');
      if (!input) continue;

      const inputSelector = 'input[data-task="' + task + '"]';
      const inputStyle = window.getComputedStyle(input);
      const inputMask = inputStyle.getPropertyValue("-webkit-mask-image")
        || inputStyle.getPropertyValue("mask-image");
      if (inputMask && inputMask !== "none") {
        if (!results[inputSelector]) results[inputSelector] = {};
        results[inputSelector]["-webkit-mask-image"] = inputMask;
      }

      const afterStyle = window.getComputedStyle(input, "::after");
      const afterMask = afterStyle.getPropertyValue("-webkit-mask-image")
        || afterStyle.getPropertyValue("mask-image");
      const afterContent = afterStyle.getPropertyValue("content");
      const afterColor = afterStyle.getPropertyValue("color");
      const afterBgColor = afterStyle.getPropertyValue("background-color");

      const hasMask = afterMask && afterMask !== "none";
      const hasContent = afterContent && afterContent !== "none"
        && afterContent !== '""' && afterContent !== "normal";

      if (hasMask || hasContent) {
        const afterSelector = inputSelector + "::after";
        if (!results[afterSelector]) results[afterSelector] = {};
        if (hasMask) results[afterSelector]["-webkit-mask-image"] = afterMask;
        if (hasContent) results[afterSelector]["content"] = afterContent;
        if (afterColor) results[afterSelector]["color"] = afterColor;
        if (afterBgColor && afterBgColor !== "rgba(0, 0, 0, 0)")
          results[afterSelector]["background-color"] = afterBgColor;
      }
    }

    const resultCount = Object.keys(results).length;
    const minExpected = Math.max(30, Math.floor(selectors.length * 0.1));
    if (resultCount < minExpected) {
      console.warn(
        "Warning: Low extraction count (" +
          resultCount +
          ") vs expected minimum (" +
          minExpected +
          "). Theme or vault may not have loaded correctly.",
      );
    }

    fs.writeFileSync(
      RESULT_FILE,
      JSON.stringify(results, null, 2)
    );

    // Write provenance metadata (which CSS selector declared each property)
    const provenanceFile = RESULT_FILE.replace(/.json$/, "-provenance.json");
    fs.writeFileSync(provenanceFile, JSON.stringify(provenanceMap, null, 2));

    // Build and write variable dependency graph
    const varDependencyGraph = {};
    for (const [prop, candidates] of cssomRuleIndex.entries()) {
      if (!prop.startsWith("--")) continue;
      for (const candidate of candidates) {
        if (!candidate.value.includes("var(")) continue;
        const refs = [];
        let searchPos = 0;
        while (true) {
          const varIdx = candidate.value.indexOf("var(", searchPos);
          if (varIdx === -1) break;
          const afterParen = candidate.value.slice(varIdx + 4).trimStart();
          if (afterParen.startsWith("--")) {
            const endIdx = afterParen.search(/[^a-zA-Z0-9_-]/);
            const name = endIdx === -1 ? afterParen : afterParen.slice(0, endIdx);
            if (name.length > 2) refs.push(name);
          }
          searchPos = varIdx + 4;
        }
        if (refs.length > 0) {
          if (!varDependencyGraph[prop]) varDependencyGraph[prop] = {};
          const selectorKey = candidate.selectors[0] || "(unknown)";
          varDependencyGraph[prop][selectorKey] = refs;
        }
      }
    }
    const dependencyFile = RESULT_FILE.replace(/.json$/, "-var-graph.json");
    fs.writeFileSync(dependencyFile, JSON.stringify(varDependencyGraph, null, 2));

    // Build alternates: find non-winning candidates gated by body class
    // selectors that would win if those classes were toggled (Style Settings)
    const bodyClassRe = /body.([a-zA-Z0-9_-]+)/;
    const alternatesMap = {};

    for (const [resultSelector, props] of Object.entries(results)) {
      if (resultSelector.includes("::")) continue;
      let el;
      try {
        el = resultSelector === "html" ? document.documentElement
          : resultSelector === "body" ? document.body
          : document.querySelector(resultSelector);
      } catch (e) {
        continue;
      }
      if (!el) continue;

      for (const prop of Object.keys(props)) {
        const candidates = cssomRuleIndex.get(prop);
        if (!candidates || candidates.length < 2) continue;

        for (const candidate of candidates) {
          if (!candidate.containerApplies) continue;
          for (const sel of candidate.selectors) {
            const classMatch = sel.match(bodyClassRe);
            if (!classMatch) continue;
            const bodyClass = classMatch[1];

            if (document.body.classList.contains(bodyClass)) continue;

            const baseSel = sel.replace(bodyClassRe, "body").replace(/s+/g, " ").trim();
            let matches = false;
            try { matches = el.matches(baseSel) || el.matches(sel.replace(bodyClassRe, "")); }
            catch (e) {}
            if (!matches && resultSelector !== "body" && resultSelector !== "html") continue;

            const altValue = candidate.value.includes("var(")
              ? injectFallbacks(candidate.value, el)
              : candidate.value;

            if (altValue === props[prop]) continue;

            if (!alternatesMap[resultSelector]) alternatesMap[resultSelector] = {};
            if (!alternatesMap[resultSelector][prop]) alternatesMap[resultSelector][prop] = {};
            alternatesMap[resultSelector][prop]["body." + bodyClass] = altValue;
          }
        }
      }
    }

    const alternatesFile = RESULT_FILE.replace(/.json$/, "-alternates.json");
    if (Object.keys(alternatesMap).length > 0) {
      fs.writeFileSync(alternatesFile, JSON.stringify(alternatesMap, null, 2));
    }

    return Object.keys(results).length;
  } catch (topLevelError) {
    try {
      const diagInfo = [
        "EXTRACTION SCRIPT TOP-LEVEL ERROR",
        "Timestamp: " + new Date().toISOString(),
        "Error: " + (topLevelError.message || String(topLevelError)),
        "Stack: " + (topLevelError.stack || "N/A"),
        "Type: " + (topLevelError.constructor ? topLevelError.constructor.name : typeof topLevelError),
        "",
        "DOM state:",
        "  document.body exists: " + !!document.body,
        "  document.documentElement exists: " + !!document.documentElement,
        "  styleSheets count: " + (document.styleSheets ? document.styleSheets.length : "N/A"),
        "  body classList: " + (document.body ? Array.from(document.body.classList).join(", ") : "N/A"),
        "  workspace exists: " + !!document.querySelector(".workspace"),
      ].join("\n");
      fs.writeFileSync(ERROR_FILE, diagInfo);
    } catch (writeError) {
      // Cannot even write diagnostics - truly fatal
    }
    return -1;
  }
})();
