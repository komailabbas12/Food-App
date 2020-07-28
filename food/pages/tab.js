import React, { Component } from 'react';

import {StyleSheet , View , Text, TextInput , TouchableOpacity} from 'react-native';
import {Navigationcontainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import Mainscreen from './home';

const stackscreen = createStackNavigator();

import Mainscreen from './home.js';
const Stackscreen =({navigation}) =>{
    <stackscreen.Navigator>
    <stackscreen.Screen 
        name="Main"
        component={Mainscreen}
    />
</stackscreen.Navigator>
}



class tab extends Component{
    render(){
    return(
          <Navigationcontainer>
              <Stackscreen />
          </Navigationcontainer>
    )}
}
export default tab;