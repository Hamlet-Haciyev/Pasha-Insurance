import React, { useEffect } from "react";
import { Progress } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getAllSteps } from "../../store/step";
export const StepStatistics = () => {
  const step = useSelector((state) => state.step.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSteps());
  }, [dispatch]);
  //   const percent = Math.floor(step.stepCount / step.stepCountLimit) * 100;
  return (
    <StepStatisticWrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <Head>Steps</Head>
        <div style={{ display: "flex", gap: "2px" }}>
          <Step>{step?.stepCount} </Step>
          <StepLimit>
            <small>/{step?.stepCountLimit}</small>
          </StepLimit>
        </div>
      </div>
      <div>
        <Progress
          width={"50px"}
          type="circle"
          percent={Math.floor((step?.stepCount / step?.stepCountLimit) * 100)}
          trailColor={"rgba(233,231,231,0.26)"}
          strokeColor={"#fff"}
          strokeWidth={13}
        />
        {/* format={() => "Done"} */}
      </div>
    </StepStatisticWrapper>
  );
};
const StepStatisticWrapper = styled.div`
  padding: 12px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    90.58deg,
    rgba(228, 228, 228, 0.31) 2.27%,
    rgba(228, 228, 228, 0.2356) 50.5%
  );
  border-radius: 16px;
  width: 370px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 100px;
  height: 75px;
  .ant-progress-text {
    color: #fff;
    font-size: 12px;
  }
`;
const Head = styled.h2`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #ffffff;
  margin: 0;
`;
const Step = styled.span`
  font-family: "Manrope";
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
`;
const StepLimit = styled.span`
  font-family: "Manrope";
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: rgba(255, 255, 255, 0.64);
`;
