import React from "react";
// Pet component
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h3", {}, props.name),
    React.createElement("h4", {}, props.animal),
    React.createElement("h4", {}, props.breed),
  ]);
};

export default Pet;
