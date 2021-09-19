import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

// sample h1 rendering
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Sample React"),
    // ...[1,2,3,4].map((i) => React.createElement("h2", {}, i)),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog!!!",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Tiger",
      animal: "Cat",
      breed: "tiger",
    }),
    React.createElement(Pet, {
      name: "Sweety",
      animal: "Tiger",
      breed: "Bengal",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
