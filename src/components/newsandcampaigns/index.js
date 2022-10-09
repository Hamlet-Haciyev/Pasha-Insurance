import React from "react";
import { News } from "../";
import styled from "styled-components";
import { Container } from "../../GlobalStyled";

export const NewsAndCampaigns = () => {
  return (
    <NCampaigns>
      <Container>
        <SubNCampaigns>
          <NewsAndCampaignsCont>
            <span>News and Campaigns</span>
            <a href="/#">See All</a>
          </NewsAndCampaignsCont>
          <NewsItemContainer>
            <News itemName="New Partners!" itemLogoName={"newPartners"} />
            <News itemName="Train for Rewards" itemLogoName={"trainRewards"} />
            <News itemName="Data Privacy" itemLogoName={"dataPrivacy"} />
            <News itemName="Let's Start" itemLogoName={"letsStarts"} />
          </NewsItemContainer>
        </SubNCampaigns>
      </Container>
    </NCampaigns>
  );
};

const NCampaigns = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SubNCampaigns = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const NewsAndCampaignsCont = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-weight: 600;
    font-size: 16px;
  }
  a {
    text-decoration: none;
    font-weight: 500;
    font-size: 14px;
    color: #199cb4;
  }
`;

const NewsItemContainer = styled.div`
  display: flex;
  gap: 6px;
`;
