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

  let root;
  try {
    root = postcss.parse(scssString, { syntax: scssSyntax });
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
  const newNodes = [];
  const localCollectedSassUseParams = new Set();
  const localSuccessfullyInlinedPaths = new Set();

  for (const node of root.nodes) {
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
        newNodes.push(node.clone());
        continue;
      }

      if (modulePath.startsWith("sass:")) {
        if (!isMainFile) {
          localCollectedSassUseParams.add(useParamOriginal);
        } else {
          newNodes.push(node.clone());
        }
        continue;
      }

      const resolvedPath = resolveScssPath(modulePath, currentFileDir);

      if (resolvedPath) {
        try {
          const usedFileContent = fs.readFileSync(resolvedPath, "utf8");
          // Add resolvedPath here, as we've successfully read it.
          localSuccessfullyInlinedPaths.add(resolvedPath);

          const result = processAndInline(
            usedFileContent,
            resolvedPath,
            new Set(visitedForCircularCheck),
            false,
          );

          // START: Add newlines around inlined content
          if (result.root.nodes.length > 0) {
            result.root.nodes.forEach((inlinedNodeOriginal, index) => {
              const clonedNode = inlinedNodeOriginal.clone();

              // Ensure the first node of the inlined block starts with a newline
              if (index === 0) {
                let currentBefore = clonedNode.raws.before || "";
                if (!currentBefore.startsWith("\n\n")) {
                  currentBefore = "\n\n" + currentBefore;
                }
                clonedNode.raws.before = currentBefore;
              }

              // Ensure the last node of the inlined block ends with a newline
              if (index === result.root.nodes.length - 1) {
                let currentAfter = clonedNode.raws.after || "";
                if (!currentAfter.endsWith("\n\n")) {
                  currentAfter = currentAfter + "\n\n";
                }
                clonedNode.raws.after = currentAfter;
              }
              newNodes.push(clonedNode);
            });
          }
          // END: Add newlines around inlined content

          result.collectedSassUseParams.forEach((param) =>
            localCollectedSassUseParams.add(param),
          );
          result.successfullyInlinedPaths.forEach((p) =>
            localSuccessfullyInlinedPaths.add(p),
          );
        } catch (error) {
          console.error(
            `Error reading/processing @use ${resolvedPath} from ${absoluteCurrentFilePath}: ${error.message}`,
          );
          newNodes.push(node.clone());
        }
      } else {
        console.warn(
          `Could not resolve @use path: "${modulePath}" in ${absoluteCurrentFilePath}`,
        );
        newNodes.push(node.clone());
      }
    } else {
      newNodes.push(node.clone());
    }
  }

  const resultRoot = postcss.root();
  resultRoot.nodes = newNodes;
  visitedForCircularCheck.delete(absoluteCurrentFilePath);

  return {
    root: resultRoot,
    collectedSassUseParams: localCollectedSassUseParams,
    successfullyInlinedPaths: localSuccessfullyInlinedPaths,
  };
}

/**
 * Main function to inline SCSS @use rules, handle "sass:" modules, and delete inlined files.
 *
 * @param {string} mainScssString - The content of the main SCSS file.
 * @param {string} mainFilePath - The absolute path to the main SCSS file.
 * @returns {string} The SCSS string with @use rules inlined.
 */
export function inlineScssUseRulesAndClean(mainScssString, mainFilePath) {
  const absoluteMainFilePath = path.resolve(mainFilePath);

  const {
    root: processedMainRoot,
    collectedSassUseParams: sassParamsFromInlined,
    successfullyInlinedPaths,
  } = processAndInline(
    mainScssString,
    absoluteMainFilePath,
    new Set(), // Initial visited set for circular checks
    true, // This is the main file
  );

  // Consolidate all "sass:" uses at the top and deduplicate
  const finalSassUseParams = new Set(sassParamsFromInlined);
  const finalNodes = [];

  // Extract existing "sass:" uses from the main processed root and collect other nodes
  processedMainRoot.each((node) => {
    if (
      node.type === "atrule" &&
      node.name === "use" &&
      node.params.trim().match(/^(['"])sass:.+?\1/)
    ) {
      finalSassUseParams.add(node.params.trim());
    } else {
      finalNodes.push(node); // Keep non-sass @use or other nodes
    }
  });

  // Prepend all unique "sass:" uses
  Array.from(finalSassUseParams)
    .sort() // Optional: sort them for consistent output
    .reverse() // Prepend adds to the beginning, so reverse to maintain sorted order at top
    .forEach((param) => {
      finalNodes.unshift(postcss.atRule({ name: "use", params: param }));
    });

  const finalRoot = postcss.root();
  finalRoot.nodes = finalNodes;
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
    }
  });

  const combineOutputScss = combineIdenticalSelectors(outputScss);

  return combineOutputScss;
}
