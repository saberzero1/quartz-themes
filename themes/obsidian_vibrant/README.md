# obsidian_vibrant

[obsidian_vibrant](https://github.com/JamesLemony)

## Preview

[Open live preview](https://quartz-themes.github.io/obsidian_vibrant/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: obsidian_vibrant
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh obsidian_vibrant
```

### Install script (Advanced)

After installing:

```bash
npm run theme obsidian_vibrant
```
