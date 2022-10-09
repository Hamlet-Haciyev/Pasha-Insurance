import React, { useEffect } from "react";
import styled from "styled-components";
import { Progress, Notification } from "../";
import { Container } from "../../GlobalStyled";
import Icon from "../../helpers/icon";
import { useDispatch, useSelector } from "react-redux";
import { getAllStatistic } from "../../store/statistic";
export const Activities = () => {
  const statistic = useSelector((state) => state.statistic.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStatistic());
  }, []);
  return (
    <ActivitiesWrapper>
      <Container>
        <ActivitiesView>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <h2 style={{ color: "black" }}>Today’s Activity</h2>
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={Notification}
            >
              <Icon name={"questionmark"} />
            </span>
          </div>
          <span style={{ marginBottom: "1rem" }}>
            You’re 20% more active than yesterday
          </span>
          <div style={{ display: "flex", gap: "6px" }}>
            <Progress
              name={"Distance"}
              done={statistic?.distance}
              haveTo={statistic?.distanceLimit}
              id="m"
              status={Math.floor(
                (statistic?.distance / statistic?.distanceLimit) * 100 > 100
                  ? 90
                  : Math.floor(
                      (statistic?.distance / statistic?.distanceLimit) * 100 -
                        10
                    )
              )}
              icon="distance"
            />
            <Progress
              name={"Activity time"}
              done={statistic?.activityTime}
              haveTo={statistic?.activityTimeLimit}
              id={"min"}
              status={Math.floor(
                (statistic?.activityTime / statistic?.activityTimeLimit) * 100 >
                  100
                  ? 90
                  : Math.floor(
                      (statistic?.activityTime / statistic?.activityTimeLimit) *
                        100 -
                        10
                    )
              )}
              icon="activity"
            />
            <Progress
              name={"Calories"}
              done={statistic?.kcal.toFixed(0)}
              haveTo={statistic?.kcalLimit}
              id="kcal"
              status={Math.floor(
                (statistic?.kcal / statistic?.kcalLimit) * 100 > 100
                  ? 100
                  : Math.floor((statistic?.kcal / statistic?.kcalLimit) * 100)
              )}
              icon="calories"
            />
          </div>
        </ActivitiesView>
      </Container>
    </ActivitiesWrapper>
  );
};
const ActivitiesWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  position: absolute;
  top: -150px;
  left: 20px;
`;
const ActivitiesView = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  padding: 15px 14px;
  background: #ffffff;
  box-shadow: 0px 4px 19px rgba(117, 117, 117, 0.18);
`;
