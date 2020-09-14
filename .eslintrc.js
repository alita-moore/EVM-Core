module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		"prettier",
		"prettier/@typescript-eslint",
		"prettier/react",
		"eslint:recommended",
		"plugin:react/recommended",
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		"react/no-unescaped-entities": "off",
		"react/display-name": "off",
		"react/no-find-dom-node": "off",
		"eslint/no-unused-var": "off",
	},
};
