import { writable } from 'svelte/store';

const settings = writable(
	{
		colorScheme: 'light',
		language: 'en',
		fontSize: 12
	},
	(set) => {
		// setTimeout(() => {
		// 	set({
		// 		colorScheme: 'dark',
		// 		language: 'en',
		// 		fontSize: 12
		// 	});
		// }, 1000);
		console.log('from 0 to 1');
		return () => {
			console.log('from 1 to 0');
		};
	}
);

export default settings;
