'use strict';

module.exports = {
  extends: [
    // StandardJS (http://standardjs.com/)
    'standard',

    // base rules
    './rules/best-practices.js',
    './rules/errors.js',
    './rules/es2015.js',
    './rules/imports.js',
    './rules/node.js',
    './rules/promises.js',
    './rules/strict.js',
    './rules/style.js',
    './rules/variables.js'
  ]
};
