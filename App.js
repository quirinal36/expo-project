import React, {Component} from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Weather from "./Weather"
import Loading from "./Loading"
import * as Location from "expo-location"
import axios from "axios";

const API_KEY = "aea43ba01ac3d1c8de7dff28ed92177c";

export default class App extends Component {
  constructor(){
    super();    
  } 

  state = {
    isLoaded: false
  }
  getWeather = async(latitude, longitude) => {
    const { 
      data : 
      {
        weather,
        main,
        name
      }
    } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    
    this.setState({
      isLoaded : true,
      weather: weather[0],
      name,
      main
    });
  };

  getLocation = async() => {
    
    try{
      const {status} = await Location.requestPermissionsAsync();
      if(status != 'granted') {
        console.log('access denied!!')
      }
      
      const {
        coords: {latitude, longitude}
      }=await Location.getCurrentPositionAsync();
      
      this.getWeather(latitude, longitude);
    }catch(error){
      Alert.alert("title", "cannot find you");
    }
  };
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoaded, weather, name, main}=this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? (
          <Weather temp={Math.floor(main.temp)} weather={weather} condition={weather.main} name={name} info={main}/>
        ) : (
          <Loading />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
