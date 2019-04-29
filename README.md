# require-global-npm

> require npm from the global install

No need to install `npm` in your project as it's already here...

## Usage

e.g. running `npm info require-global-npm` without cli

```js
var requireNpm = require('require-global-npm')
var npm = requireNpm()

npm.load((err, _npm) => {
  _npm.commands.info(['require-global-npm'], (err, data) => {
    // ...
  })
})
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install require-global-npm
```

## Tests

```sh
$ npm test
```

## License

Unlicense <https://unlicense.org>
