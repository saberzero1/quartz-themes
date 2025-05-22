# Seamless View

[Seamless View](https://github.com/GustavoSZ124/Obsidian-Theme-Seamless-View)

## Preview

[Open live preview](https://quartz-themes.github.io/seamless-view/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: seamless-view
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh seamless-view
```

### Install script (Advanced)

After installing:

```bash
npm run theme seamless-view
```
