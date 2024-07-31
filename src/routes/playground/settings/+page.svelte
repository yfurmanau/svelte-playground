<script>
	import settings from '$lib/stores/settings.js';
</script>

<h1>Settings</h1>

<label>
	<input
		bind:group={$settings.colorScheme}
		type="radio"
		name="colorScheme"
		value="dark"
	/> Dark
</label>
<label>
	<input
		bind:group={$settings.colorScheme}
		type="radio"
		name="colorScheme"
		value="light"
	/> Light
</label>
