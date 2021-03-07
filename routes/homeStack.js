import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import Details from '../screens/detail';
import Header from '../shared/Header';
import React from 'react';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Conn;Path' />,
      }
    }
  },
  Details: {
    screen: Details,
    navigationOptions: { title: 'Item Details' }    
  }
}

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions:{
    headerTintColor: '#444', headerStyle: { backgroundColor: '#aaa', height: 69}
  }
});
export default HomeStack;