import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header'
import Footer from './src/components/Footer'
import Map from './src/components/Map'
import ProfilList from './src/components/ProfilList'

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      {/* <View>
        <Text style={{color: 'red'}}>Bienvenue chez desmillindecents</Text>
      </View> */}
      <Map/>
      <StatusBar style="auto" />
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',   
  },

   footerImage: {
        height:70,
        width:70,
      }
});