import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Header({ navigation , title}) {
  const OMenu = () =>{
   navigation.openDrawer();
  }
  return(
    <ImageBackground source={require('../assets/back.png')} style={styles.header}>
      <Entypo name="menu" size={24} color="blue" style={styles.icon} onPress={OMenu}/>
      <View style={styles.headerTitle} >
        <Image source={require('../assets/connpath.png')} style={styles.backimag}/>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
  header: {
    width:'100%',
    height:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#222',
    letterSpacing: 0.5,
  },
  icon:{
    position: 'absolute',
    left: 10
  },
  headerTitle: {
    flexDirection: 'row',
  },
  backimag: {
    width: 31,
    height: 31,
    marginHorizontal: 6,
  }
})