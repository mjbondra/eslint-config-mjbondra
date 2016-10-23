# Import: Style Guide



## [import/first](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)

- ensure all imports appear before other statements
  - disallows any absolute imports (i.e. packages) that come after any relative imports

``````javascript
{ 'import/first': ['error', 'absolute-first'] }
``````

``````javascript
/** CORRECT USAGE */

import foo from 'foo';
import * as _ from 'lodash';
import bar from './bar';
foo.init();


/** INCORRECT USAGE */

import foo from 'foo';
foo.init();
import bar from './bar'; // import after non-import statement
import * as _ from 'lodash'; // absolute import after relative import
``````



## [import/no-duplicates](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md)

- report repeated import of the same module in multiple places

``````javascript
{ 'import/no-duplicates': 'error' }
``````

``````javascript
/** CORRECT USAGE */

import * as foo from 'foo';

const { bar } = foo;


/** INCORRECT USAGE */

import * as foo from 'foo';
import { bar } from 'foo';
``````



## [import/no-namespace](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md)

- report namespace imports

``````javascript
{ 'import/no-namespace': 'off' }
``````



## [import/extensions](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md)

- ensure consistent use of file extension within the import path

``````javascript
{ 'import/extensions': 'off' }
``````



## [import/order](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md)

- enforce a convention in module import order

``````javascript
{ 'import/order': 'off' }
``````



## [import/newline-after-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md)

- enforce a newline after import statements

``````javascript
{ 'import/newline-after-import': 'error' }
``````

``````javascript
/** CORRECT USAGE */

import { bar } from 'foo';

const { baz } = bar;


/** INCORRECT USAGE */

import { bar } from 'foo';
const { baz } = bar;
``````



## [import/prefer-default-export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md)

- prefer a default export if module exports a single name

``````javascript
{ 'import/prefer-default-export': 'error' }
``````

``````javascript
/** CORRECT USAGE */

const foo = 'foo';
export const bar = 'bar';
export default foo;


/** INCORRECT USAGE */

export const foo = 'foo';
``````



## [import/max-dependencies](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md)

- limit the maximum number of dependencies a module can have

``````javascript
{ 'import/max-dependencies': 'off' }
``````

