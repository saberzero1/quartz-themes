# Arzaba

- Theme: Arzaba
- Author: <a href="https://github.com/DarioArzaba" target="_blank" rel="noopener noreferrer">Dario Arzaba</a>


## Preview

[Open live preview (Quartz)](https://quartz-themes.github.io/arzaba/)

[Open live preview (Publish)](https://publish.saberzero.one/arzaba)

## Usage (Quartz)

### GitHub Actions

```yaml
env:
  THEME_NAME: arzaba
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Automatic install into Quartz repository

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh arzaba
```

### Manual install

Copy [_index.scss](./_index.scss) into your Quartz repository's `quartz/styles/themes/` directory. (Create the `themes` directory if it does not exist.)

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
