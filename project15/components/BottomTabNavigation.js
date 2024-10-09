/* eslint-disable */

import {
  Text,
  View, 
} from 'react-native';


import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {

  return (
  
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Log In' component={LogIn} />
        <Tab.Screen name='Sign Up' component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>

  );
};



const LogIn = () => { //Login component
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
      <Text style={{fontSize: 22, color: 'green'}}>Log In Karle Bhai !!!!!</Text>
    </View>
  );
};


const SignUp = () => { //SignUp component
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
      <Text style={{fontSize: 22, color: 'blue'}}>Sign Up karle Bhai !!!!!</Text>
    </View>
  );
};

export default BottomTabNavigation;