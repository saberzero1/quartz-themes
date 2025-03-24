# Covert

[Covert](https://github.com/schrunchee)

## Preview

[Open live preview](https://quartz-themes.github.io/covert/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- covert
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh covert
```

```bash
just theme covert
```
