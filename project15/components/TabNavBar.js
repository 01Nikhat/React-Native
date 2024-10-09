
/* eslint-disable */

import {
  Text,
  View, 
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function TabNavBar() {

  return (
  
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Log In' component={LogIn} />
        <Tab.Screen name='Sign Up' component={SignUp} />
        <Tab.Screen name='Others' component={Others} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}


const LogIn = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
      <Text style={{fontSize: 22, color: 'green'}}>Log In Karle Bhai !!!!!</Text>
    </View>
  );
};


const SignUp = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
      <Text style={{fontSize: 22, color: 'blue'}}>Sign Up karle Bhai !!!!!</Text>
    </View>
  );
};

const Others = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
      <Text style={{fontSize: 22, color: 'blue'}}>I am here !!!!!</Text>
    </View>
  );
};

export default TabNavBar;
