# Tokyo Night Storm

[Tokyo Night Storm](https://github.com/arozx)

## Preview

[Open live preview](https://quartz-themes.github.io/tokyo-night-storm/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: tokyo-night-storm
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh tokyo-night-storm
```

### Install script (Advanced)

After installing:

```bash
npm run theme tokyo-night-storm
```
