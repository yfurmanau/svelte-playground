<script>
	import { onMount } from 'svelte';
	import image from '$lib/assets/copenhagen.jpg';
	let angle = 0;
	let colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF'];
	let currentColorIndex = 0;

	onMount(() => {
		const rotateText = () => {
			angle += 1;
			requestAnimationFrame(rotateText);
		};

		const changeColor = () => {
			currentColorIndex = (currentColorIndex + 1) % colors.length;
			setTimeout(changeColor, 1000); // Change color every 1 second
		};

		rotateText();
		changeColor();
	});
</script>

<div class="container">
	<div
		class="rotating-text"
		style="transform: rotate({angle}deg); color: {colors[
			currentColorIndex
		]}"
	>
		From Kathmandu to Copenhagen
	</div>
	<img src={image} alt="Person going to Copenhagen" />
</div>

<style>
	.container {
		margin-top: 300px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		text-align: center;
	}

	.rotating-text {
		font-size: 3rem;
		font-weight: bold;
		display: inline-block;
		margin: 20px;
		transition: color 0.5s ease;
	}

	img {
		width: 300px;
		height: auto;
		border-radius: 8px;
	}
</style>
