# Quartz Themes

A collection of Obsidian.md themes adapted for [Quartz](https://github.com/jackyzha0/quartz).

> ![Quartz using Catppuccin Frappe](preview-catppuccin-frappe.png)
>
> Quartz using Catppuccin Frappe theme

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
# Checking theme files...
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

<!--
Colors in GitHub markdown: https://gist.github.com/luigiMinardi/4574708d404cdf4fe0da7ac6fe2314db
-->

> [!NOTE]
> Below list was taken from Obsidian's theme browser, sorted by number of installs. _Last updated: 2024-10-05_.

| Status      | Description                                      |
| ----------- | ------------------------------------------------ |
| FULL        | Fully supported                                  |
| PARTIAL     | Partially supported (see theme page for details) |
| CHECKING    | Testing compatibility                            |
| BLOCKED     | Waiting for upstream fixes                       |
| TODO        | Not started                                      |
| UNSUPPORTED | Won't support                                    |
| BROKEN      | Broken or removed from Obsidian                  |

| Obsidian Theme Name            | Theme Compatibility Status | Live Preview                                                                    |
| ------------------------------ | -------------------------- | ------------------------------------------------------------------------------- |
| 80s-neon                       | CHECKING                   | [live preview](https://quartz-themes.github.io/80s-neon/)                       |
| abate                          | CHECKING                   | [live preview](https://quartz-themes.github.io/abate/)                          |
| abecedarium                    | CHECKING                   | [live preview](https://quartz-themes.github.io/abecedarium/)                    |
| absolutegruv                   | CHECKING                   | [live preview](https://quartz-themes.github.io/absolutegruv/)                   |
| abyssal                        | CHECKING                   | [live preview](https://quartz-themes.github.io/abyssal/)                        |
| adrenaline                     | CHECKING                   | [live preview](https://quartz-themes.github.io/adrenaline/)                     |
| adwaita                        | CHECKING                   | [live preview](https://quartz-themes.github.io/adwaita/)                        |
| agate                          | CHECKING                   | [live preview](https://quartz-themes.github.io/agate/)                          |
| al-dente                       | CHECKING                   | [live preview](https://quartz-themes.github.io/al-dente/)                       |
| allium                         | CHECKING                   | [live preview](https://quartz-themes.github.io/allium/)                         |
| anuppuccin                     | CHECKING                   | [live preview](https://quartz-themes.github.io/anuppuccin/)                     |
| apatheia                       | CHECKING                   | [live preview](https://quartz-themes.github.io/apatheia/)                       |
| apex                           | CHECKING                   | [live preview](https://quartz-themes.github.io/apex/)                           |
| arcane                         | CHECKING                   | [live preview](https://quartz-themes.github.io/arcane/)                         |
| atom                           | CHECKING                   | [live preview](https://quartz-themes.github.io/atom/)                           |
| atomus                         | CHECKING                   | [live preview](https://quartz-themes.github.io/atomus/)                         |
| aura-dark                      | CHECKING                   | [live preview](https://quartz-themes.github.io/aura-dark/)                      |
| aura                           | CHECKING                   | [live preview](https://quartz-themes.github.io/aura/)                           |
| aurora-twilight                | CHECKING                   | [live preview](https://quartz-themes.github.io/aurora-twilight/)                |
| aurora                         | CHECKING                   | [live preview](https://quartz-themes.github.io/aurora/)                         |
| autotape                       | CHECKING                   | [live preview](https://quartz-themes.github.io/autotape/)                       |
| ayu-light-mirage               | CHECKING                   | [live preview](https://quartz-themes.github.io/ayu-light-mirage/)               |
| ayu-mirage                     | CHECKING                   | [live preview](https://quartz-themes.github.io/ayu-mirage/)                     |
| base2tone                      | CHECKING                   | [live preview](https://quartz-themes.github.io/base2tone/)                      |
| behave-dark                    | CHECKING                   | [live preview](https://quartz-themes.github.io/behave-dark/)                    |
| big-bold                       | CHECKING                   | [live preview](https://quartz-themes.github.io/big-bold/)                       |
| black                          | CHECKING                   | [live preview](https://quartz-themes.github.io/black/)                          |
| blackbird                      | CHECKING                   | [live preview](https://quartz-themes.github.io/blackbird/)                      |
| blossom                        | CHECKING                   | [live preview](https://quartz-themes.github.io/blossom/)                        |
| blue-topaz                     | CHECKING                   | [live preview](https://quartz-themes.github.io/blue-topaz/)                     |
| bolt                           | CHECKING                   | [live preview](https://quartz-themes.github.io/bolt/)                           |
| border                         | CHECKING                   | [live preview](https://quartz-themes.github.io/border/)                         |
| bossidian                      | CHECKING                   | [live preview](https://quartz-themes.github.io/bossidian/)                      |
| brainhack                      | CHECKING                   | [live preview](https://quartz-themes.github.io/brainhack/)                      |
| brutalism                      | CHECKING                   | [live preview](https://quartz-themes.github.io/brutalism/)                      |
| buena-vista                    | CHECKING                   | [live preview](https://quartz-themes.github.io/buena-vista/)                    |
| carbon                         | CHECKING                   | [live preview](https://quartz-themes.github.io/carbon/)                         |
| cardstock                      | CHECKING                   | [live preview](https://quartz-themes.github.io/cardstock/)                      |
| catppuccin                     | CHECKING                   | [live preview](https://quartz-themes.github.io/catppuccin/)                     |
| celestial-night                | CHECKING                   | [live preview](https://quartz-themes.github.io/celestial-night/)                |
| charcoal                       | CHECKING                   | [live preview](https://quartz-themes.github.io/charcoal/)                       |
| chiaroscuroflow                | CHECKING                   | [live preview](https://quartz-themes.github.io/chiaroscuroflow/)                |
| christmas                      | CHECKING                   | [live preview](https://quartz-themes.github.io/christmas/)                      |
| cobalt-peacock                 | CHECKING                   | [live preview](https://quartz-themes.github.io/cobalt-peacock/)                 |
| colored-candy                  | CHECKING                   | [live preview](https://quartz-themes.github.io/colored-candy/)                  |
| comfort-color-dark             | CHECKING                   | [live preview](https://quartz-themes.github.io/comfort-color-dark/)             |
| comfort-dark                   | CHECKING                   | [live preview](https://quartz-themes.github.io/comfort-dark/)                   |
| comfort-smooth                 | CHECKING                   | [live preview](https://quartz-themes.github.io/comfort-smooth/)                 |
| comfort                        | CHECKING                   | [live preview](https://quartz-themes.github.io/comfort/)                        |
| covert                         | CHECKING                   | [live preview](https://quartz-themes.github.io/covert/)                         |
| creature                       | CHECKING                   | [live preview](https://quartz-themes.github.io/creature/)                       |
| creme-brulee                   | CHECKING                   | [live preview](https://quartz-themes.github.io/creme-brulee/)                   |
| cyber-glow                     | CHECKING                   | [live preview](https://quartz-themes.github.io/cyber-glow/)                     |
| cybertron-shifted              | CHECKING                   | [live preview](https://quartz-themes.github.io/cybertron-shifted/)              |
| cybertron                      | CHECKING                   | [live preview](https://quartz-themes.github.io/cybertron/)                      |
| dark-castle                    | CHECKING                   | [live preview](https://quartz-themes.github.io/dark-castle/)                    |
| dark-clarity                   | CHECKING                   | [live preview](https://quartz-themes.github.io/dark-clarity/)                   |
| dark-graphite-pie              | CHECKING                   | [live preview](https://quartz-themes.github.io/dark-graphite-pie/)              |
| dark-graphite                  | CHECKING                   | [live preview](https://quartz-themes.github.io/dark-graphite/)                  |
| dark-moss                      | CHECKING                   | [live preview](https://quartz-themes.github.io/dark-moss/)                      |
| darkember                      | CHECKING                   | [live preview](https://quartz-themes.github.io/darkember/)                      |
| darkyan                        | CHECKING                   | [live preview](https://quartz-themes.github.io/darkyan/)                        |
| dawn                           | CHECKING                   | [live preview](https://quartz-themes.github.io/dawn/)                           |
| dayspring                      | CHECKING                   | [live preview](https://quartz-themes.github.io/dayspring/)                      |
| deeper-work                    | CHECKING                   | [live preview](https://quartz-themes.github.io/deeper-work/)                    |
| default                        | CHECKING                   | [live preview](https://quartz-themes.github.io/default/)                        |
| dekurai                        | CHECKING                   | [live preview](https://quartz-themes.github.io/dekurai/)                        |
| discordian                     | CHECKING                   | [live preview](https://quartz-themes.github.io/discordian/)                     |
| dracula-for-obsidian           | CHECKING                   | [live preview](https://quartz-themes.github.io/dracula-for-obsidian/)           |
| dracula-gemini                 | CHECKING                   | [live preview](https://quartz-themes.github.io/dracula-gemini/)                 |
| dracula-lyt                    | CHECKING                   | [live preview](https://quartz-themes.github.io/dracula-lyt/)                    |
| dracula-official               | CHECKING                   | [live preview](https://quartz-themes.github.io/dracula-official/)               |
| dracula-plus                   | CHECKING                   | [live preview](https://quartz-themes.github.io/dracula-plus/)                   |
| dracula-slim                   | CHECKING                   | [live preview](https://quartz-themes.github.io/dracula-slim/)                   |
| dune                           | CHECKING                   | [live preview](https://quartz-themes.github.io/dune/)                           |
| dunite                         | CHECKING                   | [live preview](https://quartz-themes.github.io/dunite/)                         |
| dynamic-color                  | CHECKING                   | [live preview](https://quartz-themes.github.io/dynamic-color/)                  |
| ebullientworks                 | CHECKING                   | [live preview](https://quartz-themes.github.io/ebullientworks/)                 |
| eldritch                       | CHECKING                   | [live preview](https://quartz-themes.github.io/eldritch/)                       |
| elegance                       | CHECKING                   | [live preview](https://quartz-themes.github.io/elegance/)                       |
| encore                         | CHECKING                   | [live preview](https://quartz-themes.github.io/encore/)                         |
| ethereon                       | CHECKING                   | [live preview](https://quartz-themes.github.io/ethereon/)                       |
| everblush                      | CHECKING                   | [live preview](https://quartz-themes.github.io/everblush/)                      |
| everforest-enchanted           | CHECKING                   | [live preview](https://quartz-themes.github.io/everforest-enchanted/)           |
| everforest                     | CHECKING                   | [live preview](https://quartz-themes.github.io/everforest/)                     |
| evergreen-shadow               | CHECKING                   | [live preview](https://quartz-themes.github.io/evergreen-shadow/)               |
| evilred                        | CHECKING                   | [live preview](https://quartz-themes.github.io/evilred/)                        |
| faded                          | CHECKING                   | [live preview](https://quartz-themes.github.io/faded/)                          |
| feather                        | CHECKING                   | [live preview](https://quartz-themes.github.io/feather/)                        |
| firefly                        | CHECKING                   | [live preview](https://quartz-themes.github.io/firefly/)                        |
| flexoki                        | CHECKING                   | [live preview](https://quartz-themes.github.io/flexoki/)                        |
| focus                          | CHECKING                   | [live preview](https://quartz-themes.github.io/focus/)                          |
| fusion                         | CHECKING                   | [live preview](https://quartz-themes.github.io/fusion/)                         |
| garden-gnome-adwaita-gtk       | CHECKING                   | [live preview](https://quartz-themes.github.io/garden-gnome-adwaita-gtk/)       |
| gdct-dark                      | CHECKING                   | [live preview](https://quartz-themes.github.io/gdct-dark/)                      |
| gdct                           | CHECKING                   | [live preview](https://quartz-themes.github.io/gdct/)                           |
| github-theme                   | CHECKING                   | [live preview](https://quartz-themes.github.io/github-theme/)                   |
| githubdhc                      | CHECKING                   | [live preview](https://quartz-themes.github.io/githubdhc/)                      |
| gitsidian                      | CHECKING                   | [live preview](https://quartz-themes.github.io/gitsidian/)                      |
| golden-topaz                   | CHECKING                   | [live preview](https://quartz-themes.github.io/golden-topaz/)                   |
| green-nightmare                | CHECKING                   | [live preview](https://quartz-themes.github.io/green-nightmare/)                |
| gummy-revived                  | CHECKING                   | [live preview](https://quartz-themes.github.io/gummy-revived/)                  |
| halcyon                        | CHECKING                   | [live preview](https://quartz-themes.github.io/halcyon/)                        |
| heboric                        | CHECKING                   | [live preview](https://quartz-themes.github.io/heboric/)                        |
| hipstersmoothie                | CHECKING                   | [live preview](https://quartz-themes.github.io/hipstersmoothie/)                |
| hulk                           | CHECKING                   | [live preview](https://quartz-themes.github.io/hulk/)                           |
| ia-writer                      | CHECKING                   | [live preview](https://quartz-themes.github.io/ia-writer/)                      |
| ib-writer                      | CHECKING                   | [live preview](https://quartz-themes.github.io/ib-writer/)                      |
| iceberg                        | CHECKING                   | [live preview](https://quartz-themes.github.io/iceberg/)                        |
| improved-potato                | CHECKING                   | [live preview](https://quartz-themes.github.io/improved-potato/)                |
| ion                            | CHECKING                   | [live preview](https://quartz-themes.github.io/ion/)                            |
| its-theme                      | CHECKING                   | [live preview](https://quartz-themes.github.io/its-theme/)                      |
| jotter                         | CHECKING                   | [live preview](https://quartz-themes.github.io/jotter/)                         |
| kakano                         | CHECKING                   | [live preview](https://quartz-themes.github.io/kakano/)                         |
| kanagawa                       | CHECKING                   | [live preview](https://quartz-themes.github.io/kanagawa/)                       |
| kiwi-mono                      | CHECKING                   | [live preview](https://quartz-themes.github.io/kiwi-mono/)                      |
| kurokula                       | CHECKING                   | [live preview](https://quartz-themes.github.io/kurokula/)                       |
| latex                          | CHECKING                   | [live preview](https://quartz-themes.github.io/latex/)                          |
| lavender-mist                  | CHECKING                   | [live preview](https://quartz-themes.github.io/lavender-mist/)                  |
| lemons-theme                   | CHECKING                   | [live preview](https://quartz-themes.github.io/lemons-theme/)                   |
| light-bright                   | CHECKING                   | [live preview](https://quartz-themes.github.io/light-bright/)                   |
| listive                        | CHECKING                   | [live preview](https://quartz-themes.github.io/listive/)                        |
| lorens                         | CHECKING                   | [live preview](https://quartz-themes.github.io/lorens/)                         |
| lumines                        | CHECKING                   | [live preview](https://quartz-themes.github.io/lumines/)                        |
| lyt-mode                       | CHECKING                   | [live preview](https://quartz-themes.github.io/lyt-mode/)                       |
| mado-11                        | CHECKING                   | [live preview](https://quartz-themes.github.io/mado-11/)                        |
| mado-miniflow                  | CHECKING                   | [live preview](https://quartz-themes.github.io/mado-miniflow/)                  |
| magicuser                      | CHECKING                   | [live preview](https://quartz-themes.github.io/magicuser/)                      |
| mammoth                        | CHECKING                   | [live preview](https://quartz-themes.github.io/mammoth/)                        |
| maple                          | CHECKING                   | [live preview](https://quartz-themes.github.io/maple/)                          |
| material-flat                  | CHECKING                   | [live preview](https://quartz-themes.github.io/material-flat/)                  |
| material-gruvbox               | CHECKING                   | [live preview](https://quartz-themes.github.io/material-gruvbox/)               |
| material-ocean                 | CHECKING                   | [live preview](https://quartz-themes.github.io/material-ocean/)                 |
| micro-mike                     | CHECKING                   | [live preview](https://quartz-themes.github.io/micro-mike/)                     |
| midnight-fjord                 | CHECKING                   | [live preview](https://quartz-themes.github.io/midnight-fjord/)                 |
| midnight                       | CHECKING                   | [live preview](https://quartz-themes.github.io/midnight/)                       |
| minimal-edge                   | CHECKING                   | [live preview](https://quartz-themes.github.io/minimal-edge/)                   |
| minimal-resources              | CHECKING                   | [live preview](https://quartz-themes.github.io/minimal-resources/)              |
| minimal                        | CHECKING                   | [live preview](https://quartz-themes.github.io/minimal/)                        |
| mint-breeze                    | CHECKING                   | [live preview](https://quartz-themes.github.io/mint-breeze/)                    |
| mistymauve                     | CHECKING                   | [live preview](https://quartz-themes.github.io/mistymauve/)                     |
| mono-black-monochrome-charcoal | CHECKING                   | [live preview](https://quartz-themes.github.io/mono-black-monochrome-charcoal/) |
| monochroyou                    | CHECKING                   | [live preview](https://quartz-themes.github.io/monochroyou/)                    |
| monokai                        | CHECKING                   | [live preview](https://quartz-themes.github.io/monokai/)                        |
| moonlight                      | CHECKING                   | [live preview](https://quartz-themes.github.io/moonlight/)                      |
| muted-blue                     | CHECKING                   | [live preview](https://quartz-themes.github.io/muted-blue/)                     |
| nebula                         | CHECKING                   | [live preview](https://quartz-themes.github.io/nebula/)                         |
| neo                            | CHECKING                   | [live preview](https://quartz-themes.github.io/neo/)                            |
| neon-synthwave                 | CHECKING                   | [live preview](https://quartz-themes.github.io/neon-synthwave/)                 |
| neovim                         | CHECKING                   | [live preview](https://quartz-themes.github.io/neovim/)                         |
| neuborder                      | CHECKING                   | [live preview](https://quartz-themes.github.io/neuborder/)                      |
| nier                           | CHECKING                   | [live preview](https://quartz-themes.github.io/nier/)                           |
| nightfox                       | CHECKING                   | [live preview](https://quartz-themes.github.io/nightfox/)                       |
| nightingale                    | CHECKING                   | [live preview](https://quartz-themes.github.io/nightingale/)                    |
| nobb                           | CHECKING                   | [live preview](https://quartz-themes.github.io/nobb/)                           |
| nordic                         | CHECKING                   | [live preview](https://quartz-themes.github.io/nordic/)                         |
| northern-sky                   | CHECKING                   | [live preview](https://quartz-themes.github.io/northern-sky/)                   |
| notation-2                     | CHECKING                   | [live preview](https://quartz-themes.github.io/notation-2/)                     |
| notation                       | CHECKING                   | [live preview](https://quartz-themes.github.io/notation/)                       |
| notswift                       | CHECKING                   | [live preview](https://quartz-themes.github.io/notswift/)                       |
| novadust                       | CHECKING                   | [live preview](https://quartz-themes.github.io/novadust/)                       |
| obsidian-boom                  | CHECKING                   | [live preview](https://quartz-themes.github.io/obsidian-boom/)                  |
| obsidian-gruvbox               | CHECKING                   | [live preview](https://quartz-themes.github.io/obsidian-gruvbox/)               |
| obsidian-nord                  | CHECKING                   | [live preview](https://quartz-themes.github.io/obsidian-nord/)                  |
| obsidian_ia                    | CHECKING                   | [live preview](https://quartz-themes.github.io/obsidian_ia/)                    |
| obsidianite                    | CHECKING                   | [live preview](https://quartz-themes.github.io/obsidianite/)                    |
| obsidianotion                  | CHECKING                   | [live preview](https://quartz-themes.github.io/obsidianotion/)                  |
| obuntu                         | CHECKING                   | [live preview](https://quartz-themes.github.io/obuntu/)                         |
| oistnb                         | CHECKING                   | [live preview](https://quartz-themes.github.io/oistnb/)                         |
| oldsidian-purple               | CHECKING                   | [live preview](https://quartz-themes.github.io/oldsidian-purple/)               |
| oliviers-theme                 | CHECKING                   | [live preview](https://quartz-themes.github.io/oliviers-theme/)                 |
| ono-sendai                     | CHECKING                   | [live preview](https://quartz-themes.github.io/ono-sendai/)                     |
| oreo                           | CHECKING                   | [live preview](https://quartz-themes.github.io/oreo/)                           |
| origin                         | CHECKING                   | [live preview](https://quartz-themes.github.io/origin/)                         |
| pale                           | CHECKING                   | [live preview](https://quartz-themes.github.io/pale/)                           |
| panic-mode                     | CHECKING                   | [live preview](https://quartz-themes.github.io/panic-mode/)                     |
| penumbra                       | CHECKING                   | [live preview](https://quartz-themes.github.io/penumbra/)                       |
| perso                          | CHECKING                   | [live preview](https://quartz-themes.github.io/perso/)                          |
| phoenix                        | CHECKING                   | [live preview](https://quartz-themes.github.io/phoenix/)                        |
| pine-forest-berry              | CHECKING                   | [live preview](https://quartz-themes.github.io/pine-forest-berry/)              |
| pink-topaz                     | CHECKING                   | [live preview](https://quartz-themes.github.io/pink-topaz/)                     |
| pisum                          | CHECKING                   | [live preview](https://quartz-themes.github.io/pisum/)                          |
| pln                            | CHECKING                   | [live preview](https://quartz-themes.github.io/pln/)                            |
| poimandres                     | CHECKING                   | [live preview](https://quartz-themes.github.io/poimandres/)                     |
| polka                          | CHECKING                   | [live preview](https://quartz-themes.github.io/polka/)                          |
| primary                        | CHECKING                   | [live preview](https://quartz-themes.github.io/primary/)                        |
| prime                          | CHECKING                   | [live preview](https://quartz-themes.github.io/prime/)                          |
| prism                          | CHECKING                   | [live preview](https://quartz-themes.github.io/prism/)                          |
| proper-dark                    | CHECKING                   | [live preview](https://quartz-themes.github.io/proper-dark/)                    |
| protocolblue                   | CHECKING                   | [live preview](https://quartz-themes.github.io/protocolblue/)                   |
| prussian-blue                  | CHECKING                   | [live preview](https://quartz-themes.github.io/prussian-blue/)                  |
| pure                           | CHECKING                   | [live preview](https://quartz-themes.github.io/pure/)                           |
| purple-aurora                  | CHECKING                   | [live preview](https://quartz-themes.github.io/purple-aurora/)                  |
| purple-owl                     | CHECKING                   | [live preview](https://quartz-themes.github.io/purple-owl/)                     |
| pxld                           | CHECKING                   | [live preview](https://quartz-themes.github.io/pxld/)                           |
| qlean                          | CHECKING                   | [live preview](https://quartz-themes.github.io/qlean/)                          |
| red-graphite                   | CHECKING                   | [live preview](https://quartz-themes.github.io/red-graphite/)                   |
| refined-default                | CHECKING                   | [live preview](https://quartz-themes.github.io/refined-default/)                |
| reshi                          | CHECKING                   | [live preview](https://quartz-themes.github.io/reshi/)                          |
| retronotes                     | CHECKING                   | [live preview](https://quartz-themes.github.io/retronotes/)                     |
| reverie                        | CHECKING                   | [live preview](https://quartz-themes.github.io/reverie/)                        |
| rezin                          | CHECKING                   | [live preview](https://quartz-themes.github.io/rezin/)                          |
| rift                           | CHECKING                   | [live preview](https://quartz-themes.github.io/rift/)                           |
| rmaki                          | CHECKING                   | [live preview](https://quartz-themes.github.io/rmaki/)                          |
| rose-pine-moon                 | CHECKING                   | [live preview](https://quartz-themes.github.io/rose-pine-moon/)                 |
| rose-pine                      | CHECKING                   | [live preview](https://quartz-themes.github.io/rose-pine/)                      |
| rose-red                       | CHECKING                   | [live preview](https://quartz-themes.github.io/rose-red/)                       |
| royal-velvet                   | CHECKING                   | [live preview](https://quartz-themes.github.io/royal-velvet/)                   |
| salem                          | CHECKING                   | [live preview](https://quartz-themes.github.io/salem/)                          |
| sanctum-reborn                 | CHECKING                   | [live preview](https://quartz-themes.github.io/sanctum-reborn/)                 |
| sanctum                        | CHECKING                   | [live preview](https://quartz-themes.github.io/sanctum/)                        |
| sandover                       | CHECKING                   | [live preview](https://quartz-themes.github.io/sandover/)                       |
| sandstorm                      | CHECKING                   | [live preview](https://quartz-themes.github.io/sandstorm/)                      |
| sanguine                       | CHECKING                   | [live preview](https://quartz-themes.github.io/sanguine/)                       |
| sea-glass                      | CHECKING                   | [live preview](https://quartz-themes.github.io/sea-glass/)                      |
| seamless-view                  | CHECKING                   | [live preview](https://quartz-themes.github.io/seamless-view/)                  |
| serika                         | CHECKING                   | [live preview](https://quartz-themes.github.io/serika/)                         |
| shade-sanctuary                | CHECKING                   | [live preview](https://quartz-themes.github.io/shade-sanctuary/)                |
| shiba-inu                      | CHECKING                   | [live preview](https://quartz-themes.github.io/shiba-inu/)                      |
| shimmering-focus               | CHECKING                   | [live preview](https://quartz-themes.github.io/shimmering-focus/)               |
| simple                         | CHECKING                   | [live preview](https://quartz-themes.github.io/simple/)                         |
| simplicity                     | CHECKING                   | [live preview](https://quartz-themes.github.io/simplicity/)                     |
| sodalite                       | CHECKING                   | [live preview](https://quartz-themes.github.io/sodalite/)                       |
| solarized                      | CHECKING                   | [live preview](https://quartz-themes.github.io/solarized/)                      |
| solitude                       | CHECKING                   | [live preview](https://quartz-themes.github.io/solitude/)                       |
| soloing                        | CHECKING                   | [live preview](https://quartz-themes.github.io/soloing/)                        |
| soothe                         | CHECKING                   | [live preview](https://quartz-themes.github.io/soothe/)                         |
| space                          | CHECKING                   | [live preview](https://quartz-themes.github.io/space/)                          |
| sparkling-day                  | CHECKING                   | [live preview](https://quartz-themes.github.io/sparkling-day/)                  |
| sparkling-night                | CHECKING                   | [live preview](https://quartz-themes.github.io/sparkling-night/)                |
| sparkling-wisdom               | CHECKING                   | [live preview](https://quartz-themes.github.io/sparkling-wisdom/)               |
| spectrum-blue                  | CHECKING                   | [live preview](https://quartz-themes.github.io/spectrum-blue/)                  |
| spectrum                       | CHECKING                   | [live preview](https://quartz-themes.github.io/spectrum/)                       |
| spring                         | CHECKING                   | [live preview](https://quartz-themes.github.io/spring/)                         |
| sqdthone                       | CHECKING                   | [live preview](https://quartz-themes.github.io/sqdthone/)                       |
| strict                         | CHECKING                   | [live preview](https://quartz-themes.github.io/strict/)                         |
| subtlegold                     | CHECKING                   | [live preview](https://quartz-themes.github.io/subtlegold/)                     |
| suddha                         | CHECKING                   | [live preview](https://quartz-themes.github.io/suddha/)                         |
| synthwave-84                   | CHECKING                   | [live preview](https://quartz-themes.github.io/synthwave-84/)                   |
| synthwave                      | CHECKING                   | [live preview](https://quartz-themes.github.io/synthwave/)                      |
| terminal                       | CHECKING                   | [live preview](https://quartz-themes.github.io/terminal/)                       |
| theme-that-shall-not-be-named  | CHECKING                   | [live preview](https://quartz-themes.github.io/theme-that-shall-not-be-named/)  |
| things                         | CHECKING                   | [live preview](https://quartz-themes.github.io/things/)                         |
| tiniri                         | CHECKING                   | [live preview](https://quartz-themes.github.io/tiniri/)                         |
| tokyo-night-storm              | CHECKING                   | [live preview](https://quartz-themes.github.io/tokyo-night-storm/)              |
| tokyo-night                    | CHECKING                   | [live preview](https://quartz-themes.github.io/tokyo-night/)                    |
| tomorrow-night-bright          | CHECKING                   | [live preview](https://quartz-themes.github.io/tomorrow-night-bright/)          |
| tomorrow                       | CHECKING                   | [live preview](https://quartz-themes.github.io/tomorrow/)                       |
| toms-theme                     | CHECKING                   | [live preview](https://quartz-themes.github.io/toms-theme/)                     |
| trace-labs                     | CHECKING                   | [live preview](https://quartz-themes.github.io/trace-labs/)                     |
| transient                      | CHECKING                   | [live preview](https://quartz-themes.github.io/transient/)                      |
| typewriter                     | CHECKING                   | [live preview](https://quartz-themes.github.io/typewriter/)                     |
| typomagical                    | CHECKING                   | [live preview](https://quartz-themes.github.io/typomagical/)                    |
| typora-vue                     | CHECKING                   | [live preview](https://quartz-themes.github.io/typora-vue/)                     |
| ukiyo                          | CHECKING                   | [live preview](https://quartz-themes.github.io/ukiyo/)                          |
| ultra-lobster                  | CHECKING                   | [live preview](https://quartz-themes.github.io/ultra-lobster/)                  |
| underwater                     | CHECKING                   | [live preview](https://quartz-themes.github.io/underwater/)                     |
| ursa                           | CHECKING                   | [live preview](https://quartz-themes.github.io/ursa/)                           |
| vanilla-amoled-color           | CHECKING                   | [live preview](https://quartz-themes.github.io/vanilla-amoled-color/)           |
| vanilla-amoled                 | CHECKING                   | [live preview](https://quartz-themes.github.io/vanilla-amoled/)                 |
| vanilla-palettes               | CHECKING                   | [live preview](https://quartz-themes.github.io/vanilla-palettes/)               |
| vauxhall                       | CHECKING                   | [live preview](https://quartz-themes.github.io/vauxhall/)                       |
| velvet-moon                    | CHECKING                   | [live preview](https://quartz-themes.github.io/velvet-moon/)                    |
| venom                          | CHECKING                   | [live preview](https://quartz-themes.github.io/venom/)                          |
| vicious                        | CHECKING                   | [live preview](https://quartz-themes.github.io/vicious/)                        |
| violet-evening                 | CHECKING                   | [live preview](https://quartz-themes.github.io/violet-evening/)                 |
| virgo                          | CHECKING                   | [live preview](https://quartz-themes.github.io/virgo/)                          |
| w95                            | CHECKING                   | [live preview](https://quartz-themes.github.io/w95/)                            |
| wasp                           | CHECKING                   | [live preview](https://quartz-themes.github.io/wasp/)                           |
| wilcoxone                      | CHECKING                   | [live preview](https://quartz-themes.github.io/wilcoxone/)                      |
| willemstad                     | CHECKING                   | [live preview](https://quartz-themes.github.io/willemstad/)                     |
| wiselight                      | CHECKING                   | [live preview](https://quartz-themes.github.io/wiselight/)                      |
| wombat                         | CHECKING                   | [live preview](https://quartz-themes.github.io/wombat/)                         |
| wy-console                     | CHECKING                   | [live preview](https://quartz-themes.github.io/wy-console/)                     |
| wyrd                           | CHECKING                   | [live preview](https://quartz-themes.github.io/wyrd/)                           |
| yue                            | CHECKING                   | [live preview](https://quartz-themes.github.io/yue/)                            |
| zario                          | CHECKING                   | [live preview](https://quartz-themes.github.io/zario/)                          |
| zenburn                        | CHECKING                   | [live preview](https://quartz-themes.github.io/zenburn/)                        |
| 🔔-chime                       | CHECKING                   | [live preview](https://quartz-themes.github.io/🔔-chime/)                       |

<!--
## Specification

WIP
-->
