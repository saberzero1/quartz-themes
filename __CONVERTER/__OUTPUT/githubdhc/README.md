# GitHubDHC

[GitHubDHC](https://github.com/ScottKirvan)

## Preview

[Open live preview](https://quartz-themes.github.io/githubdhc/)

## Usage

### GitHub Actions

```yaml
- name: Fetch Quartz Theme
  run: curl -s -S https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh | bash -s -- githubdhc
```

### Manual install

```bash
curl -s -S -o action.sh https://raw.githubusercontent.com/saberzero1/quartz-themes/master/action.sh

./action.sh githubdhc
```

```bash
just theme githubdhc
```
