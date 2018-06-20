import React from "react";
import styled from "styled-components";
import ApartmentCard from "./ApartmentCard";

const AptDiv = styled.div`
  margin: auto;  
  margin-top: 3em;
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
  margin: 0;
`;

const ApartmentsList = props => {
  const { apartments, removeApartment } = props;
  return (
    <AptDiv>
      <AptList>
        {apartments.map((apt, i) => {
            return (
              <ApartmentCard
                key={apt.id}
                id={apt.id}
                url={apt.url}
                name={apt.name || undefined}
                address={apt.address || undefined}
                neighborhood={apt.neighborhood || undefined}
                units={apt.units}
                removeApartment={removeApartment}
              />
            );
        })}
      </AptList>
    </AptDiv>
  );
};

export default ApartmentsList;
