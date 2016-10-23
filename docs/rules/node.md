# Node.js and CommonJS



## [callback-return](http://eslint.org/docs/rules/callback-return)

- require `return` statements after callbacks

``````javascript
{ 'callback-return': 'off' }
``````



## [global-require](http://eslint.org/docs/rules/global-require)

- require `require()` calls to be placed at top-level module scope

``````javascript
{ 'global-require': 'error' }
``````

``````javascript
/** CORRECT USAGE */

const foo = require('foo');
function bar () {
  foo.baz(qux);
}


/** INCORRECT USAGE */

function bar () {
  const foo = require('foo');
  foo.baz(qux);
}
``````



## [handle-callback-err](http://eslint.org/docs/rules/handle-callback-err)

- require error handling in callbacks
  - requires handling of `err` and `error` when they are the first argument of a callback

``````javascript
{ 'handle-callback-err': ['error', '^(err|error)$' ] }
``````

``````javascript
/** CORRECT USAGE */

function (err, data) {
  if (err) {} // handle error
  return data;
}

function (error, data) {
  if (error) {} // handle error
  return data;
}


/** INCORRECT USAGE */

function (err, data) {
  return data;
}

function (error, data) {
  return data;
}

``````



## [no-mixed-requires](http://eslint.org/docs/rules/no-mixed-requires)

- disallow `require` calls to be mixed with regular `var` declarations

``````javascript
{ 'no-mixed-requires': 'off' }
``````



## [no-new-require](http://eslint.org/docs/rules/no-new-require)

- disallow `new` operators with calls to `require`

``````javascript
{ 'no-new-require': 'error' }
``````

``````javascript
/** CORRECT USAGE */

const Foo = require('foo');
const foo = new Foo();


/** INCORRECT USAGE */

const foo = new require('foo')();
``````



## [no-path-concat](http://eslint.org/docs/rules/no-path-concat)

- disallow string concatenation with `__dirname` and `__filename`

``````javascript
{ 'no-path-concat': 'error' }
``````

``````javascript
/** CORRECT USAGE */

const foo = path.join(__dirname, 'bar.js');
const bar = path.join('baz', __filename);


/** INCORRECT USAGE */

const foo = __dirname + '/bar.js';
const bar = 'baz/' + __filename;
``````



## [no-process-env](http://eslint.org/docs/rules/no-process-env)

- disallow the use of `process.env`

``````javascript
{ 'no-process-env': 'off' }
``````



## [no-process-exit](http://eslint.org/docs/rules/no-process-exit)

- disallow the use of `process.exit()`

``````javascript
{ 'no-process-exit': 'off' }
``````



## [no-restricted-modules](http://eslint.org/docs/rules/no-restricted-modules)

- disallow specified modules when loaded by `require`

``````javascript
{ 'no-restricted-modules': 'off' }
``````



## [no-restricted-properties](http://eslint.org/docs/rules/no-restricted-properties)

- disallow certain properties on certain objects

``````javascript
{ 'no-restricted-properties': 'off' }
``````



## [no-sync](http://eslint.org/docs/rules/no-sync)

- disallow synchronous methods

``````javascript
{ 'no-sync': 'off' }
``````

