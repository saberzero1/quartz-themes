# Flexoki

[Flexoki](https://twitter.com/kepano)

## Preview

[Open live preview](https://quartz-themes.github.io/flexoki/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- flexoki
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh flexoki
```

```bash
just theme flexoki
```
