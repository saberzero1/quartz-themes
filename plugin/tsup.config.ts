import { defineConfig } from "tsup";
import { cpSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { resolve, join, extname } from "node:path";

export default defineConfig({
  entry: { index: "src/index.ts", types: "src/types.ts" },
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  target: "es2022",
  splitting: false,
  outDir: "dist",
  async onSuccess() {
    const src = resolve("src", "themes");
    const dest = resolve("dist", "themes");
    mkdirSync(dest, { recursive: true });
    for (const file of readdirSync(src)) {
      if (extname(file) === ".json") {
        cpSync(join(src, file), join(dest, file));
      }
    }
  },
});
