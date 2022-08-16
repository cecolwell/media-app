import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "antd";

import { useAppDispatch } from "../../redux/hooks";
import { getAllMediaAsync } from "../../redux/mediaSlice";
import { MediaTypes } from "../../types/Media";
import { MOVIES_TAB, TVSHOWS_TAB, MENU_STYLES } from "./MainMenu.constants";

export const MainMenu = () => {
  const [current, setCurrent] = useState<string>(MOVIES_TAB.key);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const pathname = useLocation().pathname.slice(1);

  const onClick = (e: any) => {
    console.log("e.key", e.key);
    setCurrent(e.key);
    navigate(`/${e.key}`);
  };

  useEffect(() => {
    dispatch(getAllMediaAsync());
  });

  useEffect(() => {
    console.log("current", current);
  }, [current]);

  useEffect(() => {
    if (
      pathname &&
      pathname !== MediaTypes.MOVIE &&
      pathname !== MediaTypes.TVSHOW
    ) {
      console.log(pathname);
      setCurrent(" ");
    } else if (!pathname) {
      setCurrent(MOVIES_TAB.key);
    }
  }, [pathname]);

  const items = [
    {
      label: MOVIES_TAB.label,
      key: MOVIES_TAB.key,
    },
    {
      label: TVSHOWS_TAB.label,
      key: TVSHOWS_TAB.key,
    },
  ];

  return (
    <Menu
      style={MENU_STYLES}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
