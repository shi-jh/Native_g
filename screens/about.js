import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { globalStyles } from '../styles/global';

export default function about() {
  return (
    <View style={globalStyles.container}>
      <Image source={require('./connpath.png')} />
      <Text style={styles.text} > We Conn;path are ... {"\n"}
        사물과 사건을 연결하고, 융합하여 역동적이고{"\n"}
         다원적인 통찰을 위한 인공지능 DashBoard Solution </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    marginTop: 30,
    color: '#09044B',
    fontWeight: 'bold',
    fontSize: 15
  }})
