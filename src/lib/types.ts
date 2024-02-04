export interface Anime {
  id: number;
  name: string;
  imageUri: string;
  episodeCount: number;
  aniListUrl: string;
}

export interface QueryParams {
  seasonYear: number;
  season: string;
  perPage: number;
}

export interface TierType {
  name: string;
  tierNames: string[];
}

export interface SettingsInfo {
  selectedYear: string;
  selectedSeason: string;
  selectedAnimeCount: number;
  selectedTierType: string;
  largeImageInTierlist: boolean;
}
