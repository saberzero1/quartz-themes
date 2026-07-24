# Shiba Inu

- Theme: Shiba Inu
- Author: <a href="https://github.com/faroukx" target="_blank" rel="noopener noreferrer">Farouk</a>

## Preview

[Open live preview (Quartz)](https://quartz-themes.github.io/shiba-inu/)

[Open live preview (Publish)](https://publish.saberzero.one/shiba-inu)

## Usage (Quartz)

### npm package (Recommended)

```bash
npm install @quartz-themes/core @quartz-themes/shiba-inu
```

Then add the plugin to your `quartz.config.yaml`:

```yaml
plugins:
  - source: "@quartz-themes/core"
    options:
      theme: "shiba-inu"
      mode: "both"
```

### GitHub Actions (Legacy)

```yaml
env:
  THEME_NAME: shiba-inu
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
