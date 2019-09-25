import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import Button from './button';

export default class App extends React.Component {
 
  constructor() {
    super() 
    this.state = {}
    this.state.CustomBold = {
      color: 'orange',
      fontWeight: 'bold',
      fontSize: 25,
      fontStyle: 'italic',
    }

    setInterval(() => {
      if(this.state.CustomBold.color == 'orange') {
        this.setState({
          CustomBold: {
            color: 'black',
            fontWeight: 'bold',
            fontSize: 25,
            fontStyle: 'italic',
          }
        })
      } else {
        this.setState({
          CustomBold: {
            color: 'orange',
            fontWeight: 'bold',
            fontSize: 25,
            fontStyle: 'italic',
          }
        })
      }
    },500)

  }
  render () {
    
    let picture = { uri : 'https://www.logolynx.com/images/logolynx/25/251d6981126467ccf898b5765c8d635c.png'}

    return (
   
      <View style = {styles.container}>
       
      <Text style={styles.bold, this.state.CustomBold}>This Is</Text> 
      <Text>{'\n'}</Text>  
      <Image source = {picture} style={{width:350, height:50}}/>
      <Text>{'\n'}</Text>  
      <Button></Button>

      </View>
    );
  }

}

 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop : 200,
  },
  bold: {
    fontWeight: 'bold',
    fontSize: 25,
    fontStyle: 'italic',
  },
});


