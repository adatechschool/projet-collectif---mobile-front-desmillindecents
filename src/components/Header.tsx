import { TextInput, StyleSheet, Image, View } from "react-native";

const Header = () => {
  return(
    <View style={ styles.header }>
      <View style={{ flexDirection: "row" }}>
        <View style={ styles.headerImageBlock }>
          <Image source={require('../../assets/logo.png')} style={styles.headerImage}/>
        </View>
        <View style={ styles.input }>
          <TextInput/>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    header :{
      // alignItems:'center',
      // justifyContent:'flex-end',      
      backgroundColor: '#D9D9D9',
      // alignItems: 'flex-start',
      justifyContent: 'center',
      width: 430,
      height: 110,
      padding: 30,
      margin: 2,
      borderWidth: 1,
      borderColor: '#2a4944',
      },

    headerImageBlock :{
      justifyContent: 'center',
      // alignItems:'center',
      height: 100,
      width: 80,
    },

    headerImage:{
      height:70,
      width:70,

    },
    input:{
      marginLeft: 40,
      borderWidth:1,
      borderColor:"#777",
      padding:8,
      margin:10,
      width:250,
      height:40,
      marginTop: 40,
      // justifyContent: 'center',
      // alignItems:'center',
    }  
});


export default Header