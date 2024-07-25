<script>
	import Button from '$lib/components/Button.svelte';
	import FaAngellist from 'svelte-icons/fa/FaAngellist.svelte';
	import FaBaseballBall from 'svelte-icons/fa/FaBaseballBall.svelte';

	const onButtonClick = () => {
		console.log('button clicked');
	};
</script>

<Button
	let:isLeftHovered
	size="small"
	bgColor="red"
	textColor="white"
	shadow
	on:click|once={onButtonClick}
>
	<div slot="leftContent">Click me please</div>
	<div style="width: 20px">
		{#if isLeftHovered}
			<FaAngellist />
		{:else}
			<FaBaseballBall />
		{/if}
	</div>
</Button>
<Button bgColor="magenta" textColor="lightgreen" size="large" />
<Button
	let:slotProp
	bgColor="magenta"
	textColor="lightgreen"
	size="small"
>
	{slotProp}
</Button>
<Button disabled>Disabled</Button>
