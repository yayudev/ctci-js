# Cracking the coding interview - Typescript solutions

This repo is a collection of solutions for Cracking the coding interview 6th edition written using typescript.

So why is it called ctci.js instead of ctci.ts? Mostly because all of this are written using typescript just for convenience, but this code should be easily transformed into js by just removing the types. I won't use any feature that's not available in regular javascript so every solution can be applied on js without any problems.

## Installation

Just install the packages! Don't worry, we won't use packages for actually solving the problems, just to run the tests.

```sh
$ yarn install
```

## Tests

You can run the test by running

```sh
$ yarn test
```

If you want to target a single problem you can do it by using their path

```sh
$ yarn test <chapter>/<problem>
```

For example, `yarn test chapter-01/01-isUnique`

## License

MIT
