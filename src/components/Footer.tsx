import { StyleSheet, Text, Image, View } from "react-native";

const Footer = () => {
  return(
    <View>
        <View style={ styles.footer }>
          <Image source={require('../../assets/Photo_profil_1.png')}/>
          <Text>Name</Text>
        </View>
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