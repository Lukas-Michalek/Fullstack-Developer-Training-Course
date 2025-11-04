import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'

import htmlPlugin from '@html-eslint/eslint-plugin'
import htmlParser from '@html-eslint/parser'

export default defineConfig([
  // JavaScript linting
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.browser,
    },
    extends: [js.configs.recommended],
  },

  // HTML linting
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: htmlParser,
    },
    plugins: {
      '@html-eslint': htmlPlugin,
    },
    rules: {
      // recommended rules from the plugin
      ...htmlPlugin.configs.recommended.rules,

      // ✅ custom HTML rules must use the "@html-eslint/" prefix
      '@html-eslint/require-lang': 'error',
      '@html-eslint/no-duplicate-id': 'warn',
    },
  },
])
