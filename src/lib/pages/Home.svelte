<script>
  import settings from "../stores/settings.js";
  import location from "../stores/location.js";

  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  const scale = tweened(1, {
    duration: 200,
    easing: cubicOut,
  });
</script>

<h2>Home</h2>

{#if $location}
  {$location.latitude}
  {$location.longitude}
{/if}
{$settings.colorScheme}

<button on:click={() => ($scale += 1)}>Make it bigger</button>
<button on:click={() => ($scale -= 1)}>Make it smaller</button>
<div
  style="width: 100px; height: 100px; background-color: purple; transform: scale({$scale}); transform-origin: 0 0;"
/>
