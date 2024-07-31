<script>
	import settings from '$lib/stores/settings.js';
	import location from '$lib/stores/location.js';
</script>

<h1>Home</h1>

{$location?.latitude}
{$location?.longitude}
{$settings.colorScheme}
