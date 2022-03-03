import "./App.css";

function App() {
  return (
    <div className="weather-app">
      <form className="search-form">
        <input
          type="text"
          placeholder="Search city"
          autocomplete="off"
          id="search-bar"
        />
        <input type="submit" value="Go" className="search-btn" />
        <button className="location-btn">Current Location</button>
      </form>
      <section className="current-weather">
        <h1 id="searched-city">Seattle</h1>
        <h2 id="date">monday, feb 10, 2022</h2>
        <img
          src=""
          alt="weather icon"
          className="current-weather-icon"
          id="icon"
        />
        <span className="description" id="weather-description">
          <br />
          cloudy
        </span>
        <h3 id="currentTemperature">
          10<small id="cel">C°</small>
          <span>|</span>
          <small id="fah">F°</small>
        </h3>

        <ul>
          <li>
            High: <span id="high"></span>°
          </li>
          <li>
            Low: <span id="low"></span>°
          </li>
          <li>
            Wind: <span id="wind"></span>km/h
          </li>
          <li>
            Humidity: <span id="humid"></span>%
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
