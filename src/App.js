import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"; // eslint-disable-line
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("pink");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details theme={theme} />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};
// StrictMode help to unuse deprecated hooks. recommended by React team

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
