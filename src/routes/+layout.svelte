<script>
	import '../app.css';
	import settings from '$lib/stores/settings.js';
</script>

<svelte:head>
	{#if $settings.colorScheme === 'dark'}
		<style>
			:root {
				--backgroundColor: #1d1d1d;
				--textColor: #fff;
			}
		</style>
	{:else}
		<style>
			:root {
				--backgroundColor: #fff;
				--textColor: #1d1d1d;
			}
		</style>
	{/if}
</svelte:head>

<slot />
