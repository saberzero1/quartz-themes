# %OBSIDIAN_THEME_NAME%

[%OBSIDIAN_THEME_NAME%](%OBSIDIAN_THEME_URL%)

## Preview

[Open live preview](https://quartz-themes.github.io/%OBSIDIAN_THEME_NAME_SANITIZED%/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- %OBSIDIAN_THEME_NAME_SANITIZED%
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh %OBSIDIAN_THEME_NAME_SANITIZED%
```

```bash
just theme %OBSIDIAN_THEME_NAME_SANITIZED%
```
