# Powered by Lancer

[Powered by Lancer](#)

## Preview

[Open live preview](https://quartz-themes.github.io/powered-by-lancer/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: powered-by-lancer
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh powered-by-lancer
```

### Install script (Advanced)

After installing:

```bash
npm run theme powered-by-lancer
```
