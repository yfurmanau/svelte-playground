<script>
  import { v4 as uuid } from "uuid";

  export let todos = [];
  let inputText;

  const handleAddTodo = () => {
    if (!inputText) return;
    todos = todos.concat({
      id: uuid(),
      title: inputText,
      completed: false,
    });
    inputText = "";
  };
</script>

<div class="todo-list-wrapper">
  <ul>
    {#each todos as { id, title }, index (id)}
      {@const order = index + 1}
      <li>{order} - {title}</li>
    {/each}
  </ul>
  <form class="add-todo-form" on:submit|preventDefault={handleAddTodo}>
    <input bind:value={inputText} type="text" />
    <button type="submit" disabled={!inputText}>Add</button>
  </form>
</div>
