/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {Button,Text,View,} from 'react-native';


function App(): React.JSX.Element {
  const [name,setName] = useState("Nikhat");
  function NameChange(){
    setName("Nikki");
  }
//state use
  return (
    <View>
      
      <Text style = {{fontSize:30}}>My Name is {name}</Text>
      <Button onPress={NameChange} title='press here'></Button>
      <User name={name} />
    </View>
    
  );
}
//Props use
//In TypeScript, the User component should define a type for the props it receives. Without this, TypeScript might complain about missing type definitions.
const User = (props: { name: string }) =>{
  return(
  <View style={{backgroundColor:'green', padding:5}}>
      <Text style = {{fontSize:30}}>My Name is {props.name}</Text>
      
    </View>
  );
}



export default App;
