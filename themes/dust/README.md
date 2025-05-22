# Dust

[Dust](https://github.com/PedroHenrique17)

## Preview

[Open live preview](https://quartz-themes.github.io/dust/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: dust
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh dust
```

### Install script (Advanced)

After installing:

```bash
npm run theme dust
```
