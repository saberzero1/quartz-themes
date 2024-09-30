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

#### Setting themes

Copy `dark.scss` and `light.scss` from the `quartz-themes` root folder to `quartz/styles`.

The resulting structure should look something like this:

```
quartz/
  styles/
    quartz-themes/
    custom.scss
    dark.scss
    light.scss
```

To set the desired theme, [see below](#usage).

### Updating

Pull the submodule from upstream by running the following from the `quartz-themes` folder.

```sh
git submodule update --remote
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

You can set a separate theme for light mode and dark mode.

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
