import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function FlatButton({text, onPress}) {
  return(
    <TouchableOpacity onPress={onPress} >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text} </Text>
      </View>
    </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
  button:{
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 9,
    backgroundColor: '#f01d71',
  },
  buttonText:{
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center'
  }
})