# Autotape

[Autotape](https://rmv.fyi/)

## Preview

[Open live preview](https://quartz-themes.github.io/autotape/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- autotape
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh autotape
```

```bash
just theme autotape
```
