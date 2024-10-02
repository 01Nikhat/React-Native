import React from 'react';

//import { Text, View, Button} from 'react-native';

import {
  //Text, View, etc are components imported from react-native, and every component first letter will be in Capital letter
  Text, //behave like div
  View, //behave like label
  Button
} from 'react-native';

let name= 'Nikhat';
let email= 'abc@gmail.com';

function fruit(){
  return 'Apple';
}

const App = () => {
    let age= 25;
    //Note: we cannot write any text inside View
    //eg) <View>Hiiiii</View> will give error
    return (
      <View>
        <Text style={{fontSize: 35}}>Hello !!!!!</Text>
        <Text style={{fontSize: 25}}>I am learning React-Native</Text>
        <Text style={{fontSize: 20}}>My name is: {name}</Text>
        <Text style={{fontSize: 20}}>My email-id is: {email}</Text>
        <Text style={{fontSize: 20}}>My age is =: {age}</Text>
        <Text style={{fontSize: 20}}>My favorite fruit is: {fruit()}</Text>
        <Text style={{fontSize: 20}}>Calculation: {777+1}</Text>

        {/* we can use condition also */}
        <Text style={{fontSize: 20}}>I am: {age>=18 ? 'Adult':'Child'}</Text>

        {/* "title" is the name of button which will be displayed */}
        <Button title='Press here'></Button>
        <Text style={{fontSize: 15}}>Below is the second button</Text>
        <Button title='Press me too'></Button>
      </View>
  );
};

export default App;