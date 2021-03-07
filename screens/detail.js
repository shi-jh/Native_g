import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function detail({ navigation}) {
  const rating = navigation.getParam('rating');
    return(
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam('title')}</Text>
        <Text>{navigation.getParam('body')}</Text>
        <Text>{navigation.getParam('Auth')}</Text>
        <View style={styles.rating}>
          <Text> Rating: </Text>  
            <Image source={images.ratings[rating]} />
          </View>
      </Card>   
    </View>  
    )
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4,
    borderTopWidth: 1
  },
})

