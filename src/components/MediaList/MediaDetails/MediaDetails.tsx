import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import { Layout, Badge } from "antd";
import {
  loadingSelector,
  loadingSimilarSelector,
  mediaDetailsSelector,
} from "../../../redux/mediaDetailsSlice";
import { BASE_IMAGE_URL, DETAILS_IMAGE_WIDTH } from "../MediaList.constants";
import {
  convertRatingToPercentage,
  getRatingBadgeColor,
  getReleaseYear,
} from "../MediaList.utils";
import { SimilarMedia } from "./SimilarMedia/SimilarMedia";
import "./MediaDetails.css";

const { Content } = Layout;

export const MediaDetails = () => {
  const loading = useAppSelector(loadingSelector);
  const loadingSimilar = useAppSelector(loadingSimilarSelector);
  const mediaDetails = useAppSelector(mediaDetailsSelector);
  return (
    <Layout>
      {loading || loadingSimilar ? (
        "loading"
      ) : (
        <>
          <Content className="content contentContainer">
            <Badge.Ribbon
              text={convertRatingToPercentage(mediaDetails.vote_average)}
              color={getRatingBadgeColor(mediaDetails.vote_average)}
            >
              <img
                alt={mediaDetails.title}
                src={`${BASE_IMAGE_URL}${DETAILS_IMAGE_WIDTH}${mediaDetails.backdrop_path}`}
              />
            </Badge.Ribbon>
            <div className="content contentDetails">
              <div className="mediaTitle">
                {mediaDetails.title}
                <span className="mediaReleaseDate">
                  ({getReleaseYear(mediaDetails.release_date)})
                </span>
                <div className="tagline">{mediaDetails.tagline}</div>
              </div>
              {mediaDetails.overview}
            </div>
          </Content>
          <SimilarMedia />
        </>
      )}
    </Layout>
  );
};
