'use strict';

module.exports = {
  rules: {

    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': ['error', 'unix'],

    // warn when lines exceed 100 characters (exceptions for: strings, template literals, URLs)
    'max-len': ['error', 100, 2, {
      ignoreComments: false,
      ignoreUrls: true
    }],

    // require a newline after each call in a method chain
    'newline-per-chained-call': 'error',

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

    // require assignment operator shorthand where possible
    'operator-assignment': ['error', 'always'],

    // require semicolons
    semi: ['error', 'always'],

    // required space after semicolons
    'semi-spacing': ['error', { before: false, after: true }]
  }
};
