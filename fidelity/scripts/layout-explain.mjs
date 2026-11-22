#!/usr/bin/env node
/**
 * Why does an element look like that? Loads a theme into the specimen site and
 * prints the element's computed values and every converted rule that sets them.
 *
 *   node fidelity/scripts/layout-explain.mjs --theme="Tokyo Night" \
 *     --selector="article .markdown-preview-view" --props=padding,overflow-y \
 *     [--width=375] [--mode=dark] [--page=specimen] [--eval="js"] [--shot=x.png]
 *
 * --theme also takes "(default)" (Obsidian's default theme) and "(quartz)"
 * (no theme CSS).
 */
import path from "node:path";
import { fileURLToPath } from "node:url";
import { startQuartz } from "../harness/quartz.mjs";
import { heightFor } from "../harness/layout.mjs";

const { core } = await import("../harness/core.mjs");
const repo = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../..",
);
const arg = (k, d) =>
  process.argv.find((a) => a.startsWith(`--${k}=`))?.slice(k.length + 3) ?? d;
const theme = arg("theme", "(default)");
const width = Number(arg("width", "375"));
const mode = arg("mode", "dark");
const selector = arg("selector", "article .markdown-preview-view");
const props = arg("props", "padding,margin,width").split(",");

const sourceOpts = {
  cacheDir: path.join(repo, "fidelity/out/theme-cache"),
  cacheTtl: 7 * 24 * 60 * 60 * 1000,
};
const css =
  theme === "(quartz)"
    ? { main: "", raw: "" }
    : core.convertTheme({
        themeCss:
          theme === "(default)"
            ? ""
            : (await core.resolveTheme(theme, sourceOpts)).css,
        styleSettings: {},
      });
const quartz = await startQuartz({
  site: path.resolve(arg("site", path.join(repo, "fidelity/out/site"))),
});
try {
  const q = await quartz.newPage(css, mode);
  await q.page.setViewportSize({ width, height: heightFor(width) });
  await q.open(arg("page", "specimen"));
  await q.page.evaluate(() =>
    window.scrollTo({ top: 0, left: 0, behavior: "instant" }),
  );
  await q.page.waitForTimeout(150);
  console.log(
    await q.page.evaluate(
      ({ selector, props }) => {
        const all = document.querySelectorAll(selector);
        const el = all[0];
        if (!el) return `no element matches ${selector}`;
        const r = el.getBoundingClientRect();
        const cs = getComputedStyle(el);
        const out = [
          `${all.length} match(es); first: ${el.outerHTML.slice(0, 160)}`,
          `rect ${Math.round(r.left)},${Math.round(r.top)} ${Math.round(r.width)}×${Math.round(r.height)}`,
          props.map((p) => `${p}: ${cs.getPropertyValue(p)}`).join("; "),
          "",
        ];
        const walk = (rules, ctx) => {
          for (const x of rules) {
            const inner =
              x.conditionText != null
                ? `@${x.constructor.name === "CSSSupportsRule" ? "supports" : "media"} ${x.conditionText} `
                : x.name != null && x.cssRules
                  ? `@layer ${x.name} `
                  : "";
            // Grouping rules only: a nested style rule's `&` would match `el` itself.
            if (x.cssRules && !x.selectorText) walk(x.cssRules, ctx + inner);
            if (!x.selectorText || !x.style) continue;
            const set = props.filter((p) => x.style.getPropertyValue(p));
            if (!set.length) continue;
            try {
              if (!el.matches(x.selectorText)) continue;
            } catch {
              continue;
            }
            const decls = set.map(
              (p) =>
                `${p}: ${x.style.getPropertyValue(p)}${x.style.getPropertyPriority(p) ? " !important" : ""}`,
            );
            out.push(`${ctx}${x.selectorText} { ${decls.join("; ")} }`);
          }
        };
        for (const s of document.styleSheets)
          try {
            walk(s.cssRules, "");
          } catch {}
        return out.join("\n");
      },
      { selector, props },
    ),
  );
  if (arg("eval", "")) console.log(await q.page.evaluate(arg("eval", "")));
  if (arg("shot", "")) {
    await q.page.screenshot({ path: path.resolve(arg("shot", "")) });
    console.error(`wrote ${arg("shot", "")}`);
  }
  await q.close();
} finally {
  await quartz.stop();
}
