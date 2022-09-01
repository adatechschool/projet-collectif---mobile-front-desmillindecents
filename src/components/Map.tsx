import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

const map = () =>{
    return (
      <View>
        <MapView style={styles.map}/>
      </View>
    );
  }

  const styles = StyleSheet.create({

    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height*0.8,
    },
  });

  export default map;