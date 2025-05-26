import * as postcss from "postcss";
import * as scssSyntax from "postcss-scss";
import * as fs from "fs"
import * as path from "path"
import { combineIdenticalSelectors } from "./postcss.mjs";

/**
 * Resolves the full path for an SCSS @use rule.
 * Handles partials (_filename.scss), regular files (filename.scss),
 * and directory imports (filename/_index.scss).
 *
 * @param {string} usePathString - The path string from the @use rule (e.g., "foo", "./bar/baz").
 * @param {string} currentFileDir - The absolute directory path of the file containing the @use rule.
 * @returns {string|null} The resolved absolute file path, or null if not found.
 */
function resolveScssPath(usePathString, currentFileDir) {
  const baseName = path.basename(usePathString);
  const dirName = path.dirname(usePathString);

  const targetSearchDir = path.resolve(currentFileDir, dirName);
  const attempts = [];

  attempts.push(path.join(targetSearchDir, `_${baseName}.scss`));
  attempts.push(path.join(targetSearchDir, `${baseName}.scss`));

  if (!path.extname(baseName)) {
    const directoryAsModulePath = path.join(targetSearchDir, baseName);
    attempts.push(path.join(directoryAsModulePath, `_index.scss`));
    attempts.push(path.join(directoryAsModulePath, `index.scss`));
  }

  for (const p of attempts) {
    if (fs.existsSync(p)) {
      return p;
    }
  }
  const directPath = path.resolve(currentFileDir, usePathString);
  if (usePathString.endsWith(".scss") && fs.existsSync(directPath)) {
    return directPath;
  }
  return null;
}

/**
 * Recursively processes an SCSS string, inlining @use rules.
 * This version minimizes internal cloning and raw manipulation to prioritize structure.
 *
 * @param {string} scssString - The SCSS content string.
 * @param {string} currentFilePath - Absolute path of the current SCSS file.
 * @param {Set<string>} visitedForCircularCheck - Set of paths in the current recursion stack.
 * @param {boolean} isMainFile - True if this is the top-level _index.scss file.
 * @returns {{root: postcss.Root, collectedSassUseParams: Set<string>, successfullyInlinedPaths: Set<string>}}
 */
function processAndInline(
  scssString,
  currentFilePath,
  visitedForCircularCheck,
  isMainFile = false,
) {
  const absoluteCurrentFilePath = path.resolve(currentFilePath);

  if (visitedForCircularCheck.has(absoluteCurrentFilePath)) {
    console.warn(
      `Circular dependency detected for: ${absoluteCurrentFilePath}. Skipping.`,
    );
    return {
      root: postcss.root(),
      collectedSassUseParams: new Set(),
      successfullyInlinedPaths: new Set(),
    };
  }
  visitedForCircularCheck.add(absoluteCurrentFilePath);

  let currentFileAst;
  try {
    currentFileAst = postcss.parse(scssString, { syntax: scssSyntax });
  } catch (parseError) {
    console.error(
      `Error parsing SCSS in ${absoluteCurrentFilePath}: ${parseError.message}`,
    );
    visitedForCircularCheck.delete(absoluteCurrentFilePath);
    return {
      root: postcss.root(),
      collectedSassUseParams: new Set(),
      successfullyInlinedPaths: new Set(),
    };
  }

  const currentFileDir = path.dirname(absoluteCurrentFilePath);
  const nodesToKeepOrReplace = []; // Will hold original nodes or inlined content
  const localCollectedSassUseParams = new Set();
  const localSuccessfullyInlinedPaths = new Set();

  // Iterate over nodes of the *current* file being processed
  for (const node of currentFileAst.nodes) {
    if (node.type === "atrule" && node.name === "use") {
      const useParamOriginal = node.params.trim();
      let modulePath;

      const match = useParamOriginal.match(/^(['"])(.+?)\1/);
      if (match && match[2]) {
        modulePath = match[2];
      } else {
        console.warn(
          `Skipping complex/malformed @use: ${node.toString()} in ${absoluteCurrentFilePath}`,
        );
        nodesToKeepOrReplace.push(node); // Keep the original node
        continue;
      }

      if (modulePath.startsWith("sass:")) {
        if (!isMainFile) {
          localCollectedSassUseParams.add(useParamOriginal);
          // Don't add the "sass:" @use node itself to nodesToKeepOrReplace if it's from an inlined file
        } else {
          nodesToKeepOrReplace.push(node); // Keep "sass:" @use if in main file
        }
        continue;
      }

      const resolvedPath = resolveScssPath(modulePath, currentFileDir);

      if (resolvedPath) {
        try {
          const usedFileContent = fs.readFileSync(resolvedPath, "utf8");
          localSuccessfullyInlinedPaths.add(resolvedPath); // Mark as successfully read

          const inlinedResult = processAndInline( // Recursive call
            usedFileContent,
            resolvedPath,
            new Set(visitedForCircularCheck), // Pass a copy for this branch's cycle check
            false, // Inlined files are not the main file
          );

          // Add all nodes from the inlined file's processed AST.
          // These nodes are moved from inlinedResult.root.
          inlinedResult.root.nodes.forEach(inlinedNode => {
            nodesToKeepOrReplace.push(inlinedNode);
          });

          inlinedResult.collectedSassUseParams.forEach(param =>
            localCollectedSassUseParams.add(param),
          );
          inlinedResult.successfullyInlinedPaths.forEach(p =>
            localSuccessfullyInlinedPaths.add(p),
          );

        } catch (error) {
          console.error(
            `Error reading/processing @use ${resolvedPath} from ${absoluteCurrentFilePath}: ${error.message}`,
          );
          nodesToKeepOrReplace.push(node); // Keep the original @use node if inlining fails
        }
      } else {
        console.warn(
          `Could not resolve @use path: "${modulePath}" in ${absoluteCurrentFilePath}`,
        );
        nodesToKeepOrReplace.push(node); // Keep the original @use node if path resolution fails
      }
    } else {
      // This is a non-@use node from the current file (e.g., a rule, a comment, a variable).
      nodesToKeepOrReplace.push(node); // Keep the original node
    }
  }

  // Construct the resulting AST for *this* file's processing.
  // The nodes in nodesToKeepOrReplace are moved here.
  const resultRootForThisCall = postcss.root();
  resultRootForThisCall.nodes = nodesToKeepOrReplace;

  visitedForCircularCheck.delete(absoluteCurrentFilePath); // Clean up for current path

  return {
    root: resultRootForThisCall,
    collectedSassUseParams: localCollectedSassUseParams,
    successfullyInlinedPaths: localSuccessfullyInlinedPaths,
  };
}

/**
 * Main function to inline SCSS @use rules, handle "sass:" modules,
 * preserve main file content, and delete inlined files.
 *
 * @param {string} mainScssString - The content of the main SCSS file.
 * @param {string} mainFilePath - The absolute path to the main SCSS file.
 * @returns {string} The SCSS string with @use rules inlined.
 */
export function inlineScssUseRulesAndClean(mainScssString, mainFilePath) {
  const absoluteMainFilePath = path.resolve(mainFilePath);

  // processAndInline is expected to:
  // - For the main file: replace file-based @use with inlined content,
  //   keep its own sass:use rules, and keep its other original nodes.
  const {
    root: processedMainAst, // AST of the main file after its file-based @uses are inlined
    collectedSassUseParams: sassParamsFromInlinedFiles, // sass:uses from files that were inlined
    successfullyInlinedPaths,
  } = processAndInline(
    mainScssString,
    absoluteMainFilePath,
    new Set(), // Initial visited set for circular checks
    true, // This is the main file
  );

  const finalRoot = postcss.root();
  const mainFileSassUseParams = new Set();

  // Iterate over the nodes of the processed main file's AST.
  // These nodes include original content from _index.scss and content inlined from other files.
  processedMainAst.nodes.forEach((node) => {
    // It's crucial to clone nodes when moving them to a new parent or if they might be reused.
    const clonedNode = node.clone();

    if (
      clonedNode.type === "atrule" &&
      clonedNode.name === "use" &&
      clonedNode.params.trim().match(/^(['"])sass:.+?\1/)
    ) {
      // This is a "sass:" use rule found in the main file's processed content.
      // Collect its parameter. We will re-add all sass: uses at the top later.
      mainFileSassUseParams.add(clonedNode.params.trim());
    } else {
      // This is either inlined content or original content from _index.scss (not a sass:use).
      // Add it to our final AST.
      finalRoot.append(clonedNode);
    }
  });

  // Combine all "sass:" uses: those originally in _index.scss and those hoisted from inlined files.
  const allSassUseParams = new Set([
    ...sassParamsFromInlinedFiles,
    ...mainFileSassUseParams,
  ]);

  // Prepend all unique "sass:" uses to the final AST, sorted for consistency.
  Array.from(allSassUseParams)
    .sort() // Optional: sort them for consistent output order
    .reverse() // Prepend adds to the beginning, so reverse to maintain sorted order at top
    .forEach((param) => {
      finalRoot.prepend(postcss.atRule({ name: "use", params: param }));
    });

  const outputScss = finalRoot.toString(scssSyntax);

  // Delete inlined files (excluding the main file itself)
  successfullyInlinedPaths.forEach((filePath) => {
    if (path.resolve(filePath) !== absoluteMainFilePath) {
      try {
        fs.unlinkSync(filePath);
        console.log(`Deleted inlined file: ${filePath}`);
      } catch (err) {
        console.error(`Error deleting file ${filePath}: ${err.message}`);
      }
    }}
  );

  return outputScss;
}
