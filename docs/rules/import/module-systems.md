# Import: Module Systems



## [import/no-commonjs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md)

- report commonjs `require` calls and `module.exports` or `exports.*`

``````javascript
{ 'import/no-commonjs': 'off' }
``````



## [import/no-amd](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md)

- report amd `require` and `define` calls

``````javascript
{ 'import/no-amd': 'error' }
``````

``````javascript
/** CORRECT USAGE */

import 'foo' from 'foo';
const bar = require('bar');


/** INCORRECT USAGE */

define(['foo', 'bar'], (foo, bar) => { /* ... */ });
require(['foo', 'bar'], (foo, bar) => { /* ... */ });
``````



## [import/no-nodejs-modules](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md)

- no node.js builtin modules

``````javascript
{ 'import/no-nodejs-modules': 'off' }
``````

