# aged whisky

[aged whisky](https://github.com/incantatem2)

## Preview

[Open live preview](https://quartz-themes.github.io/aged-whisky/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: aged-whisky
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh aged-whisky
```

### Install script (Advanced)

After installing:

```bash
npm run theme aged-whisky
```
