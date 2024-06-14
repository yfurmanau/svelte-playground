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

  const handleAddTodo = (event) => {
    const { title } = event.detail;
    todos = todos.concat({
      id: uuid(),
      title,
      completed: false,
    });
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

<TodoList
  {todos}
  on:addtodo={handleAddTodo}
  on:removetodo={handleRemoveTodo}
  on:toggletodo={handleToggleTodo}
/>

<style>
</style>
