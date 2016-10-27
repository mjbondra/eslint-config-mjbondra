# Best Practices



## [accessor-pairs](http://eslint.org/docs/rules/accessor-pairs)

- enforce getter and setter pairs in objects
  - allows getters without setters

```javascript
{ 'accessor-pairs': 'error' }
```

```javascript
/** CORRECT USAGE */

const foo = {
  set bar (value) {
    this.val = value;
  },
  get bar () {
    return this.val;
  }
};

Object.defineProperty(foo, 'bar', {
  set: function(value) {
    this.val = value;
  },
  get: function() {
    return this.val;
  }
});


/** INCORRECT USAGE */

const foo = {
  set bar (value) {
    this.val = value;
  }
};

Object.defineProperty(foo, 'bar', {
  set (value) {
    this.val = value;
  }
});

```



## [array-callback-return](http://eslint.org/docs/rules/array-callback-return)

- enforce `return` statements in callbacks of array methods
  - [`Array.from`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.from)
  - [`Array.prototype.every`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.every)
  - [`Array.prototype.filter`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.filter)
  - [`Array.prototype.find`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.find)
  - [`Array.prototype.findIndex`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.findIndex)
  - [`Array.prototype.map`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.map)
  - [`Array.prototype.reduce`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.reduce)
  - [`Array.prototype.reduceRight`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.reduceRight)
  - [`Array.prototype.some`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.some)
  - [`Array.prototype.sort`](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.sort)

```javascript
{ 'array-callback-return': 'error' }
```

```javascript
/** CORRECT USAGE */

const indexMap = myArray.reduce((memo, item, index) => {
  memo[item] = index;
  return memo;
}, {});

const foo = Array.from(nodes, node => {
  if (node.tagName === 'DIV') {
    return true;
  }
  return false;
});

const bar = foo.map(node => node.getAttribute("id"));


/** INCORRECT USAGE */

const indexMap = myArray.reduce((memo, item, index) => {
  memo[item] = index;
}, {});

const foo = Array.from(nodes, node => {
  if (node.tagName === 'DIV') {
    return true;
  }
});

const bar = foo.filter(x => {
  if (x) {
    return true;
  } else {
    return;
  }
});
```



## [block-scoped-var](http://eslint.org/docs/rules/block-scoped-var)

- enforce the use of variables within the scope they are defined
- use of `var` is disallowed by `no-var` rule

```javascript
{ 'block-scoped-var': 'off' }
```





## [class-methods-use-this](http://eslint.org/docs/rules/class-methods-use-this)

- enforce that class methods utilize `this`
  - allows exemptions for constructors and static methods

```javascript
{ 'class-methods-use-this': 'error' }
```

```javascript
/** CORRECT USAGE */

class Foo {

  // constructor
  constructor () {
    console.log('Hello World');
  }

  // method
  bar () {
    this.baz = 'Hello World';
    console.log(this.baz);
  }

  // static method
  static qux () {
    console.log('Hello World');
  }
}


/** INCORRECT USAGE */

class Foo {

  // method
  bar () {
	console.log("Hello World");
  }
}

```



## [complexity](http://eslint.org/docs/rules/complexity)

- enforce a maximum cyclomatic complexity allowed in a program

```javascript
{ complexity: 'off' }
```



## [consistent-return](http://eslint.org/docs/rules/consistent-return)

- require `return` statements to either always or never specify values
  - exempts function definitions where the name begins with an uppercase letter

```javascript
{ 'consistent-return': 'error' }
```

```javascript
/** CORRECT USAGE */

function foo (bar) {
  if (bar) {
    return true;
  } else {
    return false;
  }
}

function Ctor () {
  if (!(this instanceof Ctor)) {
    return new Ctor();
  }

  this.foo = true;
}


/** INCORRECT USAGE */

function foo (bar) {
  if (bar) {
    return true;
  } else {
    return;
  }
}

function baz (qux) {
  if (qux) {
    return true;
  }
}

```



## [curly](http://eslint.org/docs/rules/curly)

- enforce consistent brace style for all control statements
  - allow brace-less single-line `if`, `else if`, `else`, `for`, `while`, or `do`, while still enforcing the use of curly braces for other instances

```javascript
{ curly: ['error', 'multi-line'] }
```

```javascript
/** CORRECT USAGE */

if (foo) foo++; else doSomething();

if (foo) foo++;
else if (bar) baz()
else doSomething();

do something();
while (foo);

while (foo
  && bar) baz();

if (foo) {
  foo++;
}

if (foo) { foo++; }

while (true) {
  doSomething();
  doSomethingElse();
}


/** INCORRECT USAGE */

if (foo)
  doSomething();
else
  doSomethingElse();

if (foo) foo(
  bar,
  baz);

```



## [default-case](http://eslint.org/docs/rules/default-case)

- require `default` cases in `switch` statements
  - allows omission of `default` case so long as there is a comment indicating the omission is intentional

```javascript
{ 'default-case': ['error', { commentPattern: '^no default$' }]} }
```

```javascript
/** CORRECT USAGE */

switch (foo) {
  case 1:
    bar();
    break;

  default:
    baz();
    break;
}

switch (foo) {
  case 1:
    bar();
    break;

  // no default
}


/** INCORRECT USAGE */

switch (foo) {
  case 1:
 	bar();
    break;
}

```



## [dot-location](http://eslint.org/docs/rules/dot-location)

- enforce consistent newlines before and after dots
  - requires that the dot in a member expression be on the same line as the property portion

```javascript
{ 'dot-location': ['error', 'property'] }
```

```javascript
/** CORRECT USAGE */

const foo = object.property;
const bar = object
  .property;


/** INCORRECT USAGE */

const foo = object.
  property;

```



## [dot-notation](http://eslint.org/docs/rules/dot-notation)

- enforce dot notation whenever possible

```javascript
{ 'dot-notation': 'error' }
```

```javascript
/** CORRECT USAGE */

const foo = qux.foo;
const bar = qux[baz];


/** INCORRECT USAGE */

const foo = qux['foo'];

```



## [eqeqeq](http://eslint.org/docs/rules/eqeqeq)

- require the use of `===` and `!==`

```javascript
{ eqeqeq: 'error' }
```

```javascript
/** CORRECT USAGE */

a === b
foo === true
bananas !== 1
value === undefined
typeof foo === 'undefined'
'hello' !== 'world'
0 === 0
true === true
foo === null


/** INCORRECT USAGE */

a == b
foo == true
bananas != 1
value == undefined
typeof foo == 'undefined'
'hello' != 'world'
0 == 0
true == true
foo == null

```



## [guard-for-in](http://eslint.org/docs/rules/guard-for-in)

- require `for-in` loops to include an `if` statement

```javascript
{ 'guard-for-in': 'error' }
```

```javascript
/** CORRECT USAGE */

for (key in foo) {
  if ({}.hasOwnProperty.call(foo, key)) {
    doSomething(key);
  }
}


/** INCORRECT USAGE */

for (key in foo) {
  doSomething(key);
}

```



## [no-alert](http://eslint.org/docs/rules/no-alert)

- disallow the use of `alert`, `confirm`, and `prompt`

```javascript
{ 'no-alert': 'error' }
```

```javascript
/** CORRECT USAGE */

customAlert('Something happened!');
customConfirm('Are you sure?');
customPrompt('Who are you?');


/** INCORRECT USAGE */

alert('here!');
confirm('Are you sure?');
prompt('What\'s your name?', 'John Doe');

```



## [no-caller](http://eslint.org/docs/rules/no-caller)

- disallow the use of `arguments.caller` or `arguments.callee`

```javascript
{ 'no-caller': 'error' }
```

`````javascript
/** CORRECT USAGE */

function foo (n) {
  if (n <= 0) {
    return;
  }
  foo(n - 1);
}


/** INCORRECT USAGE */

function foo (n) {
  if (n <= 0) {
    return;
  }
  arguments.callee(n - 1);
}
`````



## [no-case-declarations](http://eslint.org/docs/rules/no-case-declarations)

- disallow lexical declarations in case clauses

```javascript
{ 'no-case-declarations': 'error' }
```

```javascript
/** INCORRECT USAGE */

switch (foo) {
  case 1:
    let x = 1;
    break;
  case 2:
    const y = 2;
    break;
  case 3:
    function f() {}
    break;
  default:
    class C {}
}
```



## [no-div-regex](http://eslint.org/docs/rules/no-div-regex)

- disallow division operators explicitly at the beginning of regular expressions

```javascript
{ 'no-div-regex': 'off' }
```




## [no-else-return](http://eslint.org/docs/rules/no-else-return)

- disallow `else` blocks after `return` statements in `if` statements

```javascript
{ 'no-else-return': 'error' }
```

```javascript
/** CORRECT USAGE */

function foo () {
  if (x) {
    return y;
  }
  return z;
}


/** INCORRECT USAGE */

function foo () {
  if (x) {
    return y;
  } else {
    return z;
  }
}

```



## [no-empty-function](http://eslint.org/docs/rules/no-empty-function)

- disallow empty functions
- allows empty functions if they contain a comment

```javascript
{ 'no-empty-function': 'error' }
```

```javascript
/** CORRECT USAGE */

function foo() {
  // do nothing
}

const bar = () => { /** noop */ };

class Baz {
  qux () {
    // empty
  }
}


/** INCORRECT USAGE */

function foo() {}

const bar = () => {};

class Baz {
  qux () {}
}
```



## [no-empty-pattern](http://eslint.org/docs/rules/no-empty-pattern)

- disallow empty destructuring patterns

```javascript
{ 'no-empty-pattern': 'error' }
```

```javascript
/** CORRECT USAGE */

const {a = {}} = foo;
const {a = []} = foo;
function foo ({a = {}}) {}
function bar ({a = []}) {}


/** INCORRECT USAGE */

const {} = foo;
const [] = foo;
const {a: {}} = foo;
const {a: []} = foo;
function foo ({}) {}
function bar ([]) {}
function baz ({a: {}}) {}
function qux ({a: []}) {}
```



## [no-eq-null](http://eslint.org/docs/rules/no-eq-null)

- disallow `null` comparisons without type-checking operators

```javascript
{ 'no-eq-null': 'off' }
```




## [no-eval](http://eslint.org/docs/rules/no-eval)

- disallow the use of `eval()`
  - does not prevent the use of custom methods and functions

```javascript
{ 'no-eval': 'error' }
```

```javascript
/** CORRECT USAGE */

// custom method
foo.eval('const foo = true;');


/** INCORRECT USAGE */

eval('const foo = true;');
window.eval('const bar = true;');
global.eval('const baz = true;');
```



## [no-extend-native](http://eslint.org/docs/rules/no-extend-native)

- disallow extending native types

```javascript
{ 'no-extend-native': 'error' }
```

```javascript
/** CORRECT USAGE */

class Foo {
  a: 'a'  
}
Object.defineProperty(Foo.prototype, 'times', { value: 999 });


/** INCORRECT USAGE */

Object.prototype.a = 'a';
Object.defineProperty(Array.prototype, 'times', { value: 999 });
```



## [no-extra-bind](http://eslint.org/docs/rules/no-extra-bind)

- disallow unnecessary calls to `.bind()`
  - disallows using `bind()` with an immediately-invoked function expression (IIFE) that doesn't use its  `this` value
  - disallows all uses of `bind()` with arrow functions

```javascript
{ 'no-extra-bind': 'error' }
```

```javascript
/** CORRECT USAGE */

// function reference
const foo = bar.bind(baz)


/** INCORRECT USAGE */

// function expression that doesn't use "this" value
const foo = function () {
  qux();
}.bind(baz);

// arrow function expression
const bar = (() => {
  this.qux();
}).bind(baz);
```



## [no-extra-label](http://eslint.org/docs/rules/no-extra-label)

- disallow unnecessary labels
- use of labels is disallowed by `no-labels`

```javascript
{ 'no-extra-label': 'off' }
```



## [no-fallthrough](http://eslint.org/docs/rules/no-fallthrough)

- disallow fallthrough of `case` statements
  - allows a fallthrough when there is a  comment that matches the `/falls?\s?through/i` regular expression

```javascript
{ 'no-fallthrough': 'error' }
```

```javascript
/** CORRECT USAGE */

switch (foo) {
  case 1:
    bar();
    break;
    
  case 2:
    baz();
    // falls through

  default:
    qux();
}


/** INCORRECT USAGE */

switch (foo) {
  case 1:
    bar();

  default:
    qux();
}
```



## [no-floating-decimal](http://eslint.org/docs/rules/no-floating-decimal)

- disallow leading or trailing decimal points in numeric literals

```javascript
{ 'no-floating-decimal': 'error' }
```

```javascript
/** CORRECT USAGE */

const foo = 0.5;
const bar = 2.0;
const baz = -0.7;


/** INCORRECT USAGE */

const foo = .5;
const bar = 2.;
const baz = -.7;
```



## [no-global-assign](http://eslint.org/docs/rules/no-global-assign)

- disallow assignments to native objects or read-only global variables

```javascript
{ 'no-global-assign': 'error' }
```

```javascript
/** CORRECT USAGE */

const foo = null;


/** INCORRECT USAGE */

Object = null;
undefined = 1;
window = {};
global = {};
```



## [no-implicit-coercion](http://eslint.org/docs/rules/no-implicit-coercion)

- disallow shorthand type conversions

```javascript
{ 'no-implicit-coercion': 'off' }
```



## [no-implicit-globals](http://eslint.org/docs/rules/no-implicit-globals)

- disallow `var` and named `function` declarations in the global scope

```javascript
{ 'no-implicit-globals': 'off' }
```



## [no-implied-eval](http://eslint.org/docs/rules/no-implied-eval)

- disallow the use of `eval()`-like methods

```javascript
{ 'no-implied-eval': 'error' }
```

```javascript
/** CORRECT USAGE */

setTimeout(() => foo(), 1000);
setInterval(() => bar(), 1000);


/** INCORRECT USAGE */

setTimeout('foo();', 1000);
setInterval('bar();', 1000);
```



## [no-invalid-this](http://eslint.org/docs/rules/no-invalid-this)

- disallow `this` keywords outside of classes or class-like objects

```javascript
{ 'no-invalid-this': 'off' }
```



## [no-iterator](http://eslint.org/docs/rules/no-iterator)

- disallow the use of the `__iterator__` property

```javascript
{ 'no-iterator': 'error' }
```

```javascript
/** CORRECT USAGE */

const __iterator__ = foo;


/** INCORRECT USAGE */

Foo.prototype.__iterator__ = function () {
  return new FooIterator(this);
};
foo.__iterator__ = function () {};
foo["__iterator__"] = function () {};
```



## [no-labels](http://eslint.org/docs/rules/no-labels)

- disallow labeled statements

```javascript
{ 'no-labels': 'error' }
```

```javascript
/** CORRECT USAGE */

while (true) {
  break;
}

switch (baz) {
  case 1:
    break;
}


/** INCORRECT USAGE */

foo:
  while (true) {
    break foo;
  }

bar:
  switch (baz) {
    case 1:
      break bar;
  }

```



## [no-lone-blocks](http://eslint.org/docs/rules/no-lone-blocks)

- disallow unnecessary nested blocks
  - allows code blocks if a block-level binding (`let` and `const`), a class declaration, or a function declaration (in strict mode) are present

```javascript
{ 'no-lone-blocks': 'error' }
```

```javascript
/** CORRECT USAGE */

{
  const foo = qux();
}


/** INCORRECT USAGE */

{
  qux();
}
```



## [no-loop-func](http://eslint.org/docs/rules/no-loop-func)

- disallow `function` declarations and expressions inside loop statements

```javascript
{ 'no-loop-func': 'error' }
```

```javascript
/** CORRECT USAGE */

function bar () {}
while (foo) {
  bar();
}


/** INCORRECT USAGE */

while (foo) {
  function bar () {}
  bar();
}
```



## [no-magic-numbers](http://eslint.org/docs/rules/no-magic-numbers)

- disallow magic numbers

```javascript
{ 'no-magic-numbers': 'off' }
```



## [no-multi-spaces](http://eslint.org/docs/rules/no-multi-spaces)

- disallow multiple spaces

```javascript
{ 'no-multi-spaces': 'error' }
```

```javascript
/** CORRECT USAGE */

const foo = true;
const foobar = false;
if (foo === 'bar') {}


/** INCORRECT USAGE */

const foo     =  true;
const foobar  =  false;
if (foo  ===  'bar') {}
```



## [no-multi-str](http://eslint.org/docs/rules/no-multi-str)

- disallow multiline strings

```javascript
{ 'no-multi-str': 'error' }
```

```javascript
/** CORRECT USAGE */

const foo = `Line 1 \n
             Line 2`;
const bar = 'Line 1 \n' +
            'Line 2';


/** INCORRECT USAGE */

const foo = 'Line 1 \
             Line 2';
```



## [no-new-func](http://eslint.org/docs/rules/no-new-func)

- disallow `new` operators with the `Function` object

```javascript
{ 'no-new-func': 'error' }
```

```javascript
/** CORRECT USAGE */

const foo = (a, b) => a + b;


/** INCORRECT USAGE */

const foo = new Function('a', 'b', 'return a + b');
const bar = Function('a', 'b', 'return a + b');
```



## [no-new-wrappers](http://eslint.org/docs/rules/no-new-wrappers)

- disallow `new` operators with the `String`, `Number`, and `Boolean` objects

```javascript
{ 'no-new-wrappers': 'error' }
```

```javascript
/** CORRECT USAGE */

const foo = String(qux);
const bar = Number(qux);
const baz = Boolean(qux);


/** INCORRECT USAGE */

const foo = new String(qux);
const bar = new Number(qux);
const baz = new Boolean(qux);
```



## [no-new](http://eslint.org/docs/rules/no-new)

- disallow `new` operators outside of assignments or comparisons

```javascript
{ 'no-new': 'error' }
```

```javascript
/** CORRECT USAGE */

const foo = new Ctor();


/** INCORRECT USAGE */

new Ctor();
```



## [no-octal-escape](http://eslint.org/docs/rules/no-octal-escape)

- disallow octal escape sequences in string literals

```javascript
{ 'no-octal-escape': 'error' }
```

```javascript
/** CORRECT USAGE */

const foo = 'Copyright \u00A9';   // unicode
const bar = 'Copyright \xA9';     // hexadecimal


/** INCORRECT USAGE */

const foo = 'Copyright \251';
```



## [no-octal](http://eslint.org/docs/rules/no-octal)

- disallow octal literals

```javascript
{ 'no-octal': 'error' }
```

```javascript
/** CORRECT USAGE */

var foo  = '071';


/** INCORRECT USAGE */

const foo = 071;
const bar = 5 + 07;
```



## [no-param-reassign](http://eslint.org/docs/rules/no-param-reassign)

- disallow reassigning `function` parameters

```javascript
{ 'no-param-reassign': ['error', { props: true }] }
```

```javascript
/** CORRECT USAGE */

function foo (bar) {
    const baz = 13;
}


/** INCORRECT USAGE */

function foo (bar) {
    bar = 13;
}
```



## [no-proto](http://eslint.org/docs/rules/no-proto)

- disallow the use of the `__proto__` property

```javascript
{ 'no-proto': 'error' }
```

```javascript
/** CORRECT USAGE */

const foo = Object.getPrototypeOf(obj);


/** INCORRECT USAGE */

const foo = obj.__proto__;
const bar = obj['__proto__'];
```



## [no-redeclare](http://eslint.org/docs/rules/no-redeclare)

- disallow `var` redeclaration

```javascript
{ 'no-redeclare': 'error' }
```

```javascript
/** CORRECT USAGE */

let a = true;
a = false;


/** INCORRECT USAGE */

let a = true;
let a = false;
```



## [no-return-assign](http://eslint.org/docs/rules/no-return-assign)

- disallow assignment operators in `return` statements
  - allows assignments enclosed in parentheses


``````javascript
{ 'no-return-assign': ['error', 'except-parens'] }
``````

```javascript
/** CORRECT USAGE */

function foo () {
  return bar === baz;
}

function foo () {
  return (bar = baz);
}


/** INCORRECT USAGE*/

function foo () {
    return bar = baz;
}
```



## [no-script-url](http://eslint.org/docs/rules/no-script-url)

- disallow `javascript:` urls

``````javascript
{ 'no-script-url': 'error' }
``````

``````javascript
/** INCORRECT USAGE */

location.href = "javascript:void(0)";
``````



## [no-self-assign](http://eslint.org/docs/rules/no-self-assign)

- disallow assignments where both sides are exactly the same

``````javascript
{ 'no-self-assign': 'error' }
``````

``````javascript
/** CORRECT USAGE */

foo = bar;


/** INCORRECT USAGE */

foo = foo;
``````



## [no-self-compare](http://eslint.org/docs/rules/no-self-compare)

- disallow comparisons where both sides are exactly the same

``````javascript
{ 'no-self-compare': 'error' }
``````

``````javascript
/** CORRECT USAGE */

if (foo === bar) {}


/** INCORRECT USAGE */

if (foo === foo) {}
``````



## [no-sequences](http://eslint.org/docs/rules/no-sequences)

- disallow comma operators

``````javascript
{ 'no-sequences': 'error' }
``````

``````javascript
/** CORRECT USAGE */

const foo = (bar(), baz);

for (i = 0, j = 10; i < j; i++, j--) {}


/** INCORRECT USAGE */

const foo = bar(), baz;
``````



## [no-throw-literal](http://eslint.org/docs/rules/no-throw-literal)

- disallow throwing literals as exceptions

``````javascript
{ 'no-throw-literal': 'error' }
``````

```````javascript
/** CORRECT USAGE */

throw new Error('foo');


/** INCORRECT USAGE */

throw 'foo';
```````



## [no-unmodified-loop-condition](http://eslint.org/docs/rules/no-unmodified-loop-condition)

- disallow unmodified loop conditions

``````javascript
{ 'no-unmodified-loop-condition': 'error' }
``````

``````javascript
/** CORRECT USAGE */

while (foo) {
  foo = bar();
}


/** INCORRECT USAGE */

while (node) {
  bar();
}
``````



## [no-unused-expressions](http://eslint.org/docs/rules/no-unused-expressions)

- disallow unused expressions

``````javascript
{ 'no-unused-expressions': 'error' }
``````

``````javascript
/** CORRECT USAGE */

const foo = true;
const bar = foo;
baz();


/** INCORRECT USAGE */

true;
foo;
bar && baz();
``````



## [no-unused-labels](http://eslint.org/docs/rules/no-unused-labels)

- disallow unused labels
- use of labels is disallowed by `no-labels`

``````javascript
{ 'no-unused-labels': 'off' }
``````



## [no-useless-call](http://eslint.org/docs/rules/no-useless-call)

- disallow unnecessary calls to `.call()` and `.apply()`

``````javascript
{ 'no-useless-call': 'error' }
``````

``````javascript
/** CORRECT USAGE */

foo.call(obj, 1, 2, 3);
foo.apply(obj, [1, 2, 3]);
obj.foo.call(null, 1, 2, 3);
obj.foo.apply(null, [1, 2, 3]);
obj.foo.call(otherObj, 1, 2, 3);
obj.foo.apply(otherObj, [1, 2, 3]);


/** INCORRECT USAGE */

foo.call(null, 1, 2, 3);
foo.apply(undefined, [1, 2, 3]);
obj.foo.call(obj, 1, 2, 3);
obj.foo.apply(obj, [1, 2, 3]);

``````



## [no-useless-concat](http://eslint.org/docs/rules/no-useless-concat)

- disallow unnecessary concatenation of literals or template literals

``````javascript
{ 'no-useless-concat': 'error' }
``````

``````javascript
/** CORRECT USAGE */

const foo = a + b;
const foobar = 1 - 2;


/** INCORRECT USAGE */

const foo = `some` + `string`;
const bar = '1' + '0';
const baz = '1' + `0`;
const foobar = `1` + '0';
const qux = `1` + `0`;
``````



## [no-useless-escape](http://eslint.org/docs/rules/no-useless-escape)

- disallow unnecessary escape characters

``````javascript
{ 'no-useless-escape': 'error' }
``````

``````javascript
/** CORRECT USAGE */

'\'';
'\x12';
'\u00a9';
'\371';
'xs\u2111';
`\${${foo}\}`;
`$\{${foo}\}`;


/** INCORRECT USAGE */

'\"';
`\"`;
`\"${foo}\"`;
`\#{foo}`;
/\!/;
/\@/;
``````



## [no-void](http://eslint.org/docs/rules/no-void)

- disallow `void` operators

``````javascript
{ 'no-void': 'error' }
``````

``````javascript
/** CORRECT USAGE */

const undef = undefined;


/** INCORRECT USAGE */

const undef = void 0;
void foo();
``````



## [no-warning-comments](http://eslint.org/docs/rules/no-warning-comments)

- disallow specified warning terms in comments

``````javascript
{ 'no-warning-comments': 'off' }
``````



## [no-with](http://eslint.org/docs/rules/no-with)

- disallow `with` statements

``````javascript
{ 'no-with': 'error' }
``````

``````javascript
/** CORRECT USAGE */

foo.bar = true;


/** INCORRECT USAGE */

with (foo) {
  bar = true;
}
``````



## [radix](http://eslint.org/docs/rules/radix)

- enforce the consistent use of the radix argument when using `parseInt()`

``````javascript
{ radix: 'error' }
``````

``````javascript
/** CORRECT USAGE */

parseInt('071', 10);


/** INCORRECT USAGE */

parseInt('071');
``````



## [vars-on-top](http://eslint.org/docs/rules/vars-on-top)

- require `var` declarations be placed at the top of their containing scope

``````javascript
{ 'vars-on-top': 'off' }
``````



## [wrap-iife](http://eslint.org/docs/rules/wrap-iife)

- require parentheses around immediate `function` invocations

``````javascript
{ 'wrap-iife': ['error', 'any'] }
``````

``````javascript
/** CORRECT USAGE */

const foo = (function () { return { y: 1 }; }()); // wrapped call expression
const bar = (function () { return { y: 1 }; })(); // wrapped function expression


/** INCORRECT USAGE */

const foo = function () { return { y: 1}; }();
``````



## [yoda](http://eslint.org/docs/rules/yoda)

- require or disallow “Yoda” conditions

``````javascript
{ 'yoda': ['error', 'never'] }
``````

``````javascript
/** CORRECT USAGE */

if (color === 'red') {}


/** INCORRECT USAGE */

if ('red' === color) {}
``````