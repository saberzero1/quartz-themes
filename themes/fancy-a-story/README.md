# Fancy-a-Story

[Fancy-a-Story](https://github.com/ElsaTam)

## Preview

[Open live preview](https://quartz-themes.github.io/fancy-a-story/)

## Usage

### GitHub Actions

```yaml
env:
  THEME_NAME: fancy-a-story
```

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- $THEME_NAME
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh fancy-a-story
```

### Install script (Advanced)

After installing:

```bash
npm run theme fancy-a-story
```
