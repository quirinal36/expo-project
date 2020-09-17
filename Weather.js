import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import PropTypes from "prop-types";

export default function Weather({temp, weather, condition, name, info}) {
    console.log(weather);

    let gradient = [
        "#5C258D", "#4389A2"
    ];
    if(weather.id < 300){
        gradient = [
            "#f2709c", "#ff9472"
        ];
    }else if(weather.id < 400){
        gradient = [
            "#5D4157", "#A8CABA"
        ];
    }else if(weather.id < 500){
        gradient = [
            "#ddd6f3", "#faaca8"
        ];
    }else if(weather.id < 600){
        gradient = [
            "#616161", "#9bc5c3"
        ];
    }else if(weather.id < 700){
        gradient = [
            "#50C9C3", "#96DEDA"
        ];
    }else if(weather.id == 800){
        gradient = [
            "#EFEFBB", "#D4D3DD"
        ];
    }else if(weather.id > 800){
        gradient = [
            "#274046", "#E6DADA"
        ];
    }
    return(
        <LinearGradient colors={gradient}
                style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                
                <Image source={{uri: `http://openweathermap.org/img/wn/${weather.icon}@2x.png`}} 
                    style={styles.weathericon}/>

                <Text style={styles.temp}>{temp}º</Text>
                <Text style={styles.subtitle}>{name}</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weather.description}</Text>
            </View>
        </LinearGradient>
    );
}
Weather.propTypes = {
    temp : PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    weathericon:{
        width:100,
        height:100
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    temp:{
        fontSize:32,
        color:"white"
    },
    title:{
        fontSize:44,
        color:"white",
        fontWeight:"300",
        marginBottom:10
    },
    subtitle:{
        fontSize:24,
        fontWeight:"600",
        color:"white"
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems:"flex-start"
    }
});