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
  > a {
    color: #999;
  }
`;

function isAvailable(unit) {
  return unit.avail.toLowerCase() === "available now";
}

const Availability = (props) => {
  const { units } = props;
  const count = units.length === 0
                  ? ''
                  : units.filter(isAvailable).length
  return <div>Available Now: {count}</div>
}

const LowPrice = (props) => {
  const availableUnits = props.units.filter(isAvailable);
  let price;
  if (availableUnits.length > 0) {
    price = formatRent(
        Math.min(...availableUnits.map(unit => unit.rent))
      )
  } else {
    price = ''
  }
  return <div>From: {price}</div>
}

const ApartmentCard = props => {
  const { url = "", 
          name = "Loading", 
          address = "-",
          neighborhood= "-",
          units = [],
          removeApartment 
        } = props;
  console.log(units)
  return (
    <ApartmentItem>
      <h2>{name}</h2>
      <div>{neighborhood}</div>
      <div>{address}</div>
      <Availability units={units} />
      <LowPrice units={units} />
      <a href={url}>Details</a>
      <button onClick={removeApartment.bind({url})}>Remove</button>
    </ApartmentItem>
  );
};

export default ApartmentCard;
