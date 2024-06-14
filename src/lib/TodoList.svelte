<script>
  import { createEventDispatcher } from "svelte";

  export let todos = [];
  let inputText;

  const dispatch = createEventDispatcher();

  const handleAddTodo = () => {
    dispatch("addtodo", {
      title: inputText,
    });
    inputText = "";
  };

  const handleRemoveTodo = (id) => {
    dispatch("removetodo", {
      id,
    });
  };

  const handleToggleTodo = (id, value) => {
    dispatch("toggletodo", {
      id,
      completed: value,
    });
  };
</script>

<div class="todo-list-wrapper">
  <ul>
    {#each todos as { id, title, completed }, index (id)}
      {@const order = index + 1}
      <li>
        <label>
          <input
            type="checkbox"
            checked={completed}
            on:input={() => handleToggleTodo(id, !completed)}
          />
          {order} - {title}
          <button on:click={() => handleRemoveTodo(id)}>Remove</button>
        </label>
      </li>
    {/each}
  </ul>
  <form class="add-todo-form" on:submit|preventDefault={handleAddTodo}>
    <input bind:value={inputText} type="text" />
    <button type="submit" disabled={!inputText}>Add</button>
  </form>
</div>
