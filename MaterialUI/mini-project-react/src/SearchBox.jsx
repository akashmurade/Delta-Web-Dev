import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "needsapikey";
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let getWeatherInfo = async () => {
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    setCity("");
    try {
      let info = await getWeatherInfo();
      updateInfo(info);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <div className="search-box">
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            onChange={handleChange}
            value={city}
          />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
        {error && <p>No such place found</p>}
      </form>
    </div>
  );
}
