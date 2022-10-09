import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../GlobalStyled";
import { Progress } from "antd";
import Icon from "../../helpers/icon";
import { useDispatch, useSelector } from "react-redux";
import { getAllHistory } from "../../store/history";
import { Notification } from "../";
export const Goal = () => {
  const goals = useSelector((state) => state.history.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHistory());
  }, []);

  return (
    <Container>
      <GoalView>
        <GoalHeader>
          <h4>Daily Goals</h4>
          <span onClick={Notification}>
            <Icon name={"rightArrow"} />
          </span>
        </GoalHeader>
        <span>Last 7 days</span>
        <GoalBody>
          <AchievedSide>
            <h5>{goals && 2}/7</h5>
            <span>Achieved</span>
          </AchievedSide>
          <DailyComplete>
            <ListGroup>
              <ListGroupItem>
                <Progress
                  type="circle"
                  percent={Math.floor(
                    (goals && goals[0].stepCount / goals[0].stepCountLimit) *
                      100
                  )}
                  width={25}
                  strokeColor={"#199CB4"}
                  strokeWidth={15}
                  showInfo={goals && goals[0].isDone == false ? false : true}
                />
                <span>S</span>
              </ListGroupItem>
              <ListGroupItem>
                <Progress
                  type="circle"
                  percent={Math.floor(
                    (goals && goals[1].stepCount / goals[1].stepCountLimit) *
                      100
                  )}
                  width={25}
                  strokeWidth={15}
                  showInfo={goals && goals[1].isDone == false ? false : true}
                />
                <span>M</span>
              </ListGroupItem>
              <ListGroupItem>
                <Progress
                  type="circle"
                  percent={Math.floor(
                    (goals && goals[2].stepCount / goals[2].stepCountLimit) *
                      100
                  )}
                  width={25}
                  strokeWidth={15}
                  showInfo={goals && goals[2].isDone == false ? false : true}
                />
                <span>T</span>
              </ListGroupItem>
              <ListGroupItem>
                <Progress
                  type="circle"
                  percent={Math.floor(
                    (goals && goals[3].stepCount / goals[3].stepCountLimit) *
                      100
                  )}
                  width={25}
                  strokeWidth={15}
                  showInfo={goals && goals[3].isDone == false ? false : true}
                />
                <span>W</span>
              </ListGroupItem>
              <ListGroupItem>
                <Progress
                  type="circle"
                  percent={Math.floor(
                    (goals && goals[4].stepCount / goals[4].stepCountLimit) *
                      100
                  )}
                  width={25}
                  strokeWidth={15}
                  showInfo={goals && goals[4].isDone == false ? false : true}
                />
                <span>T</span>
              </ListGroupItem>
              <ListGroupItem>
                <Progress
                  type="circle"
                  percent={Math.floor(
                    (goals && goals[5].stepCount / goals[5].stepCountLimit) *
                      100
                  )}
                  width={25}
                  strokeWidth={15}
                  showInfo={goals && goals[5].isDone == false ? false : true}
                />
                <span>F</span>
              </ListGroupItem>
              <ListGroupItem>
                <Progress
                  type="circle"
                  percent={Math.floor(
                    (goals && goals[6].stepCount / goals[5].stepCountLimit) *
                      100
                  )}
                  width={25}
                  strokeColor={"#199CB4"}
                  strokeWidth={15}
                  showInfo={goals && goals[6].isDone == false ? false : true}
                />
                <span>S</span>
              </ListGroupItem>
            </ListGroup>
          </DailyComplete>
        </GoalBody>
      </GoalView>
    </Container>
  );
};
const GoalView = styled.div`
  background: #ffffff;
  border: 1px solid #ebebeb;
  padding: 15px;
  border-radius: 16px;
  & > span {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #838383;
  }
`;
const GoalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h4 {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    margin-bottom: 2px;
  }
`;
const GoalBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const AchievedSide = styled.div`
  h5 {
    font-family: "Manrope";
    font-weight: 700;
    font-size: 16px;
    color: #199cb4;
    margin-bottom: 0;
  }
  span {
    color: #199cb4;
  }
`;
const DailyComplete = styled.div``;
const ListGroup = styled.ul`
  display: flex;
  list-style-type: none;
`;
const ListGroupItem = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0 5px;
  span {
    text-align: center;
  }
`;
