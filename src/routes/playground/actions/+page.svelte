<script>
	import longpress from '$lib/actions/longpress.js';

	let showButton = true;
	let duration = 1000;
</script>

<label>
	<input bind:value={duration} max={4000} step={100} type="range" />
	{duration} ms
</label>

<label>
	<input bind:checked={showButton} type="checkbox" />
	Toggle
</label>

{#if showButton}
	<button
		use:longpress={{ duration }}
		on:longpress={() => alert('it has been pressed for too long...')}
	>
		Hello
	</button>
{/if}
