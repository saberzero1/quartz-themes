# Old World

[Old World](https://github.com/double-tilde)

## Preview

[Open live preview](https://quartz-themes.github.io/old-world/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: old-world
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh old-world
```

### Install script (Advanced)

After installing:

```bash
npm run theme old-world
```
