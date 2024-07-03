/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	// Previously, there was an idea to simply ad an em: prefix to use em
	// However, there were many times where more specific values were required
	// So, we prefer to just use manual [em] values instead
	// plugins: [
	// 	plugin(function ({ addVariant, e }) {
	// 		addVariant('em', ({ container }) => {
	// 			container.walkRules((rule) => {
	// 				rule.selector = `.${e(`em:${rule.selector.slice(1)}`)}`;
	// 				rule.walkDecls((decl) => {
	// 					decl.value = decl.value.replace(/(\d*\.?\d+)rem/g, (match, p1) => {
	// 						return `${p1}em`;
	// 					});
	// 				});
	// 			});
	// 		});
	// 	}),
	// ],
};
