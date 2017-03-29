/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, {Component} from 'react';
 import {AppRegistry, Text, View} from 'react-native';



 class ReactNativeFirstProject extends Component{
   render(){
     return (
       <View style={{alignItems : 'center'}}>
       <Name name='Amandeep' surname='Singh'/>
       <Name name='Pritesh' surname='Nandgaonkar'/>
      </View>
     );
   }
 }
 class Name extends Component{

  constructor(props){
    super(props);
    this.name= props.name;
    this.surname = props.surname;
  }

  returnString = (a,b) => (a+b);

  render(){
     return(
       <Text>Hello {this.returnString(this.name, this.surname)}!</Text>
     );
   }
 }
AppRegistry.registerComponent('ReactNativeFirstProject', () => ReactNativeFirstProject);
