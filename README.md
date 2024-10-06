# Quartz Themes

[PLEASE USE THE PINNED DISCUSSION FOR THEME REQUESTS](https://github.com/saberzero1/quartz-themes/discussions/6)

A collection of Obsidian.md themes adapted for [Quartz](https://github.com/jackyzha0/quartz).

> ![Quartz using Catppuccin Frappe](preview-catppuccin-frappe.png)
>
> Quartz using Catppuccin Frappe theme

## Installation

### First install

#### Setup submodule

From your [Quartz](https://github.com/jackyzha0/quartz) root folder, clone as submodule into the styles folder:

```sh
git submodule add https://github.com/saberzero1/quartz-themes.git quartz/styles/quartz-themes
```

If you've already added the submodule before, you can restore it with:

```sh
git submodule update --init --recursive --remote
```

#### Link submodule

Add the following line to your `custom.scss` file:

```scss
@use "quartz-themes";
```

Your `custom.scss` should look something like this:

```scss
@use "./base.scss";
@use "quartz-themes";

// put your custom CSS here!
```

#### Setting themes and layout

Copy `layout.scss`, `dark.scss` and `light.scss` from the `quartz-themes` root folder to `quartz/styles`.

The resulting structure should look something like this:

```
quartz/
  styles/
    quartz-themes/
    custom.scss
    dark.scss
    layout.scss
    light.scss
```

To set the desired layout and theme, [see below](#usage).

### Updating

Pull the submodule from upstream by running the following from your Quartz repository:

```sh
git submodule update --init --recursive --remote
```

### Developing

To develop, clone a copy of Quartz and clone into `quartz-themes` folder instead of as submodule.

```sh
git clone https://github.com/saberzero1/quartz-themes.git quartz/styles/quartz-themes
```

```sh
git pull
```

## Usage

You need to set a layout. You can set a separate theme for light mode and dark mode.

### Layout

#### Default Layout

<details>
<summary>⬛ Default Dark Preview</summary>
<img src="layouts/default/preview-dark.png" alt="Preview of Default Dark layout"/>
</details>

<details>
<summary>⬜ Default Light Preview</summary>
<img src="layouts/default/preview-light.png" alt="Preview of Default Light layout"/>
</details>

To use the default Quartz layout, set the following in `layout.scss`:

```scss
// Copy this file into the quartz/styles
// You can change the path of the import to point to the desired layout.
@import "quartz-themes/layouts/default";
```

#### Minimal Layout

<details>
<summary>⬛ Minimal Dark Preview</summary>
<img src="layouts/minimal/preview-dark.png" alt="Preview of Minimal Dark layout"/>
</details>

<details>
<summary>⬜ Minimal Light Preview</summary>
<img src="layouts/minimal/preview-light.png" alt="Preview of Minimal Light layout"/>
</details>

If you want something closer to Obsidian Publish's layout, set the following in `layout.scss`:

```scss
// Copy this file into the quartz/styles
// You can change the path of the import to point to the desired layout.
@import "quartz-themes/layouts/minimal";
```

### Light Mode

Add your desired dark theme to `light.scss`.

```scss
// light.scss
// Use Catppuccin Latte for light mode
@import "quartz-themes/themes/catppuccin/latte";
```

### Dark Mode

Add your desired dark theme to `dark.scss`.

```scss
// dark.scss
// Use Catppuccin Frappe for dark mode
@import "quartz-themes/themes/catppuccin/frappe";
```

## FAQ

### GitHub Pages throws error during deploy

```
Error: R] Can't find stylesheet to import.
  ╷
2 │ @use "quartz-themes";
  │ ^^^^^^^^^^^^^^^^^^^^
  ╵
```

To solve, add `submodule:recursive` to your `deploy.yml` like below:

```yml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0 # Fetch all history for git info
          submodules: recursive # <<<<<< ADD THIS LINE
      - uses: actions/setup-node@v4
      - name: Install Dependencies
        run: npm ci
      - name: Build Quartz
        run: npx quartz build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: public
```

## Supported Themes

This list is ever expanding.

| Theme                                       | Flavors                                                                                                                                                                                  | Original Obsidian Theme                                                          |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [Catppuccin](themes/catppuccin/README.md)   | [Frappe](themes/catppuccin/frappe/README.md), [Latte](themes/catppuccin/latte/README.md), [Macchiato](themes/catppuccin/macchiato/README.md), [Mocha](themes/catppuccin/mocha/README.md) | [Obsidian Catppuccin](https://github.com/catppuccin/obsidian)                    |
| [Obsidian](themes/obsidian/README.md)       | [Dark](themes/obsidian/README.md#dark-1), [Light](themes/obsidian/README.md#light-1)                                                                                                     | [Obsidian.md](https://obsidian.md/)                                              |
| [Quartz](themes/quartz/README.md)           | [Dark](themes/quartz/README.md#dark-1), [Light](themes/quartz/README.md#light-1)                                                                                                         | [Quartz](https://github.com/jackyzha0/quartz)                                    |
| [Tokyo Night](themes/tokyo-night/README.md) | [Day](themes/tokyo-night/day/README.md), [Moon](themes/tokyo-night/moon/README.md), [Night](themes/tokyo-night/moon/README.md), [Storm](themes/tokyo-night/storm/README.md)              | [Obsidian and Tokyonight](https://github.com/tcmmichaelb139/obsidian-tokyonight) |

<!--
## Specification

WIP
-->
