import { writable } from 'svelte/store';

// const settings = writable(
// 	{
// 		colorScheme: 'light',
// 		language: 'en',
// 		fontSize: 12
// 	},
// 	(set) => {
// 		setTimeout(() => {
// 			set({
// 				colorScheme: 'dark',
// 				language: 'en',
// 				fontSize: 12
// 			});
// 		}, 1000);
// 		console.log('from 0 to 1');
// 		return () => {
// 			console.log('from 1 to 0');
// 		};
// 	}
// );

const defaultSettings = {
	colorScheme: 'light',
	language: 'en',
	fontSize: 12
};

const createSettingsStore = () => {
	const { subscribe, set, update } = writable({ ...defaultSettings });

	return {
		subscribe,
		set,
		update,
		updateSetting: (setting, value) => {
			update((settings) => ({
				...settings,
				[setting]: value
			}));
		},
		toggleColorScheme: () => {
			update((settings) => ({
				...settings,
				colorScheme:
					settings.colorScheme === 'dark' ? 'light' : 'dark'
			}));
		},
		reset: () => {
			set({ ...defaultSettings });
		}
	};
};

export default createSettingsStore();
