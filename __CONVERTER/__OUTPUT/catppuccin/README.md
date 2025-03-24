# Catppuccin

[Catppuccin](https://github.com/catppuccin/obsidian)

## Preview

[Open live preview](https://quartz-themes.github.io/catppuccin/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- catppuccin
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh catppuccin
```

### Install script (Advanced)

After installing:

```bash
npm run theme catppuccin
```
