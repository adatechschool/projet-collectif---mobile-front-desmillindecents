import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import React, { useState } from 'react'

const Footer = () => {
  let data = {
    img: require('../../assets/photo_Musk.jpg'),
    name: 'Elon Musk'
  } 
  const [person, setPerson] = useState(data)

  return(
    <TouchableOpacity 
      style={ styles.footer }
      onPress={()=> {
        setPerson(
          {
            img: require('../../assets/photo_Arnault.jpg'),
            name: 'Bernard Arnault'
          }
          )
        console.log(person)
      }}>
        <View style={{ flexDirection: "row" }}>
          <View style={ styles.footerImageBlock }>
            <Image source={person.img} style={ styles.footerImage }/>  
          </View>
          <View style={ styles.footerTextBlock }>      
            <Text style={ styles.footerText }>{ person.name }</Text>
          </View> 
        </View>
    </TouchableOpacity>
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
        height: 100,
        width: 80,
      },
      footerImage: {
        height:70,
        width:70,
        borderRadius: 50,
      }
});

export default Footer;