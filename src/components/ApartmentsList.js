import React from "react";

const ApartmentsList = props => {
  return (
    <div className="apartments">
      <ul style={ulStyle}>
        {props.apartments.map(item => (
          <li key={item.id} style={liStyle}>
            <a href={item.url} style={nameStyle} target="_blank">
              {item.name}
            </a>
            <div>{item.neighborhood}</div>
            <div>{item.address}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ulStyle = {
  listStyleType: "none"
};

const liStyle = {
  display: "grid"
};

const nameStyle = {
  fontSize: "1.5em"
};

export default ApartmentsList;
