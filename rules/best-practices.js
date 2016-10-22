'use strict';

module.exports = {
  rules: {

    // require return statements in callbacks of array's methods
    'array-callback-return': 'error',

    // require that class methods utilize this
    'class-methods-use-this': 'error',

    // require return statements to either always or never specify values
    'consistent-return': 'error',

    // require default case in switch statements
    'default-case': ['error', { commentPattern: '^no default$' }],

    // require dot notation whenever possible
    'dot-notation': 'error',

    // require strict equality operators
    eqeqeq: 'error',

    // require if statement in for-in loops
    'guard-for-in': 'error',

    // disallow use of alert, confirm, and prompt
    'no-alert': 'error',

    // disallow lexical declarations in case clauses
    'no-case-declarations': 'error',

    // disallow else after a return in an if
    'no-else-return': 'error',

    // disallow empty functions
    'no-empty-function': 'error',

    // disallow creation of functions within loops
    'no-loop-func': 'error',

    // disallow reassignment of function parameters
    // disallow parameter object manipulation
    'no-param-reassign': ['error', { props: true }],

    // disallow use of `javascript:` urls.
    'no-script-url': 'error',

    // disallow unused expressions
    'no-unused-expressions': 'error',

    // disallow useless string concatenation
    'no-useless-concat': 'error',

    // disallow use of void operator
    'no-void': 'error',

    // require use of the second argument for parseInt()
    radix: 'error'
  }
};
