<script>
  import Button from "./lib/Button.svelte";
  import { FaAngellist } from "svelte-icons/fa";
</script>

<Button let:isLeftHovered size="small" shadow bgColor="red" textColor="white">
  <div style="width: 20px" slot="leftContent">
    <FaAngellist />
  </div>
  Please click me! {isLeftHovered}
</Button>

<style>
</style>
