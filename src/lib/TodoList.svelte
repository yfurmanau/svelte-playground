<script>
  import {
    afterUpdate,
    beforeUpdate,
    createEventDispatcher,
    onDestroy,
    onMount,
  } from "svelte";
  import { scale } from "svelte/transition";

  export let todos = null;
  let prevTodos = todos;
  let inputText;
  let listDivHeight;

  $: {
    prevTodos = todos;
  }

  const dispatch = createEventDispatcher();
  let listDiv;

  onMount(() => {
    return () => {};
  });

  beforeUpdate(() => {});

  // afterUpdate(() => {
  //   listDiv.scrollTo(0, listDiv.scrollHeight);
  // });

  onDestroy(() => {});

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
  {#if todos}
    <div
      class="todo-list"
      bind:offsetHeight={listDivHeight}
      bind:this={listDiv}
    >
      {#if todos.length === 0}
        <p class="no-items-text">No todos yet</p>
      {:else}
        <ul>
          {#each todos as { id, title, completed }, index (id)}
            {@const order = index + 1}
            <li transition:scale|local={{ start: 0.5 }} class:completed>
              <label>
                <input
                  type="checkbox"
                  checked={completed}
                  on:input={() => handleToggleTodo(id, !completed)}
                />
                {order} - {title}
                <button
                  class="remove-todo-button"
                  on:click={() => handleRemoveTodo(id)}
                >
                  Remove
                </button>
              </label>
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  {/if}
  <form class="add-todo-form" on:submit|preventDefault={handleAddTodo}>
    <input bind:value={inputText} type="text" />
    <button type="submit" disabled={!inputText}>Add</button>
  </form>
</div>

<style>
  .todo-list {
    max-height: 250px;
    overflow: auto;
  }
</style>
