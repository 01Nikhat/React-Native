import { useEffect, useState } from "react"
import { Text, View } from "react-native"

const ApiCalls = () =>{

  const [data,setData] = useState('');

  const getAPIData = async () =>{
    //api calls
    const url ='https://jsonplaceholder.typicode.com/posts/1'; 
   let result= await fetch(url);
    result = await result.json();
    setData(result);
    console.warn(result);
    
  }
  useEffect(()=>{
    getAPIData();
  },[])
  return(
  <View>
    <Text style={{fontSize:30}}>API Calls</Text>
    {data?<View>
      <Text style={{fontSize:30}}> id: {data.id} </Text>
      <Text style={{fontSize:30}}>user id: {data.userid} </Text>
      <Text style={{fontSize:30}}>Title: {data.title} </Text>
      <Text style={{fontSize:30}}>body: {data.body} </Text>
    </View>:null
      }
  </View>)
}
export default ApiCalls;