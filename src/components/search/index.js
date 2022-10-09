import React from "react";
import Icon from "../../helpers/icon";
import styled from "styled-components";
// import Input from "antd/lib/input/Input";
import { Input } from "antd";
export const Search = () => {
  return (
    <SearchingContainer>
      <SearchingSubContainer>
        <InputContainer>
          <Input
            size="small"
            style={{
              display: "flex",
              alignItems: "center",
            }}
            placeholder="Search for a partner..."
            prefix={
              <IconContainer>
                <Icon name="search" />
              </IconContainer>
            }
          />
        </InputContainer>
      </SearchingSubContainer>
      <SettingsContainer>
        <Icon name="settings" />
      </SettingsContainer>
    </SearchingContainer>
  );
};
const IconContainer = styled.span`
  display: flex;
  align-items: center;
  margin-right: 6px;
`;

const SearchingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 25px;
  .ant-input {
    border: 0;
    color: white;
    background-color: transparent;
  }
  .ant-input-affix-wrapper {
    background: transparent;
    border: 0;
    width: 300px;
  }
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 14px;
  border-radius: 11px;
  background: linear-gradient(
    90.58deg,
    rgba(228, 228, 228, 0.31) 2.27%,
    rgba(228, 228, 228, 0.2356) 50.5%,
    rgba(228, 228, 228, 0.2356) 50.5%
  );
  & input {
    outline: none;
    border: none;
    border-radius: 11px;
    color: black;
    &::placeholder {
      color: #ffffff;
    }
  }
`;

const SearchingSubContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  max-width: 300px;
`;

const SettingsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border-radius: 11px;
  width: 50px;
  height: 50px;
`;
