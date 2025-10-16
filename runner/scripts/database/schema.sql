CREATE TABLE IF NOT EXISTS themes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS option_sets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    theme_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    FOREIGN KEY (theme_id) REFERENCES themes(id) ON DELETE CASCADE, -- If a theme is deleted, delete its option sets
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
    FOREIGN KEY (selector_id) REFERENCES selectors(id) ON DELETE CASCADE, -- If a selector is removed, remove its style values
    FOREIGN KEY (property_id) REFERENCES properties(id) ON DELETE CASCADE, -- If a property is removed, remove its style values

    PRIMARY KEY (theme_id, option_set_id, is_dark_mode, selector_id, property_id)
);
