/* eslint-disable unicorn/prefer-module */

module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:unicorn/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    // Core ESLint rules
    'accessor-pairs': 'error',
    'array-bracket-spacing': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', 'stroustrup'],
    'camelcase': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'consistent-return': 'error',
    'curly': ['error', 'all'],
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': 'error',
    'func-call-spacing': 'error',
    'getter-return': 'error',
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    'indent': 'off', // replaced by @typescript-eslint/indent
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'linebreak-style': ['error', 'unix'],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-constant-binary-expression': 'error',
    'no-constant-condition': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-irregular-whitespace': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-mixed-operators': 'error',
    'no-multi-spaces': 'error',
    'no-new-object': 'error',
    'no-prototype-builtins': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-shadow': 'off', // replaced by @typescript-eslint/no-shadow
    'no-template-curly-in-string': 'error',
    'no-trailing-spaces': 'error',
    'no-unsafe-optional-chaining': ['error', { 'disallowArithmeticOperators': true }],
    'no-var': 'error',
    'object-curly-spacing': 'off', // replaced by @typescript-eslint/object-curly-spacing
    'object-shorthand': ['error', 'always', { avoidQuotes: true }],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-template': 'error',
    'quotes': ['error', 'single'],
    'radix': 'error',
    'semi': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'space-in-parens': 'error',
    'space-infix-ops': 'off', // replaced by @typescript-eslint/space-infix-ops
    'spaced-comment': 'error',
    'space-unary-ops': 'error',
    'template-curly-spacing': 'error',

    // eslint-plugin-unicorn
    'unicorn/filename-case': 'off',
    'unicorn/no-useless-undefined': 'off', // conflicts with consistent-return
    'unicorn/prevent-abbreviations': ['warn', {
      replacements: {
        prop: false,
      },
    }],

    // @typescript-eslint/eslint-plugin
    '@typescript-eslint/consistent-type-assertions': ['error', {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow-as-parameter',
    }],
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/no-confusing-void-expression': ['error', {
      ignoreVoidOperator: true,
      ignoreArrowShorthand: true,
    }],
    '@typescript-eslint/no-duplicate-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'off', // needed for Vue types compatibility
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-shadow': ['warn', { ignoreOnInitialization: true }],
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/sort-type-union-intersection-members': 'warn',
    '@typescript-eslint/space-infix-ops': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
  },
  ignorePatterns: [
    '**/*.json',
    'node_modules',
    'dist',
  ],
  overrides: [
    {
      files: ['tests/**'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: {
        // additional Jest rules
        'jest/consistent-test-it': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/prefer-called-with': 'warn',
        'jest/prefer-comparison-matcher': 'warn',
        'jest/prefer-equality-matcher': 'warn',
        'jest/prefer-expect-resolves': 'warn',
        'jest/prefer-hooks-on-top': 'warn',
        'jest/prefer-spy-on': 'warn',
        'jest/prefer-strict-equal': 'warn',
        'jest/require-to-throw-message': 'warn',
        'jest/require-top-level-describe': 'warn',

        // less strict other rules
        'unicorn/no-null': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
      },
    },
  ],
};
