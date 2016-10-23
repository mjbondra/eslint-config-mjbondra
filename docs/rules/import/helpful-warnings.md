# Import: Helpful Warnings



## [import/export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md)

- report any invalid exports, i.e. re-export of the same name

``````javascript
{ 'import/export': 'error' }
``````

``````javascript
/** INCORRECT USAGE */

export const foo = true;
export { bar as foo }; // exports foo twice

export default foo;
export default bar; // exports default twice
``````



## [import/no-named-as-default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md)

- report use of exported name as identifier of default export

``````javascript
{ 'import/no-named-as-default': 'error' }
``````

``````javascript
/** module: foo.js
 *
 * export default 'foo';
 * export const bar = 'baz';
 */


/** CORRECT USAGE */

import foo from './foo.js';


/** INCORRECT USAGE */

import bar from './foo.js'; // using exported name 'bar' as identifier for default export
``````



## [import/no-named-as-default-member](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md)

- report use of exported name as property of default export

``````javascript
{ 'import/no-named-as-default-member': 'error' }
``````

``````javascript
/** module: foo.js
 *
 * export default 'foo';
 * export const bar = 'baz';
 */


/** CORRECT USAGE */

import foo, {bar} from './foo.js';


/** INCORRECT USAGE */

import foo from './foo.js';
const { bar } = foo; // "foo" also has a named export "bar"
``````



## [import/no-deprecated](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md)

- report imported names marked with `@deprecated` documentation tag

``````javascript
{ 'import/no-deprecated': 'off' }
``````



## [import/no-extraneous-dependencies](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md)

- forbid the use of extraneous packages

``````javascript
{ 'import/no-extraneous-dependencies': 'off' }
``````



## [import/no-mutable-exports](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)

- forbid the use of mutable exports with `var` or `let`

``````javascript
{ 'import/no-mutable-exports': 'error' }
``````

``````javascript
/** CORRECT USAGE */

export const foo = 1;
export function bar () {}
export class Ctor {}


/** INCORRECT USAGE */

export let foo = 2;
let bar = 4;
export { bar };
``````

