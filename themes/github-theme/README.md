# GitHub Theme

[GitHub Theme](https://github.com/krios2146)

## Preview

[Open live preview](https://quartz-themes.github.io/github-theme/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- github-theme
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh github-theme
```

### Install script (Advanced)

After installing:

```bash
npm run theme github-theme
```
