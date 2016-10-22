'use strict';

module.exports = {
  rules: {

    // disallow labels that share a name with a variable
    'no-label-var': 'off',

    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 'error',

    // require all local variables, and a function's final argument, be used
    'no-unused-vars': ['error', { vars: 'local', args: 'after-used' }],

    // disallow identifier usage before declaration (except functions)
    'no-use-before-define': ['error', 'nofunc']
  }
};
