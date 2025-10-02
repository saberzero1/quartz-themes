# Spy Terminal

- Theme: Spy Terminal
- Author: <a href="buymeacoffee.com/saeli" target="_blank" rel="noopener noreferrer">IchiroFukuda</a>

## Preview

[Open live preview (Quartz)](https://quartz-themes.github.io/spy-terminal/)

[Open live preview (Publish)](https://publish.saberzero.one/spy-terminal)

## Usage (Quartz)

### GitHub Actions

```yaml
env:
  THEME_NAME: spy-terminal
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Automatic install into Quartz repository

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh spy-terminal
```

### Manual install

Copy [\_index.scss](./_index.scss) into your Quartz repository's `quartz/styles/themes/` directory. (Create the `themes` directory if it does not exist.)

Then, add the following to your `quartz/styles/custom.scss` file after the `@use "base";` line:

```scss
@use "themes";
```

> [!IMPORTANT]
> For dark-only or light-only themes, remember to remove `Component.Darkmode()` from your `quartz.config.ts` file.

### Quartz Syncer

> [!IMPORTANT]
> This setup method is not yet available. It is currently being tested and will be released in the future.

## Usage (Publish)

Download the [publish.css](./publish.css) file and copy it into your Obsidian Publish vault.

Then, in Obsidian Publish, open the Publish modal and select the `publish.css` file and click the "Publish" button at the bottom.
