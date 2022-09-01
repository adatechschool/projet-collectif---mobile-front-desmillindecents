import { StyleSheet, Image, View } from "react-native";

const Header = () => {
  return(
    <View style= {{borderColor: 'red'}}>
      <Image source={require('../../assets/logo.png')}/>
    </View>
  );
}


const styles = StyleSheet.create({
    header :{
        color: '#000',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }
});

export default Header