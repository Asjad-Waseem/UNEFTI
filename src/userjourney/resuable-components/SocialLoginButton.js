import React from "react";
import styled from "styled-components";

const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  width: calc(33% - 10px);
  border:none;
  border-radius: 12px;
  background-color: ${({ background }) => background};
  cursor:pointer;
`;
export default function SocialLoginButton({ background, iconPath, onClick }) {
  return (
    <StyledBtn onClick={onClick} background={background}>
      <img src={iconPath} alt="icon" />
    </StyledBtn>
  );
}
