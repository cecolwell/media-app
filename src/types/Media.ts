export enum MediaTypes {
  MOVIE = "movies",
  TVSHOW = "tv",
}

export interface Media {
  poster_path?: string;
  title?: string;
  vote_average?: number;
  id?: number;
  backdrop_path?: string;
}

export interface MediaDetails extends Media {
  overview?: string;
}

export interface MediaApiModel {
  backdrop_path?: string;
  id?: number;
  overview?: string;
  poster_path?: string;
  title?: string;
  vote_average?: number;
  name?: string;
}
