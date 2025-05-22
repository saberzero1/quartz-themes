# Mado 11

[Mado 11](https://github.com/hydescarf/Obsidian-Theme-Mado-11)

## Preview

[Open live preview](https://quartz-themes.github.io/mado-11/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: mado-11
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh mado-11
```

### Install script (Advanced)

After installing:

```bash
npm run theme mado-11
```
