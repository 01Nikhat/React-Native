
import React, { useState } from 'react';

import {View, Text, StyleSheet} from 'react-native';

import Exstyles from './style';//using exteranl styles
/**
* 1) inline, internal and external styles in react-native
*/
const App = () => {
  
  return (
    <View>
      <Text style={{fontSize: 25, color: 'yellow', backgroundColor: 'green', marginBottom: 5}} >Inline Style in React-Native</Text>

      <Text style={styles.textBox1} >Internal Style1 in React-Native</Text>
      <Text style={[styles.textCenter, styles.textBox2]} >Internal Style2 in React-Native</Text> 
      {/* can use multiple style class in [] */}

      <Text style={Exstyles.textBox1} >External Style1 in React-Native</Text>
      <Text style={[styles.textCenter, Exstyles.textBox2]} >Exteranl Style2 in React-Native</Text>

      {/* below using internal, external and inline styles */}
      <Text style={[styles.textCenter, Exstyles.textBox2, {marginTop: 20}]} >Exteranl Style2 in 
        React-Native</Text>

    </View>
  );
};

const styles = StyleSheet.create({ //create ek object leta ha
  textBox1:{
    color: 'blue',
    fontSize: 25,
    backgroundColor: 'orange',
    marginBottom: 5,
    padding: 15,
    borderRadius: 10,
    height: 140,
    textAlignVertical: 'center', //vertically center karega
    textAlign: 'center', //horizontally center karega

    borderWidth: 3,
  },
  textBox2:{
    color: 'blue',
    fontSize: 25,
    backgroundColor: 'pink',
    marginBottom: 5,
    padding: 25,
    borderRadius: 30,
    height: 200,
    
    borderWidth: 8,
    borderColor: 'red',
  },
  textCenter:{
    textAlignVertical: 'center', //vertically center karega
    textAlign: 'center', //horizontally center karega
  },
});

export default App;
