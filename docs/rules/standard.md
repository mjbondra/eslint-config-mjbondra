# Standard



## [standard/object-curly-even-spacing](https://github.com/xjamundx/eslint-plugin-standard)

- like `object-curly-spacing` from ESLint except it has an `either` option which lets you have 1 or 0 spaces padding

``````javascript
{ 'standard/object-curly-even-spacing': ['error', 'either'] }
``````

``````javascript
/** CORRECT USAGE */

const foo = { bar: true };
const baz = {bar: true};


/** INCORRECT USAGE */

const foo = {bar: true };
``````



## [standard/array-bracket-even-spacing](https://github.com/xjamundx/eslint-plugin-standard)

- like `array-bracket-even-spacing` from ESLint except it has an `either` option which lets you have 1 or 0 spacing padding

``````javascript
{ 'standard/array-bracket-even-spacing': ['error', 'either'] }
``````

```````javascript
/** CORRECT USAGE */

const foo = [ 1, 2 ];
const bar = [1];


/** INCORRECT USAGE */

const foo = [1, 2 ];
const bar = [ 1];
```````



## [standard/computed-property-even-spacing](https://github.com/xjamundx/eslint-plugin-standard)

- like `computed-property-spacing` around ESLint except is has an `even` option which lets you have 1 or 0 spacing padding

``````javascript
{ 'standard/computed-property-even-spacing': ['error', 'even'] }
``````

``````javascript
/** CORRECT USAGE */

foo[bar] = true;
baz[ `_${qux}` ] = false;


/** INCORRECT USAGE */

foo[ bar] = true;
baz[`_${qux}` ] = false;
``````

