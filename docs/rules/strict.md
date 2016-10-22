# Strict Mode



## [strict](http://eslint.org/docs/rules/strict)

- require or disallow strict mode directives
- `eslint-config-mjbondra` disallows the inclusion of `use strict` in ES2015 modules

``````javascript
{ strict: ['error', 'never'] }
``````

``````javascript
/** INCORRECT USAGE */

'use strict';

function () {
  'use strict';
}
``````



- `eslint-config-mjbondra/script` requires the inclusion of a global `use strict` in CommonJS modules and other scripts

``````javascript
{ strict: ['error', 'global'] }
``````

``````javascript
/** CORRECT USAGE */

'use strict';


/** INCORRECT USAGE */

function () {
  'use strict';
}
``````

