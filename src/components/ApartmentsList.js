import React from "react";
import styled from "styled-components";
import ApartmentCard from "./ApartmentCard";

const AptDiv = styled.div`
  margin: auto;
  max-width: 1400px;
`;

const AptList = styled.ul`
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-gap: 1.2em;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-auto-rows: 1fr;
  justify-content: center;
  margin-top: 3em;
`;

const ApartmentsList = props => {
  const { apartments } = props;
  return (
    <AptDiv>
      <AptList>
        {apartments.map((apt, i) => {
          if (apt.name) {
            return (
              <ApartmentCard
                url={apt.url}
                name={apt.name}
                address={apt.address}
                neighborhood={apt.neighborhood}
                units={apt.units}
              />
            );
          } else {
            return <h1>Loading</h1>;
          }
        })}
      </AptList>
    </AptDiv>
  );
};

export default ApartmentsList;
