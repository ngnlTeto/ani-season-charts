<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { Button, Card, Divider, NativeSelect, NumberInput, Switch } from "@svelteuidev/core";
	import { TierTypes, getSelectableYears } from "../tooling";
	import type { SettingsInfo } from "../types";

	export let settings: SettingsInfo;

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
			bind:value={settings.selectedTierType}
		/>
		<div style="width: 5px; height: 55px;">
			<Divider orientation="vertical" />
		</div>
		<NativeSelect data={selectableYears} label="Year" bind:value={settings.selectedYear} />
		<NativeSelect
			data={["Winter", "Spring", "Summer", "Fall"]}
			label="Season"
			bind:value={settings.selectedSeason}
		/>
		<div style="width: 5px; height: 55px;">
			<Divider orientation="vertical" />
		</div>
		<div style="width: 120px">
			<NumberInput
				width="120"
				label="Anime count"
				description="Min: 5 / Max: 240"
				bind:value={settings.selectedAnimeCount}
				min={5}
				max={240}
				step={5}
			/>
		</div>
		<Switch label="Enable large cards in Tierlist" bind:checked={settings.largeImageInTierlist} />
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
