import { StyleSheet, Text, Image, View } from "react-native";
import {profilList} from './ProfilList';

const Footer = () => {
  return(
    <View>
    {
    profilList.map((l) => (
        <View style={ styles.footer }>
          <Image source={{uri:l.Image}}/>
          <Text>{l.Name}</Text>
        </View>)
    )}
    </View>
  );
}


const styles = StyleSheet.create({
    footer :{
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 500,
        height: 90,
      }
});

export default Footer;