/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';



function App(): React.JSX.Element {

  return (
    <View style = {styles.main}>
      <TouchableHighlight>
      <Text style = {[styles.button, styles.success]} >Button</Text>
      </TouchableHighlight>

      <TouchableHighlight>
      <Text style = {[styles.button, styles.primary]} >Button</Text>
      </TouchableHighlight>

      <TouchableHighlight>
      <Text style = {[styles.button, styles.error]} >Button</Text>
      </TouchableHighlight>


      <Button title='button'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
    flex:1
  },
 button:{
  backgroundColor:"#bbb",
  color:"#fff",
  fontSize:24,
  textAlign:'center',
  padding:10,
  borderRadius:10,
  shadowColor:'black',
  elevation:10,
  shadowOpacity:1
 },
 success:{
  backgroundColor:'green'
 },
 primary:{
  backgroundColor:'blue'
 },
 error:{
  backgroundColor:'red'
 }
});

export default App;
