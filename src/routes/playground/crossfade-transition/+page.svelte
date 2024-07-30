<script>
	import { onMount } from 'svelte';
	import { crossfade, scale } from 'svelte/transition';

	let isLoading;
	let todos = null;
	let error = null;

	const [send, receive] = crossfade({
		duration: 400,
		fallback(node) {
			return scale(node, { start: 0.5, duration: 300 });
		}
	});

	$: done = todos ? todos.filter((t) => t.completed) : [];
	$: todo = todos ? todos.filter((t) => !t.completed) : [];

	onMount(() => {
		loadTodos();
	});

	const loadTodos = async () => {
		isLoading = true;
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/todos?_limit=10'
		);
		if (response.ok) {
			todos = await response.json();
		} else {
			error = 'An error has occurred';
		}
		isLoading = false;
	};
</script>

<div style:display="flex">
	{#each [todo, done] as list, index}
		<div class="list-wrapper">
			<h2>{index === 0 ? 'Todo' : 'Done'}</h2>
			<ul>
				{#if isLoading}
					<p>loading...</p>
				{:else if error}
					<p>{error}</p>
				{:else if todos}
					{#each list as todo (todo.id)}
						{@const { id, title, completed } = todo}
						<li in:receive={{ key: id }} out:send={{ key: id }}>
							<label>
								<input
									bind:checked={todo.completed}
									type="checkbox"
								/>
								<span class="title">
									{title}
								</span>
							</label>
							<button>x</button>
						</li>
					{/each}
				{/if}
			</ul>
		</div>
	{/each}
</div>
