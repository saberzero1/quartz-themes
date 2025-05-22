# Aura Dark

[Aura Dark](https://github.com/Possibly-Matt/obsidian-aura-theme)

## Preview

[Open live preview](https://quartz-themes.github.io/aura-dark/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: aura-dark
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh aura-dark
```

### Install script (Advanced)

After installing:

```bash
npm run theme aura-dark
```
