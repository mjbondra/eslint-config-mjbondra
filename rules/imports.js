'use strict';

module.exports = {
  plugins: [
    'import'
  ],
  rules: {

    // STATIC ANALYSIS

    // ensure imports point to files/modules that can be resolved
    'import/no-unresolved': ['error', { commonjs: true }],


    // HELPFUL WARNINGS

    // disallow invalid exports
    'import/export': 'error',

    // disallow default import name that matches a named export
    'import/no-named-as-default': 'error',

    // disallow default export property names that are also named exports
    'import/no-named-as-default-member': 'error',

    // no mutable exports
    'import/no-mutable-exports': 'error',


    // MODULE SYSTEMS

    // disallow AMD require/define
    'import/no-amd': 'error',


    // STYLE GUIDE

    // disallow non-import statements appearing before import statements
    'import/first': ['error', 'absolute-first'],

    // disallow duplicate imports
    'import/no-duplicates': 'error',

    // require newline after the last import/require
    'import/newline-after-import': 'error',

    // require modules with a single export to use a default export
    'import/prefer-default-export': 'error'
  }
};
