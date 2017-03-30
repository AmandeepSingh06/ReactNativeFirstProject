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
       <View style={{alignItems : 'center'}}>
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
    setInterval(() => {
      this.setState({showTest: !this.state.showTest});
    }, 1000);
  }

  returnString = (a,b) => (a+b);

  render(){
    let display = this.state.showTest ?'Hello '+ this.returnString(this.name, this.surname) + '!' : ' ';
     return(
       <Text style={this.styleProperty}>{display}</Text>
     );
   }
 }

 const styles = StyleSheet.create({
    red: {
      color : 'red'
    },
    blue: {
      color : 'blue',
      fontWeight : 'bold',
      fontSize : 30,
    },
 });
AppRegistry.registerComponent('ReactNativeFirstProject', () => ReactNativeFirstProject);
