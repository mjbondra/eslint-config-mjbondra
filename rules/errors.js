'use strict';

module.exports = {
  rules: {

    // disallow console method invocation
    'no-console': 'error',

    // disallow empty blocks (exceptions for: catch blocks)
    'no-empty': ['error', { allowEmptyCatch: true }],

    // disallow unnecessary parentheses around expressions
    'no-extra-parens': ['error', 'all', { conditionalAssign: false }],

    // disallow unnecessary semicolons
    'no-extra-semi': 'error',

    // disallow function or var declarations in nested blocks
    'no-inner-declarations': ['error', 'both'],

    // disallow use of Object.prototypes builtins directly
    'no-prototype-builtins': 'error',

    // enforce comparing typeof expressions against valid strings
    'valid-typeof': ['error', { requireStringLiterals: true }]
  }
};
