/* eslint-disable unicorn/prefer-module */

module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: true,
  },
  rules: {
    // Core ESLint rules
    'accessor-pairs': 'error',
    'camelcase': [
      'error',
      {
        allow: ['Vue2_6', 'Vue2_7'],
      },
    ],
    'consistent-return': 'error',
    'curly': ['error', 'all'],
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'getter-return': 'error',
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-constant-binary-expression': 'error',
    'no-constant-condition': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-irregular-whitespace': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-mixed-operators': 'error',
    'no-new-object': 'error',
    'no-prototype-builtins': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-shadow': 'off', // replaced by @typescript-eslint/no-shadow
    'no-template-curly-in-string': 'error',
    'no-unsafe-optional-chaining': [
      'error',
      { disallowArithmeticOperators: true },
    ],
    'object-shorthand': ['error', 'always', { avoidQuotes: true }],
    'prefer-arrow-callback': 'error',
    'prefer-template': 'error',
    'quotes': [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'radix': 'error',
    'spaced-comment': 'error',

    // eslint-plugin-unicorn
    'unicorn/filename-case': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'off', // conflicts with consistent-return
    'unicorn/prevent-abbreviations': [
      'warn',
      {
        replacements: {
          prop: false,
        },
      },
    ],

    // @typescript-eslint/eslint-plugin
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      {
        ignoreVoidOperator: true,
        ignoreArrowShorthand: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off', // needed for Vue types compatibility
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-shadow': ['warn', { ignoreOnInitialization: true }],
    '@typescript-eslint/no-unsafe-unary-minus': ['error'],
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/sort-type-constituents': 'warn',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
  },
  ignorePatterns: ['**/*.json', 'node_modules', 'dist'],
  overrides: [
    { files: ['*.cjs'] },
    {
      files: ['tests/**'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-formatting/recommended',
      ],
      rules: {
        // additional Jest rules
        'jest/consistent-test-it': 'error',
        'jest/no-confusing-set-timeout': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/no-untyped-mock-factory': 'error',
        'jest/prefer-called-with': 'warn',
        'jest/prefer-comparison-matcher': 'warn',
        'jest/prefer-equality-matcher': 'warn',
        'jest/prefer-expect-resolves': 'warn',
        'jest/prefer-hooks-on-top': 'warn',
        'jest/prefer-mock-promise-shorthand': 'error',
        'jest/prefer-spy-on': 'warn',
        'jest/prefer-strict-equal': 'warn',
        'jest/require-to-throw-message': 'warn',
        'jest/require-top-level-describe': 'warn',

        // less strict other rules
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
      },
    },
  ],
};
