'use strict';

module.exports = {
  rules: {

    // require space after the * in generator functions
    'generator-star-spacing': ['error', 'after'],

    // require let or const instead of var
    'no-var': 'error',

    // require const declaration for variables that are never modified
    'prefer-const': 'error',

    // require rest parameters instead of arguments
    'prefer-rest-params': 'error',

    // require the spread operator instead of .apply()
    'prefer-spread': 'error',

    // require template literals instead of string concatenation
    'prefer-template': 'error',

    // require space after the * in yield declarations
    'yield-star-spacing': ['error', 'after']
  }
};
