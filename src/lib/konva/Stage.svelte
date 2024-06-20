<script>
  import Konva from "konva";
  import { onDestroy, onMount, setContext } from "svelte";
  import { stageKey } from "./contest-keys.js";

  export let width;
  export let height;
  let stage;

  let container;

  setContext(stageKey, { getStage: () => stage });

  onMount(() => {
    stage = new Konva.Stage({
      container,
      width,
      height,
    });
  });

  onDestroy(() => {
    stage?.destroy();
  });
</script>

<div bind:this={container}>
  {#if stage}
    <slot />
  {/if}
</div>
