import React from "react";
import styled from "styled-components";
import { Row } from "antd";
import SigninForm from "../components/SigninForm";
import signinBg from "../images/signin_bg.jpg";

const Page = styled(Row).attrs(() => ({
  type: "flex",
  align: "middle"
}))`
  height: 100vh;
  background: url(${signinBg}) no-repeat center center;
  background-size: cover;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const Contents = styled.div`
  position: absolute;
  width: 700px;
  top: 150px;
  left: 50%;
  margin-left: -350px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  text-shadow: 0 2px 10px rgba(255, 80, 155, 0.3);
`;

const SubTitle = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);

  &:after {
    content: "";
    display: block;
    width: 200px;
    height: 2px;
    margin: 30px auto 20px;
    background-color: #fff;
  }
`;

function Signin() {
  return (
    <Page>
      <Contents>
        <Title>REVIEW SERVICE FOR BOOKS</Title>
        <SubTitle>Plase share your opinion on web development books.</SubTitle>
        <SigninForm />
      </Contents>
    </Page>
  );
}

export default Signin;
