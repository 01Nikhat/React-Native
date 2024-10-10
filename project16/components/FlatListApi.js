import { useEffect, useState } from "react"
import { FlatList, ScrollView, Text, View } from "react-native"

const FlatListApi = () =>{
  const [data,setData]  = useState('');

  const getAPIData = async() =>{
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const result = await fetch(url);
    const objectData = await result.json();
    setData(objectData);

  }
  useEffect(()=>{
    getAPIData();
  },[]);

  return(
    <ScrollView>
      <Text style = {{fontSize:30}}>Flat List WIth API</Text>
      {
        data.length?
        <FlatList
        data = {data}
        renderItem={({item})=>
        <View style={{borderBottomColor:"orange",borderBottomWidth:1,padding:10}}>
          <Text style={{fontSize:24, backgroundColor:"orange"}}>{item.id}</Text>
          <Text style={{fontSize:18}}>{item.title}</Text>
          <Text style={{fontSize:18}}>{item.body}</Text>
        </View>}
        />
        :null

      }

    </ScrollView>
  )
}
export default FlatListApi;