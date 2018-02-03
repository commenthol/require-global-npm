# require-global-npm

> require npm from the global install

No need to install `npm` in your project as it's already here...

## Usage

e.g. running `npm info require-global-npm` without cli

```js
var npm = requireNpm()
npm.load((err, _npm) => {
  _npm.commands.view(['require-global-npm'], true, (err, data) => {
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
