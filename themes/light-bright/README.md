# Light & Bright

[Light & Bright](https://github.com/Bluemoondragon07)

## Preview

[Open live preview](https://quartz-themes.github.io/light-bright/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: light-bright
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh light-bright
```

### Install script (Advanced)

After installing:

```bash
npm run theme light-bright
```
