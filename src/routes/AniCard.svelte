<script lang="ts">
	import type { Anime } from "$lib/types";

	export let anime: Anime;
	export let small: boolean = false;
	let isCursorTouching: boolean = false;
</script>

{#if small}
	<div class="small-card">
		<img
		class="small-image"
		src={anime.imageUri}
		alt="cover art of the anime"
		width="100px"
		height="140px"
	/>
	</div>
{:else}
	<div
		class="card"
		role="group"
		on:mouseenter={() => {
			isCursorTouching = true;
		}}
		on:mouseleave={() => {
			isCursorTouching = false;
		}}
	>
		<img
			class="image"
			src={anime.imageUri}
			alt="cover art of the anime"
			width="140px"
			height="198px"
		/>
		{#if isCursorTouching}
			<div class="text-background">
				<a class="text" href={anime.aniListUrl} target="_blank">{anime.name}</a>
			</div>
		{/if}
	</div>
{/if}

<style>
	.card {
		position: relative;
		width: 140px;
		height: 198px;
		border-radius: 10px;
	}
	.image {
		border-radius: 10px;
	}
	.text-background {
		position: absolute;
		bottom: 0px;
		left: 0px;
		width: 130px;
		height: 60px;
		padding: 6px 4px 4px 6px;
		background-color: rgba(0, 0, 0, 0.7);
		z-index: 1;
		border-radius: 0px 0px 10px 10px;
	}
	.text {
		color: rgba(255, 255, 255, 0.8);
		font-family: Arial, Helvetica, sans-serif;
		font-weight: 540;
		font-size: 15.5px;

		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.text:link,
	.text:visited {
		text-decoration: none;
	}
	.text:hover,
	.text:active {
		color: white;
		text-decoration: underline;
	}

	.small-card {
		position: relative;
		width: 100px;
		height: 140px;
		border-radius: 10px;
	}
	.small-image {
		border-radius: 10px;
	}

</style>
