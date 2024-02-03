<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { Button, Card, Divider, NativeSelect, NumberInput, Switch } from "@svelteuidev/core";
	import { TierTypes, getSelectableYears } from "$lib/tooling";

	export let selectedYear: string = "";
	export let selectedSeason: string = "";
	export let selectedAnimeCount: number = 0;
	export let selectedTierType: string = "";
	export let largeImageInTierlist: boolean = false;

	const dispatch = createEventDispatcher();

	let selectableYears: string[] = getSelectableYears();

	function applySettings() {
		dispatch("applySettings");
	}
</script>

<Card shadow="lg">
	<div class="settings-form">
		<NativeSelect
			data={TierTypes.map((x) => x.name)}
			label="Tier type"
			bind:value={selectedTierType}
		/>
		<div style="width: 5px; height: 55px;">
			<Divider orientation="vertical" />
		</div>
		<NativeSelect data={selectableYears} label="Year" bind:value={selectedYear} />
		<NativeSelect
			data={["Winter", "Spring", "Summer", "Fall"]}
			label="Season"
			bind:value={selectedSeason}
		/>
		<div style="width: 5px; height: 55px;">
			<Divider orientation="vertical" />
		</div>
		<div style="width: 120px">
			<NumberInput
				width="120"
				label="Anime count"
				description="Min: 10 / Max: 240"
				bind:value={selectedAnimeCount}
				min={10}
				max={240}
				step={5}
			></NumberInput>
		</div>
		<Switch label="Enable large cards in Tierlist" bind:value={largeImageInTierlist} />
		<div style="margin-left: auto;">
			<Button size="lg" on:click={applySettings}>Get Data</Button>
		</div>
	</div>
</Card>

<style>
	.settings-form {
		display: flex;
		flex-direction: row;
		gap: 15px;
		justify-content: flex-start;
		align-items: center;
	}
</style>
