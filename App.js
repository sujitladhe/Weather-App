import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { SearchInput } from "./src/components/SearchInput";
import getImageForWeather from "./utils/getImageForWeather";
import { fetchLocationId, fetchWeather } from './utils/api';
import axios from "axios";


export default function App() {
  const [location, setLocation] = useState("Wardha");
  const [weather, setWeather] = useState("Light Rain");
  const [temperature, setTemperature] = useState("21")

  const getWoeid = async (loc) => {
    try {
      const response = await axios.get(
        `https://www.metaweather.com/api/location/search/?query=${loc}`,
      );
      if(response.data.length===0)
      {
        alert("No data available for this location");
      }
      else {
        const [{woeid}] = response.data;
        getWeather(woeid, loc)
      }
    } catch (error) {
      // handle error
      alert(error.message);
    }
  };

  const getWeather = async (wid, loc) => {
    try {
      const response = await axios.get(
        `https://www.metaweather.com/api/location/${wid}/`,
      );
      const result = response.data.consolidated_weather[0]; 
      setWeather(result.weather_state_name);
      setTemperature(result.the_temp);
      setLocation(loc);
    } catch (error) {
      // handle error
      alert(error.message);
    }
  };

  return (
    <ImageBackground
      source={getImageForWeather(weather)}
      style={styles.imageContainer}
      imageStyle={styles.image}
    >
      <View style={styles.container}>
        <Text style={(styles.textStyle, styles.largeText)}>{location}</Text>
        <Text style={(styles.textStyle, styles.smallText)}>{weather}</Text>
        <Text style={(styles.textStyle, styles.largeText)}>{Math.round(temperature)}°</Text>
        <SearchInput
          placeholder={"Search any city"}
          onSubmitText={(newlocation) => {
            getWoeid(newlocation);
          }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  textStyle: {
    fontFamily: "Roboto",
    textAlign: "center",
  },
  smallText: {
    fontSize: 18,
    color: "white",
  },
  largeText: {
    fontSize: 44,
    color: "white",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover",
  },
});
