<script lang="ts">
	import { Center, Title } from "@svelteuidev/core";
	import { getCurrentSeason } from "./lib/tooling";
	import Settings from "./lib/components/Settings.svelte";
	import { fetchApiByAwait } from "./lib/anilistApi";
	import type { Anime } from "./lib/types";
	import Basket from "./lib/components/Basket.svelte";

	let selectedYear: string = new Date().getFullYear().toString();
	let selectedSeason: string = getCurrentSeason();
	let selectedAnimeCount: number = 120;
	let selectedTierType: string = "Want to watch";
	let largeImageInTierlist: boolean = false;

	let seasonalAnime: Anime[] = [];

	async function reloadData() {
		seasonalAnime = await fetchApiByAwait({
			perPage: selectedAnimeCount,
			seasonYear: Number(selectedYear),
			season: selectedSeason.toUpperCase(),
		});
	}
</script>

<div class="title-wrapper">
	<Center>
		<Title weight="semibold">AniSeason Charts</Title>
	</Center>
</div>

<div class="settings">
	<Settings
		bind:selectedYear
		bind:selectedSeason
		bind:selectedAnimeCount
		bind:selectedTierType
		bind:largeImageInTierlist
		on:applySettings={reloadData}
	></Settings>
</div>

<div class="no-tier-basket">
	<Basket name="no-tier" bind:list={seasonalAnime}></Basket>
</div>

<style>
	.title-wrapper {
		margin: 40px 0px;
	}
	.settings {
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 40px;
		min-width: 691px;
		max-width: 60%;
	}
	.no-tier-basket {
		margin: 0px 10%;
	}
</style>
