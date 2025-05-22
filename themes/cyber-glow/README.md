# Cyber Glow

[Cyber Glow](https://github.com/ArtexJay/Obsidian-CyberGlow)

## Preview

[Open live preview](https://quartz-themes.github.io/cyber-glow/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: cyber-glow
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh cyber-glow
```

### Install script (Advanced)

After installing:

```bash
npm run theme cyber-glow
```
