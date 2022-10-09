import { Avatar } from "antd";
import styled from "styled-components";
import Icon from "../../helpers/icon";

export const Reward = ({ partner }) => {
  return (
    <RewardsCard>
      <RewardsCardName>
        <div>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </div>
        <RewardsName>
          <PartnerName>{partner?.partnerName}</PartnerName>
          <CategoryName>{partner?.categoryName}</CategoryName>
        </RewardsName>
      </RewardsCardName>
      <DiscountContainer>
        <span>{partner?.discount}</span>
        <span>
          <Icon name={"percentage"} />
        </span>
      </DiscountContainer>
    </RewardsCard>
  );
};

const RewardsName = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  color: #1e232c;
  & div:nth-child(2) {
    color: #199cb4;
  }
`;

const DiscountContainer = styled.div`
  color: #199cb4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  background: rgba(102, 183, 198, 0.22);
  border-radius: 3px;
  width: 38px;
  height: 28px;
  & span:nth-child(2) {
    color: #199cb4;
  }
`;

const RewardsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 88px;
  border-bottom: 1px solid #e9e7e7;
  padding: 0 25px;
`;

const RewardsCardName = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const PartnerName = styled.h4`
  margin-bottom: 0;
`;
const CategoryName = styled.p`
  margin-bottom: 0;
  text-transform: capitalize;
`;
