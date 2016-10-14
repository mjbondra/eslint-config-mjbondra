# eslint-config-mjbondra

[![Build Status](https://img.shields.io/travis/mjbondra/eslint-config-mjbondra.svg?style=flat)](https://travis-ci.org/mjbondra/eslint-config-mjbondra) [![NPM version](https://img.shields.io/npm/v/eslint-config-mjbondra.svg?style=flat)](http://badge.fury.io/js/eslint-config-mjbondra)

ESLint configurations for my JavaScript projects.


## Installation

```shell
npm i eslint-config-mjbondra
```

#### Peer Dependencies

- [ESLint](http://eslint.org/)
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
- [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)
- [eslint-plugin-standard](https://github.com/xjamundx/eslint-plugin-standard)

```shell
npm i eslint eslint-plugin-import eslint-plugin-promise eslint-plugin-standard
```

## Usage

Create a file named `.eslintrc` in your project's root directory that contains the following:

```json
{
  "extends": "mjbondra/script"
}
```

`mjbondra/script` in the above example could instead be `mjbondra` if your project uses ES2015 modules -- files that use the `import`/`export` module syntax.


## Available Configurations


### `mjbondra`

* Base configuration for linting ES2015 modules.

* Extends [StandardJS](http://standardjs.com/rules.html) -- with semicolons -- and borrows additional rules from the [Airbnb JavaScript Styleguide](https://github.com/airbnb/javascript).

* You should use `mjbondra/script` with your project unless it contains ES2015 modules -- files that use the `import`/`export` module syntax.


### `mjbondra/script`

* Extends base configuration for scripts that are **NOT** ES2015 modules.

* Regular scripts and CommonJS/Node.js modules **DO NOT** execute in `strict` mode by default -- unlike ES2015 modules. The `mjbondra/script` configuration enforces that these files **ALWAYS** include a global `'use strict';` declaration.


## Rules


- [Legend](#legend)
- [ESLint Rules](#eslint-rules)
  - [Possible Errors](#possible-errors)
  - [Best Practices](#best-practices)
  - [Strict Mode](#strict-mode)
  - [Variables](#variables)
  - [Stylistic Issues](#stylistic-issues)
  - [ECMAScript 2015](#ecmascript-2015)
- [Plugin Rules](#plugin-rules)
  - [Import](#import)
    - [Static Analysis](#static-analysis)
    - [Helpful Warnings](#helpful-warnings)
    - [Module Systems](#module-systems)
    - [Style Guide](#style-guide)
  - [Promises](#promises)
  - [Standard](#standard)


### Legend

| Icon | Definitition |
| ---- | ------------ |
| 🔴   | Error        |
| ⚠️   | Warn         |
| ⚪️   | Ignore       |


### ESLint Rules


#### Possible Errors

| Rule                                     | Description                              | `mjbondra` | `mjbondra/script` | `eslint-config-standard` | `eslint-config-airbnb` |
| ---------------------------------------- | ---------------------------------------- | ---------- | ----------------- | ------------------------ | ---------------------- |
| [no-cond-assign](http://eslint.org/docs/rules/no-cond-assign) | disallow assignment operators in conditional expressions | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-console](http://eslint.org/docs/rules/no-console) | disallow the use of `console`            | 🔴         | 🔴                | ⚪️                       | ⚠️                     |
| [no-constant-condition](http://eslint.org/docs/rules/no-constant-condition) | disallow constant expressions in conditions | 🔴         | 🔴                | 🔴                       | ⚠️                     |
| [no-control-regex](http://eslint.org/docs/rules/no-control-regex) | disallow control characters in regular expressions | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-debugger](http://eslint.org/docs/rules/no-debugger) | disallow the use of `debugger`           | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-dupe-args](http://eslint.org/docs/rules/no-dupe-args) | disallow duplicate arguments in `function` definitions | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-dupe-keys](http://eslint.org/docs/rules/no-dupe-keys) | disallow duplicate keys in object literals | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-duplicate-case](http://eslint.org/docs/rules/no-duplicate-case) | disallow duplicate case labels           | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-empty-character-class](http://eslint.org/docs/rules/no-empty-character-class) | disallow empty character classes in regular expressions | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-empty](http://eslint.org/docs/rules/no-empty) | disallow empty block statements          | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-ex-assign](http://eslint.org/docs/rules/no-ex-assign) | disallow reassigning exceptions in `catch` clauses | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-extra-boolean-cast](http://eslint.org/docs/rules/no-extra-boolean-cast) | disallow unnecessary boolean casts       | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-extra-parens](http://eslint.org/docs/rules/no-extra-parens) | disallow unnecessary parentheses         | 🔴         | 🔴                | 🔴                       | ⚪️                     |
| [no-extra-semi](http://eslint.org/docs/rules/no-extra-semi) | disallow unnecessary semicolons          | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-func-assign](http://eslint.org/docs/rules/no-func-assign) | disallow reassigning `function` declarations | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-inner-declarations](http://eslint.org/docs/rules/no-inner-declarations) | disallow `function` or `var` declarations in nested blocks | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-invalid-regexp](http://eslint.org/docs/rules/no-invalid-regexp) | disallow invalid regular expression strings in `RegExp` constructors | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-irregular-whitespace](http://eslint.org/docs/rules/no-irregular-whitespace) | disallow irregular whitespace outside of strings and comments | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-obj-calls](http://eslint.org/docs/rules/no-obj-calls) | disallow calling global object properties as functions | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-prototype-builtins](http://eslint.org/docs/rules/no-prototype-builtins) | disallow calling some `Object.prototype` methods directly on objects | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-regex-spaces](http://eslint.org/docs/rules/no-regex-spaces) | disallow multiple spaces in regular expressions | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-sparse-arrays](http://eslint.org/docs/rules/no-sparse-arrays) | disallow sparse arrays                   | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-template-curly-in-string](http://eslint.org/docs/rules/no-template-curly-in-string) | disallow template literal placeholder syntax in regular strings | 🔴         | 🔴                | 🔴                       | ⚪️                     |
| [no-unexpected-multiline](http://eslint.org/docs/rules/no-unexpected-multiline) | disallow confusing multiline expressions | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-unreachable](http://eslint.org/docs/rules/no-unreachable) | disallow unreachable code after `return`, `throw`, `continue`, and `break` statements | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-unsafe-finally](http://eslint.org/docs/rules/no-unsafe-finally) | disallow control flow statements in `finally` blocks | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-unsafe-negation](http://eslint.org/docs/rules/no-unsafe-negation) | disallow negating the left operand of relational operators | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [use-isnan](http://eslint.org/docs/rules/use-isnan) | require calls to `isNaN()` when checking for `NaN` | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [valid-jsdoc](http://eslint.org/docs/rules/valid-jsdoc) | enforce valid JSDoc comments             | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [valid-typeof](http://eslint.org/docs/rules/valid-typeof) | enforce comparing `typeof` expressions against valid strings | 🔴         | 🔴                | 🔴                       | 🔴                     |


#### Best Practices

| Rule                                     | Description                              | `mjbondra` | `mjbondra/script` | `eslint-config-standard` | `eslint-config-airbnb` |
| ---------------------------------------- | ---------------------------------------- | ---------- | ----------------- | ------------------------ | ---------------------- |
| [accessor-pairs](http://eslint.org/docs/rules/accessor-pairs) | enforce getter and setter pairs in objects | 🔴         | 🔴                | 🔴                       | ⚪️                     |
| [array-callback-return](http://eslint.org/docs/rules/array-callback-return) | enforce `return` statements in callbacks of array methods | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [block-scoped-var](http://eslint.org/docs/rules/block-scoped-var) | enforce the use of variables within the scope they are defined | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [class-methods-use-this](http://eslint.org/docs/rules/class-methods-use-this) | enforce that class methods utilize `this` | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [complexity](http://eslint.org/docs/rules/complexity) | enforce a maximum cyclomatic complexity allowed in a program | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [consistent-return](http://eslint.org/docs/rules/consistent-return) | require `return` statements to either always or never specify values | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [curly](http://eslint.org/docs/rules/curly) | require return statements to either always or never specify values | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [default-case](http://eslint.org/docs/rules/default-case) | require `default` cases in `switch` statements | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [dot-location](http://eslint.org/docs/rules/dot-location) | enforce consistent newlines before and after dots | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [dot-notation](http://eslint.org/docs/rules/dot-notation) | enforce dot notation whenever possible   | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [eqeqeq](http://eslint.org/docs/rules/eqeqeq) | require the use of `===` and `!==`       | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [guard-for-in](http://eslint.org/docs/rules/guard-for-in) | require `for-in` loops to include an `if` statement | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-alert](http://eslint.org/docs/rules/no-alert) | disallow the use of `alert`, `confirm`, and `prompt` | 🔴         | 🔴                | ⚪️                       | ⚠️                     |
| [no-caller](http://eslint.org/docs/rules/no-caller) | disallow the use of `arguments.caller` or `arguments.callee` | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-case-declarations](http://eslint.org/docs/rules/no-case-declarations) | disallow lexical declarations in case clauses | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-div-regex](http://eslint.org/docs/rules/no-div-regex) | disallow division operators explicitly at the beginning of regular expressions | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-else-return](http://eslint.org/docs/rules/no-else-return) | disallow `else` blocks after `return` statements in `if` statements | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-empty-function](http://eslint.org/docs/rules/no-empty-function) | disallow empty functions                 | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-empty-pattern](http://eslint.org/docs/rules/no-empty-pattern) | disallow empty destructuring patterns    | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-eq-null](http://eslint.org/docs/rules/no-eq-null) | disallow `null` comparisons without type-checking operators | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-eval](http://eslint.org/docs/rules/no-eval) | disallow the use of `eval()`             | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-extend-native](http://eslint.org/docs/rules/no-extend-native) | disallow extending native types          | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-extra-bind](http://eslint.org/docs/rules/no-extra-bind) | disallow unnecessary calls to `.bind()`  | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-extra-label)](http://eslint.org/docs/rules/no-extra-label) | disallow unnecessary labels              | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-fallthrough](http://eslint.org/docs/rules/no-fallthrough) | disallow fallthrough of `case` statements | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-floating-decimal](http://eslint.org/docs/rules/no-floating-decimal) | disallow leading or trailing decimal points in numeric literals | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-global-assign](http://eslint.org/docs/rules/no-global-assign) | disallow assignments to native objects or read-only global variables | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-implicit-coercion](http://eslint.org/docs/rules/no-implicit-coercion) | disallow shorthand type conversions      | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-implicit-globals](http://eslint.org/docs/rules/no-implicit-globals) | disallow `var` and named `function` declarations in the global scope | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-implied-eval](http://eslint.org/docs/rules/no-implied-eval) | disallow the use of `eval()`-like methods | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-invalid-this](http://eslint.org/docs/rules/no-invalid-this) | disallow `this` keywords outside of classes or class-like objects | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-iterator](http://eslint.org/docs/rules/no-iterator) | disallow the use of the `__iterator__` property | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-labels](http://eslint.org/docs/rules/no-labels) | disallow labeled statements              | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-lone-blocks](http://eslint.org/docs/rules/no-lone-blocks) | disallow unnecessary nested blocks       | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-loop-func](http://eslint.org/docs/rules/no-loop-func) | disallow `function` declarations and expressions inside loop statements | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-magic-numbers](http://eslint.org/docs/rules/no-magic-numbers) | disallow magic numbers                   | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-multi-spaces](http://eslint.org/docs/rules/no-multi-spaces) | disallow multiple spaces                 | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-multi-str](http://eslint.org/docs/rules/no-multi-str) | disallow multiline strings               | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-new-func](http://eslint.org/docs/rules/no-new-func) | disallow `new` operators with the `Function` object | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-new-wrappers](http://eslint.org/docs/rules/no-new-wrappers) | disallow `new` operators with the `String`, `Number`, and `Boolean` objects | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-new](http://eslint.org/docs/rules/no-new) | disallow `new` operators outside of assignments or comparisons | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-octal-escape](http://eslint.org/docs/rules/no-octal-escape) | disallow octal escape sequences in string literals | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-octal](http://eslint.org/docs/rules/no-octal) | disallow octal literals                  | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-param-reassign](http://eslint.org/docs/rules/no-param-reassign) | disallow reassigning `function` parameters | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-proto](http://eslint.org/docs/rules/no-proto) | disallow the use of the `__proto__` property | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-redeclare](http://eslint.org/docs/rules/no-redeclare) | disallow `var` redeclaration             | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-return-assign](http://eslint.org/docs/rules/no-return-assign) | disallow assignment operators in `return` statements | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-script-url](http://eslint.org/docs/rules/no-script-url) | disallow `javascript:` urls              | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-self-assign](http://eslint.org/docs/rules/no-self-assign) | disallow assignments where both sides are exactly the same | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-self-compare](http://eslint.org/docs/rules/no-self-compare) | disallow comparisons where both sides are exactly the same | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-sequences](http://eslint.org/docs/rules/no-sequences) | disallow comma operators                 | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-throw-literal](http://eslint.org/docs/rules/no-throw-literal) | disallow throwing literals as exceptions | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-unmodified-loop-condition](http://eslint.org/docs/rules/no-unmodified-loop-condition) | disallow unmodified loop conditions      | 🔴         | 🔴                | 🔴                       | ⚪️                     |
| [no-unused-expressions](http://eslint.org/docs/rules/no-unused-expressions) | disallow unused expressions              | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-unused-labels](http://eslint.org/docs/rules/no-unused-labels) | disallow unused labels                   | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-useless-call](http://eslint.org/docs/rules/no-useless-call) | disallow unnecessary calls to `.call()` and `.apply()` | 🔴         | 🔴                | 🔴                       | ⚪️                     |
| [no-useless-concat](http://eslint.org/docs/rules/no-useless-concat) | disallow unnecessary concatenation of literals or template literals | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-useless-escape](http://eslint.org/docs/rules/no-useless-escape) | disallow unnecessary escape characters   | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-void](http://eslint.org/docs/rules/no-void) | disallow `void` operators                | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-warning-comments](http://eslint.org/docs/rules/no-warning-comments) | disallow specified warning terms in comments | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-with](http://eslint.org/docs/rules/no-with) | disallow `with` statements               | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [radix](http://eslint.org/docs/rules/radix) | enforce the consistent use of the radix argument when using `parseInt()` | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [vars-on-top](http://eslint.org/docs/rules/vars-on-top) | require `var` declarations be placed at the top of their containing scope | ⚪️         | ⚪️                | ⚪️                       | 🔴                     |
| [wrap-iife](http://eslint.org/docs/rules/wrap-iife) | require parentheses around immediate `function` invocations | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [yoda](http://eslint.org/docs/rules/yoda) | require or disallow “Yoda” conditions    | 🔴         | 🔴                | 🔴                       | 🔴                     |


#### Strict Mode

| Rule                                     | Description                              | `mjbondra` | `mjbondra/script` | `eslint-config-standard` | `eslint-config-airbnb` |
| ---------------------------------------- | ---------------------------------------- | ---------- | ----------------- | ------------------------ | ---------------------- |
| [strict](http://eslint.org/docs/rules/strict) | require or disallow strict mode directives | 🔴         | 🔴                | ⚪️                       | 🔴                     |


#### Variables

| Rule                                     | Description                              | `mjbondra` | `mjbondra/script` | `eslint-config-standard` | `eslint-config-airbnb` |
| ---------------------------------------- | ---------------------------------------- | ---------- | ----------------- | ------------------------ | ---------------------- |
| [init-declarations](http://eslint.org/docs/rules/init-declarations) | require or disallow initialization in `var` declarations | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-catch-shadow](http://eslint.org/docs/rules/no-catch-shadow) | disallow `catch` clause parameters from shadowing variables in the outer scope | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-delete-var](http://eslint.org/docs/rules/no-delete-var) | disallow deleting variables              | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-label-var](http://eslint.org/docs/rules/no-label-var) | disallow labels that share a name with a variable | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-restricted-globals](http://eslint.org/docs/rules/no-restricted-globals) | disallow specified global variables      | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-shadow-restricted-names](http://eslint.org/docs/rules/no-shadow-restricted-names) | disallow identifiers from shadowing restricted names | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-shadow](http://eslint.org/docs/rules/no-shadow) | disallow `var` declarations from shadowing variables in the outer scope | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-undef-init](http://eslint.org/docs/rules/no-undef-init) | disallow initializing variables to `undefined` | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-undef](http://eslint.org/docs/rules/no-undef) | disallow the use of undeclared variables unless mentioned in `/*global */` comments | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-undefined](http://eslint.org/docs/rules/no-undefined) | disallow the use of `undefined` as an identifier | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars) | disallow unused variables                | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-use-before-define](http://eslint.org/docs/rules/no-use-before-define) | disallow the use of variables before they are defined | 🔴         | 🔴                | ⚪️                       | 🔴                     |


#### Node.js and Common.js

| Rule                                     | Description                              | `mjbondra` | `mjbondra/script` | `eslint-config-standard` | `eslint-config-airbnb` |
| ---------------------------------------- | ---------------------------------------- | ---------- | ----------------- | ------------------------ | ---------------------- |
| [callback-return](http://eslint.org/docs/rules/callback-return) | require `return` statements after callbacks | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [global-require](http://eslint.org/docs/rules/global-require) | require `require()` calls to be placed at top-level module scope | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [handle-callback-err](http://eslint.org/docs/rules/handle-callback-err) | require error handling in callbacks      | 🔴         | 🔴                | 🔴                       | ⚪️                     |
| [no-mixed-requires](http://eslint.org/docs/rules/no-mixed-requires) | disallow `require` calls to be mixed with regular `var` declarations | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-new-require](http://eslint.org/docs/rules/no-new-require) | disallow `new` operators with calls to `require` | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-path-concat](http://eslint.org/docs/rules/no-path-concat) | disallow string concatenation with `__dirname` and `__filename` | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-process-env](http://eslint.org/docs/rules/no-process-env) | disallow the use of `process.env`        | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-process-exit](http://eslint.org/docs/rules/no-process-exit) | disallow the use of `process.exit()`     | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-restricted-modules](http://eslint.org/docs/rules/no-restricted-modules) | disallow specified modules when loaded by `require` | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-restricted-properties](http://eslint.org/docs/rules/no-restricted-properties) | disallow certain properties on certain objects | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-sync](http://eslint.org/docs/rules/no-sync) | disallow synchronous methods             | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |


#### Stylistic Issues

| Rule                                     | Description                              | `mjbondra` | `mjbondra/script` | `eslint-config-standard` | `eslint-config-airbnb` |
| ---------------------------------------- | ---------------------------------------- | ---------- | ----------------- | ------------------------ | ---------------------- |
| [array-bracket-spacing](http://eslint.org/docs/rules/array-bracket-spacing) | enforce consistent spacing inside array brackets | ⚪️*        | ⚪️*               | ⚪️*                      | 🔴                     |
| [block-spacing](http://eslint.org/docs/rules/block-spacing) | enforce consistent spacing inside single-line blocks | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [brace-style](http://eslint.org/docs/rules/brace-style) | enforce consistent brace style for blocks | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [camelcase](http://eslint.org/docs/rules/camelcase) | enforce camelcase naming convention      | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [comma-dangle](http://eslint.org/docs/rules/comma-dangle) | require or disallow trailing commas      | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [comma-spacing](http://eslint.org/docs/rules/comma-spacing) | enforce consistent spacing before and after commas | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [comma-style](http://eslint.org/docs/rules/comma-style) | enforce consistent comma style           | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [computed-property-spacing](http://eslint.org/docs/rules/computed-property-spacing) | enforce consistent spacing inside computed property brackets | ⚪️*        | ⚪️*               | ⚪️*                      | 🔴                     |
| [consistent-this](http://eslint.org/docs/rules/consistent-this) | enforce consistent naming when capturing the current execution context | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [eol-last](http://eslint.org/docs/rules/eol-last) | enforce at least one newline at the end of files | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [func-call-spacing](http://eslint.org/docs/rules/func-call-spacing) | require or disallow spacing between `function` identifiers and their invocations | 🔴         | 🔴                | 🔴                       | ⚪️                     |
| [func-names](http://eslint.org/docs/rules/func-names) | require or disallow named `function` expressions | ⚪️         | ⚪️                | ⚪️                       | ⚠️                     |
| [func-style](http://eslint.org/docs/rules/func-style) | enforce the consistent use of either `function` declarations or expressions | 🔴         | 🔴                | ⚪️                       | ⚪️                     |
| [id-blacklist](http://eslint.org/docs/rules/id-blacklist) | disallow specified identifiers           | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [id-length](http://eslint.org/docs/rules/id-length) | enforce minimum and maximum identifier lengths | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [id-match](http://eslint.org/docs/rules/id-match) | require identifiers to match a specified regular expression | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [indent](http://eslint.org/docs/rules/indent) | enforce consistent indentation           | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [jsx-quotes](http://eslint.org/docs/rules/jsx-quotes) | enforce the consistent use of either double or single quotes in JSX attributes | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [key-spacing](http://eslint.org/docs/rules/key-spacing) | enforce consistent spacing between keys and values in object literal properties | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [keyword-spacing](http://eslint.org/docs/rules/keyword-spacing) | enforce consistent spacing before and after keywords | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [line-comment-position](http://eslint.org/docs/rules/line-comment-position) | enforce position of line comments        | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [linebreak-style](http://eslint.org/docs/rules/linebreak-style) | enforce consistent linebreak style       | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [lines-around-comment](http://eslint.org/docs/rules/lines-around-comment) | require empty lines around comments      | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [lines-around-directive](http://eslint.org/docs/rules/lines-around-directive) | require or disallow newlines around directives | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [max-depth](http://eslint.org/docs/rules/max-depth) | enforce a maximum depth that blocks can be nested | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [max-len](http://eslint.org/docs/rules/max-len) | enforce a maximum line length            | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [max-lines](http://eslint.org/docs/rules/max-lines) | enforce a maximum number of lines per file | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [max-nested-callbacks](http://eslint.org/docs/rules/max-nested-callbacks) | enforce a maximum depth that callbacks can be nested | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [max-params](http://eslint.org/docs/rules/max-params) | enforce a maximum number of parameters in `function` definitions | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [max-statements-per-line](http://eslint.org/docs/rules/max-statements-per-line) | enforce a maximum number of statements allowed per line | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [max-statements](http://eslint.org/docs/rules/max-statements) | enforce a maximum number of statements allowed in `function` blocks | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [multiline-ternary](http://eslint.org/docs/rules/multiline-ternary) | enforce newlines between operands of ternary expressions | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [new-cap](http://eslint.org/docs/rules/new-cap) | require constructor `function` names to begin with a capital letter | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [new-parens](http://eslint.org/docs/rules/new-parens) | require parentheses when invoking a constructor with no arguments | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [newline-after-var](http://eslint.org/docs/rules/newline-after-var) | require or disallow an empty line after `var` declarations | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [newline-before-return](http://eslint.org/docs/rules/newline-before-return) | require an empty line before `return` statements | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [newline-per-chained-call](http://eslint.org/docs/rules/newline-per-chained-call) | require a newline after each call in a method chain | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-array-constructor](http://eslint.org/docs/rules/no-array-constructor) | disallow `Array` constructors            | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-bitwise](http://eslint.org/docs/rules/no-bitwise) | disallow bitwise operators               | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-continue](http://eslint.org/docs/rules/no-continue) | disallow `continue` statements           | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-inline-comments](http://eslint.org/docs/rules/no-inline-comments) | disallow inline comments after code      | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-lonely-if](http://eslint.org/docs/rules/no-lonely-if) | disallow `if` statements as the only statement in `else` blocks | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-mixed-operators](http://eslint.org/docs/rules/no-mixed-operators) | disallow mixed binary operators          | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-mixed-spaces-and-tabs](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs) | disallow mixed spaces and tabs for indentation | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-multiple-empty-lines](http://eslint.org/docs/rules/no-multiple-empty-lines) | disallow multiple empty lines            | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-negated-condition](http://eslint.org/docs/rules/no-negated-condition) | disallow negated conditions              | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-nested-ternary](http://eslint.org/docs/rules/no-nested-ternary) | disallow nested ternary expressions      | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-new-object](http://eslint.org/docs/rules/no-new-object) | disallow `Object` constructors           | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-plusplus](http://eslint.org/docs/rules/no-plusplus) | disallow the unary operators `++` and `--` | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-restricted-syntax](http://eslint.org/docs/rules/no-restricted-syntax) | disallow specified syntax                | ⚪️         | ⚪️                | ⚪️                       | 🔴                     |
| [no-tabs](http://eslint.org/docs/rules/no-tabs) | disallow tabs in file                    | 🔴         | 🔴                | 🔴                       | ⚪️                     |
| [no-ternary](http://eslint.org/docs/rules/no-ternary) | disallow ternary operators               | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-trailing-spaces](http://eslint.org/docs/rules/no-trailing-spaces) | disallow trailing whitespace at the end of lines | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-underscore-dangle](http://eslint.org/docs/rules/no-underscore-dangle) | disallow dangling underscores in identifiers | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-unneeded-ternary](http://eslint.org/docs/rules/no-unneeded-ternary) | disallow ternary operators when simpler alternatives exist | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-whitespace-before-property](http://eslint.org/docs/rules/no-whitespace-before-property) | disallow whitespace before properties    | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [object-curly-newline](http://eslint.org/docs/rules/object-curly-newline) | enforce consistent line breaks inside braces | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [object-curly-spacing](http://eslint.org/docs/rules/object-curly-spacing) | enforce consistent spacing inside braces | ⚪️*        | ⚪️*               | ⚪️*                      | 🔴                     |
| [object-property-newline](http://eslint.org/docs/rules/object-property-newline) | enforce placing object properties on separate lines | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [one-var-declaration-per-line](http://eslint.org/docs/rules/one-var-declaration-per-line) | require or disallow newlines around `var` declarations | ⚪️         | ⚪️                | ⚪️                       | 🔴                     |
| [one-var](http://eslint.org/docs/rules/one-var) | enforce variables to be declared either together or separately in functions | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [operator-assignment](http://eslint.org/docs/rules/operator-assignment) | require or disallow assignment operator shorthand where possible | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [operator-linebreak](http://eslint.org/docs/rules/operator-linebreak) | enforce consistent linebreak style for operators | 🔴         | 🔴                | 🔴                       | ⚪️                     |
| [padded-blocks](http://eslint.org/docs/rules/padded-blocks) | require or disallow padding within blocks | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [quote-props](http://eslint.org/docs/rules/quote-props) | require quotes around object literal property names | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [quotes](http://eslint.org/docs/rules/quotes) | enforce the consistent use of either backticks, double, or single quotes | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [require-jsdoc](http://eslint.org/docs/rules/require-jsdoc) | require JSDoc comments                   | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [semi-spacing](http://eslint.org/docs/rules/semi-spacing) | enforce consistent spacing before and after semicolons | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [semi](http://eslint.org/docs/rules/semi) | require or disallow semicolons instead of ASI | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [sort-keys](http://eslint.org/docs/rules/sort-keys) | requires object keys to be sorted        | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [sort-vars](http://eslint.org/docs/rules/sort-vars) | require variables within the same declaration block to be sorted | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [space-before-blocks](http://eslint.org/docs/rules/space-before-blocks) | enforce consistent spacing before blocks | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [space-before-function-paren](http://eslint.org/docs/rules/space-before-function-paren) | enforce consistent spacing before `function` definition opening parenthesis | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [space-in-parens](http://eslint.org/docs/rules/space-in-parens) | enforce consistent spacing inside parentheses | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [space-infix-ops](http://eslint.org/docs/rules/space-infix-ops) | require spacing around operators         | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [space-unary-ops](http://eslint.org/docs/rules/space-unary-ops) | enforce consistent spacing before or after unary operators | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [spaced-comment](http://eslint.org/docs/rules/spaced-comment) | enforce consistent spacing after the `//` or `/*` in a comment | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [unicode-bom](http://eslint.org/docs/rules/unicode-bom) | require or disallow Unicode byte order mark (BOM) | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [wrap-regex](http://eslint.org/docs/rules/wrap-regex) | require parenthesis around regex literals | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |


#### ECMAScript 2015

| Rule                                     | Description                              | `mjbondra` | `mjbondra/script` | `eslint-config-standard` | `eslint-config-airbnb` |
| ---------------------------------------- | ---------------------------------------- | ---------- | ----------------- | ------------------------ | ---------------------- |
| [arrow-body-style](http://eslint.org/docs/rules/arrow-body-style) | require braces around arrow function bodies | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [arrow-parens](http://eslint.org/docs/rules/arrow-parens) | require parentheses around arrow function arguments | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [arrow-spacing](http://eslint.org/docs/rules/arrow-spacing) | enforce consistent spacing before and after the arrow in arrow functions | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [constructor-super](http://eslint.org/docs/rules/constructor-super) | require `super()` calls in constructors  | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [generator-star-spacing](http://eslint.org/docs/rules/generator-star-spacing) | enforce consistent spacing around `*` operators in generator functions | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [no-class-assign](http://eslint.org/docs/rules/no-class-assign) | disallow reassigning class members       | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-confusing-arrow](http://eslint.org/docs/rules/no-confusing-arrow) | disallow arrow functions where they could be confused with comparisons | ⚪️         | ⚪️                | ⚪️                       | 🔴                     |
| [no-const-assign](http://eslint.org/docs/rules/no-const-assign) | disallow reassigning `const` variables   | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-dupe-class-members](http://eslint.org/docs/rules/no-dupe-class-members) | disallow duplicate class members         | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-duplicate-imports](http://eslint.org/docs/rules/no-duplicate-imports) | disallow duplicate module imports        | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-new-symbol](http://eslint.org/docs/rules/no-new-symbol) | disallow `new` operators with the `Symbol` object | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-restricted-imports](http://eslint.org/docs/rules/no-restricted-imports) | disallow specified modules when loaded by `import` | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [no-this-before-super](http://eslint.org/docs/rules/no-this-before-super) | disallow `this`/`super` before calling `super()` in constructors | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-useless-computed-key](http://eslint.org/docs/rules/no-useless-computed-key) | disallow unnecessary computed property keys in object literals | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-useless-constructor](http://eslint.org/docs/rules/no-useless-constructor) | disallow unnecessary constructors        | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-useless-rename](http://eslint.org/docs/rules/no-useless-rename) | disallow renaming import, export, and destructured assignments to the same name | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [no-var](http://eslint.org/docs/rules/no-var) | require `let` or `const` instead of `var` | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [object-shorthand](http://eslint.org/docs/rules/object-shorthand) | require or disallow method and property shorthand syntax for object literals | ⚪️         | ⚪️                | ⚪️                       | 🔴                     |
| [prefer-arrow-callback](http://eslint.org/docs/rules/prefer-arrow-callback) | require arrow functions as callbacks     | ⚪️         | ⚪️                | ⚪️                       | 🔴                     |
| [prefer-const](http://eslint.org/docs/rules/prefer-const) | require `const` declarations for variables that are never reassigned after declared | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [prefer-numeric-literals](http://eslint.org/docs/rules/prefer-numeric-literals) | disallow `parseInt()` in favor of binary, octal, and hexadecimal literals | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [prefer-reflect](http://eslint.org/docs/rules/prefer-reflect) | require `Reflect` methods where applicable | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [prefer-rest-params](http://eslint.org/docs/rules/prefer-rest-params) | require rest parameters instead of `arguments` | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [prefer-spread](http://eslint.org/docs/rules/prefer-spread) | require spread operators instead of `.apply()` | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [prefer-template](http://eslint.org/docs/rules/prefer-template) | require template literals instead of string concatenation | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [require-yield](http://eslint.org/docs/rules/require-yield) | require generator functions to contain `yield` | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [rest-spread-spacing](http://eslint.org/docs/rules/rest-spread-spacing) | enforce spacing between rest and spread operators and their expressions | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [sort-imports](http://eslint.org/docs/rules/sort-imports) | enforce sorted import declarations within modules | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [symbol-description](http://eslint.org/docs/rules/symbol-description) | require symbol descriptions              | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [template-curly-spacing](http://eslint.org/docs/rules/template-curly-spacing) | require or disallow spacing around embedded expressions of template strings | 🔴         | 🔴                | 🔴                       | 🔴                     |
| [yield-star-spacing](http://eslint.org/docs/rules/yield-star-spacing) | require or disallow spacing around the `*` in `yield*` expressions | 🔴         | 🔴                | 🔴                       | 🔴                     |


### Plugin Rules


#### Import


##### Static Analysis

| Rule                                     | Description                              | `mjbondra` | `mjbondra/script` | `eslint-config-standard` | `eslint-config-airbnb` |
| ---------------------------------------- | ---------------------------------------- | ---------- | ----------------- | ------------------------ | ---------------------- |
| [import/no-unresolved](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md) | ensure imports point to a file/module that can be resolved | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [import/named](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md) | ensure named imports correspond to a named export in the remote file | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [import/default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md) | ensure a default export is present, given a default import | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [import/namespace](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md) | ensure imported namespaces contain dereferenced properties as they are dereferenced | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [import/no-restricted-paths](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md) | restrict which files can be imported in a given folder | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [import/no-absolute-path](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md) | forbid import of modules using absolute paths | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |


##### Helpful Warnings

| Rule                                     | Description                              | `mjbondra` | `mjbondra/script` | `eslint-config-standard` | `eslint-config-airbnb` |
| ---------------------------------------- | ---------------------------------------- | ---------- | ----------------- | ------------------------ | ---------------------- |
| [import/export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md) | report any invalid exports, i.e. re-export of the same name | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [import/no-named-as-default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md) | report use of exported name as identifier of default export | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [import/no-named-as-default-member](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md) | report use of exported name as property of default export | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [import/no-deprecated](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md) | report imported names marked with `@deprecated` documentation tag | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [import/no-extraneous-dependencies](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md) | forbid the use of extraneous packages    | ⚪️         | ⚪️                | ⚪️                       | 🔴                     |
| [import/no-mutable-exports](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md) | forbid the use of mutable exports with `var` or `let` | 🔴         | 🔴                | ⚪️                       | 🔴                     |


##### Module Systems

| Rule                                     | Description                              | `mjbondra` | `mjbondra/script` | `eslint-config-standard` | `eslint-config-airbnb` |
| ---------------------------------------- | ---------------------------------------- | ---------- | ----------------- | ------------------------ | ---------------------- |
| [import/no-commonjs](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md) | report commonjs `require` calls and `module.exports` or `exports.*` | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [import/no-amd](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md) | report amd `require` and `define` calls  | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [import/no-nodejs-modules](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md) | no node.js builtin modules               | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |


##### Style Guide

| Rule                                     | Description                              | `mjbondra` | `mjbondra/script` | `eslint-config-standard` | `eslint-config-airbnb` |
| ---------------------------------------- | ---------------------------------------- | ---------- | ----------------- | ------------------------ | ---------------------- |
| [import/first](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md) | ensure all imports appear before other statements | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [import/no-duplicates](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md) | report repeated import of the same module in multiple places | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [import/no-namespace](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md) | report namespace imports                 | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [import/extensions](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md) | ensure consistent use of file extension within the import path | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [import/order](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md) | enforce a convention in module import order | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [import/newline-after-import](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md) | enforce a newline after import statements | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [import/prefer-default-export](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md) | prefer a default export if module exports a single name | 🔴         | 🔴                | ⚪️                       | 🔴                     |
| [import/max-dependencies](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md) | limit the maximum number of dependencies a module can have |            | ⚪️                | ⚪️                       | ⚪️                     |


#### Promises

| Rule                                     | Description                              | `mjbondra` | `mjbondra/script` | `eslint-config-standard` | `eslint-config-airbnb` |
| ---------------------------------------- | ---------------------------------------- | ---------- | ----------------- | ------------------------ | ---------------------- |
| [promise/catch-or-return](https://github.com/xjamundx/eslint-plugin-promise#catch-or-return) | ensure that each time a `then()` is applied to a promise, a `catch()` is applied as well | 🔴         | 🔴                | ⚪️                       | ⚪️                     |
| [promise/always-return](https://github.com/xjamundx/eslint-plugin-promise#always-return) | ensure that inside a `then()` you make sure to `return` a new promise or value | 🔴         | 🔴                | ⚪️                       | ⚪️                     |
| [promise/param-names](https://github.com/xjamundx/eslint-plugin-promise#param-names) | enforce standard parameter names for `Promise` constructors | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |
| [promise/no-native](https://github.com/xjamundx/eslint-plugin-promise#no-native) | ensure that `Promise` is included fresh in each file instead of relying on the existence of a native promise implementation | ⚪️         | ⚪️                | ⚪️                       | ⚪️                     |


#### Standard

| Rule                                     | Description                              | `mjbondra` | `mjbondra/script` | `eslint-config-standard` | `eslint-config-airbnb` |
| ---------------------------------------- | ---------------------------------------- | ---------- | ----------------- | ------------------------ | ---------------------- |
| [standard/object-curly-even-spacing](https://github.com/xjamundx/eslint-plugin-standard) | like `object-curly-spacing` from ESLint except it has an `either` option which lets you have 1 or 0 spaces padding | 🔴         | 🔴                | 🔴                       | ⚪️                     |
| [standard/array-bracket-even-spacing](https://github.com/xjamundx/eslint-plugin-standard) | like `array-bracket-even-spacing` from ESLint except it has an `either` option which lets you have 1 or 0 spacing padding | 🔴         | 🔴                | 🔴                       | ⚪️                     |
| [standard/computed-property-even-spacing](https://github.com/xjamundx/eslint-plugin-standard) | like `computed-property-spacing` around ESLint except is has an `even` option which lets you have 1 or 0 spacing padding | 🔴         | 🔴                | 🔴                       | ⚪️                     |
