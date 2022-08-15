import React from "react";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

export const MediaDetails = () => {
  return (
    <Layout>
      <Header className="header">Popular Now</Header>
      <Content className="content"></Content>
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
