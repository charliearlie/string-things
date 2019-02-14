# string-things
![](https://img.shields.io/travis/com/charliearlie/string-things.svg?style=flat) ![](https://img.shields.io/david/charliearlie/string-things.svg?style=flat) ![](https://img.shields.io/bundlephobia/min/string-things.svg?style=flat) ![](https://img.shields.io/bundlephobia/minzip/string-things.svg?style=flat)

Simple string functions in one tiny bundle.

I found a work project using a 30kb library to kebab case a string which was of course too large, so I have tried to provide this function and more in a small package for my web projects.

## Usage

```
npm install string-things
```

or

```
yard add string-things
```

## Functions provided

### camelCase
```js
import { camelCase } from "string-things";

camelCase("fred bill and Ted");
// => "fredBillAndTed"



camelCase("some muddled u%p te$xt");
// => "someMuddledUpText"
```

### kebabCase
```js
import { kebabCase } from "string-things";

kebabCase("string things");
// => "string-things"

kebabCase("stringThings");
// => "string-things"

```

### capitaliseFirstLetter
```js
import { capitaliseFirstLetter } from "string-things";

capitaliseFirstLetter("charlie");
// => "Charlie"
```

## Actively maintained
Every time I need a string function, I will be adding it to this library. 
