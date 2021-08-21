import React from "react";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Container from "../container";
import OAuth from "../../oauth";
import InputField from "../resuable-components/InputField";
import { connect } from "react-redux";
import { getUser } from "../../store/actions/authedUser";
import Password from "../resuable-components/Password";
import { Typography } from "@material-ui/core";
import { Redirect } from "react-router";

const StyledSigninBtn = styled(Button)`
  width: 100%;
  height: 50px;
  border-radius: 12px;
  background-color: #6164ff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 14px;
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  margin: 15px auto;
  &:hover {
    color: #6164ff;
    background-color: #222227;
  }
`;
const StyledFormControlLabel = styled(FormControlLabel)`
  & span {
    color: #fff;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

function SignIn({ dispatch, authedUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getUser(credentials));
  };

  const passwordIsValid = (password) => {
    setCredentials((prevState) => ({
      ...prevState,
      password,
    }));
  };

  return (
    authedUser !== null && authedUser.status === "success"? <Redirect to="/product" /> :
    <Container>
      <form onSubmit={handleSubmit}>
        <InputField
          variant="outlined"
          label=""
          margin="normal"
          required
          fullWidth
          id="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          autoFocus
        />
        <Password
          passwordIsValid={passwordIsValid}
          label="Password"
          isValidationRequired={false}
        />
        <StyledFormControlLabel
          control={<Checkbox value="remember" color="primary"  />}
          label="Remember me"
        />
        {authedUser!==null && authedUser.error !== undefined && <Typography style={{color:"red"}}>{authedUser.error}</Typography>}
        <StyledSigninBtn
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign In
        </StyledSigninBtn>
        <div
          style={{ color: "white", display: "flex", justifyContent: "center" }}
        >
          <span style={{ color: "white" }}>or</span>
        </div>
        <OAuth />
      </form>
      <span style={{ color: "#ffffff", marginTop: "35px" }}>
        Don't have an account?&nbsp;
        <StyledLink to="/register">
          <span style={{ color: "#6164ff" }}>Sign Up</span>
        </StyledLink>
      </span>
      <StyledLink style={{ marginTop: "15px" }} to="/forgotPassword">
        <span style={{ color: "#6164ff" }}>Forgot password?</span>
      </StyledLink>
    </Container>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(SignIn);
