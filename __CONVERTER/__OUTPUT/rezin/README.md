# Rezin

[Rezin](https://github.com/NicolasGHS)

## Preview

[Open live preview](https://quartz-themes.github.io/rezin/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- rezin
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh rezin
```

```bash
just theme rezin
```
