# Import: Static Analysis



## [import/no-unresolved](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md)

- ensure imports point to a file/module that can be resolved
  - require that CommonJS and ES2015 modules are resolvable

``````javascript
{ 'import/no-unresolved': ['error', { commonjs: true }] }
``````

``````javascript
/** CORRECT USAGE */

import { foo } from 'bar'; // module "bar" exists
const baz = require('./foo/bar/baz'); // module exists at "./foo/bar/baz"


/** INCORRECT USAGE */

import { foo } from 'foobar'; // module "foobar" does not exist
const baz = require('./foo/bar/qux'); // module does not exist at "./foo/bar/qux"
``````



## [import/named](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md)

- ensure named imports correspond to a named export in the remote file

``````Javascript
{ 'import/named': 'off' }
``````



## [import/default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md)

- ensure a default export is present, given a default import

```Javascript
{ 'import/default': 'off' }
```



## [import/namespace](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md)

- ensure imported namespaces contain dereferenced properties as they are dereferenced

```Javascript
{ 'import/namespace': 'off' }
```



## [import/no-restricted-paths](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md)

- restrict which files can be imported in a given folder

```Javascript
{ 'import/no-restricted-paths': 'off' }
```



## [import/no-absolute-path](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md)

- forbid import of modules using absolute paths

```Javascript
{ 'import/no-absolute-path': 'off' }
```

