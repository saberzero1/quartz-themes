import { test, describe } from "node:test";
import assert from "node:assert";
import postcss from "postcss";
import rewriteObsidianSelectors from "../selector-rewriter.mjs";

const transform = (css) =>
  postcss([rewriteObsidianSelectors()]).process(css, { from: undefined }).css;

describe("rewrite-obsidian-selectors", () => {
  test('body.theme-dark → :root[saved-theme="dark"]', () => {
    const input = "body.theme-dark .callout { color: red; }";
    const output = transform(input);
    assert.ok(output.includes(':root[saved-theme="dark"]'));
    assert.ok(!output.includes("body.theme-dark"));
  });

  test('.theme-light → :root:not([saved-theme="dark"])', () => {
    const input = ".theme-light h1 { color: blue; }";
    const output = transform(input);
    assert.ok(output.includes(':root:not([saved-theme="dark"])'));
  });

  test("body.css-settings-manager → body", () => {
    const input = "body.css-settings-manager { --accent: red; }";
    const output = transform(input);
    assert.ok(output.includes("body {") || output.includes("body{"));
    assert.ok(!output.includes("css-settings-manager"));
  });

  test("preserves unrelated selectors", () => {
    const input = '.callout[data-callout="note"] { color: blue; }';
    const output = transform(input);
    assert.strictEqual(input, output);
  });

  test("deeply nested selectors only rewrite matched parts", () => {
    const input =
      "body.theme-dark .workspace-leaf-content h1 { color: white; }";
    const output = transform(input);
    assert.ok(output.includes(':root[saved-theme="dark"]'));
    assert.ok(output.includes(".center"));
    assert.ok(output.includes("h1"));
  });
});
