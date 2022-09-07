import * as React from 'react';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

const map = () =>{
    return (
      <View>
        <MapView style={styles.map} 
        initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
    provider="google"
    >
      <Marker coordinate={{
        latitude: 37.78825,
        longitude: -122.4324
      }}
      pinColor="black" 
      draggable={true}
      onDragStart={(e)=>{
        console.log("Drag Start", e.nativeEvent.coordinate)
      }}
      onDragEnd={(e)=>{
        console.log("Drag Start", e.nativeEvent.coordinate)
      }}
        >
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>
      <Marker coordinate={{
        latitude: 30.78825,
        longitude: -100.4324}} 
        ></Marker>
        <Marker coordinate={{
        latitude: 25.78825,
        longitude: -106.4324}} 
        ></Marker>
        <Marker coordinate={{
        latitude: 32.78825,
        longitude: -118.4324}} 
        ></Marker>
        <Marker coordinate={{
        latitude: 39.78825,
        longitude: -105.4324}} 
        ></Marker>
        <Circle 
        center={{
          latitude: 37.78825,
          longitude: -122.4324
      }}
      radius={1000}
        />
    </MapView>
      </View>
    );
  };

  const styles = StyleSheet.create({

    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height*0.8,
    },
  });

  export default map;