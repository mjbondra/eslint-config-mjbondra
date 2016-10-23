# Variables



## [init-declarations](http://eslint.org/docs/rules/init-declarations)

- require or disallow initialization in `var` declarations

``````javascript
{ 'init-declarations': 'off' }
``````



## [no-catch-shadow](http://eslint.org/docs/rules/no-catch-shadow)

- disallow `catch` clause parameters from shadowing variables in the outer scope

``````javascript
{ 'no-catch-shadow': 'off' }
``````



## [no-delete-var](http://eslint.org/docs/rules/no-delete-var)

- disallow deleting variables

``````javascript
{ 'no-delete-var': 'error' }
``````

`````javascript
/** CORRECT USAGE */

let a = { b: true };
delete a.b;


/** INCORRECT USAGE */

let a = true;
delete a;
`````



## [no-label-var](http://eslint.org/docs/rules/no-label-var)

- disallow labels that share a name with a variable
- use of labels is disallowed by `no-labels` rule

``````javascript
{ 'no-label-var': 'off' }
``````



## [no-restricted-globals](http://eslint.org/docs/rules/no-restricted-globals)

- disallow specified global variables

``````javascript
{ 'no-restricted-global': 'off' }
``````



## [no-shadow-restricted-names](http://eslint.org/docs/rules/no-shadow-restricted-names)

- disallow identifiers from shadowing restricted names

``````javascript
{ 'no-shadow-restricted-names': 'error' }
``````

``````javascript
/** INCORRECT USAGE */

function NaN () {}
(function (Infinity) {})(foo)
let undefined;
try {} catch (eval) {}
``````



## [no-shadow](http://eslint.org/docs/rules/no-shadow)

- disallow `var` declarations from shadowing variables in the outer scope

``````javascript
{ 'no-shadow': 'error' }
``````

``````javascript
/** CORRECT USAGE */

let foo = 3;
function bar () {
  let baz = 10;
}


/** INCORRECT USAGE */

let foo = 3;
function bar () {
  let foo = 10;
}

function baz (qux) {
  qux = 5;
}
baz(qux);
``````



## [no-undef-init](http://eslint.org/docs/rules/no-undef-init)

- disallow initializing variables to `undefined`
  - allows `const` to initialize `undefined` as a value 

``````javascript
{ 'no-undef-init': 'error' }
``````

``````javascript
/** CORRECT USAGE */

let foo;
const bar = undefined;


/** INCORRECT USAGE */

let foo = undefined;
``````



## [no-undef](http://eslint.org/docs/rules/no-undef)

- disallow the use of undeclared variables unless mentioned in `/*global */` comments

``````javascript
{ 'no-undef': 'error' }
``````

``````Javascript
/** CORRECT USAGE */

let foo;
foo = true;


/** INCORRECT USAGE */

foo = true;
``````



## [no-undefined](http://eslint.org/docs/rules/no-undefined)

- disallow the use of `undefined` as an identifier

``````javascript
{ 'no-undefined': 'off' }
``````



## [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars)

- disallow unused variables
  - checks only that locally-declared variables are used but will allow global variables to be unused
  - only the last argument must be used

``````javascript
{ 'no-unused-vars': ['error', { vars: 'local', args: 'after-used' }] }
``````

``````javascript
/** CORRECT USAGE */

let foo = true;
bar(foo);


/** INCORRECT USAGE */

let foo = true;
``````



## [no-use-before-define](http://eslint.org/docs/rules/no-use-before-define)

- disallow the use of variables before they are defined
  - allows references to functions before they are defined

```javascript
{ 'no-use-before-define': ['error', 'nofunc'] }
```

``````javascript
/** CORRECT USAGE */

let foo = true;
bar(foo);
function bar () {}


/** INCORRECT USAGE */

bar(foo);
let foo = true;
``````

