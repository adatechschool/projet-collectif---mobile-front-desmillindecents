import { TextInput, StyleSheet, Image, View } from "react-native";

const Header = () => {
  return(
    <View style={styles.header}>
      <Image source={require('../../assets/logo.png')} style={{height:50, width:50}}/>
      
    </View>
  );
}


const styles = StyleSheet.create({
    header :{
      width: 500,
      height:90,
      backgroundColor:'pink',
      alignItems:'center',
      justifyContent:'flex-end',
      
      }
});

export default Header