<script>
  export let initialCount;
  export let maxCount;
  let count = initialCount;

  // reactive statement
  $: string = `You have clicked ${count} times`;

  function increment() {
    if (count === maxCount) return;
    count++;
  }
</script>

<button on:click={increment}>Clicks {count}</button>
<h3>{string}</h3>

<style>
  button {
    padding: 15px;
  }
</style>
