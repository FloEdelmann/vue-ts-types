// @ts-check

import eslintJs from '@eslint/js';
import eslintConfigPackageJson from 'eslint-plugin-package-json/configs/recommended';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginJest from 'eslint-plugin-jest';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import typescriptEslint from 'typescript-eslint';

const namedRecommendedEslintConfig = {
  name: 'eslint/recommended',
  ...eslintJs.configs.recommended,
};

const typescriptEslintStrictAndStylisticConfigs = [
  ...typescriptEslint.configs.strictTypeChecked,
  ...typescriptEslint.configs.stylisticTypeChecked.filter(
    ({ name }) =>
      name !== 'typescript-eslint/base' &&
      name !== 'typescript-eslint/eslint-recommended',
  ),
];

const namedEslintConfigPrettier = {
  name: 'config-prettier',
  ...eslintConfigPrettier,
};

export default typescriptEslint.config(
  {
    name: 'vue-ts-types/ignore-dist',
    ignores: ['dist'],
  },
  eslintConfigPackageJson,
  {
    files: ['**/*.ts', '**/*.js'],
    extends: [
      namedRecommendedEslintConfig,
      ...typescriptEslintStrictAndStylisticConfigs,
      eslintPluginUnicorn.configs['flat/recommended'],
      namedEslintConfigPrettier,
    ],
  },
  {
    name: 'vue-ts-types/main',
    files: ['**/*.ts', '**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.js'],
          defaultProject: './tsconfig.json',
        },
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
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
      'eqeqeq': 'error',
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'guard-for-in': 'error',
      'no-bitwise': 'error',
      'no-else-return': ['error', { allowElseIf: false }],
      'no-lonely-if': 'error',
      'no-loop-func': 'error',
      'no-object-constructor': 'error',
      'no-return-assign': 'error',
      'no-shadow': 'off', // replaced by @typescript-eslint/no-shadow
      'no-template-curly-in-string': 'error',
      'no-unsafe-optional-chaining': [
        'error',
        { disallowArithmeticOperators: true },
      ],
      'object-shorthand': ['error', 'always', { avoidQuotes: true }],
      'prefer-arrow-callback': 'error',
      'prefer-template': 'error',
      'radix': 'error',

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
      '@typescript-eslint/no-empty-object-type': [
        'error',
        { allowInterfaces: 'with-single-extends' },
      ],
      '@typescript-eslint/no-explicit-any': 'off', // needed for Vue types compatibility
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/no-unnecessary-parameter-property-assignment':
        'error',
      '@typescript-eslint/no-shadow': [
        'warn',
        { ignoreOnInitialization: true },
      ],
      '@typescript-eslint/prefer-enum-initializers': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
    },
  },
  {
    name: 'vue-ts-types/eslint',
    files: ['eslint.config.js'],
    rules: {
      // less strict rules for ESLint config while some ESLint plugins don't provide proper types
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
    },
  },
  {
    name: 'vue-ts-types/tests',
    files: ['tests/**/*.spec.ts'],
    plugins: {
      jest: eslintPluginJest,
    },
    rules: {
      ...eslintPluginJest.configs['flat/recommended'].rules,
      ...eslintPluginJest.configs['flat/style'].rules,

      // additional Jest rules
      'jest/consistent-test-it': 'error',
      'jest/no-confusing-set-timeout': 'error',
      'jest/no-duplicate-hooks': 'error',
      'jest/no-test-return-statement': 'error',
      'jest/no-untyped-mock-factory': 'error',
      'jest/padding-around-after-all-blocks': 'error',
      'jest/padding-around-after-each-blocks': 'error',
      'jest/padding-around-before-all-blocks': 'error',
      'jest/padding-around-before-each-blocks': 'error',
      'jest/padding-around-describe-blocks': 'error',
      'jest/padding-around-test-blocks': 'error',
      'jest/prefer-called-with': 'error',
      'jest/prefer-comparison-matcher': 'warn',
      'jest/prefer-equality-matcher': 'warn',
      'jest/prefer-expect-resolves': 'warn',
      'jest/prefer-hooks-on-top': 'warn',
      'jest/prefer-importing-jest-globals': 'error',
      'jest/prefer-jest-mocked': 'error',
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
);
