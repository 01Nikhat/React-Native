/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import { Button, Text,TextInput,View,} from 'react-native';
import ClassComponents from './components/ClassComponents';

class App extends Component {
  //We can't use const,let,var in class 
  fruit =()=>{
    console.warn("nikhat");

  }
  render(): React.ReactNode {
    return (
      <View>
        <Text style= {{fontSize:30, color:'red'}}> Components use</Text>
        <TextInput placeholder='Enter Your Name'/>
        <Button title='Press Me' onPress={this.fruit}></Button>
        <ClassComponents />
      </View>
     
    );
    
  }
 
}

export default App;
