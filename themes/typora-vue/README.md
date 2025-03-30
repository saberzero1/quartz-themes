# Typora-Vue

[Typora-Vue](https://github.com/ZekunC)

## Preview

[Open live preview](https://quartz-themes.github.io/typora-vue/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- typora-vue
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh typora-vue
```

### Install script (Advanced)

After installing:

```bash
npm run theme typora-vue
```
