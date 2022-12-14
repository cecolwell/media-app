import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { List, Card, Spin } from "antd";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  allMoviesSelector,
  allTvShowsSelector,
  loadingSelector,
} from "../../redux/mediaSlice";
import {
  getMediaDetailsAsync,
  getSimilarMediaAsync,
  clearMediaDetails,
} from "../../redux/mediaDetailsSlice";
import {
  BASE_IMAGE_URL,
  LIST_IMAGE_WIDTH,
  GRID_OPTIONS,
} from "./MediaList.constants";
import { convertRatingToPercentage } from "./MediaList.utils";
import { Media, MediaType, MediaTypes } from "../../types/Media";
import "../../App.css";

const { Meta } = Card;

export const MediaList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useAppSelector(loadingSelector);
  const movies = useAppSelector(allMoviesSelector);
  const tvShows = useAppSelector(allTvShowsSelector);
  let pathname = useLocation().pathname.slice(1) as MediaType;

  useEffect(() => {
    dispatch(clearMediaDetails());
  });

  const onClickHandler = (id?: number) => {
    dispatch(getMediaDetailsAsync({ mediaType: pathname, id }));
    dispatch(getSimilarMediaAsync({ mediaType: pathname, id }));
    navigate(`/${id}`);
  };
  return (
    <div>
      {loading ? (
        <div className="loading">
          <Spin size="large" />
        </div>
      ) : (
        <List
          grid={GRID_OPTIONS}
          dataSource={
            pathname === MediaTypes.MOVIE || !pathname ? movies : tvShows
          }
          renderItem={(media: Media) => (
            <List.Item key={media.id} onClick={() => onClickHandler(media.id)}>
              <Card
                hoverable
                className="card"
                cover={
                  <img
                    alt={media.title}
                    src={`${BASE_IMAGE_URL}${LIST_IMAGE_WIDTH}${media.poster_path}`}
                  />
                }
              >
                <Meta
                  title={media.title}
                  description={convertRatingToPercentage(media.vote_average)}
                />
              </Card>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};
