# Possible Errors



## [no-cond-assign](http://eslint.org/docs/rules/no-cond-assign)

- disallow assignment operators in conditional expressions
  - allows assignments in test conditions *only if* they are enclosed in parentheses

```javascript
{ 'no-cond-assign': 'error' }
```

```javascript
/** CORRECT USE */

// comparison
if (node.value === 'foo') {}

// assignment enclosed in parentheses
while ((node = node.parent)) {}


/** INCORRECT USE */

// unintentional assignment
if (node.value = 'foo') {}

// assignment not enclosed in parentheses
while (node = node.parent) {}

```



## [no-console](http://eslint.org/docs/rules/no-console)

- disallow the use of `console`

```javascript
{ 'no-console': 'error' }
```

```javascript
/** CORRECT USE */

// non-native console methods
winston.log('debug', 'foo');
winston.debug('bar');
winston.info('baz');
winston.error('foobar');


/** INCORRECT USE */

// console methods
console.log('foo');
console.debug('bar');
console.info('baz');
console.error('foobar');

```



## [no-constant-condition](http://eslint.org/docs/rules/no-constant-condition)

- disallow constant expressions in conditions
  - allows constant expressions in loops

```javascript
{ 'no-constant-condition': ['error', { checkLoops: false }] }
```

```javascript
/** CORRECT USE */

// variable expression in condition
if (!!value) {}

// constant expression in loop condition
while (true) {
  break;
}


/** INCORRECT USE */

// constant expression in condition
if (true) {}

```



## [no-control-regex](http://eslint.org/docs/rules/no-control-regex)

- disallow control characters in regular expressions

```javascript
{ 'no-control-regex': 'error' }
```

```javascript
/** CORRECT USE */

const foo = /\x20/;
const bar = new RegExp('\x20');


/** INCORRECT USE */

const foo = /\x1f/;
const bar = new RegExp('\x1f');

```



## [no-debugger](http://eslint.org/docs/rules/no-debugger)

- disallow the use of `debugger`

```javascript
{ 'no-debugger': 'error' }
```

```javascript
/** INCORRECT USE */

debugger;

```



## [no-dupe-args](http://eslint.org/docs/rules/no-dupe-args)

- disallow duplicate arguments in `function` definitions

```javascript
{ 'no-dupe-args': 'error' }
```

```javascript
/** CORRECT USE */

function foo (a, b, c) {}


/** INCORRECT USE */

function foo (a, b, a) {}

```



## [no-dupe-keys](http://eslint.org/docs/rules/no-dupe-keys)

- disallow duplicate keys in object literals

```javascript
{ 'no-dupe-keys': 'error' }
```

```javascript
/** CORRECT USE */

const foo = {
  bar: true,
  baz: 1,
  qux: 'foobar'
};


/** INCORRECT USE */

const foo = {
  bar: true,
  baz: 1,
  bar: 'foobar'
};

```



## [no-duplicate-case](http://eslint.org/docs/rules/no-duplicate-case)

- disallow duplicate case labels

```javascript
{ 'no-duplicate-case': 'error' }
```

```javascript
/** CORRECT USE */

switch (foo) {
  case 1:
    break;
  case 2:
    break;
  default:
    break;
}


/** INCORRECT USE */

switch (foo) {
  case 1:
    break;
  case 1:
    break;
  default:
    break;
}

```



## [no-empty-character-class](http://eslint.org/docs/rules/no-empty-character-class)

- disallow empty character classes in regular expressions

```javascript
'no-empty-character-class': 'error'
```

```javascript
/** CORRECT USE */

/^abc[a-z]/.test('abcdefg');
'abcdefg'.match(/^abc[a-z]/);


/** INCORRECT USE */

/^abc[]/.test('abcdefg');
'abcdefg'.match(/^abc[]/);

```



## [no-empty](http://eslint.org/docs/rules/no-empty)

- disallow empty block statements
  - allows empty `catch` clauses

```javascript
{ 'no-empty': ['error', { allowEmptyCatch: true }] }
```

```javascript
/** CORRECT USE */

// block
if (bar) {
  foo();
}

// empty catch block
try {
  foo();
} catch (err) {}


/** INCORRECT USE */

// empty block
if (bar) {}

```



## [no-ex-assign](http://eslint.org/docs/rules/no-ex-assign)

- disallow reassigning exceptions in `catch` clauses

```javascript
{ 'no-ex-assign': 'error' }
```

```javascript
/** CORRECT USE */

try {
  foo();
} catch (err) {
  const e = 1;
}


/** INCORRECT USE */

try {
  foo();
} catch (err) {
  err = 1;
}

```



## [no-extra-boolean-cast](http://eslint.org/docs/rules/no-extra-boolean-cast)

- disallow unnecessary boolean casts

```javascript
{ 'no-extra-boolean-cast': 'error' }
```

```javascript
/** CORRECT USAGE */

// implicit boolean coercion
const foo = prop ? 1 : 0;
if (prop) { }

// explicit boolean coercion
function bar (prop) {
  return !prop;
}


/** INCORRECT USAGE */

// explicit and implicit boolean coercion
const foo = !!prop ? 1 : 0;
if (!!prop) { }

// extraneous explicit boolean coercion
function bar (prop) {
  return !!!prop;
}

```



## [no-extra-parens](http://eslint.org/docs/rules/no-extra-parens)

- disallow unnecessary parentheses
  - allows extra parentheses around assignments in conditional test expressions
  - allows extra parentheses around assignments in `return` statements
  - allows extra parentheses in nested binary expressions

```javascript
{  
  'no-extra-parens': ['error', 'all', {
    conditionalAssign: false,
    returnAssign: false,
    nestedBinaryExpressions: false
  }]
}
```

```javascript
/** CORRECT USAGE */

// no unnecessary parentheses
const foo = b * c;
typeof foo;

// parentheses around conditional assignment
while ((bar = foobar())) {
  bar.foo();
}

// parenthesis around return assignment
const bar = () => (qux = false)

// parenthesis around nested binary expressions
const baz = a + (b * c);


/** INCORRECT USAGE */

// unnecessary parentheses
const foo = (b * c);
typeof (foo);

```



## [no-extra-semi](http://eslint.org/docs/rules/no-extra-semi)

- disallow unnecessary semicolons

```javascript
{ 'no-extra-semi': 'error' }
```

```javascript
/** CORRECT USAGE */

// single semicolon
const foo = true;

// semicolon after function expression
const bar = val => {
  return !!val;
};


/** INCORRECT USAGE */

// multiple semicolons
const foo = true;;

// semicolon after function statement
function bar (val) {
  return !!val;
};

```



## [no-func-assign](http://eslint.org/docs/rules/no-func-assign)

- disallow reassigning `function` declarations

```javascript
{ 'no-func-assign': 'error' }
```

```javascript
/** CORRECT USAGE */

// function expression
let foo = val => !!val;
foo = false;


/** INCORRECT USAGE */

// function declaration
function bar (val) { return !!val; }
bar = false;

```



## [no-inner-declarations](http://eslint.org/docs/rules/no-inner-declarations)

- disallow `function` or `var` declarations in nested blocks

```javascript
{ 'no-inner-declarations': ['error', 'both'] }
```

```javascript
/** CORRECT USAGE */

// block scope declarations
if (foo) {
  const bar = true;
  const baz = val => !!val;
}


/** INCORRECT USAGE */

// global/function scope declarations
if (foo) {
  var bar = true;
  function baz (val) { return !!val; }
}

```



## [no-invalid-regexp](http://eslint.org/docs/rules/no-invalid-regexp)

- disallow invalid regular expression strings in `RegExp` constructors

```javascript
{ 'no-invalid-regexp': 'error' }
```

```javascript
/** CORRECT USAGE */

// valid expression
new RegExp('.');

// valid expression and flag
new RegExp('.', 'g');


/** INCORRECT USAGE */

// invalid expression
new RegExp('[');

// valid expression and invalid flag
new RegExp('.', 'z');

```



## [no-irregular-whitespace](http://eslint.org/docs/rules/no-irregular-whitespace)

- disallow irregular whitespace outside of strings

```javascript
{ 'no-irregular-whitespace': 'error' }
```

```javascript
/** CORRECT USAGE */

// irregular whitespace in string
const foo = 'a﻿b'; // a\ufeffb


/** INCORRECT USAGE */

// irregular whitespace
﻿ // \ufeff

```



## [no-obj-calls](http://eslint.org/docs/rules/no-obj-calls)

- disallow calling global object properties as functions

```javascript
{ 'no-obj-calls': 'error' }
```

```javascript
/** CORRECT USAGE */

function area (radius) {
    return Math.PI * radius * radius;
}
const object = JSON.parse('{}');


/** INCORRECT USAGE */

const math = Math();
const json = JSON();

```



## [no-prototype-builtins](http://eslint.org/docs/rules/no-prototype-builtins)

- disallow calling some `Object.prototype` methods directly on objects

```javascript
{ 'no-prototype-builtins': 'error' }
```

```javascript
/** CORRECT USAGE */

{}.hasOwnProperty.call(foo, 'bar');
{}.isPrototypeOf.call(foo, bar);
{}.propertyIsEnumerable.call(foo, 'bar');


/** INCORRECT USAGE */

foo.hasOwnProperty('bar');
foo.isPrototypeOf(bar);
foo.propertyIsEnumerable('bar');

```



## [no-regex-spaces](http://eslint.org/docs/rules/no-regex-spaces)

- disallow multiple spaces in regular expressions

```javascript
{ 'no-regex-spaces': 'error' }
```

```javascript
/** CORRECT USAGE */

/foo {3}bar/;
new RegExp('foo {3}bar');


/** INCORRECT USAGE */

/foo   bar/;
new RegExp('foo   bar');

```



## [no-sparse-arrays](http://eslint.org/docs/rules/no-sparse-arrays)

- disallow sparse arrays

```javascript
{ 'no-sparse-arrays': 'error' }
```

```javascript
/** CORRECT USAGE */

// intentional sparse array
const foo = new Array(5);


/** INCORRECT USAGE */

// intentional sparse array
const foo = [,,,,,];

// unintentional sparse array
const bar = ['foo', 'bar', , 'baz'];

```



## [no-template-curly-in-string](http://eslint.org/docs/rules/no-template-curly-in-string)

- disallow template literal placeholder syntax in regular strings

```javascript
{ 'no-template-curly-in-string': 'error' }
```

```javascript
/** CORRECT USAGE */

// backticks
`Hello ${name}!`;


/** INCORRECT USAGE */

// single quotes
'Hello ${name}!';

// double quotes
"Hello ${name}!";

```



## [no-unexpected-multiline](http://eslint.org/docs/rules/no-unexpected-multiline)

- disallow confusing multiline expressions

```javascript
{ 'no-unexpected-multiline': 'error' }
```

```javascript
/** CORRECT USAGE */

const foo = bar;
(1 || 2).baz();

const bar = 'world';
[1, 2, 3].forEach(addNumber);

const baz = () => {};
`hello`;


/** INCORRECT USAGE */

const foo = bar
(1 || 2).baz();

const bar = 'world'
[1, 2, 3].forEach(addNumber);

const baz = () => {}
`hello`

```



## [no-unreachable](http://eslint.org/docs/rules/no-unreachable)

- disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
  - allows for references to hoisted variables and functions

```javascript
{ 'no-unreachable': 'error' }
```

```javascript
/** CORRECT USAGE */

// hoisted function
function foo () {
  return bar;
  function bar () {}
}


/** INCORRECT USAGE */

function foo () {
  return true;
  bar();
}

function bar () {
  throw new Error();
  foo();
}

while (true) {
  break;
  bar();
}

```



## [no-unsafe-finally](http://eslint.org/docs/rules/no-unsafe-finally)

- disallow `return`, `throw`, `break`, and `continue` statements in `finally` blocks
  - allows indirect usages, such as in `function` or `class` definitions

```javascript
{ 'no-unsafe-finally': 'error' }
```

```javascript
/** CORRECT USAGE */

try {
  return 1;
} catch (err) {
  return 2;
} finally {
  foo();
}


/** INCORRECT USAGE */

try {
  return 1;
} catch (err) {
  return 2;
} finally {
  return foo();
}

```



## [no-unsafe-negation](http://eslint.org/docs/rules/no-unsafe-negation)

- disallow negating the left operand of `in` and `instanceof` operators.

```javascript
{ 'no-unsafe-negation': 'error' }
```

```javascript
/** CORRECT USAGE */

if (!(key in object)) {}
if (!(obj instanceof Ctor)) {}
if(('' + !key) in object) {}


/** INCORRECT USAGE */

if (!key in object) {}
if (!obj instanceof Ctor) {}

```



## [use-isnan](http://eslint.org/docs/rules/use-isnan)

- require calls to `isNaN()` when checking for `NaN`

```javascript
{ 'use-isnan': 'error' }
```

```javascript
/** CORRECT USAGE */

if (isNaN(foo)) {}
if (!isNaN(foo)) {}


/** INCORRECT USAGE */

if (foo === NaN) {}
if (foo !== NaN) {}

```



## [valid-jsdoc](http://eslint.org/docs/rules/valid-jsdoc)

- enforce valid JSDoc comments

```javascript
{ 'valid-jsdoc': 'off' }
```





## [valid-typeof](http://eslint.org/docs/rules/valid-typeof)

- enforce comparing `typeof` expressions against valid strings
  - requires `typeof` expressions to only be compared to string literals or other `typeof` expressions, and disallows comparisons to any other value

```javascript
{ 'valid-typeof': ['error', { requireStringLiterals: true }] }
```

```javascript
/** CORRECT USAGE */

typeof foo === 'undefined';
typeof bar === 'object';
typeof baz === 'string';
typeof bar === typeof qux;


/** INCORRECT USAGE */

typeof foo === undefined;
typeof bar === Object;
typeof baz === 'strnig';
typeof qux === 'some invalid type';
typeof baz === anotherVariable;
typeof foo === 5;

```
