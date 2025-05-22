# Mado Miniflow

[Mado Miniflow](https://github.com/hydescarf/Obsidian-Theme-Mado-Miniflow)

## Preview

[Open live preview](https://quartz-themes.github.io/mado-miniflow/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: mado-miniflow
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh mado-miniflow
```

### Install script (Advanced)

After installing:

```bash
npm run theme mado-miniflow
```
