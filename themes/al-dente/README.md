# Al Dente

[Al Dente](#)

## Preview

[Open live preview](https://quartz-themes.github.io/al-dente/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: al-dente
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh al-dente
```

### Install script (Advanced)

After installing:

```bash
npm run theme al-dente
```
