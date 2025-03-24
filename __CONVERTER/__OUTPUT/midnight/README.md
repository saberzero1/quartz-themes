# Midnight

[Midnight](https://github.com/SemiCirkle)

## Preview

[Open live preview](https://quartz-themes.github.io/midnight/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- midnight
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh midnight
```

```bash
just theme midnight
```
