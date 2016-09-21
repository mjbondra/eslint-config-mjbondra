'use strict';

module.exports = {
  plugins: [
    'promise'
  ],
  rules: {

    // require that then() returns a new promise or value
    'promise/always-return': 'error',

    // require that promises call catch() (except when returned)
    'promise/catch-or-return': 'error'
  }
};
