import styled from "styled-components";
import Icon from "../../helpers/icon";

export const Progress = ({ name, done, haveTo, id, status, icon }) => {
  return (
    <ProgressBarContainer>
      <DistanceContainer>
        <CategoryName>
          <span>
            <Icon name={icon} />
          </span>
          <span>{name}</span>
        </CategoryName>
        <ProgressiveBar status={status}></ProgressiveBar>
        <TaskDone>
          <span>{done}</span>
          <span>/</span>
          <span style={{ color: "gray", fontSize: 14 + "px" }}>
            {haveTo}
            {id}
          </span>
        </TaskDone>
      </DistanceContainer>
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  border: 1px solid #dadada;
  padding: 9px 8px;
  background: #ececec;
  border-radius: 8px;
  max-width: 120px;
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 10px;
`;

const DistanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CategoryName = styled.div`
  width: max-content;
  display: flex;
  gap: 3px;
`;

const TaskDone = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  & span:nth-child(2) {
    color: gray;
  }
`;

const ProgressiveBar = styled.div`
  display: flex;
  align-items: center;
  min-width: 90px;
  background: #ffffff;
  border-radius: 6px;
  height: 10px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: #0192ad;
    width: ${({ status }) => `${status}px`};
    height: 10px;
    border-radius: 6px;
  }
`;
