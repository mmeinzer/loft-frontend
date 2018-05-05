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
`;

const Header = () => (
  <Wrapper>
    <h1>Flat Finder</h1>
  </Wrapper>
);

export default Header;
