# Mono High Contrast

[Mono High Contrast](https://github.com/manuelcoca)

## Preview

[Open live preview](https://quartz-themes.github.io/mono-high-contrast/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: mono-high-contrast
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh mono-high-contrast
```

### Install script (Advanced)

After installing:

```bash
npm run theme mono-high-contrast
```
