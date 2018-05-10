import React from "react";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: center;  
  color: #111;
  > h1 {
    padding: 0.5em;
    font-size: 4em;
    font-weight: 400;
    font-family: "Monoton";
    margin: 0;
  }
  > h1 > span {
    border-bottom: 2px solid #ffc600;
  }
`;

const Header = () => (
  <Wrapper>
    <h1><span>Flat Stack</span></h1>
  </Wrapper>
);

export default Header;
