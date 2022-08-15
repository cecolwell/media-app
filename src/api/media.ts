import axios from "axios";

import { MediaTypes } from "../types/Media";
import { LOCAL_HOST_PATH, MEDIA_API_ROUTES } from "./constants";

export const fetchAllMovies = (): any => {
  return axios.request({ url: `${LOCAL_HOST_PATH}${MEDIA_API_ROUTES.MOVIES}` });
};
export const fetchAllTvShows = (): any => {
  return axios.request({ url: `${LOCAL_HOST_PATH}allTvShows` });
};

export const fetchMedia = (mediaType: MediaTypes, id?: number): any => {
  const route =
    mediaType === MediaTypes.MOVIE
      ? MEDIA_API_ROUTES.MOVIE
      : MEDIA_API_ROUTES.TVSHOW;
  return axios.request({
    url: `${LOCAL_HOST_PATH}${route}`,
    params: { id },
  });
};

export const fetchSimilarMedia = (mediaType: MediaTypes, id?: number): any => {
  const route =
    mediaType === MediaTypes.MOVIE
      ? MEDIA_API_ROUTES.SIMILAR_MOVIES
      : MEDIA_API_ROUTES.SIMILAR_TVSHOWS;
  return axios.request({
    url: `${LOCAL_HOST_PATH}${route}`,
    params: { id },
  });
};
