/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 import React, {Component} from 'react';
 import {AppRegistry, StyleSheet, Text, View} from 'react-native';



 class ReactNativeFirstProject extends Component{
   render(){
     return (
       <View style={{flex: 1, alignItems : 'center'}}>
       <Name styleProperty={styles.red} name='Amandeep' surname='Singh'/>
       <Name styleProperty={styles.blue} name='Pritesh' surname='Nandgaonkar'/>
      </View>
     );
   }
 }
 class Name extends Component{

  constructor(props){
    super(props);
    this.name= props.name;
    this.surname = props.surname;
    this.state = {showTest : true};
    this.styleProperty = props.styleProperty;
  }

  returnString = (a,b) => (a+b);

  render(){
    let display = 'Hello '+ this.returnString(this.name, this.surname) + '!';
     return(
       <Text style={this.styleProperty}>{display}</Text>
     );
   }
 }

 const styles = StyleSheet.create({
    red: {
      color : 'red',
      backgroundColor: 'blue',
      flex : 1,
    },
    blue: {
      color : 'blue',
      backgroundColor: 'red',
      fontWeight : 'bold',
      fontSize : 30,
      flex : 10,
    },
 });
AppRegistry.registerComponent('ReactNativeFirstProject', () => ReactNativeFirstProject);
