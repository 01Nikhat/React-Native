import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Button, Text,TextInput,View} from 'react-native'

const Stack = createNativeStackNavigator();
const PassDataStackNav = () =>{

  const btnAction = ()=>{

  }
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
        headerTitle:()=><Button title='Left' onPress={btnAction} />,
        headerRight:()=><Header />,//instead of passing button we can pass the component and inside component whatever we want we can pass like btn ,text or textinput
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
// we are making this component to pass this component as a input value 
const Header = () =>{
  return(
    <TextInput placeholder='Enter Data' />
  )
}
export default PassDataStackNav;