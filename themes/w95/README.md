# W95

[W95](https://github.com/phchang)

## Preview

[Open live preview](https://quartz-themes.github.io/w95/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: w95
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh w95
```

### Install script (Advanced)

After installing:

```bash
npm run theme w95
```
