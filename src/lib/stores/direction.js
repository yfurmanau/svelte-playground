import { derived } from 'svelte/store';
import settings from '$lib/stores/settings.js';
import location from '$lib/stores/location.js';

const direction = derived(
	[settings, location],
	([$settings, $location], set) => {
		console.log('$location', $location);
		setTimeout(() => {
			set($settings.language === 'ar' ? 'rtl' : 'ltr');
		}, 1000);
	},
	'not decided yet...'
);

export default direction;
