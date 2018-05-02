import React from "react";

function isAvailable(unit) {
  return unit.avail.toLowerCase() === "available now";
}

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
                <div style={neighborhoodStyle}>{item.neighborhood}</div>
                <div>{item.address}</div>
                <div>
                  Available Now: {item.units.filter(isAvailable).length}
                </div>
                <div>
                  Lowest Price:{" "}
                  {item.units.filter(isAvailable).length > 0
                    ? Math.min(
                        ...item.units.filter(isAvailable).map(unit => unit.rent)
                      )
                    : "No Units"}
                </div>
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
  padding: 0,
  listStyleType: "none",
  display: "grid",
  gridGap: "1.2em",
  gridTemplateColumns: "repeat(auto-fill, 300px)",
  gridAutoRows: "1fr",
  justifyContent: "space-evenly"
};

const liStyle = {
  display: "grid",
  border: "1px solid black",
  padding: ".4em",
  boxShadow: "0 3px 12px 0 rgba(0, 0, 0, 0.1)"
};

const nameStyle = {
  fontSize: "1.2em"
};

const neighborhoodStyle = {
  color: "#444",
  fontStyle: "italic"
};

export default ApartmentsList;
