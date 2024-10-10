import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native"

const ListApiCalls = () =>{
  const [data,setData] =useState('');

  const getAPIData = async() =>{
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const result = await fetch(url);
    const objectData =  await result.json();
    setData(objectData);

  }
  useEffect(()=>{
    getAPIData();
  },[]);

  return(
    <ScrollView>
      <Text style={{fontSize:30}}>LIST with API calls</Text>
      {data.length ?
      data.map((item) =>
        <View style={{padding:10,borderBottomColor:'#ccc',borderBottomWidth:1}}>
          <Text style={{fontSize:20 , backgroundColor:'#ddd'}}>id:{item.id}</Text>
          <Text style={{fontSize:20}}>Title:{item.title}</Text>
          <Text style={{fontSize:20}}>iBody:{item.body}</Text>
        </View>
      )
      : null
    }
    </ScrollView>
    
  )
}
export default ListApiCalls;