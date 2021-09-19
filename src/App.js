import ReactDOM from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <SearchParams />
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Paper" animal="Bird" breed="Cockatiel" />
      <Pet name="Bean" animal="Dog" breed="Terrier" /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
