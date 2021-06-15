# UV-UI-Lib

## Getting Started

- `npm install uv-ui-lib`
- Add `@import "~uv-ui-lib/src/lib/scss/_styles.scss";` to `src/styles.scss`
- In order to use the assets from the library, change the `assets` property of the respective builder in `angular.json`:
```
"assets": [
  "src/favicon.ico",
  "src/assets",
    {
        "glob": "**/*",
        "input": "./node_modules/uv-ui-lib/src/lib/assets/",
        "output": "./"
    }
]
``` 
Now, you should be able to access the icons from the library with `"icons/<svg path here>"`


