import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	{
		ignores: ['.cache/*', 'backup/*', 'public/*'],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	eslintPluginPrettierRecommended,
	{
		settings: {
			react: {
				version: '18.2',
			},
		},
	},
	{
		rules: {
			'no-unused-vars': 'warn',
			'no-undef': 'warn',
		},
	},
];
