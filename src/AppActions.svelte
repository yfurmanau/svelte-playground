<script>
  import longpress from "./lib/actions/longpress.js";

  let showButton = true;
  let duration = 1000;
</script>

<label>
  <input bind:checked={showButton} type="checkbox" />
</label>

<label>
  <input bind:value={duration} max="4000" step="100" type="range" />
  {duration}ms
</label>

{#if showButton}
  <button
    use:longpress={{ duration }}
    on:longpress={() => console.log("long pressed")}
  >
    Hello
  </button>
{/if}

<style></style>
