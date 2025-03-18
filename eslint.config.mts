import eslintJs from '@eslint/js';
import eslintPluginPackageJson from 'eslint-plugin-package-json';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginVitest from '@vitest/eslint-plugin';
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

export default typescriptEslint.config(
  {
    name: 'vue-ts-types/ignore-dist',
    ignores: ['dist'],
  },
  {
    ...eslintPluginPackageJson.configs.recommended,
    rules: {
      ...eslintPluginPackageJson.configs.recommended.rules,
      'package-json/no-redundant-files': 'error',
      'package-json/require-author': 'error',
      'package-json/require-engines': 'error',
      'package-json/require-files': 'error',
      'package-json/require-keywords': 'error',
      'package-json/require-types': 'error',
    },
  },
  {
    files: ['**/*.ts', '**/*.mts'],
    extends: [
      namedRecommendedEslintConfig,
      ...typescriptEslintStrictAndStylisticConfigs,
      eslintPluginUnicorn.configs.recommended,
      eslintConfigPrettier,
    ],
  },
  {
    name: 'vue-ts-types/main',
    files: ['**/*.ts', '**/*.mts'],
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: {
        projectService: true,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      reportUnusedInlineConfigs: 'error',
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
        'error',
        { ignoreOnInitialization: true },
      ],
      '@typescript-eslint/prefer-enum-initializers': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
    },
  },
  {
    name: 'vue-ts-types/tests',
    files: ['tests/**/*.spec.ts'],
    plugins: {
      vitest: eslintPluginVitest,
    },
    rules: {
      ...Object.fromEntries(
        Object.entries(eslintPluginVitest.configs.all.rules).map(
          ([ruleName, severity]) => [
            ruleName,
            severity === 'off' ? 'off' : 'error',
          ],
        ),
      ),

      'vitest/consistent-test-filename': 'off', // already covered by specific `include` path
      'vitest/max-expects': 'off', // more expect statements are needed for some tests
      'vitest/padding-around-all': 'off', // already covered by individual `padding` rules
      'vitest/prefer-expect-assertions': 'off', // too verbose

      // less strict other rules
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
    },
  },
);
