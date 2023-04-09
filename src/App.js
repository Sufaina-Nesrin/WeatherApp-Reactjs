import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App(props) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [place, setPlace] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}`
      )
      .then((response) => {
        setSearch(response.data.main);
        console.log(response.data.main);
      })
      .catch((err) => {
        setSearch("");
      });
  }, [place]);
  return (
    <div>
      <div className="App">
        <div className="App-header">
          <h1 className="title">Weather-App🌥️</h1>
          <div className="input-box-div">
            <input
              type="search"
              placeholder="Enter the Place"
              className="inputField"
              onChange={(e) => {
                setPlace(e.target.value);
              }}
            />
            <button className="addButton">
              <i class="fa-solid fa-location-dot"></i>
            </button>
          </div>
          <div>
            <h2 className="info">{place}</h2>

            {search.temp > 0 && place !== "" ? (
              <idv>
                <h3 className="info-2">
                  {(search.temp - 273.15).toFixed(1)}
                  {"\u00b0C"}
                </h3>
                <h6 className="info-3">
                  min-temp : {search.temp_min} | max-temp : {search.temp_max}
                </h6>
              </idv>
            ) : (
              <h3 className="info-2">Not Found</h3>
            )}
            {console.log(place)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
