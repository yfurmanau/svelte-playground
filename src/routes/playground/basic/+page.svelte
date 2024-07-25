<script>
	let name = 'Svelte';
	let src = 'https://picsum.photos/150/150';
	let html = 'Some <strong>string</strong> with html.';
</script>

<div>
	<img {src} alt="A random image" />
	<h1>Hello {name.toUpperCase()}</h1>
	<p>{@html html}</p>
</div>

<style>
	h1 {
		color: red;
	}
</style>
