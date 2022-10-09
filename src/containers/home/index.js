import React from "react";
import styled from "styled-components";
import { Activities } from "../../components";
import { Goal, NewsAndCampaigns } from "../../components";
const Home = () => {
  return (
    <HomeContent>
      <Activities />
      <Goal />
      <NewsAndCampaigns />
    </HomeContent>
  );
};
const HomeContent = styled.div`
  position: relative;
  padding-top: 120px;
`;

export default Home;
