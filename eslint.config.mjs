import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ),
  {
    plugins: {
      react,
      prettier
    },

    languageOptions: {
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    },

    rules: {
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto'
        }
      ],
      'react/react-in-jsx-scope': 'off'
    },

    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];
