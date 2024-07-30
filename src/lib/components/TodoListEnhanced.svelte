<script>
	import { onMount } from 'svelte';
	import { v4 as uuid } from 'uuid';
	import { slide, blur, scale, fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	let todos = null;
	let error = null;
	let isLoading = false;
	let todoTitle = '';
	let showList = true;

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

	const onNewTodoAdd = () => {
		todos = [
			{
				id: uuid(),
				title: todoTitle,
				completed: false
			},
			...todos
		];
		todoTitle = '';
	};

	const onTodoRemove = (id) => {
		todos = todos.filter((todo) => todo.id !== id);
	};
</script>

<label>
	<input bind:checked={showList} type="checkbox" />
	Show List
</label>
{#if showList}
	<div
		in:slide={{ duration: 700 }}
		out:blur={{ amount: 10, duration: 700 }}
		on:introstart={() => console.log('introstart')}
		on:introend={() => console.log('introend')}
		on:outrostart={() => console.log('outrostart')}
		on:outroend={() => console.log('outroend')}
	>
		<ul>
			{#if isLoading}
				<p>loading...</p>
			{:else if error}
				<p>{error}</p>
			{:else if todos}
				{#each todos as todo (todo.id)}
					{@const { id, title } = todo}
					<li
						animate:flip={{ duration: 300 }}
						transition:scale|local={{ start: 0.5, duration: 300 }}
					>
						<label>
							<input type="checkbox" />
							<span class="title">
								{title}
							</span>
						</label>
						<button on:click={() => onTodoRemove(id)}>x</button>
					</li>
				{/each}
			{/if}
		</ul>
		<input bind:value={todoTitle} type="text" />
		<button on:click={onNewTodoAdd}>Add</button>
	</div>
	{#if todos}
		<p>
			Number of todos:
			{#key todos.length}
				<span style="display: inline-block" in:fly|local={{ y: -10 }}>
					{todos.length}
				</span>
			{/key}
		</p>
	{/if}
{/if}

<style lang="scss">
	ul {
		padding-left: 0;
	}
	li {
		list-style: none;
	}
	input[type='checkbox']:checked + .title {
		text-decoration: line-through;
	}
</style>
