# Quartz Themes

Collection of Obsidian.md themes adapted for [Quartz](https://github.com/jackyzha0/quartz).

## Installation

From your [Quartz](https://github.com/jackyzha0/quartz) root folder, clone into the styles folder:

```sh
git submodule add https://github.com/saberzero1/quartz-themes.git
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

## Specification
