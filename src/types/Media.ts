// export enum MediaTypes {
//   MOVIE = "movies",
//   TVSHOW = "tv",
// }

export const MediaTypes = {
  MOVIE: "movies",
  TVSHOW: "tv",
} as const;

export type MediaType = typeof MediaTypes[keyof typeof MediaTypes];
export interface Media {
  poster_path?: string;
  title?: string;
  vote_average?: number;
  id?: number;
  backdrop_path?: string;
}

export interface MediaDetails extends Media {
  overview?: string;
  tagline: string;
  release_date?: string;
}

export interface MediaApiModel {
  backdrop_path?: string;
  id?: number;
  overview?: string;
  poster_path?: string;
  title?: string;
  vote_average?: number;
  name?: string;
  tagline: string;
  release_date?: string;
  first_air_date?: string;
}
