import type { Anime, QueryParams } from "$lib/types";

const query = `
query ($id: Int, $seasonYear: Int, $season: MediaSeason, $page: Int, $perPage: Int) {
  Page (page: $page, perPage: $perPage) {
    media (id: $id
      seasonYear: $seasonYear
      season: $season
      type: ANIME
      sort: [POPULARITY_DESC, SCORE_DESC]
      ) {
      id
      title {
        english
        romaji
      }
      coverImage {
        large
      }
      episodes
      siteUrl
    }
  }
}`;

const url = "https://graphql.anilist.co";

function getBody(variables: any): string {
  return JSON.stringify({
    query: query,
    variables: variables,
  });
}

export async function fetchApiByAwait(params: QueryParams): Promise<Anime[]> {
  const response = await fetchApiByPromise(params);
  const result: Anime[] = [];
  const json = await response.json()
  if (response.status === 200) {
    const mediaList: any[] = json.data.Page.media;
    result.push(...mediaList.map((media) => {
      return {
        id: media.id,
        name: media.title.english ?? media.title.romaji ?? "No Title",
        imageUri: media.coverImage.large,
        aniListUrl: media.siteUrl,
        episodeCount: media.episodes
      };
    }));
  } else {
    console.error("Fetching Error: ", response);
    Promise.reject(json);
  }
  return result;
}

function fetchApiByPromise(params: QueryParams): Promise<Response> {
  const variables = {
    seasonYear: params.seasonYear,
    season: params.season,
    perPage: params.perPage,
    page: 0,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: getBody(variables),
  };
  return fetch(url, options);
}
