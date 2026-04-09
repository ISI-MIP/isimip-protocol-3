import { defineConfig, globalIgnores } from 'eslint/config'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'

import js from '@eslint/js'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      react.configs.flat.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      react,
      'simple-import-sort': simpleImportSort,
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-empty-pattern': 'off',
      'no-unused-vars': ['error', { varsIgnorePattern: '^_' }],
      'linebreak-style': ['error', 'unix'],
      'quotes': [
        'error',
        'single',
        { 'avoidEscape': true }
      ],
      'semi': ['error', 'never'],
      'max-len': [
        'error',
        {
          'code': 120,
          'ignoreUrls': true,
          'ignoreRegExpLiterals': true
        }
      ],
      'indent': ['error', 2, {
        'SwitchCase': 1,
      }],
      'space-infix-ops': 'error',
      'one-var': ['error', 'never'],
      'comma-spacing': ['error', { before: false, after: true }],
      'no-multiple-empty-lines': ['error', { 'max': 1 }],
      'multiline-ternary': ['error', 'never'],
      'object-curly-newline': ['error', {
        multiline: true,
        consistent: true
      }],
      'simple-import-sort/imports': ['error', {
        groups: [
          // external imports in the given order
          ['^react$', '^prop-types$', '^react', '^redux', '^[a-z]', '^lodash'],
          // parent imports: lowercase first, then capitalized components
          ['^\\.\\..*\\/[a-z]'],
          ['^\\.\\..*\\/[A-Z]'],
          // sibling imports: lowercase first, then capitalized components
          ['^\\./[a-z]', '^\\./.*\\/[a-z]'],
          ['^\\./[A-Z]', '^\\./.*\\/[A-Z]'],
        ],
      }],
      'simple-import-sort/exports': 'error',
      'jsx-quotes': ['error', 'prefer-double'],
      'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'react/jsx-curly-newline': [
        'error',
        {
          'multiline': 'require',
          'singleline': 'consistent'
        }
      ],
      'react/jsx-curly-spacing': [
        'error',
        {
          'when': 'never',
          'children': true
        }
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
])
