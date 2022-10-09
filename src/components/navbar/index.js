import React, { useEffect } from "react";
import styled from "styled-components";
import { Container } from "../../GlobalStyled";
import { Avatar, Col, Row } from "antd";
import { StepStatistics, Search } from "../";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllHistory } from "../../store/history";
export const Navbar = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.history.data);
  useEffect(() => {
    dispatch(getAllHistory());
  }, [dispatch]);
  return (
    <NavbarView>
      <Container>
        <Row>
          <Col span={12}>
            <NavbarLogoSide>
              {/* <Icon name={"logo"} /> */}
              {/* <UserName></UserName>
              <ChangeUser /> */}
              <Routes>
                <Route
                  path="/"
                  element={
                    <div style={{ marginLeft: ".2rem" }}>
                      <Firstname>
                        {userName && userName[0]?.userId.name}
                      </Firstname>
                      <Lastname>
                        {userName && userName[0]?.userId.surname}
                      </Lastname>
                    </div>
                  }
                ></Route>
                <Route
                  path="/rewards"
                  element={<PartnerHeader>Partners</PartnerHeader>}
                ></Route>
                <Route
                  path="/history"
                  element={<PartnerHeader>History</PartnerHeader>}
                ></Route>
              </Routes>
            </NavbarLogoSide>
          </Col>
          <Col span={12}>
            <NavbarAvatarSide>
              <Avatar src="https://joeschmoe.io/api/v1/random" size={"large"} />
            </NavbarAvatarSide>
          </Col>
        </Row>
      </Container>
      <Routes>
        <Route path={"/"} element={<StepStatistics />}></Route>
        <Route path={"/Pasha-Insurance"} element={<StepStatistics />}></Route>
        <Route path={"/rewards"} element={<Search />}></Route>
        {/* <Route path={"/history"} element={<h4>History</h4>}></Route> */}
      </Routes>
    </NavbarView>
  );
};
const NavbarView = styled.nav`
  position: relative;
  padding: 20px 0;
  margin: 0 auto;
  background: linear-gradient(201.25deg, #008b59 -47.24%, #0294ca 64.97%);
  .ant-row {
    align-items: center;
  }
`;
const NavbarLogoSide = styled.div`
  display: flex;
  align-items: center;
`;
const NavbarAvatarSide = styled.div`
  text-align: end;
  margin-right: 10px;
`;
const UserName = styled.h2`
  font-family: "Fedra Sans";
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
  margin-bottom: 0;
`;
const ChangeUser = styled.div`
  background: rgba(189, 189, 189, 0.32);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;
const PartnerHeader = styled.span`
  font-family: "Fedra Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
  margin-left: 10px;
`;
const Firstname = styled.span`
  margin-right: 5px;
  font-family: "Fedra Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
`;
const Lastname = styled.span`
  font-family: "Fedra Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
`;
