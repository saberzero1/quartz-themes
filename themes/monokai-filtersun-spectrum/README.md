# monokai-filtersun-spectrum

- Theme: monokai-filtersun-spectrum
- Author: <a href="https://soldaini.net" target="_blank" rel="noopener noreferrer">Luca Soldini</a>

## Preview

[Open live preview (Quartz)](https://quartz-themes.github.io/monokai-filtersun-spectrum/)

[Open live preview (Publish)](https://publish.saberzero.one/monokai-filtersun-spectrum)

## Usage (Quartz)

### npm package (Recommended)

```bash
npm install @quartz-themes/core @quartz-themes/monokai-filtersun-spectrum
```

Then add the plugin to your `quartz.config.yaml`:

```yaml
plugins:
  - source: "@quartz-themes/core"
    options:
      theme: "monokai-filtersun-spectrum"
      mode: "both"
```

### GitHub Actions (Legacy)

```yaml
env:
  THEME_NAME: monokai-filtersun-spectrum
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install (Legacy)

Copy [\_index.scss](./_index.scss) into your Quartz repository's `quartz/styles/themes/` directory. (Create the `themes` directory if it does not exist.)

Then, add the following to your `quartz/styles/custom.scss` file after the `@use "base";` line:

```scss
@use "themes";
```

> [!IMPORTANT]
> For dark-only or light-only themes, remember to remove `Component.Darkmode()` from your `quartz.config.ts` file.

## Usage (Publish)

Download the [publish.css](./publish.css) file and copy it into your Obsidian Publish vault.

Then, in Obsidian Publish, open the Publish modal and select the `publish.css` file and click the "Publish" button at the bottom.
