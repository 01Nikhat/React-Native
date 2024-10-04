/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [displayItem,setDisplayItem] = useState(false);

  const clearData = () =>{
    setDisplayItem(false);
    setName("");
    setEmail("");
    setPassword("");
  }
 
  return (
   <View>
    <Text style={{fontSize:30}}> Simple Form in React Native</Text>
    <TextInput 
    style={Styles.textInput}
    placeholder='Enter User Name'
    onChangeText={(text) =>setName(text)}
    value={name}/>

  
    <TextInput 
    style={Styles.textInput}
    placeholder='Enter User Email'
    onChangeText={(text) =>setEmail(text)}
    value={email}/>

    
    <TextInput 
    style={Styles.textInput}
    placeholder='Enter User Password'
    secureTextEntry={true}
    onChangeText={(text) =>setPassword(text)}
    value={password}/>
        {/* using <View> to set styles to <Button>, as Button ke sath styles nai likh sakte */}
       <View style={{marginBottom: 10}}>  
           <Button title='Print Details' color='green' onPress={()=>setDisplayItem(true)}/>
      </View>
      <Button title='Clear Data'onPress={clearData}></Button>

      <View>{
      displayItem ?
        <View >
           <Text style={{fontSize: 30}}>Below are the details:</Text>
           <Text style={{fontSize: 20}}>User name is: {name}</Text>
            <Text style={{fontSize: 20}}>Email Id is: {email}</Text>
            <Text style={{fontSize: 20}}>Password is: {password}</Text>
        </View> :''}

      </View>
   </View>
  
   
  );

}

const Styles = StyleSheet.create({
  textInput:{
    fontSize:18,
    color:"blue",
    borderWidth:2,
    borderColor:"blue",
    margin:10
  }
})


export default App;
