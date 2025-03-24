# Dayspring

[Dayspring](https://github.com/erykwalder)

## Preview

[Open live preview](https://quartz-themes.github.io/dayspring/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- dayspring
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh dayspring
```

```bash
just theme dayspring
```
