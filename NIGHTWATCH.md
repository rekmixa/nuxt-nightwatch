# Nightwatch

## Installation

https://nightwatchjs.org/gettingstarted/installation/

### Nightwatch

```bash
yarn add nightwatch --dev
```

### WebDriver

ChromeDriver  

```bash
yarn add chromedriver --dev
```

### package.json

Add to `scripts`:

```json
"nightwatch": "nightwatch"
```

## Run test

```bash
yarn nightwatch node_modules/nightwatch/examples/tests/ecosia.js --env chrome
```
