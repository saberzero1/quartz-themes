# Shimmering Focus

- Theme: Shimmering Focus
- Author: <a href="https://github.com/chrisgrieser/shimmering-focus" target="_blank" rel="noopener noreferrer">pseudometa aka Chris Grieser</a>
- Support the author: <a href="https://ko-fi.com/pseudometa" target="_blank" rel="noopener noreferrer">Ko-Fi</a> | <a href="https://www.paypal.me/ChrisGrieser" target="_blank" rel="noopener noreferrer">PayPal</a>

## Preview

[Open live preview](https://quartz-themes.github.io/shimmering-focus/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: shimmering-focus
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Automatic install into Quartz repository

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh shimmering-focus
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
