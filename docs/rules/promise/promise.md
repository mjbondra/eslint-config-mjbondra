# Promise: Promise



## [promise/catch-or-return](https://github.com/xjamundx/eslint-plugin-promise#catch-or-return)

- require the use of `catch` on un-returned promises

```javascript
{ 'promise/catch-or-return': 'error' }
```

```javascript
/** CORRECT USAGE */

foo.then(baz).catch(qux);
function bar () { return foo.then(baz); }


/** INCORRECT USAGE */

foo.then(baz);
foo.then(baz, qux);
function bar () { foo.then(baz) }
```



## [promise/no-return-wrap](https://github.com/xjamundx/eslint-plugin-promise#rule-no-return-wrap)

- disallow wrapping values in `Promise.resolve` or `Promise.reject` when not needed

```javascript
{ 'promise/no-return-wrap': 'off' }
```



## [promise/param-names](https://github.com/xjamundx/eslint-plugin-promise#param-names)

- enforce use of param names `resolve` and `reject` when creating new promises

```javascript
{ 'promise/param-names': 'error' }
```

```javascript
/** CORRECT USAGE */

new Promise((resolve) => {});
new Promise((resolve, reject) => {});


/** INCORRECT USAGE */

new Promise(function (reject, resolve) {}) // incorrect order
new Promise(function (ok, fail) {}) // non-standard parameter names
```



## [promise/always-return](https://github.com/xjamundx/eslint-plugin-promise#always-return)

- require a `return` statement inside each `then` to create readable and reusable Promise chains

```javascript
{ 'promise/always-return': 'error' }
```

```javascript
/** CORRECT USAGE */

foo.then(bar => bar.baz());
foo.then(bar => {
  const qux = bar.baz();
  return qux;
});


/** INCORRECT USAGE */

foo.then(bar => { bar.baz(); });
foo.then(bar => {
  const qux = bar.baz();
});
```



## [promise/no-native](https://github.com/xjamundx/eslint-plugin-promise#no-native)

- ensure that `Promise` is included fresh in each file instead of relying on the existence of a native promise implementation

```javascript
{ 'promise/no-native': 'off' }
```

