module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    "selector-nested-pattern": null,
    "indentation": 2,
    "no-descending-specificity": null,
    "no-eol-whitespace": null,
    "declaration-empty-line-before": null,
    "value-keyword-case": null,
	"at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": [
          "tailwind",
          "apply",
		  "layer",
          "responsive",
          "variants",
          "screen",
          "use"
        ]
      }
    ]
  }
}