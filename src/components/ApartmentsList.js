import React, { Component } from "react";

const ApartmentsList = props => {
  return (
    <div className="apartments">
      <ul>{props.apartments.map(item => <li key={item.id}>{item.url}</li>)}</ul>
    </div>
  );
};

export default ApartmentsList;
