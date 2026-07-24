# Rose Red

- Theme: Rose Red
- Author: <a href="https://github.com/tu2-atmanand" target="_blank" rel="noopener noreferrer">Atmanand Gauns</a>
- Support the author: <a href="https://buymeacoffee.com/tu2_atmanand" target="_blank" rel="noopener noreferrer">Buy Me a Coffee</a> | <a href="https://github.com/sponsors/tu2-atmanand" target="_blank" rel="noopener noreferrer">GitHub Sponsor</a> | <a href="https://paypal.me/tu2atmanand" target="_blank" rel="noopener noreferrer">Paypal</a> | <a href="https://ko-fi.com/atmanandgauns" target="_blank" rel="noopener noreferrer">ko-fi</a>

## Preview

[Open live preview (Quartz)](https://quartz-themes.github.io/rose-red/)

[Open live preview (Publish)](https://publish.saberzero.one/rose-red)

## Usage (Quartz)

### npm package (Recommended)

```bash
npm install @quartz-themes/core @quartz-themes/rose-red
```

Then add the plugin to your `quartz.config.yaml`:

```yaml
plugins:
  - source: "@quartz-themes/core"
    options:
      theme: "rose-red"
      mode: "dark"
```

### GitHub Actions (Legacy)

```yaml
env:
  THEME_NAME: rose-red
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
