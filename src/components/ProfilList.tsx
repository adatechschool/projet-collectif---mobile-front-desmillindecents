import { StyleSheet, Text, Image, View } from "react-native";
import {data} from './Data';

const ProfilList = () => {
  return(
    <View>
    {
    data.map((l) => (
        <View style={ styles.footer }>
          <Image source={{uri:l.Image}} style={ styles.Image }/>
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
      },
      Image: {
        height:70,
        width:70,
      }
});

export default ProfilList;