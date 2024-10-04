/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import EmployeeDta from './components/employeeData';
import {Text,View} from 'react-native';
import ButtonEvent from './components/ButtonEvent';


function App(): React.JSX.Element {
  
  return (
   <View>
    <Text style = {{fontSize:30,borderBottomWidth:1}}>Second Project</Text>
    <UserData />
    <EmployeeDta />
    <ButtonEvent />
   </View>
  );
}
const UserData = ()=>{
  return(
    <View>
      <Text style={{fontSize: 20}}>Name: Nikhat</Text>
      <Text style={{fontSize: 20}}>Age: 25</Text>
      <Text style={{fontSize: 20}}>Email: abc@gmail.com</Text>
    </View>
  );
}

export default App;
