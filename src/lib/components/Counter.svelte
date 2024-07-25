<script>
	/* props */
	export let initialCount = 0;

	/* state */
	let count = initialCount;

	/* reactive statement */
	$: string = `You have clicked ${count} times`;

	$: if (count > 5) {
		console.log(`The count is ${count}`);
	}

	const increment = () => {
		count++;
	};

	console.log($$props);
	console.log($$restProps);
</script>

<button on:click={increment}>Clicks {count}</button>
<h3>{string}</h3>

<style>
	button {
		padding: 15px 20px;
	}
</style>
