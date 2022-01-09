import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import { SearchInput } from './src/components/SearchInput';
import getImageForWeather from './utils/getImageForWeather';

export default function App() {
  return (
    <ImageBackground
    source={getImageForWeather('Light Cloud')}
    style={styles.imageContainer}
    imageStyle={styles.image}
    >
    <View style={styles.container}>
      <Text style={styles.textStyle, styles.largeText}>Nagpur</Text>
      <Text style={styles.textStyle, styles.smallText}>Light Cloud</Text>
      <Text style={styles.textStyle, styles.largeText}>21°</Text>
      <SearchInput placeholder={'Search any city'} />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  textStyle: {
    fontFamily: 'Roboto',
    textAlign: 'center'
  },
  smallText: {
    fontSize: 18,
  },
  largeText: {
    fontSize: 44,
  },
  imageContainer: {
    flex: 1
  }, 
  image: {
    flex:1,
    height: null,
    width: null,
    resizeMode: 'cover',
  }
});
