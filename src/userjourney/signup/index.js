import React from "react";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import Container from "../container";
import Password from "../resuable-components/Password";
import OAuth from "../../oauth";
import InputField from "../resuable-components/InputField";
import { signup } from "../../services/api";
import { useDispatch } from "react-redux";
import { Redirect,useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";

const StyledSignUpBtn = styled(Button)`
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
export default function SignIn() {
  //const dispatch = useDispatch();
  const history = useHistory()
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    isPasswordValid: true,
    response: null,
    redirectToLogin: false
  });

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const passwordIsValid = (password, isValid) => {
    setUserInfo((prevState) => ({
      ...prevState,
      password,
      isPasswordValid: isValid,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInfo.isPasswordValid) {
      const req = {
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password
      }
      signup(req)
        .then((response) =>{
          alert(response.message)
          if(response.message === "User created successfully"){
          history.push('/signin')
          }
          setUserInfo((prevState) => ({
            ...prevState,
            response,
          }))
          if(response.errors === undefined)
            setUserInfo(prevState => ({
              ...prevState,
              redirectToLogin: true
            }))
         } )
        .catch((error) => console.log("Something went wrong.", error));
     // dispatch(signup(userInfo));

    }
  };
  return (
    userInfo.redirectToLogin === true ? <Redirect to="/signin"/> :
    <Container>
      <form onSubmit={handleSubmit}>
        <InputField
          variant="outlined"
          label=""
          margin="normal"
          required
          fullWidth
          id="name"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          autoFocus
        />
        <InputField
          variant="outlined"
          label=""
          margin="normal"
          required
          fullWidth
          id="email"
          placeholder="Email"
          name="email"
          autoComplete="email"
          onChange={handleChange}
        />

        <Password
          passwordIsValid={passwordIsValid}
          label="Password"
          isValidationRequired={true}
        />
        <StyledFormControlLabel
          control={<Checkbox value="remember" color="primary" required />}
          label="I agree to privacy policy"
        />
        {userInfo.response !== null && userInfo.response.code !== 200 && <Typography style={{color:"red"}}>{userInfo.response.message}</Typography>}
        <StyledSignUpBtn
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Sign Up
        </StyledSignUpBtn>
        <div
          style={{ color: "white", display: "flex", justifyContent: "center" }}
        >
          <span style={{ color: "white" }}>or</span>
        </div>
        <OAuth />
      </form>

      <span style={{ color: "#ffffff", marginTop: "35px" }}>
        Already have an account?&nbsp;
        <StyledLink to="/signin">
          <span style={{ color: "#6164ff" }}>Sign In</span>
        </StyledLink>
      </span>
    </Container>
  );
}
