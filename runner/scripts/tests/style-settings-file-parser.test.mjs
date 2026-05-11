import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { extractStyleSettingsFromFile } from "../../../util/postcss-style-settings.mjs";

describe("extractStyleSettingsFromFile", () => {
  test("parses standalone sidecar YAML sections format", () => {
    const dir = mkdtempSync(join(tmpdir(), "style-settings-test-"));
    const filePath = join(dir, "style-settings.yaml");

    writeFileSync(
      filePath,
      [
        "mode: replace",
        "sections:",
        "  - name: Demo",
        "    id: demo",
        "    settings:",
        "      - id: accent",
        "        title: Accent",
        "        type: variable-color",
        "        format: hex",
        "        default: '#ff0000'",
      ].join("\n"),
    );

    const parsed = extractStyleSettingsFromFile(filePath);
    assert.equal(parsed.id, "demo");
    assert.equal(parsed.name, "Demo");
    assert.equal(parsed.settings.length, 1);
    assert.equal(parsed.settings[0].id, "accent");

    rmSync(dir, { recursive: true, force: true });
  });
});
