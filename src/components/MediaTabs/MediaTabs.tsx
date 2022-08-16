import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs } from "antd";

import { useAppDispatch } from "../../redux/hooks";
import { getAllMediaAsync } from "../../redux/mediaSlice";
import { clearSelectedMovie } from "../../redux/mediaDetailsSlice";
import { MediaTypes } from "../../types/Media";
import { MediaList } from "../MediaList/MediaList";
import { MOVIES_TAB, TVSHOWS_TAB } from "./MediaTabs.constants";

const { TabPane } = Tabs;

export const MediaTabs = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllMediaAsync());
  });

  const onTabClickHandler = (key: string) => {
    dispatch(clearSelectedMovie());
    navigate(`/${key}`);
  };
  return (
    <Tabs
      size="large"
      defaultActiveKey={MOVIES_TAB.key}
      onTabClick={(key: string) => onTabClickHandler(key)}
    >
      <TabPane tab={MOVIES_TAB.label} key={MOVIES_TAB.key}>
        <MediaList mediaType={MediaTypes.MOVIE} />
      </TabPane>
      <TabPane tab={TVSHOWS_TAB.label} key={TVSHOWS_TAB.key}>
        <MediaList mediaType={MediaTypes.TVSHOW} />
      </TabPane>
    </Tabs>
  );
};
