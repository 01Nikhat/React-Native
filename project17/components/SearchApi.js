import { useState } from "react";
import { TextInput,View,Text } from "react-native";

const SearchApi = () =>{
  const [data,setData]= useState([]);

  const searchUser = async(text) =>{  

    const url = `http://10.0.2.2:3000/users?q=${text}`;
    const result = await fetch(url); //by default method: 'GET'
    const dataFetched = await result.json();
    if(dataFetched){ //or can use 'result' in condition
      setData(dataFetched);
    }
      console.warn(text);
      
  }
  
  return(
  <View>
    <TextInput style={{ borderColor:"skyblue",borderWidth:2,margin:15,fontSize:20}} placeholder="Search"  onChangeText={(text)=>searchUser(text)}/>
      {
        data.length ?
        data.map((item)=><View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:20}}>{item.name}</Text>
          <Text style={{fontSize:20}}>{item.age}</Text>
          <Text style={{fontSize:20}}>{item.email}</Text>
        </View>)
        : null
      }
    <Text style={{fontSize:30}}>Search Text </Text>
  </View>)
}
export default SearchApi;