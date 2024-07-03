import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tailwind from 'eslint-plugin-tailwindcss';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
	{ languageOptions: { globals: { ...globals.browser } } },
	pluginJs.configs.recommended, // ESLint recommended config
	...tseslint.configs.recommended, // ESLint ts recommended config
	...fixupConfigRules(pluginReactConfig), // ESLint react plugin
	stylistic.configs['recommended-flat'], // Stylistic recommended config
	...tailwind.configs['flat/recommended'], // Tailwind recommended config
	{
		plugins: {
			'@stylistic': stylistic, // Stylistic plugin
			'react-hooks': fixupPluginRules(eslintPluginReactHooks), // ESLint react-hooks plugin
			'simple-import-sort': simpleImportSort, // Simple import sort plugin
		},
		rules: {
			...eslintPluginReactHooks.configs.recommended.rules, // ESLint react-hooks recommended config

			// Stylistic
			'@stylistic/no-tabs': 'off',
			'@stylistic/indent': ['warn', 'tab'],
			'@stylistic/jsx-indent': ['warn', 'tab'],
			'@stylistic/jsx-indent-props': ['warn', 'tab'],
			'@stylistic/semi': ['error', 'always'],
			'@stylistic/jsx-one-expression-per-line': 'off',
			'@stylistic/brace-style': ['error', '1tbs'],

			// JavaScript
			'prefer-template': 'error',
			'no-useless-assignment': 'error',

			//  TypeScript
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/array-type': 'error',
			'@typescript-eslint/consistent-indexed-object-style': 'error',

			// React
			'react/react-in-jsx-scope': 'off',

			// Simple Import Sort
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
		},
	},
];
