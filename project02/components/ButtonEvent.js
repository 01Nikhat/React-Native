import {Button, View, Text} from 'react-native';

const fruit = ()=>{
  console.warn('Function called');
}

const getValue = (val)=>{
  // console.log(val); //it will be seen in terminal, not in simulator
  console.warn(val);
}

// onPress event handler is used to define what should happen when the user taps the button, in webApp we say click, but in mobApp we say press
const ButtonEvent = () =>{
  let val= 'Hello Noorah';
  return(
    <View>
      <Text style={{fontSize: 20}}>Button and OnPress Event: Learning</Text>
      <Button title='Press me' color={'blue'} onPress={fruit}></Button> 
      
      <Button title='Press me' color={'green'} onPress={()=>fruit()}></Button> 
      {/* Both above buttons behave same, just see the difference */}
      
      <Button title='Press me' color={'red'} onPress={()=>getValue(val)}></Button> 

      {/* Button component doesn’t support the style prop directly, see below */}
      {/* <Button title='Press Here' style={{color: green}} ></Button> */}
    </View>
  );
}

export default ButtonEvent;