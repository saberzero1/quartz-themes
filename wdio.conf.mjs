import * as path from "path";
import { readdirSync } from "fs";
import {
  obsidianBetaAvailable,
  resolveObsidianVersions,
} from "wdio-obsidian-service";

const cacheDir = path.resolve(".obsidian-cache");

const themeList = readdirSync("./runner/vault/.obsidian/themes").filter(
  (file) => file.endsWith(".css") || file.endsWith(".json"),
);
const pluginList = readdirSync("./runner/vault/.obsidian/plugins").filter(
  (file) =>
    file.endsWith(".js") || file.endsWith(".json") || file.endsWith(".css"),
);

let versions; // [appVersion, installerVersion][]
if (process.env.OBSIDIAN_VERSIONS) {
  // Space separated list of appVersion/installerVersion, e.g. "1.7.7/latest latest/earliest"
  versions = process.env.OBSIDIAN_VERSIONS.split(/[ ,]+/).map((v) => {
    const [app, installer = "earliest"] = v.split("/"); // default to earliest installer
    return [app, installer];
  });
} else if (process.env.CI) {
  // Running in GitHub CI. You can use RUNNER_OS to select different versions on different
  // platforms in the workflow matrix if you want
  versions = [
    ["earliest", "earliest"],
    ["latest", "latest"],
  ];
  if (await obsidianBetaAvailable(cacheDir)) {
    versions.push(["latest-beta", "latest"]);
  }

  // Print the resolved Obsidian versions to use as the workflow cache key
  // (see .github/workflows/test.yaml)
  for (let [app, installer] of versions) {
    [app, installer] = await resolveObsidianVersions(app, installer, cacheDir);
    console.log(`${app}/${installer}`);
  }
} else {
  versions = [["1.9.14", "1.9.14"]];
}

export const config = {
  runner: "local",

  specs: ["./runner/scripts/extract.js"],

  // How many instances of Obsidian should be launched in parallel during testing.
  //maxInstances: Number(process.env["WDIO_MAX_INSTANCES"] || 4),
  maxInstances: 1,

  capabilities: versions.map(([appVersion, installerVersion]) => ({
    browserName: "obsidian",
    browserVersion: appVersion,
    "wdio:obsidianOptions": {
      installerVersion: installerVersion,
      plugins: pluginList.map(
        (plugin) => `./runner/vault/.obsidian/plugins/${plugin}`,
      ),
      themes: themeList.map(
        (theme) => `./runner/vault/.obsidian/themes/${theme}`,
      ),
      // If you need to switch between multiple vaults, you can omit this and use
      // `reloadObsidian` to open vaults during the test.
      vault: "./runner/vault",
      copy: true,
      execArgv: ["--disable-gpu"],
    },
  })),

  framework: "mocha",
  services: ["obsidian"],
  // You can use any wdio reporter, but by default they show the chromium version instead of the Obsidian version a
  // test is running on. obsidian-reporter is just a wrapper around spec-reporter that shows the Obsidian version.
  reporters: ["obsidian"],

  mochaOpts: {
    ui: "bdd",
    timeout: 12 * 60 * 60 * 1000,
    // You can set more config here like "retry" to retry flaky tests
    // or "bail" to quit tests after the first failure.
  },

  waitforInterval: 5 * 60 * 1000,
  waitforTimeout: 15 * 60 * 1000,

  cacheDir: cacheDir,

  logLevel: "warn",

  execArgv: ["--expose-gc", "--max-old-space-size=12288"],
};
