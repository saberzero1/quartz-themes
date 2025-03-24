# Lumines

[Lumines](https://github.com/Avesend)

## Preview

[Open live preview](https://quartz-themes.github.io/lumines/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- lumines
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh lumines
```

```bash
just theme lumines
```
