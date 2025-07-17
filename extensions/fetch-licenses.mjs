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

const manifestCollection = getManifestCollection();
const repositories = JSON.parse(
  readFileSync("./obsidian/obsidian-theme-list.json", "utf8"),
);

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
      return null;
    }

    if (!response.ok) {
      throw new Error(
        `GitHub API responded with status ${response.status} for ${repoFullName}`,
      );
    }

    const licenseData = await response.json();

    // The license content from the API is Base64 encoded. We need to decode it.
    const content = Buffer.from(licenseData.content, "base64").toString("utf8");
    return content;
  } catch (error) {
    console.error(
      `[ERROR] Failed to fetch license for ${repoFullName}:`,
      error.message,
    );
    // Return null to signify failure, allowing the script to continue.
    return null;
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

    const licenseContent = await getLicenseContent(repository);

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
fetchAndDownloadLicenses(repoInfo);
