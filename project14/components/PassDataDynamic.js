import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import {Button, Text,TextInput,View} from 'react-native'

const Stack = createNativeStackNavigator();
const PassDataDynamic = () =>{

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

const Home = (props) =>{
  console.warn(props.route.params);
  
  const {name,age} = props.route.params;
  
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30}}>Home Screen</Text>
      <Text style={{fontSize:30}}>Name:{props.route.params.name}</Text>
      <Text style={{fontSize:30}}>Age:{props.route.params.age}</Text>
    </View>
  )
}

const Login = (props) =>{
  const [name,setName] = useState("");
 
  const age = 25;
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30}}>Login Screen</Text>
      <TextInput  style={{fontSize:20,borderColor:'#000',borderWidth:2}}
      onChangeText={(text)=>setName(text)}
      placeholder='Enter Name'/>
      <Button title='GO To Home Page' onPress={()=>props.navigation.navigate("Home",{name:name,age:age})}/>
    </View>
  )
}
// we are making this component to pass this component as a input value 
const Header = () =>{
  return(
    <TextInput placeholder='Enter Data' />
  )
}
export default PassDataDynamic;