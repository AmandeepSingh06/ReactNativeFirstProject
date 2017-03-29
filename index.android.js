/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, {Component} from 'react';
 import {AppRegistry, Text, View} from 'react-native';

 class Name extends Component{

   render(){
     return(
       <Text>Hello {this.props.name} {this.props.surname}!</Text>
     );
   }
 }

 class ReactNativeFirstProject extends Component{
   render(){
     return (
       <View style={{alignItems : 'center'}}>
        <Name name='Amandeep' surname='Singh'/>
        <Name name='Pritesh' surname='Nandgaonkar'/>
        <Name name='Harish' surname='Barge'/>
      </View>
     );
   }
 }

AppRegistry.registerComponent('ReactNativeFirstProject', () => ReactNativeFirstProject);
