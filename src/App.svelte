<script>
  import Button from "./lib/Button.svelte";
  import { FaAngellist } from "svelte-icons/fa";
  import TodoList from "./lib/TodoList.svelte";
  import { v4 as uuid } from "uuid";
  import { onMount, tick } from "svelte";
  import { slide, blur, fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  let showList = true;

  let todos = null;

  const loadTodos = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
      );
      if (response.ok) {
        todos = await response.json();
      }
    } catch (error) {
      throw new Error("An error has occurred");
    }
  };

  onMount(() => {
    loadTodos();
  });

  const handleAddTodo = async (event) => {
    const { title } = event.detail;
    console.log(document.querySelectorAll(".todo-list ul li"));
    todos = todos.concat({
      id: uuid(),
      title,
      completed: false,
    });
    await tick();
    console.log(document.querySelectorAll(".todo-list ul li"));
  };

  const handleRemoveTodo = (event) => {
    const { id } = event.detail;
    todos = todos.filter((todo) => todo.id !== id);
  };

  const handleToggleTodo = (event) => {
    const { id, completed } = event.detail;
    todos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
  };
</script>

<Button
  let:isLeftHovered
  size="small"
  shadow
  bgColor="red"
  textColor="white"
  disabled
  on:click|once={() => alert("Hello world")}
>
  <div style="width: 20px" slot="leftContent">
    <FaAngellist />
  </div>
  Please click me! {isLeftHovered}
</Button>

<label>
  <input type="checkbox" bind:checked={showList} />
  Show/Hide list
</label>

{#if showList}
  <div
    in:slide={{ duration: 700, easing: cubicOut }}
    out:blur={{ amount: 10, duration: 700 }}
    on:introstart={() => console.log("introstart")}
    on:introend={() => console.log("introtend")}
    on:outrostart={() => console.log("outrostart")}
    on:outroend={() => console.log("outroend")}
    style="max-width: 400px"
  >
    <TodoList
      {todos}
      on:addtodo={handleAddTodo}
      on:removetodo={handleRemoveTodo}
      on:toggletodo={handleToggleTodo}
    />
  </div>
  {#if todos}
    <p>
      Number of todos:
      {#key todos.length}
        <div in:fly={{ y: -10 }}>{todos.length}</div>
      {/key}
    </p>
  {/if}
{/if}

<style>
</style>
