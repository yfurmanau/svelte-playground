<script>
	import TodoList from '$lib/components/TodoList.svelte';
	import { v4 as uuid } from 'uuid';

	let todoList;

	let todos = [
		{
			id: uuid(),
			title: 'Learn SvelteKit',
			completed: true
		},
		{
			id: uuid(),
			title: 'Learn NestJs',
			completed: true
		},
		{
			id: uuid(),
			title: 'Learn MongoDb',
			completed: false
		}
	];

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
</script>

<div style="max-height: 200px; overflow: auto">
	<pre>
	{JSON.stringify(todos, null, 2)}
</pre>
</div>

{todoList?.readonly}
<div style="max-width: 200px">
	<TodoList
		{todos}
		bind:this={todoList}
		on:addtodo={addNewTodo}
		on:removetodo={removeTodo}
		on:toggletodo={toggleTodo}
	/>
</div>

<button on:click={todoList.focusInput}> Focus input </button>
