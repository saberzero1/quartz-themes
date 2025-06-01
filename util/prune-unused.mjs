import * as minimatch from "minimatch";
import * as path from "path";

/**
 * @typedef {object} UseRecord
 * @property {number} uses
 * @property {Set<any>} declarations
 * @property {Set<string>} dependencies
 */

module.exports = (options = {}) => {
	return {
		postcssPlugin: 'postcss-prune-unused',
		Once(root) {
			const {skip = []} = options;
			if (skip.some((s) => minimatch(path.relative(path.join(process.cwd(), "themes"), root.source.input.from), s, {dot: true}))) {
				return;
			}
			/** @type Map<string, UseRecord> */
			const records = new Map();
			/** @type Set<string> */
			const usedVars = new Set();

			/** @type {(variable: string) => UseRecord} */
			const getRecord = (variable) => {
				let record = records.get(variable);
				if (!record) {
					record = {uses: 0, dependencies: new Set(), declarations: new Set()};
					records.set(variable, record);
				}
				return record;
			};

			/** @type {(variable: string, ignoreList?: Set<any>) => void} */
			const registerUse = (variable, ignoreList = new Set()) => {
				const record = getRecord(variable);
				record.uses++;
				ignoreList.add(variable);
				for (const dependency of record.dependencies) {
					if (!ignoreList.has(dependency)) registerUse(dependency, ignoreList);
				}
			};

			/** @type {(variable: string, dependency: string) => void} */
			const registerDependency = (variable, dependency) => {
				const record = getRecord(variable);
				record.dependencies.add(dependency);
			};

			// Detect variable uses
			root.walkDecls((decl) => {
				const isVar = decl.prop.startsWith('--');

				// Initiate record
				if (isVar) getRecord(decl.prop).declarations.add(decl);

				if (!decl.value.includes('var(')) return;

				for (const match of decl.value.matchAll(/var\(\s*(?<name>--[^ ,\);]+)/g)) {
					const variable = match.groups.name.trim();
					if (isVar) {
						registerDependency(decl.prop, variable);
					} else {
						usedVars.add(variable);
					}
				}
			});

			// We register variable uses only after all variables have been entered into the graph,
			// otherwise we remove variables that were defined in CSS file after some property used them.
			for (const variable of usedVars) {
				registerUse(variable);
			}

			// Remove unused variables
			for (const {uses, declarations} of records.values()) {
				if (uses === 0) {
					for (let decl of declarations) decl.remove();
				}
			}
		},
	};
};

module.exports.postcss = true
