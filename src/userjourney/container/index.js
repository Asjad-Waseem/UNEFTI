import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const StyledContainer = styled.div`
  background-color: #16151a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  padding: 40px;
  position: relative;
  width: 100%;
  max-width: 420px;
  border: 1px solid #222227;
  margin: auto;
`;

export default ({ children }) => {
  return (
    <StyledContainer>
      <Typography style={{ color: "white" }} component="h1" variant="h5">
        Uneft
      </Typography>
      {children}
    </StyledContainer>
  );
};
