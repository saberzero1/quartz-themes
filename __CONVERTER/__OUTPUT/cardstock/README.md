# Cardstock

[Cardstock](https://github.com/cassidoo)

## Preview

[Open live preview](https://quartz-themes.github.io/cardstock/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- cardstock
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh cardstock
```

```bash
just theme cardstock
```
