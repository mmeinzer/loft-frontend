import React from "react";
import styled from "styled-components";
import { formatRent } from "../utils";

const ApartmentItem = styled.li`
  display: grid;
  border: 1px solid #d6d6d6;
  padding: 0.4em;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.1);
  > h2 {
    font-size: 1em;
    margin: 0;
  }
`;

function isAvailable(unit) {
  return unit.avail.toLowerCase() === "available now";
}

const ApartmentCard = props => {
  const { url, name, address, neighborhood, units } = props;
  return (
    <ApartmentItem>
      <h2>{name}</h2>
      <div>{neighborhood}</div>
      <div>{address}</div>
      <div>Available Now: {units.filter(isAvailable).length}</div>
      <div>
        Lowest Price:{" "}
        {units.filter(isAvailable).length > 0
          ? formatRent(
              Math.min(...units.filter(isAvailable).map(unit => unit.rent))
            )
          : "No Units"}
      </div>
      <a href={url}>Details</a>
      <button>Remove</button>
      <pre>
        <code>{JSON.stringify(units[0], null, 4)}</code>
      </pre>
    </ApartmentItem>
  );
};

export default ApartmentCard;
