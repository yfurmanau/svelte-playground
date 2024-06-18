<script>
  import tippy from "./lib/actions/tippy";

  let content = "Hello my friend";
</script>

<input type="text" bind:value={content} />

<button
  use:tippy={{
    content,
    placement: "right",
    theme: "light",
  }}
>
  Hover me
</button>
