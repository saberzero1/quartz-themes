# Gummy-Revived

[Gummy-Revived](#)

## Preview

[Open live preview](https://quartz-themes.github.io/gummy-revived/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: gummy-revived
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh gummy-revived
```

### Install script (Advanced)

After installing:

```bash
npm run theme gummy-revived
```
