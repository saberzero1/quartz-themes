/**
 * fetch-licenses.js
 *
 * This script fetches license files from a list of specified GitHub repositories
 * and saves them to local target paths.
 *
 * To run this script:
 * 1. Make sure you have Node.js (v18+) installed.
 * 2. Save this file as `fetch-licenses.js`.
 * 3. Modify the `repoInfo` array below to include the repositories you need.
 * 4. Run the script from your terminal: `node fetch-licenses.js`
 */

import fs from "fs/promises";
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import getManifestCollection from "./manifest.mjs";
import {
  sanitizeFilenamePreservingEmojis,
  listFoldersInDirectory,
} from "../util/util.mjs";

const manifestCollection = getManifestCollection();
const repositories = JSON.parse(
  readFileSync("./obsidian/obsidian-theme-list.json", "utf8"),
);

const themes = JSON.parse(readFileSync("./themes.json", "utf8"));
const themesObject = themes["themes"];

const flags = process.argv.slice(2);

// --- CONFIGURATION ---
// Add the repositories you want to fetch licenses from to this array.
const repoInfo = manifestCollection
  .map((manifest) => {
    let repo;
    const downloadTarget = join(
      "obsidian", // Directory where licenses will be saved
      manifest.name, // Use the theme name as the subdirectory
      "LICENSE.md", // License file name
    );
    if (existsSync(downloadTarget)) {
      console.log(
        `[SKIP] License file already exists for ${manifest.name}. Skipping...`,
      );
      return { repository: null, downloadTarget: null };
    }
    try {
      repo = repositories.filter((obj) => obj.name === manifest.name)[0].repo;
    } catch {
      return { repository: null, downloadTarget: null };
    }
    return {
      name: manifest.name, // Theme name
      repository: repo, // e.g., "owner/repo-name"
      downloadTarget: downloadTarget, // e.g., "obsidian/theme-name/LICENSE.md"
    };
  })
  .filter((info) => info.repository && info.downloadTarget);
// --- SCRIPT LOGIC ---

/**
 * Fetches the license for a single repository using the GitHub API.
 * @param {string} repoFullName - The repository name in "owner/repository" format.
 * @returns {Promise<string|null>} The decoded license content or null if not found.
 */
async function getLicenseContent(repoFullName) {
  const apiUrl = `https://api.github.com/repos/${repoFullName}/license`;
  console.log(`Fetching license info from: ${apiUrl}`);

  const result = {
    licenseContent: null,
    licenseSpdxId: "No SPDX ID Found",
    licenseName: "No License Found",
  };

  const headers = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "saberzero1", // GitHub requires a User-Agent
  };

  if (flags.includes("--token")) {
    headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
  }

  try {
    // Note: Unauthenticated requests to the GitHub API are rate-limited (60 req/hr).
    // For more requests, you would need to add an Authorization header with a token.
    // headers: { 'Authorization': 'token YOUR_GITHUB_TOKEN' }
    const response = await fetch(apiUrl, { headers: headers });

    if (response.status === 404) {
      console.warn(`[WARN] No license file found for ${repoFullName}.`);
      return result; // Return empty result if no license file is found
    }

    if (!response.ok) {
      throw new Error(
        `GitHub API responded with status ${response.status} for ${repoFullName}`,
      );
    }

    const licenseData = await response.json();

    // The license content from the API is Base64 encoded. We need to decode it.
    result.licenseContent =
      Buffer.from(licenseData.content, "base64").toString("utf8") || null;
    result.licenseSpdxId = licenseData.license.spdx_id || "Non-SPDX License";
    result.licenseName = licenseData.license.name || "Unknown License";
    return result;
  } catch (error) {
    console.error(
      `[ERROR] Failed to fetch license for ${repoFullName}:`,
      error.message,
    );
    // Return null to signify failure, allowing the script to continue.
    return {};
  }
}

/**
 * Ensures the target directory exists and writes the file.
 * @param {string} targetPath - The full path where the file should be saved.
 * @param {string} content - The content to write to the file.
 */
async function saveFile(targetPath, content) {
  try {
    const dir = dirname(targetPath);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(targetPath, content, "utf8");
    console.log(`[SUCCESS] Saved file to ${targetPath}`);
  } catch (error) {
    console.error(`[ERROR] Could not write file to ${targetPath}:`, error);
  }
}

/**
 * Main function to iterate through repositories and process them.
 * @param {Array<object>} repos - The array of repository info objects.
 */
async function fetchAndDownloadLicenses(repos) {
  console.log("--- Starting License Fetch Process ---");

  for (const info of repos) {
    const { repository, downloadTarget } = info;
    console.log(`\nProcessing ${repository}...`);

    const { licenseContent, licenseSpdxId, licenseName } =
      await getLicenseContent(repository);

    console.log(licenseName, licenseSpdxId);

    // Add SPDX ID to the theme's manifest.json.
    if (licenseSpdxId && licenseName) {
      const manifestPath = join("obsidian", info.name, "manifest.json");
      try {
        const manifestData = JSON.parse(
          await fs.readFile(manifestPath, "utf8"),
        );
        manifestData.license = { name: licenseName, spdx_id: licenseSpdxId };
        await fs.writeFile(
          manifestPath,
          JSON.stringify(manifestData, null, 2),
          "utf8",
        );
        console.log(
          `[INFO] Updated manifest.json for ${info.name} with license info.`,
        );
      } catch (error) {
        console.error(
          `[ERROR] Could not update manifest.json for ${info.name}:`,
          error.message,
        );
      }
      try {
        // Also update the themes.json file with the license info.
        themesObject[sanitizeFilenamePreservingEmojis(info.name)].license = {
          name: licenseName,
          spdx_id: licenseSpdxId,
        };
      } catch (error) {
        console.error(
          `[ERROR] Could not update themes.json for ${info.name}:`,
          error.message,
        );
      }
    }

    if (licenseContent) {
      console.log(
        `[INFO] License found for ${repository}. Saving to ${downloadTarget}`,
      );
      // Check if there is already a NO_LICENSE_IN_REPOSITORY file in the target directory.
      // If it exists, delete it to avoid confusion.
      const targetDir = dirname(downloadTarget);
      const noLicensePath = join(targetDir, "NO_LICENSE_IN_REPOSITORY");
      if (existsSync(noLicensePath)) {
        console.log(
          `[INFO] Removing existing NO_LICENSE_IN_REPOSITORY file at ${noLicensePath}`,
        );
        await fs.unlink(noLicensePath);
      }
      // License was found, save it to the specified target.
      await saveFile(downloadTarget, licenseContent);
    } else {
      // No license was found or an error occurred.
      const targetDir = dirname(downloadTarget);
      // Check if there is already a LICENSE.md file or NO_LICENSE_IN_REPOSITORY in the target directory.
      if (existsSync(join(targetDir, "LICENSE.md"))) {
        console.log(
          `[SKIP] LICENSE.md already exists in ${targetDir}. Skipping...`,
        );
        continue;
      } else if (existsSync(join(targetDir, "NO_LICENSE_IN_REPOSITORY"))) {
        console.log(
          `[SKIP] NO_LICENSE_IN_REPOSITORY already exists in ${targetDir}. Skipping...`,
        );
        continue;
      }
      const noLicensePath = join(targetDir, "NO_LICENSE_IN_REPOSITORY");
      console.log(
        `Creating empty file to signify no license: ${noLicensePath}`,
      );
      // Write an empty file.
      await saveFile(noLicensePath, "");
    }
  }

  console.log("\n--- License Fetch Process Finished ---");
}

// --- EXECUTION ---
console.log("Starting license fetch script...");
console.log(`Fetching licenses for ${repoInfo.length} repositories...`);
console.log("Or until GitHub API rate limit is reached...");
// Run the main function with the configured repository list.
await fetchAndDownloadLicenses(repoInfo);

// Add information for themes without a license file.
const themesNew = {};
for (const theme of Object.entries(themesObject)) {
  if (!theme.license) {
    theme.license = { name: "No License Found", spdx_id: "No SPDX ID Found" };
  }
  themesNew[theme[0]] = theme[1];
}

// Add NO_LICENSE_IN_REPOSITORY file for themes that have no LICENSE.md or NO_LICENSE_IN_REPOSITORY file.
for (const folder of listFoldersInDirectory("./obsidian")) {
  const targetNoLicensePath = join(
    "./obsidian",
    folder,
    "NO_LICENSE_IN_REPOSITORY",
  );
  const targetPath = join("./obsidian", folder, "LICENSE.md");
  if (!existsSync(targetPath) && !existsSync(targetNoLicensePath)) {
    console.log(
      `[INFO] Creating NO_LICENSE_IN_REPOSITORY file for ${folder} at ${targetPath}`,
    );
    await fs.writeFile(targetNoLicensePath, "", "utf8");
  }
}

// Write the updated themes.json file back to disk.
themes["themes"] = themesNew;
await fs.writeFile("./themes.json", JSON.stringify(themes, null, 2), "utf8");
