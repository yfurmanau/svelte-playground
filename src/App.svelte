<img {src} alt="Random picture" />
<h1>Hello {name.toUpperCase()}!</h1>
<p>{@html string}</p>

<script>
  let name = "Svelte";
  let src = "https://picsum.photos/200/200";
  let string = "Some <em>string</em> with html";
</script>

<style>
  h1 {
    color: blueviolet;
  }
</style>
