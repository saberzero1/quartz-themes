# Jotter

[Jotter](https://github.com/lnbgc)

## Preview

[Open live preview](https://quartz-themes.github.io/jotter/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- jotter
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh jotter
```

```bash
just theme jotter
```
