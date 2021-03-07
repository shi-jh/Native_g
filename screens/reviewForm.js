import React from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
  title: yup.string()
  .required()
  .min(2),
  body: yup.string()
  .required()
  .min(5),
  Auth: yup.string()
  .notRequired(),
  rating: yup.string()
  .required()
  .test('is-num-1-5', 'Rating is number 1-5', (val)=>{
    return parseInt(val) < 6 && parseInt(val) > 0;
  })
}); 

export default function ReviewForm({addReview}) {
  return (
    <View style={globalStyles.container }>
      <Formik 
        initialValues={{ title: '', body:'', Auth:'', rating: ''}}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) =>{
          actions.resetForm();
          addReview(values); 
        }}
      >
        {(props) => (
          <View>
            <TextInput 
              style={globalStyles.input}
              placeholder="📚 Title"
              onChangeText={props.handleChange('title')}
              onBlur={props.handleBlur('title')} 
              value={props.values.title}
            />
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
            <TextInput 
              multiline minHeight={60}
              style={globalStyles.input}
              placeholder=" Working Body"
              onChangeText={props.handleChange('body')}
              onBlur={props.handleBlur('body')}
              value={props.values.body}
            />
            <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>
            <TextInput 
              style={globalStyles.input}
              placeholder="ReView Auth"
              onChangeText={props.handleChange('Auth')}
              value={props.values.Auth}
            />
            <Text style={globalStyles.errorText}>{props.touched.Auth && props.errors.Auth}</Text>
            <TextInput 
              style={globalStyles.input}
              placeholder="ReView Rating (1~5)"
              onChangeText={props.handleChange('rating')}
              onBlur={props.handleBlur('rating')} 
              value={props.values.rating}
            />
            <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
            <FlatButton  onPress={props.handleSubmit} text='submit' />
          </View>
        )}
      </Formik>

    </View>
  )
}
