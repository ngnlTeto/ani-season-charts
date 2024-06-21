<script lang="ts">
	import type { Anime } from "../types";
	import AniCard from "./AniCard.svelte";

	export let name: string = "";
	export let list: Anime[] = [];
	export let hoveringOverBasket: string | null = null;
</script>

<div
	role="group"
	class="basket"
	class:hoverbasket={hoveringOverBasket === name}
	on:dragenter={() => (hoveringOverBasket = name)}
	on:dragleave={() => (hoveringOverBasket = null)}
>
	{#if list}
		{#each list as anime}
			<AniCard {anime}></AniCard>
		{/each}
	{/if}
</div>

<style>
	.basket {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
		gap: 12px;
		padding: 10px;
		min-height: 140px;
	}
	.hoverbasket {
		border: 1px solid rgb(232, 58, 87);
	}
</style>
