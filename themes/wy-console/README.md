# WY Console

[WY Console](https://www.buymeacoffee.com/Satchelmouth)

## Preview

[Open live preview](https://quartz-themes.github.io/wy-console/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: wy-console
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh wy-console
```

### Install script (Advanced)

After installing:

```bash
npm run theme wy-console
```
