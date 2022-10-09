import React from "react";
import styled from "styled-components";

export const History = () => {
  return (
    <HistoryCompContainer>
      <span>Stats for October 8</span>
      <StepsContainer>
        <StepsCounter>
          <span>Steps</span>
          <CounterTask>
            <span>5000</span>
            <span>/</span>
            <span>6500</span>
          </CounterTask>
        </StepsCounter>
        <ProgressiveHistory></ProgressiveHistory>
      </StepsContainer>
      <ActivitiesInfos>
        <HistorySeqments>
          <span>Distance</span>
          <div>
            <span>2300</span>
            <span>/5000</span>
            <span>m</span>
          </div>
        </HistorySeqments>
        <HistorySeqments>
          <span>Activity Time</span>
          <div>
            <span>30</span>
            <span>/90</span>
            <span>min</span>
          </div>
        </HistorySeqments>
        <HistorySeqments>
          <span>Calories</span>
          <div>
            <span>110</span>
            <span>/550</span>
            <span>kcal</span>
          </div>
        </HistorySeqments>
      </ActivitiesInfos>

      <Button>See more</Button>
    </HistoryCompContainer>
  );
};

const FlexColumnHelper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HistoryCompContainer = styled(FlexColumnHelper)`
  width: 380px;
  padding: 0 26px 26px 26px;
  margin: 4rem auto;
  & span:first-child {
    font-weight: 600;
    font-size: 16px;
    color: #000000;
  }
`;

const StepsContainer = styled(FlexColumnHelper)`
  margin-top: 27px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StepsCounter = styled(FlexColumnHelper)`
  & span:first-child {
    color: #4e5969;
    font-weight: 400;
    font-size: 16px;
  }
`;

const CounterTask = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  & span:first-child {
    font-weight: 500;
    font-size: 20px;
  }
`;

const ProgressiveHistory = styled.span`
  width: 100%;
  background: #e8f3ff;
  height: 12px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 65%;
    height: 12px;
    background: #199cb4;
  }
`;

const Button = styled.button`
  margin-top: 77px;
  width: 100%;
  padding: 15px 0;
  color: white;
  text-align: center;
  border: none;
  background: #199cb4;
  font-weight: 600;
  font-size: 15px;
  border-radius: 7px;
  cursor: pointer;
`;

const ActivitiesInfos = styled(FlexColumnHelper)`
  margin-top: 32px;
  gap: 10px;
`;

const HistorySeqments = styled.div`
  display: flex;
  justify-content: space-between;

  div > span:nth-child(2) {
    font-size: 14px;
    color: #4e5969;
  }

  div > span:nth-child(3) {
    font-size: 12px;
    margin-left: 0.2rem;
    color: #86909c;
  }
`;
