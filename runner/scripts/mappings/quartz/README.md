# Mapping structure

```json
{
  "<set-name>": [
    {
      "source": "<source-selector>",
      "quartz": "<target-selector>",
      "publish": "<target-selector>",
      "values": [
        "<direct-mapping>",
        { "source": "<source-value>", "target": "<target-value>" }
      ]
    }
  ]
}
```

## Example

```json
{
  "callouts": [
    {
      "source": "div.callout",
      "quartz": ".callout",
      "publish": ".callout",
      "values": [
        "background-color",
        { "source": "caret-color", "target": "color" }
      ]
    }
  ]
}
```
