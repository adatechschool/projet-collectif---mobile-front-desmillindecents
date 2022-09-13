import React, { useState } from 'react';
import MapView, { Callout, Circle, Marker, Polygon, Polyline } from 'react-native-maps';
import { StyleSheet, View, Text, Dimensions, Switch } from 'react-native';

const map = () =>{

  const [isLive, setLive] = useState(true)
  const toggleMode = () => setLive(previousState => !previousState)

  return (     
    <View> 
      <MapView style={ styles.map } 
      initialRegion={{ latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421,
      }}
      provider="google">

        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} pinColor="black" draggable={true}>               
          <Callout>
            <Text>I'm here</Text>
          </Callout>
        </Marker>

        <Marker coordinate={{ latitude: 30.78825, longitude: -100.4324 }}></Marker>
        <Marker coordinate={{ latitude: 25.78825, longitude: -106.4324 }}></Marker>
        <Marker coordinate={{ latitude: 32.78825, longitude: -118.4324 }}></Marker>
        <Marker coordinate={{ latitude: 39.78825, longitude: -105.4324 }}></Marker>

        <Polyline
          coordinates={[
            {latitude: 37.78825, longitude: -122.4324},
            {latitude: 48.862725, longitude: 2.287592}
          ]}
          strokeColor="#B24112"
          strokeWidth={4}
          geodesic={false}
        />
      </MapView>
      <View 
        style={ styles.toggleButtonZone }>
        <Text style={styles.toggleText}>History</Text>
        <Switch
          style={styles.toggleSwitch}
          thumbColor="#D9D9D9"
          trackColor={{ false: "#FFDC00", true: "#FF0000"}}
          onValueChange={toggleMode}
          value={isLive}
        />
        <Text style={styles.toggleText}>Live</Text>
      </View>
    </View>

    
  
  );
};

  const styles = StyleSheet.create({
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height*0.75,
    },
    toggleButtonZone: {
      position: 'absolute',
      flexDirection: 'row',
      paddingHorizontal: 10,
      backgroundColor: '#fff',
      opacity: 0.6
    },
    toggleText: {
      paddingTop: 13,
      color: '#2B2D2F'
    },
    toggleSwitch: {
      opacity: 0.99
    }
  });

  export default map;