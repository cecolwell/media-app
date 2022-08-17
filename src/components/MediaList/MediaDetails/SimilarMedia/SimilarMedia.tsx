import React from "react";
import { Card } from "antd";
import { useAppSelector } from "../../../../redux/hooks";
import { similarMediaSelector } from "../../../../redux/mediaDetailsSlice";
import { BASE_IMAGE_URL, LIST_IMAGE_WIDTH } from "../../MediaList.constants";
import { convertRatingToPercentage } from "../../MediaList.utils";
import "./SimilarMedia.css";

const { Meta } = Card;

export const SimilarMedia = () => {
  const similarMedia = useAppSelector(similarMediaSelector);
  return (
    <>
      <div className="recommendationText">You may also like...</div>
      <div className="scrollContainer">
        {similarMedia.map((media) => (
          <Card
            className="similarCard"
            cover={
              <img
                alt={media.title}
                src={`${BASE_IMAGE_URL}${LIST_IMAGE_WIDTH}${media.backdrop_path}`}
              />
            }
            bordered={false}
          >
            <Meta
              title={media.title}
              description={convertRatingToPercentage(media.vote_average)}
            />
          </Card>
        ))}
      </div>
    </>
  );
};
