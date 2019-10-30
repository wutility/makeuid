# 📑 makeuid 
[![](https://data.jsdelivr.com/v1/package/npm/makeuid/badge)](https://www.jsdelivr.com/package/npm/makeuid) ![Snyk badge](https://snyk.io/test/github/haikelfazzani/makeuid/badge.svg) ![bundlephobia badge](https://badgen.net/bundlephobia/min/makeuid) ![bundlephobia badge](https://badgen.net/bundlephobia/minzip/makeuid)

✔️ Tiny utility to generate a unique id based on date and time

```js
npm i makeuid --save
```

## Usage
```js
import { makeuid, randStr } from 'makeuid'
// or
var { makeuid, randStr } = require('makeuid')
```

Or include it via jsDelivr CDN:
```html
<script src="https://cdn.jsdelivr.net/npm/makeuid@0.0.4/index.min.js"></script>
mk.makeuid() // 2019b10b30T12b25b54
```

## Methods & Examples
- **makeuid() : String**
```js
makeuid() // 2019b10b30T12b25b54
```
- **randStr(length : number) : String**
```js
randStr(5) // gJisd
```

## License
MIT