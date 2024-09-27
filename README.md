# Quartz Themes

A collection of Obsidian.md themes adapted for [Quartz](https://github.com/jackyzha0/quartz).

## Installation

From your [Quartz](https://github.com/jackyzha0/quartz) root folder, clone as submodule into the styles folder:

```sh
git submodule add https://github.com/saberzero1/quartz-themes.git quartz/styles/quartz-themes
```

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
// Use Catppuccin Latte for dark mode
@import "themes/catppuccin/latte";
```

### Dark Mode

Add your desired dark theme to `dark.scss`.

```scss
// dark.scss
// Use Catppuccin Frappe for dark mode
@import "themes/catppuccin/frappe";
```

## Supported Themes

This list is ever expanding.

| Theme                                     | Flavors                                                                                                                                                                                  | Original Obsidian Theme                                       |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [Catppuccin](themes/catppuccin/README.md) | [Frappe](themes/catppuccin/frappe/README.md), [Latte](themes/catppuccin/latte/README.md), [Macchiato](themes/catppuccin/macchiato/README.md), [Mocha](themes/catppuccin/mocha/README.md) | [Obsidian Catppuccin](https://github.com/catppuccin/obsidian) |
| [Quartz](themes/quartz/README.md)         | [Dark](themes/quartz/README.md#dark-1), [Light](themes/quartz/README.md#light-1)                                                                                                         | [Quartz](https://github.com/jackyzha0/quartz)                 |

## Specification

WIP
