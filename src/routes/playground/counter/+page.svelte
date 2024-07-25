<script>
	import Counter from '$lib/components/Counter.svelte';

	const initialCount = 3;
</script>

<Counter {initialCount} restProp="Some rest prop string" />
