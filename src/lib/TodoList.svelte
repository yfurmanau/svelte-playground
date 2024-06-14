<script>
  import {
    afterUpdate,
    beforeUpdate,
    createEventDispatcher,
    onDestroy,
    onMount,
  } from "svelte";

  export let todos = [];
  let prevTodos = todos;
  let inputText;
  let listDivHeight;

  $: {
    prevTodos = todos;
  }

  const dispatch = createEventDispatcher();
  let listDiv;

  onMount(() => {
    console.log("[TodoList] mounted");
    return () => {
      console.log("[TodoList] destroyed from onMount");
    };
  });

  beforeUpdate(() => {
    console.log("[TodoList] before updated");
  });

  afterUpdate(() => {
    console.log("[TodoList] after updated");
    listDiv.scrollTo(0, listDiv.scrollHeight);
  });

  onDestroy(() => {
    console.log("[TodoList] destroyed");
  });

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
  {listDivHeight}
  <div class="todo-list" bind:offsetHeight={listDivHeight} bind:this={listDiv}>
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
  </div>
  <form class="add-todo-form" on:submit|preventDefault={handleAddTodo}>
    <input bind:value={inputText} type="text" />
    <button type="submit" disabled={!inputText}>Add</button>
  </form>
</div>

<style>
  .todo-list {
    max-height: 150px;
    overflow: auto;
  }
</style>
