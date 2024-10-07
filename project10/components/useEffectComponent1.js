import { useEffect, useState } from "react";
import { Button, View } from "react-native";

const useEffectComponent1 = () =>{
  const [count,setCount] = useState(0);

  useEffect(()=>{
    console.warn(count);
    
  },[]) // Initial Render (Component Did Mount), The useEffect hook runs after the component's first render. If you pass an empty dependency array [], the effect runs only once, similar to 'componentDidMount' which is a is a lifecycle method in React class components.. If you don.t put any dependecy then it will be 'render' after every 'state', 'prop' update.

  return (
    <View>
     <Text style={{fontSize:30}}>Life Cycle with UseEffect</Text>
     <Text style={{fontSize:30}}>CountValue: {count}</Text>
     <Button title="Press to get update value of Count" onPress={()=>setCount(count+1)}/>
     <Button title='Clear Count' onPress={()=>setCount(0)} />
    </View>
  )
}
export default useEffectComponent1;