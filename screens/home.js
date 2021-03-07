import React,{ useState } from 'react';
import {StyleSheet, View, Text,FlatList,TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import {FontAwesome5,  Foundation } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function home({navigation}) {  
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] =useState([
    { title: 'Sound & Fury', rating: 5, Auth: "🧾 윌리엄 포크너", 
    body: `📖 Tomorrow, and tomorrow, and tomorrow,
    Creeps in this petty pace from day to day,
    To the last syllable of recorded time;
    And all our yesterdays have lighted fools
    The way to dusty death. Out, out, brief candle!
    Life's but a walking shadow, a poor player,
    That struts and frets his hour upon the stage,
    And then is heard no more. It is a tale
    Told by an idiot, full of sound and fury,
    Signifying nothing.` , key: '1'},
    { title: '황 무 지', rating:2 , Auth:"🧨 TS 엘리엇", 
    body:` 🎯  April is the cruellest month, 
    breeding Lilacs out of the dead land, 
    mixing Memory and desire, 
    stirring Dull roots with spring rain.
    Winter kept us warm, 
    covering Earth in forgetful snow, 
    feeding A little life with dried tubers.` , key: '2'},
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) =>{
      return [review, ...currentReviews]
    });
    setModalOpen(false);
  }

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='fade' >
        <TouchableWithoutFeedback onPress={ Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <FontAwesome5
              name='window-close'
              size={24}
              style={{...styles.modalToggle, ...styles.modalClose}}
              onPress={()=> setModalOpen(false)}
            />
            <ReviewForm addReview={addReview}/>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
        <Foundation
            name='page-add'
            size={24}
            style={styles.modalToggle}
            onPress={()=> setModalOpen(true)}
        />
      <FlatList
        data={reviews}
        renderItem={({item})=> (
          <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
            <Card >
              <Text style={globalStyles.titleText}> {item.title}  </Text>
              <Text style={globalStyles.titleAuth}> {item.Auth}  </Text>
            </Card>
          </TouchableOpacity>
        )}
        />      
    </View>
  )
};

const styles = StyleSheet.create({
  modalToggle:{
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'gold',
    padding: 8,
    borderRadius: 6,
    alignSelf: 'center',
  },
  modalText:{
    paddingLeft: 30,
    fontSize: 20,
  },
  modalContent:{
  flex: 1
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
})
