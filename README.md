# Quartz Themes

A collection of [Obsidian](https://obsidian.md/) themes adapted for [Quartz](https://github.com/jackyzha0/quartz).

<p align="center" width="100%">
  <img src="media/quartz-themes-800-wide-rounded-text.png" alt="Quartz Themes logo"/>
</p>

![Last updated: 2025-17-01](<https://img.shields.io/date/1750159800?style=for-the-badge&label=Last Obsidian themes list fetch&labelColor=hsl(258%2C%2088%25%2C%2066%25)&color=444>)
![Supported Quartz version v4.5.1](<https://img.shields.io/badge/v4.5.1-Quartz?style=for-the-badge&label=Quartz%20version&labelColor=hsl(204%2C%2022%25%2C%2057%25)&color=444>)

## Installation

### GitHub Actions (Recommended)

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

> [!TIP]
> Example for Tokyo Night:
>
> ```yaml
> env:
>   THEME_NAME: tokyo-night
> ```

The full script would look like this:

```yaml
name: Deploy Quartz site to GitHub Pages

on:
  push:
    branches:
      - v4

env:
  THEME_NAME: <THEME-NAME>

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-22.04
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0 # Fetch all history for git info
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - name: Install Dependencies
        run: npm ci
      - name: Fetch Quartz Theme
        run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
      - name: Build Quartz
        run: npx quartz build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: public

  deploy:
    needs: build
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Automatic install into Quartz repository

> [!TIP]
> This installation method is recommended for users who want to install themes into their Quartz repository directly. This method is also recommended for user who cannot fetch dependencies during compilation.

Download the latest version of the [action.sh](https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh) script or run the following to download it:

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh
```

> [!NOTE]
> Windows users should use `action.bat` instead, unless they also access to the bash shell (git-bash, etc.) or WSL.
>
> ```bash
> curl -s -S -o action.bat https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.bat
>
> action.bat tokyo-night
> ```

Then run the `action.sh` script with the desired theme to install it into your Quartz repository:

```bash
# Example: installing Tokyo Night...
./action.sh tokyo-night

# ...should output:
# Quartz root succesfully detected...
# Input theme: tokyo-night
# Parsing input theme...
# Theme tokyo-night parsed to tokyo-night
# Validating theme...
# Cleaning theme directory...
# Creating theme directory...
# Fetching theme files...
# Installing theme files...
# Applying patches...
# Verifying setup...
# Added import line to custom.scss...
# Finished fetching and applying theme 'tokyo-night'.
```

### Manual install

Manually download the `_index.scss` file from the [themes directory of your choice](./themes/) in this repository, and place it in your Quartz repository's at `quartz/styles/themes/_index.scss`. (Create the `themes` directory if it doesn't exist.)

Then, add the following line to your `src/styles/custom.scss` file **after** the `@use "base";` line:

```scss
@use "themes";
```

> [!IMPORTANT]
> For dark-only or light-only themes, remember to remove `Component.Darkmode()` from your `quartz.config.ts` file.

### Quartz Syncer

> [!IMPORTANT]
> This setup method is not yet available. It is currently being tested and will be released in the future.

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

| Supported Modes                          | Obsidian Theme Name              | Theme Compatibility Status                                                                        | Live Preview                                                                          |
| ---------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| <img src="media/dark.svg" alt="DARK"/>   | `80s-neon`                       | <img src="media/full.svg" alt="FULL"/>                                                            | [live preview](https://quartz-themes.github.io/80s-neon/syntax)                       |
| <img src="media/light.svg" alt="LIGHT"/> | `abate`                          | <img src="media/partial.svg" alt="PARTIAL"/>                                                      | [live preview](https://quartz-themes.github.io/abate/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `abecedarium`                    | <img src="media/full.svg" alt="FULL"/>                                                            | [live preview](https://quartz-themes.github.io/abecedarium/syntax)                    |
| <img src="media/dark.svg" alt="DARK"/>   | `absolutegruv`                   | <img src="media/partial.svg" alt="PARTIAL"/> <img src="media/collection.svg" alt="COLLECTION"/>   | [live preview](https://quartz-themes.github.io/absolutegruv/syntax)                   |
| <img src="media/both.svg" alt="BOTH"/>   | `abyssal`                        | <img src="media/partial.svg" alt="PARTIAL"/> <img src="media/collection.svg" alt="COLLECTION"/>   | [live preview](https://quartz-themes.github.io/abyssal/syntax)                        |
| <img src="media/both.svg" alt="BOTH"/>   | `adrenaline`                     | <img src="media/full.svg" alt="FULL"/>                                                            | [live preview](https://quartz-themes.github.io/adrenaline/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `adwaita`                        | <img src="media/partial.svg" alt="PARTIAL"/> <img src="media/collection.svg" alt="COLLECTION"/>   | [live preview](https://quartz-themes.github.io/adwaita/syntax)                        |
| <img src="media/light.svg" alt="LIGHT"/> | `agate`                          | <img src="media/full.svg" alt="FULL"/>                                                            | [live preview](https://quartz-themes.github.io/agate/syntax)                          |
| <img src="media/dark.svg" alt="DARK"/>   | `aged-whisky`                    | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/aged-whisky/syntax)                    |
| <img src="media/light.svg" alt="LIGHT"/> | `al-dente`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/al-dente/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `allium`                         | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/allium/syntax)                         |
| <img src="media/dark.svg" alt="DARK"/>   | `amoled-serenity`                | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/amoled-serenity/syntax)                |
| <img src="media/both.svg" alt="BOTH"/>   | `anuppuccin`                     | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/anuppuccin/syntax)                     |
| <img src="media/dark.svg" alt="DARK"/>   | `apatheia`                       | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/apatheia/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `apex`                           | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/apex/syntax)                           |
| <img src="media/dark.svg" alt="DARK"/>   | `arcane`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/arcane/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `atom`                           | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/atom/syntax)                           |
| <img src="media/dark.svg" alt="DARK"/>   | `atomus`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/atomus/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `aura`                           | <img src="media/full.svg" alt="FULL"/> <img src="media/collection.svg" alt="COLLECTION"/>         | [live preview](https://quartz-themes.github.io/aura/syntax)                           |
| <img src="media/dark.svg" alt="DARK"/>   | `aura-dark`                      | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/aura-dark/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `aurora`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/aurora/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `aurora-twilight`                | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/aurora-twilight/syntax)                |
| <img src="media/both.svg" alt="BOTH"/>   | `autotape`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/autotape/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `ayu-light-mirage`               | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/ayu-light-mirage/syntax)               |
| <img src="media/dark.svg" alt="DARK"/>   | `ayu-mirage`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/ayu-mirage/syntax)                     |
| <img src="media/dark.svg" alt="DARK"/>   | `base2tone`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/base2tone/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `behave-dark`                    | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/behave-dark/syntax)                    |
| <img src="media/both.svg" alt="BOTH"/>   | `big-bold`                       | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/big-bold/syntax)                       |
| <img src="media/dark.svg" alt="DARK"/>   | `black`                          | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/black/syntax)                          |
| <img src="media/dark.svg" alt="DARK"/>   | `blackbird`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/blackbird/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `blossom`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/blossom/syntax)                        |
| <img src="media/both.svg" alt="BOTH"/>   | `blue-topaz`                     | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/blue-topaz/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `bolt`                           | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/bolt/syntax)                           |
| <img src="media/both.svg" alt="BOTH"/>   | `border`                         | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/border/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `borealis`                       | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/borealis/syntax)                       |
| <img src="media/dark.svg" alt="DARK"/>   | `bossidian`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/bossidian/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `brainhack`                      | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/brainhack/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `brutalism`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/brutalism/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `buena-vista`                    | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/buena-vista/syntax)                    |
| <img src="media/both.svg" alt="BOTH"/>   | `camena`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/camena/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `carbon`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/carbon/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `cardstock`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/cardstock/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `catppuccin`                     | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/catppuccin/syntax)                     |
| <img src="media/dark.svg" alt="DARK"/>   | `celestial-night`                | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/celestial-night/syntax)                |
| <img src="media/dark.svg" alt="DARK"/>   | `charcoal`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/charcoal/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `chiaroscuroflow`                | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/chiaroscuroflow/syntax)                |
| <img src="media/both.svg" alt="BOTH"/>   | `chime`                          | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/chime/syntax)                          |
| <img src="media/dark.svg" alt="DARK"/>   | `christmas`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/christmas/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `cobalt-peacock`                 | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/cobalt-peacock/syntax)                 |
| <img src="media/dark.svg" alt="DARK"/>   | `cocoa`                          | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/cocoa/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `colored-candy`                  | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/colored-candy/syntax)                  |
| <img src="media/light.svg" alt="LIGHT"/> | `comfort`                        | <img src="media/partial.svg" alt="PARTIAL"/> <img src="media/collection.svg" alt="COLLECTION"/>   | [live preview](https://quartz-themes.github.io/comfort/syntax)                        |
| <img src="media/dark.svg" alt="DARK"/>   | `comfort-color-dark`             | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/comfort-color-dark/syntax)             |
| <img src="media/dark.svg" alt="DARK"/>   | `comfort-dark`                   | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/comfort-dark/syntax)                   |
| <img src="media/dark.svg" alt="DARK"/>   | `comfort-smooth`                 | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/comfort-smooth/syntax)                 |
| <img src="media/both.svg" alt="BOTH"/>   | `composer`                       | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/composer/syntax)                       |
| <img src="media/dark.svg" alt="DARK"/>   | `consolas`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/consolas/syntax)                       |
| <img src="media/dark.svg" alt="DARK"/>   | `covert`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/covert/syntax)                         |
| <img src="media/dark.svg" alt="DARK"/>   | `creature`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/creature/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `creme-brulee`                   | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/creme-brulee/syntax)                   |
| <img src="media/both.svg" alt="BOTH"/>   | `cupertino`                      | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/cupertino/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `cyber-glow`                     | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/cyber-glow/syntax)                     |
| <img src="media/dark.svg" alt="DARK"/>   | `cybertron`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/cybertron/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `cybertron-shifted`              | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/cybertron-shifted/syntax)              |
| <img src="media/dark.svg" alt="DARK"/>   | `dark-castle`                    | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/dark-castle/syntax)                    |
| <img src="media/both.svg" alt="BOTH"/>   | `dark-clarity`                   | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/dark-clarity/syntax)                   |
| <img src="media/dark.svg" alt="DARK"/>   | `dark-graphite`                  | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/dark-graphite/syntax)                  |
| <img src="media/both.svg" alt="BOTH"/>   | `dark-graphite-pie`              | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/dark-graphite-pie/syntax)              |
| <img src="media/dark.svg" alt="DARK"/>   | `dark-moss`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/dark-moss/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `darkember`                      | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/darkember/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `darkyan`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/darkyan/syntax)                        |
| <img src="media/light.svg" alt="LIGHT"/> | `dashboard`                      | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/dashboard/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `dawn`                           | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/dawn/syntax)                           |
| <img src="media/light.svg" alt="LIGHT"/> | `dayspring`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/dayspring/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `deep-submerge`                  | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/deep-submerge/syntax)                  |
| <img src="media/dark.svg" alt="DARK"/>   | `deeper-work`                    | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/deeper-work/syntax)                    |
| <img src="media/both.svg" alt="BOTH"/>   | `default`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/default/syntax)                        |
| <img src="media/dark.svg" alt="DARK"/>   | `dekurai`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/dekurai/syntax)                        |
| <img src="media/dark.svg" alt="DARK"/>   | `discordian`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/discordian/syntax)                     |
| <img src="media/dark.svg" alt="DARK"/>   | `dracula-for-obsidian`           | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/dracula-for-obsidian/syntax)           |
| <img src="media/dark.svg" alt="DARK"/>   | `dracula-gemini`                 | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/dracula-gemini/syntax)                 |
| <img src="media/dark.svg" alt="DARK"/>   | `dracula-lyt`                    | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/dracula-lyt/syntax)                    |
| <img src="media/dark.svg" alt="DARK"/>   | `dracula-official`               | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/dracula-official/syntax)               |
| <img src="media/dark.svg" alt="DARK"/>   | `dracula-plus`                   | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/dracula-plus/syntax)                   |
| <img src="media/dark.svg" alt="DARK"/>   | `dracula-slim`                   | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/dracula-slim/syntax)                   |
| <img src="media/both.svg" alt="BOTH"/>   | `duality`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/duality/syntax)                        |
| <img src="media/both.svg" alt="BOTH"/>   | `dune`                           | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/dune/syntax)                           |
| <img src="media/both.svg" alt="BOTH"/>   | `dunite`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/dunite/syntax)                         |
| <img src="media/dark.svg" alt="DARK"/>   | `dust`                           | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/dust/syntax)                           |
| <img src="media/both.svg" alt="BOTH"/>   | `dynamic-color`                  | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/dynamic-color/syntax)                  |
| <img src="media/both.svg" alt="BOTH"/>   | `ebullientworks`                 | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/ebullientworks/syntax)                 |
| <img src="media/dark.svg" alt="DARK"/>   | `eldritch`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/eldritch/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `elegance`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/elegance/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `emerald-echo`                   | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/emerald-echo/syntax)                   |
| <img src="media/both.svg" alt="BOTH"/>   | `encore`                         | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/encore/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `enhanced-file-explorer-tree`    | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/enhanced-file-explorer-tree/syntax)    |
| <img src="media/both.svg" alt="BOTH"/>   | `ethereon`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/ethereon/syntax)                       |
| <img src="media/dark.svg" alt="DARK"/>   | `evangelion`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/evangelion/syntax)                     |
| <img src="media/dark.svg" alt="DARK"/>   | `everblush`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/everblush/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `everforest`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/everforest/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `everforest-enchanted`           | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/everforest-enchanted/syntax)           |
| <img src="media/dark.svg" alt="DARK"/>   | `evergreen-shadow`               | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/evergreen-shadow/syntax)               |
| <img src="media/dark.svg" alt="DARK"/>   | `evilred`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/evilred/syntax)                        |
| <img src="media/dark.svg" alt="DARK"/>   | `faded`                          | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/faded/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `fancy-a-story`                  | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/fancy-a-story/syntax)                  |
| <img src="media/both.svg" alt="BOTH"/>   | `fastppuccin`                    | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/fastppuccin/syntax)                    |
| <img src="media/both.svg" alt="BOTH"/>   | `feather`                        | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/feather/syntax)                        |
| <img src="media/dark.svg" alt="DARK"/>   | `firefly`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/firefly/syntax)                        |
| <img src="media/dark.svg" alt="DARK"/>   | `flexcyon`                       | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/flexcyon/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `flexoki`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/flexoki/syntax)                        |
| <img src="media/both.svg" alt="BOTH"/>   | `flexoki-warm`                   | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/flexoki-warm/syntax)                   |
| <img src="media/dark.svg" alt="DARK"/>   | `focus`                          | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/focus/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `frost`                          | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/frost/syntax)                          |
| <img src="media/light.svg" alt="LIGHT"/> | `fusion`                         | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/fusion/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `garden-gnome-adwaita-gtk`       | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/garden-gnome-adwaita-gtk/syntax)       |
| <img src="media/light.svg" alt="LIGHT"/> | `gdct`                           | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/gdct/syntax)                           |
| <img src="media/dark.svg" alt="DARK"/>   | `gdct-dark`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/gdct-dark/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `github-theme`                   | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/github-theme/syntax)                   |
| <img src="media/dark.svg" alt="DARK"/>   | `githubdhc`                      | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/githubdhc/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `gitsidian`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/gitsidian/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `glass-robo`                     | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/glass-robo/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `golden-topaz`                   | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/golden-topaz/syntax)                   |
| <img src="media/dark.svg" alt="DARK"/>   | `green-nightmare`                | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/green-nightmare/syntax)                |
| <img src="media/both.svg" alt="BOTH"/>   | `gummy-revived`                  | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/gummy-revived/syntax)                  |
| <img src="media/dark.svg" alt="DARK"/>   | `hackthebox`                     | <img src="media/full.svg" alt="FULL"/>                                                            | [live preview](https://quartz-themes.github.io/hackthebox/syntax)                     |
| <img src="media/dark.svg" alt="DARK"/>   | `halcyon`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/halcyon/syntax)                        |
| <img src="media/light.svg" alt="LIGHT"/> | `handwriting-kalam`              | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/handwriting-kalam/syntax)              |
| <img src="media/both.svg" alt="BOTH"/>   | `heboric`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/heboric/syntax)                        |
| <img src="media/dark.svg" alt="DARK"/>   | `hipstersmoothie`                | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/hipstersmoothie/syntax)                |
| <img src="media/dark.svg" alt="DARK"/>   | `hojicha`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/hojicha/syntax)                        |
| <img src="media/dark.svg" alt="DARK"/>   | `hulk`                           | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/hulk/syntax)                           |
| <img src="media/both.svg" alt="BOTH"/>   | `ia-writer`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/ia-writer/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `ib-writer`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/ib-writer/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `iceberg`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/iceberg/syntax)                        |
| <img src="media/both.svg" alt="BOTH"/>   | `improved-potato`                | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/improved-potato/syntax)                |
| <img src="media/light.svg" alt="LIGHT"/> | `ink`                            | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/ink/syntax)                            |
| <img src="media/dark.svg" alt="DARK"/>   | `ion`                            | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/ion/syntax)                            |
| <img src="media/both.svg" alt="BOTH"/>   | `its-theme`                      | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/its-theme/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `jotter`                         | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/jotter/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `kakano`                         | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/kakano/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `kanagawa`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/kanagawa/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `kanagawa-paper`                 | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/kanagawa-paper/syntax)                 |
| <img src="media/both.svg" alt="BOTH"/>   | `kiwi-mono`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/kiwi-mono/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `kurokula`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/kurokula/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `lagom`                          | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/lagom/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `latex`                          | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/latex/syntax)                          |
| <img src="media/light.svg" alt="LIGHT"/> | `lavender-mist`                  | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/lavender-mist/syntax)                  |
| <img src="media/dark.svg" alt="DARK"/>   | `lemons-theme`                   | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/lemons-theme/syntax)                   |
| <img src="media/both.svg" alt="BOTH"/>   | `lesswrong`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/lesswrong/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `light-bright`                   | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/light-bright/syntax)                   |
| <img src="media/both.svg" alt="BOTH"/>   | `listive`                        | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/listive/syntax)                        |
| <img src="media/dark.svg" alt="DARK"/>   | `lorens`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/lorens/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `lumines`                        | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/lumines/syntax)                        |
| <img src="media/dark.svg" alt="DARK"/>   | `lyt-mode`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/lyt-mode/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `mado-11`                        | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/mado-11/syntax)                        |
| <img src="media/both.svg" alt="BOTH"/>   | `mado-miniflow`                  | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/mado-miniflow/syntax)                  |
| <img src="media/both.svg" alt="BOTH"/>   | `magicuser`                      | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/magicuser/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `mammoth`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/mammoth/syntax)                        |
| <img src="media/both.svg" alt="BOTH"/>   | `maple`                          | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/maple/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `marathon`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/marathon/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `material-3`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/material-3/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `material-flat`                  | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/material-flat/syntax)                  |
| <img src="media/both.svg" alt="BOTH"/>   | `material-gruvbox`               | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/material-gruvbox/syntax)               |
| <img src="media/dark.svg" alt="DARK"/>   | `material-ocean`                 | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/material-ocean/syntax)                 |
| <img src="media/both.svg" alt="BOTH"/>   | `meridian`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/meridian/syntax)                       |
| <img src="media/dark.svg" alt="DARK"/>   | `micro-mike`                     | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/micro-mike/syntax)                     |
| <img src="media/dark.svg" alt="DARK"/>   | `midnight`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/midnight/syntax)                       |
| <img src="media/dark.svg" alt="DARK"/>   | `midnight-fjord`                 | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/midnight-fjord/syntax)                 |
| <img src="media/both.svg" alt="BOTH"/>   | `minimal`                        | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/minimal/syntax)                        |
| <img src="media/dark.svg" alt="DARK"/>   | `minimal-dark-coder`             | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/minimal-dark-coder/syntax)             |
| <img src="media/both.svg" alt="BOTH"/>   | `minimal-dracula`                | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/minimal-dracula/syntax)                |
| <img src="media/both.svg" alt="BOTH"/>   | `minimal-edge`                   | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/minimal-edge/syntax)                   |
| <img src="media/dark.svg" alt="DARK"/>   | `minimal-red`                    | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/minimal-red/syntax)                    |
| <img src="media/dark.svg" alt="DARK"/>   | `minimal-resources`              | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/minimal-resources/syntax)              |
| <img src="media/both.svg" alt="BOTH"/>   | `minimalists-paradise`           | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/minimalists-paradise/syntax)           |
| <img src="media/light.svg" alt="LIGHT"/> | `mint-breeze`                    | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/mint-breeze/syntax)                    |
| <img src="media/both.svg" alt="BOTH"/>   | `mistymauve`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/mistymauve/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `modern-genz-vibedose`           | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/modern-genz-vibedose/syntax)           |
| <img src="media/dark.svg" alt="DARK"/>   | `mono-black-monochrome-charcoal` | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/mono-black-monochrome-charcoal/syntax) |
| <img src="media/both.svg" alt="BOTH"/>   | `mono-high-contrast`             | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/mono-high-contrast/syntax)             |
| <img src="media/both.svg" alt="BOTH"/>   | `monochroyou`                    | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/monochroyou/syntax)                    |
| <img src="media/both.svg" alt="BOTH"/>   | `monokai`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/monokai/syntax)                        |
| <img src="media/both.svg" alt="BOTH"/>   | `moonlight`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/moonlight/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `mulled-wine`                    | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/mulled-wine/syntax)                    |
| <img src="media/dark.svg" alt="DARK"/>   | `muted-blue`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/muted-blue/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `myst`                           | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/myst/syntax)                           |
| <img src="media/dark.svg" alt="DARK"/>   | `nebula`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/nebula/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `neo`                            | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/neo/syntax)                            |
| <img src="media/dark.svg" alt="DARK"/>   | `neon-synthwave`                 | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/neon-synthwave/syntax)                 |
| <img src="media/both.svg" alt="BOTH"/>   | `neovim`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/neovim/syntax)                         |
| <img src="media/light.svg" alt="LIGHT"/> | `neuborder`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/neuborder/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `neumorphism`                    | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/neumorphism/syntax)                    |
| <img src="media/both.svg" alt="BOTH"/>   | `neutral-academia`               | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/neutral-academia/syntax)               |
| <img src="media/dark.svg" alt="DARK"/>   | `nier`                           | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/nier/syntax)                           |
| <img src="media/both.svg" alt="BOTH"/>   | `nightfox`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/nightfox/syntax)                       |
| <img src="media/dark.svg" alt="DARK"/>   | `nightingale`                    | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/nightingale/syntax)                    |
| <img src="media/dark.svg" alt="DARK"/>   | `nobb`                           | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/nobb/syntax)                           |
| <img src="media/light.svg" alt="LIGHT"/> | `nordic`                         | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/nordic/syntax)                         |
| <img src="media/light.svg" alt="LIGHT"/> | `northern-sky`                   | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/northern-sky/syntax)                   |
| <img src="media/both.svg" alt="BOTH"/>   | `notation`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/notation/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `notation-2`                     | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/notation-2/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `notswift`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/notswift/syntax)                       |
| <img src="media/dark.svg" alt="DARK"/>   | `novadust`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/novadust/syntax)                       |
| <img src="media/light.svg" alt="LIGHT"/> | `obsidian-boom`                  | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/obsidian-boom/syntax)                  |
| <img src="media/both.svg" alt="BOTH"/>   | `obsidian-gruvbox`               | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/obsidian-gruvbox/syntax)               |
| <img src="media/both.svg" alt="BOTH"/>   | `obsidian-nord`                  | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/obsidian-nord/syntax)                  |
| <img src="media/both.svg" alt="BOTH"/>   | `obsidian_ia`                    | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/obsidian_ia/syntax)                    |
| <img src="media/dark.svg" alt="DARK"/>   | `obsidian_vibrant`               | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/obsidian_vibrant/syntax)               |
| <img src="media/dark.svg" alt="DARK"/>   | `obsidianite`                    | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/obsidianite/syntax)                    |
| <img src="media/both.svg" alt="BOTH"/>   | `obsidianotion`                  | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/obsidianotion/syntax)                  |
| <img src="media/both.svg" alt="BOTH"/>   | `obuntu`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/obuntu/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `oistnb`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/oistnb/syntax)                         |
| <img src="media/dark.svg" alt="DARK"/>   | `old-world`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/old-world/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `oldsidian-purple`               | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/oldsidian-purple/syntax)               |
| <img src="media/dark.svg" alt="DARK"/>   | `oledblack`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/oledblack/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `oliviers-theme`                 | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/oliviers-theme/syntax)                 |
| <img src="media/both.svg" alt="BOTH"/>   | `onenice`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/onenice/syntax)                        |
| <img src="media/both.svg" alt="BOTH"/>   | `ono-sendai`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/ono-sendai/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `orange`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/orange/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `oreo`                           | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/oreo/syntax)                           |
| <img src="media/both.svg" alt="BOTH"/>   | `origami`                        | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/origami/syntax)                        |
| <img src="media/both.svg" alt="BOTH"/>   | `origin`                         | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/origin/syntax)                         |
| <img src="media/dark.svg" alt="DARK"/>   | `overcast`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/overcast/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `pale`                           | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/pale/syntax)                           |
| <img src="media/dark.svg" alt="DARK"/>   | `panic-mode`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/panic-mode/syntax)                     |
| <img src="media/light.svg" alt="LIGHT"/> | `parfait`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/parfait/syntax)                        |
| <img src="media/both.svg" alt="BOTH"/>   | `penumbra`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/penumbra/syntax)                       |
| <img src="media/light.svg" alt="LIGHT"/> | `perso`                          | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/perso/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `phoenix`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/phoenix/syntax)                        |
| <img src="media/both.svg" alt="BOTH"/>   | `pine-forest-berry`              | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/pine-forest-berry/syntax)              |
| <img src="media/both.svg" alt="BOTH"/>   | `pink-topaz`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/pink-topaz/syntax)                     |
| <img src="media/dark.svg" alt="DARK"/>   | `pisum`                          | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/pisum/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `planetary`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/planetary/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `playground`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/playground/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `pln`                            | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/pln/syntax)                            |
| <img src="media/dark.svg" alt="DARK"/>   | `poimandres`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/poimandres/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `polka`                          | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/polka/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `pomme-notes`                    | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/pomme-notes/syntax)                    |
| <img src="media/both.svg" alt="BOTH"/>   | `powered-by-lancer`              | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/powered-by-lancer/syntax)              |
| <img src="media/both.svg" alt="BOTH"/>   | `primary`                        | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/primary/syntax)                        |
| <img src="media/both.svg" alt="BOTH"/>   | `prime`                          | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/prime/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `prism`                          | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/prism/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `proper-dark`                    | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/proper-dark/syntax)                    |
| <img src="media/dark.svg" alt="DARK"/>   | `protocolblue`                   | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/protocolblue/syntax)                   |
| <img src="media/dark.svg" alt="DARK"/>   | `prussian-blue`                  | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/prussian-blue/syntax)                  |
| <img src="media/both.svg" alt="BOTH"/>   | `publisher`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/publisher/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `pure`                           | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/pure/syntax)                           |
| <img src="media/dark.svg" alt="DARK"/>   | `purple-aurora`                  | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/purple-aurora/syntax)                  |
| <img src="media/dark.svg" alt="DARK"/>   | `purple-owl`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/purple-owl/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `pxld`                           | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/pxld/syntax)                           |
| <img src="media/both.svg" alt="BOTH"/>   | `qlean`                          | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/qlean/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `quillcode`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/quillcode/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `red-graphite`                   | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/red-graphite/syntax)                   |
| <img src="media/dark.svg" alt="DARK"/>   | `red-shadow`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/red-shadow/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `refined-default`                | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/refined-default/syntax)                |
| <img src="media/both.svg" alt="BOTH"/>   | `reshi`                          | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/reshi/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `retro-windows`                  | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/retro-windows/syntax)                  |
| <img src="media/both.svg" alt="BOTH"/>   | `retronotes`                     | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/retronotes/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `retroos-98`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/retroos-98/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `reverie`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/reverie/syntax)                        |
| <img src="media/dark.svg" alt="DARK"/>   | `rezin`                          | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/rezin/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `ribbons`                        | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/ribbons/syntax)                        |
| <img src="media/dark.svg" alt="DARK"/>   | `rift`                           | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/rift/syntax)                           |
| <img src="media/dark.svg" alt="DARK"/>   | `rmaki`                          | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/rmaki/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `rose-pine`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/rose-pine/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `rose-pine-2`                    | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/rose-pine-2/syntax)                    |
| <img src="media/dark.svg" alt="DARK"/>   | `rose-pine-moon`                 | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/rose-pine-moon/syntax)                 |
| <img src="media/dark.svg" alt="DARK"/>   | `rose-red`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/rose-red/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `royal-velvet`                   | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/royal-velvet/syntax)                   |
| <img src="media/both.svg" alt="BOTH"/>   | `sad-machine-druid`              | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/sad-machine-druid/syntax)              |
| <img src="media/dark.svg" alt="DARK"/>   | `sakurajima`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/sakurajima/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `salem`                          | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/salem/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `sanctum`                        | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/sanctum/syntax)                        |
| <img src="media/both.svg" alt="BOTH"/>   | `sanctum-reborn`                 | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/sanctum-reborn/syntax)                 |
| <img src="media/both.svg" alt="BOTH"/>   | `sandover`                       | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/sandover/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `sandstorm`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/sandstorm/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `sanguine`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/sanguine/syntax)                       |
| <img src="media/dark.svg" alt="DARK"/>   | `sea-glass`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/sea-glass/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `seamless-view`                  | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/seamless-view/syntax)                  |
| <img src="media/both.svg" alt="BOTH"/>   | `sei`                            | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/sei/syntax)                            |
| <img src="media/both.svg" alt="BOTH"/>   | `serenity`                       | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/serenity/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `serif`                          | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/serif/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `serika`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/serika/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `shade-sanctuary`                | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/shade-sanctuary/syntax)                |
| <img src="media/both.svg" alt="BOTH"/>   | `shadeflow`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/shadeflow/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `shiba-inu`                      | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/shiba-inu/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `shimmering-focus`               | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/shimmering-focus/syntax)               |
| <img src="media/both.svg" alt="BOTH"/>   | `simple`                         | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/simple/syntax)                         |
| <img src="media/dark.svg" alt="DARK"/>   | `simple-color`                   | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/simple-color/syntax)                   |
| <img src="media/both.svg" alt="BOTH"/>   | `simplicity`                     | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/simplicity/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `simply-colorful`                | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/simply-colorful/syntax)                |
| <img src="media/dark.svg" alt="DARK"/>   | `sodalite`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/sodalite/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `solarized`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/solarized/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `soli-deo-gloria`                | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/soli-deo-gloria/syntax)                |
| <img src="media/dark.svg" alt="DARK"/>   | `solitude`                       | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/solitude/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `soloing`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/soloing/syntax)                        |
| <img src="media/both.svg" alt="BOTH"/>   | `soothe`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/soothe/syntax)                         |
| <img src="media/dark.svg" alt="DARK"/>   | `space`                          | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/space/syntax)                          |
| <img src="media/light.svg" alt="LIGHT"/> | `sparkling-day`                  | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/sparkling-day/syntax)                  |
| <img src="media/both.svg" alt="BOTH"/>   | `sparkling-night`                | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/sparkling-night/syntax)                |
| <img src="media/both.svg" alt="BOTH"/>   | `sparkling-wisdom`               | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/sparkling-wisdom/syntax)               |
| <img src="media/both.svg" alt="BOTH"/>   | `spectrum`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/spectrum/syntax)                       |
| <img src="media/dark.svg" alt="DARK"/>   | `spectrum-blue`                  | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/spectrum-blue/syntax)                  |
| <img src="media/dark.svg" alt="DARK"/>   | `spectrumplus`                   | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/spectrumplus/syntax)                   |
| <img src="media/both.svg" alt="BOTH"/>   | `spring`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/spring/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `sqdthone`                       | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/sqdthone/syntax)                       |
| <img src="media/dark.svg" alt="DARK"/>   | `strict`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/strict/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `subtlegold`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/subtlegold/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `suddha`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/suddha/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `sunbather`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/sunbather/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `synthwave`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/synthwave/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `synthwave-84`                   | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/synthwave-84/syntax)                   |
| <img src="media/dark.svg" alt="DARK"/>   | `terminal`                       | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/terminal/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `terminal2k`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/terminal2k/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `terraflow`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/terraflow/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `theme-that-shall-not-be-named`  | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/theme-that-shall-not-be-named/syntax)  |
| <img src="media/both.svg" alt="BOTH"/>   | `things`                         | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/things/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `things-3`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/things-3/syntax)                       |
| <img src="media/both.svg" alt="BOTH"/>   | `tiniri`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/tiniri/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `tokyo-night`                    | <img src="media/partial.svg" alt="PARTIAL"/> <img src="media/collection.svg" alt="COLLECTION"/>   | [live preview](https://quartz-themes.github.io/tokyo-night/syntax)                    |
| <img src="media/dark.svg" alt="DARK"/>   | `tokyo-night-storm`              | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/tokyo-night-storm/syntax)              |
| <img src="media/dark.svg" alt="DARK"/>   | `tomorrow`                       | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/tomorrow/syntax)                       |
| <img src="media/dark.svg" alt="DARK"/>   | `tomorrow-night-bright`          | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/tomorrow-night-bright/syntax)          |
| <img src="media/both.svg" alt="BOTH"/>   | `toms-theme`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/toms-theme/syntax)                     |
| <img src="media/dark.svg" alt="DARK"/>   | `trace-labs`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/trace-labs/syntax)                     |
| <img src="media/dark.svg" alt="DARK"/>   | `transient`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/transient/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `transparent`                    | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/transparent/syntax)                    |
| <img src="media/both.svg" alt="BOTH"/>   | `typewriter`                     | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/typewriter/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `typomagical`                    | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/typomagical/syntax)                    |
| <img src="media/both.svg" alt="BOTH"/>   | `typora-vue`                     | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/typora-vue/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `ukiyo`                          | <img src="media/removed.svg" alt="REMOVED"/> <img src="media/collection.svg" alt="COLLECTION"/>   | [live preview](https://quartz-themes.github.io/ukiyo/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `ultra-lobster`                  | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/ultra-lobster/syntax)                  |
| <img src="media/both.svg" alt="BOTH"/>   | `underwater`                     | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/underwater/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `ursa`                           | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/ursa/syntax)                           |
| <img src="media/dark.svg" alt="DARK"/>   | `vanilla-amoled`                 | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/vanilla-amoled/syntax)                 |
| <img src="media/dark.svg" alt="DARK"/>   | `vanilla-amoled-color`           | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/vanilla-amoled-color/syntax)           |
| <img src="media/both.svg" alt="BOTH"/>   | `vanilla-palettes`               | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/vanilla-palettes/syntax)               |
| <img src="media/both.svg" alt="BOTH"/>   | `vauxhall`                       | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/vauxhall/syntax)                       |
| <img src="media/dark.svg" alt="DARK"/>   | `velvet-moon`                    | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/velvet-moon/syntax)                    |
| <img src="media/dark.svg" alt="DARK"/>   | `venom`                          | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/venom/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `vercel-geist`                   | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/vercel-geist/syntax)                   |
| <img src="media/both.svg" alt="BOTH"/>   | `vesper`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/vesper/syntax)                         |
| <img src="media/dark.svg" alt="DARK"/>   | `vibrant`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/vibrant/syntax)                        |
| <img src="media/both.svg" alt="BOTH"/>   | `vicious`                        | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/vicious/syntax)                        |
| <img src="media/dark.svg" alt="DARK"/>   | `violet-evening`                 | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/violet-evening/syntax)                 |
| <img src="media/both.svg" alt="BOTH"/>   | `virgo`                          | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/virgo/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `vortex`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/vortex/syntax)                         |
| <img src="media/light.svg" alt="LIGHT"/> | `w95`                            | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/w95/syntax)                            |
| <img src="media/both.svg" alt="BOTH"/>   | `wasp`                           | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/wasp/syntax)                           |
| <img src="media/both.svg" alt="BOTH"/>   | `wikipedia`                      | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/wikipedia/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `wilcoxone`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/wilcoxone/syntax)                      |
| <img src="media/both.svg" alt="BOTH"/>   | `willemstad`                     | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/willemstad/syntax)                     |
| <img src="media/light.svg" alt="LIGHT"/> | `winter-spices`                  | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/winter-spices/syntax)                  |
| <img src="media/light.svg" alt="LIGHT"/> | `wiselight`                      | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/wiselight/syntax)                      |
| <img src="media/dark.svg" alt="DARK"/>   | `wombat`                         | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/wombat/syntax)                         |
| <img src="media/both.svg" alt="BOTH"/>   | `wy-console`                     | <img src="media/partial.svg" alt="PARTIAL"/>                                                      | [live preview](https://quartz-themes.github.io/wy-console/syntax)                     |
| <img src="media/both.svg" alt="BOTH"/>   | `wyrd`                           | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/wyrd/syntax)                           |
| <img src="media/both.svg" alt="BOTH"/>   | `yue`                            | <img src="media/checking.svg" alt="CHECKING"/> <img src="media/collection.svg" alt="COLLECTION"/> | [live preview](https://quartz-themes.github.io/yue/syntax)                            |
| <img src="media/both.svg" alt="BOTH"/>   | `zario`                          | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/zario/syntax)                          |
| <img src="media/both.svg" alt="BOTH"/>   | `zen`                            | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/zen/syntax)                            |
| <img src="media/dark.svg" alt="DARK"/>   | `zenburn`                        | <img src="media/checking.svg" alt="CHECKING"/>                                                    | [live preview](https://quartz-themes.github.io/zenburn/syntax)                        |
