import React from 'react';
import {StyleSheet,Text, View } from 'react-native';
import {Button , Alert} from 'react-native';
 

export default class MyButton extends React.Component {
  render () {
    return (
      <View style = {styles.buttonStyle}>
        <Button title = "Press Me" 
        color = 'orange'
        onPress={() => alert('This button works')} />
      </View>
    );
  }

}


const styles = StyleSheet.create({
  
    buttonStyle: {
    flex: 1,
    alignItems: 'center',
  }
   
});