import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
import imoti from './assets/e6.png'

export default function Loading() {
    return(
        <View style={styles.loading}>
            <StatusBar barStyle="dark-content"/>
            <Image source={imoti} style={{width:300, height:300}}/>
            <Text style={styles.loadingText}>날씨 정보를 받아오는 중입니다. 쿠쿠..</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    loading : {
      flex:1,
      backgroundColor:"#FDF6AA",
      justifyContent:"flex-end",
      paddingLeft:25
    },
    loadingText:{
      fontSize : 38,
      marginBottom:100
    }
  });