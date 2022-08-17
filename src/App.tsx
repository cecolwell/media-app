import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import { MainMenu } from "./components/MainMenu/MainMenu";
import {
  THE_MOVIE_DB_LOGO,
  THE_MOVE_DB_URL,
  THE_MOVIE_DB,
  FOOTER_TEXT,
  HEADER_TEXT,
} from "./constants";
import "./App.css";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <div>
      <Layout>
        <Header className="header">
          {HEADER_TEXT}
          <MainMenu />
        </Header>
        <Content className="content">
          <Outlet />
        </Content>
        <Footer className="footer">
          <img src={THE_MOVIE_DB_LOGO} alt={THE_MOVIE_DB} width="100" />
          <span className="footerText">
            {FOOTER_TEXT}
            <a href={THE_MOVE_DB_URL}>{THE_MOVIE_DB}</a>
          </span>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
