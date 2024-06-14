<script>
  import Button from "./lib/Button.svelte";
  import { FaAngellist } from "svelte-icons/fa";
  import TodoList from "./lib/TodoList.svelte";
  import { v4 as uuid } from "uuid";

  let todos = [
    {
      id: uuid(),
      title: "Learn Svelte",
      completed: true,
    },
    {
      id: uuid(),
      title: "Learn React",
      completed: false,
    },
    {
      id: uuid(),
      title: "Learn Vue",
      completed: false,
    },
  ];
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

<h2>{todos.length} Todos</h2>
<TodoList bind:todos />

<style>
</style>
