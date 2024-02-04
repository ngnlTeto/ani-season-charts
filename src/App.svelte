<script lang="ts">
	import { Center, Title } from "@svelteuidev/core";
	import { getCurrentSeason } from "./lib/tooling";
	import Settings from "./lib/components/Settings.svelte";
	import { fetchApiByAwait } from "./lib/anilistApi";
	import type { Anime, SettingsInfo } from "./lib/types";
	import Basket from "./lib/components/Basket.svelte";

	let settings: SettingsInfo = {
		selectedYear: new Date().getFullYear().toString(),
		selectedSeason: getCurrentSeason(),
		selectedAnimeCount: 60,
		selectedTierType: "Want to watch",
		largeImageInTierlist: false,
	};
	let seasonalAnime: Anime[] = [];

	async function reloadData() {
		seasonalAnime = await fetchApiByAwait({
			perPage: settings.selectedAnimeCount,
			seasonYear: Number(settings.selectedYear),
			season: settings.selectedSeason.toUpperCase(),
		});
	}
</script>

<div class="title-wrapper">
	<Center>
		<Title weight="semibold">AniSeason Charts</Title>
	</Center>
</div>

<div class="settings">
	<Settings	bind:settings	on:applySettings={reloadData}	/>
</div>

<div class="no-tier-basket">
	<Basket name="no-tier" bind:list={seasonalAnime} />
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
