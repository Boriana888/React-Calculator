import styled from "styled-components";
import React from "react";

const StyledButton = styled.button`

  background-color: whitesmoke;
  font-size: 24px;
  padding: 1rem;
  width: 50%;
  border-radius: 58%;
  font-weight: bold;
  color: rgb(51, 39, 48);
  margin-right: 10px;
  margin-left: 30px;
  margin-top: 9px;

&:hover 
  background-color: rgb(236, 141, 247);
  color: rgb(160, 38, 146);
  cursor: pointer;

`;
function Button(props) {
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
}

export default Button;
