import "./App.css";
import Search from "./Search.js";
function App() {
  return (
    <div>
      <div className="weather-app">
        <Search />
      </div>
      <footer>
        Coded by Diana M. open-source on{" "}
        <span>
          <a href="https://github.com/DIANA-DIANA7/react-app" target="_blank">Github</a>
        </span>
        {" "}hosted on Netlify.
      </footer>
    </div>
  );
}

export default App;
