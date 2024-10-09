import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Button, Text,View} from 'react-native'

const Stack = createNativeStackNavigator();
const StackNavStyle = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator 
       screenOptions = {{ //for styling of entire stack screens
        headerStyle: {
          backgroundColor: 'blue',
        },
        headerTintColor: 'red',
        headerTitleStyle: {
            fontSize: 25,
        },
      }}>
      <Stack.Screen name='Login' component={Login} options={{
        title:"User Login",//for styling of this screen
        headerStyle:{
          backgroundColor:'skyblue',
        },
        headerTintColor:'white',
          headerTitleStyle:{
            fontSize:25
          }
        }}/>
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Home = () =>{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Home Screen</Text>
    </View>
  )
}

const Login = (props) =>{
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30}}>Login Screen</Text>
      <Button title='GO To Home Page' onPress={()=>props.navigation.navigate("Home")}/>
    </View>
  )
}
export default StackNavStyle;