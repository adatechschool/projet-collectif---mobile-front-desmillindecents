import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header'
import ProfilList from './src/components/ProfilList'

export default function App() {
  return (

    <View style={styles.container}>
        <Header/>
      <View>
        <Text style={{color: 'red'}}>Voilà mon nouveau texte</Text>
      </View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <ProfilList/>
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
