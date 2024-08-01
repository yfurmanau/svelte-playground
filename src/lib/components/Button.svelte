<script context="module">
	let totalButtons = 0;

	export const getTotalButtons = () => totalButtons;
</script>

<script>
	import { onDestroy, onMount } from 'svelte';

	export let size = 'small';
	export let shadow = false;
	export let bgColor = 'red';
	export let textColor = 'white';

	let isLeftHovered = false;

	onMount(() => {
		totalButtons++;
	});

	onDestroy(() => {
		totalButtons--;
	});

	console.log($$slots);
	console.log($$restProps);
</script>

<button
	style:background-color={bgColor}
	style:color={textColor}
	class:size-lg={size === 'large'}
	class:size-sm={size === 'small'}
	class:has-left={$$slots.leftContent}
	class:shadow
	{...$$restProps}
	on:click
>
	{#if $$slots.leftContent}
		<div
			class="left-content"
			on:mouseenter={() => (isLeftHovered = true)}
			on:mouseleave={() => (isLeftHovered = false)}
		>
			<slot name="leftContent" />
		</div>
	{/if}
	<slot slotProp="Prop from slot" {isLeftHovered}>Fallback</slot>
</button>

<style lang="scss">
	@use '../../styles/variables';

	button {
		display: flex;
		align-items: center;
		border: none;
		background-color: variables.$mainColor;
		color: #fff;
		font-weight: bold;
		border-radius: 5px;
		cursor: pointer;
		.left-content {
			margin-right: 10px;
		}
		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}
		&:hover {
			background-image: linear-gradient(rgba(0, 0, 0, 0.4) 0 0);
		}
		&:active {
			background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0 0);
		}
		&.size-sm {
			padding: 15px 20px;
		}
		&.size-lg {
			padding: 20px 25px;
			font-size: 20px;
		}
		&.shadow {
			box-shadow: 0 0 10px rgba(1, 1, 1, 0.6);
		}
	}
</style>
