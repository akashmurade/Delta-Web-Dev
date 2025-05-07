import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "Pune",
    temp: 25,
    tempMin: 20,
    tempMax: 30,
    humidity: 60,
    feelsLike: 27,
    weather: "clear sky",
  });

  let updateInfo = (result) => {
    setWeatherInfo(result);
  };
  return (
    <>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </>
  );
}
