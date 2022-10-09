import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../../GlobalStyled";
import Icon from "../../helpers/icon";
export const Footer = () => {
  return (
    <>
      <RoutesSection>
        <PageLinkGroup>
          <PageLink>
            <Link to="/">
              <Icon name={"home"} />
              Home
            </Link>
          </PageLink>
          <PageLink>
            <Link to="/rewards">
              <Icon name={"reward"} />
              Rewards
            </Link>
          </PageLink>
          <PageLink>
            <Link to="/history">
              <Icon name={"history"} />
              History
            </Link>
          </PageLink>
        </PageLinkGroup>
      </RoutesSection>
    </>
  );
};
const RoutesSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fbfbfb;
  box-shadow: 0px -0.5px 0px rgba(0, 0, 0, 0.3);
  padding: 20px 0;
  a {
    font-family: "Poppins", sans-serif;
    font-size: 13px;
    line-height: 12px;
    text-align: center;
    color: #999999;
    margin-top: 5px;
  }
`;
const PageLinkGroup = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  svg {
    text-align: center;
  }
  /* margin: 0 auto; */
`;
const PageLink = styled.div`
  a {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
