# Rose Red

- Theme: [Rose Red](OBSIDIAN_THEME_URL%)
- Author: <a href="https://github.com/tu2-atmanand" target="_blank" rel="noopener noreferrer">Atmanand Gauns</a>
- Support the author: <a href="https://buymeacoffee.com/tu2_atmanand" target="_blank" rel="noopener noreferrer">Buy Me a Coffee</a> | <a href="https://github.com/sponsors/tu2-atmanand" target="_blank" rel="noopener noreferrer">GitHub Sponsor</a> | <a href="https://paypal.me/tu2atmanand" target="_blank" rel="noopener noreferrer">Paypal</a> | <a href="https://ko-fi.com/atmanandgauns" target="_blank" rel="noopener noreferrer">ko-fi</a>

## Preview

[Open live preview](https://quartz-themes.github.io/rose-red/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: rose-red
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Automatic install into Quartz repository

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh rose-red
```

### Manual install

Copy [\_index.scss](./_index.scss) into your Quartz repository's `quartz/styles/themes/` directory. (Create the `themes` directory if it does not exist.)

Then, add the following to your `quartz/styles/custom.scss` file after the `@use "base";` line:

```scss
@use "themes";
```

> [!IMPORTANT] For dark-only or light-only themes, remember to remove `Component.Darkmode()` from your `quartz.config.ts` file.

### Quartz Syncer

> [!IMPORTANT]
> This setup method is not yet available. It is currently being tested and will be released in the future.
