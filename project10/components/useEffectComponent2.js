import { useEffect, useState } from "react";
import { Button, View } from "react-native";

const useEffectComponent2 = () =>{
  const [count,setCount] = useState(0);
  const [data, setData] = useState(100);


  useEffect(()=>{
    console.warn(count);
    
  },[count]) //works as ComponentDidUpdate; when we pass a dependency array, it will only run the effect when the values in the array change i.e. count and on first/initial render

  //can be a multiple useEffect Posssible

  useEffect(()=>{
    console.warn(data);
    
  },[data]) //works as ComponentDidUpdate; when we pass a dependency array, it will only run the effect when the values in the array change i.e. count and on first/initial render


  return (
    <View>
     <Text style={{fontSize:30}}>Life Cycle with UseEffect</Text>
     <Text style={{fontSize:30}}>CountValue: {count}</Text>
     <Button title="Press to get update value of Count" onPress={()=>setCount(count+1)}/>
     <Text style={{fontSize:30}}>Data Value: {data}</Text>
     <Button title='Data Update' onPress={()=>setData(data +1)} />
       {/* Users component; using to pass props and see effect of useEffect when it will render */}
      <Users info = {{data,count}} />
    </View>
  )
}

const Users = (props)=>{
  
  useEffect(()=>{
    console.error('run this code when "count" prop is updated')
  },[props.count]);

  useEffect(()=>{
    console.error('run this code when "data" prop is updated')
  },[props.data]);

  return(
    <View>
       <Text style={{fontSize: 22, color: 'orange'}}>User Component</Text>
       <Text style={{fontSize: 22}}>Count= {props.count}</Text>
    </View>
  )
}
export default useEffectComponent2;