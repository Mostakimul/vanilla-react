import React from "react";
/*
// Pet component
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h3", {}, props.name),
    React.createElement("h4", {}, props.animal),
    React.createElement("h4", {}, props.breed),
  ]);
};
*/

const Pet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h4>{props.animal}</h4>
      <h5>{props.breed}</h5>
    </div>
  );
};

export default Pet;
