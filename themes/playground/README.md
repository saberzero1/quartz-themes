# Playground

[Playground](https://www.benjaminezequiel.com/)

## Preview

[Open live preview](https://quartz-themes.github.io/playground/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- playground
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh playground
```

### Install script (Advanced)

After installing:

```bash
npm run theme playground
```
