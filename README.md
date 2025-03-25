# Quartz Themes

A collection of Obsidian.md themes adapted for [Quartz](https://github.com/jackyzha0/quartz).

<p align="center" width="100%">
  <img src="media/quartz-themes-400.png" alt="Quartz Themes logo"/>
</p>

![Last updated: 2024-10-05](<https://img.shields.io/date/1728122400?style=for-the-badge&label=Last Obsidian themes list fetch&labelColor=hsl(258%2C%2088%25%2C%2066%25)&color=444>)
![Supported Quartz version v4.5.0](<https://img.shields.io/badge/v4.5.0-Quartz?style=for-the-badge&label=Quartz%20version&labelColor=hsl(204%2C%2022%25%2C%2057%25)&color=444>)

## Installation

### GitHub Actions (Recommended)

Add the following lines to your `deploy.yml` before the build step:

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- <THEME-NAME>
```

> [!IMPORTANT]
> Replace `<THEME-NAME>` with your desired theme name. See [Compatibility List](#supported-themes)

> [!TIP]
> Example for Tokyo Night:
>
> ```yaml
> - name: Fetch Quartz Theme
>   run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- Tokyo Night
> ```

The full script would look like this:

```yaml
name: Deploy Quartz site to GitHub Pages

on:
  push:
    branches:
      - v4

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
        run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- <THEME-NAME>
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

### Manual install

Download the latest version of the [action.sh](https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh) script or run the following to download it:

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh
```

Then run the `action.sh` script with the desired theme to install it into your Quartz repository:

```bash
# Example: installing Tokyo Night...
./action.sh Tokyo Night

# ...should output:
# Quartz root succesfully detected...
# Input theme: tokyo-night
# Parsing input theme...
# bash: line 49: tokyo-night: command not found
# Theme tokyo-night parsed to tokyo-night
# Validating theme...
# Theme 'tokyo-night' found. Preparing to fetch files...
# Cleaning theme directory...
# Creating theme directory...
# Fetching theme files...
# <img src="media/checking.svg" alt="CHECKING"/>theme files...
# _index.scss exists
# _fonts.scss exists
# _dark.scss exists
# _light.scss exists
# overrides/_index.scss exists
# Verifying setup...
# Added import line to custom.scss...
# Finished fetching and applying theme 'tokyo-night'.
```

### Install script (Advanced)

<details>
<summary>Advanced installation</summary>

> [!WARNING]
> This setup method is only recommended if the recommended method is not feasible.

Clone the project next to your Quartz repository.

```bash
git clone https://github.com/saberzero1/quartz-themes.git
cd quartz-themes
npm ci
```

#### Configure Quartz

Add the following line to your `custom.scss` file:

```scss
@use "./themes";
```

Your `custom.scss` should look something like this:

```scss
@use "./base.scss";
@use "./themes";

// put your custom CSS here!
```

#### Setting themes and layout

Run the following from the Quartz Themes project root:

```bash
npm run theme <theme-name>
```

#### Updating

Run the following from the Quartz Themes project root to check for updates:

```bash
npm run check
```

Run the following from the Quartz Themes project root to update the themes:

```bash
npm run update
```

</details>

## Supported Themes

<details>
  <summary>
    Glossary
  </summary>

| Status                                               | Description                                      |
| ---------------------------------------------------- | ------------------------------------------------ |
| <img src="media/full.svg" alt="FULL"/>               | Fully supported                                  |
| <img src="media/partial.svg" alt="PARTIAL"/>         | Partially supported (see theme page for details) |
| <img src="media/checking.svg" alt="CHECKING"/>       | Testing compatibility                            |
| <img src="media/blocked.svg" alt="BLOCKED"/>         | Waiting for upstream fixes                       |
| <img src="media/todo.svg" alt="TODO"/>               | Not started                                      |
| <img src="media/unsupported.svg" alt="UNSUPPORTED"/> | Won't support                                    |
| <img src="media/removed.svg" alt="BROKEN"/>          | Broken or removed from Obsidian                  |

| Theme Modes                              | Description               |
| ---------------------------------------- | ------------------------- |
| <img src="media/both.svg" alt="BOTH"/>   | Both dark and light theme |
| <img src="media/light.svg" alt="LIGHT"/> | Light theme only          |
| <img src="media/dark.svg" alt="DARK"/>   | Dark theme only           |

</details>

| Supported Modes                        | Obsidian Theme Name              | Theme Compatibility Status                     | Live Preview                                                                    |
| -------------------------------------- | -------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------- |
| <img src="media/dark.svg" alt="DARK"/> | `80s-neon`                       | <img src="media/full.svg" alt="FULL"/>         | [live preview](https://quartz-themes.github.io/80s-neon/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `abate`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/abate/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `abecedarium`                    | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/abecedarium/)                    |
| <img src="media/both.svg" alt="BOTH"/> | `absolutegruv`                   | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/absolutegruv/)                   |
| <img src="media/both.svg" alt="BOTH"/> | `abyssal`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/abyssal/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `adrenaline`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/adrenaline/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `adwaita`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/adwaita/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `agate`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/agate/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `al-dente`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/al-dente/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `allium`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/allium/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `anuppuccin`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/anuppuccin/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `apatheia`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/apatheia/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `apex`                           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/apex/)                           |
| <img src="media/both.svg" alt="BOTH"/> | `arcane`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/arcane/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `atom`                           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/atom/)                           |
| <img src="media/both.svg" alt="BOTH"/> | `atomus`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/atomus/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `aura-dark`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/aura-dark/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `aura`                           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/aura/)                           |
| <img src="media/both.svg" alt="BOTH"/> | `aurora-twilight`                | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/aurora-twilight/)                |
| <img src="media/both.svg" alt="BOTH"/> | `aurora`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/aurora/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `autotape`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/autotape/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `ayu-light-mirage`               | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/ayu-light-mirage/)               |
| <img src="media/both.svg" alt="BOTH"/> | `ayu-mirage`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/ayu-mirage/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `base2tone`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/base2tone/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `behave-dark`                    | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/behave-dark/)                    |
| <img src="media/both.svg" alt="BOTH"/> | `big-bold`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/big-bold/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `black`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/black/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `blackbird`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/blackbird/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `blossom`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/blossom/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `blue-topaz`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/blue-topaz/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `bolt`                           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/bolt/)                           |
| <img src="media/both.svg" alt="BOTH"/> | `border`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/border/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `bossidian`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/bossidian/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `brainhack`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/brainhack/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `brutalism`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/brutalism/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `buena-vista`                    | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/buena-vista/)                    |
| <img src="media/both.svg" alt="BOTH"/> | `carbon`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/carbon/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `cardstock`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/cardstock/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `catppuccin`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/catppuccin/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `celestial-night`                | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/celestial-night/)                |
| <img src="media/both.svg" alt="BOTH"/> | `charcoal`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/charcoal/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `chiaroscuroflow`                | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/chiaroscuroflow/)                |
| <img src="media/both.svg" alt="BOTH"/> | `chime` (🔔-chime)               | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/chime/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `christmas`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/christmas/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `cobalt-peacock`                 | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/cobalt-peacock/)                 |
| <img src="media/both.svg" alt="BOTH"/> | `colored-candy`                  | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/colored-candy/)                  |
| <img src="media/both.svg" alt="BOTH"/> | `comfort-color-dark`             | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/comfort-color-dark/)             |
| <img src="media/both.svg" alt="BOTH"/> | `comfort-dark`                   | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/comfort-dark/)                   |
| <img src="media/both.svg" alt="BOTH"/> | `comfort-smooth`                 | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/comfort-smooth/)                 |
| <img src="media/both.svg" alt="BOTH"/> | `comfort`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/comfort/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `covert`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/covert/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `creature`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/creature/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `creme-brulee`                   | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/creme-brulee/)                   |
| <img src="media/both.svg" alt="BOTH"/> | `cyber-glow`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/cyber-glow/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `cybertron-shifted`              | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/cybertron-shifted/)              |
| <img src="media/both.svg" alt="BOTH"/> | `cybertron`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/cybertron/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `dark-castle`                    | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/dark-castle/)                    |
| <img src="media/both.svg" alt="BOTH"/> | `dark-clarity`                   | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/dark-clarity/)                   |
| <img src="media/both.svg" alt="BOTH"/> | `dark-graphite-pie`              | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/dark-graphite-pie/)              |
| <img src="media/both.svg" alt="BOTH"/> | `dark-graphite`                  | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/dark-graphite/)                  |
| <img src="media/both.svg" alt="BOTH"/> | `dark-moss`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/dark-moss/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `darkember`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/darkember/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `darkyan`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/darkyan/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `dawn`                           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/dawn/)                           |
| <img src="media/both.svg" alt="BOTH"/> | `dayspring`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/dayspring/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `deeper-work`                    | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/deeper-work/)                    |
| <img src="media/both.svg" alt="BOTH"/> | `default`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/default/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `dekurai`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/dekurai/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `discordian`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/discordian/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `dracula-for-obsidian`           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/dracula-for-obsidian/)           |
| <img src="media/both.svg" alt="BOTH"/> | `dracula-gemini`                 | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/dracula-gemini/)                 |
| <img src="media/both.svg" alt="BOTH"/> | `dracula-lyt`                    | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/dracula-lyt/)                    |
| <img src="media/both.svg" alt="BOTH"/> | `dracula-official`               | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/dracula-official/)               |
| <img src="media/both.svg" alt="BOTH"/> | `dracula-plus`                   | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/dracula-plus/)                   |
| <img src="media/both.svg" alt="BOTH"/> | `dracula-slim`                   | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/dracula-slim/)                   |
| <img src="media/both.svg" alt="BOTH"/> | `dune`                           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/dune/)                           |
| <img src="media/both.svg" alt="BOTH"/> | `dunite`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/dunite/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `dynamic-color`                  | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/dynamic-color/)                  |
| <img src="media/both.svg" alt="BOTH"/> | `ebullientworks`                 | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/ebullientworks/)                 |
| <img src="media/both.svg" alt="BOTH"/> | `eldritch`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/eldritch/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `elegance`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/elegance/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `encore`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/encore/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `ethereon`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/ethereon/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `everblush`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/everblush/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `everforest-enchanted`           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/everforest-enchanted/)           |
| <img src="media/both.svg" alt="BOTH"/> | `everforest`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/everforest/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `evergreen-shadow`               | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/evergreen-shadow/)               |
| <img src="media/both.svg" alt="BOTH"/> | `evilred`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/evilred/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `faded`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/faded/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `feather`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/feather/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `firefly`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/firefly/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `flexoki`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/flexoki/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `focus`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/focus/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `fusion`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/fusion/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `garden-gnome-adwaita-gtk`       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/garden-gnome-adwaita-gtk/)       |
| <img src="media/both.svg" alt="BOTH"/> | `gdct-dark`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/gdct-dark/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `gdct`                           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/gdct/)                           |
| <img src="media/both.svg" alt="BOTH"/> | `github-theme`                   | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/github-theme/)                   |
| <img src="media/both.svg" alt="BOTH"/> | `githubdhc`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/githubdhc/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `gitsidian`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/gitsidian/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `golden-topaz`                   | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/golden-topaz/)                   |
| <img src="media/both.svg" alt="BOTH"/> | `green-nightmare`                | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/green-nightmare/)                |
| <img src="media/both.svg" alt="BOTH"/> | `gummy-revived`                  | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/gummy-revived/)                  |
| <img src="media/both.svg" alt="BOTH"/> | `halcyon`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/halcyon/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `heboric`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/heboric/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `hipstersmoothie`                | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/hipstersmoothie/)                |
| <img src="media/both.svg" alt="BOTH"/> | `hulk`                           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/hulk/)                           |
| <img src="media/both.svg" alt="BOTH"/> | `ia-writer`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/ia-writer/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `ib-writer`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/ib-writer/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `iceberg`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/iceberg/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `improved-potato`                | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/improved-potato/)                |
| <img src="media/both.svg" alt="BOTH"/> | `ion`                            | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/ion/)                            |
| <img src="media/both.svg" alt="BOTH"/> | `its-theme`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/its-theme/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `jotter`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/jotter/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `kakano`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/kakano/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `kanagawa`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/kanagawa/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `kiwi-mono`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/kiwi-mono/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `kurokula`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/kurokula/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `latex`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/latex/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `lavender-mist`                  | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/lavender-mist/)                  |
| <img src="media/both.svg" alt="BOTH"/> | `lemons-theme`                   | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/lemons-theme/)                   |
| <img src="media/both.svg" alt="BOTH"/> | `light-bright`                   | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/light-bright/)                   |
| <img src="media/both.svg" alt="BOTH"/> | `listive`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/listive/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `lorens`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/lorens/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `lumines`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/lumines/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `lyt-mode`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/lyt-mode/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `mado-11`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/mado-11/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `mado-miniflow`                  | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/mado-miniflow/)                  |
| <img src="media/both.svg" alt="BOTH"/> | `magicuser`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/magicuser/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `mammoth`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/mammoth/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `maple`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/maple/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `material-flat`                  | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/material-flat/)                  |
| <img src="media/both.svg" alt="BOTH"/> | `material-gruvbox`               | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/material-gruvbox/)               |
| <img src="media/both.svg" alt="BOTH"/> | `material-ocean`                 | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/material-ocean/)                 |
| <img src="media/both.svg" alt="BOTH"/> | `micro-mike`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/micro-mike/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `midnight-fjord`                 | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/midnight-fjord/)                 |
| <img src="media/both.svg" alt="BOTH"/> | `midnight`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/midnight/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `minimal-edge`                   | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/minimal-edge/)                   |
| <img src="media/both.svg" alt="BOTH"/> | `minimal-resources`              | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/minimal-resources/)              |
| <img src="media/both.svg" alt="BOTH"/> | `minimal`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/minimal/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `mint-breeze`                    | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/mint-breeze/)                    |
| <img src="media/both.svg" alt="BOTH"/> | `mistymauve`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/mistymauve/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `mono-black-monochrome-charcoal` | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/mono-black-monochrome-charcoal/) |
| <img src="media/both.svg" alt="BOTH"/> | `monochroyou`                    | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/monochroyou/)                    |
| <img src="media/both.svg" alt="BOTH"/> | `monokai`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/monokai/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `moonlight`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/moonlight/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `muted-blue`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/muted-blue/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `nebula`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/nebula/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `neo`                            | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/neo/)                            |
| <img src="media/both.svg" alt="BOTH"/> | `neon-synthwave`                 | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/neon-synthwave/)                 |
| <img src="media/both.svg" alt="BOTH"/> | `neovim`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/neovim/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `neuborder`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/neuborder/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `nier`                           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/nier/)                           |
| <img src="media/both.svg" alt="BOTH"/> | `nightfox`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/nightfox/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `nightingale`                    | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/nightingale/)                    |
| <img src="media/both.svg" alt="BOTH"/> | `nobb`                           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/nobb/)                           |
| <img src="media/both.svg" alt="BOTH"/> | `nordic`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/nordic/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `northern-sky`                   | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/northern-sky/)                   |
| <img src="media/both.svg" alt="BOTH"/> | `notation-2`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/notation-2/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `notation`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/notation/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `notswift`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/notswift/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `novadust`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/novadust/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `obsidian-boom`                  | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/obsidian-boom/)                  |
| <img src="media/both.svg" alt="BOTH"/> | `obsidian-gruvbox`               | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/obsidian-gruvbox/)               |
| <img src="media/both.svg" alt="BOTH"/> | `obsidian-nord`                  | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/obsidian-nord/)                  |
| <img src="media/both.svg" alt="BOTH"/> | `obsidian_ia`                    | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/obsidian_ia/)                    |
| <img src="media/both.svg" alt="BOTH"/> | `obsidianite`                    | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/obsidianite/)                    |
| <img src="media/both.svg" alt="BOTH"/> | `obsidianotion`                  | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/obsidianotion/)                  |
| <img src="media/both.svg" alt="BOTH"/> | `obuntu`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/obuntu/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `oistnb`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/oistnb/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `oldsidian-purple`               | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/oldsidian-purple/)               |
| <img src="media/both.svg" alt="BOTH"/> | `oliviers-theme`                 | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/oliviers-theme/)                 |
| <img src="media/both.svg" alt="BOTH"/> | `ono-sendai`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/ono-sendai/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `oreo`                           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/oreo/)                           |
| <img src="media/both.svg" alt="BOTH"/> | `origin`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/origin/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `pale`                           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/pale/)                           |
| <img src="media/both.svg" alt="BOTH"/> | `panic-mode`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/panic-mode/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `penumbra`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/penumbra/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `perso`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/perso/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `phoenix`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/phoenix/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `pine-forest-berry`              | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/pine-forest-berry/)              |
| <img src="media/both.svg" alt="BOTH"/> | `pink-topaz`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/pink-topaz/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `pisum`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/pisum/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `pln`                            | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/pln/)                            |
| <img src="media/both.svg" alt="BOTH"/> | `poimandres`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/poimandres/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `polka`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/polka/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `primary`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/primary/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `prime`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/prime/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `prism`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/prism/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `proper-dark`                    | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/proper-dark/)                    |
| <img src="media/both.svg" alt="BOTH"/> | `protocolblue`                   | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/protocolblue/)                   |
| <img src="media/both.svg" alt="BOTH"/> | `prussian-blue`                  | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/prussian-blue/)                  |
| <img src="media/both.svg" alt="BOTH"/> | `pure`                           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/pure/)                           |
| <img src="media/both.svg" alt="BOTH"/> | `purple-aurora`                  | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/purple-aurora/)                  |
| <img src="media/both.svg" alt="BOTH"/> | `purple-owl`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/purple-owl/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `pxld`                           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/pxld/)                           |
| <img src="media/both.svg" alt="BOTH"/> | `qlean`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/qlean/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `red-graphite`                   | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/red-graphite/)                   |
| <img src="media/both.svg" alt="BOTH"/> | `refined-default`                | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/refined-default/)                |
| <img src="media/both.svg" alt="BOTH"/> | `reshi`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/reshi/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `retronotes`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/retronotes/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `reverie`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/reverie/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `rezin`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/rezin/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `rift`                           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/rift/)                           |
| <img src="media/both.svg" alt="BOTH"/> | `rmaki`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/rmaki/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `rose-pine-moon`                 | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/rose-pine-moon/)                 |
| <img src="media/both.svg" alt="BOTH"/> | `rose-pine`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/rose-pine/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `rose-red`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/rose-red/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `royal-velvet`                   | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/royal-velvet/)                   |
| <img src="media/both.svg" alt="BOTH"/> | `salem`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/salem/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `sanctum-reborn`                 | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/sanctum-reborn/)                 |
| <img src="media/both.svg" alt="BOTH"/> | `sanctum`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/sanctum/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `sandover`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/sandover/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `sandstorm`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/sandstorm/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `sanguine`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/sanguine/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `sea-glass`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/sea-glass/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `seamless-view`                  | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/seamless-view/)                  |
| <img src="media/both.svg" alt="BOTH"/> | `serika`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/serika/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `shade-sanctuary`                | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/shade-sanctuary/)                |
| <img src="media/both.svg" alt="BOTH"/> | `shiba-inu`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/shiba-inu/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `shimmering-focus`               | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/shimmering-focus/)               |
| <img src="media/both.svg" alt="BOTH"/> | `simple`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/simple/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `simplicity`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/simplicity/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `sodalite`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/sodalite/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `solarized`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/solarized/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `solitude`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/solitude/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `soloing`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/soloing/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `soothe`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/soothe/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `space`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/space/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `sparkling-day`                  | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/sparkling-day/)                  |
| <img src="media/both.svg" alt="BOTH"/> | `sparkling-night`                | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/sparkling-night/)                |
| <img src="media/both.svg" alt="BOTH"/> | `sparkling-wisdom`               | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/sparkling-wisdom/)               |
| <img src="media/both.svg" alt="BOTH"/> | `spectrum-blue`                  | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/spectrum-blue/)                  |
| <img src="media/both.svg" alt="BOTH"/> | `spectrum`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/spectrum/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `spring`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/spring/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `sqdthone`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/sqdthone/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `strict`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/strict/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `subtlegold`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/subtlegold/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `suddha`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/suddha/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `synthwave-84`                   | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/synthwave-84/)                   |
| <img src="media/both.svg" alt="BOTH"/> | `synthwave`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/synthwave/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `terminal`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/terminal/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `theme-that-shall-not-be-named`  | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/theme-that-shall-not-be-named/)  |
| <img src="media/both.svg" alt="BOTH"/> | `things`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/things/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `tiniri`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/tiniri/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `tokyo-night-storm`              | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/tokyo-night-storm/)              |
| <img src="media/both.svg" alt="BOTH"/> | `tokyo-night`                    | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/tokyo-night/)                    |
| <img src="media/both.svg" alt="BOTH"/> | `tomorrow-night-bright`          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/tomorrow-night-bright/)          |
| <img src="media/both.svg" alt="BOTH"/> | `tomorrow`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/tomorrow/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `toms-theme`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/toms-theme/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `trace-labs`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/trace-labs/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `transient`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/transient/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `typewriter`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/typewriter/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `typomagical`                    | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/typomagical/)                    |
| <img src="media/both.svg" alt="BOTH"/> | `typora-vue`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/typora-vue/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `ukiyo`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/ukiyo/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `ultra-lobster`                  | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/ultra-lobster/)                  |
| <img src="media/both.svg" alt="BOTH"/> | `underwater`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/underwater/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `ursa`                           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/ursa/)                           |
| <img src="media/both.svg" alt="BOTH"/> | `vanilla-amoled-color`           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/vanilla-amoled-color/)           |
| <img src="media/both.svg" alt="BOTH"/> | `vanilla-amoled`                 | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/vanilla-amoled/)                 |
| <img src="media/both.svg" alt="BOTH"/> | `vanilla-palettes`               | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/vanilla-palettes/)               |
| <img src="media/both.svg" alt="BOTH"/> | `vauxhall`                       | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/vauxhall/)                       |
| <img src="media/both.svg" alt="BOTH"/> | `velvet-moon`                    | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/velvet-moon/)                    |
| <img src="media/both.svg" alt="BOTH"/> | `venom`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/venom/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `vicious`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/vicious/)                        |
| <img src="media/both.svg" alt="BOTH"/> | `violet-evening`                 | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/violet-evening/)                 |
| <img src="media/both.svg" alt="BOTH"/> | `virgo`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/virgo/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `w95`                            | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/w95/)                            |
| <img src="media/both.svg" alt="BOTH"/> | `wasp`                           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/wasp/)                           |
| <img src="media/both.svg" alt="BOTH"/> | `wilcoxone`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/wilcoxone/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `willemstad`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/willemstad/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `wiselight`                      | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/wiselight/)                      |
| <img src="media/both.svg" alt="BOTH"/> | `wombat`                         | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/wombat/)                         |
| <img src="media/both.svg" alt="BOTH"/> | `wy-console`                     | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/wy-console/)                     |
| <img src="media/both.svg" alt="BOTH"/> | `wyrd`                           | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/wyrd/)                           |
| <img src="media/both.svg" alt="BOTH"/> | `yue`                            | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/yue/)                            |
| <img src="media/both.svg" alt="BOTH"/> | `zario`                          | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/zario/)                          |
| <img src="media/both.svg" alt="BOTH"/> | `zenburn`                        | <img src="media/checking.svg" alt="CHECKING"/> | [live preview](https://quartz-themes.github.io/zenburn/)                        |
