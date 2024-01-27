import { Text, View } from "react-native";
import { s } from "./Home.style.jsx";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";
import { useEffect, useState } from "react";
import { MeteoAPi } from "../../api/meteo.js";
import Txt from "../../components/Txt/Txt.jsx";
import { MeteoBasic } from "../../components/MeteoBasic/MeteoBasic.jsx";
import { getWeatherInterpretation } from "../../services/meteo-service.js";
import MeteoAdvanced from "../../components/MeteoAdvanced/MeteoAdvanced.jsx";

export function Home() {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const currentWeather = weather?.current_weather;

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords);
      fetchCity(coords);
    }
  }, [coords]);

  async function getUserLocation() {
    let { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoords({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } else {
      setCoords({ lat: "48.85", lng: "2.35" });
    }
  }

  async function fetchWeather(coordinates) {
    const weatherResponse = await MeteoAPi.fetchWeatherFromCoords(coordinates);
    setWeather(weatherResponse);
  }

async function fetchCity(coordinates){
  const cityResponse = await MeteoAPi.fetchCityFromCoords(
    coordinates
  );
  setCity(cityResponse);
}

  return currentWeather ? (
    <>
      <View style={s.meteo_basic}>
      <MeteoBasic 
      temperature={Math.round(currentWeather?.temperature)}
        city={city}
        interpretation={getWeatherInterpretation(currentWeather?.weathercode)}
      />
      </View>
      <View style={s.searchbar_container}></View>
      <View style={s.meteo_advanced}>
        <MeteoAdvanced wind={currentWeather?.windspeed} dusk={weather.daily.sunrise[0].split("T")[1]} dawn={weather.daily.sunset[0].split("T")[1]}/>
      </View>
    </>
    ) : null;
  
}
