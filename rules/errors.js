'use strict';

module.exports = {
  rules: {

    // disallow console method invocation
    'no-console': 'error',

    // disallow empty blocks (exceptions for: catch blocks)
    'no-empty': ['error', { allowEmptyCatch: true }],

    // disallow unnecessary parentheses around expressions
    'no-extra-parens': ['error', 'all'],

    // disallow unnecessary semicolons
    'no-extra-semi': 'error',

    // disallow use of Object.prototypes builtins directly
    'no-prototype-builtins': 'error'
  }
};
