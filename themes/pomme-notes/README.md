# Pomme Notes

[Pomme Notes](https://medium.com/@paralloid)

## Preview

[Open live preview](https://quartz-themes.github.io/pomme-notes/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: pomme-notes
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh pomme-notes
```

### Install script (Advanced)

After installing:

```bash
npm run theme pomme-notes
```
