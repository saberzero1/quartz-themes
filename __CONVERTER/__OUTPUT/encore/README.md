# Encore

[Encore](https://lucaschampagne.dev/)

## Preview

[Open live preview](https://quartz-themes.github.io/encore/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- encore
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh encore
```

```bash
just theme encore
```
