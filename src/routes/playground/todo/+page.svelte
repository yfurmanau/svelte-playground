<script>
	import TodoList from '$lib/components/TodoList.svelte';
	import { v4 as uuid } from 'uuid';

	let todoList;

	let todos = [];

	const addNewTodo = (event) => {
		event.preventDefault();
		todos = todos.concat({
			id: uuid(),
			title: event.detail.title,
			completed: false
		});
		todoList?.clearInput();
	};

	const removeTodo = (event) => {
		todos = todos.filter((todo) => todo.id !== event.detail.id);
	};

	const toggleTodo = (event) => {
		todos = todos.map((t) => {
			if (t.id === event.detail.id) {
				return {
					...t,
					completed: event.detail.completed
				};
			}
			return t;
		});
	};

	const loadTodos = () => {
		return fetch(
			'https://jsonplaceholder.typicode.com/todos?_limit=10'
		).then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error('An error has occured');
			}
		});
	};

	let promise = loadTodos();
</script>

<div style="max-height: 200px; overflow: auto">
	<pre>
	{JSON.stringify(todos, null, 2)}
</pre>
</div>

{todoList?.readonly}
{#await promise}
	<p>Loading...</p>
{:then todos}
	<div style="max-width: 400px">
		<TodoList
			{todos}
			bind:this={todoList}
			on:addtodo={addNewTodo}
			on:removetodo={removeTodo}
			on:toggletodo={toggleTodo}
		/>
	</div>
{:catch error}
	<p>{error.message || 'An error happened'}</p>
{/await}
<button on:click={() => (promise = loadTodos())}>Refresh</button>
<button on:click={todoList.focusInput}> Focus input </button>
