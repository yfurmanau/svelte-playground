import { readable } from 'svelte/store';

const location = readable(null, (set) => {
	let watchId;
	if (navigator.geolocation) {
		watchId = navigator.geolocation.watchPosition(
			(position) => {
				const { longitude, latitude } = position.coords;
				set({ latitude, longitude });
			},
			(error) => {
				console.log('error', error);
			}
		);
	}
	return () => {
		navigator.geolocation.clearWatch(watchId);
		set(null);
	};
});

export default location;
