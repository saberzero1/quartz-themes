# Quartz Themes

A collection of [Obsidian](https://obsidian.md/) themes adapted for [Quartz](https://github.com/jackyzha0/quartz).

<p align="center" width="100%">
  <img src="media/quartz-themes-800-wide-rounded-text.png" alt="Quartz Themes logo"/>
</p>
<!--
_<sub>left to right: `vauxhaul`, `tokyo-night`, `its-theme`, `absolutegruv`, `sandstorm`, `obsidian-nord`</sub>_
-->

![Last updated: 2026-07-25](<https://img.shields.io/date/1784971444?style=for-the-badge&label=Last Obsidian themes list fetch&labelColor=hsl(258%2C%2088%25%2C%2066%25)&color=444>)
![Supported Quartz version v5.0.0](<https://img.shields.io/badge/v5.0.0-Quartz?style=for-the-badge&label=Quartz%20version&labelColor=hsl(204%2C%2022%25%2C%2057%25)&color=444>)

<!--
Add goals:
 - Support all Obsidian themes in Quartz
 - Ease of use (auto-update, low maintenance)
 - Match styling as closely as possible (within reason)
-->

## Table of Contents

- [Quartz Themes](#quartz-themes)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [npm package (Recommended)](#npm-package-recommended)
    - [GitHub Actions (Legacy)](#github-actions-legacy)
    - [Manual install (Legacy)](#manual-install-legacy)
  - [Supported Themes](#supported-themes)
  - [Licenses](#licenses)

## Installation

### npm package (Recommended)

Install the core plugin and your chosen theme:

```bash
npm install @quartz-themes/core @quartz-themes/<THEME-NAME>
```

Then add the plugin to your `quartz.config.yaml`:

```yaml
plugins:
  - source: "@quartz-themes/core"
    options:
      theme: "<THEME-NAME>"
      mode: "both"
```

> [!TIP]
> Example for Tokyo Night:
>
> ```bash
> npm install @quartz-themes/core @quartz-themes/tokyo-night
> ```
>
> ```yaml
> plugins:
>   - source: "@quartz-themes/core"
>     options:
>       theme: "tokyo-night"
>       mode: "both"
> ```

> [!TIP]
> For themes with variants (e.g. Catppuccin), specify the variation:
>
> ```bash
> npm install @quartz-themes/core @quartz-themes/catppuccin
> ```
>
> ```yaml
> plugins:
>   - source: "@quartz-themes/core"
>     options:
>       theme: "catppuccin"
>       variation: "frappe"
>       mode: "both"
> ```

> [!IMPORTANT]
> For dark-only or light-only themes, set `mode` to `"dark"` or `"light"` instead of `"both"`.

### GitHub Actions (Legacy)

> [!NOTE]
> This method is for Quartz v4 or users who prefer not to use npm packages.

Add the following lines to your `deploy.yml` before the `permissions` section:

```yaml
env:
  THEME_NAME: <THEME-NAME>
```

And add the following lines to your `deploy.yml` before the `build` step:

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

> [!IMPORTANT]
> Replace `<THEME-NAME>` with your desired theme name. See [Compatibility List](#supported-themes)

### Manual install (Legacy)

> [!NOTE]
> This method is for Quartz v4 or users who prefer not to use npm packages.

Manually download the `_index.scss` file from the [themes directory of your choice](./themes/) in this repository, and place it in your Quartz repository's at `quartz/styles/themes/_index.scss`. (Create the `themes` directory if it doesn't exist.)

Then, add the following line to your `src/styles/custom.scss` file **after** the `@use "base";` line:

```scss
@use "themes";
```

> [!IMPORTANT]
> For dark-only or light-only themes, remember to remove `Component.Darkmode()` from your `quartz.config.ts` file.

## Supported Themes

<details>
  <summary>
    Glossary
  </summary>

| Status                                               | Description                                                                                                                                                        |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img src="media/full.svg" alt="FULL"/>               | Fully supported                                                                                                                                                    |
| <img src="media/partial.svg" alt="PARTIAL"/>         | Partially supported (see theme page for details)                                                                                                                   |
| <img src="media/collection.svg" alt="COLLECTION"/>   | This theme contains information for the [Style Settings plugin](https://github.com/mgmeyers/obsidian-style-settings). See the table for the configured sub-themes. |
| <img src="media/checking.svg" alt="CHECKING"/>       | Testing compatibility                                                                                                                                              |
| <img src="media/blocked.svg" alt="BLOCKED"/>         | Waiting for upstream fixes                                                                                                                                         |
| <img src="media/todo.svg" alt="TODO"/>               | Not started                                                                                                                                                        |
| <img src="media/unsupported.svg" alt="UNSUPPORTED"/> | Won't support                                                                                                                                                      |
| <img src="media/removed.svg" alt="BROKEN"/>          | Broken or removed from Obsidian                                                                                                                                    |

| Theme Modes                              | Description               |
| ---------------------------------------- | ------------------------- |
| <img src="media/both.svg" alt="BOTH"/>   | Both dark and light theme |
| <img src="media/light.svg" alt="LIGHT"/> | Light theme only          |
| <img src="media/dark.svg" alt="DARK"/>   | Dark theme only           |

</details>
<!--
Compatibility table is built from the settings in `themes.json`
-->
//COMPATIBILITY_TABLE

## Licenses

Quartz Themes is licensed under the [MIT License](LICENSE).

The themes themselves are licensed under the same license as the respective Obsidian theme, which can be found in the individual theme directories. This is to ensure that the themes remain compatible with their original licenses and to respect the work of the original theme authors, while allowing users to use them in their Quartz repositories.

An overview of the licenses per theme can be found in the [compatibility table above](#supported-themes). Please refer to the original theme repositories for more extensive information on their licenses.
