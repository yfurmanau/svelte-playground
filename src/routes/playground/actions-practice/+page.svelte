<script>
	import longpress from '$lib/actions/longpress.js';
	import tippyAction from '$lib/actions/tippy.js';
	import tippy from 'tippy.js';
	import 'tippy.js/dist/tippy.css';
	import { onMount } from 'svelte';

	let showButton = true;
	let duration = 1000;

	onMount(() => {
		tippy('.tooltip', {
			content: 'tooltip content'
		});
	});
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

<div>
	<button class="tooltip">Hover me!</button>
	<button class="tooltip" data-tippy-content="Some other text">
		Hover me!
	</button>
</div>

<div>
	<button use:tippyAction={{ content: 'text from action' }}>
		Tippy hovering
	</button>
</div>
