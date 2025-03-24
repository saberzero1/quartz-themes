# Neovim

[Neovim](https://slavamak.com)

## Preview

[Open live preview](https://quartz-themes.github.io/neovim/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- neovim
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh neovim
```

```bash
just theme neovim
```
