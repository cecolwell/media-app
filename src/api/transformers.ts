import { MediaApiModel, Media, MediaDetails } from "../types/Media";

export const toMediaModel = (media: MediaApiModel): Media => {
  return {
    poster_path: media.poster_path,
    title: media.title ?? media.name,
    vote_average: media.vote_average,
    id: media.id,
    backdrop_path: media.backdrop_path,
  };
};

export const toListView = (media: MediaApiModel[]): Media[] => {
  const transformedMedia = media.map((media) => toMediaModel(media));
  return transformedMedia;
};

export const toDetailsView = (media: MediaApiModel): MediaDetails => {
  return {
    poster_path: media.poster_path,
    title: media.title ?? media.name,
    vote_average: media.vote_average,
    id: media.id,
    backdrop_path: media.backdrop_path,
    overview: media.overview,
    tagline: media.tagline,
    release_date: media.release_date ?? media.first_air_date,
    last_air_date:
      media.last_air_date && media.status === "Ended"
        ? media.last_air_date
        : undefined,
  };
};
