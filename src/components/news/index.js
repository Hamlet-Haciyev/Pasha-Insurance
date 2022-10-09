import React from "react";
import styled from "styled-components";
import Icon from "../../helpers/icon";

export const News = ({ itemName, itemLogoName }) => {
  return (
    <Campaigns>
      <span>
        <Icon name={itemLogoName} />
      </span>
      <span>{itemName}</span>
    </Campaigns>
  );
};

const Campaigns = styled.div`
  margin: 19px auto;
  padding: 11.78px 9.37px;
  background: #199cb4;
  border-radius: 11px;
  width: 92px;
  max-width: 92px;
  max-height: 92px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 14.6px;
  color: white;
  svg {
    width: 20px;
    height: 20px;
  }

  & span:first-child {
    text-align: right;
  }

  & span:nth-child(2) {
    max-width: 62px;
  }
`;
