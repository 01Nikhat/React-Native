import {
  Text,
  View, 
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const UpTabNavigation = () =>{
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Log In' component={LogIn} />
        <Tab.Screen name='Sign Up' component={SignUp} />
        <Tab.Screen name='Others' component={Others} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

const LogIn = () =>{
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize:30, color:'red'}}>Login Karlo!!!</Text>
    </View>
  )
}

const SignUp = () =>{
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize:30, color:'green'}}>Login Karlo!!!</Text>
    </View>
  )
}

const Others = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
      <Text style={{fontSize: 22, color: 'blue'}}>I am here !!!!!</Text>
    </View>
  );
};
export default UpTabNavigation;