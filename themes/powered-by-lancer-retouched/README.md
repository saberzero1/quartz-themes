# Powered by Lancer - Retouched

- Theme: Powered by Lancer - Retouched
- Author: Cloopy

## Preview

[Open live preview (Quartz)](https://quartz-themes.github.io/powered-by-lancer-retouched/)

[Open live preview (Publish)](https://publish.saberzero.one/powered-by-lancer-retouched)

## Usage (Quartz)

### npm package (Recommended)

```bash
npm install @quartz-themes/core @quartz-themes/powered-by-lancer-retouched
```

Then add the plugin to your `quartz.config.yaml`:

```yaml
plugins:
  - source: "@quartz-themes/core"
    options:
      theme: "powered-by-lancer-retouched"
      mode: "both"
```

### GitHub Actions (Legacy)

```yaml
env:
  THEME_NAME: powered-by-lancer-retouched
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
