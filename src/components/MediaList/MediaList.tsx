import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import { Media, MediaType, MediaTypes } from "../../types/Media";
import { BASE_IMAGE_URL, GRID_OPTIONS } from "./MediaList.constants";

const { Meta } = Card;

export const MediaList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loading = useAppSelector(loadingSelector);
  const movies = useAppSelector(allMoviesSelector);
  const tvShows = useAppSelector(allTvShowsSelector);
  let pathname = useLocation().pathname.slice(1) as MediaType;

  const onClickHandler = (id?: number) => {
    dispatch(getMediaDetailsAsync({ mediaType: pathname, id }));
    dispatch(getSimilarMediaAsync({ mediaType: pathname, id }));
    navigate(`/${id}`);
  };
  return (
    <div>
      {loading ? (
        "loading"
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
