<script>
	import settings from '$lib/stores/settings.js';
	import direction from '$lib/stores/direction.js';
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

<button on:click={() => settings.toggleColorScheme()}>
	Toggle Color Scheme
</button>

{$settings.language}
<button
	on:click={() => settings.updateSetting('language', Math.random())}
>
	Update language
</button>

<button on:click={() => settings.reset()}>Reset settings</button>

<br />

<select bind:value={$settings.language}>
	<option value="en">English</option>
	<option value="ar">Arabic</option>
</select>

{$direction}
