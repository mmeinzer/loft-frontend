import React from "react";
import styled from "styled-components";

const UnitsItem = styled.ul`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: auto;
  z-index: 999;
  background: rgb(255,255,255);
  border: 1px solid #d6d6d6;
  padding: .6em;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1);
  list-style-type: none;
  > * {
    padding: .2em;
  }
`;

const UnitDetails = props => {
  const { units, hideUnits } = props;
  if (!units) {
    return (null);
  }
  return (
    <UnitsItem>
      <button onClick={() => hideUnits()}>Close</button>
      {units.slice(0,5).map((unit, i) => <li key={i}>{unit.rent}</li>)}
    </UnitsItem>
  );
};

export default UnitDetails;
