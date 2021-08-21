import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const StyledInputField = styled(TextField)`
  background-color: #222227;
  border: 1px solid transparent;
  border-radius: 12px;
  min-height: 46px;
  position: relative;
  & input {
    color: #fff;
    font-size: 16px;
    font-family: "Inter", sans-serif;
  }
`;

export default function InputField(props) {
  return <StyledInputField {...props} />;
}
