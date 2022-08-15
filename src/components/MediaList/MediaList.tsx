import React from "react";
import { List, Card } from "antd";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  allMoviesSelector,
  allTvShowsSelector,
  loadingSelector,
} from "../../redux/mediaSlice";
import {
  getMediaDetailsAsync,
  getSimilarMediaAsync,
} from "../../redux/mediaDetailsSlice";
import { Media, MediaTypes } from "../../types/Media";
import { MediaListProps } from "./MediaList.types";
import { BASE_IMAGE_URL, GRID_OPTIONS } from "./MediaList.constants";

const { Meta } = Card;

export const MediaList = ({ mediaType }: MediaListProps) => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(loadingSelector);
  const movies = useAppSelector(allMoviesSelector);
  const tvShows = useAppSelector(allTvShowsSelector);

  const onClickHandler = (id?: number) => {
    dispatch(getMediaDetailsAsync({ mediaType, id }));
    dispatch(getSimilarMediaAsync({ mediaType, id }));
  };
  return (
    <div>
      {loading ? (
        "loading"
      ) : (
        <List
          grid={GRID_OPTIONS}
          dataSource={mediaType === MediaTypes.MOVIE ? movies : tvShows}
          renderItem={(media: Media) => (
            <List.Item key={media.id} onClick={() => onClickHandler(media.id)}>
              <Card
                hoverable
                className="card"
                cover={
                  <img
                    alt={media.title}
                    src={`${BASE_IMAGE_URL}${media.poster_path}`}
                  />
                }
              >
                <Meta title={media.title} description={media.vote_average} />
              </Card>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};
