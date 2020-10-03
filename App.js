import { StatusBar } from 'expo-status-bar';
import React, { useEffect,useState } from 'react';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import Weather from "./components/Weather";
import ReloadIcon from "./components/ReloadIcon";
import {WEATHER_API_KEY} from 'react-native-dotenv'
import UnitsPicker from "./components/UnitsPicker";
import WeatherDetails from "./components/WeatherDetails"

const BASE_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?`
export default function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unitSystem,setUnitSystem] = useState('metric')
  useEffect(() => {
    load();
  }, [unitSystem])
  async function load() {
    setCurrentWeather(null)
    try {
      let { status } = await Location.requestPermissionsAsync();
      if (status != 'granted') {
        setErrorMessage('No access to location ')
        return;
      }
      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords
      const weatherurl = `${BASE_WEATHER_URL}lat=${latitude}&units=${unitSystem}&lon=${longitude}&appid=${WEATHER_API_KEY}`;
      const response = await fetch(weatherurl);
      const result = await response.json();
      if (response.ok) {
        setCurrentWeather(result);
      } else {
        setErrorMessage(result.message)
      }
        
    } catch (err) {
      setErrorMessage(err.message)
    }
  }
  if (currentWeather) {
    
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <UnitsPicker unitSystem={unitSystem} setUnitSystem={setUnitSystem} />
          <ReloadIcon load={load}/>
          <Weather currentWeather = { currentWeather} />
      
        </View>
        <WeatherDetails currentWeather={currentWeather}/>
      </View>
    );
  } else if(errorMessage) {
    return (
      <View style={styles.container}>
         <ReloadIcon load={load}/>
        <Text>{errorMessage }</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="black" />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    justifyContent: "center",
    flex:1
  }
});
