import { StyleSheet, Text, Image, View } from "react-native";

const Footer = () => {
  return(
    <View style={ styles.footer }>
        <View style={{ flexDirection: "row" }}>
          <View style={ styles.footerImageBlock }>
            <Image source={require('../../assets/Photo_profil_1.png')} style={ styles.footerImage }/>  
          </View>
          <View style={ styles.footerTextBlock }>      
            <Text style={ styles.footerText }>Name</Text>
          </View> 
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
    footer :{
        backgroundColor: '#D9D9D9',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: 430,
        height: 110,
        padding: 30,
        margin: 2,
        borderWidth: 1,
        borderColor: '#2a4944',
      },
      footerTextBlock: {
        paddingLeft: 30, 
        justifyContent: 'center',
      },
      footerText: {
        fontSize: 20,
        fontWeight: '600',
      },
      footerImageBlock: {
        justifyContent: 'center',
        height: 80,
        width: 80,
      },
      footerImage: {
        height:70,
        width:70,
      }
});


export default Footer;