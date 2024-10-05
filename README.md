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

## Supported Themes

This list is ever expanding.

| Theme                                       | Flavors                                                                                                                                                                                  | Original Obsidian Theme                                                          |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [Catppuccin](themes/catppuccin/README.md)   | [Frappe](themes/catppuccin/frappe/README.md), [Latte](themes/catppuccin/latte/README.md), [Macchiato](themes/catppuccin/macchiato/README.md), [Mocha](themes/catppuccin/mocha/README.md) | [Obsidian Catppuccin](https://github.com/catppuccin/obsidian)                    |
| [Obsidian](themes/obsidian/README.md)       | [Dark](themes/obsidian/README.md#dark-1), [Light](themes/obsidian/README.md#light-1)                                                                                                     | [Obsidian.md](https://obsidian.md/)                                              |
| [Quartz](themes/quartz/README.md)           | [Dark](themes/quartz/README.md#dark-1), [Light](themes/quartz/README.md#light-1)                                                                                                         | [Quartz](https://github.com/jackyzha0/quartz)                                    |
| [Tokyo Night](themes/tokyo-night/README.md) | [Day](themes/tokyo-night/day/README.md), [Moon](themes/tokyo-night/moon/README.md), [Night](themes/tokyo-night/moon/README.md), [Storm](themes/tokyo-night/storm/README.md)              | [Obsidian and Tokyonight](https://github.com/tcmmichaelb139/obsidian-tokyonight) |

## Roadmap

> [!NOTE]
> Below list was taken from Obsidian's theme browser, sorted by number of installs. _Last updated: 2024-10-05_.

| Status                                  | Description                                      |
| --------------------------------------- | ------------------------------------------------ |
| $\textcolor{lime}{\textsf{DONE}}$       | Fully supported                                  |
| $\textcolor{yellow}{\textsf{PARTIAL}}$  | Partially supported (see theme page for details) |
| $\textcolor{violet}{\textsf{PLANNED}}$  | Planned                                          |
| $\textcolor{brown}{\textsf{BLOCKED}}$   | Waiting for upstream fixes                       |
| $\textcolor{darkgray}{\textsf{TODO}}$   | Not started                                      |
| $\textcolor{red}{\textsf{UNSUPPORTED}}$ | Won't support                                    |
| $\textcolor{red}{\textsf{BROKEN}}$      | Broken or removed from Obsidian                  |

| Obsidian Theme                              | Quartz Status                          |
| ------------------------------------------- | -------------------------------------- |
| [Default](themes/obsidian/README.md)        | $\textcolor{lime}{\textsf{DONE}}$      |
| Minimal                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Things                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| [Blue Topaz](#)                             | $\textcolor{violet}{\textsf{PLANNED}}$ |
| [Obsidian Nord](#)                          | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Atom                                        | $\textcolor{violet}{\textsf{PLANNED}}$ |
| [AnuPpuccin](#)                             | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Obsidianite                                 | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Wasp                                        | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Shimmering Focus                            | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Sanctum                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Typewriter                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Prism                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| [Obsidian gruvbox](#)                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| ITS Theme                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| [Dracula for Obsidian](#)                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Everforest                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| [Catppuccin](themes/catppuccin/README.md)   | $\textcolor{lime}{\textsf{DONE}}$      |
| [80s Neon](#)                               | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Cybertron                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Primary                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| [Tokyo Night](themes/tokyo-night/README.md) | $\textcolor{lime}{\textsf{DONE}}$      |
| Notation                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Solarized                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Border                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Ono Sendai                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Typomagical                                 | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Obuntu                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Terminal                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Red Graphite                                | $\textcolor{violet}{\textsf{PLANNED}}$ |
| [GitHub Theme](#)                           | $\textcolor{violet}{\textsf{PLANNED}}$ |
| [Dracula Official](#)                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| darkgray Topaz                              | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Golden Topaz                                | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Spectrum                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Cyber Glow                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Mado Miniflow                               | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Encore                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| LYT Mode                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Shiba Inu                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| PLN                                         | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Royal Velvet                                | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Ukiyo                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Material Gruvbox                            | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Dark Moss                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Discordian                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Ultra Lobster                               | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Reverie                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| obsidian_ia                                 | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Sodalite                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Mado 11                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Obsidianotion                               | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Willemstad                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Sandstorm                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Wyrd                                        | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Gitsidian                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Moonlight                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Typora-Vue                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Blackbird                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Maple                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Notation 2                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Light &amp; Bright                          | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Ebullientworks                              | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Pine Forest Berry                           | $\textcolor{violet}{\textsf{PLANNED}}$ |
| WY Console                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Aura                                        | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Dark Graphite Pie                           | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Dracula + LYT                               | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Pisum                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Comfort color dark                          | $\textcolor{violet}{\textsf{PLANNED}}$ |
| 🔔 Chime                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Nebula                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Flexoki                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Dune                                        | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Everforest Enchanted                        | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Sparkling Wisdom                            | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Vanilla AMOLED                              | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Material Flat                               | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Dawn                                        | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Firefly                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Suddha                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Adwaita                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Cardstock                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Bolt                                        | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Subtlegold                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Comfort Smooth                              | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Faded                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Mammoth                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Ursa                                        | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Fusion                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| WiseLight                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Vicious                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Kanagawa                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Simple                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Elegance                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Aurora                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Material Ocean                              | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Hipstersmoothie                             | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Behave dark                                 | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Sparkling Night                             | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Purple Aurora                               | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Proper Dark                                 | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Al Dente                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Kakano                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Rosé Pine Moon                              | $\textcolor{violet}{\textsf{PLANNED}}$ |
| deeper work                                 | $\textcolor{violet}{\textsf{PLANNED}}$ |
| iA Writer                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Neo                                         | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Feather                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Theme-That-Shall-Not-Be-Named               | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Dayspring                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Darkyan                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Dracula Gemini                              | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Big &amp; Bold                              | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Hulk                                        | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Listive                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Jotter                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| MagicUser                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Autotape                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| AbsoluteGruv                                | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Abyssal                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| ion                                         | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Purple Owl                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| SALEM                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Abecedarium                                 | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Obsidian Boom                               | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Simplicity                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Olivier’s Theme                             | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Violet Evening                              | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Dracula Slim                                | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Christmas                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Ayu Mirage                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Vauxhall                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Apatheia                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Everblush                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Buena Vista                                 | $\textcolor{violet}{\textsf{PLANNED}}$ |
| iB Writer                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Dark Graphite                               | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Zenburn                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Brutalism                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| GDCT                                        | $\textcolor{violet}{\textsf{PLANNED}}$ |
| monochroYOU                                 | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Micro Mike                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Panic Mode                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Creature                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Charcoal                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Apex                                        | $\textcolor{violet}{\textsf{PLANNED}}$ |
| halcyon                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Tom's Theme                                 | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Base2Tone                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| ProtocolBlue                                | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Dekurai                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Qlean                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Monokai                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Garden Gnome (Adwaita, GTK)                 | $\textcolor{violet}{\textsf{PLANNED}}$ |
| NeuBorder                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| GitHubDHC                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Polka                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Yue                                         | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Comfort                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Rmaki                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Heboric                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| NotSwift                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Nightfox                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| sQdthOne                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Nordic                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| SynthWave                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Cybertron Shifted                           | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Iceberg                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| LaTeX                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| WilcoxOne                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Tokyo Night Storm                           | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Dracula Plus                                | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Rosé Pine                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Lemons Theme                                | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Novadust                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Wombat                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Origin                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| GDCT Dark                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Synthwave '84                               | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Neovim                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Solitude                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Phoenix                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Comfort Dark                                | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Aura Dark                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Prime                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| W95                                         | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Carbon                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Pure                                        | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Tiniri                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| RetroNotes                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Atomus                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Sanctum reborn                              | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Rezin                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Soloing                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Tomorrow Night Bright                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Underwater                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Celestial Night                             | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Nightingale                                 | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Sanguine                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Zario                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Brainhack                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Pale - 淡                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Reshi                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Spring                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Transient                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Arcane                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Shade Sanctuary                             | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Green Nightmare                             | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Dunite                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Oldsidian Purple                            | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Vibrant                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Vanilla Palettes                            | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Soothe                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Minimal-Resources                           | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Sparkling Day                               | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Sandover                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Ayu Light &amp; Mirage                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Ethereon                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Penumbra                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Serika                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Covert                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Focus                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Nier                                        | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Allium                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| EvilRed                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Venom                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Sea Glass                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Poimandres                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| mono black (monochrome, charcoal)           | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Lumines                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Creme brulee                                | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Oozy                                        | $\textcolor{red}{\textsf{BROKEN}}$     |
| Strict                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Improved Potato                             | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Agate                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| DarkEmber                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Perso                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| MistyMauve                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Virgo                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Prussian Blue                               | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Oreo                                        | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Colored Candy                               | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Space                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Dark Clarity                                | $\textcolor{violet}{\textsf{PLANNED}}$ |
| chiaroscuroflow                             | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Seamless View                               | $\textcolor{violet}{\textsf{PLANNED}}$ |
| OISTNB                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Vanilla AMOLED Color                        | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Dynamic Color                               | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Aurora-Twilight                             | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Tomorrow                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| DarkNebula                                  | $\textcolor{red}{\textsf{BROKEN}}$     |
| Gummy-Revived                               | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Lorens                                      | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Adrenaline                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Minimal Edge                                | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Dark Castle                                 | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Neon Synthwave                              | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Pxld                                        | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Kiwi Mono                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Midnight                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Eldritch                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Rift                                        | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Blossom                                     | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Kurokula                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Abate                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Muted-Blue                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Cobalt Peacock                              | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Mint-Breeze                                 | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Lavender-Mist                               | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Spectrum Blue                               | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Northern-Sky                                | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Evergreen-Shadow                            | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Trace Labs                                  | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Bossidian                                   | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Black                                       | $\textcolor{violet}{\textsf{PLANNED}}$ |
| nobb                                        | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Velvet-Moon                                 | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Midnight-Fjord                              | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Refined Default                             | $\textcolor{violet}{\textsf{PLANNED}}$ |
| Rose Red                                    | $\textcolor{violet}{\textsf{PLANNED}}$ |

<!--
## Specification

WIP
-->
