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

const { Header, Footer, Content } = Layout;

export const MediaDetails = () => {
  const loading = useAppSelector(loadingSelector);
  const loadingSimilar = useAppSelector(loadingSimilarSelector);
  const mediaDetails = useAppSelector(mediaDetailsSelector);
  return (
    <Layout>
      <Header className="header">Popular Now</Header>
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
      <Footer className="footer">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
          alt="THE MOVIE DB"
          width="100"
        />
        <span className="footerText">
          {" "}
          All data and images have been pulled from
          <a href="https://www.themoviedb.org/">The Movie DB</a>
        </span>
      </Footer>
    </Layout>
  );
};
