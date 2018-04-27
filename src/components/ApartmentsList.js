import React from "react";

const ApartmentsList = props => {
  return (
    <div className="apartments">
      <ul style={ulStyle}>
        {props.apartments.map(
          (item, i) =>
            item.name ? (
              <li key={i} style={liStyle}>
                <a href={item.url} style={nameStyle} target="_blank">
                  {item.name}
                </a>
                <div>{item.neighborhood}</div>
                <div>{item.address}</div>
              </li>
            ) : (
              <li key={i} style={liStyle}>
                <a href={item.url} style={nameStyle} target="_blank">
                  Loading Data
                </a>
              </li>
            )
        )}
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
