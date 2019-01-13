# Node.js boilerplate - Typescript + Mocha + Nyc

> Because finally, we can

Result of a quick research on how to get Typescript code to test in Node.js with accurate code coverage reports and debugger.

Uses:
- [ts-node](https://www.npmjs.com/package/ts-node)
- [mocha](https://github.com/mochajs/mocha)
- [chai](https://github.com/chaijs/chai)
- [nyc](https://github.com/istanbuljs/nyc)

Includes:
- VSCode launcher


## Getting started

```
npm install

npm run build
npm run coverage
```


## What makes it work

- the `--require "ts-node/register"` argument, when running `_mocha`
- the `"require": ["ts-node/register"]` setting, in `.nycrc`
- the type declaration dependencies, such as `@types/sinon-chai`

## Kudos

Kudos:
- [Philip Beels boilerplate](https://github.com/philipbeel/example-typescript-nyc-mocha-coverage)
- [all the people trying hard out there, especially on stackoverflow](https://www.google.es/search?q=nodejs+nyc+mocha+typescript)
- [Unit testing node applications with TypeScript — using mocha and chai](https://journal.artfuldev.com/unit-testing-node-applications-with-typescript-using-mocha-and-chai-384ef05f32b2)
- [Continuous Integration with TypeScript + Mocha + Istanbul (NYC) + CircleCI](https://hcoelho.com/blog/60/Continuous_Integration_with_TypeScript_+_Mocha_+_Istanbul_(NYC)_+_CircleCI)


## [MIT License](LICENSE-MIT)

[Copyright (c) 2019 Andre Torgal](http://andrezero.mit-license.org/2019)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
