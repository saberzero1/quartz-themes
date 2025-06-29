# mono black (monochrome, charcoal)

- Theme: mono black (monochrome, charcoal)
- Author: <a href="https://github.com/ZeChArtiahSaher" target="_blank" rel="noopener noreferrer">zc</a>

## Preview

[Open live preview](https://quartz-themes.github.io/mono-black-monochrome-charcoal/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: mono-black-monochrome-charcoal
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Automatic install into Quartz repository

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh mono-black-monochrome-charcoal
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
