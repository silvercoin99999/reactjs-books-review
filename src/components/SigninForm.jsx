import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FormWrap = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const InputArea = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 35px;
  border: 2px solid #fff;
  padding: 0 10px;
  background-color: rgba(255, 255, 255, 0.7);
`;

const ButtonArea = styled.div`
  margin-top: 25px;
`;

const StyledButton = styled.button`
  background-color: rgba(0, 0, 0, 0.7);
  text-transform: uppercase;
  border-radius: 1px;
  border-width: 2px;
  color: white;
  width: 100%;
  height: 50px;
  border: 2px solid #fff;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    border-width: 5px;
    background-color: pink;
  }
`;

const LinkArea = styled.div`
  margin-top: 15px;
  overflow: hidden;
  text-align: center;
  color: rgba(0, 0, 0, 0.7);
  span {
    margin: 0 5px;
  }
  a {
    color: rgba(0, 0, 0, 0.7);
    &:hover {
      text-decoration: underline;
    }
  }
`;

class SigninForm extends React.Component {
  render() {
    return (
      <FormWrap>
        <InputArea>
          <StyledInput placeholder="Please enter your email" />
        </InputArea>
        <InputArea>
          <StyledInput
            placeholder="Please enter your password"
            type="password"
          />
        </InputArea>
        <ButtonArea>
          <StyledButton>Sign In</StyledButton>
        </ButtonArea>
        <LinkArea>
          <Link to="/signup">Sign up</Link>
          <span>/</span>
          <Link to="/forgot">find PW</Link>
        </LinkArea>
      </FormWrap>
    );
  }
}

export default SigninForm;
