import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
    </div>
  );
};
// StrictMode help to unuse deprecated hooks. recommended by React team

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
