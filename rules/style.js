'use strict';

module.exports = {
  rules: {

    // require that functions are declared functions or arrow function expressions
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': ['error', 'unix'],

    // warn when lines exceed 100 characters (exceptions for: strings, template literals, URLs)
    'max-len': ['error', 100, 2, {
      ignoreComments: false,
      ignoreUrls: true
    }],

    // require a newline after each call in a method chain
    'newline-per-chained-call': 'error',

    // disallow use of the continue statement
    'no-continue': 'error',

    // disallow if as the only statement in an else block
    'no-lonely-if': 'error',

    // disallow un-paren'd mixes of different operators
    'no-mixed-operators': ['error', {
      groups: [
        ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],

    // disallow more than two consecutive empty lines; one empty line at the end
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],

    // disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 'error',

    // require assignment operator shorthand where possible
    'operator-assignment': ['error', 'always'],

    // require quotes around object literal property names
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // specify whether double or single quotes should be used
    quotes: ['error', 'single', { avoidEscape: true }],

    // require semicolons
    semi: ['error', 'always'],

    // required space after semicolons
    'semi-spacing': ['error', { before: false, after: true }]
  }
};
