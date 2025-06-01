# %OBSIDIAN_THEME_NAME%

- Theme: [%OBSIDIAN_THEME_NAME%](OBSIDIAN_THEME_URL%)
- Author: %OBSIDIAN_THEME_AUTHOR%
%OBSIDIAN_THEME_AUTHOR_DONATE_URL%

## Preview

[Open live preview](https://quartz-themes.github.io/%OBSIDIAN_THEME_NAME_SANITIZED%/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: %OBSIDIAN_THEME_NAME_SANITIZED%
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Automatic install into Quartz repository

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh %OBSIDIAN_THEME_NAME_SANITIZED%
```

### Manual install

Copy [_index.scss](./_index.scss) into your Quartz repository's `quartz/styles/themes/` directory. (Create the `themes` directory if it does not exist.)

Then, add the following to your `quartz/styles/custom.scss` file after the `@use "base";` line:

```scss
@use "themes";
```

> [!IMPORTANT] For dark-only or light-only themes, remember to remove `Component.Darkmode()` from your `quartz.config.ts` file.

### Quartz Syncer

> [!IMPORTANT]
> This setup method is not yet available. It is currently being tested and will be released in the future.
