import Database from "better-sqlite3";

let db = null;

let debug = false;

const preparedStatements = {};

const idCache = {
  themes: new Map(),
  optionSets: new Map(),
  selectors: new Map(),
  properties: new Map(),
};

const schema = `
CREATE TABLE IF NOT EXISTS themes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS option_sets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    theme_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    FOREIGN KEY (theme_id) REFERENCES themes(id) ON DELETE CASCADE,
    UNIQUE (theme_id, name)
);

CREATE TABLE IF NOT EXISTS selectors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    selector_text TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS properties (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    property_name TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS style_values (
    theme_id INTEGER NOT NULL,
    option_set_id INTEGER NOT NULL,
    is_dark_mode BOOLEAN NOT NULL,
    selector_id INTEGER NOT NULL,
    property_id INTEGER NOT NULL,
    value TEXT NOT NULL,

    FOREIGN KEY (theme_id) REFERENCES themes(id) ON DELETE CASCADE,
    FOREIGN KEY (option_set_id) REFERENCES option_sets(id) ON DELETE CASCADE,
    FOREIGN KEY (selector_id) REFERENCES selectors(id) ON DELETE CASCADE,
    FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE,

    PRIMARY KEY (theme_id, option_set_id, is_dark_mode, selector_id, property_id)
);
`;

const initializeDb = (dbPath = "styles.db") => {
  if (db) {
    console.warn("Database already initialized. Reusing existing connection.");
    return;
  }
  db = new Database(dbPath, {
    /* verbose: console.log */
  });
  db.pragma("foreign_keys = ON;");
  db.pragma("journal_mode = WAL;"); // Better concurrency
  db.exec(schema);

  // Prepare all statements once
  preparedStatements.insertTheme = db.prepare(
    "INSERT INTO themes (name) VALUES (?)",
  );
  preparedStatements.getThemeId = db.prepare(
    "SELECT id FROM themes WHERE name = ?",
  );

  preparedStatements.insertOptionSet = db.prepare(
    "INSERT INTO option_sets (theme_id, name) VALUES (?, ?)",
  );
  preparedStatements.getOptionSetId = db.prepare(
    "SELECT id FROM option_sets WHERE theme_id = ? AND name = ?",
  );

  preparedStatements.insertSelector = db.prepare(
    "INSERT INTO selectors (selector_text) VALUES (?)",
  );
  preparedStatements.getSelectorId = db.prepare(
    "SELECT id FROM selectors WHERE selector_text = ?",
  );

  preparedStatements.insertProperty = db.prepare(
    "INSERT INTO properties (property_name) VALUES (?)",
  );
  preparedStatements.getPropertyId = db.prepare(
    "SELECT id FROM properties WHERE property_name = ?",
  );

  preparedStatements.insertStyleValue = db.prepare(
    "INSERT OR REPLACE INTO style_values " +
      "(theme_id, option_set_id, is_dark_mode, selector_id, property_id, value) " +
      "VALUES (?, ?, ?, ?, ?, ?)",
  );

  // Also prepare the transaction wrapper
  preparedStatements.insertBulkStylesTransaction = db.transaction((styles) => {
    for (const styleEntry of styles) {
      const themeId = getOrCreateThemeId(styleEntry.theme);
      const optionSetId = getOrCreateOptionSetId(themeId, styleEntry.optionSet);
      const selectorId = getOrCreateSelectorId(styleEntry.selector);
      const propertyId = getOrCreatePropertyId(styleEntry.property);

      preparedStatements.insertStyleValue.run(
        themeId,
        optionSetId,
        styleEntry.isDarkMode ? 1 : 0,
        selectorId,
        propertyId,
        styleEntry.value,
      );
    }
  });

  preparedStatements.getSpecificStyleValue = db.prepare(
    "SELECT value FROM style_values WHERE theme_id = ? AND option_set_id = ? AND is_dark_mode = ? AND selector_id = ? AND property_id = ?",
  );

  console.log("Database initialized and statements prepared.");
};

const closeDb = () => {
  if (db) {
    db.close();
    db = null; // Clear the reference
    console.log("Database connection closed.");
  }
};

/**
 * Gets the ID for a theme by name, inserting it if it doesn't exist.
 * @param {string} themeName
 * @returns {number} The ID of the theme.
 */
function getOrCreateThemeId(themeName) {
  let row = preparedStatements.getThemeId.get(themeName);
  if (row) {
    return row.id;
  }
  return preparedStatements.insertTheme.run(themeName).lastInsertRowid;
}

/**
 * Gets the ID for an option set, inserting it if it doesn't exist.
 * @param {number} themeId
 * @param {string} optionSetName
 * @returns {number} The ID of the option set.
 */
function getOrCreateOptionSetId(themeId, optionSetName) {
  let row = preparedStatements.getOptionSetId.get(themeId, optionSetName);
  if (row) {
    return row.id;
  }
  return preparedStatements.insertOptionSet.run(themeId, optionSetName)
    .lastInsertRowid;
}

/**
 * Gets the ID for a selector, inserting it if it doesn't exist.
 * @param {string} selectorText
 * @returns {number} The ID of the selector.
 */
function getOrCreateSelectorId(selectorText) {
  let row = preparedStatements.getSelectorId.get(selectorText);
  if (row) {
    return row.id;
  }
  return preparedStatements.insertSelector.run(selectorText).lastInsertRowid;
}

/**
 * Gets the ID for a property, inserting it if it doesn't exist.
 * @param {string} propertyName
 * @returns {number} The ID of the property.
 */
function getOrCreatePropertyId(propertyName) {
  let row = preparedStatements.getPropertyId.get(propertyName);
  if (row) {
    return row.id;
  }
  return preparedStatements.insertProperty.run(propertyName).lastInsertRowid;
}

/**
 * Gets the style value for a specific combination of parameters, inserting if it doesn't exist.
 * @param {string} themeName
 * @param {string} optionSetName
 * @param {boolean} isDarkMode
 * @param {string} selector
 * @param {string} property
 * @returns {string|null} The style value or null if not found.
 */
function getOrCreateStyle(
  themeName,
  optionSetName,
  isDarkMode,
  selector,
  property,
) {
  const themeId = getOrCreateThemeId(themeName);
  const optionSetId = getOrCreateOptionSetId(themeId, optionSetName);
  const selectorId = getOrCreateSelectorId(selector);
  const propertyId = getOrCreatePropertyId(property);

  const result = preparedStatements.getSpecificStyleValue.get(
    themeId,
    optionSetId,
    isDarkMode ? 1 : 0,
    selectorId,
    propertyId,
  );
  return result ? result.value : null;
}

function getThemeId(themeName) {
  if (idCache.themes.has(themeName)) {
    return idCache.themes.get(themeName);
  }
  const row = preparedStatements.getThemeId.get(themeName);
  const id = row ? row.id : null;
  idCache.themes.set(themeName, id);
  return id;
}

function getOptionSetId(themeId, optionSetName) {
  const key = `${themeId}::${optionSetName}`;
  if (idCache.optionSets.has(key)) {
    return idCache.optionSets.get(key);
  }
  const row = preparedStatements.getOptionSetId.get(themeId, optionSetName);
  const id = row ? row.id : null;
  idCache.optionSets.set(key, id);
  return id;
}

function getSelectorId(selectorText) {
  if (idCache.selectors.has(selectorText)) {
    return idCache.selectors.get(selectorText);
  }
  const row = preparedStatements.getSelectorId.get(selectorText);
  const id = row ? row.id : null;
  idCache.selectors.set(selectorText, id);
  return id;
}

function getPropertyId(propertyName) {
  if (idCache.properties.has(propertyName)) {
    return idCache.properties.get(propertyName);
  }
  const row = preparedStatements.getPropertyId.get(propertyName);
  const id = row ? row.id : null;
  idCache.properties.set(propertyName, id);
  return id;
}

/**
 * Gets the style value for a specific combination of parameters.
 * @param {string} themeName
 * @param {string} optionSetName
 * @param {boolean} isDarkMode
 * @param {string} selector
 * @param {string} property
 * @returns {string|null} The style value or null if not found.
 */
function getStyle(themeName, optionSetName, isDarkMode, selector, property) {
  const themeId = getThemeId(themeName);
  const optionSetId = getOptionSetId(themeId, optionSetName);
  const selectorId = getSelectorId(selector);
  const propertyId = getPropertyId(property);

  if (
    themeId === null ||
    optionSetId === null ||
    selectorId === null ||
    propertyId === null
  ) {
    return null;
  }

  const result = preparedStatements.getSpecificStyleValue.get(
    themeId,
    optionSetId,
    isDarkMode ? 1 : 0,
    selectorId,
    propertyId,
  );

  if (debug) {
    if (!result) {
      console.log(
        `getStyle failed for themeName: ${themeName}, optionSetName: ${optionSetName}, isDarkMode: ${isDarkMode}, selector: ${selector}, property: ${property}`,
      );
    }
  }

  return result ? result.value : null;
}

/**
 * Gets all CSS variables (properties starting with --) for a specific selector
 * @param {string} themeName
 * @param {string} optionSetName
 * @param {boolean} isDarkMode
 * @param {string} selector
 * @returns {Object} Object with variable names as keys and values
 */
function getAllVariables(themeName, optionSetName, isDarkMode, selector) {
  const themeId = getThemeId(themeName);
  const optionSetId = getOptionSetId(themeId, optionSetName);
  const selectorId = getSelectorId(selector);

  if (themeId === null || optionSetId === null || selectorId === null) {
    return {};
  }

  const query = `
    SELECT p.property_name, sv.value
    FROM style_values sv
    JOIN properties p ON sv.property_id = p.id
    WHERE sv.theme_id = ? 
      AND sv.option_set_id = ? 
      AND sv.is_dark_mode = ?
      AND sv.selector_id = ?
      AND p.property_name LIKE '--%'
  `;

  const stmt = db.prepare(query);
  const results = stmt.all(
    themeId,
    optionSetId,
    isDarkMode ? 1 : 0,
    selectorId,
  );

  const variables = {};
  for (const row of results) {
    if (typeof row.value === "string" && row.value.trim() === "") continue;
    variables[row.property_name] =
      typeof row.value === "string"
        ? row.value
            .trim()
            .replace(/"\?\?", ?/g, "")
            .replace(/^\s*,/g, "")
            .trim()
        : row.value;
  }

  return variables;
}

/**
 * Gets styles for specific selectors in a theme/mode combination.
 * Returns a Map keyed by "selector::property" for O(1) lookups.
 * @param {string} themeName
 * @param {string} optionSetName
 * @param {boolean} isDarkMode
 * @param {Set<string>} selectors - Set of selector strings to fetch
 * @returns {Map<string, string>} Map of "selector::property" -> value
 */
function getAllStylesForThemeMode(
  themeName,
  optionSetName,
  isDarkMode,
  selectors,
) {
  const themeId = getThemeId(themeName);
  const optionSetId = getOptionSetId(themeId, optionSetName);

  if (themeId === null || optionSetId === null) {
    return new Map();
  }

  const selectorIds = [];
  for (const sel of selectors) {
    const id = getSelectorId(sel);
    if (id !== null) selectorIds.push(id);
  }

  if (selectorIds.length === 0) {
    return new Map();
  }

  const placeholders = selectorIds.map(() => "?").join(",");
  const query = `
    SELECT s.selector_text, p.property_name, sv.value
    FROM style_values sv
    JOIN selectors s ON sv.selector_id = s.id
    JOIN properties p ON sv.property_id = p.id
    WHERE sv.theme_id = ? 
      AND sv.option_set_id = ? 
      AND sv.is_dark_mode = ?
      AND sv.selector_id IN (${placeholders})
  `;

  const stmt = db.prepare(query);
  const results = stmt.all(
    themeId,
    optionSetId,
    isDarkMode ? 1 : 0,
    ...selectorIds,
  );

  const styleMap = new Map();
  for (const row of results) {
    const key = `${row.selector_text}::${row.property_name}`;
    styleMap.set(key, row.value);
  }

  return styleMap;
}

/**
 * Preloads all selector and property IDs into memory for fast lookups.
 * Call once at startup to avoid repeated DB queries.
 * @returns {{ selectorIds: Map<string, number>, propertyIds: Map<string, number> }}
 */
function preloadLookupTables() {
  const selectorIds = new Map();
  const propertyIds = new Map();

  const selectors = db.prepare("SELECT id, selector_text FROM selectors").all();
  for (const row of selectors) {
    selectorIds.set(row.selector_text, row.id);
  }

  const properties = db
    .prepare("SELECT id, property_name FROM properties")
    .all();
  for (const row of properties) {
    propertyIds.set(row.property_name, row.id);
  }

  return { selectorIds, propertyIds };
}

export {
  closeDb,
  getAllStylesForThemeMode,
  getAllVariables,
  getStyle,
  initializeDb,
  preloadLookupTables,
  preparedStatements,
};
