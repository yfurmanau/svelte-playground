<script>
  import Button, { getTotalButtons } from "./lib/Button.svelte";

  let showButton = false;
  let total = 0;
</script>

<input bind:checked={showButton} type="checkbox" />

<Button>Button</Button>
<Button>Button</Button>
<Button>Button</Button>
{#if showButton}
  <Button>Button</Button>
{/if}

{total}
<button
  on:click={() => {
    total = getTotalButtons();
  }}>Update buttons count</button
>
