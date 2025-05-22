# Enhanced file explorer tree

[Enhanced file explorer tree](https://github.com/LennZone)

## Preview

[Open live preview](https://quartz-themes.github.io/enhanced-file-explorer-tree/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: enhanced-file-explorer-tree
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh enhanced-file-explorer-tree
```

### Install script (Advanced)

After installing:

```bash
npm run theme enhanced-file-explorer-tree
```
