import { TextInput, StyleSheet, Image, View } from "react-native";

const Header = () => {
  return(
    <View style={styles.header}>
      <Image source={require('../../assets/logo.png')} style={styles.image}/>
      <TextInput style={styles.input}/>
      
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
      
      },
    image:{
      height:50,
      width:50,

    },
    input:{
      borderWidth:1,
      borderColor:"#777",
      padding:8,
      margin:10,
      width:200,
      height:20,


    }  
});

export default Header