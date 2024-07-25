<svelte:options immutable={true} />

<script>
	import Button from '$lib/components/Button.svelte';
	import {
		afterUpdate,
		beforeUpdate,
		createEventDispatcher,
		onDestroy,
		onMount
	} from 'svelte';

	const dispatch = createEventDispatcher();

	export const readonly = 'read only';
	let inputText = '';
	export let todos = [];
	let prevTodos = todos;
	let autoscroll;

	$: {
		autoscroll = todos.length !== prevTodos.length;
		prevTodos = todos;
	}

	export const clearInput = () => {
		inputText = '';
	};

	let input;
	export const focusInput = () => {
		input.focus();
	};

	let listDiv;

	beforeUpdate(() => {
		//
	});

	afterUpdate(() => {
		if (autoscroll) {
			listDiv.scrollTo(0, listDiv?.offsetHeight);
		}
		autoscroll = false;
	});

	onMount(() => {
		console.log('Mounted');
	});

	onDestroy(() => {
		console.log('Destroyed');
	});

	const handleAddTodo = () => {
		if (!inputText) return;
		const isNotCancelled = dispatch(
			'addtodo',
			{
				title: inputText
			},
			{ cancelable: true }
		);
		if (isNotCancelled) {
			inputText = '';
		}
	};

	const handleRemoveTodo = (id) => {
		dispatch('removetodo', {
			id
		});
	};

	const handleToggleTodo = (todo) => {
		dispatch('toggletodo', todo);
	};
</script>

<div class="todo-list-wrapper">
	<div bind:this={listDiv} class="todo-list">
		<ul>
			{#each todos as { title, id, completed }, index (id)}
				{@const number = index + 1}
				<li>
					<label>
						<input
							type="checkbox"
							checked={completed}
							on:input={(event) => {
								handleToggleTodo({
									id,
									title,
									completed: event.currentTarget.checked
								});
							}}
						/>
						{number}
						{title}
					</label>
					<button on:click={() => handleRemoveTodo(id)}>Remove</button
					>
				</li>
			{/each}
		</ul>
	</div>
	<form
		class="add-todo-form"
		on:submit|preventDefault={handleAddTodo}
	>
		<input bind:this={input} bind:value={inputText} type="text" />
		<Button type="submit" disabled={!inputText}>Add</Button>
	</form>
</div>

<style>
	.todo-list {
		max-height: 150px;
		overflow-y: auto;
	}
</style>
