# Behave dark

[Behave dark](https://gitlab.com/chrismettal)

## Preview

[Open live preview](https://quartz-themes.github.io/behave-dark/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- behave-dark
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh behave-dark
```

```bash
just theme behave-dark
```
