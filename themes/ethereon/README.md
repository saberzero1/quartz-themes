# Ethereon

- Theme: Ethereon
- Author: <a href="https://www.rohit04saluja.com" target="_blank" rel="noopener noreferrer">Rohit Saluja</a>
- Support the author: <a href="https://buymecoffee.rohit04saluja.com" target="_blank" rel="noopener noreferrer">Donate</a>

## Preview

[Open live preview](https://quartz-themes.github.io/ethereon/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: ethereon
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Automatic install into Quartz repository

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh ethereon
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
