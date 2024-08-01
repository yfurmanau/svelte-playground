<script>
	import Button, {
		getTotalButtons
	} from '$lib/components/Button.svelte';

	let showButton = false;
	let total;
</script>

<input bind:checked={showButton} type="checkbox" />

<Button />
<Button />
{#if showButton}
	<Button />
{/if}

<button on:click={() => (total = getTotalButtons())}
	>Update buttons count</button
>

{total}
